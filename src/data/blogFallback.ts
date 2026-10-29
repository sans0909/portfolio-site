import type { BlogPost } from "../types/blog";

/**
 * Shown when VITE_STRAPI_URL is unset or unreachable (e.g. running the
 * frontend without a local Strapi instance). Lets the UI be demoed and
 * developed without a live CMS. Swap for real entries once Strapi is
 * running — see README.
 */
export const blogFallback: BlogPost[] = [
  {
    id: "fallback-1",
    title: "KanFlowの開発を振り返って",
    excerpt: "個人制作のリアルタイム共同編集アプリ開発から学んだこと。",
    content:
      "KanFlowはカンバンボードとフリーハンドのホワイトボードを組み合わせた共同編集ツールです。WebSocketでの状態同期まわりで、複数人が同時に付箋を動かした際の競合処理に苦労しました。今回はシンプルな Last-Write-Wins 方式で解決しましたが、より厳密な同期が必要な場合はCRDTのような仕組みも検討したいです。",
    image: null,
    category: "Web開発",
    publishedAt: "2026-06-01T00:00:00.000Z",
  },
  {
    id: "fallback-3",
    title: "Blender MCPでプロシージャル都市を組む",
    excerpt: "MCP連携でBlenderを操作し、大規模な都市モデルを自動生成。",
    content:
      "Blender MCPを使うと、Pythonスクリプトの延長でBlenderのシーンを対話的に組み立てられます。建物のプロポーションや配置密度をパラメータ化し、VRChat風の小道具（電柱・自動販売機・信号機）をランダムに配置することで、都市らしい密度感を再現しました。",
    image: null,
    category: "3Dモデリング",
    publishedAt: "2026-04-22T00:00:00.000Z",
  },
];
