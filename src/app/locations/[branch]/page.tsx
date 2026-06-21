import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MapPin, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return [
    { branch: 'trivandrum' },
    { branch: 'ernakulam' },
    { branch: 'calicut' },
    { branch: 'coimbatore' },
  ];
}

import { branchData } from '@/data/branches';

export async function generateMetadata({ params }: { params: Promise<{ branch: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const branchName = branchData[resolvedParams.branch]?.name || 'Location';
  
  return {
    title: `Coworking Space in ${branchName} | WeeSpaces`,
    description: `Premium coworking and private offices in ${branchName}. High-speed WiFi, ergonomic setups, and a vibrant community. Book your tour today!`,
    keywords: [`Coworking space ${branchName}`, `Office space ${branchName}`, `Managed offices ${branchName}`, `Private cabin ${branchName}`, `Shared workspace ${branchName}`],
    alternates: {
      canonical: `/locations/${resolvedParams.branch}`,
    },
    openGraph: {
      title: `Coworking Space in ${branchName} | WeeSpaces`,
      description: `Premium coworking and private offices in ${branchName}. High-speed WiFi, ergonomic setups, and a vibrant community. Book your tour today!`,
      url: `/locations/${resolvedParams.branch}`,
      images: [
        {
          url: branchData[resolvedParams.branch]?.heroImage || '/images/exterior.jpg',
          width: 1200,
          height: 630,
          alt: `WeeSpaces ${branchName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Coworking Space in ${branchName} | WeeSpaces`,
      description: `Premium coworking and private offices in ${branchName}.`,
      images: [branchData[resolvedParams.branch]?.heroImage || '/images/exterior.jpg'],
    },
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
    "image": "https://weespaces.in/images/exterior.jpg",
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
          <MapPin className="w-4 h-4" />
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
                <Image src={data.heroImage} alt={data.name} fill className="object-cover object-center opacity-40" />
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
                <Image src={data.heroImage} alt={data.name} fill className="object-cover object-center scale-105 opacity-30 blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy/90 to-navy"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] bg-accent/20 rounded-full blur-[150px] pointer-events-none"></div>
            </div>
            
            <div className="container mx-auto px-6 w-full relative z-10 flex flex-col items-center max-w-5xl">
                <ScrollReveal direction="up" className="flex flex-col items-center space-y-6 mb-12">
                    <div className="inline-flex items-center gap-2 bg-navy-light/40 backdrop-blur-md border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-[0_0_20px_rgba(242,156,31,0.15)]">
                        <MapPin className="w-4 h-4" /> {data.name}, Kerala
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
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-light rounded-xl blur opacity-20"></div>
                    <div className="relative glass p-2 rounded-xl border border-white/10 shadow-2xl">
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
                <div className="relative h-[750px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl hidden md:flex flex-col justify-end p-8">
                    <Image src={data.heroImage} alt={data.name} fill className="object-cover" />
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
                <div className="hidden md:block relative h-[700px] w-full rounded-xl overflow-hidden shadow-[0_0_50px_rgba(242,156,31,0.1)]">
                   <Image src={data.heroImage} alt={data.name} fill className="object-cover" />
                </div>
            </div>
        </section>
      )}


      {/* --- LOCATION DETAILS SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 bg-gradient-to-b from-transparent to-navy-light/20">
          <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${branchId === 'trivandrum' ? 'md:grid-cols-reverse' : ''}`}>
              <ScrollReveal direction={branchId === 'trivandrum' ? 'right' : 'left'} className="relative rounded-xl overflow-hidden shadow-[0_0_40px_rgba(242,156,31,0.15)] bg-navy-light/20 flex flex-col justify-center p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">Pricing Summary</h3>
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Hot Desk</p>
                      <p className="text-xl font-bold text-white">{data.pricing.hotDesk}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Dedicated Desk</p>
                      <p className="text-xl font-bold text-accent">{data.pricing.dedicatedDesk}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Private Cabin</p>
                      <p className="text-xl font-bold text-white">{data.pricing.privateCabin}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Virtual Office</p>
                      <p className="text-xl font-bold text-white">{data.pricing.virtualOffice}</p>
                    </div>
                  </div>
                  <Link href={`/pricing`} className="mt-8 text-accent font-bold hover:text-white transition-colors text-sm flex items-center gap-2">View Full Pricing <ArrowRight className="w-4 h-4" /></Link>
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

                  <div className="flex items-start gap-4 mb-8 bg-navy-light/30 p-6 rounded-xl border border-white/10">
                      <MapPin className="w-8 h-8 text-accent shrink-0" />
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
                      Get Directions <ArrowRight className="w-5 h-5" />
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
                <ScrollReveal direction="up" delay={0.1} className="relative rounded-xl overflow-hidden shadow-lg h-96">
                   <Image src={data.galleryImages[0]} alt="Gallery 1" fill className="object-cover" />
                </ScrollReveal>
                <div className="flex flex-col gap-6 h-96">
                   <ScrollReveal direction="left" delay={0.2} className="relative rounded-xl overflow-hidden shadow-lg flex-1">
                      <Image src={data.galleryImages[1]} alt="Gallery 2" fill className="object-cover" />
                   </ScrollReveal>
                   <ScrollReveal direction="left" delay={0.3} className="relative rounded-xl overflow-hidden shadow-lg flex-1">
                      <Image src={data.galleryImages[2]} alt="Gallery 3" fill className="object-cover" />
                   </ScrollReveal>
                </div>
             </div>
          ) : branchId === 'coimbatore' ? (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.galleryImages.length > 0 && (
                   <ScrollReveal direction="up" delay={0.1} className="relative rounded-xl overflow-hidden shadow-lg h-96 md:col-span-2">
                      <Image src={data.galleryImages[0]} alt="Gallery 1" fill className="object-cover" />
                   </ScrollReveal>
                )}
                {data.galleryImages.slice(1).map((src, idx) => (
                   <ScrollReveal key={idx + 1} direction="up" delay={0.2 + (idx * 0.1)} className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-80">
                      <Image src={src} alt={`Gallery ${idx + 2}`} fill className="object-cover transform hover:scale-110 transition-transform duration-700" />
                   </ScrollReveal>
                ))}
             </div>
          ) : (
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${data.galleryImages.length === 4 ? 'lg:grid-cols-4' : 'md:grid-cols-3'} gap-6`}>
                {data.galleryImages.map((src, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.15} className="relative rounded-xl overflow-hidden group shadow-md border border-white/10 h-64 md:h-80">
                      <Image src={src} alt={`Gallery ${idx}`} fill className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </ScrollReveal>
                ))}
            </div>
          )}
      </section>
    </>
  );
}
