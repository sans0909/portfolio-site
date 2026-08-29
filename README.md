# 前田健翔 Portfolio

## 概要

Web開発・3Dモデリング・ゲーム開発を横断するポートフォリオサイト。React +
TypeScript + Viteで構築し、ブログ機能はStrapi、お問い合わせフォームはEmailJS、Worksページの一部はGitHub
APIから自動取得したリポジトリを表示する。

> 🚧 **提出前にやること** — このREADMEと以下のチェックリスト（[未実施のタスク](#未実施のタスク)）を確認してください。
> フロントエンドの実装一式はこのリポジトリに揃っていますが、Figmaデザイン・Strapiの実データ投入・EmailJSアカウントの発行・公開URLの発行は、課題の趣旨上あなた自身が行う必要があります。

## 使用技術

- React 19 / TypeScript / Vite
- React Router（ページ遷移・ルーティング）
- CSS Modules + カスタムCSS変数によるデザイントークン（Tailwindやstyled-componentsは未使用）
- Strapi（ブログCMS。REST APIから取得）
- EmailJS（お問い合わせフォームの送信）
- GitHub REST API（外部API連携）

## 使用API

- **Strapi API**（`GET /api/blogs`）— ブログ記事の一覧・詳細取得
- **GitHub REST API**（`GET /users/{username}/repos`）— 公開リポジトリをWorksページに自動表示

## Figma

`(ここに、あなたが作成したFigmaのURLを記載してください)`

このリポジトリのデザイントークン（`src/styles/tokens.css`）は、Figmaで先にデザインする際の土台として使えます。

- 配色: 背景 `#10131A` / パネル `#171B24` / 罫線 `#262C38` /
  シグナルアクセント（Blenderオレンジ）`#F2793B` / ワイヤーフレームアクセント（シアン）`#5FE1D0` /
  本文 `#ECEFF3`
- フォント: 見出し・本文=Noto Sans JP、ラベル・タグ・数値=JetBrains Mono
- レイアウト方針: 3Dビューポート/エディターHUDをモチーフにしたダークテーマ。角に配置したブラケット（コーナー）装飾、グリッド背景、ワイヤーフレームのジェムをシグネチャー要素として使用

## 参考デザイン

`(参考にしたポートフォリオサイトやUIギャラリーのURLをここに記載してください)`

## 制作期間

`(制作期間をここに記載してください)`

## 実装した機能

- React Routerによる7ページ構成（Home / About / Skills / Works / Blog一覧 / Blog詳細 / Contact、および404）
- Strapiからのブログ記事取得（Strapi v4 / v5どちらのレスポンス形式にも対応する正規化処理つき）。未接続時はサンプルデータにフォールバック
- EmailJSによるお問い合わせフォーム（必須項目チェック、送信中/成功/エラー表示）
- GitHub APIから取得した公開リポジトリをWorksページに自動表示
- インタラクション: スクロール連動のフェードイン表示、Worksのカテゴリ絞り込み、モバイル用ハンバーガーメニュー、ブログ読み込み中のスケルトン表示
- レスポンシブ対応（PC / スマートフォン）
- `prefers-reduced-motion` とキーボードフォーカスへの配慮

## 工夫したところ

`(実装の中で工夫した点をここに記載してください。例: Strapiのレスポンス形式の差異を吸収する正規化処理、デザインの方向性 など)`

## 難しかったところ

`(実装で難しかった点・詰まった点をここに記載してください)`

---

## セットアップ

### 1. フロントエンド

```bash
npm install
cp .env.example .env   # 値を自分の環境に合わせて編集
npm run dev
```

### 2. Strapiのセットアップ（別リポジトリ/別フォルダとして用意）

このリポジトリにはStrapi本体は含まれていません（フロントエンドと切り離して運用するため）。以下の手順で用意してください。

```bash
npx create-strapi-app@latest my-portfolio-cms --quickstart
```

1. 管理画面（`http://localhost:1337/admin`）で管理者アカウントを作成
2. **Content-Type Builder** で `Blog` コンテンツタイプを作成し、以下のフィールドを追加
   - `title`（Text）
   - `content`（Rich text または Long text）
   - `image`（Media）
   - `category`（Text）
   - `publishedAt` はStrapiが標準で持つ公開日時フィールドをそのまま使用
3. **Settings → Roles → Public** で `blog` の `find` / `findOne` 権限を有効化（公開APIとして読み取り許可）
4. 記事を数件登録し、`http://localhost:1337/api/blogs?populate=*` で取得できることを確認
5. `.env` の `VITE_STRAPI_URL` を Strapi のURL（例: `http://localhost:1337`）に設定

フロントエンド側の取得・正規化処理は `src/services/strapiService.ts` を参照。

### 3. EmailJSのセットアップ

1. [EmailJS](https://www.emailjs.com/) でアカウントを作成
2. Email Service（送信元となるメールアカウント）を追加し、Service IDを取得
3. Email Template を作成し、`from_name` / `from_email` / `subject` / `message` の変数をテンプレート内で使用
4. Public Key（Account → API Keys）を取得
5. `.env` の `VITE_EMAILJS_SERVICE_ID` / `VITE_EMAILJS_TEMPLATE_ID` / `VITE_EMAILJS_PUBLIC_KEY` を設定

送信処理は `src/services/emailService.ts`、フォーム本体は `src/components/contact/ContactForm.tsx` を参照。

### 4. GitHub API（外部API連携）

`.env` の `VITE_GITHUB_USERNAME` に自分のGitHubユーザー名を設定するだけで、Worksページに公開リポジトリが自動表示されます（認証不要・未認証時は60リクエスト/時間の制限あり）。取得処理は `src/services/githubService.ts`。

## フォルダ構成

```
src/
├── components/   # UIコンポーネント（layout / common / home / works / blog / contact）
├── pages/        # ルーティング単位のページ
├── hooks/        # データ取得・状態管理用のカスタムフック
├── services/      # 外部API/CMSとの通信（Strapi / GitHub / EmailJS）
├── types/        # 型定義
├── data/         # 静的データ（Works一覧、Skills一覧、Blogフォールバック）
└── styles/       # デザイントークンとグローバルCSS
```

## 未実施のタスク

課題の必須条件を満たすために、提出前に必ず対応してください。

- [ ] Figmaでワイヤーフレーム・デザインを作成し、実装と大きく乖離しないか確認する
- [ ] Strapiを実際にセットアップし、本物のブログ記事を登録する（上記手順を参照）
- [ ] EmailJSのアカウントを作成し、実際にメールが届くことを確認する
- [ ] `.env` の `VITE_GITHUB_USERNAME` を自分のユーザー名に変更する
- [ ] `src/components/layout/Footer.tsx` のSNS/GitHubリンクを実際のURLに差し替える
- [ ] サイトをデプロイし、公開URLを用意する
- [ ] このREADMEの「Figma」「参考デザイン」「制作期間」「工夫したところ」「難しかったところ」を自分の言葉で埋める
- [ ] GitHub Repositoryを作成し、コードをpushする
- [ ] Strapiの実装テスト（授業内）に備えて、`strapiService.ts` の正規化処理など、実装内容を自分の言葉で説明できるようにしておく
