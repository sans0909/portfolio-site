/**
 * Normalized shape the app renders. Strapi's REST response wraps this
 * differently depending on version (v4 nests fields under `attributes`,
 * v5 returns them flat) — see services/strapiService.ts for the
 * normalizer that maps either shape onto this type.
 */
export interface BlogPost {
  id: number | string;
  title: string;
  content: string;
  excerpt: string;
  image: string | null;
  category: string;
  publishedAt: string;
}

/** Raw Strapi v4-style entry: { id, attributes: {...} } */
export interface StrapiV4Entry<T> {
  id: number;
  attributes: T;
}

export interface StrapiListResponse<T> {
  data: Array<StrapiV4Entry<T> | ({ id: number } & T)>;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Strapi's "Rich text (Blocks)" field returns a JSON array of block
 * nodes, not a plain string — see services/strapiService.ts for the
 * conversion to plain text. A "Long text" field would return a string
 * directly, so this stays `unknown` until normalized.
 */
export interface StrapiBlogAttributes {
  title: string;
  content: unknown;
  category?: string;
  publishedAt?: string;
  image?: {
    data?: {
      attributes?: { url: string };
    } | null;
    url?: string;
  } | null;
}
