import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import LeadForm from '@/components/LeadForm';
import { CheckCircle, MapPin, Users, Wifi, Coffee } from 'lucide-react';
import SEOFAQ from '@/components/SEOFAQ';
import { privateOfficeFAQs } from '@/data/faqs';

import { branchData } from '@/data/branches';

const data = branchData.ernakulam;

export const metadata: Metadata = {
  title: 'Private Office in Kochi | Managed Team Workspaces | WeeSpaces',
  description: 'Move your team into a secure, fully furnished private office in Ernakulam. Enjoy zero setup costs, ergonomic furniture, and premium IT infrastructure.',
  alternates: {
    canonical: '/private-office-in-kochi',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WeeSpaces Kochi - Private Offices',
  image: 'https://weespaces.in' + data.heroImage,
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
  url: 'https://weespaces.in/private-office-in-kochi',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Private Office in Kochi',
  serviceType: 'Private Managed Office Space',
  provider: {
    '@type': 'LocalBusiness',
    name: 'WeeSpaces Kochi'
  },
  areaServed: {
    '@type': 'City',
    name: 'Kochi'
  },
  description: 'Move your team into a secure, fully furnished private office in Ernakulam. Enjoy zero setup costs, ergonomic furniture, and premium IT infrastructure.',
  offers: {
    '@type': 'Offer',
    price: '18000',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
  }
};

export default function PrivateOfficeKochiPage() {
  return (
    <div className="pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-navy-dark border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image src="/images/branches/kochi/workspace2.jpg" alt="Private Office in Kochi" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="max-w-2xl">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-8">
                <span className="material-symbols-outlined text-[16px]">domain</span>
                MG Road, Ernakulam
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Premium <span className="text-accent">Private Offices</span> in Kochi
              </h1>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Move your team into a fully furnished, private and secure workspace in the heart of Ernakulam. No deposits, zero setup costs, ready to plug-and-play.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="#contact" className="bg-accent text-navy font-bold py-4 px-8 rounded-xl hover:bg-accent-hover transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(242,156,31,0.3)] text-center">
                  Build My Office Plan
                </Link>
                <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-accent" /> Custom spaces for 2 to 100+ people
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <ScrollReveal direction="up" delay={0.1} className="glass p-8 rounded-2xl border border-white/10">
            <Users className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Team Privacy</h3>
            <p className="text-white/60 text-sm">Dedicated secure cabins with biometric access just for your team.</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2} className="glass p-8 rounded-2xl border border-white/10">
            <MapPin className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Prime Location</h3>
            <p className="text-white/60 text-sm">Located on MG Road, Ernakulam, with easy metro and bus connectivity.</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3} className="glass p-8 rounded-2xl border border-white/10">
            <Wifi className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Enterprise IT</h3>
            <p className="text-white/60 text-sm">Leased line internet, secure networks, and robust power backup.</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4} className="glass p-8 rounded-2xl border border-white/10">
            <Coffee className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Full Amenities</h3>
            <p className="text-white/60 text-sm">Free access to breakout zones, pantries, and unlimited beverages.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Private Office (vs Traditional) */}
      <section className="py-24 bg-navy-light/10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Smarter Way to Set Up an Office</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Why lock up your capital in traditional real estate when you can invest it in your growth?</p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="relative h-96 rounded-2xl overflow-hidden hidden md:block border border-white/10">
                <Image src="/images/branches/kochi/workspace2.jpg" alt="Private Office Kochi" fill className="object-cover" />
             </div>
             <div>
                <ul className="space-y-6">
                   <li className="flex gap-4">
                      <div className="mt-1 bg-red-500/10 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                         <span className="text-red-500 font-bold">VS</span>
                      </div>
                      <div>
                         <h4 className="font-bold text-lg mb-1 line-through text-white/50">Traditional Leasing</h4>
                         <p className="text-white/60 text-sm">Heavy deposits, expensive interiors, 3-5 year lock-ins, and managing facilities yourself.</p>
                      </div>
                   </li>
                   <li className="flex gap-4">
                      <div className="mt-1 bg-accent/20 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                         <CheckCircle className="text-accent w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg text-accent mb-1">WeeSpaces Private Office</h4>
                         <p className="text-white/80 text-sm">Zero capex, fully furnished, managed IT & housekeeping, flexible terms, move in tomorrow.</p>
                      </div>
                   </li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing & Form */}
      <section id="contact" className="py-24 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="up">
          <h2 className="text-3xl font-bold mb-6">Get a Custom Quote for Your Team</h2>
          <p className="text-white/70 mb-8">
            Tell us about your team size and requirements. Our workspace experts will get back to you with a tailored private office plan at our Ernakulam hub.
          </p>
          <div className="glass p-6 rounded-2xl border border-white/10 bg-navy-light/30">
            <h4 className="font-bold mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-accent"/> Ernakulam Hub</h4>
            <p className="text-sm text-white/60">4th floor, Palal Tower, Mahatma Gandhi Rd, Ravipuram, Perumanoor, Kochi, Ernakulam, Kerala 682016</p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2} className="glass p-8 rounded-2xl border border-white/10">
          <LeadForm branch="Ernakulam" />
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <SEOFAQ 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our private offices."
        faqs={privateOfficeFAQs} 
      />
    </div>
  );
}
