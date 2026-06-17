import Link from "next/link";

export function generateStaticParams() {
  return [
    { product: 'workstation' },
    { product: 'work-lounge' },
    { product: 'premium-cabin' },
    { product: 'executive-cabin' },
    { product: 'office-desk' },
    { product: 'individual-desk' },
  ];
}

export default async function ProductPage({ params }: { params: Promise<{ product: string }> }) {
  const resolvedParams = await params;
  const productName = resolvedParams.product.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent tracking-widest uppercase mb-6">
          Product
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">{productName}</h1>
        <p className="text-white/70 text-lg mb-10">Detailed specifications and pricing for the {productName}.</p>
        
        <div className="glass p-12 rounded-3xl mb-12">
          <span className="material-symbols-outlined text-6xl text-accent mb-6 animate-pulse">inventory_2</span>
          <h2 className="text-2xl font-bold mb-4">Detailed specs coming soon!</h2>
          <p className="text-white/70 mb-8">We are replacing the old template product cards with actual high-res photos and dimensions for the {productName}.</p>
          <Link href="/pricing" className="bg-accent hover:bg-accent-hover text-navy font-bold py-3 px-8 rounded-full transition-colors">
            View General Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
