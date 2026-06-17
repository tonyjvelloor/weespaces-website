import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import {
  MapPin, Award, Wifi, Users, ChevronRight, CheckCircle,
  Monitor, LayoutDashboard, Handshake, Mail, Rocket, Map,
  Quote, Star, BadgeCheck, TrendingUp, Calendar, FileText
} from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import InteractiveAmenities from '@/components/InteractiveAmenities';
import PhotoGallery from '@/components/PhotoGallery';

export const metadata: Metadata = {
  title: 'WeeSpaces | Premium Coworking in Kerala & Tamil Nadu',
  description: 'Flexible coworking spaces, dedicated desks, and private offices designed for startups, freelancers, and enterprise teams in Trivandrum, Ernakulam, Calicut, and Coimbatore.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WeeSpaces | Premium Coworking in Kerala & Tamil Nadu',
    description: 'Flexible coworking spaces, dedicated desks, and private offices designed for startups, freelancers, and enterprise teams in Trivandrum, Ernakulam, Calicut, and Coimbatore.',
    url: '/',
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WeeSpaces",
    "url": "https://weespaces.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://weespaces.in/locations/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WeeSpaces",
    "url": "https://weespaces.in",
    "logo": "https://weespaces.in/images/logo.png",
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
          "url": "https://weespaces.in/locations/trivandrum",
          "address": "1st Floor, Relcon Plaza, Pattom, Thiruvananthapuram, Kerala 695004"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "LocalBusiness",
          "name": "WeeSpaces Ernakulam",
          "url": "https://weespaces.in/locations/ernakulam",
          "address": "4th floor, Palal Tower, Mahatma Gandhi Rd, Ravipuram, Perumanoor, Kochi, Kerala 682016"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "LocalBusiness",
          "name": "WeeSpaces Calicut",
          "url": "https://weespaces.in/locations/calicut",
          "address": "Wee Spaces, Ground floor, Neeloth Plaza, East Nadakkave, Kozhikode, Kerala 673001"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "LocalBusiness",
          "name": "WeeSpaces Coimbatore",
          "url": "https://weespaces.in/locations/coimbatore",
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
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-navy-dark">
          {/* Gradient Overlay and Grain Texture */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-grain z-10"></div>
          
          <HeroCarousel />
          
          <div className="container mx-auto px-6 w-full relative z-20 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-8 lg:mt-0">
              <ScrollReveal direction="left" className="space-y-6 md:space-y-8 lg:col-span-7">
                  <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)]">
                      <Map className="w-4 h-4" />
                      4 Prime Locations
                  </div>
                  
                  <h1 className="text-display flex flex-col">
                      <span className="text-white">THE RIGHT SPACE.</span>
                      <span className="text-accent/80 font-serif italic text-h1 mt-2">The right move.</span>
                  </h1>
                  
                  <p className="text-body md:text-lg text-white/70 max-w-xl font-medium">
                      Coworking Spaces Designed for <span className="text-white font-semibold">productivity</span>. Built for <span className="text-white font-semibold">growth</span>. Position your business in South India's key hubs.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-2">
                      <span className="glass rounded-xl px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white flex items-center gap-2">
                          <Award className="w-4 h-4 text-accent" /> Premium Workspaces
                      </span>
                      <span className="glass rounded-xl px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white flex items-center gap-2">
                          <Wifi className="w-4 h-4 text-accent" /> High Speed Wi-Fi
                      </span>
                      <span className="glass rounded-xl px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white flex items-center gap-2">
                          <Users className="w-4 h-4 text-accent" /> Vibrant Community
                      </span>
                  </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <LeadForm />
              </ScrollReveal>
          </div>
      </section>

{/* Photo Gallery */}
      <PhotoGallery />

{/* Workspace Gallery & Amenities */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 overflow-hidden">
          <ScrollReveal direction="up" className="text-center mb-16 relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Workspace <span className="text-accent">Amenities</span></h2>
              <p className="text-xl text-white/70 relative z-10">Take a peek inside our functional and ready-to-use offices.</p>
          </ScrollReveal>

          <InteractiveAmenities />
      </section>

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
                  <MouseGlowCard key={i} className="glass p-8 rounded-xl border border-white/10 relative h-full flex flex-col justify-between">
                      <div>
                          <Quote className="w-12 h-12 text-accent/20 absolute top-4 right-4" />
                          <div className="flex gap-1 text-accent mb-4">
                              {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4" fill="currentColor" />)}
                          </div>
                          <p className="text-white/80 leading-relaxed mb-6 font-medium relative z-10 italic">"{t.quote}"</p>
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                          <div className="w-12 h-12 rounded-full bg-accent text-navy flex items-center justify-center font-bold text-xl shrink-0">
                              {t.initial}
                          </div>
                          <div>
                              <h4 className="font-bold flex items-center gap-2 text-white">
                                {t.name}
                                <BadgeCheck className="w-4 h-4 text-[#25D366]" />
                              </h4>
                              <p className="text-white/50 text-xs">{t.role}</p>
                          </div>
                      </div>
                  </MouseGlowCard>
              ))}
          </div>
      </section>

