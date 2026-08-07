import React from 'react';

interface EditorialSplitProps {
  content: React.ReactNode;
  visual: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

export function EditorialSplit({ content, visual, reverse = false, className = '' }: EditorialSplitProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${className}`}>
      <div className={`flex flex-col justify-center ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        {content}
      </div>
      <div className={`relative w-full ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        {visual}
      </div>
    </div>
  );
}
