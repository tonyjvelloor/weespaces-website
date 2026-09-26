'use client';

import { useState, useEffect } from 'react';
import { X, FileText, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if they've already seen it in this session
    if (sessionStorage.getItem('exitIntentTriggered')) {
      setHasTriggered(true);
      return;
    }

    const mouseEvent = (e: MouseEvent) => {
      // Trigger if mouse moves quickly up towards the address bar
      if (!hasTriggered && e.clientY < 20 && e.movementY < -10) {
        setIsVisible(true);
        setHasTriggered(true);
        sessionStorage.setItem('exitIntentTriggered', 'true');
      }
    };

    document.addEventListener('mouseleave', mouseEvent);
    
    // Fallback for mobile (trigger after 45 seconds if no exit intent possible)
    const mobileTimer = setTimeout(() => {
      if (!hasTriggered && window.innerWidth < 768) {
        setIsVisible(true);
        setHasTriggered(true);
        sessionStorage.setItem('exitIntentTriggered', 'true');
      }
    }, 45000);

    return () => {
      document.removeEventListener('mouseleave', mouseEvent);
      clearTimeout(mobileTimer);
    };
  }, [hasTriggered]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // In a real app, send to API. For now, simulate success.
    setSubmitted(true);
    
    // Simulate pixel event for Lead Magnet
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'Exit Intent Cost Guide'
      });
    }
  };

  const closePopup = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-500">
        
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Graphic */}
        <div className="w-full md:w-5/12 bg-navy relative min-h-[200px] md:min-h-[400px] flex flex-col justify-center p-8">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-accent text-sm font-bold tracking-wider mb-6">
              <Sparkles className="w-4 h-4" /> 2026 EDITION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Wait! Don't overpay for office space.
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Get our exclusive <strong>South India Workspace Pricing Guide</strong> before you sign any lease.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-gray-50">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Guide Sent!</h3>
              <p className="text-gray-600 mb-8">
                Check your inbox for the definitive guide to commercial real estate costs in Kerala and Tamil Nadu.
              </p>
              <button 
                onClick={closePopup}
                className="bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-xl font-bold transition-all w-full md:w-auto"
              >
                Return to Website
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6 text-navy font-bold">
                <FileText className="w-6 h-6 text-accent" />
                <span>What's inside the guide?</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {['Hidden costs in traditional leases', 'Actual per-seat costs in Kochi, Calicut & Trivandrum', 'How to negotiate a flexible workspace contract'].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your work email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-gray-200 text-navy px-5 py-4 rounded-xl outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-navy px-5 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-accent/30"
                >
                  Send Me The Guide
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  100% free. No spam. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Temporary Lucide icon fix to avoid missing exports
function CheckCircle2(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
