import { NextResponse } from 'next/server';

// Simple in-memory rate limiter for serverless environment
// Note: In Vercel, this is per-instance, but still deters rapid automated spam.
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 5; // max 5 requests
const RATE_LIMIT_WINDOW = 60000; // 1 minute

export async function POST(request: Request) {
  try {
    // 0. Basic Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const clientRecord = rateLimitMap.get(ip);

    if (clientRecord) {
      if (now - clientRecord.lastReset < RATE_LIMIT_WINDOW) {
        if (clientRecord.count >= RATE_LIMIT) {
          console.warn(`[Lead API] Rate limit exceeded for IP: ${ip}`);
          return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }
        clientRecord.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, lastReset: now });
    }

    const payload = await request.json();

    // 1. Server-Side reCAPTCHA Verification
    const recaptchaToken = payload.recaptchaToken;
    if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY && recaptchaToken !== 'stub_token') {
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
      const recaptchaResponse = await fetch(verifyUrl, { method: 'POST' });
      const recaptchaData = await recaptchaResponse.json();
      
      if (!recaptchaData.success || recaptchaData.score < 0.5) {
        console.warn(`[Lead API] Bot detected by reCAPTCHA. Score: ${recaptchaData.score}`);
        return NextResponse.json({ error: 'Failed reCAPTCHA verification' }, { status: 400 });
      }
    }

    // 2. Extract Event Model Data
    const { lead, content, marketing, session, technical } = payload;

    // 3. Strict Manual Validation
    if (!lead || typeof lead !== 'object') {
      return NextResponse.json({ error: 'Invalid payload structure' }, { status: 400 });
    }

    const name = String(lead.name || '').trim();
    const phone = String(lead.phone || '').trim();

    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
    }

    if (!phone || phone.length < 10 || phone.length > 15 || !/^[0-9+]+$/.test(phone)) {
      return NextResponse.json({ error: 'Invalid phone number format' }, { status: 400 });
    }

    // 2. Dynamic Lead Scoring
    let score = 0;
    
    // Team Size (More people = higher score)
    const teamSize = lead.teamSize || '';
    if (teamSize.includes('20+')) score += 30;
    else if (teamSize.includes('6')) score += 20;
    else if (teamSize.includes('2')) score += 10;
    else score += 5; // 1 person

    // City Priority
    const city = content?.city || lead.location || '';
    if (['kochi', 'trivandrum', 'coimbatore', 'calicut'].includes(city.toLowerCase())) {
      score += 15;
    }

    // Service Intent
    const service = content?.pageType || lead.requirement || '';
    if (service === 'registration') score += 25;
    else if (service === 'Virtual Office' || service === 'Private Office') score += 20;
    else score += 10;

    // Timeline
    const timeline = lead.timeline || '';
    if (timeline.includes('Immediate')) score += 20;
    else if (timeline.includes('1 Month')) score += 10;
    
    // Engagement
    if (session?.returning) score += 10;
    if (session?.journey && session.journey.length > 3) score += 5;

    // Determine Temperature
    let temperature = 'Cold';
    if (score >= 61) temperature = 'Hot';
    else if (score >= 31) temperature = 'Warm';

    const enrichedLead = {
      ...payload,
      scoring: {
        score,
        temperature
      },
      processedAt: new Date().toISOString()
    };

    // Send to Google Sheets Webhook
    const sheetsWebhook = process.env.GOOGLE_SHEET_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbw_5a5IhlPBZvP3e4vCOoaBmLGpDXnKBx7QWogRmwn3rd_dsBlLTlwziFXPkzay9vpD/exec";
    if (sheetsWebhook) {
      await fetch(sheetsWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: lead.name,
          phone: lead.phone,
          email: lead.email || '',
          source: `Main Form - ${content?.pageType || 'Unknown'} - ${lead.location || 'Unknown'}`,
          requirement: lead.requirement || '',
          teamSize: lead.teamSize || '',
          location: lead.location || '',
          budget: lead.budget || '',
          timeline: lead.timeline || '',
          timestamp: new Date().toISOString()
        }),
      }).catch(err => console.error("Failed to push to Google Sheets:", err));
    }

    console.log('[Lead API V2] New Lead Captured:', JSON.stringify(enrichedLead, null, 2));

    return NextResponse.json({ 
      success: true, 
      message: 'Lead captured successfully',
      id: `lead_${Date.now()}`
    });

  } catch (error) {
    console.error('[Lead API V2] Error processing lead:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
