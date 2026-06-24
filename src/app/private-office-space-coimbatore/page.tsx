import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MapPin, ArrowRight, CheckCircle, ChevronRight, Lock, Users, Shield } from 'lucide-react';
import { branchData } from '@/data/branches';

const data = branchData.coimbatore;

export const metadata: Metadata = {
  title: 'Private Office Space in Coimbatore | Team Cabins | WeeSpaces',
  description: 'Rent a private office space in Coimbatore for your growing team. Secure, fully-furnished 5 to 20 seater office cabins near Tidel Park. Get a custom quote today.',
  keywords: [
    'private office Coimbatore',
    'private cabin office Coimbatore',
    'office cabin rental Coimbatore',
    'team office Coimbatore',
    '10 seater office Coimbatore',
    '20 seater office Coimbatore',
    'secure office space Coimbatore'
  ],
  alternates: {
    canonical: '/private-office-space-coimbatore',
  },
  openGraph: {
    title: 'Private Office Space in Coimbatore | Secure Team Cabins',
    description: 'Scalable and secure private office spaces in Coimbatore. From 5-seater to 20-seater team cabins near Tidel Park. Fully furnished with biometric access.',
    url: '/private-office-space-coimbatore',
    images: [
      {
        url: data.heroImage,
        width: 1200,
        height: 630,
        alt: 'Private Office Space in Coimbatore - WeeSpaces Team Cabins',
      },
    ],
  },
};

const faqs = [
  {
    question: 'What sizes are available for a private office in Coimbatore?',
    answer: 'We offer flexible private cabins that can comfortably fit teams of various sizes. Whether you need a 5 seater office, a 10 seater office, or a larger 20 seater office space in Coimbatore, we can customize the layout to fit your company\'s exact requirements.',
  },
  {
    question: 'How secure are the private cabins?',
    answer: 'Security and privacy are our top priorities for team offices. Every private office at WeeSpaces Coimbatore comes with dedicated biometric access control, frosted glass for privacy, and 24/7 CCTV surveillance in common areas.',
  },
  {
    question: 'Can we customize the interior of our private office?',
    answer: 'Absolutely. While our offices come fully furnished with premium ergonomic desks and chairs, enterprise teams renting larger cabins can request layout customizations, dedicated manager cabins, and personalized branding to reflect their company culture.',
  },
  {
    question: 'Is meeting room access included with a private office rental?',
    answer: 'Yes! Teams renting a private office in Coimbatore receive complimentary monthly credits to book our state-of-the-art meeting rooms and conference facilities. You also get unlimited access to all common breakout areas and the pantry.',
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WeeSpaces Private Office Coimbatore',
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
  url: 'https://weespaces.in/private-office-space-coimbatore',
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

export default function PrivateOfficeCoimbatore() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 justify-center">
        <div className="absolute inset-0 z-0">
          <Image src={data.heroImage} alt="Private Office Space and Team Cabins in Coimbatore" fill sizes="100vw" className="object-cover object-center opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <ScrollReveal direction="up" className="space-y-6 md:space-y-8 z-10 relative">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)]">
              <MapPin className="w-4 h-4" />
              1.5km from Tidel Park
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Private Office</span><br />
              In Coimbatore
            </h1>

            <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg max-w-xl">
              <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">Scale Without Limits.</p>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                Secure, fully-furnished private cabins tailored for IT companies and growing startups. From 5-seater pods to 20-seater team offices with dedicated access.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Lock className="w-5 h-5 text-accent" />
                <span>Biometric Access</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Users className="w-5 h-5 text-accent" />
                <span>5 to 20+ Seater Layouts</span>
              </div>
            </div>

            <p className="text-white/70 italic text-sm">Book a site visit for your team.</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-md">
            <LeadForm branch={data.name} source="Coimbatore - Private Office" />
          </ScrollReveal>
        </div>
      </section>

      {/* --- WHY PRIVATE OFFICE SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Ultimate <span className="text-accent">Team Office</span> Setup</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Everything an enterprise or fast-growing startup needs to operate securely and efficiently in Coimbatore.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all h-full bg-navy-light/10">
              <Lock className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Total Privacy & Security</h3>
              <p className="text-white/70 leading-relaxed">
                Your company's data and conversations stay secure. Each private cabin features frosted glass partitions, dedicated biometric locks, and sound-dampened walls.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all h-full bg-navy-light/10">
              <Users className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Scalable 10 & 20 Seaters</h3>
              <p className="text-white/70 leading-relaxed">
                Whether you are a tight-knit agency looking for a 5-seater office, or an IT firm needing a 20-seater office, we customize the furniture layout to match your workflow.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all h-full bg-navy-light/10">
              <Shield className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Amenities</h3>
              <p className="text-white/70 leading-relaxed">
                Enjoy complimentary meeting room hours, high-speed leased line internet, 100% power backup, and VIP access to all common networking spaces.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- LOCATION DETAILS --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 bg-gradient-to-b from-transparent to-navy-light/20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Location near <span className="text-accent">Tidel Park</span></h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Attract top talent by basing your company in Coimbatore's premium IT corridor. 
              Our Kalapatti hub is strategically located to avoid city traffic while keeping you connected to the airport and major tech parks.
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
            <Image src={data.heroImage} alt="Private office cabin interior in Coimbatore" fill sizes="100vw" className="object-cover" />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Private Office FAQs</h2>
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
