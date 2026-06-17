import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import ScrollReveal from '@/components/ui/ScrollReveal';

const subareasMap: Record<string, string[]> = {
  trivandrum: ['technopark', 'kazhakootam', 'pattom'],
  ernakulam: ['kadavanthra', 'mg-road', 'kaloor', 'kakkanad'],
  calicut: ['cyberpark', 'nadakkavu', 'thondayad'],
  coimbatore: ['rs-puram', 'peelamedu', 'kalapatti'],
};

// Reuse the exact same branch data since subareas are just hyper-local SEO funnels to the same physical branch.
const branchData: Record<string, { 
  name: string; 
  mapUrl: string; 
  address: string; 
  geo: { lat: number, lon: number }, 
  highlight: string, 
  description: string, 
  cta: string,
  heroImage: string,
  galleryImages: string[]
}> = {
  trivandrum: {
    name: 'Trivandrum',
    mapUrl: 'https://share.google/rwyIXjjUsMKWmenzp',
    address: '1st Floor, Relcon Plaza, Pattom, Thiruvananthapuram, Kerala 695004',
    geo: { lat: 8.5241, lon: 76.9366 },
    highlight: "Kerala's largest IT hub ecosystem.",
    description: "Nestled adjacent to Technopark, our Trivandrum hub is designed for IT enterprises and deep-tech startups. Experience a serene, high-focus environment surrounded by industry leaders.",
    cta: "Book your tour in Trivandrum today!",
    heroImage: "/images/trivandrum_coworking.jpg",
    galleryImages: ["/images/amenity2.jpg", "/images/amenity3.jpg", "/images/exterior.jpg"]
  },
  ernakulam: {
    name: 'Ernakulam',
    mapUrl: 'https://maps.app.goo.gl/Ec3eb7eDvke6e6FX8',
    address: '4th floor, Palal Tower, Mahatma Gandhi Rd, Ravipuram, Perumanoor, Kochi, Ernakulam, Kerala 682016',
    geo: { lat: 9.9816, lon: 76.2999 },
    highlight: "The commercial heart of Kerala.",
    description: "Located in the bustling central business district, our Ernakulam hub thrives on networking and commerce. Ideal for sales teams, agencies, and rapidly scaling startups looking for a central footprint.",
    cta: "Schedule a visit at our MG Road Hub.",
    heroImage: "/images/kochi_coworking.jpg",
    galleryImages: ["/images/amenity1.jpg", "/images/amenity4.jpg", "/images/amenity3.jpg"]
  },
  calicut: {
    name: 'Calicut',
    mapUrl: 'https://maps.app.goo.gl/DgSzAPXDGYsxSewKA',
    address: 'Wee Spaces, Door No. 2951/A, Ground floor, Neeloth Plaza, Holy Cross IMT Road, Wayanad Rd, opposite Malayalam Manorama, East Nadakkave, Kozhikode, Kerala 673001',
    geo: { lat: 11.2588, lon: 75.7804 },
    highlight: "Where culture meets modern tech.",
    description: "Close to Cyberpark, our Calicut space offers a creative, relaxed, yet highly driven atmosphere. Perfect for designers, freelancers, and agile teams building the future.",
    cta: "Inquire about availability in Calicut.",
    heroImage: "/images/calicut_coworking.jpg",
    galleryImages: ["/images/amenity3.jpg", "/images/amenity4.jpg", "/images/exterior.jpg"]
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
    galleryImages: ["/images/amenity1.jpg", "/images/exterior.jpg", "/images/amenity2.jpg"]
  }
};

