import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import { CheckCircle, XCircle, ArrowRight, ShieldCheck, Mail, FileText } from 'lucide-react';
import { Comparison } from '@/data/comparisons';

interface Props {
  comparison: Comparison;
}

export default function VirtualOfficeAlternativeTemplate({ comparison }: Props) {
  const opponent = comparison.opponentName || 'Alternative';

  return (
    <div className="bg-white">
      {/* 1. HERO - Virtual Office Focused */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-8 uppercase tracking-widest">
              Virtual Office Alternative
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {comparison.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {comparison.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. THE COMPLIANCE ADVANTAGE */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Businesses Switch to WeeSpaces</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">GST and MCA compliance requires more than just an address. It requires on-ground operational support and flawless documentation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                <div className="w-12 h-12 bg-accent/20 text-accent rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Guaranteed GST NOC</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Unlike global operators who struggle with localized Indian compliance, we provide exact, verified NOC formats that local GST officers approve without friction.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                <div className="w-12 h-12 bg-accent/20 text-accent rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Free Mail Handling</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Many providers charge high markup fees for scanning and forwarding your government notices. With WeeSpaces, standard mail logging and notification is included.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                <div className="w-12 h-12 bg-accent/20 text-accent rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Safe Physical Verification</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If a tax inspector visits, our professional community managers are trained to present your digital registry and agreements, ensuring you pass physical verification.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. COMPARISON TABLE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Feature-by-Feature Comparison</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-navy text-white">
                     <th className="p-6 text-lg font-bold w-1/3">Criteria</th>
                     <th className="p-6 text-lg font-bold w-1/3 border-l border-white/10 opacity-70">{opponent}</th>
                     <th className="p-6 text-lg font-bold w-1/3 bg-accent text-navy border-l border-white/10">WeeSpaces</th>
                   </tr>
                 </thead>
                 <tbody className="text-gray-700">
                   {comparison.points.map((point, idx) => (
                     <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                       <td className="p-6">
                         <span className="font-bold block text-navy">{point.feature}</span>
                       </td>
                       <td className="p-6 border-l border-gray-100">
                         <span className="font-bold block mb-1">{point.traditional.value}</span>
                         {point.traditional.description && <span className="text-sm text-gray-500 block">{point.traditional.description}</span>}
                       </td>
                       <td className="p-6 border-l border-gray-100 bg-accent/5">
                         <span className="font-bold text-navy block mb-1">{point.weespaces.value}</span>
                         {point.weespaces.description && <span className="text-sm text-gray-600 block">{point.weespaces.description}</span>}
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. PROS & CONS */}
      <section className="py-20 bg-gray-50">
         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            {/* Opponent Pros/Cons */}
            <ScrollReveal>
               <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-700 mb-6 border-b border-gray-200 pb-4">{opponent}</h3>
                  
                  <div className="mb-8">
                     <h4 className="flex items-center gap-2 font-bold text-green-700 mb-4"><CheckCircle className="w-5 h-5" /> What they do well</h4>
                     <ul className="space-y-3">
                        {comparison.prosCons.traditional.pros.map((pro, i) => (
                           <li key={i} className="flex items-start gap-2 text-gray-600"><span className="mt-1 text-green-500">•</span> {pro}</li>
                        ))}
                     </ul>
                  </div>

                  <div>
                     <h4 className="flex items-center gap-2 font-bold text-red-700 mb-4"><XCircle className="w-5 h-5" /> The Downsides</h4>
                     <ul className="space-y-3">
                        {comparison.prosCons.traditional.cons.map((con, i) => (
                           <li key={i} className="flex items-start gap-2 text-gray-600"><span className="mt-1 text-red-500">•</span> {con}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            </ScrollReveal>

            {/* WeeSpaces Pros/Cons */}
            <ScrollReveal direction="right">
               <div className="bg-navy rounded-2xl p-8 border border-navy h-full text-white shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-4 text-accent">WeeSpaces</h3>
                  
                  <div className="mb-8">
                     <h4 className="flex items-center gap-2 font-bold text-green-400 mb-4"><CheckCircle className="w-5 h-5" /> Why choose us</h4>
                     <ul className="space-y-3">
                        {comparison.prosCons.weespaces.pros.map((pro, i) => (
                           <li key={i} className="flex items-start gap-2 text-white/80"><span className="mt-1 text-green-400">•</span> {pro}</li>
                        ))}
                     </ul>
                  </div>

                  <div>
                     <h4 className="flex items-center gap-2 font-bold text-red-400 mb-4"><XCircle className="w-5 h-5" /> The Downsides</h4>
                     <ul className="space-y-3">
                        {comparison.prosCons.weespaces.cons.map((con, i) => (
                           <li key={i} className="flex items-start gap-2 text-white/80"><span className="mt-1 text-red-400">•</span> {con}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* 5. MIGRATION / HOW TO SWITCH */}
      <section className="py-16 bg-accent text-navy text-center">
         <div className="max-w-3xl mx-auto px-6">
            <ScrollReveal>
               <h2 className="text-3xl font-bold mb-4">Switching is easier than you think</h2>
               <p className="text-lg mb-8 opacity-80">Already have a GST registration with another provider? You can file an amendment to change your "Principal Place of Business" in a few clicks. We provide all the valid NOCs and agreements you need.</p>
               <div className="inline-flex items-center gap-4 text-sm font-bold bg-white/20 px-6 py-3 rounded-xl">
                 <CheckCircle className="w-5 h-5" /> Zero downtime for your business operations
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* 5.5 CITY HUB LINKS */}
      <section className="py-16 bg-white text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-navy mb-4">Explore WeeSpaces Locations</h2>
            <p className="text-gray-600 mb-8">
              We offer premium virtual office solutions across major IT hubs in South India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/virtual-office/kochi" className="px-8 py-3 bg-gray-50 border border-gray-200 hover:bg-navy hover:border-navy hover:text-white font-bold text-navy rounded-full transition-all shadow-sm">
                Kochi
              </Link>
              <Link href="/virtual-office/coimbatore" className="px-8 py-3 bg-gray-50 border border-gray-200 hover:bg-navy hover:border-navy hover:text-white font-bold text-navy rounded-full transition-all shadow-sm">
                Coimbatore
              </Link>
              <Link href="/virtual-office/trivandrum" className="px-8 py-3 bg-gray-50 border border-gray-200 hover:bg-navy hover:border-navy hover:text-white font-bold text-navy rounded-full transition-all shadow-sm">
                Trivandrum
              </Link>
              <Link href="/virtual-office/calicut" className="px-8 py-3 bg-gray-50 border border-gray-200 hover:bg-navy hover:border-navy hover:text-white font-bold text-navy rounded-full transition-all shadow-sm">
                Calicut
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. FAQs */}
      {comparison.faqs.length > 0 && (
         <div className="bg-white">
            <SEOFAQ 
               title={`Frequently Asked Questions`}
               subtitle={`Common questions about switching to WeeSpaces.`}
               faqs={comparison.faqs}
               textColor="text-navy"
            />
         </div>
      )}

      {/* 7. CTA / LEAD FORM */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
         <div className="max-w-4xl mx-auto px-6">
            <div className="bg-navy rounded-3xl p-10 md:p-14 shadow-2xl text-white text-center relative overflow-hidden">
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[50px] pointer-events-none"></div>
               <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Get Your Valid GST Address Today</h2>
               <p className="text-white/70 mb-10 text-lg relative z-10 max-w-2xl mx-auto">
                 Don't risk your compliance with aggregators or inflexible corporate landlords. Get your NOC and agreement within 48 hours.
               </p>
               <div className="text-left bg-white rounded-2xl p-6 md:p-8 relative z-10 text-navy shadow-xl">
                  <LeadForm source={`Virtual Office Alternative - ${comparison.title}`} />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
