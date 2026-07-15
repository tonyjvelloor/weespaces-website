const fs = require('fs');

const kochiLocations = `
      {
        id: 'vyttila', name: 'Vyttila', slug: 'vyttila', intent: 'Transport Hub, SMEs, Remote Teams',
        nearbyCompanies: ['Logistics firms', 'Travel companies', 'SMEs'],
        landmarks: ['Vyttila Mobility Hub', 'Kundanoor Junction'],
        transit: 'Vyttila Metro, Vyttila Mobility Hub',
        parking: 'On-street and dedicated building parking',
        type: 'neighborhood', gallery: ['/images/branches/kochi/workspace1.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Major transit and logistics hub connecting Ernakulam to the rest of Kerala.',
        gstSuitability: 'Excellent for logistics and trading companies needing easy highway access.',
        whoChoosesThis: 'Trading firms, logistics companies, and remote teams needing immediate access to NH66.'
      },
      {
        id: 'kadavanthra', name: 'Kadavanthra', slug: 'kadavanthra', intent: 'Consulting, Legal, Agencies',
        nearbyCompanies: ['Law firms', 'Accounting agencies', 'Real estate'],
        landmarks: ['GCDA Complex', 'Kadavanthra Metro'],
        transit: 'Kadavanthra Metro Station',
        parking: 'Dedicated parking available',
        type: 'neighborhood', gallery: ['/images/branches/kochi/workspace2.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Premium residential-commercial mix, popular with established professionals.',
        gstSuitability: 'Highly prestigious address for professional services firms.',
        whoChoosesThis: 'Consultants, lawyers, and boutique agencies.'
      },
      {
        id: 'marine-drive', name: 'Marine Drive', slug: 'marine-drive', intent: 'Finance, Banking, Enterprise',
        nearbyCompanies: ['Banks', 'Financial institutions', 'Corporates'],
        landmarks: ['High Court of Kerala', 'GCDA Complex'],
        transit: 'High Court Jetty, MG Road Metro',
        parking: 'Public pay-and-park facilities',
        type: 'neighborhood', gallery: ['/images/branches/kochi/workspace3.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Kochi’s traditional Central Business District (CBD) focused on finance and trade.',
        gstSuitability: 'Ideal for financial services and trading firms.',
        whoChoosesThis: 'Stock brokers, banking back-offices, and established enterprises.'
      },
      {
        id: 'palarivattom', name: 'Palarivattom', slug: 'palarivattom', intent: 'Retail, SMEs, IT Support',
        nearbyCompanies: ['Retail brands', 'IT support firms', 'Healthcare'],
        landmarks: ['Palarivattom Bypass', 'Jawaharlal Nehru Stadium'],
        transit: 'Palarivattom Metro Station',
        parking: 'Ample on-site parking',
        type: 'neighborhood', gallery: ['/images/branches/kochi/workspace4.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Bustling commercial junction connecting the city center to the IT corridor.',
        gstSuitability: 'Great for retail and wholesale businesses.',
        whoChoosesThis: 'Retailers, IT hardware vendors, and marketing agencies.'
      },
      {
        id: 'aluva', name: 'Aluva', slug: 'aluva', intent: 'Manufacturing, Trade, Logistics',
        nearbyCompanies: ['Manufacturing units', 'Trading houses'],
        landmarks: ['Aluva Railway Station', 'KSRTC Bus Stand'],
        transit: 'Aluva Metro, Railway Station',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/kochi/workspace1.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Key industrial and transit gateway to Kochi.',
        gstSuitability: 'Perfect for manufacturing and trading businesses requiring GST registration.',
        whoChoosesThis: 'Supply chain companies, traders, and manufacturing SMEs.'
      },
      {
        id: 'thripunithura', name: 'Thripunithura', slug: 'thripunithura', intent: 'Local SMEs, Independent Professionals',
        nearbyCompanies: ['Local retail', 'Service providers'],
        landmarks: ['Hill Palace', 'SN Junction'],
        transit: 'Thripunithura Metro Terminal, Railway Station',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/kochi/workspace2.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Heritage suburb rapidly developing into a commercial hub due to Metro extension.',
        gstSuitability: 'Suitable for local service businesses and independent professionals.',
        whoChoosesThis: 'Freelancers, local SMEs, and heritage tourism operators.'
      },
      {
        id: 'kalamassery', name: 'Kalamassery', slug: 'kalamassery', intent: 'Tech hardware, Startups, Education',
        nearbyCompanies: ['Startup Village', 'KINFRA Hi-Tech Park', 'CUSAT'],
        landmarks: ['CUSAT', 'KINFRA'],
        transit: 'Kalamassery Metro',
        parking: 'Ample space',
        type: 'neighborhood', gallery: ['/images/branches/kochi/workspace3.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Major education and industrial hub with strong startup incubation roots.',
        gstSuitability: 'Excellent for tech startups and hardware manufacturers.',
        whoChoosesThis: 'Hardware startups, ed-tech firms, and manufacturing units.'
      },
      {
        id: 'maradu', name: 'Maradu', slug: 'maradu', intent: 'Automotive, Retail, Logistics',
        nearbyCompanies: ['Automotive dealers', 'Large retail formats'],
        landmarks: ['Nucleus Mall', 'Kundanoor Junction'],
        transit: 'NH66 connectivity',
        parking: 'High availability',
        type: 'neighborhood', gallery: ['/images/branches/kochi/workspace4.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Fast-growing commercial belt dominated by automotive showrooms and large retail.',
        gstSuitability: 'Ideal for automotive, retail, and wholesale businesses.',
        whoChoosesThis: 'Retail chains, automotive ancillaries, and logistics providers.'
      },
      {
        id: 'fort-kochi', name: 'Fort Kochi', slug: 'fort-kochi', intent: 'Tourism, Hospitality, Creative',
        nearbyCompanies: ['Hotels', 'Boutiques', 'Art galleries'],
        landmarks: ['Chinese Fishing Nets', 'Vasco da Gama Square'],
        transit: 'Fort Kochi Water Metro, Ro-Ro ferry',
        parking: 'Limited public parking',
        type: 'neighborhood', gallery: ['/images/branches/kochi/workspace1.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Heritage and tourism heart of Kochi with a thriving creative ecosystem.',
        gstSuitability: 'Perfect for hospitality, tourism, and creative agencies.',
        whoChoosesThis: 'Travel agencies, artists, boutique owners, and event planners.'
      },
      {
        id: 'smartcity', name: 'SmartCity Kochi', slug: 'smartcity', intent: 'Global IT, Enterprise, SaaS',
        nearbyCompanies: ['Global tech giants', 'Enterprise software firms'],
        landmarks: ['SmartCity Pavilion', 'Infopark Expressway'],
        transit: 'Upcoming Metro, SmartCity Bus Stop',
        parking: 'Massive multi-level parking',
        type: 'neighborhood', gallery: ['/images/branches/kochi/workspace2.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Special Economic Zone dedicated to knowledge-based industries.',
        gstSuitability: 'Mandatory for SEZ operations and tech exports.',
        whoChoosesThis: 'Export-oriented IT units, global capability centers (GCCs), and enterprise SaaS.'
      }`;

