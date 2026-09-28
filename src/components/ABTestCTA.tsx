'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

interface ABTestCTAProps {
  experimentId: string;
  className?: string;
}

export default function ABTestCTA({ experimentId, className }: ABTestCTAProps) {
  const [variant, setVariant] = useState<'A' | 'B'>('A');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if the user already has an assigned variant for this experiment
    const storageKey = `ab_test_${experimentId}`;
    let savedVariant = localStorage.getItem(storageKey);

    if (!savedVariant) {
      // 50/50 random split
      savedVariant = Math.random() < 0.5 ? 'A' : 'B';
      localStorage.setItem(storageKey, savedVariant);
      
      // Fire tracking event for new assignment
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'experiment_enrolled', {
          experiment_id: experimentId,
          variant: savedVariant
        });
      }
    }

    setVariant(savedVariant as 'A' | 'B');
    setIsLoaded(true);
  }, [experimentId]);

  const trackClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'experiment_conversion', {
        experiment_id: experimentId,
        variant: variant
      });
    }
  };

  // SSR Fallback (shows Variant A server-side to prevent hydration mismatch before jumping)
  if (!isLoaded) {
    return (
      <a href="#book-tour" className={`flex items-center justify-center gap-2 bg-accent text-navy px-6 py-4 rounded-xl font-bold transition-all shadow-lg text-lg ${className || ''}`}>
        <Clock className="w-5 h-5" /> Book a Tour
      </a>
    );
  }

  // Variant A (Control)
  if (variant === 'A') {
    return (
      <a href="#book-tour" onClick={trackClick} className={`flex items-center justify-center gap-2 bg-accent hover:scale-105 text-navy px-6 py-4 rounded-xl font-bold transition-all shadow-lg text-lg ${className || ''}`}>
        <Clock className="w-5 h-5" /> Book a Tour
      </a>
    );
  }

  // Variant B (Experiment)
  return (
    <a href="#book-tour" onClick={trackClick} className={`flex items-center justify-center gap-2 bg-navy hover:bg-navy-light border-2 border-accent text-accent hover:scale-105 px-6 py-4 rounded-xl font-bold transition-all shadow-lg text-lg ${className || ''}`}>
      Get Instant Pricing <ArrowRight className="w-5 h-5" />
    </a>
  );
}
