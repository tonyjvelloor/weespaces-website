import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GSTChecker from '@/components/tools/GSTChecker';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Business Address Readiness Checker | Virtual Office',
  description: 'Check what documents you need to rent a virtual office for GST compliance in Kerala and Tamil Nadu. Get a personalized document checklist.',
  canonicalPath: '/gst-checker',
});

export default function GSTCheckerPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-40 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent via-navy to-navy"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-bold text-sm mb-6 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Compliance Tool
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6">
              Business Address Readiness Checker
            </h1>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
              Answer 3 quick questions about your business type to instantly generate a personalized checklist of documents required to rent a GST-compliant business address in Kerala and Tamil Nadu.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. THE CHECKER TOOL */}
      <section className="relative -mt-24 z-20 pb-20">
        <div className="max-w-7xl mx-auto px-6">
           <ScrollReveal delay={0.2}>
              <GSTChecker />
           </ScrollReveal>
        </div>
      </section>
      
    </div>
  );
}
