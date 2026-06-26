import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, cities } from '@/data/locations';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import SEOFAQ from '@/components/SEOFAQ';
import { MapPin, Building, ChevronRight, CheckCircle, Star, Shield, Zap, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ service: string, city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  const city = cities[resolvedParams.city];
  
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

export default async function CityServicePage({ params }: { params: Promise<{ service: string, city: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.service);
  const city = cities[resolvedParams.city];
  
  if (!service || !city) return notFound();

  // Dynamically generate expanded FAQs
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
    },
    {
      question: `Is parking available at the ${city.name} locations?`,
      answer: `Yes, our major hubs in ${city.name} offer dedicated tenant parking and ample visitor parking. Check specific micro-locations for detailed parking capacity.`
    },
    {
      question: `Can I use this address for GST registration in Kerala?`,
      answer: `Absolutely. You can use our premium ${city.name} business addresses for official GST and company registration, subject to the chosen plan. We provide all necessary NOCs.`
    },
    {
      question: `Are meeting rooms available on demand?`,
      answer: `Yes, members get credits to book high-tech meeting rooms and conference spaces across any of our ${city.name} facilities.`
    },
    {
      question: `What are the typical office rental costs in ${city.name}?`,
      answer: city.localRentalCosts
    }
  ];

  return (
    <>
      {/* 1. HERO (CONVERSION) */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('${city.gallery[0]}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center py-20">
          <ScrollReveal className="lg:col-span-7">
            <div className="flex items-center gap-2 text-accent text-sm font-bold tracking-wider mb-6">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <Link href={`/${service.slug}`} className="hover:text-white transition-colors uppercase">{service.name}</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">{city.name}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premium {service.name} <span className="text-accent">in {city.name}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl leading-relaxed font-light">
              Skip the heavy deposits and setup delays. Move your team into a fully-managed workspace tomorrow.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 text-white">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold">{city.microLocations.length} Hubs in {city.name}</span>
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
                <LeadForm branch={city.name} source={`${service.name} ${city.name} Page`} hidePricing />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <h3 className="text-sm font-bold text-navy uppercase tracking-widest whitespace-nowrap">Trusted by 500+ Companies</h3>
            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /><span className="font-bold text-navy">4.9/5 Average Rating</span></div>
            <div className="flex items-center gap-8 opacity-60 grayscale">
              <div className="text-lg font-bold font-serif italic">TCS</div>
              <div className="text-lg font-bold font-serif italic">Cognizant</div>
              <div className="text-lg font-bold font-serif italic">Wipro</div>
              <div className="text-lg font-bold font-serif italic">KPMG</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORKSPACE HIGHLIGHTS */}
      <section className="py-20 bg-navy-light/10">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-navy">Why businesses in {city.name} choose us</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1} className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-gray-200 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Zero CapEx</h3>
              <p className="text-gray-600">Don't block your capital in interior fit-outs and deposits. Our spaces are ready to move in.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-gray-200 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Enterprise Security</h3>
              <p className="text-gray-600">Dedicated VLANs, biometric access, and 24/7 CCTV surveillance ensure your data and team are safe.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-gray-200 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-2">Inside Our {city.name} Hubs</h2>
              <p className="text-gray-600">Premium design that impresses your clients and inspires your team.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {city.gallery.slice(0, 4).map((image, idx) => (
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

      {/* 5. PRICING GUIDANCE */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-6">Flexible Plans. <span className="text-accent">Transparent Pricing.</span></h2>
            <p className="text-white/80 text-lg mb-8">We don't believe in hidden fees. Our all-inclusive pricing covers rent, high-speed internet, electricity, housekeeping, and premium coffee.</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <CheckCircle className="text-accent w-6 h-6 shrink-0" />
                <span><strong className="text-white">Hot Desks:</strong> Perfect for freelancers. Flexible daily/monthly passes.</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <CheckCircle className="text-accent w-6 h-6 shrink-0" />
                <span><strong className="text-white">Private Cabins:</strong> For teams of 3 to 20+. Lockable, secure, and fully furnished.</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <CheckCircle className="text-accent w-6 h-6 shrink-0" />
                <span><strong className="text-white">Managed Offices:</strong> Custom-built floors for 50+ employees with your branding.</span>
              </div>
            </div>
            <p className="text-accent font-bold">Want exact pricing for your team size?</p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="bg-white rounded-2xl p-8 text-navy shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Request a Quote</h3>
              <LeadForm branch={city.name} source={`Pricing Section - ${service.name} ${city.name}`} hidePricing />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. AMENITIES */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Everything You Need is Included</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Focus on growing your business while we take care of the operations.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['High-Speed Internet', '24/7 Access', 'Meeting Rooms', 'Cafeteria & Coffee', 'Housekeeping', 'Security & CCTV', 'Power Backup', 'Printing Services'].map((amenity, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 font-medium text-navy hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-accent" /> {amenity}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* BOTTOM 40%: BUILT FOR SEO & DISCOVERY                      */}
      {/* ======================================================== */}

      {/* 7. WHY THIS CITY & LOCAL GUIDE (SEO) */}
      <section className="py-20 bg-navy-light/5 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-6">Doing Business in {city.name}</h2>
            <div className="prose prose-lg text-gray-600">
              <p>{city.description}</p>
              <h3 className="text-xl font-bold text-navy mt-8 mb-4">The Business Ecosystem</h3>
              <p>{city.businessEcosystem}</p>
              <h3 className="text-xl font-bold text-navy mt-8 mb-4">Office Rental Costs in {city.name}</h3>
              <p>{city.localRentalCosts}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <h2 className="text-3xl font-bold text-navy mb-6">Transport & Connectivity</h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>{city.transportHubs}</p>
            </div>
            
            <h3 className="text-xl font-bold text-navy mb-4">Compliance & GST</h3>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-gray-600">
              <p className="mb-0">{city.gstRegistrationRules}</p>
              <Link href={`/virtual-office/${city.slug}`} className="text-accent font-bold text-sm mt-4 inline-block hover:underline">
                Need a Virtual Office for GST? →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. MICRO-LOCATIONS (INTERNAL LINKING) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Explore {service.name} Locations in {city.name}</h2>
            <p className="text-gray-600 max-w-2xl">Find a workspace perfectly situated near your clients and talent.</p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.microLocations.map((micro) => (
              <Link 
                key={micro.id} 
                href={`/${service.slug}/${city.slug}/${micro.slug}`}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-accent hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-navy group-hover:text-accent transition-colors">{micro.name}</h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-accent" /> {micro.landmarks[0]}
                </div>
              </Link>
            ))}
          </div>

          {city.landmarks.length > 0 && (
            <div className="mt-12 pt-12 border-t border-gray-100">
              <h3 className="text-lg font-bold text-navy mb-6">Search by Landmark</h3>
              <div className="flex flex-wrap gap-3">
                {city.landmarks.map(landmark => (
                  <Link 
                    key={landmark.slug}
                    href={`/${service.slug}/${city.slug}/${landmark.slug}`}
                    className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-accent hover:text-accent transition-colors"
                  >
                    Near {landmark.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 9. SEO FAQ */}
      <div className="bg-navy-light/5">
        <SEOFAQ 
          title={`Frequently Asked Questions`}
          subtitle={`Everything you need to know about ${service.name.toLowerCase()}s in ${city.name}.`}
          faqs={faqs}
          textColor="text-navy"
        />
      </div>

      {/* 10. RELATED INSIGHTS & INTERNAL LINKING CLUSTER */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-12 text-center border-b border-white/10 pb-6">Compare Workspaces & Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h4 className="text-accent font-bold uppercase tracking-wider text-sm mb-4">Other Services in {city.name}</h4>
              <ul className="space-y-3">
                <li><Link href={`/coworking-space/${city.slug}`} className="text-white/70 hover:text-white transition-colors">Coworking Space in {city.name}</Link></li>
                <li><Link href={`/managed-office/${city.slug}`} className="text-white/70 hover:text-white transition-colors">Managed Office in {city.name}</Link></li>
                <li><Link href={`/virtual-office/${city.slug}`} className="text-white/70 hover:text-white transition-colors">Virtual Office in {city.name}</Link></li>
                <li><Link href={`/meeting-room/${city.slug}`} className="text-white/70 hover:text-white transition-colors">Meeting Rooms in {city.name}</Link></li>
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
              <p className="text-white/60 text-sm mb-4 line-clamp-3">Understand local compliance, GST registration processes, and how securing a premium business address can accelerate your setup in Kerala and Tamil Nadu.</p>
              <Link href="/blog" className="text-sm font-bold text-accent hover:underline">Read the full guide →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
