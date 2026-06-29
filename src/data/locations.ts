export type ServiceType = {
  id: string;
  name: string;
  slug: string;
  shortDesc: string;
};

export type MicroLocation = {
  id: string;
  name: string;
  slug: string;
  intent: string;
  nearbyCompanies: string[];
  landmarks: string[];
  transit: string;
  parking: string;
  gallery: string[];
};

export type CityData = {
  id: string;
  name: string;
  slug: string;
  description: string;
  localRentalCosts: string;
  businessEcosystem: string;
  transportHubs: string;
  gstRegistrationRules: string;
  gallery: string[];
  microLocations: MicroLocation[];
  landmarks: { name: string; slug: string }[];
  citations?: string[];
  occupancy?: string;
  caseStudy?: {
    client: string;
    outcome: string;
    metrics: string[];
  };
  nearbyCompaniesList?: string[];
  localGuideExpanded?: { title: string; content: string }[];
  contactInfo?: {
    address: string;
    mapIframe: string;
    phone: string;
    email: string;
    timings: string;
    coordinates: { lat: number; lng: number };
  };
  hubTitle?: string;
  hubDescription?: string;
  proximityGroups?: {
    title: string;
    nodes: { name: string; distance: string; slug?: string; travelTime?: string; mapsUrl?: string; }[];
  }[];
  whoChoosesThis?: {
    description: string;
    locations: string[];
  };
  geoSummary?: string;
  proximityFaqs?: { question: string; answer: string }[];
};

export const services: ServiceType[] = [
  { id: 'coworking', name: 'Coworking Space', slug: 'coworking-space', shortDesc: 'Flexible desks and shared amenities for freelancers and small teams.' },
  { id: 'private-office', name: 'Private Office', slug: 'private-office', shortDesc: 'Secure, enclosed workspaces for growing teams and established businesses.' },
  { id: 'managed-office', name: 'Managed Office', slug: 'managed-office', shortDesc: 'Fully custom, dedicated headquarters without the hassle of traditional leasing.' },
  { id: 'virtual-office', name: 'Virtual Office', slug: 'virtual-office', shortDesc: 'Premium business address for GST registration and mail handling.' },
  { id: 'meeting-room', name: 'Meeting Room', slug: 'meeting-room', shortDesc: 'Professional conference rooms equipped with AV and presentation tools.' },
  { id: 'office-space', name: 'Office Space for Rent', slug: 'office-space', shortDesc: 'Flexible, ready-to-move-in commercial office spaces.' },
];

