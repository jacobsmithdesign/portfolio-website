import { useRef, useState, useEffect } from "react";

export const useIntersectionObserver = <T extends HTMLElement>(
  delay: number = 0
) => {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setHasBeenInView(true), delay);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, delay]);

  return { ref, hasBeenInView };
};
