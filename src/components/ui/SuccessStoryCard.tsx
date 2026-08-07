import React from 'react';
import Image from 'next/image';

interface SuccessStoryCardProps {
  logo: { src: string; alt: string };
  challenge: string;
  solution: string;
  result: string;
  className?: string;
}

export function SuccessStoryCard({
  logo,
  challenge,
  solution,
  result,
  className = ''
}: SuccessStoryCardProps) {
  return (
    <div className={`bg-white rounded-[28px] border border-gray-100 shadow-soft p-8 lg:p-10 flex flex-col h-full ${className}`}>
      <div className="relative w-32 h-12 mb-10">
        <Image 
          src={logo.src} 
          alt={logo.alt} 
          fill 
          className="object-contain object-left grayscale opacity-80"
        />
      </div>
      
      <div className="space-y-8 flex-grow">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">The Challenge</span>
          <p className="text-body text-navy/80">{challenge}</p>
        </div>
        
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-2 block">The Solution</span>
          <p className="text-body text-navy/80">{solution}</p>
        </div>
      </div>
      
      <div className="mt-10 pt-8 border-t border-gray-100">
        <span className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-2 block">The Result</span>
        <p className="text-h4 text-navy">{result}</p>
      </div>
    </div>
  );
}
