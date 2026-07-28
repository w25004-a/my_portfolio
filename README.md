# Arpan Essential Portfolio

A lightweight, responsive, bilingual portfolio built with **Next.js, React, TypeScript, Lucide icons, semantic HTML, and focused CSS**.

This project intentionally avoids unnecessary libraries, large animation systems, duplicated components, and complicated architecture. The code is written so that a beginner can read and update it, while the structure follows practical senior-development principles such as separation of content and layout, accessibility, responsive design, reusable data, and honest functionality.

---

## English

### 1. Project goal

The goal of this portfolio is to present Arpan's profile, skills, projects, strengths, certifications, résumé, and contact information in a professional way without making the project unnecessarily heavy.

The design follows these rules:

- Keep the interface minimalist and easy to scan.
- Use only the technologies that are actually required.
- Store English and Japanese content together instead of using browser translation.
- Make the layout responsive for desktop, tablet, and mobile screens.
- Use real semantic HTML elements such as `header`, `nav`, `main`, `section`, `article`, `form`, and `footer`.
- Add visual polish through small CSS interactions instead of animation libraries.
- Avoid pretending that unfinished project links or contact services are working.

### 2. Technology choices

| Technology | Purpose |
|---|---|
| Next.js | Application structure, routing, metadata, image optimization, and production build |
| React | Interactive language switching and contact-form behavior |
| TypeScript | Safer content structures and component code |
| Lucide React | Small, consistent interface icons |
| HTML | Accessible and semantic page structure |
| CSS | Layout, typography, responsiveness, and subtle interaction effects |

No Tailwind CSS, Bootstrap, animation library, database, CMS, translation API, or email backend is required for this version.

### 3. Main project structure

```text
arpan-essential-portfolio/
├── app/
│   ├── Portfolio.tsx       # Page structure and interactive behavior
│   ├── content.ts          # English and Japanese portfolio content
│   ├── globals.css         # All layout and design styles
│   ├── layout.tsx          # Root HTML and page metadata
│   └── page.tsx            # Home page entry
├── public/
│   ├── projects/           # Lightweight project preview graphics
│   ├── arpan-khatiwada-resume.pdf
│   ├── hero.webp
│   └── logo.png
├── package.json
└── README.md
```

The project uses a small number of files on purpose. Splitting every section into a separate component would create more files without giving this portfolio a real maintenance benefit.

### 4. How the portfolio was planned

#### Step 1: Define the required sections

The page was divided into only the sections needed by a recruiter or visitor:

1. Header and navigation
2. Hero introduction
3. About
4. Skills
5. Projects
6. Strengths and certifications
7. Contact
8. Footer

This keeps the visitor's journey clear and avoids filler sections.

#### Step 2: Separate content from markup

All English and Japanese text is stored in `app/content.ts`.

Example:

```ts
title: {
  en: "Hi, I’m Arpan.",
  ja: "こんにちは、アルパンです。",
}
```

The `text()` helper receives the bilingual value and the active language:

```ts
text(content.hero.title, language)
```

This makes text updates easier because the translations are not scattered throughout the JSX.

#### Step 3: Build the language switch

The language state is controlled in `app/Portfolio.tsx`:

```ts
const [language, setLanguage] = useState<Language>("en");
```

When the user presses the language button:

- English changes to Japanese, or Japanese changes to English.
- The selected value is stored in `localStorage`.
- The document's `lang` attribute is updated for accessibility.
- The chosen language remains selected after refreshing the page.

This system does not depend on Google Translate, browser translation, an external API, or an internet connection after the site has loaded.

### 5. Minimalist visual design

The design uses a small color system defined with CSS variables:

```css
:root {
  --background: #0d0d0d;
  --surface: #171717;
  --text: #f5f5f5;
  --muted: #a3a3a3;
  --line: #2b2b2b;
  --accent: #d8ff52;
}
```

This provides one consistent source for the background, cards, text, borders, and accent color.

The design remains appealing through:

- Strong typography and spacing
- Clear visual hierarchy
- One accent color
- Rounded cards used only where useful
- Small hover movement on buttons and project cards
- Clean project images
- Consistent borders and muted text

