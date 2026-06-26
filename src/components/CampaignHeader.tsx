import Image from 'next/image';

export default function CampaignHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo (Not wrapped in Link to prevent leak) */}
        <div className="flex items-center gap-2 cursor-default">
          <div className="w-10 h-10 relative">
            <Image src="/images/weespaces-logo.png" alt="WeeSpaces Logo" fill className="object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">WeeSpaces</span>
        </div>

        {/* Action CTA */}
        <div className="flex items-center gap-4">
          <a href="tel:+919207189111" className="hidden sm:inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium text-sm">
            📞 +91 92071 89111
          </a>
          <a href="#form-id" className="bg-accent text-navy px-6 py-2 rounded-lg font-bold text-sm hover:bg-accent-light transition-all duration-300 shadow-[0_0_15px_rgba(242,156,31,0.2)]">
            Get Pricing
          </a>
        </div>
      </div>
    </header>
  );
}
