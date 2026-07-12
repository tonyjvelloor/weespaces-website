import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import VoPricingCards from '@/components/ui/VoPricingCards';
import VoDocumentChecklist from '@/components/ui/VoDocumentChecklist';
import SEOFAQ from '@/components/SEOFAQ';

import ComplianceBlock from '@/components/ComplianceBlock';

export const metadata: Metadata = constructMetadata({
  title: "Virtual Office for GST Registration in Kerala & TN | WeeSpaces",
  description: "Get a legally compliant Virtual Office address for GST registration in Kochi, Trivandrum, Coimbatore, and Calicut. Includes NOC and utility bills.",
  canonicalPath: "/virtual-office/gst-registration"
});

export default function GstRegistrationPage() {
  const faqs = [
    { question: "Can I use a WeeSpaces Virtual Office address when applying for GST?", answer: "Yes, we provide the commercial address and documentation that customers may use as part of their own registration process, subject to applicable requirements." },
    { question: "How long does it take to get the documents?", answer: "Once your KYC is verified and payment is made, we dispatch the digital copies of the Rental Agreement and NOC within 24 to 48 hours." }
  ];

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
              Virtual Office for <span className="text-accent">GST Registration</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Everything you need to know about registering your GST number using a premium business address in Kerala and Tamil Nadu.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. CONTENT */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="prose prose-lg prose-navy max-w-none mb-16">
            <h2>Why Use a Virtual Office for GST?</h2>
            <p>
              According to the GST council, every business operating in India must declare a <strong>Principal Place of Business (PPOB)</strong> in the state they are registering. For startups, e-commerce sellers, and remote companies, renting a physical commercial office just for a GST number is an unnecessary financial burden.
            </p>
            <p>
              A <strong>Virtual Office</strong> solves this by providing a legally compliant commercial address, complete with a Rental Agreement and No Objection Certificate (NOC), at a fraction of the cost.
            </p>

            <h3>The WeeSpaces Advantage</h3>
            <p>
              Not all virtual offices are created equal. GST officers frequently reject applications if the address is residential or if the documentation is incomplete. At WeeSpaces, we provide <strong>Grade-A commercial addresses</strong> in prime IT hubs across South India (Infopark, Technopark, Coimbatore).
            </p>
            <ul>
              <li><strong>Documentation Support:</strong> We provide the commercial NOC, Utility Bill, and Rental Agreement required for your application.</li>
              <li><strong>Physical Verification Support:</strong> We display your company name board at the reception and assist visiting GST officers.</li>
              <li><strong>Mail Handling:</strong> All official notices from the tax department are received securely and forwarded to you.</li>
            </ul>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. DOCUMENTS */}
      <section className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <VoDocumentChecklist />
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-y border-gray-100 max-w-7xl mx-auto px-6">
        <ComplianceBlock />
      </section>

      {/* 4. PLANS */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Recommended Plans for GST Registration</h2>
          <VoPricingCards />
        </ScrollReveal>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center text-navy mb-12">GST Registration FAQs</h2>
            <SEOFAQ faqs={faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-20 max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="bg-navy-light/5 border border-gray-200 rounded-3xl p-8 mb-8 text-left max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-navy mb-4 text-center">What You Receive</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Commercial business address</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Rental agreement</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> NOC (where applicable)</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Mail handling</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Workspace access (if included in plan)</li>
            </ul>
          </div>
          <h2 className="text-3xl font-bold text-navy mb-6">Ready to get your GST Address?</h2>
          <LeadForm source="GST Registration VO Guide" />
        </ScrollReveal>
      </section>
    </div>
  );
}
