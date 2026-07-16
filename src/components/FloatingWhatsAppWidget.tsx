"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track, EventNames } from '@/lib/tracking';
import { getPageContext } from '@/utils/whatsappIntent';
import WhatsAppGate from './WhatsAppGate';

export default function FloatingWhatsAppWidget() {
  const pathname = usePathname();
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [context, setContext] = useState(getPageContext(''));
  
  // Track client-side path changes to update context
  useEffect(() => {
    if (pathname) {
      setContext(getPageContext(pathname));
    }
  }, [pathname]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Check if user already submitted the gate this session
    let hasGated = false;
    try {
      hasGated = sessionStorage.getItem('weespaces_whatsapp_gated') === 'true';
    } catch {}

    // Track click
    track.cta('whatsapp_click', 'floating_widget', { button_position: 'floating_widget', intent: context.intent });

    if (context.intent === 'high' && !hasGated) {
      setIsGateOpen(true);
    } else {
      // Direct open
      const waUrl = "https://wa.me/919207189111";
      track.cta(EventNames.WHATSAPP_REDIRECT, waUrl, { context, type: 'direct' });
      window.open(waUrl, '_blank');
    }
  };

  return (
    <>
      <a 
        href="https://wa.me/919207189111" 
        onClick={handleClick}
        className="fixed bottom-24 md:bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-110 transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>

      {isGateOpen && (
        <WhatsAppGate 
          isOpen={isGateOpen} 
          onClose={() => setIsGateOpen(false)} 
          context={context} 
          pageUrl={typeof window !== 'undefined' ? window.location.href : ''}
        />
      )}
    </>
  );
}
