import { useEffect, useState } from "react";
import type { BlogPost } from "../types/blog";
import { fetchBlogPosts } from "../services/strapiService";
import { blogFallback } from "../data/blogFallback";

interface UseBlogPostsResult {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  isFallback: boolean;
}

/**
 * Loads the blog list from Strapi. If VITE_STRAPI_URL is unset or the
 * request fails, falls back to local sample data so the rest of the UI
 * (list layout, detail routing) stays demoable without a running CMS.
 */
export function useBlogPosts(): UseBlogPostsResult {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await fetchBlogPosts();
        if (cancelled) return;
        setPosts(data);
        setIsFallback(false);
        setError(null);
      } catch (err) {
        if (cancelled) return;
        setPosts(blogFallback);
        setIsFallback(true);
        setError(err instanceof Error ? err.message : "不明なエラーが発生しました");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { posts, loading, error, isFallback };
}
