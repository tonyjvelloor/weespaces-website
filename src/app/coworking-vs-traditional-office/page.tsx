import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import SEOFAQ from '@/components/SEOFAQ';
import { comparisonFAQs } from '@/data/faqs';
import { CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Coworking Space vs Traditional Office: Which Is Better For Your Business?',
  description: 'Compare the costs, flexibility, and benefits of coworking spaces vs traditional office leases to decide the best workspace strategy for your team.',
  alternates: {
    canonical: '/coworking-vs-traditional-office',
  },
};

export default function CoworkingVsTraditionalPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-navy-dark border-b border-white/10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-accent">Coworking Space</span> vs Traditional Office
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Which is better for your business? Compare costs, flexibility, and operational overhead to make the right choice for your team's workspace.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up" className="mb-16 text-center">
          <h2 className="text-3xl font-bold">Head-to-Head Comparison</h2>
        </ScrollReveal>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/20 text-lg">
                <th className="py-4 px-6 font-bold w-1/3">Feature</th>
                <th className="py-4 px-6 font-bold text-accent w-1/3">Coworking & Managed Offices</th>
                <th className="py-4 px-6 font-bold text-white/50 w-1/3">Traditional Office Lease</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-4 px-6 font-medium">Upfront Capital (Capex)</td>
                <td className="py-4 px-6 text-white/80"><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" /> Zero setup costs. Fully furnished.</td>
                <td className="py-4 px-6 text-white/50"><XCircle className="inline w-5 h-5 text-red-400 mr-2" /> High. Requires interior fit-outs & furniture.</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-6 font-medium">Lock-in Period</td>
                <td className="py-4 px-6 text-white/80"><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" /> Flexible. Monthly or short-term agreements.</td>
                <td className="py-4 px-6 text-white/50"><XCircle className="inline w-5 h-5 text-red-400 mr-2" /> Rigid. Typically 3 to 5 years.</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-6 font-medium">Security Deposit</td>
                <td className="py-4 px-6 text-white/80"><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" /> 0 to 2 months.</td>
                <td className="py-4 px-6 text-white/50"><XCircle className="inline w-5 h-5 text-red-400 mr-2" /> 6 to 10 months.</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-6 font-medium">Facility Management</td>
                <td className="py-4 px-6 text-white/80"><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" /> Managed by provider (Cleaning, IT, Maintenance).</td>
                <td className="py-4 px-6 text-white/50"><XCircle className="inline w-5 h-5 text-red-400 mr-2" /> Managed by you. Requires dedicated staff.</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-6 font-medium">Scalability</td>
                <td className="py-4 px-6 text-white/80"><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" /> Easy. Add or remove desks instantly.</td>
                <td className="py-4 px-6 text-white/50"><XCircle className="inline w-5 h-5 text-red-400 mr-2" /> Hard. Stuck with unused space or forced to move.</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-6 font-medium">Amenities</td>
                <td className="py-4 px-6 text-white/80"><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" /> Included (Cafeteria, Lounges, Meeting Rooms).</td>
                <td className="py-4 px-6 text-white/50"><XCircle className="inline w-5 h-5 text-red-400 mr-2" /> Built and maintained at your own cost.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-light/10 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold mb-6">Ready to upgrade your workspace?</h2>
            <p className="text-white/70 mb-8">
              Skip the hassle of traditional leasing. Get a premium, ready-to-use office for your team today.
            </p>
            <Link href="/contact" className="bg-accent text-navy font-bold py-4 px-8 rounded-xl hover:bg-accent-hover transition-all inline-block shadow-[0_0_20px_rgba(242,156,31,0.3)]">
              Talk to Our Workspace Experts
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison FAQs */}
      <SEOFAQ 
        title="Coworking vs Traditional Office FAQs"
        subtitle="Common questions about choosing the right workspace."
        faqs={comparisonFAQs} 
      />
    </div>
  );
}
