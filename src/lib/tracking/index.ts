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
 * Google Ads & Multi-Channel Conversion Tracking
 */
let lastConversionTimestamp = 0;

export interface ConversionOptions {
  eventLabel?: string;
  source?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

/**
 * Fires the Google Ads conversion event for Smart Bidding and lead tracking.
 * Includes client-side 2-second debounce to avoid accidental double-counting on quick taps.
 */
export const fireGoogleAdsConversion = (options: ConversionOptions = {}) => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  if (now - lastConversionTimestamp < 2000) {
    return;
  }
  lastConversionTimestamp = now;

  const {
    eventLabel = 'WhatsApp Lead',
    source = 'whatsapp_click',
    value = 1.0,
    currency = 'INR',
    ...rest
  } = options;

  // Ensure dataLayer exists
  (window as any).dataLayer = (window as any).dataLayer || [];

  // Ensure window.gtag exists
  if (typeof (window as any).gtag !== 'function') {
    (window as any).gtag = function () {
      (window as any).dataLayer.push(arguments);
    };
  }

  // 1. Google Ads Conversion Event for Smart Bidding
  try {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-11477720476/9J3rCNmWrIsZEJy7gOEq',
      value: value,
      currency: currency,
      ...rest,
    });
  } catch (err) {
    console.error('Failed to dispatch Google Ads conversion:', err);
  }

  // 2. GA4 standard generate_lead event
  try {
    (window as any).gtag('event', 'generate_lead', {
      event_category: 'Leads',
      event_label: eventLabel,
      source: source,
      value: value,
      currency: currency,
    });
  } catch (err) {
    console.error('Failed to dispatch GA4 lead event:', err);
  }

  // 3. Push to GTM dataLayer for custom tags/triggers
  (window as any).dataLayer.push({
    event: 'whatsapp_conversion',
    conversion_id: 'AW-11477720476',
    conversion_label: '9J3rCNmWrIsZEJy7gOEq',
    event_label: eventLabel,
    source: source,
    value: value,
    currency: currency,
  });

  // 4. Meta Pixel Contact/Lead fallback
  if (typeof (window as any).fbq === 'function') {
    try {
      (window as any).fbq('track', 'Contact', { content_name: eventLabel });
    } catch {}
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

    // Fire hardcoded ad conversions only on successful genuine submit
    if (step === 'submit' && typeof window !== 'undefined') {
      fireGoogleAdsConversion({
        eventLabel: contentContext?.form_name || 'form_submit',
        source: 'form_submit',
      });
      if (typeof (window as any).fbq !== 'undefined') {
        (window as any).fbq('track', 'Lead');
      }
    }
  },
  cta: (ctaName: string, destinationUrl: string, contentContext?: Record<string, any>) => {
    pushStructuredEvent(EventNames.CTA_CLICK, { 
      content: { ...contentContext, ctaName, destinationUrl } 
    });

    // If it's a WhatsApp action, also trigger the Google Ads conversion event
    if (
      ctaName === 'whatsapp_click' ||
      ctaName === EventNames.WHATSAPP_REDIRECT ||
      ctaName === EventNames.WHATSAPP_GATE_SUBMIT ||
      (destinationUrl && destinationUrl.includes('wa.me'))
    ) {
      fireGoogleAdsConversion({
        eventLabel: ctaName,
        source: contentContext?.button_position || 'whatsapp_cta',
        ...contentContext,
      });
    }
  },
  whatsappConversion: (options?: ConversionOptions) => {
    fireGoogleAdsConversion(options);
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
