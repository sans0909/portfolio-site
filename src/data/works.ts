import type { Work } from "../types/work";

/**
 * Curated project list. This is static data, not fetched from an API —
 * these are real projects, so they're checked in as source rather than
 * pulled from a CMS. GitHub repos are fetched live from the GitHub API
 * and shown separately on the Works page.
 */
export const works: Work[] = [
  {
    id: "nebura-01",
    title: "NEBURA-01",
    category: "game",
    summary: "VRChatでプレイできるUnity製ゲームワールド",
    description:
      "Unityで個人制作しているVRChat向けのゲームワールド。企画・設計・プログラミング・ステージ制作・UI制作・デバッグまで一人で担当。プレイヤーのHP管理、敵キャラクターの移動制御（Waypoint / NavMesh）、ラウンド進行、HUD / UI、カウントダウン、オーディオ制御などを実装。",
    tech: ["Unity", "C#", "VRChat", "NavMesh"],
    role: "個人制作（企画・設計・実装）",
    link: "https://github.com/sans0909/NEBURA-01",
  },
  {
    id: "todo-app",
    title: "Todo App",
    category: "web",
    summary: "TypeScriptで制作したTodoアプリ",
    description: "TypeScriptを使用して制作したTodoアプリケーション。",
    tech: ["TypeScript"],
    link: "https://github.com/sans0909/todo-app",
  },
  {
    id: "kanflow",
    title: "KanFlow",
    category: "web",
    summary: "リアルタイム共同編集のカンバン & ホワイトボード",
    description:
      "学校での個人制作。WebSocketによるリアルタイム同期、ドラッグ&ドロップ対応のカンバンボード、消しゴム機能付きフリーハンドホワイトボード、付箋機能を実装。バックエンドにFastAPIを使用。",
    tech: ["Vanilla JS", "FastAPI", "WebSocket"],
    role: "個人制作",
    link: "https://github.com/sans0909/kanflow",
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
