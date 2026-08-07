"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Users, Building, Search } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function WorkspaceSearchEngine() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    city: 'kochi',
    type: 'private-office',
    teamSize: '1-10'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In Phase 3, this will map to /locations?city=x&type=y&teamSize=z
    // For now, we map it to existing routes or a placeholder
    const path = `/${formData.type}/${formData.city}`;
    router.push(path);
  };

  return (
    <div className="bg-navy-light/40 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Find a Workspace</h3>
        <p className="text-white/60 text-sm">Discover premium offices across South India.</p>
      </div>

      <form onSubmit={handleSearch} className="space-y-5 relative z-10">
        
        {/* City Select */}
        <div className="relative">
          <label className="block text-white/50 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-accent" /> City
          </label>
          <select 
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none cursor-pointer"
          >
            <option value="kochi">Kochi</option>
            <option value="trivandrum">Trivandrum</option>
            <option value="calicut">Calicut</option>
            <option value="coimbatore">Coimbatore</option>
          </select>
        </div>

        {/* Workspace Type */}
        <div className="relative">
          <label className="block text-white/50 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
            <Building className="w-3.5 h-3.5 text-accent" /> Workspace Type
          </label>
          <select 
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none cursor-pointer"
          >
            <option value="coworking-space">Coworking Space</option>
            <option value="private-office">Private Office</option>
            <option value="managed-office">Managed Office</option>
            <option value="virtual-office">Virtual Office</option>
          </select>
        </div>

        {/* Team Size */}
        <div className="relative">
          <label className="block text-white/50 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-accent" /> Team Size
          </label>
          <select 
            value={formData.teamSize}
            onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none cursor-pointer"
          >
            <option value="1">1 Person (Hot Desk)</option>
            <option value="2-5">2-5 People</option>
            <option value="6-10">6-10 People</option>
            <option value="11-20">11-20 People</option>
            <option value="20+">20+ People (Enterprise)</option>
          </select>
        </div>

        <div className="pt-2">
          <MagneticButton>
            <button 
              type="submit"
              className="w-full bg-accent hover:bg-accent-light text-navy font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Find Locations
            </button>
          </MagneticButton>
        </div>

      </form>
    </div>
  );
}
