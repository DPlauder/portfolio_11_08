"use client"

import { useRef, useEffect, useState } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation only if intersecting and not already animated
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the item is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        //observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]); // Dependency array ensures effect runs when hasAnimated changes

  return { ref, hasAnimated };
}
