import React from 'react';
import { WorkspaceHighlights } from './WorkspaceHighlights';
import { Button } from './Button';

interface PricingSummaryCardProps {
  title: string;
  price: string;
  priceSubtext?: string;
  includedAmenities: string[];
  ctaText: string;
  ctaHref: string;
  isPopular?: boolean;
  className?: string;
}

export function PricingSummaryCard({
  title,
  price,
  priceSubtext = '/ month',
  includedAmenities,
  ctaText,
  ctaHref,
  isPopular = false,
  className = ''
}: PricingSummaryCardProps) {
  return (
    <div className={`relative bg-white rounded-[28px] border ${isPopular ? 'border-accent shadow-hover-lift' : 'border-gray-100 shadow-soft'} p-8 lg:p-10 flex flex-col h-full ${className}`}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-navy px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}
      
      <h3 className="text-h4 text-navy mb-2">{title}</h3>
      
      <div className="mb-8">
        <span className="text-sm font-bold tracking-wider text-navy/50 uppercase block mb-1">Starting from</span>
        <div className="flex items-baseline gap-1">
          <span className="text-display text-navy">{price}</span>
          <span className="text-body text-navy/60">{priceSubtext}</span>
        </div>
      </div>
      
      <div className="mb-10 flex-grow">
        <span className="text-sm font-bold tracking-wider text-navy/50 uppercase block mb-4">What's Included</span>
        <WorkspaceHighlights highlights={includedAmenities} columns={1} />
      </div>
      
      <Button href={ctaHref} variant={isPopular ? 'primary' : 'secondary'} className="w-full">
        {ctaText}
      </Button>
    </div>
  );
}
