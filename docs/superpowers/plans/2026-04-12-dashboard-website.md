# Genetics (BSMS205) Q&A Dashboard — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static Next.js dashboard that reads wiki markdown files and displays them as a searchable, filterable, bilingual Q&A table deployed to GitHub Pages.

**Architecture:** Next.js App Router with static export reads `wiki/**/*.md` at build time via a `lib/wiki.ts` parser. All data is pre-rendered. Client-side state (language toggle, filters, search) uses React state + URL params. No backend.

**Tech Stack:** Next.js 15, Tailwind CSS 4, gray-matter (frontmatter parsing), GitHub Pages

---

### Task 1: Initialize Next.js project

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tailwind.config.ts`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`
- Create: `tsconfig.json`
- Create: `.gitignore`

- [ ] **Step 1: Scaffold Next.js with Tailwind**

Run:
```bash
cd /Users/joonan/chaek/chaek-wiki
npx create-next-app@latest . --typescript --tailwind --app --src-dir=false --import-alias="@/*" --use-npm --no-eslint
```

Select defaults when prompted. Since the directory has existing files, it will merge.

- [ ] **Step 2: Configure static export**

Replace `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/chaek-wiki" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

- [ ] **Step 3: Install gray-matter for frontmatter parsing**

Run:
```bash
npm install gray-matter
```

- [ ] **Step 4: Add wiki/ and docs/ to .gitignore exclusion, verify build**

Run:
```bash
npm run build
```
Expected: Static export succeeds in `out/` directory.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: initialize Next.js project with static export config"
```

---

### Task 2: Wiki markdown parser

**Files:**
- Create: `lib/wiki.ts`
- Create: `lib/types.ts`

- [ ] **Step 1: Define types**

Create `lib/types.ts`:

```typescript
export interface WikiEntry {
  slug: string;
  title: {
    ko: string;
    en: string;
  };
  chapter: number;
  chapterTitle: string;
  topics: string[];
  date: string;
  originalLanguage: "ko" | "en";
  student: string;
  slackThread: string;
  content: {
    questionOriginal: string;
    questionTranslation: string;
    answerOriginal: string;
    answerTranslation: string;
  };
  source: string;
}

export const CHAPTER_TITLES: Record<number, string> = {
  3: "CHM13 Cell Line",
  4: "Human Pangenome Reference Consortium",
  5: "Next-Generation Sequencing",
  6: "NGS Application",
  8: "Genetic Variant",
  10: "Dominant Allele",
  13: "Structural Variation",
  14: "Additive and Dominant Allele",
  15: "Polygenic Model",
  16: "Heritability",
  18: "GWAS",
};

export const CHAPTER_COLORS: Record<number, string> = {
  3: "bg-purple-100 text-purple-800",
  4: "bg-indigo-100 text-indigo-800",
  5: "bg-cyan-100 text-cyan-800",
  6: "bg-teal-100 text-teal-800",
  8: "bg-blue-100 text-blue-800",
  10: "bg-emerald-100 text-emerald-800",
  13: "bg-rose-100 text-rose-800",
  14: "bg-orange-100 text-orange-800",
  15: "bg-green-100 text-green-800",
  16: "bg-amber-100 text-amber-800",
  18: "bg-violet-100 text-violet-800",
};
```

- [ ] **Step 2: Create wiki parser**

Create `lib/wiki.ts`:

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { WikiEntry, CHAPTER_TITLES } from "./types";

const WIKI_DIR = path.join(process.cwd(), "wiki");

