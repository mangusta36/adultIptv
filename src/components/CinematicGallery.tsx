import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

export interface CinematicSlide {
  image: string;
  title: string;
  category: string;
  readTime: string;
  slug: string;
}

export default function CinematicGallery({ slides }: { slides: CinematicSlide[] }) {
  const doubled = [...slides, ...slides];
  const imageWidth = 500;
  const gap = 20;

  return (
    <div className="relative py-6">
      <div
        className="relative overflow-hidden rounded-2xl before:absolute before:inset-y-0 before:left-0 before:w-32 before:bg-gradient-to-r before:from-background before:to-transparent before:z-10 before:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-32 after:bg-gradient-to-l after:from-background after:to-transparent after:z-10 after:pointer-events-none"
      >
        <div
          className="flex animate-cin-scroll hover:[animation-play-state:paused]"
          style={{ gap: `${gap}px`, width: "fit-content" }}
        >
          {doubled.map((slide, index) => (
            <Link
              key={`${slide.slug}-${index}`}
              href={`/blog/${slide.slug}`}
              className="relative shrink-0 overflow-hidden rounded-xl group/card"
              style={{ width: `${imageWidth}px` }}
            >
              <div className="aspect-[16/10] relative bg-card overflow-hidden rounded-xl">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="500px"
                  className="object-cover transition-all duration-700 group-hover/card:scale-110"
                  loading={index < 8 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-accent/0 group-hover/card:bg-accent/10 transition-colors duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-accent/90 text-white text-[9px] font-semibold uppercase tracking-wider">
                    {slide.category}
                  </span>
                  <span className="flex items-center gap-1 text-[9px] text-white/70">
                    <Clock className="w-2.5 h-2.5" />
                    {slide.readTime}
                  </span>
                </div>
                <h3 className="text-xs md:text-sm font-semibold text-white leading-tight line-clamp-2">
                  {slide.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