{/* Audience Segmentation */}
      <section className="py-24 max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Businesses of <span className="text-accent">Every Size</span></h2>
              <p className="text-xl text-white/70">From independent creators to large enterprise teams, we have a space for you.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
                  <div className="glass rounded-xl p-8 border border-white/10 h-full relative overflow-hidden group hover:border-accent/50 hover:scale-[1.02] transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors"></div>
                      <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Freelancers & Solopreneurs</h3>
                      <p className="text-white/60 mb-6 relative z-10">Escape the cafe noise. Enjoy flexible hot desks, fast Wi-Fi, and a thriving community of independent professionals.</p>
                      <Link href="/pricing" className="text-accent font-bold hover:text-white flex items-center gap-1 text-sm relative z-10">View Coworking <ChevronRight className="w-4 h-4" /></Link>
                  </div>
                  <div className="glass rounded-xl p-8 border border-accent/30 h-full relative overflow-hidden group bg-navy-light/20 hover:border-accent hover:scale-[1.02] transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] -mr-10 -mt-10 group-hover:bg-accent/20 transition-colors"></div>
                      <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Startups & SMEs</h3>
                      <p className="text-white/60 mb-6 relative z-10">Scale without friction. Get private cabins, meeting room credits, and incubation support to grow your business.</p>
                      <Link href="/pricing" className="text-accent font-bold hover:text-white flex items-center gap-1 text-sm relative z-10">View Private Offices <ChevronRight className="w-4 h-4" /></Link>
                  </div>
                  <div className="glass rounded-xl p-8 border border-white/10 h-full relative overflow-hidden group hover:border-accent/50 hover:scale-[1.02] transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors"></div>
                      <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Enterprise Teams</h3>
                      <p className="text-white/60 mb-6 relative z-10">Custom-built workspaces, dedicated floors, and enterprise-grade security tailored to your corporate standards.</p>
                      <Link href="/contact" className="text-accent font-bold hover:text-white flex items-center gap-1 text-sm relative z-10">Get Custom Quote <ChevronRight className="w-4 h-4" /></Link>
                  </div>
          </div>
      </section>

      {/* Mobile Divider Image (Before Pricing) */}
      <div className="md:hidden max-w-7xl mx-auto px-6 mb-16">
         <div className="relative w-full h-48 rounded-2xl overflow-hidden glass border border-white/10 shadow-[0_0_20px_rgba(242,156,31,0.15)]">
             <Image src="/images/branches/calicut/workspace1.jpg" alt="WeeSpaces Premium Workspace" fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-6">
                 <p className="text-white font-bold text-lg">Your Workspace, Redefined.</p>
             </div>
         </div>
      </div>


