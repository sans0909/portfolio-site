import styles from "./WireframeShape.module.css";

interface WireframeShapeProps {
  size?: number;
  className?: string;
}

/**
 * The page's signature element: a faceted low-poly gem, hand-drawn as a
 * hex bipyramid wireframe — a nod to the hard-surface / gem-cut modeling
 * work in the Works section. Gently rotates; respects reduced-motion via
 * the global rule in styles/global.css.
 */
export function WireframeShape({ size = 240, className }: WireframeShapeProps) {
  const hex = [
    [165, 95],
    [132.5, 151.3],
    [67.5, 151.3],
    [35, 95],
    [67.5, 38.7],
    [132.5, 38.7],
  ];
  const top: [number, number] = [100, 10];
  const bottom: [number, number] = [100, 180];

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`${styles.shape} ${className ?? ""}`}
      aria-hidden="true"
    >
      <g className={styles.rotor} stroke="var(--accent-wire)" strokeWidth="1" fill="none" opacity="0.8">
        {hex.map((p, i) => {
          const next = hex[(i + 1) % hex.length];
          return <line key={`ring-${i}`} x1={p[0]} y1={p[1]} x2={next[0]} y2={next[1]} />;
        })}
        {hex.map((p, i) => (
          <line key={`top-${i}`} x1={top[0]} y1={top[1]} x2={p[0]} y2={p[1]} />
        ))}
      </g>
      <g className={styles.rotor} stroke="var(--accent-signal)" strokeWidth="1.2" fill="none">
        {hex.map((p, i) => (
          <line key={`bottom-${i}`} x1={bottom[0]} y1={bottom[1]} x2={p[0]} y2={p[1]} />
        ))}
      </g>
    </svg>
  );
}
