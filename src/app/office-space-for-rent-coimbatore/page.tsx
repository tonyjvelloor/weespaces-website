import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MapPin, ArrowRight, CheckCircle, ChevronRight, AlertCircle } from 'lucide-react';
import { branchData } from '@/data/branches';

const data = branchData.coimbatore;

export const metadata: Metadata = {
  title: 'Office Space for Rent in Coimbatore | Fully Furnished | WeeSpaces',
  description: 'Looking for office space for rent in Coimbatore? Get plug and play, fully furnished commercial office space near Tidel Park. Zero setup cost. Ready to move.',
  keywords: [
    'office space for rent Coimbatore',
    'office rental Coimbatore',
    'commercial office space Coimbatore',
    'small office space Coimbatore',
    'fully furnished office Coimbatore',
    'ready to move office Coimbatore',
    'plug and play office Coimbatore'
  ],
  alternates: {
    canonical: '/office-space-for-rent-coimbatore',
  },
  openGraph: {
    title: 'Plug and Play Office Space for Rent in Coimbatore',
    description: 'Skip the heavy deposit and setup costs of traditional office rental in Coimbatore. Move your team into a fully furnished, ready to move office space today.',
    url: '/office-space-for-rent-coimbatore',
    images: [
      {
        url: data.heroImage,
        width: 1200,
        height: 630,
        alt: 'Office Space for Rent in Coimbatore - WeeSpaces',
      },
    ],
  },
};

const faqs = [
  {
    question: 'How much does it cost to rent office space in Coimbatore?',
    answer: 'Traditional commercial office space in Coimbatore requires a massive 6 to 10-month lock-in deposit, plus interior setup costs. At WeeSpaces, our plug and play offices require zero setup cost. You simply pay a predictable monthly fee starting at ₹5,000/mo for individuals, or get a custom affordable quote for a private team cabin.',
  },
  {
    question: 'Are the offices fully furnished and ready to move?',
    answer: 'Yes! Every office space for rent at WeeSpaces is 100% fully furnished and ready to move. We provide ergonomic desks, chairs, high-speed WiFi, central air conditioning, and daily housekeeping. It is a true plug and play office setup.',
  },
  {
    question: 'Is it better to rent a small office space or use coworking?',
    answer: 'For teams of 1 to 20 people, renting a traditional small office space in Coimbatore involves high overheads (electricity, internet, cleaning staff, deposits). A managed office or coworking setup gives you the same privacy (via private cabins) but saves you up to 40% in operational costs.',
  },
  {
    question: 'Where is the best place to rent commercial office space in Coimbatore?',
    answer: 'If you are an IT company, startup, or remote team, the best location is near Tidel Park and the Airport. WeeSpaces is located in Kalapatti, just 1.5km from Tidel Park, offering premium commercial office space without the traffic congestion of the city center.',
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WeeSpaces Office Space for Rent Coimbatore',
  image: 'https://weespaces.in' + data.heroImage,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vidyanagar 3rd Street, Vidya Nagar, Civil Aerodrome Post, Kalapatti',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641014',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: data.geo.lat,
    longitude: data.geo.lon,
  },
  telephone: '+919207189111',
  openingHours: 'Mo-Sa 08:00-20:00',
  url: 'https://weespaces.in/office-space-for-rent-coimbatore',
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

export default function OfficeSpaceForRentCoimbatore() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 justify-center">
        <div className="absolute inset-0 z-0">
          <Image src={data.heroImage} alt="Commercial Office Space for Rent in Coimbatore" fill sizes="100vw" className="object-cover object-center opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <ScrollReveal direction="up" className="space-y-6 md:space-y-8 z-10 relative">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)]">
              <MapPin className="w-4 h-4" />
              Kalapatti, Coimbatore
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Plug & Play <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Office Space</span><br />
              For Rent
            </h1>

            <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg max-w-xl">
              <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">Zero Setup Cost. Ready to Move.</p>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                Skip the hefty 10-month deposits and interior design delays. Move your team into a fully furnished, premium commercial office space in Coimbatore today.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>No Long-Term Leases</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Fully Furnished</span>
              </div>
            </div>

            <p className="text-white/70 italic text-sm">Inquire for pricing and availability.</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-md">
            <LeadForm branch={data.name} source="Coimbatore - Office Rent" />
          </ScrollReveal>
        </div>
      </section>

      {/* --- COMPARISON SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Traditional Rent vs <span className="text-accent">WeeSpaces</span></h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Why founders and decision-makers are choosing plug and play offices over traditional commercial rentals.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="glass p-8 rounded-2xl border border-red-500/30 bg-red-500/5 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertCircle className="text-red-400 w-6 h-6" /> Traditional Office Rental
              </h3>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">×</span> 
                  <div><strong className="text-white">Huge Capital Lock-in:</strong> 6 to 10 months of rent required as a security deposit.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">×</span> 
                  <div><strong className="text-white">High Setup Cost:</strong> You pay for interior design, AC installation, wiring, and furniture.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">×</span> 
                  <div><strong className="text-white">Hidden Overheads:</strong> Extra bills for electricity, internet, cleaning staff, and maintenance.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">×</span> 
                  <div><strong className="text-white">Inflexible:</strong> Stuck in a 3-5 year lease even if your team size changes.</div>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass p-8 rounded-2xl border border-accent/50 glow h-full relative">
              <div className="absolute top-0 right-0 bg-accent text-navy text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-xl">SMART CHOICE</div>
              <h3 className="text-2xl font-bold text-accent mb-6 flex items-center gap-3">
                <CheckCircle className="text-accent w-6 h-6" /> WeeSpaces Ready Office
              </h3>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent w-5 h-5 shrink-0 mt-0.5" /> 
                  <div><strong className="text-white">Zero Capital Lock-in:</strong> Minimal deposit required. Keep your capital for business growth.</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent w-5 h-5 shrink-0 mt-0.5" /> 
                  <div><strong className="text-white">Zero Setup Cost:</strong> 100% plug and play. Bring your laptops and start working on day 1.</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent w-5 h-5 shrink-0 mt-0.5" /> 
                  <div><strong className="text-white">All-Inclusive Pricing:</strong> One bill covers rent, electricity, high-speed WiFi, and daily cleaning.</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent w-5 h-5 shrink-0 mt-0.5" /> 
                  <div><strong className="text-white">Scale Freely:</strong> Upgrade from a 5-seater to a 20-seater office space effortlessly as you grow.</div>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- LOCATION DETAILS --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 bg-gradient-to-b from-transparent to-navy-light/20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Location near <span className="text-accent">Tidel Park</span></h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Finding a small office space or commercial property in central Coimbatore often means dealing with severe traffic and lack of parking. 
              Our Kalapatti hub solves this. Positioned perfectly for IT companies, it offers a serene environment with enterprise-grade connectivity.
            </p>

            <div className="flex items-start gap-4 mb-8 bg-navy-light/30 p-6 rounded-xl border border-white/10">
              <MapPin className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">WeeSpaces Coimbatore</h4>
                <p className="text-white/70 leading-relaxed">
                  {data.address}
                </p>
              </div>
            </div>
            <a href={data.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-transparent border border-accent text-accent hover:bg-accent hover:text-navy font-bold py-3 px-8 rounded-xl transition-all w-max">
              Get Directions <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollReveal>

          <ScrollReveal direction="right" className="relative rounded-xl overflow-hidden shadow-[0_0_40px_rgba(242,156,31,0.15)] h-[400px] md:h-[500px]">
            <Image src={data.heroImage} alt="Office Space for rent in Coimbatore" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 max-w-4xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Office Rental FAQs</h2>
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
