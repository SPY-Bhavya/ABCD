"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FileSearch,
  Sparkles,
  Stamp,
  Truck,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    number: "01",
    title: "Capture",
    accent: "Document intake",
    body: "Every PO, invoice, packing list, and bill of lading flows in from email, ERP, broker portals, or carrier feeds — no re-keying.",
    note: "INV-2025-08471 · auto-ingested",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Validate",
    accent: "AI validation",
    body: "XI cross-checks line items, HSN codes, weights, values, and origin against every other document — flagging discrepancies before they reach the port.",
    note: "12 line items reconciled",
  },
  {
    icon: Stamp,
    number: "03",
    title: "File",
    accent: "Customs filing",
    body: "Shipping Bills, Bills of Entry, eSanchit uploads, ICEGATE filings — auto-generated and submitted without a single portal login.",
    note: "Shipping Bill filed · ICEGATE",
  },
  {
    icon: Truck,
    number: "04",
    title: "Clear & Deliver",
    accent: "Execution",
    body: "Live milestone tracking, demurrage countdowns, landed cost roll-ups, and ERP sync — until the container reaches the warehouse.",
    note: "Container at JNPT · gate-out",
  },
];

export function ProcessFlowSection() {
  const railRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative py-28 lg:py-44 bg-[color:var(--bg-section)] overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-[color:var(--accent)]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-[color:var(--cta)]/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header — centered, editorial */}
        <div className="mx-auto max-w-3xl text-center mb-24 lg:mb-32">
          <div className="eyebrow text-[color:var(--cta)] justify-center">
            How it works
          </div>
          <h2 className="font-display mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] text-[color:var(--fg)] leading-[1.05]">
            From inquiry to{" "}
            <span className="gradient-text">clearance</span> — one platform.
          </h2>
          <p className="mt-6 text-base lg:text-lg text-[color:var(--fg-muted)] leading-relaxed">
            ABCD takes a shipment from the first document to final delivery —
            keeping every stakeholder in sync the whole way through.
          </p>
        </div>

        {/* Steps — editorial vertical layout */}
        <ol ref={railRef} className="relative">
          {/* Static track — sits behind everything */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-[210px] top-0 bottom-0 w-px bg-[color:var(--border-strong)]/60"
          />
          {/* Scroll-driven gradient line — grows top→bottom, drawing through every step number */}
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="hidden lg:block absolute left-[210px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[color:var(--accent)] via-[color:var(--cta)] to-[color:var(--brand)] origin-top"
          />

          {steps.map((s, i) => (
            <StepRow
              key={s.number}
              step={s}
              index={i}
              scrollProgress={scrollYProgress}
              totalSteps={steps.length}
            />
          ))}
        </ol>

        {/* Footer marker */}
        <div className="mt-20 lg:mt-28 flex items-center justify-center gap-3 text-xs text-[color:var(--fg-subtle)]">
          <span className="h-px w-12 bg-[color:var(--border-strong)]" />
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--accent)]" />
          <span className="uppercase tracking-[0.18em] font-bold">
            Every step monitored by XI · zero portal logins
          </span>
          <span className="h-px w-12 bg-[color:var(--border-strong)]" />
        </div>
      </div>
    </section>
  );
}

function StepRow({
  step,
  index,
  scrollProgress,
  totalSteps,
}: {
  step: (typeof steps)[number];
  index: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  totalSteps: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px 0px" });
  // Dot lights up when scroll passes this step's position on the rail
  const threshold = (index + 0.15) / totalSteps;
  const dotOpacity = useTransform(scrollProgress, [threshold - 0.05, threshold], [0, 1]);
  const Icon = step.icon;

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6 lg:gap-12 py-12 lg:py-16 border-b border-[color:var(--border)] last:border-b-0"
    >
      {/* Massive step number — editorial */}
      <div className="relative">
        <div className="flex items-baseline lg:items-start gap-3 lg:flex-col lg:gap-2">
          <span className="font-display text-[5rem] lg:text-[7rem] xl:text-[8rem] font-bold leading-[0.85] tracking-[-0.05em] text-[color:var(--fg)]/95 tabular-nums">
            {step.number}
          </span>
          {/* Rail dot — sits on the gradient line, lit when scroll line reaches it */}
          <span
            aria-hidden
            className="hidden lg:block absolute top-2 left-[210px] -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-[color:var(--bg-section)] ring-4 ring-[color:var(--bg-section)]"
          >
            <span className="absolute inset-0 rounded-full bg-[color:var(--border-strong)]" />
            <motion.span
              style={{ opacity: dotOpacity }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--cta)] shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_18%,transparent)]"
            />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="lg:pl-8 max-w-2xl">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-bold text-[color:var(--fg-subtle)]">
          <span className="text-[color:var(--accent)]">{step.accent}</span>
          <span className="h-px w-6 bg-[color:var(--border-strong)]" />
          <span>Step {step.number}</span>
        </div>

        <h3 className="font-display mt-5 text-3xl lg:text-5xl xl:text-[3.5rem] font-bold text-[color:var(--fg)] tracking-[-0.03em] leading-[1.02]">
          {step.title}.
        </h3>

        <p className="mt-5 text-base lg:text-lg text-[color:var(--fg-muted)] leading-relaxed">
          {step.body}
        </p>

        {/* Small live-event chip */}
        <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elev)] py-2 pl-2 pr-4 shadow-sm">
          <div className="h-7 w-7 rounded-full bg-[color:var(--bg-section)] flex items-center justify-center">
            <Icon className="h-3.5 w-3.5 text-[color:var(--accent)]" />
          </div>
          <span className="text-xs font-medium text-[color:var(--fg)]">
            {step.note}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-dot" />
          <ArrowUpRight className="h-3.5 w-3.5 text-[color:var(--fg-subtle)]" />
        </div>
      </div>
    </motion.li>
  );
}
