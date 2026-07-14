import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import VoPricingCards from '@/components/ui/VoPricingCards';
import SEOFAQ from '@/components/SEOFAQ';
import Link from 'next/link';

export const metadata: Metadata = constructMetadata({
  title: "Virtual Office for LLP Registration in India | WeeSpaces",
  description: "Register your Limited Liability Partnership (LLP) using a premium Virtual Office address. Complete MCA compliant NOC and rental agreement provided.",
  canonicalPath: "/virtual-office/llp-registration"
});

export default function LLPRegistrationPage() {
  const faqs = [
    { question: "Is a Virtual Office legal for LLP Registration?", answer: "Yes, under the Limited Liability Partnership Act, 2008, you can use a Virtual Office as your registered office. The MCA requires proof of address and an NOC from the owner, both of which we provide." },
    { question: "What documents do you provide for LLP incorporation?", answer: "We provide a digitally signed No Objection Certificate (NOC), a Rental/Virtual Office Agreement, and the latest utility bill for the premises." },
    { question: "Can I upgrade to a physical office later?", answer: "Absolutely. Many LLPs start with a virtual office and upgrade to our coworking desks or private cabins as their team grows." },
    { question: "How long does it take to get the documents?", answer: "Once payment and KYC are completed, we issue the required NOC and utility bills within 24 to 48 hours." }
  ];

  return (
    <div className="bg-white pt-24">
      {/* 1. HERO */}
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-6 uppercase tracking-widest">
              Business Registration
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Virtual Office for <span className="text-accent">LLP Registration</span>
            </h1>
            <p className="text-xl text-white/70">
              Establish your Limited Liability Partnership (LLP) with a premium commercial address. Get MCA-compliant documentation in 48 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <div className="prose prose-lg prose-navy max-w-none mb-16">
                <h2>Why Use a Virtual Office for Your LLP?</h2>
                <p>
                  A Limited Liability Partnership (LLP) requires a registered office address under the LLP Act, 2008. This address is public and used for all official correspondence by the Ministry of Corporate Affairs (MCA).
                </p>
                <p>
                  Instead of leasing an expensive physical office or using your home address (which exposes your privacy), a Virtual Office provides a prestigious commercial address at a fraction of the cost.
                </p>

                <h3>Documents Provided for FiLLiP Form</h3>
                <p>To register your LLP, you will file the FiLLiP (Form for incorporation of Limited Liability Partnership). We provide the exact documents you need to attach as proof of registered office:</p>
                <ul>
                  <li><strong>NOC (No Objection Certificate):</strong> Digitally signed by the premises owner.</li>
                  <li><strong>Utility Bill:</strong> The latest electricity bill for the commercial building (not older than 2 months).</li>
                  <li><strong>Rental Agreement:</strong> A formal agreement authorizing your LLP to use the address.</li>
                </ul>
              </div>

              {/* Internal Linking Cluster */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-12">
                <h3 className="text-lg font-bold text-navy mb-4">Explore Registration Options</h3>
                <div className="flex flex-wrap gap-4">
                  <Link href="/virtual-office/company-registration" className="text-accent hover:underline font-medium">Private Limited Company</Link>
                  <Link href="/virtual-office/opc-registration" className="text-accent hover:underline font-medium">One Person Company (OPC)</Link>
                  <Link href="/virtual-office/gst-registration" className="text-accent hover:underline font-medium">GST Registration</Link>
                  <Link href="/virtual-office/startup-india" className="text-accent hover:underline font-medium">Startup India DPIIT</Link>
                </div>
              </div>

              <SEOFAQ faqs={faqs} title="LLP Registration FAQs" textColor="text-navy" />
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <LeadForm 
                source="LLP Registration Virtual Office" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600">Choose the virtual office plan that fits your LLP's requirements.</p>
          </div>
          <VoPricingCards />
        </div>
      </section>
    </div>
  );
}
