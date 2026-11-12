'use client';

import { useState, useEffect } from "react";
import { fireGoogleAdsConversion } from "@/lib/tracking";

export default function QuickFinder() {
  const [step, setStep] = useState(1);
  const [city, setCity] = useState("Kochi");
  const [spaceType, setSpaceType] = useState("dedicated-desk");
  const [teamSize, setTeamSize] = useState("2-10");
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Capture URL params for attribution
    const KEYS = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','gbraid','wbraid','fbclid'];
    const params = new URLSearchParams(window.location.search);
    KEYS.forEach(k => {
      if (params.get(k)) sessionStorage.setItem(k, params.get(k) || '');
    });
  }, []);

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    const KEYS = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','gbraid','wbraid','fbclid'];
    const attribution = Object.fromEntries(KEYS.map(k => [k, sessionStorage.getItem(k)]));

    try {
      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          location: city,
          requirement: spaceType,
          teamSize,
          source: 'Homepage QuickFinder',
          landing: window.location.href,
          ...attribution
        })
      });

      if (!res.ok) throw new Error('Failed to submit lead');

      // Fire Google Ads conversion event
      fireGoogleAdsConversion({
        eventLabel: 'Homepage QuickFinder Form Submitted',
        source: 'QuickFinder',
        city,
        spaceType,
        teamSize
      });

      // Fire conversion event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_form_full', {
          event_category: 'conversion',
          source: 'Homepage QuickFinder'
        });
      }

      setStep(3);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const cities = ["Kochi", "Trivandrum", "Calicut", "Coimbatore"];
  const teamSizes = ["1", "2-10", "10-50", "50+"];

  // Helper to get friendly space type name
  const getSpaceName = (val: string) => {
    const map: Record<string, string> = {
      'hot-desk': 'Hot Desk',
      'dedicated-desk': 'Dedicated Desk',
      'private-office': 'Private Office',
      'virtual-office': 'Virtual Office'
    };
    return map[val] || val;
  };

  return (
    <div className="bg-surface-card rounded-2xl p-space-lg shadow-xl relative overflow-hidden transition-all duration-300">
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>
      
      {step === 1 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between pb-space-md mb-space-md bg-surface-container-lowest">
            <div>
              <span className="inline-block px-space-xs py-space-2xs rounded bg-surface-container-high text-secondary font-label-caps text-label-caps uppercase font-bold tracking-wider mb-space-2xs">
                Instant Match Engine
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Find your perfect space.</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">explore</span>
            </div>
          </div>
          
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Tell us what you need, and we'll instantly match you with ready-to-use regional hubs.
          </p>

          <form onSubmit={handleStep1Submit} className="flex flex-col gap-space-md">
            <div>
              <label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-space-2xs">
                Where do you want to work?
              </label>
              <div className="grid grid-cols-2 gap-space-2xs">
                {cities.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCity(c)}
                    className={`py-space-xs px-space-sm rounded-lg text-left font-label-lg text-label-lg transition-all flex items-center justify-between ${
                      city === c
                        ? "bg-surface-navy text-on-primary"
                        : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                    }`}
                  >
                    <span>{c}</span>
                    <span className={`material-symbols-outlined text-[16px] ${city === c ? "text-secondary" : "opacity-0"}`}>
                      check_circle
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-space-2xs">
                Space Type
              </label>
              <select
                value={spaceType}
                onChange={(e) => setSpaceType(e.target.value)}
                className="w-full h-12 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-card transition-all cursor-pointer"
              >
                <option value="hot-desk">Hot Desk (Freelancers & Mobile)</option>
                <option value="dedicated-desk">Dedicated Workstation (24/7 Access)</option>
                <option value="private-office">Private Lockable Office (Teams)</option>
                <option value="virtual-office">Virtual Office (GST & ROC Registration)</option>
              </select>
            </div>

            <div>
              <label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-space-2xs">
                Team Size
              </label>
              <div className="grid grid-cols-4 gap-space-2xs">
                {teamSizes.map((ts) => (
                  <button
                    key={ts}
                    type="button"
                    onClick={() => setTeamSize(ts)}
                    className={`py-space-xs rounded-lg text-center font-label-lg text-label-lg transition-all ${
                      teamSize === ts
                        ? "bg-surface-navy text-on-primary"
                        : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                    }`}
                  >
                    {ts}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-space-xs py-space-md px-space-lg bg-secondary hover:bg-accent-orange-hover text-on-secondary font-label-lg text-label-lg rounded-xl flex items-center justify-center gap-space-xs transition-all shadow-md"
            >
              <span>See Availability & Pricing</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
          <button 
            type="button" 
            onClick={() => setStep(1)}
            className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm mb-space-md"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to edit match
          </button>
          
          <div className="mb-space-md">
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-2xs">Match Found!</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              We have availability for <strong className="text-on-surface">{getSpaceName(spaceType)}</strong> options for <strong className="text-on-surface">{teamSize} people</strong> in <strong className="text-on-surface">{city}</strong>. Where should we send the pricing?
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg mb-4 text-sm font-medium">
              Something went wrong. Please try again.
            </div>
          )}

          <form onSubmit={handleFinalSubmit} className="flex flex-col gap-space-sm">
            <div>
              <label className="block font-label-sm text-label-sm font-bold text-on-surface mb-1">Full Name</label>
              <input 
                type="text" 
                required 
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full h-12 px-space-sm rounded-lg bg-surface-container-low border border-transparent focus:border-secondary focus:bg-white text-on-surface font-body-md transition-all outline-none" 
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block font-label-sm text-label-sm font-bold text-on-surface mb-1">Mobile Number</label>
              <div className="flex">
                <div className="h-12 bg-surface-container-high border-r border-white/20 rounded-l-lg px-3 flex items-center justify-center font-bold text-on-surface-variant">
                  +91
                </div>
                <input 
                  type="tel" 
                  required 
                  inputMode="tel"
                  pattern="[0-9]{10}"
                  title="Please enter a 10 digit mobile number"
                  value={phone}
                  onChange={e => {
                    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                    setPhone(val);
                  }}
                  className="w-full h-12 px-space-sm rounded-r-lg bg-surface-container-low border border-transparent focus:border-secondary focus:bg-white text-on-surface font-body-md transition-all outline-none" 
                  placeholder="9876543210"
                />
              </div>
            </div>

            <div>
              <label className="block font-label-sm text-label-sm font-bold text-on-surface mb-1">Email Address <span className="font-normal text-on-surface-variant">(Optional)</span></label>
              <input 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full h-12 px-space-sm rounded-lg bg-surface-container-low border border-transparent focus:border-secondary focus:bg-white text-on-surface font-body-md transition-all outline-none" 
                placeholder="john@company.com"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-space-2xs py-space-md px-space-lg bg-secondary hover:bg-accent-orange-hover text-on-secondary font-label-lg text-label-lg rounded-xl flex items-center justify-center gap-space-xs transition-all shadow-md disabled:opacity-70"
            >
              <span>{isSubmitting ? 'Checking inventory...' : 'Get Instant Pricing'}</span>
              {!isSubmitting && <span className="material-symbols-outlined text-[18px]">send</span>}
            </button>
            <p className="text-center font-body-sm text-xs text-on-surface-variant mt-2">No payment required. We will send details directly via WhatsApp & Email.</p>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="animate-in fade-in zoom-in-95 duration-500 text-center py-space-xl px-space-md">
          <div className="w-20 h-20 bg-success-teal/20 rounded-full flex items-center justify-center mx-auto mb-space-md">
            <span className="material-symbols-outlined text-4xl text-success-teal">check_circle</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm">You're on the list!</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Our <strong className="text-on-surface">{city}</strong> community manager is preparing the best options for your team and will contact you within 15 minutes.
          </p>
        </div>
      )}
    </div>
  );
}
