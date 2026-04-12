"use client";

interface Props {
  chapters: { chapter: number; count: number }[];
  activeFilter: { type: string; value: string };
  onFilter: (type: string, value: string) => void;
}

export default function FilterBar({ chapters, activeFilter, onFilter }: Props) {
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
