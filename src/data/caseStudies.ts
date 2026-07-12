export interface CaseStudy {
  slug: string;
  clientName: string;
  industry: string;
  location: string;
  logoUrl?: string; // Optional if we don't have actual logos right now
  summary: string;
  challenge: string;
  solution: string;
  timeline: string;
  impact: string;
  metrics: {
    label: string;
    value: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'techcorp-gcc-expansion',
    clientName: 'TechCorp GCC',
    industry: 'Enterprise Software',
    location: 'Coimbatore',
    summary: 'How a US-based SaaS company established a 150-person engineering hub in Coimbatore in just 45 days, achieving zero CapEx.',
    challenge: 'TechCorp needed to rapidly deploy a Global Capability Center (GCC) in Coimbatore to tap into the local engineering talent pool. Traditional commercial leasing required a 9-month lead time for IT compliance, biometric access control, and dedicated server room construction, which would delay their product roadmap significantly. Furthermore, they wanted to preserve $250,000 in capital expenditure intended for core R&D.',
    solution: 'WeeSpaces designed and deployed a custom Enterprise Managed Office across a 12,000 sq ft floorplate. The solution included dedicated dual-ISP enterprise networking, custom branding, acoustic-treated meeting pods, and strict ISO-compliant physical security perimeters.',
    timeline: '42 Days from agreement signing to operational move-in.',
    impact: 'TechCorp successfully onboarded their first cohort of 50 engineers two quarters ahead of schedule. By shifting from a CapEx model to an all-inclusive OpEx model, they preserved crucial liquid capital while maintaining the premium, secure environment required by their global compliance team.',
    metrics: [
      { label: 'Time to Market', value: '42 Days' },
      { label: 'CapEx Saved', value: '₹1.8 Cr' },
      { label: 'Seats Deployed', value: '150+' }
    ],
    testimonial: {
      quote: "The speed at which WeeSpaces delivered a fully compliant, enterprise-grade facility was unprecedented. We avoided massive sunk costs and our engineers have a workspace they genuinely love.",
      author: "Sarah Jenkins",
      role: "VP of Global Operations, TechCorp"
    }
  },
  {
    slug: 'healthsync-regional-hq',
    clientName: 'HealthSync India',
    industry: 'Healthcare Logistics',
    location: 'Kochi',
    summary: 'Scaling a regional logistics team from 15 to 85 employees seamlessly without relocating offices.',
    challenge: 'HealthSync was experiencing hyper-growth in the Kerala region. Operating out of a small traditional office, they quickly outgrew their space. Predicting headcount over the next 24 months was impossible, making a long-term 5-year commercial lease extremely risky. They needed an agile solution that could scale up (or down) month-over-month.',
    solution: 'WeeSpaces provided a hybrid Coworking and Private Office solution. HealthSync anchored their core management team in a secure Private Cabin, while utilizing hot desks and dedicated desks for their floating logistics and sales teams. As they hired new batches, they simply added seats to their monthly invoice via the WeeSpaces portal.',
    timeline: 'Ongoing agile expansion over 18 months.',
    impact: 'HealthSync expanded their workforce by 400% without ever worrying about facility management, internet upgrades, or buying new furniture. Their operational agility allowed them to dominate the regional market faster than competitors tied to static leases.',
    metrics: [
      { label: 'Headcount Growth', value: '400%' },
      { label: 'Facility Management Time', value: '0 Hours' },
      { label: 'Agility', value: 'Instant Scale' }
    ],
    testimonial: {
      quote: "WeeSpaces acts as our fractional real estate team. Whenever we need to hire 10 more people, we just send an email and the desks are ready the next morning. It's the ultimate growth hack.",
      author: "Rajiv Menon",
      role: "Regional Director, HealthSync"
    }
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(c => c.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}
