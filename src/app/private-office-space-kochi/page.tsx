import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MapPin, ArrowRight, CheckCircle, BadgeCheck, Users, Briefcase, Shield, Zap } from 'lucide-react';
import { branchData } from '@/data/branches';
import SEOFAQ from '@/components/SEOFAQ';
import { privateOfficeFAQs } from '@/data/faqs';

const data = branchData.ernakulam;

export const metadata: Metadata = {
  title: 'Private Office Space in Kochi | WeeSpaces',
  description: 'Fully furnished private office space for rent in Kochi. Secure, access-controlled cabins for IT teams and startups on MG Road, Ernakulam.',
  keywords: [
    'private office space Kochi',
    'private office Kochi',
    'office space for rent Kochi',
    'furnished office space Kochi',
    'small office space for rent in Kochi',
    'private cabin space Kochi'
  ],
  alternates: {
    canonical: 'https://www.weespaces.in/private-office-space-kochi',
  },
  openGraph: {
    title: 'Private Office Space in Kochi | WeeSpaces',
    description: 'Fully furnished private office space for rent in Kochi. Secure, access-controlled cabins for IT teams and startups on MG Road, Ernakulam.',
    url: 'https://www.weespaces.in/private-office-space-kochi',
    images: [
      {
        url: data.galleryImages[0], // Using a different image for variety
        width: 1200,
        height: 630,
        alt: 'WeeSpaces Private Office Space in Kochi',
      },
    ],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WeeSpaces - Private Offices Kochi',
  image: 'https://www.weespaces.in' + data.galleryImages[0],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4th floor, Palal Tower, Mahatma Gandhi Rd, Ravipuram, Perumanoor',
    addressLocality: 'Kochi',
    addressRegion: 'Kerala',
    postalCode: '682016',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: data.geo.lat,
    longitude: data.geo.lon,
  },
  telephone: '+919207189111',
  openingHours: 'Mo-Sa 08:00-20:00',
  priceRange: '₹15,000 - ₹50,000',
  url: 'https://www.weespaces.in/private-office-space-kochi',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.weespaces.in/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Locations',
      item: 'https://www.weespaces.in/locations'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Private Office Space in Kochi',
      item: 'https://www.weespaces.in/private-office-space-kochi'
    }
  ]
};

export default function PrivateOfficeSpaceKochi() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, breadcrumbSchema]) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={data.galleryImages[0]} alt="Private Office Space in Kochi" fill sizes="100vw" className="object-cover object-center opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60"></div>
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] -mr-[20vw] -mt-[10vw] pointer-events-none"></div>
        </div>
        <div className="container mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="up" className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)]">
              <MapPin className="w-4 h-4" />
              Kochi, Kerala
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Private Offices</span><br />
              in Kochi
            </h1>

            <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg max-w-xl">
              <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">Your Own Enclosed Workspace</p>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                Fully furnished, secure private office spaces on MG Road. Ideal for teams of 2 to 20+ members looking for privacy without compromising on shared amenities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Shield className="w-5 h-5 text-accent" />
                <span>Biometric Access Control</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <BadgeCheck className="w-5 h-5 text-accent" />
                <span>Zero Fit-Out Costs</span>
              </div>
            </div>

            <p className="text-white/70 italic text-sm">{data.cta}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-md mx-auto md:mx-0 md:ml-auto">
            <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light"></div>
              <h3 className="text-2xl font-bold mb-2">Get a Private Cabin Quote</h3>
              <p className="text-white/70 text-sm mb-6">Let us know your team size.</p>
              <LeadForm branch={data.name} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- INTRODUCTION & WHO IS IT FOR --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Privacy of a Traditional Office, Perks of Coworking</h2>
            <div className="space-y-4 text-white/80 leading-relaxed text-lg">
              <p>
                When your team grows, you need a space where you can close the door, strategize, and work confidentially. But traditional office leases in Kochi involve massive deposits and months of interior fit-outs.
              </p>
              <p>
                WeeSpaces private offices solve this. Get a fully furnished, access-controlled cabin on MG Road. Your team gets absolute privacy, a dedicated IT network, and the ability to step out into our vibrant coworking lounge whenever they want to network or grab a coffee.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-accent">Why Choose a Private Office?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Shield className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Absolute Security</h4>
                <p className="text-sm text-white/70">Biometric locks on your cabin door. Keep your hardware, documents, and IP entirely secure.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Zap className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Dedicated IT Infrastructure</h4>
                <p className="text-sm text-white/70">Custom VLANs, dedicated bandwidth allocation, and private server rack space if needed.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Briefcase className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Custom Branding</h4>
                <p className="text-sm text-white/70">Make the space your own. Brand your cabin with your company's logo and culture.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Flexible Scaling</h4>
                <p className="text-sm text-white/70">Start with a 4-seater cabin, upgrade to a 20-seater as you hire, without changing your address.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- LOCATION ADVANTAGES --- */}
      <section className="py-24 bg-navy-light/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Address on <span className="text-accent">MG Road</span></h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Impress your clients and attract top talent by locating your private office in the commercial heart of Ernakulam.
              </p>

              <div className="flex items-start gap-4 mb-8 bg-navy-light/30 p-6 rounded-xl border border-white/10">
                <MapPin className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">WeeSpaces Kochi Hub</h4>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {data.address}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> 5 minutes from Metro</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Covered parking available</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Premium cafes nearby</li>
                  </ul>
                </div>
              </div>
              <a href={data.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-transparent border border-accent text-accent hover:bg-accent hover:text-navy font-bold py-3 px-8 rounded-xl transition-all w-max">
                Get Directions <ArrowRight className="w-5 h-5" />
              </a>
            </ScrollReveal>

            <ScrollReveal direction="right" className="relative rounded-xl overflow-hidden shadow-[0_0_40px_rgba(242,156,31,0.15)] h-[400px] md:h-[500px]">
              <Image src={data.heroImage} alt="WeeSpaces Kochi Location - MG Road Ernakulam" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <SEOFAQ 
        title="Private Office FAQs"
        subtitle="Common questions about our private cabins in Kochi."
        faqs={privateOfficeFAQs} 
      />
    </>
  );
}
