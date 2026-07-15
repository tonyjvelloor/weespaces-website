import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import VoPricingCards from '@/components/ui/VoPricingCards';
import SEOFAQ from '@/components/SEOFAQ';
import Link from 'next/link';

export const metadata: Metadata = constructMetadata({
  title: "Virtual Office for Startup India DPIIT Recognition | WeeSpaces",
  description: "Get a professional Virtual Office address for your Startup India DPIIT recognition. Ensure compliance and access tax benefits with a premium commercial address.",
  canonicalPath: "/virtual-office/startup-india"
});

export default function StartupIndiaPage() {
  const faqs = [
    { question: "Do I need a commercial address for DPIIT Recognition?", answer: "While a home address can technically be used, a commercial address adds significant credibility when applying for Startup India DPIIT recognition and dealing with government grants or angel investors." },
    { question: "Can a Virtual Office be used for Startup India benefits?", answer: "Yes, a legally compliant Virtual Office address with proper NOC and lease agreements satisfies the address requirements for MCA compliance, which is the first step to applying for DPIIT recognition." },
    { question: "Will I get mail handling services for government correspondence?", answer: "Yes, our Virtual Office plans include dedicated mail handling. Any official letters from the MCA, Income Tax Department, or Startup India will be received, sorted, and forwarded to you." },
    { question: "Can I use the address to open a startup bank account?", answer: "Absolutely. Once your company is incorporated using our address, you can use the incorporation documents to open your corporate bank account." }
  ];

  return (
    <div className="bg-white pt-24">
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-6 uppercase tracking-widest">
              Startup Compliance
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Virtual Office for <span className="text-accent">Startup India DPIIT</span>
            </h1>
            <p className="text-xl text-white/70">
              Establish a credible, professional footprint for your startup before applying for DPIIT recognition and angel funding.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <div className="prose prose-lg prose-navy max-w-none mb-16">
                <h2>Build Credibility for Your Startup</h2>
                <p>
                  To apply for the Startup India DPIIT (Department for Promotion of Industry and Internal Trade) recognition, your entity must first be incorporated as a Private Limited Company, LLP, or Registered Partnership. 
                </p>
                <p>
                  A premium Virtual Office provides your startup with a commercial address at major tech hubs (like Kochi or Trivandrum) without the massive overhead of a physical lease. This signals professionalism to investors, clients, and government bodies evaluating your application.
                </p>

                <h3>What We Provide</h3>
                <ul>
                  <li><strong>NOC & Agreement:</strong> Legal documentation for MCA compliance (the prerequisite for DPIIT).</li>
                  <li><strong>Premium Address:</strong> A recognizable commercial address in prime business districts.</li>
                  <li><strong>Mail Handling:</strong> Secure receipt of important government and legal correspondence.</li>
                  <li><strong>Meeting Room Access:</strong> Book professional meeting rooms when you need to meet with investors or partners.</li>
                </ul>
              </div>

              {/* Internal Linking Cluster */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-12">
                <h3 className="text-lg font-bold text-navy mb-4">Explore Registration Options</h3>
                <div className="flex flex-wrap gap-4">
                  <Link href="/virtual-office/company-registration" className="text-accent hover:underline font-medium">Private Limited Company</Link>
                  <Link href="/virtual-office/llp-registration" className="text-accent hover:underline font-medium">LLP Registration</Link>
                  <Link href="/virtual-office/opc-registration" className="text-accent hover:underline font-medium">One Person Company (OPC)</Link>
                  <Link href="/virtual-office/gst-registration" className="text-accent hover:underline font-medium">GST Registration</Link>
                </div>
              </div>

              <SEOFAQ faqs={faqs} title="Startup India & Virtual Office FAQs" textColor="text-navy" />
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <LeadForm 
                source="Startup India Virtual Office" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Plans for Early-Stage Startups</h2>
            <p className="text-gray-600">Conserve capital while building a highly professional corporate image.</p>
          </div>
          <VoPricingCards />
        </div>
      </section>
    </div>
  );
}
