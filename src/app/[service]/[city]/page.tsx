import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, cities } from '@/data/locations';
import { faqs, coworkingFAQs } from '@/data/faqs';
import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import NAPBlock from '@/components/NAPBlock';
import { MapPin, ArrowRight, CheckCircle, Star, BadgeCheck, Users, Briefcase, Zap, Coffee, Shield, Lightbulb, ChevronRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ service: string; city: string }> }): Promise<Metadata> {
  const { service, city } = await params;
  const serviceObj = services.find(s => s.slug === service || s.id === service);
  const cityObj = cities[city as keyof typeof cities];

  if (!serviceObj || !cityObj) return {};

  return {
    title: `${serviceObj.name} in ${cityObj.name} | WeeSpaces`,
    description: `Premium ${serviceObj.name.toLowerCase()} in ${cityObj.name}. Skip the deposits and setup delays. Book your workspace today.`,
    alternates: {
      canonical: `https://www.weespaces.in/${service}/${city}`,
    },
  };
}

export async function generateStaticParams() {
  const params: { service: string; city: string }[] = [];
  services.forEach((serviceObj) => {
    const serviceSlug = serviceObj.slug;
    Object.keys(cities).forEach((citySlug) => {
      params.push({ service: serviceSlug, city: citySlug });
    });
  });
  return params;
}

