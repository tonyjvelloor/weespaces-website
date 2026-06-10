import { branchData } from '@/data/branches';
import { Metadata } from 'next';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import { CheckCircle2, Wifi, Coffee, Clock, ShieldCheck, MapPin, Star, AlertCircle, TrendingUp, Building2, Zap } from 'lucide-react';

export function generateStaticParams() {
  return [
    { location: 'trivandrum' },
    { location: 'ernakulam' },
    { location: 'calicut' },
    { location: 'coimbatore' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locationId = resolvedParams.location;
  const data = branchData[locationId];
  
  if (!data) return { title: 'Not Found | WeeSpaces' };

  if (locationId === 'coimbatore') {
    return {
      title: `Premium Coworking & Managed Offices in Coimbatore | WeeSpaces`,
      description: data.description,
      keywords: ["Coworking space Coimbatore", "Office space near Tidel Park Coimbatore", "Managed offices Avinashi Road", "Premium coworking Coimbatore", "Private cabins Coimbatore", "IT workspace Coimbatore"],
      openGraph: {
        images: [{ url: '/images/exterior-tall.jpg' }]
      }
    };
  }

  return {
    title: `Premium Coworking in ${data.name} | WeeSpaces`,
    description: data.description,
  };
}

export default async function AdLandingPage({ params }: { params: Promise<{ location: string }> }) {
  const resolvedParams = await params;
  const locationId = resolvedParams.location;
  const data = branchData[locationId];

  if (!data) return <div className="text-white text-center pt-32">Location not found.</div>;

  return (
    <div className="bg-navy min-h-screen font-sans pb-24">
      {/* Scarcity Banner */}
      <div className="bg-gradient-to-r from-accent to-accent-light text-navy font-bold text-center py-2 px-4 text-sm flex items-center justify-center gap-2 animate-pulse">
        <AlertCircle className="w-4 h-4" />
        <span>High Demand: Only 2 Private Cabins remaining in {data.name}. Secure yours today.</span>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden">
        {/* Deep Premium Background Elements */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-accent/15 rounded-full blur-[150px] -mr-[400px] -mt-[400px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-navy-light/60 rounded-full blur-[120px] -ml-[300px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center pt-4">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-[0_0_15px_rgba(242,156,31,0.2)]">
                  <MapPin className="w-4 h-4" />
                  {data.name}
                </div>
                {locationId === 'coimbatore' && (
                  <>
                    <div className="inline-flex items-center gap-1 text-xs text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                      <Star className="w-3 h-3 text-accent fill-accent" /> 4.9/5 Network-Wide Rating
                    </div>
                    <div className="inline-flex items-center gap-3">
                      <a href="tel:+919207189111" className="inline-flex items-center gap-2 bg-white text-navy font-bold px-4 py-2 rounded-full text-xs hover:bg-gray-200 transition-colors">
                        📞 +91 92071 89111
                      </a>
                      <a href="https://wa.me/919207189111" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-4 py-2 rounded-full text-xs hover:bg-[#20b858] transition-colors">
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        WhatsApp
                      </a>
                    </div>
                  </>
                )}
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white drop-shadow-xl">
                {locationId === 'coimbatore' ? (
                  <>New Launch Near <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Tidel Park & Airport</span></>
                ) : (
                  <>Upgrade Your Workspace in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">{data.name}</span></>
                )}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full">🚀 Prime Business Locations</div>
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full">🚆 Seamless Connectivity</div>
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full">🏢 Grade-A Infrastructure</div>
                 <div className="bg-white/10 backdrop-blur-md border border-accent/50 text-accent text-xs font-bold px-4 py-2 rounded-full">💰 Zero Brokerage | Zero CapEx</div>
              </div>

              <p className="text-xl sm:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light">
                {data.description} Step into a premium environment designed for high-performing teams and individuals.
              </p>

              <div className="space-y-5 mb-12">
                {[
                  "Ergonomic workstations with natural lighting",
                  "Plug & Play setup with Seamless Operations",
                  "Zero CapEx with flexible lease terms",
                  "Exclusive networking & business events"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-accent/30 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/90 text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {locationId === 'coimbatore' ? (
                <div className="flex flex-col gap-3 bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-2xl border border-accent/30 w-max shadow-[0_0_20px_rgba(242,156,31,0.1)]">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent text-navy flex items-center justify-center shrink-0">
                         <Star className="w-6 h-6 fill-navy" />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold text-white">Be among the first 20 members!</h4>
                         <p className="text-sm text-white/70">Lock in your inaugural rate and get priority desk choice.</p>
                      </div>
                   </div>
                   <div className="inline-flex items-center gap-2 text-xs font-bold bg-accent text-navy px-3 py-1 rounded-full w-max mt-2 uppercase tracking-wide">
                     <AlertCircle className="w-3 h-3" /> Founding Member Badge Included
                   </div>
                </div>
              ) : (
                <div className="flex items-center gap-4 bg-navy-dark/50 p-6 rounded-2xl border border-white/10 w-max">
                  <div className="flex -space-x-4">
                     <div className="w-12 h-12 rounded-full border-2 border-navy bg-white/20"></div>
                     <div className="w-12 h-12 rounded-full border-2 border-navy bg-white/30"></div>
                     <div className="w-12 h-12 rounded-full border-2 border-navy bg-white/40"></div>
                  </div>
                  <div>
                     <div className="flex gap-1 text-accent mb-1">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                     </div>
                     <p className="text-sm font-bold text-white">4.9/5 Average Rating</p>
                     <p className="text-xs text-white/50">From 200+ Professionals</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Form Column - Premium Glassmorphism */}
            <div className="lg:col-span-5 relative" id="form-id">
              <div className="sticky top-24 z-20">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/60 to-transparent rounded-[2rem] blur-2xl opacity-40"></div>
                <div className="relative bg-navy-light/70 backdrop-blur-2xl p-8 sm:p-10 rounded-[2rem] border border-white/20 shadow-2xl">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {locationId === 'coimbatore' ? 'Reserve Your Seat' : 'Get a Quote in 10 mins'}
                    </h3>
                    <p className="text-white/70 text-base">Fill out the form and our workspace expert will call you within 10 minutes.</p>
                  </div>
                  <LeadForm branch={`Ads - ${data.name}`} />
                  <p className="text-center text-xs text-white/40 mt-6 flex items-center justify-center gap-1">
                     <ShieldCheck className="w-3 h-3" /> Your information is 100% secure.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Coimbatore Context & Target Audience Sections */}
      {locationId === 'coimbatore' && (
        <section className="py-20 relative bg-navy border-y border-white/5">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Why Coimbatore Now? */}
            <div className="text-center mb-16">
              <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide border border-accent/20">The IT Boom</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Coimbatore Now?</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Coimbatore is rapidly emerging as South India's next major tech and business hub. With the massive expansion of Tidel Park and rapid infrastructural growth around the airport, positioning your business here gives you a strategic first-mover advantage in a booming economy.
              </p>
            </div>

            {/* Who is this for? */}
            <div className="text-center mb-12 mt-24">
              <h2 className="text-3xl font-bold mb-4">Who is WeeSpaces Built For?</h2>
              <p className="text-white/60">Tailored solutions for every stage of your business.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-navy-light/30 border border-white/10 p-8 rounded-3xl hover:border-accent/30 transition-colors text-center group">
                <div className="w-16 h-16 bg-navy mx-auto rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent transition-colors">
                  <Wifi className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Remote Teams</h3>
                <p className="text-white/60 text-sm">Perfect for distributed teams needing a reliable, professional home base with enterprise-grade connectivity.</p>
              </div>
              <div className="bg-navy-light/30 border border-white/10 p-8 rounded-3xl hover:border-accent/30 transition-colors text-center group">
                <div className="w-16 h-16 bg-navy mx-auto rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent transition-colors">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Startups & Freelancers</h3>
                <p className="text-white/60 text-sm">Flexible hot desks and dedicated seats that scale with you, plus access to a vibrant networking community.</p>
              </div>
              <div className="bg-navy-light/30 border border-white/10 p-8 rounded-3xl hover:border-accent/30 transition-colors text-center group">
                <div className="w-16 h-16 bg-navy mx-auto rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent transition-colors">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise & GCCs</h3>
                <p className="text-white/60 text-sm">Custom-built private cabins and managed office wings with dedicated branding and 24/7 private access.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Comparison Section (High Intent Trigger) */}
      <section className="py-20 relative bg-gradient-to-b from-navy to-navy-dark border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose WeeSpaces?</h2>
            <p className="text-xl text-white/60">The smart alternative to traditional office leasing.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white/5 p-8 rounded-3xl border border-white/10 opacity-70">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                   <Building2 className="w-8 h-8 text-white/50" />
                   <h3 className="text-2xl font-bold text-white/50">Traditional Lease</h3>
                </div>
                <ul className="space-y-4">
                   <li className="flex items-center gap-3 text-white/60"><span className="text-red-400">✗</span> Heavy upfront CapEx</li>
                   <li className="flex items-center gap-3 text-white/60"><span className="text-red-400">✗</span> Rigid 3-5 year lock-ins</li>
                   <li className="flex items-center gap-3 text-white/60"><span className="text-red-400">✗</span> You manage IT & maintenance</li>
                   <li className="flex items-center gap-3 text-white/60"><span className="text-red-400">✗</span> Hidden operational costs</li>
                </ul>
             </div>
             
             <div className="bg-navy-light/50 p-8 rounded-3xl border-2 border-accent relative shadow-[0_0_40px_rgba(242,156,31,0.15)] transform md:-translate-y-4">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-accent text-navy text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  The Smart Choice
                </div>
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                   <Zap className="w-8 h-8 text-accent" />
                   <h3 className="text-2xl font-bold text-white">WeeSpaces Managed</h3>
                </div>
                <ul className="space-y-4">
                   <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-accent" /> 0 Setup costs or CapEx</li>
                   <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-accent" /> Flexible month-to-month terms</li>
                   <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-accent" /> We handle IT, cleaning, & security</li>
                   <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-accent" /> All-inclusive predictable billing</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing / Options Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl text-white/60">No hidden fees. Choose the perfect workspace solution in {data.name}.</p>
          </div>

          {locationId === 'coimbatore' ? (
            <div className="bg-navy-light/50 border border-white/20 p-8 rounded-3xl overflow-x-auto shadow-2xl relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-accent to-accent-light text-navy text-sm font-bold uppercase tracking-wider py-1 px-4 rounded-full animate-pulse shadow-[0_0_15px_rgba(242,156,31,0.4)]">
                Inaugural Offer - Valid till July 31
              </div>
              <table className="w-full text-left border-collapse min-w-[600px] mt-2">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-6 text-white font-bold text-lg">Plan</th>
                    <th className="py-4 px-6 text-white/50 font-bold text-lg">Typical Coimbatore Premium Rate</th>
                    <th className="py-4 px-6 text-accent font-bold text-lg">The Offer Price</th>
                    <th className="py-4 px-6 text-green-400 font-bold text-lg">Annual Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-6 font-semibold text-white">Hot Desk <span className="block text-xs text-accent mt-1">12 spots left</span></td>
                    <td className="py-6 px-6 text-white/50 line-through">₹8,500/mo</td>
                    <td className="py-6 px-6 text-accent font-bold text-xl">₹6,000/mo</td>
                    <td className="py-6 px-6 text-green-400 font-semibold">₹30,000</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-6 font-semibold text-white">Dedicated Desk <span className="block text-xs text-accent mt-1">30 spots left</span></td>
                    <td className="py-6 px-6 text-white/50 line-through">₹9,500/mo</td>
                    <td className="py-6 px-6 text-accent font-bold text-xl">₹6,999/mo</td>
                    <td className="py-6 px-6 text-green-400 font-semibold">₹30,000+</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors bg-accent/5">
                    <td className="py-6 px-6 font-semibold text-white">Private Cabins <span className="block text-xs text-accent mt-1">8 cabins left</span></td>
                    <td className="py-6 px-6 text-white/50">₹35,000/mo</td>
                    <td className="py-6 px-6 text-accent font-bold text-xl">From ₹25,000/mo</td>
                    <td className="py-6 px-6 text-green-400 font-semibold">Massive CapEx Savings</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Hot Desk */}
              <div className="bg-navy-light/30 border border-white/10 p-8 rounded-3xl hover:border-accent/50 transition-colors flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Hot Desk</h3>
                <p className="text-white/60 text-sm mb-6">Perfect for freelancers needing flexible access.</p>
                <div className="text-4xl font-bold text-white mb-8">{data.pricing.hotDesk}</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-accent" /> Any available desk</li>
                  <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-accent" /> High-speed Wi-Fi</li>
                  <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-accent" /> Premium Cafe access</li>
                </ul>
              </div>

              {/* Dedicated Desk */}
              <div className="bg-navy-light/50 border border-white/20 p-8 rounded-3xl hover:border-accent/50 transition-colors flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Dedicated Desk</h3>
                <p className="text-white/60 text-sm mb-6">A permanent desk for your daily deep work.</p>
                <div className="text-4xl font-bold text-white mb-8">{data.pricing.dedicatedDesk}</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-accent" /> Your own reserved desk</li>
                  <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-accent" /> Lockable storage</li>
                  <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-accent" /> Meeting room credits</li>
                </ul>
              </div>

              {/* Private Cabin */}
              <div className="bg-navy-light/80 border-2 border-accent p-8 rounded-3xl relative shadow-[0_0_30px_rgba(242,156,31,0.15)] flex flex-col transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-navy text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  Selling Fast
                </div>
                <h3 className="text-2xl font-bold mb-2">Private Cabin</h3>
                <p className="text-white/60 text-sm mb-6">Secure, enclosed offices for growing teams.</p>
                <div className="text-4xl font-bold text-accent mb-8">{data.pricing.privateCabin}</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-accent" /> Fully furnished office</li>
                  <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-accent" /> Custom branding options</li>
                  <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-accent" /> 24/7 Secure access</li>
                </ul>
              </div>
            </div>
          )}

          {/* Enterprise & Managed Offices Banner */}
          <div className="mt-8 bg-gradient-to-r from-navy-light/80 to-navy/90 border border-white/10 p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] -mr-[200px] -mt-[200px] pointer-events-none group-hover:bg-accent/20 transition-all duration-500"></div>
             <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                   <div className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">For Large Teams & GCCs</div>
                   <h3 className="text-3xl font-bold text-white mb-3">Customised Managed Offices</h3>
                   <p className="text-white/70 max-w-2xl text-lg">Grade-A infrastructure, scalable layouts, zero CapEx, and seamless end-to-end operations for teams up to <span className="text-white font-bold">200+ seats</span>.</p>
                </div>
                <div className="shrink-0">
                   <a href="#form-id" className="inline-flex items-center justify-center bg-transparent border-2 border-accent text-accent font-bold px-8 py-4 rounded-xl hover:bg-accent hover:text-navy transition-all duration-300 shadow-[0_0_15px_rgba(242,156,31,0.2)]">
                      Discuss Enterprise Needs
                   </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Exterior Highlight Section (Specific to Coimbatore or fallback) */}
      {locationId === 'coimbatore' && data.heroImage && (
        <section className="py-12 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-navy-light/20 border border-white/5 rounded-[2.5rem] p-6 md:p-10">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Premium Architecture</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">A Landmark Building</h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Our Coimbatore hub is housed in a stunning standalone building featuring a modern facade with expansive glass windows. This premium architecture not only floods the workspace with natural light but also sets an elite tone for your team and visiting clients from the moment they arrive.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-accent" /> Dedicated covered parking area</li>
                  <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-accent" /> Prominent, highly-visible frontage</li>
                  <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-accent" /> Fully monitored 24/7 security</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="relative h-[500px] sm:h-[650px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                  <Image src={data.heroImage} alt="Workspace Exterior" fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Image Gallery */}
      <section className="py-12 border-t border-white/10 bg-navy-dark">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.galleryImages.slice(0, 4).map((src, i) => (
                 <div key={i} className="relative h-48 md:h-64 rounded-2xl overflow-hidden group border border-white/10 shadow-lg">
                    <Image src={src} alt="Workspace Image" fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Location Map Section (Coimbatore Specific) */}
      {locationId === 'coimbatore' && (
        <section className="py-16 bg-navy-light/30 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategically Located</h2>
              <p className="text-white/60 max-w-2xl mx-auto">Just minutes away from Tidel Park and Coimbatore International Airport.</p>
            </div>
            <div className="w-full h-[400px] rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-navy-dark">
              {/* Using a generic Coimbatore Tidel Park maps embed as requested */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.120025287315!2d77.0169389!3d11.036611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857a224a18ea7%3A0x6b4fbda49b4931a7!2sTIDEL%20Park%20Coimbatore!5e0!3m2!1sen!2sin!4v1718040000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      {/* Sticky Mobile CTA Bar */}
      {locationId === 'coimbatore' && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-navy-light/95 backdrop-blur-md border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-40 md:hidden flex items-center justify-between gap-4 animate-in slide-in-from-bottom-full duration-500 delay-1000 fill-mode-both">
           <div>
             <div className="text-xs text-accent font-bold mb-0.5">Inaugural Offer</div>
             <div className="text-white font-bold text-sm">Cabins from ₹25k</div>
           </div>
           <a href="#form-id" className="bg-accent text-navy font-bold px-6 py-3 rounded-xl text-sm whitespace-nowrap shadow-lg shadow-accent/20">
              Reserve a Seat
           </a>
        </div>
      )}

    </div>
  );
}
