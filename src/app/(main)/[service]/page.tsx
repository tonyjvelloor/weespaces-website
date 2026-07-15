import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import { notFound } from 'next/navigation';
import { services, cities } from '@/data/locations';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import { MapPin, Building, ChevronRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  
  if (!service) return notFound();

  return constructMetadata({
    title: `${service.name} Space | Secure Team Cabins & Flexible Workspaces`,
    description: `Find premium ${service.name.toLowerCase()} across South India. ${service.shortDesc} Zero setup costs, flexible terms, and premium amenities.`,
    canonicalPath: `/${service.slug}`,
  });
}

export function generateStaticParams() {
  return services
    .filter(service => service.slug !== 'virtual-office')
    .map(service => ({
      service: service.slug
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  
  if (!service) return notFound();

  const faqs = [
    {
      question: `What makes WeeSpaces ${service.name.toLowerCase()} different?`,
      answer: `WeeSpaces focuses on premium, ready-to-use environments. Unlike traditional offices with heavy deposits and setup delays, our ${service.name.toLowerCase()} options are plug-and-play with enterprise-grade amenities.`
    },
    {
      question: `In which cities do you offer ${service.name.toLowerCase()}?`,
      answer: `We currently offer premium ${service.name.toLowerCase()} in Kochi, Trivandrum, Calicut, and Coimbatore, with multiple micro-locations in each city.`
    },
    {
      question: `Can I customize my ${service.name.toLowerCase()}?`,
      answer: `Yes, depending on the scale of your team, we offer customized branding, layout adjustments, and dedicated IT infrastructure to match your specific requirements.`
    }
  ];

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/branches/kochi/reception.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center py-20">
          <ScrollReveal className="lg:col-span-7">
            <div className="flex items-center gap-2 text-accent text-sm font-bold tracking-wider mb-6">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">{service.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium {service.name} <span className="text-accent">in South India</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              {service.shortDesc} Skip the heavy deposits and setup delays. Move your team in tomorrow.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">4 Major Cities</span>
              </div>
              <div className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 text-white/80">
                <Building className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Fully Managed Setup</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <LeadForm branch="" source={`${service.name} Main Page`} />
          </ScrollReveal>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-navy-dark border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your <span className="text-accent">City</span></h2>
            <p className="text-white/70 max-w-2xl mx-auto">Explore our {service.name.toLowerCase()} locations across prime business hubs.</p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(cities).map((city) => (
              <Link 
                key={city.id} 
                href={`/${service.slug}/${city.slug}`}
                className="glass rounded-xl p-8 border border-white/10 hover:border-accent hover:bg-navy-light/30 transition-all text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
                <p className="text-sm text-white/60 mb-6">Premium Workspaces</p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-accent group-hover:text-white transition-colors">
                  View Locations <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO FAQ */}
      <SEOFAQ 
        title={`Questions About ${service.name}`}
        subtitle="Everything you need to know before moving in."
        faqs={faqs}
      />
    </>
  );
}
