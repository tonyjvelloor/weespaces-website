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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Team Size</label>
                <select name="teamSize" className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white/80 focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none appearance-none" required defaultValue="">
                    <option value="" disabled>Select size</option>
                    <option value="1">1 Person</option>
                    <option value="2-5">2-5 People</option>
                    <option value="6-15">6-15 People</option>
                    <option value="15+">15+ People</option>
                </select>
            </div>
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Timeline</label>
                <select name="timeline" className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white/80 focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none appearance-none" required defaultValue="">
                    <option value="" disabled>When?</option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                    <option value="Just Browsing">Just Browsing</option>
                </select>
            </div>
        </div>
        <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Requirement</label>
            <select name="workspaceType" className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white/80 focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none appearance-none" required defaultValue="">
                <option value="" disabled>Select workspace type</option>
                <option value="Hot Desk">Hot Desk</option>
                <option value="Dedicated Desk">Dedicated Desk</option>
                <option value="Private Office">Private Office</option>
                <option value="Virtual Office">Virtual Office</option>
            </select>
        </div>

        {!branch && (
          <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Preferred Location</label>
              <select name="preferredBranch" className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white/80 focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none appearance-none" required defaultValue="">
                  <option value="" disabled>Where do you want to work?</option>
                  <option value="Trivandrum">Trivandrum</option>
                  <option value="Ernakulam">Ernakulam</option>
                  <option value="Calicut">Calicut</option>
                  <option value="Coimbatore">Coimbatore</option>
              </select>
          </div>
        )}
        
        <button 
          disabled={isSubmitting} 
          className="w-full bg-accent text-navy font-bold text-lg py-4 rounded-xl mt-4 hover:bg-accent-hover transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0" 
          type="submit"
        >
            {isSubmitting ? "Submitting..." : "Request a Call Back"}
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
