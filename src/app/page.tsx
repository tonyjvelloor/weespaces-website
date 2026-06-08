import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import Marquee from '@/components/ui/Marquee';
import HeroCarousel from '@/components/HeroCarousel';
import InteractiveAmenities from '@/components/InteractiveAmenities';
import PhotoGallery from '@/components/PhotoGallery';

export const metadata: Metadata = {
  title: 'WeeSpaces | Premium Coworking in Kerala & Tamil Nadu',
  description: 'Flexible coworking spaces, dedicated desks, and private offices designed for startups, freelancers, and enterprise teams in Trivandrum, Ernakulam, Calicut, and Coimbatore.',
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WeeSpaces",
    "url": "https://weespaces.co.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://weespaces.co.in/locations/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WeeSpaces",
    "url": "https://weespaces.co.in",
    "logo": "https://weespaces.co.in/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919207189111",
      "contactType": "customer service"
    }
  };

  const locationsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "LocalBusiness",
          "name": "WeeSpaces Trivandrum",
          "url": "https://weespaces.co.in/locations/trivandrum",
          "address": "1st Floor, Relcon Plaza, Pattom, Thiruvananthapuram, Kerala 695004"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "LocalBusiness",
          "name": "WeeSpaces Ernakulam",
          "url": "https://weespaces.co.in/locations/ernakulam",
          "address": "4th floor, Palal Tower, Mahatma Gandhi Rd, Ravipuram, Perumanoor, Kochi, Kerala 682016"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "LocalBusiness",
          "name": "WeeSpaces Calicut",
          "url": "https://weespaces.co.in/locations/calicut",
          "address": "Wee Spaces, Ground floor, Neeloth Plaza, East Nadakkave, Kozhikode, Kerala 673001"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "LocalBusiness",
          "name": "WeeSpaces Coimbatore",
          "url": "https://weespaces.co.in/locations/coimbatore",
          "address": "Vidya Nagar, Civil Aerodrome Post, Kalapatti, Coimbatore, Tamil Nadu 641014"
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsSchema) }} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
          <HeroCarousel />
          
          <div className="container mx-auto px-6 w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-8 lg:mt-0">
              <ScrollReveal direction="left" className="space-y-6 md:space-y-8 lg:col-span-7">
                  <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)]">
                      <span className="material-symbols-outlined text-[16px]">map</span>
                      4 Prime Locations
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      THE RIGHT <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">SPACE.</span><br/>
                      THE RIGHT <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">MOVE.</span>
                  </h1>
                  
                  <p className="text-base md:text-lg text-white/70 max-w-xl font-medium">
                      Coworking Spaces Designed for <span className="text-white font-semibold">productivity</span>. Built for <span className="text-white font-semibold">growth</span>. Position your business in South India's key hubs.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-2">
                      <span className="glass px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white flex items-center gap-2">
                          <span className="material-symbols-outlined text-accent text-sm">workspace_premium</span> Comfortable Workspaces
                      </span>
                      <span className="glass px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white flex items-center gap-2">
                          <span className="material-symbols-outlined text-accent text-sm">wifi</span> High Speed Wi-Fi
                      </span>
                      <span className="glass px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white flex items-center gap-2">
                          <span className="material-symbols-outlined text-accent text-sm">groups</span> Vibrant Community
                      </span>
                  </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <LeadForm />
              </ScrollReveal>
          </div>
      </section>

      {/* Marquee Section */}
      <Marquee text="COWORKING ✦ PRIVATE CABINS ✦ MANAGED OFFICES ✦ VIRTUAL OFFICE ✦ MEETING ROOMS ✦ ENTERPRISE HUBS ✦" />

      {/* Quick Actions Bar */}
      <section className="bg-navy border-b border-white/10 relative z-20 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-2 md:gap-4">
              <Link href="/contact" className="glass hover:bg-white/10 text-white font-medium py-2.5 px-6 rounded-full text-sm flex items-center gap-2 transition-all">
                  <span className="material-symbols-outlined text-accent text-[18px]">location_on</span> Book a Tour
              </Link>
              <Link href="/pricing" className="glass hover:bg-white/10 text-white font-medium py-2.5 px-6 rounded-full text-sm flex items-center gap-2 transition-all">
                  <span className="material-symbols-outlined text-accent text-[18px]">today</span> Get a Day Pass
              </Link>
              <Link href="/pricing" className="glass hover:bg-white/10 text-white font-medium py-2.5 px-6 rounded-full text-sm flex items-center gap-2 transition-all">
                  <span className="material-symbols-outlined text-accent text-[18px]">handshake</span> Book Meeting Room
              </Link>
              <Link href="/contact" className="glass hover:bg-white/10 text-white font-medium py-2.5 px-6 rounded-full text-sm flex items-center gap-2 transition-all">
                  <span className="material-symbols-outlined text-accent text-[18px]">request_quote</span> Get a Quote
              </Link>
          </div>
      </section>

      {/* Established Bar */}
      <section className="border-y border-white/10 bg-navy-dark py-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
              <ScrollReveal direction="left" className="flex items-center gap-4">
                  <Image src="/images/logo.png" alt="WeeSpaces Premium Coworking Brand Logo" width={80} height={80} className="w-20 h-20 rounded-full shadow-[0_0_20px_rgba(242,156,31,0.2)] object-cover animate-float" unoptimized />
                  <div>
                      <h4 className="text-2xl font-bold">WeeSpaces</h4>
                      <p className="text-accent text-sm font-bold tracking-widest uppercase">Since 2018</p>
                  </div>
              </ScrollReveal>
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center md:text-left">
                  <ScrollReveal delay={0.1}>
                      <div className="text-4xl font-bold text-white mb-1">4</div>
                      <div className="text-xs font-bold text-white/50 uppercase tracking-wider">Prime Locations</div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                      <div className="text-4xl font-bold text-white mb-1">50K+</div>
                      <div className="text-xs font-bold text-white/50 uppercase tracking-wider">Sq. Ft. Managed</div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.3}>
                      <div className="text-4xl font-bold text-white mb-1">500+</div>
                      <div className="text-xs font-bold text-white/50 uppercase tracking-wider">Active Members</div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.4} className="mt-4 md:mt-0">
                      <Link href="/investors/" className="bg-white/5 hover:bg-accent hover:text-navy border border-accent/30 text-accent font-bold py-3 px-6 rounded-xl transition-all text-sm inline-flex items-center gap-2 shadow-[0_0_15px_rgba(242,156,31,0.15)] hover:shadow-[0_0_20px_rgba(242,156,31,0.4)]">
                          <span className="material-symbols-outlined text-[18px]">trending_up</span>
                          Invest in WeeSpaces
                      </Link>
                  </ScrollReveal>
              </div>
          </div>
      </section>

      {/* Audience Segmentation */}
      <section className="py-24 max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Businesses of <span className="text-accent">Every Size</span></h2>
              <p className="text-xl text-white/70">From independent creators to large enterprise teams, we have a space for you.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0}>
                  <div className="glass rounded-3xl p-8 border border-white/10 h-full relative overflow-hidden group hover:border-accent/50 hover:scale-[1.02] transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors"></div>
                      <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Freelancers & Solopreneurs</h3>
                      <p className="text-white/60 mb-6 relative z-10">Escape the cafe noise. Enjoy flexible hot desks, fast Wi-Fi, and a thriving community of independent professionals.</p>
                      <Link href="/pricing" className="text-accent font-bold hover:text-white flex items-center gap-1 text-sm relative z-10">View Coworking <span className="material-symbols-outlined text-[16px]">chevron_right</span></Link>
                  </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                  <div className="glass rounded-3xl p-8 border border-accent/30 h-full relative overflow-hidden group bg-navy-light/20 hover:border-accent hover:scale-[1.02] transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] -mr-10 -mt-10 group-hover:bg-accent/20 transition-colors"></div>
                      <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Startups & SMEs</h3>
                      <p className="text-white/60 mb-6 relative z-10">Scale without friction. Get private cabins, meeting room credits, and incubation support to grow your business.</p>
                      <Link href="/pricing" className="text-accent font-bold hover:text-white flex items-center gap-1 text-sm relative z-10">View Private Offices <span className="material-symbols-outlined text-[16px]">chevron_right</span></Link>
                  </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                  <div className="glass rounded-3xl p-8 border border-white/10 h-full relative overflow-hidden group hover:border-accent/50 hover:scale-[1.02] transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors"></div>
                      <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Enterprise Teams</h3>
                      <p className="text-white/60 mb-6 relative z-10">Custom-built workspaces, dedicated floors, and enterprise-grade security tailored to your corporate standards.</p>
                      <Link href="/contact" className="text-accent font-bold hover:text-white flex items-center gap-1 text-sm relative z-10">Get Custom Quote <span className="material-symbols-outlined text-[16px]">chevron_right</span></Link>
                  </div>
              </ScrollReveal>
          </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 bg-navy-dark">
          <ScrollReveal direction="up" className="text-center mb-16 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Workspace <span className="text-accent">Solutions</span></h2>
              <p className="text-xl text-white/70 relative z-10">Flexible plans designed for your daily workflow.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Hot Desk */}
              <ScrollReveal delay={0}>
                  <MouseGlowCard className="glass rounded-3xl p-8 border border-white/10 h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                          <span className="material-symbols-outlined text-3xl">chair</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Hot Desk</h3>
                      <p className="text-sm text-white/50 mb-6 h-10">Flexible seating in our open, vibrant coworking area.</p>
                      <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-6">
                          <span className="text-4xl font-bold text-white">₹5,999</span>
                          <span className="text-white/50 text-sm uppercase tracking-wider font-bold">/ Mo</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Flexible any-desk access</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> High-speed WiFi</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Unlimited Tea/Coffee</li>
                      </ul>
                      <Link href="/pricing" className="block text-center w-full py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-navy transition-colors relative z-20">View Pricing</Link>
                  </MouseGlowCard>
              </ScrollReveal>

              {/* Dedicated Desk */}
              <ScrollReveal delay={0.15}>
                  <MouseGlowCard className="glass rounded-3xl p-8 border border-accent/50 shadow-[0_0_30px_rgba(242,156,31,0.15)] transform md:-translate-y-4 bg-navy-light/40 h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="absolute top-0 right-0 bg-accent text-navy text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">Most Popular</div>
                      <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-navy mb-6 shadow-lg shadow-accent/30">
                          <span className="material-symbols-outlined text-3xl">desk</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Dedicated Desk</h3>
                      <p className="text-sm text-white/50 mb-6 h-10">Your own reserved desk with storage in a shared space.</p>
                      <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-6">
                          <span className="text-4xl font-bold text-accent">₹6,999</span>
                          <span className="text-white/50 text-sm uppercase tracking-wider font-bold">/ Mo</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Reserved dedicated desk</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Lockable storage cabinet</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> 24/7 Access</li>
                      </ul>
                      <Link href="/pricing" className="block text-center w-full py-3 rounded-xl bg-accent text-navy font-bold hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20 relative z-20">View Pricing</Link>
                  </MouseGlowCard>
              </ScrollReveal>

              {/* Private Office */}
              <ScrollReveal delay={0.3}>
                  <MouseGlowCard className="glass rounded-3xl p-8 border border-white/10 h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                          <span className="material-symbols-outlined text-3xl">meeting_room</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Private Office</h3>
                      <p className="text-sm text-white/50 mb-6 h-10">Fully enclosed, secure office space for growing teams.</p>
                      <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-6">
                          <span className="text-4xl font-bold text-white">Custom</span>
                          <span className="text-white/50 text-sm uppercase tracking-wider font-bold">Pricing</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Fully furnished office</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Custom branding options</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Free meeting room credits</li>
                      </ul>
                      <Link href="/pricing" className="block text-center w-full py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-navy transition-colors relative z-20">Get a Quote</Link>
                  </MouseGlowCard>
              </ScrollReveal>
              {/* Meeting Rooms Spotlight */}
              <ScrollReveal delay={0.45}>
                  <MouseGlowCard className="glass rounded-3xl p-8 border border-white/10 h-full relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                      <div className="absolute top-0 right-0 w-14 h-14 bg-accent/10 rounded-full blur-[20px] pointer-events-none"></div>
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                          <span className="material-symbols-outlined text-3xl">handshake</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Meeting Rooms</h3>
                      <p className="text-sm text-white/50 mb-6 h-10">On-demand professional spaces for pitches, interviews, and team huddles.</p>
                      <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-6">
                          <span className="text-4xl font-bold text-white">₹1,000</span>
                          <span className="text-white/50 text-sm uppercase tracking-wider font-bold">/ Hr</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> 4-12 Seater capacities</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Smart TVs & Whiteboards</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Guest reception services</li>
                      </ul>
                      <Link href="/pricing" className="block text-center w-full py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-navy transition-colors relative z-20">Book Now</Link>
                  </MouseGlowCard>
              </ScrollReveal>

              {/* Virtual Office Spotlight */}
              <ScrollReveal delay={0.6}>
                  <MouseGlowCard className="glass rounded-3xl p-8 border border-white/10 h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                          <span className="material-symbols-outlined text-3xl">mail</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Virtual Office</h3>
                      <p className="text-sm text-white/50 mb-4 h-10">Premium business address, GST registration, and mail handling.</p>
                      
                      <div className="mb-6 border-b border-white/10 pb-6">
                          <p className="text-accent text-xs font-bold uppercase tracking-wider mb-1">Starting At</p>
                          <div className="flex items-baseline gap-2">
                              <span className="text-4xl font-bold text-white">₹10,000</span>
                              <span className="text-white/50 text-sm uppercase tracking-wider font-bold">/ Yr</span>
                          </div>
                      </div>
                      
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Premium Business Address</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> GST & Company Registration</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Mail & Package Forwarding</li>
                      </ul>
                      <Link href="/services/virtual-office" className="block text-center w-full py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-navy transition-colors relative z-20">Get Virtual Office</Link>
                  </MouseGlowCard>
              </ScrollReveal>

              {/* Incubation Services Spotlight */}
              <ScrollReveal delay={0.75}>
                  <MouseGlowCard className="glass rounded-3xl p-8 border border-white/10 h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                          <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Incubation</h3>
                      <p className="text-sm text-white/50 mb-4 h-10">Accelerate growth with comprehensive operational support.</p>
                      
                      <div className="mb-6 border-b border-white/10 pb-6">
                          <p className="text-accent text-xs font-bold uppercase tracking-wider mb-1">Tailored</p>
                          <div className="flex items-baseline gap-2">
                              <span className="text-4xl font-bold text-white">Support</span>
                          </div>
                      </div>
                      
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Mentorship & Network Access</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Funding & Investor Connects</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><span className="material-symbols-outlined text-accent text-lg">check_circle</span> Legal & Compliance</li>
                      </ul>
                      <Link href="/services/incubation" className="block text-center w-full py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-navy transition-colors relative z-20">Explore Incubation</Link>
                  </MouseGlowCard>
              </ScrollReveal>
          </div>
      </section>

      {/* Workspace Gallery & Amenities */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 overflow-hidden">
          <ScrollReveal direction="up" className="text-center mb-16 relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Workspace <span className="text-accent">Amenities</span></h2>
              <p className="text-xl text-white/70 relative z-10">Take a peek inside our functional and ready-to-use offices.</p>
          </ScrollReveal>

          <InteractiveAmenities />
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
          <ScrollReveal direction="up" className="text-center mb-16 relative">
              <h2 className="text-4xl font-bold mb-4">Trusted by <span className="text-accent">Growing Teams</span></h2>
              <p className="text-xl text-white/70">Join a vibrant community of startups, freelancers, and established companies.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  {
                      quote: "We moved our 10-person team to WeeSpaces Coimbatore last month. The private office is perfect, internet is blazing fast, and the 24/7 access helps us coordinate with US clients.",
                      initial: "S", name: "Siddharth R.", role: "Founder, TechFlow Solutions"
                  },
                  {
                      quote: "As a design agency, we used to work from cafes. Getting a dedicated setup here changed our productivity entirely. The community is amazing and the vibe is highly creative.",
                      initial: "P", name: "Priya M.", role: "Creative Director, PixelCrafters"
                  },
                  {
                      quote: "The MG Road Ernakulam location is extremely convenient. We host our client meetings in the premium conference rooms and it always leaves a great impression.",
                      initial: "K", name: "Karthik V.", role: "VP Sales, Elevate CRM"
                  }
              ].map((t, i) => (
                  <ScrollReveal key={i} delay={i * 0.15}>
                      <MouseGlowCard className="glass p-8 rounded-3xl border border-white/10 relative h-full flex flex-col justify-between">
                          <div>
                              <span className="material-symbols-outlined text-accent/20 text-6xl absolute top-4 right-4">format_quote</span>
                              <div className="flex gap-1 text-accent mb-4">
                                  {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined text-sm">star</span>)}
                              </div>
                              <p className="text-white/80 leading-relaxed mb-6 font-medium relative z-10 italic">"{t.quote}"</p>
                          </div>
                          <div className="flex items-center gap-4 mt-auto">
                              <div className="w-12 h-12 rounded-full bg-accent text-navy flex items-center justify-center font-bold text-xl shrink-0">
                                  {t.initial}
                              </div>
                              <div>
                                  <h4 className="font-bold flex items-center gap-2">
                                    {t.name}
                                    <span className="material-symbols-outlined text-[#25D366] text-[16px]" title="Verified Member">verified</span>
                                  </h4>
                                  <p className="text-white/50 text-xs">{t.role}</p>
                              </div>
                          </div>
                      </MouseGlowCard>
                  </ScrollReveal>
              ))}
          </div>
      </section>
    </>
  );
}
