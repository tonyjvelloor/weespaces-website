import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import ScrollReveal from '@/components/ui/ScrollReveal';
import WorkspaceCalculator from '@/components/tools/WorkspaceCalculator';
import SEOFAQ from '@/components/SEOFAQ';
import Link from 'next/link';
import { CheckCircle, Calculator as CalcIcon } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Workspace Savings Calculator | Calculate Office CapEx & OpEx',
  description: 'Calculate your 3-year office setup and operational costs. Compare traditional commercial leasing CapEx with WeeSpaces managed office savings.',
  canonicalPath: '/calculator',
});

const faqs = [
  { question: 'What is included in the Traditional Office calculation?', answer: 'The calculation estimates the costs for commercial rent, electricity, enterprise internet, facility maintenance, daily housekeeping, 24/7 security, interior fit-outs, ergonomic furniture, and the security deposit based on current real estate rates in South Indian IT hubs.' },
  { question: 'Why is the Security Deposit counted as an upfront cost but not an expense?', answer: 'While the deposit is technically refundable, it represents locked capital that cannot be used for business growth. We separate it from sunk costs (like fit-outs) but include it in the initial capital required.' },
  { question: 'How accurate are the rental figures?', answer: 'Our data team updates the cost figures quarterly based on the average Grade-A commercial real estate leasing rates in Kochi, Coimbatore, Trivandrum, and Calicut.' },
  { question: 'Does WeeSpaces charge extra for electricity or internet?', answer: 'No. All our coworking and managed office plans are completely all-inclusive. The price you see is the final operational expense.' }
];

export default function CalculatorPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-32 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent via-navy to-navy"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-bold text-sm mb-6 uppercase tracking-wider">
              <CalcIcon className="w-4 h-4" /> Interactive Tool
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6">
              Stop guessing your office costs.
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Traditional leases hide thousands of dollars in hidden maintenance and setup costs. Use our calculator to discover exactly how much CapEx you can save by switching to an all-inclusive managed office.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. THE CALCULATOR TOOL */}
      <section className="relative -mt-20 z-20 pb-20">
        <div className="max-w-6xl mx-auto px-6">
           <ScrollReveal delay={0.2}>
              <WorkspaceCalculator />
           </ScrollReveal>
        </div>
      </section>

      {/* 3. VALUE PROPS */}
      <section className="py-20 bg-white border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
               <h2 className="text-3xl font-bold text-navy mb-4">Why the traditional model is broken for modern teams.</h2>
               <p className="text-gray-600">The shift to hybrid work means static, long-term commercial leases are a massive liability.</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
               <ScrollReveal delay={0.1}>
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 h-full">
                     <h3 className="text-xl font-bold text-navy mb-4 border-b border-gray-200 pb-4">Zero Capital Expenditure</h3>
                     <p className="text-gray-600">Don't sink millions into interior design, HVAC, and server rooms. We amortize the build-out costs so you keep your capital liquid for actual business growth.</p>
                  </div>
               </ScrollReveal>
               <ScrollReveal delay={0.2}>
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 h-full">
                     <h3 className="text-xl font-bold text-navy mb-4 border-b border-gray-200 pb-4">Agile Scalability</h3>
                     <p className="text-gray-600">Traditional leases lock you in for 3-5 years. What if your team doubles in 6 months? With WeeSpaces, you can add desks or upgrade to larger private cabins instantly.</p>
                  </div>
               </ScrollReveal>
               <ScrollReveal delay={0.3}>
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 h-full">
                     <h3 className="text-xl font-bold text-navy mb-4 border-b border-gray-200 pb-4">Consolidated Billing</h3>
                     <p className="text-gray-600">Stop managing 15 different vendors for internet, security, housekeeping, and repairs. Get one predictable invoice every month.</p>
                  </div>
               </ScrollReveal>
            </div>
         </div>
      </section>

      {/* 4. FAQs */}
      <div className="bg-gray-50">
        <SEOFAQ 
          title="Understanding the Data"
          subtitle="How we calculate workspace economics."
          faqs={faqs}
          textColor="text-navy"
        />
      </div>

      {/* 5. CTA */}
      <section className="py-24 bg-navy text-white text-center">
         <div className="max-w-3xl mx-auto px-6">
            <ScrollReveal>
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Want a more precise quote?</h2>
               <p className="text-white/70 text-lg mb-8">Our workspace advisors can build a custom floor plan and financial projection based on your exact headcount and IT requirements.</p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="bg-accent text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-all shadow-lg">
                     Talk to Sales
                  </Link>
                  <Link href="/enterprise-office" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                     View Enterprise Offices
                  </Link>
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* JSON-LD SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Workspace Savings Calculator",
              "description": "Calculate your 3-year office setup and operational costs.",
              "url": "https://weespaces.in/calculator"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ])
        }}
      />
    </div>
  );
}
