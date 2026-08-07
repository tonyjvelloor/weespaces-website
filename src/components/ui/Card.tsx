import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type CardVariant = 'workspace' | 'information' | 'glass' | 'statistic';

interface CardProps {
  variant?: CardVariant;
  className?: string;
  children: React.ReactNode;
}

/**
 * Base generic Card wrapper.
 * For complex cards (like Workspace), use the specialized components exported below.
 */
export function Card({ variant = 'information', className = '', children }: CardProps) {
  
  // Base classes: rigidly 28px as per Design Bible v3. Motion: fade-up via motion-safe if we add keyframes, or just simple translation on load/hover.
  const baseClasses = "rounded-[28px] overflow-hidden transition-all duration-500";
  
  const variants = {
    information: "bg-white border border-gray-100 shadow-soft hover:shadow-hover-lift hover:-translate-y-1 p-8 lg:p-10",
    glass: "bg-navy-light/40 backdrop-blur-xl border border-white/10 shadow-soft hover:shadow-hover-lift p-8 lg:p-10",
    statistic: "bg-white border border-gray-100 shadow-soft hover:shadow-hover-lift p-8 flex flex-col justify-center",
    workspace: "bg-white border border-gray-100 shadow-soft hover:shadow-hover-lift hover:-translate-y-1 flex flex-col h-full"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim().replace(/\s+/g, ' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

// Specialized Statistic Card
export function StatisticCard({ value, label, className = '' }: { value: string | number, label: string, className?: string }) {
  return (
    <Card variant="statistic" className={className}>
      <div className="text-display text-navy mb-2">{value}</div>
      <div className="text-sm font-bold tracking-wider text-navy/50 uppercase">{label}</div>
    </Card>
  );
}

// Minimal Information Card
export function InfoCard({ title, description, icon, className = '' }: { title: string, description: string, icon?: React.ReactNode, className?: string }) {
  return (
    <Card variant="information" className={className}>
      {icon && <div className="mb-6 text-accent w-12 h-12 flex items-center justify-center rounded-2xl bg-accent/10">{icon}</div>}
      <h3 className="text-h3 text-navy mb-4">{title}</h3>
      <p className="text-body text-navy/70">{description}</p>
    </Card>
  );
}
