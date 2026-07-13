import { Metadata } from 'next';
import Link from 'next/link';
import { comparisons } from '@/data/comparisons';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ChevronRight, ArrowRight } from 'lucide-react';

import { constructMetadata } from '@/utils/metadata';

export const metadata: Metadata = constructMetadata({
  title: "Compare Coworking Space Alternatives | WeeSpaces",
  description: "Looking for a better workspace? Compare WeeSpaces with global aggregators and brokers like Regus, CoFynd, Flexo, and Coworker to see why direct local operators are superior.",
  canonicalPath: "/alternatives"
});

export default function AlternativesHub() {
  const competitorComparisons = Object.values(comparisons).filter(c => c.slug.includes('weespaces-vs-'));

  return (
    <>
      <section className="bg-navy pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 text-accent text-sm font-bold tracking-wider mb-6">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">ALTERNATIVES</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why settle for a <span className="text-accent">middleman?</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Global aggregators and brokers add margins, hide fees, and slow down support. See why 
              growing teams in South India are switching to direct operator partnerships with WeeSpaces.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {competitorComparisons.map((comp) => (
              <ScrollReveal key={comp.slug} direction="up">
                <Link href={`/compare/${comp.slug}`} className="block group">
                  <div className="bg-navy-light/5 border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
                    <h2 className="text-2xl font-bold text-navy mb-4 group-hover:text-accent transition-colors">
                      {comp.title}
                    </h2>
                    <p className="text-gray-600 mb-8 flex-grow">
                      {comp.description}
                    </p>
                    <div className="flex items-center gap-2 font-bold text-navy group-hover:text-accent transition-colors">
                      View Detailed Comparison <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
