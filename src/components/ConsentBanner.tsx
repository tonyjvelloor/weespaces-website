'use client';

import { useCustomerJourney } from '@/hooks/useCustomerJourney';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ConsentBanner() {
  const { journey, isLoaded, acceptConsent } = useCustomerJourney();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isLoaded && !journey.hasConsented) {
      // Small delay so it doesn't immediately flash on load
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, journey.hasConsented]);

  if (!show) return null;

  const handleAccept = () => {
    acceptConsent();
    setShow(false);
  };

  const handleDecline = () => {
    setShow(false); // We don't save anything, just hide the banner
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none">
      <div className="max-w-4xl mx-auto bg-navy/95 backdrop-blur-md text-white rounded-2xl shadow-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pointer-events-auto relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="flex-grow pr-8 relative z-10">
          <h3 className="font-bold text-lg mb-2">We respect your privacy</h3>
          <p className="text-white/70 text-sm">
            We use strictly necessary cookies to provide basic site functionality, and optionally, we store anonymous journey data (like the city you searched for) to personalize your experience. We do not sell your data.
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto relative z-10">
          <button 
            onClick={handleDecline}
            className="flex-1 sm:flex-none px-4 py-2 text-sm font-bold text-white/60 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-6 py-2 bg-accent text-navy rounded-lg text-sm font-bold hover:bg-accent-hover transition-colors shadow-lg"
          >
            Accept
          </button>
        </div>

        <button 
          onClick={handleDecline}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
