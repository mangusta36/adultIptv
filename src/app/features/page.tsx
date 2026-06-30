import type { Metadata } from "next";
import Link from "next/link";
import { Check, Tv, Globe, Film, Smartphone, Monitor, Headset, Shield, Zap, Layers } from "lucide-react";
import { features, siteConfig } from "@/data";

export const metadata: Metadata = {
  title: "iptv adult channels Features — 4K Streaming & Multi-Device",
  description:
    "Discover all iptv adult channels features — 26,000+ live channels, 4K & 8K streaming, massive VOD library, multi-device support on up to 6 devices, anti-freeze technology, and 24/7 support.",
  openGraph: {
    title: "iptv adult channels — Premium IPTV Features",
    description: "Explore iptv adult channels features — 4K & 8K streaming, buffer-free playback, multi-device support, and 24/7 expert help.",
    url: `${siteConfig.url}/features`,
    images: [
      {
        url: `${siteConfig.url}/images/article-1.jpg`,
        width: 1200,
        height: 630,
        alt: "iptv adult channels premium features",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iptv adult channels — Premium IPTV Features",
    description: "Explore iptv adult channels features — 4K & 8K streaming, buffer-free playback, multi-device support, and 24/7 expert help.",
    images: [`${siteConfig.url}/images/article-1.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/features`,
  },
};

const featureIcons: Record<string, React.ReactNode> = {
  Tv: <Tv className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Film: <Film className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  Monitor: <Monitor className="w-8 h-8" />,
  Headset: <Headset className="w-8 h-8" />,
};

const extendedFeatures = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Anti-Freeze Technology",
    description:
      "iptv adult channels' proprietary anti-freeze technology ensures buffer-free streaming even during peak hours. Smart routing and caching deliver the smoothest experience.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Channel Switching",
    description:
      "Switch between 26,000+ channels instantly with iptv adult channels. Near-zero latency and optimized infrastructure ensure you never miss a moment.",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Electronic Program Guide (EPG)",
    description:
      "Integrated EPG with 7-day program data for all iptv adult channels. See what's on now, up next, and plan your viewing schedule.",
  },
];

const comparisons = [
  { feature: "Live Channels", us: "26,000+", cable: "200-500", others: "5,000-10,000" },
  { feature: "Max Quality", us: "8K", cable: "HD", others: "4K" },
  { feature: "VOD Library", us: "100,000+", cable: "Limited", others: "10,000-20,000" },
  { feature: "Device Support", us: "All Devices", cable: "TV Only", others: "Limited" },
  { feature: "Uptime", us: "99.9%", cable: "95-99%", others: "97-99%" },
  { feature: "Support", us: "24/7 Priority", cable: "Business Hours", others: "Email Only" },
  { feature: "Contracts", us: "No Contracts", cable: "12-24 Months", others: "Month-Month" },
  { feature: "Simultaneous Streams", us: "Up to 6", cable: "1-2", others: "1-3" },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider mb-6">
              Premium Features
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              iptv adult channels — Premium{" "}
              <span className="text-accent">Streaming Features</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
               From <Link href="/premium-adult-iptv" className="text-accent hover:underline">4K and 8K Ultra HD streaming</Link> to <Link href="/adult-iptv-for-firestick" className="text-accent hover:underline">multi-device support for Firestick</Link>, <Link href="/adult-iptv-for-smart-tv" className="text-accent hover:underline">Smart TV</Link>, Android, and iOS, iptv adult channels provides the most comprehensive adult IPTV experience available. Visit our <Link href="/blog" className="text-accent hover:underline">blog</Link> for iptv adult channels setup guides and tips.
             </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="glass-card rounded-2xl p-8 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 mb-5">
                  {featureIcons[feat.icon]}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feat.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
            {extendedFeatures.map((feat) => (
              <div
                key={feat.title}
                className="glass-card rounded-2xl p-8 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 mb-5">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feat.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              iptv adult channels vs The Competition
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              See why iptv adult channels is the top choice for premium IPTV streaming
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-accent">
                    iptv adult channels
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-muted">
                    Cable TV
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-muted">
                    Other IPTV
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-accent font-semibold">
                      {row.us}
                    </td>
                    <td className="py-4 px-4 text-center text-muted">{row.cable}</td>
                    <td className="py-4 px-4 text-center text-muted">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "iptv adult channels Device Compatibility",
                items: [
                  "Android phones & tablets with iptv adult channels",
                  "iPhone & iPad",
                  "Amazon Firestick / Fire TV",
                  "Smart TVs (Samsung, LG, Sony)",
                  "Android TV boxes (Nvidia Shield, Mi Box)",
                  "PC & Mac (web browser)",
                  "Formuler / MAG boxes",
                  "All major IPTV players",
                ],
              },
              {
                title: "What iptv adult channels Includes",
                items: [
                  "26,000+ live channels worldwide",
                  "100,000+ VOD titles",
                  "HD, 4K & 8K streaming",
                  "Anti-freeze technology",
                  "7-day EPG (Electronic Program Guide)",
                  "24/7 expert support",
                  "99.9% uptime guarantee",
                  "Free updates & new channels",
                ],
              },
            ].map((section) => (
              <div key={section.title} className="glass-card rounded-2xl p-8">
                <h3 className="text-lg font-semibold mb-5">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
