import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { blogPosts, blogCategories } from "@/data/blog";
import { siteConfig } from "@/data";
import BlogCard from "@/components/BlogCard";
import SearchInput from "@/components/SearchInput";
import Pagination from "@/components/Pagination";

const POSTS_PER_PAGE = 6;

export const metadata: Metadata = {
  title: "iptv adult channels Blog — IPTV Guides & Streaming Tips",
  description:
    "Expert adult IPTV guides, setup tutorials, and streaming tips from iptv adult channels. Learn how to install adult IPTV on Firestick, Smart TV, Android & more. Buffering fixes, privacy guides, and channel advice.",
  openGraph: {
    title: "iptv adult channels — IPTV Guides & Setup Tips",
    description:
      "Expert adult IPTV guides and tutorials. Setup Firestick, Smart TV, Android, iOS. Privacy tips, buffering fixes, and channel recommendations.",
    url: `${siteConfig.url}/blog`,
    images: [
      {
        url: `${siteConfig.url}/images/article-1.jpg`,
        width: 1200,
        height: 630,
        alt: "iptv adult channels Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iptv adult channels — IPTV Guides & Setup Tips",
    description:
      "Expert adult IPTV guides and tutorials. Setup Firestick, Smart TV, Android, iOS. Privacy tips, buffering fixes, and channel recommendations.",
    images: [`${siteConfig.url}/images/article-1.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

function filterPosts(posts: typeof blogPosts, params: { q?: string; category?: string }) {
  let filtered = [...posts];
  if (params.q) {
    const q = params.q.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }
  if (params.category) {
    filtered = filtered.filter((p) => p.category === params.category);
  }
  return filtered;
}

export default async function BlogPage(props: {
  searchParams?: Promise<{ q?: string; category?: string; page?: string }>;
}) {
  const searchParams = await (props.searchParams ?? Promise.resolve({} as { q?: string; category?: string; page?: string }));
  const q = searchParams?.q;
  const category = searchParams?.category;
  const currentPage = Number(searchParams?.page) || 1;

  const featured = blogPosts.filter((p) => p.featured);
  const filtered = filterPosts(blogPosts, { q, category });
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginatedPosts = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );
  const showFeatured = !q && !category && currentPage === 1;

  return (
    <>
      {currentPage > 1 && (
        <link rel="prev" href={`/blog?page=${currentPage - 1}`} />
      )}
      {currentPage < totalPages && (
        <link rel="next" href={`/blog?page=${currentPage + 1}`} />
      )}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider mb-6">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              IPTV Guides, Tips &{" "}
              <span className="text-accent">Tutorials</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              Expert advice to help you get the most out of your premium IPTV experience
            </p>
            <Suspense fallback={<div className="w-full max-w-md h-12 rounded-xl bg-card animate-pulse" />}>
              <SearchInput />
            </Suspense>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider hover:bg-accent/20 transition-colors"
            >
              All
            </Link>
            {blogCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog?category=${cat.slug}`}
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors ${
                  category === cat.slug
                    ? "bg-accent/10 text-accent border border-accent/20"
                    : "bg-card border border-border text-muted hover:border-accent/30 hover:text-foreground"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {showFeatured && featured.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featured.map((post) => (
                  <BlogCard key={post.slug} post={post} featured />
                ))}
              </div>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted text-lg">No articles found matching your search.</p>
              <Link
                href="/blog"
                className="text-accent hover:underline text-sm mt-2 inline-block"
              >
                Clear filters
              </Link>
            </div>
          ) : (
            <>
              {!showFeatured && (
                <h2 className="text-2xl font-bold mb-6">Search Results</h2>
              )}
              {showFeatured && (
                <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>

              <Suspense fallback={null}>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  baseUrl="/blog"
                />
              </Suspense>
            </>
          )}
        </div>
      </section>
    </>
  );
}
