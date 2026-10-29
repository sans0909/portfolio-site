import { Link } from "react-router-dom";
import { Hero } from "../components/home/Hero";
import { SectionHeading } from "../components/common/SectionHeading";
import { RevealOnScroll } from "../components/common/RevealOnScroll";
import { WorkCard } from "../components/works/WorkCard";
import { BlogCard } from "../components/blog/BlogCard";
import { LoadingSkeleton } from "../components/common/LoadingSkeleton";
import { works } from "../data/works";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./Home.module.css";

export function Home() {
  useDocumentTitle();
  const { posts, loading, isFallback } = useBlogPosts();
  const featuredWorks = works.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="section container">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="// WORKS"
            title="制作物"
            description="Web開発・ゲーム開発・3Dモデリングの制作物から一部を紹介します。"
          />
          <div className={styles.grid}>
            {featuredWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
          <Link to="/works" className={`mono ${styles.viewAll}`}>
            すべて見る →
          </Link>
        </RevealOnScroll>
      </section>

      <section className="section container">
        <RevealOnScroll>
          <SectionHeading eyebrow="// BLOG" title="最新の記事" />
          {isFallback && (
            <p className={`mono ${styles.notice}`}>
              現在ブログ記事を取得できないため、サンプル記事を表示しています。
            </p>
          )}
          {loading ? (
            <LoadingSkeleton count={3} />
          ) : (
            <div className={styles.blogGrid}>
              {latestPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
          <Link to="/blog" className={`mono ${styles.viewAll}`}>
            すべて見る →
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
