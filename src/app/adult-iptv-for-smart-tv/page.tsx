import type { Metadata } from "next";
import Link from "next/link";
import { Check, Monitor, Tv, Smartphone, Settings, Shield, Play } from "lucide-react";
import { siteConfig } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "IPTV for Smart TV — Samsung & LG | iptv adult channels",
  description:
    "iptv adult channels on Smart TV — compatible with Samsung, LG, Sony, and Android TV. 4K adult IPTV streaming on your big screen. Easy setup guide for all major Smart TV brands. Subscribe today.",
  openGraph: {
    title: "Adult IPTV for Smart TV — iptv adult channels Setup",
    description:
      "Watch premium adult IPTV on your Smart TV with iptv adult channels. Full support for Samsung, LG, Sony, and Android TV. 4K streaming with easy setup. Subscribe and start watching instantly.",
    url: `${siteConfig.url}/adult-iptv-for-smart-tv`,
  },
  alternates: { canonical: `${siteConfig.url}/adult-iptv-for-smart-tv` },
};

const smartTvFeatures = [
  { icon: <Monitor className="w-5 h-5" />, title: "Samsung Smart TV Support", desc: "Full compatibility with Samsung Smart TVs including Tizen OS models from 2016 onwards. Supports Samsung Smart Hub and all major IPTV players." },
  { icon: <Tv className="w-5 h-5" />, title: "LG Smart TV Support", desc: "Works on LG Smart TVs running webOS. Install from LG Content Store or use recommended external players for the best experience." },
  { icon: <Smartphone className="w-5 h-5" />, title: "Sony & Android TV Support", desc: "Native Android TV support for Sony, Philips, Sharp, and all Android TV and Google TV devices. Direct install from Google Play Store." },
  { icon: <Settings className="w-5 h-5" />, title: "4K Optimization", desc: "Optimized 4K streaming on compatible Smart TVs. Enjoy stunning picture quality with HDR support on Samsung, LG, and Sony 4K models." },
  { icon: <Shield className="w-5 h-5" />, title: "Privacy Protection", desc: "Private browsing and encrypted streaming on your Smart TV. Your viewing activity remains completely confidential." },
  { icon: <Play className="w-5 h-5" />, title: "Easy Setup Process", desc: "Get started in minutes. Subscribe, install the player app on your Smart TV, enter credentials, and start watching premium content." },
];

const brandSetup = [
  { brand: "Samsung Smart TV", method: "Install via Samsung Smart Hub or use external device. We recommend using the native Tizen IPTV player for seamless integration." },
  { brand: "LG Smart TV", method: "Install from LG Content Store or connect via external streaming device. webOS supports multiple IPTV applications." },
  { brand: "Sony / Android TV", method: "Install directly from Google Play Store. Full Android TV integration with Google Assistant voice control support." },
  { brand: "Other Smart TVs", method: "Use an external streaming device like Firestick, Android TV box, or Chromecast for best compatibility and performance." },
];

export default function AdultIptvForSmartTvPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Adult IPTV for Smart TV" }]} />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-5">
              Smart TV Setup
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Adult IPTV for Smart TV: Premium Streaming on Your Big Screen
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
              Watch premium adult IPTV on your Smart TV — Samsung, LG, Sony, Android TV, and more. 
              Crystal-clear 4K streaming, easy setup, and full privacy protection on the biggest screen in your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {smartTvFeatures.map((feat) => (
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
              Setup by Smart TV Brand
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {brandSetup.map((item) => (
                <div key={item.brand} className="glass-card rounded-2xl p-6">
                  <h3 className="text-base font-semibold mb-3">{item.brand}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.method}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-5">Tips for Best Smart TV Experience</h3>
              <ul className="space-y-3">
                {[
                  "Use a wired Ethernet connection for the most stable 4K streaming on your Smart TV",
                  "Ensure your Smart TV firmware is updated to the latest version for best app compatibility",
                  "For Samsung and LG TVs, use IPTV apps optimized for Tizen and webOS respectively",
                  "Android TV users can install IPTV players directly from the Google Play Store",
                  "Enable game mode or picture mode optimization on your TV for reduced input lag",
                  "If native app support is limited, use an external device like Firestick 4K for superior performance",
                  "Adjust display settings for 4K HDR content to get the best picture quality",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm text-muted">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass rounded-2xl p-8 md:p-12 text-center border border-accent/10">
              <Monitor className="w-10 h-10 text-accent mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Start Watching on Your Smart TV
              </h2>
              <p className="text-muted max-w-2xl mx-auto mb-8">
                Subscribe to iptv adult channels and set up on your Smart TV in minutes. 4K streaming, zero buffering, full privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
                >
                  Subscribe Now
                </Link>
                <Link
                  href="/installation-guide"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 text-foreground font-semibold hover:bg-white/5 transition-colors"
                >
                  Installation Guide
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
                      name: "Is adult IPTV compatible with my Smart TV?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels works with most major Smart TV brands including Samsung (Tizen OS, 2016+), LG (webOS, 2016+), Sony (Android TV), and all Android TV and Google TV devices. If your TV supports app installation, it is likely compatible.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do I need a native app or an external device for Smart TV streaming?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Samsung and LG Smart TVs have native IPTV player apps available through their respective app stores. Android TV devices can install players directly from Google Play. For the best performance and easiest setup, we recommend using an external device like Firestick 4K.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I stream 4K content on my Smart TV?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iptv adult channels supports 4K Ultra HD streaming on compatible Smart TVs. For the best 4K experience, ensure your TV supports 4K resolution, has at least 25 Mbps internet connection (preferably wired Ethernet), and use a 4K-compatible IPTV player.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How do I set up adult IPTV on my Samsung Smart TV?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "On Samsung Smart TVs, you can install IPTV player apps from the Samsung Smart Hub. Alternatively, connect an external device like Firestick or Android TV box. iptv adult channels' 24/7 support team provides personalized setup guidance for your specific Samsung model.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is there picture quality difference between Smart TV brands?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Picture quality depends more on your TV's display capabilities than the IPTV service itself. Samsung QLED and OLED, LG OLED, and Sony Bravia models all deliver exceptional 4K quality. HDR support varies by model — we recommend enabling HDR in your player settings if available.",
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-0">
              {[
                {
                  q: "Is adult IPTV compatible with my Smart TV?",
                  a: "iptv adult channels works with most major Smart TV brands including Samsung (Tizen OS, 2016+), LG (webOS, 2016+), Sony (Android TV), and all Android TV and Google TV devices. If your TV supports app installation, it is likely compatible.",
                },
                {
                  q: "Do I need a native app or an external device for Smart TV streaming?",
                  a: "Samsung and LG Smart TVs have native IPTV player apps available through their respective app stores. Android TV devices can install players directly from Google Play. For the best performance and easiest setup, we recommend using an external device like Firestick 4K.",
                },
                {
                  q: "Can I stream 4K content on my Smart TV?",
                  a: "Yes. iptv adult channels supports 4K Ultra HD streaming on compatible Smart TVs. For the best 4K experience, ensure your TV supports 4K resolution, has at least 25 Mbps internet connection (preferably wired Ethernet), and use a 4K-compatible IPTV player.",
                },
                {
                  q: "How do I set up adult IPTV on my Samsung Smart TV?",
                  a: "On Samsung Smart TVs, you can install IPTV player apps from the Samsung Smart Hub. Alternatively, connect an external device like Firestick or Android TV box. iptv adult channels' 24/7 support team provides personalized setup guidance for your specific Samsung model.",
                },
                {
                  q: "Is there picture quality difference between Smart TV brands?",
                  a: "Picture quality depends more on your TV's display capabilities than the IPTV service itself. Samsung QLED and OLED, LG OLED, and Sony Bravia models all deliver exceptional 4K quality. HDR support varies by model — we recommend enabling HDR in your player settings if available.",
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
