import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';

import { constructMetadata } from '@/utils/metadata';

export const metadata: Metadata = constructMetadata({
  title: "Startup Incubation Services in Kerala | WeeSpaces",
  description: "Comprehensive incubation services for startups in Kerala. Access mentorship, investor networks, legal compliance support, and premium infrastructure.",
  canonicalPath: "/services/incubation"
});

export default function IncubationPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-navy-dark border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy/90 to-navy-light/90 bg-[length:200%_200%] animate-mesh mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] -ml-[20vw] -mb-[10vw] pointer-events-none animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)] mb-8">
              <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
              Incubation Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Accelerate Your <span className="text-accent">Growth.</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              More than just workspace. Our incubation services provide the operational foundation, mentorship, and network required to scale your startup effectively.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book-tour" className="bg-accent text-navy font-bold py-3 px-8 rounded-xl hover:bg-accent-hover transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(242,156,31,0.3)]">
                Apply for Incubation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The <span className="text-accent">Support</span> You Need to Scale</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Focus on building your product while we handle the operational complexities.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "handshake",
              title: "Mentorship",
              desc: "Connect with industry veterans, experienced founders, and subject matter experts who can guide your strategy."
            },
            {
              icon: "payments",
              title: "Investor Access",
              desc: "Gain visibility within our network of angel investors, seed funds, and venture capitalists actively looking for early-stage startups."
            },
            {
              icon: "gavel",
              title: "Legal & Compliance",
              desc: "Assistance with company incorporation, compliance filings, intellectual property, and essential legal structuring."
            },
            {
              icon: "hub",
              title: "Community Network",
              desc: "Plug into a vibrant ecosystem of fellow founders, potential co-founders, and service providers."
            }
          ].map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <MouseGlowCard className="glass rounded-3xl p-8 h-full border border-white/10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 shadow-inner">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </MouseGlowCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Build your startup with WeeSpaces</h2>
            <p className="text-white/70 mb-8 text-lg">
              Let's discuss how our incubation services can support your company's unique journey.
            </p>
            <Link href="/book-tour" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-navy font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(242,156,31,0.3)]">
              Schedule a Consultation <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
