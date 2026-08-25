import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/site";
import JournalDetailClient from "./JournalDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = blogPosts.find((p) => p.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Lumière Journal`,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = blogPosts.find((p) => p.slug === slug);

  if (!article) {
    notFound();
  }

  const otherArticles = blogPosts.filter((p) => p.slug !== slug);

  return (
    <JournalDetailClient
      article={article}
      otherArticles={otherArticles}
    />
  );
}
