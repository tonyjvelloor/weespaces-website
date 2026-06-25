"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MapPin, Clock, Phone, Mail, Handshake } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  const locationMatch = pathname?.match(/^\/landing\/(.+)$/);
  const locationId = locationMatch ? locationMatch[1] : null;

  // Show a minimal footer on landing pages
  if (pathname?.startsWith('/landing')) {
    return (
      <footer className="bg-navy-dark border-t border-white/10 pt-12 pb-8">
        <div className="container mx-auto px-6 text-center">
          {locationId === 'coimbatore' && (
            <div className="mb-8 p-6 bg-navy-light/30 border border-white/10 rounded-2xl max-w-2xl mx-auto text-center flex flex-col items-center gap-4 shadow-lg">
              <div className="bg-navy p-3 rounded-xl border border-white/10 shrink-0 inline-flex">
                <MapPin className="text-accent w-8 h-8" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">WeeSpaces Coimbatore</h4>
                <p className="text-white/70 text-sm mb-1">123, XYZ Tower, Avinashi Road,</p>
                <p className="text-white/70 text-sm mb-3">Coimbatore, Tamil Nadu - 641014</p>
                <p className="text-accent text-sm font-bold flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" /> Mon–Sat, 8AM–8PM | 24/7 access for private cabin members
                </p>
              </div>
            </div>
          )}
          <div className="text-xs text-white/50">
            <p>&copy; {new Date().getFullYear()} WeeSpaces. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
              <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-navy-dark border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="WeeSpaces Logo" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
              <span className="text-xl font-bold">WeeSpaces</span>
            </div>
            <h3 className="text-accent text-xs font-bold tracking-widest uppercase mb-4">Work. Connect. Grow.</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premium coworking spaces designed for productivity, collaboration, and business growth across Kerala and Tamil Nadu.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-accent"><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/coworking-space-coimbatore" className="hover:text-accent transition-colors">Coworking Space Coimbatore</Link></li>
              <li><Link href="/coworking-space-kochi" className="hover:text-accent transition-colors">Coworking Space Kochi</Link></li>
              <li><Link href="/coworking-space-trivandrum" className="hover:text-accent transition-colors">Coworking Space Trivandrum</Link></li>
              <li><Link href="/coworking-space-calicut" className="hover:text-accent transition-colors">Coworking Space Calicut</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Services</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/pricing" className="hover:text-accent transition-colors">Private Offices</Link></li>
              <li><Link href="/managed-office-space-coimbatore" className="hover:text-accent transition-colors">Managed Offices</Link></li>
              <li><Link href="/virtual-office-in-kerala" className="hover:text-accent transition-colors">Virtual Offices</Link></li>
              <li><Link href="/pricing" className="hover:text-accent transition-colors">Dedicated Desks</Link></li>
              <li><Link href="/pricing" className="hover:text-accent transition-colors">Meeting Rooms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/70 mb-6">
              <li className="flex items-start gap-3">
                <Phone className="text-accent w-5 h-5" />
                <a href="tel:+919207189111" className="hover:text-accent transition-colors">+91 92071 89111</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-accent w-5 h-5" />
                <a href="mailto:corporate@weespaces.in" className="hover:text-accent transition-colors">corporate@weespaces.in</a>
              </li>
              <li className="flex items-start gap-3 pt-4 border-t border-white/10 mt-4">
                <Handshake className="text-accent w-5 h-5" />
                <Link href="/investors/" className="hover:text-accent transition-colors font-bold text-accent">Investors & Partners</Link>
              </li>
            </ul>
            <div className="flex items-center gap-4 flex-wrap">
              <a href="https://www.instagram.com/weespaces.coworking/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="Instagram">
                <span className="text-lg font-bold">ig</span>
              </a>
              <a href="https://www.linkedin.com/company/wee-spaces-coworking/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="LinkedIn">
                <span className="text-lg font-bold">in</span>
              </a>
              <a href="https://www.facebook.com/weespaces/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.youtube.com/@weespaces" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/></svg>
              </a>
              <a href="https://x.com/weespaces" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://wa.me/919207189111" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-[#25D366]" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
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
