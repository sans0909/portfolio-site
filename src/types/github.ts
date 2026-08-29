export interface GithubRepo {
  id: number;
  name: string;
  htmlUrl: string;
  description: string | null;
  language: string | null;
  stars: number;
  topics: string[];
  updatedAt: string;
  isFork: boolean;
}

/** Shape of a single item as returned by GET /users/{username}/repos */
export interface GithubApiRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  updated_at: string;
  fork: boolean;
}
