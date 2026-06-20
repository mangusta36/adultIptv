"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data";

function AnimatedCounter({
  value,
  label,
  num,
}: {
  value: string;
  label: string;
  num: number;
}) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const isPercentage = value.includes("%");
    const targetNum = num;

    if (isPercentage) {
      let current = 0;
      const step = targetNum / 40;
      const timer = setInterval(() => {
        current += step;
        if (current >= targetNum) {
          setDisplayValue("99.9");
          clearInterval(timer);
        } else {
          setDisplayValue(current.toFixed(1));
        }
      }, 25);
      return () => clearInterval(timer);
    }

    if (value.includes("24/7")) {
      return;
    }

    let current = 0;
    const step = Math.ceil(targetNum / 50);
    const timer = setInterval(() => {
      current += step;
      if (current >= targetNum) {
        setDisplayValue(targetNum.toLocaleString() + "+");
        clearInterval(timer);
      } else {
        setDisplayValue(current.toLocaleString() + "+");
      }
    }, 20);
    return () => clearInterval(timer);
  }, [hasAnimated, value, num]);

  const showValue = hasAnimated
    ? value.includes("24/7")
      ? "24/7"
      : displayValue
    : value;

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
        <span
          className={`inline-block transition-all duration-500 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-20 translate-y-2"
          }`}
        >
          {showValue}
        </span>
      </div>
      <div className="text-sm text-muted font-medium">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.02] via-accent/[0.04] to-accent/[0.02] pointer-events-none" />

      <div className="container relative z-10">
        <div className="glass rounded-2xl p-8 md:p-12 lg:p-16 border border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                num={stat.num}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
