import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import TableOfContents from "@/components/TableOfContents";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

function extractToc(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: { id: string; text: string; level: number }[] = [];
  const seen = new Map<string, number>();
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const baseId = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const count = seen.get(baseId) || 0;
    seen.set(baseId, count + 1);
    const id = count === 0 ? baseId : `${baseId}-${count}`;
    items.push({ id, text, level });
  }
  return items;
}

function inlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent hover:underline">$1</a>');
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const html: string[] = [];
  let inList = false;
  let inCodeBlock = false;
  let listType = "ul";
  const seenIds = new Map<string, number>();

  function uniqueId(text: string): string {
    const baseId = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const count = seenIds.get(baseId) || 0;
    seenIds.set(baseId, count + 1);
    return count === 0 ? baseId : `${baseId}-${count}`;
  }

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        html.push("</code></pre>");
        inCodeBlock = false;
      } else {
        html.push("<pre class='bg-card border border-border rounded-xl p-4 my-4 overflow-x-auto text-sm'><code>");
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      html.push(line + "\n");
      continue;
    }

    const trimmed = line.trim();

    if (trimmed.startsWith("#### ")) {
      const text = trimmed.slice(5);
      html.push(`<h4 id="${uniqueId(text)}" class="text-base font-semibold mt-6 mb-2">${inlineMarkdown(text)}</h4>`);
    } else if (trimmed.startsWith("### ")) {
      const text = trimmed.slice(4);
      html.push(`<h3 id="${uniqueId(text)}" class="text-lg font-semibold mt-8 mb-3">${inlineMarkdown(text)}</h3>`);
    } else if (trimmed.startsWith("## ")) {
      const text = trimmed.slice(3);
      html.push(`<h2 id="${uniqueId(text)}" class="text-xl font-semibold mt-10 mb-4">${inlineMarkdown(text)}</h2>`);
    } else if (trimmed.startsWith("- ")) {
      if (!inList) {
        html.push("<ul class='space-y-2 my-3 list-disc list-inside text-muted'>");
        inList = true;
        listType = "ul";
      }
      html.push(`<li class="text-muted">${inlineMarkdown(trimmed.slice(2))}</li>`);
    } else if (/^\d+\.\s/.test(trimmed)) {
      if (!inList) {
        html.push("<ol class='space-y-2 my-3 list-decimal list-inside text-muted'>");
        inList = true;
        listType = "ol";
      }
      html.push(`<li class="text-muted">${inlineMarkdown(trimmed.replace(/^\d+\.\s/, ""))}</li>`);
    } else if (/^!\[([^\]]+)\]\(([^)]+)\)$/.test(trimmed)) {
      const match = trimmed.match(/^!\[([^\]]+)\]\(([^)]+)\)$/);
      if (match) {
        const imgAlt = match[1];
        const imgSrc = match[2];
        html.push(`<img src="${imgSrc}" alt="${imgAlt}" loading="lazy" class="w-full rounded-xl my-8 object-cover" />`);
      }
    } else if (trimmed.startsWith("> ")) {
      html.push(`<blockquote class="border-l-2 border-accent/50 pl-4 my-4 text-muted italic">${inlineMarkdown(trimmed.slice(2))}</blockquote>`);
    } else if (trimmed === "") {
      if (inList) {
        html.push(listType === "ul" ? "</ul>" : "</ol>");
        inList = false;
      }
    } else {
      if (inList) {
        html.push(listType === "ul" ? "</ul>" : "</ol>");
        inList = false;
      }
      html.push(`<p class="text-muted leading-relaxed">${inlineMarkdown(trimmed)}</p>`);
    }
  }
  if (inList) html.push(listType === "ul" ? "</ul>" : "</ol>");

  return html.join("\n");
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | iptv adult channels Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | iptv adult channels Blog`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | iptv adult channels Blog`,
      description: post.excerpt,
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const toc = extractToc(post.content);
  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="relative pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 text-xs text-muted mb-6">
              <Link
                href={`/blog?category=${post.category}`}
                className="inline-flex items-center px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium uppercase tracking-wider hover:bg-accent/20 transition-colors"
              >
                {post.category}
              </Link>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="max-w-6xl mx-auto mb-10">
            <div className="relative aspect-[21/9] max-h-[450px] rounded-2xl overflow-hidden bg-card">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            </div>
          </div>

          <div className="flex gap-8 max-w-6xl mx-auto">
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-28">
                <TableOfContents items={toc} />
              </div>
            </div>

            <div className="min-w-0 flex-1 max-w-3xl">
              <div className="glass-card rounded-2xl p-6 md:p-10">
                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
                />
              </div>

              <div className="flex items-center gap-3 mt-8 flex-wrap">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?q=${tag}`}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-card border border-border text-xs text-muted hover:border-accent/30 hover:text-foreground transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="ghost" asChild>
                  <Link href="/blog" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20 max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
