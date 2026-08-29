import styles from "./LoadingSkeleton.module.css";

export function LoadingSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className={styles.grid} role="status" aria-label="読み込み中">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.card} />
      ))}
    </div>
  );
}
