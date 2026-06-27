import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import InteractivePlanSelector from '@/components/ui/InteractivePlanSelector';
import VoPricingCards from '@/components/ui/VoPricingCards';
import VoDocumentChecklist from '@/components/ui/VoDocumentChecklist';
import VoHowItWorks from '@/components/ui/VoHowItWorks';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = constructMetadata({
  title: "Virtual Office in Kerala & Tamil Nadu | GST & Business Address | WeeSpaces",
  description: "India's most transparent virtual office provider. Get a premium business address for GST registration, company incorporation, and mail handling in Kochi, Coimbatore, Trivandrum & Calicut.",
  canonicalPath: "/virtual-office"
});

export default function VirtualOfficeHub() {
  const targetAudiences = [
    { title: "Startups & Tech Companies", icon: "rocket_launch", link: "/virtual-office/company-registration" },
    { title: "E-Commerce Sellers", icon: "shopping_cart", link: "/virtual-office/gst-registration" },
    { title: "Freelancers & Consultants", icon: "laptop_mac", link: "/virtual-office/business-address" },
    { title: "Overseas Founders", icon: "public", link: "/virtual-office/company-registration" },
    { title: "Private Limited Companies", icon: "business", link: "/virtual-office/company-registration" },
    { title: "Limited Liability Partnerships", icon: "handshake", link: "/virtual-office/company-registration" }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-40 bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/exterior.jpg" alt="WeeSpaces Premium Office" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/95 to-navy"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              India&apos;s Most Transparent Virtual Office Provider
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto">
              Register Your GST & Company Using a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Premium Business Address</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
              Get a legally compliant virtual office with business address, documentation, mail handling and workspace access. Ready in 48 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. INTERACTIVE PLAN SELECTOR */}
      <section className="relative z-20 px-6 mb-24">
        <ScrollReveal delay={0.2}>
          <InteractivePlanSelector />
        </ScrollReveal>
      </section>

      {/* 3. TRUST & AUTHORITY STRIP */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-gray-200/50">
            <div>
              <p className="text-3xl font-black text-navy mb-1">500+</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Businesses Served</p>
            </div>
            <div>
              <p className="text-3xl font-black text-navy mb-1 flex items-center justify-center gap-1">4.9 <span className="material-symbols-outlined text-accent text-3xl">star</span></p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Google Rating</p>
            </div>
            <div>
              <p className="text-3xl font-black text-navy mb-1">4</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Prime Cities</p>
            </div>
            <div>
              <p className="text-3xl font-black text-navy mb-1">48<span className="text-xl">hrs</span></p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Fast Setup</p>
            </div>
            <div className="col-span-2 md:col-span-1 border-t md:border-t-0 md:border-l pt-6 md:pt-0 border-gray-200/50">
              <p className="text-3xl font-black text-navy mb-1">100%</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">GST Compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CITY AVAILABILITY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Prime Locations Across South India</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Choose a prestigious business address that builds trust with your clients and partners.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "Coimbatore", title: "Tamil Nadu Expansion", perks: ["TN GST Registration", "Mail Handling", "Meeting Rooms", "Manufacturing Hub"] },
              { city: "Kochi", title: "Near Infopark", perks: ["Kerala GST Registration", "Premium IT Address", "Startup Ecosystem", "Workspace Access"] },
              { city: "Trivandrum", title: "Near Technopark", perks: ["Kerala GST Registration", "Govt Contractors", "IT Hub Presence", "Mail Forwarding"] },
              { city: "Calicut", title: "Flagship Hub", perks: ["Kerala GST Registration", "Regional Expansion", "SME Friendly", "Flexible Plans"] }
            ].map((loc, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Link href={`/virtual-office/${loc.city.toLowerCase()}`} className="block group h-full">
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-accent transition-all h-full flex flex-col">
                    <h3 className="text-2xl font-black text-navy mb-1 group-hover:text-accent transition-colors">{loc.city}</h3>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">{loc.title}</p>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {loc.perks.map((perk, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="material-symbols-outlined text-accent text-sm">check</span>
                          {perk}
                        </li>
                      ))}
                    </ul>
                    <span className="text-accent font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Plans <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO IS THIS FOR? */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Who Uses a Virtual Office?</h2>
              <p className="text-white/60 max-w-2xl mx-auto">From solopreneurs to expanding enterprises, our virtual offices solve critical legal and operational challenges.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudiences.map((aud, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <MouseGlowCard className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-accent">{aud.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg group-hover:text-accent transition-colors">{aud.title}</h4>
                  </div>
                </MouseGlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DOCUMENTATION TRANSPARENCY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <VoDocumentChecklist />
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <VoHowItWorks />
        </div>
      </section>

      {/* 8. PRODUCTIZED PRICING */}
      <section className="py-24 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Transparent Pricing. No Hidden Fees.</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Choose the package that aligns perfectly with your registration and operational needs.</p>
            </div>
          </ScrollReveal>
          
          <VoPricingCards />
        </div>
      </section>

      {/* 9. VIRTUAL OFFICE KNOWLEDGE CENTER */}
      <section className="py-24 bg-navy-light text-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Virtual Office Knowledge Center</h2>
                <p className="text-white/60 max-w-2xl">Everything you need to know about registering companies and GST using a virtual address.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Virtual Office for GST Registration", link: "/virtual-office/gst-registration", icon: "account_balance" },
              { title: "Virtual Office for Company Registration", link: "/virtual-office/company-registration", icon: "business_center" },
              { title: "Virtual Office vs Physical Office", link: "/virtual-office/vs-physical-office", icon: "compare_arrows" },
              { title: "Virtual Office Pricing Guide", link: "/virtual-office/pricing", icon: "payments" },
              { title: "Mail Handling & Forwarding Guide", link: "/virtual-office/mail-handling", icon: "local_post_office" },
              { title: "Frequently Asked Questions", link: "/virtual-office/faq", icon: "quiz" },
            ].map((guide, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Link href={guide.link} className="block group h-full">
                  <div className="bg-navy p-6 rounded-2xl border border-white/10 hover:border-accent transition-colors flex items-center gap-4 h-full">
                    <span className="material-symbols-outlined text-white/30 group-hover:text-accent transition-colors text-3xl">
                      {guide.icon}
                    </span>
                    <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{guide.title}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. LEAD FORM CTA */}
      <section className="py-24" id="lead-form">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Get Your Virtual Office Quote</h2>
              <p className="text-gray-500">Fill out the form below and our team will get back to you within 2 hours with the required documentation.</p>
            </div>
            <LeadForm />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
