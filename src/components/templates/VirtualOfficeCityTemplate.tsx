import { CityData, ServiceType } from '@/data/locations';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Star, Clock, CheckCircle, Building, XCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import VoPricingCards from '@/components/ui/VoPricingCards';
import VoDocumentChecklist from '@/components/ui/VoDocumentChecklist';
import VoHowItWorks from '@/components/ui/VoHowItWorks';
import LocalContactBlock from '@/components/ui/LocalContactBlock';
import TrustLayer from '@/components/ui/TrustLayer';
import { virtualOfficeFaqs } from '@/data/pricing';

export default function VirtualOfficeCityTemplate({ city, service }: { city: CityData, service: ServiceType }) {
  
  // Custom hero content based on city
  let heroTitle = `Premium Virtual Office & GST Address in ${city.name}`;
  let heroSub = `Get a legally compliant business address in ${city.name} with complete documentation, mail handling, and on-demand workspace.`;
  let perks = ["Address for GST compliance", "Premium Business Address", "Mail Handling"];

  if (city.slug === 'kochi') {
    heroTitle = `Kerala GST Support & Virtual Office Near Infopark, Kochi`;
    heroSub = `The perfect launchpad for IT startups and growing companies. Get a premium Kochi address for GST and company incorporation.`;
    perks = ["Near Infopark", "Kerala GST Support", "Startup Ecosystem"];
  } else if (city.slug === 'trivandrum') {
    heroTitle = `Premium Business Address Near Technopark, Trivandrum`;
    heroSub = `Establish your presence among government contractors and IT giants in Kerala's capital.`;
    perks = ["Near Technopark", "IT Companies & Govt Contractors", "Mail Forwarding"];
  } else if (city.slug === 'coimbatore') {
    heroTitle = `Tamil Nadu GST Registration & Virtual Office in Coimbatore`;
    heroSub = `Fast-track your business expansion into Tamil Nadu's manufacturing and SME hub with a compliant registered office.`;
    perks = ["Tamil Nadu GST", "Manufacturing & SMEs", "Meeting Room Access"];
  } else if (city.slug === 'calicut') {
    heroTitle = `Flexible Virtual Office Plans in Calicut`;
    heroSub = `Expand your regional footprint in Kozhikode with a professional business address for GST and mail handling.`;
    perks = ["Kozhikode Businesses", "Startups & SMEs", "Regional Expansion"];
  }

  return (
    <div className="relative">
      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:right-4 lg:left-auto lg:w-48 z-50 bg-white lg:bg-transparent lg:shadow-none shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t lg:border-t-0 border-gray-200">
        <div className="flex lg:flex-col lg:gap-3 p-4 lg:p-0 justify-around">
           <a href="#pricing" className="flex items-center justify-center gap-2 lg:bg-accent lg:text-navy text-accent bg-accent/10 px-4 py-3 lg:py-4 rounded-xl font-bold lg:shadow-lg hover:lg:scale-105 transition-all text-sm w-full lg:w-auto">
             View Plans
           </a>
           <a href="tel:+919207189111" className="flex items-center justify-center gap-2 lg:bg-white lg:text-navy text-navy bg-gray-100 px-4 py-3 lg:py-4 rounded-xl font-bold lg:shadow-lg hover:lg:scale-105 transition-all text-sm w-full lg:w-auto ml-2 lg:ml-0">
             📞 Call
           </a>
        </div>
      </div>

      {/* 1. HERO (CONVERSION) */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-navy">
        <Image src={city.gallery[0]} alt={`${service.name} in ${city.name}`} fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center py-20">
          <ScrollReveal className="lg:col-span-8">
            <div className="flex items-center gap-2 text-accent text-sm font-bold tracking-wider mb-6">
              <Link href="/virtual-office" className="hover:text-white transition-colors">VIRTUAL OFFICE</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">{city.name}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {heroTitle}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed font-light">
              {heroSub}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {perks.map((perk, i) => (
                <div key={i} className="glass rounded-xl px-4 py-3 border border-accent/20 flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold">{perk}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-4 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative" id="lead-form">
              <div className="bg-accent text-navy p-4 text-center font-bold text-lg">
                Get Your {city.name} Address
              </div>
              <div className="p-6">
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 mb-6 text-left">
                  <h3 className="text-sm font-bold text-navy mb-2">What You Receive</h3>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent"></span> Commercial business address</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent"></span> Rental agreement</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent"></span> NOC (where applicable)</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent"></span> Mail handling</li>
                  </ul>
                </div>
                <LeadForm branch={city.name} source={`Virtual Office ${city.name} Hero`} hidePricing />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. AUTHORITY STRIP */}
      <section className="bg-white py-6 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-12">
            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /><span className="font-bold text-navy whitespace-nowrap">★★★★★ Google Rated</span></div>
            <div className="font-bold text-gray-500 whitespace-nowrap">100% GST Compliant</div>
            <div className="font-bold text-gray-500 whitespace-nowrap">Premium Locations</div>
            <div className="font-bold text-gray-500 whitespace-nowrap">48-Hour Setup</div>
            <div className="font-bold text-gray-500 whitespace-nowrap">Mail Handling Included</div>
          </div>
        </div>
      </section>

      {/* 3. DOCUMENTATION TRANSPARENCY & GST RULES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-accent/20 shadow-lg mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-3xl">gavel</span>
                {city.slug === 'coimbatore' ? 'Tamil Nadu' : 'Kerala'} GST Registration Rules for {city.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {city.gstRegistrationRules}
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-navy bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                WeeSpaces virtual offices are 100% compliant with these local regulations.
              </div>
            </div>
          </ScrollReveal>

          <VoHowItWorks />
          
          {city.contactInfo && (
            <LocalContactBlock contactInfo={city.contactInfo} cityName={city.name} />
          )}

          <VoDocumentChecklist />
        </div>
      </section>

      {/* 4. Removed Duplicate How It Works */}

      {/* 5. PRICING */}
      <section className="py-24 bg-navy text-white relative overflow-hidden" id="pricing">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Your {city.name} Plan</h2>
              <p className="text-white/60 max-w-2xl mx-auto">From simple GST registration to full MCA Compliance Support.</p>
            </div>
          </ScrollReveal>
          
          {/* Reuse the VoPricingCards. They are styled to work on dark or light depending on context, but let's assume they look fine. */}
          {/* Since VoPricingCards has hardcoded text colors that might clash with dark bg, let's wrap it in a div that resets text. */}
          <div className="text-navy">
            <VoPricingCards />
          </div>
        </div>
      </section>

      {/* 6. LOCAL CONTEXT & SEO */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-6">Why register your business in {city.name}?</h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>{city.description}</p>
            </div>

            {city.localGuideExpanded && city.localGuideExpanded.map((guide, i) => (
               <div key={i} className="mb-8">
                 <h3 className="text-xl font-bold text-navy mb-3">{guide.title}</h3>
                 <p className="text-gray-600 leading-relaxed">{guide.content}</p>
               </div>
            ))}
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            {city.nearbyCompaniesList && (
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2"><Building className="w-5 h-5 text-accent" /> Nearby Enterprise Ecosystem</h3>
                <p className="text-sm text-gray-500 mb-4">Position your company alongside industry leaders:</p>
                <div className="flex flex-wrap gap-2">
                  {city.nearbyCompaniesList.map((company, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-bold text-gray-700 shadow-sm">{company}</span>
                  ))}
                </div>
              </div>
            )}
            
            <h3 className="text-xl font-bold text-navy mb-4">Compliance & GST</h3>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-gray-600">
              <p className="mb-0">{city.gstRegistrationRules}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. VIRTUAL OFFICE FAQS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">Frequently Asked Questions</h2>
          </ScrollReveal>
          <SEOFAQ faqs={virtualOfficeFaqs} />
        </div>
      </section>
      
    </div>
  );
}
