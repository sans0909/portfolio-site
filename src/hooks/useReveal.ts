import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal via IntersectionObserver: fades an element in the first
 * time it enters the viewport, then stops observing. Skips straight to
 * visible when the user has requested reduced motion.
 */
function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  // Initialize as already-visible when reduced motion is requested, rather
  // than setting state from inside the effect below.
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (isVisible) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, isVisible]);

  return { ref, isVisible };
}
