import { Metadata } from 'next';
import { constructMetadata } from '@/utils/metadata';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import { MapPin, Building, ShieldCheck, Briefcase, Zap, Network, ChevronRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: "Enterprise Office Solutions | Managed Campuses & Custom Offices",
  description: "Custom-built managed offices and enterprise campuses for 100+ member teams in South India. Experience enterprise-grade security, scalability, and premium infrastructure.",
  canonicalPath: "/enterprise-office"
});

export default function EnterpriseOfficeHub() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-40 bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/exterior.jpg" alt="WeeSpaces Enterprise Campus" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/95 to-navy"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Built for Scale. Managed for Growth.
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
              Custom-Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Enterprise Offices</span> for 100+ Member Teams
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              From dedicated floors to build-to-suit standalone campuses. We design, build, and operate your regional headquarters in South India while you focus on your core business.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="#lead-form" className="bg-accent text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-all">
                Talk to an Enterprise Expert
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. ENTERPRISE VALUE PROP */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">The New Standard for Enterprise Real Estate</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Escape the rigidity of traditional commercial leasing and the high CapEx of interior fit-outs.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Building />, title: "Zero CapEx", desc: "We absorb the entire cost of interior design, HVAC, IT infrastructure, and furniture." },
              { icon: <ShieldCheck />, title: "Enterprise Security", desc: "Dedicated networks, biometric access control, and 24/7 CCTV surveillance tailored to your IT policies." },
              { icon: <Zap />, title: "Rapid Deployment", desc: "Move your 100+ member team into a fully branded, custom-built office in just 45-60 days." },
              { icon: <Briefcase />, title: "Fully Managed", desc: "Our facility management team handles housekeeping, IT support, pantry, and utilities." },
              { icon: <Network />, title: "Scalable Infrastructure", desc: "Easily add more desks or take over additional floors as your team expands rapidly." },
              { icon: <MapPin />, title: "Prime Corridors", desc: "Located near massive talent pools like Tidel Park Coimbatore and Infopark Kochi." }
            ].map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COIMBATORE FOCUS */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden lg:block">
          <Image src="/images/branches/coimbatore/exterior-tall.jpg" alt="Coimbatore Enterprise Hub" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs mb-6 uppercase tracking-wider">
                Flagship Location
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Coimbatore Enterprise Campus</h2>
              <p className="text-xl text-white/70 mb-8">
                Strategically positioned near Tidel Park and Coimbatore International Airport. Our flagship facility is engineered to support massive scale for IT, GCC, and Manufacturing teams.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full"></span> <strong>100 to 500+ Seat Capacity</strong> available immediately</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full"></span> Exclusive dedicated floors with private elevators</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full"></span> Custom branding (Reception, Layout, Brand Colors)</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full"></span> Extensive parking for two-wheelers and cars</li>
              </ul>
              
              <Link href="/enterprise-office/coimbatore" className="inline-flex items-center gap-2 text-accent font-bold hover:text-white transition-colors">
                Explore Coimbatore Enterprise Solutions <ChevronRight className="w-5 h-5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY SOLUTIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Tailored For Your Industry</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Different industries have wildly different operational needs. We build workspaces that conform to your specific workflows.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { id: 'it-company', title: "IT & Tech", desc: "High-density layouts, secure server rooms, and dual-ISP redundancy." },
              { id: 'gcc', title: "Global Capability Centers", desc: "Grade-A infrastructure, premium boardrooms, and international design standards." },
              { id: 'bpo', title: "BPO & Call Centers", desc: "24/7 operations, acoustic dampening, and high-capacity cafeterias." },
              { id: 'manufacturing', title: "Manufacturing HQ", desc: "Executive suites, expansive meeting rooms, and easy highway access." }
            ].map((industry, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Link href={`/industry/${industry.id}`} className="block h-full">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all group h-full">
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-accent transition-colors">{industry.title}</h3>
                    <p className="text-gray-600 text-sm">{industry.desc}</p>
                    <div className="mt-6 text-accent font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEAD FORM CTA */}
      <section className="py-24 bg-gray-50/50" id="lead-form">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Discuss Your Enterprise Requirements</h2>
              <p className="text-gray-500">Provide your team size and preferred location. Our enterprise leasing directors will contact you within 2 hours.</p>
            </div>
            <LeadForm defaultService="managed-office" />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
