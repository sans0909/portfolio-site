import { Link, useParams } from "react-router-dom";
import { LoadingSkeleton } from "../components/common/LoadingSkeleton";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { formatDate } from "../utils/date";
import styles from "./BlogDetail.module.css";

export function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const { posts, loading, isFallback } = useBlogPosts();
  const post = posts.find((p) => String(p.id) === id);
  useDocumentTitle(post?.title);

  if (loading) {
    return (
      <section className="section container">
        <LoadingSkeleton count={1} />
      </section>
    );
  }

  if (!post) {
    return (
      <section className="section container">
        <p>記事が見つかりませんでした。</p>
        <Link to="/blog" className={`mono ${styles.back}`}>
          ← Blog一覧に戻る
        </Link>
      </section>
    );
  }

  const date = formatDate(post.publishedAt);

  return (
    <article className="section container">
      <Link to="/blog" className={`mono ${styles.back}`}>
        ← Blog一覧に戻る
      </Link>

      <div className={styles.meta}>
        <span className="eyebrow">{post.category}</span>
        {date && <span className={`mono ${styles.date}`}>{date}</span>}
      </div>

      <h1 className={styles.title}>{post.title}</h1>

      {post.image && <img src={post.image} alt="" className={styles.image} />}

      <div className={styles.body}>
        {post.content
          .split("\n")
          .filter((para) => para.trim().length > 0)
          .map((para, i) => (
            <p key={i}>{para}</p>
          ))}
      </div>

      {isFallback && <p className={styles.notice}>※ サンプルデータを表示しています。</p>}
    </article>
  );
}
