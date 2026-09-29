import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, Shield, MapPin, Building, FileText, ArrowRight } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import CountdownTimer from '@/components/CountdownTimer';
import TrustLayer from '@/components/ui/TrustLayer';

export const metadata: Metadata = {
  title: 'Virtual Office for ₹8,999/Year | Premium Address & GST Registration | WeeSpaces',
  description: 'Limited time offer! Get a premium Virtual Office in Kerala for just ₹8,999/year. Includes NOC, Rent Agreement, and Mail Handling. Perfect for GST registration.',
  robots: 'noindex, nofollow', // Ad landing pages shouldn't index organically to avoid duplicate content penalties
};

export default function VirtualOfficeOfferPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-[url('/images/kochi_coworking.jpg')] opacity-20 mix-blend-overlay bg-cover bg-center" />
        
        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Copy & Value Prop */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-8 shadow-lg shadow-red-500/30">
                <span className="animate-pulse w-2 h-2 rounded-full bg-white"></span>
                FLASH SALE ACTIVE
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                Premium Virtual Office for Just <span className="text-accent">₹8,999</span><span className="text-2xl text-gray-400 font-medium">/Year</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
                Legally register your company and get your GST number in 48 hours using a premium commercial address in Kochi, Trivandrum, or Calicut.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Valid Rent Agreement & NOC for GST',
                  'Premium Grade-A Commercial Address',
                  'Professional Mail & Package Handling',
                  'Dedicated Center Manager Support',
                  'Zero Setup Fees or Hidden Charges'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-lg">
                    <CheckCircle2 className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-100">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4 items-center bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex -space-x-4">
                  {['S', 'M', 'R', 'P'].map((initial, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-navy bg-accent flex items-center justify-center text-navy font-bold text-lg">
                      {initial}
                    </div>
                  ))}
                </div>
                <div className="ml-2">
                  <div className="flex items-center text-accent">
                    {/* Stars */}
                    ★ ★ ★ ★ ★
                  </div>
                  <p className="text-sm text-gray-300">Trusted by 500+ startups & SMEs</p>
                </div>
              </div>
            </div>
            
            {/* Right: Form & Timer */}
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full transform -translate-x-10 translate-y-10" />
              
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl relative border border-gray-100">
                <CountdownTimer hours={48} />
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy">Claim This Offer</h3>
                  <p className="text-gray-500 text-sm mt-2">Fill the form to lock in your ₹8,999 rate. Our team will contact you within 15 minutes.</p>
                </div>
                
                <LeadForm 
                  source="Ad Campaign - VO Offer 8999" 
                  branch="Offer Selection" 
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">How Fast Can You Get Registered?</h2>
            <p className="text-xl text-gray-600">Our process is fully digital and streamlined so you can submit your GST application in record time.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative group hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-navy text-white rounded-xl flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-accent group-hover:text-navy transition-colors">1</div>
              <h3 className="text-xl font-bold text-navy mb-4">Book Your Plan</h3>
              <p className="text-gray-600">Lock in the ₹8,999/year rate and submit your basic KYC documents online.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative group hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-navy text-white rounded-xl flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-accent group-hover:text-navy transition-colors">2</div>
              <h3 className="text-xl font-bold text-navy mb-4">Get Documentation</h3>
              <p className="text-gray-600">Receive your signed Rent Agreement, NOC, and Utility Bill within 48 hours.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative group hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-navy text-white rounded-xl flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-accent group-hover:text-navy transition-colors">3</div>
              <h3 className="text-xl font-bold text-navy mb-4">File for GST</h3>
              <p className="text-gray-600">Apply for your GST. When the inspector visits, our professional staff will handle the verification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOCATIONS */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Choose From Premium Grade-A Locations</h2>
              <p className="text-lg text-gray-600 mb-8">This offer is valid across our premier South Indian workspace hubs. Elevate your brand image instantly.</p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <span className="text-lg font-semibold text-navy">Kochi (Palarivattom & Infopark)</span>
                </li>
                <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <span className="text-lg font-semibold text-navy">Trivandrum (Near Technopark)</span>
                </li>
                <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <span className="text-lg font-semibold text-navy">Kozhikode (HiLite Business Park)</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-2xl">
                <Image src="/images/meeting-room-hero.jpg" alt="Premium Workspace" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustLayer />
      
      {/* LOCALBUSINESS SCHEMA */}
    </div>
  );
}
