import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data";

export const metadata: Metadata = {
  title: "Page Not Found (404) | iptv adult channels",
  description: "The page you're looking for doesn't exist. Browse iptv adult channels for premium adult IPTV streaming.",
  openGraph: {
    title: "Page Not Found | iptv adult channels",
    description: "The page you're looking for doesn't exist. Browse iptv adult channels for premium adult IPTV streaming.",
    url: `${siteConfig.url}/not-found`,
    images: [{ url: `${siteConfig.url}/images/article-1.jpg`, width: 1200, height: 630, alt: "iptv adult channels" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | iptv adult channels",
    description: "The page you're looking for doesn't exist.",
    images: [`${siteConfig.url}/images/article-1.jpg`],
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
      <h1 className="text-6xl font-bold text-accent">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-muted max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
