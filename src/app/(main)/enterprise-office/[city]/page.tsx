import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import { notFound } from 'next/navigation';
import { cities } from '@/data/locations';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import LocalContactBlock from '@/components/ui/LocalContactBlock';
import { MapPin, Building, ShieldCheck, Briefcase, Zap, Network, ChevronRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const city = cities[resolvedParams.city];
  
  if (!city) return notFound();

  return constructMetadata({
    title: `Enterprise Office Space in ${city.name} | 100+ Seats Custom Built`,
    description: `Move your 100+ member team into a fully managed enterprise office in ${city.name}. Zero setup costs, 45-day deployment, and premium infrastructure.`,
    canonicalPath: `/enterprise-office/${city.slug}`,
    image: city.gallery[0],
  });
}

export function generateStaticParams() {
  return Object.values(cities).map(city => ({
    city: city.slug
  }));
}

export default async function EnterpriseCityPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const city = cities[resolvedParams.city];
  
  if (!city) return notFound();

  const faqs = [
    { question: `What is the minimum seat requirement for an enterprise office in ${city.name}?`, answer: `Our enterprise campuses are designed for teams of 50 to 500+ members requiring custom layouts and dedicated infrastructure.` },
    { question: `How long does it take to deploy a custom office?`, answer: `Depending on your custom layout requirements, we typically design, build, and hand over the fully operational office in 45 to 60 days.` },
    { question: `Is IT infrastructure included?`, answer: `Yes. We provide enterprise-grade networking, dual-ISP redundancy, secure server rooms, and dedicated VLANs tailored to your IT compliance policies.` },
    { question: `Who manages the facility?`, answer: `WeeSpaces handles end-to-end facility management, including housekeeping, security, pantry operations, and MEP maintenance.` },
    { question: `Can we brand the workspace?`, answer: `Absolutely. Enterprise offices are fully white-labeled. You get your own dedicated reception, access cards, and brand colors throughout the floor.` }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-40 bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={city.gallery[0] || "/images/exterior.jpg"} alt={`Enterprise Campus in ${city.name}`} fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/95 to-navy"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              {city.name} Enterprise Hub
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">100+ Seat HQ</span> in {city.name}
            </h1>
            <p className="text-xl text-white/80 mb-12">
              Avoid commercial leasing delays and CapEx. We build and manage your dedicated office floor or entire campus in {city.name}, tailored to your brand and security needs.
            </p>
            <div className="flex gap-4">
              <Link href="#lead-form" className="bg-accent text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-all">
                Get a Custom Quote
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative" id="book-tour">
              <div className="bg-accent text-navy p-4 text-center font-bold text-lg">
                Request {city.name} Floor Plans
              </div>
              <div className="p-6">
                <LeadForm branch={city.name} source={`Enterprise ${city.name} Hero`} defaultService="managed-office" hidePricing />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. THE ENTERPRISE ADVANTAGE */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Why Global Teams Choose WeeSpaces in {city.name}</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Skip the bureaucracy of traditional commercial real estate.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
             <ScrollReveal delay={0.1}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full">
                  <Building className="w-10 h-10 text-accent mb-6" />
                  <h3 className="text-xl font-bold text-navy mb-3">Zero Capital Expenditure</h3>
                  <p className="text-gray-600">We invest in the HVAC, IT infrastructure, interior design, and premium ergonomic furniture. You pay a simple monthly operational fee.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full">
                  <Zap className="w-10 h-10 text-accent mb-6" />
                  <h3 className="text-xl font-bold text-navy mb-3">45-Day Deployment</h3>
                  <p className="text-gray-600">From layout sign-off to move-in ready. We execute rapid build-outs so your team can start operations without months of delay.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full">
                  <ShieldCheck className="w-10 h-10 text-accent mb-6" />
                  <h3 className="text-xl font-bold text-navy mb-3">Enterprise Grade Security</h3>
                  <p className="text-gray-600">Biometric access controls, private VLANs, dedicated server rooms, and 24/7 manned security tailored to your strict compliance needs.</p>
                </div>
              </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. LOCATION & INFRASTRUCTURE */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
               <h2 className="text-4xl font-bold text-navy mb-6">Strategic Location in {city.name}</h2>
               <div className="prose prose-lg text-gray-600 mb-8">
                 <p>{city.description}</p>
                 <p>{city.businessEcosystem}</p>
               </div>
               
               <h3 className="text-2xl font-bold text-navy mb-4">Nearby Ecosystem</h3>
               <ul className="space-y-4 mb-8">
                 {city.nearbyCompaniesList?.map((company, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                     <span className="font-medium text-gray-700">{company}</span>
                   </li>
                 ))}
               </ul>
            </ScrollReveal>
            <ScrollReveal direction="right">
               <div className="grid grid-cols-2 gap-4">
                  {city.gallery.slice(0, 4).map((img, i) => (
                    <div key={i} className="aspect-square relative rounded-2xl overflow-hidden shadow-lg group">
                      <Image src={img} alt={`Workspace in ${city.name}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* 4. MAP & CONTACT */}
      {city.contactInfo && (
         <LocalContactBlock contactInfo={city.contactInfo} cityName={city.name} />
      )}

      {/* 5. FAQs */}
      <div className="bg-gray-50 border-y border-gray-100">
        <SEOFAQ 
          title={`Enterprise Setup FAQs for ${city.name}`}
          subtitle="Everything you need to know about scaling your operations."
          faqs={faqs}
          textColor="text-navy"
        />
      </div>

      {/* JSON-LD SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": `WeeSpaces Enterprise Hub - ${city.name}`,
              "image": city.gallery[0],
              "telephone": "+91-9207189111",
              "url": `https://weespaces.in/enterprise-office/${city.slug}`,
              "address": {
                "@type": "PostalAddress",
                ...(city.contactInfo?.address ? { "streetAddress": city.contactInfo.address } : {}),
                "addressLocality": city.name,
                "addressRegion": city.slug === 'coimbatore' ? 'Tamil Nadu' : 'Kerala',
                "addressCountry": "IN"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ])
        }}
      />
    </div>
  );
}
