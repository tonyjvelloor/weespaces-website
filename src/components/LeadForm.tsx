"use client";

import { useState } from 'react';

export default function LeadForm({ branch = "" }: { branch?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });

  // Update this to your deployed script URL when ready
  const scriptURL = 'https://script.google.com/macros/s/AKfycbybC2s6MI2grPl7HjMJfgny_UcfO8VGb5hwzmRV54HhqH8JiWC1l82YRLV4g8qe0-sG/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: '', type: null });

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Format phone number
    const phone = formData.get('phoneNumber');
    if (phone) {
      formData.set('phoneNumber', '+91' + phone);
    }
    
    if (branch) {
      formData.append('preferredBranch', branch);
    }

    try {
      // mode: 'no-cors' is used as a fallback to prevent browser hard crashes, 
      // but it means we can't read the response body.
      await fetch(scriptURL, { 
        method: 'POST', 
        body: formData,
        mode: 'no-cors' 
      });
      
      setFormStatus({ message: "Success! We'll call you back soon.", type: 'success' });
      form.reset();
      setTimeout(() => setFormStatus({ message: '', type: null }), 5000);
    } catch (error) {
      setFormStatus({ message: "Network Error. Please try again or call us.", type: 'error' });
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden glow border-t border-l border-white/20">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
      
      <div className="bg-accent text-navy text-xs font-bold uppercase tracking-wider px-3 py-1 rounded inline-block mb-4">Limited Seats</div>
      
      <h3 className="text-2xl font-bold mb-2">Prebook Your Seat Today!</h3>
      <p className="text-sm text-white/70 mb-8">Secure your premium workspace {branch ? `in ${branch}` : 'today'}.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white/50">Step 1 of 2: Basic Details</span>
                <span className="text-xs font-bold text-accent">50%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-accent h-1.5 rounded-full" style={{ width: '50%' }}></div>
            </div>
        </div>

        <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Full Name *</label>
            <input name="fullName" className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none" placeholder="Enter your full name" type="text" required/>
        </div>
        <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Phone Number *</label>
            <div className="flex">
                <span className="bg-navy border border-white/10 border-r-0 rounded-l-xl px-4 py-3 text-white/50 flex items-center">+91</span>
                <input name="phoneNumber" className="w-full bg-navy-dark/50 border border-white/10 rounded-r-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none" placeholder="Enter 10 digit number" type="tel" required/>
            </div>
        </div>
        
        <div className="pt-2">
            <button 
            disabled={isSubmitting} 
            className="w-full bg-accent text-navy font-bold text-lg py-4 rounded-xl mt-4 hover:bg-accent-hover transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0" 
            type="submit"
            >
                {isSubmitting ? "Submitting..." : "Continue"}
            </button>
            <p className="text-center text-xs text-white/50 mt-3 flex items-center justify-center gap-1">
                <span className="text-accent">⚡</span> Limited desks available this month.
            </p>
        </div>

        {formStatus.type && (
          <div className={`text-center mt-4 text-sm font-bold block ${formStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {formStatus.message}
          </div>
        )}
      </form>
    </div>
  );
}
