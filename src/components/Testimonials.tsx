import { testimonials } from "@/data";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10">
        <div className="container text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-5">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-xl mx-auto">
            See what our subscribers say about their experience
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden group">
            <div className="flex gap-5 animate-cin-scroll group-hover:animate-paused w-max">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="w-[270px] sm:w-[340px] md:w-[380px] shrink-0 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 md:p-7 flex flex-col transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.05] hover:border-accent/20 hover:shadow-[0_0_60px_rgba(229,9,20,0.06)]"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star
                        key={si}
                        className="w-[15px] h-[15px] fill-accent text-accent"
                      />
                    ))}
                  </div>

                  <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06] mt-auto">
                    <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden bg-card border border-white/[0.08] shrink-0 ring-2 ring-white/[0.04]">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-foreground truncate">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted truncate">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
