import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MapPin, ArrowRight, CheckCircle, Briefcase, Shield, Zap, Building } from 'lucide-react';
import { branchData } from '@/data/branches';
import SEOFAQ from '@/components/SEOFAQ';
import { coworkingFAQs } from '@/data/faqs';

const data = branchData.ernakulam;

export const metadata: Metadata = {
  title: 'Managed Office Space in Kochi | Custom IT Workspaces | WeeSpaces',
  description: 'Enterprise-grade managed office space in Kochi. Custom built, fully serviced IT workspaces on MG Road tailored to your brand and security requirements.',
  keywords: [
    'managed office space Kochi',
    'managed workspace Kochi',
    'custom office space Ernakulam',
    'serviced office Kochi',
    'enterprise office space Kochi',
    'IT office space for rent Kochi'
  ],
  alternates: {
    canonical: 'https://www.weespaces.in/managed-office-space-kochi',
  },
  openGraph: {
    title: 'Managed Office Space in Kochi | Enterprise Workspaces | WeeSpaces',
    description: 'Custom built, fully serviced managed IT offices on MG Road, Kochi. Zero CapEx, scalable infrastructure, and dedicated facility management.',
    url: 'https://www.weespaces.in/managed-office-space-kochi',
    images: [
      {
        url: data.galleryImages[1], 
        width: 1200,
        height: 630,
        alt: 'WeeSpaces Managed Office Space in Kochi',
      },
    ],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WeeSpaces - Managed Offices Kochi',
  image: 'https://www.weespaces.in' + data.galleryImages[1],
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
  priceRange: 'Custom Pricing',
  url: 'https://www.weespaces.in/managed-office-space-kochi',
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
      name: 'Managed Office Space in Kochi',
      item: 'https://www.weespaces.in/managed-office-space-kochi'
    }
  ]
};

export default function ManagedOfficeSpaceKochi() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, breadcrumbSchema]) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={data.galleryImages[1]} alt="Managed Office Space in Kochi" fill sizes="100vw" className="object-cover object-center opacity-30" priority />
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
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Managed Offices</span><br />
              in Kochi
            </h1>

            <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg max-w-xl">
              <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">Tailor-Made For Your Brand</p>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                Design, build, and operate your regional headquarters in Kochi without lifting a finger. Custom layouts, dedicated IT infrastructure, and comprehensive facility management.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Building className="w-5 h-5 text-accent" />
                <span>Zero Capital Expenditure</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Shield className="w-5 h-5 text-accent" />
                <span>Enterprise Grade Security</span>
              </div>
            </div>

            <p className="text-white/70 italic text-sm">{data.cta}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-md mx-auto md:mx-0 md:ml-auto">
            <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light"></div>
              <h3 className="text-2xl font-bold mb-2">Request a Custom Build</h3>
              <p className="text-white/70 text-sm mb-6">Let's discuss your custom floor plan requirements.</p>
              <LeadForm branch={data.name} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- INTRODUCTION & WHO IS IT FOR --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Office. Your Rules. Our Headache.</h2>
            <div className="space-y-4 text-white/80 leading-relaxed text-lg">
              <p>
                Setting up a traditional commercial space in Kochi involves dealing with brokers, contractors, interior designers, and multiple vendors for internet, AC, and housekeeping. 
              </p>
              <p>
                A WeeSpaces Managed Office eliminates all CapEx and operational friction. We design the layout according to your specifications, integrate your brand colors, set up dedicated secure server rooms, and handle the day-to-day operations so you can focus entirely on your core business.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-accent">Benefits of a Managed Office</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Building className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Zero CapEx</h4>
                <p className="text-sm text-white/70">Keep your capital for growth. We absorb the upfront costs of interior fit-outs and furniture.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Zap className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Custom IT & Power</h4>
                <p className="text-sm text-white/70">Dedicated server racks, private VLANs, static IPs, and uninterrupted power backup.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Briefcase className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Dedicated Facilities Manager</h4>
                <p className="text-sm text-white/70">A single point of contact for housekeeping, pantry supplies, and maintenance.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Shield className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Independent Access</h4>
                <p className="text-sm text-white/70">Your own private entrance with custom biometric access controls for your employees only.</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Headquarters on <span className="text-accent">MG Road</span></h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Establish your corporate presence in Ernakulam's most prestigious commercial district.
              </p>

              <div className="flex items-start gap-4 mb-8 bg-navy-light/30 p-6 rounded-xl border border-white/10">
                <MapPin className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">WeeSpaces Managed Hub</h4>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {data.address}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Premium corporate address</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Excellent metro connectivity</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Custom branding opportunities</li>
                  </ul>
                </div>
              </div>
              <a href={data.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-transparent border border-accent text-accent hover:bg-accent hover:text-navy font-bold py-3 px-8 rounded-xl transition-all w-max">
                Get Directions <ArrowRight className="w-5 h-5" />
              </a>
            </ScrollReveal>

            <ScrollReveal direction="right" className="relative rounded-xl overflow-hidden shadow-[0_0_40px_rgba(242,156,31,0.15)] h-[400px] md:h-[500px]">
              <Image src={data.heroImage} alt="WeeSpaces Kochi Location" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <SEOFAQ 
        title="Managed Office FAQs"
        subtitle="Common questions about our enterprise solutions."
        faqs={coworkingFAQs} 
      />
    </>
  );
}
