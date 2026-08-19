import React from 'react';
import Link from 'next/link';
import { CityData, ServiceType, cities } from '@/data/locations';
import { ArrowRight, MapPin, Building, BookOpen, Layers } from 'lucide-react';

export default function VoInternalLinks({ city, service }: { city?: CityData, service?: ServiceType }) {
  const currentCity = city || cities['kochi'];
  const otherCities = Object.values(cities).filter(c => c.slug !== currentCity.slug);

  return (
    <section className="py-16 bg-navy text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
          <Layers className="w-6 h-6 text-accent" />
          Explore the WeeSpaces Network
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Other Cities */}
          <div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Other Locations
            </h3>
            <ul className="space-y-3">
              {otherCities.map(c => (
                <li key={c.slug}>
                  <Link href={`/virtual-office/${c.slug}`} className="text-white/70 hover:text-white hover:pl-2 transition-all flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-white/30" /> Virtual Office in {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Other Services in the same city */}
          <div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <Building className="w-4 h-4" /> Workspace Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/coworking-space/${currentCity.slug}`} className="text-white/70 hover:text-white hover:pl-2 transition-all flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-white/30" /> Coworking in {currentCity.name}
                </Link>
              </li>
              <li>
                <Link href={`/managed-office/${currentCity.slug}`} className="text-white/70 hover:text-white hover:pl-2 transition-all flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-white/30" /> Managed Office in {currentCity.name}
                </Link>
              </li>
              <li>
                <Link href={`/private-office/${currentCity.slug}`} className="text-white/70 hover:text-white hover:pl-2 transition-all flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-white/30" /> Private Office in {currentCity.name}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Intents & Comparisons */}
          <div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Compare Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/compare/virtual-office-vs-physical-office" className="text-white/70 hover:text-white hover:pl-2 transition-all flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-white/30" /> Virtual vs Physical Office
                </Link>
              </li>
              <li>
                <Link href="/compare/weespaces-vs-wework" className="text-white/70 hover:text-white hover:pl-2 transition-all flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-white/30" /> WeeSpaces vs WeWork
                </Link>
              </li>
              <li>
                <Link href="/compare/coworking-vs-traditional-office" className="text-white/70 hover:text-white hover:pl-2 transition-all flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-white/30" /> Coworking vs Traditional
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <div className="glass p-6 rounded-2xl border border-white/10">
              <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Knowledge Hub</h3>
              <h4 className="text-lg font-bold text-white mb-2">Company Registration Guide</h4>
              <p className="text-white/60 text-sm mb-4">Learn exactly what documents are needed for GST and MCA registration in {currentCity.name}.</p>
              <Link href="/blog" className="text-sm font-bold text-accent hover:underline flex items-center gap-1">
                Read Guides <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
