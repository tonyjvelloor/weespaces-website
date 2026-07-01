"use client";

import React from 'react';
import { IndianRupee, TrendingDown, ArrowRight } from 'lucide-react';

export default function ROICalculator() {
  const scrollToForm = () => {
    const formElement = document.getElementById('offer-lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-navy rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden shadow-2xl max-w-5xl mx-auto">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="text-center mb-10 relative z-10">
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">How Much Do You Actually Save?</h3>
        <p className="text-white/60">See the financial advantage of starting your business with a Virtual Office.</p>
      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center relative z-10 mb-10">
        
        {/* Traditional Office */}
        <div className="bg-[#050B14] p-6 rounded-2xl border border-white/5 opacity-70">
          <div className="text-sm uppercase tracking-widest text-white/40 font-bold mb-4">Traditional Office Rent</div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-white">₹30,000</span>
            <span className="text-white/50 text-sm">/ month</span>
          </div>
          <p className="text-xs text-white/40 mb-6">+ Deposit, Furniture & Electricity</p>
          <div className="pt-4 border-t border-white/10">
            <div className="text-sm text-white/50 mb-1">Annual Cost</div>
            <div className="text-xl font-bold text-white/70">₹3,60,000+</div>
          </div>
        </div>

        {/* VS */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 font-bold italic">
            VS
          </div>
        </div>

        {/* Virtual Office */}
        <div className="bg-gradient-to-br from-navy-light to-navy p-6 rounded-2xl border-2 border-accent relative shadow-[0_0_30px_rgba(255,107,53,0.15)] transform md:scale-105">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
            Monsoon Offer
          </div>
          <div className="text-sm uppercase tracking-widest text-white/70 font-bold mb-4">WeeSpaces Virtual Office</div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold text-white">₹7,999</span>
            <span className="text-white/70 text-sm">/ year</span>
          </div>
          <p className="text-xs text-accent/80 mb-6">Zero Deposit. Zero Maintenance.</p>
          <div className="pt-4 border-t border-accent/20">
            <div className="text-sm text-white/70 mb-1">Total Annual Cost</div>
            <div className="text-2xl font-bold text-accent drop-shadow-[0_0_10px_rgba(255,107,53,0.5)]">₹7,999 Only</div>
          </div>
        </div>
      </div>

      <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 text-center relative z-10 mb-8">
        <TrendingDown className="w-8 h-8 text-accent mx-auto mb-3" />
        <p className="text-lg text-white/80">
          You save approximately <span className="font-bold text-white text-xl">₹3.5 Lakhs annually</span>.
        </p>
        <p className="text-sm text-white/50 mt-2">Invest that capital into growing your business, not paying rent.</p>
      </div>

      <div className="flex justify-center relative z-10">
        <button 
          onClick={scrollToForm}
          className="bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded-xl transition-all shadow-[0_4px_20px_rgba(255,107,53,0.4)] flex items-center gap-2"
        >
          Start Saving Today <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
