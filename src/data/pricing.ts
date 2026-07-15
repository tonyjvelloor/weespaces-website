export type VirtualOfficePlan = {
  id: string;
  name: string;
  bestFor: string;
  monthlyPrice: number;
  yearlyPrice: number; // usually discounted
  setupFee: number;
  features: string[];
  recommended?: boolean;
};

export const virtualOfficePlans: VirtualOfficePlan[] = [
  {
    id: "starter",
    name: "Starter",
    bestFor: "GST Registration",
    monthlyPrice: 1500,
    yearlyPrice: 15000,
    setupFee: 1500,
    features: [
      "Address for GST compliance",
      "Premium Business Address",
      "Rental Agreement & NOC",
      "Mail & Package Handling",
      "Dedicated Locker (Add-on)"
    ]
  },
  {
    id: "professional",
    name: "Professional",
    bestFor: "Company Registration",
    monthlyPrice: 2500,
    yearlyPrice: 25000,
    setupFee: 2500,
    recommended: true,
    features: [
      "Everything in Starter",
      "MCA Compliance Support (Pvt Ltd / LLP)",
      "Mail Forwarding",
      "Reception Support",
      "2 Meeting Room Credits / month"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    bestFor: "Businesses needing mail handling & meeting access",
    monthlyPrice: 4000,
    yearlyPrice: 40000,
    setupFee: 0,
    features: [
      "Everything in Professional",
      "Dedicated Business Phone Number",
      "Priority Meeting Room Access",
      "2 Days Private Office Access / month",
      "Zero Setup Fees"
    ]
  }
];

export const virtualOfficeFaqs = [
  {
    question: "Can I use this for GST compliance?",
    answer: "Yes, our Virtual Office plans include all necessary documentation (NOC, Rental Agreement, Utility Bill) required for a hassle-free GST registration in Kerala and Tamil Nadu."
  },
  {
    question: "Is this valid for Private Limited companies?",
    answer: "Absolutely. Our Professional and Premium plans provide you with a legally compliant registered office address for Private Limited companies, LLPs, and OPCs."
  },
  {
    question: "Will I receive an NOC?",
    answer: "Yes, we provide a No Objection Certificate (NOC) from the property owner along with the rental agreement as part of the onboarding process."
  },
  {
    question: "Can I change my business address later?",
    answer: "Yes, you can upgrade your plan to a physical private office within WeeSpaces at any time, keeping the same address, or officially change your registered address as per MCA and GST guidelines."
  },
  {
    question: "What happens during GST verification?",
    answer: "Our community managers are trained to handle physical GST verification visits by tax officials. We maintain a dedicated register and display your company name board to ensure 100% compliance."
  },
  {
    question: "Can I use this for an LLP?",
    answer: "Yes. LLPs can use our business address as their official registered office."
  },
  {
    question: "Can I register a One Person Company?",
    answer: "Yes, OPCs are fully supported and we provide the required documentation for ROC filing."
  },
  {
    question: "Can I receive courier deliveries?",
    answer: "Yes, our front desk will securely receive, log, and hold your mail and packages. We also offer mail forwarding services in our Professional and Premium plans."
  }
];
