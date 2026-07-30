"use client";

import { useEffect, useState } from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { track } from '@/lib/tracking';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling 200px
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="glass !bg-navy-dark/90 !backdrop-blur-xl border-t border-white/20 px-3 py-2 flex items-center gap-2 shadow-[0_-8px_30px_rgba(0,0,0,0.6)]">
        {/* Call Now */}
        <a
          href="tel:+919207189111"
          onClick={() => track.cta('contact_phone', 'tel:+919207189111', { button_location: 'mobile_sticky' })}
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-3 rounded-xl transition-all active:scale-95"
          aria-label="Call WeeSpaces"
        >
          <Phone className="w-4 h-4 text-accent" />
          <span className="text-sm">Call</span>
        </a>

        {/* WhatsApp — Primary / Largest */}
        <WhatsAppButton
          className="flex-[2] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-[0_0_16px_rgba(37,211,102,0.4)] active:scale-95"
          contextOverride={{ service: 'Mobile Sticky Nav' }}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">WhatsApp Us</span>
        </WhatsAppButton>

        {/* Book Tour */}
        <a
          href="/book-tour"
          onClick={() => track.cta('Get Live Availability', '/book-tour', { cta_position: 'mobile_sticky' })}
          className="flex-1 flex items-center justify-center gap-1 bg-accent hover:bg-accent-hover text-navy font-bold py-3 px-2 rounded-xl transition-all shadow-[0_0_16px_rgba(242,156,31,0.4)] active:scale-95"
          aria-label="Get Live Availability"
        >
          <CalendarCheck className="w-4 h-4 shrink-0" />
          <span className="text-[10px] leading-tight text-center">Availability</span>
        </a>
      </div>
    </div>
  );
}
