"use client";

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { track, TrackingStorage } from '@/lib/tracking';

function TrackingLogic() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;

    // Keys we want to capture and persist for attribution
    const trackingKeys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'utm_id',
      'gclid',
      'fbclid',
      'msclkid',
      'ttclid'
    ];

    const currentSessionData = TrackingStorage.getSessionData();
    let updatedData: Record<string, string> = {};
    let updated = false;

    trackingKeys.forEach(key => {
      const val = searchParams.get(key);
      if (val) {
        updatedData[key] = val;
        updated = true;
      }
    });

    // Capture initial referrer if not set
    if (!currentSessionData.referrer && document.referrer) {
      // Don't capture our own domain as referrer
      if (!document.referrer.includes(window.location.hostname)) {
        updatedData.referrer = document.referrer;
        updated = true;
      }
    }

    if (updated) {
      TrackingStorage.setSessionData(updatedData);
    }

    // Global Click Listener for WhatsApp and Calls
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href) {
        if (anchor.href.includes('wa.me')) {
          track.cta('whatsapp_click', anchor.href);
        } else if (anchor.href.startsWith('tel:')) {
          track.cta('call_click', anchor.href);
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [searchParams]);

  return null;
}

export default function TrackingProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <TrackingLogic />
      </Suspense>
      {children}
    </>
  );
}
