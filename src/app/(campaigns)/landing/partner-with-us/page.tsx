import { Metadata } from 'next';
import {
  Building2,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Landmark,
  FileCheck2,
  CalendarClock,
  Briefcase,
  Users,
  Globe,
  Sparkles,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Layers,
  Award,
} from 'lucide-react';
import PartnerLeadForm from '@/components/PartnerLeadForm';
import PartnerRevenueCalculator from '@/components/PartnerRevenueCalculator';

export const metadata: Metadata = {
  title: 'Partner with Wee Spaces | Turn Your Commercial Property into a Coworking Business (Up to 70% Revenue Share)',
  description:
    'Own a commercial building in Kerala? Partner with Wee Spaces (Since 2018) through our transparent 60:40, 65:35, or 70:30 revenue-sharing model. Zero franchise fees, monthly 7-day payouts, and dual coworking + virtual office income.',
  openGraph: {
    title: 'Your Property. Our Brand. Shared Revenue! | Partner with Wee Spaces',
    description:
      'Turn your commercial space in Kerala into recurring monthly income with Wee Spaces. Keep up to 70% of Net Eligible Collections.',
    type: 'website',
  },
};

const TIER_CARDS = [
  {
    name: 'Standard Centre',
    ownerPct: '60%',
    weePct: '40%',
    badge: 'Ready Commercial Space',
    highlight: false,
    description: 'Ideal for functional, furnished commercial floors ready for immediate coworking operations.',
    seatMonthly100: '₹1,20,000 / mo',
    annual50Vo: '₹17.10 Lakhs / yr',
    threeYearBase: '₹39.78 Lakhs',
    idealFor: 'Commercial floors with standard workstations, AC & fiber connectivity',
  },
  {
    name: 'Premium Centre',
    ownerPct: '65%',
    weePct: '35%',
    badge: 'Most Popular',
    highlight: true,
    description: 'Designed for modern Grade-A interiors featuring ergonomic desks, private cabins & meeting rooms.',
    seatMonthly100: '₹1,30,000 / mo',
    annual50Vo: '₹18.52 Lakhs / yr',
    threeYearBase: '₹43.09 Lakhs',
    idealFor: 'Upgraded commercial hubs in prime city corridors (Kochi, Trivandrum, Calicut, Thrissur)',
  },
  {
    name: 'Luxury Centre',
    ownerPct: '70%',
    weePct: '30%',
    badge: 'Flagship Executive Grade',
    highlight: false,
    description: 'Built for landmark commercial towers with luxury lounges, executive boardrooms & concierge ambiance.',
    seatMonthly100: '₹1,40,000 / mo',
    annual50Vo: '₹19.95 Lakhs / yr',
    threeYearBase: '₹46.41 Lakhs',
    idealFor: 'Landmark Grade-A buildings with high-end fit-outs & full corporate amenities',
  },
];

const OWNER_CONTRIBUTIONS = [
  'Commercial premises ready for coworking operations',
  'Furniture, workstations, AC & core electrical infrastructure',
  'Power backup & high-speed utility connectivity',
  'Local housekeeping, security & routine facility maintenance',
  'Building-level statutory, fire, safety & insurance compliance',
  'Project-level operating costs & local marketing spend (rec. ₹5,000/mo)',
];

const WEESPACES_CONTRIBUTIONS = [
  'Established Wee Spaces Brand & Trademark Licence (Since 2018)',
  'Full-funnel Digital Marketing, SEO & Local Lead Generation',
  'Online visibility, Google Maps & marketplace listings',
  'Sales funnel, client tours, contracting & member onboarding',
  'High-margin Virtual Office sales engine (₹9,000+/client/year)',
  'Principal operator invoicing, GST remittance, collections & Monthly MIS',
];

