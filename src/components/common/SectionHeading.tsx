import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** 1 for a page's main heading (one per page), 2 for sub-sections. Defaults to 2. */
  level?: 1 | 2;
}

export function SectionHeading({ eyebrow, title, description, level = 2 }: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <div className={styles.heading}>
      <span className="eyebrow">{eyebrow}</span>
      <Heading className={styles.title}>{title}</Heading>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
