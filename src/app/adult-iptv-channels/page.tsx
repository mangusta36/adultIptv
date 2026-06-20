import type { Metadata } from "next";
import Link from "next/link";
import { Check, Tv, Globe, Film, Shield, Smartphone, Zap } from "lucide-react";
import { siteConfig } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Adult IPTV Channels — 26,000+ Channels | iptv adult channels",
  description:
    "iptv adult channels offers premium adult IPTV channels with 26,000+ live channels and 100,000+ VOD titles. HD, 4K & 8K adult IPTV streaming on Firestick, Smart TV, Android & iOS. Private, buffer-free, instant setup.",
  openGraph: {
    title: "Adult IPTV Channels — iptv adult channels Premium Streaming",
    description:
      "Browse 26,000+ adult IPTV channels in HD, 4K & 8K. Live adult channels and massive VOD library. Private, secure, buffer-free streaming on all devices. Subscribe to iptv adult channels today.",
    url: `${siteConfig.url}/adult-iptv-channels`,
  },
  alternates: { canonical: `${siteConfig.url}/adult-iptv-channels` },
};

const benefits = [
  { icon: <Tv className="w-5 h-5" />, title: "26,000+ Live Channels", desc: "Access the largest collection of adult IPTV channels available anywhere, covering every category and genre imaginable." },
  { icon: <Film className="w-5 h-5" />, title: "100,000+ VOD Titles", desc: "Explore an enormous on-demand library with premium adult content updated daily in stunning HD and 4K quality." },
  { icon: <Shield className="w-5 h-5" />, title: "Full Privacy Protection", desc: "Your privacy is paramount. Encrypted connections, no logs policy, and discreet billing ensure complete anonymity." },
  { icon: <Zap className="w-5 h-5" />, title: "Anti-Freeze Technology", desc: "Proprietary anti-freeze servers deliver buffer-free streaming with intelligent routing and adaptive bitrate optimization." },
  { icon: <Smartphone className="w-5 h-5" />, title: "All Device Support", desc: "Stream on Firestick, Smart TV, Android, iOS, PC, Mac, and more — one subscription works across all your devices." },
  { icon: <Globe className="w-5 h-5" />, title: "Global Server Network", desc: "Servers strategically located worldwide ensure low-latency streaming with 99.9% uptime guarantee." },
];

const features = [
  "26,000+ live adult channels across all categories",
  "100,000+ premium VOD titles in HD, Full HD, and 4K",
  "Zero buffering with anti-freeze streaming technology",
  "99.9% server uptime with global content delivery network",
  "Instant activation — start watching in under 5 minutes",
  "Works on Firestick, Smart TV, Android, iOS, PC, and Mac",
  "24/7 expert support via WhatsApp, email, and live chat",
  "No contracts, no auto-renewal, no hidden fees",
  "Regularly updated channel list with new content daily",
  "Electronic Program Guide (EPG) with 7-day schedule",
];

export default function AdultIptvChannelsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Adult IPTV Channels" }]} />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-5">
              Adult IPTV Channels
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Adult IPTV Channels: Premium Live Streaming & On-Demand Content
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
               <strong className="text-foreground">iptv adult channels</strong> delivers the ultimate <strong className="text-foreground">adult IPTV channels</strong> experience with over 26,000 live channels and 100,000 VOD titles. 
               Crystal-clear <Link href="/premium-adult-iptv" className="text-accent hover:underline">4K and 8K streaming</Link>, anti-freeze technology, and full privacy protection — all in one <Link href="/adult-iptv-subscription" className="text-accent hover:underline">premium subscription</Link>. Visit our <Link href="/blog" className="text-accent hover:underline">blog</Link> for channel guides and streaming tips.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="glass-card rounded-2xl p-6 md:p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center">
              What You Get with Adult IPTV Channels
            </h2>
            <div className="glass-card rounded-2xl p-8">
              <ul className="grid sm:grid-cols-2 gap-4">
                {features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-muted">
                    <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass rounded-2xl p-8 md:p-12 text-center border border-accent/10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Ready to Explore 26,000+ Channels?
              </h2>
              <p className="text-muted max-w-2xl mx-auto mb-8">
                Choose the plan that fits your needs and get instant access to the world&apos;s largest adult IPTV channels collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
                >
                  View Pricing Plans
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 text-foreground font-semibold hover:bg-white/5 transition-colors"
                >
                  Explore Features
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
                      name: "What are adult IPTV channels?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Adult IPTV channels are premium live and on-demand adult entertainment channels streamed over the internet. Instead of traditional cable or satellite, content is delivered through your internet connection to any compatible device — Firestick, Smart TV, Android, iOS, PC, and more.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How many adult IPTV channels do you offer?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels offers over 26,000 live adult channels from around the world, covering every category and genre. The channel list is updated regularly with new additions, and we also provide access to 100,000+ VOD titles for on-demand viewing.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What streaming quality is available for adult IPTV channels?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels are available in HD (1080p), Full HD, 4K Ultra HD, and select channels in 8K quality. iptv adult channels' adaptive streaming technology automatically adjusts to your internet speed for optimal playback.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is my privacy protected when using adult IPTV channels?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. We prioritize your privacy with encrypted connections, a strict no-logs policy, and discreet billing that shows no adult-related descriptors on your statements. Your viewing activity and personal information are completely confidential.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Which devices support adult IPTV channels streaming?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels work on all major devices including Amazon Firestick, Fire TV, Samsung Smart TV, LG Smart TV, Sony Smart TV, Android TV boxes, Android phones and tablets, iPhone and iPad, PC, Mac, and Formuler or MAG boxes. One subscription works across all devices.",
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-0">
              {[
                {
                  q: "What are adult IPTV channels?",
                  a: "Adult IPTV channels are premium live and on-demand adult entertainment channels streamed over the internet. Instead of traditional cable or satellite, content is delivered through your internet connection to any compatible device — Firestick, Smart TV, Android, iOS, PC, and more.",
                },
                {
                  q: "How many adult IPTV channels do you offer?",
                  a: "iptv adult channels offers over 26,000 live adult channels from around the world, covering every category and genre. The channel list is updated regularly with new additions, and we also provide access to 100,000+ VOD titles for on-demand viewing.",
                },
                {
                  q: "What streaming quality is available for adult IPTV channels?",
                  a: "iptv adult channels are available in HD (1080p), Full HD, 4K Ultra HD, and select channels in 8K quality. iptv adult channels' adaptive streaming technology automatically adjusts to your internet speed for optimal playback.",
                },
                {
                  q: "Is my privacy protected when using adult IPTV channels?",
                  a: "Absolutely. We prioritize your privacy with encrypted connections, a strict no-logs policy, and discreet billing that shows no adult-related descriptors on your statements. Your viewing activity and personal information are completely confidential.",
                },
                {
                  q: "Which devices support adult IPTV channels streaming?",
                  a: "iptv adult channels work on all major devices including Amazon Firestick, Fire TV, Samsung Smart TV, LG Smart TV, Sony Smart TV, Android TV boxes, Android phones and tablets, iPhone and iPad, PC, Mac, and Formuler or MAG boxes. One subscription works across all devices.",
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
