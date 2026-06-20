import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Globe, Monitor, Wifi, Server, Settings, Play } from "lucide-react";
import { siteConfig } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Adult IPTV Streaming — 4K & 8K | iptv adult channels",
  description:
    "iptv adult channels delivers premium adult IPTV streaming with zero buffering. HD, 4K & 8K quality, adaptive bitrate technology, and global servers. Buffer-free adult streaming on all devices.",
  openGraph: {
    title: "Adult IPTV Streaming — iptv adult channels HD & 4K",
    description:
      "Experience buffer-free adult IPTV streaming in stunning HD, 4K & 8K. Anti-freeze technology ensures smooth playback. Subscribe to iptv adult channels for premium streaming today.",
    url: `${siteConfig.url}/adult-iptv-streaming`,
  },
  alternates: { canonical: `${siteConfig.url}/adult-iptv-streaming` },
};

const streamingFeatures = [
  { icon: <Zap className="w-5 h-5" />, title: "Zero Buffering Technology", desc: "Our proprietary anti-freeze engine predicts network conditions and pre-buffers content, eliminating buffering completely." },
  { icon: <Monitor className="w-5 h-5" />, title: "HD, 4K & 8K Support", desc: "Stream in stunning HD (1080p), Full HD, 4K Ultra HD, and select 8K channels with adaptive bitrate optimization." },
  { icon: <Globe className="w-5 h-5" />, title: "Global Server Network", desc: "Servers in North America, Europe, Asia, and Australia ensure ultra-low latency streaming no matter where you are." },
  { icon: <Wifi className="w-5 h-5" />, title: "Adaptive Bitrate Streaming", desc: "Automatically adjusts quality based on your internet speed for uninterrupted playback — even during peak hours." },
  { icon: <Server className="w-5 h-5" />, title: "Enterprise Infrastructure", desc: "Enterprise-grade servers with automatic failover and load balancing guarantee 99.9% streaming availability." },
  { icon: <Settings className="w-5 h-5" />, title: "Device Optimized Playback", desc: "Streaming engine optimized for every device — Firestick, Smart TV, Android, iOS, PC, and Mac." },
];

const speedRequirements = [
  { quality: "SD (480p)", speed: "5 Mbps", experience: "Basic quality" },
  { quality: "HD (720p)", speed: "8 Mbps", experience: "Good quality" },
  { quality: "Full HD (1080p)", speed: "10 Mbps", experience: "Excellent quality" },
  { quality: "4K Ultra HD", speed: "25 Mbps", experience: "Premium quality" },
  { quality: "8K Ultra HD", speed: "50 Mbps", experience: "Ultimate quality" },
];

export default function AdultIptvStreamingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Adult IPTV Streaming" }]} />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-5">
              Adult IPTV Streaming
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Adult IPTV Streaming: Crystal Clear, Buffer-Free, Always On
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
               <strong className="text-foreground">iptv adult channels</strong> delivers <strong className="text-foreground">adult IPTV streaming</strong> at its best — zero buffering, stunning <Link href="/premium-adult-iptv" className="text-accent hover:underline">4K and 8K quality</Link>, 
               and a global server network that streams your content instantly. Learn how to <Link href="/adult-iptv-for-firestick" className="text-accent hover:underline">set up on Firestick</Link> or <Link href="/adult-iptv-for-smart-tv" className="text-accent hover:underline">Smart TV</Link> with our <Link href="/blog" className="text-accent hover:underline">installation guides</Link>.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {streamingFeatures.map((feat) => (
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
              Internet Speed Requirements
            </h2>
            <div className="glass-card rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 font-semibold">Streaming Quality</th>
                    <th className="text-left py-4 px-6 font-semibold">Recommended Speed</th>
                    <th className="text-left py-4 px-6 font-semibold">Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {speedRequirements.map((row) => (
                    <tr key={row.quality} className="border-b border-white/5 last:border-0">
                      <td className="py-4 px-6 font-medium">{row.quality}</td>
                      <td className="py-4 px-6 text-muted">{row.speed}</td>
                      <td className="py-4 px-6 text-muted">{row.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass rounded-2xl p-8 md:p-12 text-center border border-accent/10">
              <Play className="w-10 h-10 text-accent mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Start Streaming in Minutes
              </h2>
              <p className="text-muted max-w-2xl mx-auto mb-8">
                Subscribe to iptv adult channels, set up, and start enjoying buffer-free adult IPTV streaming on any device.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
                >
                  View Pricing
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 text-foreground font-semibold hover:bg-white/5 transition-colors"
                >
                  Streaming Features
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
                      name: "What streaming quality does adult IPTV support?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels supports HD (1080p), Full HD, 4K Ultra HD, and select channels in 8K quality. The adaptive bitrate streaming technology automatically optimizes quality based on your internet connection speed for the best possible viewing experience.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What internet speed do I need for buffer-free adult IPTV streaming?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "For HD streaming we recommend at least 10 Mbps, for 4K streaming at least 25 Mbps, and for 8K streaming at least 50 Mbps. Our adaptive technology ensures smooth playback even if your speed fluctuates temporarily.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Why do I experience buffering and how can I fix it?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Buffering is typically caused by insufficient internet speed, network congestion, or WiFi interference. Try connecting via Ethernet, closing bandwidth-heavy apps, or lowering the stream quality. Our anti-freeze technology minimizes buffering automatically.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do you have servers in my region?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels maintains strategically located servers across North America, Europe, Asia, and Australia. The intelligent routing system automatically connects you to the fastest server for your location, ensuring ultra-low latency streaming.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I stream adult IPTV on my Firestick or Smart TV?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Our adult IPTV streaming works perfectly on Amazon Firestick, Fire TV, Samsung Smart TV, LG Smart TV, Sony Smart TV, Android TV boxes, and more. Each device is optimized for the best streaming performance.",
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-0">
              {[
                {
                  q: "What streaming quality does adult IPTV support?",
                  a: "iptv adult channels supports HD (1080p), Full HD, 4K Ultra HD, and select channels in 8K quality. The adaptive bitrate streaming technology automatically optimizes quality based on your internet connection speed for the best possible viewing experience.",
                },
                {
                  q: "What internet speed do I need for buffer-free adult IPTV streaming?",
                  a: "For HD streaming we recommend at least 10 Mbps, for 4K streaming at least 25 Mbps, and for 8K streaming at least 50 Mbps. Our adaptive technology ensures smooth playback even if your speed fluctuates temporarily.",
                },
                {
                  q: "Why do I experience buffering and how can I fix it?",
                  a: "Buffering is typically caused by insufficient internet speed, network congestion, or WiFi interference. Try connecting via Ethernet, closing bandwidth-heavy apps, or lowering the stream quality. Our anti-freeze technology minimizes buffering automatically.",
                },
                {
                  q: "Do you have servers in my region?",
                  a: "iptv adult channels maintains strategically located servers across North America, Europe, Asia, and Australia. The intelligent routing system automatically connects you to the fastest server for your location, ensuring ultra-low latency streaming.",
                },
                {
                  q: "Can I stream adult IPTV on my Firestick or Smart TV?",
                  a: "Absolutely. Our adult IPTV streaming works perfectly on Amazon Firestick, Fire TV, Samsung Smart TV, LG Smart TV, Sony Smart TV, Android TV boxes, and more. Each device is optimized for the best streaming performance.",
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
