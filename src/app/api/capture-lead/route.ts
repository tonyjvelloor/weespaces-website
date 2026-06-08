import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const coworkingOsUrl = process.env.COWORKING_OS_URL;
    const apiKey = process.env.COWORKING_OS_API_KEY;

    if (!coworkingOsUrl || !apiKey) {
      console.error("Missing Coworking OS configuration");
      // Fallback response so we don't break the frontend immediately if misconfigured
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Forward the request to the Growth OS inbound leads webhook
    const response = await fetch(`${coworkingOsUrl}/api/leads/inbound`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Growth OS responded with error:", response.status, errorData);
      return NextResponse.json(
        { error: 'Failed to capture lead in Growth OS' },
        { status: response.status }
      );
    }

    const data = await response.json();

    // 2. Send Email Notification (Fire and forget, don't await/block the response)
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;

    if (resendApiKey && notificationEmail) {
      // Send asynchronously to avoid slowing down the user's Thank You page redirect
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
            <p><strong>Source/Branch:</strong> ${body.source}</p>
            <br/>
            <p>This lead has also been saved to your Growth OS.</p>
          `
        })
      }).catch(err => console.error("Failed to send email notification:", err));
    }

    return NextResponse.json(data, { status: 201 });

  } catch (err: any) {
    console.error('Lead proxy error:', err);
    return NextResponse.json({ error: 'Internal Server Error', details: err.message }, { status: 500 });
  }
}