It deliberately avoids particles, glowing HUD systems, autoplay effects, loading screens, and large decorative animations.

### 6. Responsive design process

The layout starts with flexible desktop grids and changes at two practical breakpoints:

```css
@media (max-width: 860px) { ... }
@media (max-width: 560px) { ... }
```

#### Desktop

- Two-column hero
- Three-column skills and projects
- Two-column About, Strengths, and Contact sections

#### Tablet

- Single-column hero
- Two-column skills and projects
- Single-column content sections

#### Mobile

- One-column cards
- Full-width action buttons
- Wrapping header and horizontally scrollable navigation
- Smaller section spacing and image height

Fluid properties such as `min()`, `clamp()`, `aspect-ratio`, and flexible CSS grids help the design adapt between the breakpoints instead of targeting only fixed device sizes.

### 7. Project section improvements

Each project card includes:

- A lightweight SVG preview
- Project number
- Bilingual title and description
- Technology tags
- Live demo state
- Source-code state

The preview graphics are stored in `public/projects/`. SVG was selected because these placeholder previews are very small, remain sharp on every screen, and do not require a large image library.

The first portfolio demo points to the current website. The other buttons display **Coming soon / 準備中** until real URLs are added. This is more honest than adding fake or broken links.

To add a project URL, edit the matching item in `app/content.ts`:

```ts
demoUrl: "https://your-live-project.example",
sourceUrl: "https://github.com/your-username/your-project",
```

To use a real screenshot, place the image in `public/projects/` and update:

```ts
image: "/projects/your-project.webp",
```

Recommended screenshot dimensions are approximately `1200 × 720` pixels.

### 8. Résumé download

The hero section includes a direct résumé download link:

```tsx
<a href="/arpan-khatiwada-resume.pdf" download>
```

The file is stored in:

```text
public/arpan-khatiwada-resume.pdf
```

Replace this PDF with the final résumé while keeping the same file name, or update the path in `app/Portfolio.tsx`.

### 9. Contact form behavior

The form collects:

- Name
- Email address
- Message

HTML validation handles required fields and email formatting. When the form is submitted, JavaScript prepares a `mailto:` URL containing the entered information and opens the visitor's configured email application.

This approach was chosen because it is lightweight and does not falsely claim that a message was saved or sent by a server.

Limitations:

- The visitor needs an email application configured on the device.
- The website does not store submissions.
- There is no spam filtering or delivery tracking.

A real email service such as Resend, Formspree, or a custom Next.js route can be added later when actual server-side delivery is required.

### 10. Accessibility decisions

The project includes several small accessibility improvements:

