import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { MapPin, ArrowRight, CheckCircle, ChevronRight, Star, BadgeCheck } from 'lucide-react';
import { branchData } from '@/data/branches';

const data = branchData.coimbatore;

export const metadata: Metadata = {
  title: 'Coworking Space in Coimbatore | Office Space Near Tidel Park | WeeSpaces',
  description: 'Newly launched premium coworking space in Coimbatore near Tidel Park & the airport. Hot desks from ₹5,000/mo, dedicated desks, private cabins & virtual offices. Inauguration offer: 20% off!',
  keywords: [
    'coworking space in Coimbatore',
    'office space for rent Coimbatore',
    'coworking near Tidel Park Coimbatore',
    'managed office Coimbatore',
    'shared workspace Coimbatore',
    'virtual office Coimbatore',
    'best coworking space Coimbatore',
    'office near Coimbatore airport',
  ],
  alternates: {
    canonical: '/coworking-space-in-coimbatore',
  },
  openGraph: {
    title: 'Coworking Space in Coimbatore | Office Space Near Tidel Park | WeeSpaces',
    description: 'Newly launched premium coworking near Tidel Park & Coimbatore Airport. High-speed WiFi, ergonomic setups, meeting rooms. Hot desks from ₹5,000/mo. Inauguration offer live!',
    url: '/coworking-space-in-coimbatore',
    images: [
      {
        url: data.heroImage,
        width: 1200,
        height: 630,
        alt: 'WeeSpaces Coworking Space in Coimbatore - Near Tidel Park',
      },
    ],
  },
};

