import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { MapPin, ArrowRight, CheckCircle, Star, BadgeCheck, Users, Briefcase, Zap, Coffee, Shield } from 'lucide-react';
import { branchData } from '@/data/branches';
import SEOFAQ from '@/components/SEOFAQ';
import { coworkingFAQs } from '@/data/faqs';
import NAPBlock from '@/components/NAPBlock';

const data = branchData.ernakulam;

export const metadata: Metadata = {
  title: 'Coworking Space Kochi (Ernakulam) | Premium Office Spaces',
  description: 'Discover flexible coworking spaces in Kochi with dedicated desks, private offices, meeting rooms and managed workspace solutions.',
  keywords: [
    'coworking space Kochi',
    'coworking space in Kochi',
    'office space Kochi',
    'shared office Kochi',
    'private office Kochi',
    'managed workspace Kochi',
    'coworking space MG Road Kochi',
    'virtual office Kochi',
  ],
  alternates: {
    canonical: 'https://www.weespaces.in/coworking-space-kochi',
  },
  openGraph: {
    title: 'Coworking Space in Kochi | Private Offices & Managed Workspace | WeeSpaces',
    description: 'Premium coworking & managed offices on MG Road, Kochi. High-speed WiFi, ergonomic setups, meeting rooms & a vibrant community. Hot desks from ₹5,000/mo.',
    url: 'https://www.weespaces.in/coworking-space-kochi',
    images: [
      {
        url: data.heroImage,
        width: 1200,
        height: 630,
        alt: 'WeeSpaces Coworking Space in Kochi - MG Road, Ernakulam',
      },
    ],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WeeSpaces Kochi - Coworking Space in Ernakulam',
  image: 'https://www.weespaces.in' + data.heroImage,
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
  priceRange: '₹5,000 - ₹20,000',
  url: 'https://www.weespaces.in/coworking-space-kochi',
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
      name: 'Coworking Space in Kochi',
      item: 'https://www.weespaces.in/coworking-space-kochi'
    }
  ]
};

