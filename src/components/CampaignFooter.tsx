import Link from 'next/link';

export default function CampaignFooter() {
  return (
    <footer className="bg-navy-dark border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-white/40 text-sm mb-4">
          © {new Date().getFullYear()} WeeSpaces. All rights reserved.
        </p>
        <div className="flex justify-center items-center gap-4 text-xs text-white/30">
          <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
