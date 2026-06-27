import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import { Building, Laptop, CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: "Virtual Office vs Physical Office | Which is Better? | WeeSpaces",
  description: "Compare the costs, legal compliance, and benefits of a Virtual Office versus a traditional Physical Office in India.",
  canonicalPath: "/virtual-office/vs-physical-office"
});

export default function VsPhysicalOfficePage() {
  return (
    <div className="bg-white pt-24">
      {/* 1. HERO */}
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-6 uppercase tracking-widest">
              Comparison Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              <span className="text-accent">Virtual Office</span> vs Physical Office
            </h1>
            <p className="text-xl text-white/70">
              Is a traditional lease holding back your startup? Compare the real costs and compliance factors before signing a lock-in agreement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. THE BIG COMPARISON */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="bg-white border-2 border-accent rounded-3xl p-10 shadow-2xl relative h-full">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-navy font-bold px-6 py-2 rounded-full flex items-center gap-2">
                <Laptop className="w-5 h-5" /> Virtual Office
              </div>
              <h2 className="text-2xl font-bold text-navy mt-4 mb-6">The Modern Way</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">Zero Setup Capital</h4>
                    <p className="text-gray-500 text-sm">No deposits, no interior design costs, no furniture to buy.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">Instant Legal Compliance</h4>
                    <p className="text-gray-500 text-sm">Get NOC and agreements ready for GST/MCA in 48 hours.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">Ultimate Flexibility</h4>
                    <p className="text-gray-500 text-sm">Cancel anytime or upgrade to a physical desk as your team grows.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">Mail & Reception Support</h4>
                    <p className="text-gray-500 text-sm">We handle your official mail, so you can work from anywhere.</p>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10 relative h-full opacity-80">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-500 font-bold px-6 py-2 rounded-full flex items-center gap-2">
                <Building className="w-5 h-5" /> Traditional Physical Office
              </div>
              <h2 className="text-2xl font-bold text-navy mt-4 mb-6">The Legacy Way</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">Heavy CapEx Required</h4>
                    <p className="text-gray-500 text-sm">6-10 months rent as deposit, plus ₹50k+ in furniture & setup.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">Long Lock-in Periods</h4>
                    <p className="text-gray-500 text-sm">Usually tied down for 11 to 36 months regardless of business success.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">Hidden Maintenance Fees</h4>
                    <p className="text-gray-500 text-sm">You are responsible for electricity, internet, cleaning, and repairs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">Slow Onboarding</h4>
                    <p className="text-gray-500 text-sm">Takes weeks to negotiate leases, get NOCs, and set up utilities.</p>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-20 bg-gray-50 max-w-3xl mx-auto px-6 text-center border-t border-gray-100 rounded-t-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-navy mb-6">Ready for the modern way to work?</h2>
          <p className="text-gray-500 mb-8">Join 500+ smart companies saving capital with WeeSpaces.</p>
          <Link href="/virtual-office/pricing" className="inline-block bg-accent text-navy font-bold py-4 px-8 rounded-full hover:bg-navy hover:text-white transition-colors">
            View Virtual Office Plans
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
