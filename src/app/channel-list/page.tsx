import type { Metadata } from "next";
import Link from "next/link";
import { channelCategories } from "@/data/channels";
import { siteConfig } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Tv, Globe, Sparkles, Monitor, Radio, Film } from "lucide-react";

export const metadata: Metadata = {
  title: "Channel List — 26K+ Channels | iptv adult channels",
  description:
    "iptv adult channels channel list — browse 26,000+ adult IPTV channels in HD, 4K & 8K. European, Latin American, and international live channels. Complete adult channel guide with full categories.",
  openGraph: {
    title: "Adult IPTV Channel List — iptv adult channels Guide",
    description:
      "Explore the full adult IPTV channel list from iptv adult channels. 26,000+ live channels across all categories in HD, 4K & 8K. Browse the complete channel guide and subscribe today.",
    url: `${siteConfig.url}/channel-list`,
    images: [{ url: `${siteConfig.url}/images/article-1.jpg`, width: 1200, height: 630, alt: "iptv adult channels — channel list" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult IPTV Channel List — iptv adult channels Guide",
    description: "Explore the full adult IPTV channel list from iptv adult channels. 26,000+ live channels across all categories in HD, 4K & 8K. Browse the complete channel guide and subscribe today.",
    images: [`${siteConfig.url}/images/article-1.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/channel-list`,
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Premium Adult": <Sparkles className="w-6 h-6" />,
  "European": <Globe className="w-6 h-6" />,
  "Latin America": <Globe className="w-6 h-6" />,
  "4K Ultra HD": <Monitor className="w-6 h-6" />,
  "8K Premium": <Radio className="w-6 h-6" />,
  "VOD Categories": <Film className="w-6 h-6" />,
};

export default function ChannelListPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Channel List" }]}
      />

      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider mb-6">
              Channels
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Our{" "}
              <span className="text-accent">Channel List</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Access 25,000+ premium adult channels from around the world. Browse our categories below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {channelCategories.map((category) => (
              <div key={category.name} className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    {categoryIcons[category.name] || <Tv className="w-5 h-5" />}
                  </div>
                  <h2 className="text-lg font-semibold">{category.name}</h2>
                </div>
                <ul className="space-y-2">
                  {category.channels.map((channel) => (
                    <li
                      key={channel}
                      className="flex items-center gap-2.5 text-sm text-muted"
                    >
                      <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                      {channel}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-8 mt-12 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              This is Just a Sample
            </h2>
            <p className="text-muted mb-6 max-w-lg mx-auto">
              iptv adult channels has 25,000+ channels available. This is only a preview of the most popular categories. Subscribe to access the full list.
            </p>
            <Button size="lg" asChild>
              <Link href="/pricing" className="flex items-center gap-2">
                View Plans & Subscribe
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
