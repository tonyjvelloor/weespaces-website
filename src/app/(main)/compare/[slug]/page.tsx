import { Metadata }
import { constructMetadata } from '@/utils/metadata';
 from 'next';
import { notFound } from 'next/navigation';
import { comparisons } from '@/data/comparisons';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import { ChevronRight, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const comparison = comparisons.find(c => c.slug === resolvedParams.slug);
  
  if (!comparison) return notFound();

  const isCompetitor = comparison.id.includes('weespaces-vs-');
  const title = isCompetitor 
    ? `${comparison.title} | The Best Alternative in South India | WeeSpaces` 
    : `${comparison.title} | WeeSpaces`;

  return constructMetadata({
    title,
    description: comparison.shortDesc,
    canonicalPath: `/compare/${comparison.slug}`,
  });
}

export function generateStaticParams() {
  return comparisons.map(c => ({
    slug: c.slug
  }));
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const comparison = comparisons.find(c => c.slug === resolvedParams.slug);
  
  if (!comparison) return notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": comparison.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* 1. HERO */}
      <section className="bg-navy pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 text-accent text-sm font-bold tracking-wider mb-6">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">COMPARE</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {comparison.optionA.name} <span className="text-white/50 font-light">vs</span> <span className="text-accent">{comparison.optionB.name}</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {comparison.shortDesc}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. SIDE-BY-SIDE COMPARISON (AEO SEMANTIC TABLE) */}
      <section className="py-20 bg-navy-light/5">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal direction="up" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]" aria-label={`Comparison of ${comparison.optionA.name} and ${comparison.optionB.name}`}>
                <thead>
                  <tr>
                    <th scope="col" className="w-1/4 bg-gray-50 p-6 border-b-4 border-gray-200">
                      <span className="sr-only">Comparison Criteria</span>
                    </th>
                    <th scope="col" className="w-3/8 bg-navy p-6 text-white border-b-4 border-accent">
                      <h2 className="text-2xl font-bold mb-1">{comparison.optionA.name}</h2>
                      <div className="text-white/80 font-medium text-sm">Best for: {comparison.optionA.idealFor}</div>
                    </th>
                    <th scope="col" className="w-3/8 bg-gray-100 p-6 border-b-4 border-gray-300">
                      <h2 className="text-2xl font-bold text-navy mb-1">{comparison.optionB.name}</h2>
                      <div className="text-gray-600 font-medium text-sm">Best for: {comparison.optionB.idealFor}</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr>
                    <th scope="row" className="p-6 border-b border-gray-100 bg-gray-50 font-bold text-navy align-middle">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm uppercase tracking-wider block w-max mb-2">Pros</span>
                      Advantages
                    </th>
                    <td className="p-6 border-b border-gray-100 border-r border-gray-50">
                      <ul className="space-y-4">
                        {comparison.optionA.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-gray-700 font-medium">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-6 border-b border-gray-100 bg-gray-50/50">
                      <ul className="space-y-4">
                        {comparison.optionB.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-gray-700 font-medium">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-6 border-gray-100 bg-gray-50 font-bold text-navy align-middle">
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm uppercase tracking-wider block w-max mb-2">Cons</span>
                      Disadvantages
                    </th>
                    <td className="p-6 border-r border-gray-50">
                      <ul className="space-y-4">
                        {comparison.optionA.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                            <span className="text-gray-600">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-6 bg-gray-50/50">
                      <ul className="space-y-4">
                        {comparison.optionB.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                            <span className="text-gray-600">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. VERDICT */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-accent font-bold uppercase tracking-widest mb-6">The Verdict</h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              "{comparison.verdict}"
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. CALL TO ACTION / LEAD FORM */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-navy mb-6">Still not sure? <br/><span className="text-accent">Let's talk options.</span></h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Every business is unique. Get on a quick 10-minute call with our workspace consultants. We'll help you run the numbers and find the most cost-effective solution for your specific team size and goals.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-light/5 p-4 rounded-xl border border-gray-100">
                <div className="font-bold text-navy text-xl">100% Free</div>
                <div className="text-gray-500 text-sm">Consultation</div>
              </div>
              <div className="bg-navy-light/5 p-4 rounded-xl border border-gray-100">
                <div className="font-bold text-navy text-xl">0 Obligations</div>
                <div className="text-gray-500 text-sm">To commit</div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="bg-white rounded-2xl p-8 text-navy shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-center">Get Expert Advice</h3>
              <LeadForm branch="Consultation" source={`Comparison Page - ${comparison.title}`} hidePricing />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. FAQs */}
      <div className="bg-navy-light/5">
        <SEOFAQ 
          title="Common Questions"
          subtitle={`Dive deeper into ${comparison.title}.`}
          faqs={comparison.faqs}
          textColor="text-navy"
        />
      </div>
      
      {/* 6. INTERNAL LINKING */}
      <section className="py-16 bg-navy text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-xl font-bold mb-8">Explore Other Comparisons</h3>
            <div className="flex flex-wrap justify-center gap-4">
               {comparisons.filter(c => c.slug !== comparison.slug).map(c => (
                 <Link 
                   key={c.id} 
                   href={`/compare/${c.slug}`}
                   className="bg-white/10 px-6 py-3 rounded-full hover:bg-accent hover:text-navy transition-colors font-medium border border-white/20 hover:border-transparent"
                 >
                   {c.title}
                 </Link>
               ))}
            </div>
         </div>
      </section>
    </>
  );
}
