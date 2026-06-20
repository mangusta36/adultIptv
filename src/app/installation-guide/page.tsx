import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Tv, Tablet } from "lucide-react";

export const metadata: Metadata = {
  title: "Installation Guide — Firestick & TV | iptv adult channels",
  description:
    "iptv adult channels installation guide — step-by-step setup for Firestick, Smart TV (Samsung, LG, Sony), Android TV, iPhone, iPad, PC, and Mac. Easy IPTV installation in under 5 minutes.",
  openGraph: {
    title: "IPTV Installation Guide — iptv adult channels Setup",
    description:
      "Follow the iptv adult channels installation guide to set up adult IPTV on Firestick, Smart TV, Android, iOS, PC, and Mac. Quick and easy setup instructions with 24/7 support.",
    url: `${siteConfig.url}/installation-guide`,
  },
  alternates: {
    canonical: `${siteConfig.url}/installation-guide`,
  },
};

const guides = [
  {
    icon: <Tv className="w-6 h-6" />,
    title: "Amazon Firestick",
    steps: [
      "Go to Settings > My Fire TV > Developer Options",
      "Enable 'Apps from Unknown Sources'",
      "Install 'Downloader' from the Amazon App Store",
      "Open Downloader and enter the URL from your setup email",
      "Install the IPTV player APK",
      "Open the player and enter your login credentials",
    ],
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Android TV / Smart TV",
    steps: [
      "Open the Google Play Store on your Android TV",
      "Search for an IPTV player (e.g., TiviMate, IPTV Smarters)",
      "Install the player app",
      "Open the app and select 'Login with Xtream Codes'",
      "Enter the server URL, username, and password from your email",
      "Start watching your channels",
    ],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "iPhone / iPad",
    steps: [
      "Open the App Store on your iOS device",
      "Search for 'GSE Smart IPTV' or 'IPTV Smarters'",
      "Download and install the app",
      "Open the app and go to settings",
      "Enter your playlist URL or Xtream Codes",
      "Save and start streaming",
    ],
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "PC / Mac",
    steps: [
      "Download and install VLC Media Player or IPTV Smarters",
      "Open the application",
      "Go to 'Media > Open Network Stream' (VLC)",
      "Enter the M3U URL from your setup email",
      "Click 'Play' to start watching",
      "Save as a playlist for future access",
    ],
  },
  {
    icon: <Tablet className="w-6 h-6" />,
    title: "Android Phone / Tablet",
    steps: [
      "Open the Google Play Store",
      "Search for 'IPTV Smarters Pro' or 'XCIPTV'",
      "Install the app",
      "Open the app and enter your Xtream Codes",
      "Configure your preferred player settings",
      "Browse and start streaming",
    ],
  },
  {
    icon: <Tv className="w-6 h-6" />,
    title: "Samsung / LG Smart TV",
    steps: [
      "Press the Smart Hub button on your remote",
      "Go to the App Store (Samsung) or LG Content Store",
      "Search for 'IPTV Smarters' or 'SS IPTV'",
      "Install the app",
      "Open the app and enter your account details",
      "Start watching on your TV",
    ],
  },
];

export default function InstallationGuidePage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Installation Guide" }]}
      />

      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider mb-6">
              Setup Guide
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Installation{" "}
              <span className="text-accent">Guide</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Follow our step-by-step guides to set up IPTV on any device. Setup takes less than 5 minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {guides.map((guide) => (
              <div key={guide.title} className="glass-card rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5">
                  {guide.icon}
                </div>
                <h2 className="text-xl font-semibold mb-4">{guide.title}</h2>
                <ol className="space-y-3">
                  {guide.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted">
                      <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs flex items-center justify-center shrink-0 mt-0.5 font-medium">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted mb-4">
              Need help with installation? iptv adult channels&apos; support team is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/support">Visit Help Center</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
