import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export function generateStaticParams() {
  return [
    { branch: 'trivandrum' },
    { branch: 'ernakulam' },
    { branch: 'calicut' },
    { branch: 'coimbatore' },
  ];
}

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
    heroImage: "/images/branches/trivandrum/image4.jpg",
    galleryImages: [
      "/images/branches/trivandrum/image1.jpg", 
      "/images/branches/trivandrum/image2.jpg", 
      "/images/branches/trivandrum/image3.jpg",
      "/images/branches/trivandrum/image4.jpg"
    ]
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
    ]
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
    ]
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

export async function generateMetadata({ params }: { params: Promise<{ branch: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const branchName = branchData[resolvedParams.branch]?.name || 'Location';
  
  return {
    title: `Coworking Space in ${branchName} | WeeSpaces`,
    description: `Premium coworking and private offices in ${branchName}. High-speed WiFi, ergonomic setups, and a vibrant community. Book your tour today!`,
  };
}

export default async function BranchPage({ params }: { params: Promise<{ branch: string }> }) {
  const resolvedParams = await params;
  const branchId = resolvedParams.branch;
  const data = branchData[branchId];
  
  if (!data) return <div>Location not found</div>;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `WeeSpaces ${data.name}`,
    "image": "https://weespaces.co.in/images/exterior.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.address,
      "addressLocality": data.name,
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
      {branchId === 'coimbatore' && (
          <div className="inline-flex items-center gap-2 bg-accent text-navy text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(242,156,31,0.5)] animate-pulse">
              ✨ Newly Launched 2026!
          </div>
      )}
      <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)]">
          <span className="material-symbols-outlined text-[16px]">location_on</span>
          {data.name}, {branchId === 'coimbatore' ? 'Tamil Nadu' : 'Kerala'}
      </div>
      
      <h1 className={`text-4xl md:text-5xl ${branchId === 'trivandrum' ? 'xl:text-6xl' : 'lg:text-7xl'} font-bold leading-tight`}>
          THE RIGHT <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">SPACE.</span><br/>
          THE RIGHT <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">MOVE.</span>
      </h1>
      
      <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg max-w-xl">
          <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">{data.highlight}</p>
          <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
              {data.description}
          </p>
      </div>
      <p className="text-white/70 italic text-sm">{data.cta}</p>
    </ScrollReveal>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* --- HERO SECTION LAYOUTS --- */}
      {/* COIMBATORE: Full Screen Background Immersive */}
      {branchId === 'coimbatore' && (
        <section className="relative min-h-screen flex items-center pt-24 pb-20 justify-center">
            <div className="absolute inset-0 z-0">
                <Image src={data.heroImage} alt={data.name} fill className="object-cover object-center opacity-40" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 mix-blend-multiply"></div>
            </div>
            <div className="container mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <HeroContent />
                <div className="w-full max-w-md"><LeadForm branch={data.name} /></div>
            </div>
        </section>
      )}

      {/* CALICUT: Premium Centered Typography & Form */}
      {branchId === 'calicut' && (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 text-center overflow-hidden">
            {/* Moody, dark background image */}
            <div className="absolute inset-0 z-0">
                <Image src={data.heroImage} alt={data.name} fill className="object-cover object-center scale-105 opacity-30 blur-sm" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy/90 to-navy"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] bg-accent/20 rounded-full blur-[150px] pointer-events-none"></div>
            </div>
            
            <div className="container mx-auto px-6 w-full relative z-10 flex flex-col items-center max-w-5xl">
                <ScrollReveal direction="up" className="flex flex-col items-center space-y-6 mb-12">
                    <div className="inline-flex items-center gap-2 bg-navy-light/40 backdrop-blur-md border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-[0_0_20px_rgba(242,156,31,0.15)]">
                        <span className="material-symbols-outlined text-[16px]">location_on</span> {data.name}, Kerala
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl">
                        Inspiring Workspace in <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent via-accent-light to-white">Calicut.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
                        {data.description}
                    </p>
                </ScrollReveal>
                
                <ScrollReveal direction="up" delay={0.2} className="w-full max-w-4xl text-left relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-light rounded-3xl blur opacity-20"></div>
                    <div className="relative glass p-2 rounded-3xl border border-white/10 shadow-2xl">
                        <LeadForm branch={data.name} />
                    </div>
                </ScrollReveal>
            </div>
        </section>
      )}

      {/* TRIVANDRUM: Image Left, Form Right Split */}
      {branchId === 'trivandrum' && (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 bg-navy-dark overflow-hidden">
            <div className="container mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[750px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl hidden md:flex flex-col justify-end p-8">
                    <Image src={data.heroImage} alt={data.name} fill className="object-cover" unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-90"></div>
                    <div className="relative z-10">
                        <HeroContent />
                    </div>
                </div>
                <div className="md:hidden mb-8"><HeroContent /></div>
                <div><LeadForm branch={data.name} /></div>
            </div>
        </section>
      )}

      {/* ERNAKULAM: Standard Split (Text/Form Left, Graphic Right) */}
      {branchId === 'ernakulam' && (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-20">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] -mr-[20vw] -mt-[10vw] pointer-events-none"></div>
            </div>
            <div className="container mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <HeroContent />
                  <div className="mt-8"><LeadForm branch={data.name} /></div>
                </div>
                <div className="hidden md:block relative h-[700px] w-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(242,156,31,0.1)]">
                   <Image src={data.heroImage} alt={data.name} fill className="object-cover" unoptimized />
                </div>
            </div>
        </section>
      )}


      {/* --- LOCATION DETAILS SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 bg-gradient-to-b from-transparent to-navy-light/20">
          <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${branchId === 'trivandrum' ? 'md:grid-cols-reverse' : ''}`}>
              <ScrollReveal direction={branchId === 'trivandrum' ? 'right' : 'left'} className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(242,156,31,0.15)] h-[300px] md:h-[500px] bg-navy-light/20 flex items-center justify-center">
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
              <ScrollReveal direction={branchId === 'trivandrum' ? 'left' : 'right'} className={branchId === 'trivandrum' ? 'md:order-first' : ''}>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Prime Location in <span className="text-accent">{data.name}</span></h2>
                  
                  {/* Unique elements per branch in the details section */}
                  {branchId === 'ernakulam' && (
                     <div className="mb-6 flex gap-4">
                        <div className="glass p-4 rounded-xl flex-1 text-center"><span className="block text-2xl font-bold text-accent">50+</span><span className="text-xs text-white/50">Companies</span></div>
                        <div className="glass p-4 rounded-xl flex-1 text-center"><span className="block text-2xl font-bold text-accent">500m</span><span className="text-xs text-white/50">To Metro</span></div>
                     </div>
                  )}

                  <div className="flex items-start gap-4 mb-8 bg-navy-light/30 p-6 rounded-2xl border border-white/10">
                      <span className="material-symbols-outlined text-accent text-3xl shrink-0">location_on</span>
                      <div>
                          <h4 className="text-xl font-bold text-white mb-2">Workspace Hub</h4>
                          <p className="text-white/70 leading-relaxed">
                              {data.address}
                              <br/><br/>
                              {data.description}
                          </p>
                      </div>
                  </div>
                  <a href={data.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-transparent border border-accent text-accent hover:bg-accent hover:text-navy font-bold py-3 px-8 rounded-xl transition-all w-max">
                      Get Directions <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
              </ScrollReveal>
          </div>
      </section>

      {/* --- IMAGE GALLERY SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
          <ScrollReveal direction="up" className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Inside Our <span className="text-accent">{data.name}</span> Hub</h2>
              <p className="text-xl text-white/70">Take a peek inside our premium managed offices.</p>
          </ScrollReveal>
          
          {/* Calicut gets a Masonry Layout, others get standard grid */}
          {branchId === 'calicut' ? (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ScrollReveal direction="up" delay={0.1} className="relative rounded-3xl overflow-hidden shadow-lg h-96">
                   <Image src={data.galleryImages[0]} alt="Gallery 1" fill className="object-cover" unoptimized />
                </ScrollReveal>
                <div className="flex flex-col gap-6 h-96">
                   <ScrollReveal direction="left" delay={0.2} className="relative rounded-3xl overflow-hidden shadow-lg flex-1">
                      <Image src={data.galleryImages[1]} alt="Gallery 2" fill className="object-cover" unoptimized />
                   </ScrollReveal>
                   <ScrollReveal direction="left" delay={0.3} className="relative rounded-3xl overflow-hidden shadow-lg flex-1">
                      <Image src={data.galleryImages[2]} alt="Gallery 3" fill className="object-cover" unoptimized />
                   </ScrollReveal>
                </div>
             </div>
          ) : (
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${data.galleryImages.length === 4 ? 'lg:grid-cols-4' : 'md:grid-cols-3'} gap-6`}>
                {data.galleryImages.map((src, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.15} className="relative rounded-2xl overflow-hidden group shadow-md border border-white/10 h-64 md:h-80">
                      <Image src={src} alt={`Gallery ${idx}`} fill className="object-cover transform group-hover:scale-110 transition-transform duration-700" unoptimized />
                      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </ScrollReveal>
                ))}
            </div>
          )}
      </section>
    </>
  );
}
