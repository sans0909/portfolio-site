import { SectionHeading } from "../components/common/SectionHeading";
import { RevealOnScroll } from "../components/common/RevealOnScroll";
import { BlogCard } from "../components/blog/BlogCard";
import { LoadingSkeleton } from "../components/common/LoadingSkeleton";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./BlogList.module.css";

export function BlogList() {
  useDocumentTitle("Blog");
  const { posts, loading, isFallback } = useBlogPosts();

  return (
    <section className="section container">
      <RevealOnScroll>
        <SectionHeading eyebrow="// BLOG" title="Blog" level={1} />

        {isFallback && (
          <p className={`mono ${styles.notice}`}>
            現在ブログ記事を取得できないため、サンプル記事を表示しています。
            {import.meta.env.DEV && " [dev] .env の VITE_STRAPI_URL を設定すると実際の記事が表示されます。"}
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
