import { FAQ } from '@/data/faqs';
import { generateFAQSchema } from '@/utils/schema';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

interface SEOFAQProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
  textColor?: string;
}

export default function SEOFAQ({ faqs, title = "Frequently Asked Questions", subtitle = "Everything you need to know.", textColor = "text-white" }: SEOFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  const schema = generateFAQSchema(faqs);

  return (
    <section className="py-24 max-w-4xl mx-auto px-6 border-t border-white/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ScrollReveal direction="up" className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
          FAQ
        </div>
        <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${textColor}`}>{title}</h2>
        <p className={`text-xl ${textColor === 'text-navy' ? 'text-gray-600' : 'text-white/70'}`}>{subtitle}</p>
      </ScrollReveal>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1}>
            <details className={`glass rounded-2xl overflow-hidden border ${textColor === 'text-navy' ? 'border-gray-200 hover:border-gray-300' : 'border-white/10 hover:border-white/30'} transition-all group`}>
              <summary className={`w-full px-6 py-5 text-left flex items-center justify-between cursor-pointer list-none ${textColor}`}>
                <h3 className="font-bold text-lg m-0">{faq.question}</h3>
                <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 group-open:text-accent transition-transform duration-300 shrink-0 ml-4" />
              </summary>
              <div className="px-6 pb-5">
                <p className={`leading-relaxed ${textColor === 'text-navy' ? 'text-gray-600' : 'text-white/70'}`}>{faq.answer}</p>
              </div>
            </details>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
