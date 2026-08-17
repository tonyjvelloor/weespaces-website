"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CityData } from '@/data/locations';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import { CheckCircle, Clock, MapPin, Shield, Check, X, ArrowRight, Building, FileText } from 'lucide-react';
import { track } from '@/lib/tracking';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import LocalTrustSignals from '@/components/ui/LocalTrustSignals';
import MobileStickyCTA from '@/components/MobileStickyCTA';

interface GSTRegistrationTemplateProps {
  city: CityData;
}

export default function GSTRegistrationTemplate({ city }: GSTRegistrationTemplateProps) {
  const pageContext = { pageType: 'intent', pageSlug: 'gst-registration', city: city.slug };

  useEffect(() => {
    track.page(pageContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city.slug]);

  useScrollTracking(pageContext);

  const localContext = city.slug === 'kochi' 
    ? "Position your business in Kochi's thriving IT ecosystem near Infopark and SmartCity."
    : city.slug === 'coimbatore'
    ? "Establish your presence near TIDEL Park and Coimbatore's major commercial hubs."
    : city.slug === 'trivandrum'
    ? "Get a premium address in Trivandrum's rapidly growing business districts near Technopark."
    : "Get a premium commercial address in Calicut's emerging IT and business corridors near Cyberpark.";

  const matrixData = [
    { req: 'Commercial Address', weespaces: true, note: 'Premium Hub' },
    { req: 'Rental Agreement', weespaces: true, note: 'Valid for 11 months' },
    { req: 'NOC', weespaces: 'Where applicable', note: 'Subject to terms' },
    { req: 'Utility Document', weespaces: 'Where applicable', note: 'Electricity Bill etc.' },
    { req: 'Signage', weespaces: 'Where applicable', note: 'At the facility' },
    { req: 'GST Application', weespaces: false, note: 'Customer responsibility' },
    { req: 'Government Filing', weespaces: false, note: 'Customer responsibility' }
  ];

  const steps = [
    { step: 1, title: 'Choose your location', desc: 'Select a premium WeeSpaces facility.' },
    { step: 2, title: 'Submit business details', desc: 'Provide KYC and company documents.' },
    { step: 3, title: 'Receive applicable documentation', desc: 'Get your rental agreement & NOC.' },
    { step: 4, title: 'Complete your GST application', desc: 'Use the documents to apply online.' },
    { step: 5, title: 'Respond to authority requirements', desc: 'Handle any queries from GST officers.' },
  ];

  return (
    <div className="bg-white">
      <LocalBusinessSchema cityData={city} />
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-32 lg:pt-40 overflow-hidden bg-navy pb-20">
        <Image src={city.gallery[0]} alt={`GST Registration Virtual Office in ${city.name}`} fill priority sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-6 uppercase tracking-widest">
              Business Compliance Solution
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Virtual Office for <span className="text-accent">GST Registration</span> in {city.name}
            </h1>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl font-light">
              Get a commercial business address and supporting documentation for your GST application, subject to applicable requirements.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Starting From</div>
                <div className="text-3xl font-black text-white">₹10,000<span className="text-lg font-normal text-white/60">/year</span></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#matrix" className="bg-accent text-navy px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
                View Documents Provided <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href={`https://wa.me/919207189111?text=Hi, I need a Virtual Office for GST Registration in ${city.name}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => track.cta('whatsapp_hero', 'https://wa.me/919207189111', { city: city.name })}
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                WhatsApp an Expert
              </a>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Fast Setup</div>
              <h3 className="text-2xl font-bold text-navy mb-2">Check Availability</h3>
              <p className="text-gray-500 text-sm mb-6">Our compliance experts will guide you through the required documentation.</p>
              <LeadForm branch={city.name} source={`GST Intent Page - ${city.name}`} defaultRequirement="Virtual Office" hidePricing />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. IMMEDIATE ANSWER BLOCK (AEO) */}
      <section className="py-16 bg-gray-50 border-b border-gray-100 relative -mt-6 rounded-t-3xl z-20">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-accent/20">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-accent shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-navy mb-3">Can I use a Virtual Office for GST Registration?</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A virtual office can provide a commercial business address and supporting documents that a customer may use as part of their GST registration process, where permitted and subject to applicable requirements. <strong>WeeSpaces provides the address and supporting documentation; the customer remains responsible for completing the GST application.</strong>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. GST DOCUMENTATION MATRIX */}
      <section id="matrix" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">The Documentation Matrix</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Clear boundaries on what WeeSpaces provides versus what your company or CA needs to handle.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="overflow-hidden bg-white border border-gray-200 rounded-3xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="p-6 text-lg font-bold w-1/2">Requirement</th>
                    <th className="p-6 text-lg font-bold w-1/2 border-l border-white/10">WeeSpaces Provision</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-100">
                  {matrixData.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-bold flex items-center gap-3">
                        <FileText className="w-5 h-5 text-gray-400" />
                        {row.req}
                      </td>
                      <td className="p-6 border-l border-gray-100">
                        {row.weespaces === true ? (
                          <div className="flex items-center gap-2 text-green-600 font-bold">
                            <Check className="w-5 h-5" /> Provided ({row.note})
                          </div>
                        ) : row.weespaces === false ? (
                          <div className="flex items-center gap-2 text-red-500 font-bold">
                            <X className="w-5 h-5" /> {row.note}
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-blue-600 font-bold">
                            <CheckCircle className="w-5 h-5" /> {row.weespaces}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              * Note: "Where applicable" means documents are provided subject to specific facility terms and local authority requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. HOW IT WORKS TIMELINE */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">The 5-step timeline to securing your commercial address.</p>
          </ScrollReveal>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-navy text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                    {step.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-navy text-xl mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 LOCAL TRUST SIGNALS */}
      <LocalTrustSignals cityData={city} />

      {/* 5. LOCALIZED EVIDENCE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-6">Why {city.name}?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {localContext}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              A premium commercial address not only fulfills compliance requirements but also elevates your brand image. Ensure your business card reflects the professionalism of your operations.
            </p>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <Building className="w-8 h-8 text-accent shrink-0" />
              <div>
                <div className="font-bold text-navy">Premium Commercial Hub</div>
                <div className="text-sm text-gray-500">{city.contactInfo?.address || 'Central Business District'}</div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
             <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
               <Image src={city.gallery[1] || city.gallery[0]} alt={`${city.name} Business Center`} fill className="object-cover" />
               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                 <div className="flex items-center gap-2 text-navy font-bold">
                   <MapPin className="w-5 h-5 text-accent" /> {city.name} Facility
                 </div>
               </div>
             </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* 5.5 INTERNAL LINKING TO CORE VO */}
      <section className="py-12 bg-gray-50 border-t border-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-navy mb-4">Looking for General Virtual Office Services?</h3>
            <p className="text-gray-600 mb-6">Explore our standard virtual office plans in {city.name} if you don't require GST registration compliance.</p>
            <Link href={`/virtual-office/${city.slug}`} className="inline-flex items-center gap-2 text-accent font-bold hover:text-navy transition-colors">
              View Standard Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 5.6 COMPARISON ENGINE HOOK */}
      <section className="py-16 bg-white border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-navy mb-4">Evaluating Other Providers?</h2>
            <p className="text-gray-600 mb-8">
              See exactly how WeeSpaces compares to other virtual office providers in India on GST compliance, pricing, and mail handling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/virtual-office/alternatives/regus" className="px-6 py-3 bg-gray-50 border border-gray-200 hover:border-accent hover:text-accent font-bold text-navy rounded-xl transition-all shadow-sm">
                Vs Regus
              </Link>
              <Link href="/virtual-office/alternatives/wework" className="px-6 py-3 bg-gray-50 border border-gray-200 hover:border-accent hover:text-accent font-bold text-navy rounded-xl transition-all shadow-sm">
                Vs WeWork
              </Link>
              <Link href="/virtual-office/alternatives/awfis" className="px-6 py-3 bg-gray-50 border border-gray-200 hover:border-accent hover:text-accent font-bold text-navy rounded-xl transition-all shadow-sm">
                Vs Awfis
              </Link>
              <Link href="/virtual-office/alternatives/mybranch" className="px-6 py-3 bg-gray-50 border border-gray-200 hover:border-accent hover:text-accent font-bold text-navy rounded-xl transition-all shadow-sm">
                Vs MyBranch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* 6. INTERNAL LINKING TO BLOG */}
      <section className="py-12 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-4">Want to learn more about the legalities?</h3>
          <p className="text-white/70 mb-6">Read our comprehensive guide on virtual office legality and compliance in India.</p>
          <Link href="/blog/is-a-virtual-office-legal-in-india" className="inline-flex items-center gap-2 text-accent font-bold hover:text-white transition-colors">
            Read the Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    <MobileStickyCTA />
    </div>
  );
}
