'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function HeadlineContent() {
  const searchParams = useSearchParams();
  const [city, setCity] = useState('');

  useEffect(() => {
    const locParam = searchParams.get('loc');
    if (locParam) {
      setCity(' in ' + locParam.charAt(0).toUpperCase() + locParam.slice(1));
    }
  }, [searchParams]);

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-white">
      Legally Register Your Company<span className="text-white">{city}</span> For Just <span className="text-accent underline decoration-4 underline-offset-8">₹8,999/Year</span>
    </h1>
  );
}

export default function DynamicCityHeadline() {
  return (
    <Suspense fallback={<h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-white">Legally Register Your Company For Just <span className="text-accent underline decoration-4 underline-offset-8">₹8,999/Year</span></h1>}>
      <HeadlineContent />
    </Suspense>
  );
}
