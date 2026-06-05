import Link from "next/link";

export function generateStaticParams() {
  return [
    { service: 'conference-hall' },
    { service: 'coworking' },
  ];
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const resolvedParams = await params;
  const serviceName = resolvedParams.service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
          Service
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">{serviceName}</h1>
        <p className="text-white/70 text-lg mb-10">Premium {serviceName} solutions tailored for your business needs.</p>
        
        <div className="glass p-12 rounded-3xl mb-12">
          <span className="material-symbols-outlined text-6xl text-accent mb-6 animate-pulse">construction</span>
          <h2 className="text-2xl font-bold mb-4">Detailed page coming soon!</h2>
          <p className="text-white/70 mb-8">We are actively gathering the specific media assets and pricing details for the {serviceName} page.</p>
          <Link href="/contact" className="bg-accent hover:bg-accent-hover text-navy font-bold py-3 px-8 rounded-full transition-colors">
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
