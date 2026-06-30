import type { Metadata } from "next";
import Link from "next/link";
import { Check, Tv, Globe, Clock, Radio, Film, Smartphone, Layers } from "lucide-react";
import { siteConfig } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Live Adult Channels — 24/7 Streaming | iptv adult channels",
  description:
    "iptv adult channels offers 26,000+ live adult channels broadcasting 24/7 from around the globe. Real-time live adult TV with instant access, 99.9% uptime, and ultra-low latency. Subscribe for non-stop streaming.",
  openGraph: {
    title: "Live Adult Channels — iptv adult channels 24/7 Streaming",
    description:
      "Watch 26,000+ live adult channels in real time. 24/7 adult live TV streaming with zero buffering. Private and secure. Subscribe to iptv adult channels for the ultimate live experience.",
    url: `${siteConfig.url}/live-adult-channels`,
    images: [{ url: `${siteConfig.url}/images/article-1.jpg`, width: 1200, height: 630, alt: "iptv adult channels — live adult channels" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Adult Channels — iptv adult channels 24/7 Streaming",
    description: "Watch 26,000+ live adult channels in real time. 24/7 adult live TV streaming with zero buffering. Private and secure. Subscribe to iptv adult channels for the ultimate live experience.",
    images: [`${siteConfig.url}/images/article-1.jpg`],
  },
  alternates: { canonical: `${siteConfig.url}/live-adult-channels` },
};

const liveChannelFeatures = [
  { icon: <Tv className="w-5 h-5" />, title: "26,000+ Live Channels", desc: "Access the largest collection of live adult channels covering every category, genre, and interest — available 24/7." },
  { icon: <Globe className="w-5 h-5" />, title: "Global Content Library", desc: "Watch live channels from North America, Europe, Asia, Australia, and more. International content at your fingertips." },
  { icon: <Radio className="w-5 h-5" />, title: "Ultra-Low Latency", desc: "Near-instant channel switching and real-time streaming with our optimized global server infrastructure." },
  { icon: <Clock className="w-5 h-5" />, title: "24/7 Availability", desc: "Live channels broadcast around the clock. Whether it is day or night, there is always something playing." },
  { icon: <Layers className="w-5 h-5" />, title: "Electronic Program Guide", desc: "Full 7-day EPG for all channels. See what is on now, what is playing next, and plan your viewing schedule." },
  { icon: <Smartphone className="w-5 h-5" />, title: "Stream Anywhere", desc: "Watch live channels on any device — Firestick, Smart TV, phone, tablet, or computer. One subscription, all devices." },
];

const categories = [
  "Entertainment",
  "Movies & Cinema",
  "Sports & Events",
  "Music & Concerts",
  "Documentaries",
  "News & Updates",
  "Lifestyle & Fashion",
  "International Programming",
];

export default function LiveAdultChannelsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Live Adult Channels" }]} />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-5">
              Live Adult Channels
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Live Adult Channels: Real-Time Premium Entertainment
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
              Dive into thousands of live adult channels broadcasting 24/7 from around the globe. 
              Real-time streaming, instant channel switching, and zero buffering — all in one premium subscription.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {liveChannelFeatures.map((feat) => (
              <div key={feat.title} className="glass-card rounded-2xl p-6 md:p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feat.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-5">Channel Categories</h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat} className="flex items-start gap-3 text-sm text-muted">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-5">Live Channels vs VOD</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Live channels offer real-time broadcasting with scheduled programming, while our VOD library provides on-demand access to 100,000+ titles you can watch anytime.
              </p>
              <div className="flex items-start gap-3 text-sm text-muted mb-2">
                <Tv className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Live Channels:</strong> Real-time, scheduled, immersive</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted">
                <Film className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span><strong className="text-foreground">VOD Library:</strong> On-demand, pause/resume, rewatch</span>
              </div>
              <div className="mt-6">
                <Link href="/adult-vod-library" className="text-accent hover:underline text-sm">
                  Explore VOD Library &rarr;
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass rounded-2xl p-8 md:p-12 text-center border border-accent/10">
              <Radio className="w-10 h-10 text-accent mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Explore 26,000+ Live Channels
              </h2>
              <p className="text-muted max-w-2xl mx-auto mb-8">
                Browse the complete live adult channels list from iptv adult channels and start watching instantly. New channels added regularly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/channel-list"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
                >
                  View Channel List
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 text-foreground font-semibold hover:bg-white/5 transition-colors"
                >
                  Choose a Plan
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What are live adult channels?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Live adult channels are real-time streaming channels that broadcast scheduled programming 24/7. Unlike VOD content where you pick what to watch, live channels offer a continuous stream of content organized by category, genre, and region.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How many live adult channels do you offer?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels offers over 26,000 live adult channels covering a vast range of categories including entertainment, movies, sports, music, documentaries, news, lifestyle, and international programming from around the world.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Are live channels available in different time zones?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Our live channels broadcast from every time zone globally, ensuring there is always something playing regardless of your local time. The 7-day EPG makes it easy to find what is airing now and what is coming up.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I record live channels to watch later?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most of our live channels include catch-up functionality that lets you access previously aired content. Additionally, our VOD library contains many of the same titles available for on-demand viewing at any time.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How are live channels different from VOD content?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Live channels stream scheduled programming in real-time, similar to traditional TV. VOD (Video on Demand) lets you choose specific titles from our library of 100,000+ and watch them anytime, with full pause, resume, and rewatch controls.",
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-0">
              {[
                {
                  q: "What are live adult channels?",
                  a: "Live adult channels are real-time streaming channels that broadcast scheduled programming 24/7. Unlike VOD content where you pick what to watch, live channels offer a continuous stream of content organized by category, genre, and region.",
                },
                {
                  q: "How many live adult channels do you offer?",
                  a: "iptv adult channels offers over 26,000 live adult channels covering a vast range of categories including entertainment, movies, sports, music, documentaries, news, lifestyle, and international programming from around the world.",
                },
                {
                  q: "Are live channels available in different time zones?",
                  a: "Yes. Our live channels broadcast from every time zone globally, ensuring there is always something playing regardless of your local time. The 7-day EPG makes it easy to find what is airing now and what is coming up.",
                },
                {
                  q: "Can I record live channels to watch later?",
                  a: "Most of our live channels include catch-up functionality that lets you access previously aired content. Additionally, our VOD library contains many of the same titles available for on-demand viewing at any time.",
                },
                {
                  q: "How are live channels different from VOD content?",
                  a: "Live channels stream scheduled programming in real-time, similar to traditional TV. VOD (Video on Demand) lets you choose specific titles from our library of 100,000+ and watch them anytime, with full pause, resume, and rewatch controls.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-5 mb-5 last:border-0 last:pb-0 last:mb-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
