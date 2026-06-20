import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";

export default function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-500 ${
        featured ? "md:grid md:grid-cols-2 md:gap-0" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "h-full min-h-[250px]" : "aspect-[16/9]"
        } bg-card`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-background/80 backdrop-blur-sm text-accent text-[10px] font-medium uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-medium uppercase tracking-wider">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        <h3
          className={`font-semibold leading-tight group-hover:text-accent transition-colors ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-1 text-sm text-accent font-medium mt-2">
          Read More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