export const cities: Record<string, CityData> = {
  kochi: {
    id: 'kochi',
    name: 'Kochi',
    slug: 'kochi',
    description: 'The commercial capital of Kerala, home to a thriving IT and startup ecosystem.',
    localRentalCosts: 'Commercial rents in Kochi range from ₹40 to ₹80 per sq.ft depending on the location. Prime areas like Kakkanad and MG Road command a premium. Coworking spaces offer highly cost-effective alternatives starting with zero setup costs.',
    businessEcosystem: 'Kochi is driven by IT/ITES, logistics, and maritime trade. Infopark and SmartCity host hundreds of tech companies, while MG Road and Marine Drive cater to traditional businesses, finance, and consulting.',
    transportHubs: 'Well-connected by the Kochi Metro, extensive bus networks, and the innovative Water Metro system. Cochin International Airport ensures global connectivity.',
    gstRegistrationRules: 'Kerala follows standard GST procedures. A virtual office or physical workspace in Kochi provides a highly credible business address required for quick GST registration and state compliance.',
        gallery: ['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg'],
    occupancy: '82% of seats currently occupied',
    caseStudy: {
      client: 'A leading SaaS company',
      outcome: 'Moved from a 600 sq ft leased office into WeeSpaces and expanded from 6 to 18 employees seamlessly.',
      metrics: ['Saved ₹12 lakh in setup costs', 'Zero maintenance overhead', 'Expanded team 3x']
    },
    nearbyCompaniesList: ['TCS', 'Cognizant', 'Wipro', 'KPMG', 'UST Global', 'Ernst & Young'],
    localGuideExpanded: [
      { title: 'Why Kakkanad is Kochi\'s Next Business Hub', content: 'Kakkanad is witnessing explosive growth driven by Phase 2 of Infopark and SmartCity. With the upcoming Water Metro extensions and Phase 2 of the Kochi Metro, connectivity will be unmatched.' },
      { title: 'Talent Availability', content: 'Proximity to institutions like CUSAT and Model Engineering College ensures a steady pipeline of top-tier engineering and management talent.' }
    ],
    citations: ['https://www.google.com/maps?cid=weespaces-kochi', 'https://www.justdial.com/Ernakulam/WeeSpaces-Coworking', 'https://www.coworker.com/india/kochi/weespaces'],
    contactInfo: {
      address: "4th Floor, Palal Tower, MG Road, Ravipuram, Kochi 682016",
      mapIframe: "https://maps.google.com/maps?q=Palal%20Tower,%20MG%20Road,%20Kochi&t=&z=15&ie=UTF8&iwloc=&output=embed",
      phone: "+91 92071 89111",
      email: "kochi@weespaces.in",
      timings: "Mon-Sat: 9:00 AM - 8:00 PM",
      coordinates: { lat: 9.9622, lng: 76.2442 }
    },
    hubTitle: "Our Central MG Road Headquarters — Quick Transit to Kochi's Key Sub-markets",
    hubDescription: "Our premium coworking space is located at Palal Tower, Ravipuram, right on MG Road, offering your team a prestigious CBD address. By basing your business at this central node, you avoid localized gridlocks while remaining minutes away from Kochi's primary commercial areas via the metro and highway networks:",
    proximityGroups: [
      {
        title: "Tech & IT Corridors",
        nodes: [
          { name: "Kakkanad (Infopark Phase 1 & 2 / SmartCity)", distance: "12 km", travelTime: "25 min drive", mapsUrl: "#", slug: "kakkanad" },
          { name: "Palarivattom Junction", distance: "5 km", travelTime: "15 min drive", mapsUrl: "#", slug: "palarivattom" }
        ]
      },
      {
        title: "CBD & Commercial Centers",
        nodes: [
          { name: "MG Road Metro Station", distance: "0.5 km", travelTime: "5 min walk", mapsUrl: "#", slug: "mg-road" },
          { name: "Marine Drive CBD", distance: "2 km", travelTime: "10 min drive", mapsUrl: "#", slug: "marine-drive" },
          { name: "Panampilly Nagar", distance: "1.5 km", travelTime: "8 min drive", mapsUrl: "#", slug: "panampilly-nagar" }
        ]
      },
      {
        title: "Transit & Logistics Hubs",
        nodes: [
          { name: "Kadavanthra Metro & GCDA", distance: "1 km", travelTime: "3 min via Metro", mapsUrl: "#", slug: "kadavanthra" },
          { name: "Vyttila Mobility Hub", distance: "4 km", travelTime: "12 min drive", mapsUrl: "#", slug: "vyttila" },
          { name: "Edappally (Lulu Mall)", distance: "7 km", travelTime: "15 min via Metro", mapsUrl: "#", slug: "edappally" },
          { name: "Cochin International Airport", distance: "30 km", travelTime: "45 min drive", mapsUrl: "#" }
        ]
      }
    ],
    whoChoosesThis: {
      description: "Perfect for teams working across Kochi's major commercial hubs:",
      locations: ["Infopark & SmartCity", "MG Road & Marine Drive", "Panampilly Nagar", "Edappally"]
    },
    geoSummary: "WeeSpaces' Kochi workspace is strategically located on MG Road, providing immediate Metro connectivity and quick road access to Kakkanad, Marine Drive, Kadavanthra, Panampilly Nagar, Vyttila, Edappally, and Palarivattom.",
    proximityFaqs: [
      { question: "Is WeeSpaces located inside Infopark Kakkanad?", answer: "No, our premium facility is centrally located on MG Road (Ravipuram). This strategic location allows you to bypass severe Kakkanad traffic while remaining just 20-25 minutes away via expressway." },
      { question: "How far is WeeSpaces from the Kochi Metro?", answer: "We are extremely accessible. The MG Road Metro station is just a 5-minute walk away, providing rapid transit to Edappally, Kadavanthra, and Vyttila Mobility Hub." },
      { question: "Is this location suitable for companies serving clients in Marine Drive?", answer: "Yes, Marine Drive CBD is only a 10-minute drive away, making it highly convenient for client meetings and legal or financial consulting." }
    ],
    microLocations: [
      {
        id: 'kakkanad', name: 'Kakkanad', slug: 'kakkanad', intent: 'IT companies, startups, corporates',
        nearbyCompanies: ['TCS', 'Cognizant', 'Wipro', 'KPMG'],
        landmarks: ['Infopark', 'SmartCity', 'CUSAT'],
        transit: 'Water Metro, Kakkanad Bus Stand, 5 mins to upcoming Metro',
        parking: 'Dedicated ample covered parking',
        gallery: ['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg']
      },
      {
        id: 'infopark', name: 'Infopark', slug: 'infopark', intent: 'IT companies, tech startups',
        nearbyCompanies: ['TCS', 'Cognizant', 'UST Global'],
        landmarks: ['Infopark Express Way', 'SmartCity'],
        transit: 'Infopark Bus Stop, Auto Stand',
        parking: 'Multi-level car parking available',
        gallery: ['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg']
      },
      {
        id: 'edappally', name: 'Edappally', slug: 'edappally', intent: 'Retail, startups, SMEs',
        nearbyCompanies: ['Lulu Group', 'Various Retailers'],
        landmarks: ['Lulu Mall', 'Oberon Mall', 'Edappally Church'],
        transit: 'Edappally Metro Station (2 mins walk)',
        parking: 'On-site visitor and dedicated tenant parking',
        gallery: ['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg']
      },
      {
        id: 'mg-road', name: 'MG Road', slug: 'mg-road', intent: 'Corporates, finance, consulting',
        nearbyCompanies: ['HDFC', 'Kalyan Silks', 'Various Banks'],
        landmarks: ['Maharaja College', 'Kavitha Junction'],
        transit: 'MG Road Metro Station',
        parking: 'Limited on-site, nearby paid parking available',
        gallery: ['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg']
      },
      {
        id: 'marine-drive', name: 'Marine Drive', slug: 'marine-drive', intent: 'Consulting, agencies, high-end',
        nearbyCompanies: ['Various MNCs', 'Shipping Companies'],
        landmarks: ['GCDA Complex', 'Rainbow Bridge'],
        transit: 'Boat Jetty, High Court Bus Stand',
        parking: 'Paid public parking, building basement parking',
        gallery: ['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg']
      },
      {
        id: 'kalamassery', name: 'Kalamassery', slug: 'kalamassery', intent: 'Manufacturing, startups, tech',
        nearbyCompanies: ['Startup Village', 'Maker Village'],
        landmarks: ['CUSAT', 'KINFRA Hi-Tech Park'],
        transit: 'Kalamassery Metro Station',
        parking: 'Ample on-site parking',
        gallery: ['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg']
      },
      {
        id: 'vyttila', name: 'Vyttila', slug: 'vyttila', intent: 'SMEs, logistics, corporates',
        nearbyCompanies: ['Logistics firms', 'Retail chains'],
        landmarks: ['Vyttila Mobility Hub', 'Gold Souk Grande'],
        transit: 'Vyttila Metro, Vyttila Mobility Hub (Bus/Water Metro)',
        parking: 'Dedicated building parking',
        gallery: ['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg']
      },
      {
        id: 'palarivattom', name: 'Palarivattom', slug: 'palarivattom', intent: 'SMEs, agencies, healthcare',
        nearbyCompanies: ['Renai Medicity', 'Various Agencies'],
        landmarks: ['Palarivattom Junction', 'Jawaharlal Nehru Stadium (nearby)'],
        transit: 'Palarivattom Metro Station',
        parking: 'On-site basement parking',
        gallery: ['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg']
      },
      {
        id: 'kadavanthra', name: 'Kadavanthra', slug: 'kadavanthra', intent: 'Consulting, creatives, SMEs',
        nearbyCompanies: ['Architectural firms', 'Media agencies'],
        landmarks: ['GCDA', 'Panampilly Nagar Walkway (nearby)'],
        transit: 'Kadavanthra Metro Station',
        parking: 'On-street and dedicated building parking',
        gallery: ['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg']
      },
      {
        id: 'panampilly-nagar', name: 'Panampilly Nagar', slug: 'panampilly-nagar', intent: 'Boutique agencies, premium consulting',
        nearbyCompanies: ['Design studios', 'Boutique agencies', 'Law firms'],
        landmarks: ['Panampilly Nagar Walkway', 'Avenue Center'],
        transit: 'South Railway Station (10 mins)',
        parking: 'Premium on-site parking',
        gallery: ['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg']
      }
    ],
    landmarks: [
      { name: 'Infopark', slug: 'near-infopark' },
      { name: 'SmartCity', slug: 'near-smartcity' },
      { name: 'Lulu Mall', slug: 'near-lulu-mall' },
      { name: 'CUSAT', slug: 'near-cusat' },
      { name: 'Metro Station', slug: 'near-metro-station' },
      { name: 'Seaport Airport Road', slug: 'near-seaport-airport-road' }
    ]
  },
  trivandrum: {
    id: 'trivandrum',
    name: 'Trivandrum',
    slug: 'trivandrum',
    description: 'The capital city of Kerala, known for its massive IT parks and government infrastructure.',
    localRentalCosts: 'Office rentals in Trivandrum vary from ₹35 to ₹70 per sq.ft. Areas close to Technopark often command higher rates due to IT demand, but flexible spaces eliminate the need for long-term lease lock-ins.',
    businessEcosystem: 'Trivandrum is synonymous with government administration, R&D, and enterprise IT. Technopark is one of India’s largest IT parks, driving significant economic activity.',
    transportHubs: 'Trivandrum Central Railway Station and Trivandrum International Airport offer excellent connectivity. Local transit relies heavily on KSRTC buses and a growing highway infrastructure.',
    gstRegistrationRules: 'Registering a business in the capital city provides unparalleled credibility. Our virtual and managed offices supply all required NOCs and rental agreements needed for rapid GST clearance in Kerala.',
        gallery: ['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg'],
    occupancy: '88% of seats currently occupied',
    caseStudy: {
      client: 'A Healthcare IT Startup',
      outcome: 'Set up an enterprise-grade private office for their engineering team within 48 hours without any IT infrastructure delays.',
      metrics: ['Zero CapEx on IT setup', 'Ready-to-use secure VLANs', '24/7 operations enabled']
    },
    nearbyCompaniesList: ['Infosys', 'TCS', 'UST', 'IBS Software', 'Allianz', 'Oracle'],
    localGuideExpanded: [
      { title: 'The Technopark Ecosystem', content: 'Trivandrum houses India\'s largest IT park by built-up area. Positioning your company near Technopark signals enterprise credibility and offers massive networking opportunities.' },
      { title: 'Infrastructure Boom', content: 'With the development of Taurus Downtown and new highway expansions, the Kazhakkoottam corridor is the undisputed center for IT scaling in Kerala.' }
    ],
    citations: ['https://www.google.com/maps?cid=weespaces-trivandrum', 'https://www.justdial.com/Thiruvananthapuram/WeeSpaces-Coworking', 'https://www.coworker.com/india/trivandrum/weespaces'],
    contactInfo: {
      address: "2nd Floor, Technopark Phase 3, Kazhakkoottam, Trivandrum, Kerala - 695582",
      mapIframe: "https://maps.google.com/maps?q=Relcon%20Plaza,%20Pattom,%20Trivandrum&t=&z=15&ie=UTF8&iwloc=&output=embed",
      phone: "+91 98765 43211",
      email: "trivandrum@weespaces.in",
      timings: "Mon-Sat: 9:00 AM - 8:00 PM",
      coordinates: { lat: 8.5398295, lng: 76.8778841 }
    },
    hubTitle: "Central Trivandrum Office Hub — Direct Access to the Technopark Corridor",
    hubDescription: "Based on the first floor of Relcon Plaza in Pattom, our main Trivandrum coworking hub strikes the perfect balance between city-center convenience and close proximity to Kerala’s largest IT park:",
    proximityGroups: [
      {
        title: "Technopark IT Corridor",
        nodes: [
          { name: "Technopark Phase 1 (Main Gate)", distance: "8 km", travelTime: "20 min drive", mapsUrl: "#", slug: "technopark-phase-1" },
          { name: "Technopark Phase 2 & 3 (Taurus Downtown)", distance: "10 km", travelTime: "22 min drive", mapsUrl: "#", slug: "technopark-phase-3" },
          { name: "Kazhakkoottam Junction", distance: "7 km", travelTime: "15 min drive", mapsUrl: "#", slug: "kazhakkoottam" }
        ]
      },
      {
        title: "City Center & Commercial",
        nodes: [
          { name: "Pattom Junction & LIC Area", distance: "0.2 km", travelTime: "2 min walk", mapsUrl: "#", slug: "pattom" },
          { name: "Palayam & Secretariat", distance: "3 km", travelTime: "8 min drive", mapsUrl: "#", slug: "palayam" },
          { name: "Vazhuthacaud & Kowdiar", distance: "4 km", travelTime: "10 min drive", mapsUrl: "#", slug: "kowdiar" }
        ]
      },
      {
        title: "Transit Hubs",
        nodes: [
          { name: "Trivandrum International Airport", distance: "7 km", travelTime: "20 min drive", mapsUrl: "#" }
        ]
      }
    ],
    whoChoosesThis: {
      description: "Perfect for teams working across Trivandrum's core business areas:",
      locations: ["Technopark Phases 1, 2, 3", "Kazhakkoottam", "Palayam & Secretariat", "Pattom"]
    },
    geoSummary: "WeeSpaces' Trivandrum workspace is strategically located in Pattom, offering a prestigious city-center address with fast highway access to Technopark, Kazhakkoottam, Palayam, Vazhuthacaud, and Kowdiar.",
    proximityFaqs: [
      { question: "Is WeeSpaces located inside Technopark?", answer: "No, our primary hub is centrally located in Pattom. This allows your team to enjoy city-center convenience while remaining just a 15-20 minute drive from Technopark via the bypass." },
      { question: "How far is WeeSpaces from the Secretariat?", answer: "Our workspace is highly accessible for government contractors and legal consultants, located just 5-8 minutes away from the Secretariat and Palayam." },
      { question: "Is this location suitable for companies serving clients in Kowdiar?", answer: "Yes, Kowdiar and Vazhuthacaud are only an 8-10 minute drive away, making it highly convenient for premium consulting firms and agencies." }
    ],
    microLocations: [
      {
        id: 'technopark-phase-1', name: 'Technopark Phase 1', slug: 'technopark-phase-1', intent: 'IT, government, consulting',
        nearbyCompanies: ['Infosys', 'TCS', 'UST', 'IBS'],
        landmarks: ['Technopark Front Gate', 'Kazhakkoottam Junction'],
        transit: 'Kazhakkoottam Railway Station, KSRTC Bus Stand',
        parking: 'Technopark campus parking',
        gallery: ['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg']
      },
      {
        id: 'technopark-phase-2', name: 'Technopark Phase 2', slug: 'technopark-phase-2', intent: 'IT, tech startups',
        nearbyCompanies: ['Infosys'],
        landmarks: ['Infosys Campus', 'UST Campus'],
        transit: 'Bypass Road Bus Stops',
        parking: 'Campus parking',
        gallery: ['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg']
      },
      {
        id: 'technopark-phase-3', name: 'Technopark Phase 3', slug: 'technopark-phase-3', intent: 'Enterprise IT, scaling startups',
        nearbyCompanies: ['Taurus Downtown', 'Various MNCs'],
        landmarks: ['Taurus Downtown'],
        transit: 'Bypass Road',
        parking: 'Ample campus parking',
        gallery: ['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg']
      },
      {
        id: 'kazhakkoottam', name: 'Kazhakkoottam', slug: 'kazhakkoottam', intent: 'Startups, SMEs serving IT',
        nearbyCompanies: ['Local vendors', 'IT service companies'],
        landmarks: ['Kazhakkoottam Junction', 'Al Saj'],
        transit: 'Kazhakkoottam Railway Station',
        parking: 'Building-specific parking',
        gallery: ['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg']
      },
      {
        id: 'kowdiar', name: 'Kowdiar', slug: 'kowdiar', intent: 'Premium consulting, HNIs, agencies',
        nearbyCompanies: ['Financial advisors', 'Boutique firms'],
        landmarks: ['Kowdiar Palace', 'Golf Club'],
        transit: 'Kowdiar Bus Stop',
        parking: 'Premium on-site parking',
        gallery: ['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg']
      },
      {
        id: 'pattom', name: 'Pattom', slug: 'pattom', intent: 'SMEs, coaching, consulting',
        nearbyCompanies: ['LIC', 'Kendriya Vidyalaya'],
        landmarks: ['Pattom Junction', 'St. Marys School'],
        transit: 'Pattom Bus Stand',
        parking: 'Dedicated building parking',
        gallery: ['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg']
      },
      {
        id: 'palayam', name: 'Palayam', slug: 'palayam', intent: 'Government contractors, traditional businesses',
        nearbyCompanies: ['Kerala University', 'Legislative Assembly'],
        landmarks: ['Connemara Market', 'Martyrs Column'],
        transit: 'Trivandrum Central (10 mins)',
        parking: 'Paid public parking, building basement',
        gallery: ['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg']
      },
      {
        id: 'statue', name: 'Statue', slug: 'statue', intent: 'Legal, government, consulting',
        nearbyCompanies: ['Secretariat', 'AGs Office'],
        landmarks: ['Secretariat', 'Statue Junction'],
        transit: 'Statue Bus Stop',
        parking: 'Extremely limited, public parking',
        gallery: ['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg']
      },
      {
        id: 'vazhuthacaud', name: 'Vazhuthacaud', slug: 'vazhuthacaud', intent: 'Corporate branch offices, agencies',
        nearbyCompanies: ['RBI', 'All India Radio', 'Forest Headquarters'],
        landmarks: ['Womens College', 'Cotton Hill'],
        transit: 'Vazhuthacaud Bus Stop',
        parking: 'Dedicated building parking',
        gallery: ['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg']
      },
      {
        id: 'akkulam', name: 'Akkulam', slug: 'akkulam', intent: 'Tech startups, SMEs',
        nearbyCompanies: ['Various tech firms'],
        landmarks: ['Akkulam Tourist Village', 'Lulu Mall Trivandrum'],
        transit: 'Bypass Road Bus Stops',
        parking: 'Ample on-site parking',
        gallery: ['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg']
      }
    ],
    landmarks: [
      { name: 'Technopark', slug: 'technopark' },
      { name: 'Infosys', slug: 'near-infosys' },
      { name: 'UST', slug: 'near-ust' },
      { name: 'Kazhakkoottam', slug: 'near-kazhakkoottam' }
    ]
  },
  calicut: {
    id: 'calicut',
    name: 'Calicut',
    slug: 'calicut',
    description: 'A rapidly growing IT hub and historical trading city in Northern Kerala.',
    localRentalCosts: 'Office space in Calicut is highly affordable, typically ranging from ₹30 to ₹60 per sq.ft. However, setting up an office involves significant CapEx, making coworking spaces in Cyberpark or Bypass areas highly attractive.',
    businessEcosystem: 'Historically a major trading center, Calicut is now a booming IT and startup hub. Government Cyberpark and UL CyberPark are transforming the city into a digital powerhouse.',
    transportHubs: 'Calicut International Airport and Kozhikode Railway Station serve the city. The expanding Bypass road network provides excellent connectivity for logistics and daily commuting.',
    gstRegistrationRules: 'A registered office address in Calicut is mandatory for local GST compliance. Our workspaces offer premium addresses in commercial hubs to ensure your business meets all state regulations effortlessly.',
        gallery: ['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg'],
    occupancy: '75% of seats currently occupied',
    caseStudy: {
      client: 'A leading E-commerce Logistics firm',
      outcome: 'Required a highly professional regional headquarters for their logistics managers and sales teams. Moved in over a weekend.',
      metrics: ['Zero downtime during transition', 'Premium meeting rooms for client pitches', 'Flexible scaling options']
    },
    nearbyCompaniesList: ['UL CyberPark IT firms', 'Government Cyberpark startups', 'Major Retailers', 'Logistics HQs'],
    localGuideExpanded: [
      { title: 'The Rise of Calicut Bypass', content: 'The NH 66 Bypass is rapidly evolving into Calicut\'s premier commercial corridor. By positioning here, you bypass inner-city traffic while maintaining access to premium talent.' },
      { title: 'Startup Ecosystem', content: 'Calicut is shedding its traditional trading image and embracing a robust tech ecosystem driven by local engineering colleges and incubator programs.' }
    ],
    citations: ['https://www.google.com/maps?cid=weespaces-calicut', 'https://www.justdial.com/Kozhikode/WeeSpaces-Coworking', 'https://www.coworker.com/india/calicut/weespaces'],
    contactInfo: {
      address: "Cyberpark IT Hub, Near Bypass Road, Kozhikode, Kerala - 673016",
      mapIframe: "https://maps.google.com/maps?q=Neeloth%20Plaza,%20East%20Nadakkave,%20Kozhikode&t=&z=15&ie=UTF8&iwloc=&output=embed",
      phone: "+91 98765 43212",
      email: "calicut@weespaces.in",
      timings: "Mon-Sat: 9:00 AM - 8:00 PM",
      coordinates: { lat: 11.2384725, lng: 75.8354728 }
    },
    hubTitle: "Our Flagship Calicut Hub — Positioned Perfectly in the Heart of the City",
    hubDescription: "Our premium shared workspace, The Work Lounge, is located at Neeloth Plaza, East Nadakkave. This highly central location gives startups and freelancers a premium business address inside the city while maintaining easy transit times to Kozhikode’s growing outer business parks:",
    proximityGroups: [
      {
        title: "IT & Bypass Corridors",
        nodes: [
          { name: "Thondayad Bypass & Cyberpark Area", distance: "4 km", travelTime: "12 min drive", mapsUrl: "#", slug: "cyberpark" }
        ]
      },
      {
        title: "Commercial Centers",
        nodes: [
          { name: "Wayanad Road", distance: "0.1 km", travelTime: "2 min walk", mapsUrl: "#" },
          { name: "Mavoor Road Commercial Corridor", distance: "1.5 km", travelTime: "5 min drive", mapsUrl: "#", slug: "mavoor-road" },
          { name: "Vellayil Beach & West Hill", distance: "4 km", travelTime: "10 min drive", mapsUrl: "#", slug: "west-hill" }
        ]
      },
      {
        title: "Transit Hubs",
        nodes: [
          { name: "Kozhikode Central Railway Station", distance: "3 km", travelTime: "8 min drive", mapsUrl: "#" }
        ]
      }
    ],
    whoChoosesThis: {
      description: "Perfect for teams working across Calicut's major business areas:",
      locations: ["Cyberpark & Bypass", "Mavoor Road", "Wayanad Road", "West Hill"]
    },
    geoSummary: "WeeSpaces' Calicut workspace is strategically located at East Nadakkave, providing an elegant city-center base with smooth access to Cyberpark, Thondayad Bypass, Mavoor Road, and the Railway Station.",
    proximityFaqs: [
      { question: "Is WeeSpaces located inside Cyberpark?", answer: "No, our flagship workspace is located centrally at East Nadakkave. This allows you to maintain a premium address inside the city while being just a 12-minute drive from Cyberpark." },
      { question: "How far is WeeSpaces from Mavoor Road?", answer: "We are extremely close to the city's main commercial artery. Mavoor Road is just a 5-minute drive from our workspace." },
      { question: "Is this location suitable for companies serving clients in West Hill?", answer: "Absolutely. West Hill and Vellayil are only a 10-minute drive away, making it highly convenient for businesses operating in North Calicut." }
    ],
    microLocations: [
      {
        id: 'cyberpark', name: 'Cyberpark', slug: 'cyberpark', intent: 'IT, SMEs, trading businesses',
        nearbyCompanies: ['Various IT firms in Govt Cyberpark'],
        landmarks: ['Government Cyberpark'],
        transit: 'Bypass Road, 15 mins to Calicut Railway Station',
        parking: 'Dedicated park parking',
        gallery: ['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg']
      },
      {
        id: 'ul-cyberpark', name: 'UL CyberPark', slug: 'ul-cyberpark', intent: 'Enterprise IT, corporates',
        nearbyCompanies: ['TCS (upcoming)', 'Various MNCs'],
        landmarks: ['UL CyberPark IT Building'],
        transit: 'NH Bypass',
        parking: 'Ample covered campus parking',
        gallery: ['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg']
      },
      {
        id: 'hilite-business-park', name: 'HiLite Business Park', slug: 'hilite-business-park', intent: 'Retail brands, consulting, branch offices',
        nearbyCompanies: ['HiLite Builders', 'Retail HQs'],
        landmarks: ['HiLite Mall', 'Thondayad Bypass'],
        transit: 'Thondayad Bypass Bus Stop',
        parking: 'Massive mall and business park parking',
        gallery: ['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg']
      },
      {
        id: 'mavoor-road', name: 'Mavoor Road', slug: 'mavoor-road', intent: 'Traditional businesses, healthcare, trading',
        nearbyCompanies: ['Baby Memorial Hospital', 'Various Retailers'],
        landmarks: ['Mofussil Bus Stand', 'Focus Mall'],
        transit: 'New Bus Stand (Mofussil)',
        parking: 'Building basement parking, paid parking nearby',
        gallery: ['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg']
      },
      {
        id: 'palazhi', name: 'Palazhi', slug: 'palazhi', intent: 'SMEs, logistics, tech startups',
        nearbyCompanies: ['Logistics and trading firms'],
        landmarks: ['HiLite City (nearby)', 'Bypass Junction'],
        transit: 'Bypass Road',
        parking: 'On-site building parking',
        gallery: ['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg']
      },
      {
        id: 'kozhikode-bypass', name: 'Kozhikode Bypass', slug: 'kozhikode-bypass', intent: 'Showrooms, corporate offices, logistics',
        nearbyCompanies: ['Automobile showrooms', 'Logistics'],
        landmarks: ['Thondayad', 'Ramanattukara Highway'],
        transit: 'Highway Bus Stops',
        parking: 'Excellent surface parking',
        gallery: ['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg']
      },
      {
        id: 'ramanattukara', name: 'Ramanattukara', slug: 'ramanattukara', intent: 'Trading, warehousing, SMEs',
        nearbyCompanies: ['Wholesale traders'],
        landmarks: ['Ramanattukara Junction', 'Farook College (nearby)'],
        transit: 'Ramanattukara Bus Stand, Highway access',
        parking: 'Ample on-site parking',
        gallery: ['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg']
      },
      {
        id: 'west-hill', name: 'West Hill', slug: 'west-hill', intent: 'Agencies, branch offices, SMEs',
        nearbyCompanies: ['Educational institutions', 'Local businesses'],
        landmarks: ['West Hill Railway Station', 'Govt Engineering College'],
        transit: 'West Hill Railway Station, Kannur Road',
        parking: 'Dedicated building parking',
        gallery: ['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg']
      },
      {
        id: 'nadakkavu', name: 'Nadakkavu', slug: 'nadakkavu', intent: 'Automobile, trading, traditional businesses',
        nearbyCompanies: ['Auto dealerships', 'Retail chains'],
        landmarks: ['Vandipetta', 'English Church'],
        transit: 'Kannur Road Bus Stops',
        parking: 'On-street and building parking',
        gallery: ['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg']
      },
      {
        id: 'sm-street', name: 'SM Street', slug: 'sm-street', intent: 'Retail, wholesale, trading',
        nearbyCompanies: ['Hundreds of retail/wholesale shops'],
        landmarks: ['Mananchira Square (nearby)', 'Mittai Theruvu'],
        transit: 'Palayam Bus Stand, Calicut Railway Station (10 mins)',
        parking: 'Public parking lots (highly congested)',
        gallery: ['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg']
      }
    ],
    landmarks: [
      { name: 'Cyberpark', slug: 'near-cyberpark' },
      { name: 'HiLite Mall', slug: 'near-hilite-mall' },
      { name: 'UL CyberPark', slug: 'near-ul-cyberpark' },
      { name: 'Mavoor Road', slug: 'near-mavoor-road' }
    ]
  },
  coimbatore: {
    id: 'coimbatore',
    name: 'Coimbatore',
    slug: 'coimbatore',
    description: 'The Manchester of South India, a powerhouse of manufacturing, textiles, and growing IT.',
    localRentalCosts: 'Commercial rents in Coimbatore generally span from ₹45 to ₹85 per sq.ft. Prime corridors like Avinashi Road and Race Course are premium markets. Plug-and-play offices offer an ROI-positive alternative to traditional leases.',
    businessEcosystem: 'Coimbatore is a diversified economic engine. It leads in textiles, auto components, and manufacturing, while rapidly expanding its IT footprint through hubs like Tidel Park and Saravanampatti.',
    transportHubs: 'Coimbatore International Airport, Coimbatore Junction, and major national highways connect the city. Avinashi Road acts as the primary commercial and transit artery.',
    gstRegistrationRules: 'As a major commercial hub in Tamil Nadu, GST registration requires a credible physical address. Our managed and virtual offices in Coimbatore provide the necessary documentation for swift approval.',
        gallery: ['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg'],
    occupancy: 'Grand Opening - Pre-book now!',
    caseStudy: {
      client: 'A SaaS company (Case Study from Kochi)',
      outcome: 'Moved from a 600 sq ft leased office into WeeSpaces and expanded from 6 to 18 employees seamlessly.',
      metrics: ['Saved ₹12 lakh in setup costs', 'Zero maintenance overhead', 'Expanded team 3x']
    },
    nearbyCompaniesList: ['Bosch', 'Cognizant', 'Capgemini', 'ThoughtWorks', 'TCS', 'Zoho Teams', 'L&T Technology', 'Tech Mahindra'],
    localGuideExpanded: [
      { title: 'Why Kalapatti is Coimbatore\'s next business hub', content: 'Kalapatti is strategically positioned between the Airport, Tidel Park, and major residential corridors. It offers the perfect blend of enterprise infrastructure without the congestion of Avinashi Road.' },
      { title: 'Talent Availability', content: 'Proximity to premier institutions like PSG Tech and CIT ensures that IT and manufacturing companies have unparalleled access to world-class engineering talent.' }
    ],
    citations: ['https://www.google.com/maps?cid=weespaces-coimbatore', 'https://www.justdial.com/Coimbatore/WeeSpaces-Coworking', 'https://www.coworker.com/india/coimbatore/weespaces'],
    contactInfo: {
      address: "123, XYZ Tower, Avinashi Road, Coimbatore, Tamil Nadu - 641014",
      mapIframe: "https://maps.google.com/maps?q=Vidyanagar%203rd%20street,%20Kalapatti,%20Coimbatore&t=&z=15&ie=UTF8&iwloc=&output=embed",
      phone: "+91 98765 43213",
      email: "coimbatore@weespaces.in",
      timings: "Mon-Sat: 8:00 AM - 8:00 PM",
      coordinates: { lat: 11.0118749, lng: 76.9751912 }
    },
    hubTitle: "One Premium Coimbatore Hub — Strategically Connected to Every Major IT & Business Corridor",
    hubDescription: "While our actual, state-of-the-art coworking facility is located in the rapidly growing business hub of Kalapatti (Vidyanagar 3rd street), our campus is strategically positioned to provide effortless, traffic-free access to Coimbatore’s primary commercial neighborhoods and transit points:",
    proximityGroups: [
      {
        title: "IT Corridor",
        nodes: [
          { name: "Tidel Park Coimbatore", distance: "1.5 km", travelTime: "5 min drive", mapsUrl: "#", slug: "tidel-park-area" },
          { name: "Peelamedu", distance: "4.5 km", travelTime: "12 min drive", mapsUrl: "#", slug: "peelamedu" },
          { name: "Saravanampatti & CHIL SEZ", distance: "8.0 km", travelTime: "15 min drive", mapsUrl: "#", slug: "saravanampatti" },
          { name: "Avinashi Road Corridor", distance: "3.0 km", travelTime: "10 min drive", mapsUrl: "#", slug: "avinashi-road" }
        ]
      },
      {
        title: "Business District",
        nodes: [
          { name: "Race Course", distance: "10 km", travelTime: "18 min drive", mapsUrl: "#", slug: "race-course" },
          { name: "Gandhipuram", distance: "12 km", travelTime: "20 min drive", mapsUrl: "#", slug: "gandhipuram" },
          { name: "RS Puram", distance: "14 km", travelTime: "22 min drive", mapsUrl: "#", slug: "rs-puram" }
        ]
      },
      {
        title: "Transit & Logistics",
        nodes: [
          { name: "Coimbatore International Airport", distance: "0.5 km", travelTime: "10 min walk", mapsUrl: "#" },
          { name: "Neelambur & L&T Bypass", distance: "5.0 km", travelTime: "10 min drive", mapsUrl: "#" }
        ]
      }
    ],
    whoChoosesThis: {
      description: "Perfect for teams working across Coimbatore's major business districts:",
      locations: ["Tidel Park & Peelamedu", "Saravanampatti", "Race Course", "Airport Road"]
    },
    geoSummary: "WeeSpaces' Coimbatore workspace is located in Kalapatti, providing convenient access to Tidel Park, Coimbatore International Airport, Peelamedu, Saravanampatti, Avinashi Road, Race Course, Gandhipuram, and RS Puram.",
    proximityFaqs: [
      { question: "Is WeeSpaces located inside Tidel Park?", answer: "No, our primary hub is located in Kalapatti. This gives you premium amenities and parking without the congestion of Tidel Park, while remaining just a 5-minute drive away." },
      { question: "How far is WeeSpaces from Coimbatore International Airport?", answer: "We are extremely close to the airport. In fact, it is practically at a walkable distance from our Kalapatti workspace." },
      { question: "Is WeeSpaces suitable for companies working near Saravanampatti?", answer: "Yes, we are highly accessible for tech companies, located just an approximate 15-minute drive from the Saravanampatti CHIL SEZ IT corridor." },
      { question: "How long does it take to reach Race Course from WeeSpaces?", answer: "Race Course and the central business district are approximately an 18-20 minute drive by road, depending on traffic." }
    ],
    microLocations: [
      {
        id: 'peelamedu', name: 'Peelamedu', slug: 'peelamedu', intent: 'Manufacturing, IT, startups',
        nearbyCompanies: ['PSG Tech', 'Various IT firms in Tidel Park'],
        landmarks: ['PSG College of Technology', 'Fun Republic Mall'],
        transit: 'Avinashi Road, Peelamedu Railway Station',
        parking: 'Dedicated building parking',
        gallery: ['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg']
      },
      {
        id: 'avinashi-road', name: 'Avinashi Road', slug: 'avinashi-road', intent: 'Corporates, premium consulting, retail',
        nearbyCompanies: ['Major Banks', 'Corporate Branch HQs'],
        landmarks: ['Coimbatore Airport (nearby)', 'KMCH'],
        transit: 'Arterial Road, Frequent Buses',
        parking: 'Premium on-site parking',
        gallery: ['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg']
      },
      {
        id: 'hope-college', name: 'Hope College', slug: 'hope-college', intent: 'IT, tech startups, SMEs',
        nearbyCompanies: ['Tech startups', 'Educational institutions'],
        landmarks: ['Tidel Park (nearby)', 'Hope College Junction'],
        transit: 'Avinashi Road',
        parking: 'On-site parking',
        gallery: ['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg']
      },
      {
        id: 'sitra', name: 'SITRA', slug: 'sitra', intent: 'Textiles, research, manufacturing, IT',
        nearbyCompanies: ['SITRA', 'KMCH', 'Coimbatore Airport Offices'],
        landmarks: ['SITRA Junction', 'Coimbatore International Airport'],
        transit: 'Airport Road',
        parking: 'Ample campus/building parking',
        gallery: ['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg']
      },
      {
        id: 'saravanampatti', name: 'Saravanampatti', slug: 'saravanampatti', intent: 'Enterprise IT, scaling startups',
        nearbyCompanies: ['Cognizant', 'Bosch', 'KGISL'],
        landmarks: ['CHIL SEZ', 'KGISL Tech Park'],
        transit: 'Sathy Road',
        parking: 'Tech park scale parking',
        gallery: ['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg']
      },
      {
        id: 'race-course', name: 'Race Course', slug: 'race-course', intent: 'Premium consulting, HNIs, financial services',
        nearbyCompanies: ['Wealth management firms', 'Boutique agencies'],
        landmarks: ['Race Course Walking Track', 'Taj Vivanta'],
        transit: 'Coimbatore Junction Railway Station (5 mins)',
        parking: 'Premium dedicated parking',
        gallery: ['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg']
      },
      {
        id: 'gandhipuram', name: 'Gandhipuram', slug: 'gandhipuram', intent: 'Trading, traditional businesses, retail',
        nearbyCompanies: ['Hundreds of commercial shops', 'Hotels'],
        landmarks: ['Cross Cut Road', 'Gandhipuram Bus Stand'],
        transit: 'Central Bus Stand (Gandhipuram)',
        parking: 'Paid public parking, building basements',
        gallery: ['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg']
      },
      {
        id: 'rs-puram', name: 'RS Puram', slug: 'rs-puram', intent: 'Retail, consulting, medical, agencies',
        nearbyCompanies: ['Jewellery brands', 'High-end retail'],
        landmarks: ['DB Road', 'Annapoorna'],
        transit: 'DB Road, Thadagam Road',
        parking: 'On-street parking (often congested)',
        gallery: ['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg']
      },
      {
        id: 'tidel-park-area', name: 'Tidel Park Area', slug: 'tidel-park-area', intent: 'Enterprise IT, SMEs serving IT',
        nearbyCompanies: ['Wipro', 'TCS', 'Payoda', 'State Street HCL'],
        landmarks: ['Tidel Park Coimbatore', 'ELCOT SEZ'],
        transit: 'Avinashi Road, Peelamedu',
        parking: 'SEZ scale parking',
        gallery: ['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg']
      },
      {
        id: 'neelambur', name: 'Neelambur', slug: 'neelambur', intent: 'Logistics, manufacturing, large corporates',
        nearbyCompanies: ['L&T Bypass companies', 'Logistics hubs'],
        landmarks: ['L&T Bypass', 'PSG Itech'],
        transit: 'Highway access',
        parking: 'Massive surface parking',
        gallery: ['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg']
      }
    ],
    landmarks: [
      { name: 'Airport', slug: 'near-airport' },
      { name: 'TIDEL Park', slug: 'near-tidel-park' },
      { name: 'PSG Tech', slug: 'near-psg-tech' },
      { name: 'Hope College', slug: 'near-hope-college' },
      { name: 'SITRA', slug: 'near-sitra' },
      { name: 'Avinashi Road', slug: 'near-avinashi-road' }
    ]
  }
};
