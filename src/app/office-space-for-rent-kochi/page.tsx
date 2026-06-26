import { Metadata } from 'next';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import { CheckCircle2, Wifi, Coffee, Clock, ShieldCheck, MapPin, Star, AlertCircle, TrendingUp, Building2, Zap } from 'lucide-react';
import Script from 'next/script';
import { branchData } from '@/data/branches';

const city = "Kochi";
const urlPath = "/office-space-for-rent-kochi";
const data = branchData.ernakulam;

export const metadata: Metadata = {
  title: `Premium Office Space for Rent in ${city} | WeeSpaces`,
  description: `Find premium office space for rent in ${city}. Enjoy managed offices with no CapEx, move-in ready customizable cabins, no brokerage, and enterprise-grade IT.`,
  keywords: [`Office space for rent ${city}`, `Managed office ${city}`, `Commercial office space ${city}`, `Move-in ready office ${city}`, `No brokerage office ${city}`],
  alternates: {
    canonical: urlPath,
  },
  openGraph: {
    title: `Premium Office Space for Rent in ${city} | WeeSpaces`,
    description: `Find premium office space for rent in ${city}. Enjoy managed offices with no CapEx, move-in ready customizable cabins, no brokerage, and enterprise-grade IT.`,
    url: urlPath,
    images: [{ url: data?.heroImage || '/images/exterior-tall.jpg' }]
  },
};

