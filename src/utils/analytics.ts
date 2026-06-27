export const pushToDataLayer = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    
    // Grab stored UTM parameters
    let storedParams = {};
    try {
      const stored = sessionStorage.getItem('weespaces_tracking');
      if (stored) {
        storedParams = JSON.parse(stored);
      }
    } catch (e) {}

    window.dataLayer.push({
      event: eventName,
      ...storedParams,
      ...params,
    });
  }
};

// Global augmentation for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}
