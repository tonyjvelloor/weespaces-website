'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Building2, CheckCircle2, MessageCircle } from 'lucide-react';
import { fireGoogleAdsConversion } from '@/lib/tracking';

export default function PartnerLeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Kochi / Ernakulam',
    capacity: '30–50 Seats (1,500–3,000 sq.ft)',
    propertyStatus: 'Fully Furnished & Ready',
    tier: 'Not Sure — Guide Me (60% to 70% Share)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid'];
    const params = new URLSearchParams(window.location.search);
    KEYS.forEach((k) => {
      const val = params.get(k);
      if (val) sessionStorage.setItem(k, val);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile / WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const attribution: Record<string, string> = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'].forEach((k) => {
        const val = sessionStorage.getItem(k);
        if (val) attribution[k] = val;
      });

      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: `+91${cleanPhone.slice(-10)}`,
          email: formData.email,
          location: formData.city,
          teamSize: formData.capacity,
          budget: `${formData.propertyStatus} | Model: ${formData.tier}`,
          requirement: 'Commercial Property Revenue-Share Partnership (JV / Operator Model)',
          source: `Property Partner LP (${attribution.utm_source || 'Direct/Meta'})`,
          timeline: formData.propertyStatus,
          ...attribution,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');

      setSubmitted(true);

      // Fire Google Ads & Meta Pixel Lead Conversions
      fireGoogleAdsConversion({
        eventLabel: 'Property Partner Enquiry Submitted',
        source: 'partner_landing_page',
        location: formData.city,
        capacity: formData.capacity,
      });

      if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Property Partnership Enquiry',
          content_category: formData.city,
        });
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please use the WhatsApp button below to connect instantly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const waMessage = encodeURIComponent(
    `Hi WeeSpaces Expansion Team,\n\nI own a commercial property in ${formData.city} (${formData.capacity}, ${formData.propertyStatus}) and would like to discuss the Coworking Revenue-Sharing Partnership.\n\nName: ${formData.name || 'Property Owner'}`
  );

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-black text-navy mb-2">Partnership Enquiry Received!</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Thank you, <strong className="text-navy">{formData.name}</strong>. Our Expansion &amp; Commercial Partnerships Director will review your <strong className="text-navy">{formData.city}</strong> property details and call you within 24 hours with a tailored revenue-share projection.
        </p>
        <div className="bg-slate-50 rounded-2xl p-4 text-left text-xs text-gray-600 space-y-1.5 mb-6 border border-slate-200">
          <div><strong className="text-navy">Location:</strong> {formData.city}</div>
          <div><strong className="text-navy">Property Capacity:</strong> {formData.capacity}</div>
          <div><strong className="text-navy">Status:</strong> {formData.propertyStatus}</div>
        </div>
        <a
          href={`https://wa.me/919207189111?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg"
        >
          <MessageCircle className="w-5 h-5" /> Share Property Photos on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div id="partner-form" className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy via-accent to-amber-500" />

      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
          <Building2 className="w-3.5 h-3.5" /> Free Property Feasibility Study
        </div>
        <h2 className="text-2xl font-black text-navy leading-tight">
          Get Your Custom Revenue Proposal
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Share your property details to receive a tailored 3-year financial projection &amp; term sheet.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g., Rajesh Nair"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 text-navy font-medium text-sm focus:bg-white focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
              Phone / WhatsApp *
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">+91</span>
              <input
                type="tel"
                required
                placeholder="98470 00000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-12 pr-3.5 py-3 rounded-xl border border-gray-200 bg-slate-50 text-navy font-medium text-sm focus:bg-white focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
              City in Kerala *
            </label>
            <select
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-slate-50 text-navy font-medium text-sm focus:bg-white focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all"
            >
              <option value="Kochi / Ernakulam">Kochi / Ernakulam</option>
              <option value="Trivandrum">Trivandrum</option>
              <option value="Calicut / Kozhikode">Calicut / Kozhikode</option>
              <option value="Thrissur">Thrissur</option>
              <option value="Kottayam">Kottayam</option>
              <option value="Kannur">Kannur</option>
              <option value="Kollam">Kollam</option>
              <option value="Palakkad">Palakkad</option>
              <option value="Coimbatore / TN">Coimbatore / Tamil Nadu</option>
              <option value="Other Kerala City">Other Kerala City</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
              Space Capacity
            </label>
            <select
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
              className="w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-slate-50 text-navy font-medium text-sm focus:bg-white focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all"
            >
              <option value="20–30 Seats (1,000–1,500 sq.ft)">20–30 Seats (1,000–1,500 sq.ft)</option>
              <option value="30–50 Seats (1,500–3,000 sq.ft)">30–50 Seats (1,500–3,000 sq.ft)</option>
              <option value="50–100 Seats (3,000–6,000 sq.ft)">50–100 Seats (3,000–6,000 sq.ft)</option>
              <option value="100+ Seats (6,000+ sq.ft)">100+ Seats (6,000+ sq.ft)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
              Property Condition
            </label>
            <select
              value={formData.propertyStatus}
              onChange={(e) => setFormData({ ...formData, propertyStatus: e.target.value })}
              className="w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-slate-50 text-navy font-medium text-sm focus:bg-white focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all"
            >
              <option value="Fully Furnished & Ready">Fully Furnished &amp; Ready</option>
              <option value="Warm Shell / Semi-Furnished">Warm Shell / Semi-Furnished</option>
              <option value="Bare Shell Commercial Floor">Bare Shell Commercial Floor</option>
              <option value="Existing Coworking / Office">Existing Coworking / Office</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
            Email Address (Optional — for PDF Proposal)
          </label>
          <input
            type="email"
            placeholder="owner@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 text-navy font-medium text-sm focus:bg-white focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all"
          />
        </div>

        {error && (
          <p className="text-red-600 text-xs font-semibold bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent-light text-navy font-black py-4 px-6 rounded-xl text-base shadow-lg shadow-accent/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? (
            'Submitting Enquiry...'
          ) : (
            <>
              Request Partnership Proposal <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-gray-500 font-medium">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Confidential</span>
          <span>•</span>
          <span>Zero Franchise Fee</span>
          <span>•</span>
          <span>Direct Operator</span>
        </div>
      </form>
    </div>
  );
}
