import { NextResponse } from 'next/server';

export interface CustomerEvent {
  event_type: 'calculator_used' | 'finder_completed' | 'gst_checker_completed' | 'case_study_view' | 'page_view';
  session_id: string; // From local storage/cookie
  lead_id?: string; // Optional if they haven't converted yet
  tool_used?: string;
  city?: string;
  service?: string;
  utm_source?: string;
  utm_campaign?: string;
  metadata?: any;
}

export async function POST(request: Request) {
  try {
    const event: CustomerEvent = await request.json();
    
    // In a real implementation, you would write this to a database (e.g., PostgreSQL, BigQuery, or HubSpot Custom Events)
    // For this sprint, we are building the intelligence layer contract.
    const event_time = new Date().toISOString();
    
    console.log(`[EVENT STREAM] ${event_time} - ${event.event_type} logged for session ${event.session_id}`);
    if (event.metadata) {
      console.log(`[EVENT META]`, event.metadata);
    }

    return NextResponse.json({ success: true, recorded_at: event_time });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid event payload' }, { status: 400 });
  }
}
