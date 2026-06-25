export const faqs = [
  {
    category: "Coworking & Access",
    questions: [
      {
        question: "What are your working hours?",
        answer: "Our open coworking areas are accessible from 9:00 AM to 6:00 PM, Monday to Saturday. Private cabin and dedicated desk members enjoy 24/7 biometric access."
      },
      {
        question: "Do you offer daily passes?",
        answer: "Yes, we offer daily Hot Desk passes starting at ₹399/day for individuals who need a temporary, professional workspace. You can book directly at the front desk."
      },
      {
        question: "Can I use multiple branches with one membership?",
        answer: "Our Enterprise and Dedicated Desk members get complimentary roaming access to our Trivandrum, Ernakulam, Calicut, and Coimbatore lounges for up to 4 days a month."
      },
      {
        question: "Is parking available at all locations?",
        answer: "Yes, all our 4 active branches offer dedicated two-wheeler and four-wheeler parking facilities. Reserved parking spots are available for private cabin members."
      }
    ]
  },
  {
    category: "Amenities & Facilities",
    questions: [
      {
        question: "Is high-speed internet included?",
        answer: "Absolutely. We provide enterprise-grade leased line internet with dual-ISP redundancy, ensuring 99.9% uptime with speeds up to 500 Mbps."
      },
      {
        question: "Can I bring guests for meetings?",
        answer: "Yes, you can bring guests. They can wait in the lounge area or you can book a conference room for a private, professional meeting. We offer guest reception services as well."
      },
      {
        question: "Are meeting rooms included in the monthly plan?",
        answer: "Dedicated Desk members receive 2 free hours of conference room credits per month, while Private Cabin members receive 5 free hours. Additional hours can be booked via our portal."
      },
      {
        question: "Do you have printing and scanning facilities?",
        answer: "Yes, enterprise-grade printers, scanners, and copiers are available on every floor. A certain number of free prints are included with your monthly membership."
      },
      {
        question: "Are beverages complimentary?",
        answer: "We offer unlimited complimentary tea, coffee, and filtered water for all members and their guests in our pantry areas."
      }
    ]
  },
  {
    category: "Virtual Office & Legal",
    questions: [
      {
        question: "What is included in the Virtual Office plan?",
        answer: "The Virtual Office plan includes a premium business address for your website and collateral, mail and package handling, and discounted access to our conference rooms."
      },
      {
        question: "Can I use the address for GST and Company Registration?",
        answer: "Yes, our Virtual Office plan provides all necessary documentation, including NOC and utility bills, to register your business for GST and MCA filings."
      },
      {
        question: "How is mail handled for Virtual Office members?",
        answer: "Our community managers collect your mail and packages. We will notify you via email or WhatsApp, and you can collect them or request them to be forwarded."
      }
    ]
  },
  {
    category: "Billing & Contracts",
    questions: [
      {
        question: "What is the minimum lock-in period?",
        answer: "Hot Desks and Dedicated Desks operate on a flexible month-to-month basis with no lock-in. Private cabins typically require a 6-month or 11-month agreement."
      },
      {
        question: "Is a security deposit required?",
        answer: "Yes, Private Cabins require a 2-month security deposit. Dedicated desks require a 1-month deposit. Hot desks and daily passes do not require a deposit."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No. Your monthly fee covers electricity, internet, housekeeping, air conditioning, and beverages. The only extra costs are for additional meeting room hours or printing beyond your quota."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major Credit/Debit cards, UPI, Net Banking, and corporate bank transfers. Invoices are generated on the 1st of every month."
      }
    ]
  }
];

export interface FAQ {
  question: string;
  answer: string;
}

