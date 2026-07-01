import { features } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tv,
  Globe,
  Film,
  Smartphone,
  Monitor,
  Headset,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Tv: <Tv className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Film: <Film className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Monitor: <Monitor className="w-6 h-6" />,
  Headset: <Headset className="w-6 h-6" />,
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Premium IPTV Features You'll Love
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From buffer-free 4K streaming to 24/7 support — everything you need for the ultimate adult IPTV experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group transition-all duration-500"
            >
              <CardContent className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(229,9,20,0.15)]">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
