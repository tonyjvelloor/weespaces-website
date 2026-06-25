import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { MapPin, ArrowRight, CheckCircle, Star, BadgeCheck, Users, Briefcase, Zap, Coffee, Shield, Lightbulb } from 'lucide-react';
import { branchData } from '@/data/branches';
import SEOFAQ from '@/components/SEOFAQ';
import { coworkingFAQs } from '@/data/faqs';
import NAPBlock from '@/components/NAPBlock';

const data = branchData.calicut;

export const metadata: Metadata = {
  title: 'Coworking Space in Calicut (Kozhikode) | WeeSpaces',
  description: 'Rent affordable and premium coworking spaces in Calicut near Cyberpark. Fully furnished offices tailored for local businesses, freelancers, and entrepreneurs.',
  keywords: [
    'coworking space Calicut',
    'coworking space Kozhikode',
    'office space Calicut',
    'shared office Kozhikode',
    'affordable office Calicut',
    'shared workspace Cyberpark',
    'virtual office Kozhikode',
  ],
  alternates: {
    canonical: 'https://www.weespaces.in/coworking-space-calicut',
  },
  openGraph: {
    title: 'Coworking Space in Calicut (Kozhikode) | Affordable Office Space | WeeSpaces',
    description: 'Discover affordable coworking space in Calicut (Kozhikode) near Cyberpark. Hot desks from ₹4,000/mo, dedicated desks, private cabins & virtual offices.',
    url: 'https://www.weespaces.in/coworking-space-calicut',
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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WeeSpaces Calicut - Coworking Space in Kozhikode',
  image: 'https://www.weespaces.in' + data.heroImage,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Door No. 2951/A, Ground floor, Neeloth Plaza, Holy Cross IMT Road, Wayanad Rd, East Nadakkave',
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
  url: 'https://www.weespaces.in/coworking-space-calicut',
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
      name: 'Coworking Space in Calicut',
      item: 'https://www.weespaces.in/coworking-space-calicut'
    }
  ]
};