export const homepageFAQs: FAQ[] = [
  {
    question: "What is WeeSpaces?",
    answer: "WeeSpaces is a flexible workspace provider offering coworking spaces, private offices, meeting rooms, managed offices, and virtual office solutions across Kerala. WeeSpaces helps freelancers, startups, and growing companies move into fully-equipped professional workspaces without the cost and complexity of setting up a traditional office."
  },
  {
    question: "Who is WeeSpaces designed for?",
    answer: "WeeSpaces is designed for freelancers, remote professionals, startups, small businesses, and enterprise teams looking for flexible office solutions. Whether you need a single dedicated desk, private team office, or complete managed workspace, WeeSpaces provides scalable options."
  },
  {
    question: "Where are WeeSpaces locations available?",
    answer: "WeeSpaces provides coworking and office spaces across key business locations in Kerala & Tamil Nadu including Kochi, Trivandrum, Calicut and Coimbatore."
  },
  {
    question: "Why choose WeeSpaces instead of renting an office?",
    answer: "Unlike traditional offices that require deposits, furniture investment, maintenance, and long-term commitments, WeeSpaces provides ready-to-use offices with flexible plans, professional amenities, and the ability to scale as your business grows."
  },
  {
    question: "Does WeeSpaces provide private offices for companies?",
    answer: "Yes. WeeSpaces offers fully furnished private offices for teams that need dedicated workspace with privacy, flexibility, meeting rooms, internet, and professional office facilities without managing office operations."
  }
];

export const coworkingFAQs: FAQ[] = [
  {
    question: "What is the best coworking space in Trivandrum for startups?",
    answer: "WeeSpaces offers coworking spaces in Kochi designed for startups, entrepreneurs, and growing teams who need flexible, ready-to-use offices. Members get access to professional workspaces, meeting rooms, internet, and business amenities without traditional office setup costs."
  },
  {
    question: "How much does coworking space cost in Kochi?",
    answer: "Coworking space pricing in Kochi depends on workspace type, location, and requirements. Flexible desks usually have lower monthly costs, while private offices and managed workspaces are customized based on team size and business needs."
  },
  {
    question: "Can I get a private office inside a coworking space in Kochi?",
    answer: "Yes. WeeSpaces provides private offices inside coworking environments for companies that need dedicated team spaces while still benefiting from shared amenities and flexible workspace services."
  },
  {
    question: "Is coworking better than renting an office in Kochi?",
    answer: "Coworking can be more cost-effective than renting a traditional office because businesses avoid upfront investment in interiors, furniture, internet setup, maintenance, and long-term commitments."
  }
];

export const privateOfficeFAQs: FAQ[] = [
  {
    question: "What is a private office?",
    answer: "A private office is a dedicated, fully furnished workspace exclusively used by your team while providing access to shared business facilities such as meeting rooms, internet, reception areas, and workspace services."
  },
  {
    question: "Who should choose a private office?",
    answer: "Private offices are ideal for startups, agencies, IT companies, consultants, and growing teams that need privacy, collaboration space, and a professional environment without managing office infrastructure."
  },
  {
    question: "How quickly can a company move into a private office?",
    answer: "With WeeSpaces, businesses can move into ready-to-use private offices quickly because essential infrastructure including furniture, internet, and workspace facilities are already available."
  }
];

export const virtualOfficeFAQs: FAQ[] = [
  {
    question: "What is a virtual office?",
    answer: "A virtual office gives businesses a professional office address without renting physical workspace. Companies use virtual offices for business registration, communication, and establishing presence in a preferred location."
  },
  {
    question: "Can I use a virtual office for GST registration in Kerala?",
    answer: "Yes. A virtual office can be used for GST registration when it provides the required business address documentation according to applicable regulations."
  },
  {
    question: "Who needs a virtual office?",
    answer: "Virtual offices are useful for startups, ecommerce sellers, consultants, freelancers, and remote businesses that need a professional address without maintaining a physical office."
  }
];

export const comparisonFAQs: FAQ[] = [
  {
    question: "Is coworking cheaper than renting an office?",
    answer: "Coworking spaces usually reduce upfront expenses because companies do not need to separately invest in interiors, furniture, utilities, and office management."
  },
  {
    question: "When should a company move from coworking to a private office?",
    answer: "Businesses usually move into private offices when they require dedicated team areas, more privacy, stronger branding, or additional operational control."
  }
];
