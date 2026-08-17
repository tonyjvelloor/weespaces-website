import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import VirtualOfficeCalculator from '@/components/calculator/VirtualOfficeCalculator';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = constructMetadata({
  title: 'Virtual Office vs Physical Office Cost Calculator | WeeSpaces',
  description: 'Calculate and compare the true costs of renting a physical office versus a virtual office in Kochi, Coimbatore, Trivandrum, and Calicut. See your total yearly savings instantly.',
  canonicalPath: '/virtual-office/calculator',
});

export default function VirtualOfficeCalculatorPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-6 uppercase tracking-widest">
              Free Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
              Virtual Office Cost Calculator
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find out exactly how much you can save by switching from a traditional physical office to a premium virtual office in South India's top IT hubs.
            </p>
          </ScrollReveal>
        </div>

        {/* The Calculator */}
        <ScrollReveal delay={0.1}>
          <VirtualOfficeCalculator />
        </ScrollReveal>

        {/* SEO Copy / Context */}
        <div className="mt-24 max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-navy mb-6">Why Virtual Offices Save You Lakhs</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The traditional commercial real estate model is broken for modern startups and remote-first teams. When you rent a physical office space in cities like <strong>Kochi</strong> or <strong>Coimbatore</strong>, you aren't just paying for square footage.
              </p>
              <h3 className="text-xl font-bold text-navy mt-8 mb-4">The Hidden Costs of Physical Spaces</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Heavy Security Deposits:</strong> Most commercial landlords demand 6 to 10 months of rent upfront as a lock-in deposit, blocking crucial working capital.</li>
                <li><strong>Utility Overheads:</strong> Electricity, commercial internet lines, and HVAC maintenance run continuously regardless of how many employees are actually in the office.</li>
                <li><strong>Administrative Staffing:</strong> You need receptionists, security, and cleaning staff to maintain the facility.</li>
              </ul>
              <h3 className="text-xl font-bold text-navy mt-8 mb-4">The Virtual Office Advantage</h3>
              <p>
                A <strong>Virtual Office</strong> unbundles the commercial real estate package. It gives you the premium address, the government compliance (GST and MCA registration), and the professional front-desk mail handling, without forcing you to pay for unused physical space. 
              </p>
              <p>
                Our data shows that companies of 5-10 employees can save over ₹10 Lakhs annually by transitioning to a virtual office model while maintaining 100% operational compliance.
              </p>
            </div>
          </ScrollReveal>
        </div>
        
      </div>
    </div>
  );
}
