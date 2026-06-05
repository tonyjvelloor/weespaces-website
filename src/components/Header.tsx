"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="WeeSpaces Logo" width={48} height={48} className="w-12 h-12 rounded-full object-cover shadow-[0_0_15px_rgba(242,156,31,0.3)]" unoptimized />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wide">WeeSpaces</span>
            <span className="text-[9px] tracking-widest text-accent uppercase font-semibold">Work. Connect. Grow.</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          
          <div className="group relative">
            <button className="hover:text-accent transition-colors flex items-center gap-1 py-4">
              Services <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
            <div className="absolute top-full left-0 mt-0 w-56 glass border border-white/10 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link href="/pricing" className="block px-4 py-3 hover:bg-white/10 border-b border-white/10">Coworking & Offices</Link>
              <Link href="/services/virtual-office" className="block px-4 py-3 hover:bg-white/10 border-b border-white/10">Virtual Office</Link>
              <Link href="/services/incubation" className="block px-4 py-3 hover:bg-white/10">Incubation Services</Link>
            </div>
          </div>

          <div className="group relative">
            <button className="hover:text-accent transition-colors flex items-center gap-1 py-4">
              Locations <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
            <div className="absolute top-full left-0 mt-0 w-48 glass border border-white/10 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link href="/locations/trivandrum" className="block px-4 py-3 hover:bg-white/10 border-b border-white/10">Trivandrum</Link>
              <Link href="/locations/ernakulam" className="block px-4 py-3 hover:bg-white/10 border-b border-white/10">Ernakulam</Link>
              <Link href="/locations/calicut" className="block px-4 py-3 hover:bg-white/10 border-b border-white/10">Calicut</Link>
              <Link href="/locations/coimbatore" className="block px-4 py-3 hover:bg-white/10 flex items-center justify-between">
                Coimbatore <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-bold border border-accent/30">NEW</span>
              </Link>
            </div>
          </div>
          <Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link>
          <Link href="/investors/" className="hover:text-accent transition-colors font-bold text-accent">Investors</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact" className="bg-accent hover:bg-accent-hover text-navy font-bold py-2.5 px-6 rounded-full transition-colors text-sm shadow-[0_0_15px_rgba(242,156,31,0.2)] hover:shadow-[0_0_20px_rgba(242,156,31,0.4)]">
            Book a Tour
          </Link>
        </div>
        <button 
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full glass border-b border-white/10 shadow-2xl py-6 px-6 flex flex-col gap-6 origin-top"
          >
            <nav className="flex flex-col gap-4 text-sm font-medium">
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors py-2 border-b border-white/5">About</Link>
              
              <div className="py-2 border-b border-white/5">
                <span className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Services</span>
                <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                  <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Coworking & Offices</Link>
                  <Link href="/services/virtual-office" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Virtual Office</Link>
                  <Link href="/services/incubation" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Incubation Services</Link>
                </div>
              </div>

              <div className="py-2 border-b border-white/5">
                <span className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Locations</span>
                <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                  <Link href="/locations/trivandrum" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Trivandrum</Link>
                  <Link href="/locations/ernakulam" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Ernakulam</Link>
                  <Link href="/locations/calicut" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Calicut</Link>
                  <Link href="/locations/coimbatore" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors flex items-center justify-between">
                    Coimbatore <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-bold border border-accent/30">NEW</span>
                  </Link>
                </div>
              </div>
              
              <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors py-2 border-b border-white/5">FAQ</Link>
              <Link href="/investors/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors font-bold text-accent py-2 border-b border-white/5">Investors</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors py-2 border-b border-white/5">Contact</Link>
            </nav>
            
            <div className="flex flex-col gap-4 mt-2">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent text-center hover:bg-accent-hover text-navy font-bold py-3 rounded-xl transition-colors shadow-lg">
                Book a Tour
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
