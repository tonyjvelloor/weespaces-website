import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import Image from 'next/image';

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About WeeSpaces Coworking",
    "description": "WeeSpaces is a premium coworking and managed office provider in Kerala and Tamil Nadu, founded in 2018. Operating in Trivandrum, Ernakulam, Calicut, and Coimbatore with over 50,000 Sq.Ft managed.",
    "publisher": {
      "@id": "https://www.weespaces.in/#organization"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <div className="pt-20 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32 pt-10">
          <ScrollReveal direction="right" className="text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Workspaces</span> in South India
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              <strong>WeeSpaces is a premium coworking and managed office provider in Kerala and Tamil Nadu, founded in 2018.</strong> 
              What started as a single coworking lounge in Calicut has grown into a multi-city enterprise operating in Trivandrum, Ernakulam, Calicut, and Coimbatore. We power the ambitions of freelancers, startups, and enterprise corporations by managing over 50,000 Sq.Ft of Grade-A commercial real estate.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">4</span>
                <span className="text-xs text-white/50 uppercase tracking-wider font-bold">Prime Cities</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">50K+</span>
                <span className="text-xs text-white/50 uppercase tracking-wider font-bold">Sq.Ft Managed</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.2} className="relative h-[500px] w-full hidden md:block">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
            <div className="absolute top-0 right-4 w-2/3 h-4/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10">
              <Image src="/images/exterior.jpg" alt="WeeSpaces Exterior" fill className="object-cover" unoptimized />
            </div>
            <div className="absolute bottom-0 left-4 w-3/5 h-2/3 rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-20 shadow-black/50">
              <Image src="/images/amenity2.jpg" alt="WeeSpaces Interior" fill className="object-cover" unoptimized />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-navy p-4 rounded-full shadow-2xl z-30 border border-white/10 flex items-center justify-center">
              <Image src="/images/logo.png" alt="WeeSpaces" width={60} height={60} className="rounded-full" unoptimized />
            </div>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="mb-32 max-w-5xl mx-auto">
          <ScrollReveal direction="up"><h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Journey</h2></ScrollReveal>
          
          <div className="relative border-l-2 border-accent/30 pl-10 md:pl-16 space-y-16 ml-4 md:ml-10">
            <ScrollReveal direction="left" delay={0.1} className="relative group">
              <div className="absolute -left-[51px] md:-left-[75px] bg-navy border-[3px] border-accent w-6 h-6 rounded-full mt-1.5 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(242,156,31,0.5)]"></div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">2018: The Work Lounge</h3>
              <p className="text-white/70 text-lg leading-relaxed">Our journey began in Calicut with the launch of "The Work Lounge", setting a new benchmark for premium, community-driven coworking spaces in Kerala.</p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2} className="relative group">
              <div className="absolute -left-[51px] md:-left-[75px] bg-navy border-[3px] border-white/30 w-6 h-6 rounded-full mt-1.5 group-hover:border-accent transition-colors"></div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">2020: Expansion to Kochi & Trivandrum</h3>
              <p className="text-white/70 text-lg leading-relaxed">Despite global challenges, we expanded our footprint to Ernakulam and Trivandrum, becoming the preferred workspace for remote enterprise teams.</p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3} className="relative group">
              <div className="absolute -left-[51px] md:-left-[75px] bg-navy border-[3px] border-white/30 w-6 h-6 rounded-full mt-1.5 group-hover:border-accent transition-colors"></div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">2023: X-Hub Incubation</h3>
              <p className="text-white/70 text-lg leading-relaxed">Launched X-Hub, our dedicated startup incubation arm, providing legal, HR, and digital marketing support for early-stage companies.</p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4} className="relative group">
              <div className="absolute -left-[51px] md:-left-[75px] bg-navy border-[3px] border-accent w-6 h-6 rounded-full mt-1.5 animate-pulse shadow-[0_0_20px_rgba(242,156,31,0.8)]"></div>
              <h3 className="text-2xl font-bold mb-3 text-accent flex items-center gap-3">
                2026: Hello, Coimbatore! 
                <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-bold border border-accent/30 tracking-widest uppercase">Latest</span>
              </h3>
              <p className="text-white/80 text-lg leading-relaxed font-medium">We are thrilled to cross state lines and launch our 4th active branch in Coimbatore, marking our first major expansion into Tamil Nadu.</p>
            </ScrollReveal>
          </div>
        </div>

        {/* Founders */}
        <div className="mb-32">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">The Visionaries</h2>
            <p className="text-white/50 text-center mb-16 max-w-2xl mx-auto">Meet the leadership team driving the expansion of premium coworking ecosystems across South India.</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0.1}>
                <MouseGlowCard className="glass p-10 rounded-3xl text-center flex flex-col items-center h-full border border-white/10 group hover:border-accent/30 transition-colors">
                  <div className="w-40 h-40 rounded-full bg-white mb-8 flex items-center justify-center overflow-hidden border-[3px] border-white/10 group-hover:border-accent relative transition-colors shadow-xl">
                    <Image src="/images/founder_sankesh.jpg" alt="Sankesh Sreenivas" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" unoptimized />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Sankesh Sreenivas</h3>
                  <p className="text-accent text-sm font-bold tracking-widest uppercase mb-6 bg-accent/10 px-4 py-1.5 rounded-full inline-block">Co-Founder & CEO</p>
                  <p className="text-white/70 text-base leading-relaxed mb-8">Visionary leader driving the strategic expansion of WeeSpaces. Mastered highly profitable unit economics across 4 branches, proving the model's scalability in emerging tech hubs.</p>
                  <div className="mt-auto">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-50 cursor-not-allowed">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                  </div>
                </MouseGlowCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <MouseGlowCard className="glass p-10 rounded-3xl text-center flex flex-col items-center h-full border border-white/10 group hover:border-accent/30 transition-colors">
                  <div className="w-40 h-40 rounded-full bg-white mb-8 flex items-center justify-center overflow-hidden border-[3px] border-white/10 group-hover:border-accent relative transition-colors shadow-xl">
                    <Image src="/images/founder_shudhi.jpg" alt="Shudhi Sankesh" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" unoptimized />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Shudhi Sankesh</h3>
                  <p className="text-accent text-sm font-bold tracking-widest uppercase mb-6 bg-accent/10 px-4 py-1.5 rounded-full inline-block">Co-Founder & COO</p>
                  <p className="text-white/70 text-base leading-relaxed mb-8">The architect behind our premium retention ecosystem and the X-Hub incubator, engineering the proprietary pipeline that organically drives enterprise scale.</p>
                  <div className="mt-auto">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-50 cursor-not-allowed">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                  </div>
                </MouseGlowCard>
            </ScrollReveal>
          </div>
        </div>

        {/* Ventures */}
        <ScrollReveal direction="up" className="max-w-5xl mx-auto">
            <MouseGlowCard className="glass p-12 lg:p-16 rounded-3xl text-center bg-gradient-to-br from-navy-light/80 to-navy-dark/90 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-accent/10 transition-colors"></div>
              
              <h2 className="text-3xl font-bold mb-4 relative z-10">Our Core Ventures</h2>
              <p className="text-white/50 mb-12 relative z-10 max-w-xl mx-auto">The three pillars that define our ecosystem of physical workspaces, specialized branches, and digital support.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10 relative z-10">
                <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="relative w-28 h-28 mb-6 rounded-full overflow-hidden border-[3px] border-white/20 bg-white shadow-lg">
                    <Image src="/images/logo_weespaces.jpg" alt="WeeSpaces Logo" fill className="object-contain p-4" unoptimized />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">WeeSpaces</h3>
                  <p className="text-accent text-xs font-bold uppercase tracking-wider mb-3">Parent Brand</p>
                  <p className="text-white/60 text-sm">Premium Coworking & Managed Offices</p>
                </div>
                
                <div className="hidden md:flex items-center justify-center absolute left-1/3 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                
                <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="relative w-28 h-28 mb-6 rounded-full overflow-hidden border-[3px] border-white/20 bg-white shadow-lg">
                    <Image src="/images/logo_worklounge.jpg" alt="The Work Lounge Logo" fill className="object-contain p-4" unoptimized />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">The Work Lounge</h3>
                  <p className="text-accent text-xs font-bold uppercase tracking-wider mb-3">Flagship Entity</p>
                  <p className="text-white/60 text-sm">Our legacy flagship branch in Calicut</p>
                </div>
                
                <div className="hidden md:flex items-center justify-center absolute left-2/3 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                
                <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="relative w-28 h-28 mb-6 rounded-full overflow-hidden border-[3px] border-white/20 bg-navy shadow-lg">
                    <Image src="/images/logo_xhub.png" alt="X-Hub Logo" fill className="object-contain p-4" unoptimized />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">X-Hub</h3>
                  <p className="text-accent text-xs font-bold uppercase tracking-wider mb-3">Incubator</p>
                  <p className="text-white/60 text-sm">Startup Incubation & Support Services</p>
                </div>
              </div>
            </MouseGlowCard>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
