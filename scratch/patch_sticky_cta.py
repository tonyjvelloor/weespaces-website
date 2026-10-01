file_path = "src/components/StickyMobileCTA.tsx"
with open(file_path, "r") as f:
    content = f.read()

new_content = """'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

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
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 md:hidden animate-in slide-in-from-bottom-full duration-300">
      <div className="flex items-center gap-2 mb-2 px-1">
        <div className="flex-grow flex items-center justify-between">
          <div className="text-navy font-black text-lg">₹8,999<span className="text-sm font-medium text-gray-500">/yr</span></div>
        </div>
        <div className="flex gap-2">
           <a href="tel:+919999999999" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-navy hover:bg-gray-200">
             <Phone className="w-4 h-4" />
           </a>
           <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-100">
             <MessageCircle className="w-4 h-4" />
           </a>
        </div>
      </div>
      <button 
        onClick={() => {
          const form = document.getElementById('lead-form');
          if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
              document.getElementById('vo-name')?.focus();
            }, 500);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="w-full bg-accent text-navy py-3 rounded-xl font-black text-lg flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
      >
        Get Documents <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
"""
with open(file_path, "w") as f:
    f.write(new_content)
