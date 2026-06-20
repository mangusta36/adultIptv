import type { Metadata } from "next";
import Link from "next/link";
import { Check, Film, Search, RefreshCw, Monitor, Smartphone, Star, Tv } from "lucide-react";
import { siteConfig } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Adult VOD Library — 100K+ Titles | iptv adult channels",
  description:
    "iptv adult channels features a massive adult VOD library with 100,000+ premium on-demand titles in HD & 4K. Adult video library updated daily. Stream or download anytime with your subscription.",
  openGraph: {
    title: "Adult VOD Library — iptv adult channels 100K+ Titles",
    description:
      "Explore the largest adult VOD library from iptv adult channels. 100,000+ adult on-demand titles in stunning quality. Daily updates, offline download, and instant streaming. Subscribe now.",
    url: `${siteConfig.url}/adult-vod-library`,
  },
  alternates: { canonical: `${siteConfig.url}/adult-vod-library` },
};

const vodFeatures = [
  { icon: <Film className="w-5 h-5" />, title: "100,000+ Premium Titles", desc: "Massive on-demand library spanning every category and genre. Far more content than any traditional streaming service." },
  { icon: <Monitor className="w-5 h-5" />, title: "HD & 4K Quality", desc: "Every title available in stunning quality. From HD to 4K Ultra HD, experience crystal-clear picture on any device." },
  { icon: <RefreshCw className="w-5 h-5" />, title: "Daily Content Updates", desc: "New titles added every single day. Our library never stops growing with the latest releases and timeless classics." },
  { icon: <Search className="w-5 h-5" />, title: "Advanced Search & Filters", desc: "Find exactly what you want with powerful search, category filters, and personalized recommendations." },
  { icon: <Smartphone className="w-5 h-5" />, title: "Stream or Download", desc: "Watch instantly online or download titles to your device for offline viewing. Perfect for travel or limited connectivity." },
  { icon: <Star className="w-5 h-5" />, title: "Curated Collections", desc: "Hand-picked collections and themed playlists updated regularly. Discover new favorites through expert curation." },
];

const vodCategories = [
  "Action & Adventure",
  "Comedy & Entertainment",
  "Documentaries & Reality",
  "Drama & Romance",
  "International Cinema",
  "Music & Concerts",
  "Nature & Travel",
  "Sports & Fitness",
  "Thrillers & Mystery",
  "Trending & New Releases",
];

export default function AdultVodLibraryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Adult VOD Library" }]} />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-5">
              Adult VOD Library
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Adult VOD Library: Unlimited On-Demand Premium Content
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
              Explore our massive adult VOD library with over 100,000 premium titles in stunning HD and 4K quality. 
              Updated daily with new releases — there is always something new to watch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {vodFeatures.map((feat) => (
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
              <h3 className="text-lg font-semibold mb-5">Content Categories</h3>
              <ul className="space-y-3">
                {vodCategories.map((cat) => (
                  <li key={cat} className="flex items-start gap-3 text-sm text-muted">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-5">VOD vs Live Channels</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Our VOD library complements live channels perfectly. When nothing on live TV catches your eye, dive into thousands of on-demand titles available instantly.
              </p>
              <div className="flex items-start gap-3 text-sm text-muted mb-2">
                <Film className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span><strong className="text-foreground">VOD Library:</strong> Choose any title, anytime. Pause, resume, rewatch.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted">
                <Tv className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Live Channels:</strong> Real-time scheduled programming, always on.</span>
              </div>
              <div className="mt-6">
                <Link href="/live-adult-channels" className="text-accent hover:underline text-sm">
                  Explore Live Channels &rarr;
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass rounded-2xl p-8 md:p-12 text-center border border-accent/10">
              <Film className="w-10 h-10 text-accent mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                100,000+ Titles at Your Fingertips
              </h2>
              <p className="text-muted max-w-2xl mx-auto mb-8">
                Start exploring iptv adult channels&apos; VOD library — the largest adult on-demand collection available. New titles added daily.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
                >
                  Get Instant Access
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 text-foreground font-semibold hover:bg-white/5 transition-colors"
                >
                  All Features
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
                      name: "How does the adult VOD library work?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels' VOD (Video on Demand) library gives you instant access to over 100,000 premium titles you can watch anytime. Simply browse or search the library, click a title, and start streaming immediately. Full pause, resume, and rewatch controls are included.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What kind of content is available in the VOD library?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels' VOD library spans every major category including action, comedy, drama, documentaries, romance, international cinema, music, sports, nature, and much more. We also feature curated collections and trending new releases updated regularly.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How often is the VOD library updated?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "New titles are added to iptv adult channels' VOD library every single day. We continuously update with the latest releases, popular classics, and exclusive content to ensure there is always something fresh to discover.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I download VOD titles to watch offline?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iptv adult channels supports downloading VOD titles to your device for offline viewing. This is perfect for when you are traveling, have limited internet access, or want to save content for later without using data.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How do I search for specific content in the VOD library?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels' VOD library features a powerful search engine with category filters, genre browsing, and keyword search. You can also browse curated collections, trending titles, and new releases. Personalized recommendations help you discover content tailored to your preferences.",
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-0">
              {[
                {
                  q: "How does the adult VOD library work?",
                  a: "iptv adult channels' VOD (Video on Demand) library gives you instant access to over 100,000 premium titles you can watch anytime. Simply browse or search the library, click a title, and start streaming immediately. Full pause, resume, and rewatch controls are included.",
                },
                {
                  q: "What kind of content is available in the VOD library?",
                  a: "iptv adult channels' VOD library spans every major category including action, comedy, drama, documentaries, romance, international cinema, music, sports, nature, and much more. We also feature curated collections and trending new releases updated regularly.",
                },
                {
                  q: "How often is the VOD library updated?",
                  a: "New titles are added to iptv adult channels' VOD library every single day. We continuously update with the latest releases, popular classics, and exclusive content to ensure there is always something fresh to discover.",
                },
                {
                  q: "Can I download VOD titles to watch offline?",
                  a: "Yes. iptv adult channels supports downloading VOD titles to your device for offline viewing. This is perfect for when you are traveling, have limited internet access, or want to save content for later without using data.",
                },
                {
                  q: "How do I search for specific content in the VOD library?",
                  a: "iptv adult channels' VOD library features a powerful search engine with category filters, genre browsing, and keyword search. You can also browse curated collections, trending titles, and new releases. Personalized recommendations help you discover content tailored to your preferences.",
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
