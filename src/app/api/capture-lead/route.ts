import { NextResponse } from 'next/server';

// Simple in-memory rate limiter for serverless environment
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
          console.warn(`[Capture Lead API] Rate limit exceeded for IP: ${ip}`);
          return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }
        clientRecord.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, lastReset: now });
    }

    const body = await request.json();

    // 1. Server-Side reCAPTCHA Verification
    const recaptchaToken = body.recaptchaToken;
    if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY && recaptchaToken !== 'stub_token') {
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
      const recaptchaResponse = await fetch(verifyUrl, { method: 'POST' });
      const recaptchaData = await recaptchaResponse.json();
      
      if (!recaptchaData.success || recaptchaData.score < 0.5) {
        console.warn(`[Capture Lead API] Bot detected by reCAPTCHA. Score: ${recaptchaData.score}`);
        return NextResponse.json({ error: 'Failed reCAPTCHA verification' }, { status: 400 });
      }
    }

    // 2. Strict Manual Validation
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid payload structure' }, { status: 400 });
    }

    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();

    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
    }

    if (!phone || phone.length < 10 || phone.length > 15 || !/^[0-9+]+$/.test(phone)) {
      return NextResponse.json({ error: 'Invalid phone number format' }, { status: 400 });
    }

    const promises = [];

    // 1. Google Sheets Webhook
    const sheetsWebhook = process.env.GOOGLE_SHEET_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbw_5a5IhlPBZvP3e4vCOoaBmLGpDXnKBx7QWogRmwn3rd_dsBlLTlwziFXPkzay9vpD/exec";
    if (sheetsWebhook) {
      promises.push(
        fetch(sheetsWebhook, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: body.name,
            phone: body.phone,
            email: body.email || '',
            source: body.source,
            requirement: body.requirement || '',
            teamSize: body.teamSize || '',
            location: body.location || '',
            budget: body.budget || '',
            timeline: body.timeline || '',
            timestamp: new Date().toISOString()
          })
        })
        .then(res => {
          if (res.status >= 400) {
            console.error(`Google Sheets Webhook failed with status: ${res.status}`);
          }
        })
        .catch(err => console.error("Failed to push to Google Sheets Webhook:", err))
      );
    }

    // 2. Send Email Notification
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;

    if (resendApiKey && notificationEmail) {
      promises.push(
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'WeeSpaces Leads <onboarding@resend.dev>',
            to: notificationEmail,
            subject: `New Lead: ${body.name} (${body.source})`,
            html: `
              <h2>New Lead Captured!</h2>
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Phone:</strong> ${body.phone}</p>
              <p><strong>Source:</strong> ${body.source}</p>
              <p><strong>Requirement:</strong> ${body.requirement || 'N/A'}</p>
              <p><strong>Team Size:</strong> ${body.teamSize || 'N/A'}</p>
              <p><strong>Location Pref:</strong> ${body.location || 'N/A'}</p>
              <p><strong>Budget:</strong> ${body.budget || 'N/A'}</p>
              <p><strong>Timeline:</strong> ${body.timeline || 'N/A'}</p>
              <br/>
              <p>This lead has also been saved to your Google Sheet.</p>
            `
          })
        }).catch(err => console.error("Failed to send email notification:", err))
      );
    }

    // 3. Try forwarding to Growth OS
    const coworkingOsUrl = process.env.COWORKING_OS_URL;
    const apiKey = process.env.COWORKING_OS_API_KEY;

    if (coworkingOsUrl && apiKey) {
      promises.push(
        fetch(`${coworkingOsUrl}/api/leads/inbound`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify(body)
        }).catch(err => console.error("Growth OS push failed:", err))
      );
    } else {
      console.log("Skipping Growth OS: Missing COWORKING_OS_URL or API KEY");
    }

    // Wait for all external requests to complete before returning response
    await Promise.allSettled(promises);

    return NextResponse.json({ success: true }, { status: 201 });

  } catch (err: any) {
    console.error('Lead proxy error:', err);
    return NextResponse.json({ error: 'Internal Server Error', details: err.message }, { status: 500 });
  }
}
