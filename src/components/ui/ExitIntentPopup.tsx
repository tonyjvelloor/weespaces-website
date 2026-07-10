"use client";

import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Only trigger once per session
    if (hasTriggered) return;

    // Fallback timer (45 seconds) to catch mobile users or long-reading desktop users who haven't moved their mouse out
    const timer = setTimeout(() => {
      triggerPopup();
    }, 45000);

    // Trigger on mouse leave (desktop exit intent)
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggered) return;
      if (e.clientY <= 0) {
        triggerPopup();
      }
    };

    const triggerPopup = () => {
      setIsVisible(true);
      setHasTriggered(true);
      // Optional: Store in sessionStorage so it doesn't bother them if they navigate back
      sessionStorage.setItem('exitIntentTriggered', 'true');
    };

    // Check if already triggered in this session
    if (sessionStorage.getItem('exitIntentTriggered') === 'true') {
      setHasTriggered(true);
      return;
    }

    window.addEventListener('mouseout', handleMouseLeave); // Changed to mouseout for better exit detection

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [hasTriggered]);

  const scrollToForm = () => {
    setIsVisible(false);
    const formElement = document.getElementById('offer-lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      ></div>
      
      <div className="bg-navy border-2 border-accent/50 rounded-3xl p-8 max-w-lg w-full relative z-10 shadow-[0_0_50px_rgba(255,107,53,0.3)] animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Clock className="w-8 h-8 text-red-500" />
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Wait!</h2>
          <h3 className="text-xl text-white/90 mb-4">Still comparing options?</h3>
          <p className="text-white/70 mb-8 leading-relaxed">
            Claim the Monsoon Offer before prices go back to normal. You can lock in this price today without paying anything upfront. Our advisor will guide you through the process.
          </p>
          
          <button 
            onClick={scrollToForm}
            className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(255,107,53,0.4)] flex items-center justify-center gap-2 text-lg"
          >
            Claim Offer Now <ArrowRight className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="w-full mt-4 text-white/50 hover:text-white text-sm font-medium transition-colors"
          >
            No thanks, I want to pay full price later
          </button>
        </div>
      </div>
    </div>
  );
}
