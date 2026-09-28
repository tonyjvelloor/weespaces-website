file_path = "src/app/(main)/[service]/[city]/[microLocation]/page.tsx"

content = """import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import { notFound } from 'next/navigation';
import { services, cities } from '@/data/locations';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import TrustLayer from '@/components/ui/TrustLayer';
import { MapPin, ChevronRight, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ service: string, city: string, microLocation: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  const city = cities[resolvedParams.city];
  
  if (!service || !city || !city.microLocations) return notFound();
  
  const micro = city.microLocations.find(m => m.slug === resolvedParams.microLocation);
  if (!micro) return notFound();

  const metaTitle = `${service.name} in ${micro.name}, ${city.name} | WeeSpaces`;
  const metaDesc = `Looking for ${service.name.toLowerCase()} in ${micro.name}, ${city.name}? Premium workspaces, zero setup costs, and enterprise amenities near ${micro.landmarks?.[0] || city.name}.`;

  return constructMetadata({
    title: metaTitle,
    description: metaDesc,
    canonicalPath: `/${service.slug}/${city.slug}/${micro.slug}`,
  });
}

export function generateStaticParams() {
  const params: { service: string, city: string, microLocation: string }[] = [];
  
  for (const service of services) {
    for (const [citySlug, cityData] of Object.entries(cities)) {
      if (cityData.microLocations) {
        for (const ml of cityData.microLocations) {
          // Only generate if the micro-location supports this service
          if (ml.services && ml.services.includes(service.slug)) {
            params.push({
              service: service.slug,
              city: citySlug,
              microLocation: ml.slug
            });
          }
        }
      }
    }
  }
  
  return params;
}

export default async function MicroLocationPage({ params }: { params: Promise<{ service: string, city: string, microLocation: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  const city = cities[resolvedParams.city];
  
  if (!service || !city || !city.microLocations) return notFound();
  
  const micro = city.microLocations.find(m => m.slug === resolvedParams.microLocation);
  if (!micro) return notFound();

  const imageSrc = micro.gallery && micro.gallery.length > 0 ? micro.gallery[0] : city.gallery[0];

  return (
    <div className="relative">
      {/* 1. HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-navy">
        <Image src={imageSrc} alt={`${service.name} in ${micro.name}`} fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center py-20">
          <ScrollReveal className="lg:col-span-8">
            <div className="flex items-center flex-wrap gap-2 text-accent text-xs md:text-sm font-bold tracking-wider mb-6">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <Link href={`/${service.slug}`} className="hover:text-white transition-colors uppercase">{service.name}</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <Link href={`/${service.slug}/${city.slug}`} className="hover:text-white transition-colors uppercase">{city.name}</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">{micro.name}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Premium {service.name} in <br/> <span className="text-accent">{micro.name}, {city.name}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed font-light">
              Strategic location near {micro.landmarks?.[0] || city.name}. Expand your business instantly without the traditional office headaches.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 text-white">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold">Near {micro.transit || micro.landmarks?.[0]}</span>
              </div>
              <div className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold">{micro.businessEcosystem ? 'Premium Location' : 'Zero Setup Costs'}</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-4 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative" id="book-tour">
              <div className="bg-accent text-navy p-4 text-center font-bold text-lg">
                Book in {micro.name}
              </div>
              <div className="p-6">
                <LeadForm branch={`${city.name} - ${micro.name}`} source={`${service.name} ${micro.name} Landing`} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. LOCAL ADVANTAGE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">The {micro.name} Advantage</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              {micro.businessEcosystem || `Position your business in one of the most strategic locations in ${city.name}.`}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                 <Clock className="w-6 h-6 text-accent" />
               </div>
               <h3 className="text-xl font-bold text-navy mb-3">Connectivity</h3>
               <p className="text-gray-600">Transit access via {micro.transit}. {micro.distanceToBranch && `Located strategically just ${micro.distanceToBranch}.`}</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                 <MapPin className="w-6 h-6 text-accent" />
               </div>
               <h3 className="text-xl font-bold text-navy mb-3">Corporate Neighbors</h3>
               <p className="text-gray-600">Join a thriving ecosystem. Nearby companies include {micro.nearbyCompanies?.join(', ') || 'various leading enterprises'}.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle className="w-6 h-6 text-accent" />
               </div>
               <h3 className="text-xl font-bold text-navy mb-3">{micro.gstSuitability ? 'Compliance' : 'Premium Amenities'}</h3>
               <p className="text-gray-600">{micro.gstSuitability || 'Enterprise-grade internet, meeting rooms, and ergonomic furniture.'}</p>
             </div>
          </div>
        </div>
      </section>
      
      <TrustLayer />
      
      {/* LOCALBUSINESS SCHEMA FOR MICROLOCATION */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `WeeSpaces ${micro.name} - ${service.name}`,
            "image": imageSrc,
            "telephone": "+91-9207189111",
            "url": `https://weespaces.in/${service.slug}/${city.slug}/${micro.slug}`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": micro.name,
              "addressRegion": city.slug === 'coimbatore' ? 'Tamil Nadu' : 'Kerala',
              "addressCountry": "IN"
            }
          })
        }}
      />
    </div>
  );
}
"""

with open(file_path, 'w') as f:
    f.write(content)

print("Micro-location dynamic page created.")
