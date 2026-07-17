export type PageIntent = 'low' | 'high' | 'enterprise';

export interface PageContext {
  intent: PageIntent;
  service?: string;
  city?: string;
}

export function getPageContext(pathname: string): PageContext {
  const path = pathname.toLowerCase();
  
  // Extract City (matches typical paths like /virtual-office/kochi)
  const cities = ['kochi', 'trivandrum', 'calicut', 'coimbatore', 'ernakulam'];
  let city = cities.find(c => path.includes(c));
  if (city === 'ernakulam') city = 'kochi'; // Normalize
  if (city) {
    // Capitalize city
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }
  
  // Coimbatore is enterprise-level by default (100+ seating)
  if (city?.toLowerCase() === 'coimbatore') {
    // For Coimbatore, all service pages are enterprise intent
    let service = 'Enterprise Office';
    if (path.includes('/virtual-office')) service = 'Virtual Office';
    else if (path.includes('/coworking')) service = 'Coworking Space (Enterprise)';
    else if (path.includes('/private-office')) service = 'Private Office (Enterprise)';
    else if (path.includes('/managed-office')) service = 'Managed Office';
    
    return {
      intent: 'enterprise',
      service,
      city: 'Coimbatore'
    };
  }

  // Enterprise intent
  if (path.includes('/enterprise') || path.includes('/managed-office')) {
    return {
      intent: 'enterprise',
      service: 'Enterprise / Managed Office',
      city
    };
  }
  
  // High intent services
  if (path.includes('/virtual-office')) {
    return { intent: 'high', service: 'Virtual Office', city };
  }
  
  if (path.includes('/coworking')) {
    return { intent: 'high', service: 'Coworking Space', city };
  }
  
  if (path.includes('/private-office')) {
    return { intent: 'high', service: 'Private Office', city };
  }
  
  if (path.includes('/pricing')) {
    return { intent: 'high', service: 'Pricing Inquiry', city };
  }
  
  if (path.includes('/gst')) {
    return { intent: 'high', service: 'GST Registration', city };
  }
  
  // Default low intent
  return {
    intent: 'low',
    city
  };
}

export function buildWhatsAppMessage({
  name,
  service,
  city,
  pageUrl,
  timeline
}: {
  name?: string;
  service?: string;
  city?: string;
  pageUrl?: string;
  timeline?: string;
}): string {
  let message = `Hi WeeSpaces,\n`;
  if (name) message += `\nName: ${name}`;
  if (service) message += `\nService: ${service}`;
  if (city) message += `\nCity: ${city}`;
  if (timeline) message += `\nTimeline: ${timeline}`;
  if (pageUrl) message += `\nPage: ${pageUrl}`;
  message += `\n\nPlease share the available plans.`;
  
  return message;
}
