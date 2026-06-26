import re
import os

filepath = "src/data/locations.ts"

with open(filepath, "r") as f:
    content = f.read()

# Update CityData interface
new_interface = """export type CityData = {
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
};"""

content = re.sub(r'export type CityData = \{[\s\S]*?citations\?: string\[\];\n\};', new_interface, content)

# Inject data for Kochi
kochi_data = """    gallery: ['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg'],
    occupancy: '82% of seats currently occupied',
    caseStudy: {
      client: 'A leading SaaS company',
      outcome: 'Moved from a 600 sq ft leased office into WeeSpaces and expanded from 6 to 18 employees seamlessly.',
      metrics: ['Saved ₹12 lakh in setup costs', 'Zero maintenance overhead', 'Expanded team 3x']
    },
    nearbyCompaniesList: ['TCS', 'Cognizant', 'Wipro', 'KPMG', 'UST Global', 'Ernst & Young'],
    localGuideExpanded: [
      { title: 'Why Kakkanad is Kochi\\'s Next Business Hub', content: 'Kakkanad is witnessing explosive growth driven by Phase 2 of Infopark and SmartCity. With the upcoming Water Metro extensions and Phase 2 of the Kochi Metro, connectivity will be unmatched.' },
      { title: 'Talent Availability', content: 'Proximity to institutions like CUSAT and Model Engineering College ensures a steady pipeline of top-tier engineering and management talent.' }
    ],"""
content = re.sub(r"gallery: \['/images/branches/kochi/workspace1\.jpg'.*?\],", kochi_data, content)

# Inject data for Trivandrum
tvm_data = """    gallery: ['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg'],
    occupancy: '88% of seats currently occupied',
    caseStudy: {
      client: 'A Healthcare IT Startup',
      outcome: 'Set up an enterprise-grade private office for their engineering team within 48 hours without any IT infrastructure delays.',
      metrics: ['Zero CapEx on IT setup', 'Ready-to-use secure VLANs', '24/7 operations enabled']
    },
    nearbyCompaniesList: ['Infosys', 'TCS', 'UST', 'IBS Software', 'Allianz', 'Oracle'],
    localGuideExpanded: [
      { title: 'The Technopark Ecosystem', content: 'Trivandrum houses India\\'s largest IT park by built-up area. Positioning your company near Technopark signals enterprise credibility and offers massive networking opportunities.' },
      { title: 'Infrastructure Boom', content: 'With the development of Taurus Downtown and new highway expansions, the Kazhakkoottam corridor is the undisputed center for IT scaling in Kerala.' }
    ],"""
content = re.sub(r"gallery: \['/images/branches/trivandrum/image1\.jpg'.*?\],", tvm_data, content)

# Inject data for Calicut
calicut_data = """    gallery: ['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg'],
    occupancy: '75% of seats currently occupied',
    caseStudy: {
      client: 'A leading E-commerce Logistics firm',
      outcome: 'Required a highly professional regional headquarters for their logistics managers and sales teams. Moved in over a weekend.',
      metrics: ['Zero downtime during transition', 'Premium meeting rooms for client pitches', 'Flexible scaling options']
    },
    nearbyCompaniesList: ['UL CyberPark IT firms', 'Government Cyberpark startups', 'Major Retailers', 'Logistics HQs'],
    localGuideExpanded: [
      { title: 'The Rise of Calicut Bypass', content: 'The NH 66 Bypass is rapidly evolving into Calicut\\'s premier commercial corridor. By positioning here, you bypass inner-city traffic while maintaining access to premium talent.' },
      { title: 'Startup Ecosystem', content: 'Calicut is shedding its traditional trading image and embracing a robust tech ecosystem driven by local engineering colleges and incubator programs.' }
    ],"""
content = re.sub(r"gallery: \['/images/branches/calicut/reception\.jpg'.*?\],", calicut_data, content)

# Inject data for Coimbatore
cbe_data = """    gallery: ['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg'],
    occupancy: 'Grand Opening - Pre-book now!',
    caseStudy: {
      client: 'A SaaS company (Case Study from Kochi)',
      outcome: 'Moved from a 600 sq ft leased office into WeeSpaces and expanded from 6 to 18 employees seamlessly.',
      metrics: ['Saved ₹12 lakh in setup costs', 'Zero maintenance overhead', 'Expanded team 3x']
    },
    nearbyCompaniesList: ['Bosch', 'Cognizant', 'Capgemini', 'ThoughtWorks', 'TCS', 'Zoho Teams', 'L&T Technology', 'Tech Mahindra'],
    localGuideExpanded: [
      { title: 'Why Kalapatti is Coimbatore\\'s next business hub', content: 'Kalapatti is strategically positioned between the Airport, Tidel Park, and major residential corridors. It offers the perfect blend of enterprise infrastructure without the congestion of Avinashi Road.' },
      { title: 'Talent Availability', content: 'Proximity to premier institutions like PSG Tech and CIT ensures that IT and manufacturing companies have unparalleled access to world-class engineering talent.' }
    ],"""
content = re.sub(r"gallery: \['/images/branches/coimbatore/exterior-tall\.jpg'.*?\],", cbe_data, content)

with open(filepath, "w") as f:
    f.write(content)

print("Updated src/data/locations.ts successfully.")
