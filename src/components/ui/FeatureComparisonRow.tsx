import React from 'react';
import { Check, Minus } from 'lucide-react';

interface FeatureComparisonRowProps {
  label: string;
  items: (boolean | string)[];
  className?: string;
  isHeader?: boolean;
}

export function FeatureComparisonRow({
  label,
  items,
  className = '',
  isHeader = false
}: FeatureComparisonRowProps) {
  return (
    <div className={`grid grid-cols-12 gap-4 py-4 border-b border-gray-100 ${isHeader ? 'bg-navy/5 font-semibold rounded-t-xl' : 'hover:bg-gray-50/50'} transition-colors ${className}`}>
      <div className="col-span-12 md:col-span-4 pl-4 md:pl-6 text-body text-navy flex items-center">
        {label}
      </div>
      
      {/* Assuming max 3 comparison columns, distributing remaining 8 cols (md) */}
      <div className="col-span-12 md:col-span-8 grid grid-cols-3 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-center text-center">
            {isHeader ? (
              <span className="text-body font-semibold text-navy">{item}</span>
            ) : typeof item === 'boolean' ? (
              item ? (
                <Check className="w-5 h-5 text-accent" strokeWidth={2.5} />
              ) : (
                <Minus className="w-5 h-5 text-navy/20" />
              )
            ) : (
              <span className="text-body text-navy/80">{item}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
