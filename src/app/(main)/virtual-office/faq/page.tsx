import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SEOFAQ from '@/components/SEOFAQ';
import { virtualOfficeFaqs } from '@/data/pricing';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = constructMetadata({
  title: "Virtual Office FAQs | WeeSpaces",
  description: "Have questions about Virtual Offices in India? We answer everything related to GST, MCA, physical verification, and NOCs.",
  canonicalPath: "/virtual-office/faq"
});

export default function VirtualOfficeFaqPage() {
  return (
    <div className="bg-white pt-24">
      {/* 1. HERO */}
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-6 uppercase tracking-widest">
              Knowledge Center
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Virtual Office <span className="text-accent">FAQs</span>
            </h1>
            <p className="text-xl text-white/70">
              Clear answers to the most common legal, operational, and financial questions regarding virtual offices.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. FAQS */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <SEOFAQ faqs={virtualOfficeFaqs} textColor="text-navy" />
        </ScrollReveal>
      </section>

      {/* 3. CTA */}
      <section className="py-20 bg-gray-50 max-w-3xl mx-auto px-6 text-center border-t border-gray-100 rounded-t-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-navy mb-6">Still have questions?</h2>
          <p className="text-gray-500 mb-8">Our local experts can walk you through the entire registration process.</p>
          <LeadForm source="VO FAQ Page" hidePricing />
        </ScrollReveal>
      </section>
    </div>
  );
}