const trivandrumLocations = `
      {
        id: 'technopark', name: 'Technopark', slug: 'technopark', intent: 'IT, Software, GCCs',
        nearbyCompanies: ['TCS', 'Infosys', 'UST Global'],
        landmarks: ['Technopark Campus', 'Technopark Phase 3'],
        transit: 'Technopark Bus Stand, Kazhakkoottam Railway Station',
        parking: 'Tech park parking',
        type: 'neighborhood', gallery: ['/images/branches/trivandrum/image1.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'India\\'s largest IT park by built-up area, hosting over 400 companies.',
        gstSuitability: 'Essential for IT exports and software services.',
        whoChoosesThis: 'Software development firms, BPOs, and global IT enterprises.'
      },
      {
        id: 'kazhakkoottam', name: 'Kazhakkoottam', slug: 'kazhakkoottam', intent: 'Tech startups, Retail, SMEs',
        nearbyCompanies: ['Startups', 'Retail chains'],
        landmarks: ['Kazhakkoottam Junction', 'Technopark Gate'],
        transit: 'Kazhakkoottam Railway Station, NH66',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/trivandrum/image2.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'The rapidly developing "New Trivandrum" serving the Technopark workforce.',
        gstSuitability: 'Great for tech startups and retail support services.',
        whoChoosesThis: 'Tech startups, freelancers, and retail businesses.'
      },
      {
        id: 'pattom', name: 'Pattom', slug: 'pattom', intent: 'Education, Government, Consulting',
        nearbyCompanies: ['Government offices', 'Educational institutions'],
        landmarks: ['Pattom Junction', 'LIC Divisional Office'],
        transit: 'Pattom Bus Stop',
        parking: 'Limited on-street',
        type: 'neighborhood', gallery: ['/images/branches/trivandrum/image3.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Central Trivandrum hub known for government institutions and schools.',
        gstSuitability: 'Excellent for government contractors and educational consultants.',
        whoChoosesThis: 'Consultants, coaching centers, and government vendors.'
      },
      {
        id: 'kowdiar', name: 'Kowdiar', slug: 'kowdiar', intent: 'Premium, Boutique, Wealth Management',
        nearbyCompanies: ['Wealth managers', 'Boutique agencies', 'Real estate'],
        landmarks: ['Kowdiar Palace', 'Golf Club'],
        transit: 'Kowdiar Bus Stop',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/trivandrum/image4.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'The most prestigious residential and boutique commercial address in Trivandrum.',
        gstSuitability: 'Highly prestigious address for premium service businesses.',
        whoChoosesThis: 'Wealth managers, architects, luxury brands, and premium consultants.'
      },
      {
        id: 'sasthamangalam', name: 'Sasthamangalam', slug: 'sasthamangalam', intent: 'Healthcare, Consulting, SMEs',
        nearbyCompanies: ['Hospitals', 'Clinics', 'Consultancies'],
        landmarks: ['Sasthamangalam Junction'],
        transit: 'Well connected by bus',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/trivandrum/image1.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Mature commercial-residential mix with a strong healthcare presence.',
        gstSuitability: 'Ideal for healthcare tech, clinics, and professional services.',
        whoChoosesThis: 'Health-tech startups, doctors, and professional consultants.'
      },
      {
        id: 'vazhuthacaud', name: 'Vazhuthacaud', slug: 'vazhuthacaud', intent: 'Media, Corporate, Finance',
        nearbyCompanies: ['Media houses', 'Banks', 'Corporate offices'],
        landmarks: ['Women\\'s College', 'Police Headquarters'],
        transit: 'Vazhuthacaud Bus Stop',
        parking: 'On-street',
        type: 'neighborhood', gallery: ['/images/branches/trivandrum/image2.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Key corporate and media hub of Trivandrum.',
        gstSuitability: 'Perfect for corporate branch offices and financial institutions.',
        whoChoosesThis: 'Media agencies, banks, and corporate branch offices.'
      },
      {
        id: 'thampanoor', name: 'Thampanoor', slug: 'thampanoor', intent: 'Travel, Logistics, Trade',
        nearbyCompanies: ['Travel agencies', 'Logistics firms'],
        landmarks: ['Trivandrum Central Railway Station', 'KSRTC Terminal'],
        transit: 'Central Railway Station, Central Bus Station',
        parking: 'Pay and park',
        type: 'neighborhood', gallery: ['/images/branches/trivandrum/image3.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'The primary transit hub of the city, bustling with trade and travel.',
        gstSuitability: 'Ideal for travel agencies, logistics, and trading businesses.',
        whoChoosesThis: 'Logistics providers, travel companies, and wholesale traders.'
      },
      {
        id: 'palayam', name: 'Palayam', slug: 'palayam', intent: 'Retail, Government, SMEs',
        nearbyCompanies: ['Retailers', 'Government offices'],
        landmarks: ['Connemara Market', 'Legislative Assembly'],
        transit: 'Palayam Bus Stand',
        parking: 'Underground parking available',
        type: 'neighborhood', gallery: ['/images/branches/trivandrum/image4.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Historic and bustling commercial center of Trivandrum.',
        gstSuitability: 'Great for retail and businesses dealing with government entities.',
        whoChoosesThis: 'Retailers, government contractors, and local SMEs.'
      },
      {
        id: 'kesavadasapuram', name: 'Kesavadasapuram', slug: 'kesavadasapuram', intent: 'Retail, SMEs, Education',
        nearbyCompanies: ['Retail showrooms', 'Educational institutions'],
        landmarks: ['Kesavadasapuram Junction'],
        transit: 'NH66 intersection',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/trivandrum/image1.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Major commercial intersection connecting the city center to the northern tech corridor.',
        gstSuitability: 'Suitable for retail, ed-tech, and regional distributors.',
        whoChoosesThis: 'Distributors, educational institutions, and retail brands.'
      },
      {
        id: 'technocity', name: 'Technocity', slug: 'technocity', intent: 'Enterprise IT, R&D, Manufacturing',
        nearbyCompanies: ['TCS Research', 'Nissan Digital', 'Space Park'],
        landmarks: ['Technocity Campus', 'Digital University'],
        transit: 'Pallippuram, NH66',
        parking: 'Campus parking',
        type: 'neighborhood', gallery: ['/images/branches/trivandrum/image2.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Trivandrum\\'s 4th phase of IT development, focusing on deep tech, space tech, and R&D.',
        gstSuitability: 'Essential for deep tech, R&D firms, and large enterprises.',
        whoChoosesThis: 'Deep tech startups, research institutions, and enterprise R&D centers.'
      }`;

