import React from 'react';

export type BadgeVariant = 'available' | 'premium' | 'enterprise' | 'virtual' | 'neutral' | 'accent';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({ variant = 'neutral', children, className = '', icon }: BadgeProps) {
  const baseClasses = "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border transition-colors";
  
  const variants = {
    available: "bg-green-50 text-green-700 border-green-200/50",
    premium: "bg-navy text-white border-navy-light",
    enterprise: "bg-slate-900 text-slate-100 border-slate-700",
    virtual: "bg-blue-50 text-blue-700 border-blue-200/50",
    neutral: "bg-gray-50 text-gray-600 border-gray-200/50",
    accent: "bg-accent/10 text-accent-dark border-accent/20"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim().replace(/\s+/g, ' ');

  return (
    <span className={classes}>
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      {children}
    </span>
  );
}