export default function OfficeSpaceKochiPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://weespaces.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://weespaces.in/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `Office Space for Rent in ${city}`,
        "item": `https://weespaces.in${urlPath}`
      }
    ]
  };

  return (
    <div className="bg-navy min-h-screen font-sans pb-24">
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Scarcity Banner */}
      <div className="bg-gradient-to-r from-accent to-accent-light text-navy font-bold text-center py-2 px-4 text-sm flex items-center justify-center gap-2 animate-pulse">
        <AlertCircle className="w-4 h-4" />
        <span>High Demand: Move-in Ready offices in {city} are filling fast. Save 100% on Brokerage.</span>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-accent/15 rounded-full blur-[150px] -mr-[400px] -mt-[400px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-navy-light/60 rounded-full blur-[120px] -ml-[300px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            <div className="lg:col-span-7 flex flex-col justify-center pt-4">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-[0_0_15px_rgba(242,156,31,0.2)]">
                  <MapPin className="w-4 h-4" />
                  {city}
                </div>
                <div className="inline-flex items-center gap-1 text-xs text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <Star className="w-3 h-3 text-accent fill-accent" /> Premium Managed Offices
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white drop-shadow-xl">
                Premium Office Space for Rent in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">{city}</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed font-light">
                Upgrade to a fully Managed Office. No CapEx, No Brokerage, and Enterprise-grade IT. Customizable cabins that are 100% move-in ready.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                {[
                  'No CapEx Required',
                  'Zero Brokerage',
                  'Move-in Ready',
                  'Customizable Cabins'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="text-sm text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="py-4 border-t border-b border-white/10 mb-8 max-w-2xl">
                <p className="text-white/60 text-sm flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-white/90">Trusted by 500+ Businesses</span>
                  <span className="text-white/20">|</span>
                  <span className="flex items-center gap-1"><Star className="w-4 h-4 text-accent fill-accent" /> 4.8 Google Rating</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#pricing" className="inline-flex items-center justify-center bg-accent text-navy font-bold px-8 py-4 rounded-xl hover:bg-accent-light transition-all duration-300 shadow-[0_0_20px_rgba(242,156,31,0.3)]">
                  See Pricing & Plans
                </a>
                <a href="#form-id" className="inline-flex items-center justify-center bg-transparent border-2 border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                  Book a Free Tour
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative" id="form-id">
              <div className="sticky top-24 z-20">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/60 to-transparent rounded-[2rem] blur-2xl opacity-40"></div>
                <div className="relative bg-navy-light/70 backdrop-blur-2xl p-8 sm:p-10 rounded-[2rem] border border-white/20 shadow-2xl">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Get a Custom Quote
                    </h3>
                    <p className="text-white/70 text-base">Tell us your team size and requirements. No brokerage fees.</p>
                  </div>
                  <LeadForm branch={city} />
                  <p className="text-center text-xs text-white/40 mt-6 flex items-center justify-center gap-1">
                     <ShieldCheck className="w-3 h-3" /> Information 100% secure.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative bg-navy-dark border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Our Managed Offices in Kochi?</h2>
            <p className="text-xl text-white/60">Designed to eliminate the hassle of traditional commercial real estate.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-light/30 border border-white/10 p-8 rounded-3xl hover:border-accent/30 transition-colors text-center group">
              <div className="w-16 h-16 bg-navy mx-auto rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent transition-colors">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Zero CapEx</h3>
              <p className="text-white/60 text-sm">Save millions on interior design, furniture, and IT infrastructure. Everything is fully funded and ready to use.</p>
            </div>
            <div className="bg-navy-light/30 border border-white/10 p-8 rounded-3xl hover:border-accent/30 transition-colors text-center group">
              <div className="w-16 h-16 bg-navy mx-auto rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent transition-colors">
                <Wifi className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise-grade IT</h3>
              <p className="text-white/60 text-sm">Dedicated leased lines, secure VLANs, and biometric access controls built for high-performance teams.</p>
            </div>
            <div className="bg-navy-light/30 border border-white/10 p-8 rounded-3xl hover:border-accent/30 transition-colors text-center group">
              <div className="w-16 h-16 bg-navy mx-auto rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent transition-colors">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customizable Cabins</h3>
              <p className="text-white/60 text-sm">Need a manager's cabin or a private meeting room? We tailor the layout to suit your specific workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section (High Intent Trigger) */}
      <section className="py-20 relative bg-gradient-to-b from-navy to-navy-dark border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Traditional Lease vs Managed Office</h2>
            <p className="text-xl text-white/60">See how much you save by switching.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white/5 p-8 rounded-3xl border border-white/10 opacity-70">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                   <Building2 className="w-8 h-8 text-white/50" />
                   <h3 className="text-2xl font-bold text-white/50">Traditional Commercial Rent</h3>
                </div>
                <ul className="space-y-4">
                   <li className="flex items-center gap-3 text-white/60"><span className="text-red-400">✗</span> High Brokerage Fees</li>
                   <li className="flex items-center gap-3 text-white/60"><span className="text-red-400">✗</span> 6-10 months lock-in deposit</li>
                   <li className="flex items-center gap-3 text-white/60"><span className="text-red-400">✗</span> Heavy CapEx for Interiors</li>
                   <li className="flex items-center gap-3 text-white/60"><span className="text-red-400">✗</span> Manage your own facilities</li>
                   <li className="flex items-center gap-3 text-white/60"><span className="text-red-400">✗</span> Move-in takes 3-6 months</li>
                </ul>
             </div>
             
             <div className="bg-navy-light/50 p-8 rounded-3xl border-2 border-accent relative shadow-[0_0_40px_rgba(242,156,31,0.15)] transform md:-translate-y-4">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-accent text-navy text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  WeeSpaces Managed Office
                </div>
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                   <Zap className="w-8 h-8 text-accent" />
                   <h3 className="text-2xl font-bold text-white">Move-in Ready Space</h3>
                </div>
                <ul className="space-y-4">
                   <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-accent" /> Zero Brokerage</li>
                   <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-accent" /> Flexible, low deposit</li>
                   <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-accent" /> Zero CapEx & Fully Furnished</li>
                   <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-accent" /> Facility management included</li>
                   <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-accent" /> Move-in Ready in days</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section id="pricing" className="py-24 relative bg-navy">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Workspace Plans</h2>
            <p className="text-xl text-white/60 mb-6">Choose the ideal setup for your team.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-navy-light/50 border border-white/20 p-8 rounded-3xl hover:border-accent/50 transition-colors flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Customizable Cabins</h3>
              <p className="text-white/60 text-sm mb-6">Enclosed, branded private space for your company.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-accent" /> Designed for 5 to 50+ members</li>
                <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-accent" /> Add director cabins & meeting rooms</li>
                <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-accent" /> Biometric security</li>
              </ul>
              <a href="#form-id" className="text-center bg-white/10 text-white font-bold py-3 rounded-xl hover:bg-white/20 transition-colors">Request Pricing</a>
            </div>

            <div className="bg-navy-light/80 border-2 border-accent p-8 rounded-3xl relative shadow-[0_0_30px_rgba(242,156,31,0.15)] flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-navy text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise Managed Office</h3>
              <p className="text-white/60 text-sm mb-6">Dedicated floor or wing built strictly to your specs.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-accent" /> 50 to 500+ seat capacity</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-accent" /> Exclusive branded reception</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-accent" /> End-to-end bespoke IT & infrastructure</li>
              </ul>
              <a href="#form-id" className="text-center bg-accent text-navy font-bold py-3 rounded-xl hover:bg-accent-light transition-colors">Consult an Expert</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
