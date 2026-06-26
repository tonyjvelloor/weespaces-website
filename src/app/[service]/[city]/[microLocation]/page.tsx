import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, cities } from '@/data/locations';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import { MapPin, Building, Briefcase, ChevronRight, CheckCircle, Star, Shield, Zap, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ service: string, city: string, microLocation: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  const city = cities[resolvedParams.city];
  
  if (!service || !city) return notFound();
  
  const microLoc = city.microLocations.find(m => m.slug === resolvedParams.microLocation) || city.landmarks.find(l => l.slug === resolvedParams.microLocation);
  
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

export default async function MicroLocationPage({ params }: { params: Promise<{ service: string, city: string, microLocation: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  const city = cities[resolvedParams.city];
  
  if (!service || !city) return notFound();
  
  const microLoc = city.microLocations.find(m => m.slug === resolvedParams.microLocation);
  const landmark = city.landmarks.find(l => l.slug === resolvedParams.microLocation);
  
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
    },
    {
      question: `Can I access meeting rooms at this location?`,
      answer: `Yes, members have access to fully equipped meeting and conference rooms at ${locationName}, which can be booked on demand via our app.`
    }
  ];

  return (
    <>
      {/* 1. HERO (CONVERSION) */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-[url('/images/branches/kochi/reception.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center py-20">
          <ScrollReveal className="lg:col-span-7">
            <div className="flex items-center gap-2 text-accent text-sm font-bold tracking-wider mb-6">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <Link href={`/${service.slug}/${city.slug}`} className="hover:text-white transition-colors uppercase">{city.name}</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">{locationName}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premium {service.name} <br/>
              <span className="text-accent">{isLandmark ? 'Near' : 'in'} {locationName}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl leading-relaxed font-light">
              {service.shortDesc} Located perfectly in {locationName}, offering flexible scaling and premium amenities for your team.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 text-white">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold">{isLandmark ? `Near ${locationName}` : `${locationName}, ${city.name}`}</span>
              </div>
              <div className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 text-white">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold">0 Setup Cost</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative">
              <div className="bg-accent text-navy p-4 text-center font-bold text-lg">
                Get Your Custom Quote
              </div>
              <div className="p-6">
                <LeadForm branch={`${city.name} - ${locationName}`} source={`${service.name} Page`} hidePricing />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale">
            <h3 className="text-sm font-bold text-navy uppercase tracking-widest whitespace-nowrap">Trusted by 500+ Companies</h3>
            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /><span className="font-bold text-navy">4.9/5 Average Rating</span></div>
            <div className="text-lg font-bold font-serif italic">TCS</div>
            <div className="text-lg font-bold font-serif italic">Cognizant</div>
            <div className="text-lg font-bold font-serif italic">Wipro</div>
            <div className="text-lg font-bold font-serif italic">KPMG</div>
          </div>
        </div>
      </section>

      {/* 3. WORKSPACE HIGHLIGHTS */}
      <section className="py-20 bg-navy-light/10">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-navy">Why businesses in {locationName} choose us</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Zero CapEx</h3>
              <p className="text-gray-600">Don't block your capital in interior fit-outs and deposits. Our spaces are ready to move in.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Enterprise Security</h3>
              <p className="text-gray-600">Dedicated VLANs, biometric access, and 24/7 CCTV surveillance ensure your data and team are safe.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Flexible Scaling</h3>
              <p className="text-gray-600">Start with 5 desks, expand to 50 next month. Our flexible terms mean you only pay for what you use.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. PHOTO GALLERY */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-2">Inside Our {locationName} Facility</h2>
              <p className="text-gray-600">Premium design that impresses your clients and inspires your team.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(microLoc?.gallery || city.gallery).slice(0, 4).map((image, idx) => (
              <div 
                key={idx} 
                className={`${idx === 0 ? 'col-span-2 row-span-2' : ''} aspect-square bg-gray-200 rounded-2xl overflow-hidden relative group`}
              >
                 <div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                   style={{ backgroundImage: `url('${image}')` }}
                 ></div>
              </div>
            ))}
            <div className="aspect-square bg-accent/10 rounded-2xl flex flex-col items-center justify-center p-6 text-center text-navy font-bold cursor-pointer hover:bg-accent hover:text-white transition-colors">
               <ImageIcon className="w-8 h-8 mb-2" />
               <span>View All Photos</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AMENITIES */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-6">Everything You Need is Included</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">Focus on growing your business while we take care of the operations at our {locationName} workspace.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-gray-600 font-medium">High-speed enterprise internet</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-gray-600 font-medium">Professional reception & mail handling</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-gray-600 font-medium">{microLoc ? microLoc.parking : 'Ample parking space'}</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-gray-600 font-medium">Access to meeting rooms & boardrooms</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-gray-600 font-medium">Unlimited tea, coffee & pantry access</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-gray-600 font-medium">24/7 security & CCTV surveillance</span></li>
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="bg-navy rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
               <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
               <h3 className="text-2xl font-bold mb-6">Want exact pricing for your team?</h3>
               <p className="text-white/80 mb-8">We offer highly flexible plans from single hot desks to custom-built 100+ seater managed offices.</p>
               <Link href="/book-tour" className="inline-block bg-accent text-navy px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors w-full text-center">
                 Request a Quote
               </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======================================================== */}
      {/* BOTTOM 40%: BUILT FOR SEO & DISCOVERY                      */}
      {/* ======================================================== */}

      {/* 6. WHY THIS LOCALITY (SEO) */}
      <section className="py-20 bg-navy-light/5 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <ScrollReveal direction="left">
            <h2 className="text-3xl font-bold text-navy mb-6">Why Choose {locationName}?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {isLandmark 
                ? `Positioning your office near ${locationName} gives you an immediate strategic advantage in ${city.name}. Enjoy premium connectivity and access to top talent.`
                : `Our ${service.name.toLowerCase()} in ${locationName} is custom-built for ${microLoc?.intent || 'modern businesses'}. Join a vibrant ecosystem of growing companies.`
              }
            </p>
            
            {microLoc && (
              <div className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div>
                  <h4 className="font-bold text-navy mb-2 flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Transit & Accessibility</h4>
                  <p className="text-gray-600 text-sm">{microLoc.transit}</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-navy mb-2 flex items-center gap-2"><Building className="w-4 h-4 text-accent" /> Nearby Landmarks</h4>
                  <p className="text-gray-600 text-sm">{microLoc.landmarks.join(', ')}</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-navy mb-2 flex items-center gap-2"><Briefcase className="w-4 h-4 text-accent" /> Corporate Neighbors</h4>
                  <p className="text-gray-600 text-sm">{microLoc.nearbyCompanies.join(', ')}</p>
                </div>
              </div>
            )}
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <h2 className="text-3xl font-bold text-navy mb-6">Nearby Areas in {city.name}</h2>
            <div className="grid grid-cols-2 gap-4">
               {city.microLocations.filter(m => m.slug !== locationObj.slug).slice(0, 8).map(micro => (
                 <Link 
                   key={micro.id}
                   href={`/${service.slug}/${city.slug}/${micro.slug}`}
                   className="bg-white p-4 rounded-xl border border-gray-100 text-navy hover:border-accent hover:shadow-md transition-all text-sm font-bold flex items-center justify-between"
                 >
                   {micro.name}
                   <ChevronRight className="w-4 h-4 text-gray-400" />
                 </Link>
               ))}
            </div>
            
            <div className="mt-8 bg-navy p-6 rounded-xl text-white">
               <h3 className="text-xl font-bold mb-2">Need GST Registration?</h3>
               <p className="text-white/80 text-sm mb-4">You can use our premium {locationName} address to register your company and GST locally.</p>
               <Link href={`/virtual-office/${city.slug}`} className="text-accent text-sm font-bold hover:underline">Learn about Virtual Offices →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. SEO FAQ */}
      <div className="bg-white border-b border-gray-100">
        <SEOFAQ 
          title={`Frequently Asked Questions`}
          subtitle={`Everything you need to know about our workspaces ${isLandmark ? 'near' : 'in'} ${locationName}.`}
          faqs={faqs}
          textColor="text-navy"
        />
      </div>

      {/* 8. RELATED INSIGHTS & INTERNAL LINKING CLUSTER */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-12 text-center border-b border-white/10 pb-6">Compare Workspaces & Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h4 className="text-accent font-bold uppercase tracking-wider text-sm mb-4">Other Services here</h4>
              <ul className="space-y-3">
                <li><Link href={`/coworking-space/${city.slug}/${locationObj.slug}`} className="text-white/70 hover:text-white transition-colors">Coworking Space in {locationName}</Link></li>
                <li><Link href={`/managed-office/${city.slug}/${locationObj.slug}`} className="text-white/70 hover:text-white transition-colors">Managed Office in {locationName}</Link></li>
                <li><Link href={`/virtual-office/${city.slug}/${locationObj.slug}`} className="text-white/70 hover:text-white transition-colors">Virtual Office in {locationName}</Link></li>
                <li><Link href={`/meeting-room/${city.slug}/${locationObj.slug}`} className="text-white/70 hover:text-white transition-colors">Meeting Rooms in {locationName}</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-accent font-bold uppercase tracking-wider text-sm mb-4">Compare Workspaces</h4>
              <ul className="space-y-3">
                <li><Link href="/compare/coworking-vs-traditional-office" className="text-white/70 hover:text-white transition-colors">Coworking vs Traditional</Link></li>
                <li><Link href="/compare/managed-office-vs-leasing" className="text-white/70 hover:text-white transition-colors">Managed Office vs Leasing</Link></li>
                <li><Link href="/compare/private-office-vs-shared-office" className="text-white/70 hover:text-white transition-colors">Private vs Shared Office</Link></li>
                <li><Link href="/compare/virtual-office-vs-physical-office" className="text-white/70 hover:text-white transition-colors">Virtual vs Physical Office</Link></li>
              </ul>
            </div>
            <div className="lg:col-span-2 glass p-6 rounded-xl border border-white/10">
              <h4 className="text-accent font-bold uppercase tracking-wider text-sm mb-4">Business Guide</h4>
              <h5 className="text-lg font-bold text-white mb-2">How to register your company in {city.name}</h5>
              <p className="text-white/60 text-sm mb-4 line-clamp-3">Understand local compliance, GST registration processes, and how securing a premium business address can accelerate your setup.</p>
              <Link href="/blog" className="text-sm font-bold text-accent hover:underline">Read the full guide →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
