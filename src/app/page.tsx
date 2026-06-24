import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import {
  MapPin, Award, Wifi, Users, ChevronRight, CheckCircle,
  Monitor, LayoutDashboard, Handshake, Mail, Rocket, Map,
  Quote, Star, BadgeCheck, TrendingUp, Calendar, FileText,
  Phone, CalendarCheck, HelpCircle
} from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import InteractiveAmenities from '@/components/InteractiveAmenities';
import PhotoGallery from '@/components/PhotoGallery';
import OfficeCalculator from '@/components/OfficeCalculator';
import SEOFAQ from '@/components/SEOFAQ';
import { homepageFAQs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Coworking Spaces & Private Offices in Kerala | WeeSpaces',
  description: 'Move into fully furnished coworking spaces, private offices, meeting rooms & virtual offices across Kochi, Calicut and Trivandrum.',
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <HeroCarousel />
          
          <div className="absolute inset-0 bg-navy/80 z-0"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 z-0"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center py-20">
              <ScrollReveal className="lg:col-span-7 text-center lg:text-left">
                  <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
                      <p className="text-accent text-sm font-bold tracking-wider flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          PREMIUM COWORKING SPACES & PRIVATE OFFICES ACROSS KERALA & TAMIL NADU
                      </p>
                  </div>
                  
                  <h1 className="text-display flex flex-col">
                      <span className="text-white text-5xl md:text-6xl lg:text-7xl">Your Office Is Ready.</span>
                      <span className="text-accent text-5xl md:text-6xl lg:text-7xl">Just Bring Your Team.</span>
                  </h1>
                  
                  <p className="text-xl text-white/80 mt-6 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                      Move into fully furnished workspaces in <strong className="text-white">Kochi, Calicut, Trivandrum & Coimbatore</strong> without deposits, setup costs, or long-term commitments.
                  </p>
                  
                  <div className="mb-10">
                      <p className="text-white/60 mb-4 font-medium uppercase tracking-wider text-sm flex items-center gap-2 justify-center lg:justify-start">
                        I am looking for:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                          <Link href="/pricing" className="glass border border-white/20 hover:border-accent text-white px-4 py-3 rounded-xl font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-between group">
                              Workspace for Myself <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-accent transition-colors" />
                          </Link>
                          <Link href="/pricing" className="glass border border-white/20 hover:border-accent text-white px-4 py-3 rounded-xl font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-between group">
                              Office for My Team <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-accent transition-colors" />
                          </Link>
                          <Link href="/pricing" className="glass border border-white/20 hover:border-accent text-white px-4 py-3 rounded-xl font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-between group">
                              Meeting Room <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-accent transition-colors" />
                          </Link>
                          <Link href="/services/virtual-office" className="glass border border-accent/40 bg-accent/10 hover:border-accent text-white px-4 py-3 rounded-xl font-medium text-sm hover:bg-accent/20 transition-all flex items-center justify-between group">
                              Virtual Office <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                          </Link>
                      </div>
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
                      <span className="glass rounded-xl px-4 py-2 text-xs font-bold tracking-wider uppercase text-white/80 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent" /> Established 2018
                      </span>
                      <span className="glass rounded-xl px-4 py-2 text-xs font-bold tracking-wider uppercase text-white/80 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent" /> Multiple Kerala & TN Locations
                      </span>
                      <span className="glass rounded-xl px-4 py-2 text-xs font-bold tracking-wider uppercase text-white/80 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent" /> Fully Managed Offices
                      </span>
                      <span className="glass rounded-xl px-4 py-2 text-xs font-bold tracking-wider uppercase text-white/80 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent" /> Startups • Freelancers • Growing Teams
                      </span>
                  </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <LeadForm />
              </ScrollReveal>
          </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 border-b border-white/10 bg-navy-light/10">
          <ScrollReveal direction="up" className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Setting Up An Office <span className="text-accent">Shouldn't Take Months</span></h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">Skip the heavy deposits, interior investments, and administrative headaches.</p>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-navy rounded-full border border-white/20 flex items-center justify-center font-bold text-white/50 z-10 hidden md:flex">VS</div>
              
              <div className="glass rounded-2xl p-8 lg:p-10 border border-red-500/20 bg-red-500/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[50px] -mr-10 -mt-10"></div>
                  <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Traditional Office</h3>
                  <ul className="space-y-5 mb-8 relative z-10">
                      <li className="flex items-start gap-3 text-white/80"><span className="text-red-400 mt-1">❌</span> ₹5L+ interior investment</li>
                      <li className="flex items-start gap-3 text-white/80"><span className="text-red-400 mt-1">❌</span> Long rental agreements</li>
                      <li className="flex items-start gap-3 text-white/80"><span className="text-red-400 mt-1">❌</span> Furniture purchase</li>
                      <li className="flex items-start gap-3 text-white/80"><span className="text-red-400 mt-1">❌</span> Internet & utilities setup</li>
                      <li className="flex items-start gap-3 text-white/80"><span className="text-red-400 mt-1">❌</span> Daily admin management</li>
                  </ul>
              </div>

              <div className="glass rounded-2xl p-8 lg:p-10 border border-accent/40 bg-accent/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-[60px] -mr-10 -mt-10"></div>
                  <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">WeeSpaces</h3>
                  <ul className="space-y-5 mb-10 relative z-10">
                      <li className="flex items-start gap-3 text-white font-medium"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /> Walk in tomorrow</li>
                      <li className="flex items-start gap-3 text-white font-medium"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /> Fully furnished & designed</li>
                      <li className="flex items-start gap-3 text-white font-medium"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /> Flexible scaling (up or down)</li>
                      <li className="flex items-start gap-3 text-white font-medium"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /> Zero internet setup required</li>
                      <li className="flex items-start gap-3 text-white font-medium"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /> One simple monthly cost</li>
                  </ul>
              </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="#calculator" className="bg-accent text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-all inline-flex items-center justify-center gap-2">
                Calculate Your Savings <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
      </section>

      {/* Build Cost Calculator */}
      <section className="py-20 max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
              <OfficeCalculator />
          </ScrollReveal>
      </section>

      {/* Trust Markers Stat Block */}
      <section className="bg-navy-dark border-b border-white/10 py-12 overflow-hidden relative z-20">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <ScrollReveal delay={0.1}>
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">4</div>
                      <div className="text-xs font-bold text-accent uppercase tracking-wider">Premium Locations</div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
                      <div className="text-xs font-bold text-accent uppercase tracking-wider">Sq. Ft. Managed</div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.3}>
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
                      <div className="text-xs font-bold text-accent uppercase tracking-wider">Plug & Play</div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.4}>
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">0</div>
                      <div className="text-xs font-bold text-accent uppercase tracking-wider">Setup Costs</div>
                  </ScrollReveal>
              </div>
          </div>
      </section>

      {/* Audience Segmentation */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
          <ScrollReveal direction="up" className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Find a Workspace That <span className="text-accent">Fits You</span></h2>
              <p className="text-xl text-white/70">Tailored environments built for maximum productivity.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="glass rounded-xl p-8 border border-white/10 h-full relative overflow-hidden group hover:border-accent/50 hover:scale-[1.02] transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors"></div>
                      <h3 className="text-2xl font-bold text-white mb-1 relative z-10">Just Me</h3>
                      <p className="text-white/60 mb-6 relative z-10 text-sm h-10">Freelancers & remote professionals.</p>
                      <Link href="/pricing" className="text-accent font-bold hover:text-white flex items-center gap-1 text-sm relative z-10">Find My Desk <ChevronRight className="w-4 h-4" /></Link>
                  </div>
                  <div className="glass rounded-xl p-8 border border-accent/30 h-full relative overflow-hidden group bg-navy-light/20 hover:border-accent hover:scale-[1.02] transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] -mr-10 -mt-10 group-hover:bg-accent/20 transition-colors"></div>
                      <h3 className="text-2xl font-bold text-white mb-1 relative z-10">Growing Team</h3>
                      <p className="text-white/60 mb-6 relative z-10 text-sm h-10">Startups and SMEs (2-20 people).</p>
                      <Link href="/pricing" className="text-accent font-bold hover:text-white flex items-center gap-1 text-sm relative z-10">Explore Team Offices <ChevronRight className="w-4 h-4" /></Link>
                  </div>
                  <div className="glass rounded-xl p-8 border border-white/10 h-full relative overflow-hidden group hover:border-accent/50 hover:scale-[1.02] transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors"></div>
                      <h3 className="text-2xl font-bold text-white mb-1 relative z-10">Established</h3>
                      <p className="text-white/60 mb-6 relative z-10 text-sm h-10">Enterprise and corporate (20+ employees).</p>
                      <Link href="/book-tour" className="text-accent font-bold hover:text-white flex items-center gap-1 text-sm relative z-10">Build Custom Office <ChevronRight className="w-4 h-4" /></Link>
                  </div>
                  <div className="glass rounded-xl p-8 border border-white/10 h-full relative overflow-hidden group hover:border-accent/50 hover:scale-[1.02] transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors"></div>
                      <h3 className="text-2xl font-bold text-white mb-1 relative z-10">Business Address</h3>
                      <p className="text-white/60 mb-6 relative z-10 text-sm h-10">GST registration and virtual presence.</p>
                      <Link href="/services/virtual-office" className="text-accent font-bold hover:text-white flex items-center gap-1 text-sm relative z-10">Setup Virtual Office <ChevronRight className="w-4 h-4" /></Link>
                  </div>
          </div>
      </section>

      {/* Locations Summary */}
      <section id="locations" className="py-24 max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prime Locations Across <span className="text-accent">South India</span></h2>
              <p className="text-white/70 max-w-2xl mx-auto">Strategically located hubs offering seamless connectivity and premium business addresses.</p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-4 gap-6">
              {[
                { city: 'Kochi', href: '/coworking-space-in-kochi', img: '/images/branches/kochi/reception.jpg' },
                { city: 'Trivandrum', href: '/coworking-space-in-trivandrum', img: '/images/branches/trivandrum/image4.jpg' },
                { city: 'Calicut', href: '/coworking-space-in-calicut', img: '/images/branches/calicut/reception.jpg' },
                { city: 'Coimbatore', href: '/coworking-space-in-coimbatore', img: '/images/branches/coimbatore/exterior-tall.jpg' },
              ].map((item, idx) => (
                  <Link key={idx} href={item.href} className="group relative h-64 rounded-2xl overflow-hidden block">
                      <Image src={item.img} alt={`${item.city} Coworking Space`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                          <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{item.city}</h3>
                          <p className="text-white/70 text-sm flex items-center gap-1 mt-1"><MapPin className="w-4 h-4" /> View Hub</p>
                      </div>
                  </Link>
              ))}
          </div>
      </section>


      {/* Workspace Gallery & Amenities */}
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
          <ScrollReveal direction="up" className="text-center mb-16 relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Workspace <span className="text-accent">Amenities</span></h2>
              <p className="text-xl text-white/70 relative z-10">Take a peek inside our functional and ready-to-use offices.</p>
          </ScrollReveal>

          <InteractiveAmenities />
      </section>

      {/* Founder Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Built From Kerala. Built For <span className="text-accent">Kerala's Entrepreneurs.</span></h2>
                  <p className="text-lg text-white/70 mb-6 leading-relaxed">
                      Founded in 2018, WeeSpaces was born out of a genuine need. We realized that setting up an office in Kerala meant heavy deposits, rigid leases, and constant operational headaches—distractions that entrepreneurs simply don't need.
                  </p>
                  <p className="text-lg text-white/70 mb-8 leading-relaxed">
                      Our mission is to provide premium, fully-managed workspaces that let you focus entirely on your growth. Whether you are a freelancer or a 100-person enterprise, we have built a community where your business can thrive from day one.
                  </p>
                  <div className="flex items-center gap-4">
                      <Image src="/images/founder_sankesh.jpg" alt="Sankesh Sreenivas" width={64} height={64} className="w-16 h-16 rounded-full object-cover border-2 border-accent" />
                      <div>
                          <p className="font-bold text-white text-lg">Sankesh Sreenivas</p>
                          <p className="text-accent text-sm font-bold uppercase tracking-wider">Founder, WeeSpaces</p>
                      </div>
                  </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-light rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-white/10 flex items-center justify-center bg-navy-dark">
                      <Image src="/images/branches/kochi/reception.jpg" alt="WeeSpaces Video" fill className="object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(242,156,31,0.5)] backdrop-blur-sm group-hover:scale-110 transition-transform">
                              <svg className="w-8 h-8 text-navy ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          </div>
                      </div>
                  </div>
              </ScrollReveal>
          </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
          <ScrollReveal direction="up" className="text-center mb-16 relative">
              <h2 className="text-4xl font-bold mb-4">Trusted by <span className="text-accent">Growing Teams</span></h2>
              <p className="text-xl text-white/70">Join a vibrant community of startups, freelancers, and established companies.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  {
                      problem: "Traditional office required ₹5L deposit.",
                      result: "Startup scaled from 4 people to 22 without changing offices.",
                      initial: "S", name: "Siddharth R.", role: "Founder, TechFlow Solutions"
                  },
                  {
                      problem: "Working from noisy cafes killed productivity.",
                      result: "Launched two new products faster after moving into a dedicated team office.",
                      initial: "P", name: "Priya M.", role: "Creative Director, PixelCrafters"
                  },
                  {
                      problem: "Losing clients due to unprofessional meeting spots.",
                      result: "Closed 3 enterprise deals using the premium boardroom in Ernakulam.",
                      initial: "K", name: "Karthik V.", role: "VP Sales, Elevate CRM"
                  }
              ].map((t, i) => (
                  <MouseGlowCard key={i} className="glass p-8 rounded-xl border border-white/10 relative h-full flex flex-col justify-between group hover:border-accent/30 transition-all">
                      <div>
                          <Quote className="w-12 h-12 text-accent/20 absolute top-4 right-4" />
                          <div className="flex gap-1 text-accent mb-6">
                              {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4" fill="currentColor" />)}
                          </div>
                          
                          <div className="space-y-4 mb-8 relative z-10">
                              <div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-white/40 block mb-1">The Problem</span>
                                  <p className="text-white/70 text-sm">"{t.problem}"</p>
                              </div>
                              <div className="pl-4 border-l-2 border-accent">
                                  <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">The Result</span>
                                  <p className="text-white font-medium italic">"{t.result}"</p>
                              </div>
                          </div>
                      </div>
                      <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                          <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-xl shrink-0 border border-accent/20">
                              {t.initial}
                          </div>
                          <div>
                              <h4 className="font-bold flex items-center gap-2 text-white text-sm">
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

      {/* Pricing Preview Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 bg-navy-dark">
          <ScrollReveal direction="up" className="text-center mb-16 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Flexible <span className="text-accent">Pricing</span></h2>
              <p className="text-xl text-white/70 relative z-10">Find the right workspace plan for your needs.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Hot Desk */}
                  <MouseGlowCard className="glass rounded-xl p-8 border border-white/10 h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                          <Monitor className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Hot Desk</h3>
                      <p className="text-sm text-white/50 mb-6 h-10">Flexible seating in our open coworking area.</p>
                      <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-6">
                          <span className="text-lg text-white/70 font-bold">Starting from</span>
                          <span className="text-3xl font-bold text-white">₹4,999</span>
                          <span className="text-white/50 text-xs uppercase tracking-wider">/ Mo</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Flexible any-desk access</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> High-speed WiFi</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Unlimited Tea/Coffee</li>
                      </ul>
                      <Link href="/pricing" className="block text-center w-full py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-navy transition-colors relative z-20">Check Availability & Offers</Link>
                  </MouseGlowCard>

              {/* Dedicated Desk */}
                  <MouseGlowCard className="glass rounded-xl p-8 border border-accent/50 shadow-[0_0_30px_rgba(242,156,31,0.15)] transform md:-translate-y-4 bg-navy-light/40 h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="absolute top-0 right-0 bg-accent text-navy text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">Most Popular</div>
                      <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-navy mb-6 shadow-lg shadow-accent/30">
                          <LayoutDashboard className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Dedicated Desk</h3>
                      <p className="text-sm text-white/50 mb-6 h-10">Your own reserved desk in a shared space.</p>
                      <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-6">
                          <span className="text-lg text-white/70 font-bold">Starting from</span>
                          <span className="text-3xl font-bold text-accent">₹6,499</span>
                          <span className="text-white/50 text-xs uppercase tracking-wider">/ Mo</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Reserved dedicated desk</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Lockable storage cabinet</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> 24/7 Access</li>
                      </ul>
                      <Link href="/pricing" className="block text-center w-full py-3 rounded-xl bg-accent text-navy font-bold hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20 relative z-20">Check Availability & Offers</Link>
                  </MouseGlowCard>

              {/* Private Office */}
                  <MouseGlowCard className="glass rounded-xl p-8 border border-white/10 h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                          <Users className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Private Office</h3>
                      <p className="text-sm text-white/50 mb-6 h-10">Custom workspace solutions for teams of 2–100+ members.</p>
                      <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-6">
                          <span className="text-2xl font-bold text-white">Built Around Your Team</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Fully furnished office</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Custom branding options</li>
                          <li className="flex items-center gap-3 text-sm text-white/80"><CheckCircle className="w-5 h-5 text-accent" /> Free meeting room credits</li>
                      </ul>
                      <Link href="/pricing" className="block text-center w-full py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-navy transition-colors relative z-20">Build My Office Plan</Link>
                  </MouseGlowCard>
          </div>
      </section>

      {/* SEO FAQ Section */}
      <SEOFAQ 
        title="Everything You Need To Know About WeeSpaces"
        subtitle="Frequently asked questions about our coworking spaces and services."
        faqs={homepageFAQs} 
      />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
        <a href="tel:+919207189111" className="w-1/2 bg-navy border-t border-r border-white/20 py-4 flex items-center justify-center gap-2 text-white font-bold text-sm">
          <Phone className="w-4 h-4 text-accent" /> Call
        </a>
        <Link href="/pricing" className="w-1/2 bg-accent py-4 flex items-center justify-center gap-2 text-navy font-bold text-sm">
          <CalendarCheck className="w-4 h-4" /> Schedule Tour
        </Link>
      </div>

    </>
  );
}
