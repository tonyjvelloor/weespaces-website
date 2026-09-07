"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-space-md w-full">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="bg-surface-card rounded-2xl p-space-lg shadow-sm">
            <button
              className="w-full flex items-center justify-between text-left gap-space-md group"
              onClick={() => toggleFaq(index)}
              type="button"
            >
              <span className={`font-headline-sm text-headline-sm font-bold transition-colors ${isOpen ? 'text-secondary' : 'text-on-surface group-hover:text-secondary'}`}>
                {faq.question}
              </span>
              <ChevronDown 
                className={`w-6 h-6 text-on-surface-variant transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-space-md pt-space-xs' : 'max-h-0 opacity-0'}`}
            >
              <div className="font-body-md text-body-md text-on-surface-variant">
                <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
