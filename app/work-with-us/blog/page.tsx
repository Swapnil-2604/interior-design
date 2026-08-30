import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { agencyBlogPosts } from "@/lib/agency";

export const metadata: Metadata = {
  title: "Insights & Strategy for Interior Design Studios | Automate Reality Labs",
  description:
    "Expert articles on web development, client pre-qualification, pricing psychology, and SEO strategy specifically for interior design studios and architects.",
  keywords: [
    "interior design website tips",
    "architecture studio SEO guide",
    "how to price interior design websites",
    "Squarespace vs custom for interior designers",
  ],
};

export default function AgencyBlogDirectoryPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Hero Header */}
      <section className="relative border-b border-line bg-paper-2 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass font-semibold">
                Studio Insights &amp; Articles
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="mt-8 max-w-4xl">
            <Reveal as="h1" y={25} duration={1.2}>
              <span className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] font-light leading-[1.1] text-ink block">
                Engineering &amp; Strategy for the{" "}
                <em className="italic text-brass font-normal">Business of Design</em>.
              </span>
            </Reveal>

            <Reveal as="p" y={20} duration={1.2} delay={0.15}>
              <span className="mt-6 block text-[16px] md:text-[19px] leading-relaxed text-taupe font-sans max-w-3xl">
                Practical guides, conversion case studies, and technical breakdowns written for principals, studio partners, and marketing directors of luxury interior design practices.
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-10 md:grid-cols-2">
            {agencyBlogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between rounded-xs border border-line bg-paper-2 p-8 md:p-10 transition-all duration-300 hover:border-brass hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-taupe">
                    <span className="rounded-full bg-brass/10 border border-brass/30 px-3 py-1 text-brass font-semibold">
                      {post.category}
                    </span>
                    <span>{post.readTime} &middot; {post.publishDate}</span>
                  </div>

                  <h2 className="mt-6 font-serif text-2xl md:text-3xl italic text-ink group-hover:text-brass transition-colors leading-snug">
                    <Link href={`/work-with-us/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-4 text-[13px] text-taupe leading-relaxed font-sans">
                    {post.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-line flex items-center justify-between">
                  <div className="font-mono text-[11px] text-taupe">
                    By <strong className="text-ink font-sans">{post.author.name}</strong>
                  </div>
                  <Link
                    href={`/work-with-us/blog/${post.slug}`}
                    className="font-mono text-[11px] uppercase tracking-wider text-ink group-hover:text-brass transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Read Article →</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
