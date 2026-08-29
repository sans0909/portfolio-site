import { SectionHeading } from "../components/common/SectionHeading";
import { RevealOnScroll } from "../components/common/RevealOnScroll";
import { BlogCard } from "../components/blog/BlogCard";
import { LoadingSkeleton } from "../components/common/LoadingSkeleton";
import { useBlogPosts } from "../hooks/useBlogPosts";
import styles from "./BlogList.module.css";

export function BlogList() {
  const { posts, loading, isFallback } = useBlogPosts();

  return (
    <section className="section container">
      <RevealOnScroll>
        <SectionHeading eyebrow="// BLOG" title="Blog" />

        {isFallback && (
          <p className={`mono ${styles.notice}`}>
            Strapiに接続できないため、サンプルデータを表示しています。.env の VITE_STRAPI_URL
            を設定すると実際の記事が表示されます。
          </p>
        )}

        {loading ? (
          <LoadingSkeleton count={6} />
        ) : (
          <div className={styles.grid}>
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </RevealOnScroll>
    </section>
  );
}
