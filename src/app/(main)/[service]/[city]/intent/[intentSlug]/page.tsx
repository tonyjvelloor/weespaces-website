import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import { notFound } from 'next/navigation';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SEOFAQ from '@/components/SEOFAQ';
import LocalContactBlock from '@/components/ui/LocalContactBlock';
import TrustLayer from '@/components/ui/TrustLayer';
import LeadForm from '@/components/LeadForm';
import { services, cities } from '@/data/locations';
import { intents } from '@/data/intents';
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ service: string, city: string, intentSlug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  const city = cities[resolvedParams.city];
  const intent = intents[resolvedParams.intentSlug];
  
  if (!service || !city || !intent) return notFound();

  return constructMetadata({
    title: `${intent.name} ${service.name} in ${city.name} | WeeSpaces`,
    description: intent.shortDesc + ` Learn why WeeSpaces in ${city.name} is the best choice.`,
    canonicalPath: `/${service.slug}/${city.slug}/intent/${intent.slug}`,
    image: city.gallery[0],
  });
}

export function generateStaticParams() {
  const paths: { service: string, city: string, intentSlug: string }[] = [];
  
  services.forEach(service => {
    Object.values(cities).forEach(city => {
      Object.values(intents).forEach(intent => {
        // Intent pages usually only make sense for virtual-office and coworking-space
        if (['virtual-office', 'coworking-space'].includes(service.slug)) {
          paths.push({
            service: service.slug,
            city: city.slug,
            intentSlug: intent.slug
          });
        }
      });
    });
  });
  
  return paths;
}

export default async function IntentServicePage({ params }: { params: Promise<{ service: string, city: string, intentSlug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  const city = cities[resolvedParams.city];
  const intent = intents[resolvedParams.intentSlug];
  
  if (!service || !city || !intent) return notFound();

  // AEO Specific FAQs combining global intent faqs + local context
  const aeoFaqs = [
    ...intent.faqs,
    { question: `Why choose WeeSpaces for ${intent.name.toLowerCase()} in ${city.name}?`, answer: `WeeSpaces provides the most highly-rated ${service.name.toLowerCase()} for ${intent.name.toLowerCase()} looking to operate in ${city.name}. Our facility is strategically located at ${city.contactInfo?.address || 'a premium commercial address'} with excellent connectivity.` },
    { question: `How do I book a space?`, answer: `Booking is seamless. Fill out the contact form on this page or call our ${city.name} branch directly at ${city.contactInfo?.phone}. We arrange tours within 24 hours.` }
  ];

  return (
    <div className="bg-white">
      <LocalBusinessSchema cityData={city} areaServed={city.name} />
      
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
              { "@type": "ListItem", "position": 4, "name": intent.name, "item": `https://www.weespaces.in/${service.slug}/${city.slug}/intent/${intent.slug}` }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <Image 
            src={city.gallery[0]}
            alt={`${intent.name} ${service.name} in ${city.name}`}
            fill
            className="object-cover opacity-20"
            sizes="100vw"
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
                    <span className="text-white font-medium">{intent.name}</span>
                  </div>
                </li>
              </ol>
            </nav>

            <span className="inline-block py-1 px-3 rounded-full bg-gold/10 text-gold text-sm font-semibold tracking-wider uppercase mb-4 border border-gold/20">
              Purpose-Built Workspace
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {service.name} for <span className="text-gold">{intent.name}</span> in {city.name}
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              {intent.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Lead Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-navy mb-6">Why {intent.name} Choose WeeSpaces in {city.name}</h2>
              <div className="prose prose-lg text-gray-600 max-w-none mb-12">
                <p>
                  {city.businessEcosystem} Businesses looking for {intent.name.toLowerCase()} solutions need flexibility and reliability, which is exactly what our {service.name.toLowerCase()} offers.
                </p>
              </div>

              <div className="space-y-4 mb-12">
                {intent.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="text-gray-800 font-medium">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <SEOFAQ 
                faqs={aeoFaqs} 
                title={`Frequently Asked Questions`} 
                subtitle={`Everything you need to know about ${intent.name.toLowerCase()} workspaces in ${city.name}.`} 
                textColor="text-navy"
              />

              {/* AEO Internal Linking Cluster */}
              <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-6">Explore WeeSpaces</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Locations</h4>
                    <Link href={`/${service.slug}/${city.slug}`} className="text-gray-600 hover:text-accent transition-colors">{city.name} Overview</Link>
                    {city.microLocations.slice(0,3).map(m => (
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
                    <Link href="/blog" className="text-gray-600 hover:text-accent transition-colors">Blog & Guides</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-navy/5 border border-gray-100">
                  <h3 className="text-xl font-bold text-navy mb-2">Book a Tour</h3>
                  <p className="text-gray-500 text-sm mb-6">Secure your {service.name.toLowerCase()} in {city.name} today.</p>
                  <LeadForm source={`${intent.name} - ${service.name}, ${city.name}`} />
                </div>
                <TrustLayer />
                <LocalContactBlock city={city} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
