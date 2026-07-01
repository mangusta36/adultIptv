import type { Metadata } from "next";
import { siteConfig } from "@/data";
import Hero from "@/components/Hero";
import ChannelShowcase from "@/components/ChannelShowcase";
import Features from "@/components/Features";
import Devices from "@/components/Devices";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import SupportPreview from "@/components/SupportPreview";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "iptv adult channels — Best Adult IPTV Subscription: 26K+ Channels in 4K & 8K",
  description:
    "iptv adult channels is the best adult IPTV subscription with 26,000+ live channels and 100,000+ VOD titles. HD, 4K & 8K streaming on Firestick, Smart TV, Android & iOS. Private, buffer-free, instant activation.",
  openGraph: {
    title: "iptv adult channels — Best Adult IPTV Subscription & Live Channels in 4K & 8K",
    description:
      "Get the best adult IPTV subscription with 26,000+ live channels and 100,000+ VOD titles in 4K & 8K. Private, secure, buffer-free streaming on all devices. Subscribe now.",
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/images/article-1.jpg`,
        width: 1200,
        height: 630,
        alt: "iptv adult channels best premium adult IPTV streaming service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iptv adult channels — Best Adult IPTV Subscription & Live Channels",
    description:
      "Best adult IPTV subscription with 26,000+ live channels, 100,000+ VOD titles in 4K & 8K. Private, secure, buffer-free streaming. Instant setup.",
    images: [`${siteConfig.url}/images/article-1.jpg`],
  },
  alternates: { canonical: siteConfig.url },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <ChannelShowcase />
      <Features />
      <Devices />
      <Stats />
      <Testimonials />
      <BlogPreview />
      <SupportPreview />
      <FAQ />
      <CTA />
    </>
  );
}
