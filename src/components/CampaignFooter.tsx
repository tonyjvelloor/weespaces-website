import Link from 'next/link';

export default function CampaignFooter() {
  return (
    <footer className="bg-navy-dark border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-white/40 text-sm mb-2">
          © {new Date().getFullYear()} WeeSpaces. All rights reserved.
        </p>
        <p className="text-white/60 text-xs mb-4 flex items-center justify-center gap-1.5">
          <span>Growth Engineered &amp; Designed by</span>
          <a 
            href="https://www.thebrandmaniacs.online/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-accent font-semibold hover:underline transition-all inline-flex items-center gap-0.5 group"
          >
            <span>The Brand Maniacs</span>
            <span className="material-symbols-outlined text-[14px] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">north_east</span>
          </a>
        </p>
        <div className="flex justify-center items-center gap-4 text-xs text-white/30">
          <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
          <span>|</span>
          <Link href="/legal/virtual-office-compliance" className="hover:text-white/60 transition-colors">Virtual Office Compliance</Link>
        </div>
      </div>
    </footer>
  );
}
