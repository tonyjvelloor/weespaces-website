"use client";

import React, { useState } from 'react';

export default function LeadCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would integrate with your API or CRM
      console.log("Lead captured:", email);
    }
  };

  if (submitted) {
    return (
      <div className="bg-surface-navy-muted text-on-primary p-space-md md:p-space-xl text-center rounded-2xl mx-gutter-mobile lg:mx-auto max-w-[1280px] my-space-2xl border border-secondary/20">
        <h3 className="font-headline-md text-headline-md font-bold mb-2">Check your inbox!</h3>
        <p className="font-body-md text-body-md text-on-primary-fixed-variant">
          We've sent the 2026 Office Cost Report to your email.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface-navy text-on-primary px-space-xl py-space-xl md:py-space-2xl text-center rounded-2xl mx-gutter-mobile lg:mx-auto max-w-[1280px] my-space-3xl shadow-xl relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="px-space-sm py-space-2xs rounded-full bg-surface-container-high/20 text-secondary font-label-caps text-label-caps uppercase tracking-wider font-bold inline-block mb-space-sm">
          Free Resource
        </span>
        <h2 className="font-headline-xl text-headline-xl font-bold mb-space-md">
          Get the 2026 Kerala Office Cost Report
        </h2>
        <p className="font-body-lg text-body-lg text-on-primary/80 mb-space-xl">
          See exactly how much you can save compared to a traditional lease. Access real data on fit-out costs, deposits, and monthly overheads in Kochi, Trivandrum, and Calicut.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-space-sm max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your work email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-space-md py-space-md rounded-xl bg-surface-card text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder:text-on-surface-variant/50"
            required
          />
          <button 
            type="submit"
            className="px-space-lg py-space-md bg-secondary text-on-secondary font-bold rounded-xl hover:bg-accent-orange-hover transition-colors whitespace-nowrap"
          >
            Send Me the Report
          </button>
        </form>
      </div>
    </div>
  );
}