export default function CoworkingSpaceInCalicut() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, breadcrumbSchema]) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={data.heroImage} alt="Coworking Space in Calicut - WeeSpaces Kozhikode" fill sizes="100vw" className="object-cover object-center opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60"></div>
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] -mr-[20vw] -mt-[10vw] pointer-events-none"></div>
        </div>
        <div className="container mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="up" className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)]">
              <MapPin className="w-4 h-4" />
              Kozhikode, Kerala
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Inspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Coworking Space</span><br />
              in Calicut (Kozhikode)
            </h1>

            <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg max-w-xl">
              <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">{data.highlight}</p>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                Unlock your potential in Kozhikode. Close to Cyberpark, our Calicut space offers an affordable, creative, and highly driven atmosphere tailored for local businesses, ambitious freelancers, and rising entrepreneurs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <BadgeCheck className="w-5 h-5 text-accent" />
                <span>Loved by Kozhikode Entrepreneurs</span>
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
              <p className="text-white/70 text-sm mb-6">Experience our creative workspace in Kozhikode.</p>
              <LeadForm branch={data.name} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- NAP BLOCK + PRICING --- */}
      <section className="py-10 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up">
          <NAPBlock
            name="WeeSpaces Calicut — East Nadakkave, Kozhikode"
            address={data.address}
            mapUrl={data.mapUrl}
            hours="Mon–Sat: 8:00 AM – 8:00 PM | 24/7 access for members"
          />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15} className="mt-8">
          <div className="bg-navy-light/10 border border-white/10 rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-4">Coworking Space Pricing in Calicut</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for Kozhikode's Creative and Business Community</h2>
            <div className="space-y-4 text-white/80 leading-relaxed text-lg">
              <p>
                Kozhikode (Calicut) has always been a hub of trade and culture, and now it's transforming into a booming destination for modern businesses and tech startups. However, finding affordable, professional office space in Calicut can be a challenge for new entrepreneurs.
              </p>
              <p>
                WeeSpaces Calicut solves this by offering budget-friendly, premium coworking spaces. Whether you're a local agency making your mark, an e-commerce entrepreneur, or a freelancer looking for a productive environment away from coffee shops, our space provides the community, high-speed internet, and professional atmosphere you need to thrive.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-accent">Who is WeeSpaces Calicut For?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Lightbulb className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Local Entrepreneurs</h4>
                <p className="text-sm text-white/70">Move out of your living room and into a professional environment that boosts productivity.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Briefcase className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Agencies & Consultancies</h4>
                <p className="text-sm text-white/70">Host clients in professional meeting rooms instead of noisy cafes.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Growing Startups</h4>
                <p className="text-sm text-white/70">Scale your team with flexible dedicated desks or a private cabin near Cyberpark.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Coffee className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Freelancers & Creators</h4>
                <p className="text-sm text-white/70">Join a community of like-minded professionals. Collaborate, network, and grow.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- BENEFITS & AMENITIES --- */}
      <section className="py-24 bg-navy-light/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">Affordable doesn't mean compromising on quality. Enjoy premium amenities.</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollReveal delay={0.1} className="glass p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all">
              <Zap className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Fast WiFi</h4>
              <p className="text-xs text-white/60">Reliable, high-speed internet so your video calls never drop.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="glass p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all">
              <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Secure Access</h4>
              <p className="text-xs text-white/60">Work when you want with secure biometric entry to the facility.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="glass p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all">
              <Users className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Meeting Rooms</h4>
              <p className="text-xs text-white/60">Bookable rooms for team huddles or client presentations.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.4} className="glass p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all">
              <Coffee className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Community Vibe</h4>
              <p className="text-xs text-white/60">A welcoming atmosphere with unlimited coffee to keep you energized.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- WORKSPACE OPTIONS / PRICING GUIDANCE --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Affordable Workspace <span className="text-accent">Pricing</span></h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Budget-friendly plans designed for Kozhikode's business community.</p>
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
              <p className="text-sm text-white/80 mb-6 flex-grow">The most affordable way to work in a professional setting. Bring your laptop, pick any open seat, and start working.</p>
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
              <p className="text-sm text-white/80 mb-6 flex-grow">Your own personal reserved desk. Great for designers or anyone who wants to leave their setup overnight.</p>
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
              <div className="flex items-baseline gap-2 mb-1">
                 <span className="text-xs text-white/50 uppercase font-bold tracking-wider">From</span>
                 <p className="text-3xl font-bold text-white">{data.pricing.privateOffice.split('/')[0]}</p>
              </div>
              <p className="text-white/40 text-sm mb-4">per month</p>
              <p className="text-sm text-white/80 mb-6 flex-grow">A secure, enclosed cabin for your agency or startup team. Enjoy privacy while still having access to the community.</p>
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
              <p className="text-sm text-white/80 mb-6 flex-grow">Get a professional Kozhikode business address for your company registration and GST compliance without renting physical space.</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Business address</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> GST registration</li>
              </ul>
              <Link href="/virtual-office-in-kerala" className="text-accent font-bold text-sm flex items-center gap-2 hover:text-white transition-colors mt-auto">View Details <ArrowRight className="w-4 h-4" /></Link>
            </MouseGlowCard>
          </ScrollReveal>
        </div>
      </section>

      {/* --- COMPARISON: Coworking vs Traditional in Calicut --- */}
      <section className="py-24 bg-navy-light/10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Coworking Space vs Traditional Office in Calicut (Kozhikode)</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Why lock your capital in real estate when you can invest it in your business?</p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="relative h-96 rounded-2xl overflow-hidden hidden md:block border border-white/10">
                <Image src="/images/branches/calicut/workspace1.jpg" alt="Calicut Office Space Comparison" fill className="object-cover" />
             </div>
             <div>
                <ul className="space-y-6">
                   <li className="flex gap-4">
                      <div className="mt-1 bg-red-500/10 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                         <span className="text-red-500 font-bold">VS</span>
                      </div>
                      <div>
                         <h4 className="font-bold text-lg mb-1 line-through text-white/50">Traditional Office Rent in Kozhikode</h4>
                         <p className="text-white/60 text-sm">Requires hefty 6-10 month security deposits, buying your own furniture, setting up internet, and paying electricity bills separately.</p>
                      </div>
                   </li>
                   <li className="flex gap-4">
                      <div className="mt-1 bg-accent/20 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                         <CheckCircle className="text-accent w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg text-accent mb-1">WeeSpaces Coworking</h4>
                         <p className="text-white/80 text-sm">One simple monthly bill covering rent, electricity, high-speed internet, and maintenance. Zero setup costs. Cancel or upgrade anytime.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Central Location in <span className="text-accent">Nadakkave</span></h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Situated in East Nadakkave, our Kozhikode hub offers easy access from all parts of the city, keeping you close to both commercial centers and tech zones like Cyberpark.
            </p>

            <div className="mb-6 flex gap-4">
              <div className="glass p-4 rounded-xl flex-1 text-center"><span className="block text-2xl font-bold text-accent">Central</span><span className="text-xs text-white/50">Location</span></div>
              <div className="glass p-4 rounded-xl flex-1 text-center"><span className="block text-2xl font-bold text-accent">Easy</span><span className="text-xs text-white/50">Commute</span></div>
            </div>

            <div className="flex items-start gap-4 mb-8 bg-navy-light/30 p-6 rounded-xl border border-white/10">
              <MapPin className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">WeeSpaces Calicut</h4>
                <p className="text-white/70 leading-relaxed text-sm">
                  {data.address}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Accessible from Wayanad Road</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Proximity to cafes and restaurants</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Quiet, productive neighborhood</li>
                </ul>
              </div>
            </div>
            <a href={data.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-transparent border border-accent text-accent hover:bg-accent hover:text-navy font-bold py-3 px-8 rounded-xl transition-all w-max">
              Get Directions <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollReveal>

          <ScrollReveal direction="right" className="relative rounded-xl overflow-hidden shadow-[0_0_40px_rgba(242,156,31,0.15)] h-[400px] md:h-[500px]">
            <Image src={data.heroImage} alt="WeeSpaces Calicut Location - Kozhikode" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- IMAGE GALLERY --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 bg-navy-light/5">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Inside Our <span className="text-accent">Kozhikode</span> Space</h2>
          <p className="text-xl text-white/70">Take a peek inside our creative and affordable workspace.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.galleryImages.map((src, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15} className="relative rounded-xl overflow-hidden group shadow-md border border-white/10 h-64 md:h-80">
              <Image src={src} alt={`WeeSpaces Calicut workspace ${idx + 1}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <SEOFAQ 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about coworking in Calicut and Kozhikode."
        faqs={coworkingFAQs} 
      />
    </>
  );
}
