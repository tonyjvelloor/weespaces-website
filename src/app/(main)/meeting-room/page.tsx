import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { CheckCircle, Shield, Building, Clock, ChevronRight, Video, Wifi, Monitor } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import TrustLayer from '@/components/ui/TrustLayer';
import { cities } from '@/data/locations';

export const metadata: Metadata = constructMetadata({
  title: "Meeting Rooms & Conference Spaces | WeeSpaces",
  description: "Book premium meeting rooms, conference spaces, and boardrooms by the hour or day. Available in Kochi, Coimbatore, Trivandrum, and Calicut with high-speed WiFi and AV setup.",
  canonicalPath: "/meeting-room",
});

export default function MeetingRoomRootPage() {
  const features = [
    { title: "High-Speed WiFi", desc: "Enterprise-grade secure internet connectivity.", icon: <Wifi className="w-6 h-6 text-accent" /> },
    { title: "AV Equipment", desc: "HD displays, projectors, and video conferencing setups.", icon: <Monitor className="w-6 h-6 text-accent" /> },
    { title: "Video Conferencing", desc: "Zoom & Teams ready rooms for hybrid meetings.", icon: <Video className="w-6 h-6 text-accent" /> },
    { title: "On-site Support", desc: "Dedicated IT and admin staff to ensure a smooth meeting.", icon: <Shield className="w-6 h-6 text-accent" /> }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-40 bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/meeting-room-hero.jpg" alt="Premium Meeting Rooms" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/95 to-navy"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Book by the Hour or Day
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Meeting Spaces</span> for Impactful Conversations
            </h1>
            <p className="text-xl text-white/80 mb-12 font-light">
              Elevate your next client pitch, team training, or board meeting. Fully equipped, professional spaces available on demand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <a href="#book" className="bg-accent text-navy px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform text-center shadow-lg shadow-accent/20">
                 Book a Space
               </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="relative w-full max-w-md mx-auto lg:mr-0">
             <div className="bg-white rounded-3xl p-8 shadow-2xl relative z-10" id="book">
                <h3 className="text-2xl font-black text-navy mb-2">Reserve Your Room</h3>
                <p className="text-gray-500 mb-6 text-sm">Fill out the form below and our community manager will confirm your booking instantly.</p>
                <LeadForm source="Meeting Room Root Hero" />
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. FEATURES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Everything You Need for a Productive Meeting</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">We've thought of every detail so you can focus on the agenda.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
             {features.map((feature, idx) => (
               <ScrollReveal key={idx} delay={idx * 0.1}>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                 </div>
               </ScrollReveal>
             ))}
          </div>
        </div>
      </section>

      {/* 3. LOCATIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Find a Space Near You</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {Object.values(cities).map((city, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Link href={`/meeting-room/${city.slug}`} className="block group h-full">
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-accent transition-all h-full flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                       <span className="material-symbols-outlined text-gray-200 group-hover:text-accent group-hover:translate-x-1 transition-all">arrow_forward</span>
                    </div>
                    <h3 className="text-xl font-black text-navy mb-2 group-hover:text-accent transition-colors">{city.name}</h3>
                    <p className="text-gray-600 text-sm">Meeting & Conference Rooms available from ₹499/hr.</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      <TrustLayer />
    </div>
  );
}