export default function CoworkingSpaceInKochi() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, breadcrumbSchema]) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={data.heroImage} alt="Coworking Space in Kochi - WeeSpaces MG Road" fill sizes="100vw" className="object-cover object-center opacity-30" priority />
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
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Coworking Space</span><br />
              in Kochi for Growing Teams
            </h1>

            <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg max-w-xl">
              <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">{data.highlight}</p>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                Elevate your business in the commercial heart of Kerala. Located on MG Road, our Ernakulam hub provides flexible workspace solutions designed specifically for ambitious startups, IT companies, and entrepreneurs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <BadgeCheck className="w-5 h-5 text-accent" />
                <span>50+ Startups & Enterprises Trust Us</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span>4.8/5 Google Rating</span>
              </div>
            </div>

            <p className="text-white/70 italic text-sm">{data.cta}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-md mx-auto md:mx-0 md:ml-auto">
            <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light"></div>
              <h3 className="text-2xl font-bold mb-2">Book a Free Tour</h3>
              <p className="text-white/70 text-sm mb-6">Experience our MG Road workspace firsthand.</p>
              <LeadForm branch={data.name} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- NAP BLOCK + PRICING (after hero, before intro) --- */}
      <section className="py-10 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up">
          <NAPBlock
            name="WeeSpaces Kochi — MG Road, Ernakulam"
            address={data.address}
            mapUrl={data.mapUrl}
            hours="Mon–Sat: 8:00 AM – 8:00 PM | 24/7 access for members"
          />
        </ScrollReveal>

        {/* Pricing strip */}
        <ScrollReveal direction="up" delay={0.15} className="mt-8">
          <div className="bg-navy-light/10 border border-white/10 rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-4">Coworking Space Pricing in Kochi</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Hot Desk', price: data.pricing.hotDesk, note: 'Flexible seating' },
                { label: 'Dedicated Desk', price: data.pricing.dedicatedDesk, note: 'Your own fixed desk' },
                { label: 'Private Office', price: data.pricing.privateOffice, note: 'Enclosed cabin' },
                { label: 'Virtual Office', price: data.pricing.virtualOffice, note: 'Premium address' },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4 text-center border border-white/10 hover:border-accent/30 transition-all">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-xl font-bold text-accent">{item.price.split('/')[0]}</p>
                  <p className="text-[11px] text-white/40 mt-1">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <a href="#book-tour" className="inline-flex items-center gap-2 bg-accent text-navy font-bold py-2.5 px-6 rounded-xl hover:bg-accent-hover transition-all text-sm shadow-[0_0_15px_rgba(242,156,31,0.3)]">
                Check Availability
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- INTRODUCTION & WHO IS IT FOR --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Fuel Your Growth in Kochi's Thriving Startup Ecosystem</h2>
            <div className="space-y-4 text-white/80 leading-relaxed text-lg">
              <p>
                Kochi is rapidly emerging as one of India's most vibrant hubs for innovation and technology. However, setting up a traditional office in Ernakulam can be a massive drain on your capital and time. 
              </p>
              <p>
                WeeSpaces offers the perfect alternative. Our premium coworking spaces and private offices in Kochi provide a plug-and-play environment where you can focus entirely on scaling your business. Whether you need a hot desk for a day, a dedicated desk for a month, or a custom-built private office for your expanding IT company, we have the infrastructure to support your journey.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-accent">Who is WeeSpaces Kochi For?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Startups & Tech Founders</h4>
                <p className="text-sm text-white/70">Scale your team up or down without the constraints of a rigid lease. Network with other innovators.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Briefcase className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">IT & Service Agencies</h4>
                <p className="text-sm text-white/70">Impress your clients with a premium MG Road address and professional conference rooms.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <MapPin className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Remote Enterprise Teams</h4>
                <p className="text-sm text-white/70">Provide your distributed workforce in Kerala with a secure, high-speed regional headquarters.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Coffee className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Freelancers & Consultants</h4>
                <p className="text-sm text-white/70">Escape the isolation of working from home. Enjoy ergonomic setups and endless networking opportunities.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- BENEFITS & AMENITIES --- */}
      <section className="py-24 bg-navy-light/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Amenities</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">Everything you need to do your best work, included in your membership.</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollReveal delay={0.1} className="glass p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all">
              <Zap className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">High-Speed Internet</h4>
              <p className="text-xs text-white/60">Dedicated leased lines with zero downtime guarantees.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="glass p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all">
              <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Biometric Security</h4>
              <p className="text-xs text-white/60">24/7 secure access with CCTV monitoring for your peace of mind.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="glass p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all">
              <Users className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Conference Rooms</h4>
              <p className="text-xs text-white/60">Smart TVs, whiteboards, and video conferencing setups.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.4} className="glass p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all">
              <Coffee className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Pantry & Lounge</h4>
              <p className="text-xs text-white/60">Unlimited tea/coffee and breakout zones to relax and recharge.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- WORKSPACE OPTIONS / PRICING GUIDANCE --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Flexible Workspace Solutions in <span className="text-accent">Kochi</span></h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Flexible plans designed for freelancers, startups, and enterprise teams in Ernakulam.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollReveal delay={0.1}>
            <MouseGlowCard className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all h-full flex flex-col">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Hot Desk</p>
              <div className="flex items-baseline gap-2 mb-1">
                 <span className="text-xs text-white/50 uppercase font-bold tracking-wider">From</span>
                 <p className="text-3xl font-bold text-white">{data.pricing.hotDesk.split('/')[0]}</p>
              </div>
              <p className="text-white/40 text-sm mb-4">per month</p>
              <p className="text-sm text-white/80 mb-6 flex-grow">Ideal for freelancers and digital nomads. Grab any available desk in our open coworking area and start working instantly.</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Flexible seating</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> High-speed WiFi</li>
              </ul>
              <Link href="/pricing" className="text-accent font-bold text-sm flex items-center gap-2 hover:text-white transition-colors mt-auto">View Details <ArrowRight className="w-4 h-4" /></Link>
            </MouseGlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <MouseGlowCard className="glass p-8 rounded-2xl border border-accent/30 glow transition-all h-full relative flex flex-col">
              <div className="absolute -top-3 left-6 bg-accent text-navy text-[10px] font-bold px-3 py-1 rounded-full">POPULAR</div>
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Dedicated Desk</p>
              <div className="flex items-baseline gap-2 mb-1">
                 <span className="text-xs text-white/50 uppercase font-bold tracking-wider">From</span>
                 <p className="text-3xl font-bold text-accent">{data.pricing.dedicatedDesk.split('/')[0]}</p>
              </div>
              <p className="text-white/40 text-sm mb-4">per month</p>
              <p className="text-sm text-white/80 mb-6 flex-grow">Perfect for remote workers and small startup teams. Your own personal desk with lockable storage in a shared environment.</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Fixed personal desk</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Lockable storage</li>
              </ul>
              <Link href="/pricing" className="text-accent font-bold text-sm flex items-center gap-2 hover:text-white transition-colors mt-auto">View Details <ArrowRight className="w-4 h-4" /></Link>
            </MouseGlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <MouseGlowCard className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all h-full bg-navy-light/20 flex flex-col">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Private Office</p>
              <p className="text-2xl font-bold text-white mb-1">Custom Quote</p>
              <p className="text-white/40 text-sm mb-4">tailored to your team</p>
              <p className="text-sm text-white/80 mb-6 flex-grow">Secure, enclosed cabins for growing startups and established IT companies. Fully customizable layouts with biometric access.</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Fully furnished</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Biometric access</li>
              </ul>
              <Link href="/pricing" className="text-accent font-bold text-sm flex items-center gap-2 hover:text-white transition-colors mt-auto">Get a Quote <ArrowRight className="w-4 h-4" /></Link>
            </MouseGlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <MouseGlowCard className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all h-full flex flex-col">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Virtual Office</p>
              <div className="flex items-baseline gap-2 mb-1">
                 <span className="text-xs text-white/50 uppercase font-bold tracking-wider">From</span>
                 <p className="text-3xl font-bold text-white">{data.pricing.virtualOffice.split('/')[0]}</p>
              </div>
              <p className="text-white/40 text-sm mb-4">per year</p>
              <p className="text-sm text-white/80 mb-6 flex-grow">Establish a professional presence without physical space. Includes an MG Road address, GST registration support, and mail handling.</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> MG Road address</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> GST registration</li>
              </ul>
              <Link href="/virtual-office-kochi" className="text-accent font-bold text-sm flex items-center gap-2 hover:text-white transition-colors mt-auto">View Details <ArrowRight className="w-4 h-4" /></Link>
            </MouseGlowCard>
          </ScrollReveal>
        </div>
      </section>

      {/* --- COMPARISON: Coworking vs Traditional in Kochi --- */}
      <section className="py-24 bg-navy-light/10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Coworking Space vs Traditional Office in Kochi</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Why lock up your startup's runway in real estate when you can invest it in growth?</p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="relative h-96 rounded-2xl overflow-hidden hidden md:block border border-white/10">
                <Image src="/images/branches/kochi/workspace2.jpg" alt="Private Office Kochi Comparison" fill className="object-cover" />
             </div>
             <div>
                <ul className="space-y-6">
                   <li className="flex gap-4">
                      <div className="mt-1 bg-red-500/10 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                         <span className="text-red-500 font-bold">VS</span>
                      </div>
                      <div>
                         <h4 className="font-bold text-lg mb-1 line-through text-white/50">Traditional Leasing in Kochi</h4>
                         <p className="text-white/60 text-sm">High security deposits (6-10 months), expensive interior fit-outs, rigid 3-5 year lock-in periods, and the hassle of managing housekeeping and internet vendors yourself.</p>
                      </div>
                   </li>
                   <li className="flex gap-4">
                      <div className="mt-1 bg-accent/20 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                         <CheckCircle className="text-accent w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg text-accent mb-1">WeeSpaces Coworking</h4>
                         <p className="text-white/80 text-sm">Zero capital expenditure, fully furnished and managed workspaces, flexible month-to-month terms. Move your team in tomorrow and start working instantly.</p>
                      </div>
                   </li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* --- LOCATION ADVANTAGES --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prime Location Advantages in <span className="text-accent">Kochi</span></h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Situated right on Mahatma Gandhi Road (MG Road), our Ernakulam hub puts your business in the center of Kochi's commercial district. Enjoy unparalleled connectivity, prestige, and convenience.
            </p>

            <div className="mb-6 flex gap-4">
              <div className="glass p-4 rounded-xl flex-1 text-center"><span className="block text-2xl font-bold text-accent">50+</span><span className="text-xs text-white/50">Companies</span></div>
              <div className="glass p-4 rounded-xl flex-1 text-center"><span className="block text-2xl font-bold text-accent">500m</span><span className="text-xs text-white/50">To Metro</span></div>
            </div>

            <div className="flex items-start gap-4 mb-8 bg-navy-light/30 p-6 rounded-xl border border-white/10">
              <MapPin className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">WeeSpaces Ernakulam</h4>
                <p className="text-white/70 leading-relaxed text-sm">
                  {data.address}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> 5 minutes walk from MG Road Metro Station</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Surrounded by premium cafes, banks, and retail</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Excellent connectivity to Vyttila & Edappally</li>
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
      </section>

      {/* --- IMAGE GALLERY --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 bg-navy-light/5">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Inside Our <span className="text-accent">Kochi</span> Hub</h2>
          <p className="text-xl text-white/70">Take a peek inside our premium managed offices on MG Road.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.galleryImages.map((src, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15} className="relative rounded-xl overflow-hidden group shadow-md border border-white/10 h-64 md:h-80">
              <Image src={src} alt={`WeeSpaces Kochi workspace ${idx + 1}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- SEO CONTENT SECTIONS --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 [&>div>h2]:text-2xl [&>div>h2]:md:text-3xl [&>div>h2]:font-bold [&>div>h2]:mb-4 [&>div>h2]:text-white">
          
          <ScrollReveal direction="up" delay={0.1} className="glass p-8 rounded-2xl border border-white/10 flex flex-col h-full">
            <h2>Shared Office Space in Kochi</h2>
            <p className="text-white/70 leading-relaxed text-sm mt-4 flex-grow">
              Experience the perfect blend of productivity and community at our premier shared office space in Kochi. Located on MG Road, WeeSpaces provides a collaborative environment tailored for modern professionals. From high-speed internet to endless networking opportunities, our workspaces are designed to help your business thrive without the overhead of a traditional office.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="glass p-8 rounded-2xl border border-white/10 flex flex-col h-full">
            <h2>Office Space for Rent in Ernakulam</h2>
            <p className="text-white/70 leading-relaxed text-sm mt-4 flex-grow">
              Finding the right office space for rent in Ernakulam has never been easier. We offer flexible, fully-managed private offices and customizable workspaces that cater to startups and established enterprises alike. Skip long-term leases and heavy capital expenditures—move into a plug-and-play office today and scale your operations effortlessly in the heart of Kerala's commercial capital.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3} className="glass p-8 rounded-2xl border border-white/10 flex flex-col h-full">
            <h2>Dedicated Desk Kochi</h2>
            <p className="text-white/70 leading-relaxed text-sm mt-4 flex-grow">
              Secure your own personal workspace with a dedicated desk at WeeSpaces Kochi. Perfect for freelancers, remote workers, and small teams who need a consistent, professional environment every day. Enjoy the perks of a fixed desk, lockable storage, and full access to our premium amenities while staying connected to a vibrant, like-minded community of innovators.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <SEOFAQ 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about coworking in Kochi."
        faqs={coworkingFAQs} 
      />
    </>
  );
}
