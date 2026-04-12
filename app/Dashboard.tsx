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
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">Genetics (BSMS205) Q&A</h1>
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search questions..."
            className="text-sm px-3 py-1.5 border border-gray-200 rounded-md w-52 focus:outline-none focus:border-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <LanguageToggle lang={lang} onToggle={setLang} />
        </div>
      </div>
      <FilterBar chapters={chapters} activeFilter={filter} onFilter={(type, value) => setFilter({ type, value })} />
      <EntryTable entries={filtered} lang={lang} />
      <div className="flex justify-between px-6 py-3 border-t border-gray-100 text-xs text-gray-400 mt-4">
        <span>{filtered.length} questions - {students.length} students - {chapters.length} chapters</span>
        <span>Human Genetics - 2026 Spring</span>
      </div>
    </div>
  );
}