function parseContent(raw: string): WikiEntry["content"] {
  const sections = raw.split(/^## /m).filter(Boolean);
  const result = {
    questionOriginal: "",
    questionTranslation: "",
    answerOriginal: "",
    answerTranslation: "",
  };

  for (const section of sections) {
    const lines = section.trim();
    if (lines.startsWith("Question (원문") || lines.startsWith("Question (Original")) {
      result.questionOriginal = lines.replace(/^Question.*?\n+/, "").trim();
    } else if (lines.startsWith("Question (Translation")) {
      result.questionTranslation = lines.replace(/^Question.*?\n+/, "").trim();
    } else if (lines.startsWith("Answer (원문") || lines.startsWith("Answer (Original")) {
      result.answerOriginal = lines.replace(/^Answer.*?\n+/, "").trim();
    } else if (lines.startsWith("Answer (Translation")) {
      result.answerTranslation = lines.replace(/^Answer.*?\n+/, "").trim();
    }
  }

  return result;
}

function parseTitle(raw: string): { ko: string; en: string } {
  const parts = raw.split(" / ");
  if (parts.length === 2) {
    return { ko: parts[0].trim(), en: parts[1].trim() };
  }
  return { ko: raw, en: raw };
}

export function getAllEntries(): WikiEntry[] {
  const entries: WikiEntry[] = [];

  const chapterDirs = fs.readdirSync(WIKI_DIR).filter((d) => {
    return fs.statSync(path.join(WIKI_DIR, d)).isDirectory() && d.startsWith("chapter");
  });

  for (const dir of chapterDirs) {
    const dirPath = path.join(WIKI_DIR, dir);
    const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".md"));

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      const slug = `${dir}/${file.replace(".md", "")}`;
      const chapter = Number(data.chapter);

      entries.push({
        slug,
        title: parseTitle(data.title || ""),
        chapter,
        chapterTitle: CHAPTER_TITLES[chapter] || "",
        topics: data.topics || [],
        date: data.date || "",
        originalLanguage: data.original_language || "ko",
        student: data.student || "",
        slackThread: data.slack_thread || "",
        content: parseContent(content),
        source: `Chapter ${chapter}: ${CHAPTER_TITLES[chapter] || ""}`,
      });
    }
  }

  return entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getEntryBySlug(slug: string): WikiEntry | undefined {
  return getAllEntries().find((e) => e.slug === slug);
}
```

- [ ] **Step 3: Verify parser works**

Run:
```bash
npx tsx -e "const { getAllEntries } = require('./lib/wiki'); console.log(getAllEntries().length, 'entries parsed'); console.log(getAllEntries()[0].title);"
```
Expected: `22 entries parsed` and the first entry title object.

- [ ] **Step 4: Commit**

```bash
git add lib/
git commit -m "feat: add wiki markdown parser with type definitions"
```

---

### Task 3: Main table page

**Files:**
- Modify: `app/page.tsx`
- Create: `app/components/EntryTable.tsx`
- Create: `app/components/FilterBar.tsx`
- Create: `app/components/LanguageToggle.tsx`

- [ ] **Step 1: Create LanguageToggle component**

Create `app/components/LanguageToggle.tsx`:

```tsx
"use client";

interface Props {
  lang: "ko" | "en";
  onToggle: (lang: "ko" | "en") => void;
}

