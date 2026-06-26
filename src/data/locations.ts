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
  microLocations: MicroLocation[];
  landmarks: { name: string; slug: string }[];
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
    microLocations: [
      {
        id: 'kakkanad', name: 'Kakkanad', slug: 'kakkanad', intent: 'IT companies, startups, corporates',
        nearbyCompanies: ['TCS', 'Cognizant', 'Wipro', 'KPMG'],
        landmarks: ['Infopark', 'SmartCity', 'CUSAT'],
        transit: 'Water Metro, Kakkanad Bus Stand, 5 mins to upcoming Metro',
        parking: 'Dedicated ample covered parking'
      },
      {
        id: 'infopark', name: 'Infopark', slug: 'infopark', intent: 'IT companies, tech startups',
        nearbyCompanies: ['TCS', 'Cognizant', 'UST Global'],
        landmarks: ['Infopark Express Way', 'SmartCity'],
        transit: 'Infopark Bus Stop, Auto Stand',
        parking: 'Multi-level car parking available'
      },
      {
        id: 'edappally', name: 'Edappally', slug: 'edappally', intent: 'Retail, startups, SMEs',
        nearbyCompanies: ['Lulu Group', 'Various Retailers'],
        landmarks: ['Lulu Mall', 'Oberon Mall', 'Edappally Church'],
        transit: 'Edappally Metro Station (2 mins walk)',
        parking: 'On-site visitor and dedicated tenant parking'
      },
      {
        id: 'mg-road', name: 'MG Road', slug: 'mg-road', intent: 'Corporates, finance, consulting',
        nearbyCompanies: ['HDFC', 'Kalyan Silks', 'Various Banks'],
        landmarks: ['Maharaja College', 'Kavitha Junction'],
        transit: 'MG Road Metro Station',
        parking: 'Limited on-site, nearby paid parking available'
      },
      {
        id: 'marine-drive', name: 'Marine Drive', slug: 'marine-drive', intent: 'Consulting, agencies, high-end',
        nearbyCompanies: ['Various MNCs', 'Shipping Companies'],
        landmarks: ['GCDA Complex', 'Rainbow Bridge'],
        transit: 'Boat Jetty, High Court Bus Stand',
        parking: 'Paid public parking, building basement parking'
      },
      {
        id: 'kalamassery', name: 'Kalamassery', slug: 'kalamassery', intent: 'Manufacturing, startups, tech',
        nearbyCompanies: ['Startup Village', 'Maker Village'],
        landmarks: ['CUSAT', 'KINFRA Hi-Tech Park'],
        transit: 'Kalamassery Metro Station',
        parking: 'Ample on-site parking'
      },
      {
        id: 'vyttila', name: 'Vyttila', slug: 'vyttila', intent: 'SMEs, logistics, corporates',
        nearbyCompanies: ['Logistics firms', 'Retail chains'],
        landmarks: ['Vyttila Mobility Hub', 'Gold Souk Grande'],
        transit: 'Vyttila Metro, Vyttila Mobility Hub (Bus/Water Metro)',
        parking: 'Dedicated building parking'
      },
      {
        id: 'palarivattom', name: 'Palarivattom', slug: 'palarivattom', intent: 'SMEs, agencies, healthcare',
        nearbyCompanies: ['Renai Medicity', 'Various Agencies'],
        landmarks: ['Palarivattom Junction', 'Jawaharlal Nehru Stadium (nearby)'],
        transit: 'Palarivattom Metro Station',
        parking: 'On-site basement parking'
      },
      {
        id: 'kadavanthra', name: 'Kadavanthra', slug: 'kadavanthra', intent: 'Consulting, creatives, SMEs',
        nearbyCompanies: ['Architectural firms', 'Media agencies'],
        landmarks: ['GCDA', 'Panampilly Nagar Walkway (nearby)'],
        transit: 'Kadavanthra Metro Station',
        parking: 'On-street and dedicated building parking'
      },
      {
        id: 'panampilly-nagar', name: 'Panampilly Nagar', slug: 'panampilly-nagar', intent: 'Boutique agencies, premium consulting',
        nearbyCompanies: ['Design studios', 'Boutique agencies', 'Law firms'],
        landmarks: ['Panampilly Nagar Walkway', 'Avenue Center'],
        transit: 'South Railway Station (10 mins)',
        parking: 'Premium on-site parking'
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
    microLocations: [
      {
        id: 'technopark-phase-1', name: 'Technopark Phase 1', slug: 'technopark-phase-1', intent: 'IT, government, consulting',
        nearbyCompanies: ['Infosys', 'TCS', 'UST', 'IBS'],
        landmarks: ['Technopark Front Gate', 'Kazhakkoottam Junction'],
        transit: 'Kazhakkoottam Railway Station, KSRTC Bus Stand',
        parking: 'Technopark campus parking'
      },
      {
        id: 'technopark-phase-2', name: 'Technopark Phase 2', slug: 'technopark-phase-2', intent: 'IT, tech startups',
        nearbyCompanies: ['Infosys'],
        landmarks: ['Infosys Campus', 'UST Campus'],
        transit: 'Bypass Road Bus Stops',
        parking: 'Campus parking'
      },
      {
        id: 'technopark-phase-3', name: 'Technopark Phase 3', slug: 'technopark-phase-3', intent: 'Enterprise IT, scaling startups',
        nearbyCompanies: ['Taurus Downtown', 'Various MNCs'],
        landmarks: ['Taurus Downtown'],
        transit: 'Bypass Road',
        parking: 'Ample campus parking'
      },
      {
        id: 'kazhakkoottam', name: 'Kazhakkoottam', slug: 'kazhakkoottam', intent: 'Startups, SMEs serving IT',
        nearbyCompanies: ['Local vendors', 'IT service companies'],
        landmarks: ['Kazhakkoottam Junction', 'Al Saj'],
        transit: 'Kazhakkoottam Railway Station',
        parking: 'Building-specific parking'
      },
      {
        id: 'kowdiar', name: 'Kowdiar', slug: 'kowdiar', intent: 'Premium consulting, HNIs, agencies',
        nearbyCompanies: ['Financial advisors', 'Boutique firms'],
        landmarks: ['Kowdiar Palace', 'Golf Club'],
        transit: 'Kowdiar Bus Stop',
        parking: 'Premium on-site parking'
      },
      {
        id: 'pattom', name: 'Pattom', slug: 'pattom', intent: 'SMEs, coaching, consulting',
        nearbyCompanies: ['LIC', 'Kendriya Vidyalaya'],
        landmarks: ['Pattom Junction', 'St. Marys School'],
        transit: 'Pattom Bus Stand',
        parking: 'Dedicated building parking'
      },
      {
        id: 'palayam', name: 'Palayam', slug: 'palayam', intent: 'Government contractors, traditional businesses',
        nearbyCompanies: ['Kerala University', 'Legislative Assembly'],
        landmarks: ['Connemara Market', 'Martyrs Column'],
        transit: 'Trivandrum Central (10 mins)',
        parking: 'Paid public parking, building basement'
      },
      {
        id: 'statue', name: 'Statue', slug: 'statue', intent: 'Legal, government, consulting',
        nearbyCompanies: ['Secretariat', 'AGs Office'],
        landmarks: ['Secretariat', 'Statue Junction'],
        transit: 'Statue Bus Stop',
        parking: 'Extremely limited, public parking'
      },
      {
        id: 'vazhuthacaud', name: 'Vazhuthacaud', slug: 'vazhuthacaud', intent: 'Corporate branch offices, agencies',
        nearbyCompanies: ['RBI', 'All India Radio', 'Forest Headquarters'],
        landmarks: ['Womens College', 'Cotton Hill'],
        transit: 'Vazhuthacaud Bus Stop',
        parking: 'Dedicated building parking'
      },
      {
        id: 'akkulam', name: 'Akkulam', slug: 'akkulam', intent: 'Tech startups, SMEs',
        nearbyCompanies: ['Various tech firms'],
        landmarks: ['Akkulam Tourist Village', 'Lulu Mall Trivandrum'],
        transit: 'Bypass Road Bus Stops',
        parking: 'Ample on-site parking'
      }
    ],
    landmarks: [
      { name: 'Technopark', slug: 'near-technopark' },
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
    microLocations: [
      {
        id: 'cyberpark', name: 'Cyberpark', slug: 'cyberpark', intent: 'IT, SMEs, trading businesses',
        nearbyCompanies: ['Various IT firms in Govt Cyberpark'],
        landmarks: ['Government Cyberpark'],
        transit: 'Bypass Road, 15 mins to Calicut Railway Station',
        parking: 'Dedicated park parking'
      },
      {
        id: 'ul-cyberpark', name: 'UL CyberPark', slug: 'ul-cyberpark', intent: 'Enterprise IT, corporates',
        nearbyCompanies: ['TCS (upcoming)', 'Various MNCs'],
        landmarks: ['UL CyberPark IT Building'],
        transit: 'NH Bypass',
        parking: 'Ample covered campus parking'
      },
      {
        id: 'hilite-business-park', name: 'HiLite Business Park', slug: 'hilite-business-park', intent: 'Retail brands, consulting, branch offices',
        nearbyCompanies: ['HiLite Builders', 'Retail HQs'],
        landmarks: ['HiLite Mall', 'Thondayad Bypass'],
        transit: 'Thondayad Bypass Bus Stop',
        parking: 'Massive mall and business park parking'
      },
      {
        id: 'mavoor-road', name: 'Mavoor Road', slug: 'mavoor-road', intent: 'Traditional businesses, healthcare, trading',
        nearbyCompanies: ['Baby Memorial Hospital', 'Various Retailers'],
        landmarks: ['Mofussil Bus Stand', 'Focus Mall'],
        transit: 'New Bus Stand (Mofussil)',
        parking: 'Building basement parking, paid parking nearby'
      },
      {
        id: 'palazhi', name: 'Palazhi', slug: 'palazhi', intent: 'SMEs, logistics, tech startups',
        nearbyCompanies: ['Logistics and trading firms'],
        landmarks: ['HiLite City (nearby)', 'Bypass Junction'],
        transit: 'Bypass Road',
        parking: 'On-site building parking'
      },
      {
        id: 'kozhikode-bypass', name: 'Kozhikode Bypass', slug: 'kozhikode-bypass', intent: 'Showrooms, corporate offices, logistics',
        nearbyCompanies: ['Automobile showrooms', 'Logistics'],
        landmarks: ['Thondayad', 'Ramanattukara Highway'],
        transit: 'Highway Bus Stops',
        parking: 'Excellent surface parking'
      },
      {
        id: 'ramanattukara', name: 'Ramanattukara', slug: 'ramanattukara', intent: 'Trading, warehousing, SMEs',
        nearbyCompanies: ['Wholesale traders'],
        landmarks: ['Ramanattukara Junction', 'Farook College (nearby)'],
        transit: 'Ramanattukara Bus Stand, Highway access',
        parking: 'Ample on-site parking'
      },
      {
        id: 'west-hill', name: 'West Hill', slug: 'west-hill', intent: 'Agencies, branch offices, SMEs',
        nearbyCompanies: ['Educational institutions', 'Local businesses'],
        landmarks: ['West Hill Railway Station', 'Govt Engineering College'],
        transit: 'West Hill Railway Station, Kannur Road',
        parking: 'Dedicated building parking'
      },
      {
        id: 'nadakkavu', name: 'Nadakkavu', slug: 'nadakkavu', intent: 'Automobile, trading, traditional businesses',
        nearbyCompanies: ['Auto dealerships', 'Retail chains'],
        landmarks: ['Vandipetta', 'English Church'],
        transit: 'Kannur Road Bus Stops',
        parking: 'On-street and building parking'
      },
      {
        id: 'sm-street', name: 'SM Street', slug: 'sm-street', intent: 'Retail, wholesale, trading',
        nearbyCompanies: ['Hundreds of retail/wholesale shops'],
        landmarks: ['Mananchira Square (nearby)', 'Mittai Theruvu'],
        transit: 'Palayam Bus Stand, Calicut Railway Station (10 mins)',
        parking: 'Public parking lots (highly congested)'
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
    microLocations: [
      {
        id: 'peelamedu', name: 'Peelamedu', slug: 'peelamedu', intent: 'Manufacturing, IT, startups',
        nearbyCompanies: ['PSG Tech', 'Various IT firms in Tidel Park'],
        landmarks: ['PSG College of Technology', 'Fun Republic Mall'],
        transit: 'Avinashi Road, Peelamedu Railway Station',
        parking: 'Dedicated building parking'
      },
      {
        id: 'avinashi-road', name: 'Avinashi Road', slug: 'avinashi-road', intent: 'Corporates, premium consulting, retail',
        nearbyCompanies: ['Major Banks', 'Corporate Branch HQs'],
        landmarks: ['Coimbatore Airport (nearby)', 'KMCH'],
        transit: 'Arterial Road, Frequent Buses',
        parking: 'Premium on-site parking'
      },
      {
        id: 'hope-college', name: 'Hope College', slug: 'hope-college', intent: 'IT, tech startups, SMEs',
        nearbyCompanies: ['Tech startups', 'Educational institutions'],
        landmarks: ['Tidel Park (nearby)', 'Hope College Junction'],
        transit: 'Avinashi Road',
        parking: 'On-site parking'
      },
      {
        id: 'sitra', name: 'SITRA', slug: 'sitra', intent: 'Textiles, research, manufacturing, IT',
        nearbyCompanies: ['SITRA', 'KMCH', 'Coimbatore Airport Offices'],
        landmarks: ['SITRA Junction', 'Coimbatore International Airport'],
        transit: 'Airport Road',
        parking: 'Ample campus/building parking'
      },
      {
        id: 'saravanampatti', name: 'Saravanampatti', slug: 'saravanampatti', intent: 'Enterprise IT, scaling startups',
        nearbyCompanies: ['Cognizant', 'Bosch', 'KGISL'],
        landmarks: ['CHIL SEZ', 'KGISL Tech Park'],
        transit: 'Sathy Road',
        parking: 'Tech park scale parking'
      },
      {
        id: 'race-course', name: 'Race Course', slug: 'race-course', intent: 'Premium consulting, HNIs, financial services',
        nearbyCompanies: ['Wealth management firms', 'Boutique agencies'],
        landmarks: ['Race Course Walking Track', 'Taj Vivanta'],
        transit: 'Coimbatore Junction Railway Station (5 mins)',
        parking: 'Premium dedicated parking'
      },
      {
        id: 'gandhipuram', name: 'Gandhipuram', slug: 'gandhipuram', intent: 'Trading, traditional businesses, retail',
        nearbyCompanies: ['Hundreds of commercial shops', 'Hotels'],
        landmarks: ['Cross Cut Road', 'Gandhipuram Bus Stand'],
        transit: 'Central Bus Stand (Gandhipuram)',
        parking: 'Paid public parking, building basements'
      },
      {
        id: 'rs-puram', name: 'RS Puram', slug: 'rs-puram', intent: 'Retail, consulting, medical, agencies',
        nearbyCompanies: ['Jewellery brands', 'High-end retail'],
        landmarks: ['DB Road', 'Annapoorna'],
        transit: 'DB Road, Thadagam Road',
        parking: 'On-street parking (often congested)'
      },
      {
        id: 'tidel-park-area', name: 'Tidel Park Area', slug: 'tidel-park-area', intent: 'Enterprise IT, SMEs serving IT',
        nearbyCompanies: ['Wipro', 'TCS', 'Payoda', 'State Street HCL'],
        landmarks: ['Tidel Park Coimbatore', 'ELCOT SEZ'],
        transit: 'Avinashi Road, Peelamedu',
        parking: 'SEZ scale parking'
      },
      {
        id: 'neelambur', name: 'Neelambur', slug: 'neelambur', intent: 'Logistics, manufacturing, large corporates',
        nearbyCompanies: ['L&T Bypass companies', 'Logistics hubs'],
        landmarks: ['L&T Bypass', 'PSG Itech'],
        transit: 'Highway access',
        parking: 'Massive surface parking'
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
