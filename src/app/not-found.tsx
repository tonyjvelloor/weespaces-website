import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="text-accent font-heading text-9xl font-bold mb-4 drop-shadow-[0_0_30px_rgba(242,156,31,0.5)]">404</div>
      <h2 className="text-3xl font-heading font-bold mb-6">Space Not Found</h2>
      <p className="text-white/70 max-w-md mx-auto mb-10 leading-relaxed">
        It looks like we are still building this section of the new WeeSpaces website. 
        Most pages (like About and Contact) are still under construction!
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/" className="glass hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition-colors border border-white/20">
          Go Home
        </Link>
        <Link href="/pricing" className="bg-accent hover:bg-accent-hover text-navy font-bold py-3 px-8 rounded-full transition-colors">
          View Pricing
        </Link>
      </div>
    </div>
  );
}
