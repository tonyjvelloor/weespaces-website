import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { comparisons, virtualOfficeAlternatives } from '@/data/comparisons';
import { ArrowRight, Scale, Building2, MapPin } from 'lucide-react';
import { constructMetadata } from '@/utils/metadata';

export const metadata: Metadata = constructMetadata({
  title: "Compare Workspaces & Virtual Offices | WeeSpaces",
  description: "Compare WeeSpaces with traditional leasing, Regus, WeWork, Awfis, and more to find the best coworking or virtual office solution.",
  canonicalPath: "/compare"
});

export default function CompareIndexPage() {
  const generalComparisons = Object.values(comparisons);
  const voComparisons = Object.values(virtualOfficeAlternatives);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy">
              Compare <span className="text-accent">Workspace</span> Solutions
            </h1>
            <p className="text-lg text-gray-600">
              Make an informed decision. Compare WeeSpaces against traditional leasing, global coworking brands, and virtual office aggregators to see why modern teams choose us.
            </p>
          </ScrollReveal>
        </section>

        {/* General & Coworking Comparisons */}
        <section className="mb-24">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10 border-b border-gray-100 pb-4">
              <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-navy">Workspace Comparisons</h2>
                <p className="text-gray-500">Coworking vs Traditional vs Global Brands</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generalComparisons.map((comp) => (
                <Link 
                  key={comp.slug} 
                  href={`/compare/${comp.slug}`}
                  className="group bg-gray-50 hover:bg-white rounded-2xl p-8 border border-gray-100 hover:border-accent/50 hover:shadow-xl transition-all flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 border border-gray-100 group-hover:scale-110 transition-transform">
                    <Scale className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-accent transition-colors">
                    {comp.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow text-sm">
                    {comp.description}
                  </p>
                  <div className="flex items-center text-navy font-semibold text-sm group-hover:translate-x-2 transition-transform">
                    Read Detailed Comparison <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Virtual Office Alternatives */}
        <section>
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 mb-10 border-b border-gray-100 pb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-navy">Virtual Office Alternatives</h2>
                <p className="text-gray-500">GST Registration & Premium Addresses</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {voComparisons.map((comp) => (
                <Link 
                  key={comp.slug} 
                  href={`/virtual-office/alternatives/${comp.slug}`}
                  className="group bg-navy text-white rounded-2xl p-8 border border-navy hover:border-accent/50 hover:shadow-2xl transition-all flex flex-col h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                  
                  <h3 className="text-2xl font-bold mb-3 relative z-10 group-hover:text-accent transition-colors">
                    {comp.title}
                  </h3>
                  <p className="text-white/70 mb-6 flex-grow relative z-10">
                    {comp.description}
                  </p>
                  <div className="flex items-center text-accent font-semibold relative z-10 group-hover:translate-x-2 transition-transform">
                    View Comparison <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </section>

      </div>
    </div>
  );
}
