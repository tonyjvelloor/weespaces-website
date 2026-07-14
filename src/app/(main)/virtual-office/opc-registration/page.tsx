import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import VoPricingCards from '@/components/ui/VoPricingCards';
import SEOFAQ from '@/components/SEOFAQ';
import Link from 'next/link';

export const metadata: Metadata = constructMetadata({
  title: "Virtual Office for OPC Registration in India | WeeSpaces",
  description: "Register your One Person Company (OPC) with a professional Virtual Office address. Complete MCA documentation including NOC provided.",
  canonicalPath: "/virtual-office/opc-registration"
});

export default function OPCRegistrationPage() {
  const faqs = [
    { question: "Can a single founder use a Virtual Office for an OPC?", answer: "Yes, a One Person Company (OPC) requires a registered office address just like a standard private limited company. A virtual office perfectly fulfills this MCA requirement." },
    { question: "Do I need a physical office to register an OPC?", answer: "No. The MCA only requires a valid registered office address for official communication. A virtual office provides this without the high costs of physical real estate." },
    { question: "Is this address valid for opening a bank account?", answer: "Yes. Once your OPC is registered and you receive your Certificate of Incorporation, you can use our provided address documents to open a corporate bank account." },
    { question: "Can I use the address on my business cards and website?", answer: "Absolutely. You can use your premium WeeSpaces address across all your marketing materials, letterheads, and website." }
  ];

  return (
    <div className="bg-white pt-24">
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-6 uppercase tracking-widest">
              Solo Founder Registration
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Virtual Office for <span className="text-accent">OPC Registration</span>
            </h1>
            <p className="text-xl text-white/70">
              Launch your One Person Company (OPC) with a premium commercial address. Zero setup costs. 100% MCA Compliant.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <div className="prose prose-lg prose-navy max-w-none mb-16">
                <h2>The Smart Way to Launch an OPC</h2>
                <p>
                  As a solo founder forming a One Person Company (OPC), keeping initial overhead low is critical. However, the Ministry of Corporate Affairs (MCA) mandates a registered office address. 
                </p>
                <p>
                  Using your home address exposes your privacy and can look unprofessional to early clients. A Virtual Office solves this by providing a premium commercial address for a small annual fee.
                </p>

                <h3>SPICe+ Documentation Provided</h3>
                <p>We provide the exact, legally compliant documents required to file your SPICe+ incorporation forms:</p>
                <ul>
                  <li><strong>NOC (No Objection Certificate):</strong> Authorizing you to use the premises as your registered office.</li>
                  <li><strong>Utility Bill:</strong> Recent electricity bill of the premises.</li>
                  <li><strong>Virtual Office Agreement:</strong> Formalizing your right to use the address.</li>
                </ul>
              </div>

              {/* Internal Linking Cluster */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-12">
                <h3 className="text-lg font-bold text-navy mb-4">Explore Registration Options</h3>
                <div className="flex flex-wrap gap-4">
                  <Link href="/virtual-office/company-registration" className="text-accent hover:underline font-medium">Private Limited Company</Link>
                  <Link href="/virtual-office/llp-registration" className="text-accent hover:underline font-medium">LLP Registration</Link>
                  <Link href="/virtual-office/gst-registration" className="text-accent hover:underline font-medium">GST Registration</Link>
                  <Link href="/virtual-office/startup-india" className="text-accent hover:underline font-medium">Startup India DPIIT</Link>
                </div>
              </div>

              <SEOFAQ faqs={faqs} title="OPC Registration FAQs" textColor="text-navy" />
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <LeadForm 
                source="OPC Registration Virtual Office" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Plans for Solo Founders</h2>
            <p className="text-gray-600">Choose a cost-effective plan to get your OPC off the ground.</p>
          </div>
          <VoPricingCards />
        </div>
      </section>
    </div>
  );
}
