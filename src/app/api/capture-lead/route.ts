import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Google Sheets Webhook Fallback (Fire and forget)
    const sheetsWebhook = process.env.GOOGLE_SHEET_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycby-ZZi3pA2o7oW_i0ESKH3qAPc4UT2KZSfTQcGCNxk5a1q0AV3Jq7KSeEdxWqCAhViF/exec";
    if (sheetsWebhook) {
      fetch(sheetsWebhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: body.name,
          phone: body.phone,
          source: body.source,
          timestamp: new Date().toISOString()
        })
      }).catch(err => console.error("Failed to push to Google Sheets Webhook:", err));
    }

    // 2. Send Email Notification (Fire and forget)
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;

    if (resendApiKey && notificationEmail) {
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
            <p>This lead has also been saved to your Google Sheet.</p>
          `
        })
      }).catch(err => console.error("Failed to send email notification:", err));
    }

    // 3. Try forwarding to Growth OS, but don't fail if it's missing or fails
    const coworkingOsUrl = process.env.COWORKING_OS_URL;
    const apiKey = process.env.COWORKING_OS_API_KEY;

    if (coworkingOsUrl && apiKey) {
      fetch(`${coworkingOsUrl}/api/leads/inbound`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(body)
      }).catch(err => console.error("Growth OS push failed:", err));
    } else {
      console.log("Skipping Growth OS: Missing COWORKING_OS_URL or API KEY");
    }

    // Always return success if we reached here, because Google Sheets and Email were triggered
    return NextResponse.json({ success: true }, { status: 201 });

  } catch (err: any) {
    console.error('Lead proxy error:', err);
    return NextResponse.json({ error: 'Internal Server Error', details: err.message }, { status: 500 });
  }
}