const calicutLocations = `
      {
        id: 'nadakkavu', name: 'Nadakkavu', slug: 'nadakkavu', intent: 'Commercial, Retail, SMEs',
        nearbyCompanies: ['Retailers', 'Local businesses'],
        landmarks: ['English Church', 'Vandipetta'],
        transit: 'Nadakkavu Bus Stop',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/calicut/reception.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'A prominent commercial and residential neighborhood in the heart of Calicut.',
        gstSuitability: 'Excellent for local retail and trading businesses.',
        whoChoosesThis: 'Local SMEs, retailers, and independent professionals.'
      },
      {
        id: 'mavoor-road', name: 'Mavoor Road', slug: 'mavoor-road', intent: 'Retail, Healthcare, Finance',
        nearbyCompanies: ['Hospitals', 'Banks', 'Retail Showrooms'],
        landmarks: ['KSRTC Bus Stand', 'Focus Mall'],
        transit: 'KSRTC Terminal',
        parking: 'Pay and park',
        type: 'neighborhood', gallery: ['/images/branches/calicut/lounge.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'The most bustling commercial high-street in Calicut.',
        gstSuitability: 'Ideal for high-visibility retail and financial services.',
        whoChoosesThis: 'Banks, large retail brands, and healthcare providers.'
      },
      {
        id: 'thondayad', name: 'Thondayad', slug: 'thondayad', intent: 'IT, Corporate, Retail',
        nearbyCompanies: ['IT firms', 'Automotive dealers'],
        landmarks: ['Thondayad Bypass', 'Cyberpark (nearby)'],
        transit: 'Bypass connectivity',
        parking: 'Ample parking',
        type: 'neighborhood', gallery: ['/images/branches/calicut/meeting-room.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Rapidly growing commercial corridor driven by Bypass highway connectivity.',
        gstSuitability: 'Great for IT firms, automotive, and logistics companies.',
        whoChoosesThis: 'IT startups, logistics providers, and corporate branches.'
      },
      {
        id: 'cyberpark', name: 'Cyberpark', slug: 'cyberpark', intent: 'IT, Software, Startups',
        nearbyCompanies: ['Tech startups', 'Software development firms'],
        landmarks: ['Cyberpark Campus', 'UL Cyberpark'],
        transit: 'Bypass Road',
        parking: 'Campus parking',
        type: 'neighborhood', gallery: ['/images/branches/calicut/workspace.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'The premier IT destination in the Malabar region.',
        gstSuitability: 'Mandatory for IT exports and tech startups operating in the park.',
        whoChoosesThis: 'IT companies, BPOs, and tech startups.'
      },
      {
        id: 'palayam', name: 'Palayam', slug: 'palayam', intent: 'Wholesale, Trade, Retail',
        nearbyCompanies: ['Wholesale traders', 'Logistics'],
        landmarks: ['Palayam Market', 'Mofusil Bus Stand'],
        transit: 'Palayam Bus Stand',
        parking: 'Limited',
        type: 'neighborhood', gallery: ['/images/branches/calicut/reception.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'The traditional wholesale and trading hub of Calicut.',
        gstSuitability: 'Essential for wholesale traders and supply chain businesses.',
        whoChoosesThis: 'Wholesalers, distributors, and trading firms.'
      },
      {
        id: 'meenchanda', name: 'Meenchanda', slug: 'meenchanda', intent: 'Logistics, Automotive, SMEs',
        nearbyCompanies: ['Logistics firms', 'Showrooms'],
        landmarks: ['Meenchanda Bypass', 'Arts College'],
        transit: 'Mini Bypass',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/calicut/lounge.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Key junction connecting southern Calicut to the commercial center.',
        gstSuitability: 'Suitable for logistics and regional distributors.',
        whoChoosesThis: 'Logistics companies, distributors, and local SMEs.'
      },
      {
        id: 'malaparamba', name: 'Malaparamba', slug: 'malaparamba', intent: 'Healthcare, Education, Consulting',
        nearbyCompanies: ['Clinics', 'Educational institutions'],
        landmarks: ['Malaparamba Junction', 'Iqraa Hospital'],
        transit: 'Wayanad Road, Bypass',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/calicut/meeting-room.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Growing premium residential and commercial mix on Wayanad Road.',
        gstSuitability: 'Ideal for healthcare, education, and professional services.',
        whoChoosesThis: 'Doctors, educational consultants, and boutique agencies.'
      },
      {
        id: 'sm-street', name: 'SM Street', slug: 'sm-street', intent: 'Heritage Retail, Trade, Tourism',
        nearbyCompanies: ['Traditional retail', 'Textile merchants'],
        landmarks: ['Mittai Theruvu', 'Mananchira Square'],
        transit: 'Pedestrian zone, nearby bus stops',
        parking: 'Very limited',
        type: 'neighborhood', gallery: ['/images/branches/calicut/workspace.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'The historic and most famous shopping street in Calicut.',
        gstSuitability: 'Crucial for retail businesses and heritage traders.',
        whoChoosesThis: 'Retailers, textile merchants, and tourism businesses.'
      },
      {
        id: 'pt-usha-road', name: 'PT Usha Road', slug: 'pt-usha-road', intent: 'Premium Corporate, Finance, Agencies',
        nearbyCompanies: ['Corporate offices', 'Financial institutions'],
        landmarks: ['Taj Gateway Hotel', 'Beach Road'],
        transit: 'Close to Beach and Railway Station',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/calicut/reception.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Premium corporate address known for upscale offices and proximity to the beach.',
        gstSuitability: 'Prestigious address for corporate branch offices and finance.',
        whoChoosesThis: 'Banks, corporate branches, and high-end consulting firms.'
      },
      {
        id: 'eranhipaalam', name: 'Eranhipaalam', slug: 'eranhipaalam', intent: 'Healthcare, Government, SMEs',
        nearbyCompanies: ['Hospitals', 'Government offices'],
        landmarks: ['Civil Station', 'Eranhipaalam Junction'],
        transit: 'Mini Bypass',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/calicut/lounge.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Administrative hub of Calicut due to the proximity of the Civil Station.',
        gstSuitability: 'Great for government contractors and legal professionals.',
        whoChoosesThis: 'Lawyers, government contractors, and healthcare professionals.'
      }`;

