"use client";

import React, { useState } from 'react';
import { Send, Building2, CheckCircle2 } from 'lucide-react';
import { track } from '@/lib/tracking';

interface EnterpriseConsultationFormProps {
  city?: string;
}

export default function EnterpriseConsultationForm({ city }: EnterpriseConsultationFormProps) {
  const isCoimbatore = city?.toLowerCase() === 'coimbatore';

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    teamSize: isCoimbatore ? '100-250' : '50-100',
    preferredCity: city || 'Kochi',
    timeline: 'Immediate'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const phoneRegex = /^[0-9]{10}$/;
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    
    if (!phoneRegex.test(cleanPhone)) {
      setError('Please enter a valid 10-digit mobile number.');
      setIsSubmitting(false);
      return;
    }

    try {
      const pageUrl = typeof window !== 'undefined' ? window.location.href : 'Unknown URL';
      const source = `Enterprise Consultation - ${formData.companyName} - URL: ${pageUrl}`;
      const phoneRaw = formData.phone;
      const phone = phoneRaw ? '+91' + phoneRaw : undefined;

      const attribution = track.getAttributionPayload ? track.getAttributionPayload({}) : {};

      const response = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: formData.contactPerson,
          email: formData.email,
          phone, 
          source, 
          location: formData.preferredCity,
          requirement: 'Enterprise / Managed Office',
          teamSize: formData.teamSize,
          timeline: formData.timeline,
          pageUrl,
          attribution
        })
      });

      if (!response.ok) throw new Error('Failed to submit lead');
      
      track.form('submit', { form_name: 'enterprise_consultation', company_name: formData.companyName }, { 
        name: formData.contactPerson, 
        email: formData.email,
        phone, 
        teamSize: formData.teamSize 
      });
      
      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-navy p-8 rounded-3xl border border-white/10 text-center flex flex-col items-center justify-center min-h-[400px]">
        <CheckCircle2 className="w-16 h-16 text-[#25D366] mb-6" />
        <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
        <p className="text-white/70 max-w-md mx-auto">
          Thank you for reaching out. A dedicated Enterprise Solutions Specialist will contact you shortly to discuss your requirements.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-navy p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center border border-accent/30 shrink-0">
          <Building2 className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Book a Consultation</h3>
          <p className="text-white/60 text-sm">Tell us about your team's needs.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">Company Name</label>
            <input 
              type="text" 
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              placeholder="e.g. Acme Corp"
              className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white focus:bg-white/10 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">Contact Person</label>
            <input 
              type="text" 
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleInputChange}
              required
              placeholder="Your full name"
              className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white focus:bg-white/10 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all outline-none"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">Work Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="name@company.com"
              className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white focus:bg-white/10 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">Phone Number</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 font-medium">+91</span>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="10-digit mobile number"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white focus:bg-white/10 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all outline-none"
              />
            </div>
            {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">Team Size</label>
            <select 
              name="teamSize"
              value={formData.teamSize}
              onChange={handleInputChange}
              className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#0c224f] text-white focus:bg-white/10 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all outline-none appearance-none"
            >
              <option value="10-50">10 - 50 Seats</option>
              <option value="50-100">50 - 100 Seats</option>
              <option value="100-250">100 - 250 Seats</option>
              <option value="250-500">250 - 500 Seats</option>
              <option value="500+">500+ Seats</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">Preferred City</label>
            <select 
              name="preferredCity"
              value={formData.preferredCity}
              onChange={handleInputChange}
              className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#0c224f] text-white focus:bg-white/10 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all outline-none appearance-none"
            >
              <option value="Kochi">Kochi</option>
              <option value="Trivandrum">Trivandrum</option>
              <option value="Calicut">Calicut</option>
              <option value="Coimbatore">Coimbatore</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">Timeline</label>
            <select 
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#0c224f] text-white focus:bg-white/10 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all outline-none appearance-none"
            >
              <option value="Immediate">Immediate</option>
              <option value="1-3 Months">1-3 Months</option>
              <option value="3-6 Months">3-6 Months</option>
              <option value="6+ Months">6+ Months</option>
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent-hover text-navy font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-4 shadow-[0_0_20px_rgba(242,156,31,0.2)] hover:shadow-[0_0_30px_rgba(242,156,31,0.4)] disabled:opacity-70 disabled:cursor-not-allowed text-lg"
        >
          {isSubmitting ? (
            <div className="w-6 h-6 border-2 border-navy/30 border-t-navy rounded-full animate-spin"></div>
          ) : (
            <>
              Book Consultation <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
