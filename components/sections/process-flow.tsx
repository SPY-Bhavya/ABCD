"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileSearch,
  Sparkles,
  Stamp,
  Truck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    eyebrow: "Step 01",
    title: "Capture",
    body: "Every PO, invoice, packing list, and bill of lading flows in from email, ERP, broker portals, or carrier feeds — no re-keying.",
    accent: "Document intake",
  },
  {
    icon: Sparkles,
    eyebrow: "Step 02",
    title: "Validate",
    body: "XI cross-checks line items, HSN codes, weights, values, and origin against every other document — and flags discrepancies before they reach the port.",
    accent: "AI validation",
  },
  {
    icon: Stamp,
    eyebrow: "Step 03",
    title: "File",
    body: "Shipping Bills, Bills of Entry, eSanchit uploads, ICEGATE filings — auto-generated and submitted without a single portal login.",
    accent: "Customs filing",
  },
  {
    icon: Truck,
    eyebrow: "Step 04",
    title: "Clear & Deliver",
    body: "Live milestone tracking, demurrage countdowns, landed cost roll-ups, and ERP sync — until the container reaches the warehouse.",
    accent: "Execution",
  },
];

export function ProcessFlowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Progress along left rail
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 lg:py-36 bg-[color:var(--bg-section)] overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="eyebrow text-[color:var(--cta)]">How it works</div>
          <h2 className="font-display mt-5 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] text-[color:var(--fg)] leading-[1]">
            From inquiry to <span className="gradient-text">clearance</span> — one platform.
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-[color:var(--fg-muted)] leading-relaxed">
            ABCD takes a shipment from the first document to final delivery — and keeps every
            stakeholder in sync the whole way through.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            {/* Sticky left visual */}
            <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 self-start">
              <div className="relative rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] p-8 lg:p-10 overflow-hidden min-h-[420px]">
                <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
                <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[color:var(--accent)]/15 blur-3xl pointer-events-none" />

                {/* Vertical rail */}
                <div className="relative">
                  <div className="absolute left-5 top-5 bottom-5 w-px bg-[color:var(--border)]" />
                  <motion.div
                    style={{ height: progress }}
                    className="absolute left-5 top-5 w-px bg-gradient-to-b from-[color:var(--accent)] via-[color:var(--cta)] to-[color:var(--brand)]"
                  />

                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div key={i} className="relative flex items-start gap-4 mb-7 last:mb-0">
                        <div className="relative h-10 w-10 flex-shrink-0 rounded-xl border border-[color:var(--border-strong)] bg-[color:var(--bg-elev)] flex items-center justify-center z-10">
                          <Icon className="h-4.5 w-4.5 text-[color:var(--accent)]" />
                        </div>
                        <div className="pt-1.5">
                          <div className="text-[10px] uppercase tracking-wider font-bold text-[color:var(--fg-subtle)]">
                            {step.eyebrow}
                          </div>
                          <div className="font-display font-bold text-[color:var(--fg)] mt-0.5">
                            {step.title}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-2 pt-6 border-t border-[color:var(--border)] flex items-center gap-2 text-xs text-[color:var(--fg-subtle)]">
                  <Sparkles className="h-3.5 w-3.5 text-[color:var(--accent)]" />
                  Every step monitored by XI · zero portal logins
                </div>
              </div>
            </div>

            {/* Scrolling step descriptions */}
            <div className="col-span-12 lg:col-span-7 space-y-24 lg:space-y-36">
              {steps.map((step, i) => (
                <StepCard key={i} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div
        className={`absolute -left-4 top-2 h-10 w-1 rounded-full transition-all duration-500 ${
          inView ? "bg-gradient-to-b from-[color:var(--accent)] to-[color:var(--cta)] h-16" : "bg-[color:var(--border)]"
        }`}
      />
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[color:var(--fg-subtle)]">
        <span>{step.eyebrow}</span>
        <span className="h-3 w-px bg-[color:var(--border)]" />
        <span className="text-[color:var(--accent)]">{step.accent}</span>
      </div>
      <h3 className="font-display mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold text-[color:var(--fg)] tracking-[-0.03em] leading-[1]">
        {step.title}.
      </h3>
      <p className="mt-5 text-lg text-[color:var(--fg-muted)] leading-relaxed max-w-lg">
        {step.body}
      </p>

      {/* Demo card per step */}
      <div className="mt-7 inline-block rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] p-4 shadow-sm">
        <div className="flex items-center gap-3 text-sm">
          <div className="h-8 w-8 rounded-lg bg-[color:var(--bg-section)] flex items-center justify-center">
            <Icon className="h-4 w-4 text-[color:var(--accent)]" />
          </div>
          <div>
            <div className="font-semibold text-[color:var(--fg)]">
              {[
                "INV-2025-08471 received",
                "12 line items reconciled",
                "ICEGATE Shipping Bill filed",
                "Container at JNPT · gate-out",
              ][index]}
            </div>
            <div className="text-xs text-[color:var(--fg-subtle)] flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-dot" />
              {["just now", "auto by XI", "no portal login", "live"][index]}
            </div>
          </div>
          <ArrowRight className="h-3.5 w-3.5 text-[color:var(--fg-subtle)]" />
        </div>
      </div>
    </motion.div>
  );
}
