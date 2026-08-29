import { useGithubRepos } from "../../hooks/useGithubRepos";
import { LoadingSkeleton } from "../common/LoadingSkeleton";
import styles from "./GithubRepos.module.css";

/**
 * External-API requirement: pulls live public repos from the GitHub
 * REST API (services/githubService.ts) and renders them directly as
 * Works content, per the assignment's own example.
 */
export function GithubRepos() {
  const { repos, loading, error } = useGithubRepos();

  if (loading) return <LoadingSkeleton count={3} />;

  if (error) {
    return (
      <div className={styles.empty}>
        <p className="mono">{error}</p>
        <p>
          .env の <span className="mono">VITE_GITHUB_USERNAME</span>{" "}
          にGitHubのユーザー名を設定すると、ここに公開リポジトリが自動表示されます。
        </p>
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
