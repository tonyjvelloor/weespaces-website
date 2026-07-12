export interface ComparisonPoint {
  feature: string;
  traditional: {
    value: string;
    description?: string;
  };
  weespaces: {
    value: string;
    description?: string;
  };
}

export interface Comparison {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  prosCons: {
    traditional: { pros: string[]; cons: string[] };
    weespaces: { pros: string[]; cons: string[] };
  };
  points: ComparisonPoint[];
  faqs: { question: string; answer: string }[];
}

export const comparisons: Record<string, Comparison> = {
  'coworking-vs-traditional-office': {
    slug: 'coworking-vs-traditional-office',
    title: 'Coworking Space vs. Traditional Office',
    description: 'Compare the true costs, flexibility, and operational differences between renting a traditional office and moving into a WeeSpaces coworking space.',
    metaTitle: 'Coworking Space vs Traditional Office | WeeSpaces Compare',
    metaDescription: 'Is a coworking space better than a traditional office lease? Compare costs, lock-in periods, and amenities.',
    prosCons: {
      traditional: {
        pros: ['Complete control over branding', 'Full privacy for all areas', 'Perceived stability'],
        cons: ['High capital expenditure (CapEx)', 'Long lock-in periods (3-5 years)', 'Maintenance overhead']
      },
      weespaces: {
        pros: ['Zero CapEx on fit-outs', 'Flexible terms (monthly/yearly)', 'All-inclusive billing (internet, power, cleaning)'],
        cons: ['Shared common amenities', 'Standardized core branding']
      }
    },
    points: [
      {
        feature: 'Setup Cost (CapEx)',
        traditional: { value: '₹1,500 - ₹3,000 per sq.ft', description: 'Significant investment in interiors, furniture, and IT infrastructure.' },
        weespaces: { value: '₹0', description: 'Fully furnished, plug-and-play spaces ready from day one.' }
      },
      {
        feature: 'Lock-in Period',
        traditional: { value: '3 to 5 Years', description: 'Strict lock-ins with heavy penalties for early exit.' },
        weespaces: { value: '1 to 12 Months', description: 'Highly flexible agreements allowing you to scale up or down.' }
      },
      {
        feature: 'Operational Expenses (OpEx)',
        traditional: { value: 'Variable & High', description: 'Separate bills for electricity, internet, housekeeping, security, and maintenance.' },
        weespaces: { value: 'Fixed & Included', description: 'One single invoice covering all operational amenities.' }
      },
      {
        feature: 'Move-in Time',
        traditional: { value: '45 to 90 Days', description: 'Time lost in negotiations, interior design, and vendor management.' },
        weespaces: { value: 'Immediate (24 hours)', description: 'Sign the agreement and start working the next day.' }
      }
    ],
    faqs: [
      { question: 'Which option is cheaper for a startup?', answer: 'Coworking spaces offer significantly lower initial costs since there is zero CapEx. For a team of 10-20, coworking remains cheaper over a 3-year period when factoring in hidden maintenance and utility costs of traditional leases.' },
      { question: 'Can I get a private space in a coworking hub?', answer: 'Yes, WeeSpaces offers Private Cabins within our coworking hubs, giving you lockable, secure spaces while still enjoying shared amenities.' }
    ]
  },
  'managed-office-vs-leasing': {
    slug: 'managed-office-vs-leasing',
    title: 'Managed Office vs. Commercial Leasing',
    description: 'Discover why enterprise teams are shifting from traditional commercial real estate leasing to custom Managed Offices.',
    metaTitle: 'Managed Office vs Commercial Leasing | Enterprise Compare',
    metaDescription: 'Compare Managed Offices with Traditional Commercial Leasing. See why large teams save millions in CapEx.',
    prosCons: {
      traditional: {
        pros: ['Direct landlord relationship', 'Absolute structural control', 'Long-term asset stability'],
        cons: ['Massive upfront capital required', 'Complex vendor management', 'Inflexible footprint if team shrinks']
      },
      weespaces: {
        pros: ['Bespoke enterprise build-outs', 'Zero CapEx', 'Single point of contact for facility management'],
        cons: ['Premium operational fee', 'Dependent on operator standards']
      }
    },
    points: [
      {
        feature: 'Capital Expenditure',
        traditional: { value: 'Very High', description: 'You fund the entire interior fit-out, HVAC, and IT network.' },
        weespaces: { value: 'Zero', description: 'WeeSpaces amortizes the fit-out cost into your monthly fee.' }
      },
      {
        feature: 'Facility Management',
        traditional: { value: 'Self-Managed', description: 'You must hire and manage receptionists, cleaners, and IT support.' },
        weespaces: { value: 'Fully Managed', description: 'We handle 100% of the facility management with enterprise SLAs.' }
      },
      {
        feature: 'Time to Market',
        traditional: { value: '6 to 9 Months', description: 'Site selection, legal, design approvals, and construction.' },
        weespaces: { value: '45 to 60 Days', description: 'Rapid deployment using our established vendor network.' }
      },
      {
        feature: 'Branding',
        traditional: { value: 'Custom', description: 'Fully your brand.' },
        weespaces: { value: 'Custom', description: 'Fully white-labeled to your brand guidelines.' }
      }
    ],
    faqs: [
      { question: 'Do managed offices feel like a coworking space?', answer: 'No. A managed office is a private, dedicated floor or building explicitly designed for your company. There are no shared tenants on your floor.' },
      { question: 'How is the IT infrastructure handled?', answer: 'We build enterprise-grade IT infrastructure, including private VLANs and secure server rooms, according to your exact compliance specifications.' }
    ]
  },
  'virtual-office-vs-physical-office': {
    slug: 'virtual-office-vs-physical-office',
    title: 'Virtual Office vs. Physical Office',
    description: 'Compare the benefits of a Virtual Office for GST and MCA registration against renting a physical commercial space.',
    metaTitle: 'Virtual Office vs Physical Office | Which is better?',
    metaDescription: 'Do you need a physical office, or will a Virtual Office suffice for GST and Company Registration? Compare costs and legality.',
    prosCons: {
      traditional: {
        pros: ['Dedicated physical presence', 'Walk-in customer capabilities', 'In-person team collaboration'],
        cons: ['High monthly rent', 'Utility bills and maintenance', 'Tied to a specific geographic location']
      },
      weespaces: {
        pros: ['Extremely cost-effective (₹10k - ₹20k/year)', 'Legal compliance for GST/MCA', 'Premium business address'],
        cons: ['No dedicated daily seating', 'Meeting rooms require hourly booking']
      }
    },
    points: [
      {
        feature: 'Annual Cost',
        traditional: { value: '₹1.5L - ₹5L+', description: 'Depends heavily on city and square footage.' },
        weespaces: { value: '₹9,999 - ₹19,999/yr', description: 'A fraction of the cost for the same premium address.' }
      },
      {
        feature: 'GST & MCA Registration',
        traditional: { value: 'Valid', description: 'Rent agreement acts as proof.' },
        weespaces: { value: 'Valid', description: 'We provide NOC and required documentation for government portals.' }
      },
      {
        feature: 'Mail & Courier Handling',
        traditional: { value: 'Self-Managed', description: 'Requires a receptionist.' },
        weespaces: { value: 'Included', description: 'Our reception handles your mail and notifies you instantly.' }
      },
      {
        feature: 'Workspace Usage',
        traditional: { value: '24/7 Access', description: 'Permanent dedicated space.' },
        weespaces: { value: 'On-Demand', description: 'Book meeting rooms or desks only when needed.' }
      }
    ],
    faqs: [
      { question: 'Is a Virtual Office legal for a Private Limited Company?', answer: 'Yes, a Virtual Office is 100% legal for registering a Pvt Ltd company with the MCA and obtaining a GST number in India.' },
      { question: 'Can I meet clients at my Virtual Office address?', answer: 'Yes, WeeSpaces Virtual Office plans include meeting room credits or discounted access, allowing you to host clients at your registered premium address.' }
    ]
  }
};
