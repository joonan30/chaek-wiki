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
              <tr key={entry.slug} className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors">
                <td className="py-3">
                  <Link href={`/q/${entry.slug}`} className="block">
                    <div className="font-semibold text-gray-900 mb-1">{title}</div>
                    <div className="flex gap-1 flex-wrap">
                      {entry.topics.slice(0, 3).map((topic) => (
                        <span key={topic} className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded text-xs">{topic}</span>
                      ))}
                      {entry.originalLanguage === "en" && (
                        <span className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded text-xs">EN</span>
                      )}
                    </div>
                  </Link>
                </td>
                <td className="text-center">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors}`}>
                    {String(entry.chapter).padStart(2, "0")}
                  </span>
                </td>
                <td className="text-center text-gray-500 text-xs">{entry.student}</td>
                <td className="text-right text-gray-400 text-xs">{dateStr}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
