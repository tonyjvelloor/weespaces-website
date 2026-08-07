import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'pill';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  
  // Base classes (tactile, slower animation, standard font weight)
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  // Variant classes using new V3 elevation rules (lift + hover-lift shadow)
  const variants = {
    primary: "bg-accent hover:bg-accent-light text-navy shadow-sm hover:shadow-hover-lift hover:-translate-y-0.5 border border-transparent",
    secondary: "bg-transparent border border-gray-200 text-navy hover:bg-navy/5 hover:shadow-hover-lift hover:-translate-y-0.5",
    ghost: "bg-transparent text-navy hover:bg-navy/5 hover:text-navy-light underline-offset-4 hover:underline",
    pill: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 shadow-sm hover:shadow-hover-lift hover:-translate-y-0.5"
  };

  // Size classes - radius is rigidly 16px as per Design Bible
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-[16px]",
    md: "px-6 py-3.5 text-base rounded-[16px]",
    lg: "px-8 py-4 text-lg rounded-[16px]"
  };

  // Pill forces full rounded regardless of size
  const roundedClass = variant === 'pill' ? 'rounded-full' : '';
  // Ghost doesn't need huge padding
  const sizeClass = variant === 'ghost' ? 'p-2 rounded-[16px]' : sizes[size];
  
  // Clean up rounded class collision if pill
  const finalSizeClass = variant === 'pill' ? sizeClass.replace(/rounded-\[.*?\]/, '') : sizeClass;

  const classes = `${baseClasses} ${variants[variant]} ${finalSizeClass} ${roundedClass} ${className}`.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
