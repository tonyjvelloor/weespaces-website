import { Metadata } from 'next';
import Link from 'next/link';
import { Building2, MapPin, ChevronRight, Zap } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

import { constructMetadata } from '@/utils/metadata';

export const metadata: Metadata = constructMetadata({
  title: "IT Parks & Tech Hubs in South India | WeeSpaces",
  description: "A comprehensive directory of major IT parks, special economic zones, and tech hubs in Kerala and Coimbatore, with commute times to premium coworking spaces.",
  canonicalPath: "/tech-parks"
});

const techParks = [
  {
    city: "Trivandrum",
    parks: [
      {
        name: "Technopark",
        type: "IT Park & SEZ",
        description: "One of India's largest IT parks, hosting hundreds of multinational companies.",
        nearestWeeSpaces: "Technopark Phase 1 & 3",
        commute: "0-5 mins",
        url: "https://www.technopark.org/",
      },
      {
        name: "Taurus Downtown",
        type: "Mixed-Use Tech Hub",
        description: "A premier destination inside Technopark Phase 3 offering retail, office, and living spaces.",
        nearestWeeSpaces: "Technopark Phase 3",
        commute: "Walking Distance",
        url: "https://taurusinvestment.com/projects/taurus-downtown-trivandrum/",
      }
    ]
  },
  {
    city: "Kochi",
    parks: [
      {
        name: "Infopark",
        type: "IT Park & SEZ",
        description: "The premier IT hub of Kochi, driving the city's tech growth.",
        nearestWeeSpaces: "Kakkanad & Infopark",
        commute: "2-5 mins",
        url: "https://infopark.in/",
      },
      {
        name: "SmartCity Kochi",
        type: "Knowledge Hub",
        description: "A joint venture aiming to create a network of knowledge-based industry townships.",
        nearestWeeSpaces: "Kakkanad",
        commute: "5 mins",
        url: "https://www.smartcitykochi.in/",
      }
    ]
  },
  {
    city: "Calicut",
    parks: [
      {
        name: "Government Cyberpark",
        type: "IT Park & SEZ",
        description: "Fostering IT development and exporting in the Malabar region.",
        nearestWeeSpaces: "Cyberpark Area",
        commute: "2 mins",
        url: "https://www.cyberparkkerala.org/",
      },
      {
        name: "UL CyberPark",
        type: "IT Park",
        description: "The first IT park in Calicut developed by a labor cooperative society.",
        nearestWeeSpaces: "UL CyberPark",
        commute: "Walking Distance",
        url: "https://ulcyberpark.com/",
      }
    ]
  },
  {
    city: "Coimbatore",
    parks: [
      {
        name: "Tidel Park Coimbatore",
        type: "IT Park & SEZ",
        description: "A massive joint venture providing world-class infrastructure to IT/ITES companies.",
        nearestWeeSpaces: "Avinashi Road & Peelamedu",
        commute: "5-10 mins",
        url: "https://www.tidelcbe.com/",
      },
      {
        name: "CHIL SEZ IT Park",
        type: "SEZ",
        description: "A major Special Economic Zone located in Saravanampatti.",
        nearestWeeSpaces: "Saravanampatti",
        commute: "0-5 mins",
        url: "#",
      }
    ]
  }
];

export default function TechParksPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 text-accent" /> Infrastructure Guide
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              South India's Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Parks & Hubs</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Explore the major IT parks, SEZs, and knowledge hubs across Kerala and Tamil Nadu, and find premium WeeSpaces locations just minutes away.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {techParks.map((hub, idx) => (
              <div key={idx} className="scroll-mt-24">
                <ScrollReveal>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-bold text-navy-dark">{hub.city}</h2>
                    <div className="h-px bg-navy/10 flex-grow"></div>
                  </div>
                </ScrollReveal>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {hub.parks.map((park, pIdx) => (
                    <ScrollReveal key={pIdx} delay={pIdx * 100}>
                      <div className="bg-white rounded-2xl p-8 border border-navy/5 shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-navy-dark mb-2">{park.name}</h3>
                            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-wider">
                              {park.type}
                            </span>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                            <Building2 className="w-6 h-6 text-navy-dark group-hover:text-accent transition-colors" />
                          </div>
                        </div>
                        
                        <p className="text-navy/70 mb-8 flex-grow">{park.description}</p>
                        
                        <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
                          <h4 className="text-sm font-bold text-navy-dark mb-3 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-accent" /> Nearest WeeSpaces
                          </h4>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-navy/80 font-semibold">{park.nearestWeeSpaces}</span>
                            <span className="text-accent bg-accent/10 px-2 py-1 rounded font-bold">{park.commute}</span>
                          </div>
                        </div>

                        {park.url !== "#" ? (
                          <a 
                            href={park.url} 
                            target="_blank" 
                            rel="noopener noreferrer external"
                            className="inline-flex items-center justify-center w-full py-3 rounded-xl border-2 border-navy-dark text-navy-dark font-bold hover:bg-navy-dark hover:text-white transition-colors gap-2"
                          >
                            Official Website <ChevronRight className="w-4 h-4" />
                          </a>
                        ) : (
                          <div className="py-3 text-center text-navy/40 text-sm font-bold border-2 border-transparent">
                            Directory Listed
                          </div>
                        )}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
