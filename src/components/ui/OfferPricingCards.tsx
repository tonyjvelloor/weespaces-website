"use client";

import React from 'react';
import { CheckCircle, Zap } from 'lucide-react';

export default function OfferPricingCards({ city }: { city?: string }) {
  const cityName = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'Kerala';
  const displayCity = city ? cityName : 'Kerala Hubs';
  const subtitle = city ? `Valid in our ${cityName} Hub` : 'Valid in Trivandrum, Ernakulam & Calicut';
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
          {displayCity}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">{cityName} Premium</h3>
        <p className="text-white/60 mb-8 text-sm">{subtitle}</p>
        
        <div className="bg-black/30 rounded-xl p-5 mb-8 border border-white/5">
          <div className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">What's Included</div>
          
          <ul className="space-y-4">
            <li className="flex items-start justify-between gap-3 border-b border-white/5 pb-3">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/90">Professional Business Address</span>
              </div>
              <span className="text-white/50 text-sm whitespace-nowrap">Worth ₹8,000/yr</span>
            </li>
            <li className="flex items-start justify-between gap-3 border-b border-white/5 pb-3">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/90">GST Registration Support</span>
              </div>
              <span className="text-white/50 text-sm whitespace-nowrap">Worth ₹3,000</span>
            </li>
            <li className="flex items-start justify-between gap-3 border-b border-white/5 pb-3">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/90">Mail Handling Services</span>
              </div>
              <span className="text-white/50 text-sm whitespace-nowrap">Worth ₹2,500</span>
            </li>
            <li className="flex items-start justify-between gap-3 border-b border-white/5 pb-3">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/90">Compliance Documentation</span>
              </div>
              <span className="text-white/50 text-sm whitespace-nowrap">Worth ₹2,000</span>
            </li>
            <li className="flex items-start justify-between gap-3">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/90">Reception Support</span>
              </div>
              <span className="text-white/50 text-sm whitespace-nowrap">Worth ₹2,500</span>
            </li>
          </ul>
        </div>
        
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="text-sm text-white/50 line-through mb-1 font-medium">Total Value: ₹18,000+</div>
            <div className="text-sm uppercase tracking-widest text-accent font-bold">Today's Price</div>
          </div>
          <div className="text-right">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-bold text-white">₹7,999</span>
              <span className="text-white/50 text-sm font-medium">/ year</span>
            </div>
          </div>
        </div>

        <button 
          onClick={scrollToForm}
          className="w-full bg-white text-navy hover:bg-gray-100 font-bold py-4 rounded-xl transition-all shadow-lg text-lg border border-transparent mt-auto"
        >
          Claim {cityName} Offer
        </button>
      </div>

      {/* Coimbatore Tier */}
      <div className="bg-navy-light border-2 border-accent rounded-3xl p-8 relative overflow-hidden flex flex-col shadow-[0_0_40px_rgba(255,107,53,0.15)] transform md:-translate-y-4 text-center">
        <div className="absolute top-0 right-0 left-0 bg-accent text-white text-xs font-bold py-1.5 text-center uppercase tracking-widest flex items-center justify-center gap-1">
          <Zap className="w-3 h-3" /> Limited-Time Inaugural Offer
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 mt-4">Special Inaugural Offer</h3>
        
        <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2 mt-4">
          Starting from ₹6,999<span className="text-xl text-white/50 font-medium">/Seat*</span>
        </div>
        
        <div className="bg-black/30 rounded-xl p-5 mb-6 mt-6 border border-white/5 text-left">
          <ul className="space-y-3">
            <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /><span className="text-white/90">Dedicated Desks</span></li>
            <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /><span className="text-white/90">Private Cabins</span></li>
            <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /><span className="text-white/90">Private Offices</span></li>
            <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /><span className="text-white/90">Meeting Rooms</span></li>
            <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /><span className="text-white/90">Virtual Office</span></li>
          </ul>
        </div>
        
        <div className="bg-white/5 inline-block px-4 py-2 rounded-lg mb-6 border border-white/10 mx-auto">
          <span className="text-white/80 font-medium text-sm">✨ Bulk Booking Discounts Available</span>
        </div>

        <button 
          onClick={scrollToForm}
          className="w-full bg-accent text-white hover:bg-accent-hover font-bold py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(255,107,53,0.4)] hover:shadow-[0_6px_25px_rgba(255,107,53,0.6)] text-lg border border-transparent flex items-center justify-center mt-auto"
        >
          Book a Free Site Visit
        </button>

        <p className="text-[10px] text-white/40 mt-4 leading-relaxed">
          *Pricing varies by workspace type, floor, and booking requirements. Limited premium cabins remaining.
        </p>
      </div>
    </div>
  );
}
