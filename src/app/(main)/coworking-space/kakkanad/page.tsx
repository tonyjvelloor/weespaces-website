import { Metadata } from 'next';
import { cities } from '@/data/locations';
import { constructMetadata } from '@/utils/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ChevronRight, CheckCircle, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import TrustLayer from '@/components/ui/TrustLayer';

export const metadata: Metadata = constructMetadata({
  title: "Coworking Space near Kakkanad, Kochi | WeeSpaces",
  description: "Looking for a premium coworking space near Kakkanad and Infopark? We provide dedicated desks, fast WiFi, and meeting rooms right on MG Road.",
  canonicalPath: "/coworking-space/kakkanad",
});

export default function KakkanadCoworkingPage() {
  const city = cities.kochi;
  const microLocation = city.microLocations?.find(m => m.slug === 'kakkanad');

  return (
    <div className="relative">
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden bg-navy">
        <Image src="/images/branches/kochi/workspace1.jpg" alt="Coworking Space near Kakkanad" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center py-20">
          <ScrollReveal className="lg:col-span-8">
            <div className="flex items-center gap-2 text-accent text-sm font-bold tracking-wider mb-6">
              <Link href="/coworking-space/kochi" className="hover:text-white transition-colors">COWORKING SPACE KOCHI</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">KAKKANAD</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Coworking Space Near Kakkanad
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed font-light">
              Don't get stuck in Infopark traffic. Establish your team at our premium MG Road headquarters with fast, direct connectivity to Kakkanad and SmartCity.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {['Dedicated Desks from ₹4,999/mo', 'High-Speed Internet', 'Metro Connectivity', 'Zero Setup Costs'].map((perk, i) => (
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
                Book a Tour Today
              </div>
              <div className="p-6">
                <LeadForm branch="Kochi" source="Kakkanad Coworking Landing Page" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Why Choose WeeSpaces over Kakkanad?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Kakkanad is heavily congested and distant from the rest of the city. Our CBD location on MG Road offers incredible advantages for you and your clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                 <Clock className="w-6 h-6 text-accent" />
               </div>
               <h3 className="text-xl font-bold text-navy mb-3">Superior Connectivity</h3>
               <p className="text-gray-600">Just a 5-minute walk from MG Road Metro Station. Travel to Edappally, Kadavanthra, and Vyttila in minutes without the Infopark gridlock.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                 <MapPin className="w-6 h-6 text-accent" />
               </div>
               <h3 className="text-xl font-bold text-navy mb-3">Client Convenience</h3>
               <p className="text-gray-600">Clients prefer meeting in the Central Business District. Our location is near Marine Drive and Panampilly Nagar, projecting a prestigious corporate image.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle className="w-6 h-6 text-accent" />
               </div>
               <h3 className="text-xl font-bold text-navy mb-3">Better Value</h3>
               <p className="text-gray-600">Enjoy premium, enterprise-grade facilities including meeting rooms and lounges at highly competitive rates compared to Kakkanad's IT parks.</p>
             </div>
          </div>
        </div>
      </section>
      
      <TrustLayer />
    </div>
  );
}
