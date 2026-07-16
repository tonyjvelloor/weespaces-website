"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track, EventNames } from '@/lib/tracking';
import { getPageContext, PageContext } from '@/utils/whatsappIntent';
import WhatsAppGate from './WhatsAppGate';

interface WhatsAppButtonProps {
  children: React.ReactNode;
  className?: string;
  contextOverride?: Partial<PageContext>;
}

export default function WhatsAppButton({ children, className, contextOverride }: WhatsAppButtonProps) {
  const pathname = usePathname();
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [context, setContext] = useState<PageContext>({ intent: 'low' });
  const [pageUrl, setPageUrl] = useState('');
  
  useEffect(() => {
    if (pathname) {
      const baseContext = getPageContext(pathname);
      setContext({ ...baseContext, ...contextOverride });
      setPageUrl(window.location.href);
    }
  }, [pathname, contextOverride]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    let hasGated = false;
    try {
      hasGated = sessionStorage.getItem('weespaces_whatsapp_gated') === 'true';
    } catch {}

    track.cta('whatsapp_click', 'inline_button', { button_position: 'inline_button', intent: context.intent });

    if (context.intent === 'high' && !hasGated) {
      setIsGateOpen(true);
    } else {
      // Direct open
      let waUrl = "https://wa.me/919207189111";
      if (context.service || context.city) {
         const message = `Hi WeeSpaces,\n\nI'm interested in: ${context.service || 'Workspace'}\nCity: ${context.city || 'Any'}\n\nPlease share the available plans.`;
         waUrl = `https://wa.me/919207189111?text=${encodeURIComponent(message)}`;
      }
      
      track.cta(EventNames.WHATSAPP_REDIRECT, waUrl, { context, type: 'direct' });
      window.open(waUrl, '_blank');
    }
  };

  return (
    <>
      <button 
        onClick={handleClick}
        className={className}
      >
        {children}
      </button>

      {isGateOpen && (
        <WhatsAppGate 
          isOpen={isGateOpen} 
          onClose={() => setIsGateOpen(false)} 
          context={context} 
          pageUrl={pageUrl}
        />
      )}
    </>
  );
}
