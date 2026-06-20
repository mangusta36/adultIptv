"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <div className="glass rounded-xl p-4 md:p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left md:cursor-default"
        aria-expanded={isOpen}
      >
        <h3 className="text-sm font-semibold">Table of Contents</h3>
        <span className="md:hidden text-muted text-xs">
          {isOpen ? "Hide" : "Show"}
        </span>
      </button>
      <nav className={cn("mt-3 space-y-1", isOpen ? "block" : "hidden md:block")}>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "block text-sm py-1 text-muted hover:text-foreground transition-colors",
              item.level === 2 ? "pl-0" : "pl-4",
            )}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
