import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import { CheckCircle, MapPin, ShieldCheck, Building2, FileText, FileBadge, Check } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Virtual Office for GST Registration | WeeSpaces',
  description: 'Get a professional virtual office for GST registration in Kerala and Tamil Nadu. Starting at ₹1,500/month.',
  alternates: {
    canonical: 'https://weespaces.in/virtual-office-for-gst-registration',
  }
};

export default function GSTRegistrationVirtualOfficePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://weespaces.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Virtual Office",
        "item": "https://weespaces.in/virtual-office"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "GST Registration",
        "item": "https://weespaces.in/virtual-office-for-gst-registration"
      }
    ]
  };

  return (
    <div className="bg-navy min-h-screen text-white pt-8 pb-20">
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-12 relative">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-accent font-medium text-sm">
              <ShieldCheck size={18} />
              <span>Compliant with Govt. Regulations</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Virtual Office for <span className="text-accent">GST Registration</span> in Kerala & Tamil Nadu
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              Get a premium business address for your company registration and GST compliance without the overhead of a physical office. Complete documentation provided within 48 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-accent">
                  <span className="font-bold text-xl">₹</span>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider font-bold">Starting from</p>
                  <p className="text-xl font-bold">₹1,500<span className="text-sm font-normal text-white/60">/month</span></p>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-white/10 mx-4"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-accent">
                  <Building2 size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider font-bold">Trusted By</p>
                  <p className="text-xl font-bold">500+ <span className="text-sm font-normal text-white/60">Businesses</span></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 w-full max-w-md mx-auto lg:max-w-none lg:ml-auto">
            <LeadForm source="GST Registration Landing Page" />
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="container mx-auto px-6 lg:px-12 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Everything You Need for <span className="text-accent">Compliance</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">We provide all mandatory documents required by the GST department for successful registration.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-navy-dark border border-white/10 p-8 rounded-3xl hover:border-accent/30 transition-all group">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <FileBadge size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">NOC from Owner</h3>
            <p className="text-white/60 leading-relaxed">
              A legally drafted No Objection Certificate from the actual property owner, specifically mentioning permission for GST registration.
            </p>
          </div>
          
          <div className="bg-navy-dark border border-white/10 p-8 rounded-3xl hover:border-accent/30 transition-all group">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <FileText size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Utility Bill</h3>
            <p className="text-white/60 leading-relaxed">
              Latest electricity or property tax receipt of the premises to establish the authenticity of the address provided.
            </p>
          </div>
          
          <div className="bg-navy-dark border border-white/10 p-8 rounded-3xl hover:border-accent/30 transition-all group">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Rent Agreement</h3>
            <p className="text-white/60 leading-relaxed">
              A formal, stamped rental/virtual office agreement valid for 11 months, establishing your legal right to use the premises.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="container mx-auto px-6 lg:px-12 mt-24">
        <div className="bg-navy-dark border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-accent/5 blur-3xl pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Prime Locations Across South India</h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Choose from our premium business centers located in major commercial hubs. Establishing your business in a recognized commercial building boosts your brand credibility.
              </p>
              
              <ul className="space-y-4">
                {[
                  { city: 'Kochi', desc: 'Ernakulam CBD' },
                  { city: 'Trivandrum', desc: 'Pattom' },
                  { city: 'Calicut', desc: 'East Nadakkave' },
                  { city: 'Coimbatore', desc: 'Kalapatti' }
                ].map((loc, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{loc.city}</p>
                      <p className="text-sm text-white/50">{loc.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <div className="bg-navy border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                <Check className="text-accent shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Commercial Property Status</h4>
                  <p className="text-sm text-white/60">All our spaces are registered commercial properties, ensuring zero rejections from the GST department.</p>
                </div>
              </div>
              <div className="bg-navy border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                <Check className="text-accent shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Mail & Courier Handling</h4>
                  <p className="text-sm text-white/60">We receive and notify you of all official letters from government departments.</p>
                </div>
              </div>
              <div className="bg-navy border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                <Check className="text-accent shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Signage Display</h4>
                  <p className="text-sm text-white/60">Mandatory name board display at the premises for physical verification by officers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
