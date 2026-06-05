"use client";

import { useState } from 'react';

const faqs = [
  {
    question: "What are your working hours?",
    answer: "Our open coworking areas are accessible from 9:00 AM to 6:00 PM, Monday to Saturday. Private cabin members have 24/7 biometric access."
  },
  {
    question: "Do you offer daily passes?",
    answer: "Yes, we offer daily Hot Desk passes for individuals who need a temporary workspace. You can book directly through our Pricing page."
  },
  {
    question: "Can I use multiple branches with one membership?",
    answer: "Our Enterprise and Dedicated Desk members get complimentary roaming access to our Trivandrum, Ernakulam, Calicut, and Coimbatore lounges for up to 4 days a month."
  },
  {
    question: "What is included in the Virtual Office plan?",
    answer: "The Virtual Office plan includes a premium business address for GST and company registration, mail and package handling, and discounted access to our conference rooms."
  },
  {
    question: "Is parking available?",
    answer: "Yes, all our 4 active branches offer dedicated two-wheeler and four-wheeler parking facilities for our members."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate FAQ Schema for SEO
  const faqSchema = {
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
    <div className="pt-20 pb-32">
      {/* Inject SEO Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
            Support
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-white/70 text-lg">Everything you need to know about working at WeeSpaces.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-accent' : 'border-white/10 hover:border-white/30'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-lg"
              >
                {faq.question}
                <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-accent' : 'text-white/50'}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