export default function LanguageToggle({ lang, onToggle }: Props) {
  return (
    <div className="flex bg-gray-100 rounded-md overflow-hidden text-sm">
      <button
        className={`px-3 py-1.5 font-semibold transition-colors ${
          lang === "ko" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-700"
        }`}
        onClick={() => onToggle("ko")}
      >
        KO
      </button>
      <button
        className={`px-3 py-1.5 font-semibold transition-colors ${
          lang === "en" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-700"
        }`}
        onClick={() => onToggle("en")}
      >
        EN
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Create FilterBar component**

Create `app/components/FilterBar.tsx`:

```tsx
"use client";

interface Props {
  chapters: { chapter: number; count: number }[];
  topics: string[];
  students: string[];
  activeFilter: { type: string; value: string };
  onFilter: (type: string, value: string) => void;
}

export default function FilterBar({ chapters, topics, students, activeFilter, onFilter }: Props) {
  const isActive = (type: string, value: string) =>
    activeFilter.type === type && activeFilter.value === value;

  return (
    <div className="flex gap-2 flex-wrap items-center px-6 py-3 border-b border-gray-100">
      <button
        className={`px-3.5 py-1 rounded-full text-sm transition-colors ${
          activeFilter.type === "all"
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        onClick={() => onFilter("all", "")}
      >
        All
      </button>

      <div className="w-px h-5 bg-gray-200 mx-1" />

      {chapters.map(({ chapter, count }) => (
        <button
          key={chapter}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            isActive("chapter", String(chapter))
              ? "bg-blue-100 text-blue-800 font-semibold"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => onFilter("chapter", String(chapter))}
        >
          Ch{String(chapter).padStart(2, "0")}
          <span className="ml-1 text-xs opacity-60">({count})</span>
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create EntryTable component**

Create `app/components/EntryTable.tsx`:

```tsx
"use client";

import Link from "next/link";
import { WikiEntry, CHAPTER_COLORS } from "@/lib/types";

interface Props {
  entries: WikiEntry[];
  lang: "ko" | "en";
}

export default function EntryTable({ entries, lang }: Props) {
  return (
    <div className="px-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-gray-100 text-xs text-gray-400 uppercase">
            <th className="text-left py-3 font-medium">Question</th>
            <th className="text-center py-3 font-medium w-20">Chapter</th>
            <th className="text-center py-3 font-medium w-40">Student</th>
            <th className="text-right py-3 font-medium w-24">Date</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            const title = lang === "ko" ? entry.title.ko : entry.title.en;
            const colors = CHAPTER_COLORS[entry.chapter] || "bg-gray-100 text-gray-800";
            const dateStr = new Date(entry.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });

            return (
              <tr
                key={entry.slug}
                className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="py-3">
                  <Link href={`/q/${entry.slug}`} className="block">
                    <div className="font-semibold text-gray-900 mb-1">{title}</div>
                    <div className="flex gap-1 flex-wrap">
                      {entry.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                      {entry.originalLanguage === "en" && (
                        <span className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded text-xs">
                          EN
                        </span>
                      )}
                    </div>
                  </Link>
                </td>
                <td className="text-center">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors}`}>
                    {String(entry.chapter).padStart(2, "0")}
                  </span>
                </td>
                <td className="text-center text-gray-500 text-xs">🐾 {entry.student}</td>
                <td className="text-right text-gray-400 text-xs">{dateStr}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
```

- [ ] **Step 4: Wire up main page**

Replace `app/page.tsx`:

```tsx
import { getAllEntries } from "@/lib/wiki";
import Dashboard from "./Dashboard";

export default function Home() {
  const entries = getAllEntries();

  const chapters = Object.entries(
    entries.reduce<Record<number, number>>((acc, e) => {
      acc[e.chapter] = (acc[e.chapter] || 0) + 1;
      return acc;
    }, {})
  )
    .map(([ch, count]) => ({ chapter: Number(ch), count }))
    .sort((a, b) => a.chapter - b.chapter);

  const topics = [...new Set(entries.flatMap((e) => e.topics))].sort();
  const students = [...new Set(entries.map((e) => e.student))].sort();

  return (
    <Dashboard
      entries={entries}
      chapters={chapters}
      topics={topics}
      students={students}
    />
  );
}
```

- [ ] **Step 5: Create Dashboard client component**

Create `app/Dashboard.tsx`:

```tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import { WikiEntry } from "@/lib/types";
import EntryTable from "./components/EntryTable";
import FilterBar from "./components/FilterBar";
import LanguageToggle from "./components/LanguageToggle";

interface Props {
  entries: WikiEntry[];
  chapters: { chapter: number; count: number }[];
  topics: string[];
  students: string[];
}

export default function Dashboard({ entries, chapters, topics, students }: Props) {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ type: "all", value: "" });

  useEffect(() => {
    const saved = localStorage.getItem("chaek-wiki-lang");
    if (saved === "ko" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("chaek-wiki-lang", lang);
  }, [lang]);

  const filtered = useMemo(() => {
    let result = entries;

    if (filter.type === "chapter") {
      result = result.filter((e) => e.chapter === Number(filter.value));
    } else if (filter.type === "topic") {
      result = result.filter((e) => e.topics.includes(filter.value));
    } else if (filter.type === "student") {
      result = result.filter((e) => e.student === filter.value);
    }

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (e) =>
          e.title.ko.toLowerCase().includes(q) ||
          e.title.en.toLowerCase().includes(q) ||
          e.topics.some((t) => t.toLowerCase().includes(q)) ||
          e.student.toLowerCase().includes(q)
      );
    }

    return result;
  }, [entries, filter, search]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">Genetics (BSMS205) Q&A</h1>
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="🔍 Search questions..."
            className="text-sm px-3 py-1.5 border border-gray-200 rounded-md w-52 focus:outline-none focus:border-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <LanguageToggle lang={lang} onToggle={setLang} />
        </div>
      </div>

      {/* Filters */}
      <FilterBar
        chapters={chapters}
        topics={topics}
        students={students}
        activeFilter={filter}
        onFilter={(type, value) => setFilter({ type, value })}
      />

      {/* Table */}
      <EntryTable entries={filtered} lang={lang} />

      {/* Footer */}
      <div className="flex justify-between px-6 py-3 border-t border-gray-100 text-xs text-gray-400 mt-4">
        <span>
          {filtered.length} questions · {students.length} students · {chapters.length} chapters
        </span>
        <span>Human Genetics · 2026 Spring</span>
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Update layout**

Replace `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genetics (BSMS205) Q&A",
  description: "Student Q&A dashboard for Human Genetics course",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

- [ ] **Step 7: Build and verify**

Run:
```bash
npm run dev
```
Open http://localhost:3000. Verify: table shows 22 entries, filter pills work, language toggle switches titles, search filters entries.

- [ ] **Step 8: Commit**

```bash
git add app/ lib/
git commit -m "feat: add main dashboard with table, filters, search, and language toggle"
```

---

### Task 4: Detail page

**Files:**
- Create: `app/q/[...slug]/page.tsx`
- Create: `app/components/DetailView.tsx`

- [ ] **Step 1: Create DetailView client component**

Create `app/components/DetailView.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WikiEntry, CHAPTER_COLORS } from "@/lib/types";
import LanguageToggle from "./LanguageToggle";

interface Props {
  entry: WikiEntry;
}

export default function DetailView({ entry }: Props) {
  const [lang, setLang] = useState<"ko" | "en">("ko");

  useEffect(() => {
    const saved = localStorage.getItem("chaek-wiki-lang");
    if (saved === "ko" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("chaek-wiki-lang", lang);
  }, [lang]);

  const title = lang === "ko" ? entry.title.ko : entry.title.en;
  const question =
    lang === entry.originalLanguage
      ? entry.content.questionOriginal
      : entry.content.questionTranslation;
  const answer =
    lang === entry.originalLanguage
      ? entry.content.answerOriginal
      : entry.content.answerTranslation;
  const colors = CHAPTER_COLORS[entry.chapter] || "bg-gray-100 text-gray-800";
  const dateStr = new Date(entry.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3 text-sm">
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            ← Back
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400">Chapter {entry.chapter}: {entry.chapterTitle}</span>
        </div>
        <LanguageToggle lang={lang} onToggle={setLang} />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Title & Meta */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
          <div className="flex gap-3 items-center text-gray-400 text-sm">
            <span>🐾 {entry.student}</span>
            <span>·</span>
            <span>{dateStr}</span>
            <span>·</span>
            <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors}`}>
              Chapter {String(entry.chapter).padStart(2, "0")}
            </span>
          </div>
          <div className="flex gap-1.5 mt-3 flex-wrap">
            {entry.topics.map((topic) => (
              <span
                key={topic}
                className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-xs"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <div className="text-xs uppercase text-gray-400 font-semibold tracking-wider mb-3">
            Question
          </div>
          <div className="border-l-3 border-blue-400 bg-gray-50 pl-5 pr-5 py-4 rounded-r-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
            {question}
          </div>
        </div>

        {/* Answer */}
        <div className="mb-8">
          <div className="text-xs uppercase text-gray-400 font-semibold tracking-wider mb-3">
            Answer
          </div>
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {answer}
          </div>
        </div>

        <hr className="border-gray-100 my-6" />

        {/* Source */}
        <div className="text-sm text-gray-400">
          <strong>Source:</strong> {entry.source}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create detail page route**

Create `app/q/[...slug]/page.tsx`:

```tsx
import { getAllEntries, getEntryBySlug } from "@/lib/wiki";
import { notFound } from "next/navigation";
import DetailView from "@/app/components/DetailView";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  return getAllEntries().map((entry) => ({
    slug: entry.slug.split("/"),
  }));
}

export default async function QuestionPage({ params }: Props) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug.join("/"));

  if (!entry) notFound();

  return <DetailView entry={entry} />;
}
```

- [ ] **Step 3: Build and verify**

Run:
```bash
npm run build
```
Expected: Static export generates pages for all 22 entries under `out/q/chapterNN/slug-name/`.

Run:
```bash
npm run dev
```
Click a row in the table. Verify: detail page shows question/answer, language toggle switches content, back button returns to table.

- [ ] **Step 4: Commit**

```bash
git add app/q/ app/components/DetailView.tsx
git commit -m "feat: add question detail page with bilingual toggle"
```

---

### Task 5: GitHub Pages deployment

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create GitHub Actions workflow**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Enable GitHub Pages in repo settings**

Go to https://github.com/joonan30/chaek-wiki/settings/pages and set Source to "GitHub Actions".

- [ ] **Step 3: Commit and push**

```bash
git add .github/
git commit -m "ci: add GitHub Actions workflow for Pages deployment"
git push origin main
```

- [ ] **Step 4: Verify deployment**

Check https://github.com/joonan30/chaek-wiki/actions for the workflow run.
Once complete, verify at https://joonan30.github.io/chaek-wiki/

---

### Task 6: Final polish and .gitignore

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Update .gitignore**

Ensure `.gitignore` includes:

```
node_modules/
out/
.next/
.superpowers/
```

- [ ] **Step 2: Full build test**

Run:
```bash
npm run build && npx serve out
```
Open http://localhost:3000/chaek-wiki. Verify all pages work with basePath.

- [ ] **Step 3: Final commit and push**

```bash
git add -A
git commit -m "chore: finalize gitignore and verify production build"
git push origin main
```