export default async function CityPage({ params }: { params: Promise<{ service: string; city: string }> }) {
  const { service, city } = await params;
  const serviceObj = services.find(s => s.slug === service || s.id === service);
  const cityObj = cities[city as keyof typeof cities];

  if (!serviceObj || !cityObj) notFound();

  // Use branchData if we have exact match for legacy NAP mapping
  // Or just generate it from city data.
  const address = `${cityObj.name} Hub, Kerala`;
  const mapUrl = "#";

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={cityObj.gallery[0] || '/images/hero-home.jpg'} alt={`${serviceObj.name} in ${cityObj.name}`} fill sizes="100vw" className="object-cover object-center opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60"></div>
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] -mr-[20vw] -mt-[10vw] pointer-events-none"></div>
        </div>
        <div className="container mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="up" className="space-y-6 md:space-y-8">
            <Breadcrumbs segments={[{ name: 'Locations', url: '/locations' }, { name: `${serviceObj.name} ${cityObj.name}`, url: `/${service}/${city}` }]} />
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)]">
              <MapPin className="w-4 h-4" />
              {cityObj.name}, Kerala
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">{serviceObj.name}</span><br />
              in {cityObj.name}
            </h1>

            <div className="bg-navy-dark/40 border-l-4 border-accent p-4 rounded-r-lg max-w-xl">
              <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">{serviceObj.name} designed for you</p>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                Unlock your potential in {cityObj.name}. Our premium {serviceObj.name.toLowerCase()} offers an affordable, creative, and highly driven atmosphere tailored for local businesses, ambitious freelancers, and rising entrepreneurs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <BadgeCheck className="w-5 h-5 text-accent" />
                <span>Loved by {cityObj.name} Entrepreneurs</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span>4.8/5 Google Rating</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-accent text-navy font-bold py-3 px-7 rounded-xl hover:bg-accent-hover transition-all glow text-sm"
              >
                See Plans & Availability <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-white/70 italic text-sm">Cancel anytime. Move in tomorrow.</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-md mx-auto md:mx-0 md:ml-auto">
            <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light"></div>
              <h3 className="text-2xl font-bold mb-2 text-white">Book a Free Tour</h3>
              <p className="text-white/70 text-sm mb-6">Experience our creative workspace in {cityObj.name}.</p>
              <LeadForm branch={cityObj.name} source={`${serviceObj.name} ${cityObj.name}`} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- NAP BLOCK + PRICING --- */}
      <section className="py-10 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="mt-8">
          <div className="bg-navy-light/10 border border-white/10 rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-4">{serviceObj.name} Pricing in {cityObj.name}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Hot Desk', price: '₹4,000/mo', note: 'Flexible seating' },
                { label: 'Dedicated Desk', price: '₹5,500/mo', note: 'Your own fixed desk' },
                { label: 'Private Office', price: '₹16,000/mo', note: 'Enclosed cabin' },
                { label: 'Virtual Office', price: '₹12,000/yr', note: 'Premium address' },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4 text-center border border-white/10 hover:border-accent/30 transition-all">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-xl font-bold text-accent">{item.price.split('/')[0]}</p>
                  <p className="text-[11px] text-white/40 mt-1">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link href="/pricing" className="inline-flex items-center gap-2 bg-accent text-navy font-bold py-2.5 px-6 rounded-xl hover:bg-accent-hover transition-all text-sm shadow-[0_0_15px_rgba(242,156,31,0.3)]">
                See Plans & Availability
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- INTRODUCTION & WHO IS IT FOR --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Designed for {cityObj.name}'s Creative and Business Community</h2>
            <div className="space-y-4 text-white/80 leading-relaxed text-lg">
              <p>
                {cityObj.description}
              </p>
              <p>
                WeeSpaces {cityObj.name} solves this by offering budget-friendly, premium workspaces. Whether you're a local agency making your mark, an e-commerce entrepreneur, or a freelancer looking for a productive environment away from coffee shops, our space provides the community, high-speed internet, and professional atmosphere you need to thrive.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-accent">Who is WeeSpaces {cityObj.name} For?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Lightbulb className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold text-white mb-2">Local Entrepreneurs</h4>
                <p className="text-sm text-white/70">Move out of your living room and into a professional environment that boosts productivity.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Briefcase className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold text-white mb-2">Agencies & Consultancies</h4>
                <p className="text-sm text-white/70">Host clients in professional meeting rooms instead of noisy cafes.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold text-white mb-2">Growing Startups</h4>
                <p className="text-sm text-white/70">Scale your team with flexible dedicated desks or a private cabin.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <Coffee className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold text-white mb-2">Freelancers & Creators</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Everything You Need to Succeed</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Affordable Workspace <span className="text-accent">Pricing</span></h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Budget-friendly plans designed for {cityObj.name}'s business community.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollReveal delay={0.1}>
            <MouseGlowCard className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all h-full flex flex-col">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Hot Desk</p>
              <div className="flex items-baseline gap-2 mb-1">
                 <span className="text-xs text-white/50 uppercase font-bold tracking-wider">From</span>
                 <p className="text-3xl font-bold text-white">₹4,000</p>
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
                 <p className="text-3xl font-bold text-accent">₹5,500</p>
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
                 <p className="text-3xl font-bold text-white">₹16,000</p>
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
                 <p className="text-3xl font-bold text-white">₹12,000</p>
              </div>
              <p className="text-white/40 text-sm mb-4">per year</p>
              <p className="text-sm text-white/80 mb-6 flex-grow">Get a professional {cityObj.name} business address for your company registration and GST compliance without renting physical space.</p>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Business address</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> GST registration</li>
              </ul>
              <Link href={`/virtual-office/${cityObj.slug}`} className="text-accent font-bold text-sm flex items-center gap-2 hover:text-white transition-colors mt-auto">View Details <ArrowRight className="w-4 h-4" /></Link>
            </MouseGlowCard>
          </ScrollReveal>
        </div>
      </section>

      {/* --- COMPARISON: Coworking vs Traditional --- */}
      <section className="py-24 bg-navy-light/10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Coworking Space vs Traditional Office in {cityObj.name}</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Why lock your capital in real estate when you can invest it in your business?</p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="relative h-96 rounded-2xl overflow-hidden hidden md:block border border-white/10">
                <Image src={cityObj.gallery[0] || "/images/hero-home.jpg"} alt={`${cityObj.name} Office Space Comparison`} fill className="object-cover" />
             </div>
             <div>
                <ul className="space-y-6">
                   <li className="flex gap-4">
                      <div className="mt-1 bg-red-500/10 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                         <span className="text-red-500 font-bold">VS</span>
                      </div>
                      <div>
                         <h4 className="font-bold text-lg mb-1 line-through text-white/50">Traditional Office Rent in {cityObj.name}</h4>
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

      {/* --- MICRO LOCATIONS SEO --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Prime Locations in {cityObj.name}</h2>
          <p className="text-white/70 max-w-2xl mx-auto">Find a workspace perfectly situated near your clients and talent.</p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cityObj.microLocations.map((micro) => (
            <Link 
              key={micro.id} 
              href={`/${service}/${city}/${micro.slug}`}
              className="glass rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{micro.name}</h3>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
              <div className="text-xs font-medium text-white/50 uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accent" /> {micro.landmarks[0]}
              </div>
            </Link>
          ))}
        </div>

        {cityObj.landmarks.length > 0 && (
          <div className="pt-12 border-t border-white/10 text-center">
            <h3 className="text-lg font-bold text-white mb-6">Search by Landmark</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {cityObj.landmarks.map(landmark => (
                <Link 
                  key={landmark.slug}
                  href={`/${service}/${city}/${landmark.slug}`}
                  className="bg-navy-light/30 px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-white/70 hover:border-accent hover:text-accent transition-colors"
                >
                  Near {landmark.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* --- IMAGE GALLERY --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 bg-navy-light/5">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Inside Our <span className="text-accent">{cityObj.name}</span> Space</h2>
          <p className="text-xl text-white/70">Take a peek inside our creative and affordable workspace.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityObj.gallery.map((src, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15} className="relative rounded-xl overflow-hidden group shadow-md border border-white/10 h-64 md:h-80">
              <Image src={src} alt={`WeeSpaces ${cityObj.name} workspace ${idx + 1}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <SEOFAQ 
        title="Frequently Asked Questions"
        subtitle={`Everything you need to know about ${serviceObj.name.toLowerCase()} in ${cityObj.name}.`}
        faqs={coworkingFAQs} 
      />

    </>
  );
}
