import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { CheckCircle, ArrowRight, ShieldCheck, Building, Users } from 'lucide-react';

export default function VoComplianceLayer() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-accent bg-accent/10 px-4 py-2 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4" /> Compliance Authority
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Clear Boundaries for Corporate Compliance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            WeeSpaces provides the premium infrastructure and documentation. Your CA or legal team handles the government filings. 
            This strict separation ensures 100% compliance with local GST and MCA regulations.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* What We Provide */}
          <ScrollReveal>
            <div className="bg-navy rounded-3xl p-8 md:p-10 text-white h-full shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                <Building className="w-8 h-8 text-accent" />
                What WeeSpaces Provides
              </h3>
              
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Premium Commercial Address</h4>
                    <p className="text-white/70 text-sm mt-1">A recognized corporate location for your official MCA and GST registrations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Legal Rental Agreement</h4>
                    <p className="text-white/70 text-sm mt-1">A stamped, legally binding agreement proving your right to use the premises.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">NOC & Utility Documents</h4>
                    <p className="text-white/70 text-sm mt-1">No Objection Certificate and utility bills required by GST authorities.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Inspection Support & Signage</h4>
                    <p className="text-white/70 text-sm mt-1">On-site support during physical GST inspections and proper company name display.</p>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* What Customer Does */}
          <ScrollReveal direction="right">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 h-full">
              <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
                <Users className="w-8 h-8 text-navy" />
                What You (or Your CA) Does
              </h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <ArrowRight className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy text-lg">GST Application Filing</h4>
                    <p className="text-gray-600 text-sm mt-1">Submitting the actual application on the government portal.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <ArrowRight className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy text-lg">MCA Incorporation Filing</h4>
                    <p className="text-gray-600 text-sm mt-1">Registering your Pvt Ltd, LLP, or OPC with the Ministry of Corporate Affairs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <ArrowRight className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy text-lg">Government Communication</h4>
                    <p className="text-gray-600 text-sm mt-1">Responding to notices, show-cause queries, or clarification requests.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <ArrowRight className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy text-lg">Ongoing Regulatory Compliance</h4>
                    <p className="text-gray-600 text-sm mt-1">Monthly returns, annual filings, and maintaining statutory registers.</p>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
