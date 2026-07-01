import type { Metadata } from "next";
import Link from "next/link";
import { Check, Zap, Tv, Smartphone, Monitor, Play, Shield, CreditCard, HeadphonesIcon, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/data";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "24-Hour IPTV Trial | IPTV Adult Channels",
  description:
    "Get a 24-hour IPTV trial for only $3. Enjoy full access to all premium IPTV channels before purchasing a subscription.",
  openGraph: {
    title: "24-Hour IPTV Trial | IPTV Adult Channels",
    description:
      "Get a 24-hour IPTV trial for only $3. Enjoy full access to all premium IPTV channels before purchasing a subscription.",
    url: `${siteConfig.url}/trial`,
    images: [
      {
        url: `${siteConfig.url}/images/article-1.jpg`,
        width: 1200,
        height: 630,
        alt: "24-hour IPTV trial from iptv adult channels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24-Hour IPTV Trial | IPTV Adult Channels",
    description:
      "Get a 24-hour IPTV trial for only $3. Enjoy full access to all premium IPTV channels before purchasing a subscription.",
    images: [`${siteConfig.url}/images/article-1.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/trial`,
  },
};

const features = [
  "Access to All IPTV Channels",
  "Adult Channels",
  "Sports",
  "Movies & Series",
  "4K & 8K Streaming",
  "Buffer-Free Streaming",
  "Firestick Compatible",
  "Smart TV",
  "Android",
  "iPhone",
  "Windows",
  "Mac",
  "Instant Setup",
];

const featureIcons = [
  Tv, Play, Tv, Play, Monitor, Zap,
  Tv, Monitor, Smartphone, Smartphone, Monitor, Monitor, Zap,
];

const trustItems = [
  { icon: Zap, label: "Instant activation" },
  { icon: Shield, label: "Secure payment" },
  { icon: Play, label: "24-hour access" },
  { icon: Tv, label: "Full channel access" },
  { icon: HeadphonesIcon, label: "Fast customer support" },
];

const trialWhatsappUrl = `https://wa.me/447828714977?text=${encodeURIComponent("Hi! I'd like to try the 24-Hour Trial for $3.")}`;

export default function TrialPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider mb-6">
              Trial
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Start Your 24-Hour{" "}
              <span className="text-accent">IPTV Trial</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Experience every premium IPTV channel for 24 hours before purchasing a full subscription.
            </p>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="relative bg-gradient-to-b from-accent/10 to-accent/5 border border-accent/40 rounded-2xl p-8 text-center shadow-[0_0_80px_rgba(229,9,20,0.12)]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-accent text-white shadow-lg shadow-accent/30 tracking-wider uppercase">
                  <Zap className="w-3 h-3" />
                  Instant Activation
                </span>
              </div>

              <h3 className="text-xl font-bold mb-4 mt-2">24-Hour Trial</h3>

              <div className="mb-6 pb-6 border-b border-border/50">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl md:text-6xl font-bold tracking-tight">$3</span>
                  <span className="text-sm text-muted">/one-time</span>
                </div>
              </div>

              <Button size="lg" className="w-full font-semibold" asChild>
                <a href={trialWhatsappUrl} target="_blank" rel="noopener noreferrer">
                  Start Trial
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background pointer-events-none" />

        <div className="container relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-5">
              What's Included
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Everything You Get
            </h2>
            <p className="text-base sm:text-lg text-muted max-w-xl mx-auto">
              Full access to every premium IPTV channel and feature during your trial.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <div
                  key={feature}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-card border border-border hover:border-accent/20 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground/90">{feature}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.03] to-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Complete Your <span className="text-accent">Trial Purchase</span>
              </h2>
            </div>

            <div className="glass rounded-3xl p-8 md:p-12 text-center border border-accent/10">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>

              <h3 className="text-2xl font-bold mb-3">Pay via WhatsApp</h3>
              <p className="text-sm text-muted mb-8 max-w-sm mx-auto">
                Click the button below to contact us on WhatsApp. After your $3 payment is confirmed, your 24-hour IPTV trial will be activated instantly.
              </p>

              <Button size="xl" className="w-full font-semibold" asChild>
                <a
                  href={trialWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Pay $3 on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