function formatSubareaName(slug: string) {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function generateStaticParams() {
  const params: { branch: string, subarea: string }[] = [];
  for (const [branch, subareas] of Object.entries(subareasMap)) {
    for (const subarea of subareas) {
      params.push({ branch, subarea });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ branch: string, subarea: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const branchName = branchData[resolvedParams.branch]?.name || 'Location';
  const subareaFormatted = formatSubareaName(resolvedParams.subarea);
  
  return {
    title: `Premium Coworking Space near ${subareaFormatted}, ${branchName} | WeeSpaces`,
    description: `Looking for office space near ${subareaFormatted}? WeeSpaces offers premium coworking and private offices just minutes away in ${branchName}. Book your tour today!`,
  };
}

export default async function SubAreaPage({ params }: { params: Promise<{ branch: string, subarea: string }> }) {
  const resolvedParams = await params;
  const branchId = resolvedParams.branch;
  const subareaId = resolvedParams.subarea;
  const data = branchData[branchId];
  
  if (!data || !subareasMap[branchId]?.includes(subareaId)) {
    return <div>Location not found</div>;
  }

  const subareaFormatted = formatSubareaName(subareaId);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `WeeSpaces ${data.name}`,
    "image": "https://weespaces.in/images/exterior.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.address,
      "addressLocality": data.name,
      "addressRegion": "Kerala", // This could be dynamic based on branch, but OK for now.
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.geo.lat,
      "longitude": data.geo.lon
    },
    "telephone": "+919207189111"
  };

  // --- Hero Text Content Component ---
  const HeroContent = () => (
    <ScrollReveal direction="up" className="space-y-6 md:space-y-8 z-10 relative">
      <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)]">
          <span className="material-symbols-outlined text-[16px]">location_on</span>
          Near {subareaFormatted}, {data.name}
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          PREMIUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">WORKSPACE</span><br/>
          NEAR {subareaFormatted.toUpperCase()}.
      </h1>
      
      <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg max-w-xl">
          <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">{data.highlight}</p>
          <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed">
              Skip the commute. {data.description}
          </p>
      </div>
      <p className="text-white/70 italic text-sm">{data.cta}</p>
    </ScrollReveal>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* We'll use a unified, ultra-premium hero layout for all sub-area pages to ensure maximum conversion. */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 bg-navy-dark overflow-hidden">
          <div className="absolute inset-0 z-0 bg-navy">
              <div className="absolute top-0 right-1/4 w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[140px] pointer-events-none"></div>
          </div>
          <div className="container mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl hidden md:block">
                  <Image src={data.heroImage} alt={`Coworking near ${subareaFormatted}`} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-90"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                      <HeroContent />
                  </div>
              </div>
              <div className="md:hidden mb-8"><HeroContent /></div>
              
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md bg-navy-light/40 p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
                    <h3 className="text-2xl font-bold mb-6 text-center">Book a Workspace near {subareaFormatted}</h3>
                    <LeadForm branch={`${data.name} - ${subareaFormatted} SEO Lead`} />
                </div>
              </div>
          </div>
      </section>

      {/* --- LOCATION DETAILS SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 bg-gradient-to-b from-transparent to-navy-light/20">
          <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center`}>
              <ScrollReveal direction="right" className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(242,156,31,0.15)] h-[300px] md:h-[500px] bg-navy-light/20 flex items-center justify-center">
                  <iframe 
                      title={`${data.name} Location Map`}
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }} // Makes it dark mode to match theme
                      allowFullScreen
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://maps.google.com/maps?q=${data.geo.lat},${data.geo.lon}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  ></iframe>
                  <div className="absolute inset-0 pointer-events-none rounded-3xl border border-white/20"></div>
              </ScrollReveal>
              <ScrollReveal direction="left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Just Minutes from <span className="text-accent">{subareaFormatted}</span></h2>

                  <div className="flex items-start gap-4 mb-8 bg-navy-light/30 p-6 rounded-2xl border border-white/10">
                      <span className="material-symbols-outlined text-accent text-3xl shrink-0">directions_car</span>
                      <div>
                          <h4 className="text-xl font-bold text-white mb-2">Prime Accessibility</h4>
                          <p className="text-white/70 leading-relaxed">
                              Located at: {data.address}
                              <br/><br/>
                              Our {data.name} hub is perfectly situated for professionals commuting from {subareaFormatted}. Avoid the traffic and work from a premium, managed office space.
                          </p>
                      </div>
                  </div>
                  <a href={data.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-transparent border border-accent text-accent hover:bg-accent hover:text-navy font-bold py-3 px-8 rounded-xl transition-all w-max">
                      Get Directions <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
              </ScrollReveal>
          </div>
      </section>
    </>
  );
}
