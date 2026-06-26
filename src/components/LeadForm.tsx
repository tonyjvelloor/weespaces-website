"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeadForm({ branch = "", source: defaultSource, hidePricing }: { branch?: string, source?: string, hidePricing?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [formDataState, setFormDataState] = useState({
    requirement: '',
    teamSize: '',
    location: branch || '',
    budget: '',
    timeline: '',
    name: '',
    phone: ''
  });

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (step === 1 && !formDataState.requirement) {
      setFormStatus({ message: 'Please select your requirement', type: 'error' });
      return;
    }
    if (step === 2 && !formDataState.teamSize) {
      setFormStatus({ message: 'Please select your team size', type: 'error' });
      return;
    }
    if (step === 3 && !formDataState.location) {
      setFormStatus({ message: 'Please select a location', type: 'error' });
      return;
    }
    if (step === 4 && !formDataState.budget) {
      setFormStatus({ message: 'Please select your budget expectation', type: 'error' });
      return;
    }
    if (step === 5 && !formDataState.timeline) {
      setFormStatus({ message: 'Please select your timeline', type: 'error' });
      return;
    }
    setFormStatus({ message: '', type: null });
    setStep(step + 1);
  };

  const handleBackStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: '', type: null });

    const phoneRaw = formDataState.phone;
    const phone = phoneRaw ? '+91' + phoneRaw : undefined;
    const name = formDataState.name;
    const source = defaultSource
      ? `${defaultSource} (Req: ${formDataState.requirement}, Team: ${formDataState.teamSize}, Loc: ${formDataState.location}, Budget: ${formDataState.budget}, Timeline: ${formDataState.timeline})`
      : `Website Lead (Req: ${formDataState.requirement}, Team: ${formDataState.teamSize}, Loc: ${formDataState.location}, Budget: ${formDataState.budget}, Timeline: ${formDataState.timeline})`;

    try {
      const response = await fetch('/api/capture-lead/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, source })
      });

      if (!response.ok) throw new Error('Failed to submit lead');

      // Fire GA4 events
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'Lead',
          event_label: source,
          value: 1,
        });
      }

      // Fire Meta Pixel event
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: formDataState.requirement,
          content_category: formDataState.location,
        });
      }

      router.push('/landing/thank-you');
    } catch (error) {
      setFormStatus({ message: "Network Error. Please try again or call us.", type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepTitles = [
    "What do you need?",
    "How big is your team?",
    "Which city?",
    "Budget Expectation (Per Seat)",
    "When do you need it?",
    "Your contact details"
  ];

  const requirements = [
    { label: 'Coworking', icon: '💻' },
    { label: 'Private Office', icon: '🏢' },
    { label: 'Virtual Office', icon: '📬' },
    { label: 'Meeting Room', icon: '🤝' },
  ];

  const teamSizes = [
    { label: 'Just me', value: '1 person' },
    { label: '2–5 people', value: '2-5' },
    { label: '6–20 people', value: '6-20' },
    { label: '20+ people', value: '20+' },
  ];

  const budgets = [
    { label: 'Standard (₹5k - 7k)', value: 'Standard' },
    { label: 'Premium (₹7k - 10k)', value: 'Premium' },
    { label: 'Enterprise/Custom', value: 'Enterprise' },
  ];

  const timelines = [
    { label: 'Immediately', value: 'Immediate' },
    { label: 'Within 1 Month', value: '1 Month' },
    { label: '1 - 3 Months', value: '1-3 Months' },
    { label: 'Just exploring', value: 'Exploring' },
  ];

  return (
    <div className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden glow border-t border-l border-white/20 h-full flex flex-col">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>

      <h3 className="text-xl md:text-2xl font-bold mb-2">Find Your Workspace</h3>
      <p className="text-sm text-white/70 mb-6">Let us build the perfect office plan for you.</p>

      <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-white/50">Step {step} of 6</span>
            <span className="text-xs font-bold text-accent">{Math.round((step / 6) * 100)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5">
            <div className="bg-accent h-1.5 rounded-full transition-all duration-300" style={{ width: `${(step / 6) * 100}%` }}></div>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-4 text-white">{stepTitles[step - 1]}</h4>

        <div className="flex-grow space-y-3">
          {step === 1 && (
            <div className="grid grid-cols-2 gap-3">
              {requirements.map(({ label, icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setFormDataState({ ...formDataState, requirement: label })}
                  className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${formDataState.requirement === label ? 'border-accent bg-accent/10 text-accent font-bold' : 'border-white/10 bg-navy-dark/30 text-white/70 hover:border-white/30 hover:bg-navy-dark/50'}`}
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm">{label}</span>
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-2 gap-3">
              {teamSizes.map(({ label, value }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFormDataState({ ...formDataState, teamSize: value })}
                  className={`p-4 rounded-xl border text-center transition-all ${formDataState.teamSize === value ? 'border-accent bg-accent/10 text-accent font-bold' : 'border-white/10 bg-navy-dark/30 text-white/70 hover:border-white/30 hover:bg-navy-dark/50'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="grid grid-cols-2 gap-3">
              {['Kochi', 'Trivandrum', 'Calicut', 'Coimbatore'].map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setFormDataState({ ...formDataState, location: loc })}
                  className={`p-4 rounded-xl border text-left transition-all ${formDataState.location === loc ? 'border-accent bg-accent/10 text-accent font-bold' : 'border-white/10 bg-navy-dark/30 text-white/70 hover:border-white/30 hover:bg-navy-dark/50'}`}
                >
                  {loc}
                </button>
              ))}
            </div>
          )}

          {step === 4 && (
            <div className="grid grid-cols-1 gap-3">
              {budgets.map(({ label, value }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFormDataState({ ...formDataState, budget: value })}
                  className={`p-4 rounded-xl border text-center transition-all ${formDataState.budget === value ? 'border-accent bg-accent/10 text-accent font-bold' : 'border-white/10 bg-navy-dark/30 text-white/70 hover:border-white/30 hover:bg-navy-dark/50'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {step === 5 && (
            <div className="grid grid-cols-2 gap-3">
              {timelines.map(({ label, value }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFormDataState({ ...formDataState, timeline: value })}
                  className={`p-4 rounded-xl border text-center transition-all ${formDataState.timeline === value ? 'border-accent bg-accent/10 text-accent font-bold' : 'border-white/10 bg-navy-dark/30 text-white/70 hover:border-white/30 hover:bg-navy-dark/50'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {step === 6 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Full Name *</label>
                <input
                  value={formDataState.name}
                  onChange={(e) => setFormDataState({ ...formDataState, name: e.target.value })}
                  className="w-full bg-navy-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none"
                  placeholder="Enter your full name"
                  type="text"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Phone Number *</label>
                <div className="flex">
                  <span className="bg-navy border border-white/10 border-r-0 rounded-l-xl px-4 py-3 text-white/50 flex items-center">+91</span>
                  <input
                    value={formDataState.phone}
                    onChange={(e) => setFormDataState({ ...formDataState, phone: e.target.value })}
                    className="w-full bg-navy-dark/50 border border-white/10 rounded-r-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none"
                    placeholder="Enter 10 digit number"
                    type="tel"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {[formDataState.requirement, formDataState.teamSize, formDataState.location].filter(Boolean).map((val) => (
                  <span key={val} className="text-xs bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full font-medium">{val}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {formStatus.message && (
          <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce-up ${formStatus.type === 'error' ? 'bg-red-500 text-white border border-red-400' : 'bg-[#25D366] text-white border border-[#1DA851]'}`}>
            {formStatus.type === 'error' ? (
              <span className="material-symbols-outlined">error</span>
            ) : (
              <span className="material-symbols-outlined">check_circle</span>
            )}
            <span className="font-bold">{formStatus.message}</span>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-white/10 flex gap-3">
          {step > 1 && (
            <button type="button" onClick={handleBackStep} className="px-4 py-3 rounded-xl border border-white/20 text-white/70 hover:bg-white/5 transition-colors">
              Back
            </button>
          )}

          {step < 6 ? (
            <button
              onClick={handleNextStep}
              className="flex-grow bg-accent text-navy font-bold text-lg py-3 rounded-xl hover:bg-accent-hover transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 transform hover:-translate-y-1"
              type="button"
            >
              Continue
            </button>
          ) : (
            <div className="flex-grow w-full">
              <button
                disabled={isSubmitting}
                className={`w-full bg-accent text-navy font-bold text-lg py-3 rounded-xl hover:bg-accent-hover transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 transform hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                type="submit"
              >
                {isSubmitting ? 'Checking...' : 'Get Workspace Availability'}
              </button>
              <p className="text-center text-xs text-white/40 mt-3 flex items-center justify-center gap-1">
                No spam. Our workspace consultant calls within 15 minutes.
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
