import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Zap, Monitor, Headset, Globe, Tv, Sparkles } from "lucide-react";
import { siteConfig } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Premium Adult IPTV — 4K & 8K Streaming | iptv adult channels",
  description:
    "iptv adult channels delivers premium adult IPTV with crystal-clear 4K & 8K streaming. Anti-freeze technology, 99.9% uptime, and 24/7 support. Ultra HD adult IPTV on Firestick, Smart TV, Android & iOS.",
  openGraph: {
    title: "Premium Adult IPTV — iptv adult channels 4K & 8K",
    description:
      "Experience true premium adult IPTV with Ultra HD 4K & 8K quality. Buffer-free streaming, global servers, and priority support. Subscribe to iptv adult channels for the best viewing experience.",
    url: `${siteConfig.url}/premium-adult-iptv`,
  },
  alternates: { canonical: `${siteConfig.url}/premium-adult-iptv` },
};

const premiumFeatures = [
  { icon: <Monitor className="w-5 h-5" />, title: "4K & 8K Ultra HD Quality", desc: "Experience breathtaking picture quality with native 4K and select 8K channels. Every detail comes to life with stunning clarity." },
  { icon: <Zap className="w-5 h-5" />, title: "Anti-Freeze Technology", desc: "Our proprietary anti-freeze system uses intelligent routing and predictive buffering to eliminate buffering and interruptions." },
  { icon: <Shield className="w-5 h-5" />, title: "99.9% Uptime Guarantee", desc: "Enterprise-grade server infrastructure with automatic failover ensures your premium adult IPTV is always available." },
  { icon: <Globe className="w-5 h-5" />, title: "Global Optimized Servers", desc: "Strategically located servers across North America, Europe, Asia, and Australia deliver ultra-low latency worldwide." },
  { icon: <Headset className="w-5 h-5" />, title: "24/7 Priority Support", desc: "Premium subscribers get priority access to our expert support team via WhatsApp, live chat, and email — day or night." },
  { icon: <Tv className="w-5 h-5" />, title: "Multi-Device 4K Streaming", desc: "Stream in full 4K on up to 6 devices simultaneously. Works on Firestick, Smart TV, Android TV, and more." },
];

const qualityTiers = [
  { name: "HD (1080p)", bandwidth: "10 Mbps", devices: "All devices", availability: "All channels" },
  { name: "Full HD", bandwidth: "15 Mbps", devices: "All devices", availability: "Most channels" },
  { name: "4K Ultra HD", bandwidth: "25 Mbps", devices: "4K-compatible devices", availability: "Premium channels" },
  { name: "8K Ultra HD", bandwidth: "50 Mbps", devices: "8K-compatible devices", availability: "Select premium channels" },
];

