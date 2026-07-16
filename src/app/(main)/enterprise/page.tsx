import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { ShieldCheck, Layers, LayoutPanelLeft, Zap, Building2 } from 'lucide-react';
import EnterpriseConsultationForm from '@/components/EnterpriseConsultationForm';

import { constructMetadata } from '@/utils/metadata';

export const metadata: Metadata = constructMetadata({
  title: "Enterprise Coworking Solutions | Wee Spaces",
  description: "Custom build-outs, private full-floor offices, and enterprise-grade security. Scale your business with Wee Spaces Enterprise solutions.",
  canonicalPath: "/enterprise"
});

const features = [
  {
    icon: <LayoutPanelLeft className="w-8 h-8 text-accent" />,
    title: 'Custom Build-Outs',
    description: 'Work with our design team to create a fully customized floor plan tailored to your operational needs and brand identity.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: 'Enterprise-Grade Security',
    description: 'Dedicated IT infrastructure, isolated networks, biometric access control, and 24/7 CCTV surveillance.'
  },
  {
    icon: <Layers className="w-8 h-8 text-accent" />,
    title: 'Full Brand Integration',
    description: 'Your logo, your colors, your culture. Make the space entirely your own from the reception to the boardroom.'
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: 'Dedicated Amenities',
    description: 'Private meeting rooms, executive cabins, exclusive cafeterias, and dedicated server rooms tailored for your team.'
  }
];

export default function EnterprisePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center min-h-[85vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/branches/trivandrum/image4.jpg" 
            alt="Enterprise Workspace" 
            fill sizes="100vw" 
            className="object-cover opacity-30" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy/90 to-navy mix-blend-multiply"></div>
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[150px] -mr-[10vw] -mt-[10vw] pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-navy-light/40 backdrop-blur-md border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4" /> For Teams of 50 - 500+
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Headquarters, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Without the Hassle.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
              Fully managed, custom-designed office spaces built for scaling enterprises. Focus on your growth while we handle the real estate, operations, and hospitality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact-enterprise" className="bg-accent hover:bg-accent-hover text-navy font-bold py-4 px-8 rounded-xl transition-all shadow-lg glow">
                Consult Our Experts
              </Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.2} className="relative w-full max-w-lg justify-self-end">
            <EnterpriseConsultationForm />
          </ScrollReveal>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 border-y border-white/10 bg-navy-light/20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <ScrollReveal direction="up" delay={0.1} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 glow-text">0 Capital</div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider">Expenditure</div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 glow-text">45 Days</div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider">To Go Live</div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 glow-text">100%</div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider">Customizable</div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 glow-text">24/7</div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider">Dedicated Support</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 md:py-32 relative z-10 bg-navy">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for the Fortune 500 & Hyper-Growth Startups</h2>
            <p className="text-xl text-white/70">
              We deliver more than just desks. We provide an end-to-end real estate solution that aligns with your operational goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <MouseGlowCard className="glass p-8 rounded-xl h-full border border-white/5 hover:border-white/10 transition-colors">
                  <div className="mb-6 bg-navy/50 w-16 h-16 rounded-xl flex items-center justify-center border border-white/5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </MouseGlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / TIMELINE */}
      <section className="py-24 bg-gradient-to-b from-navy to-navy-dark relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Custom HQ in 4 Steps</h2>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                { step: '01', title: 'Consultation & Scoping', desc: 'We analyze your team size, workflow, culture, and IT requirements.' },
                { step: '02', title: 'Design & Layout', desc: 'Our architects present 3D layouts tailored to your exact specifications.' },
                { step: '03', title: 'Build-Out & Integration', desc: 'We execute the fit-out, deploy IT infrastructure, and apply your branding.' },
                { step: '04', title: 'Move-in & Management', desc: 'Your team moves in. Our hospitality staff takes over day-to-day operations.' }
              ].map((item, idx) => (
                <ScrollReveal key={idx} direction={idx % 2 === 0 ? 'right' : 'left'} className="relative flex flex-col md:flex-row items-center gap-8 group">
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:order-last'}`}>
                    <div className="glass p-8 rounded-xl border border-white/5 hover:border-accent/50 transition-colors inline-block w-full">
                      <div className="text-accent font-bold mb-2">Step {item.step}</div>
                      <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-navy border-2 border-accent -translate-x-1/2 z-10 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(242,156,31,0.8)] hidden md:block"></div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FINAL CTA */}
      <section id="contact-enterprise" className="py-24 relative z-10 overflow-hidden">
         <div className="absolute inset-0 bg-accent/5"></div>
         <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <ScrollReveal direction="up">
               <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to scale without limits?</h2>
               <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">Contact our Enterprise Solutions team today to start designing your next headquarters.</p>
               
               <div className="max-w-xl mx-auto text-left">
                  <EnterpriseConsultationForm />
               </div>
            </ScrollReveal>
         </div>
      </section>
    </>
  );
}
