import { useGithubRepos } from "../../hooks/useGithubRepos";
import { LoadingSkeleton } from "../common/LoadingSkeleton";
import styles from "./GithubRepos.module.css";

/**
 * Pulls live public repos from the GitHub REST API
 * (services/githubService.ts) and renders them as Works content,
 * alongside the hand-curated list in data/works.ts.
 */
export function GithubRepos() {
  const { repos, loading, error, profileUrl } = useGithubRepos();

  if (loading) return <LoadingSkeleton count={3} />;

  if (error) {
    return (
      <div className={styles.empty}>
        <p>
          GitHubのリポジトリを読み込めませんでした。時間をおいて再読み込みするか、GitHubで直接ご覧ください。
        </p>
        {profileUrl && (
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className={`mono ${styles.profileLink}`}
          >
            GitHubのプロフィールを開く →
          </a>
        )}
        {import.meta.env.DEV && (
          <p className="mono">
            [dev] {error} — .env の VITE_GITHUB_USERNAME を確認してください
          </p>
        )}
      </div>
    );
  }

  if (repos.length === 0) {
    return <p className={styles.empty}>公開リポジトリが見つかりませんでした。</p>;
  }

  return (
    <div className={styles.grid}>
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.htmlUrl}
          target="_blank"
          rel="noreferrer"
          className={`${styles.card} bracket-frame`}
        >
          <span className="mono">{repo.name}</span>
          {repo.description && <p className={styles.description}>{repo.description}</p>}
          <div className={styles.meta}>
            {repo.language && <span className="mono">{repo.language}</span>}
            <span className="mono">★ {repo.stars}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
