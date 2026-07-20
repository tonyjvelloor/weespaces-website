import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Video, Wifi, Monitor, Users } from 'lucide-react';
import { cities } from '@/data/locations';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import TrustLayer from '@/components/ui/TrustLayer';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const city = cities[resolvedParams.city];
  
  if (!city) return notFound();

  return constructMetadata({
    title: `Meeting Rooms & Conference Spaces in ${city.name} | WeeSpaces`,
    description: `Book premium meeting rooms and boardrooms in ${city.name} by the hour or day. Equipped with high-speed WiFi, AV setups, and on-site support.`,
    canonicalPath: `/meeting-room/${city.slug}`,
    image: city.gallery[0],
  });
}

export function generateStaticParams() {
  return Object.values(cities).map(city => ({
    city: city.slug
  }));
}

export default async function MeetingRoomCityPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const city = cities[resolvedParams.city];

  if (!city) {
    return notFound();
  }

  const roomTypes = [
    { title: "Interview Rooms", capacity: "2-4 people", desc: "Perfect for 1-on-1s, small interviews, or focused deep work sessions.", icon: <Users className="w-6 h-6 text-accent" /> },
    { title: "Conference Rooms", capacity: "6-10 people", desc: "Ideal for team offsites, client pitches, and collaborative workshops.", icon: <Monitor className="w-6 h-6 text-accent" /> },
    { title: "Boardrooms", capacity: "12-20 people", desc: "Premium spaces designed for executive meetings and major presentations.", icon: <Video className="w-6 h-6 text-accent" /> },
    { title: "Training Rooms", capacity: "20-40 people", desc: "Configurable layouts for corporate training and seminars.", icon: <Users className="w-6 h-6 text-accent" /> }
  ];

  return (
    <div className="relative">
      {/* 1. HERO (CONVERSION) */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-navy">
        <Image src={city.gallery[0]} alt={`Meeting Room in ${city.name}`} fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center py-20">
          <ScrollReveal className="lg:col-span-8">
            <div className="flex items-center gap-2 text-accent text-sm font-bold tracking-wider mb-6">
              <Link href="/meeting-room" className="hover:text-white transition-colors">MEETING ROOMS</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">{city.name}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Meeting Spaces in {city.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed font-light">
              Impress your clients and empower your team in our fully equipped, professional conference rooms. Available by the hour or day.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {['From ₹499/hour', 'High-Speed WiFi', 'AV Equipment Included', 'Free Tea & Coffee'].map((perk, i) => (
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
                Check Availability
              </div>
              <div className="p-6">
                <LeadForm branch={city.name} source={`Meeting Room ${city.name} Landing Page`} hidePricing />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. ROOM TYPES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Spaces for Every Occasion</h2>
               <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                 From intimate interviews to large-scale board meetings, we have the perfect environment in {city.name}.
               </p>
             </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomTypes.map((room, idx) => (
               <ScrollReveal key={idx} delay={idx * 0.1}>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      {room.icon}
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-1">{room.title}</h3>
                    <p className="text-accent text-sm font-bold mb-3">Capacity: {room.capacity}</p>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">{room.desc}</p>
                 </div>
               </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <TrustLayer />
    </div>
  );
}
