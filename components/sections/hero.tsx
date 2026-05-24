"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";
import { DashboardMockup } from "../dashboard-mockup";
import { SplitText, FadeUp } from "../ui/split-text";

const tickerItems = [
  "MSCU 8472913 cleared at JNPT · 2m ago",
  "EPCG utilization · auto-tracked for SKU-447 · 4m ago",
  "XI flagged discrepancy · MAEU 1029384 · 6m ago",
  "Demurrage alert · free days end in 18h · 9m ago",
  "₹12.4L duty drawback identified · Ahmedabad ops · 12m ago",
  "ICEGATE filing complete · Shipment SHB-2891 · 14m ago",
  "Bill of Entry pushed to SAP · 17m ago",
];

export function HeroSection() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="absolute inset-0 dot-bg opacity-60 pointer-events-none" />
      <div className="absolute top-20 -left-32 h-[500px] w-[500px] rounded-full bg-[color:var(--accent)]/15 blur-3xl blob-1 pointer-events-none" />
      <div className="absolute top-40 -right-32 h-[600px] w-[600px] rounded-full bg-[color:var(--cta)]/12 blur-3xl blob-2 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--bg-elev)] px-3.5 py-1.5 text-xs font-semibold text-[color:var(--fg-muted)] shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent)] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              </span>
              The intelligent platform for global trade
            </motion.div>

            <h1 className="font-display mt-6 text-[2.75rem] sm:text-5xl lg:text-[4.5rem] xl:text-[5.25rem] font-bold tracking-[-0.03em] text-[color:var(--fg)] leading-[0.95]">
              <SplitText
                text="One platform for every"
                className="block"
                stagger={0.05}
              />
              <span className="block mt-1 lg:mt-2">
                <SplitText
                  text="shipment, document,"
                  className="gradient-text"
                  delay={0.3}
                  stagger={0.05}
                />
              </span>
              <span className="block mt-1 lg:mt-2">
                <SplitText
                  text="and trade decision."
                  delay={0.55}
                  stagger={0.05}
                />
              </span>
            </h1>

            <FadeUp delay={0.9} className="mt-7 max-w-xl">
              <p className="text-lg lg:text-xl text-[color:var(--fg-muted)] leading-relaxed">
                ABCD connects every shipment, document, workflow, and stakeholder in one
                intelligent platform — so trade teams move faster, stay compliant, and always know
                what happens next.
              </p>
            </FadeUp>

            <FadeUp delay={1.05} className="mt-9">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="btn-primary group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
                >
                  Request a demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#why"
                  className="btn-secondary inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
                >
                  <Play className="h-4 w-4" /> See how it works
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={1.2} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[color:var(--fg-subtle)]">
              <div className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-[color:var(--accent)]" />
                One platform. Complete trade intelligence.
              </div>
              <div className="h-3 w-px bg-[color:var(--border)] hidden sm:block" />
              <div>330+ live integrations</div>
              <div className="h-3 w-px bg-[color:var(--border)] hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[color:var(--cta)]" />
                Powered by XI
              </div>
            </FadeUp>
          </div>

          {/* Dashboard mockup */}
          <div className="lg:col-span-6 relative">
            <DashboardMockup />
          </div>
        </div>

        {/* Live activity ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-16 lg:mt-24 relative"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[color:var(--fg-subtle)]">
              Live across our network
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-[color:var(--border)] to-transparent" />
          </div>
          <div className="relative overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-elev)]/60 backdrop-blur py-3">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[color:var(--bg-elev)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[color:var(--bg-elev)] to-transparent z-10 pointer-events-none" />
            <div className="flex marquee-track w-max gap-12 whitespace-nowrap">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-[color:var(--fg-muted)] tabular-nums"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] pulse-dot" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
