import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import { Handshake, Building2, Briefcase, GraduationCap, ArrowRight, ShieldCheck, Gem } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = constructMetadata({
  title: 'Partner Network | WeeSpaces Ecosystem',
  description: 'Join the WeeSpaces Partner Network. We partner with Startup Incubators, CAs, Accelerators, and VC Funds to empower businesses in South India.',
  canonicalPath: '/partner-network',
});

const partnerCategories = [
  {
    title: 'Startup Incubators & Accelerators',
    icon: <GraduationCap className="w-8 h-8 text-accent" />,
    description: 'Provide your cohort with premium workspace subsidies and seamless graduation from incubator to private office.',
    benefits: ['Subsidized cohort pricing', 'Co-branded events & workshops', 'Direct access to WeeSpaces mentors']
  },
  {
    title: 'Chartered Accountants & CS',
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    description: 'Ensure your clients have a compliant, premium business address for GST and MCA registration across Kerala and Tamil Nadu.',
    benefits: ['Dedicated channel manager', 'Instant NOC & agreement generation', 'Volume-based referral commissions']
  },
  {
    title: 'VC Funds & Angel Networks',
    icon: <Gem className="w-8 h-8 text-accent" />,
    description: 'Set up your portfolio companies for success with zero CapEx on infrastructure and flexible scaling.',
    benefits: ['Portfolio infrastructure audits', 'Flexible expansion rights', 'VIP meeting room access for diligence']
  },
  {
    title: 'HR & Recruitment Firms',
    icon: <Briefcase className="w-8 h-8 text-accent" />,
    description: 'Help your clients establish regional hub-and-spoke offices to attract top talent in Tier-2 cities.',
    benefits: ['Talent relocation support', 'Rapid branch office setup', 'Strategic referral program']
  }
];

export default function PartnerNetworkPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/exterior.jpg" alt="Partner Network" fill className="object-cover opacity-10" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-6 uppercase tracking-wider">
              <Handshake className="w-4 h-4" /> B2B Ecosystem
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Grow Together with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">WeeSpaces Partner Network</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 font-light">
              We collaborate with CAs, VC Funds, Incubators, and HR firms to provide businesses with the best infrastructure in South India while generating mutual growth.
            </p>
            <div className="flex gap-4">
              <Link href="#apply" className="bg-accent text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/20">
                Become a Partner
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="hidden lg:grid grid-cols-2 gap-4">
             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-4xl font-black text-accent mb-2">50+</h3>
                <p className="text-white/70 font-medium">Active Partners</p>
             </div>
             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm translate-y-8">
                <h3 className="text-4xl font-black text-accent mb-2">₹2M+</h3>
                <p className="text-white/70 font-medium">Commissions Paid</p>
             </div>
             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-4xl font-black text-accent mb-2">4</h3>
                <p className="text-white/70 font-medium">Major IT Hubs</p>
             </div>
             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm translate-y-8">
                <h3 className="text-4xl font-black text-accent mb-2">100%</h3>
                <p className="text-white/70 font-medium">Support SLA</p>
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. WHO WE PARTNER WITH */}
      <section className="py-24 bg-gray-50">
         <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Who should join the network?</h2>
               <p className="text-gray-600 text-lg">Whether you are helping a client register their first company or expanding a 500-person enterprise, we have a strategic partnership model for you.</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
               {partnerCategories.map((category, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                     <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 h-full hover:shadow-xl transition-shadow group">
                        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                           {category.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-navy mb-4">{category.title}</h3>
                        <p className="text-gray-600 mb-6">{category.description}</p>
                        <h4 className="font-bold text-sm text-navy uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Partnership Benefits</h4>
                        <ul className="space-y-3">
                           {category.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-700 font-medium">
                                 <span className="text-accent mt-1">•</span> {benefit}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-24 bg-white border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
               <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8">A seamless referral & reward process.</h2>
               <div className="space-y-8">
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-navy text-accent rounded-full flex items-center justify-center font-bold text-xl shrink-0">1</div>
                     <div>
                        <h3 className="text-xl font-bold text-navy mb-2">Register & Onboard</h3>
                        <p className="text-gray-600">Sign the partner agreement and get assigned a dedicated Channel Account Manager.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-navy text-accent rounded-full flex items-center justify-center font-bold text-xl shrink-0">2</div>
                     <div>
                        <h3 className="text-xl font-bold text-navy mb-2">Refer Clients</h3>
                        <p className="text-gray-600">Submit leads securely through our partner portal or directly via WhatsApp to your manager.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-accent text-navy rounded-full flex items-center justify-center font-bold text-xl shrink-0 shadow-[0_0_20px_rgba(255,215,0,0.4)]">3</div>
                     <div>
                        <h3 className="text-xl font-bold text-navy mb-2">Earn & Grow</h3>
                        <p className="text-gray-600">Receive transparent, prompt commission payouts upon successful deal closure, plus recurring benefits for renewals.</p>
                     </div>
                  </div>
               </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
               <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200" id="apply">
                  <h3 className="text-2xl font-bold text-navy mb-6">Apply to the Network</h3>
                  <form className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" />
                        <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" />
                     </div>
                     <input type="email" placeholder="Work Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" />
                     <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" />
                     <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent bg-white text-gray-500">
                        <option value="">Partner Category</option>
                        <option value="CA/CS">Chartered Accountant / CS</option>
                        <option value="Incubator">Incubator / Accelerator</option>
                        <option value="VC">VC / Angel Fund</option>
                        <option value="HR">HR / Recruitment Firm</option>
                        <option value="Other">Other</option>
                     </select>
                     <button type="button" className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-navy/90 transition-colors shadow-lg mt-4">
                        Submit Application
                     </button>
                  </form>
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* JSON-LD SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "WeeSpaces Partner Network",
            "description": "Join the WeeSpaces Partner Network. We partner with Startup Incubators, CAs, Accelerators, and VC Funds.",
            "url": "https://weespaces.in/partner-network"
          })
        }}
      />
    </div>
  );
}
