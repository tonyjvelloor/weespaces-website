import React from 'react';
import Image from 'next/image';

interface WorkspaceHeroGalleryProps {
  primaryImage: { src: string; alt: string };
  secondaryImageTop: { src: string; alt: string };
  secondaryImageBottom: { src: string; alt: string };
  className?: string;
}

export function WorkspaceHeroGallery({
  primaryImage,
  secondaryImageTop,
  secondaryImageBottom,
  className = ''
}: WorkspaceHeroGalleryProps) {
  return (
    <div className={`grid grid-cols-12 gap-4 lg:gap-6 w-full ${className}`}>
      {/* Primary Large Image */}
      <div className="col-span-12 md:col-span-8 relative rounded-[24px] overflow-hidden group aspect-[4/3] md:aspect-auto md:h-[600px]">
        <Image 
          src={primaryImage.src} 
          alt={primaryImage.alt} 
          fill 
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 66vw"
          priority
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-navy/10 pointer-events-none mix-blend-overlay"></div>
      </div>
      
      {/* Secondary Images Column */}
      <div className="col-span-12 md:col-span-4 flex flex-col gap-4 lg:gap-6">
        <div className="relative rounded-[24px] overflow-hidden group h-[300px] md:h-[calc(300px-12px)] lg:h-[calc(300px-12px)] flex-1">
          <Image 
            src={secondaryImageTop.src} 
            alt={secondaryImageTop.alt} 
            fill 
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative rounded-[24px] overflow-hidden group h-[300px] md:h-[calc(300px-12px)] lg:h-[calc(300px-12px)] flex-1">
          <Image 
            src={secondaryImageBottom.src} 
            alt={secondaryImageBottom.alt} 
            fill 
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}
