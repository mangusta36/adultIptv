import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data";

export const metadata: Metadata = {
  title: "Adult IPTV Privacy — No-Logs Policy | iptv adult channels",
  description:
    "iptv adult channels privacy policy — we prioritize your privacy with encrypted connections, strict no-logs policy, and discreet billing. Secure adult IPTV streaming with complete confidentiality.",
  openGraph: {
    title: "Adult IPTV Privacy — iptv adult channels Policy",
    description:
      "Your privacy matters. iptv adult channels uses encrypted streaming, no-logs policy, and discreet billing. Read our comprehensive privacy policy for secure adult IPTV streaming.",
    url: `${siteConfig.url}/privacy`,
  },
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider mb-6">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted mb-8">
              Last updated: June 1, 2026
            </p>

            <div className="text-muted space-y-6 text-base leading-relaxed">
              <h2 className="text-xl font-semibold text-foreground pt-6">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, including your name, email address,
                and payment information                 when you subscribe to our <Link href="/adult-iptv-subscription" className="text-accent hover:underline">adult IPTV subscription</Link> service. We also automatically collect
                certain information about your device and usage patterns to improve our service.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">2. How We Use Your Information</h2>
              <p>
                We use your information to provide, maintain, and improve our IPTV service, process
                your subscription payments, send you service-related communications, and respond to
                your support inquiries. We do not sell your personal information to third parties.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">3. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information,
                including SSL/TLS encryption for data transmission, secure payment processing through
                PCI-compliant providers, and regular security audits of our systems.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">4. Data Retention</h2>
              <p>
                We retain your personal information for as long as your account is active and for a
                reasonable period thereafter for legal and operational purposes. You may request
                deletion of your data at any time by contacting our support team.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">5. Third-Party Services</h2>
              <p>
                We may use third-party services for payment processing, analytics, and email
                communications. These service providers have their own privacy policies and are
                contractually obligated to protect your information.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information at any
                time. You may also opt out of marketing communications and request a copy of your
                data. Contact our support team to exercise these rights.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">7. Cookies</h2>
              <p>
                We use essential cookies to maintain your session and preferences. We also use
                analytics cookies to understand how our service is used. You can control cookie
                settings through your browser preferences.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-6">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:support@iptvadults.net" className="text-accent hover:underline">
                  support@iptvadults.net
                </a>{" "}
                or through our WhatsApp support line.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
