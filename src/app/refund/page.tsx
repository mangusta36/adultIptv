import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "IPTV Refund Policy — 7-Day Guarantee | iptv adult channels",
  description:
    "iptv adult channels offers a 7-day money-back guarantee on all subscription plans. Read our IPTV refund policy and learn how to request a full refund — no questions asked.",
  openGraph: {
    title: "IPTV Refund Policy — iptv adult channels Guarantee",
    description:
      "Full 7-day money-back guarantee from iptv adult channels. No-risk IPTV subscription with hassle-free refunds. Read our refund policy and request a refund anytime within 7 days.",
    url: `${siteConfig.url}/refund`,
    images: [
      {
        url: `${siteConfig.url}/images/article-1.jpg`,
        width: 1200,
        height: 630,
        alt: "iptv adult channels refund policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Refund Policy — iptv adult channels Guarantee",
    description:
      "Full 7-day money-back guarantee from iptv adult channels. No-risk IPTV subscription with hassle-free refunds. Read our refund policy.",
    images: [`${siteConfig.url}/images/article-1.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/refund`,
  },
};

export default function RefundPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider mb-6">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
              Refund Policy
            </h1>
            <p className="text-sm text-muted mb-8">
              Last updated: June 1, 2026
            </p>

            <div className="glass-card rounded-2xl p-8 mb-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">7-Day Money-Back Guarantee</h2>
              <p className="text-muted max-w-lg mx-auto">
                iptv adult channels stands behind the quality of its service. If you&apos;re not satisfied within the first 7 days, we&apos;ll refund your purchase in full — no questions asked.
              </p>
            </div>

            <div className="text-muted space-y-6 text-base leading-relaxed">
              <h2 className="text-xl font-semibold text-foreground pt-6">How to Request a Refund</h2>
              <p>
                To request a refund, simply <Link href="/contact" className="text-accent hover:underline">contact our support team</Link> within 7 days of your purchase
                date. Browse our <Link href="/pricing" className="text-accent hover:underline">adult IPTV subscription plans</Link> with confidence — every plan
                includes this 7-day money-back guarantee. Reach us via email at{" "}
                <a href="mailto:support@iptvadults.net" className="text-accent hover:underline">
                  support@iptvadults.net
                </a>{" "}
                or through our <Link href="/support" className="text-accent hover:underline">24/7 support center</Link>. Include your account email and the reason for
                your refund request.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">Refund Eligibility</h2>
              <p>
                Refund requests must be submitted within 7 calendar days of the original purchase
                date. Refunds are processed to the original payment method and typically appear
                within 5-10 business days depending on your payment provider.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">Non-Refundable Situations</h2>
              <p>
                Refunds will not be issued after the 7-day guarantee period has expired. Refunds
                are limited to one per customer. Accounts terminated for violation of our Terms &
                Conditions are not eligible for refunds.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">Refund Processing</h2>
              <p>
                Once your refund request is approved, we will process the refund to your original
                payment method. Processing times vary by payment provider: credit cards typically
                take 5-10 business days, while other payment methods may vary. You will receive
                a confirmation email once the refund has been processed.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">Contact for Refunds</h2>
              <p>
                For any questions about our refund policy or to initiate a refund request, please
                contact our support team. We&apos;re here to help 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
