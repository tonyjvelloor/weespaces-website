import React from 'react';
import Link from 'next/link';
import { MapPin, Navigation, Car, Train, Footprints, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

type ProximityNode = {
  name: string;
  distance: string;
  slug?: string;
};

export default function StrategicProximity({
  hubTitle,
  hubDescription,
  proximityNodes,
  serviceSlug,
  citySlug,
}: {
  hubTitle: string;
  hubDescription: string;
  proximityNodes: ProximityNode[];
  serviceSlug: string;
  citySlug: string;
}) {
  if (!proximityNodes || proximityNodes.length === 0) return null;

  // Helper to determine the icon based on distance text
  const getTransitIcon = (distance: string) => {
    const text = distance.toLowerCase();
    if (text.includes('walk')) return <Footprints className="w-5 h-5 text-accent" />;
    if (text.includes('metro') || text.includes('train')) return <Train className="w-5 h-5 text-accent" />;
    return <Car className="w-5 h-5 text-accent" />;
  };

  return (
    <section className="py-20 bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-2 text-accent font-bold mb-4 uppercase tracking-wider text-sm">
            <Navigation className="w-5 h-5" />
            <span>Strategic Location</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 max-w-3xl leading-tight">
            {hubTitle}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
            {hubDescription}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proximityNodes.map((node, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.05}>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/30 transition-all group h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      {getTransitIcon(node.distance)}
                    </div>
                  </div>
                  
                  {node.slug ? (
                    <Link 
                      href={`/${serviceSlug}/${citySlug}/${node.slug}`}
                      className="inline-flex items-center gap-2 group-hover:text-accent transition-colors"
                    >
                      <h3 className="text-lg font-bold text-navy group-hover:text-accent">{node.name}</h3>
                    </Link>
                  ) : (
                    <h3 className="text-lg font-bold text-navy">{node.name}</h3>
                  )}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2 text-gray-500 text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  {node.distance}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
