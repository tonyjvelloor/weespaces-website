import React from 'react';
import Link from 'next/link';
import { VirtualOfficeArticle } from '@/data/virtualOfficeArticles';
import { CheckCircle, Info, ChevronRight, FileText, Zap, Shield, HelpCircle } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import GSTEligibilityQuiz from '@/components/tools/GSTEligibilityQuiz';

interface Props {
  article: VirtualOfficeArticle;
}

export default function VirtualOfficeArticleTemplate({ article }: Props) {
  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <section className="pt-32 pb-16 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-accent/10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-accent text-sm font-bold tracking-wider mb-6">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <ChevronRight className="w-4 h-4 text-white/30" />
            <Link href="/virtual-office" className="hover:text-white transition-colors">VIRTUAL OFFICE</Link>
            <ChevronRight className="w-4 h-4 text-white/30" />
            <span className="uppercase text-white/70">KNOWLEDGE HUB</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-white/80 leading-relaxed font-light mb-8 max-w-3xl">
            {article.description}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: ARTICLE CONTENT */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* 2. QUICK ANSWER (TL;DR) */}
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-xl">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">Quick Answer</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {article.quickAnswer}
                </p>
              </div>
            </div>
          </div>

          {/* 3. SUMMARY TABLE */}
          {article.summaryTable && article.summaryTable.length > 0 && (
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="font-bold text-navy flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" /> Key Takeaways
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {article.summaryTable.map((row, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row p-4 hover:bg-gray-50 transition-colors">
                    <div className="sm:w-1/3 font-bold text-gray-700">{row.label}</div>
                    <div className="sm:w-2/3 text-gray-600 mt-1 sm:mt-0">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. BENEFITS */}
          {article.benefits && article.benefits.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Why Choose a Virtual Office?</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {article.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <Zap className="w-6 h-6 text-accent mb-4" />
                    <h4 className="font-bold text-navy mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. REQUIREMENTS (CHECKLIST) */}
          {article.requirements && (
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">{article.requirements.title}</h2>
              <ul className="space-y-4">
                {article.requirements.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 6. INTERACTIVE TOOL (Embedded mid-article) */}
          {article.interactiveTool === 'gst-eligibility' && (
            <div className="my-16">
              <GSTEligibilityQuiz />
            </div>
          )}

          {/* 7. PROCESS */}
          {article.processSteps && article.processSteps.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">How It Works</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                {article.processSteps.map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent text-navy font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {step.step}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-navy mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. COST */}
          {article.costInfo && (
            <div className="bg-navy rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
               <h2 className="text-3xl font-bold mb-4 relative z-10">Transparent Pricing</h2>
               <p className="text-white/80 mb-8 max-w-2xl mx-auto relative z-10">{article.costInfo.description}</p>
               <div className="text-5xl font-extrabold text-accent mb-8 relative z-10">{article.costInfo.price}</div>
               <div className="flex flex-wrap justify-center gap-4 relative z-10">
                 {article.costInfo.includes.map((item, idx) => (
                   <div key={idx} className="bg-white/10 px-4 py-2 rounded-full text-sm font-bold border border-white/10 flex items-center gap-2">
                     <CheckCircle className="w-4 h-4 text-accent" /> {item}
                   </div>
                 ))}
               </div>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: STICKY CTA / SIDEBAR */}
        <div className="lg:col-span-4 space-y-8 relative">
          <div className="sticky top-24">
            {/* BOOKING WIDGET */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
              <div className="bg-navy p-4 text-white text-center">
                <h3 className="font-bold text-lg">Get Your Address Today</h3>
                <p className="text-xs text-white/70">NOC & Rental Agreement in 24 hrs</p>
              </div>
              <div className="p-6">
                <LeadForm source={`Article: ${article.slug}`} branch={article.targetState || "Virtual Office"} hidePricing />
              </div>
            </div>

            {/* TRUST FACTORS */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
               <h4 className="font-bold text-navy mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-accent" /> Why WeeSpaces?</h4>
               <ul className="space-y-4 text-sm text-gray-600">
                 <li className="flex items-start gap-3">
                   <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                   <span><strong>99% Approval Rate:</strong> Our documents are formatted exactly as government departments require.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                   <span><strong>Prime Locations:</strong> Instantly boost your brand image with Grade-A commercial addresses.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                   <span><strong>Zero Setup Cost:</strong> Pay only for the subscription. No deposits.</span>
                 </li>
               </ul>
            </div>
            
            {/* RELATED ARTICLES */}
            {article.relatedArticles && article.relatedArticles.length > 0 && (
              <div className="mt-8">
                <h4 className="font-bold text-navy mb-4 text-sm uppercase tracking-wider">Related Guides</h4>
                <div className="space-y-3">
                  {article.relatedArticles.map((rel, idx) => (
                    <Link key={idx} href={`/virtual-office/${rel.slug}`} className="block group">
                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm group-hover:border-accent group-hover:shadow-md transition-all">
                        <p className="font-bold text-navy text-sm mb-1 group-hover:text-accent transition-colors">{rel.title}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">Read Article <ChevronRight className="w-3 h-3" /></p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 9. FAQs */}
      {article.faqs && article.faqs.length > 0 && (
        <div className="bg-gray-50 py-16 border-t border-gray-100">
          <SEOFAQ 
            title="Frequently Asked Questions" 
            subtitle="Common queries regarding this topic." 
            faqs={article.faqs} 
            textColor="text-navy"
          />
        </div>
      )}

      {/* 10. SCHEMA INJECTION */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": article.title,
              "description": article.description,
              "author": {
                "@type": "Organization",
                "name": "WeeSpaces"
              },
              "publisher": {
                "@type": "Organization",
                "name": "WeeSpaces",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://weespaces.in/logo.png"
                }
              }
            },
            ...(article.faqs ? [{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": article.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }] : [])
          ])
        }}
      />
    </div>
  );
}
