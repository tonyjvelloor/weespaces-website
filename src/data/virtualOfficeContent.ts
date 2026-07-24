export type VirtualOfficeType = 'city' | 'industry' | 'registration' | 'comparison' | 'persona' | 'feature';

export interface VirtualOfficeContent {
  routing: {
    slug: string;
    type: VirtualOfficeType;
    relatedCities?: string[];
  };
  seo: {
    title: string;
    description: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
  };
  analytics: {
    pageType: string;
    searchIntent: string;
    targetAudience: string;
    funnelStage: 'top' | 'middle' | 'bottom';
    businessGoal: string;
  };
  conversion: {
    heroHeadline: string;
    heroSubheadline: string;
    heroImage?: string;
    ctaText: string;
    recommendedCalculator?: 'gst-eligibility' | 'cost-calculator' | 'recommendation-wizard';
  };
  scoring: {
    priority: number;
    leadScoreWeight: number;
    conversionPotential: 'high' | 'medium' | 'low';
    trafficPotential: 'high' | 'medium' | 'low';
    businessValue: 'enterprise' | 'smb' | 'startup' | 'freelancer';
  };
  ai: {
    quickAnswer: string;
    answerSnippets: string[];
    entityRelationships: string[];
    structuredSummary: string;
    commonQuestions: string[];
  };
  schema: {
    summaryTable: { label: string; value: string }[];
    benefits: { title: string; description: string }[];
    requirements: { title: string; items: string[] };
    processSteps: { step: number; title: string; description: string }[];
    costInfo: { description: string; price: string; includes: string[] };
    faqs: { question: string; answer: string }[];
    relatedArticles: { slug: string; title: string }[];
  };
}

