"use client";

import React from 'react';

interface ScrollToButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  targetId: string;
}

export default function ScrollToButton({ targetId, children, className, ...props }: ScrollToButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button onClick={handleClick} className={className} {...props}>
      {children}
    </button>
  );
}
