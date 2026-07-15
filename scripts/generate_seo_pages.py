import os

locations = [
  { 'slug': 'near-tidel-park-coimbatore', 'name': 'Near Tidel Park, Coimbatore', 'description': 'Premium coworking space near Tidel Park. Perfect for IT companies and startups looking for world-class infrastructure minutes away from the main tech hub.' },
  { 'slug': 'peelamedu', 'name': 'Peelamedu, Coimbatore', 'description': 'Top-rated coworking space in Peelamedu, Coimbatore. Surrounded by premier institutions and rapid transit, offering the best workspace for modern teams.' },
  { 'slug': 'avinashi-road', 'name': 'Avinashi Road, Coimbatore', 'description': 'Flexible office space on Avinashi Road, the commercial artery of Coimbatore. High visibility, great connectivity, and premium amenities.' },
  { 'slug': 'saravanampatti', 'name': 'Saravanampatti, Coimbatore', 'description': 'Managed workspace in Saravanampatti, the IT corridor of Coimbatore. State-of-the-art facilities for growing tech companies.' },
  { 'slug': 'gandhipuram', 'name': 'Gandhipuram, Coimbatore', 'description': 'Centrally located coworking space near Gandhipuram. Unmatched accessibility from all parts of Coimbatore with enterprise-grade amenities.' }
]

def get_template(loc):
    return f"""import {{ Metadata }} from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import {{ MapPin, CheckCircle }} from 'lucide-react';

export const metadata: Metadata = {{
  title: 'Coworking Space {loc['name']} | WeeSpaces',
  description: '{loc['description']}',
}};

export default function SEOPage() {{
  return (
    <div className="pt-24 pb-20">
      <section className="relative py-20 overflow-hidden bg-navy-dark border-b border-white/10">
        <div className="absolute inset-0 bg-grid bg-center opacity-10 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-8">
              <MapPin className="w-4 h-4" />
              Location Spotlight
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Coworking Space <span className="text-accent">{loc['name']}</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              {loc['description']} Join the WeeSpaces community and scale your business without the overhead of traditional office leases.
            </p>
            <Link href="/book-tour" className="bg-accent text-navy font-bold py-3 px-8 rounded-xl hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(242,156,31,0.3)]">
              Book a Tour
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <h2 className="text-3xl font-bold mb-6">Why choose WeeSpaces {loc['name']}?</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-white/90">
              <CheckCircle className="text-accent w-5 h-5" /> Enterprise-grade High Speed WiFi
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <CheckCircle className="text-accent w-5 h-5" /> Fully furnished, ergonomic workspaces
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <CheckCircle className="text-accent w-5 h-5" /> 24/7 Security and Access Control
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <CheckCircle className="text-accent w-5 h-5" /> Unlimited Tea & Coffee
            </li>
          </ul>
        </ScrollReveal>
        <ScrollReveal direction="right" className="bg-navy-light/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-6">Reserve your space</h3>
          <LeadForm branch="coimbatore" source="SEO: {loc['slug']}" />
        </ScrollReveal>
      </section>
    </div>
  );
}}
"""

for loc in locations:
    dir_path = os.path.join('src', 'app', f"coworking-space-{loc['slug']}")
    os.makedirs(dir_path, exist_ok=True)
    with open(os.path.join(dir_path, 'page.tsx'), 'w') as f:
        f.write(get_template(loc))
    print(f"Created {loc['slug']}")

