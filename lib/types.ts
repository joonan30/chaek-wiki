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
