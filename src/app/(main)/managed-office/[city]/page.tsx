import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Clock, Building, Shield, ArrowRight } from 'lucide-react';
import { cities } from '@/data/locations';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import TrustLayer from '@/components/ui/TrustLayer';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const city = cities[resolvedParams.city];
  
  if (!city) return notFound();

  return constructMetadata({
    title: `Managed Office Space in ${city.name} | Custom Build-outs | WeeSpaces`,
    description: `Enterprise-grade managed office space in ${city.name}. Zero CapEx, fully customized layouts, and end-to-end facility management for teams of 20+.`,
    canonicalPath: `/managed-office/${city.slug}`,
    image: city.gallery[0],
  });
}

export function generateStaticParams() {
  return Object.values(cities).map(city => ({
    city: city.slug
  }));
}

export default async function ManagedOfficeCityPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const city = cities[resolvedParams.city];

  if (!city) {
    return notFound();
  }

  return (
    <div className="relative">
      {/* 1. HERO (CONVERSION) */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-navy">
        <Image src={city.gallery[0]} alt={`Managed Office in ${city.name}`} fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center py-20">
          <ScrollReveal className="lg:col-span-8">
            <div className="flex items-center gap-2 text-accent text-sm font-bold tracking-wider mb-6">
              <Link href="/managed-office" className="hover:text-white transition-colors">MANAGED OFFICE</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">{city.name}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Custom Headquarters in {city.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed font-light">
              We design, build, and operate enterprise-grade private offices in {city.name}'s best commercial properties. Move your team in 45 days.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {['Zero Upfront CapEx', 'Custom Branding & Layouts', 'End-to-End IT & Operations'].map((perk, i) => (
                <div key={i} className="glass rounded-xl px-4 py-3 border border-accent/20 flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold">{perk}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-4 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative">
              <div className="bg-accent text-navy p-4 text-center font-bold text-lg">
                Request a Proposal
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-6 text-center">Tell us your team size and preferred area in {city.name}.</p>
                <LeadForm branch={city.name} source={`Managed Office ${city.name} Landing Page`} hidePricing />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. LOCAL EXPERTISE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Deep Real Estate Expertise in {city.name}</h2>
               <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                 Finding the right A-grade commercial property in {city.name} is complex. We simplify it.
               </p>
             </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image src={city.gallery[1] || city.gallery[0]} alt={`${city.name} Commercial Real Estate`} fill className="object-cover" />
              </div>
            </ScrollReveal>
            <div className="space-y-8">
              <ScrollReveal delay={0.1}>
                <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-3">
                   <span className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">1</span>
                   Prime Property Sourcing
                </h3>
                <p className="text-gray-600 ml-13 pl-13">We leverage our network in {city.name} to find off-market commercial spaces in top micro-locations like {city.microLocations?.map(m => m.name).join(', ') || 'CBDs and IT Parks'}.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-3">
                   <span className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">2</span>
                   Local Compliance & Approvals
                </h3>
                <p className="text-gray-600 ml-13 pl-13">Our team handles all local municipal approvals, fire safety compliance, and property documentation required in {city.name}.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-3">
                   <span className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">3</span>
                   Rapid Execution Network
                </h3>
                <p className="text-gray-600 ml-13 pl-13">With our vetted contractors and supply chain in {city.name}, we guarantee a 45-60 day turnaround from design approval to move-in.</p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <TrustLayer />
    </div>
  );
}
