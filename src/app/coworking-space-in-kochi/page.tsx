import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { MapPin, ArrowRight, CheckCircle, ChevronRight, Star, BadgeCheck } from 'lucide-react';
import { branchData } from '@/data/branches';

const data = branchData.ernakulam;

export const metadata: Metadata = {
  title: 'Coworking Space in Kochi | Premium Office Space for Rent | WeeSpaces',
  description: 'Looking for a premium coworking space in Kochi? WeeSpaces Ernakulam offers hot desks from ₹5,000/mo, dedicated desks, private cabins & virtual offices on MG Road. Book a free tour today!',
  keywords: [
    'coworking space in Kochi',
    'office space for rent in Kochi',
    'managed office Kochi',
    'shared workspace Ernakulam',
    'coworking space MG Road Kochi',
    'virtual office Kochi',
    'private office cabin Ernakulam',
    'best coworking space Kochi',
  ],
  alternates: {
    canonical: '/coworking-space-in-kochi',
  },
  openGraph: {
    title: 'Coworking Space in Kochi | Premium Office Space for Rent | WeeSpaces',
    description: 'Premium coworking & managed offices on MG Road, Kochi. High-speed WiFi, ergonomic setups, meeting rooms & a vibrant community. Hot desks from ₹5,000/mo.',
    url: '/coworking-space-in-kochi',
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

const faqs = [
  {
    question: 'How much does coworking cost in Kochi?',
    answer: 'At WeeSpaces Kochi (Ernakulam), hot desks start at ₹5,000/month, dedicated desks at ₹6,500/month, and virtual office plans at ₹10,000/year. Private cabins are available with custom quotes tailored to your team size and requirements.',
  },
  {
    question: 'Which is the best coworking space in Kochi?',
    answer: 'WeeSpaces on MG Road, Ernakulam is rated among the best coworking spaces in Kochi. Located in the commercial heart of Kerala at Palal Tower, Ravipuram, it offers premium amenities including high-speed WiFi, ergonomic furniture, conference rooms, and a vibrant professional community — all at competitive pricing.',
  },
  {
    question: 'Does WeeSpaces Kochi offer virtual offices?',
    answer: 'Yes! Our virtual office plan in Kochi starts at just ₹10,000/year. You get a prestigious MG Road business address for GST and company registration, mail handling services, and access to our meeting rooms on a pay-per-use basis.',
  },
  {
    question: 'Where is WeeSpaces Kochi located?',
    answer: 'WeeSpaces Kochi is located at 4th Floor, Palal Tower, Mahatma Gandhi Road, Ravipuram, Perumanoor, Ernakulam, Kerala 682016. It is centrally located in the Kochi CBD with excellent connectivity to the Kochi Metro and major business hubs.',
  },
  {
    question: 'Does WeeSpaces Kochi have meeting rooms and conference facilities?',
    answer: 'Yes, WeeSpaces Kochi offers fully equipped meeting rooms and conference facilities with high-speed internet, projectors, and whiteboards. Dedicated desk members get complimentary hours, and other members can book on a pay-per-use basis.',
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WeeSpaces Kochi - Coworking Space in Ernakulam',
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
  priceRange: '₹5,000 - ₹20,000',
  url: 'https://weespaces.in/coworking-space-in-kochi',
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

export default function CoworkingSpaceInKochi() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20">
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
              in Kochi
            </h1>

            <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg max-w-xl">
              <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">{data.highlight}</p>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                {data.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <BadgeCheck className="w-5 h-5 text-accent" />
                <span>50+ Companies Trust Us</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span>4.8/5 Google Rating</span>
              </div>
            </div>

            <p className="text-white/70 italic text-sm">{data.cta}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-md mx-auto md:mx-0 md:ml-auto">
            <LeadForm branch={data.name} />
          </ScrollReveal>
        </div>
      </section>

      {/* --- PRICING SUMMARY --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent <span className="text-accent">Pricing</span> in Kochi</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Flexible plans designed for freelancers, startups, and enterprise teams in Ernakulam.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollReveal delay={0.1}>
            <MouseGlowCard className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all h-full">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Hot Desk</p>
              <div className="flex items-baseline gap-2 mb-1">
                 <span className="text-xs text-white/50 uppercase font-bold tracking-wider">From</span>
                 <p className="text-3xl font-bold text-white">{data.pricing.hotDesk.split('/')[0]}</p>
              </div>
              <p className="text-white/40 text-sm mb-4">per month</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Flexible seating</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> High-speed WiFi</li>
              </ul>
              <Link href="/pricing" className="text-accent font-bold text-sm flex items-center gap-2 hover:text-white transition-colors">View Details <ArrowRight className="w-4 h-4" /></Link>
            </MouseGlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <MouseGlowCard className="glass p-8 rounded-2xl border border-accent/30 glow transition-all h-full relative">
              <div className="absolute -top-3 left-6 bg-accent text-navy text-[10px] font-bold px-3 py-1 rounded-full">POPULAR</div>
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Dedicated Desk</p>
              <div className="flex items-baseline gap-2 mb-1">
                 <span className="text-xs text-white/50 uppercase font-bold tracking-wider">From</span>
                 <p className="text-3xl font-bold text-accent">{data.pricing.dedicatedDesk.split('/')[0]}</p>
              </div>
              <p className="text-white/40 text-sm mb-4">per month</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Fixed personal desk</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Lockable storage</li>
              </ul>
              <Link href="/pricing" className="text-accent font-bold text-sm flex items-center gap-2 hover:text-white transition-colors">View Details <ArrowRight className="w-4 h-4" /></Link>
            </MouseGlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <MouseGlowCard className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all h-full bg-navy-light/20">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Private Office</p>
              <p className="text-2xl font-bold text-white mb-1">Custom Quote</p>
              <p className="text-white/40 text-sm mb-4">tailored to your team</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Fully furnished</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Biometric access</li>
              </ul>
              <Link href="/pricing" className="text-accent font-bold text-sm flex items-center gap-2 hover:text-white transition-colors">Get a Quote <ArrowRight className="w-4 h-4" /></Link>
            </MouseGlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <MouseGlowCard className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all h-full">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Virtual Office</p>
              <div className="flex items-baseline gap-2 mb-1">
                 <span className="text-xs text-white/50 uppercase font-bold tracking-wider">From</span>
                 <p className="text-3xl font-bold text-white">{data.pricing.virtualOffice.split('/')[0]}</p>
              </div>
              <p className="text-white/40 text-sm mb-4">per year</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> MG Road address</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> GST registration</li>
              </ul>
              <Link href="/pricing" className="text-accent font-bold text-sm flex items-center gap-2 hover:text-white transition-colors">View Details <ArrowRight className="w-4 h-4" /></Link>
            </MouseGlowCard>
          </ScrollReveal>
        </div>
      </section>

      {/* --- LOCATION DETAILS --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 bg-gradient-to-b from-transparent to-navy-light/20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prime Location in <span className="text-accent">Kochi</span></h2>

            <div className="mb-6 flex gap-4">
              <div className="glass p-4 rounded-xl flex-1 text-center"><span className="block text-2xl font-bold text-accent">50+</span><span className="text-xs text-white/50">Companies</span></div>
              <div className="glass p-4 rounded-xl flex-1 text-center"><span className="block text-2xl font-bold text-accent">500m</span><span className="text-xs text-white/50">To Metro</span></div>
            </div>

            <div className="flex items-start gap-4 mb-8 bg-navy-light/30 p-6 rounded-xl border border-white/10">
              <MapPin className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Workspace Hub</h4>
                <p className="text-white/70 leading-relaxed">
                  {data.address}
                  <br /><br />
                  {data.description}
                </p>
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
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
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

      {/* --- FAQ SECTION --- */}
      <section className="py-24 max-w-4xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-white/70">Everything you need to know about coworking in Kochi.</p>
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
