import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  alignment?: 'left' | 'center';
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  alignment = 'center',
  action,
  className = ''
}: SectionHeaderProps) {
  const alignClasses = alignment === 'center' 
    ? 'text-center mx-auto items-center' 
    : 'text-left items-start';
  
  const textMaxW = alignment === 'center' ? 'max-w-3xl' : 'max-w-2xl';

  return (
    <div className={`flex flex-col ${alignClasses} ${className} mb-16 lg:mb-24`}>
      {eyebrow && (
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4 block">
          {eyebrow}
        </span>
      )}
      
      <h2 className="text-display text-navy mb-6">
        {title}
      </h2>
      
      {description && (
        <p className={`text-body text-navy/70 ${textMaxW} mb-8 lg:mb-10`}>
          {description}
        </p>
      )}
      
      {action && (
        <div className="mt-2">
          {action}
        </div>
      )}
    </div>
  );
}