- Semantic section elements
- Navigation labels
- Correct form labels
- Meaningful image alternative text
- Decorative icons hidden with `aria-hidden="true"`
- Disabled project states shown as non-clickable text instead of fake links
- Visible keyboard focus on form controls
- Document language updated when switching languages
- Reduced-motion support:

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition: none !important; }
}
```

### 11. Performance decisions

The portfolio stays lightweight by using:

- Only one external runtime dependency for icons
- Next.js image optimization
- Three small SVG project previews
- One global stylesheet
- No background video
- No animation framework
- No external translation request
- No unnecessary API route
- No database or CMS

The most important performance rule is simple: features are added only when they provide a clear benefit to the visitor.

### 12. Local setup

Requirements:

- Node.js 20.9 or newer
- npm

Run:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Production check:

```bash
npm run lint
npm run build
npm start
```

### 13. Information to update before publishing

Open `app/Portfolio.tsx` and replace:

```ts
const EMAIL = "your-email@example.com";
const GITHUB_URL = "https://github.com/your-username";
```

Also update:

- Project links in `app/content.ts`
- Project screenshots in `public/projects/`
- Résumé PDF in `public/`
- Metadata in `app/layout.tsx`
- Personal descriptions and skills in `app/content.ts`

### 14. Git workflow

Create the first commit:

```bash
git init
git add .
git commit -m "Create bilingual minimalist portfolio"
```

After making changes:

```bash
git add .
git commit -m "Improve project section"
git push
```

Use commit messages that describe the actual change instead of messages such as `update` or `fix` without context.

### 15. Deployment

A simple deployment option is Vercel:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Keep the detected Next.js settings.
4. Deploy.
5. Test the English/Japanese switch, résumé download, links, form, and mobile layout on the published URL.

No environment variables are required for the current `mailto:` contact form.

### 16. Future improvements

Useful future additions may include:

- Real project screenshots and links
- A Japanese résumé alongside the English résumé
- Open Graph preview image
- A real server-side email service
- More detailed case studies for completed projects
- Automated tests for language switching and navigation

Features should be added only after the related content is real and ready to show.

---

## 日本語

### 1. プロジェクトの目的

このポートフォリオは、アルパンのプロフィール、スキル、制作実績、強み、資格、履歴書、お問い合わせ情報を、プロフェッショナルかつ分かりやすく紹介するために制作しました。

プロジェクトを不必要に重くしないため、次の方針で設計しています。

- 見やすく、情報を探しやすいミニマルな画面にする
- 本当に必要な技術だけを使用する
- ブラウザ翻訳ではなく、英語と日本語の文章をあらかじめ用意する
- パソコン、タブレット、スマートフォンに対応する
- `header`、`nav`、`main`、`section`、`article`、`form`、`footer`など、意味のあるHTMLタグを使う
- 大きなアニメーションライブラリではなく、小さなCSS効果で見た目を整える
- 未完成のリンクや送信機能を、動いているように見せない

### 2. 使用技術と役割

| 技術 | 役割 |
|---|---|
| Next.js | アプリ構成、ルーティング、メタデータ、画像最適化、本番ビルド |
| React | 言語切替とお問い合わせフォームの操作 |
| TypeScript | コンテンツ構造とコンポーネントを安全に管理 |
| Lucide React | 軽量で統一されたアイコン |
| HTML | アクセシブルで意味のあるページ構造 |
| CSS | レイアウト、文字、レスポンシブ対応、小さな操作効果 |

このバージョンでは、Tailwind CSS、Bootstrap、アニメーションライブラリ、データベース、CMS、翻訳API、メール送信用バックエンドは使用していません。

### 3. 主なフォルダ構成

```text
arpan-essential-portfolio/
├── app/
│   ├── Portfolio.tsx       # ページ構造と操作処理
│   ├── content.ts          # 英語・日本語のコンテンツ
│   ├── globals.css         # すべてのレイアウトとデザイン
│   ├── layout.tsx          # ルートHTMLとメタデータ
│   └── page.tsx            # トップページの入口
├── public/
│   ├── projects/           # 軽量な制作物プレビュー画像
│   ├── arpan-khatiwada-resume.pdf
│   ├── hero.webp
│   └── logo.png
├── package.json
└── README.md
```

小規模なポートフォリオなので、必要以上にファイルを分割していません。各セクションをすべて別コンポーネントにすると、保守性が大きく上がらないままファイル数だけが増えるためです。

### 4. 制作の進め方

#### ステップ1：必要なセクションを決める

採用担当者や閲覧者が必要とする情報に絞り、次の構成にしました。

1. ヘッダーとナビゲーション
2. メインの自己紹介
3. 自己紹介
4. スキル
5. 制作実績
6. 強みと資格
7. お問い合わせ
8. フッター

不要なセクションを追加せず、閲覧者が自然な順番で情報を確認できるようにしています。

#### ステップ2：文章と画面構造を分ける

英語と日本語の文章は、すべて`app/content.ts`に保存しています。

例：

```ts
title: {
  en: "Hi, I’m Arpan.",
  ja: "こんにちは、アルパンです。",
}
```

`text()`関数に文章と現在の言語を渡して表示します。

```ts
text(content.hero.title, language)
```

文章をJSXのさまざまな場所に直接書かないため、翻訳や内容の変更がしやすくなっています。

#### ステップ3：言語切替を作る

`app/Portfolio.tsx`で現在の言語を管理しています。

```ts
const [language, setLanguage] = useState<Language>("en");
```

言語ボタンを押したときに、次の処理を行います。

- 英語から日本語、または日本語から英語に切り替える
- 選択した言語を`localStorage`に保存する
- アクセシビリティのためHTMLの`lang`属性を変更する
- ページを更新した後も選択した言語を維持する

Google翻訳、ブラウザ翻訳、外部APIには依存していません。英語と日本語の文章は、プロジェクト内に直接保存されています。

### 5. ミニマルデザイン

色はCSS変数でまとめて管理しています。

```css
:root {
  --background: #0d0d0d;
  --surface: #171717;
  --text: #f5f5f5;
  --muted: #a3a3a3;
  --line: #2b2b2b;
  --accent: #d8ff52;
}
```

背景、カード、文字、線、アクセントカラーを一か所で変更できます。

見た目を良くするために使用している要素は、次のような必要最小限のものです。

- 大きさの差が分かりやすい文字設計
- 十分な余白
- アクセントカラーは1色だけ
- 必要な場所だけに角丸カードを使う
- ボタンと制作物カードの小さなホバー移動
- シンプルな制作物画像
- 統一された境界線と補助文字

パーティクル、HUD演出、自動再生、ローディング画面、大きな装飾アニメーションは使用していません。

### 6. レスポンシブ対応の作り方

基本レイアウトは柔軟なグリッドで作成し、主に次の2つの画面幅で切り替えています。

```css
@media (max-width: 860px) { ... }
@media (max-width: 560px) { ... }
```

#### パソコン

- Heroは2カラム
- スキルと制作実績は3カラム
- 自己紹介、強み、お問い合わせは2カラム

#### タブレット

- Heroは1カラム
- スキルと制作実績は2カラム
- その他の内容は1カラム

#### スマートフォン

- カードはすべて1カラム
- アクションボタンは横幅いっぱい
- ヘッダーは折り返し、ナビゲーションは横スクロール
- セクションの余白と画像の高さを小さくする

`min()`、`clamp()`、`aspect-ratio`、柔軟なCSS Gridを使い、特定の端末だけではなく、途中の画面幅でも自然に変化するようにしています。

### 7. 制作実績セクションの改善

各制作物カードには、次の情報があります。

- 軽量なSVGプレビュー
- 制作物番号
- 英語・日本語のタイトルと説明
- 使用技術タグ
- デモの状態
- ソースコードの状態

プレビュー画像は`public/projects/`に保存しています。現在の画像はプレースホルダーなので、データ量が小さく、高解像度画面でもきれいに表示できるSVGを使用しています。

最初のポートフォリオのデモボタンは現在のサイトを開きます。その他のリンクは、実際のURLを追加するまで**準備中**と表示します。存在しないリンクや壊れたリンクを表示しないための設計です。

制作物URLを追加する場合は、`app/content.ts`の対象項目を変更します。

```ts
demoUrl: "https://your-live-project.example",
sourceUrl: "https://github.com/your-username/your-project",
```

実際のスクリーンショットを使用する場合は、画像を`public/projects/`に追加し、次のパスを変更します。

```ts
image: "/projects/your-project.webp",
```

推奨する画像サイズは約`1200 × 720`ピクセルです。

### 8. 履歴書ダウンロード

Heroセクションに、履歴書を直接ダウンロードするリンクがあります。

```tsx
<a href="/arpan-khatiwada-resume.pdf" download>
```

ファイルの保存場所：

```text
public/arpan-khatiwada-resume.pdf
```

完成した履歴書を同じファイル名で置き換えるか、`app/Portfolio.tsx`のパスを変更してください。

### 9. お問い合わせフォームの動作

フォームでは、次の内容を入力できます。

- お名前
- メールアドレス
- メッセージ

HTMLの検証機能で、必須入力とメール形式を確認します。送信すると、JavaScriptが入力内容を含む`mailto:`リンクを作り、端末に設定されているメールアプリを開きます。

この方法は軽量で、サーバーがないのに「送信完了」と表示するような誤解を生まないために選びました。

注意点：

- 閲覧者の端末にメールアプリの設定が必要です。
- Webサイトは入力内容を保存しません。
- スパム対策や配信確認はありません。

実際のサーバー送信が必要になった場合は、Resend、Formspree、またはNext.jsのAPIルートなどを後から追加できます。

### 10. アクセシビリティへの配慮

次のような基本的な対応を行っています。

- 意味のあるHTMLセクション
- ナビゲーションのラベル
- フォーム項目とラベルの関連付け
- 内容が分かる画像代替テキスト
- 装飾アイコンに`aria-hidden="true"`を設定
- 未完成リンクをクリックできない表示にする
- フォーム操作時のフォーカスを見やすくする
- 言語切替時にHTMLの言語設定を変更する
- 動きを減らす設定に対応する

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition: none !important; }
}
```

