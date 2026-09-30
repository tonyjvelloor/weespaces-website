'use client';

import { useState, useEffect } from 'react';
import { MapPin, CheckCircle2, X } from 'lucide-react';

const NAMES = ['Rahul M.', 'Priya S.', 'Arjun K.', 'Mohammed F.', 'Anjali D.', 'Karthik V.'];
const LOCATIONS = ['Kochi', 'Trivandrum', 'Calicut', 'Ernakulam'];
const TIMES = ['2 minutes ago', '5 minutes ago', '12 minutes ago', 'Just now'];

export default function LiveSignupToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({ name: '', location: '', time: '' });

  useEffect(() => {
    // Initial delay before first pop
    const initialTimer = setTimeout(() => {
      triggerToast();
    }, 15000);

    // Then pop randomly every 25-45 seconds
    const intervalTimer = setInterval(() => {
      if (!isVisible) {
        triggerToast();
      }
    }, Math.floor(Math.random() * 20000) + 25000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const triggerToast = () => {
    setData({
      name: NAMES[Math.floor(Math.random() * NAMES.length)],
      location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
      time: TIMES[Math.floor(Math.random() * TIMES.length)],
    });
    setIsVisible(true);
    
    // Auto hide after 6 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 6000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-[300px] animate-in slide-in-from-bottom-5 fade-in duration-500">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <X className="w-4 h-4" />
      </button>
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <p className="text-sm font-bold text-navy leading-tight">
            {data.name} just locked in the ₹8,999 rate!
          </p>
          <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {data.location}</span>
            <span className="text-gray-300">•</span>
            <span>{data.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
