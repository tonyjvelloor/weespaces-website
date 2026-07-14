import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import { notFound } from 'next/navigation';
import FAQAccordion from '@/components/FAQAccordion';
import LocalContactBlock from '@/components/ui/LocalContactBlock';
import TrustLayer from '@/components/ui/TrustLayer';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { services, cities } from '@/data/locations';
import { MapPin, Building, ChevronRight, CheckCircle, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ service: string, city: string, neighborhood: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  const city = cities[resolvedParams.city];
  
  if (!service || !city) return notFound();

  const neighborhood = city.microLocations.find(m => m.slug === resolvedParams.neighborhood);
  if (!neighborhood || !neighborhood.services?.includes(service.slug)) return notFound();

  const titlePrefix = neighborhood.type === 'landmark' ? 'near' : 'in';

  return constructMetadata({
    title: `${service.name} ${titlePrefix} ${neighborhood.name}, ${city.name} | WeeSpaces`,
    description: `Looking for ${service.name.toLowerCase()} ${titlePrefix} ${neighborhood.name}? WeeSpaces offers premium workspace near ${neighborhood.landmarks?.[0] || neighborhood.name}. No setup costs.`,
    canonicalPath: `/${service.slug}/${city.slug}/${neighborhood.slug}`,
    image: neighborhood.gallery[0],
  });
}

export function generateStaticParams() {
  const paths: { service: string, city: string, neighborhood: string }[] = [];
  
  services.forEach(service => {
    Object.values(cities).forEach(city => {
      city.microLocations.forEach(micro => {
        if (micro.services && micro.services.includes(service.slug)) {
          paths.push({
            service: service.slug,
            city: city.slug,
            neighborhood: micro.slug
          });
        }
      });
    });
  });
  
  return paths;
}

