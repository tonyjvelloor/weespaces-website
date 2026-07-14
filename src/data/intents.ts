export type IntentData = {
  id: string;
  name: string;
  slug: string;
  shortDesc: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
};

export const intents: Record<string, IntentData> = {
  'startups': {
    id: 'startups',
    name: 'Startups',
    slug: 'startups',
    shortDesc: 'Flexible and scalable workspaces designed for fast-growing startups. No long-term lock-ins.',
    benefits: [
      'Scale your team size up or down without penalty.',
      'Access premium meeting rooms for investor pitches.',
      'Connect with a vibrant community of founders and mentors.',
      'Enterprise-grade IT infrastructure included.'
    ],
    faqs: [
      {
        question: 'Can I register my startup using this address?',
        answer: 'Yes! Our Virtual Office and Coworking plans provide a premium business address that can be used for incorporation and ROC compliance.'
      },
      {
        question: 'Do you offer flexible terms for early-stage startups?',
        answer: 'Absolutely. We offer month-to-month flexibility so you aren’t locked into traditional multi-year commercial leases.'
      }
    ]
  },
  'gst-registration': {
    id: 'gst-registration',
    name: 'GST Registration',
    slug: 'gst-registration',
    shortDesc: 'Hassle-free GST registration with a premium commercial address. Get all compliance documents instantly.',
    benefits: [
      'NOC and Utility Bills provided for seamless registration.',
      'Dedicated signage available for compliance checks.',
      'Premium commercial address in a recognized business district.',
      'Mail and courier handling for official tax correspondence.'
    ],
    faqs: [
      {
        question: 'Is a Virtual Office legal for GST registration?',
        answer: 'Yes, it is 100% legal. The GST department allows businesses to use a shared space or virtual office as their Principal Place of Business, provided you have the correct documentation (NOC and Utility Bill), which we provide.'
      },
      {
        question: 'How long does it take to get the documents?',
        answer: 'Once your onboarding is complete, we provide the NOC and utility bills within 24 hours so you can file your GST application immediately.'
      }
    ]
  },
  'private-limited-company': {
    id: 'private-limited-company',
    name: 'Private Limited Company',
    slug: 'private-limited-company',
    shortDesc: 'Establish your Private Limited Company with a prestigious corporate address. Full ROC compliance support.',
    benefits: [
      'Premium corporate address for your Certificate of Incorporation.',
      'Professional receptionist to handle Ministry of Corporate Affairs (MCA) correspondence.',
      'Access to boardrooms for mandatory director meetings.',
      'Signage displayed in the lobby for compliance.'
    ],
    faqs: [
      {
        question: 'Can I use this address for MCA and ROC filings?',
        answer: 'Yes, our Virtual Office Premium plan gives you a legitimate commercial address for registering your Private Limited Company with the ROC.'
      },
      {
        question: 'What happens during a physical verification?',
        answer: 'If an inspector visits, our professional front desk staff will assist them and confirm that your company is registered at our address.'
      }
    ]
  },
  'remote-business': {
    id: 'remote-business',
    name: 'Remote Business',
    slug: 'remote-business',
    shortDesc: 'The perfect home base for remote teams and distributed workforces. Professional image, zero overhead.',
    benefits: [
      'Maintain a professional HQ while your team works from anywhere.',
      'Centralized mail and courier handling with digital scanning.',
      'Drop-in access to hot desks when team members need to collaborate.',
      'On-demand access to premium meeting rooms.'
    ],
    faqs: [
      {
        question: 'How does mail forwarding work for remote teams?',
        answer: 'We receive your mail, notify you digitally, and can either scan the contents (with permission) or forward the physical mail to your home address.'
      },
      {
        question: 'Can my remote team use the space occasionally?',
        answer: 'Yes! You can purchase day passes or meeting room credits for those times when your team needs to meet in person.'
      }
    ]
  }
};
