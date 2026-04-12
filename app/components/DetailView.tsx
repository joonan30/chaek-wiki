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

      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
          <div className="flex gap-3 items-center text-gray-400 text-sm">
            <span>{entry.student}</span>
            <span>·</span>
            <span>{dateStr}</span>
            <span>·</span>
            <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors}`}>
              Chapter {String(entry.chapter).padStart(2, "0")}
            </span>
          </div>
          <div className="flex gap-1.5 mt-3 flex-wrap">
            {entry.topics.map((topic) => (
              <span key={topic} className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="text-xs uppercase text-gray-400 font-semibold tracking-wider mb-3">Question</div>
          <div className="border-l-3 border-blue-400 bg-gray-50 pl-5 pr-5 py-4 rounded-r-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
            {question}
          </div>
        </div>

        <div className="mb-8">
          <div className="text-xs uppercase text-gray-400 font-semibold tracking-wider mb-3">Answer</div>
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{answer}</div>
        </div>

        <hr className="border-gray-100 my-6" />
        <div className="text-sm text-gray-400">
          <strong>Source:</strong> {entry.source}
        </div>
      </div>
    </div>
  );
}
