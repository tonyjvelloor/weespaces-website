file_path = "src/components/VirtualOfficeLeadForm.tsx"
with open(file_path, "r") as f:
    content = f.read()

new_content = """'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function VirtualOfficeLeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Capture URL params for attribution
    const KEYS = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','gbraid','wbraid','fbclid', 'loc'];
    const params = new URLSearchParams(window.location.search);
    KEYS.forEach(k => {
      if (params.get(k)) sessionStorage.setItem(k, params.get(k) || '');
    });
    
    // Auto-select location if passed in URL
    const loc = params.get('loc');
    if (loc) {
      const formattedLoc = loc.charAt(0).toUpperCase() + loc.slice(1).toLowerCase();
      if (['Kochi', 'Trivandrum', 'Calicut'].includes(formattedLoc)) {
        setFormData(prev => ({...prev, location: formattedLoc}));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    // Prepare attribution data
    const KEYS = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','gbraid','wbraid','fbclid'];
    const attribution = Object.fromEntries(KEYS.map(k => [k, sessionStorage.getItem(k)]));

    try {
      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ...attribution,
          landing: window.location.href,
          source: 'VO Offer 8999',
          requirement: 'Virtual Office'
        })
      });

      if (!res.ok) throw new Error('Lead not saved');

      setSubmitted(true);
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_form_full', {
          event_category: 'conversion',
          value: 8999,
          currency: 'INR'
        });
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(`Hi, I had trouble with the form but I'm interested in the ₹8,999 Virtual Office plan in ${formData.location || 'Kerala'}. My name is ${formData.name}.`);

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative z-10 text-center border border-white/20 h-full flex flex-col justify-center items-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-black text-navy mb-4">You're on the list!</h2>
        <p className="text-gray-600 text-lg mb-8">
          Our compliance expert will call you within 15 minutes to confirm your details.
        </p>
      </div>
    );
  }

  return (
    <div id="lead-form" className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative z-10 border border-white/20 scroll-mt-24">
      
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-black text-navy mb-2">Secure Your Address</h2>
        <p className="text-gray-500 font-medium">Takes 60 seconds. No payment required now.</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6 text-sm text-center">
          <p className="font-bold mb-2">Something went wrong.</p>
          <a 
            href={`https://wa.me/919999999999?text=${whatsappMessage}`} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
          >
            Click here to WhatsApp us instead
          </a>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="relative">
          <input 
            type="text" 
            id="vo-name"
            name="name"
            autoComplete="name"
            required
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            className="peer w-full bg-gray-50 border border-gray-200 text-navy px-4 pt-6 pb-2 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-medium placeholder-transparent"
            placeholder="Full Name"
          />
          <label htmlFor="vo-name" className="absolute left-4 top-2 text-xs font-bold text-gray-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-accent">Full Name</label>
        </div>

        <div className="relative flex">
          <div className="bg-gray-100 border border-gray-200 border-r-0 rounded-l-xl px-4 flex items-center justify-center font-bold text-gray-500">
            +91
          </div>
          <div className="relative w-full">
            <input 
              type="tel" 
              id="vo-phone"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              pattern="[0-9]{10}"
              required
              title="Please enter a valid 10-digit mobile number"
              value={formData.phone}
              onChange={e => {
                const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                setFormData({...formData, phone: val});
              }}
              className="peer w-full bg-gray-50 border border-gray-200 text-navy px-4 pt-6 pb-2 rounded-r-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-medium placeholder-transparent"
              placeholder="10-digit Phone Number"
            />
            <label htmlFor="vo-phone" className="absolute left-4 top-2 text-xs font-bold text-gray-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-accent">Mobile Number</label>
          </div>
        </div>

        <div className="relative">
          <input 
            type="email" 
            id="vo-email"
            name="email"
            autoComplete="email"
            inputMode="email"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className="peer w-full bg-gray-50 border border-gray-200 text-navy px-4 pt-6 pb-2 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-medium placeholder-transparent"
            placeholder="Email Address (Optional)"
          />
          <label htmlFor="vo-email" className="absolute left-4 top-2 text-xs font-bold text-gray-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-accent">Email Address (Optional)</label>
        </div>

        <div className="relative mt-1">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Select Premium Location</label>
          <div className="relative">
            <select 
              required
              value={formData.location}
              onChange={e => setFormData({...formData, location: e.target.value})}
              className="w-full bg-white border-2 border-gray-100 text-navy px-4 py-3.5 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-bold appearance-none pl-11 shadow-sm hover:border-gray-200 cursor-pointer"
            >
              <option value="" disabled>Choose your business address...</option>
              <option value="Kochi">Kochi (Palarivattom / Infopark)</option>
              <option value="Trivandrum">Trivandrum (Near Technopark)</option>
              <option value="Calicut">Kozhikode (HiLite Business Park)</option>
            </select>
            <MapPin className="w-5 h-5 text-accent absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <span className="material-symbols-outlined text-gray-400">expand_more</span>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="relative overflow-hidden w-full bg-accent hover:bg-accent/90 text-navy px-5 py-4.5 rounded-xl font-black transition-all flex items-center justify-center gap-2 group shadow-xl hover:shadow-accent/40 mt-2 disabled:opacity-70 text-lg h-14"
        >
          {isSubmitting ? 'Processing...' : 'Get my address documents'}
          {!isSubmitting && <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
        </button>
        
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-1 font-medium bg-gray-50 py-2 rounded-lg border border-gray-100">
          <ShieldCheck className="w-4 h-4 text-green-500" />
          No credit card required. Safe & Secure.
        </div>
      </form>
    </div>
  );
}
"""
with open(file_path, "w") as f:
    f.write(new_content)
