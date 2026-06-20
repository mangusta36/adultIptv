import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.03] to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="glass rounded-3xl p-8 md:p-16 lg:p-20 text-center max-w-4xl mx-auto border border-accent/10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
            Start Your Premium Adult IPTV
            <br />
            Experience With iptv adult channels
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            Join thousands of satisfied subscribers and get instant access to
            premium adult IPTV channels, live adult TV, and the largest VOD library —
            all in HD, 4K, and 8K with full privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <a href="/pricing">View Adult IPTV Plans</a>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Support
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
