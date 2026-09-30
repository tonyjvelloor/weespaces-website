'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 600px (past the hero form on mobile)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 md:hidden animate-in slide-in-from-bottom-full duration-300">
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="text-navy font-black text-lg">₹8,999<span className="text-sm font-medium text-gray-500">/yr</span></div>
        <div className="flex items-center text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full border border-green-200">
          <ShieldCheck className="w-3 h-3 mr-1" /> GST Ready
        </div>
      </div>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-accent text-navy py-3.5 rounded-xl font-black text-lg flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
      >
        Lock In Offer <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
