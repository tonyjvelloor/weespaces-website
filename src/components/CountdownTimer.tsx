'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  hours?: number; // E.g. reset every 48 hours
}

export default function CountdownTimer({ hours = 48 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Generate a fixed end time stored in localStorage so it doesn't reset on refresh
    let endTime = localStorage.getItem('vo_offer_end_time');
    
    if (!endTime || new Date().getTime() > parseInt(endTime)) {
      // Set new expiry 48 hours from now
      endTime = (new Date().getTime() + hours * 60 * 60 * 1000).toString();
      localStorage.setItem('vo_offer_end_time', endTime);
    }

    const targetTime = parseInt(endTime);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        // Reset timer if it expires while they are on the page (evergreen scarcity)
        const newEndTime = (new Date().getTime() + hours * 60 * 60 * 1000).toString();
        localStorage.setItem('vo_offer_end_time', newEndTime);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
      setIsLoaded(true);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [hours]);

  if (!isLoaded) {
    return <div className="animate-pulse bg-gray-200 h-16 w-full rounded-xl"></div>;
  }

  return (
    <div className="bg-red-50 border border-red-100 rounded-xl p-4 sm:p-6 mb-8 text-center relative overflow-hidden shadow-sm">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
      
      <div className="flex items-center justify-center gap-2 mb-3 text-red-600 font-bold">
        <Clock className="w-5 h-5 animate-pulse" />
        <span className="text-sm tracking-wider uppercase">Flash Sale Ends In</span>
      </div>
      
      <div className="flex justify-center gap-3 sm:gap-6">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map((block, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-white text-navy font-black text-2xl sm:text-4xl w-14 h-14 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center shadow-sm border border-red-100">
              {block.value.toString().padStart(2, '0')}
            </div>
            <span className="text-red-500 text-xs sm:text-sm font-semibold mt-2 uppercase tracking-wider">{block.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
