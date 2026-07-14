import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { realWeeSpacesAddresses } from '@/utils/mapResolver';
import { MapPin, ArrowRight, Building2, Phone } from 'lucide-react';
import { branchData } from '@/data/branches';
import { cities, services } from '@/data/locations';
import { intents } from '@/data/intents';

import { constructMetadata } from '@/utils/metadata';

export const metadata: Metadata = constructMetadata({
  title: "Coworking Spaces Near Me in South India | WeeSpaces",
  description: "Find premium coworking spaces and shared offices near you in Coimbatore, Kochi, Trivandrum, and Calicut. Book a tour today.",
  canonicalPath: "/locations"
});

export default function LocationsPage() {
  // Convert branchData record into an array and inject the id
  const branches = Object.entries(branchData).map(([id, data]) => ({ id, ...data }));

  // Generate LocalBusiness Schema for all branches
  const schemaList = branches.map((branch) => ({
    '@type': 'LocalBusiness',
    name: `WeeSpaces Coworking Space - ${branch.name}`,
    image: `https://www.weespaces.in${branch.heroImage}`,
    '@id': `https://www.weespaces.in/landing/${branch.id}`,
    url: `https://www.weespaces.in/landing/${branch.id}`,
    telephone: '+919207189111',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: branch.address,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: branch.geo.lat.toString(),
      longitude: branch.geo.lon.toString(),
    },
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: schemaList.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: item,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <div className="pt-24 pb-20 min-h-screen">
        <section className="py-20 text-center max-w-4xl mx-auto px-6">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Coworking Spaces Near You Across <span className="text-accent">South India</span>
            </h1>
            <p className="text-lg text-white/70">
              Whether you are searching for a &quot;shared office near me&quot; or a private cabin for your enterprise team, WeeSpaces has the perfect workspace in our rapidly expanding network.
            </p>
          </ScrollReveal>
        </section>

        {/* 1. Main Branches */}
        <section className="py-12 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {branches.map((loc, idx) => {
              const seoUrl = `/coworking-space/${loc.id === 'ernakulam' ? 'kochi' : loc.id}`;
              const normalizedCity = loc.id === 'ernakulam' ? 'kochi' : loc.id;
              const activeLocation = realWeeSpacesAddresses[normalizedCity] || realWeeSpacesAddresses.kochi;
              const mapEmbedSrc = activeLocation.mapEmbedUrl;
              
              return (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <MouseGlowCard className="glass p-8 rounded-3xl h-full border border-white/10 hover:border-accent/30 transition-all flex flex-col justify-between group">
                    <div>
                      <div className="flex items-start justify-between mb-6">
                         <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                          <Building2 className="text-accent w-6 h-6" />
                        </div>
                        <span className="bg-white/5 border border-white/10 text-xs px-3 py-1 rounded-full font-medium">
                          {loc.name}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-3">WeeSpaces {loc.name}</h2>
                      <p className="text-white/70 mb-6 text-sm">{loc.address}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                      <a href={activeLocation.directionsUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex-1 bg-accent hover:bg-accent-hover text-navy font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all glow text-sm">
                        Get Directions <ArrowRight className="w-4 h-4" />
                      </a>
                      <a href="tel:+919207189111" className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 border border-white/20 hover:bg-white/5 rounded-xl transition-colors text-sm font-medium">
                        <Phone className="w-4 h-4 text-accent" /> Call Now
                      </a>
                    </div>
                  </MouseGlowCard>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* 2. Semantic Location Directory */}
        <section className="py-20 bg-white text-navy">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Explore Our Complete Network</h2>
            
            <div className="space-y-24">
              {Object.values(cities).map((city) => (
                <div key={city.slug} className="scroll-mt-32" id={city.slug}>
                  <div className="border-b border-gray-200 pb-4 mb-8 flex justify-between items-end">
                    <h3 className="text-4xl font-bold">{city.name}</h3>
                    <Link href={`/coworking-space/${city.slug}`} className="text-accent font-semibold hover:underline">
                      View Hub &rarr;
                    </Link>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-12">
                    {services.filter(s => ['virtual-office', 'coworking-space'].includes(s.slug)).map(service => {
                      // Filter neighborhoods available for this service
                      const validMicroLocs = city.microLocations.filter(m => m.services?.includes(service.slug));
                      if (validMicroLocs.length === 0) return null;

                      // Top 5 locations to mention in the semantic paragraph
                      const topLocNames = validMicroLocs.slice(0, 4).map(m => m.name).join(', ');

                      return (
                        <div key={service.slug} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                          <h4 className="text-2xl font-bold mb-4">{service.name} in {city.name}</h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            Looking for a premium {service.name.toLowerCase()} in {city.name}? WeeSpaces offers flexible solutions close to major commercial districts like {topLocNames}. Whether you need an official business address or a daily workspace, explore our network across {city.name}.
                          </p>
                          
                          <div className="mb-8">
                            <h5 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">By Commercial Neighborhood</h5>
                            <div className="flex flex-wrap gap-2">
                              {validMicroLocs.map(micro => (
                                <Link 
                                  key={micro.slug} 
                                  href={`/${service.slug}/${city.slug}/${micro.slug}`}
                                  className="inline-block px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-accent hover:text-accent transition-colors shadow-sm"
                                >
                                  {micro.name}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">By Business Need</h5>
                            <div className="flex flex-wrap gap-2">
                              {Object.values(intents).map(intent => (
                                <Link 
                                  key={intent.slug} 
                                  href={`/${service.slug}/${city.slug}/intent/${intent.slug}`}
                                  className="inline-flex items-center px-3 py-1.5 bg-navy text-white rounded-lg text-sm hover:bg-accent hover:text-navy transition-colors shadow-sm font-medium"
                                >
                                  {intent.name} <ArrowRight className="ml-1.5 w-3 h-3" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
