import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import { notFound } from 'next/navigation';
import { comparisons } from '@/data/comparisons';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import { CheckCircle, XCircle, ArrowRight, MinusCircle } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const comparison = comparisons[resolvedParams.slug];
  
  if (!comparison) return notFound();

  return constructMetadata({
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    canonicalPath: `/compare/${resolvedParams.slug}`,
  });
}

export function generateStaticParams() {
  return Object.keys(comparisons).map(slug => ({
    slug
  }));
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const comparison = comparisons[resolvedParams.slug];
  
  if (!comparison) return notFound();

  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-8">
              Compare Workspaces
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {comparison.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {comparison.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. COMPARISON TABLE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Detailed Comparison</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-navy text-white">
                     <th className="p-6 text-lg font-bold w-1/3">Feature</th>
                     <th className="p-6 text-lg font-bold w-1/3 border-l border-white/10 opacity-70">Traditional</th>
                     <th className="p-6 text-lg font-bold w-1/3 bg-accent text-navy border-l border-white/10">WeeSpaces</th>
                   </tr>
                 </thead>
                 <tbody className="text-gray-700">
                   {comparison.points.map((point, idx) => (
                     <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                       <td className="p-6">
                         <span className="font-bold block text-navy">{point.feature}</span>
                       </td>
                       <td className="p-6 border-l border-gray-100">
                         <span className="font-bold block mb-1">{point.traditional.value}</span>
                         {point.traditional.description && <span className="text-sm text-gray-500 block">{point.traditional.description}</span>}
                       </td>
                       <td className="p-6 border-l border-gray-100 bg-accent/5">
                         <span className="font-bold text-navy block mb-1">{point.weespaces.value}</span>
                         {point.weespaces.description && <span className="text-sm text-gray-600 block">{point.weespaces.description}</span>}
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. PROS & CONS */}
      <section className="py-20 bg-white">
         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            {/* Traditional Pros/Cons */}
            <ScrollReveal>
               <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 h-full">
                  <h3 className="text-2xl font-bold text-gray-700 mb-6 border-b border-gray-200 pb-4">Traditional Approach</h3>
                  
                  <div className="mb-8">
                     <h4 className="flex items-center gap-2 font-bold text-green-700 mb-4"><CheckCircle className="w-5 h-5" /> Advantages</h4>
                     <ul className="space-y-3">
                        {comparison.prosCons.traditional.pros.map((pro, i) => (
                           <li key={i} className="flex items-start gap-2 text-gray-600"><span className="mt-1 text-green-500">•</span> {pro}</li>
                        ))}
                     </ul>
                  </div>

                  <div>
                     <h4 className="flex items-center gap-2 font-bold text-red-700 mb-4"><MinusCircle className="w-5 h-5" /> Disadvantages</h4>
                     <ul className="space-y-3">
                        {comparison.prosCons.traditional.cons.map((con, i) => (
                           <li key={i} className="flex items-start gap-2 text-gray-600"><span className="mt-1 text-red-500">•</span> {con}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            </ScrollReveal>

            {/* WeeSpaces Pros/Cons */}
            <ScrollReveal direction="right">
               <div className="bg-navy rounded-2xl p-8 border border-navy h-full text-white">
                  <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-4 text-accent">WeeSpaces Approach</h3>
                  
                  <div className="mb-8">
                     <h4 className="flex items-center gap-2 font-bold text-green-400 mb-4"><CheckCircle className="w-5 h-5" /> Advantages</h4>
                     <ul className="space-y-3">
                        {comparison.prosCons.weespaces.pros.map((pro, i) => (
                           <li key={i} className="flex items-start gap-2 text-white/80"><span className="mt-1 text-green-400">•</span> {pro}</li>
                        ))}
                     </ul>
                  </div>

                  <div>
                     <h4 className="flex items-center gap-2 font-bold text-red-400 mb-4"><MinusCircle className="w-5 h-5" /> Disadvantages</h4>
                     <ul className="space-y-3">
                        {comparison.prosCons.weespaces.cons.map((con, i) => (
                           <li key={i} className="flex items-start gap-2 text-white/80"><span className="mt-1 text-red-400">•</span> {con}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* 4. WORKSPACE CALCULATOR PROMO (SPRINT 2 PREVIEW) */}
      <section className="py-16 bg-accent text-navy text-center">
         <div className="max-w-3xl mx-auto px-6">
            <ScrollReveal>
               <h2 className="text-3xl font-bold mb-4">See your actual savings</h2>
               <p className="text-lg mb-8 opacity-80">Use our Workspace Savings Calculator to estimate your 3-year OpEx and CapEx savings by switching to WeeSpaces.</p>
               <button className="bg-navy text-white px-8 py-4 rounded-xl font-bold shadow-lg opacity-50 cursor-not-allowed">
                  Calculator Coming Soon
               </button>
            </ScrollReveal>
         </div>
      </section>

      {/* 5. FAQs */}
      {comparison.faqs.length > 0 && (
         <div className="bg-gray-50">
            <SEOFAQ 
               title={`Frequently Asked Questions`}
               subtitle={`Common questions about ${comparison.title}.`}
               faqs={comparison.faqs}
               textColor="text-navy"
            />
         </div>
      )}

      {/* 6. CTA / LEAD FORM */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="max-w-3xl mx-auto px-6">
            <div className="bg-navy rounded-3xl p-10 shadow-2xl text-white text-center">
               <h2 className="text-3xl font-bold mb-6">Ready to make the smart choice?</h2>
               <p className="text-white/70 mb-8">Speak to our workspace advisors and get a custom quote tailored to your team's requirements.</p>
               <div className="text-left bg-white rounded-2xl p-6">
                  <LeadForm source={`Compare - ${comparison.title}`} hidePricing />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
