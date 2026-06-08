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
    return NextResponse.json(data, { status: 201 });

  } catch (err: any) {
    console.error('Lead proxy error:', err);
    return NextResponse.json({ error: 'Internal Server Error', details: err.message }, { status: 500 });
  }
}
