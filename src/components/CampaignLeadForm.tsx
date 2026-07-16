"use client";

import React, { useState } from 'react';
import { Loader2, Send, CheckCircle2, Shield } from 'lucide-react';
import { track } from '@/lib/tracking';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function CampaignLeadForm({ branch = "Campaign Default", defaultCity = "Kochi" }: { branch?: string, defaultCity?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: defaultCity,
    businessType: 'Private Limited (Pvt Ltd)'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    
    if (!phoneRegex.test(cleanPhone)) {
      setError('Please enter a valid 10-digit mobile number.');
      setIsSubmitting(false);
      return;
    }

    try {
      const pageUrl = typeof window !== 'undefined' ? window.location.href : 'Unknown URL';
      const source = `${branch} (City: ${formData.city}, Business Type: ${formData.businessType}) - URL: ${pageUrl}`;
      const phoneRaw = formData.phone;
      const phone = phoneRaw ? '+91' + phoneRaw : undefined;

      const response = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: formData.name, 
          phone, 
          source, 
          location: formData.city,
          requirement: 'Virtual Office (Campaign)',
          pageUrl 
        })
      });

      if (!response.ok) throw new Error('Failed to submit lead');
      
      console.log('Lead Captured:', { ...formData, branch, source });
      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-500/10 border border-green-500/30 p-8 rounded-2xl text-center flex flex-col items-center justify-center min-h-[350px]">
        <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Offer Claimed!</h3>
        <p className="text-white/70 text-lg">
          Thanks, {formData.name}. Our workspace advisor will call you within 10 minutes to process your documents.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-3 rounded-lg text-sm mb-2">
          {error}
        </div>
      )}

      <div>
        <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-2">Full Name</label>
        <input 
          type="text" 
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-2">Mobile Number</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">+91</span>
          <input 
            type="tel" 
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            placeholder="10-digit number"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-2">Preferred City</label>
          <select 
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
          >
            <option value="Kochi">Kochi</option>
            <option value="Trivandrum">Trivandrum</option>
            <option value="Calicut">Calicut</option>
            <option value="Coimbatore">Coimbatore</option>
          </select>
        </div>
        <div>
          <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-2">Business Type</label>
          <select 
            value={formData.businessType}
            onChange={(e) => setFormData({...formData, businessType: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
          >
            <option value="Private Limited (Pvt Ltd)">Private Limited</option>
            <option value="LLP">LLP</option>
            <option value="Proprietorship">Proprietorship</option>
            <option value="Freelancer/Individual">Freelancer</option>
            <option value="Partnership">Partnership</option>
          </select>
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl mt-2 flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,107,53,0.3)] disabled:opacity-70"
      >
        {isSubmitting ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
        ) : (
          <><Send className="w-5 h-5" /> Claim Monsoon Offer Now</>
        )}
      </button>

      <WhatsAppButton 
        className="w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-bold py-3 rounded-xl mt-1 flex items-center justify-center gap-2 transition-all text-sm"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        Need Help? Chat on WhatsApp
      </WhatsAppButton>
      
      <p className="text-xs text-center text-white/40 mt-3 flex items-center justify-center gap-1">
        <Shield className="w-3 h-3" /> We hate spam. Your information is 100% secure.
      </p>
    </form>
  );
}
