"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverProps extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useIntersectionObserver = ({
  triggerOnce = false,
  ...options
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting] as const;
};
