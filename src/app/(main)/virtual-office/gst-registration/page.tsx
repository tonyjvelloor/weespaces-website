import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import VoPricingCards from '@/components/ui/VoPricingCards';
import VoDocumentChecklist from '@/components/ui/VoDocumentChecklist';
import SEOFAQ from '@/components/SEOFAQ';

export const metadata: Metadata = constructMetadata({
  title: "GST-Compliant Virtual Office Address in Kerala & TN | WeeSpaces",
  description: "Rent a legally compliant commercial Virtual Office address required for your GST registration in Kochi, Trivandrum, Coimbatore, and Calicut. Includes NOC and utility bills.",
  canonicalPath: "/virtual-office/gst-address-compliance"
});

export default function GstRegistrationPage() {
  const faqs = [
    { question: "Do you provide GST registration?", answer: "No, we do not provide government services or handle your GST registration filing. We provide the commercial lease, No Objection Certificate (NOC), and utility bills required for you to use our address for your independent GST registration." },
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
              Virtual Office for <span className="text-accent">GST Address Compliance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Everything you need to know about renting a premium commercial address in Kerala and Tamil Nadu to satisfy the physical address requirements for your GST compliance.
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
              <li><strong>Guaranteed Compliance:</strong> We provide NOC, Utility Bill, and Rental Agreement.</li>
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

      {/* 4. PLANS */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Recommended Plans for GST Address Compliance</h2>
          <VoPricingCards />
        </ScrollReveal>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center text-navy mb-12">GST Address Compliance FAQs</h2>
            <SEOFAQ faqs={faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-20 max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-navy mb-6">Ready to rent your GST-Compliant Address?</h2>
          <LeadForm source="GST Address Compliance Guide" />
        </ScrollReveal>
      </section>
    </div>
  );
}
