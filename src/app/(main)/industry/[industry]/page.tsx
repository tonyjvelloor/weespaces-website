import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import { notFound } from 'next/navigation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import { Building, ShieldCheck, Briefcase, Zap, Network, ChevronRight, CheckCircle, Server, MonitorSmartphone, Headphones, Factory } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const industries = {
  'it-company': {
    name: 'IT & Tech',
    title: 'Enterprise Workspaces for IT & Tech Companies',
    description: 'High-density layouts, secure server rooms, and dual-ISP redundancy for seamless software development and IT operations.',
    icon: <MonitorSmartphone className="w-10 h-10 text-accent mb-6" />,
    features: [
      'Dual-ISP Redundancy (99.9% Uptime)',
      'High-density workstation layouts',
      'Private Server/OFC rooms',
      '24/7 Operations ready',
    ],
    bgImage: '/images/branches/coimbatore/exterior-tall.jpg'
  },
  'gcc': {
    name: 'Global Capability Centers (GCC)',
    title: 'Grade-A Infrastructure for Global Capability Centers',
    description: 'International design standards, premium boardrooms, and highly secure environments built for Fortune 500 GCCs.',
    icon: <Building className="w-10 h-10 text-accent mb-6" />,
    features: [
      'Compliance with international IT policies',
      'Executive boardrooms with premium AV',
      'Biometric & RFID access control',
      'Custom branding & white-labeling',
    ],
    bgImage: '/images/exterior.jpg'
  },
  'bpo': {
    name: 'BPO & Call Centers',
    title: '24/7 Scalable Operations for BPOs',
    description: 'Acoustic dampening, high-capacity cafeterias, and continuous power backup designed for round-the-clock call center operations.',
    icon: <Headphones className="w-10 h-10 text-accent mb-6" />,
    features: [
      'Acoustic treatments & sound dampening',
      'High-capacity power backup (100% DG)',
      'Large cafeteria & break areas',
      '24/7 access & security personnel',
    ],
    bgImage: '/images/branches/calicut/workspace2.jpg'
  },
  'manufacturing': {
    name: 'Manufacturing HQ',
    title: 'Corporate Headquarters for Manufacturing Firms',
    description: 'Expansive executive suites and easy highway access, providing a premium corporate front for your manufacturing operations.',
    icon: <Factory className="w-10 h-10 text-accent mb-6" />,
    features: [
      'Proximity to industrial corridors',
      'Executive suites & private cabins',
      'Premium client reception areas',
      'Ample parking for executives & guests',
    ],
    bgImage: '/images/branches/coimbatore/amenity2.jpg'
  }
};

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = industries[resolvedParams.industry as keyof typeof industries];
  
  if (!industry) return notFound();

  return constructMetadata({
    title: `${industry.title} | WeeSpaces Enterprise`,
    description: industry.description,
    canonicalPath: `/industry/${resolvedParams.industry}`,
    image: industry.bgImage,
  });
}

export function generateStaticParams() {
  return Object.keys(industries).map(industry => ({
    industry
  }));
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const industryId = resolvedParams.industry as keyof typeof industries;
  const industry = industries[industryId];
  
  if (!industry) return notFound();

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-40 bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={industry.bgImage} alt={industry.title} fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/95 to-navy"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Industry Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {industry.title}
            </h1>
            <p className="text-xl text-white/80 mb-12">
              {industry.description}
            </p>
            <div className="flex gap-4">
              <Link href="#lead-form" className="bg-accent text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-all">
                Discuss Your Requirements
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative" id="book-tour">
              <div className="bg-accent text-navy p-4 text-center font-bold text-lg">
                Request a Custom Proposal
              </div>
              <div className="p-6">
                <LeadForm source={`Industry - ${industry.name}`} hidePricing />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. INDUSTRY FEATURES */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <ScrollReveal>
                {industry.icon}
                <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Engineered for {industry.name}</h2>
                <p className="text-gray-600 text-lg mb-8">We understand that {industry.name.toLowerCase()} operations require specific infrastructure. Our custom build-outs ensure your workspace perfectly aligns with your operational needs.</p>
                <ul className="space-y-4">
                  {industry.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                      <span className="font-bold text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
             </ScrollReveal>
             <ScrollReveal direction="right">
                <div className="bg-navy p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]"></div>
                   <h3 className="text-2xl font-bold mb-4 relative z-10">Why Custom Managed Offices?</h3>
                   <ul className="space-y-6 relative z-10 mt-8">
                     <li>
                        <h4 className="font-bold text-accent mb-2">Zero CapEx</h4>
                        <p className="text-white/70 text-sm">Save millions by letting us handle the interior fit-out and IT infrastructure.</p>
                     </li>
                     <li>
                        <h4 className="font-bold text-accent mb-2">Rapid Deployment</h4>
                        <p className="text-white/70 text-sm">Move your team in 45-60 days compared to 6 months for a traditional lease.</p>
                     </li>
                     <li>
                        <h4 className="font-bold text-accent mb-2">End-to-End Management</h4>
                        <p className="text-white/70 text-sm">We handle housekeeping, security, and maintenance. You focus on growth.</p>
                     </li>
                   </ul>
                </div>
             </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. AVAILABILITY CTA */}
      <section className="py-24 bg-white text-center">
         <div className="max-w-3xl mx-auto px-6">
            <ScrollReveal>
               <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Available Hubs</h2>
               <p className="text-gray-600 text-lg mb-8">We can build and deploy {industry.name} workspaces across our major South Indian hubs.</p>
               <div className="flex flex-wrap justify-center gap-4">
                 <Link href="/enterprise-office/coimbatore" className="px-6 py-3 rounded-full border border-gray-200 font-bold text-navy hover:border-accent hover:text-accent transition-colors">Coimbatore</Link>
                 <Link href="/enterprise-office/kochi" className="px-6 py-3 rounded-full border border-gray-200 font-bold text-navy hover:border-accent hover:text-accent transition-colors">Kochi</Link>
                 <Link href="/enterprise-office/trivandrum" className="px-6 py-3 rounded-full border border-gray-200 font-bold text-navy hover:border-accent hover:text-accent transition-colors">Trivandrum</Link>
                 <Link href="/enterprise-office/calicut" className="px-6 py-3 rounded-full border border-gray-200 font-bold text-navy hover:border-accent hover:text-accent transition-colors">Calicut</Link>
               </div>
            </ScrollReveal>
         </div>
      </section>

    </div>
  );
}
