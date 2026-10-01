'use client';

import { useState, useEffect } from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function VOExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Only trigger once per session
    if (sessionStorage.getItem('voExitIntentTriggered')) {
      setHasTriggered(true);
      return;
    }

    const mouseEvent = (e: MouseEvent) => {
      // Trigger if mouse moves quickly up towards the address bar (exit intent)
      if (!hasTriggered && e.clientY < 20 && e.movementY < -5) {
        setIsVisible(true);
        setHasTriggered(true);
        sessionStorage.setItem('voExitIntentTriggered', 'true');
      }
    };

    document.addEventListener('mouseleave', mouseEvent);
    
    // Mobile fallback: trigger after 30 seconds of inactivity or fast scroll up
    const mobileTimer = setTimeout(() => {
      if (!hasTriggered && window.innerWidth < 768) {
        setIsVisible(true);
        setHasTriggered(true);
        sessionStorage.setItem('voExitIntentTriggered', 'true');
      }
    }, 30000);

    return () => {
      document.removeEventListener('mouseleave', mouseEvent);
      clearTimeout(mobileTimer);
    };
  }, [hasTriggered]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'VO Exit Intent Lead',
          phone: phone,
          email: email,
          location: 'Any',
          source: 'VO Offer 8999 - Exit Intent',
          requirement: 'Virtual Office (Callback Requested)'
        })
      });
      setSubmitted(true);
      
      // Fire pixel event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_callback', {
          event_category: 'form',
          event_label: 'vo_8999_exit_intent'
        });
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true); // Fallback success
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-500">
        
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-10 text-center">
          {submitted ? (
             <div className="py-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-navy mb-4">Got it!</h3>
                <p className="text-gray-600 mb-8">
                  Our compliance expert will call you shortly to answer any questions about GST registration.
                </p>
                <button 
                  onClick={closePopup}
                  className="bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-xl font-bold transition-all w-full"
                >
                  Close
                </button>
             </div>
          ) : (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-500 rounded-full mb-6">
                 <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-navy mb-4 leading-tight">
                Wait! Don't lose the <span className="text-red-500">₹8,999</span> rate.
              </h2>
              <p className="text-gray-600 mb-8">
                Still unsure about the GST registration process? Drop your number below and our compliance expert will call you within 15 minutes to clarify.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative text-left">
                  <input 
                    type="email" 
                    id="exit-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer w-full bg-gray-50 border border-gray-200 text-navy px-4 pt-6 pb-2 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-medium placeholder-transparent"
                    placeholder="Enter Email Address"
                  />
                  <label htmlFor="exit-email" className="absolute left-4 top-2 text-xs font-bold text-gray-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-accent">
                    Email Address
                  </label>
                </div>

                <div className="relative text-left">
                  <input 
                    type="tel" 
                    id="exit-phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="peer w-full bg-gray-50 border border-gray-200 text-navy px-4 pt-6 pb-2 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-medium placeholder-transparent"
                    placeholder="Enter Phone Number"
                  />
                  <label htmlFor="exit-phone" className="absolute left-4 top-2 text-xs font-bold text-gray-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-accent">
                    Phone Number
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-navy px-5 py-4 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-2 group shadow-xl hover:shadow-accent/40 disabled:opacity-70"
                >
                  {isSubmitting ? 'Requesting...' : 'Request a Callback'}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
                <p className="text-center text-xs text-gray-400 mt-2 font-medium">
                  We respect your privacy. No spam.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
