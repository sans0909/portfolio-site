import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
}

export function RevealOnScroll({ children, className }: RevealOnScrollProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${isVisible ? "is-visible" : ""} ${className ?? ""}`}>
      {children}
    </div>
  );
}
