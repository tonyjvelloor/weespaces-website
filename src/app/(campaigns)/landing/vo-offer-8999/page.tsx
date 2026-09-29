import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, MapPin, Star, ShieldCheck, Zap } from 'lucide-react';
import VirtualOfficeLeadForm from '@/components/VirtualOfficeLeadForm';
import CountdownTimer from '@/components/CountdownTimer';
import TrustLayer from '@/components/ui/TrustLayer';

// Re-using proven components from the main VO page
import VoDocumentChecklist from '@/components/ui/VoDocumentChecklist';
import VoHowItWorks from '@/components/ui/VoHowItWorks';
import SEOFAQ from '@/components/SEOFAQ';
import { virtualOfficeFAQs } from '@/data/faqs';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';

export const metadata: Metadata = {
  title: 'Virtual Office for ₹8,999/Year | Premium Address & GST Registration | WeeSpaces',
  description: 'Limited time offer! Get a premium Virtual Office in Kerala for just ₹8,999/year. Includes NOC, Rent Agreement, and Mail Handling. Perfect for GST registration.',
  robots: 'noindex, nofollow',
};

export default function VirtualOfficeOfferPage() {
  const targetAudiences = [
    { title: "Startups & Tech Companies", icon: "rocket_launch" },
    { title: "E-Commerce Sellers", icon: "shopping_cart" },
    { title: "Freelancers & Consultants", icon: "laptop_mac" },
    { title: "Expanding Enterprises", icon: "domain" },
    { title: "Remote-First Teams", icon: "groups" },
    { title: "Chartered Accountants", icon: "account_balance" },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans selection:bg-accent selection:text-navy">
      
      {/* 1. URGENCY BANNER */}
      <div className="bg-red-500 text-white text-center py-2 px-4 text-sm font-bold tracking-wider flex items-center justify-center gap-2">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        Q3 COMPLIANCE DRIVE: SAVE ₹6,000 ON VIRTUAL OFFICE PACKAGES. ENDS SOON.
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-[url('/images/kochi_coworking.jpg')] opacity-[0.15] mix-blend-overlay bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy" />
        
        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Direct Response Copy */}
            <div className="lg:col-span-7 text-white pt-4">
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex -space-x-2">
                  {['S','A','R','M'].map((initial, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent text-xs font-bold">
                      {initial}
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-accent text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-2 text-gray-300 font-medium">(4.9/5 from 500+ Startups)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                Legally Register Your Company For Just <span className="text-accent underline decoration-4 underline-offset-8">₹8,999/Year</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed max-w-2xl">
                Get a premium Grade-A commercial address in Kerala. We provide the <strong className="text-white">NOC and Rent Agreement in 48 hours</strong> so you can file for GST immediately.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 max-w-2xl backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" /> What's Included in the ₹8,999 Rate?
                </h3>
                <ul className="space-y-4">
                  {[
                    'Valid Rent Agreement & NOC for GST Registration',
                    'Premium Commercial Address for Website & Cards',
                    'Professional Mail & Courier Handling',
                    'Dedicated Local Manager for Physical Verifications',
                    'Zero Security Deposit. Zero Hidden Fees.'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start text-lg">
                      <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-accent"/> MCA Compliant</div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-accent"/> GST Ready</div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-accent"/> 100% Legal</div>
              </div>

            </div>
            
            {/* Right: The High-Converting Squeeze Form */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full transform -translate-x-10 translate-y-10" />
              
              <div className="relative">
                <CountdownTimer hours={48} />
                <VirtualOfficeLeadForm />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. VISUAL GALLERY - ADDING ATTRACTIVENESS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-navy mb-6">A Premium Address for Your Brand</h2>
            <p className="text-xl text-gray-600">
              When government inspectors or clients visit your registered address, they will be greeted by a professional, Grade-A commercial workspace—not a tiny chartered accountant's desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
            <div className="relative rounded-3xl overflow-hidden group">
              <Image src="/images/exterior.jpg" alt="Premium Building Exterior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Grade-A IT Parks</h3>
                <p className="text-gray-300">Impressive infrastructure</p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="relative rounded-3xl overflow-hidden group">
                <Image src="/images/kochi_coworking.jpg" alt="Modern Reception Area" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">Professional Receptions</h3>
                  <p className="text-gray-300">We handle your mail and guests</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-3xl overflow-hidden group">
                  <Image src="/images/meeting-room-hero.jpg" alt="Meeting Rooms" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-sm">Meeting Room Access</p>
                  </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden group">
                  <Image src="/images/calicut_coworking.jpg" alt="Premium Workspaces" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-sm">Modern Interiors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOCUMENTATION TRANSPARENCY (From Main Page) */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <VoDocumentChecklist />
        </div>
      </section>

      {/* 5. LOCATIONS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-navy mb-4">Available Kerala Locations</h2>
            <p className="text-xl text-gray-600">Establish your presence in Kerala's fastest-growing IT and business hubs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent/50 hover:shadow-xl transition-all text-center group cursor-default shadow-sm">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Kochi</h3>
              <p className="text-gray-500 text-sm">Palarivattom & Infopark</p>
              <div className="mt-4 text-xs font-bold text-green-600 bg-green-50 border border-green-200 py-1 px-3 rounded-full inline-block">Available</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent/50 hover:shadow-xl transition-all text-center group cursor-default shadow-sm">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Trivandrum</h3>
              <p className="text-gray-500 text-sm">Near Technopark</p>
              <div className="mt-4 text-xs font-bold text-green-600 bg-green-50 border border-green-200 py-1 px-3 rounded-full inline-block">Available</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent/50 hover:shadow-xl transition-all text-center group cursor-default shadow-sm">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Kozhikode</h3>
              <p className="text-gray-500 text-sm">HiLite Business Park</p>
              <div className="mt-4 text-xs font-bold text-green-600 bg-green-50 border border-green-200 py-1 px-3 rounded-full inline-block">Available</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-red-500 font-bold bg-red-50 py-2 px-4 rounded-lg inline-block border border-red-100">
              Note: Coimbatore (Tamil Nadu) location is currently 100% Sold Out.
            </p>
          </div>
        </div>
      </section>

      {/* 6. WHO IS THIS FOR? */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Businesses Choose Us</h2>
              <p className="text-white/60 max-w-2xl mx-auto">From solopreneurs to expanding enterprises, our flexible business address solves critical legal and operational challenges.</p>
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

      {/* 7. HOW IT WORKS (From Main Page) */}
      <section className="bg-gray-50/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <VoHowItWorks />
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <div className="bg-white pb-20">
        <SEOFAQ 
          title="Frequently Asked Questions"
          subtitle="Common queries about using our Virtual Workspace for company registration."
          faqs={virtualOfficeFAQs} 
          textColor="text-navy"
        />
      </div>

      <TrustLayer />
      
    </div>
  );
}
