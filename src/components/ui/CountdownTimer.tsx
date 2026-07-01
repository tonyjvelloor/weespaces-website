"use client";

import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const getEndTime = () => {
      const storedEndTime = localStorage.getItem('monsoonOfferEndTime');
      if (storedEndTime && parseInt(storedEndTime, 10) > Date.now()) {
        return parseInt(storedEndTime, 10);
      }
      
      // Set to 48 hours from now
      const newEndTime = Date.now() + (48 * 60 * 60 * 1000);
      localStorage.setItem('monsoonOfferEndTime', newEndTime.toString());
      return newEndTime;
    };

    const endTime = getEndTime();

    const updateTimer = () => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        // Reset the timer for an "evergreen" experience
        const newEndTime = Date.now() + (48 * 60 * 60 * 1000);
        localStorage.setItem('monsoonOfferEndTime', newEndTime.toString());
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex gap-4 justify-center items-center font-mono">
        <div className="flex flex-col items-center"><span className="text-3xl md:text-5xl font-bold">00</span><span className="text-xs uppercase tracking-wider text-white/50">Days</span></div>
        <span className="text-3xl md:text-5xl font-bold pb-4">:</span>
        <div className="flex flex-col items-center"><span className="text-3xl md:text-5xl font-bold">00</span><span className="text-xs uppercase tracking-wider text-white/50">Hours</span></div>
        <span className="text-3xl md:text-5xl font-bold pb-4">:</span>
        <div className="flex flex-col items-center"><span className="text-3xl md:text-5xl font-bold">00</span><span className="text-xs uppercase tracking-wider text-white/50">Mins</span></div>
        <span className="text-3xl md:text-5xl font-bold pb-4">:</span>
        <div className="flex flex-col items-center"><span className="text-3xl md:text-5xl font-bold">00</span><span className="text-xs uppercase tracking-wider text-white/50">Secs</span></div>
      </div>
    );
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex gap-3 md:gap-6 justify-center items-center font-mono bg-navy-light/40 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-accent/20 shadow-[0_0_30px_rgba(255,107,53,0.1)]">
      <div className="flex flex-col items-center w-16 md:w-20">
        <span className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">{formatNumber(timeLeft.days)}</span>
        <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 mt-1">Days</span>
      </div>
      <span className="text-2xl md:text-4xl font-bold text-accent/80 pb-5 md:pb-6">:</span>
      
      <div className="flex flex-col items-center w-16 md:w-20">
        <span className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">{formatNumber(timeLeft.hours)}</span>
        <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 mt-1">Hours</span>
      </div>
      <span className="text-2xl md:text-4xl font-bold text-accent/80 pb-5 md:pb-6">:</span>
      
      <div className="flex flex-col items-center w-16 md:w-20">
        <span className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">{formatNumber(timeLeft.minutes)}</span>
        <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 mt-1">Mins</span>
      </div>
      <span className="text-2xl md:text-4xl font-bold text-accent/80 pb-5 md:pb-6">:</span>
      
      <div className="flex flex-col items-center w-16 md:w-20">
        <span className="text-3xl md:text-5xl font-bold text-accent drop-shadow-[0_0_10px_rgba(255,107,53,0.5)]">{formatNumber(timeLeft.seconds)}</span>
        <span className="text-[10px] md:text-xs uppercase tracking-widest text-accent mt-1">Secs</span>
      </div>
    </div>
  );
}
