import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/data";

const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/support", label: "Support" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  support: [
    { href: "/support", label: "Help Center" },
    { href: "/installation-guide", label: "Installation Guide" },
    { href: "/channel-list", label: "Channel List" },
    { href: "/support#faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/refund", label: "Refund Policy" },
  ],
  plans: [
    { href: "/pricing", label: "3 Months" },
    { href: "/pricing", label: "6 Months" },
    { href: "/pricing", label: "12 Months" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border pt-16 pb-8">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-foreground inline-block mb-4"
            >
              <span className="text-accent">iptv</span>
              <span className="text-muted"> adult channels</span>
            </Link>
            <p className="text-sm text-muted max-w-md leading-relaxed mb-4">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="text-sm text-accent hover:text-accent-hover transition-colors font-medium"
              >
                Contact Us
              </Link>
              <span className="text-muted">|</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent-hover transition-colors font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold mb-4 mt-6">Plans</h4>
            <ul className="space-y-2">
              {footerLinks.plans.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted/60">
            This is a premium IPTV service. All content is for users 18+ only.
          </p>
        </div>
      </div>
    </footer>
  );
}