const coimbatoreLocations = `
      {
        id: 'rs-puram', name: 'RS Puram', slug: 'rs-puram', intent: 'Premium Retail, Consulting, Finance',
        nearbyCompanies: ['Boutiques', 'Financial Institutions', 'Consultancies'],
        landmarks: ['DB Road', 'Annapoorna'],
        transit: 'RS Puram Bus Stop',
        parking: 'On-street',
        type: 'neighborhood', gallery: ['/images/branches/coimbatore/exterior-tall.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'The most affluent commercial and residential neighborhood in Coimbatore.',
        gstSuitability: 'Highly prestigious address for premium brands and financial services.',
        whoChoosesThis: 'Wealth managers, boutique retail brands, and premium consultants.'
      },
      {
        id: 'avinashi-road', name: 'Avinashi Road', slug: 'avinashi-road', intent: 'Corporate, IT, Education, Healthcare',
        nearbyCompanies: ['IT Parks', 'Hospitals', 'Colleges', 'Corporate HQs'],
        landmarks: ['Tidel Park', 'PSG Tech', 'KMCH'],
        transit: 'Avinashi Road arterial buses',
        parking: 'Building-specific',
        type: 'neighborhood', gallery: ['/images/branches/coimbatore/interior-lounge.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'The main arterial road of Coimbatore, hosting the biggest institutions and IT parks.',
        gstSuitability: 'Ideal for corporate branch offices and large enterprises.',
        whoChoosesThis: 'Corporate enterprises, IT companies, and healthcare organizations.'
      },
      {
        id: 'saravanampatti', name: 'Saravanampatti', slug: 'saravanampatti', intent: 'IT, Software, Startups',
        nearbyCompanies: ['Cognizant', 'Bosch', 'Tech Parks'],
        landmarks: ['CHIL SEZ', 'KGISL Campus'],
        transit: 'Sathy Road',
        parking: 'Tech park parking',
        type: 'neighborhood', gallery: ['/images/branches/coimbatore/reception.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'The IT corridor of Coimbatore, teeming with tech parks and an engineering talent pool.',
        gstSuitability: 'Essential for IT exports and tech startups.',
        whoChoosesThis: 'Software development companies, tech startups, and BPOs.'
      },
      {
        id: 'peelamedu', name: 'Peelamedu', slug: 'peelamedu', intent: 'Education, Manufacturing, IT',
        nearbyCompanies: ['Textile mills', 'Engineering colleges', 'IT firms'],
        landmarks: ['Coimbatore Airport', 'PSG'],
        transit: 'Avinashi Road, Airport',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/coimbatore/workspace.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Major educational and industrial hub near the airport.',
        gstSuitability: 'Great for manufacturing, ed-tech, and logistics firms.',
        whoChoosesThis: 'Manufacturing companies, educational consultants, and logistics providers.'
      },
      {
        id: 'race-course', name: 'Race Course', slug: 'race-course', intent: 'Premium Corporate, Government, Finance',
        nearbyCompanies: ['Corporate offices', 'Government bungalows'],
        landmarks: ['Race Course Walking Track', 'Taj Vivanta'],
        transit: 'Central location, near Railway Station',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/coimbatore/exterior-tall.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'The "Switzerland of Coimbatore", known for elite corporate offices and greenery.',
        gstSuitability: 'Prestigious address for corporate HQs and high-end finance.',
        whoChoosesThis: 'Corporate HQs, financial institutions, and premium agencies.'
      },
      {
        id: 'ramanathapuram', name: 'Ramanathapuram', slug: 'ramanathapuram', intent: 'Retail, SMEs, Trade',
        nearbyCompanies: ['Retail showrooms', 'Local businesses'],
        landmarks: ['Ramanathapuram Junction', 'Trichy Road'],
        transit: 'Trichy Road',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/coimbatore/interior-lounge.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Busy commercial and residential area connecting to the southern highways.',
        gstSuitability: 'Suitable for retail, trading, and regional distributors.',
        whoChoosesThis: 'Retailers, distributors, and local SMEs.'
      },
      {
        id: 'saibaba-colony', name: 'Saibaba Colony', slug: 'saibaba-colony', intent: 'Retail, Healthcare, Food & Beverage',
        nearbyCompanies: ['Restaurants', 'Retailers', 'Clinics'],
        landmarks: ['Saibaba Temple', 'NSR Road'],
        transit: 'Mettupalayam Road',
        parking: 'On-street',
        type: 'neighborhood', gallery: ['/images/branches/coimbatore/reception.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'Vibrant residential area with a strong retail and F&B commercial presence.',
        gstSuitability: 'Ideal for retail, F&B, and healthcare services.',
        whoChoosesThis: 'F&B brands, retail chains, and clinics.'
      },
      {
        id: 'gandhipuram', name: 'Gandhipuram', slug: 'gandhipuram', intent: 'Commercial, Retail, Transit Hub',
        nearbyCompanies: ['Textile shops', 'Electronics markets', 'Travel agencies'],
        landmarks: ['Cross Cut Road', 'Gandhipuram Bus Stand'],
        transit: 'Central Bus Terminals',
        parking: 'Very congested',
        type: 'neighborhood', gallery: ['/images/branches/coimbatore/workspace.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'The commercial heart and main transit hub of Coimbatore.',
        gstSuitability: 'Crucial for wholesale, retail, and trading businesses.',
        whoChoosesThis: 'Wholesalers, retailers, and travel companies.'
      },
      {
        id: 'town-hall', name: 'Town Hall', slug: 'town-hall', intent: 'Wholesale, Textiles, Heritage Trade',
        nearbyCompanies: ['Textile wholesalers', 'Jewelers', 'Hardware traders'],
        landmarks: ['Oppanakara Street', 'Clock Tower'],
        transit: 'Near Railway Station',
        parking: 'Limited',
        type: 'neighborhood', gallery: ['/images/branches/coimbatore/exterior-tall.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'The oldest and densest wholesale trading market in the city.',
        gstSuitability: 'Essential for traditional trading and wholesale businesses.',
        whoChoosesThis: 'Textile merchants, jewelers, and wholesale traders.'
      },
      {
        id: 'kalapatti', name: 'Kalapatti', slug: 'kalapatti', intent: 'Manufacturing, IT, Logistics',
        nearbyCompanies: ['Foundries', 'Manufacturing units', 'IT firms'],
        landmarks: ['Kalapatti Junction', 'Near Airport'],
        transit: 'Kalapatti Road',
        parking: 'Available',
        type: 'neighborhood', gallery: ['/images/branches/coimbatore/interior-lounge.jpg'],
        services: ['virtual-office', 'coworking-space'],
        businessEcosystem: 'A rapidly industrializing suburb known for foundries, manufacturing, and growing IT presence.',
        gstSuitability: 'Perfect for manufacturing, engineering, and logistics companies.',
        whoChoosesThis: 'Manufacturing SMEs, engineering firms, and logistics providers.'
      }`;

let content = fs.readFileSync('src/data/locations.ts', 'utf8');

// Insert Kochi
content = content.replace(/(id: 'kaloor'[\s\S]*?services: \['coworking-space', 'virtual-office'\]\s*})/, "$1,\n" + kochiLocations);
// Insert Trivandrum
content = content.replace(/(id: 'sasthamangalam'[\s\S]*?services: \['coworking-space', 'private-office', 'virtual-office', 'meeting-room'\],\s*})/, "$1,\n" + trivandrumLocations);
// Insert Calicut
content = content.replace(/(id: 'east-hill'[\s\S]*?services: \['coworking-space', 'private-office', 'virtual-office', 'meeting-room'\],\s*})/, "$1,\n" + calicutLocations);
// Insert Coimbatore
content = content.replace(/(id: 'peelamedu'[\s\S]*?services: \['coworking-space', 'private-office', 'virtual-office', 'meeting-room'\],\s*})/, "$1,\n" + coimbatoreLocations);

fs.writeFileSync('src/data/locations.ts', content);
console.log('Locations injected');
