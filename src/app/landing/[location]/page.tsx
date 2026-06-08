import { branchData } from '@/data/branches';
import { Metadata } from 'next';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import { CheckCircle2, Wifi, Coffee, Clock, ShieldCheck, MapPin } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -mr-[400px] -mt-[400px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-light/50 rounded-full blur-[100px] -ml-[300px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(242,156,31,0.2)] w-max mb-6">
                <MapPin className="w-4 h-4" />
                {data.name}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-white">
                Premium Coworking Space in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">{data.name}</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                {data.description} Stop settling for loud cafes or cramped home offices. Upgrade to a workspace built for focus and growth.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Move-in ready private cabins & dedicated desks",
                  "High-speed enterprise Wi-Fi & power backup",
                  "Premium meeting rooms & event spaces",
                  "Vibrant community of founders & teams"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-white/90 text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-navy-light/40 border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <Wifi className="w-6 h-6 text-accent mb-2" />
                  <span className="text-xs font-bold text-white/70">Enterprise Wi-Fi</span>
                </div>
                <div className="bg-navy-light/40 border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <Coffee className="w-6 h-6 text-accent mb-2" />
                  <span className="text-xs font-bold text-white/70">Premium Cafe</span>
                </div>
                <div className="bg-navy-light/40 border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <Clock className="w-6 h-6 text-accent mb-2" />
                  <span className="text-xs font-bold text-white/70">24/7 Access</span>
                </div>
                <div className="bg-navy-light/40 border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <ShieldCheck className="w-6 h-6 text-accent mb-2" />
                  <span className="text-xs font-bold text-white/70">Secure Access</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-24 z-20">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/50 to-transparent rounded-2xl blur-lg opacity-30"></div>
                <div className="relative glass p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Book a Free Tour</h3>
                    <p className="text-white/60 text-sm">Fill out the form and our team will get back to you within 30 minutes.</p>
                  </div>
                  {/* Passing specific branch name to track ad traffic */}
                  <LeadForm branch={`Ads - ${data.name}`} />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Social Proof / Trusted By */}
      <section className="py-12 border-y border-white/5 bg-navy-dark/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-bold text-white/50 tracking-widest uppercase mb-8">Trusted by scaling teams and enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Using generic tech/company logos placeholders */}
             <div className="text-xl font-bold font-heading tracking-tight">TECHCORP</div>
             <div className="text-xl font-bold font-heading tracking-tight">GLOBALFIN</div>
             <div className="text-xl font-bold font-heading tracking-tight">STARTUP.IO</div>
             <div className="text-xl font-bold font-heading tracking-tight">NEXUS</div>
             <div className="text-xl font-bold font-heading tracking-tight">INNOVATE</div>
          </div>
        </div>
      </section>

      {/* Pricing / Options Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Plans for Every Need</h2>
            <p className="text-white/60">Choose the perfect workspace solution in {data.name}.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Hot Desk */}
            <div className="bg-navy-light/30 border border-white/10 p-8 rounded-2xl hover:border-accent/50 transition-colors flex flex-col">
              <h3 className="text-xl font-bold mb-2">Hot Desk</h3>
              <p className="text-white/60 text-sm mb-6">Perfect for freelancers needing flexible access.</p>
              <div className="text-3xl font-bold text-white mb-8">{data.pricing.hotDesk}</div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-accent" /> Any available desk</li>
                <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-accent" /> High-speed Wi-Fi</li>
                <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-accent" /> Pantry access</li>
              </ul>
            </div>

            {/* Dedicated Desk */}
            <div className="bg-navy-light/50 border-2 border-accent p-8 rounded-2xl relative shadow-[0_0_30px_rgba(242,156,31,0.15)] flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-navy text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Dedicated Desk</h3>
              <p className="text-white/60 text-sm mb-6">A permanent desk for your daily deep work.</p>
              <div className="text-3xl font-bold text-accent mb-8">{data.pricing.dedicatedDesk}</div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-accent" /> Your own reserved desk</li>
                <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-accent" /> Lockable storage</li>
                <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-accent" /> Meeting room credits</li>
              </ul>
            </div>

            {/* Private Cabin */}
            <div className="bg-navy-light/30 border border-white/10 p-8 rounded-2xl hover:border-accent/50 transition-colors flex flex-col">
              <h3 className="text-xl font-bold mb-2">Private Cabin</h3>
              <p className="text-white/60 text-sm mb-6">Secure, enclosed offices for growing teams.</p>
              <div className="text-3xl font-bold text-white mb-8">{data.pricing.privateCabin}</div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-accent" /> Fully furnished office</li>
                <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-accent" /> Custom branding</li>
                <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-accent" /> 24/7 Secure access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.galleryImages.slice(0, 4).map((src, i) => (
                 <div key={i} className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
                    <Image src={src} alt="Workspace Image" fill className="object-cover group-hover:scale-110 transition-transform duration-500" unoptimized />
                 </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}