### 11. 軽量化のための判断

このポートフォリオでは、次の方法でファイルと処理を増やしすぎないようにしています。

- アイコン以外の大きな実行時ライブラリを追加しない
- Next.jsの画像最適化を使用する
- 3枚の小さなSVGプレビューを使用する
- CSSファイルを1つにまとめる
- 背景動画を使用しない
- アニメーションフレームワークを使用しない
- 翻訳のための外部通信を行わない
- 不要なAPIルートを作らない
- データベースやCMSを追加しない

一番重要なルールは、閲覧者に明確な価値がある機能だけを追加することです。

### 12. ローカル環境での実行

必要なもの：

- Node.js 20.9以上
- npm

実行コマンド：

```bash
npm install
npm run dev
```

ブラウザで開きます。

```text
http://localhost:3000
```

本番確認：

```bash
npm run lint
npm run build
npm start
```

### 13. 公開前に変更する情報

`app/Portfolio.tsx`を開き、次の内容を変更してください。

```ts
const EMAIL = "your-email@example.com";
const GITHUB_URL = "https://github.com/your-username";
```

さらに、次の項目も確認してください。

- `app/content.ts`の制作物リンク
- `public/projects/`の制作物画像
- `public/`の履歴書PDF
- `app/layout.tsx`のメタデータ
- `app/content.ts`のプロフィール、スキル、説明文