export const virtualOfficeContent: Record<string, VirtualOfficeContent> = {
  'gst-registration': {
    routing: { slug: 'gst-registration', type: 'registration', relatedCities: ['kochi', 'coimbatore', 'trivandrum', 'calicut'] },
    seo: { title: 'Virtual Office for GST Registration | Compliant Business Address', description: 'Get a legally compliant Virtual Office address for GST registration. Includes NOC, Rental Agreement, and utility bills. Zero deposit required.', primaryKeyword: 'Virtual Office for GST Registration', secondaryKeywords: ['business address for gst', 'virtual office address for gst', 'gst compliance office'] },
    analytics: { pageType: 'registration', searchIntent: 'Commercial / Transactional', targetAudience: 'E-commerce sellers, remote companies, startups expanding to new states', funnelStage: 'bottom', businessGoal: 'lead_generation' },
    conversion: { heroHeadline: 'Virtual Office for GST Compliance', heroSubheadline: 'Get the exact documents you need—NOC, Rent Agreement, and Utility Bill—to legally register your GST number today.', ctaText: 'Get Your GST Address', recommendedCalculator: 'gst-eligibility' },
    scoring: { priority: 95, leadScoreWeight: 25, conversionPotential: 'high', trafficPotential: 'high', businessValue: 'smb' },
    ai: { quickAnswer: 'Yes, a virtual office is 100% legal for GST compliance in India. You need a No Objection Certificate (NOC) and a Rental Agreement from the workspace provider. WeeSpaces provides all compliant documents within 24 hours of sign-up.', answerSnippets: ['NOC and Rent Agreement are mandatory', 'Valid for APoB and PPoB'], entityRelationships: ['GST Registration', 'Virtual Office', 'No Objection Certificate', 'Rental Agreement'], structuredSummary: 'A virtual office provides the mandatory documentation (NOC, Rent Agreement, Utility Bill) required by the GST department to register a business address without renting a physical space.', commonQuestions: ['Is virtual office legal for GST?', 'What documents do you provide for GST?'] },
    schema: {
      summaryTable: [ { label: 'Time Required', value: '24 Hours for NOC' }, { label: 'Legal Validity', value: '100% GST Compliant' }, { label: 'Primary Documents', value: 'NOC, Rent Agreement, Utility Bill' }, { label: 'Cost', value: 'From ₹15,000/year' } ],
      benefits: [ { title: 'Zero Leasing Hassles', description: 'Skip the hefty 10-month deposits required by commercial landlords.' }, { title: 'Professional Image', description: 'Register your company at a premium IT Park or Grade-A commercial building.' }, { title: 'Compliance Handled', description: 'Our legal team ensures your rental agreements perfectly match GST department requirements.' }, { title: 'Physical Verification Support', description: 'We display your company name board at the reception and assist visiting GST officers.' } ],
      requirements: { title: 'Documents Required for GST', items: ['PAN Card of the Business / Directors', 'Aadhaar Card of the Authorized Signatory', 'Certificate of Incorporation (if Pvt Ltd / LLP)', 'NOC from WeeSpaces (Provided by us)', 'Notarized Rental Agreement (Provided by us)', 'Latest Electricity Bill of the Premises (Provided by us)'] },
      processSteps: [ { step: 1, title: 'Choose Your Address', description: 'Select a premium location across our network as your principal place of business.' }, { step: 2, title: 'Complete KYC & Payment', description: 'Submit your basic ID proofs and complete the annual payment online.' }, { step: 3, title: 'Receive Legal Documents', description: 'Within 24 hours, receive your notarized Rental Agreement, NOC, and utility bill.' }, { step: 4, title: 'Apply on GST Portal', description: 'Upload these documents to the GST portal. Verification typically takes 3-7 working days.' } ],
      costInfo: { description: 'Transparent annual pricing with no hidden charges for setup.', price: '₹15,000 / year', includes: ['Premium Business Address', 'GST Compliant NOC', 'Notarized Rental Agreement', 'Utility Bill Copy', 'Mail Handling'] },
      faqs: [ { question: 'Will the GST inspector visit the virtual office?', answer: 'Yes, physical verification by GST officers happens occasionally. Our on-site community managers are trained to handle these visits, present the necessary registers, and verify your tenancy.' }, { question: 'Can I use this address for multiple GST numbers?', answer: 'No, a single virtual office membership covers one company and one GST registration. If you have multiple distinct business entities, you will need separate memberships.' } ],
      relatedArticles: [ { slug: 'company-registration', title: 'Virtual Office for Company Registration' } ]
    }
  },
  'amazon-sellers': {
    routing: { slug: 'amazon-sellers', type: 'persona', relatedCities: ['kochi', 'coimbatore'] },
    seo: { title: 'Virtual Office for Amazon Sellers & E-commerce | APoB Registration', description: 'Get a Virtual Office in Kerala or TN to register as an Additional Place of Business (APoB) for Amazon, Flipkart, and Shopify sellers.', primaryKeyword: 'Virtual Office for Amazon Sellers', secondaryKeywords: ['APoB registration virtual office', 'ecommerce gst registration', 'flipkart seller virtual office'] },
    analytics: { pageType: 'persona', searchIntent: 'Commercial / Transactional', targetAudience: 'Amazon FBA Sellers, E-commerce entrepreneurs, Dropshippers', funnelStage: 'bottom', businessGoal: 'lead_generation' },
    conversion: { heroHeadline: 'Expand Your E-Commerce Sales with an APoB Virtual Office', heroSubheadline: 'Legally store inventory in Amazon warehouses across South India by registering an Additional Place of Business (APoB) using our GST-compliant virtual offices.', ctaText: 'Get Your APoB Address' },
    scoring: { priority: 90, leadScoreWeight: 20, conversionPotential: 'high', trafficPotential: 'medium', businessValue: 'smb' },
    ai: { quickAnswer: 'To sell via Amazon FBA in a new state, you must have a GST registration in that state. A virtual office provides the exact documentation needed to register an APoB.', answerSnippets: ['FBA requires APoB', 'We provide APoB NOC'], entityRelationships: ['Amazon FBA', 'APoB', 'GST', 'Virtual Office'], structuredSummary: 'E-commerce sellers use virtual offices to obtain APoB registrations, which are legally required to store goods in Amazon FBA warehouses in other states.', commonQuestions: ['Does Amazon accept virtual office?'] },
    schema: {
      summaryTable: [ { label: 'Use Case', value: 'APoB / GST Registration for E-commerce' }, { label: 'Amazon Verified', value: '100% accepted by Seller Central' }, { label: 'Setup Time', value: '24 Hours' }, { label: 'Cost', value: 'From ₹15,000/year' } ],
      benefits: [ { title: 'Unlock Amazon FBA', description: 'You cannot use Amazon FBA in a state where you do not have a registered APoB.' }, { title: 'Zero Warehouse Costs', description: 'Get the legal address required without signing an expensive commercial warehouse lease.' }, { title: 'Mail Forwarding', description: 'We receive and forward all physical return packages or seller notices to your primary address.' }, { title: 'Fast Setup', description: 'Get your NOC and Rent Agreement within 24 hours to upload to Amazon Seller Central.' } ],
      requirements: { title: 'Documents Required for APoB', items: ['Primary State GST Certificate', 'Director KYC', 'WeeSpaces NOC', 'Notarized Rent Agreement', 'Utility Bill'] },
      processSteps: [ { step: 1, title: 'Sign Up', description: 'Choose your desired state for Amazon FBA expansion.' }, { step: 2, title: 'Get Documents', description: 'Receive your legal APoB document pack from us.' }, { step: 3, title: 'Update GST', description: 'Add the new state address to your GST portal.' }, { step: 4, title: 'Verify Amazon', description: 'Upload the updated GST certificate to Amazon Seller Central.' } ],
      costInfo: { description: 'Annual APoB Virtual Office Package', price: '₹15,000 / year', includes: ['Business Address', 'APoB NOC', 'Rent Agreement', 'Mail Handling'] },
      faqs: [ { question: 'Does Amazon accept virtual office addresses?', answer: 'Yes, Amazon and Flipkart fully accept virtual offices for APoB registration as long as the GST documents are legally formatted correctly.' } ],
      relatedArticles: [ { slug: 'gst-registration', title: 'General GST Registration Process' } ]
    }
  },
  'company-registration': {
    routing: { slug: 'company-registration', type: 'registration', relatedCities: ['kochi', 'coimbatore', 'trivandrum', 'calicut'] },
    seo: { title: 'Virtual Office for Company Registration | MCA Compliant Address', description: 'Use a premium virtual business address as your Principal Place of Business to register a Pvt Ltd or LLP.', primaryKeyword: 'Virtual Office for Company Registration', secondaryKeywords: ['mca compliant virtual office', 'registered office address', 'pvt ltd virtual office'] },
    analytics: { pageType: 'registration', searchIntent: 'Commercial / Transactional', targetAudience: 'Startup Founders, Entrepreneurs, Foreign Companies', funnelStage: 'bottom', businessGoal: 'lead_generation' },
    conversion: { heroHeadline: 'Register Your Company with a Premium Address', heroSubheadline: 'Get an MCA-compliant registered office address for your Private Limited Company or LLP. Zero physical office required.', ctaText: 'Get Your Registered Address' },
    scoring: { priority: 90, leadScoreWeight: 25, conversionPotential: 'high', trafficPotential: 'high', businessValue: 'startup' },
    ai: { quickAnswer: 'Yes, the MCA permits the use of a Virtual Office as the registered office address. You need a No Objection Certificate (NOC) and rent agreement.', answerSnippets: ['MCA compliant', 'Includes NOC and Rent Agreement'], entityRelationships: ['MCA', 'SPICe+', 'Registered Office', 'Virtual Office'], structuredSummary: 'Founders can register Private Limited companies and LLPs using virtual offices, bypassing the need for physical commercial leases while remaining 100% compliant with MCA rules.', commonQuestions: ['Is virtual office allowed for private limited company?'] },
    schema: {
      summaryTable: [ { label: 'Validity', value: '100% MCA Compliant' }, { label: 'Entities', value: 'Pvt Ltd, LLP, OPC, Public Ltd' }, { label: 'Timeframe', value: 'Documents ready in 24 hrs' }, { label: 'Cost', value: 'From ₹15,000/year' } ],
      benefits: [ { title: 'Protect Privacy', description: 'Avoid listing your residential home address on public government databases.' }, { title: 'Premium Corporate Image', description: 'Register your startup at a Grade-A commercial building.' }, { title: 'Statutory Compliance', description: 'Receive all official MCA, Income Tax, and legal notices securely.' }, { title: 'Name Board Support', description: 'We display your physical or digital name board at our reception to comply with MCA physical verification rules.' } ],
      requirements: { title: 'Documents Required for MCA', items: ['Director KYC (PAN & Aadhaar)', 'Proposed Company Name (SPICe+ Part A)', 'NOC from WeeSpaces (Provided by us)', 'Notarized Rent Agreement (Provided by us)', 'Latest Utility Bill (Provided by us)'] },
      processSteps: [ { step: 1, title: 'Choose Address', description: 'Select a premium location for your HQ.' }, { step: 2, title: 'Get NOC', description: 'Receive the required NOC and utility bill from us within 24 hours.' }, { step: 3, title: 'File SPICe+', description: 'Use the address and our documents in the SPICe+ incorporation form on the MCA portal.' }, { step: 4, title: 'Verification', description: 'If the ROC orders a physical verification, our on-site team is ready to assist.' } ],
      costInfo: { description: 'Annual Virtual Office Subscription', price: '₹15,000 / year', includes: ['Registered Office Address', 'Mail Handling', 'NOC for MCA', 'Rent Agreement', 'Utility Bill'] },
      faqs: [ { question: 'Do I need a physical name board?', answer: 'Yes, per MCA rules, a name board must be displayed. We install a digital or physical name board for your company at our premises.' }, { question: 'Can I use this address for GST as well?', answer: 'Yes! The documents we provide are valid for both MCA (Company Registration) and GST registration at no extra cost.' } ],
      relatedArticles: [ { slug: 'gst-registration', title: 'GST Registration Guide' } ]
    }
  },
  'llp-registration': {
    routing: { slug: 'llp-registration', type: 'registration', relatedCities: ['kochi', 'coimbatore'] },
    seo: { title: 'Virtual Office for LLP Registration', description: 'Register your Limited Liability Partnership (LLP) using a premium commercial virtual office address in India.', primaryKeyword: 'Virtual Office for LLP Registration', secondaryKeywords: ['llp registered office', 'virtual office for llp', 'mca llp address'] },
    analytics: { pageType: 'registration', searchIntent: 'Commercial / Transactional', targetAudience: 'Partnerships, Consultants, Professionals', funnelStage: 'bottom', businessGoal: 'lead_generation' },
    conversion: { heroHeadline: 'Virtual Office for LLP Registration', heroSubheadline: 'Establish your Limited Liability Partnership with a prestigious business address. Fully compliant with MCA regulations.', ctaText: 'Get Your LLP Address' },
    scoring: { priority: 70, leadScoreWeight: 20, conversionPotential: 'high', trafficPotential: 'low', businessValue: 'smb' },
    ai: { quickAnswer: 'An LLP requires a registered office address within 30 days of incorporation. A virtual office perfectly fulfills this requirement by providing the necessary NOC and rent agreement.', answerSnippets: ['MCA compliant for LLP', 'NOC provided'], entityRelationships: ['LLP', 'MCA', 'FiLLiP', 'Virtual Office'], structuredSummary: 'Partnerships can utilize a virtual office to obtain the mandatory NOC and Rent Agreement needed to file their FiLLiP form and register an LLP without renting a dedicated office space.', commonQuestions: ['Is a Virtual Office valid for an LLP?'] },
    schema: {
      summaryTable: [ { label: 'Validity', value: '100% MCA Compliant' }, { label: 'Business Type', value: 'Limited Liability Partnership' }, { label: 'Timeframe', value: '24 Hours' }, { label: 'Cost', value: 'From ₹15,000/year' } ],
      benefits: [ { title: 'Zero CAPEX', description: 'No need to lease a physical office just for registration purposes.' }, { title: 'Mail Forwarding', description: 'All ROC and legal notices forwarded to the designated partners.' }, { title: 'Professional Image', description: 'Elevate your partnership with a Grade-A commercial address.' }, { title: 'Meeting Rooms', description: 'Book our boardrooms on-demand when partners need to meet.' } ],
      requirements: { title: 'Documents for LLP Registration', items: ['Partner KYC (PAN & Aadhaar)', 'Proposed LLP Name', 'NOC from WeeSpaces (Provided by us)', 'Notarized Rent Agreement (Provided by us)', 'Latest Utility Bill (Provided by us)'] },
      processSteps: [ { step: 1, title: 'Choose Address', description: 'Select your preferred city.' }, { step: 2, title: 'Get NOC', description: 'Receive your legal documents from us.' }, { step: 3, title: 'File FiLLiP', description: 'Use the address in the FiLLiP form on the MCA portal.' }, { step: 4, title: 'Incorporation', description: 'Receive your Certificate of Incorporation.' } ],
      costInfo: { description: 'Annual Virtual Office Subscription', price: '₹15,000 / year', includes: ['Registered Office Address', 'NOC for MCA', 'Rent Agreement', 'Utility Bill'] },
      faqs: [ { question: 'Is a Virtual Office valid for an LLP?', answer: 'Yes, as long as the workspace provider issues a valid NOC and Rent Agreement, the MCA accepts virtual offices for LLPs.' } ],
      relatedArticles: [ { slug: 'company-registration', title: 'Private Limited Registration' } ]
    }
  },
  'opc-registration': {
    routing: { slug: 'opc-registration', type: 'registration', relatedCities: ['kochi', 'coimbatore'] },
    seo: { title: 'Virtual Office for One Person Company (OPC) Registration', description: 'Get an MCA-compliant virtual office address to register your One Person Company (OPC) in India quickly and affordably.', primaryKeyword: 'Virtual Office for OPC Registration', secondaryKeywords: ['opc registered office', 'one person company address', 'mca opc compliance'] },
    analytics: { pageType: 'registration', searchIntent: 'Commercial / Transactional', targetAudience: 'Solo Founders, Consultants, Freelancers Incorporating', funnelStage: 'bottom', businessGoal: 'lead_generation' },
    conversion: { heroHeadline: 'Launch Your OPC with a Premium Business Address', heroSubheadline: 'Register your One Person Company without renting an expensive commercial office. We provide the NOC and Rent Agreement you need.', ctaText: 'Get Your OPC Address' },
    scoring: { priority: 60, leadScoreWeight: 15, conversionPotential: 'high', trafficPotential: 'low', businessValue: 'freelancer' },
    ai: { quickAnswer: 'Yes, solo founders can use a virtual office to register a One Person Company (OPC). You will receive an NOC and a notarized Rent Agreement to file your SPICe+ form with the MCA.', answerSnippets: ['MCA compliant for OPC', 'Solo founder friendly'], entityRelationships: ['OPC', 'MCA', 'SPICe+', 'Virtual Office'], structuredSummary: 'A Virtual Office provides solo founders the necessary address and documents to register an OPC under MCA guidelines, saving thousands on physical office leases.', commonQuestions: ['Does an OPC need a physical office?'] },
    schema: {
      summaryTable: [ { label: 'Validity', value: '100% MCA Compliant' }, { label: 'Best For', value: 'Solo Founders & Consultants' }, { label: 'Timeframe', value: '24 Hours' }, { label: 'Cost', value: 'From ₹15,000/year' } ],
      benefits: [ { title: 'Cost-Effective', description: 'Perfect for single-founder companies looking to keep overhead costs near zero.' }, { title: 'Home Address Privacy', description: 'Keep your personal home address off the public MCA master data.' }, { title: 'Mail Handling', description: 'We receive and manage all your corporate correspondence.' }, { title: 'Meeting Rooms', description: 'Impress clients by hosting them at our premium boardrooms when needed.' } ],
      requirements: { title: 'Documents Required for OPC', items: ['Founder & Nominee KYC (PAN & Aadhaar)', 'Proposed OPC Name', 'NOC from WeeSpaces (Provided by us)', 'Notarized Rent Agreement (Provided by us)', 'Latest Utility Bill (Provided by us)'] },
      processSteps: [ { step: 1, title: 'Choose Address', description: 'Select your preferred city.' }, { step: 2, title: 'Get NOC', description: 'Receive your legal documents from us within 24 hours.' }, { step: 3, title: 'File SPICe+', description: 'Submit your incorporation documents to the MCA.' }, { step: 4, title: 'Incorporation', description: 'Receive your Certificate of Incorporation.' } ],
      costInfo: { description: 'Annual Virtual Office Subscription', price: '₹15,000 / year', includes: ['Registered Office Address', 'NOC for MCA', 'Rent Agreement', 'Utility Bill'] },
      faqs: [ { question: 'Does an OPC need a physical office?', answer: 'No, an OPC only requires a registered address for communication and compliance, which a virtual office fully satisfies.' } ],
      relatedArticles: [ { slug: 'company-registration', title: 'Private Limited Registration' } ]
    }
  },
  'startup-india': {
    routing: { slug: 'startup-india', type: 'registration', relatedCities: ['kochi', 'trivandrum', 'calicut', 'coimbatore'] },
    seo: { title: 'Virtual Office for Startup India & DPIIT Registration', description: 'Use our premium virtual office address to incorporate your company and apply for Startup India DPIIT recognition.', primaryKeyword: 'Virtual Office for Startup India', secondaryKeywords: ['dpiit recognition address', 'startup india virtual office', 'incubator virtual office'] },
    analytics: { pageType: 'registration', searchIntent: 'Commercial', targetAudience: 'Tech Startups, Innovators, Funded Companies', funnelStage: 'middle', businessGoal: 'lead_generation' },
    conversion: { heroHeadline: 'Premium Address for DPIIT & Startup India Recognition', heroSubheadline: 'Incorporate your startup and apply for DPIIT recognition using a credible, premium commercial address. Get access to our ecosystem of founders and investors.', ctaText: 'Get Your Startup Address' },
    scoring: { priority: 80, leadScoreWeight: 20, conversionPotential: 'medium', trafficPotential: 'medium', businessValue: 'startup' },
    ai: { quickAnswer: 'To apply for DPIIT recognition, you must first be an incorporated Pvt Ltd or registered LLP. A virtual office gives you the legal registered address needed to incorporate.', answerSnippets: ['DPIIT compliant', 'Pvt Ltd prerequisite'], entityRelationships: ['Startup India', 'DPIIT', 'Virtual Office', 'Incorporation'], structuredSummary: 'Startups can use virtual offices to incorporate and subsequently apply for DPIIT recognition, signaling credibility to investors while saving capital.', commonQuestions: ['Does a virtual office affect my DPIIT chances?'] },
    schema: {
      summaryTable: [ { label: 'Validity', value: '100% DPIIT Compliant' }, { label: 'Best For', value: 'Early-stage Startups' }, { label: 'Timeframe', value: '24 Hours' }, { label: 'Cost', value: 'From ₹15,000/year' } ],
      benefits: [ { title: 'Credibility', description: 'A premium commercial address looks significantly better on pitch decks and DPIIT applications than a residential one.' }, { title: 'Investor Friendly', description: 'Host VCs and angel investors in our premium boardrooms.' }, { title: 'Compliance Handled', description: 'We provide all necessary documents for MCA and GST, keeping your startup legally compliant.' }, { title: 'Community Access', description: 'Join our ecosystem of fellow founders, tech talent, and mentors.' } ],
      requirements: { title: 'Steps for Startup India Recognition', items: ['Incorporate as Pvt Ltd or LLP (using our address)', 'Obtain Certificate of Incorporation', 'Write your Pitch Deck / Business Plan', 'Apply on the Startup India Portal'] },
      processSteps: [ { step: 1, title: 'Sign Up', description: 'Choose your virtual office location.' }, { step: 2, title: 'Incorporate', description: 'Use our NOC to incorporate your startup.' }, { step: 3, title: 'Apply to DPIIT', description: 'Submit your DPIIT application with your new corporate identity.' }, { step: 4, title: 'Grow', description: 'Upgrade to dedicated desks or private offices as your team expands.' } ],
      costInfo: { description: 'Annual Virtual Office Subscription', price: '₹15,000 / year', includes: ['Registered Office Address', 'NOC for Incorporation', 'Mail Handling', 'Community Access'] },
      faqs: [ { question: 'Does a virtual office affect my DPIIT chances?', answer: 'No, DPIIT only cares that you are a legally incorporated entity solving a novel problem. Using a virtual office is a standard, widely accepted practice for lean startups.' } ],
      relatedArticles: [ { slug: 'company-registration', title: 'Private Limited Registration' } ]
    }
  },
  'mail-handling': {
    routing: { slug: 'mail-handling', type: 'feature', relatedCities: ['kochi', 'coimbatore', 'trivandrum', 'calicut'] },
    seo: { title: 'Virtual Office with Mail Handling & Forwarding Services', description: 'A premium business address with professional mail handling, scanning, and forwarding services. Never miss an important legal notice or client package again.', primaryKeyword: 'Virtual Office with Mail Handling', secondaryKeywords: ['mail forwarding service', 'business address with mail', 'digital mailroom'] },
    analytics: { pageType: 'feature', searchIntent: 'Commercial / Informational', targetAudience: 'Digital Nomads, Remote Startups, Freelancers', funnelStage: 'middle', businessGoal: 'lead_generation' },
    conversion: { heroHeadline: 'Premium Business Address & Professional Mail Handling', heroSubheadline: 'Protect your privacy. Use our Grade-A commercial address for your business cards, website, and legal mail, while you work from anywhere in the world.', ctaText: 'Get Your Address' },
    scoring: { priority: 70, leadScoreWeight: 10, conversionPotential: 'medium', trafficPotential: 'medium', businessValue: 'freelancer' },
    ai: { quickAnswer: 'A Virtual Office with Mail Handling allows you to use a premium commercial address for all your business correspondence. We receive, store, and forward your mail.', answerSnippets: ['Privacy protection', 'Digital mailroom', 'Courier support'], entityRelationships: ['Mail Forwarding', 'Virtual Office', 'Digital Nomad', 'Business Address'], structuredSummary: 'Freelancers and remote teams use virtual office mail handling to project a professional image and protect their home privacy, with staff managing physical mail and courier deliveries.', commonQuestions: ['Can I use this for GST?'] },
    schema: {
      summaryTable: [ { label: 'Privacy', value: 'Keep your home address off public records' }, { label: 'Courier Support', value: 'BlueDart, FedEx, DHL, India Post' }, { label: 'Notifications', value: 'Real-time email/WhatsApp alerts' }, { label: 'Cost', value: 'From ₹10,000/year' } ],
      benefits: [ { title: 'Protect Your Home Address', description: 'Stop publishing your residential address on your website, invoices, and public directories.' }, { title: 'Never Miss a Delivery', description: 'Our reception is staffed 9 AM to 6 PM to sign for critical packages and legal notices.' }, { title: 'Digital Mailroom', description: 'Upon request, we can securely open, scan, and email urgent documents to you.' }, { title: 'Brand Prestige', description: 'A commercial address on a premium street elevates your brand perception.' } ],
      requirements: { title: 'What You Need to Sign Up', items: ['Personal ID (Aadhaar or Passport)', 'Company Proof (if acting on behalf of a business)', 'Completed KYC form'] },
      processSteps: [ { step: 1, title: 'Choose Location', description: 'Select a premium address from our network.' }, { step: 2, title: 'Update Your Details', description: 'Start using the address on your website, Google My Business, and business cards immediately.' }, { step: 3, title: 'We Receive Mail', description: 'Our front desk receives and signs for your mail.' }, { step: 4, title: 'You Get Notified', description: 'We alert you and hold/forward the mail based on your instructions.' } ],
      costInfo: { description: 'Basic Business Address & Mail Handling', price: '₹10,000 / year', includes: ['Premium Commercial Address', 'Mail Receipt & Storage', 'Email Notifications', 'Package Signing'] },
      faqs: [ { question: 'Does this plan include GST registration?', answer: 'No, the basic Mail Handling plan does not include the NOC and Rent Agreement required for GST or MCA registration. If you need government compliance, please select the GST Registration plan.' } ],
      relatedArticles: [ { slug: 'freelancers', title: 'Virtual Office for Freelancers' } ]
  },
  'kochi-infopark': {
    routing: { slug: 'kochi-infopark', type: 'registration', relatedCities: ['kochi'] },
    seo: { title: 'Virtual Office near Infopark Kochi | GST & MCA Registration', description: 'Get a premium Virtual Office address near Infopark Kochi. 100% compliant for GST and Company Registration with NOC and Rent Agreement provided.', primaryKeyword: 'Virtual Office Infopark Kochi', secondaryKeywords: ['virtual office near infopark', 'gst registration infopark kochi', 'business address kakkanad'] },
    analytics: { pageType: 'registration', searchIntent: 'Commercial', targetAudience: 'IT Startups, Agencies, Consultants', funnelStage: 'bottom', businessGoal: 'lead_generation' },
    conversion: { heroHeadline: 'Premium Virtual Office Near Infopark Kochi', heroSubheadline: 'Establish your company presence in Kerala\'s largest IT hub. Get a GST and MCA compliant business address in Kakkanad today.', ctaText: 'Get Address Near Infopark' },
    scoring: { priority: 90, leadScoreWeight: 20, conversionPotential: 'high', trafficPotential: 'high', businessValue: 'startup' },
    ai: { quickAnswer: 'WeeSpaces provides Virtual Offices near Infopark Kochi (Kakkanad) that are fully compliant for GST and MCA registrations.', answerSnippets: ['Near Infopark', 'GST Compliant'], entityRelationships: ['Infopark Kochi', 'Kakkanad', 'Virtual Office', 'GST Registration'], structuredSummary: 'IT startups and agencies use our virtual offices near Infopark Kochi to establish a premium tech address for GST and MCA compliance.', commonQuestions: ['Do you have virtual offices near Infopark?'] },
    schema: {
      summaryTable: [ { label: 'Location', value: 'Near Infopark Kochi (Kakkanad)' }, { label: 'Compliance', value: 'GST & MCA Approved' }, { label: 'Documents', value: 'NOC & Rent Agreement provided' }, { label: 'Cost', value: 'From ₹15,000/year' } ],
      benefits: [ { title: 'IT Hub Address', description: 'Register your business near Kerala\'s premier IT corridor.' }, { title: 'Fast Setup', description: 'Get all compliance documents within 24 hours.' }, { title: 'Mail Handling', description: 'Professional front desk to receive your couriers.' }, { title: 'Meeting Rooms', description: 'Access boardrooms near Infopark to meet clients.' } ],
      requirements: { title: 'Required Documents', items: ['Director KYC', 'Company Name', 'NOC (Provided by us)', 'Rent Agreement (Provided by us)'] },
      processSteps: [ { step: 1, title: 'Choose Location', description: 'Select our Kakkanad center.' }, { step: 2, title: 'Get NOC', description: 'Receive NOC and Rent Agreement.' }, { step: 3, title: 'Register', description: 'Apply for GST or MCA.' }, { step: 4, title: 'Operate', description: 'Use your new Infopark-adjacent address.' } ],
      costInfo: { description: 'Annual Subscription', price: '₹15,000 / year', includes: ['Address', 'NOC', 'Rent Agreement', 'Mail Handling'] },
      faqs: [ { question: 'Is this address physically inside Infopark?', answer: 'Our premium center is located immediately adjacent to Infopark in Kakkanad, providing the same strategic location benefits.' } ],
      relatedArticles: [ { slug: 'gst-registration', title: 'Virtual Office for GST' } ]
    }
  },
  'kochi-smartcity': {
    routing: { slug: 'kochi-smartcity', type: 'registration', relatedCities: ['kochi'] },
    seo: { title: 'Virtual Office near SmartCity Kochi | Premium Business Address', description: 'Establish your business near SmartCity Kochi with a premium virtual office. GST and MCA compliant documents provided within 24 hours.', primaryKeyword: 'Virtual Office SmartCity Kochi', secondaryKeywords: ['virtual office near smartcity', 'business address kakkanad', 'gst registration smartcity kochi'] },
    analytics: { pageType: 'registration', searchIntent: 'Commercial', targetAudience: 'Tech Companies, Startups', funnelStage: 'bottom', businessGoal: 'lead_generation' },
    conversion: { heroHeadline: 'Premium Virtual Office Near SmartCity Kochi', heroSubheadline: 'Secure a prestigious corporate address in the rapidly growing SmartCity IT corridor. Fully compliant for GST and Company Registration.', ctaText: 'Get Address Near SmartCity' },
    scoring: { priority: 85, leadScoreWeight: 20, conversionPotential: 'high', trafficPotential: 'medium', businessValue: 'startup' },
    ai: { quickAnswer: 'WeeSpaces offers Virtual Offices located near SmartCity Kochi, providing a prestigious corporate address valid for all government registrations.', answerSnippets: ['Near SmartCity', 'MCA Compliant'], entityRelationships: ['SmartCity Kochi', 'Kakkanad', 'Virtual Office', 'Company Registration'], structuredSummary: 'Establish a corporate presence near SmartCity Kochi without physical office costs. Our virtual offices include NOCs for GST and MCA.', commonQuestions: ['Is the address valid for GST?'] },
    schema: {
      summaryTable: [ { label: 'Location', value: 'Near SmartCity Kochi' }, { label: 'Compliance', value: 'GST & MCA Approved' }, { label: 'Setup Time', value: '24 Hours' }, { label: 'Cost', value: 'From ₹15,000/year' } ],
      benefits: [ { title: 'Strategic Location', description: 'Position your brand in Kochi\'s fastest-growing IT district.' }, { title: 'Compliance Ready', description: 'Documents perfectly formatted for government portals.' }, { title: 'Zero CapEx', description: 'No deposits or fit-out costs.' }, { title: 'Mail Management', description: 'We handle your important post.' } ],
      requirements: { title: 'Required Documents', items: ['KYC Proofs', 'NOC (Provided by us)', 'Rent Agreement (Provided by us)'] },
      processSteps: [ { step: 1, title: 'Sign Up', description: 'Register online.' }, { step: 2, title: 'Receive Docs', description: 'Get your compliance pack.' }, { step: 3, title: 'File on Portal', description: 'Submit to GST/MCA.' }, { step: 4, title: 'Approval', description: 'Get your registration.' } ],
      costInfo: { description: 'Annual Subscription', price: '₹15,000 / year', includes: ['Address', 'NOC', 'Rent Agreement', 'Mail Handling'] },
      faqs: [ { question: 'Can I meet clients here?', answer: 'Yes, you can book our premium meeting rooms on-demand.' } ],
      relatedArticles: [ { slug: 'company-registration', title: 'Virtual Office for Company Registration' } ]
    }
  },
  'trivandrum-technopark': {
    routing: { slug: 'trivandrum-technopark', type: 'registration', relatedCities: ['trivandrum'] },
    seo: { title: 'Virtual Office near Technopark Trivandrum | GST Address', description: 'Get a premium Virtual Office address near Technopark Trivandrum. 100% compliant for GST and Company Registration.', primaryKeyword: 'Virtual Office Technopark Trivandrum', secondaryKeywords: ['virtual office near technopark', 'gst registration technopark', 'business address kazhakootam'] },
    analytics: { pageType: 'registration', searchIntent: 'Commercial', targetAudience: 'IT Startups, Tech Agencies', funnelStage: 'bottom', businessGoal: 'lead_generation' },
    conversion: { heroHeadline: 'Premium Virtual Office Near Technopark Trivandrum', heroSubheadline: 'Establish your company presence near India\'s largest IT park. Get a GST and MCA compliant business address in Kazhakootam.', ctaText: 'Get Address Near Technopark' },
    scoring: { priority: 90, leadScoreWeight: 20, conversionPotential: 'high', trafficPotential: 'high', businessValue: 'startup' },
    ai: { quickAnswer: 'WeeSpaces provides Virtual Offices near Technopark Trivandrum (Kazhakootam) that are fully compliant for GST and MCA registrations.', answerSnippets: ['Near Technopark', 'GST Compliant'], entityRelationships: ['Technopark Trivandrum', 'Kazhakootam', 'Virtual Office', 'GST Registration'], structuredSummary: 'IT startups use our virtual offices near Technopark Trivandrum to establish a premium tech address for GST and MCA compliance.', commonQuestions: ['Do you have virtual offices near Technopark?'] },
    schema: {
      summaryTable: [ { label: 'Location', value: 'Near Technopark Trivandrum (Kazhakootam)' }, { label: 'Compliance', value: 'GST & MCA Approved' }, { label: 'Documents', value: 'NOC & Rent Agreement provided' }, { label: 'Cost', value: 'From ₹15,000/year' } ],
      benefits: [ { title: 'IT Hub Address', description: 'Register your business near India\'s premier IT corridor.' }, { title: 'Fast Setup', description: 'Get all compliance documents within 24 hours.' }, { title: 'Mail Handling', description: 'Professional front desk to receive your couriers.' }, { title: 'Meeting Rooms', description: 'Access boardrooms near Technopark to meet clients.' } ],
      requirements: { title: 'Required Documents', items: ['Director KYC', 'Company Name', 'NOC (Provided by us)', 'Rent Agreement (Provided by us)'] },
      processSteps: [ { step: 1, title: 'Choose Location', description: 'Select our Kazhakootam center.' }, { step: 2, title: 'Get NOC', description: 'Receive NOC and Rent Agreement.' }, { step: 3, title: 'Register', description: 'Apply for GST or MCA.' }, { step: 4, title: 'Operate', description: 'Use your new Technopark-adjacent address.' } ],
      costInfo: { description: 'Annual Subscription', price: '₹15,000 / year', includes: ['Address', 'NOC', 'Rent Agreement', 'Mail Handling'] },
      faqs: [ { question: 'Is this address physically inside Technopark?', answer: 'Our premium center is located immediately adjacent to Technopark in Kazhakootam, providing the same strategic location benefits.' } ],
      relatedArticles: [ { slug: 'gst-registration', title: 'Virtual Office for GST' } ]
    }
  },
  'coimbatore-tidel-park': {
    routing: { slug: 'coimbatore-tidel-park', type: 'registration', relatedCities: ['coimbatore'] },
    seo: { title: 'Virtual Office near TIDEL Park Coimbatore | GST Address', description: 'Get a premium Virtual Office address near TIDEL Park Coimbatore. 100% compliant for GST and Company Registration.', primaryKeyword: 'Virtual Office TIDEL Park Coimbatore', secondaryKeywords: ['virtual office near tidel park', 'gst registration tidel park', 'business address peelamedu'] },
    analytics: { pageType: 'registration', searchIntent: 'Commercial', targetAudience: 'IT Startups, SaaS Companies', funnelStage: 'bottom', businessGoal: 'lead_generation' },
    conversion: { heroHeadline: 'Premium Virtual Office Near TIDEL Park Coimbatore', heroSubheadline: 'Establish your company presence near Coimbatore\'s premier IT park. Get a GST and MCA compliant business address today.', ctaText: 'Get Address Near TIDEL Park' },
    scoring: { priority: 90, leadScoreWeight: 20, conversionPotential: 'high', trafficPotential: 'high', businessValue: 'startup' },
    ai: { quickAnswer: 'WeeSpaces provides Virtual Offices near TIDEL Park Coimbatore that are fully compliant for GST and MCA registrations.', answerSnippets: ['Near TIDEL Park', 'GST Compliant'], entityRelationships: ['TIDEL Park Coimbatore', 'Peelamedu', 'Virtual Office', 'GST Registration'], structuredSummary: 'IT startups use our virtual offices near TIDEL Park Coimbatore to establish a premium tech address for GST and MCA compliance.', commonQuestions: ['Do you have virtual offices near TIDEL Park?'] },
    schema: {
      summaryTable: [ { label: 'Location', value: 'Near TIDEL Park Coimbatore' }, { label: 'Compliance', value: 'GST & MCA Approved' }, { label: 'Documents', value: 'NOC & Rent Agreement provided' }, { label: 'Cost', value: 'From ₹15,000/year' } ],
      benefits: [ { title: 'IT Hub Address', description: 'Register your business near Coimbatore\'s premier IT corridor.' }, { title: 'Fast Setup', description: 'Get all compliance documents within 24 hours.' }, { title: 'Mail Handling', description: 'Professional front desk to receive your couriers.' }, { title: 'Meeting Rooms', description: 'Access boardrooms near TIDEL Park to meet clients.' } ],
      requirements: { title: 'Required Documents', items: ['Director KYC', 'Company Name', 'NOC (Provided by us)', 'Rent Agreement (Provided by us)'] },
      processSteps: [ { step: 1, title: 'Choose Location', description: 'Select our center near TIDEL Park.' }, { step: 2, title: 'Get NOC', description: 'Receive NOC and Rent Agreement.' }, { step: 3, title: 'Register', description: 'Apply for GST or MCA.' }, { step: 4, title: 'Operate', description: 'Use your new TIDEL Park-adjacent address.' } ],
      costInfo: { description: 'Annual Subscription', price: '₹15,000 / year', includes: ['Address', 'NOC', 'Rent Agreement', 'Mail Handling'] },
      faqs: [ { question: 'Is this address physically inside TIDEL Park?', answer: 'Our premium center is located near TIDEL Park, providing the same strategic location benefits and prestige.' } ],
      relatedArticles: [ { slug: 'gst-registration', title: 'Virtual Office for GST' } ]
    }
  }
};
