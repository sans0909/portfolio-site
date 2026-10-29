import { Link } from "react-router-dom";
import type { BlogPost } from "../../types/blog";
import { formatDate } from "../../utils/date";
import styles from "./BlogCard.module.css";

export function BlogCard({ post }: { post: BlogPost }) {
  const date = formatDate(post.publishedAt);

  return (
    <Link to={`/blog/${post.id}`} className={`${styles.card} bracket-frame`}>
      <div className={styles.meta}>
        <span className="eyebrow">{post.category}</span>
        {date && <span className={`mono ${styles.date}`}>{date}</span>}
      </div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <span className={`mono ${styles.readMore}`}>続きを読む →</span>
    </Link>
  );
}
