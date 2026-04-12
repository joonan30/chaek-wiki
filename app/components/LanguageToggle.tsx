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
