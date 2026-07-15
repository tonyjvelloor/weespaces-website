import { useEffect, useRef } from 'react';
import { track } from '@/lib/tracking';

export function useScrollTracking(contentContext: Record<string, any>) {
  const tracked50 = useRef(false);
  const tracked90 = useRef(false);

  useEffect(() => {
    // Stringify dependencies that are objects to avoid infinite re-renders
    // if the object reference changes on every render.
    const contextString = JSON.stringify(contentContext);
    const parsedContext = JSON.parse(contextString);

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrollPercentage = (window.scrollY / scrollHeight) * 100;

      if (scrollPercentage >= 50 && !tracked50.current) {
        tracked50.current = true;
        track.scroll(50, parsedContext);
      }

      if (scrollPercentage >= 90 && !tracked90.current) {
        tracked90.current = true;
        track.scroll(90, parsedContext);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check in case it's a very short page
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(contentContext)]);
}
