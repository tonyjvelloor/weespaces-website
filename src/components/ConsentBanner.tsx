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
      <div className="max-w-3xl mx-auto bg-navy/95 backdrop-blur-md text-white rounded-xl shadow-2xl p-4 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pointer-events-auto relative overflow-hidden">
        <div className="flex-grow pr-8 relative z-10">
          <p className="text-white/80 text-xs leading-tight">
            <strong>Privacy Policy:</strong> We use cookies to ensure you get the best experience. By continuing, you agree to our use of cookies.
          </p>
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto relative z-10 mt-2 sm:mt-0">
          <button 
            onClick={handleDecline}
            className="flex-1 sm:flex-none px-3 py-1.5 text-xs font-bold text-white/60 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-4 py-1.5 bg-accent text-navy rounded-lg text-xs font-bold hover:bg-accent-hover transition-colors shadow-lg"
          >
            Accept All
          </button>
        </div>

        <button 
          onClick={handleDecline}
          className="absolute top-2 right-2 text-white/40 hover:text-white transition-colors z-20"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
