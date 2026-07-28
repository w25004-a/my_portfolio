# Folder Guide / フォルダーガイド

This project is divided by visible page sections. Each section has its React code and CSS together.
このプロジェクトは、画面に表示されるセクションごとに分けています。ReactコードとCSSを同じフォルダーに置いています。

```text
app/
├── _components/
│   ├── Portfolio/
│   │   └── index.tsx          # Combines every section and controls language
│   ├── Header/
│   │   ├── index.tsx          # Logo, navigation, language button
│   │   └── index.module.css
│   ├── Hero/
│   │   ├── index.tsx          # Main introduction and action buttons
│   │   └── index.module.css
│   ├── SectionHeading/
│   │   └── index.tsx          # Shared section title component
│   ├── About/
│   │   ├── index.tsx
│   │   └── index.module.css
│   ├── Skills/
│   │   ├── index.tsx
│   │   └── index.module.css
│   ├── Projects/
│   │   ├── index.tsx
│   │   └── index.module.css
│   ├── Strengths/
│   │   ├── index.tsx
│   │   └── index.module.css
│   ├── Contact/
│   │   ├── index.tsx
│   │   └── index.module.css
│   └── Footer/
│       ├── index.tsx
│       └── index.module.css
├── content.ts                 # English and Japanese text
├── globals.css                # Shared colors, reset, sections, buttons
├── layout.tsx                 # Page metadata and HTML layout
└── page.tsx                   # Loads the Portfolio component
```

## How to edit / 編集方法

- Change text or translations: `app/content.ts`
- Change header: `app/_components/Header/`
- Change hero: `app/_components/Hero/`
- Change projects: `app/_components/Projects/`
- Change contact email/GitHub: `app/_components/Contact/index.tsx`
- Change shared colors: `app/globals.css`

Each folder has one clear responsibility. This keeps the code easy to follow without creating separate pages or unnecessary libraries.
各フォルダーの役割は一つだけです。不要なページやライブラリを増やさず、コードを追いやすくしています。

## Recent interface updates

- **Icon navigation:** `app/_components/Header/index.tsx` uses Lucide icons for Home, About, Skills, Projects, Strengths, and Contact.
- **Active section:** the matching navigation icon is highlighted while its section is visible.
- **Hover tooltip:** hovering or focusing an icon shows its English or Japanese label.
- **Circular Hero image:** `app/_components/Hero/index.module.css` uses `aspect-ratio: 1` and `border-radius: 50%` so the image stays circular on every screen size.
