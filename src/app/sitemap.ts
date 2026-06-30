import type { MetadataRoute } from "next";
import { siteConfig } from "@/data";
import { blogPosts } from "@/data/blog";

interface SitemapEntry {
  url: string;
  priority: number;
  lastModified?: Date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: SitemapEntry[] = [
    { url: siteConfig.url, priority: 1 },
    { url: `${siteConfig.url}/features`, priority: 0.9 },
    { url: `${siteConfig.url}/pricing`, priority: 0.9 },
    { url: `${siteConfig.url}/adult-iptv-channels`, priority: 0.9 },
    { url: `${siteConfig.url}/premium-adult-iptv`, priority: 0.9 },
    { url: `${siteConfig.url}/adult-iptv-subscription`, priority: 0.8 },
    { url: `${siteConfig.url}/adult-iptv-streaming`, priority: 0.8 },
    { url: `${siteConfig.url}/live-adult-channels`, priority: 0.8 },
    { url: `${siteConfig.url}/adult-vod-library`, priority: 0.8 },
    { url: `${siteConfig.url}/adult-iptv-for-firestick`, priority: 0.8 },
    { url: `${siteConfig.url}/adult-iptv-for-smart-tv`, priority: 0.8 },
    { url: `${siteConfig.url}/blog`, priority: 0.8 },
    { url: `${siteConfig.url}/support`, priority: 0.8 },
    { url: `${siteConfig.url}/about`, priority: 0.7 },
    { url: `${siteConfig.url}/contact`, priority: 0.7 },
    { url: `${siteConfig.url}/privacy`, priority: 0.5 },
    { url: `${siteConfig.url}/terms`, priority: 0.5 },
    { url: `${siteConfig.url}/refund`, priority: 0.5 },
    { url: `${siteConfig.url}/installation-guide`, priority: 0.7 },
    { url: `${siteConfig.url}/channel-list`, priority: 0.7 },
    { url: `${siteConfig.url}/trial`, priority: 0.7 },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6 as const,
  }));

  return [...staticPages, ...blogPages].map((page) => ({
    url: page.url,
    lastModified: page.lastModified ?? new Date(),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
