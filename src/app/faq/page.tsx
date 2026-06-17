"use client";

import { useState } from 'react';
import { faqs } from '@/data/faqs';

export default function FAQPage() {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number>(0);
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    if (openCategoryIndex === categoryIndex && openQuestionIndex === questionIndex) {
      setOpenQuestionIndex(null);
    } else {
      setOpenCategoryIndex(categoryIndex);
      setOpenQuestionIndex(questionIndex);
    }
  };

  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
            Support
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-white/70 text-lg">Everything you need to know about working at WeeSpaces.</p>
        </div>

        <div className="space-y-12">
          {faqs.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-2xl font-bold mb-6 text-accent font-heading">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const isOpen = openCategoryIndex === catIndex && openQuestionIndex === qIndex;
                  return (
                    <div 
                      key={qIndex} 
                      className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-accent shadow-[0_0_15px_rgba(242,156,31,0.15)]' : 'border-white/10 hover:border-white/30'}`}
                    >
                      <button 
                        onClick={() => toggleQuestion(catIndex, qIndex)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-lg"
                      >
                        {faq.question}
                        <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-white/50'}`}>
                          expand_more
                        </span>
                      </button>
                      <div 
                        className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
