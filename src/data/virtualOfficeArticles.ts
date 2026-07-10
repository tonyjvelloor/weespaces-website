export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface VirtualOfficeArticle {
  slug: string;
  title: string;
  description: string;
  
  // Metadata for targeting
  targetState?: string;
  targetIndustry?: string;
  
  // Content Sections
  heroImage?: string;
  quickAnswer: string; // 40-60 words
  
  summaryTable: {
    label: string;
    value: string;
  }[];
  
  benefits: {
    title: string;
    description: string;
  }[];
  
  requirements: {
    title: string;
    items: string[];
  };
  
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  
  costInfo: {
    description: string;
    price: string;
    includes: string[];
  };
  
  interactiveTool?: 'gst-eligibility' | 'cost-calculator' | 'recommendation-wizard';
  
  faqs: ArticleFAQ[];
  
  relatedArticles: {
    slug: string;
    title: string;
  }[];
}

export const virtualOfficeArticles: Record<string, VirtualOfficeArticle> = {
  'gst-registration-kerala': {
    slug: 'gst-registration-kerala',
    title: 'How to Get a Virtual Office for GST Registration in Kerala (2026)',
    description: 'Learn the exact documents, process, and costs to register your business for GST in Kerala using a premium virtual office address.',
    targetState: 'Kerala',
    quickAnswer: 'Yes, a virtual office is 100% legal for GST registration in Kerala. You need a No Objection Certificate (NOC) and a Rental Agreement from the workspace provider, along with a recent utility bill. WeeSpaces provides all compliant documents within 24 hours of sign-up.',
    summaryTable: [
      { label: 'Time Required', value: '24 Hours for NOC' },
      { label: 'Legal Validity', value: '100% Compliant with Kerala GST Dept' },
      { label: 'Primary Documents', value: 'NOC, Rent Agreement, Utility Bill' },
      { label: 'Cost', value: 'From ₹15,000/year' }
    ],
    benefits: [
      { title: 'Zero Leasing Hassles', description: 'Skip the hefty 10-month deposits required by commercial landlords in Kochi or Trivandrum.' },
      { title: 'Professional Image', description: 'Register your company at a premium IT Park or Grade-A commercial building.' },
      { title: 'Compliance Handled', description: 'Our legal team ensures your rental agreements and NOCs perfectly match GST department requirements.' },
      { title: 'Mail Management', description: 'All government notices and business mail are received and forwarded to you securely.' }
    ],
    requirements: {
      title: 'Documents Required for GST (Kerala)',
      items: [
        'PAN Card of the Business / Directors',
        'Aadhaar Card of the Authorized Signatory',
        'Certificate of Incorporation (if Pvt Ltd / LLP)',
        'NOC from WeeSpaces (Provided by us)',
        'Notarized Rental Agreement (Provided by us)',
        'Latest Electricity Bill of the Premises (Provided by us)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Choose Your Premium Address', description: 'Select a WeeSpaces hub in Kochi, Trivandrum, or Calicut as your principal place of business.' },
      { step: 2, title: 'Complete KYC & Payment', description: 'Submit your basic ID proofs and complete the annual payment online.' },
      { step: 3, title: 'Receive Legal Documents', description: 'Within 24 hours, receive your notarized Rental Agreement, NOC, and utility bill.' },
      { step: 4, title: 'Apply on GST Portal', description: 'Upload these documents to the GST portal. Verification typically takes 3-7 working days.' }
    ],
    costInfo: {
      description: 'Transparent annual pricing with no hidden charges for notarization or setup.',
      price: '₹15,000 / year',
      includes: ['Premium Business Address', 'GST Compliant NOC', 'Notarized Rental Agreement', 'Utility Bill Copy', 'Mail Handling & Forwarding', 'Dedicated Receptionist']
    },
    interactiveTool: 'gst-eligibility',
    faqs: [
      { question: 'Will the GST inspector visit the virtual office?', answer: 'Yes, physical verification by GST officers happens occasionally. Our on-site community managers are trained to handle these visits, present the necessary registers, and verify your tenancy.' },
      { question: 'Can I open a bank account with this address?', answer: 'Yes, the rental agreement provided can be used as proof of address for opening a current account.' },
      { question: 'What if my GST application is rejected?', answer: 'Rejections usually happen due to mismatched names on PAN/Aadhaar. Our compliance documents have a 99% acceptance rate. If rejected due to premises issues, we assist in replying to the SCN.' }
    ],
    relatedArticles: [
      { slug: 'documents-required', title: 'Full Document Checklist for GST' },
      { slug: 'virtual-office-vs-physical-office', title: 'Virtual Office vs Traditional Lease' }
    ]
  },
  'virtual-office-vs-physical-office': {
    slug: 'virtual-office-vs-physical-office',
    title: 'Virtual Office vs Physical Office: Which is better? (2026 Comparison)',
    description: 'Compare the costs, compliance requirements, and benefits of a virtual office versus a traditional physical office lease.',
    quickAnswer: 'A virtual office provides a premium business address, mail handling, and legal compliance (GST/MCA) for a fraction of the cost of a physical office. It is ideal for remote teams, freelancers, and e-commerce sellers who do not need daily desk space but require a professional corporate presence.',
    summaryTable: [
      { label: 'Setup Cost (Virtual)', value: '₹0' },
      { label: 'Setup Cost (Physical)', value: '₹5L - ₹15L (Deposit + Interiors)' },
      { label: 'Monthly Overhead (Virtual)', value: 'None' },
      { label: 'Monthly Overhead (Physical)', value: 'High (Electricity, Maintenance, Staff)' }
    ],
    benefits: [
      { title: 'Capital Efficiency', description: 'Save millions in commercial deposits and lock your capital into product development instead.' },
      { title: 'Ultimate Flexibility', description: 'Scale your team across cities without being tied to a 3-year commercial lease.' },
      { title: 'Instant Setup', description: 'Get a fully compliant business address in 24 hours compared to 45 days for leasing and fit-outs.' }
    ],
    requirements: {
      title: 'When to choose a Virtual Office',
      items: [
        'Your team works remotely or is distributed',
        'You are an e-commerce seller needing an Additional Place of Business (APoB)',
        'You are a consultant/freelancer wanting privacy (not using home address)',
        'You are expanding to a new state and need local GST registration'
      ]
    },
    processSteps: [
      { step: 1, title: 'Assess Team Needs', description: 'If less than 10% of your team needs to be in an office daily, go virtual.' },
      { step: 2, title: 'Select Location', description: 'Choose a premium address that signals trust to your clients.' },
      { step: 3, title: 'Upgrade when needed', description: 'Start virtual, and add day passes or private cabins later as your team grows.' }
    ],
    costInfo: {
      description: 'Annual Virtual Office Subscription vs Monthly Physical Lease',
      price: '₹15,000 / year (Virtual)',
      includes: ['Business Address', 'Mail Management', 'GST Registration Documents', 'Discounted Meeting Rooms']
    },
    faqs: [
      { question: 'Can I meet clients at my virtual office?', answer: 'Yes! Virtual office members get access to premium meeting rooms and boardrooms on an hourly or daily rental basis.' },
      { question: 'Is a virtual office bad for my brand image?', answer: 'No, it enhances it. You get a Grade-A commercial building address instead of a residential address.' }
    ],
    relatedArticles: [
      { slug: 'gst-registration-kerala', title: 'GST Registration Guide' }
    ]
  },
  'documents-required': {
    slug: 'documents-required',
    title: 'Documents Required for GST Registration using a Virtual Office',
    description: 'The definitive checklist of documents required by the government to register for GST using a virtual office in 2026.',
    quickAnswer: 'To register for GST using a virtual office, you must provide your business KYC (PAN, Aadhaar, Incorporation cert) along with three critical documents from the workspace provider: A signed No Objection Certificate (NOC), a Notarized Rental Agreement, and a copy of the latest Electricity Bill for the premises.',
    summaryTable: [
      { label: 'Total Documents', value: '6-8 depending on entity type' },
      { label: 'Provider Documents', value: '3 (NOC, Agreement, Bill)' },
      { label: 'Rejection Risk', value: 'High if documents are generic' },
      { label: 'Our Success Rate', value: '99% Approval' }
    ],
    benefits: [
      { title: 'Guaranteed Compliance', description: 'We format the NOC and Agreement exactly as the GST officers expect it.' },
      { title: 'Speed', description: 'Get all provider documents digitized and notarized within 24 hours.' }
    ],
    requirements: {
      title: 'The Master Checklist',
      items: [
        'Company PAN Card',
        'Director / Proprietor PAN and Aadhaar',
        'Certificate of Incorporation / Partnership Deed',
        'Board Resolution authorizing the signatory',
        'WeeSpaces NOC (Specific to GST registration)',
        'Notarized Rent/Lease Agreement',
        'Latest Utility Bill (Electricity/Tax Receipt)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Gather KYC', description: 'Keep your personal and company identification ready.' },
      { step: 2, title: 'Sign up for WeeSpaces', description: 'Purchase the virtual office plan.' },
      { step: 3, title: 'Receive Legal Pack', description: 'Download your NOC and Agreement.' },
      { step: 4, title: 'Upload & Verify', description: 'Submit via the GST portal using TRN.' }
    ],
    costInfo: {
      description: 'Document preparation is included in our standard plan.',
      price: 'Included',
      includes: ['NOC Formatting', 'Notary Fees', 'Utility Bill Retrieval']
    },
    interactiveTool: 'gst-eligibility',
    faqs: [
      { question: 'What if the electricity bill is not in the workspace providers name?', answer: 'If the provider is leasing the building, they will provide a Master Lease Agreement along with the NOC to prove the chain of custody.' }
    ],
    relatedArticles: [
      { slug: 'gst-registration-kerala', title: 'Kerala Specific Rules' }
    ]
  }
};
