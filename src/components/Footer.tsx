"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MapPin, Clock } from 'lucide-react';
import { track } from '@/lib/tracking';
import { cities, services } from '@/data/locations';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Footer() {
  const pathname = usePathname();

  const locationMatch = pathname?.match(/^\/landing\/(.+)$/);
  const locationId = locationMatch ? locationMatch[1] : null;

  // Show a minimal footer on landing pages
  if (pathname?.startsWith('/landing')) {
    return (
      <footer className="bg-navy-dark text-white border-t border-white/10 pt-12 pb-8">
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
            <p className="mb-4 text-white/40 italic">
              Disclaimer: WeeSpaces is a premium workspace provider. We assist with documentation (NOC and rent agreement) but are not a government entity.
            </p>
            <p>&copy; {new Date().getFullYear()} WeeSpaces. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
              <Link href="/legal/virtual-office-compliance" className="hover:text-accent transition-colors">Virtual Office Compliance</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-navy-dark text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="WeeSpaces Logo" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
              <span className="text-xl font-bold">WeeSpaces</span>
            </div>
            <h3 className="text-accent text-xs font-bold tracking-widest uppercase mb-4">Work. Connect. Grow.</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6" itemProp="description">
              WeeSpaces is a premium managed workspace provider operating coworking spaces, private offices, managed offices, and virtual offices across Coimbatore, Kochi, Trivandrum, and Calicut.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a href="https://www.instagram.com/weespaces.coworking" target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/wee-spaces-coworking" target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.facebook.com/WeeSpaces.Coworking/" target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://x.com/weespacescowork" target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://pin.it/1MsCMuC00" target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/></svg>
              </a>
              <a href="https://www.quora.com/profile/Weespacescoworkingads" target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="Quora">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.97 0C5.352 0 0 5.372 0 12c0 5.37 3.518 9.92 8.398 11.458.745-.989 1.488-2.072 2.163-3.084-.336-.084-.668-.198-.992-.326C4.856 18.236 2.054 14.545 2.054 12c0-4.996 4.343-9.524 9.916-9.524 5.57 0 9.918 4.528 9.918 9.524 0 3.738-2.055 6.843-5.048 8.441a10.02 10.02 0 0 1-2.923 1.002c-1.397-1.748-2.723-3.52-3.79-5.32 1.332-1.018 2.215-2.616 2.215-4.407 0-3.056-2.523-5.545-5.63-5.545-3.107 0-5.63 2.489-5.63 5.545 0 2.222 1.337 4.14 3.238 5.011 1.082 1.83 2.413 3.627 3.823 5.39.296.37.597.74.903 1.109C15.01 23.774 18.293 22.025 20.61 19.3 22.756 16.782 24 13.568 24 12c0-6.628-5.352-12-11.97-12zm-3.235 6.884c-1.773 0-3.216 1.455-3.216 3.245 0 1.79 1.443 3.245 3.216 3.245 1.774 0 3.216-1.455 3.216-3.245 0-1.79-1.442-3.245-3.216-3.245z"/></svg>
              </a>
              <a href="https://www.reddit.com/user/Impossible-Eye9095/" target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-navy transition-all" aria-label="Reddit">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.561-1.25-1.25-1.25zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
              </a>
              <WhatsAppButton 
                className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-[#25D366]" 
                contextOverride={{ service: 'Footer Inquiry' }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </WhatsAppButton>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Solutions</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/private-office" className="hover:text-accent transition-colors">Private Office</Link></li>
              <li><Link href="/virtual-office" className="hover:text-accent transition-colors">Virtual Office</Link></li>
              <li><Link href="/managed-office" className="hover:text-accent transition-colors">Managed Office</Link></li>
              <li><Link href="/meeting-room" className="hover:text-accent transition-colors">Meeting Room</Link></li>
              <li><Link href="/coworking-space" className="hover:text-accent transition-colors">Coworking Space</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Knowledge & Research</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/compare/virtual-office-vs-physical-office" className="hover:text-accent transition-colors">Workspace Comparison</Link></li>
              <li><Link href="/blog/workspace-cost-index-2026" className="hover:text-accent transition-colors">Cost Index 2026</Link></li>
              <li><Link href="/knowledge/workspace-economics" className="hover:text-accent transition-colors">Workspace Economics</Link></li>
              <li><Link href="/calculator" className="hover:text-accent transition-colors">Cost Calculator</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Coworking & Office Guides</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Company</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link href="/investors" className="hover:text-accent transition-colors text-accent/90">Investment Opportunity</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Top Locations</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/coworking-space/kochi" className="hover:text-accent transition-colors">Coworking Space in Kochi</Link></li>
              <li><Link href="/coworking-space/trivandrum" className="hover:text-accent transition-colors">Coworking Space in Trivandrum</Link></li>
              <li><Link href="/coworking-space/coimbatore" className="hover:text-accent transition-colors">Coworking Space in Coimbatore</Link></li>
              <li><Link href="/virtual-office/kochi" className="hover:text-accent transition-colors">Virtual Office in Kochi</Link></li>
              <li><Link href="/private-office/trivandrum" className="hover:text-accent transition-colors">Private Office in Trivandrum</Link></li>
            </ul>
          </div>
        </div>

        {/* SEO Locations Matrix */}
        <div className="border-t border-white/10 pt-12 pb-4 mt-8">
          <h4 className="text-2xl font-bold mb-10 font-heading text-center">Explore Our Network</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {Object.values(cities).map((city) => (
              <div key={city.id} className="space-y-8">
                <div>
                  <Link href={`/coworking-space/${city.slug}`} className="text-xl font-bold text-accent hover:text-white transition-colors mb-4 block border-b border-white/10 pb-2">
                    {city.name}
                  </Link>
                  <div className="space-y-6 mt-4">
                    {services.map((service) => {
                      const validNeighborhoods = city.microLocations.filter(ml => ml.services && ml.services.includes(service.slug));
                      
                      return (
                        <div key={service.id}>
                          <Link href={`/${service.slug}/${city.slug}`} className="text-white font-semibold text-sm mb-2 hover:text-accent transition-colors block">
                            {service.name} in {city.name}
                          </Link>
                          <ul className="space-y-2 text-xs text-white/60">
                            {validNeighborhoods.map((neighborhood) => (
                              <li key={neighborhood.slug}>
                                <Link 
                                  href={`/${service.slug}/${city.slug}/${neighborhood.slug}`}
                                  className="hover:text-accent transition-colors block"
                                >
                                  {service.name} in {neighborhood.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-16 text-xs text-white/50">
          <p className="mb-6 text-white/40 italic leading-relaxed text-center max-w-4xl mx-auto">
            Disclaimer: WeeSpaces is a premium workspace provider. We assist with documentation (NOC and rent agreement) but are not a government entity.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p>&copy; {new Date().getFullYear()} WeeSpaces. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
              <Link href="/legal/virtual-office-compliance" className="hover:text-accent transition-colors">Virtual Office Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
