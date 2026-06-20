import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data";

export const metadata: Metadata = {
  title: "IPTV Terms & Conditions | iptv adult channels",
  description:
    "Read iptv adult channels terms and conditions for using our premium adult IPTV service. Understand your rights, obligations, and our service conditions as a subscriber.",
  openGraph: {
    title: "IPTV Terms — iptv adult channels Policies",
    description:
      "iptv adult channels terms of service — review our service conditions, acceptable use policy, payment terms, and subscriber rights. Contact us with any questions.",
    url: `${siteConfig.url}/terms`,
  },
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider mb-6">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
              Terms & Conditions
            </h1>
            <p className="text-sm text-muted mb-8">
              Last updated: June 1, 2026
            </p>

            <div className="text-muted space-y-6 text-base leading-relaxed">
              <h2 className="text-xl font-semibold text-foreground pt-6">1. Acceptance of Terms</h2>
              <p>
                By subscribing to and using <Link href="/" className="text-accent hover:underline">iptv adult channels</Link>, you agree to be bound by these
                Terms & Conditions. View our <Link href="/pricing" className="text-accent hover:underline">adult IPTV subscription plans</Link> and <Link href="/refund" className="text-accent hover:underline">refund policy</Link>
                before purchasing. If you do not agree with any part of these terms, you may not use our service.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">2. Service Description</h2>
              <p>
                iptv adult channels provides access to live TV channels and video-on-demand content
                delivered over the internet. We reserve the right to modify, update, or discontinue
                any part of our service with reasonable notice.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">3. User Eligibility</h2>
              <p>
                You must be at least 18 years old to use our service. By subscribing, you confirm
                that you are of legal age to access adult content in your jurisdiction.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">4. Account Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials
                and for all activities that occur under your account. Notify us immediately of any
                unauthorized use of your account.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">5. Payment Terms</h2>
              <p>
                Subscription fees are billed in advance for the chosen plan period. Payments are
                non-refundable except as provided in our Refund Policy. We reserve the right to
                change pricing with 30 days notice.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">6. Acceptable Use</h2>
              <p>
                You agree not to: share your account credentials with others, attempt to bypass
                our security measures, use the service for any illegal purpose, or redistribute
                our content without authorization.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">7. Intellectual Property</h2>
              <p>
                All content available through our service is protected by copyright and other
                intellectual property laws. You may not reproduce, distribute, or create derivative
                works without our express permission.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">8. Limitation of Liability</h2>
              <p>
                iptv adult channels shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of our service. Our
                total liability is limited to the amount you paid for your subscription.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">9. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your account for violation of these
                terms. You may cancel your subscription at any time through your account settings.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">10. Changes to Terms</h2>
              <p>
                We may update these terms at any time. We will notify you of material changes via
                email or through our service. Continued use after changes constitutes acceptance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
