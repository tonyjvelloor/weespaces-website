"use client";

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { pushToDataLayer } from '@/utils/analytics';

function TrackingLogic() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;

    // Keys we want to capture and persist
    const trackingKeys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'gclid',
      'fbclid',
      'msclkid',
    ];

    let storedParams: Record<string, string> = {};
    try {
      const stored = sessionStorage.getItem('weespaces_tracking');
      if (stored) {
        storedParams = JSON.parse(stored);
      }
    } catch (e) {}

    let updated = false;

    trackingKeys.forEach(key => {
      const val = searchParams.get(key);
      if (val) {
        storedParams[key] = val;
        updated = true;
      }
    });

    if (updated) {
      try {
        sessionStorage.setItem('weespaces_tracking', JSON.stringify(storedParams));
      } catch (e) {}
    }

    // Global Click Listener for WhatsApp and Calls
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href) {
        if (anchor.href.includes('wa.me')) {
          pushToDataLayer('whatsapp_click', { url: anchor.href });
        } else if (anchor.href.startsWith('tel:')) {
          pushToDataLayer('call_click', { url: anchor.href });
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
