"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingUp, Zap, Globe2 } from "lucide-react";
import { SplitTextScroll, FadeUp } from "../ui/split-text";

const logos = [
  "AlphaVector",
  "Ample Graphics",
  "Sync Logistics",
  "91Cycle",
  "Maersk",
  "DHL",
  "FedEx",
  "Hapag-Lloyd",
  "MSC",
  "COSCO",
  "CMA CGM",
  "Evergreen",
];

function Counter({ to, suffix, decimals = 0 }: { to: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) {
          const formatted =
            decimals > 0
              ? v.toFixed(decimals)
              : to >= 1000
              ? Math.round(v).toLocaleString()
              : Math.round(v).toString();
          ref.current.textContent = formatted + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, decimals, mv]);

  return <span ref={ref}>0{suffix}</span>;
}

export function TrustSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-[color:var(--bg-section)] border-y border-[color:var(--border)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <FadeUp>
            <div className="eyebrow text-[color:var(--fg-subtle)] justify-center">
              Trusted across global trade
            </div>
          </FadeUp>
          <SplitTextScroll
            text="The teams keeping global trade moving — choose ABCD."
            as="h2"
            className="font-display mt-5 text-3xl lg:text-4xl xl:text-5xl font-bold text-[color:var(--fg)] tracking-[-0.03em] leading-[1.05]"
          />
        </div>

        {/* Logo marquee */}
        <div className="mt-12 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[color:var(--bg-section)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[color:var(--bg-section)] to-transparent z-10 pointer-events-none" />
          <div className="flex marquee-track w-max gap-12">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-6 py-3 whitespace-nowrap font-display font-bold text-xl text-[color:var(--fg-muted)] opacity-70 hover:opacity-100 transition-opacity"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Bento stats */}
        <div className="mt-14 grid grid-cols-12 gap-4">
          {/* Hero stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-6 rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--brand-2)] p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[color:var(--accent)] opacity-25 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 w-60 h-60 rounded-full bg-[color:var(--cta)] opacity-15 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-wider font-bold">
                <Globe2 className="h-3.5 w-3.5" />
                Shipments processed
              </div>
              <div className="font-display mt-3 text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-[-0.04em] leading-[0.9] tabular-nums">
                <Counter to={50000} suffix="+" />
              </div>
              <div className="mt-4 text-white/70 text-sm max-w-md">
                Across importers, exporters, brokers, and freight forwarders — every container
                tracked, every document validated.
              </div>
            </div>
          </motion.div>

          {/* Three smaller stats */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {[
              { value: 70, suffix: "%", label: "Reduction in manual effort", icon: Zap, accent: "var(--accent)" },
              { value: 90, suffix: "%", label: "Faster task turnaround", icon: TrendingUp, accent: "var(--cta)" },
              { value: 330, suffix: "+", label: "Carrier integrations", icon: Globe2, accent: "var(--accent)" },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] p-6 lg:p-7 flex lg:items-center gap-5 flex-col sm:flex-row"
                >
                  <div className="font-display text-5xl lg:text-6xl font-bold text-[color:var(--fg)] tracking-[-0.03em] tabular-nums">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[color:var(--fg-muted)]">
                      {s.label}
                    </div>
                  </div>
                  <Icon className="h-5 w-5 flex-shrink-0" style={{ color: s.accent }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