{/* Pricing Preview Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 bg-navy-dark">
          <ScrollReveal direction="up" className="text-center mb-16 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Workspace <span className="text-accent">Solutions</span></h2>
              <p className="text-xl text-white/70 relative z-10">Flexible plans designed for your daily workflow.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Hot Desk */}
                  <MouseGlowCard className="glass rounded-xl p-8 border border-white/10 h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                          <Monitor className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Hot Desk</h3>
                      <p className="text-sm text-white/50 mb-6 h-10">Flexible seating in our open, vibrant coworking area.</p>
                      <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-6">
                          <span className="text-4xl font-bold text-white">₹5,999</span>
                          <span className="text-white/50 text-sm uppercase tracking-wider font-bold">/ Mo</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Flexible any-desk access</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> High-speed WiFi</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Unlimited Tea/Coffee</li>
                      </ul>
                      <Link href="/pricing" className="block text-center w-full py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-navy transition-colors relative z-20">View Pricing</Link>
                  </MouseGlowCard>

              {/* Dedicated Desk */}
                  <MouseGlowCard className="glass rounded-xl p-8 border border-accent/50 shadow-[0_0_30px_rgba(242,156,31,0.15)] transform md:-translate-y-4 bg-navy-light/40 h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="absolute top-0 right-0 bg-accent text-navy text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">Most Popular</div>
                      <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-navy mb-6 shadow-lg shadow-accent/30">
                          <LayoutDashboard className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Dedicated Desk</h3>
                      <p className="text-sm text-white/50 mb-6 h-10">Your own reserved desk with storage in a shared space.</p>
                      <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-6">
                          <span className="text-4xl font-bold text-accent">₹6,999</span>
                          <span className="text-white/50 text-sm uppercase tracking-wider font-bold">/ Mo</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Reserved dedicated desk</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Lockable storage cabinet</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> 24/7 Access</li>
                      </ul>
                      <Link href="/pricing" className="block text-center w-full py-3 rounded-xl bg-accent text-navy font-bold hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20 relative z-20">View Pricing</Link>
                  </MouseGlowCard>

              {/* Private Office */}
                  <MouseGlowCard className="glass rounded-xl p-8 border border-white/10 h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                          <Users className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Private Office</h3>
                      <p className="text-sm text-white/50 mb-6 h-10">Fully enclosed, secure office space for growing teams.</p>
                      <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-6">
                          <span className="text-4xl font-bold text-white">₹18,000</span>
                          <span className="text-white/50 text-sm uppercase tracking-wider font-bold">/ Mo</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Fully furnished office</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Custom branding options</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Free meeting room credits</li>
                      </ul>
                      <Link href="/pricing" className="block text-center w-full py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-navy transition-colors relative z-20">Get a Quote</Link>
                  </MouseGlowCard>
              {/* Meeting Rooms Spotlight */}
                  <MouseGlowCard className="glass rounded-xl p-8 border border-white/10 h-full relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                      <div className="absolute top-0 right-0 w-14 h-14 bg-accent/10 rounded-full blur-[20px] pointer-events-none"></div>
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                          <Handshake className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Meeting Rooms</h3>
                      <p className="text-sm text-white/50 mb-6 h-10">On-demand professional spaces for pitches, interviews, and team huddles.</p>
                      <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-6">
                          <span className="text-4xl font-bold text-white">₹1,000</span>
                          <span className="text-white/50 text-sm uppercase tracking-wider font-bold">/ Hr</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> 4-12 Seater capacities</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Smart TVs & Whiteboards</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Guest reception services</li>
                      </ul>
                      <Link href="/pricing" className="block text-center w-full py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-navy transition-colors relative z-20">Book Now</Link>
                  </MouseGlowCard>

              {/* Virtual Office Spotlight */}
                  <MouseGlowCard className="glass rounded-xl p-8 border border-white/10 h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                          <Mail className="w-8 h-8" />
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
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Premium Business Address</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> GST & Company Registration</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Mail & Package Forwarding</li>
                      </ul>
                      <Link href="/services/virtual-office" className="block text-center w-full py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-navy transition-colors relative z-20">Get Virtual Office</Link>
                  </MouseGlowCard>

              {/* Incubation Services Spotlight */}
                  <MouseGlowCard className="glass rounded-xl p-8 border border-white/10 h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                          <Rocket className="w-8 h-8" />
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
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Mentorship & Network Access</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Funding & Investor Connects</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Legal & Compliance</li>
                      </ul>
                      <Link href="/services/incubation" className="block text-center w-full py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-navy transition-colors relative z-20">Explore Incubation</Link>
                  </MouseGlowCard>
          </div>
      </section>

{/* Horizontal Timeline */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
          <ScrollReveal direction="up" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Growth <span className="text-accent">Story</span></h2>
              <p className="text-white/70">Building South India's premier coworking network since 2018.</p>
          </ScrollReveal>
          
          <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block"></div>
              <div className="grid md:grid-cols-4 gap-8">
                  {[
                      { year: '2018', title: 'Trivandrum', desc: 'Started our journey in the capital city.' },
                      { year: '2021', title: 'Ernakulam', desc: 'Expanded to the commercial hub of Kerala.' },
                      { year: '2023', title: 'Calicut', desc: 'Opened The Work Lounge in Malabar.' },
                      { year: '2024', title: 'Coimbatore', desc: 'First location in Tamil Nadu launched.' }
                  ].map((item, idx) => (
                      <ScrollReveal key={idx} delay={idx * 0.1} className="relative z-10 glass p-6 rounded-xl border border-white/10 text-center hover:border-accent/50 transition-colors">
                          <div className="w-12 h-12 bg-accent text-navy font-bold rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-navy-dark shadow-[0_0_15px_rgba(242,156,31,0.3)]">
                              {item.year.slice(2)}'
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                          <p className="text-white/50 text-sm">{item.desc}</p>
                      </ScrollReveal>
                  ))}
              </div>
          </div>
      </section>

{/* Static Stat Block */}
      <section className="bg-navy-dark border-b border-white/10 py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <ScrollReveal delay={0.1}>
                      <div className="text-5xl font-bold text-white mb-2">4</div>
                      <div className="text-xs font-bold text-accent uppercase tracking-wider">Prime Locations</div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                      <div className="text-5xl font-bold text-white mb-2">50K+</div>
                      <div className="text-xs font-bold text-accent uppercase tracking-wider">Sq. Ft. Managed</div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.3}>
                      <div className="text-5xl font-bold text-white mb-2">500+</div>
                      <div className="text-xs font-bold text-accent uppercase tracking-wider">Active Members</div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.4}>
                      <div className="text-5xl font-bold text-white mb-2">100%</div>
                      <div className="text-xs font-bold text-accent uppercase tracking-wider">Power Backup</div>
                  </ScrollReveal>
              </div>
          </div>
      </section>
    </>
  );
}
