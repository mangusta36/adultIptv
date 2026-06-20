import type { Metadata } from "next";
import Link from "next/link";
import { Check, Tv, Download, Smartphone, Settings, Shield, Play } from "lucide-react";
import { siteConfig } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Adult IPTV for Firestick — Setup Guide | iptv adult channels",
  description:
    "iptv adult channels on Firestick — complete setup guide for Amazon Fire TV, Firestick 4K, Firestick 4K Max, and Firestick Lite. Install adult IPTV in minutes with step-by-step instructions. Start streaming instantly.",
  openGraph: {
    title: "Adult IPTV for Firestick — iptv adult channels Setup",
    description:
      "Set up adult IPTV on your Firestick with iptv adult channels. Easy Firestick setup with Downloader app. Full compatibility with all Amazon Fire TV devices. Subscribe and start today.",
    url: `${siteConfig.url}/adult-iptv-for-firestick`,
  },
  alternates: { canonical: `${siteConfig.url}/adult-iptv-for-firestick` },
};

const firestickFeatures = [
  { icon: <Tv className="w-5 h-5" />, title: "Full Firestick Compatibility", desc: "Works perfectly on all Amazon Fire TV devices including Firestick, Firestick 4K, Firestick 4K Max, Fire TV Cube, and Firestick Lite." },
  { icon: <Download className="w-5 h-5" />, title: "Easy Downloader Setup", desc: "Install using the Downloader app or Amazon App Store. Our team provides step-by-step setup instructions personalized for your device." },
  { icon: <Settings className="w-5 h-5" />, title: "Optimized Performance", desc: "Firestick-optimized streaming with adaptive quality ensures smooth playback even on standard Firestick models." },
  { icon: <Shield className="w-5 h-5" />, title: "Privacy & Security", desc: "Your privacy is protected with encrypted connections. All apps and streams are secure and confidential on your Firestick." },
  { icon: <Smartphone className="w-5 h-5" />, title: "Remote Control Ready", desc: "Full Fire TV remote support including play, pause, fast-forward, and voice search with Alexa integration." },
  { icon: <Play className="w-5 h-5" />, title: "Instant Streaming", desc: "Start watching immediately after setup. No complicated configurations — subscribe, install, and enjoy premium content." },
];

const setupSteps = [
  { step: "1", title: "Subscribe", desc: "Choose your plan and complete the secure checkout. You will receive login credentials instantly via email." },
  { step: "2", title: "Install App", desc: "On your Firestick, go to Settings > My Fire TV > Developer Options and enable Apps from Unknown Sources. Then install the Downloader app from the Amazon App Store." },
  { step: "3", title: "Enter Credentials", desc: "Open the Downloader app and enter the URL provided in your setup email. Download and install our recommended IPTV player." },
  { step: "4", title: "Start Watching", desc: "Launch the player, enter your login credentials, and browse thousands of live channels and VOD titles instantly." },
];

export default function AdultIptvForFirestickPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Adult IPTV for Firestick" }]} />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-5">
              Firestick Setup
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Adult IPTV for Firestick: Quick Setup, Premium Streaming
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
              Set up adult IPTV on your Amazon Firestick in minutes. Full compatibility with Firestick, Fire TV, 
              Firestick 4K, and Firestick Lite. Step-by-step guidance and 24/7 support included.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {firestickFeatures.map((feat) => (
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
              Setup Guide — 4 Simple Steps
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {setupSteps.map((step) => (
                <div key={step.step} className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-5">Firestick Optimization Tips</h3>
              <ul className="space-y-3">
                {[
                  "Use Firestick 4K or 4K Max for the best streaming experience with 4K content",
                  "Connect your Firestick via Ethernet adapter for the most stable internet connection",
                  "Clear the cache regularly in Settings > Applications > Manage Installed Applications",
                  "Close background apps to free up memory and improve streaming performance",
                  "Keep your Firestick software updated to the latest version for optimal compatibility",
                  "Use a quality HDMI extender to improve WiFi signal reception behind the TV",
                  "Enable hardware acceleration in your IPTV player settings for smoother playback",
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
              <Tv className="w-10 h-10 text-accent mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Set Up Your Firestick Today
              </h2>
              <p className="text-muted max-w-2xl mx-auto mb-8">
                Get iptv adult channels on your Firestick in under 5 minutes. The support team helps with every step of the setup.
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
                  Full Installation Guide
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
                      name: "Is adult IPTV compatible with all Firestick models?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iptv adult channels works on all Amazon Fire TV devices including Firestick (1st-3rd gen), Firestick 4K, Firestick 4K Max, Fire TV Cube, Fire TV Stick Lite, and all recent Fire TV Edition smart TVs.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do I need the Downloader app to set up adult IPTV on Firestick?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Downloader app is the most common method for installing our recommended IPTV player on Firestick. It is available for free in the Amazon App Store. Alternatively, some players are available directly through the Amazon App Store.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is sideloading apps on Firestick safe?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, sideloading is safe when you follow proper instructions. You only need to enable Apps from Unknown Sources in Developer Options. iptv adult channels' recommended IPTV players are tested and verified. We provide detailed step-by-step guidance.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Will adult IPTV work well on my standard Firestick?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, our service is optimized for all Firestick models. Standard Firestick handles HD and Full HD streaming perfectly. For the best 4K experience, we recommend Firestick 4K or 4K Max. Adaptive streaming adjusts quality based on your device capabilities.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I get help setting up adult IPTV on my Firestick?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. iptv adult channels' 24/7 support team is available via WhatsApp, live chat, and email to guide you through every step of the Firestick setup process. We also provide detailed written and video guides for all Fire TV devices.",
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-0">
              {[
                {
                  q: "Is adult IPTV compatible with all Firestick models?",
                  a: "Yes. iptv adult channels works on all Amazon Fire TV devices including Firestick (1st-3rd gen), Firestick 4K, Firestick 4K Max, Fire TV Cube, Fire TV Stick Lite, and all recent Fire TV Edition smart TVs.",
                },
                {
                  q: "Do I need the Downloader app to set up adult IPTV on Firestick?",
                  a: "The Downloader app is the most common method for installing our recommended IPTV player on Firestick. It is available for free in the Amazon App Store. Alternatively, some players are available directly through the Amazon App Store.",
                },
                {
                  q: "Is sideloading apps on Firestick safe?",
                  a: "Yes, sideloading is safe when you follow proper instructions. You only need to enable Apps from Unknown Sources in Developer Options. iptv adult channels' recommended IPTV players are tested and verified. We provide detailed step-by-step guidance.",
                },
                {
                  q: "Will adult IPTV work well on my standard Firestick?",
                  a: "Yes, our service is optimized for all Firestick models. Standard Firestick handles HD and Full HD streaming perfectly. For the best 4K experience, we recommend Firestick 4K or 4K Max. Adaptive streaming adjusts quality based on your device capabilities.",
                },
                {
                  q: "Can I get help setting up adult IPTV on my Firestick?",
                  a: "Absolutely. iptv adult channels' 24/7 support team is available via WhatsApp, live chat, and email to guide you through every step of the Firestick setup process. We also provide detailed written and video guides for all Fire TV devices.",
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
