export const pushToDataLayer = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    
    // Grab stored UTM parameters
    let storedParams = {};
    try {
      const stored = sessionStorage.getItem('weespaces_tracking');
      if (stored) {
        storedParams = JSON.parse(stored);
      }
    } catch (e) {}

    (window as any).dataLayer.push({
      event: eventName,
      ...storedParams,
      ...params,
    });
  }
};

// Removed global window augmentation to prevent TypeScript conflicts
