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
  title: "iptv adult channels — Premium IPTV & Live TV in 4K & 8K",
  description:
    "iptv adult channels delivers premium adult IPTV with 26,000+ live channels and 100,000+ VOD titles. HD, 4K & 8K adult IPTV streaming on Firestick, Smart TV, Android & iOS. Private, buffer-free, instant setup.",
  openGraph: {
    title: "iptv adult channels — Premium Adult IPTV & Live Channels",
    description:
      "Premium adult IPTV channels with 4K & 8K streaming. 26,000+ live channels, 100,000+ VOD library. Private, secure, buffer-free. Subscribe now.",
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/images/article-1.jpg`,
        width: 1200,
        height: 630,
        alt: "iptv adult channels premium IPTV streaming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iptv adult channels — Premium Adult IPTV & Live Channels",
    description:
      "Premium adult IPTV channels with 4K & 8K streaming. 26,000+ live channels, 100,000+ VOD library. Private, secure, buffer-free.",
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
