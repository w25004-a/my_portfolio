import { Subtitles } from "lucide-react";

export type Language = "en" | "ja";
export type LocalizedText = Readonly<Record<Language, string>>;

export const text = (value: LocalizedText, language: Language) => value[language];

export const content = {
  navigation: [
    { id: "about", label: { en: "About", ja: "自己紹介" } },
    { id: "skills", label: { en: "Skills", ja: "スキル" } },
    { id: "projects", label: { en: "Projects", ja: "制作実績" } },
    { id: "strengths", label: { en: "Strengths", ja: "強み" } },
    { id: "contact", label: { en: "Contact", ja: "お問い合わせ" } },
  ],
  hero: {
    eyebrow: { en: "WEB PROGRAMMING STUDENT", ja: "WEBプログラミング学生" },
    title: { en: "Hi, I'm ARPAN.", ja: "こんにちは、" },
    Subtitle: { en:"", ja: "アルパンです。" },
    description: {
      en: "I'm a WEB PROGRAMMING Student studying in Japan.",
      ja: "私は日本でWebプログラミングを学んでいる学生です。",
    },
    work: { en: "View projects", ja: "制作実績を見る" },
    resume: { en: "Download resume", ja: "履歴書をダウンロード" },
  },
  about: {
    label: { en: "About", ja: "自己紹介" },
    title: { en: "Learning by building.", ja: "作りながら学ぶ。" },
    paragraphs: [
      {
        en: "I am an IT student from Nepal studying web programming in Okinawa, Japan. I enjoy turning ideas into simple and useful interfaces.",
        ja: "ネパール出身で、現在は沖縄の専門学校でWebプログラミングを学んでいます。アイデアをシンプルで使いやすい画面にすることが好きです。",
      },
      {
        en: "My goal is to become a dependable developer who writes understandable code, communicates well, and keeps improving.",
        ja: "分かりやすいコードを書き、周りと協力しながら成長を続けられる、信頼されるエンジニアを目指しています。",
      },
    ],
    facts: [
      { name: { en: "Location", ja: "所在地" }, value: { en: "Okinawa, Japan", ja: "日本・沖縄" } },
      { name: { en: "Languages", ja: "言語" }, value: { en: "Nepali, Japanese, English", ja: "ネパール語・日本語・英語" } },
      { name: { en: "Focus", ja: "学習分野" }, value: { en: "Web development", ja: "Web開発" } },
    ],
  },
  skills: {
    label: { en: "Skills", ja: "スキル" },
    title: { en: "Tools I use.", ja: "使用している技術。" },
    items: [
      { name: "Next.js", detail: { en: "Responsive interfaces and App Router projects", ja: "レスポンシブ画面とApp Routerを使った制作" } },
      { name: "HTML / CSS", detail: { en: "Semantic structure and practical styling", ja: "意味のある構造と必要な部分に絞ったデザイン" } },
      { name: "JavaScript", detail: { en: "Typed components and browser logic", ja: "型を使ったコンポーネントと画面ロジック" } },
      { name: "Java", detail: { en: "Object-oriented programming fundamentals", ja: "オブジェクト指向プログラミングの基礎" } },
      { name: "SQL", detail: { en: "Tables, joins, keys, and relational design", ja: "テーブル、JOIN、キー、リレーショナル設計" } },
      { name: "Git / GitHub", detail: { en: "Version control and project publishing", ja: "バージョン管理とプロジェクト公開" } },
      { name: "C Language", detail: { en: "Low-level programming and memory management", ja: "低レベルプログラミングとメモリ管理" } },
    ],
  },
  projects: {
    label: { en: "Projects", ja: "制作実績" },
    title: { en: "Selected work.", ja: "主な制作物。" },
    live: { en: "Live demo", ja: "デモを見る" },
    source: { en: "Source code", ja: "ソースコード" },
    unavailable: { en: "Coming soon", ja: "準備中" },
    items: [
      {
        title: { en: "Bilingual Portfolio", ja: "バイリンガル・ポートフォリオ" },
        description: {
          en: "A lightweight English and Japanese portfolio with a built-in language switch, responsive sections, project previews, and an accessible contact form.",
          ja: "言語切替、レスポンシブな各セクション、制作物プレビュー、使いやすいお問い合わせフォームを備えた軽量な英語・日本語対応ポートフォリオです。",
        },
        stack: ["Next.js", "TypeScript", "CSS"],
        image: "/projects/portfolio-preview.svg",
        imageAlt: { en: "Preview of the bilingual portfolio", ja: "バイリンガル・ポートフォリオのプレビュー" },
        demoUrl: "/",
        sourceUrl: "",
      },
      {
        title: { en: "Online Quiz Application", ja: "オンラインクイズアプリ" },
        description: {
          en: "A responsive quiz application that retrieves questions from an API, checks selected answers, tracks progress, and displays the final score.",
          ja: "APIから問題を取得し、選択した回答を判定しながら進捗を管理し、最終スコアを表示するレスポンシブなクイズアプリです。",
        },
        stack: ["Next.js", "REST API", "JavaScript"],
        image: "/projects/quiz-preview.svg",
        imageAlt: { en: "Preview of the online quiz application", ja: "オンラインクイズアプリのプレビュー" },
        demoUrl: "https://online-quiz-alpha-olive.vercel.app/",
        sourceUrl: "",
      },
      {
        title: { en: "Shift Management System", ja: "シフト管理システム" },
        description: {
          en: "A student system designed to organize employees, work shifts, attendance records, and relational data using Java, SQL, and a web interface.",
          ja: "Java、SQL、Web画面を使って、従業員、勤務シフト、勤怠記録、関連データを管理するために設計した学習システムです。",
        },
        stack: ["Java", "SQL", "Next.js"],
        image: "/projects/shift-preview.svg",
        imageAlt: { en: "Preview of the shift management dashboard", ja: "シフト管理ダッシュボードのプレビュー" },
        demoUrl: "",
        sourceUrl: "",
      },
    ],
  },
  strengths: {
    label: { en: "Strengths", ja: "強み" },
    title: { en: "How I work.", ja: "仕事への取り組み方。" },
    items: [
      {
        title: { en: "Persistence", ja: "継続力" },
        detail: { en: "I keep testing and learning until I understand the problem.", ja: "問題を理解できるまで、確認と学習を続けます。" },
      },
      {
        title: { en: "Focus", ja: "集中力" },
        detail: { en: "I stay focused on work that interests me and finish what I start.", ja: "興味を持ったことに集中し、最後まで取り組みます。" },
      },
      {
        title: { en: "Growth", ja: "成長意欲" },
        detail: { en: "I improve through classes, certifications, and personal projects.", ja: "授業、資格、個人制作を通して継続的に成長します。" },
      },
    ],
    certifications: ["JLPT N3", "TOEIC 875", "Oracle Java Bronze", "CompTIA Tech+"],
  },
  contact: {
    label: { en: "Contact", ja: "お問い合わせ" },
    title: { en: "Let's build something useful.", ja: "役に立つものを一緒に作りましょう。" },
    description: {
      en: "I am open to junior developer opportunities, internships, and conversations about technology.",
      ja: "ジュニアエンジニアの求人、インターンシップ、技術に関する交流を歓迎しています。",
    },
    github: { en: "View GitHub", ja: "GitHubを見る" },
    name: { en: "Name", ja: "お名前" },
    namePlaceholder: { en: "Your name", ja: "お名前を入力してください" },
    emailLabel: { en: "Email", ja: "メールアドレス" },
    message: { en: "Message", ja: "メッセージ" },
    messagePlaceholder: { en: "Tell me about your message or opportunity", ja: "ご用件やメッセージをご入力ください" },
    send: { en: "Prepare email", ja: "メールを作成" },
    note: {
      en: "Submitting opens your email app with the message prepared.",
      ja: "送信すると、内容を入力した状態でメールアプリが開きます。",
    },
  },
  footer: { en: "my_portfolio", ja: "my_portfolio" },
} as const;
 