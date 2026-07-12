import { NextResponse } from 'next/server';

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  company?: string;
  session_id: string; // Linking back to Customer Intelligence events
  
  // Intelligence Signals
  teamSize?: number;
  budget?: string;
  timeline?: string;
  industry?: string;
  serviceInterest?: string;
  preferredCity?: string;
  
  source?: string;
}

export async function POST(request: Request) {
  try {
    const payload: LeadPayload = await request.json();
    
    // 1. Calculate Lead Score (0-100)
    let score = 20; // Base score for filling out a form
    
    if (payload.teamSize && payload.teamSize > 10) score += 30;
    else if (payload.teamSize && payload.teamSize >= 5) score += 15;

    if (payload.timeline === 'ASAP' || payload.timeline === '< 1 Month') score += 20;
    if (payload.industry && ['Tech', 'Manufacturing', 'SaaS', 'Finance'].includes(payload.industry)) score += 10;
    if (payload.serviceInterest === 'Enterprise Office') score += 20;

    // 2. Intelligent Routing & Tagging
    let owner = 'General Sales Team';
    let priority = 'Normal';
    let sla = '24 hours';
    const tags: string[] = [];

    if (payload.preferredCity) tags.push(payload.preferredCity);
    if (payload.serviceInterest) tags.push(payload.serviceInterest);
    if (payload.teamSize) tags.push(`${payload.teamSize} Seats`);

    if (score >= 70 || (payload.teamSize && payload.teamSize >= 50)) {
       owner = 'Enterprise Sales Desk';
       priority = 'Hot';
       sla = '15 minutes';
    } else if (payload.serviceInterest === 'Virtual Office') {
       owner = 'Virtual Office Support';
       priority = 'Normal';
       sla = '4 hours';
    }

    const intelligenceEngineResult = {
      lead_id: `LD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      processed_at: new Date().toISOString(),
      raw_payload: payload,
      intelligence: {
        score,
        priority,
        owner,
        sla,
        tags
      }
    };

    console.log(`[LEAD ROUTER] Processed Lead: ${intelligenceEngineResult.lead_id} | Score: ${score} | Assigned To: ${owner}`);

    // In production, we would push this intelligence object to HubSpot / Salesforce here.
    
    return NextResponse.json({ success: true, ...intelligenceEngineResult });

  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid lead payload' }, { status: 400 });
  }
}
