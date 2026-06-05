import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/logo.png" alt="WeeSpaces Logo" width={48} height={48} className="w-12 h-12 rounded-full object-cover" unoptimized />
              <span className="text-xl font-bold">WeeSpaces</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premium coworking spaces designed for productivity, collaboration, and business growth across Kerala and Tamil Nadu.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Services</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/services/coworking" className="hover:text-accent transition-colors">Co-working Space</Link></li>
              <li><Link href="/services/conference-hall" className="hover:text-accent transition-colors">Conference Hall</Link></li>
              <li><Link href="/services/virtual-office" className="hover:text-accent transition-colors">Virtual Office</Link></li>
              <li><Link href="/services/incubation" className="hover:text-accent transition-colors">Startup Incubation</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading flex items-center gap-2">
              4 Active Branches <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
            </h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/locations/trivandrum" className="hover:text-accent transition-colors">Trivandrum (Head Office)</Link></li>
              <li><Link href="/locations/ernakulam" className="hover:text-accent transition-colors">Ernakulam</Link></li>
              <li><Link href="/locations/calicut" className="hover:text-accent transition-colors">Calicut (The Work Lounge)</Link></li>
              <li><Link href="/locations/coimbatore" className="hover:text-accent transition-colors flex items-center gap-2">Coimbatore <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full border border-accent/30 font-bold tracking-wide">NEW</span></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/70 mb-6">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent text-[20px]">call</span>
                <a href="tel:+919207189111" className="hover:text-accent transition-colors">+91 92071 89111</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent text-[20px]">mail</span>
                <a href="mailto:corporate@weespaces.co.in" className="hover:text-accent transition-colors">corporate@weespaces.co.in</a>
              </li>
              <li className="flex items-start gap-3 pt-4 border-t border-white/10 mt-4">
                <span className="material-symbols-outlined text-accent text-[20px]">handshake</span>
                <Link href="/investors/" className="hover:text-accent transition-colors font-bold text-accent">Investors & Partners</Link>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="Facebook">
                <span className="text-lg font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="Instagram">
                <span className="text-lg font-bold">ig</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="LinkedIn">
                <span className="text-lg font-bold">in</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} WeeSpaces. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
