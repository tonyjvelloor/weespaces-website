import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { CheckCircle, Shield, Building, Clock, ChevronRight } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import TrustLayer from '@/components/ui/TrustLayer';
import SEOFAQ from '@/components/SEOFAQ';
import { cities } from '@/data/locations';

export const metadata: Metadata = constructMetadata({
  title: "Managed Office Spaces & Custom Build-outs | WeeSpaces",
  description: "Enterprise-grade managed office spaces across South India. Fully custom build-outs, zero CapEx, and end-to-end facility management for teams of 20 to 500+.",
  canonicalPath: "/managed-office",
});

export default function ManagedOfficeRootPage() {
  const steps = [
    { title: "Needs Assessment", desc: "We analyze your space, layout, IT, and security requirements.", icon: "insights" },
    { title: "Custom Design", desc: "Our architects create a tailored layout that reflects your brand.", icon: "design_services" },
    { title: "Rapid Build-out", desc: "We construct your bespoke office within 45-60 days.", icon: "construction" },
    { title: "Handover & Management", desc: "Move in. We handle all operations, cleaning, and IT.", icon: "handshake" }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-40 bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/exterior.jpg" alt="Managed Office Buildout" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/95 to-navy"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Enterprise Grade Workspaces
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Bespoke <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Managed Offices</span> for Scaling Teams
            </h1>
            <p className="text-xl text-white/80 mb-12 font-light">
              Your own private, branded headquarters without the massive CapEx, long leases, or operational headaches. We design, build, and operate it for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <a href="#consultation" className="bg-accent text-navy px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform text-center shadow-lg shadow-accent/20">
                 Request Consultation
               </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="relative w-full max-w-md mx-auto lg:mr-0">
             <div className="bg-white rounded-3xl p-8 shadow-2xl relative z-10" id="consultation">
                <h3 className="text-2xl font-black text-navy mb-2">Build Your Office</h3>
                <p className="text-gray-500 mb-6 text-sm">Tell us your requirements, and our enterprise team will prepare a custom proposal.</p>
                <LeadForm source="Managed Office Root Hero" />
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Why Shift to Managed Offices?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Traditional commercial real estate is rigid. Managed offices offer the privacy of a traditional lease with the agility of coworking.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { icon: <Shield className="w-8 h-8 text-accent" />, title: "Zero CapEx", desc: "No upfront capital required for interior design, furniture, or IT infrastructure. Preserve your capital for core business growth." },
               { icon: <Building className="w-8 h-8 text-accent" />, title: "Complete Privacy", desc: "Your own dedicated floor or wing with private access control, customized network security, and your company branding." },
               { icon: <Clock className="w-8 h-8 text-accent" />, title: "End-to-End Ops", desc: "We handle housekeeping, security, IT maintenance, and utilities. You focus entirely on your business." }
             ].map((feature, idx) => (
               <ScrollReveal key={idx} delay={idx * 0.1}>
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                 </div>
               </ScrollReveal>
             ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">From Concept to Keys in 45 Days</h2>
              <p className="text-white/60 max-w-2xl mx-auto">Our streamlined build-to-suit process guarantees rapid deployment.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full relative">
                  <div className="text-6xl font-black text-white/5 absolute top-4 right-4">{idx + 1}</div>
                  <span className="material-symbols-outlined text-accent text-4xl mb-4">{step.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOCATIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Available in Prime IT Corridors</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(cities).map((city, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Link href={`/managed-office/${city.slug}`} className="block group h-full">
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-accent transition-all h-full flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                       <span className="material-symbols-outlined text-gray-200 group-hover:text-accent group-hover:translate-x-1 transition-all">arrow_forward</span>
                    </div>
                    <h3 className="text-2xl font-black text-navy mb-2 group-hover:text-accent transition-colors">{city.name}</h3>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Custom Build-outs Available</p>
                    <p className="text-gray-600 text-sm">Deploy your team in {city.name}'s most prestigious commercial properties.</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      <TrustLayer />
    </div>
  );
}
