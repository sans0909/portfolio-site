import { SectionHeading } from "../components/common/SectionHeading";
import { RevealOnScroll } from "../components/common/RevealOnScroll";
import { skillGroups } from "../data/skills";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section className="section container">
      <RevealOnScroll>
        <SectionHeading eyebrow="// SKILLS" title="Skills" />
      </RevealOnScroll>

      <div className={styles.groups}>
        {skillGroups.map((group) => (
          <RevealOnScroll key={group.label} className={styles.group}>
            <span className={`mono ${styles.groupLabel}`}>{group.label}</span>
            <div className={styles.items}>
              {group.items.map((item) => (
                <div key={item} className={styles.item}>
                  {item}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
