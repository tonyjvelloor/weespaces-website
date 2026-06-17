import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import InvestorForm from '@/components/InvestorForm';

export const metadata: Metadata = {
  title: 'Investors & Partners | WeeSpaces',
  description: 'Join us in building the Operating System for South India\'s tech boom. Explore investment, franchise, and landlord partnership opportunities with WeeSpaces.',
};

export default function InvestorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
              <Image src="/images/amenity2.jpg" alt="WeeSpaces Premium Workspace" fill className="object-cover object-center opacity-20" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy"></div>
              <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
          </div>
          
          <div className="container mx-auto px-6 w-full relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                  <ScrollReveal direction="up">
                      <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)] mb-6">
                          <span className="material-symbols-outlined text-[16px]">trending_up</span>
                          Scale With Us
                      </div>
                      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                          Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Growth OS</span> for South India's Tech Ecosystem
                      </h1>
                      <p className="text-lg md:text-xl text-white/70 font-medium max-w-2xl mx-auto">
                          WeeSpaces isn't just a real estate play. With our integrated X-Hub incubator, we engineer high-growth environments that organically scale our recurring revenue.
                      </p>
                  </ScrollReveal>
              </div>
          </div>
      </section>

      {/* The Moat Section */}
      <section className="py-20 relative border-t border-white/10 bg-gradient-to-b from-navy to-navy-light/20">
          <div className="container mx-auto px-6 max-w-7xl">
              <ScrollReveal direction="up"><h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Defensible Moat</h2></ScrollReveal>
              
              <div className="grid md:grid-cols-3 gap-8">
                  <ScrollReveal delay={0.1}>
                      <MouseGlowCard className="glass p-8 rounded-3xl h-full border border-white/10 relative overflow-hidden group">
                          <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-accent text-3xl">rocket_launch</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">Proprietary Pipeline</h3>
                          <p className="text-white/70 leading-relaxed">
                              Through <span className="text-accent font-bold">X-Hub</span>, our dedicated startup incubator, we identify and nurture high-potential ventures. As they secure funding and scale, their real estate footprint within WeeSpaces expands organically.
                          </p>
                      </MouseGlowCard>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                      <MouseGlowCard className="glass p-8 rounded-3xl h-full border border-white/10 relative overflow-hidden group">
                          <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-accent text-3xl">domain_add</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">Scalable Unit Economics</h3>
                          <p className="text-white/70 leading-relaxed">
                              Operating since 2018, we have mastered a highly profitable, scalable model. We target Tier-2 emerging tech hubs with lower overheads and high enterprise demand, ensuring superior margins.
                          </p>
                      </MouseGlowCard>
                  </ScrollReveal>

                  <ScrollReveal delay={0.3}>
                      <MouseGlowCard className="glass p-8 rounded-3xl h-full border border-white/10 relative overflow-hidden group">
                          <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-accent text-3xl">handshake</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">Landlord JVs</h3>
                          <p className="text-white/70 leading-relaxed">
                              We partner with premium commercial property owners on revenue-share models. This asset-light approach allows for rapid footprint expansion without heavy CapEx burdens.
                          </p>
                      </MouseGlowCard>
                  </ScrollReveal>
              </div>
          </div>
      </section>

      {/* Form Section */}
      <section className="py-24 relative overflow-hidden border-t border-white/10">
          <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <ScrollReveal direction="left" className="space-y-8">
                      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                          Partner with <br/><span className="text-accent">WeeSpaces</span>
                      </h2>
                      <p className="text-lg text-white/70">
                          We are currently engaging in strategic discussions for aggressive expansion across South India.
                      </p>
                      
                      <div className="space-y-6">
                          <div className="flex gap-4">
                              <div className="w-12 h-12 rounded-xl bg-navy-light flex items-center justify-center shrink-0 border border-white/10">
                                  <span className="material-symbols-outlined text-accent">pie_chart</span>
                              </div>
                              <div>
                                  <h4 className="font-bold text-xl mb-1">Venture Capital & PE</h4>
                                  <p className="text-sm text-white/60">Explore equity partnerships to fuel our next phase of hyper-growth.</p>
                              </div>
                          </div>
                          <div className="flex gap-4">
                              <div className="w-12 h-12 rounded-xl bg-navy-light flex items-center justify-center shrink-0 border border-white/10">
                                  <span className="material-symbols-outlined text-accent">storefront</span>
                              </div>
                              <div>
                                  <h4 className="font-bold text-xl mb-1">Franchise Partners</h4>
                                  <p className="text-sm text-white/60">Operate a WeeSpaces branded hub in your city with our full operational playbook.</p>
                              </div>
                          </div>
                          <div className="flex gap-4">
                              <div className="w-12 h-12 rounded-xl bg-navy-light flex items-center justify-center shrink-0 border border-white/10">
                                  <span className="material-symbols-outlined text-accent">apartment</span>
                              </div>
                              <div>
                                  <h4 className="font-bold text-xl mb-1">Commercial Landlords</h4>
                                  <p className="text-sm text-white/60">Convert your vacant commercial space into a high-yield coworking hub.</p>
                              </div>
                          </div>
                      </div>
                  </ScrollReveal>
                  
                  <ScrollReveal direction="right">
                      <div className="max-w-md mx-auto lg:mx-0 lg:ml-auto">
                          <InvestorForm />
                      </div>
                  </ScrollReveal>
              </div>
          </div>
      </section>
    </>
  );
}
