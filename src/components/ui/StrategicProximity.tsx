import React from 'react';
import Link from 'next/link';
import { MapPin, Navigation, Car, Train, Footprints, Users, HelpCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SEOFAQ from './SEOFAQ';

type ProximityNode = {
  name: string;
  distance: string;
  slug?: string;
};

type ProximityGroup = {
  title: string;
  nodes: ProximityNode[];
};

type WhoChoosesThis = {
  description: string;
  locations: string[];
};

export default function StrategicProximity({
  hubTitle,
  hubDescription,
  proximityGroups,
  whoChoosesThis,
  geoSummary,
  proximityFaqs,
  mapIframe,
  cityName,
  serviceSlug,
  citySlug,
}: {
  hubTitle: string;
  hubDescription: string;
  proximityGroups?: ProximityGroup[];
  whoChoosesThis?: WhoChoosesThis;
  geoSummary?: string;
  proximityFaqs?: { question: string; answer: string }[];
  mapIframe?: string;
  cityName: string;
  serviceSlug: string;
  citySlug: string;
}) {
  if (!proximityGroups || proximityGroups.length === 0) return null;

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
            <span>Strategically Located in {cityName}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 max-w-3xl leading-tight">
            {hubTitle}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
            {hubDescription}
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column: Interactive Cards & Clusters */}
          <div className="lg:col-span-2 space-y-12">
            {proximityGroups.map((group, gIndex) => (
              <div key={gIndex}>
                <h3 className="text-xl font-bold text-navy mb-6 border-b border-gray-100 pb-2">{group.title}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {group.nodes.map((node, index) => (
                    <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                      <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/30 transition-all group h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                              {getTransitIcon(node.distance)}
                            </div>
                          </div>
                          
                          {node.slug ? (
                            <Link 
                              href={`/${serviceSlug}/${citySlug}/${node.slug}`}
                              className="inline-flex items-center gap-2 group-hover:text-accent transition-colors"
                            >
                              <h4 className="text-base font-bold text-navy group-hover:text-accent leading-tight">{node.name}</h4>
                            </Link>
                          ) : (
                            <h4 className="text-base font-bold text-navy leading-tight">{node.name}</h4>
                          )}
                        </div>
                        
                        <div className="mt-3 pt-3 border-t border-gray-50 flex items-center gap-2 text-gray-500 text-sm font-medium">
                          <MapPin className="w-4 h-4" />
                          {node.distance}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Context & Map */}
          <div className="space-y-8">
            {mapIframe && (
              <ScrollReveal direction="left" delay={0.2} className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="aspect-square sm:aspect-video lg:aspect-square w-full rounded-xl overflow-hidden relative">
                  <iframe 
                    src={mapIframe} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of WeeSpaces ${cityName}`}
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="p-4 text-center text-sm font-bold text-navy bg-gray-50 mt-2 rounded-xl">
                  Central Hub Location
                </div>
              </ScrollReveal>
            )}

            {whoChoosesThis && (
              <ScrollReveal direction="left" delay={0.3} className="bg-navy rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-bold">Who Chooses This Location?</h3>
                </div>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {whoChoosesThis.description}
                </p>
                <ul className="space-y-2">
                  {whoChoosesThis.locations.map((loc, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      {loc}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            )}
          </div>
        </div>

        {/* AI Summary Section for Schema/Extraction */}
        {geoSummary && (
          <ScrollReveal direction="up" delay={0.4} className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-12">
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              <strong className="text-navy">Location Summary:</strong> {geoSummary}
            </p>
          </ScrollReveal>
        )}

        {/* Location Specific FAQs */}
        {proximityFaqs && proximityFaqs.length > 0 && (
          <div className="pt-8 border-t border-gray-100">
            <SEOFAQ 
              title={`Strategic Location FAQs`}
              subtitle={`Common questions about our ${cityName} location accessibility.`}
              faqs={proximityFaqs}
              textColor="text-navy"
            />
          </div>
        )}
      </div>
    </section>
  );
}
