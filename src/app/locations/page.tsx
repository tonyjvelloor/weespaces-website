import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MouseGlowCard from '@/components/ui/MouseGlowCard';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Coworking Spaces Across South India | WeeSpaces',
  description: 'Explore WeeSpaces premium coworking and managed office locations in Coimbatore, Kochi, Trivandrum, and Calicut.',
};

export default function LocationsPage() {
  const locations = [
    { name: 'Coimbatore', href: '/coworking-space-coimbatore', description: 'Premium coworking near Tidel Park and Airport.' },
    { name: 'Kochi', href: '/coworking-space-kochi', description: 'Dynamic workspaces in the commercial heart of Kerala.' },
    { name: 'Trivandrum', href: '/coworking-space-trivandrum', description: 'Our headquarters near Technopark for enterprise teams.' },
    { name: 'Calicut (Kozhikode)', href: '/coworking-space-calicut', description: 'The Work Lounge for startups and freelancers.' }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 text-center max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Coworking Spaces Across <span className="text-accent">South India</span>
          </h1>
          <p className="text-lg text-white/70">
            Find the perfect workspace for your team in our rapidly expanding network across Kerala and Tamil Nadu.
          </p>
        </ScrollReveal>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <Link href={loc.href}>
                <MouseGlowCard className="glass p-8 rounded-3xl h-full border border-white/10 hover:border-accent/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                      <MapPin className="text-accent w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{loc.name}</h2>
                    <p className="text-white/70 mb-8">{loc.description}</p>
                  </div>
                  <div className="flex items-center text-accent font-bold group-hover:text-white transition-colors">
                    Explore Location <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </MouseGlowCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
