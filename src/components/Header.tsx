"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, Home, Sparkles, DollarSign, BookOpen, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data";
import { cn } from "@/lib/utils";

const mobileIcons: Record<string, React.ReactNode> = {
  Home: <Home className="w-5 h-5" />,
  Features: <Sparkles className="w-5 h-5" />,
  Pricing: <DollarSign className="w-5 h-5" />,
  Blog: <BookOpen className="w-5 h-5" />,
  Support: <HeadphonesIcon className="w-5 h-5" />,
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      if (top) {
        window.scrollTo(0, parseInt(top || "0") * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
    };
  }, [isOpen]);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    },
    [isOpen],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  useEffect(() => {
    if (isOpen) {
      const firstLink = menuPanelRef.current?.querySelector("a");
      firstLink?.focus();
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent",
        )}
      >
        <div className="container flex h-20 lg:h-22 items-center justify-between px-5 sm:px-6 md:px-8 py-3 lg:py-4" style={{ transform: 'translateZ(0)' }}>
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-foreground shrink-0"
          >
            <span className="text-accent">iptv</span>
            <span className="text-muted"> adult channels</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/pricing">View Plans</Link>
            </Button>
            <Button size="sm" asChild>
              <a href="/trial">Get Trial</a>
            </Button>
          </div>

          <button
            ref={buttonRef}
            onClick={() => setIsOpen((prev) => !prev)}
            className={cn(
              "lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-xl transition-colors touch-manipulation",
              "text-foreground/85 bg-white/5 hover:bg-white/10 active:bg-white/15",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isOpen && "bg-white/10",
            )}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuPanelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="lg:hidden fixed inset-0 z-[100]"
        >
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60"
            aria-hidden="true"
          />

          <div className="absolute top-0 right-0 h-full w-[280px] max-w-[85vw] bg-background border-l border-border shadow-2xl shadow-black/50 z-10">
            <div className="flex items-center justify-between h-16 px-5 border-b border-border">
              <span className="text-sm font-semibold text-muted">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col py-3 px-3">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium text-muted hover:text-foreground hover:bg-white/5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset touch-manipulation"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 text-accent shrink-0">
                    {mobileIcons[link.label] || <Sparkles className="w-4 h-4" />}
                  </span>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="px-3 pt-3 border-t border-border mx-3">
              <div className="flex flex-col gap-2">
                <Button className="w-full" asChild>
                  <a href="/trial" onClick={() => setIsOpen(false)}>Get Trial</a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/pricing" onClick={() => setIsOpen(false)}>
                    View Plans
                  </Link>
                </Button>
              </div>
            </div>

            <div className="absolute bottom-6 left-0 right-0 px-6">
              <p className="text-xs text-muted/50 text-center">
                iptv adult channels — premium streaming
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
