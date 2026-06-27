"use client";

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

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
