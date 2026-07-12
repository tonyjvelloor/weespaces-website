import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import ScrollReveal from '@/components/ui/ScrollReveal';
import WorkspaceFinder from '@/components/tools/WorkspaceFinder';
import { Search } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Workspace Finder | Get Matched in 60 Seconds',
  description: 'Not sure if you need a Virtual Office, Coworking desk, or a Managed Enterprise Office? Take our 60-second quiz to get a customized recommendation.',
  canonicalPath: '/finder',
});

export default function FinderPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-40 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent via-navy to-navy"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-bold text-sm mb-6 uppercase tracking-wider">
              <Search className="w-4 h-4" /> Recommendation Engine
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6">
              Find your perfect workspace in 60 seconds.
            </h1>
            <p className="text-xl text-white/80 font-light">
              Answer 7 quick questions about your team, budget, and growth plans. We'll instantly match you with the exact service you need—from a simple GST address to a custom 500-seat enterprise floor.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. THE FINDER TOOL */}
      <section className="relative -mt-24 z-20 pb-20">
        <div className="max-w-4xl mx-auto px-6">
           <ScrollReveal delay={0.2}>
              <WorkspaceFinder />
           </ScrollReveal>
        </div>
      </section>
      
      {/* 3. TRUST SIGNALS */}
      <section className="py-12 border-t border-gray-100 bg-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-8">Trusted by fast-growing teams across South India</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
               {/* Replace with actual client logos later */}
               <div className="text-xl font-black font-heading">TechCorp</div>
               <div className="text-xl font-black font-heading">GlobalSaaS</div>
               <div className="text-xl font-black font-heading">FinEdge</div>
               <div className="text-xl font-black font-heading">HealthSync</div>
               <div className="text-xl font-black font-heading">LogiChain</div>
            </div>
         </div>
      </section>
    </div>
  );
}
