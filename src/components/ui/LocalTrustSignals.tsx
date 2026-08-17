import React from 'react';
import { CityData } from '@/data/locations';
import ScrollReveal from './ScrollReveal';
import { Star, CheckCircle2, TrendingUp, Quote } from 'lucide-react';

export default function LocalTrustSignals({ cityData }: { cityData: CityData }) {
  if (!cityData.caseStudy) return null;

  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Businesses in {cityData.name}</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join hundreds of successful companies that have established their base at WeeSpaces.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Case Study Card */}
          <div className="md:col-span-7 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 relative">
            <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/20" />
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-accent">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-white/60 text-sm font-medium">Verified Client Success</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{cityData.caseStudy.client}</h3>
            <p className="text-xl text-white/90 leading-relaxed mb-8 italic">
              "{cityData.caseStudy.outcome}"
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              {cityData.caseStudy.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 font-medium">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="md:col-span-5 space-y-4">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-white rounded-2xl p-6 flex items-center gap-4 text-navy">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">100% Compliance Guarantee</h4>
                  <p className="text-gray-500 text-sm">All documents vetted for state regulations.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-white rounded-2xl p-6 flex items-center gap-4 text-navy">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Scale Without Friction</h4>
                  <p className="text-gray-500 text-sm">Zero cap-ex setup and flexible terms.</p>
                </div>
              </div>
            </ScrollReveal>
            
            {cityData.occupancy && (
              <ScrollReveal direction="right" delay={0.3}>
                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center">
                  <div className="text-accent font-bold text-xl mb-1">{cityData.occupancy}</div>
                  <p className="text-white/70 text-sm">Join a vibrant community of professionals.</p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
