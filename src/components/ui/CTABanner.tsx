import React from 'react';
import { Button } from './Button';

interface CTABannerProps {
  title: string;
  description?: string;
  primaryActionText: string;
  primaryActionHref: string;
  secondaryActionText?: string;
  secondaryActionHref?: string;
  className?: string;
}

export function CTABanner({
  title,
  description,
  primaryActionText,
  primaryActionHref,
  secondaryActionText,
  secondaryActionHref,
  className = ''
}: CTABannerProps) {
  return (
    <div className={`bg-navy text-white rounded-[28px] p-12 lg:p-24 relative overflow-hidden ${className}`}>
      {/* 1.5% Noise Texture Overlay */}
      <div className="absolute inset-0 bg-grain mix-blend-multiply opacity-[0.015] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-display mb-6">{title}</h2>
          {description && (
            <p className="text-body text-white/70">
              {description}
            </p>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
          <Button href={primaryActionHref} variant="primary" size="lg">
            {primaryActionText}
          </Button>
          {secondaryActionText && secondaryActionHref && (
            <Button href={secondaryActionHref} variant="ghost" size="lg" className="text-white hover:bg-white/10">
              {secondaryActionText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
