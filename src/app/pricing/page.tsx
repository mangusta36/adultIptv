import type { Metadata } from "next";
import Link from "next/link";
import { Check, Shield, CreditCard, HeadsetIcon, ArrowRight } from "lucide-react";
import { plans, siteConfig, testimonials } from "@/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "iptv adult channels Pricing — Plans from $37",
  description:
    "iptv adult channels offers affordable adult IPTV pricing — 3 months ($37), 6 months ($49), and 12 months ($67). Save up to 55% with annual plans. 7-day money-back guarantee. No auto-renewal.",
  openGraph: {
    title: "iptv adult channels — Subscription Plans & Pricing",
    description:
      "Compare adult IPTV subscription plans from iptv adult channels. Starting at just $37 with flexible options. No contracts, no auto-renewal, 7-day guarantee. Subscribe to the best IPTV service today.",
    url: `${siteConfig.url}/pricing`,
  },
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
  },
};

const totalRating = testimonials.reduce((sum, t) => sum + t.rating, 0);
const avgRating = (totalRating / testimonials.length).toFixed(1);

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${siteConfig.url}/#product`,
  name: "Premium IPTV Subscription",
  description: "Access premium adult IPTV channels, live global channels, and a huge VOD library.",
  image: `${siteConfig.url}/apple-icon.svg`,
  brand: {
    "@type": "Brand",
    name: "iptv adult channels",
  },
  category: "Entertainment Subscription",
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    price: plan.price.replace("$", ""),
    priceCurrency: "USD",
    priceValidUntil: "2027-12-31",
    description: plan.description,
    url: `${siteConfig.url}/pricing`,
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: "iptv adult channels",
      url: siteConfig.url,
    },
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: avgRating,
    reviewCount: testimonials.length,
    bestRating: "5",
    worstRating: "1",
  },
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider mb-6">
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Choose Your{" "}
              <span className="text-accent">iptv adult channels Plan</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
               All <Link href="/adult-iptv-subscription" className="text-accent hover:underline">adult IPTV subscription</Link> plans from iptv adult channels include 26,000+ <Link href="/live-adult-channels" className="text-accent hover:underline">live adult channels</Link>, 100,000+ <Link href="/adult-vod-library" className="text-accent hover:underline">VOD titles</Link>, HD/4K/8K quality, and 24/7 support. Save more with longer commitments. Need help deciding? Read our <Link href="/blog" className="text-accent hover:underline">iptv adult channels guides and tutorials</Link>.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative glass-card rounded-2xl p-6 flex flex-col ${
                  plan.popular ? "ring-2 ring-accent scale-100 sm:scale-[1.02]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-white px-3 py-1 text-[10px] uppercase tracking-widest font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                {plan.savings && !plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="outline" className="border-accent/50 text-accent px-3 py-1 text-[10px] uppercase tracking-widest font-semibold">
                      {plan.savings}
                    </Badge>
                  </div>
                )}

                <div className="mb-6 pt-2">
                  <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                  <p className="text-xs text-muted mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted">{plan.period}</span>
                  </div>
                  {plan.monthlyPrice && (
                    <p className="text-xs text-muted mt-1">
                      {plan.monthlyPrice}/month
                    </p>
                  )}
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  {plan.excluded.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-muted/50"
                    >
                      <span className="w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center text-muted/30">
                        &mdash;
                      </span>
                      <span className="line-through">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <a
                    href="https://wa.me/447828714977"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Shield className="w-5 h-5" />,
                title: "7-Day Money-Back Guarantee",
                description: "Not satisfied with iptv adult channels? Get a full refund within 7 days of purchase. No questions asked.",
              },
              {
                icon: <CreditCard className="w-5 h-5" />,
                title: "Secure Payment",
                description: "All iptv adult channels transactions are encrypted and processed securely. We accept multiple payment methods.",
              },
              {
                icon: <HeadsetIcon className="w-5 h-5" />,
                title: "24/7 Customer Support",
                description: "iptv adult channels expert team is available around the clock via live chat, email, and WhatsApp.",
              },
            ].map((item) => (
              <div key={item.title} className="glass rounded-xl p-6 text-center">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                <p className="text-xs text-muted">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-sm text-muted mb-4">
              Have questions about iptv adult channels plans? We&apos;re here to help.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
