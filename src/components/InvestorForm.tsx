"use client";

import { useState } from 'react';

export default function InvestorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });

  // Currently reusing the same script, but it can be changed later
  const scriptURL = 'https://script.google.com/macros/s/AKfycbybC2s6MI2grPl7HjMJfgny_UcfO8VGb5hwzmRV54HhqH8JiWC1l82YRLV4g8qe0-sG/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: '', type: null });

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Distinguish this lead in the Google Sheet
    formData.append('leadType', 'Investor/Partner Inquiry');

    try {
      await fetch(scriptURL, { 
        method: 'POST', 
        body: formData,
        mode: 'no-cors' 
      });
      
      setFormStatus({ message: "Inquiry received. Our founders will contact you shortly.", type: 'success' });
      form.reset();
      setTimeout(() => setFormStatus({ message: '', type: null }), 7000);
    } catch (error) {
      setFormStatus({ message: "Network Error. Please reach out via email.", type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden glow border-t border-l border-white/20">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
      
      <div className="bg-accent text-navy text-xs font-bold uppercase tracking-wider px-3 py-1 rounded inline-block mb-4">Partner With Us</div>
      
      <h3 className="text-2xl font-bold mb-2">Discuss Opportunities</h3>
      <p className="text-sm text-white/70 mb-8">Leave your details and our founding team will reach out directly.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Full Name / Organization *</label>
            <input name="fullName" className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none" placeholder="Your Name or Firm" type="text" required/>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Email *</label>
                <input name="email" className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none" placeholder="Work Email" type="email" required/>
            </div>
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Phone Number *</label>
                <input name="phoneNumber" className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none" placeholder="Phone Number" type="tel" required/>
            </div>
        </div>

        <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Partnership Type</label>
            <select name="partnershipType" className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white/80 focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none appearance-none" required defaultValue="">
                <option value="" disabled>Select Interest</option>
                <option value="Equity Investment">Equity Investment / VC</option>
                <option value="Franchise Opportunity">Franchise Opportunity</option>
                <option value="Landlord Joint Venture">Landlord Joint Venture</option>
                <option value="Corporate Partnership">Corporate Partnership</option>
                <option value="Other">Other</option>
            </select>
        </div>
        
        <button 
          disabled={isSubmitting} 
          className="w-full bg-accent text-navy font-bold text-lg py-4 rounded-xl mt-4 hover:bg-accent-hover transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0" 
          type="submit"
        >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </button>

        {formStatus.type && (
          <div className={`text-center mt-4 text-sm font-bold block ${formStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {formStatus.message}
          </div>
        )}
      </form>
    </div>
  );
}
