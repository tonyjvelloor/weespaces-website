import React from 'react';
import { Star, ShieldCheck, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function TrustLayer({ nearbyCompanies }: { nearbyCompanies?: string[] }) {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4 text-accent">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Trusted by 500+ Businesses</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">From early-stage startups to global enterprises, WeeSpaces is the preferred workspace partner across South India.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">100% Legal Compliance</h3>
              <p className="text-gray-500 text-sm">All our workspaces and virtual offices are fully compliant with MCA and GST standards.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">4.9/5 Google Rating</h3>
              <p className="text-gray-500 text-sm">Consistent top ratings across all our premium locations in Kerala and Tamil Nadu.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">Premium Infrastructure</h3>
              <p className="text-gray-500 text-sm">Enterprise-grade internet, ergonomic furniture, and secure access systems.</p>
            </div>
          </ScrollReveal>
        </div>

        {nearbyCompanies && nearbyCompanies.length > 0 && (
          <ScrollReveal direction="up">
            <div className="text-center">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Join an ecosystem of top companies</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {nearbyCompanies.map((company, idx) => (
                  <div key={idx} className="px-6 py-3 bg-white border border-gray-100 rounded-xl shadow-sm font-bold text-gray-600 grayscale hover:grayscale-0 transition-all cursor-default">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
