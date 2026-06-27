import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import ScrollReveal from '@/components/ui/ScrollReveal';
import VoPricingCards from '@/components/ui/VoPricingCards';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = constructMetadata({
  title: "Virtual Office Pricing in Kerala & TN | WeeSpaces",
  description: "Transparent virtual office pricing for GST and Company registration. No hidden fees. Compare our Starter, Professional, and Premium plans.",
  canonicalPath: "/virtual-office/pricing"
});

export default function VirtualOfficePricingPage() {
  return (
    <div className="bg-white pt-24">
      {/* 1. HERO */}
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-6 uppercase tracking-widest">
              Pricing Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Transparent <span className="text-accent">Virtual Office Pricing</span>
            </h1>
            <p className="text-xl text-white/70">
              No hidden fees. No surprises. Just clear, upfront pricing designed to help your business scale efficiently.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. PRICING CARDS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <VoPricingCards />
        </ScrollReveal>
      </section>

      {/* 3. COST COMPARISON */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center text-navy mb-12">The Cost of a Virtual Office vs Physical Office</h2>
            <p className="text-gray-600 mb-8 text-center text-lg">
              When starting out, preserving capital is critical. Here is a breakdown of why a virtual office makes financial sense.
            </p>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-navy text-white">
                   <th className="p-6 text-lg font-bold w-1/3">Expense</th>
                   <th className="p-6 text-lg font-bold w-1/3 border-l border-white/10 opacity-70">Physical Office (Avg)</th>
                   <th className="p-6 text-lg font-bold w-1/3 bg-accent text-navy border-l border-white/10">Virtual Office</th>
                 </tr>
               </thead>
               <tbody className="text-gray-700">
                 <tr className="border-b border-gray-100">
                   <td className="p-6 font-bold">Security Deposit</td>
                   <td className="p-6 border-l border-gray-100">₹50,000 - ₹1,00,000</td>
                   <td className="p-6 border-l border-gray-100 font-bold text-navy bg-accent/5">₹0</td>
                 </tr>
                 <tr className="border-b border-gray-100">
                   <td className="p-6 font-bold">Monthly Rent</td>
                   <td className="p-6 border-l border-gray-100">₹15,000 - ₹40,000</td>
                   <td className="p-6 border-l border-gray-100 font-bold text-navy bg-accent/5">₹1,500 - ₹4,000</td>
                 </tr>
                 <tr className="border-b border-gray-100">
                   <td className="p-6 font-bold">Maintenance & Utilities</td>
                   <td className="p-6 border-l border-gray-100">₹3,000 - ₹5,000</td>
                   <td className="p-6 border-l border-gray-100 font-bold text-navy bg-accent/5">Included</td>
                 </tr>
                 <tr className="border-b border-gray-100">
                   <td className="p-6 font-bold">Interior / Furniture</td>
                   <td className="p-6 border-l border-gray-100">₹50,000+</td>
                   <td className="p-6 border-l border-gray-100 font-bold text-navy bg-accent/5">Not Required</td>
                 </tr>
                 <tr>
                   <td className="p-6 font-bold text-navy">Total Year 1 Cost</td>
                   <td className="p-6 border-l border-gray-100 text-red-500 font-bold">₹2,86,000+</td>
                   <td className="p-6 border-l border-gray-100 font-black text-navy bg-accent/10">₹18,000+</td>
                 </tr>
               </tbody>
             </table>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* 4. CTA */}
      <section className="py-20 max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-navy mb-6">Need a custom enterprise plan?</h2>
          <LeadForm source="Virtual Office Pricing Page" hidePricing />
        </ScrollReveal>
      </section>
    </div>
  );
}
