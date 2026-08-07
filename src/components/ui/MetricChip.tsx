import React from 'react';

interface MetricChipProps {
  icon?: React.ReactNode;
  value: string | number;
  label?: string;
  className?: string;
}

export function MetricChip({ icon, value, label, className = '' }: MetricChipProps) {
  return (
    <div className={`inline-flex items-center gap-2 bg-white border border-gray-100 rounded-[12px] px-3 py-1.5 shadow-sm hover:shadow-soft transition-shadow ${className}`}>
      {icon && <span className="text-navy/50 flex items-center justify-center w-4 h-4">{icon}</span>}
      <div className="flex items-baseline gap-1">
        <span className="text-sm font-bold text-navy">{value}</span>
        {label && <span className="text-[11px] font-medium text-navy/60 uppercase tracking-wider">{label}</span>}
      </div>
    </div>
  );
}
