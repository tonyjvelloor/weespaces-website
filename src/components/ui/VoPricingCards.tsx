"use client";

import { CheckCircle } from 'lucide-react';

export default function VoPricingCards() {
  const scrollForm = () => {
    const element = document.getElementById('lead-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Kerala Card */}
      <div className="bg-white border border-gray-100 shadow-lg text-navy rounded-3xl p-8 flex flex-col relative transition-all hover:shadow-xl">
        <h3 className="text-2xl font-bold mb-2">KERALA <span className="text-sm font-normal text-gray-500 block mt-1">(Kochi · Trivandrum · Calicut)</span></h3>
        
        <div className="my-8">
          <span className="text-5xl font-bold">₹10,000</span>
          <span className="text-gray-400 font-medium ml-2">/ year</span>
          <p className="text-sm font-medium text-accent mt-4 bg-accent/10 py-2 px-4 rounded-lg inline-block">
            That's just ₹833/month — less than a cup of coffee a day for a fully legal business address
          </p>
        </div>

        <div className="flex-grow">
          <ul className="space-y-4 mb-8">
            {[
              "Premium Business Address",
              "Address for GST compliance",
              "Rental Agreement & NOC",
              "Mail & Package Handling",
              "Company Name Board at Entrance",
              "On-site GST Verification Support"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-gray-600 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 mt-auto">
          <button onClick={scrollForm} className="flex-1 py-4 rounded-full font-bold transition-colors bg-navy text-white hover:bg-accent hover:text-navy">
            Get Started
          </button>
          <a href="https://wa.me/919207189111" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 rounded-full font-bold transition-colors border-2 border-navy text-navy hover:bg-navy hover:text-white text-center flex items-center justify-center">
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Coimbatore Card */}
      <div className="bg-navy text-white shadow-2xl scale-105 border-2 border-accent z-10 rounded-3xl p-8 flex flex-col relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-navy text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
          Fast-Track Expansion
        </div>
        
        <h3 className="text-2xl font-bold mb-2">COIMBATORE <span className="text-sm font-normal text-white/70 block mt-1">(Tamil Nadu)</span></h3>
        
        <div className="my-8">
          <span className="text-5xl font-bold">₹16,000</span>
          <span className="text-white/50 font-medium ml-2">/ year</span>
          <p className="text-sm font-medium text-navy mt-4 bg-accent py-2 px-4 rounded-lg inline-block">
            That's just ₹1,333/month for a fully compliant Tamil Nadu address
          </p>
        </div>

        <div className="flex-grow">
          <ul className="space-y-4 mb-8">
            {[
              "Everything in Kerala plan",
              "Tamil Nadu GST Registration",
              "TN-specific documentation",
              "Manufacturing Hub Address"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-white/90 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 mt-auto">
          <button onClick={scrollForm} className="flex-1 py-4 rounded-full font-bold transition-colors bg-accent text-navy hover:bg-white">
            Get Started
          </button>
          <a href="https://wa.me/919207189111" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 rounded-full font-bold transition-colors border-2 border-accent text-accent hover:bg-accent hover:text-navy text-center flex items-center justify-center">
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
