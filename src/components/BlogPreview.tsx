import Link from "next/link";
import { blogPosts } from "@/data/blog";
import CinematicGallery from "@/components/CinematicGallery";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogPreview() {
  const slides = blogPosts.slice(0, 8).map((post, i) => ({
    image: `/images/cine-${i + 1}.jpg`,
    title: post.title,
    category: post.category,
    readTime: post.readTime,
    slug: post.slug,
  }));

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background pointer-events-none" />

      <div className="relative z-10">
        <div className="container mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
                Latest From Our IPTV Blog
              </h2>
              <p className="text-lg text-muted max-w-xl">
                Expert guides, setup tips, streaming advice, and updates to get the most out of your adult IPTV subscription
              </p>
            </div>
            <Button variant="outline" asChild className="shrink-0">
              <Link href="/blog" className="flex items-center gap-2">
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <CinematicGallery slides={slides} />
      </div>
    </section>
  );
}
