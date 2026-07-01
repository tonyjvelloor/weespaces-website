"use client";

import React from 'react';
import { CheckCircle, Zap } from 'lucide-react';

export default function OfferPricingCards() {
  const scrollToForm = () => {
    const formElement = document.getElementById('offer-lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Kerala Tier */}
      <div className="bg-navy border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col hover:border-accent/50 transition-colors duration-300">
        <div className="absolute top-0 right-0 bg-white/5 text-white/40 text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
          Kerala Hubs
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">Kerala Premium</h3>
        <p className="text-white/60 mb-6 text-sm">Valid in Trivandrum, Ernakulam & Calicut</p>
        
        <div className="mb-6 flex items-baseline gap-2">
          <span className="text-4xl md:text-5xl font-bold text-white">₹7,999</span>
          <span className="text-white/50 text-sm font-medium">/ year</span>
        </div>
        
        <div className="text-sm text-red-400 line-through mb-8 font-medium">Regular Price: ₹12,000/yr</div>

        <ul className="space-y-4 mb-10 flex-grow">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-white/80">Premium Business Address in CBD</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-white/80">Valid for GST & MCA Registration</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-white/80">NOC, Utility Bill & Agreement in 24 hrs</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-white/80">Professional Mail Handling</span>
          </li>
        </ul>

        <button 
          onClick={scrollToForm}
          className="w-full bg-white text-navy hover:bg-gray-100 font-bold py-4 rounded-xl transition-all shadow-lg text-lg border border-transparent"
        >
          Claim Kerala Offer
        </button>
      </div>

      {/* Coimbatore Tier */}
      <div className="bg-navy-light border-2 border-accent rounded-3xl p-8 relative overflow-hidden flex flex-col shadow-[0_0_40px_rgba(255,107,53,0.15)] transform md:-translate-y-4">
        <div className="absolute top-0 right-0 left-0 bg-accent text-white text-xs font-bold py-1.5 text-center uppercase tracking-widest flex items-center justify-center gap-1">
          <Zap className="w-3 h-3" /> Most Popular
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 mt-4">Coimbatore Special</h3>
        <p className="text-white/60 mb-6 text-sm">Valid at Kaira Towers, Kalapatti</p>
        
        <div className="mb-6 flex items-baseline gap-2">
          <span className="text-4xl md:text-5xl font-bold text-white">₹14,500</span>
          <span className="text-white/50 text-sm font-medium">/ year</span>
        </div>
        
        <div className="text-sm text-red-400 line-through mb-8 font-medium">Regular Price: ₹18,000/yr</div>

        <ul className="space-y-4 mb-10 flex-grow">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-white/80">Prime IT Corridor Business Address</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-white/80">Valid for GST & MCA Registration</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-white/80">Fast-Track Documentation Approval</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-white/80">Dedicated Reception Services</span>
          </li>
        </ul>

        <button 
          onClick={scrollToForm}
          className="w-full bg-accent text-white hover:bg-accent-hover font-bold py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(255,107,53,0.4)] hover:shadow-[0_6px_25px_rgba(255,107,53,0.6)] text-lg border border-transparent flex items-center justify-center gap-2"
        >
          Claim Coimbatore Offer <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
