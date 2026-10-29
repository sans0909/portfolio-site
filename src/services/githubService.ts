import type { GithubApiRepo, GithubRepo } from "../types/github";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME as string | undefined;
const MAX_REPOS = 6;

/** Link to the GitHub profile (null when no username is configured). */
export const GITHUB_PROFILE_URL = GITHUB_USERNAME ? `https://github.com/${GITHUB_USERNAME}` : null;

function mapRepo(repo: GithubApiRepo): GithubRepo {
  return {
    id: repo.id,
    name: repo.name,
    htmlUrl: repo.html_url,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    topics: repo.topics ?? [],
    updatedAt: repo.updated_at,
    isFork: repo.fork,
  };
}

/**
 * Fetches public, non-fork repositories for VITE_GITHUB_USERNAME via the
 * public GitHub REST API (no auth token needed, subject to the ~60
 * requests/hour unauthenticated rate limit).
 *
 * Forks are removed *before* taking the first MAX_REPOS, so a fork among the
 * most recently updated repos doesn't shrink the list below MAX_REPOS.
 */
export async function fetchGithubRepos(): Promise<GithubRepo[]> {
  if (!GITHUB_USERNAME) {
    throw new Error("VITE_GITHUB_USERNAME が設定されていません");
  }

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`
  );

  if (res.status === 404) {
    throw new Error(`GitHubユーザー "${GITHUB_USERNAME}" が見つかりませんでした`);
  }
  if (res.status === 403 || res.status === 429) {
    throw new Error("GitHub APIのリクエスト上限に達しました。しばらくしてからお試しください");
  }
  if (!res.ok) {
    throw new Error(`GitHub APIの取得に失敗しました (status: ${res.status})`);
  }

  const json = (await res.json()) as GithubApiRepo[];
  return json
    .filter((repo) => !repo.fork)
    .slice(0, MAX_REPOS)
    .map(mapRepo);
}
