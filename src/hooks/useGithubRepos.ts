import { useEffect, useState } from "react";
import type { GithubRepo } from "../types/github";
import { fetchGithubRepos, GITHUB_PROFILE_URL } from "../services/githubService";

interface UseGithubReposResult {
  repos: GithubRepo[];
  loading: boolean;
  error: string | null;
  profileUrl: string | null;
}

export function useGithubRepos(): UseGithubReposResult {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchGithubRepos()
      .then((data) => {
        if (!cancelled) setRepos(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "不明なエラーが発生しました");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { repos, loading, error, profileUrl: GITHUB_PROFILE_URL };
}
