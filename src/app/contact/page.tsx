import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact iptv adult channels — 24/7 Customer Support",
  description:
    "Contact iptv adult channels — reach our 24/7 customer service team via WhatsApp, email, or live chat. Get fast support for subscriptions, setup, billing, and troubleshooting.",
  openGraph: {
    title: "Contact iptv adult channels — Support & Help",
    description:
      "Need help? Contact iptv adult channels support team. Available 24/7 via WhatsApp, email, and live chat for all your IPTV questions. Fast, friendly, and expert customer service.",
    url: `${siteConfig.url}/contact`,
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-background pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider mb-6">
                Contact
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                We&apos;re Here to{" "}
                <span className="text-accent">Help</span>
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                iptv adult channels&apos; support team is available 24/7 for all your adult IPTV questions — whether you need help with <Link href="/adult-iptv-for-firestick" className="text-accent hover:underline">Firestick setup</Link>, <Link href="/installation-guide" className="text-accent hover:underline">installation</Link>, <Link href="/pricing" className="text-accent hover:underline">subscription plans</Link>, or <Link href="/support" className="text-accent hover:underline">troubleshooting</Link>. Reach out any time and we&apos;ll respond within minutes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  label: "WhatsApp",
                  value: "+1 (234) 567-890",
                  action: "Send Message",
                  href: "https://wa.me/1234567890",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  label: "Email",
                  value: "support@iptvadult.com",
                  action: "Send Email",
                  href: "mailto:support@iptvadult.com",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  label: "Response Time",
                  value: "Usually within minutes",
                  action: "24/7 Support",
                  href: "#",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  label: "Secure",
                  value: "Encrypted & Private",
                  action: "Learn More",
                  href: "/privacy",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-2xl p-6 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.label}</h3>
                    <p className="text-sm text-muted">{item.value}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-fit" asChild>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.action}
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full h-12 px-4 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      className="w-full h-12 px-4 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can we help?"
                    className="w-full h-12 px-4 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
