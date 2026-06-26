import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroBadge, heroHeadline, heroDescription, heroTrust } from "@/data";
import { Check, Shield, Zap, HeadphonesIcon } from "lucide-react";
const trustIcons = [Check, Shield, Zap, HeadphonesIcon] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[90vh] flex items-center overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 bg-background">
        <div className="md:hidden absolute inset-0">
          <Image
            src="/images/hero-bg-mobile.jpg"
            alt="iptv adult channels premium streaming background"
            fill
            className="object-cover object-[85%_center]"
            priority
            sizes="100vw"
          />
        </div>
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="iptv adult channels premium streaming background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[800px] md:h-[800px] bg-accent/10 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />

      <div className="container relative z-10 px-5 sm:px-6 md:px-8 mt-4 md:mt-0">
        <div className="max-w-2xl">
          <Badge variant="default" className="w-fit mb-6 md:mb-8">
            {heroBadge}
          </Badge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.22] sm:leading-[1.15] tracking-tight mb-6 sm:mb-8">
            {heroHeadline}
          </h1>

          <p className="text-[15px] sm:text-base md:text-xl text-muted leading-relaxed max-w-xl mb-8 sm:mb-10">
            {heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 mb-10 md:mb-12">
            <Button size="xl" asChild>
              <a href="/trial">Get Trial</a>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <a href="#pricing">View Plans</a>
            </Button>
          </div>

          <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {heroTrust.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {item.value}
                    </div>
                    <div className="text-xs text-muted">{item.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
