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
  },
  alternates: { canonical: siteConfig.url },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "iptv adult channels",
  url: siteConfig.url,
  description: siteConfig.description,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "iptv adult channels",
  url: siteConfig.url,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
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
