import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, cities } from '@/data/locations';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import { MapPin, Building, ChevronRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: { service: string, city: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.service);
  const city = cities[params.city];
  
  if (!service || !city) return notFound();

  return {
    title: `${service.name} in ${city.name} | Premium Workspaces | WeeSpaces`,
    description: `Looking for ${service.name.toLowerCase()} in ${city.name}? Premium workspaces, 0 setup cost, flexible terms. ${city.description}`,
    alternates: {
      canonical: `/${service.slug}/${city.slug}`,
    }
  };
}

export function generateStaticParams() {
  const paths: { service: string, city: string }[] = [];
  
  services.forEach(service => {
    Object.values(cities).forEach(city => {
      paths.push({
        service: service.slug,
        city: city.slug
      });
    });
  });
  
  return paths;
}

export default function CityServicePage({ params }: { params: { service: string, city: string } }) {
  const service = services.find(s => s.slug === params.service);
  const city = cities[params.city];
  
  if (!service || !city) return notFound();

  const faqs = [
    {
      question: `Why choose a ${service.name.toLowerCase()} in ${city.name}?`,
      answer: `${city.description} WeeSpaces provides premium ${service.name.toLowerCase()} options tailored for startups, SMEs, and enterprises across the best locations in the city.`
    },
    {
      question: `Can I scale my team size later?`,
      answer: `Yes, all our plans in ${city.name} are highly flexible. You can easily upgrade from a single desk to a private office or scale up to a larger managed office as your team grows.`
    },
    {
      question: `What amenities are included in ${city.name}?`,
      answer: `All our ${city.name} locations come fully equipped with high-speed internet, ergonomic furniture, pantry access, 24/7 security, and professional reception services.`
    }
  ];

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-[url('/images/branches/kochi/reception.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center py-20">
          <ScrollReveal className="lg:col-span-7">
            <div className="flex items-center gap-2 text-accent text-sm font-bold tracking-wider mb-6">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <Link href={`/${service.slug}`} className="hover:text-white transition-colors uppercase">{service.name}</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">{city.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium {service.name} <span className="text-accent">in {city.name}</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              {service.shortDesc} {city.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{city.microLocations.length} Hubs in {city.name}</span>
              </div>
              <div className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 text-white/80">
                <Building className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Plug & Play Setup</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <LeadForm branch={city.name} source={`${service.name} ${city.name} Page`} />
          </ScrollReveal>
        </div>
      </section>

      {/* Micro-Locations Grid */}
      <section className="py-20 bg-navy-dark border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Find {service.name} in <span className="text-accent">{city.name}</span></h2>
            <p className="text-white/70 max-w-2xl mx-auto">Browse our premium workspaces across top localities and commercial hubs in the city.</p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.microLocations.map((micro) => (
              <Link 
                key={micro.id} 
                href={`/${service.slug}/${city.slug}/${micro.slug}`}
                className="glass rounded-xl p-6 border border-white/10 hover:border-accent hover:bg-navy-light/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{micro.name}</h3>
                  <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-white/60 mb-4 line-clamp-2">{micro.intent}</p>
                <div className="text-xs font-medium text-white/40 uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-accent" /> {micro.landmarks[0]}
                </div>
              </Link>
            ))}
          </div>

          {city.landmarks.length > 0 && (
            <div className="mt-16 border-t border-white/10 pt-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Search by Landmark</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {city.landmarks.map(landmark => (
                  <Link 
                    key={landmark.slug}
                    href={`/${service.slug}/${city.slug}/${landmark.slug}`}
                    className="glass px-6 py-3 rounded-full border border-white/10 hover:border-accent text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent"
                  >
                    Near {landmark.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Insights (AEO) */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-8 text-center border-b border-white/10 pb-6">Related Insights & Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog" className="glass p-6 rounded-xl border border-white/10 hover:border-accent group">
            <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">Guide</span>
            <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors mb-3">How to set up a {service.name.toLowerCase()} in {city.name}</h4>
            <p className="text-white/60 text-sm line-clamp-2">A complete guide to finding and setting up your workspace in the commercial hubs of {city.name}.</p>
          </Link>
          <Link href="/blog" className="glass p-6 rounded-xl border border-white/10 hover:border-accent group">
            <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">Business</span>
            <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors mb-3">GST Registration rules for businesses in {city.name}</h4>
            <p className="text-white/60 text-sm line-clamp-2">Understand local compliance and how our workspaces can help you register seamlessly.</p>
          </Link>
          <Link href="/blog" className="glass p-6 rounded-xl border border-white/10 hover:border-accent group">
            <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">Networking</span>
            <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors mb-3">Top business hubs and communities in {city.name}</h4>
            <p className="text-white/60 text-sm line-clamp-2">Discover where the top startups and enterprises in {city.name} are clustering.</p>
          </Link>
        </div>
      </section>

      {/* SEO FAQ */}
      <SEOFAQ 
        title={`Questions About ${service.name} in ${city.name}`}
        subtitle="Everything you need to know before moving in."
        faqs={faqs}
      />
    </>
  );
}
