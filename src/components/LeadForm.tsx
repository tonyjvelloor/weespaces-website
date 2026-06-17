"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeadForm({ branch = "" }: { branch?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [formDataState, setFormDataState] = useState({ name: '', phone: '' });

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest('form');
    if (form?.checkValidity()) {
      const formData = new FormData(form);
      setFormDataState({
        name: formData.get('fullName') as string,
        phone: formData.get('phoneNumber') as string,
      });
      setStep(2);
    } else {
      form?.reportValidity();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: '', type: null });

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Format phone number
    const phoneRaw = formDataState.phone;
    const phone = phoneRaw ? '+91' + phoneRaw : undefined;
    const name = formDataState.name;
    const source = branch || 'Website Organic';
    const teamSize = formData.get('teamSize') as string;
    const timeline = formData.get('timeline') as string;
    const plan = formData.get('plan') as string;

    try {
      const response = await fetch('/api/capture-lead/', { 
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          phone,
          source: `${source} (Team: ${teamSize}, Plan: ${plan}, Timeline: ${timeline})`
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit lead');
      }
      
      // Redirect to thank you page on success
      router.push('/landing/thank-you');

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
      
      <p className="text-sm text-white/70 mb-8 mt-2">Secure your premium workspace {branch ? `in ${branch}` : 'today'}.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white/50">Step {step} of 2: {step === 1 ? 'Basic Details' : 'Workspace Needs'}</span>
                <span className="text-xs font-bold text-accent">{step === 1 ? '50%' : '100%'}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-accent h-1.5 rounded-full transition-all duration-300" style={{ width: step === 1 ? '50%' : '100%' }}></div>
            </div>
        </div>

        {step === 1 ? (
          <>
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Full Name *</label>
                <input name="fullName" defaultValue={formDataState.name} className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none" placeholder="Enter your full name" type="text" required/>
            </div>
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Phone Number *</label>
                <div className="flex">
                    <span className="bg-navy border border-white/10 border-r-0 rounded-l-xl px-4 py-3 text-white/50 flex items-center">+91</span>
                    <input name="phoneNumber" defaultValue={formDataState.phone} className="w-full bg-navy-dark/50 border border-white/10 rounded-r-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none" placeholder="Enter 10 digit number" type="tel" required/>
                </div>
            </div>
            
            <div className="pt-2">
                <button 
                onClick={handleNextStep}
                className="w-full bg-accent text-navy font-bold text-lg py-4 rounded-xl mt-4 hover:bg-accent-hover transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 transform hover:-translate-y-1" 
                type="button"
                >
                    Continue
                </button>
            </div>
          </>
        ) : (
          <>
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Team Size *</label>
                <select name="teamSize" className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none" required>
                  <option value="" disabled selected>Select your team size</option>
                  <option value="1-5">1 - 5 People</option>
                  <option value="6-15">6 - 15 People</option>
                  <option value="16-50">16 - 50 People</option>
                  <option value="50+">50+ Enterprise</option>
                </select>
            </div>
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Preferred Plan *</label>
                <select name="plan" className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none" required>
                  <option value="" disabled selected>Select plan</option>
                  <option value="Private Cabin">Private Cabin</option>
                  <option value="Dedicated Desk">Dedicated Desk</option>
                  <option value="Hot Desk">Hot Desk</option>
                  <option value="Enterprise / GCC">Enterprise / GCC</option>
                </select>
            </div>
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Move-in Timeline *</label>
                <select name="timeline" className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none" required>
                  <option value="" disabled selected>When do you need the space?</option>
                  <option value="Immediately">Immediately</option>
                  <option value="Within 1 Month">Within 1 Month</option>
                  <option value="1-3 Months">1 - 3 Months</option>
                  <option value="Just Exploring">Just exploring right now</option>
                </select>
            </div>
            
            <div className="pt-2">
                <button 
                disabled={isSubmitting} 
                className="w-full bg-accent text-navy font-bold text-lg py-4 rounded-xl mt-4 hover:bg-accent-hover transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2" 
                type="submit"
                >
                    {isSubmitting ? "Submitting..." : "Reserve Your Seat"}
                </button>
                <button type="button" onClick={() => setStep(1)} className="w-full text-white/50 text-sm mt-3 hover:text-white transition-colors">
                  ← Back to details
                </button>
            </div>
          </>
        )}

        {step === 1 && (
          <p className="text-center text-xs text-white/50 mt-3 flex items-center justify-center gap-1">
              Step 2 will ask your preferred space type. No commitment, no payment.
          </p>
        )}

        {formStatus.type && (
          <div className={`text-center mt-4 text-sm font-bold block ${formStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {formStatus.message}
          </div>
        )}
      </form>
    </div>
  );
}
