"use client";

import { useEffect, useState } from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { track } from '@/lib/tracking';

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
      <div className="bg-navy-dark/95 backdrop-blur-md border-t border-white/10 px-3 py-2 flex items-center gap-2 shadow-[0_-4px_30px_rgba(0,0,0,0.4)]">
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
        <a
          href="https://wa.me/919207189111?text=Hi%20WeeSpaces,%20I%20am%20interested%20in%20workspace..."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track.cta('contact_whatsapp', 'https://wa.me/919207189111', { button_position: 'mobile_sticky' })}
          className="flex-[2] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-[0_0_16px_rgba(37,211,102,0.4)] active:scale-95"
          aria-label="WhatsApp WeeSpaces"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">WhatsApp Us</span>
        </a>

        {/* Book Tour */}
        <a
          href="/book-tour"
          onClick={() => track.cta('Book Tour', '/book-tour', { cta_position: 'mobile_sticky' })}
          className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-navy font-bold py-3 px-3 rounded-xl transition-all shadow-[0_0_16px_rgba(242,156,31,0.4)] active:scale-95"
          aria-label="Book a workspace tour"
        >
          <CalendarCheck className="w-4 h-4" />
          <span className="text-sm">Tour</span>
        </a>
      </div>
    </div>
  );
}
