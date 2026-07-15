"use client";

import { track } from '@/lib/tracking';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/919207189111" 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={() => track.cta('contact_whatsapp', 'https://wa.me/919207189111', { button_position: 'floating_widget' })}
      className="fixed bottom-24 md:bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-110 transition-all duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </a>
  );
}
