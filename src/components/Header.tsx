"use client";

import Link from 'next/link';
import { ChevronDown, ArrowRight, Menu, X, Search, Building2, Briefcase, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import GlobalSearch from './GlobalSearch';
import { Button } from './ui/Button';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global hotkey listener for the header to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Hide the navigation header completely on ad landing pages to maximize conversion
  if (pathname?.startsWith('/landing')) {
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-white h-[96px] flex items-center shadow-[0_4px_24px_rgb(0,0,0,0.02)]">
        <div className="container mx-auto px-8 flex items-center justify-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="WeeSpaces Logo" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
            <span className="text-2xl font-bold tracking-tight text-navy">WeeSpaces</span>
          </Link>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex flex-col justify-center h-[96px] bg-white ${isScrolled ? 'shadow-[0_4px_24px_rgb(0,0,0,0.04)] border-b border-gray-100' : 'border-b border-transparent'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-full shadow-sm group-hover:shadow-md transition-shadow">
              <Image src="/images/logo.png" alt="WeeSpaces Logo" fill className="object-cover" />
            </div>
            <span className="text-xl lg:text-[22px] font-bold tracking-tight text-navy">WeeSpaces</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 text-[15px] font-semibold text-navy/70">
            <div className="group relative h-[96px] flex items-center">
              <button className="flex items-center gap-1.5 hover:text-navy transition-colors py-2">
                Workspace <ChevronDown className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:-rotate-180 transition-all duration-300" />
              </button>
              <div className="absolute top-[85%] -left-6 pt-6 w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col p-4 relative before:absolute before:-top-2 before:left-12 before:w-4 before:h-4 before:bg-white before:rotate-45 before:border-l before:border-t before:border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="px-3 pt-2 pb-3 text-[11px] font-bold uppercase tracking-wider text-navy/40 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" /> By Format
                      </div>
                      <Link href="/coworking-space" className="flex items-center px-3 py-2.5 hover:bg-gray-50/80 text-navy font-semibold rounded-xl transition-colors">Coworking</Link>
                      <Link href="/private-office" className="flex items-center px-3 py-2.5 hover:bg-gray-50/80 text-navy font-semibold rounded-xl transition-colors">Private Office</Link>
                      <Link href="/managed-office" className="flex items-center justify-between px-3 py-2.5 hover:bg-gray-50/80 text-navy font-semibold rounded-xl transition-colors">
                        Managed
                        <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-bold">HOT</span>
                      </Link>
                    </div>
                    <div>
                      <div className="px-3 pt-2 pb-3 text-[11px] font-bold uppercase tracking-wider text-navy/40 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" /> By Intent
                      </div>
                      <Link href="/enterprise" className="flex flex-col px-3 py-2.5 hover:bg-gray-50/80 text-navy font-semibold rounded-xl transition-colors">
                        <span>Enterprise GCCs</span>
                        <span className="text-[11px] text-navy/40 font-normal mt-0.5">Custom built HQs</span>
                      </Link>
                      <Link href="/virtual-office" className="flex flex-col px-3 py-2.5 hover:bg-gray-50/80 text-navy font-semibold rounded-xl transition-colors">
                        <span>Virtual Office</span>
                        <span className="text-[11px] text-navy/40 font-normal mt-0.5">GST & Registration</span>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 px-3">
                    <Link href="/compare" className="flex items-center justify-between group/link text-[13px] font-bold text-navy hover:text-accent transition-colors">
                      Compare all workspace types
                      <ArrowRight className="w-4 h-4 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative h-[96px] flex items-center">
              <button className="flex items-center gap-1.5 hover:text-navy transition-colors py-2">
                Locations <ChevronDown className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:-rotate-180 transition-all duration-300" />
              </button>
              <div className="absolute top-[85%] -left-6 pt-6 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col p-4 relative before:absolute before:-top-2 before:left-12 before:w-4 before:h-4 before:bg-white before:rotate-45 before:border-l before:border-t before:border-gray-100">
                  <div className="px-3 pt-2 pb-3 text-[11px] font-bold uppercase tracking-wider text-navy/40 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> Kerala Network
                  </div>
                  <Link href="/coworking-space/kochi" className="flex items-center px-3 py-2.5 hover:bg-gray-50/80 text-navy font-semibold rounded-xl transition-colors">Kochi</Link>
                  <Link href="/coworking-space/trivandrum" className="flex items-center px-3 py-2.5 hover:bg-gray-50/80 text-navy font-semibold rounded-xl transition-colors">Trivandrum</Link>
                  <Link href="/coworking-space/calicut" className="flex items-center px-3 py-2.5 hover:bg-gray-50/80 text-navy font-semibold rounded-xl transition-colors">Calicut</Link>
                  
                  <div className="px-3 pt-4 pb-3 text-[11px] font-bold uppercase tracking-wider text-navy/40 border-t border-gray-100 mt-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Tamil Nadu
                  </div>
                  <Link href="/coworking-space/coimbatore" className="flex items-center justify-between px-3 py-2.5 hover:bg-gray-50/80 text-navy font-semibold rounded-xl transition-colors">
                    Coimbatore <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-bold">NEW</span>
                  </Link>

                  <div className="mt-4 pt-4 border-t border-gray-100 px-3">
                    <Link href="/locations" className="flex items-center justify-between group/link text-[13px] font-bold text-accent hover:text-navy transition-colors">
                      View full network map
                      <ArrowRight className="w-4 h-4 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/pricing" className="h-[96px] flex items-center hover:text-navy transition-colors">Pricing</Link>
            <Link href="/compare" className="h-[96px] flex items-center hover:text-navy transition-colors">Compare</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-between w-[200px] px-4 py-2.5 bg-gray-50/80 hover:bg-gray-100 border border-gray-200/60 rounded-full text-navy/50 hover:text-navy transition-all mr-2"
            >
              <span className="flex items-center gap-2 text-[14px] font-medium"><Search className="w-4 h-4" /> Quick Search</span>
              <span className="text-[10px] font-bold border border-gray-200 bg-white rounded px-1.5 py-0.5 text-navy/40">⌘K</span>
            </button>
            <Button variant="primary" size="md" href="/book-tour" className="px-6 font-bold shadow-sm">
              Find Workspace
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden z-50">
            <button onClick={() => setIsSearchOpen(true)} className="text-navy/70 hover:text-navy p-2 transition-colors">
              <Search className="w-6 h-6" />
            </button>
            <button 
              className="text-navy/70 hover:text-navy p-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[96px] bg-white z-40 overflow-y-auto pb-24 shadow-2xl"
            >
              <div className="container mx-auto px-6 pt-8 flex flex-col gap-2">
                <div className="flex flex-col text-lg font-bold text-navy">
                  <Link href="/locations" className="py-4 border-b border-gray-100 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                    Locations <ArrowRight className="w-5 h-5 opacity-30" />
                  </Link>
                  <Link href="/coworking-space" className="py-4 border-b border-gray-100 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                    Coworking <ArrowRight className="w-5 h-5 opacity-30" />
                  </Link>
                  <Link href="/private-office" className="py-4 border-b border-gray-100 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                    Private Office <ArrowRight className="w-5 h-5 opacity-30" />
                  </Link>
                  <Link href="/virtual-office" className="py-4 border-b border-gray-100 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                    Virtual Office <ArrowRight className="w-5 h-5 opacity-30" />
                  </Link>
                  <Link href="/enterprise" className="py-4 border-b border-gray-100 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                    Enterprise <ArrowRight className="w-5 h-5 opacity-30" />
                  </Link>
                  <Link href="/pricing" className="py-4 border-b border-gray-100 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                    Pricing <ArrowRight className="w-5 h-5 opacity-30" />
                  </Link>
                </div>
                <div className="mt-8">
                  <Button variant="primary" size="lg" href="/book-tour" className="w-full justify-center py-4 text-lg">
                    Find Workspace
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
