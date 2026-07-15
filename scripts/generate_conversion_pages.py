import os

locations = [
  { 'slug': 'managed-office-space-coimbatore', 'name': 'Managed Office Space in Coimbatore', 'description': 'Custom-built enterprise workspace and managed office space in Coimbatore. Tailored for IT companies and large teams.' },
  { 'slug': 'coworking-space-for-startups-coimbatore', 'name': 'Coworking Space for Startups in Coimbatore', 'description': 'Vibrant coworking space for startups in Coimbatore. Flexible seating, vibrant community, and startup-friendly amenities.' }
]

def get_template(loc):
    return f"""import {{ Metadata }} from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/LeadForm';
import {{ Users, CheckCircle, TrendingUp }} from 'lucide-react';

export const metadata: Metadata = {{
  title: '{loc['name']} | WeeSpaces',
  description: '{loc['description']}',
}};

export default function ConversionPage() {{
  return (
    <div className="pt-24 pb-20">
      <section className="relative py-20 overflow-hidden bg-navy-dark border-b border-white/10">
        <div className="absolute inset-0 bg-grid bg-center opacity-10 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-8">
              <Users className="w-4 h-4" />
              Tailored Workspaces
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-accent">{loc['name']}</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              {loc['description']} Join the WeeSpaces community and let us handle the operations while you focus on scaling.
            </p>
            <Link href="/book-tour" className="bg-accent text-navy font-bold py-3 px-8 rounded-xl hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(242,156,31,0.3)]">
              Consult an Expert
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <h2 className="text-3xl font-bold mb-6">Built for Scale and Agility</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-white/90">
              <CheckCircle className="text-accent w-5 h-5" /> 100% Customization Available
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <CheckCircle className="text-accent w-5 h-5" /> Dedicated High-Bandwidth Internet
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <CheckCircle className="text-accent w-5 h-5" /> Zero Capex, Only Opex
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <CheckCircle className="text-accent w-5 h-5" /> HR & Admin Support Staff
            </li>
          </ul>
        </ScrollReveal>
        <ScrollReveal direction="right" className="bg-navy-light/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-6">Get a Custom Quote</h3>
          <LeadForm branch="coimbatore" source="SEO: {loc['slug']}" />
        </ScrollReveal>
      </section>
    </div>
  );
}}
"""

for loc in locations:
    dir_path = os.path.join('src', 'app', loc['slug'])
    os.makedirs(dir_path, exist_ok=True)
    with open(os.path.join(dir_path, 'page.tsx'), 'w') as f:
        f.write(get_template(loc))
    print(f"Created {loc['slug']}")

