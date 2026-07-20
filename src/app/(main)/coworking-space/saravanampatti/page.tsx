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
  title: "Coworking Space in Saravanampatti, Coimbatore | WeeSpaces",
  description: "Looking for a premium coworking space near Saravanampatti? We provide dedicated desks, fast WiFi, and meeting rooms just minutes from CHIL SEZ IT Park.",
  canonicalPath: "/coworking-space/saravanampatti",
});

export default function SaravanampattiCoworkingPage() {
  const city = cities.coimbatore;
  const microLocation = city.microLocations?.find(m => m.slug === 'saravanampatti');

  return (
    <div className="relative">
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden bg-navy">
        <Image src="/images/branches/coimbatore/workspace1.jpg" alt="Coworking Space near Saravanampatti" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center py-20">
          <ScrollReveal className="lg:col-span-8">
            <div className="flex items-center gap-2 text-accent text-sm font-bold tracking-wider mb-6">
              <Link href="/coworking-space/coimbatore" className="hover:text-white transition-colors">COWORKING SPACE COIMBATORE</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="uppercase">SARAVANAMPATTI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Coworking Space Near Saravanampatti
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed font-light">
              Just a 15-minute drive from CHIL SEZ IT Park. Escape the traffic and work from our fully serviced workspace in Kalapatti.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {['Dedicated Desks from ₹4,999/mo', 'High-Speed Internet', 'Meeting Rooms', 'Zero Setup Costs'].map((perk, i) => (
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
                <LeadForm branch="Coimbatore" source="Saravanampatti Coworking Landing Page" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Why Choose WeeSpaces over Saravanampatti?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Saravanampatti is the IT hub of Coimbatore, but with growth comes congestion. Our Kalapatti hub gives you the best of both worlds.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                 <Clock className="w-6 h-6 text-accent" />
               </div>
               <h3 className="text-xl font-bold text-navy mb-3">Skip the Traffic</h3>
               <p className="text-gray-600">Avoid the peak hour bottlenecks on Saravanampatti-Thudiyalur road. Our Kalapatti location offers a much smoother commute.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                 <MapPin className="w-6 h-6 text-accent" />
               </div>
               <h3 className="text-xl font-bold text-navy mb-3">Strategic Location</h3>
               <p className="text-gray-600">Only 8km (15 mins) from CHIL SEZ, meaning you remain perfectly positioned to meet clients and partners in the IT corridor.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle className="w-6 h-6 text-accent" />
               </div>
               <h3 className="text-xl font-bold text-navy mb-3">Better Value</h3>
               <p className="text-gray-600">Get enterprise-grade amenities, including meeting rooms and high-speed internet, at a fraction of the cost of premium Saravanampatti locations.</p>
             </div>
          </div>
        </div>
      </section>
      
      <TrustLayer />
    </div>
  );
}
