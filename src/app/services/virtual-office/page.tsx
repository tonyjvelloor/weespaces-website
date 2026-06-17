import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';

export const metadata: Metadata = {
  title: 'Virtual Office in Kerala | WeeSpaces',
  description: 'Premium virtual office solutions in Kerala. Get a professional business address, GST registration support, and mail handling for your startup or remote team.',
};

export default function VirtualOfficePage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-navy-dark border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/90 to-navy-dark/90 bg-[length:200%_200%] animate-mesh mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] -mr-[20vw] -mt-[10vw] pointer-events-none animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)] mb-8">
              <span className="material-symbols-outlined text-[16px]">mail</span>
              Virtual Office Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Establish Your <span className="text-accent">Presence.</span><br/> Anywhere.
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Get a premium business address in Kerala's top commercial hubs without the overhead of physical office space. Ideal for remote teams, freelancers, and growing startups.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-accent text-navy font-bold py-3 px-8 rounded-xl hover:bg-accent-hover transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(242,156,31,0.3)]">
                Get Your Virtual Office
              </Link>
              <Link href="#features" className="border border-white/20 text-white font-bold py-3 px-8 rounded-xl hover:bg-white/5 transition-all w-full sm:w-auto">
                Explore Features
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need to <span className="text-accent">Operate</span></h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Our virtual office plans provide the credibility and administrative support required to scale your business professionally.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <MouseGlowCard className="glass rounded-3xl p-8 h-full border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <span className="material-symbols-outlined text-3xl">location_city</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Address</h3>
              <p className="text-white/70 leading-relaxed">
                Use our prime commercial addresses in Trivandrum, Ernakulam, Calicut, or Coimbatore on your website, business cards, and marketing materials.
              </p>
            </MouseGlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <MouseGlowCard className="glass rounded-3xl p-8 h-full border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <span className="material-symbols-outlined text-3xl">description</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">GST Registration</h3>
              <p className="text-white/70 leading-relaxed">
                Receive all necessary documentation, NOCs, and agreements required to officially register your business and obtain your GST number in Kerala or Tamil Nadu.
              </p>
            </MouseGlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <MouseGlowCard className="glass rounded-3xl p-8 h-full border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <span className="material-symbols-outlined text-3xl">mark_email_unread</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mail Handling</h3>
              <p className="text-white/70 leading-relaxed">
                We receive, securely store, and notify you of all incoming mails, couriers, and official government correspondence. Forwarding services available.
              </p>
            </MouseGlowCard>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to make it official?</h2>
            <p className="text-white/70 mb-8 text-lg">
              Set up your virtual office today and give your business the professional foundation it deserves.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-navy font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(242,156,31,0.3)]">
              Get a Custom Quote <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
