# 前田健翔 Portfolio

## 概要

Web開発・3Dモデリング・ゲーム開発を横断するポートフォリオサイト。React +
TypeScript + Viteで構築し、ブログ機能はStrapi、お問い合わせフォームはEmailJS、Worksページの一部はGitHub
APIから自動取得したリポジトリを表示する。


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

[Figmaデザイン](https://www.figma.com/design/oGX5QybEVEYxoLqJIYxChc/%E6%8F%90%E5%87%BA%E7%94%A8?node-id=6-400&t=M2gXISuQ831P12sJ-1)

このリポジトリのデザイントークン（`src/styles/tokens.css`）は、Figmaで先にデザインする際の土台として使えます。

- 配色: 背景 `#10131A` / パネル `#171B24` / 罫線 `#262C38` /
  シグナルアクセント（Blenderオレンジ）`#F2793B` / ワイヤーフレームアクセント（シアン）`#5FE1D0` /
  本文 `#ECEFF3`
- フォント: 見出し・本文=Noto Sans JP、ラベル・タグ・数値=JetBrains Mono
- レイアウト方針: 3Dビューポート/エディターHUDをモチーフにしたダークテーマ。角に配置したブラケット（コーナー）装飾、グリッド背景、ワイヤーフレームのジェムをシグネチャー要素として使用

## 制作期間

約3日。短期間で全体を形にするため、ページ構成と共通コンポーネントを整理し、デザイン・実装を並行して進めた。※期間は制作時の記録に基づく。

## 実装した機能

- React Routerによる7ページ構成（Home / About / Skills / Works / Blog一覧 / Blog詳細 / Contact、および404）
- Strapiからのブログ記事取得（Strapi v4 / v5どちらのレスポンス形式にも対応する正規化処理つき）。未接続時はサンプルデータにフォールバック
- EmailJSによるお問い合わせフォーム（必須項目チェック、送信中/成功/エラー表示）
- GitHub APIから取得した公開リポジトリをWorksページに自動表示
- インタラクション: スクロール連動のフェードイン表示、Worksのカテゴリ絞り込み、モバイル用ハンバーガーメニュー、ブログ読み込み中のスケルトン表示
- レスポンシブ対応（PC / スマートフォン）
- `prefers-reduced-motion` とキーボードフォーカスへの配慮

## 工夫したところ

### 1. 情報量と見やすさの両立

Web開発・3Dモデリング・ゲーム開発など複数の分野を紹介できるようにしつつ、情報が一度に押し寄せない構成を意識した。Home、About、Skills、Works、Blog、Contactに情報を分け、共通のヘッダーや見出し、タグなどをコンポーネント化して、ページ間で表示ルールをそろえている。

### 2. 3Dツールをイメージしたビジュアル

BlenderやUnityなどの制作ツール、ゲームのHUDから着想を得て、ダークカラー、グリッド、モノスペースフォント、ワイヤーフレームの装飾を採用した。装飾だけが目立ちすぎないよう、本文の色やパネルのコントラストを分け、情報を読み取りやすくすることを目指した。

### 3. 外部サービスが利用できない場合も考慮

ブログ記事はStrapiから取得し、レスポンス形式の違いを吸収する正規化処理を用意した。また、CMSに接続できない場合に備えてサンプルデータへ切り替える仕組みを設けている。GitHubの公開リポジトリはAPIから取得し、問い合わせフォームはEmailJSを通じて送信する構成に分けた。

### 4. 操作環境への配慮

スマートフォンでも利用できるレスポンシブレイアウトに加え、読み込み中のスケルトン表示、スクロール時の表示演出、キーボードフォーカス、`prefers-reduced-motion`への対応を取り入れた。

## 難しかったところ・対応したこと

デザインをFigmaで整理し、ページ全体の統一感を保ちながら実装に落とし込む部分に時間を要した。色や文字、余白、装飾のルールをデザイントークンとしてまとめ、共通コンポーネントとCSS Modulesを使うことで、ページごとにスタイルがばらつきにくい構成を目指した。

また、StrapiのバージョンによってAPIレスポンスの形が異なる点にも対応が必要だったため、取得したデータを画面で扱いやすい形式に整える処理を用意した。外部サービスとの接続を画面コンポーネントから分離し、取得処理や送信処理をサービス層にまとめることで、役割を追いやすい構成にしている。

## 今後改善したい点

- 実際の利用環境で、ブログ取得・問い合わせ送信・GitHub API連携の動作確認を継続する。
- エラー時の案内や入力フォームの使いやすさを見直し、利用者が次に取るべき行動を分かりやすくする。
- 作品ごとに制作背景、担当範囲、技術選定の理由、実装で工夫した点を追加し、制作過程も伝わる内容にする。

## 参考デザイン

特定の1サイトを模写したわけではなく、BlenderやUnityなどの3Dモデリング/ゲームエンジンのエディターUI、ゲームのHUD(ヘッドアップディスプレイ)デザインからインスピレーションを得た。ダークな配色、グリッド背景、モノスペースフォントのラベリングといった要素を取り入れている。

---

## セットアップ

### 1. フロントエンド

```bash
npm install
cp .env.example .env   
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

