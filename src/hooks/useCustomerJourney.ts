'use client';

import { useState, useEffect } from 'react';

interface JourneyState {
  hasConsented: boolean;
  sessionId: string;
  calculatorCompleted: boolean;
  finderCompleted: boolean;
  gstCheckerCompleted: boolean;
  preferredCity?: string;
  serviceInterest?: string;
}

const DEFAULT_STATE: JourneyState = {
  hasConsented: false,
  sessionId: '',
  calculatorCompleted: false,
  finderCompleted: false,
  gstCheckerCompleted: false
};

export function useCustomerJourney() {
  const [journey, setJourney] = useState<JourneyState>(DEFAULT_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('weespaces_journey');
    if (stored) {
      try {
        setJourney(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse journey state');
      }
    } else {
      // Initialize with a unique session ID if none exists (but don't save to local storage until consent)
      setJourney(prev => ({
        ...prev,
        sessionId: `SESS-${Math.random().toString(36).substr(2, 9)}`
      }));
    }
    setIsLoaded(true);
  }, []);

  const updateJourney = (updates: Partial<JourneyState>) => {
    setJourney(prev => {
      const newState = { ...prev, ...updates };
      // Only persist to local storage if they have consented
      if (newState.hasConsented) {
        localStorage.setItem('weespaces_journey', JSON.stringify(newState));
      }
      return newState;
    });
  };

  const acceptConsent = () => {
    updateJourney({ hasConsented: true });
  };

  const logEvent = async (eventType: string, metadata?: any) => {
    if (!journey.hasConsented) return;

    try {
      await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: eventType,
          session_id: journey.sessionId,
          ...metadata
        })
      });
    } catch (error) {
      console.error('Failed to log event', error);
    }
  };

  return {
    journey,
    isLoaded,
    updateJourney,
    acceptConsent,
    logEvent
  };
}
