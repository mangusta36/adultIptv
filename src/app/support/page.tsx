import type { Metadata } from "next";
import Link from "next/link";
import { supportCategories, faqSupport } from "@/data/support";
import { siteConfig } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { MessageCircle, BookOpen, Download, Wrench, User, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "iptv adult channels Support — Help Center & FAQ",
  description:
    "iptv adult channels support center — get help with setup, troubleshooting, billing, and more. 24/7 customer support via live chat, email, and WhatsApp. Fast responses from our expert team.",
  openGraph: {
    title: "iptv adult channels — Help Center & Customer Service",
    description:
      "Need IPTV support? iptv adult channels offers 24/7 help center with setup guides, troubleshooting tips, and dedicated customer service via WhatsApp, email, and live chat.",
    url: `${siteConfig.url}/support`,
  },
  alternates: {
    canonical: `${siteConfig.url}/support`,
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Compass: <BookOpen className="w-6 h-6" />,
  Download: <Download className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  User: <User className="w-6 h-6" />,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSupport.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[{ label: "Support" }]} />

      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider mb-6">
              Help Center
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              iptv adult channels{" "}
              <span className="text-accent">Help Center</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              Browse the iptv adult channels knowledge base or get in touch with our 24/7 support team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a
                  href="https://wa.me/447828714977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Support
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Email Support</Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
            {supportCategories.map((cat) => (
              <div
                key={cat.slug}
                id={cat.slug}
                className="glass-card rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5">
                  {iconMap[cat.icon] || <BookOpen className="w-6 h-6" />}
                </div>
                <h2 className="text-xl font-semibold mb-2">{cat.name}</h2>
                <p className="text-sm text-muted mb-5">{cat.description}</p>
                <ul className="space-y-2">
                  {cat.articles.map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={`/support?article=${article.slug}`}
                        className="flex items-center justify-between text-sm text-muted hover:text-foreground transition-colors py-1.5 group"
                      >
                        {article.title}
                        <ChevronRight className="w-4 h-4 text-muted group-hover:text-foreground transition-colors shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div id="faq" className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqSupport.map((faq, i) => (
                <details
                  key={i}
                  className="group glass-card rounded-xl [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium hover:text-accent transition-colors">
                    {faq.question}
                    <ChevronRight className="w-4 h-4 shrink-0 group-open:rotate-90 transition-transform text-muted" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 glass-card rounded-2xl p-10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">Still Need iptv adult channels Help?</h2>
            <p className="text-muted mb-6">
              The iptv adult channels support team is available 24/7. Contact us any time and we&apos;ll respond within minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a
                  href="https://wa.me/447828714977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
