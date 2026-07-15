import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import { notFound } from 'next/navigation';
import FAQAccordion from '@/components/FAQAccordion';
import LocalContactBlock from '@/components/ui/LocalContactBlock';
import TrustLayer from '@/components/ui/TrustLayer';
import StrategicProximity from '@/components/ui/StrategicProximity';
import GeoSummaryBlock from '@/components/ui/GeoSummaryBlock';
import { services, cities } from '@/data/locations';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import { MapPin, Building, ChevronRight, CheckCircle, Star, Shield, Zap, Image as ImageIcon, Users, Clock, ArrowRight, XCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import VirtualOfficeCityTemplate from '@/components/templates/VirtualOfficeCityTemplate';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';

export async function generateMetadata({ params }: { params: Promise<{ service: string, city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  const city = cities[resolvedParams.city];
  
  if (!service || !city) return notFound();

  return constructMetadata({
    title: `${service.name} in ${city.name} | ${service.slug === 'virtual-office' ? 'Business Address for GST' : 'Private Offices & Managed Workspaces'}`,
    description: `Move your team into a fully operational ${service.name.toLowerCase()} in ${city.name} within 24 hours. No setup costs. Flexible terms.`,
    canonicalPath: `/${service.slug}/${city.slug}`,
    image: city.gallery[0],
  });
}

export function generateStaticParams() {
  const paths: { service: string, city: string }[] = [];
  
  services.forEach(service => {
    Object.values(cities).forEach(city => {
      paths.push({
        service: service.slug,
        city: city.slug
      });
    });
  });
  
  return paths;
}

export default async function CityServicePage({ params }: { params: Promise<{ service: string, city: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  const city = cities[resolvedParams.city];
  
  if (!service || !city) return notFound();

  // Dynamically generate expanded FAQs
  const faqs = [
    { question: `Why choose a ${service.name.toLowerCase()} in ${city.name}?`, answer: `${city.description} WeeSpaces provides premium ${service.name.toLowerCase()} options tailored for startups, SMEs, and enterprises.` },
    { question: `Is parking available at the ${city.name} locations?`, answer: `Yes, our major hubs in ${city.name} offer dedicated tenant parking and ample visitor parking. Check specific micro-locations for detailed parking capacity.` },
    { question: `Can I work 24x7?`, answer: `Yes, we provide 24x7 access with biometric security for our private cabin and managed office clients.` },
    { question: `Can I scale my team size later?`, answer: `Yes, all our plans in ${city.name} are highly flexible. Upgrade from a single desk to a private office or scale up to a larger managed office as your team grows.` },
    { question: `Is GST registration allowed?`, answer: `Absolutely. You can use our premium ${city.name} business addresses for official GST and company registration.` },
    { question: `Are meeting rooms included?`, answer: `Yes, members receive credits to book high-tech meeting rooms and conference spaces.` },
    { question: `Is there power backup?`, answer: `Yes, 100% DG power backup ensures zero downtime for your team.` },
    { question: `What is the visitor policy?`, answer: `Visitors are welcome. We have a professional reception area to greet your guests and guide them to your workspace.` },
    { question: `What are the typical office rental costs in ${city.name}?`, answer: city.localRentalCosts }
  ];

  const galleryLabels = ["📍 Reception", "📍 Hot Desk Zone", "📍 Private Cabins", "📍 Collaboration Area"];

  // Inject Custom Virtual Office Template if service matches
  if (service.slug === 'virtual-office') {
    return (
      <>
        <VirtualOfficeCityTemplate city={city} service={service} />
        {/* 12. JSON-LD SCHEMA INJECTION */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@type": "LocalBusiness",
                "name": `WeeSpaces ${city.name} - Virtual Office`,
                "image": city.gallery[0],
                "telephone": "+91-9207189111",
                "url": `https://weespaces.in/${service.slug}/${city.slug}`,
                "priceRange": "₹",
                "address": {
                  "@type": "PostalAddress",
                  ...(city.contactInfo?.address ? { "streetAddress": city.contactInfo.address } : {}),
                  "addressLocality": city.name,
                  "addressRegion": city.slug === 'coimbatore' ? 'Tamil Nadu' : 'Kerala',
                  "addressCountry": "IN"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "85"
                },
                ...(city.citations && city.citations.length > 0 ? { "sameAs": city.citations } : {})
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "WeeSpaces",
                "url": "https://weespaces.in"
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://weespaces.in/" },
                  { "@type": "ListItem", "position": 2, "name": service.name, "item": `https://weespaces.in/${service.slug}` },
                  { "@type": "ListItem", "position": 3, "name": city.name, "item": `https://weespaces.in/${service.slug}/${city.slug}` }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": service.name,
                "provider": {
                  "@type": "LocalBusiness",
                  "name": `WeeSpaces ${city.name}`
                },
                "areaServed": {
                  "@type": "City",
                  "name": city.name
                }
              }
            ])
          }}
        />
      </>
    );
  }

  return (
    <div className="relative">
      {/* STICKY CTA (Desktop Side, Mobile Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:right-4 lg:left-auto lg:w-48 z-50 bg-white lg:bg-transparent lg:shadow-none shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t lg:border-t-0 border-gray-200">
        <div className="flex lg:flex-col lg:gap-3 p-4 lg:p-0 justify-around">
           <a href="#book-tour" className="flex items-center justify-center gap-2 lg:bg-accent lg:text-navy text-accent bg-accent/10 px-4 py-3 lg:py-4 rounded-xl font-bold lg:shadow-lg hover:lg:scale-105 transition-all text-sm w-full lg:w-auto">
             <Clock className="w-4 h-4" /> Book Tour
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
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">{city.name}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Premium {service.name} Designed for <br/> <span className="text-accent">Growing Businesses</span> in {city.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed font-light">
              No deposits. No setup. No hidden costs. Expand your business instantly without the traditional office headaches.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="glass rounded-xl px-4 py-3 border border-accent/20 flex items-center gap-3 text-white">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold">Occupancy: {city.occupancy || 'Filling Fast'}</span>
              </div>
              <div className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 text-white">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold">Prime Locations</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-4 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative" id="book-tour">
              <div className="bg-accent text-navy p-4 text-center font-bold text-lg">
                Calculate Workspace Cost
              </div>
              <div className="p-6">
                <LeadForm branch={city.name} source={`${service.name} ${city.name} Hero`} hidePricing />
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
            <div className="font-bold text-gray-500 whitespace-nowrap">500+ Businesses Served</div>
            <div className="font-bold text-gray-500 whitespace-nowrap">4 Premium Hubs</div>
            <div className="font-bold text-gray-500 whitespace-nowrap">Established 2018</div>
            <div className="font-bold text-gray-500 whitespace-nowrap">50,000+ Sq Ft Managed</div>
          </div>
        </div>
      </section>

      {/* 3. TRADITIONAL VS WEESPACES (WHY US) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Smart Companies Choose WeeSpaces</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Traditional leasing drains capital and time. WeeSpaces gives you instant agility.</p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-navy text-white">
                   <th className="p-6 text-lg font-bold w-1/3">Feature</th>
                   <th className="p-6 text-lg font-bold w-1/3 border-l border-white/10 opacity-70">Traditional Office</th>
                   <th className="p-6 text-lg font-bold w-1/3 bg-accent text-navy border-l border-white/10">WeeSpaces</th>
                 </tr>
               </thead>
               <tbody className="text-gray-700">
                 <tr className="border-b border-gray-100">
                   <td className="p-6 font-bold">Setup Cost</td>
                   <td className="p-6 border-l border-gray-100">₹8–15 lakh</td>
                   <td className="p-6 border-l border-gray-100 font-bold text-navy bg-accent/5">₹0 setup</td>
                 </tr>
                 <tr className="border-b border-gray-100">
                   <td className="p-6 font-bold">Lock-in Period</td>
                   <td className="p-6 border-l border-gray-100">11 to 36 months</td>
                   <td className="p-6 border-l border-gray-100 font-bold text-navy bg-accent/5">Fully Flexible</td>
                 </tr>
                 <tr className="border-b border-gray-100">
                   <td className="p-6 font-bold">Furniture & Interior</td>
                   <td className="p-6 border-l border-gray-100">Extra CapEx</td>
                   <td className="p-6 border-l border-gray-100 font-bold text-navy bg-accent/5">Included</td>
                 </tr>
                 <tr className="border-b border-gray-100">
                   <td className="p-6 font-bold">Internet & Utility</td>
                   <td className="p-6 border-l border-gray-100">Extra Monthly</td>
                   <td className="p-6 border-l border-gray-100 font-bold text-navy bg-accent/5">Included</td>
                 </tr>
                 <tr className="border-b border-gray-100">
                   <td className="p-6 font-bold">Maintenance</td>
                   <td className="p-6 border-l border-gray-100">Your Responsibility</td>
                   <td className="p-6 border-l border-gray-100 font-bold text-navy bg-accent/5">Included</td>
                 </tr>
                 <tr>
                   <td className="p-6 font-bold">Move-in Time</td>
                   <td className="p-6 border-l border-gray-100">45–90 days</td>
                   <td className="p-6 border-l border-gray-100 font-bold text-navy bg-accent/5">24–48 hours</td>
                 </tr>
               </tbody>
             </table>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. STORY-DRIVEN GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-2">Imagine Working Here</h2>
              <p className="text-gray-600">Premium design that impresses your clients and inspires your team.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.gallery.slice(0, 4).map((image, idx) => (
              <div 
                key={idx} 
                className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden relative group"
              >
                 <div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                   style={{ backgroundImage: `url('${image}')` }}
                 ></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="bg-accent text-navy px-4 py-2 rounded-full font-bold text-sm">
                      {galleryLabels[idx] || '📍 Workspace'}
                    </span>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CASE STUDY (SOCIAL PROOF) */}
      {city.caseStudy && (
        <section className="py-20 bg-navy text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                 <ScrollReveal>
                    <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">Real Outcomes</div>
                    <h2 className="text-4xl font-bold mb-6">How {city.caseStudy.client} scaled with WeeSpaces</h2>
                    <p className="text-xl text-white/80 mb-8 font-light italic">"{city.caseStudy.outcome}"</p>
                    <ul className="space-y-4">
                      {city.caseStudy.metrics.map((metric, i) => (
                        <li key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                          <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                          <span className="font-bold">{metric}</span>
                        </li>
                      ))}
                    </ul>
                 </ScrollReveal>
                 <ScrollReveal direction="right" className="hidden md:block">
                   <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
                      <Shield className="w-24 h-24 text-accent mx-auto mb-6 opacity-50" />
                      <h3 className="text-2xl font-bold mb-4">Enterprise-Ready Infrastructure</h3>
                      <p className="text-white/60">We handle the compliance, security, and networking so you can focus on your product.</p>
                   </div>
                 </ScrollReveal>
              </div>
           </div>
        </section>
      )}

      {/* 6. WHO IS THIS FOR / NOT FOR */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <ScrollReveal>
               <div className="bg-white p-10 rounded-3xl shadow-lg border border-green-100 h-full">
                  <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-green-500" /> Perfect For
                  </h3>
                  <ul className="space-y-4">
                    {['Startups & Scale-ups', 'IT & Software Companies', 'Remote & Hybrid Teams', 'Consultants & CA Firms', 'Architects & Design Agencies', 'Enterprise Branch Offices'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span> {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
               <div className="bg-white p-10 rounded-3xl shadow-lg border border-red-100 h-full">
                  <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
                    <XCircle className="w-8 h-8 text-red-500" /> Not Suitable For
                  </h3>
                  <p className="text-gray-500 mb-6 text-sm">To maintain a premium, focused corporate environment, our spaces are not designed for:</p>
                  <ul className="space-y-4">
                    {['Heavy Manufacturing', 'Warehousing or Storage', 'Walk-in Retail Showrooms', 'Noisy industrial equipment'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-red-400"></span> {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* 7. VALUE FIRST PRICING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-6 text-navy">Flexible plans for individuals, startups and enterprises.</h2>
            <p className="text-gray-600 text-lg mb-8">We don't believe in hidden fees. Our all-inclusive pricing covers rent, high-speed internet, electricity, housekeeping, and premium coffee.</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <CheckCircle className="text-accent w-6 h-6 shrink-0" />
                <span><strong className="text-navy">Hot Desks:</strong> Perfect for freelancers. Flexible daily/monthly passes.</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <CheckCircle className="text-accent w-6 h-6 shrink-0" />
                <span><strong className="text-navy">Private Cabins:</strong> For teams of 3 to 20+. Lockable, secure, and fully furnished.</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <CheckCircle className="text-accent w-6 h-6 shrink-0" />
                <span><strong className="text-navy">Managed Offices:</strong> Custom-built floors for 50+ employees with your branding.</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="bg-navy rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Get Pricing for Your Team</h3>
              <LeadForm branch={city.name} source={`Pricing Section - ${service.name} ${city.name}`} hidePricing />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======================================================== */}
      {/* BOTTOM 40%: BUILT FOR SEO & DISCOVERY                      */}
      {/* ======================================================== */}

      {/* 8. DEEP LOCAL AUTHORITY & GUIDE (SEO) */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-6">Doing Business in {city.name}</h2>
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
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2"><Building className="w-5 h-5 text-accent" /> Nearby Enterprise Ecosystem</h3>
                <p className="text-sm text-gray-500 mb-4">Position your company alongside industry leaders:</p>
                <div className="flex flex-wrap gap-2">
                  {city.nearbyCompaniesList.map((company, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-md text-sm font-bold text-gray-700">{company}</span>
                  ))}
                </div>
              </div>
            )}

            <h3 className="text-xl font-bold text-navy mb-4">Transport & Connectivity</h3>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>{city.transportHubs}</p>
            </div>
            
            <h3 className="text-xl font-bold text-navy mb-4">Compliance & GST</h3>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-gray-600">
              <p className="mb-0">{city.gstRegistrationRules}</p>
              <Link 
                href={service.slug === 'virtual-office' ? `/coworking-space/${city.slug}` : `/virtual-office/${city.slug}`} 
                className="text-accent font-bold text-sm mt-4 inline-block hover:underline"
              >
                {service.slug === 'virtual-office' 
                  ? `Need a Physical Workspace in ${city.name}? →` 
                  : `Need a Virtual Office for GST in ${city.name}? →`}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. STRATEGIC PROXIMITY (REPLACES MICRO-LOCATIONS) */}
      {city.hubTitle && city.hubDescription && city.proximityGroups && (
        <StrategicProximity 
          hubTitle={city.hubTitle} 
          hubDescription={city.hubDescription}
          proximityGroups={city.proximityGroups}
          whoChoosesThis={city.whoChoosesThis}
          geoSummary={city.geoSummary}
          proximityFaqs={city.proximityFaqs}
          mapIframe={city.contactInfo?.mapIframe}
          cityName={city.name}
          serviceSlug={service.slug}
          citySlug={city.slug}
        />
      )}

      {city.geoSummary && (
        <GeoSummaryBlock summary={city.geoSummary} />
      )}

      {/* 9.5 LOCAL CONTACT INFO */}
      {city.contactInfo && (
        <LocalContactBlock contactInfo={city.contactInfo} cityName={city.name} />
      )}
      <TrustLayer nearbyCompanies={city.nearbyCompaniesList} />

      {/* 10. SEO FAQ */}
      <div className="bg-gray-50 border-b border-gray-100 pb-12">
        <SEOFAQ 
          title={`Frequently Asked Questions`}
          subtitle={`Everything you need to know about ${service.name.toLowerCase()}s in ${city.name}.`}
          faqs={faqs}
          textColor="text-navy"
        />
      </div>

      {/* 10.5 AREAS WE SERVE (MICRO-LOCATIONS INTERNAL LINKING) */}
      {(city.microLocations?.length > 0 || city.landmarks?.length > 0) && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-navy mb-6">Areas near {city.name}</h3>
            <div className="flex flex-wrap gap-3">
              {[...(city.microLocations || []), ...(city.landmarks || [])]
                .filter(loc => !('services' in loc) || !loc.services || (loc.services as string[]).includes(service.slug))
                .map((loc, idx) => (
                <Link 
                  key={idx} 
                  href={`/${service.slug}/${city.slug}/${loc.slug}`}
                  className="px-4 py-2 bg-gray-50 border border-gray-200 hover:bg-accent/5 rounded-full text-sm font-medium text-gray-700 hover:text-navy hover:border-accent transition-colors"
                >
                  {service.name} in {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. RELATED INSIGHTS & INTERNAL LINKING CLUSTER */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-12 text-center border-b border-white/10 pb-6">Compare Workspaces & Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h4 className="text-accent font-bold uppercase tracking-wider text-sm mb-4">Other Services in {city.name}</h4>
              <ul className="space-y-3">
                {service.slug !== 'coworking-space' && <li><Link href={`/coworking-space/${city.slug}`} className="text-white/70 hover:text-white transition-colors">Coworking Space in {city.name}</Link></li>}
                {service.slug !== 'managed-office' && <li><Link href={`/managed-office/${city.slug}`} className="text-white/70 hover:text-white transition-colors">Managed Office in {city.name}</Link></li>}
                {service.slug !== 'private-office' && <li><Link href={`/private-office/${city.slug}`} className="text-white/70 hover:text-white transition-colors">Private Office in {city.name}</Link></li>}
                {service.slug !== 'virtual-office' && <li><Link href={`/virtual-office/${city.slug}`} className="text-white/70 hover:text-white transition-colors">Virtual Office in {city.name}</Link></li>}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-accent font-bold uppercase tracking-wider text-sm mb-4">Compare Workspaces</h4>
              <ul className="space-y-3">
                <li><Link href="/compare/coworking-vs-traditional-office" className="text-white/70 hover:text-white transition-colors">Coworking vs Traditional</Link></li>
                <li><Link href="/compare/managed-office-vs-leasing" className="text-white/70 hover:text-white transition-colors">Managed Office vs Leasing</Link></li>
                <li><Link href="/compare/private-office-vs-shared-office" className="text-white/70 hover:text-white transition-colors">Private vs Shared Office</Link></li>
                <li><Link href="/compare/virtual-office-vs-physical-office" className="text-white/70 hover:text-white transition-colors">Virtual vs Physical Office</Link></li>
              </ul>
            </div>
            <div className="lg:col-span-2 glass p-6 rounded-xl border border-white/10">
              <h4 className="text-accent font-bold uppercase tracking-wider text-sm mb-4">Business Guide</h4>
              <h5 className="text-lg font-bold text-white mb-2">How to register your company in {city.name}</h5>
              <p className="text-white/60 text-sm mb-4 line-clamp-3">Understand local compliance, GST registration processes, and how securing a premium business address can accelerate your setup in Kerala and Tamil Nadu.</p>
              <Link href="/blog" className="text-sm font-bold text-accent hover:underline">Read our Coworking & Office Guides →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. JSON-LD SCHEMA INJECTION */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": `WeeSpaces ${city.name}`,
              "image": city.gallery[0],
              "telephone": "+91-9207189111",
              "url": `https://weespaces.in/${service.slug}/${city.slug}`,
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                ...(city.contactInfo?.address ? { "streetAddress": city.contactInfo.address } : {}),
                "addressLocality": city.name,
                "addressRegion": city.slug === 'coimbatore' ? 'Tamil Nadu' : 'Kerala',
                "addressCountry": "IN"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "120"
              },
              ...(city.contactInfo?.coordinates ? {
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": city.contactInfo.coordinates.lat,
                  "longitude": city.contactInfo.coordinates.lng
                }
              } : {}),
              ...(city.contactInfo?.mapIframe ? {
                "hasMap": city.contactInfo.mapIframe
              } : {}),
              ...(city.citations && city.citations.length > 0 ? { "sameAs": city.citations } : {})
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WeeSpaces",
              "url": "https://weespaces.in"
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://weespaces.in/" },
                { "@type": "ListItem", "position": 2, "name": service.name, "item": `https://weespaces.in/${service.slug}` },
                { "@type": "ListItem", "position": 3, "name": city.name, "item": `https://weespaces.in/${service.slug}/${city.slug}` }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": service.name,
              "provider": {
                "@type": "LocalBusiness",
                "name": `WeeSpaces ${city.name}`
              },
              "areaServed": {
                "@type": "City",
                "name": city.name
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
