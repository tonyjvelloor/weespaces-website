import Image from 'next/image';
import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { MapPin, ArrowRight, CheckCircle, Star, BadgeCheck, Users, Briefcase, Zap, Coffee, Shield, Laptop } from 'lucide-react';
import { branchData } from '@/data/branches';
import SEOFAQ from '@/components/SEOFAQ';
import { coworkingFAQs } from '@/data/faqs';

const data = branchData.trivandrum;

export const metadata: Metadata = {
  title: 'Coworking Space Near Technopark Trivandrum | WeeSpaces',
  description: 'Looking for an IT office or coworking space near Technopark Trivandrum? Get enterprise-grade managed workspaces and dedicated desks.',
  keywords: [
    'coworking space near Technopark',
    'coworking space Technopark Trivandrum',
    'office space near Technopark',
    'shared office near Technopark',
    'managed IT office near Technopark',
    'private office near Technopark'
  ],
  alternates: {
    canonical: 'https://www.weespaces.in/coworking-space-near-technopark-trivandrum',
  },
  openGraph: {
    title: 'Coworking Space Near Technopark Trivandrum | WeeSpaces',
    description: 'Premium coworking & managed IT offices near Technopark Trivandrum. High-speed leased lines & enterprise security.',
    url: 'https://www.weespaces.in/coworking-space-near-technopark-trivandrum',
    images: [
      {
        url: data.heroImage,
        width: 1200,
        height: 630,
        alt: 'WeeSpaces Coworking Space Near Technopark Trivandrum',
      },
    ],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WeeSpaces - Coworking Near Technopark Trivandrum',
  image: 'https://www.weespaces.in' + data.heroImage,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1st Floor, Relcon Plaza, Pattom',
    addressLocality: 'Thiruvananthapuram',
    addressRegion: 'Kerala',
    postalCode: '695004',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: data.geo.lat,
    longitude: data.geo.lon,
  },
  telephone: '+919207189111',
  openingHours: 'Mo-Sa 08:00-20:00',
  priceRange: '₹4,500 - ₹18,000',
  url: 'https://www.weespaces.in/coworking-space-near-technopark-trivandrum',
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
      name: 'Coworking Space near Technopark Trivandrum',
      item: 'https://www.weespaces.in/coworking-space-near-technopark-trivandrum'
    }
  ]
};

