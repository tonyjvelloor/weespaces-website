"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { track } from '@/lib/tracking';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate FAQPage JSON-LD Schema
  const schema = {
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
  };

  return (
    <div className="space-y-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`glass rounded-2xl border transition-colors duration-300 ${isOpen ? 'border-accent/40 bg-white/5' : 'border-white/10 hover:border-white/20'}`}>
            <button
              className="w-full flex items-center justify-between p-6 text-left"
              onClick={() => {
                const willOpen = !isOpen;
                setOpenIndex(willOpen ? index : null);
                if (willOpen) {
                  track.cta('faq_expand', '', { question: faq.question });
                }
              }}
            >
              <span className={`font-bold pr-8 transition-colors ${isOpen ? 'text-accent' : 'text-white'}`}>
                {faq.question}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-accent/20 text-accent' : 'bg-white/5 text-white/50'}`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            <div 
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? '1000px' : '0', opacity: isOpen ? 1 : 0 }}
            >
              <div className="p-6 pt-0 text-white/70 leading-relaxed border-t border-white/5 mt-2">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
