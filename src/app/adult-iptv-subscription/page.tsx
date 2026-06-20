import type { Metadata } from "next";
import Link from "next/link";
import { Check, Shield, CreditCard, HeadsetIcon, Clock, Star } from "lucide-react";
import { siteConfig, plans } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "IPTV Subscription — Plans from $37 | iptv adult channels",
  description:
    "iptv adult channels offers premium adult IPTV subscription plans from $37 (3 months), $49 (6 months), and $67 (12 months). No auto-renewal, 7-day money-back guarantee. Buy adult IPTV with instant activation.",
  openGraph: {
    title: "Adult IPTV Subscription — iptv adult channels Plans",
    description:
      "Choose the best adult IPTV subscription plan from iptv adult channels. Flexible IPTV plans with no contracts, no auto-renewal, and instant setup. Subscribe today for 26,000+ live channels.",
    url: `${siteConfig.url}/adult-iptv-subscription`,
  },
  alternates: { canonical: `${siteConfig.url}/adult-iptv-subscription` },
};

const planHighlights = [
  { icon: <CreditCard className="w-5 h-5" />, title: "No Auto-Renewal", desc: "Your subscription never auto-renews. You have full control — renew only when you want, with no surprise charges." },
  { icon: <Shield className="w-5 h-5" />, title: "7-Day Money-Back Guarantee", desc: "Try risk-free. If you are not satisfied within 7 days, get a full refund. No questions asked, no hassle." },
  { icon: <HeadsetIcon className="w-5 h-5" />, title: "24/7 Support Included", desc: "Every subscription includes round-the-clock expert support via WhatsApp, live chat, and email." },
  { icon: <Clock className="w-5 h-5" />, title: "Instant Activation", desc: "Get set up in under 5 minutes. Subscribe, receive your credentials, and start streaming immediately." },
];

const subscriptionBenefits = [
  "Access to 26,000+ live adult channels worldwide",
  "100,000+ VOD titles in HD, 4K, and 8K quality",
  "Anti-freeze streaming technology for zero buffering",
  "Works on Firestick, Smart TV, Android, iOS, PC, Mac",
  "Electronic Program Guide with 7-day schedule",
  "Free setup assistance from our expert support team",
  "Regular channel list updates with new content",
  "Discreet billing for complete privacy",
];

export default function AdultIptvSubscriptionPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Adult IPTV Subscription" }]} />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-5">
              Subscription Plans
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Adult IPTV Subscription: Simple, Flexible, No Auto-Renewal
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
              Choose from three flexible adult IPTV subscription plans starting at just $37. 
              No contracts, no auto-renewal, no hidden fees. Every plan includes the full premium experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative glass-card rounded-2xl p-6 md:p-8 flex flex-col ${
                  plan.popular ? "ring-2 ring-accent scale-100 sm:scale-[1.02]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-accent text-white shadow-lg shadow-accent/30 tracking-wider uppercase">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6 pt-2">
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted">{plan.period}</span>
                  </div>
                  {plan.monthlyPrice && (
                    <p className="text-xs text-muted mt-1">{plan.monthlyPrice} per month</p>
                  )}
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-center transition-colors ${
                    plan.popular
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "border border-white/10 text-foreground hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            {planHighlights.map((item) => (
              <div key={item.title} className="glass rounded-xl p-6 text-center">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center">
              What Every Subscription Includes
            </h2>
            <div className="glass-card rounded-2xl p-8">
              <ul className="grid sm:grid-cols-2 gap-4">
                {subscriptionBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-muted">
                    <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What adult IPTV subscription plans do you offer?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels offers three subscription plans: 3 months at $37 ($12.33/month), 6 months at $49 ($8.17/month — save 34%), and 12 months at $67 ($5.58/month — save 55%). All plans include the same premium features — you only choose the duration.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How do I pay for my adult IPTV subscription?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "iptv adult channels accepts multiple secure payment methods including credit/debit cards and cryptocurrency. All transactions are encrypted and processed securely. Billing is completely discreet with no adult-related descriptors on your statements.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I get a refund if I am not satisfied?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. All adult IPTV subscription plans come with a 7-day money-back guarantee. If you are not satisfied with the service for any reason, contact our support team within 7 days of purchase for a full refund — no questions asked.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Does the subscription auto-renew?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Your adult IPTV subscription never auto-renews. You have full control over renewals. When your subscription period ends, you can choose to renew manually at the same rate. No surprise charges, ever.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I use my subscription on multiple devices?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. All plans support multiple simultaneous streams. The 3-month plan supports 1 device, the 6-month plan supports 2 devices, and the 12-month plan supports 4 devices simultaneously. You can use any compatible device for each stream.",
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-0">
              {[
                {
                  q: "What adult IPTV subscription plans do you offer?",
                  a: "iptv adult channels offers three subscription plans: 3 months at $37 ($12.33/month), 6 months at $49 ($8.17/month — save 34%), and 12 months at $67 ($5.58/month — save 55%). All plans include the same premium features — you only choose the duration.",
                },
                {
                  q: "How do I pay for my adult IPTV subscription?",
                  a: "iptv adult channels accepts multiple secure payment methods including credit/debit cards and cryptocurrency. All transactions are encrypted and processed securely. Billing is completely discreet with no adult-related descriptors on your statements.",
                },
                {
                  q: "Can I get a refund if I am not satisfied?",
                  a: "Yes. All adult IPTV subscription plans come with a 7-day money-back guarantee. If you are not satisfied with the service for any reason, contact our support team within 7 days of purchase for a full refund — no questions asked.",
                },
                {
                  q: "Does the subscription auto-renew?",
                  a: "No. Your adult IPTV subscription never auto-renews. You have full control over renewals. When your subscription period ends, you can choose to renew manually at the same rate. No surprise charges, ever.",
                },
                {
                  q: "Can I use my subscription on multiple devices?",
                  a: "Yes. All plans support multiple simultaneous streams. The 3-month plan supports 1 device, the 6-month plan supports 2 devices, and the 12-month plan supports 4 devices simultaneously. You can use any compatible device for each stream.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-5 mb-5 last:border-0 last:pb-0 last:mb-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
