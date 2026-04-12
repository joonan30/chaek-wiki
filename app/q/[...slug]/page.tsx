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
