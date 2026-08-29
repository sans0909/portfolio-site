import type {
  BlogPost,
  StrapiBlogAttributes,
  StrapiListResponse,
  StrapiV4Entry,
} from "../types/blog";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string | undefined;

function isV4Entry(
  entry: StrapiV4Entry<StrapiBlogAttributes> | ({ id: number } & StrapiBlogAttributes)
): entry is StrapiV4Entry<StrapiBlogAttributes> {
  return "attributes" in entry;
}

/** A single node in Strapi's Rich text (Blocks) JSON format. */
interface BlocksNode {
  type?: string;
  text?: string;
  children?: BlocksNode[];
}

function extractText(node: BlocksNode): string {
  if (typeof node.text === "string") return node.text;
  if (node.children) return node.children.map(extractText).join("");
  return "";
}

/**
 * Strapi's "Rich text (Blocks)" field type returns an array of block
 * nodes (paragraphs, headings, lists...) rather than a plain string —
 * a "Long text" field would return a string directly. This normalizes
 * either shape to plain text so the rest of the app only ever deals
 * with a string. List/heading formatting is flattened rather than
 * preserved; rendering real rich formatting would need a proper
 * blocks-to-JSX renderer, which is out of scope here.
 */
function blocksToPlainText(content: unknown): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content.map((block) => extractText(block as BlocksNode)).join("\n\n");
}

function resolveImageUrl(attrs: StrapiBlogAttributes): string | null {
  const image = attrs.image;
  if (!image) return null;
  // Strapi v4 (relation wrapped in `data`) vs v5 (flat media object)
  const rawUrl = image.data?.attributes?.url ?? image.url ?? null;
  if (!rawUrl) return null;
  if (rawUrl.startsWith("http")) return rawUrl;
  return `${STRAPI_URL ?? ""}${rawUrl}`;
}

/** Normalizes either Strapi v4 (`attributes`-wrapped) or v5 (flat) entries. */
function normalizeEntry(
  entry: StrapiV4Entry<StrapiBlogAttributes> | ({ id: number } & StrapiBlogAttributes)
): BlogPost {
  const attrs = isV4Entry(entry) ? entry.attributes : entry;
  const content = blocksToPlainText(attrs.content);
  return {
    id: entry.id,
    title: attrs.title ?? "(無題)",
    content,
    excerpt: content.length > 80 ? `${content.slice(0, 80)}…` : content,
    image: resolveImageUrl(attrs),
    category: attrs.category ?? "未分類",
    publishedAt: attrs.publishedAt ?? "",
  };
}

/**
 * Fetches the blog list from Strapi. Throws if VITE_STRAPI_URL isn't
 * configured or the request fails — callers (see hooks/useBlogPosts.ts)
 * are expected to fall back to local sample data in that case.
 */
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  if (!STRAPI_URL) {
    throw new Error("VITE_STRAPI_URL が設定されていません");
  }

  const res = await fetch(`${STRAPI_URL}/api/blogs?populate=*&sort=publishedAt:desc`);
  if (!res.ok) {
    throw new Error(`Strapiからの取得に失敗しました (status: ${res.status})`);
  }

  const json = (await res.json()) as StrapiListResponse<StrapiBlogAttributes>;
  return json.data.map(normalizeEntry);
}

export async function fetchBlogPostById(id: string): Promise<BlogPost | undefined> {
  const posts = await fetchBlogPosts();
  return posts.find((post) => String(post.id) === id);
}
