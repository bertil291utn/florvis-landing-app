"use client";

import { useState, useEffect, RefObject } from 'react';

interface UseIntersectionObserverProps {
  ref: RefObject<Element>;
  options?: IntersectionObserverInit;
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver({
  ref,
  options,
  threshold = 0.1,
  rootMargin = '0px',
}: UseIntersectionObserverProps): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin,
        threshold,
        ...options,
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, options, threshold, rootMargin]);

  return isIntersecting;
}