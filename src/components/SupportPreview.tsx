import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  BookOpen,
  Download,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { supportCategories } from "@/data/support";

const iconMap: Record<string, React.ReactNode> = {
  Compass: <BookOpen className="w-6 h-6" />,
  Download: <Download className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  User: <BookOpen className="w-6 h-6" />,
};

export default function SupportPreview() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Need Help?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Our support team and knowledge base are here to help you 24/7
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {supportCategories.slice(0, 4).map((cat) => (
            <Link
              key={cat.slug}
              href={`/support#${cat.slug}`}
              className="glass-card rounded-xl p-6 flex flex-col gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                {iconMap[cat.icon] || <BookOpen className="w-6 h-6" />}
              </div>
              <h3 className="font-semibold">{cat.name}</h3>
              <p className="text-sm text-muted flex-1">{cat.description}</p>
              <div className="flex items-center gap-1 text-sm text-accent font-medium">
                Browse Articles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/support">Visit Help Center</Link>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Support
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