export default function PremiumAdultIptvPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Premium Adult IPTV" }]} />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-5">
              Premium Adult IPTV
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Premium Adult IPTV: Ultra HD Quality & Unmatched Reliability
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
               <strong className="text-foreground">iptv adult channels</strong> elevates your viewing experience with <strong className="text-foreground">premium adult IPTV</strong> — crystal-clear 4K and 8K streaming, 
               anti-freeze technology, 99.9% uptime, and round-the-clock expert support. Explore our <Link href="/adult-iptv-channels" className="text-accent hover:underline">channel list</Link> or read our <Link href="/blog" className="text-accent hover:underline">setup guides</Link> to get started.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {premiumFeatures.map((feat) => (
              <div key={feat.title} className="glass-card rounded-2xl p-6 md:p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feat.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center">
              Streaming Quality Tiers
            </h2>
            <div className="glass-card rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 font-semibold">Quality</th>
                    <th className="text-left py-4 px-6 font-semibold">Required Bandwidth</th>
                    <th className="text-left py-4 px-6 font-semibold">Compatible Devices</th>
                    <th className="text-left py-4 px-6 font-semibold">Availability</th>
                  </tr>
                </thead>
                <tbody>
                  {qualityTiers.map((tier) => (
                    <tr key={tier.name} className="border-b border-white/5 last:border-0">
                      <td className="py-4 px-6 font-medium">{tier.name}</td>
                      <td className="py-4 px-6 text-muted">{tier.bandwidth}</td>
                      <td className="py-4 px-6 text-muted">{tier.devices}</td>
                      <td className="py-4 px-6 text-muted">{tier.availability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass rounded-2xl p-8 md:p-12 text-center border border-accent/10">
              <Sparkles className="w-10 h-10 text-accent mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Experience Premium Quality Today
              </h2>
              <p className="text-muted max-w-2xl mx-auto mb-8">
                From $5.58/month for crystal-clear 4K and 8K streaming with zero buffering. No contracts, no auto-renewal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
                >
                  See Premium Plans
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
                      name: "What makes your premium adult IPTV different from standard IPTV?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels delivers native 4K and 8K streaming with proprietary anti-freeze technology, 99.9% uptime guarantee, global optimized servers, and 24/7 priority support. iptv adult channels invests in enterprise-grade infrastructure to ensure the highest quality streaming experience.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What internet speed do I need for 4K and 8K streaming?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "For HD (1080p) streaming iptv adult channels recommends at least 10 Mbps, for 4K Ultra HD at least 25 Mbps, and for 8K streaming at least 50 Mbps. iptv adult channels' adaptive streaming technology automatically adjusts quality based on your connection for buffer-free playback.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How does your anti-freeze technology work?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels' anti-freeze technology combines intelligent server routing, predictive buffering, and adaptive bitrate streaming. The system automatically detects network conditions and routes your stream through the fastest available server, pre-buffers content, and adjusts quality in real-time to prevent buffering.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I stream premium adult IPTV on multiple devices simultaneously?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Depending on your plan, you can stream on up to 6 devices simultaneously. iptv adult channels' 12-month plan supports 4 simultaneous streams, while iptv adult channels' premium plans support up to 6. Each stream maintains full quality regardless of device count.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do you offer a money-back guarantee for premium plans?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. All iptv adult channels plans, including premium, come with a 7-day money-back guarantee. If you are not satisfied with the streaming quality or service for any reason, contact iptv adult channels' support team within 7 days for a full refund — no questions asked.",
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-0">
              {[
                {
                  q: "What makes your premium adult IPTV different from standard IPTV?",
                  a: "iptv adult channels delivers native 4K and 8K streaming with proprietary anti-freeze technology, 99.9% uptime guarantee, global optimized servers, and 24/7 priority support. iptv adult channels invests in enterprise-grade infrastructure to ensure the highest quality streaming experience.",
                },
                {
                  q: "What internet speed do I need for 4K and 8K streaming?",
                  a: "For HD (1080p) streaming iptv adult channels recommends at least 10 Mbps, for 4K Ultra HD at least 25 Mbps, and for 8K streaming at least 50 Mbps. iptv adult channels' adaptive streaming technology automatically adjusts quality based on your connection for buffer-free playback.",
                },
                {
                  q: "How does your anti-freeze technology work?",
                  a: "iptv adult channels' anti-freeze technology combines intelligent server routing, predictive buffering, and adaptive bitrate streaming. The system automatically detects network conditions and routes your stream through the fastest available server, pre-buffers content, and adjusts quality in real-time to prevent buffering.",
                },
                {
                  q: "Can I stream premium adult IPTV on multiple devices simultaneously?",
                  a: "Yes. Depending on your plan, you can stream on up to 6 devices simultaneously. iptv adult channels' 12-month plan supports 4 simultaneous streams, while iptv adult channels' premium plans support up to 6. Each stream maintains full quality regardless of device count.",
                },
                {
                  q: "Do you offer a money-back guarantee for premium plans?",
                  a: "Absolutely. All iptv adult channels plans, including premium, come with a 7-day money-back guarantee. If you are not satisfied with the streaming quality or service for any reason, contact iptv adult channels' support team within 7 days for a full refund — no questions asked.",
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
