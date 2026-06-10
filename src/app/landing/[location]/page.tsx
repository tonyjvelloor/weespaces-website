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
  const data = branchData[resolvedParams.location];
  
  if (!data) return { title: 'Not Found | WeeSpaces' };

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
              <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-[0_0_15px_rgba(242,156,31,0.2)] w-max mb-8">
                <MapPin className="w-4 h-4" />
                {data.name}
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white drop-shadow-xl">
                Upgrade Your Workspace in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">{data.name}</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light">
                {data.description} Step into a premium environment designed for high-performing teams and individuals.
              </p>

              <div className="space-y-5 mb-12">
                {[
                  "Move-in ready private cabins & dedicated desks",
                  "0 CapEx. No setup costs, no hidden fees.",
                  "Enterprise-grade Wi-Fi & 100% power backup",
                  "Premium meeting rooms & vibrant community events"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-accent/30 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/90 text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

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
            </div>

            {/* Right Form Column - Premium Glassmorphism */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-24 z-20">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/60 to-transparent rounded-[2rem] blur-2xl opacity-40"></div>
                <div className="relative bg-navy-light/70 backdrop-blur-2xl p-8 sm:p-10 rounded-[2rem] border border-white/20 shadow-2xl">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-3">Book a Free Tour</h3>
                    <p className="text-white/70 text-base">Fill out the form and our workspace expert will call you within 30 minutes.</p>
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
            <div className="bg-navy-light/50 border border-white/20 p-8 rounded-3xl overflow-x-auto shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
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
                    <td className="py-6 px-6 font-semibold text-white">Hot Desk</td>
                    <td className="py-6 px-6 text-white/50 line-through">₹8,500/mo</td>
                    <td className="py-6 px-6 text-accent font-bold text-xl">₹6,000/mo</td>
                    <td className="py-6 px-6 text-green-400 font-semibold">₹30,000</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-6 font-semibold text-white">Dedicated Desk</td>
                    <td className="py-6 px-6 text-white/50 line-through">₹9,500/mo</td>
                    <td className="py-6 px-6 text-accent font-bold text-xl">₹6,500/mo</td>
                    <td className="py-6 px-6 text-green-400 font-semibold">₹36,000</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors bg-accent/5">
                    <td className="py-6 px-6 font-semibold text-white">Private Cabins</td>
                    <td className="py-6 px-6 text-white/50">-</td>
                    <td className="py-6 px-6 text-accent font-bold text-xl">Rate on Request</td>
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
        </div>
      </section>

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

    </div>
  );
}