const PRODUCTS_WORKSPACE = [
  { title: 'Single Seats', desc: 'Dedicated workspace options for individual professionals & freelancers.' },
  { title: 'Workstations', desc: 'Ergonomic, high-focus setups for daily teams and startup squads.' },
  { title: 'Private Cabins', desc: 'Lockable, sound-insulated private offices for growing teams.' },
  { title: 'Work Lounge', desc: 'Flexible collaborative zones available Hourly, Daily, Monthly, Quarterly & Annually.' },
];

const PRODUCTS_BUSINESS = [
  { title: 'Virtual Office (₹9,000+/yr)', desc: 'High-margin recurring revenue from GST & MCA business address registrations.' },
  { title: 'Meeting Rooms', desc: 'Hourly boardrooms for client presentations, interviews & corporate workshops.' },
  { title: 'Company & GST Registration', desc: 'End-to-end business setup assistance creating sticky, long-term tenants.' },
  { title: 'Growth & Funding Support', desc: 'Digital marketing, entrepreneurial guidance & angel/seed investor connections.' },
];

const ROADMAP_STEPS = [
  { step: '01', title: 'Commercial Approval', desc: 'Approve revenue-share tier (60/65/70%), seat pricing & operating structure.' },
  { step: '02', title: 'Site Due Diligence', desc: 'Verify premises readiness, workstation count, utilities & statutory compliance.' },
  { step: '03', title: 'Definitive Agreement', desc: 'Execute 3-year Service Provider & Revenue-Sharing Agreement with clear terms.' },
  { step: '04', title: 'Dedicated Banking Setup', desc: 'Open dedicated project bank account & confirm GST/TDS workflows.' },
  { step: '05', title: 'Brand & Listing Setup', desc: 'Install Wee Spaces signage, launch dedicated landing page & local listings.' },
  { step: '06', title: 'Marketing Launch', desc: 'Deploy targeted Google & Meta campaigns for Coworking + Virtual Offices.' },
  { step: '07', title: 'Sales Activation', desc: 'Qualify leads, conduct centre tours & onboard clients under Wee Spaces contracts.' },
  { step: '08', title: 'Monthly Governance', desc: 'Monthly MIS reporting, reconciliation & owner payout within 7 working days.' },
];

const PARTNER_FAQS = [
  {
    q: 'How is the revenue share calculated? Is it "profit sharing"?',
    a: 'No — it is a transparent revenue share on actual Net Eligible Collections (customer amounts actually received, excluding GST, refunds, chargebacks, and refundable security deposits). This avoids murky disputes over depreciation, unrelated overheads, or accounting adjustments.',
  },
  {
    q: 'Who contracts with customers and handles GST invoicing?',
    a: 'Wee Spaces acts as the Principal Operator and Service Provider. Customers sign standard Wee Spaces agreements, and Wee Spaces raises all invoices, collects payments into a dedicated project bank account, remits GST, and transfers your 60%–70% share monthly (net of applicable TDS) within 7 working days of month-end.',
  },
  {
    q: 'What happens to customer security deposits?',
    a: 'Customer security deposits are refundable liabilities, not project income. They are held separately in the dedicated project bank account and returned to customers per their agreement terms.',
  },
  {
    q: 'How much commercial space or seating capacity do I need?',
    a: 'Our standard model is illustrated for a 50-seat centre (typically 2,000–3,000 sq.ft.), though we evaluate well-located commercial properties across Kerala starting from 1,500 sq.ft. (25+ seats) up to 10,000+ sq.ft. in Kochi, Trivandrum, Calicut, Thrissur, Kottayam, Kannur, and other growing hubs.',
  },
  {
    q: 'Who funds the digital marketing budget?',
    a: 'Wee Spaces leads all digital marketing strategy, ad management, SEO, and sales execution at zero agency retainer fee. The direct local ad spend (recommended starting budget of ₹5,000/month, reviewed after 90 days based on occupancy and lead volume) is funded by the property owner as a project cost.',
  },
  {
    q: 'What is the agreement tenure and exit process?',
    a: 'We recommend a 3-year initial term with automatic 1-year renewals. Either party may exit with 12 months’ written notice, backed by a structured Exit Transition clause ensuring all settlements, security deposits, and active customer handovers happen smoothly without disruption.',
  },
];

