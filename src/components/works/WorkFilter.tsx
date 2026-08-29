import type { WorkCategory } from "../../types/work";
import styles from "./WorkFilter.module.css";

const OPTIONS: Array<{ value: WorkCategory | "all"; label: string }> = [
  { value: "all", label: "ALL" },
  { value: "web", label: "WEB" },
  { value: "game", label: "GAME" },
  { value: "3d", label: "3D" },
];

interface WorkFilterProps {
  active: WorkCategory | "all";
  onChange: (value: WorkCategory | "all") => void;
}

export function WorkFilter({ active, onChange }: WorkFilterProps) {
  return (
    <div className={styles.filter} role="group" aria-label="カテゴリで絞り込む">
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`mono ${styles.btn} ${active === opt.value ? styles.active : ""}`}
          aria-pressed={active === opt.value}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
