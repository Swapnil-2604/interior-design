import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { agencyBlogPosts, agencyInfo } from "@/lib/agency";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return agencyBlogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = agencyBlogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.description,
    keywords: [
      "interior design website design",
      "architecture web development",
      post.category,
      "Automate Reality Labs blog",
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: "2026-08-01T00:00:00.000Z",
      authors: [agencyInfo.founder],
    },
  };
}

export default async function AgencyBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = agencyBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Header */}
      <section className="relative border-b border-line bg-paper-2 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/work-with-us/blog"
              className="font-mono text-[11px] uppercase tracking-luxe text-taupe hover:text-ink transition-colors"
            >
              ← All Insights
            </Link>
            <span className="text-line">•</span>
            <span className="font-mono text-[11px] uppercase tracking-luxe text-brass font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="mt-6 font-serif text-3xl md:text-5xl italic font-light text-ink leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-[16px] text-taupe font-sans leading-relaxed">
            {post.description}
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-line pt-6 font-mono text-[11px] text-taupe">
            <div className="flex items-center gap-3">
              <div>
                <span className="text-ink font-sans font-medium block">{post.author.name}</span>
                <span className="text-[10px] text-stone block">{post.author.role}</span>
              </div>
            </div>
            <span>{post.readTime} &middot; {post.publishDate}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-3xl px-6">
          <div className="prose prose-neutral max-w-none text-taupe font-sans text-[15px] leading-relaxed space-y-6">
            {post.content.split("\n\n").map((block, idx) => {
              const trimmed = block.trim();
              if (trimmed.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="font-serif text-2xl md:text-3xl italic text-ink font-light mt-10 mb-4 pt-4 border-t border-line/60"
                  >
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }
              if (trimmed.startsWith("#### ")) {
                return (
                  <h4
                    key={idx}
                    className="font-sans text-lg font-semibold text-ink mt-6 mb-2"
                  >
                    {trimmed.replace("#### ", "")}
                  </h4>
                );
              }
              if (trimmed.startsWith("- ")) {
                const items = trimmed.split("\n- ").map((item) => item.replace(/^- /, ""));
                return (
                  <ul key={idx} className="space-y-2 list-disc pl-5 my-4">
                    {items.map((it, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: it.replace(/\*\*(.*?)\*\*/g, "<strong class='text-ink'>$1</strong>").replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2' class='text-brass underline hover:text-ink'>$1</a>") }} />
                    ))}
                  </ul>
                );
              }
              if (trimmed.startsWith("---")) {
                return <hr key={idx} className="border-line my-8" />;
              }
              if (trimmed.startsWith("|")) {
                // simple table render
                const lines = trimmed.split("\n").filter(Boolean);
                const headers = lines[0].split("|").map(c => c.trim()).filter(Boolean);
                const rows = lines.slice(2).map(line => line.split("|").map(c => c.trim()).filter(Boolean));
                return (
                  <div key={idx} className="overflow-x-auto my-6 rounded-xs border border-line bg-paper-2">
                    <table className="w-full text-left text-[12px] font-sans border-collapse">
                      <thead>
                        <tr className="border-b border-line bg-paper">
                          {headers.map((h, i) => (
                            <th key={i} className="p-3.5 font-mono text-[10px] uppercase text-ink font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line">
                        {rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3.5" dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, "<strong class='text-ink'>$1</strong>") }} />
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              return (
                <p
                  key={idx}
                  dangerouslySetInnerHTML={{
                    __html: trimmed
                      .replace(/\*\*(.*?)\*\*/g, "<strong class='text-ink font-medium'>$1</strong>")
                      .replace(/\*(.*?)\*/g, "<em class='italic'>$1</em>")
                      .replace(/`([^`]+)`/g, "<code class='font-mono text-xs bg-paper-2 border border-line px-1.5 py-0.5 rounded-xs text-brass'>$1</code>")
                      .replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2' class='text-brass underline hover:text-ink transition-colors font-medium'>$1</a>"),
                  }}
                />
              );
            })}
          </div>

          {/* Bottom Article Signoff & CTA */}
          <div className="mt-16 rounded-xs border border-brass/50 bg-paper-2 p-8 md:p-10 text-center">
            <h3 className="font-serif text-2xl md:text-3xl italic text-ink font-light">
              Elevate Your Studio&rsquo;s Digital Presence
            </h3>
            <p className="mt-3 max-w-lg mx-auto text-[13px] text-taupe leading-relaxed font-sans">
              Have questions about building an interactive cost calculator, upgrading your case studies, or scaling your local SEO? Schedule an introductory strategy call with Swapnil.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/work-with-us/contact"
                className="btn-fill px-7 py-3 text-[10px] uppercase tracking-luxe"
              >
                Schedule Strategy Consultation
              </Link>
              <Link
                href="/work-with-us/portfolio/lumiere-interiors"
                className="rounded-full border border-line bg-paper px-5 py-3 font-mono text-[10px] uppercase tracking-wider text-ink hover:border-brass hover:text-brass transition-colors"
              >
                View Lumière Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
