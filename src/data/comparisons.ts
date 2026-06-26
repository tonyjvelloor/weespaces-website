export type Comparison = {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  optionA: {
    name: string;
    pros: string[];
    cons: string[];
    idealFor: string;
  };
  optionB: {
    name: string;
    pros: string[];
    cons: string[];
    idealFor: string;
  };
  verdict: string;
  faqs: { question: string; answer: string }[];
};

export const comparisons: Comparison[] = [
  {
    id: 'coworking-vs-traditional',
    slug: 'coworking-vs-traditional-office',
    title: 'Coworking Space vs Traditional Office',
    shortDesc: 'Compare the costs, flexibility, and setup time between flexible coworking and traditional commercial leasing.',
    optionA: {
      name: 'Coworking Space',
      pros: [
        'Zero upfront capital expenditure (CapEx)',
        'Plug-and-play setup—move in tomorrow',
        'Flexible month-to-month contracts',
        'All-inclusive pricing (utilities, internet, cleaning included)'
      ],
      cons: [
        'Less privacy in open areas (unless renting a private cabin)',
        'Limited layout customization'
      ],
      idealFor: 'Startups, freelancers, remote teams, and SMEs looking for agility and low risk.'
    },
    optionB: {
      name: 'Traditional Office',
      pros: [
        'Complete control over branding and layout',
        'Absolute privacy for all operations',
        'Predictable long-term costs'
      ],
      cons: [
        'Heavy upfront deposit (often 6-10 months rent)',
        'Long lock-in periods (3-5 years)',
        'Hidden operational costs (maintenance, housekeeping, internet)'
      ],
      idealFor: 'Large enterprises with highly specific security/layout needs and predictable headcount.'
    },
    verdict: 'For 90% of modern businesses with fewer than 50 employees, the agility and cost savings of a coworking or managed space far outweigh the benefits of a traditional lease.',
    faqs: [
      {
        question: 'Which option is actually cheaper?',
        answer: 'While traditional rent per square foot seems cheaper on paper, when you factor in deposits, fit-out costs, internet, electricity, and housekeeping, coworking spaces are typically 20-30% cheaper over a 2-year horizon.'
      },
      {
        question: 'Can I get privacy in a coworking space?',
        answer: 'Yes! Modern coworking spaces offer private, lockable cabins that provide the same privacy as a traditional office, but with shared amenities like cafeterias and meeting rooms.'
      }
    ]
  },
  {
    id: 'managed-vs-leasing',
    slug: 'managed-office-vs-leasing',
    title: 'Managed Office vs Traditional Leasing',
    shortDesc: 'Understand why enterprises are shifting from traditional commercial leases to fully managed office spaces.',
    optionA: {
      name: 'Managed Office',
      pros: [
        'Custom built to your brand and layout specifications',
        'Zero CapEx—fit-outs are amortized or covered by the operator',
        'Single monthly invoice covering rent, operations, and maintenance',
        'Dedicated secure IT infrastructure'
      ],
      cons: [
        'Slightly higher monthly OpEx compared to raw leased space',
        'Usually requires a minimum commitment of 1-2 years (though much less than traditional 5-year lock-ins)'
      ],
      idealFor: 'Mid-market to enterprise companies (20-500+ employees) wanting a custom headquarters without the operational headache.'
    },
    optionB: {
      name: 'Traditional Leasing',
      pros: [
        'Direct relationship with the landlord',
        'Long-term stability (5-9 year leases)',
        'Potentially lower monthly rent if you manage all operations yourself'
      ],
      cons: [
        'Massive upfront costs for interior fit-outs',
        'Requires dedicated facilities management staff',
        'Inflexible if the company needs to downsize or rapidly expand'
      ],
      idealFor: 'Massive corporations planning to stay in the exact same footprint for 10+ years.'
    },
    verdict: 'Managed offices offer the best of both worlds: the customization and privacy of a traditional lease, but the flexibility and zero-CapEx model of coworking.',
    faqs: [
      {
        question: 'What is the difference between a managed office and a private office?',
        answer: 'A private office is an enclosed space within a larger coworking facility. A managed office is an entirely custom-built workspace (often an entire floor or building) managed exclusively for one company.'
      },
      {
        question: 'Do I get to choose the interior design?',
        answer: 'Absolutely. With a managed office, the space is designed and built exactly to your brand guidelines before you move in.'
      }
    ]
  },
  {
    id: 'private-vs-shared',
    slug: 'private-office-vs-shared-office',
    title: 'Private Office vs Shared Office',
    shortDesc: 'Decide whether your team needs an enclosed private cabin or can thrive in an open shared workspace.',
    optionA: {
      name: 'Private Office',
      pros: [
        'Enclosed, secure, and lockable space',
        'Acoustic privacy for meetings and calls',
        'Ability to store equipment securely overnight',
        'Team cohesion in a dedicated environment'
      ],
      cons: [
        'More expensive per desk than open seating',
        'Requires booking the right size for your current team'
      ],
      idealFor: 'Teams of 3+ people handling sensitive information, taking frequent calls, or needing dedicated team space.'
    },
    optionB: {
      name: 'Shared Office (Hot/Dedicated Desks)',
      pros: [
        'Highly cost-effective',
        'Maximum networking opportunities with other companies',
        'Ultimate flexibility to scale desk-by-desk'
      ],
      cons: [
        'Can be noisy during peak hours',
        'Lack of privacy for confidential conversations (must use phone booths)'
      ],
      idealFor: 'Freelancers, solopreneurs, and remote workers who want a professional environment without the cost of a private cabin.'
    },
    verdict: 'If you have a team of 3 or more, a private office is almost always the better choice for productivity. For individuals, shared desks are perfect.',
    faqs: [
      {
        question: 'Can shared office users access meeting rooms?',
        answer: 'Yes, all our shared office members get monthly credits to book private meeting rooms for client pitches or confidential calls.'
      },
      {
        question: 'Is it safe to leave my monitors in a shared office?',
        answer: 'If you rent a Dedicated Desk, you can leave your monitors and equipment. Hot Desk users must clear their desks at the end of the day.'
      }
    ]
  },
  {
    id: 'virtual-vs-physical',
    slug: 'virtual-office-vs-physical-office',
    title: 'Virtual Office vs Physical Office',
    shortDesc: 'Compare the benefits of a premium business address for registration versus a physical workspace.',
    optionA: {
      name: 'Virtual Office',
      pros: [
        'Extremely low monthly cost',
        'Provides a premium commercial address for GST/Company registration',
        'Includes mail and package handling',
        'Professional reception to greet your occasional visitors'
      ],
      cons: [
        'No dedicated physical workspace to work from daily',
        'Must pay extra or use credits for meeting rooms'
      ],
      idealFor: 'Remote-first companies, e-commerce sellers, and businesses expanding to a new city without relocating staff.'
    },
    optionB: {
      name: 'Physical Office',
      pros: [
        'A dedicated place for deep work and collaboration',
        'Full access to all amenities (internet, pantry, events)',
        'Easier to build company culture'
      ],
      cons: [
        'Higher monthly financial commitment',
        'Requires commuting'
      ],
      idealFor: 'Teams that require in-person collaboration, client meetings, and a structured work environment.'
    },
    verdict: 'If your entire team works remotely but you need to comply with government regulations (like GST) or want a professional front, a Virtual Office is a no-brainer.',
    faqs: [
      {
        question: 'Can I use a Virtual Office for GST registration?',
        answer: 'Yes! Our Virtual Office plans provide all the necessary NOCs, utility bills, and rental agreements required by authorities for seamless GST and company registration.'
      },
      {
        question: 'Can I upgrade from a Virtual Office to a Physical Office later?',
        answer: 'Absolutely. Many companies start with a Virtual Office to test a market and upgrade to a physical private office when they hire local staff.'
      }
    ]
  },
  {
    id: 'weespaces-vs-regus',
    slug: 'weespaces-vs-regus-alternative',
    title: 'WeeSpaces vs Regus',
    shortDesc: 'Looking for a Regus alternative in Kerala or Tamil Nadu? Compare the global giant with the premier local operator.',
    optionA: {
      name: 'WeeSpaces',
      pros: [
        '100% Transparent Pricing—no hidden fees for internet, tea/coffee, or meeting rooms',
        'Deep local expertise in South Indian markets (Kochi, Trivandrum, Calicut, Coimbatore)',
        'Highly agile contracts with easy exit clauses',
        'Direct relationship with the founders and local operations team'
      ],
      cons: [
        'Only present in South India (currently 4 cities)',
        'No global passport access'
      ],
      idealFor: 'Startups, SMEs, and enterprise teams looking for premium quality without the rigid bureaucracy and hidden costs of a global operator.'
    },
    optionB: {
      name: 'Regus',
      pros: [
        'Massive global network with thousands of locations worldwide',
        'Strong brand recognition for traditional corporate clients',
        'Standardized global processes'
      ],
      cons: [
        'Notorious for hidden fees (e.g., charging extra for internet, coffee, or printing)',
        'Rigid, inflexible contracts that are difficult to terminate',
        'Support tickets often go to global call centers rather than local staff'
      ],
      idealFor: 'Multinational executives who travel globally 300 days a year and need lounge access everywhere.'
    },
    verdict: 'If you are building a team in Kerala or Tamil Nadu, WeeSpaces offers a vastly superior, transparent, and personalized experience compared to the rigid, fee-heavy model of global aggregators like Regus.',
    faqs: [
      {
        question: 'Is WeeSpaces cheaper than Regus?',
        answer: 'Yes. While base prices might look similar, WeeSpaces includes high-speed internet, premium coffee, and meeting room credits in the base price. Regus often charges these as hidden add-ons, making their total cost of ownership 20-40% higher.'
      },
      {
        question: 'Does WeeSpaces offer the same quality as global brands?',
        answer: 'Absolutely. We manage Grade-A commercial real estate with enterprise-grade IT infrastructure, biometric security, and ergonomic furnishings that rival or exceed global standards.'
      }
    ]
  },
  {
    id: 'weespaces-vs-cofynd',
    slug: 'weespaces-vs-cofynd-alternative',
    title: 'WeeSpaces vs CoFynd',
    shortDesc: 'Understand the difference between booking through an aggregator broker like CoFynd versus directly with an operator like WeeSpaces.',
    optionA: {
      name: 'WeeSpaces (Operator)',
      pros: [
        'Direct operator—we design, build, and manage the spaces ourselves',
        'Direct negotiation—no middleman margins means better pricing for you',
        'Immediate local support and facility management',
        'Guaranteed quality control across all our locations'
      ],
      cons: [
        'Limited to our specific premium locations in South India'
      ],
      idealFor: 'Companies that want a direct relationship, the best possible price, and guaranteed premium quality.'
    },
    optionB: {
      name: 'CoFynd (Aggregator)',
      pros: [
        'Massive inventory showing hundreds of different spaces across India',
        'Good for initial market research to see what exists',
        'Single platform to view multiple options'
      ],
      cons: [
        'They are a broker/aggregator—they do not own or manage the spaces',
        'You deal with a middleman, which can slow down negotiations and support',
        'Quality varies wildly since they list 3rd party spaces'
      ],
      idealFor: 'People who want to browse every single budget option in a city before making a decision.'
    },
    verdict: 'Use aggregators like CoFynd to research the market, but always book directly with a premium operator like WeeSpaces to secure the best rates, direct support, and guaranteed quality.',
    faqs: [
      {
        question: 'Does CoFynd charge a fee?',
        answer: 'Aggregators typically take a commission from the operator. By dealing directly with WeeSpaces, you avoid middleman margins and secure more flexible terms.'
      },
      {
        question: 'Who manages the workspace if I book through an aggregator?',
        answer: 'The local operator manages it. The aggregator simply acts as a booking agent. If the internet goes down, the aggregator cannot fix it—you still rely on the local operator.'
      }
    ]
  },
  {
    id: 'weespaces-vs-flexo',
    slug: 'weespaces-vs-flexo-alternative',
    title: 'WeeSpaces vs Flexo',
    shortDesc: 'Comparing direct premium workspace management against Flexo\'s aggregation model.',
    optionA: {
      name: 'WeeSpaces (Operator)',
      pros: [
        'We have full control over the IT infrastructure, security, and cleaning',
        'Direct SLA guarantees without third-party dependencies',
        'Custom fit-outs handled by our internal design team'
      ],
      cons: [
        'Inventory is limited to our proprietary network in South India'
      ],
      idealFor: 'Enterprises and startups that require strict SLA guarantees and direct accountability.'
    },
    optionB: {
      name: 'Flexo (Aggregator)',
      pros: [
        'Wide coverage across multiple cities in India',
        'Platform to compare different operators side-by-side'
      ],
      cons: [
        'No direct control over the quality of the spaces they list',
        'Brokers can add an unnecessary layer of communication',
        'Pricing may not reflect direct-to-operator discounts'
      ],
      idealFor: 'Companies looking to quickly scan the market across multiple operators.'
    },
    verdict: 'If you value direct accountability, stringent security, and enterprise-grade infrastructure, partnering directly with the operator (WeeSpaces) is always superior to using a broker (Flexo).',
    faqs: [
      {
        question: 'Why should I book directly with WeeSpaces instead of Flexo?',
        answer: 'Booking directly ensures you get the lowest possible price, direct communication for custom fit-outs, and immediate support without navigating through a broker.'
      }
    ]
  },
  {
    id: 'weespaces-vs-coworker',
    slug: 'weespaces-vs-coworker-alternative',
    title: 'WeeSpaces vs Coworker.com',
    shortDesc: 'Why direct operator partnerships beat global directory listings for enterprise teams.',
    optionA: {
      name: 'WeeSpaces (Operator)',
      pros: [
        'End-to-end workspace experience management',
        'Transparent, localized pricing in INR without conversion markups',
        'Dedicated community managers at every location'
      ],
      cons: [
        'Does not offer day passes globally'
      ],
      idealFor: 'Local and international teams setting up dedicated hubs in Kerala or Tamil Nadu.'
    },
    optionB: {
      name: 'Coworker.com (Directory)',
      pros: [
        'The largest global directory of coworking spaces',
        'Great for digital nomads looking for day passes globally'
      ],
      cons: [
        'Listings are often outdated or lack detailed enterprise pricing',
        'Not designed for complex enterprise requirements or custom build-outs',
        'They do not manage the facilities they list'
      ],
      idealFor: 'Digital nomads traveling internationally who need a desk for a few days.'
    },
    verdict: 'Coworker is a great global directory for nomads, but for permanent, premium enterprise setups in South India, working directly with WeeSpaces provides unmatched value and reliability.',
    faqs: [
      {
        question: 'Can I find WeeSpaces on Coworker.com?',
        answer: 'While you may find our listings on various directories, the most accurate availability, custom enterprise quotes, and lowest rates are only available directly through our website.'
      }
    ]
  }
];
