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
  return <Dashboard entries={entries} chapters={chapters} topics={topics} students={students} />;
}
