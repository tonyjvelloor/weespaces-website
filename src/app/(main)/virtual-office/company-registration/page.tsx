import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import VoPricingCards from '@/components/ui/VoPricingCards';
import SEOFAQ from '@/components/SEOFAQ';

export const metadata: Metadata = constructMetadata({
  title: "Virtual Office for Company Registration | MCA & ROC | WeeSpaces",
  description: "Register your Private Limited Company or LLP in India using a premium Virtual Office address. Complete MCA compliant documentation provided in 48 hours.",
  canonicalPath: "/virtual-office/company-registration"
});

export default function CompanyRegistrationPage() {
  const faqs = [
    { question: "Can I use a virtual office to register a Private Limited Company?", answer: "Yes, the Ministry of Corporate Affairs (MCA) allows you to use a virtual office address as your official registered office. You will receive an NOC and rental agreement for your ROC filings." },
    { question: "Is this valid for an LLP (Limited Liability Partnership)?", answer: "Yes, an LLP requires a registered office address just like a Private Limited Company. Our virtual office plans provide the necessary documentation." },
    { question: "Will you provide the required NOC?", answer: "Yes, we provide a digitally signed No Objection Certificate (NOC) from the owner of the premises explicitly stating that they have no objection to you using the address for company registration." },
    { question: "Can I open a bank account with this address?", answer: "Yes, once your company is incorporated and you receive your Certificate of Incorporation and PAN, you can easily open a current account with any bank using the provided address proofs." }
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
              Virtual Office for <span className="text-accent">Company Incorporation</span>
            </h1>
            <p className="text-xl text-white/70">
              The smart, legal, and cost-effective way to register your Private Limited Company, LLP, or OPC with the Ministry of Corporate Affairs (MCA).
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. CONTENT */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="prose prose-lg prose-navy max-w-none mb-16">
            <h2>Why Startups Need a Premium Registered Office</h2>
            <p>
              When incorporating a company in India via the SPICe+ form on the MCA portal, you are required to provide proof of a registered office address within 30 days of incorporation. 
            </p>
            <p>
              While you <em>can</em> use your home address, it comes with severe downsides:
            </p>
            <ul>
              <li><strong>Privacy Loss:</strong> Your home address becomes public record on the MCA master data.</li>
              <li><strong>Unprofessional Image:</strong> Investors and clients often search for your business address. A residential apartment doesn't inspire confidence.</li>
              <li><strong>Compliance Risks:</strong> Local residential societies often prohibit commercial activities.</li>
            </ul>

            <h3>The Virtual Office Solution</h3>
            <p>
              By opting for a WeeSpaces Virtual Office, you immediately gain a <strong>Grade-A commercial business address</strong> in prime tech hubs. You protect your privacy, project an enterprise-level image, and receive all the mandatory legal documents required by the ROC.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. PLANS */}
      <section className="py-20 bg-gray-50 max-w-7xl mx-auto px-6 rounded-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Recommended Plans for Company Registration</h2>
          <VoPricingCards />
        </ScrollReveal>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Company Registration FAQs</h2>
          <SEOFAQ faqs={faqs} />
        </ScrollReveal>
      </section>

      {/* 6. CTA */}
      <section className="py-20 max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-navy mb-6">Start Your Incorporation Journey</h2>
          <LeadForm source="Company Registration VO Guide" />
        </ScrollReveal>
      </section>
    </div>
  );
}