export default function CoworkingSpaceNearTechnoparkTrivandrum() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, breadcrumbSchema]) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={data.heroImage} alt="Coworking Space near Technopark Trivandrum" fill sizes="100vw" className="object-cover object-center opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60"></div>
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] -mr-[20vw] -mt-[10vw] pointer-events-none"></div>
        </div>
        <div className="container mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="up" className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)]">
              <MapPin className="w-4 h-4" />
              Trivandrum, Kerala
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Coworking Space <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Near Technopark</span><br />
              Trivandrum
            </h1>

            <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg max-w-xl">
              <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">Scale Your IT Enterprise Faster</p>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                Connect your business to Trivandrum's IT ecosystem without the SEZ overhead. Offering flexible coworking and private offices built for deep-tech startups and software teams.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <BadgeCheck className="w-5 h-5 text-accent" />
                <span>Trusted by Global IT Firms</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span>4.9/5 Google Rating</span>
              </div>
            </div>

            <p className="text-white/70 italic text-sm">{data.cta}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-md mx-auto md:mx-0 md:ml-auto">
            <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light"></div>
              <h3 className="text-2xl font-bold mb-2">Book a Free Tour</h3>
              <p className="text-white/70 text-sm mb-6">Experience our enterprise-grade IT workspace.</p>
              <LeadForm branch={data.name} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- INTRODUCTION & WHO IS IT FOR --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Trivandrum's Expanding IT Ecosystem</h2>
            <div className="space-y-4 text-white/80 leading-relaxed text-lg">
              <p>
                Being close to Technopark, India's largest IT park, requires workspaces that can keep up with the demands of global software development and deep-tech innovation.
              </p>
              <p>
                WeeSpaces in Pattom bridges the gap between premium infrastructure and ultimate flexibility. Forget complex multi-year commercial leases inside SEZs. We offer plug-and-play managed offices and coworking desks with enterprise-grade networking and uninterrupted power. We handle the facilities, so your engineers can handle the code.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-accent">Who is WeeSpaces For?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Laptop className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">IT & Software Enterprises</h4>
                <p className="text-sm text-white/70">Establish a satellite development center rapidly with zero CapEx and flexible scaling.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Deep-Tech Startups</h4>
                <p className="text-sm text-white/70">A serene, distraction-free environment perfect for deep work and coding sprints.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Briefcase className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Offshore Development Centers</h4>
                <p className="text-sm text-white/70">Provide your offshore teams with premium infrastructure and 24/7 access control.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Coffee className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Remote Tech Workers</h4>
                <p className="text-sm text-white/70">Upgrade from WFH. Connect with other developers in our premium shared workspace.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- WORKSPACE NEAR TECHNOPARK TRIVANDRUM --- */}
      <section className="py-24 bg-navy-light/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Workspace Near Technopark</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">Designed to meet the stringent demands of modern IT companies.</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollReveal delay={0.1} className="glass p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all">
              <Zap className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Dual Leased Lines</h4>
              <p className="text-xs text-white/60">Failover internet architecture ensuring 99.9% uptime for critical deployments.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="glass p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all">
              <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Data Security</h4>
              <p className="text-xs text-white/60">Biometric access controls, secure VLANs, and enterprise firewalls.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="glass p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all">
              <Users className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Boardrooms</h4>
              <p className="text-xs text-white/60">Acoustically treated meeting rooms with 4K video conferencing equipment.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.4} className="glass p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all">
              <Coffee className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Cafeteria</h4>
              <p className="text-xs text-white/60">Hygienic pantry, unlimited coffee, and relaxed zones for your team's breaks.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- WORKSPACE OPTIONS / PRICING GUIDANCE --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">IT Workspace <span className="text-accent">Pricing</span></h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Scalable solutions for individual developers to full engineering teams.</p>
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
              <p className="text-sm text-white/80 mb-6 flex-grow">Perfect for agile remote workers. Drop in, grab a desk, connect to our network, and code.</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Flexible seating</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Dual-band WiFi</li>
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
              <p className="text-sm text-white/80 mb-6 flex-grow">A permanent setup for focused work. Leave your monitors and hardware securely at your desk.</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Fixed personal desk</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Lockable drawer</li>
              </ul>
              <Link href="/pricing" className="text-accent font-bold text-sm flex items-center gap-2 hover:text-white transition-colors mt-auto">View Details <ArrowRight className="w-4 h-4" /></Link>
            </MouseGlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <MouseGlowCard className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all h-full bg-navy-light/20 flex flex-col">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Private Office</p>
              <p className="text-2xl font-bold text-white mb-1">Custom Quote</p>
              <p className="text-white/40 text-sm mb-4">tailored to your team</p>
              <p className="text-sm text-white/80 mb-6 flex-grow">A fully enclosed, private environment for your engineering team. Customizable IT infrastructure.</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Dedicated LAN/VLAN</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Biometric cabin access</li>
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
              <p className="text-sm text-white/80 mb-6 flex-grow">Register your IT company with a premium Pattom address. We handle mail forwarding and provide meeting room access.</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Pattom address</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Company registration</li>
              </ul>
              <Link href="/virtual-office-in-kerala" className="text-accent font-bold text-sm flex items-center gap-2 hover:text-white transition-colors mt-auto">View Details <ArrowRight className="w-4 h-4" /></Link>
            </MouseGlowCard>
          </ScrollReveal>
        </div>
      </section>

      {/* --- COMPARISON: Coworking vs Traditional --- */}
      <section className="py-24 bg-navy-light/10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">WeeSpaces Managed IT Office vs Traditional Tech Parks</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Why wait months for SEZ approvals when your team can start shipping code today?</p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="relative h-96 rounded-2xl overflow-hidden hidden md:block border border-white/10">
                <Image src="/images/branches/trivandrum/image2.jpg" alt="Trivandrum IT Office Comparison" fill className="object-cover" />
             </div>
             <div>
                <ul className="space-y-6">
                   <li className="flex gap-4">
                      <div className="mt-1 bg-red-500/10 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                         <span className="text-red-500 font-bold">VS</span>
                      </div>
                      <div>
                         <h4 className="font-bold text-lg mb-1 line-through text-white/50">Traditional IT Park Lease</h4>
                         <p className="text-white/60 text-sm">Complex multi-year leases, massive upfront deposits, months of bare-shell interior fit-outs, and you still have to hire facility managers.</p>
                      </div>
                   </li>
                   <li className="flex gap-4">
                      <div className="mt-1 bg-accent/20 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                         <CheckCircle className="text-accent w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg text-accent mb-1">WeeSpaces Managed Workspace</h4>
                         <p className="text-white/80 text-sm">Move in within 24 hours. Zero fit-out costs. Scale up desks as you hire. We handle the AC, the internet, and the coffee.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Location Near <span className="text-accent">Technopark</span></h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Situated in Pattom, our Trivandrum hub strikes the perfect balance between city-center convenience and close proximity to the Technopark ecosystem.
            </p>

            <div className="flex items-start gap-4 mb-8 bg-navy-light/30 p-6 rounded-xl border border-white/10">
              <MapPin className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">WeeSpaces Trivandrum</h4>
                <p className="text-white/70 leading-relaxed text-sm">
                  {data.address}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Premium facility in Relcon Plaza</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Easy access to Technopark and city center</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Ample parking for employees and clients</li>
                </ul>
              </div>
            </div>
            <a href={data.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-transparent border border-accent text-accent hover:bg-accent hover:text-navy font-bold py-3 px-8 rounded-xl transition-all w-max">
              Get Directions <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollReveal>

          <ScrollReveal direction="right" className="relative rounded-xl overflow-hidden shadow-[0_0_40px_rgba(242,156,31,0.15)] h-[400px] md:h-[500px]">
            <Image src={data.heroImage} alt="WeeSpaces Trivandrum Location - Near Technopark" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <SEOFAQ 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our IT workspaces."
        faqs={coworkingFAQs} 
      />
    </>
  );
}
