import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About iptv adult channels — Premium IPTV Since 2024",
  description:
    "Learn about iptv adult channels — the premium adult IPTV provider with 26,000+ channels, 4K/8K streaming, and 24/7 support. Dedicated to delivering the best streaming experience worldwide.",
  openGraph: {
    title: "About iptv adult channels — Premium IPTV Provider",
    description:
      "Discover the story behind iptv adult channels. A premium adult IPTV service with 26,000+ live channels, 100,000+ VOD titles, and enterprise-grade streaming infrastructure.",
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: `${siteConfig.url}/images/article-1.jpg`,
        width: 1200,
        height: 630,
        alt: "About iptv adult channels premium IPTV provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About iptv adult channels — Premium IPTV Provider",
    description:
      "Discover the story behind iptv adult channels. A premium adult IPTV service with 26,000+ live channels, 100,000+ VOD titles.",
    images: [`${siteConfig.url}/images/article-1.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider mb-6">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              We&apos;re Redefining{" "}
              <span className="text-accent">Premium IPTV</span>
            </h1>
            <div className="prose prose-invert max-w-none text-muted space-y-6 text-base leading-relaxed">
              <p>
                iptv adult channels was founded with a simple mission: to provide the highest-quality adult IPTV
                streaming experience available anywhere.  iptv adult channels believes that premium adult IPTV should be accessible,
                reliable, and breathtaking in quality.
              </p>
              <p>
                With over <Link href="/adult-iptv-channels" className="text-accent hover:underline">26,000+ adult IPTV channels</Link> and <Link href="/adult-vod-library" className="text-accent hover:underline">100,000+ VOD titles</Link>, iptv adult channels offers the most extensive content library
                in the industry. Content is streamed in up to 8K quality, ensuring crystal-clear picture on any
                device from <Link href="/adult-iptv-for-firestick" className="text-accent hover:underline">Firestick</Link> to <Link href="/adult-iptv-for-smart-tv" className="text-accent hover:underline">Smart TV</Link>.
              </p>
              <p>
                iptv adult channels&apos; team of streaming experts works around the clock to maintain 99.9% uptime, add new channels
                weekly, and ensure the anti-freeze technology delivers buffer-free viewing even during peak hours.
              </p>
              <p>
                iptv adult channels is proud to serve thousands of satisfied subscribers worldwide, and the 24/7 support team is
                always ready to help.                 Whether you&apos;re a first-time IPTV user or a streaming veteran, iptv adult channels is here to
                provide the best possible experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-12">
              {[
                { value: "26,000+", label: "Live Channels" },
                { value: "100,000+", label: "VOD Titles" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/pricing" className="flex items-center gap-2">
                  View Our Plans
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