const faqs = [
  {
    question: 'How much does coworking cost in Coimbatore?',
    answer: 'At WeeSpaces Coimbatore, hot desks start at ₹5,000/month, dedicated desks at ₹6,500/month, and virtual office plans at ₹10,000/year. Private cabins are available with custom quotes. Plus, our inauguration offer gives you 20% off on all plans — limited time only!',
  },
  {
    question: 'Which is the best coworking space in Coimbatore?',
    answer: 'WeeSpaces at Vidyanagar, Kalapatti is the newest and most modern coworking space in Coimbatore. Located just 1.5km from Tidel Park and within walking distance of the Coimbatore International Airport, it bridges the city\'s rich industrial legacy with its booming IT ecosystem. Premium amenities, competitive pricing, and a community built for massive growth.',
  },
  {
    question: 'Does WeeSpaces Coimbatore offer virtual offices?',
    answer: 'Yes! Our virtual office plan in Coimbatore starts at ₹10,000/year. You get a prestigious business address near the airport for GST and company registration, mail handling, and pay-per-use access to our meeting rooms and conference facilities.',
  },
  {
    question: 'Where is WeeSpaces Coimbatore located?',
    answer: 'WeeSpaces Coimbatore is located at Vidyanagar 3rd Street, Vidya Nagar, Civil Aerodrome Post, Kalapatti, Coimbatore, Tamil Nadu 641014. It is strategically positioned just 1.5km from Tidel Park and within walking distance to the Coimbatore International Airport.',
  },
  {
    question: 'What is the inauguration offer at WeeSpaces Coimbatore?',
    answer: 'Our Coimbatore branch inauguration offer gives you a flat 20% off on all workspace plans — including hot desks, dedicated desks, private cabins, and virtual offices. This is a limited-time offer available only during our launch period. Contact us or fill in the form to lock in your discounted rate!',
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WeeSpaces Coimbatore - Coworking Space Near Tidel Park',
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
  priceRange: '₹5,000 - ₹22,000',
  url: 'https://weespaces.in/coworking-space-in-coimbatore',
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

export default function CoworkingSpaceInCoimbatore() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* --- INAUGURATION OFFER BANNER --- */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-accent via-accent-light to-accent text-navy text-center py-2.5 px-4 text-sm font-bold shadow-[0_4px_20px_rgba(242,156,31,0.4)]">
        🎉 Inauguration Offer for Coimbatore Branch Now Live! <span className="hidden sm:inline">Get 20% off on all plans.</span>
        <Link href="/contact?branch=coimbatore" className="ml-2 underline underline-offset-2 hover:text-navy/70 transition-colors">Claim Now →</Link>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 justify-center">
        <div className="absolute inset-0 z-0">
          <Image src={data.heroImage} alt="Coworking Space in Coimbatore - WeeSpaces Near Tidel Park" fill sizes="100vw" className="object-cover object-center opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <ScrollReveal direction="up" className="space-y-6 md:space-y-8 z-10 relative">
            <div className="inline-flex items-center gap-2 bg-accent text-navy text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(242,156,31,0.5)] animate-pulse">
              ✨ Newly Launched 2026!
            </div>
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)]">
              <MapPin className="w-4 h-4" />
              Coimbatore, Tamil Nadu
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Coworking Space</span><br />
              in Coimbatore
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
                <span>1.5km from Tidel Park</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span>Walk to Airport</span>
              </div>
            </div>

            <p className="text-white/70 italic text-sm">{data.cta}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-md">
            <LeadForm branch={data.name} />
          </ScrollReveal>
        </div>
      </section>

      {/* --- INAUGURATION OFFER SECTION --- */}
      <section className="py-12 max-w-5xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="relative overflow-hidden glass rounded-2xl border border-accent/30 p-8 md:p-12 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-accent/30 mb-4">
                🎉 Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Inauguration Offer — <span className="text-accent">20% Off</span> All Plans</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">
                Be among the first to join our newest Coimbatore hub and lock in exclusive launch pricing. Available on hot desks, dedicated desks, private cabins, and virtual offices.
              </p>
              <Link href="/contact?branch=coimbatore&offer=inauguration" className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-navy font-bold py-3 px-8 rounded-xl transition-all glow">
                Claim Your 20% Discount <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- PRICING SUMMARY --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent <span className="text-accent">Pricing</span> in Coimbatore</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Competitive plans for IT companies, startups, and enterprises near Tidel Park.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollReveal delay={0.1}>
            <MouseGlowCard className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all h-full">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Hot Desk</p>
              <div className="flex items-baseline gap-2 mb-1">
                 <span className="text-xs text-white/50 uppercase font-bold tracking-wider">From</span>
                 <p className="text-3xl font-bold text-white">{data.pricing.hotDesk.split('/')[0]}</p>
              </div>
              <p className="text-white/40 text-sm mb-1">per month</p>
              <p className="text-accent text-xs font-bold mb-4">🎉 Now ₹4,000/mo with launch offer</p>
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
              <p className="text-white/40 text-sm mb-1">per month</p>
              <p className="text-accent text-xs font-bold mb-4">🎉 Now ₹5,200/mo with launch offer</p>
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
              <p className="text-white/40 text-sm mb-1">tailored to your team</p>
              <p className="text-accent text-xs font-bold mb-4">🎉 20% off during launch</p>
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
              <p className="text-white/40 text-sm mb-1">per year</p>
              <p className="text-accent text-xs font-bold mb-4">🎉 Now ₹8,000/yr with launch offer</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Coimbatore address</li>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Location in <span className="text-accent">Coimbatore</span></h2>

            <div className="mb-6 flex gap-4">
              <div className="glass p-4 rounded-xl flex-1 text-center"><span className="block text-2xl font-bold text-accent">1.5km</span><span className="text-xs text-white/50">To Tidel Park</span></div>
              <div className="glass p-4 rounded-xl flex-1 text-center"><span className="block text-2xl font-bold text-accent">Walk</span><span className="text-xs text-white/50">To Airport</span></div>
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
            <Image src={data.heroImage} alt="WeeSpaces Coimbatore Location - Near Tidel Park & Airport" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- IMAGE GALLERY --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Inside Our <span className="text-accent">Coimbatore</span> Hub</h2>
          <p className="text-xl text-white/70">Take a peek inside our newest premium workspace.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.galleryImages.length > 0 && (
            <ScrollReveal direction="up" delay={0.1} className="relative rounded-xl overflow-hidden shadow-lg h-96 md:col-span-2 group">
              <Image src={data.galleryImages[0]} alt="WeeSpaces Coimbatore workspace featured" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </ScrollReveal>
          )}
          {data.galleryImages.slice(1).map((src, idx) => (
            <ScrollReveal key={idx + 1} direction="up" delay={0.2 + (idx * 0.1)} className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-80 group">
              <Image src={src} alt={`WeeSpaces Coimbatore workspace ${idx + 2}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
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
          <p className="text-xl text-white/70">Everything you need to know about coworking in Coimbatore.</p>
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
