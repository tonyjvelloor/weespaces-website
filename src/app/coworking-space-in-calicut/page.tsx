import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { MapPin, ArrowRight, CheckCircle, ChevronRight, Star, BadgeCheck } from 'lucide-react';
import { branchData } from '@/data/branches';

const data = branchData.calicut;

export const metadata: Metadata = {
  title: 'Coworking Space in Calicut | Affordable Office Space for Rent | WeeSpaces',
  description: 'Discover affordable coworking space in Calicut (Kozhikode) near Cyberpark. Hot desks from ₹4,000/mo, dedicated desks, private cabins & virtual offices. Book your free tour at WeeSpaces!',
  keywords: [
    'coworking space in Calicut',
    'office space for rent Kozhikode',
    'coworking near Cyberpark',
    'managed office Calicut',
    'shared workspace Kozhikode',
    'virtual office Calicut',
    'best coworking space Calicut',
    'freelancer workspace Kozhikode',
  ],
  alternates: {
    canonical: '/coworking-space-in-calicut',
  },
  openGraph: {
    title: 'Coworking Space in Calicut | Affordable Office Space for Rent | WeeSpaces',
    description: 'Creative coworking space near Cyberpark, Calicut. High-speed WiFi, meeting rooms & a vibrant freelancer community. Hot desks from ₹4,000/mo.',
    url: '/coworking-space-in-calicut',
    images: [
      {
        url: data.heroImage,
        width: 1200,
        height: 630,
        alt: 'WeeSpaces Coworking Space in Calicut - Near Cyberpark, Kozhikode',
      },
    ],
  },
};

const faqs = [
  {
    question: 'How much does coworking cost in Calicut?',
    answer: 'At WeeSpaces Calicut, hot desks start at just ₹4,000/month — one of the most affordable options in Kerala. Dedicated desks are ₹5,500/month, and virtual office plans start at ₹10,000/year. Private cabins are available with custom quotes based on your team size.',
  },
  {
    question: 'Which is the best coworking space in Calicut?',
    answer: 'WeeSpaces at East Nadakkave, Kozhikode is one of the top-rated coworking spaces in Calicut. Close to Cyberpark, our space offers a creative, relaxed yet highly driven atmosphere perfect for designers, freelancers, and agile teams. We provide premium amenities at the most competitive pricing in the city.',
  },
  {
    question: 'Does WeeSpaces Calicut offer virtual offices?',
    answer: 'Yes! Our virtual office plan in Calicut starts at ₹10,000/year. You get a premium business address at Neeloth Plaza for GST registration and company registration, along with mail handling and pay-per-use meeting room access.',
  },
  {
    question: 'Where is WeeSpaces Calicut located?',
    answer: 'WeeSpaces Calicut is located at Door No. 2951/A, Ground Floor, Neeloth Plaza, Holy Cross IMT Road, Wayanad Road, opposite Malayalam Manorama, East Nadakkave, Kozhikode, Kerala 673001. It is close to Cyberpark and the central business area of Calicut.',
  },
  {
    question: 'Is WeeSpaces Calicut suitable for freelancers and creative professionals?',
    answer: 'Absolutely! Our Calicut hub is designed with freelancers and creative professionals in mind. The space offers a relaxed yet productive atmosphere, high-speed internet, comfortable ergonomic furniture, and a community of like-minded creatives and tech professionals. Our affordable hot desk plans make it perfect for independent workers.',
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WeeSpaces Calicut - Coworking Space in Kozhikode',
  image: 'https://weespaces.in' + data.heroImage,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Door No. 2951/A, Ground Floor, Neeloth Plaza, Holy Cross IMT Road, Wayanad Road',
    addressLocality: 'Kozhikode',
    addressRegion: 'Kerala',
    postalCode: '673001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: data.geo.lat,
    longitude: data.geo.lon,
  },
  telephone: '+919207189111',
  openingHours: 'Mo-Sa 08:00-20:00',
  priceRange: '₹4,000 - ₹16,000',
  url: 'https://weespaces.in/coworking-space-in-calicut',
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

export default function CoworkingSpaceInCalicut() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={data.heroImage} alt="Coworking Space in Calicut - WeeSpaces Near Cyberpark" fill sizes="100vw" className="object-cover object-center scale-105 opacity-30 blur-sm" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy/90 to-navy"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] bg-accent/20 rounded-full blur-[150px] pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-6 w-full relative z-10 flex flex-col items-center max-w-5xl">
          <ScrollReveal direction="up" className="flex flex-col items-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 bg-navy-light/40 backdrop-blur-md border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-[0_0_20px_rgba(242,156,31,0.15)]">
              <MapPin className="w-4 h-4" /> Calicut, Kerala
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl">
              Premium Coworking <br className="hidden md:block" />
              in <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent via-accent-light to-white">Calicut.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
              {data.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <BadgeCheck className="w-5 h-5 text-accent" />
                <span>Near Cyberpark</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span>4.7/5 Google Rating</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-4xl text-left relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-light rounded-xl blur opacity-20"></div>
            <div className="relative glass p-2 rounded-xl border border-white/10 shadow-2xl">
              <LeadForm branch={data.name} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- PRICING SUMMARY --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Affordable <span className="text-accent">Pricing</span> in Calicut</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Budget-friendly plans for freelancers, designers, and growing teams in Kozhikode.</p>
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
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Kozhikode address</li>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Creative Hub in <span className="text-accent">Calicut</span></h2>

            <div className="mb-6 flex gap-4">
              <div className="glass p-4 rounded-xl flex-1 text-center"><span className="block text-2xl font-bold text-accent">Near</span><span className="text-xs text-white/50">Cyberpark</span></div>
              <div className="glass p-4 rounded-xl flex-1 text-center"><span className="block text-2xl font-bold text-accent">₹4K</span><span className="text-xs text-white/50">Starting From</span></div>
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
            <Image src={data.heroImage} alt="WeeSpaces Calicut Location - Near Cyberpark Kozhikode" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- IMAGE GALLERY (Masonry Layout) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Inside Our <span className="text-accent">Calicut</span> Hub</h2>
          <p className="text-xl text-white/70">Take a peek inside our creative workspace in Kozhikode.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal direction="up" delay={0.1} className="relative rounded-xl overflow-hidden shadow-lg h-96 group">
            <Image src={data.galleryImages[0]} alt="WeeSpaces Calicut workspace 1" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </ScrollReveal>
          <div className="flex flex-col gap-6 h-96">
            <ScrollReveal direction="left" delay={0.2} className="relative rounded-xl overflow-hidden shadow-lg flex-1 group">
              <Image src={data.galleryImages[1]} alt="WeeSpaces Calicut workspace 2" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.3} className="relative rounded-xl overflow-hidden shadow-lg flex-1 group">
              <Image src={data.galleryImages[2]} alt="WeeSpaces Calicut workspace 3" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 max-w-4xl mx-auto px-6 border-t border-white/10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-white/70">Everything you need to know about coworking in Calicut.</p>
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