### 14. Gitでの管理

最初のコミット：

```bash
git init
git add .
git commit -m "Create bilingual minimalist portfolio"
```

変更後：

```bash
git add .
git commit -m "Improve project section"
git push
```

`update`や`fix`だけではなく、実際に何を変更したか分かるコミットメッセージを推奨します。

### 15. デプロイ

簡単な公開方法としてVercelを利用できます。

1. プロジェクトをGitHubにpushする
2. Vercelにリポジトリを読み込む
3. 自動検出されたNext.js設定を使用する
4. デプロイする
5. 公開URLで言語切替、履歴書、リンク、フォーム、スマートフォン表示を確認する

現在の`mailto:`フォームでは、環境変数は必要ありません。

### 16. 今後の改善案

今後追加する価値があるもの：

- 実際の制作物スクリーンショットとURL
- 英語版と日本語版の履歴書
- SNS共有用のOpen Graph画像
- サーバー側のメール送信
- 完成したプロジェクトの詳しいケーススタディ
- 言語切替とナビゲーションの自動テスト

関連する内容が完成してから機能を追加し、見た目だけの機能は増やさない方針です。

---

## License / ライセンス

This portfolio is intended for Arpan's personal use. Replace the personal information and assets before reusing it for another person.

このポートフォリオは、アルパン本人の利用を目的としています。他の人が再利用する場合は、個人情報と画像を変更してください。

---

## Organized component pathways / 分かりやすいコンポーネント構成

The source code is now organized by visible page section. Open `FOLDER_GUIDE.md` for a simple map showing where to edit the header, hero, projects, contact form, translations, and shared styles.

ソースコードは、画面に表示されるセクションごとに整理されています。ヘッダー、Hero、制作実績、お問い合わせ、翻訳、共通CSSの編集場所は `FOLDER_GUIDE.md` で確認できます。
