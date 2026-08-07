import React from 'react';
import Image from 'next/image';

interface ImageFrameProps {
  src: string;
  alt: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'landscape';
  className?: string;
  overlay?: 'none' | 'light' | 'dark' | 'gradient';
}

export function ImageFrame({ src, alt, aspectRatio = 'landscape', className = '', overlay = 'none' }: ImageFrameProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]'
  };

  const overlayClasses = {
    none: '',
    light: 'bg-white/10 mix-blend-overlay',
    dark: 'bg-navy/20',
    gradient: 'bg-gradient-to-t from-navy/80 via-navy/20 to-transparent'
  };

  return (
    <div className={`relative overflow-hidden rounded-[24px] group ${aspectClasses[aspectRatio]} ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {overlay !== 'none' && (
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${overlayClasses[overlay]}`} />
      )}
    </div>
  );
}
