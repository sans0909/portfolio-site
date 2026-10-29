import type { Work } from "../../types/work";
import { WORK_CATEGORY_LABEL } from "../../types/work";
import { Tag } from "../common/Tag";
import styles from "./WorkCard.module.css";

export function WorkCard({ work }: { work: Work }) {
  return (
    <article className={`${styles.card} bracket-frame`}>
      <div className={styles.header}>
        <span className="eyebrow">{WORK_CATEGORY_LABEL[work.category]}</span>
        {work.role && <span className={`mono ${styles.role}`}>{work.role}</span>}
      </div>
      <h3 className={styles.title}>{work.title}</h3>
      <p className={styles.summary}>{work.summary}</p>
      <p className={styles.description}>{work.description}</p>
      <div className={styles.techList}>
        {work.tech.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
      {work.link && (
        <a
          href={work.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${work.title}（新しいタブで開きます）`}
          className={`mono ${styles.link}`}
        >
          View →
        </a>
      )}
    </article>
  );
}
