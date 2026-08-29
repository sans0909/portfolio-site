import { useMemo, useState } from "react";
import { SectionHeading } from "../components/common/SectionHeading";
import { RevealOnScroll } from "../components/common/RevealOnScroll";
import { WorkCard } from "../components/works/WorkCard";
import { WorkFilter } from "../components/works/WorkFilter";
import { GithubRepos } from "../components/works/GithubRepos";
import { works } from "../data/works";
import type { WorkCategory } from "../types/work";
import styles from "./Works.module.css";

export function Works() {
  const [filter, setFilter] = useState<WorkCategory | "all">("all");

  const filtered = useMemo(
    () => (filter === "all" ? works : works.filter((w) => w.category === filter)),
    [filter]
  );

  return (
    <>
      <section className="section container">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="// WORKS"
            title="制作物一覧"
            description="ボタンでカテゴリを絞り込めます。"
          />
          <WorkFilter active={filter} onChange={setFilter} />
          <div className={styles.grid}>
            {filtered.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="section container">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="// GITHUB"
            title="GitHub Repositories"
            description="GitHub APIから取得した公開リポジトリを自動表示しています。"
          />
          <GithubRepos />
        </RevealOnScroll>
      </section>
    </>
  );
}
