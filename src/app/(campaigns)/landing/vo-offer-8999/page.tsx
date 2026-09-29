import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, MapPin, Star, ShieldCheck, Clock, Zap } from 'lucide-react';
import VirtualOfficeLeadForm from '@/components/VirtualOfficeLeadForm';
import CountdownTimer from '@/components/CountdownTimer';
import TrustLayer from '@/components/ui/TrustLayer';

export const metadata: Metadata = {
  title: 'Virtual Office for ₹8,999/Year | Premium Address & GST Registration | WeeSpaces',
  description: 'Limited time offer! Get a premium Virtual Office in Kerala for just ₹8,999/year. Includes NOC, Rent Agreement, and Mail Handling. Perfect for GST registration.',
  robots: 'noindex, nofollow',
};

export default function VirtualOfficeOfferPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans selection:bg-accent selection:text-navy">
      
      {/* 1. URGENCY BANNER */}
      <div className="bg-red-500 text-white text-center py-2 px-4 text-sm font-bold tracking-wider flex items-center justify-center gap-2">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        Q3 COMPLIANCE DRIVE: SAVE ₹6,000 ON VIRTUAL OFFICE PACKAGES. ENDS SOON.
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-[url('/images/kochi_coworking.jpg')] opacity-[0.07] mix-blend-overlay bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-navy" />
        
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
                  <span className="ml-2 text-gray-400 font-medium">(4.9/5 from 500+ Startups)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                Legally Register Your Company For Just <span className="text-accent underline decoration-4 underline-offset-8">₹8,999/Year</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed max-w-2xl">
                Get a premium Grade-A commercial address in Kerala. We provide the <strong className="text-white">NOC and Rent Agreement in 48 hours</strong> so you can file for GST immediately.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 max-w-2xl">
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
                      <span className="text-gray-200">{feature}</span>
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

      {/* 3. LOCATIONS SECTION (Coimbatore Removed) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Prime Kerala Locations</h2>
            <p className="text-xl text-gray-600">Establish your presence in Kerala's fastest-growing IT and business hubs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-accent/50 hover:shadow-xl transition-all text-center group cursor-default">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Kochi</h3>
              <p className="text-gray-500 text-sm">Palarivattom & Infopark</p>
              <div className="mt-4 text-xs font-bold text-green-600 bg-green-100 py-1 px-3 rounded-full inline-block">Available</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-accent/50 hover:shadow-xl transition-all text-center group cursor-default">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Trivandrum</h3>
              <p className="text-gray-500 text-sm">Near Technopark</p>
              <div className="mt-4 text-xs font-bold text-green-600 bg-green-100 py-1 px-3 rounded-full inline-block">Available</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-accent/50 hover:shadow-xl transition-all text-center group cursor-default">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Kozhikode</h3>
              <p className="text-gray-500 text-sm">HiLite Business Park</p>
              <div className="mt-4 text-xs font-bold text-green-600 bg-green-100 py-1 px-3 rounded-full inline-block">Available</div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-red-500 font-bold bg-red-50 py-2 px-4 rounded-lg inline-block border border-red-100">
              Note: Coimbatore (Tamil Nadu) location is currently 100% Sold Out.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PROCESS / TRUST */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
         <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-3xl font-black text-navy mb-12">GST Registration Made Completely Frictionless</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl font-black text-navy mx-auto mb-4 border border-gray-100">1</div>
                <h4 className="font-bold text-navy text-lg mb-2">Submit Details</h4>
                <p className="text-gray-500 text-sm">Fill the form above to lock your ₹8,999 rate.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl font-black text-navy mx-auto mb-4 border border-gray-100">2</div>
                <h4 className="font-bold text-navy text-lg mb-2">KYC & Agreement</h4>
                <p className="text-gray-500 text-sm">We prepare your NOC and Rent Agreement within 48 hours.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl font-black text-navy mx-auto mb-4 border border-gray-100">3</div>
                <h4 className="font-bold text-navy text-lg mb-2">Government Filing</h4>
                <p className="text-gray-500 text-sm">File for GST. We handle the physical inspector verification.</p>
              </div>
            </div>
         </div>
      </section>

      <TrustLayer />
      
    </div>
  );
}
