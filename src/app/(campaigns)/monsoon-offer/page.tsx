import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CampaignLeadForm from '@/components/CampaignLeadForm';
import CountdownTimer from '@/components/ui/CountdownTimer';
import OfferPricingCards from '@/components/ui/OfferPricingCards';
import ROICalculator from '@/components/ui/ROICalculator';
import ExitIntentPopup from '@/components/ui/ExitIntentPopup';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FAQAccordion from '@/components/FAQAccordion';
import { CheckCircle, Shield, ArrowRight, Check, Star, MapPin, Building, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Monsoon Offer: Register Your Business Without Renting an Office',
  description: 'Limited period Monsoon Offer! Get a GST-compliant Virtual Office from just ₹7,999/year.',
  robots: { index: false, follow: false },
};

export default function MonsoonOfferPage() {
  return (
    <div className="bg-[#050B14] min-h-screen pb-32">
      <ExitIntentPopup />
      <FloatingWhatsApp />

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-navy border-t border-white/10 p-4 z-[90] flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div>
          <div className="text-[10px] uppercase text-white/50 tracking-widest font-bold">Offer Starts At</div>
          <div className="text-xl font-bold text-white">₹7,999<span className="text-sm font-normal text-white/50">/yr</span></div>
        </div>
        <Link href="#offer-lead-form" className="bg-accent text-white px-6 py-3 rounded-lg font-bold text-sm shadow-[0_0_15px_rgba(255,107,53,0.3)] flex items-center gap-2">
          Claim Now <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* HERO SECTION (ONE PROMISE) */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col items-center text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  Limited Period Monsoon Offer 🌧️
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                  Register Your Business <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400 drop-shadow-[0_0_30px_rgba(255,107,53,0.3)]">
                    Without Renting an Office
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 font-medium">
                  Get a GST-compliant Virtual Office Address from just ₹7,999/year. 
                </p>

                <div className="w-full max-w-lg mx-auto mb-10">
                  <CountdownTimer />
                </div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  <ul className="space-y-4">
                    {[
                      'Premium Business Address for Registration',
                      '100% GST & MCA Compliant',
                      'Setup & Documentation within 24 Hours',
                      'Professional Mail & Courier Handling',
                      'Zero Security Deposit Needed'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-lg text-white/90 font-medium">
                        <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/50">
                          <Check className="w-4 h-4 text-green-400" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8">
                    <Link href="#offer-lead-form" className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded-xl transition-all shadow-[0_4px_20px_rgba(255,107,53,0.4)] hover:shadow-[0_6px_25px_rgba(255,107,53,0.6)] text-lg border border-transparent">
                      Claim Monsoon Offer <ArrowRight className="w-5 h-5" />
                    </Link>
                    <div className="flex gap-4 mt-4 text-xs font-bold text-white/50 uppercase tracking-widest justify-center md:justify-start">
                      <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> No Hidden Charges</span>
                      <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Fast Approval</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3} direction="left">
                {/* Hero Form / Floating Box */}
                <div className="bg-navy rounded-3xl p-8 shadow-2xl border border-white/10 relative overflow-hidden">
                  <h3 className="text-2xl font-bold text-white mb-6">Lock In Your Price Now</h3>
                  <CampaignLeadForm branch="Monsoon Offer Campaign - Hero" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR? */}
      <section className="py-20 bg-black/40 relative z-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Who Is This Perfect For?</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto mb-12">
              {[
                { title: 'Startup Founders', icon: <Users className="w-6 h-6 text-accent mb-2" /> },
                { title: 'Freelancers', icon: <CheckCircle className="w-6 h-6 text-accent mb-2" /> },
                { title: 'Remote Teams', icon: <Building className="w-6 h-6 text-accent mb-2" /> },
                { title: 'E-commerce Sellers', icon: <MapPin className="w-6 h-6 text-accent mb-2" /> }
              ].map((item, i) => (
                <div key={i} className="bg-navy-light/50 border border-white/5 rounded-2xl p-6 text-center hover:border-accent/30 transition-colors flex flex-col items-center justify-center">
                  {item.icon}
                  <span className="font-bold text-white/90">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="#offer-lead-form" className="inline-flex font-bold text-accent hover:text-accent-hover transition-colors items-center gap-1">
                Claim Your Address <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TRUST METRICS */}
      <section className="py-12 bg-accent relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center text-center">
            <div>
              <div className="flex items-center justify-center gap-1 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-white text-white" />)}
              </div>
              <div className="text-white font-bold text-lg">4.8 Google Rating</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div>
              <div className="text-3xl font-black text-white mb-1">500+</div>
              <div className="text-white/80 font-bold uppercase tracking-wider text-xs">Happy Businesses</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div>
              <div className="text-3xl font-black text-white mb-1">4</div>
              <div className="text-white/80 font-bold uppercase tracking-wider text-xs">Prime Locations</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div>
              <div className="text-3xl font-black text-white mb-1">50,000+</div>
              <div className="text-white/80 font-bold uppercase tracking-wider text-xs">Sq Ft Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONAL COMPARISON */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Starting Your Business?</h2>
              <p className="text-white/60">Don't burn your capital on dead expenses.</p>
            </div>
            
            <div className="bg-navy rounded-3xl border border-white/10 overflow-hidden mb-12">
              <div className="grid grid-cols-3 bg-black/40 p-6 border-b border-white/10 text-center md:text-left">
                <div className="font-bold text-white/50 uppercase tracking-widest text-xs hidden md:block">Comparison</div>
                <div className="font-bold text-white/50 uppercase tracking-widest text-xs md:hidden">Feature</div>
                <div className="font-bold text-white/70 uppercase tracking-widest text-xs text-center">Renting Office</div>
                <div className="font-bold text-accent uppercase tracking-widest text-xs text-center">Virtual Office</div>
              </div>
              
              {[
                ['Annual Cost', '₹3,00,000+', 'From ₹7,999/yr'],
                ['Security Deposit', '₹1,00,000+', '₹0 (No Deposit)'],
                ['Setup Time', '3-4 Weeks', '24 Hours'],
                ['Maintenance', 'You Pay', 'Included (₹0)'],
                ['Furniture/Internet', 'You Pay', 'Not Needed'],
                ['GST & MCA Address', 'Yes', 'Yes'],
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center text-center md:text-left">
                  <div className="font-bold text-white/90 text-sm md:text-base text-left">{row[0]}</div>
                  <div className="text-red-400 font-medium text-sm md:text-base text-center">{row[1]}</div>
                  <div className="text-green-400 font-bold flex items-center justify-center gap-2 text-sm md:text-base">
                    {row[0] === 'GST & MCA Address' ? <CheckCircle className="w-5 h-5 hidden md:block" /> : null}
                    {row[2]}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="#offer-lead-form" className="inline-flex justify-center items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded-xl transition-all shadow-[0_4px_20px_rgba(255,107,53,0.4)] text-lg">
                Skip The Rent - Claim Offer <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY NOW / BENEFITS */}
      <section className="py-20 bg-black/40 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Thousands Choose Virtual Offices Today</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ul className="space-y-6">
                {[
                  'Avoid ₹3–5 lakh/year in dead office rent.',
                  'Register your business legally with the Govt.',
                  'Expand instantly into new tier-2 cities.',
                  'Build professional credibility with clients.',
                  'Operate 100% remotely without overheads.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg text-white/80">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative h-64 md:h-auto rounded-3xl overflow-hidden border border-white/10">
                <Image src="/media__1780489852680.png" alt="Premium Coworking Hub" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div className="text-white font-bold text-xl">Premium Addresses in IT Corridors</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="#offer-lead-form" className="inline-flex font-bold text-accent hover:text-accent-hover transition-colors items-center gap-1">
                Secure Your Address <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <ROICalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* PRICING / VALUE STACK SECTION */}
      <section className="py-20 bg-black/40 relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Select Your Premium Hub</h2>
              <p className="text-white/60">Lock in your pricing before the monsoon offer expires.</p>
            </div>
            
            <div className="mb-12">
              <OfferPricingCards />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-white/60">3 Simple steps to your new registered address.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12 relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>
              
              <div className="bg-navy border border-white/10 rounded-3xl p-8 text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-black flex items-center justify-center text-xl mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-white mb-2">Choose City</h3>
                <p className="text-white/60">Pick your preferred premium location from our hubs.</p>
              </div>
              
              <div className="bg-navy border border-white/10 rounded-3xl p-8 text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-black flex items-center justify-center text-xl mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-white mb-2">Upload KYC</h3>
                <p className="text-white/60">Submit standard identity and business proofs digitally.</p>
              </div>
              
              <div className="bg-navy border border-white/10 rounded-3xl p-8 text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-black flex items-center justify-center text-xl mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-white mb-2">Receive Docs</h3>
                <p className="text-white/60">Get your NOC and agreement within 24 hours.</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="#offer-lead-form" className="inline-flex justify-center items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded-xl transition-all shadow-[0_4px_20px_rgba(255,107,53,0.4)] text-lg">
                Start Step 1 Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-black/40 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="mb-12">
              <FAQAccordion 
                faqs={[
                  { q: 'Can I use this address for GST Registration?', a: 'Yes! Our Virtual Office package is explicitly designed to be 100% compliant for GST registration. We provide the necessary NOC, Utility Bill, and Rental Agreement.' },
                  { q: 'Can I use this for MCA (Company Incorporation)?', a: 'Absolutely. It serves as your valid Principal Place of Business for Private Limited, LLP, and other registrations.' },
                  { q: 'What happens to my physical mail?', a: 'Our professional reception team receives your mail, notifies you immediately via email/WhatsApp, and holds it securely for you to collect or forward.' },
                  { q: 'Are there any hidden setup fees?', a: 'No hidden fees. The price you see is the total annual cost for the Virtual Office address and compliance documentation.' },
                  { q: 'How long does approval take?', a: 'Once your KYC is submitted, we typically provide the digital NOC and Agreement within 24 hours.' }
                ]} 
              />
            </div>

            <div className="text-center">
              <Link href="#offer-lead-form" className="inline-flex font-bold text-accent hover:text-accent-hover transition-colors items-center gap-1">
                Talk To An Expert <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL LEAD CAPTURE SECTION */}
      <section id="offer-lead-form" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-accent/5 skew-y-[2deg] origin-top-right -z-10 border-y border-accent/10"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto items-center">
            
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Claim The <span className="text-accent">Monsoon Offer</span></h2>
                <p className="text-xl text-white/70 mb-8 leading-relaxed">
                  Leave your details below. Our workspace advisor will call you within 10 minutes to help you secure this pricing.
                </p>
                <div className="flex justify-center mb-8 scale-90 md:scale-100">
                  <CountdownTimer />
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="bg-navy rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
                <CampaignLeadForm branch="Monsoon Offer Campaign - Footer" />
              </div>
            </ScrollReveal>
            
          </div>
        </div>
      </section>
      
    </div>
  );
}
