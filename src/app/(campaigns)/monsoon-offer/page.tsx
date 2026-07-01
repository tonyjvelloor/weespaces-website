import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import CountdownTimer from '@/components/ui/CountdownTimer';
import OfferPricingCards from '@/components/ui/OfferPricingCards';
import { CheckCircle, MapPin, Building, Shield, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Monsoon Offer: Premium Virtual Office in Kerala & Coimbatore',
  description: 'Limited period Monsoon Offer! Get a GST-registered Virtual Office in Trivandrum, Ernakulam, Calicut from ₹7,999/yr or Coimbatore for ₹14,500/yr.',
  robots: { index: false, follow: false }, // Typically offer landing pages are noindex for paid campaigns
};

export default function MonsoonOfferPage() {
  return (
    <div className="bg-[#050B14] min-h-screen pb-32">
      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-navy border-t border-white/10 p-4 z-50 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div>
          <div className="text-[10px] uppercase text-white/50 tracking-widest font-bold">Starts at</div>
          <div className="text-xl font-bold text-white">₹7,999<span className="text-sm font-normal text-white/50">/yr</span></div>
        </div>
        <Link href="#offer-lead-form" className="bg-accent text-white px-6 py-3 rounded-lg font-bold text-sm shadow-[0_0_15px_rgba(255,107,53,0.3)]">
          Claim Offer Now
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Limited Period Monsoon Offer
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 md:mb-8">
                Get Your GST-Ready <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400 drop-shadow-[0_0_30px_rgba(255,107,53,0.3)]">
                  Premium Business Address
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed">
                Establish your corporate presence instantly. Secure a prime address for GST & MCA registration in Kerala or Coimbatore at unbeatable prices.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mb-8">
                <p className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Offer Expires In:</p>
                <CountdownTimer />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PRICING / OFFER SECTION */}
      <section className="py-20 bg-black/40 relative z-20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Choose Your Location</h2>
              <p className="text-white/60">Select your preferred business hub to lock in this pricing.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <OfferPricingCards />
          </ScrollReveal>
        </div>
      </section>

      {/* WHY YOU NEED THIS SECTION */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything You Need To <br/> Launch & Scale</h2>
              <p className="text-white/60">No hidden fees. Just a premium address and full compliance support.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-8 hover:bg-navy-light transition-colors">
                <Shield className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">GST & MCA Compliant</h3>
                <p className="text-white/60 leading-relaxed">We provide all necessary documents including NOC, Utility Bill, and Rent Agreement for seamless registration.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-8 hover:bg-navy-light transition-colors">
                <MapPin className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Prime Locations</h3>
                <p className="text-white/60 leading-relaxed">Position your brand in central CBDs or IT corridors like Kakkanad, Pattom, and Kalapatti.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-8 hover:bg-navy-light transition-colors">
                <FileText className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Mail & Package Handling</h3>
                <p className="text-white/60 leading-relaxed">Our professional reception team receives, sorts, and notifies you of all your critical business mail.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE SECTION */}
      <section id="offer-lead-form" className="py-20 relative">
        <div className="absolute inset-0 bg-accent/5 skew-y-[-2deg] origin-top-left -z-10 border-y border-accent/10"></div>
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't Miss Out On <br/> The Monsoon Special</h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Leave your details below. Our workspace experts will contact you within 15 minutes to help you secure this pricing before the timer runs out.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30">
                      <span className="font-bold text-accent">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Submit Details</h4>
                      <p className="text-white/60">Fill out the quick form to lock your slot.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30">
                      <span className="font-bold text-accent">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Quick Consultation</h4>
                      <p className="text-white/60">We'll call you to confirm your location and requirements.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30">
                      <span className="font-bold text-accent">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Receive Documents</h4>
                      <p className="text-white/60">Get your NOC and agreement within 24 hours.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-navy rounded-3xl p-8 shadow-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Lock In Your Price Now</h3>
                <LeadForm branch="Monsoon Offer Campaign" />
                <p className="text-xs text-center text-white/40 mt-6 mt-4 flex items-center justify-center gap-1"><Shield className="w-3 h-3" /> Your information is 100% secure.</p>
              </div>
            </ScrollReveal>
            
          </div>
        </div>
      </section>
      
    </div>
  );
}
