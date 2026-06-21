import { plans, whatsappUrl } from "@/data";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, CreditCard } from "lucide-react";

const badges = [
  { icon: Shield, label: "Money Back Guarantee", desc: "7-day full refund" },
  { icon: Zap, label: "Instant Activation", desc: "Setup in under 5 min" },
  { icon: CreditCard, label: "Secure Payment", desc: "Encrypted checkout" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background pointer-events-none" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-5">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Choose Your Plan
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-xl mx-auto">
            All plans include the same premium features. Pick the duration that fits you best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border transition-all duration-500 p-6 md:p-8 ${
                plan.popular
                  ? "bg-gradient-to-b from-accent/10 to-accent/5 border-accent/40 shadow-[0_0_80px_rgba(229,9,20,0.12)] scale-100 sm:scale-[1.02] md:scale-105 -mt-2 md:-mt-4 z-10"
                  : "bg-card border-border hover:border-accent/20 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(229,9,20,0.06)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-accent text-white shadow-lg shadow-accent/30 tracking-wider uppercase">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              {plan.savings && (
                <div className={`absolute top-3 right-3 ${plan.popular ? "" : ""}`}>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/30">
                    {plan.savings}
                  </span>
                </div>
              )}

              <div className={`mb-5 ${plan.popular ? "mt-3" : ""}`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted">{plan.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-border/50">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-sm text-muted">{plan.period}</span>
                </div>
                <div className="text-xs text-muted mt-1">{plan.monthlyPrice}</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                className="w-full font-semibold"
                asChild
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10 md:mt-14">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{badge.label}</div>
                  <div className="text-xs text-muted">{badge.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
