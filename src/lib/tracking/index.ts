export interface TrackingEvent {
  event: string;
  content?: Record<string, any>;
  marketing?: Record<string, any>;
  session?: Record<string, any>;
  technical?: Record<string, any>;
  [key: string]: any;
}

/**
 * Standardize event names based on user modifications.
 */
export const EventNames = {
  PAGE_VIEW: 'vo.page_view',
  SCROLL: 'vo.scroll',
  CTA_CLICK: 'vo.cta_click',
  FORM_VIEW: 'vo.form_view',
  FORM_START: 'vo.form_start',
  FORM_SUBMIT: 'vo.form_submit',
  CALCULATOR_START: 'vo.calculator_start',
  CALCULATOR_COMPLETE: 'vo.calculator_complete',
  FINDER_START: 'vo.finder_start',
  FINDER_COMPLETE: 'vo.finder_complete',
  WHATSAPP_GATE_VIEW: 'vo.whatsapp_gate_view',
  WHATSAPP_GATE_START: 'vo.whatsapp_gate_start',
  WHATSAPP_GATE_SUBMIT: 'vo.whatsapp_gate_submit',
  WHATSAPP_GATE_SKIP: 'vo.whatsapp_gate_skip',
  WHATSAPP_REDIRECT: 'vo.whatsapp_redirect'
};

/**
 * Storage utility to split session/local storage
 */
export const TrackingStorage = {
  // Session storage for current session parameters (UTMs, Referrer, Session ID)
  getSessionData: () => {
    if (typeof window === 'undefined') return {};
    try {
      const data = sessionStorage.getItem('weespaces_tracking_session');
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },
  setSessionData: (data: Record<string, any>) => {
    if (typeof window === 'undefined') return;
    try {
      const current = TrackingStorage.getSessionData();
      sessionStorage.setItem('weespaces_tracking_session', JSON.stringify({ ...current, ...data }));
    } catch {}
  },

  // Local storage for returning visitors, preferences (Consent dependent)
  getLocalData: () => {
    if (typeof window === 'undefined') return {};
    try {
      const data = localStorage.getItem('weespaces_tracking_local');
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },
  setLocalData: (data: Record<string, any>) => {
    if (typeof window === 'undefined') return;
    try {
      const current = TrackingStorage.getLocalData();
      localStorage.setItem('weespaces_tracking_local', JSON.stringify({ ...current, ...data }));
    } catch {}
  },

  // Customer Journey Timeline
  logJourneyEvent: (event: string, pageUrl: string) => {
    if (typeof window === 'undefined') return;
    try {
      const journey = TrackingStorage.getSessionData().journey || [];
      journey.push({
        event,
        pageUrl,
        timestamp: new Date().toISOString()
      });
      TrackingStorage.setSessionData({ journey });
    } catch {}
  }
};

/**
 * Generates a session ID if one doesn't exist
 */
const getOrInitializeSessionId = () => {
  const sessionData = TrackingStorage.getSessionData();
  if (!sessionData.sessionId) {
    const newId = 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    TrackingStorage.setSessionData({ sessionId: newId, startedAt: new Date().toISOString() });
    return newId;
  }
  return sessionData.sessionId;
};

/**
 * Core tracking payload builder
 */
const pushStructuredEvent = (eventName: string, customPayload: Partial<TrackingEvent> = {}) => {
  if (typeof window === 'undefined') return;

  const sessionData = TrackingStorage.getSessionData();
  const localData = TrackingStorage.getLocalData();

  // Ensure session ID
  const sessionId = getOrInitializeSessionId();

  // Combine Marketing Data (UTMs + Click IDs)
  const marketingData = {
    utm_source: sessionData.utm_source,
    utm_medium: sessionData.utm_medium,
    utm_campaign: sessionData.utm_campaign,
    utm_term: sessionData.utm_term,
    utm_content: sessionData.utm_content,
    utm_id: sessionData.utm_id,
    gclid: sessionData.gclid,
    fbclid: sessionData.fbclid,
    msclkid: sessionData.msclkid,
    ttclid: sessionData.ttclid,
    referrer: sessionData.referrer,
    ...customPayload.marketing
  };

  // Session Data
  const currentSession = {
    id: sessionId,
    startedAt: sessionData.startedAt,
    returning: !!localData.hasVisitedBefore,
    ...customPayload.session
  };

  // Technical Data
  const technical = {
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString(),
    ...customPayload.technical
  };

  const payload: TrackingEvent = {
    event: eventName,
    content: customPayload.content || {},
    marketing: marketingData,
    session: currentSession,
    technical: technical,
  };

  // Push to GTM
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push(payload);

  // Log to Journey Timeline
  TrackingStorage.logJourneyEvent(eventName, window.location.href);

  // Set Returning Visitor Flag
  if (!localData.hasVisitedBefore) {
    TrackingStorage.setLocalData({ hasVisitedBefore: true, firstVisit: new Date().toISOString() });
  }
};

/**
 * Marketing SDK Methods
 */
export const track = {
  page: (contentContext: Record<string, any>) => {
    pushStructuredEvent(EventNames.PAGE_VIEW, { content: contentContext });
  },
  scroll: (depth: number, contentContext: Record<string, any>) => {
    pushStructuredEvent(EventNames.SCROLL, { content: { ...contentContext, depth } });
  },
  form: (step: 'view' | 'start' | 'submit', contentContext: Record<string, any>, leadData?: Record<string, any>) => {
    const eventName = step === 'view' ? EventNames.FORM_VIEW : step === 'start' ? EventNames.FORM_START : EventNames.FORM_SUBMIT;
    const payload = {
      content: contentContext,
      lead: leadData
    };
    pushStructuredEvent(eventName, payload);
  },
  cta: (ctaName: string, destinationUrl: string, contentContext?: Record<string, any>) => {
    pushStructuredEvent(EventNames.CTA_CLICK, { 
      content: { ...contentContext, ctaName, destinationUrl } 
    });
  },
  calculator: (action: 'start' | 'complete', data: Record<string, any>) => {
    pushStructuredEvent(action === 'start' ? EventNames.CALCULATOR_START : EventNames.CALCULATOR_COMPLETE, { content: data });
  },
  finder: (action: 'start' | 'complete', data: Record<string, any>) => {
    pushStructuredEvent(action === 'start' ? EventNames.FINDER_START : EventNames.FINDER_COMPLETE, { content: data });
  },
  // Get raw attribution data for backend APIs
  getAttributionPayload: (contentContext: Record<string, any>) => {
    const sessionData = TrackingStorage.getSessionData();
    const localData = TrackingStorage.getLocalData();
    const sessionId = getOrInitializeSessionId();

    return {
      content: contentContext,
      marketing: {
        utm_source: sessionData.utm_source,
        utm_medium: sessionData.utm_medium,
        utm_campaign: sessionData.utm_campaign,
        utm_term: sessionData.utm_term,
        utm_content: sessionData.utm_content,
        utm_id: sessionData.utm_id,
        gclid: sessionData.gclid,
        fbclid: sessionData.fbclid,
        msclkid: sessionData.msclkid,
        ttclid: sessionData.ttclid,
        referrer: sessionData.referrer
      },
      session: {
        id: sessionId,
        startedAt: sessionData.startedAt,
        returning: !!localData.hasVisitedBefore,
        journey: sessionData.journey || []
      },
      technical: {
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        timestamp: new Date().toISOString()
      }
    };
  }
};
