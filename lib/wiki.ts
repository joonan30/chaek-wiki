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
