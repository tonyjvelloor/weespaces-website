"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, MapPin, Building, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import { services, cities } from '@/data/locations';

// Generate search index on load
const generateSearchIndex = () => {
  const index: { title: string; url: string; type: string; keywords: string }[] = [];
  
  // Add base services
  services.forEach(s => {
    index.push({ title: s.name, url: `/${s.slug}`, type: 'Service', keywords: s.shortDesc });
  });

  const topServices = services.filter(s => ['coworking-space', 'virtual-office', 'meeting-room'].includes(s.slug));

  Object.values(cities).forEach(city => {
    index.push({ title: `Workspace in ${city.name}`, url: `/coworking-space/${city.slug}`, type: 'City', keywords: city.description });
    
    topServices.forEach(s => {
      city.microLocations.forEach(micro => {
        index.push({
          title: `${s.name} in ${micro.name}, ${city.name}`,
          url: `/${s.slug}/${city.slug}/${micro.slug}`,
          type: 'Location',
          keywords: `${micro.intent} ${micro.landmarks.join(' ')} ${micro.nearbyCompanies.join(' ')}`
        });
      });

      city.landmarks.forEach(landmark => {
        index.push({
          title: `${s.name} ${landmark.name}, ${city.name}`,
          url: `/${s.slug}/${city.slug}/${landmark.slug}`,
          type: 'Landmark',
          keywords: `${landmark.name} ${city.name}`
        });
      });
    });
  });

  return index;
};

const searchIndex = generateSearchIndex();
const fuse = new Fuse(searchIndex, {
  keys: ['title', 'keywords'],
  threshold: 0.3, // Lower threshold = stricter matching
});

export default function GlobalSearch({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(searchIndex.slice(0, 5));
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults(searchIndex.filter(i => i.type === 'City' || i.type === 'Service').slice(0, 5));
    } else {
      const result = fuse.search(query);
      setResults(result.map(r => r.item).slice(0, 8)); // Top 8 results
    }
  }, [query]);

  const handleSelect = (url: string) => {
    router.push(url);
    onClose();
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose}
            className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl bg-navy-light/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative z-10"
          >
            <div className="flex items-center px-4 py-4 border-b border-white/10">
              <Search className="w-6 h-6 text-white/50 mr-3" />
              <input
                ref={inputRef}
                type="text"
                className="w-full bg-transparent text-white text-lg focus:outline-none placeholder:text-white/30"
                placeholder="Search locations, services, or landmarks..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-md transition-colors">
                <X className="w-5 h-5 text-white/50 hover:text-white" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <div className="p-8 text-center text-white/50">
                  <p>No results found for "{query}"</p>
                  <p className="text-sm mt-2">Try searching for a city like "Kochi" or a service like "Meeting Room"</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {results.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(result.url)}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-colors group text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${result.type === 'Service' ? 'bg-accent/20 text-accent' : 'bg-white/5 text-white/70'}`}>
                          {result.type === 'Service' ? <Building className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="text-white font-medium group-hover:text-accent transition-colors">{result.title}</p>
                          <p className="text-xs text-white/40">{result.type}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="bg-white/5 px-4 py-3 border-t border-white/10 text-xs text-white/40 flex justify-between">
              <span>Use <kbd className="font-sans px-1.5 py-0.5 bg-white/10 rounded">Cmd</kbd> + <kbd className="font-sans px-1.5 py-0.5 bg-white/10 rounded">K</kbd> to open anytime</span>
              <span>Navigate with <kbd className="font-sans px-1.5 py-0.5 bg-white/10 rounded">Tab</kbd></span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