export default function PartnerWithUsLandingPage() {
  const waDirectUrl =
    'https://wa.me/919207189111?text=' +
    encodeURIComponent(
      'Hi WeeSpaces Team, I saw your Kerala Commercial Property Partnership offer and would like to discuss turning my building into a coworking space.'
    );

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans selection:bg-accent selection:text-navy pb-20 md:pb-0">
      {/* 1. HERO SECTION — Direct Match to Meta Ads */}
      <section className="relative pt-10 pb-20 lg:pt-14 lg:pb-24 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-[url('/images/kochi_coworking.jpg')] opacity-[0.14] mix-blend-overlay bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-slate-900" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Copy */}
            <div className="lg:col-span-7 text-white pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Kerala Commercial Property Expansion • Since 2018
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6">
                Your Property. Our Brand.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-300">
                  Shared Revenue!
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Join hands with <strong className="text-white">Wee Spaces</strong>! Turn your commercial building in Kerala into a thriving coworking &amp; virtual office hub — keep{' '}
                <strong className="text-accent">60% to 70% of Net Eligible Collections</strong> while we bring the brand, marketing, sales engine, and monthly management.
              </p>

              {/* Key Metric Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 max-w-2xl">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-accent">60–70%</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Owner Revenue Share</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-white">₹0</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Franchise / Brand Fee</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">7 Days</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Monthly Bank Payout</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-white">2018</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Established Brand</div>
                </div>
              </div>

              {/* Bullet Value Box */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 max-w-2xl backdrop-blur-sm">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" /> Why Kerala Property Owners Partner With Wee Spaces
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-slate-200">
                  {[
                    'Monetise furnished commercial space without building a coworking brand from scratch',
                    'Dual income stream: Monthly Coworking Seats + High-Margin Virtual Office clients (₹9,000/yr)',
                    'Dedicated project bank account with transparent monthly MIS & bank statements',
                    'Wee Spaces acts as Principal Operator — handling contracts, GST invoicing & collections',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-accent" /> Active in Kochi, Trivandrum, Calicut &amp; Coimbatore
                </span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <a
                  href={waDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold underline underline-offset-4"
                >
                  <MessageCircle className="w-4 h-4" /> Chat with Expansion Team on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-5">
              <PartnerLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE REVENUE-SHARING TIERS (Standard 60:40 | Premium 65:35 | Luxury 70:30) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
              Transparent Partnership Models
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mt-4 mb-4 tracking-tight">
              Three Revenue-Sharing Tiers Built Around Your Asset
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Higher-grade interiors earn a higher owner share. All models are calculated transparently on{' '}
              <strong className="text-navy">Net Eligible Collections</strong> (actual receipts excluding GST &amp; refundable deposits).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7 items-stretch">
            {TIER_CARDS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  tier.highlight
                    ? 'bg-navy text-white shadow-2xl ring-2 ring-accent scale-[1.01]'
                    : 'bg-slate-50 text-navy border border-slate-200 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        tier.highlight ? 'bg-accent text-navy' : 'bg-white text-navy border border-slate-200'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black mb-2">{tier.name}</h3>
                  <p className={`text-sm leading-relaxed mb-6 ${tier.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                    {tier.description}
                  </p>

                  {/* Split Highlight */}
                  <div
                    className={`rounded-2xl p-5 mb-6 ${
                      tier.highlight ? 'bg-white/10 border border-white/15' : 'bg-white border border-slate-200'
                    }`}
                  >
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className={`text-xs font-bold uppercase ${tier.highlight ? 'text-accent' : 'text-amber-700'}`}>
                          Your Share (Owner)
                        </div>
                        <div className="text-4xl font-black mt-1">{tier.ownerPct}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-bold uppercase ${tier.highlight ? 'text-slate-400' : 'text-slate-400'}`}>
                          Wee Spaces
                        </div>
                        <div className={`text-2xl font-black mt-1 ${tier.highlight ? 'text-slate-200' : 'text-slate-500'}`}>
                          {tier.weePct}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Illustrative 50-Seat Metrics */}
                  <div className="space-y-3 text-sm mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider opacity-60">
                      Illustrative 50-Seat Economics*
                    </div>
                    <div className="flex justify-between py-2 border-b border-current/10">
                      <span className="opacity-80">100% Seat Revenue Share</span>
                      <span className="font-black">{tier.seatMonthly100}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-current/10">
                      <span className="opacity-80">50 Seats + 50 VO Clients / Yr</span>
                      <span className={`font-black ${tier.highlight ? 'text-accent' : 'text-emerald-700'}`}>
                        {tier.annual50Vo}
                      </span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="opacity-80">3-Year Base-Case Cumulative</span>
                      <span className="font-black">{tier.threeYearBase}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className={`text-xs mb-5 leading-relaxed ${tier.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                    <strong>Best for:</strong> {tier.idealFor}
                  </p>
                  <a
                    href="#partner-form"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-black text-sm transition-all ${
                      tier.highlight
                        ? 'bg-accent hover:bg-accent-light text-navy shadow-lg'
                        : 'bg-navy hover:bg-navy/90 text-white'
                    }`}
                  >
                    Enquire for {tier.name} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-8 max-w-3xl mx-auto">
            *Illustrative planning figures modeled on a 50-seat centre at ₹4,000/seat/month and Virtual Office clients at ₹9,000/year (Base-Case 3-Year occupancy: 60% Yr 1, 75% Yr 2, 85% Yr 3; VO clients: 25 → 50 → 75). Actual rates and projections are customized per city and property grade.
          </p>
        </div>
      </section>

      {/* 3. INTERACTIVE REVENUE CALCULATOR */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-7xl">
          <PartnerRevenueCalculator />
        </div>
      </section>

      {/* 4. CONTRIBUTION MATRIX — WHO DOES WHAT */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-navy bg-slate-100 px-3.5 py-1.5 rounded-full">
              Complementary Value Exchange
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mt-4 mb-4">
              You Bring the Space. We Bring the Business Engine.
            </h2>
            <p className="text-slate-600">
              A clear, auditable division of responsibilities — designed so property owners never have to worry about branding, digital ads, sales pipelines, or tenant invoicing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Owner Column */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-navy text-accent flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-navy">Property Owner (Business Entity)</h3>
                  <p className="text-xs font-semibold text-slate-500">Asset, Infrastructure &amp; Facility Readiness</p>
                </div>
              </div>
              <ul className="space-y-4">
                {OWNER_CONTRIBUTIONS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wee Spaces Column */}
            <div className="bg-navy text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-accent text-navy flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Wee Spaces (Principal Operator)</h3>
                  <p className="text-xs font-semibold text-accent">Brand, Sales, Marketing &amp; Collections</p>
                </div>
              </div>
              <ul className="space-y-4 relative z-10">
                {WEESPACES_CONTRIBUTIONS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-200 text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MULTI-PRODUCT REVENUE ENGINE */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Maximum Yield Per Sq.Ft.
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mt-4 mb-4">
              Multiple Revenue Streams From One Commercial Building
            </h2>
            <p className="text-slate-600">
              Unlike traditional leasing where income is capped by floor area, Wee Spaces stacks coworking memberships with zero-footprint Virtual Office subscriptions and business services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5 text-navy font-black text-lg mb-6">
                <Layers className="w-5 h-5 text-accent" /> Workspace Products (Hourly to Annual)
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {PRODUCTS_WORKSPACE.map((p) => (
                  <div key={p.title} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-navy text-sm mb-1">{p.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Hourly', 'Daily', 'Monthly', 'Bi-Monthly', 'Quarterly', 'Annually'].map((plan) => (
                  <span key={plan} className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-navy/5 text-navy">
                    {plan}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5 text-navy font-black text-lg mb-6">
                <Briefcase className="w-5 h-5 text-emerald-600" /> High-Margin Business Services
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {PRODUCTS_BUSINESS.map((p) => (
                  <div key={p.title} className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                    <h4 className="font-bold text-navy text-sm mb-1">{p.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-3.5 rounded-xl bg-navy text-white text-xs leading-relaxed">
                <strong className="text-accent">Virtual Office Multiplier:</strong> Adding just 50 Virtual Office clients at ₹9,000/yr generates <strong>₹4.50 Lakhs/year</strong> in extra revenue without occupying a single physical desk.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSTITUTIONAL GOVERNANCE & TRANSPARENCY */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-accent bg-white/10 px-3.5 py-1.5 rounded-full">
              Built for Complete Financial Clarity
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-4 mb-4">
              Auditable Governance &amp; Protected Cash Flows
            </h2>
            <p className="text-slate-300">
              Every Wee Spaces partnership runs on strict financial controls so both parties enjoy complete visibility and zero billing friction.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Landmark,
                title: 'Dedicated Project Bank Account',
                desc: 'A separate bank account exclusively for all centre collections & payouts, with monthly bank statements shared with you.',
              },
              {
                icon: CalendarClock,
                title: '7-Working-Day Monthly Payout',
                desc: 'Your 60%–70% share is remitted monthly within 7 working days of month-end, accompanied by a full MIS & settlement statement.',
              },
              {
                icon: FileCheck2,
                title: 'Clean GST & TDS Compliance',
                desc: 'Wee Spaces raises all customer invoices and remits GST directly. Refundable customer security deposits are ring-fenced separately.',
              },
              {
                icon: ShieldCheck,
                title: 'Mutual Commercial Control',
                desc: 'Joint approval on pricing updates and discounts above 5%. Structured 3-year term with a fair 12-month exit transition clause.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-11 h-11 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. 8-STAGE LAUNCH ROADMAP */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-navy bg-slate-100 px-3.5 py-1.5 rounded-full">
              From Enquiry to Recurring Cash Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mt-4 mb-4">
              8-Stage Implementation Roadmap
            </h2>
            <p className="text-slate-600">
              A proven, step-by-step onboarding blueprint to launch your Wee Spaces coworking hub smoothly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROADMAP_STEPS.map((item) => (
              <div key={item.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-navy/40 transition-colors">
                <div className="text-xs font-black text-amber-600 tracking-widest mb-2">STAGE {item.step}</div>
                <h3 className="text-base font-black text-navy mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PARTNER FAQS */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Key commercial, legal, and operational answers for prospective property partners.
            </p>
          </div>

          <div className="space-y-4">
            {PARTNER_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm open:border-navy/40"
              >
                <summary className="font-bold text-navy text-base sm:text-lg cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <span className="text-accent font-black text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4 pt-4 border-t border-slate-100">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CONVERSION CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Have a Commercial Building in Kerala? Let&apos;s Build a Coworking Business Together.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Schedule a confidential site evaluation with WeeSpace Ventures Pvt. Ltd. and receive a customized 3-year financial projection for your property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#partner-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-navy font-black py-4 px-8 rounded-xl shadow-lg transition-all"
            >
              Request Custom Proposal <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={waDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp +91 92071 89111
            </a>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 flex gap-2.5 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a
          href="tel:+919207189111"
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-navy text-white font-bold py-3 rounded-xl text-sm"
        >
          <PhoneCall className="w-4 h-4 text-accent" /> Call Now
        </a>
        <a
          href={waDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
