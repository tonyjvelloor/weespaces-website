import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // 1. Extract Event Model Data
    const { lead, content, marketing, session, technical } = payload;

    if (!lead || !lead.name || !lead.phone) {
      return NextResponse.json({ error: 'Missing required lead details' }, { status: 400 });
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
    const sheetsWebhook = process.env.GOOGLE_SHEET_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycby-ZZi3pA2o7oW_i0ESKH3qAPc4UT2KZSfTQcGCNxk5a1q0AV3Jq7KSeEdxWqCAhViF/exec";
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
        redirect: 'manual'
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
