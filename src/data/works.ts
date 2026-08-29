import type { Work } from "../types/work";

/**
 * Curated project list. This is static data, not fetched from an API —
 * these are real projects, so they're checked in as source rather than
 * pulled from a CMS. GitHub repos (the external-API requirement) are
 * fetched live and shown separately on the Works page.
 */
export const works: Work[] = [
  {
    id: "kanflow",
    title: "KanFlow",
    category: "web",
    summary: "リアルタイム共同編集のカンバン & ホワイトボード",
    description:
      "2人チームでの学校プロジェクト。WebSocketによるリアルタイム同期、ドラッグ&ドロップ対応のカンバンボード、消しゴム機能付きフリーハンドホワイトボード、付箋機能をフロントエンド担当として実装。バックエンドはチームメイトがFastAPIで構築。",
    tech: ["Vanilla JS", "FastAPI", "WebSocket"],
    role: "フロントエンド担当（2人チーム）",
  },
  {
    id: "limbus-realm",
    title: "LIMBUS REALM",
    category: "game",
    summary: "Firebaseを使ったマルチプレイヤーRPG",
    description:
      "Firebase Realtime Databaseを用いたマルチプレイヤーRPG。ダンジョン探索構造、複数クラス、ボス戦、協力プレイモード、そして「絶望技」システムを実装。",
    tech: ["Firebase Realtime Database", "JavaScript"],
  },
  {
    id: "backrooms-fps",
    title: "Backrooms FPS",
    category: "game",
    summary: "Three.js製の3Dホラーサバイバル",
    description:
      "Three.jsで制作した3D FPSゲーム。プロシージャル生成される迷路構造、AI敵キャラクター、独特な雰囲気を演出するライティング・霧の演出システムを実装。",
    tech: ["Three.js", "JavaScript"],
  },
  {
    id: "procedural-cityscape",
    title: "Procedural Cityscape",
    category: "3d",
    summary: "Blender MCPで組み上げたプロシージャル都市",
    description:
      "Blenderの MCP 連携を使って制作した大規模なプロシージャル都市モデル。建物プロポーションの自動生成、都市密度の分布コントロール、電柱・自動販売機・信号機などVRChat風の小道具、プロシージャルマテリアルを構築。",
    tech: ["Blender", "Blender MCP"],
  },
  {
    id: "tactical-knife",
    title: "Tactical Knife Model",
    category: "3d",
    summary: "参考写真から起こしたハードサーフェスモデル",
    description: "参考写真をもとにBlenderで制作したタクティカルナイフの3Dモデル。",
    tech: ["Blender"],
  },
  {
    id: "gyoumu-note",
    title: "業務ノート",
    category: "web",
    summary: "AI活用型タスクプランナー（単一HTML）",
    description:
      "学期末課題「未来の自分へのギフト」として制作したAI活用型のタスクプランナー。ビルド不要で動く単一のHTMLファイルとして実装。",
    tech: ["HTML", "JavaScript", "AI連携"],
  },
];
