import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { MapPin, ArrowRight, Building2, Phone } from 'lucide-react';
import { branchData } from '@/data/branches';

export const metadata: Metadata = {
  title: 'Coworking Spaces Near Me in South India | WeeSpaces',
  description: 'Find premium coworking spaces and shared offices near you in Coimbatore, Kochi, Trivandrum, and Calicut. Book a tour today.',
  alternates: {
    canonical: 'https://www.weespaces.in/locations',
  },
};

export default function LocationsPage() {
  // Convert branchData record into an array and inject the id
  const branches = Object.entries(branchData).map(([id, data]) => ({ id, ...data }));

  // Generate LocalBusiness Schema for all branches to help rank for "near me" searches
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

        <section className="py-12 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {branches.map((loc, idx) => {
              const seoUrl = `/coworking-space-${loc.id === 'ernakulam' ? 'kochi' : loc.id}`;
              
              // We don't have map embed links stored in the data natively (we have regular gmaps links),
              // but we can use the location name to load a generic Google Maps iframe
              const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(loc.name + " Kerala India")}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
              
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
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-navy p-4 rounded-xl border border-white/5 flex flex-col items-center text-center">
                          <span className="block text-accent font-bold text-lg mb-1">24/7</span>
                          <span className="text-[10px] text-white/50 uppercase tracking-wider">Access</span>
                        </div>
                        <div className="bg-navy p-4 rounded-xl border border-white/5 flex flex-col items-center text-center">
                          <span className="block text-accent font-bold text-lg mb-1">High-Speed</span>
                          <span className="text-[10px] text-white/50 uppercase tracking-wider">Internet</span>
                        </div>
                      </div>

                      <div className="aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 relative group/map">
                        <iframe 
                          src={mapEmbedSrc}
                          width="100%" 
                          height="100%" 
                          style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg)' }} 
                          allowFullScreen={false} 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          className="transition-all duration-500 group-hover/map:filter-none"
                        ></iframe>
                        <div className="absolute inset-0 bg-navy/20 pointer-events-none group-hover/map:bg-transparent transition-all"></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                      <Link href={seoUrl} className="w-full sm:w-auto flex-1 bg-accent hover:bg-accent-hover text-navy font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all glow text-sm">
                        Explore Space <ArrowRight className="w-4 h-4" />
                      </Link>
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
      </div>
    </>
  );
}
