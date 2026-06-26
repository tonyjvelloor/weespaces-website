import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import LeadForm from '@/components/LeadForm';
import { MapPin, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Virtual Office for GST Registration in Calicut | WeeSpaces',
  description: 'Get a premium business address in Calicut for GST registration and company incorporation. Dedicated mail handling starting at just ₹10,000/year.',
};

export default function VirtualOfficeCalicutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-navy-dark border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/90 to-navy-dark/90 bg-[length:200%_200%] animate-mesh mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] -mr-[20vw] -mt-[10vw] pointer-events-none animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)] mb-8">
              <span className="material-symbols-outlined text-[16px]">location_city</span>
              Cyberpark Area, Calicut
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Virtual Office for <br/><span className="text-accent">GST Registration</span><br/> in Calicut
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-xl">
              Establish a premium business presence in Calicut's IT corridor without physical office overhead. Perfect for startups and remote companies needing official address proof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#get-started" className="bg-accent text-navy font-bold py-4 px-8 rounded-xl hover:bg-accent-hover transition-all w-full sm:w-auto text-center shadow-[0_0_20px_rgba(242,156,31,0.3)]">
                Get Address Proof
              </Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.2} className="relative">
            <div id="get-started" className="glass p-8 rounded-3xl border border-white/10 relative z-10">
               <h3 className="text-2xl font-bold mb-6">Request Virtual Office in Calicut</h3>
               <LeadForm branch="Calicut" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What's Included in Your Calicut <span className="text-accent">Virtual Office</span>?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Everything you need to legally register and operate your business in Kerala.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <MouseGlowCard className="glass rounded-3xl p-8 h-full border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <span className="material-symbols-outlined text-3xl">description</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">GST & Company Registration</h3>
              <p className="text-white/70 leading-relaxed">
                Receive NOC and rent agreements to legally register your company and obtain your GST number in Kerala. We provide complete documentation support.
              </p>
            </MouseGlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <MouseGlowCard className="glass rounded-3xl p-8 h-full border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <span className="material-symbols-outlined text-3xl">business</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Cyberpark Address</h3>
              <p className="text-white/70 leading-relaxed">
                Use our prestigious commercial address near Cyberpark, Calicut for your website, business cards, Google My Business, and marketing collateral.
              </p>
            </MouseGlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <MouseGlowCard className="glass rounded-3xl p-8 h-full border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <span className="material-symbols-outlined text-3xl">mark_email_unread</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mail Handling & Forwarding</h3>
              <p className="text-white/70 leading-relaxed">
                We receive and securely store all your incoming mail, couriers, and official government letters. Get immediate notifications and optional forwarding.
              </p>
            </MouseGlowCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Simple */}
      <section className="py-20 border-t border-white/10 bg-navy-light/10">
         <div className="max-w-4xl mx-auto px-6">
             <ScrollReveal direction="up" className="glass rounded-3xl p-8 md:p-12 border border-accent/30 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-accent/20 blur-[60px] pointer-events-none"></div>
                <h2 className="text-3xl font-bold mb-4 relative z-10">Simple, Transparent Pricing</h2>
                <p className="text-white/70 mb-8 relative z-10">No hidden fees or setup costs.</p>
                <div className="flex justify-center items-end gap-2 mb-8 relative z-10">
                   <span className="text-5xl font-black text-white">₹10,000</span>
                   <span className="text-xl text-white/50 mb-1">/ year</span>
                </div>
                <ul className="flex flex-col items-center gap-4 text-white/80 mb-10 relative z-10">
                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /> Premium Address Use</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /> GST NOC Documentation</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /> Courier & Mail Handling</li>
                </ul>
                <Link href="#get-started" className="inline-block bg-accent text-navy font-bold py-4 px-10 rounded-xl hover:bg-accent-hover transition-all relative z-10 shadow-[0_0_20px_rgba(242,156,31,0.2)]">
                   Secure Your Business Address Today
                </Link>
             </ScrollReveal>
         </div>
      </section>
    </div>
  );
}
