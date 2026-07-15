"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { VirtualOfficeContent } from '@/data/virtualOfficeContent';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import VoPricingCards from '@/components/ui/VoPricingCards';
import VoDocumentChecklist from '@/components/ui/VoDocumentChecklist';
import SEOFAQ from '@/components/SEOFAQ';
import ComplianceBlock from '@/components/ComplianceBlock';
import { track } from '@/lib/tracking';
import { useScrollTracking } from '@/hooks/useScrollTracking';

interface VirtualOfficeLandingTemplateProps {
  content: VirtualOfficeContent;
  city?: string;
}

export default function VirtualOfficeLandingTemplate({ content, city }: VirtualOfficeLandingTemplateProps) {
  const pageContext = { pageType: content.routing.type, pageSlug: content.routing.slug, city };

  useEffect(() => {
    track.page(pageContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content.routing.slug, city]);

  useScrollTracking(pageContext);

  return (
    <div className="bg-white pt-24">
      {/* 1. HERO & LEAD FORM SECTION */}
      <section className="bg-navy text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Copy */}
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-6 uppercase tracking-widest">
                  {content.routing.type.replace('-', ' ')} Solution
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  {content.conversion.heroHeadline}
                </h1>
                <p className="text-xl text-white/70 mb-8 leading-relaxed">
                  {content.conversion.heroSubheadline}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> 100% Compliant
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> 24 Hour Setup
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Zero Deposit
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Lead Form */}
            <div>
              <ScrollReveal delay={0.2}>
                <div className="bg-white rounded-3xl p-8 shadow-2xl text-navy">
                  <h3 className="text-2xl font-bold mb-2">Get Started Today</h3>
                  <p className="text-gray-500 mb-6 text-sm">Fill out the form below and our workspace experts will contact you within 15 minutes.</p>
                  <LeadForm 
                    source={`${content.seo.title} - Hero Form`}
                    pageType={content.routing.type}
                    pageSlug={content.routing.slug}
                    branch={city}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 MINI-TOC */}
      <section className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <ul className="flex items-center gap-6 text-sm font-bold text-navy whitespace-nowrap">
            <li><a href="#quick-answer" className="hover:text-accent transition-colors">Overview</a></li>
            <li><a href="#benefits" className="hover:text-accent transition-colors">Benefits</a></li>
            {(content.routing.type === 'registration' || content.routing.type === 'persona') && (
              <li><a href="#documents" className="hover:text-accent transition-colors">Documents Required</a></li>
            )}
            <li><a href="#how-it-works" className="hover:text-accent transition-colors">Process</a></li>
            <li><a href="#pricing" className="hover:text-accent transition-colors">Pricing</a></li>
            {content.schema.faqs && content.schema.faqs.length > 0 && (
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            )}
          </ul>
        </div>
      </section>

      {/* 2. TRUST & QUICK ANSWER */}
      <section id="quick-answer" className="py-16 max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4">The Short Answer</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.ai.quickAnswer}
            </p>
          </div>

          {/* Summary Table */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {content.schema.summaryTable.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 text-center shadow-sm">
                <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                <div className="font-bold text-navy">{item.value}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 3. BENEFITS */}
      <section id="benefits" className="py-16 bg-navy-light/5 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center text-navy mb-12">Why Choose WeeSpaces?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.schema.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 font-bold text-xl">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. DOCUMENTS CHECKLIST (If applicable) */}
      {(content.routing.type === 'registration' || content.routing.type === 'persona') && (
        <section id="documents" className="py-20 max-w-7xl mx-auto px-6">
          <VoDocumentChecklist />
        </section>
      )}

      {/* 5. PROCESS STEPS */}
      <section id="how-it-works" className="py-16 max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center text-navy mb-12">How It Works</h2>
          <div className="space-y-6">
            {content.schema.processSteps.map((step, idx) => (
              <div key={idx} className="flex gap-6 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 shrink-0 bg-navy text-white rounded-full flex items-center justify-center font-black text-xl">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 6. COMPLIANCE BLOCK */}
      <section className="py-20 bg-gray-50 border-y border-gray-100 max-w-7xl mx-auto px-6">
        <ComplianceBlock />
      </section>

      {/* 7. PRICING */}
      <section id="pricing" className="py-20 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Transparent Pricing</h2>
            <p className="text-lg text-gray-600">{content.schema.costInfo.description}</p>
          </div>
          <VoPricingCards />
        </ScrollReveal>
      </section>

      {/* 8. FAQs */}
      {content.schema.faqs && content.schema.faqs.length > 0 && (
        <section id="faq" className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center text-navy mb-12">Frequently Asked Questions</h2>
              <SEOFAQ faqs={content.schema.faqs} textColor="text-navy" />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 9. RELATED CITIES CTA */}
      {content.routing.relatedCities && content.routing.relatedCities.length > 0 && (
        <section className="py-12 border-t border-gray-100 max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 mb-4 font-medium">Available in premium locations across South India:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {content.routing.relatedCities.map((citySlug) => (
              <Link 
                key={citySlug} 
                href={`/virtual-office/${citySlug}/${content.routing.slug}`}
                className="px-6 py-2 bg-gray-100 hover:bg-navy hover:text-white text-navy font-bold rounded-full transition-colors capitalize"
              >
                {citySlug}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