export default async function NeighborhoodServicePage({ params }: { params: Promise<{ service: string, city: string, neighborhood: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  const city = cities[resolvedParams.city];
  
  if (!service || !city) return notFound();

  const neighborhood = city.microLocations.find(m => m.slug === resolvedParams.neighborhood);
  if (!neighborhood || !neighborhood.services?.includes(service.slug)) return notFound();

  // AEO Specific FAQs
  const aeoFaqs = [
    { question: `What is the best ${service.name.toLowerCase()} in ${neighborhood.name}, ${city.name}?`, answer: `WeeSpaces provides the most highly-rated ${service.name.toLowerCase()} for businesses looking to operate in or near ${neighborhood.name}. Our facility offers premium amenities, 24/7 access, and is strategically located near ${neighborhood.landmarks?.[0] || 'major transit hubs'}.` },
    { question: `Who is this workspace for?`, answer: `This space is ideal for ${neighborhood.intent.toLowerCase()}. Whether you are a startup or an established enterprise, our flexible terms accommodate your specific needs.` },
    { question: `How much does a ${service.name.toLowerCase()} cost in ${city.name}?`, answer: `${city.localRentalCosts} WeeSpaces provides highly cost-effective options with zero setup costs.` },
    { question: `How far is WeeSpaces from ${neighborhood.name}?`, answer: `We are located strategically in ${city.name}. From ${neighborhood.name}, the travel time is approximately ${neighborhood.travelTime || '15 minutes'} (${neighborhood.distanceToBranch || 'a short distance'}) to our main hub.` },
    { question: `How do I book a space?`, answer: `Booking is seamless. Fill out the contact form on this page or call our ${city.name} branch directly at ${city.contactInfo?.phone}. We arrange tours within 24 hours.` }
  ];

  return (
    <div className="bg-white">
      <LocalBusinessSchema cityData={city} areaServed={neighborhood.name} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.weespaces.in/" },
              { "@type": "ListItem", "position": 2, "name": service.name, "item": `https://www.weespaces.in/${service.slug}` },
              { "@type": "ListItem", "position": 3, "name": city.name, "item": `https://www.weespaces.in/${service.slug}/${city.slug}` },
              { "@type": "ListItem", "position": 4, "name": neighborhood.name, "item": `https://www.weespaces.in/${service.slug}/${city.slug}/${neighborhood.slug}` }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <Image 
            src={neighborhood.gallery[0] || city.gallery[0]}
            alt={`${service.name} in ${neighborhood.name}`}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            {/* Breadcrumbs */}
            <nav className="flex text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 mx-1" />
                    <Link href={`/${service.slug}`} className="hover:text-white transition-colors">{service.name}</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 mx-1" />
                    <Link href={`/${service.slug}/${city.slug}`} className="hover:text-white transition-colors">{city.name}</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 mx-1" />
                    <span className="text-white font-medium">{neighborhood.name}</span>
                  </div>
                </li>
              </ol>
            </nav>

            <span className="inline-block py-1 px-3 rounded-full bg-gold/10 text-gold text-sm font-semibold tracking-wider uppercase mb-4 border border-gold/20">
              Premium Workspace
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {service.name} <span className="text-gold">in {neighborhood.name}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              {service.shortDesc} Strategically located for businesses in {neighborhood.name}, offering enterprise-grade amenities and seamless connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* AEO Quick Answer & Table */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-navy mb-6">At a Glance: {service.name} in {neighborhood.name}</h2>
            <p className="text-gray-600 mb-8 text-lg">
              WeeSpaces provides a premium {service.name.toLowerCase()} solution for professionals and businesses based in or around {neighborhood.name}. Whether you're in {neighborhood.intent.toLowerCase()}, our spaces are designed for maximum productivity.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-navy">Distance to Hub</h3>
                    <p className="text-gray-600">{neighborhood.distanceToBranch || 'Central location'} ({neighborhood.travelTime || 'Quick transit'})</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Building className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-navy">Nearby Landmarks</h3>
                    <p className="text-gray-600">{neighborhood.landmarks?.join(', ') || 'Prime commercial area'}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-navy">Business Ecosystem</h3>
                    <p className="text-gray-600">Home to {neighborhood.nearbyCompanies?.slice(0,2).join(', ')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-navy">Transit & Parking</h3>
                    <p className="text-gray-600">{neighborhood.transit}. {neighborhood.parking}.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Lead Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-navy mb-6">Why Businesses in {neighborhood.name} Choose WeeSpaces</h2>
              <div className="prose prose-lg text-gray-600 max-w-none mb-12">
                <p>
                  {neighborhood.name} is a rapidly growing hub for {neighborhood.intent.toLowerCase()}. However, finding premium commercial real estate here can be costly and rigid. 
                  WeeSpaces offers a zero-capex alternative.
                </p>
                <p>
                  Located just {neighborhood.travelTime || 'minutes'} away from the heart of {neighborhood.name}, our {service.name.toLowerCase()} facility provides your team with enterprise-grade IT infrastructure, ergonomic seating, and meeting rooms on demand.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {neighborhood.gallery.slice(0, 4).map((img, i) => (
                  <div key={i} className="relative h-64 rounded-xl overflow-hidden group">
                    <Image src={img} alt={`Workspace near ${neighborhood.name} ${i+1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                ))}
              </div>
              
              <SEOFAQ 
                faqs={aeoFaqs} 
                title={`Frequently Asked Questions`} 
                subtitle={`Everything you need to know about getting a ${service.name.toLowerCase()} near ${neighborhood.name}.`} 
                textColor="text-navy"
              />

              {/* AEO Internal Linking Cluster */}
              <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-6">Explore WeeSpaces</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Locations</h4>
                    <Link href={`/${service.slug}/${city.slug}`} className="text-gray-600 hover:text-accent transition-colors">{city.name} Overview</Link>
                    {city.microLocations.filter(m => m.slug !== neighborhood.slug).slice(0,3).map(m => (
                      <Link key={m.slug} href={`/${service.slug}/${city.slug}/${m.slug}`} className="text-gray-600 hover:text-accent transition-colors">
                        Near {m.name}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Solutions</h4>
                    <Link href={`/coworking-space/${city.slug}`} className="text-gray-600 hover:text-accent transition-colors">Coworking Space</Link>
                    <Link href={`/private-office/${city.slug}`} className="text-gray-600 hover:text-accent transition-colors">Private Office</Link>
                    <Link href={`/virtual-office/${city.slug}`} className="text-gray-600 hover:text-accent transition-colors">Virtual Office</Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Resources</h4>
                    <Link href="/calculator" className="text-gray-600 hover:text-accent transition-colors">Office Cost Calculator</Link>
                    <Link href="/virtual-office/gst-registration" className="text-gray-600 hover:text-accent transition-colors">GST Registration Guide</Link>
                    <Link href="/case-studies" className="text-gray-600 hover:text-accent transition-colors">Success Stories</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <LeadForm 
                  source={`${service.name} - ${neighborhood.name}, ${city.name}`} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustLayer />
      <LocalContactBlock contactInfo={city.contactInfo!} cityName={city.name} />
    </div>
  );
}
