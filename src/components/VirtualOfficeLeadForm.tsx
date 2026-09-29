"use client";

import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export default function VirtualOfficeLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'VO Offer 8999 - Direct Ad',
          requirement: 'Virtual Office (Ad Campaign)',
          teamSize: 'N/A' // Not relevant for VO
        })
      });
      
      // Fire tracking pixel
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'form',
          event_label: 'vo_8999_ad'
        });
      }
      
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      // Fallback to success visually even on silent error so user isn't stuck
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-2xl text-center border-t-4 border-green-500 animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-black text-navy mb-4">You're on the list!</h3>
        <p className="text-gray-600 mb-6">
          Your ₹8,999/yr rate has been locked in. Our compliance team will call you within 15 minutes to initiate your KYC.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <ShieldCheck className="w-5 h-5 text-accent" /> 100% Secure Process
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100 relative">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 whitespace-nowrap">
        <span className="animate-pulse w-2 h-2 bg-white rounded-full"></span> Only 4 slots left today
      </div>

      <div className="text-center mb-6 mt-4">
        <h3 className="text-2xl font-black text-navy leading-tight">Claim Your Address</h3>
        <p className="text-gray-500 text-sm mt-2">Get your NOC & Rent Agreement in 48 hrs</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Full Name</label>
          <input 
            type="text" 
            required
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            className="w-full bg-gray-50 border border-gray-200 text-navy px-4 py-3 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-medium"
            placeholder="e.g. John Doe"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phone Number</label>
            <input 
              type="tel" 
              required
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 text-navy px-4 py-3 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-medium"
              placeholder="+91"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 text-navy px-4 py-3 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-medium"
              placeholder="name@company.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Select Location</label>
          <div className="relative">
            <select 
              required
              value={formData.location}
              onChange={e => setFormData({...formData, location: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 text-navy px-4 py-3 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-medium appearance-none pl-10"
            >
              <option value="" disabled>Choose a premium address</option>
              <option value="Kochi">Kochi (Ernakulam / Infopark)</option>
              <option value="Trivandrum">Trivandrum (Near Technopark)</option>
              <option value="Calicut">Kozhikode (HiLite Business Park)</option>
            </select>
            <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <p className="text-[11px] text-red-500 mt-1.5 font-medium">*Coimbatore location is currently sold out.</p>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-navy px-5 py-4 rounded-xl font-black transition-all flex items-center justify-center gap-2 group shadow-xl hover:shadow-accent/40 mt-2 disabled:opacity-70 text-lg"
        >
          {isSubmitting ? 'Processing...' : 'Lock in ₹8,999/yr Rate'}
          {!isSubmitting && <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
        </button>
        
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-2">
          <ShieldCheck className="w-4 h-4 text-green-500" />
          No credit card required today
        </div>
      </form>
    </div>
  );
}
