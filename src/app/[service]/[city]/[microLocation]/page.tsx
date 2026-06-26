import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, cities } from '@/data/locations';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import { MapPin, Building, Briefcase, ChevronRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { service: string, city: string, microLocation: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.service);
  const city = cities[params.city];
  
  if (!service || !city) return notFound();
  
  const microLoc = city.microLocations.find(m => m.slug === params.microLocation) || city.landmarks.find(l => l.slug === params.microLocation);
  
  if (!microLoc) return notFound();

  const isLandmark = 'name' in microLoc && !('intent' in microLoc);
  const locationName = microLoc.name;

  const title = `${service.name} ${isLandmark ? '' : 'in'} ${locationName}, ${city.name} | WeeSpaces`;
  const description = `Looking for ${service.name.toLowerCase()} ${isLandmark ? '' : 'in'} ${locationName}, ${city.name}? Premium workspaces, 0 setup cost, flexible terms. Perfect for ${!isLandmark ? (microLoc as any).intent : 'startups and businesses'}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${service.slug}/${city.slug}/${microLoc.slug}`,
    }
  };
}

export function generateStaticParams() {
  const paths: { service: string, city: string, microLocation: string }[] = [];
  
  // To avoid building 500 pages all at once while testing, we'll only generate a few combinations initially 
  // or allow Next.js to build them on demand (fallback: true / blocking).
  // For Phase 1, we will generate the primary combinations.
  services.forEach(service => {
    Object.values(cities).forEach(city => {
      city.microLocations.forEach(micro => {
        paths.push({
          service: service.slug,
          city: city.slug,
          microLocation: micro.slug
        });
      });
      city.landmarks.forEach(landmark => {
        paths.push({
          service: service.slug,
          city: city.slug,
          microLocation: landmark.slug
        });
      });
    });
  });
  
  return paths;
}

export default function MicroLocationPage({ params }: { params: { service: string, city: string, microLocation: string } }) {
  const service = services.find(s => s.slug === params.service);
  const city = cities[params.city];
  
  if (!service || !city) return notFound();
  
  const microLoc = city.microLocations.find(m => m.slug === params.microLocation);
  const landmark = city.landmarks.find(l => l.slug === params.microLocation);
  
  const locationObj = microLoc || landmark;
  if (!locationObj) return notFound();

  const isLandmark = !!landmark;
  const locationName = locationObj.name;
  
  const faqs = [
    {
      question: `Is parking available at the ${service.name.toLowerCase()} ${isLandmark ? '' : 'in'} ${locationName}?`,
      answer: microLoc ? `Yes, this location features: ${microLoc.parking}. We ensure ample space for you and your visitors.` : `Yes, we provide dedicated parking facilities for our members near ${locationName}.`
    },
    {
      question: `How far is the nearest transit from ${locationName}?`,
      answer: microLoc ? `The workspace is highly accessible. Nearby transit includes: ${microLoc.transit}.` : `It is conveniently located near major transit routes in ${city.name}.`
    },
    {
      question: `Can I register my company for GST using this ${locationName} address?`,
      answer: `Absolutely. You can use our premium address in ${locationName}, ${city.name} for official GST and company registration, subject to the chosen plan.`
    },
    {
      question: `What companies are nearby in ${locationName}?`,
      answer: microLoc ? `The area is a bustling business hub. You'll be near ${microLoc.nearbyCompanies.join(', ')} and other major enterprises.` : `You'll be surrounded by top companies and startups operating in ${city.name}.`
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
              <Link href={`/${service.slug}/${city.slug}`} className="hover:text-white transition-colors uppercase">{city.name}</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">{locationName}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium {service.name} <span className="text-accent">{isLandmark ? '' : 'in'} {locationName}</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              {service.shortDesc} Located perfectly in {city.name}, offering flexible scaling and premium amenities for your team.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{isLandmark ? `Near ${locationName}` : `${locationName}, ${city.name}`}</span>
              </div>
              <div className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 text-white/80">
                <Building className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Plug & Play Setup</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <LeadForm branch={`${city.name} - ${locationName}`} source={`${service.name} Page`} />
          </ScrollReveal>
        </div>
      </section>

      {/* Local Info Section */}
      <section className="py-20 bg-navy-dark border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <ScrollReveal direction="left">
            <h2 className="text-3xl font-bold mb-6">Why Choose {locationName}?</h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              {isLandmark 
                ? `Positioning your office near ${locationName} gives you an immediate strategic advantage in ${city.name}. Enjoy premium connectivity and access to top talent.`
                : `Our ${service.name.toLowerCase()} in ${locationName} is custom-built for ${microLoc?.intent || 'modern businesses'}. Join a vibrant ecosystem of growing companies.`
              }
            </p>
            
            {microLoc && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-accent mb-2 uppercase text-xs tracking-wider">Transit & Accessibility</h4>
                  <p className="text-white/80">{microLoc.transit}</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2 uppercase text-xs tracking-wider">Nearby Landmarks</h4>
                  <p className="text-white/80">{microLoc.landmarks.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2 uppercase text-xs tracking-wider">Corporate Neighbors</h4>
                  <p className="text-white/80">{microLoc.nearbyCompanies.join(', ')}</p>
                </div>
              </div>
            )}
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-white/80">High-speed enterprise internet</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-white/80">Professional reception & mail handling</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-white/80">{microLoc ? microLoc.parking : 'Ample parking space'}</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-white/80">Access to meeting rooms & boardrooms</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-white/80">Unlimited tea, coffee & pantry access</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-white/80">24/7 security & CCTV surveillance</span></li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEO FAQ */}
      <SEOFAQ 
        title={`Questions About ${service.name} ${isLandmark ? 'Near' : 'in'} ${locationName}`}
        subtitle="Everything you need to know before moving in."
        faqs={faqs}
      />
    </>
  );
}
