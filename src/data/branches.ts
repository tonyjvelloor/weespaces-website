export interface BranchData {
  name: string;
  mapUrl: string;
  address: string;
  geo: { lat: number; lon: number };
  highlight: string;
  description: string;
  cta: string;
  heroImage: string;
  galleryImages: string[];
  pricing: {
    hotDesk: string;
    dedicatedDesk: string;
    privateCabin: string;
    virtualOffice: string;
  };
}

export const branchData: Record<string, BranchData> = {
  trivandrum: {
    name: 'Trivandrum',
    mapUrl: 'https://share.google/rwyIXjjUsMKWmenzp',
    address: '1st Floor, Relcon Plaza, Pattom, Thiruvananthapuram, Kerala 695004',
    geo: { lat: 8.5241, lon: 76.9366 },
    highlight: "Kerala's largest IT hub ecosystem.",
    description: "Nestled adjacent to Technopark, our Trivandrum hub is designed for IT enterprises and deep-tech startups. Experience a serene, high-focus environment surrounded by industry leaders.",
    cta: "Book your tour in Trivandrum today!",
    heroImage: "/images/branches/trivandrum/image4.jpg",
    galleryImages: [
      "/images/branches/trivandrum/image1.jpg", 
      "/images/branches/trivandrum/image2.jpg", 
      "/images/branches/trivandrum/image3.jpg",
      "/images/branches/trivandrum/image4.jpg"
    ],
    pricing: { hotDesk: '₹4,500/mo', dedicatedDesk: '₹6,000/mo', privateCabin: '₹18,000/mo', virtualOffice: '₹10,000/yr' }
  },
  ernakulam: {
    name: 'Ernakulam',
    mapUrl: 'https://maps.app.goo.gl/Ec3eb7eDvke6e6FX8',
    address: '4th floor, Palal Tower, Mahatma Gandhi Rd, Ravipuram, Perumanoor, Kochi, Ernakulam, Kerala 682016',
    geo: { lat: 9.9816, lon: 76.2999 },
    highlight: "The commercial heart of Kerala.",
    description: "Located in the bustling central business district, our Ernakulam hub thrives on networking and commerce. Ideal for sales teams, agencies, and rapidly scaling startups looking for a central footprint.",
    cta: "Schedule a visit at our MG Road Hub.",
    heroImage: "/images/branches/kochi/reception.jpg",
    galleryImages: [
      "/images/branches/kochi/workspace1.jpg", 
      "/images/branches/kochi/workspace2.jpg", 
      "/images/branches/kochi/workspace3.jpg",
      "/images/branches/kochi/workspace4.jpg"
    ],
    pricing: { hotDesk: '₹5,000/mo', dedicatedDesk: '₹6,500/mo', privateCabin: '₹20,000/mo', virtualOffice: '₹10,000/yr' }
  },
  calicut: {
    name: 'Calicut',
    mapUrl: 'https://maps.app.goo.gl/DgSzAPXDGYsxSewKA',
    address: 'Wee Spaces, Door No. 2951/A, Ground floor, Neeloth Plaza, Holy Cross IMT Road, Wayanad Rd, opposite Malayalam Manorama, East Nadakkave, Kozhikode, Kerala 673001',
    geo: { lat: 11.2588, lon: 75.7804 },
    highlight: "Where culture meets modern tech.",
    description: "Close to Cyberpark, our Calicut space offers a creative, relaxed, yet highly driven atmosphere. Perfect for designers, freelancers, and agile teams building the future.",
    cta: "Inquire about availability in Calicut.",
    heroImage: "/images/branches/calicut/reception.jpg",
    galleryImages: [
      "/images/branches/calicut/workspace1.jpg", 
      "/images/branches/calicut/workspace2.jpg", 
      "/images/branches/calicut/reception.jpg"
    ],
    pricing: { hotDesk: '₹4,000/mo', dedicatedDesk: '₹5,500/mo', privateCabin: '₹16,000/mo', virtualOffice: '₹10,000/yr' }
  },
  coimbatore: {
    name: 'Coimbatore',
    mapUrl: 'https://share.google/svMVWe13062cYNDlr',
    address: 'Vidyanagar 3rd street, Vidya Nagar, Civil Aerodrome Post, Kalapatti, Coimbatore, Tamil Nadu 641014',
    geo: { lat: 11.0168, lon: 76.9558 },
    highlight: "The Manchester of South India's Tech Boom.",
    description: "Strategically located just 1.5km from Tidel Park, this newly launched hub bridges Coimbatore's rich industrial legacy with its exploding IT ecosystem. Built for massive growth.",
    cta: "Secure your spot in our newest Coimbatore hub!",
    heroImage: "/images/amenity3.jpg",
    galleryImages: ["/images/amenity1.jpg", "/images/exterior.jpg", "/images/amenity2.jpg"],
    pricing: { hotDesk: '₹5,000/mo', dedicatedDesk: '₹6,500/mo', privateCabin: '₹22,000/mo', virtualOffice: '₹10,000/yr' }
  }
};
