import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { MapPin, ArrowRight, CheckCircle, ChevronRight, Star, BadgeCheck } from 'lucide-react';
import { branchData } from '@/data/branches';
import NAPBlock from '@/components/NAPBlock';

const data = branchData.trivandrum;

export const metadata: Metadata = {
  title: 'Office Space for Rent in Trivandrum | WeeSpaces',
  description: 'Find the perfect office space for rent in Trivandrum. Located in Pattom near Technopark, ideal for IT companies and startups.',
  keywords: ["office space for rent trivandrum", "commercial space for rent in trivandrum", "office space trivandrum"],
  alternates: {
    canonical: 'https://www.weespaces.in/office-space-for-rent-trivandrum',
  },
  openGraph: {
    title: 'Office Space for Rent in Trivandrum | WeeSpaces',
    description: 'Find the perfect office space for rent in Trivandrum. Located in Pattom near Technopark, ideal for IT companies and startups.',
    url: 'https://www.weespaces.in/office-space-for-rent-trivandrum',
    images: [
      {
        url: data.heroImage,
        width: 1200,
        height: 630,
        alt: 'Office Space for Rent in Trivandrum | WeeSpaces',
      },
    ],
  },
};

const faqs = [
  { question: 'Where can I find office space for rent in Trivandrum?', answer: 'WeeSpaces is located in Relcon Plaza, Pattom, offering premium office rentals for teams of all sizes.' },
  { question: 'Do you offer private offices?', answer: 'Yes, we offer fully furnished private offices with biometric access starting at custom affordable rates.' },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Office Space for Rent in Trivandrum | WeeSpaces',
  image: 'https://www.weespaces.in' + data.heroImage,
  address: {
    '@type': 'PostalAddress',
    streetAddress: data.address.split(',')[0],
    addressLocality: data.name,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: data.geo.lat,
    longitude: data.geo.lon,
  },
  telephone: '+919207189111',
  openingHours: 'Mo-Sa 08:00-20:00',
  priceRange: '₹4,000 - ₹22,000',
  url: 'https://www.weespaces.in/office-space-for-rent-trivandrum',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* --- INAUGURATION OFFER BANNER --- */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-accent via-accent-light to-accent text-navy text-center py-2.5 px-4 text-sm font-bold shadow-[0_4px_20px_rgba(242,156,31,0.4)]">
        🎉 Inauguration Offer Now Live! <span className="hidden sm:inline">Get 20% off on all plans.</span>
        <Link href={`/contact?branch=${data.name.toLowerCase()}`} className="ml-2 underline underline-offset-2 hover:text-navy/70 transition-colors">Claim Now →</Link>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 justify-center">
        <div className="absolute inset-0 z-0">
          <Image src={data.heroImage} alt="Office Space for Rent in Trivandrum | WeeSpaces" fill sizes="100vw" className="object-cover object-center opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <ScrollReveal direction="up" className="space-y-6 md:space-y-8 z-10 relative">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)]">
              <MapPin className="w-4 h-4" />
              {data.name}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight" dangerouslySetInnerHTML={{__html: `Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Office Space for Rent</span><br />in Trivandrum`}}></h1>

            <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg max-w-xl">
              <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">{data.highlight}</p>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                Set up your business in Kerala\'s largest IT ecosystem. Flexible, fully managed office space for rent in Trivandrum.
              </p>
            </div>

            <p className="text-white/70 italic text-sm">{data.cta}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-md">
            <LeadForm branch={data.name} />
          </ScrollReveal>
        </div>
      </section>

      {/* --- NAP BLOCK + PRICING --- */}
      <section className="py-10 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up">
          <NAPBlock
            name={`WeeSpaces ${data.name}`}
            address={data.address}
            mapUrl={data.mapUrl}
            hours="Mon–Sat: 8:00 AM – 8:00 PM | 24/7 access for members"
          />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15} className="mt-8">
          <div className="bg-navy-light/10 border border-white/10 rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-4">Pricing Plans in {data.name}</p>
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
          </div>
        </ScrollReveal>
      </section>

      {/* --- SEO DEEP DIVE SECTION --- */}
      <section className="py-24 max-w-5xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Best Office Space for Rent in Trivandrum</h2>
          <p dangerouslySetInnerHTML={{__html: `Trivandrum is home to a massive IT corridor. An <strong>office space for rent in Trivandrum</strong> places your business right in the middle of a booming tech ecosystem, adjacent to Technopark.`}}></p>

          <h3 className="text-2xl font-bold mt-12 mb-4">Zero-CapEx Office Solutions</h3>
          <p dangerouslySetInnerHTML={{__html: `Skip the hassle of traditional renting. Our fully managed office spaces in Pattom provide everything from ergonomic furniture to high-speed internet, allowing you to focus purely on your business.`}}></p>
        </ScrollReveal>
      </section>

      {/* --- IMAGE GALLERY --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Inside Our <span className="text-accent">{data.name}</span> Hub</h2>
          <p className="text-xl text-white/70">Take a peek inside our premium workspace.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.galleryImages.length > 0 && (
            <ScrollReveal direction="up" delay={0.1} className="relative rounded-xl overflow-hidden shadow-lg h-96 md:col-span-2 group">
              <Image src={data.galleryImages[0]} alt={`WeeSpaces ${data.name} workspace featured`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </ScrollReveal>
          )}
          {data.galleryImages.slice(1).map((src, idx) => (
            <ScrollReveal key={idx + 1} direction="up" delay={0.2 + (idx * 0.1)} className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-80 group">
              <Image src={src} alt={`WeeSpaces ${data.name} workspace ${idx + 2}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 max-w-4xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <details className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all group">
                <summary className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-lg cursor-pointer list-none">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-white/50 group-open:rotate-90 group-open:text-accent transition-transform duration-300 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
