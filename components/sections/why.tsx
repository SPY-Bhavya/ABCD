"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Workflow,
  Brain,
  Plug,
  Wallet,
  ArrowUpRight,
  Activity,
  CheckCircle2,
  FileText,
  Truck,
  Stamp,
} from "lucide-react";
import { SplitTextScroll, FadeUp } from "../ui/split-text";
import { XiVisualization } from "../xi-visualization";

export function WhySection() {
  return (
    <section id="why" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[color:var(--accent)]/8 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <FadeUp>
            <div className="eyebrow text-[color:var(--accent)]">Why ABCD</div>
          </FadeUp>
          <SplitTextScroll
            text="An intelligent platform — not retrofitted software."
            as="h2"
            className="font-display mt-5 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] text-[color:var(--fg)] leading-[1]"
          />
          <FadeUp delay={0.2}>
            <p className="mt-6 text-lg lg:text-xl text-[color:var(--fg-muted)] leading-relaxed">
              Built for the complexity of global trade. Every capability connected, every decision
              informed, every workflow automated in one operational infrastructure.
            </p>
          </FadeUp>
        </div>

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-12 gap-4 lg:gap-5 auto-rows-[minmax(0,auto)]">
          {/* XI - Featured big card */}
          <motion.a
            href="/platform/xi-intelligence"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="card-feature group col-span-12 lg:col-span-8 lg:row-span-2 rounded-3xl p-8 lg:p-10 relative overflow-hidden bg-gradient-to-br from-[color:var(--bg-elev)] to-[color:var(--bg-section)]"
          >
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--accent)]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[color:var(--cta)]/10 blur-3xl pointer-events-none" />

            <div className="relative grid lg:grid-cols-5 gap-6 items-center h-full">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--bg-elev)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[color:var(--accent)]">
                  <Brain className="h-3 w-3" />
                  AI Brain
                </div>
                <h3 className="font-display mt-5 text-3xl lg:text-4xl xl:text-5xl font-bold text-[color:var(--fg)] tracking-[-0.03em] leading-[1]">
                  XI — the brain behind every trade decision.
                </h3>
                <p className="mt-5 text-[color:var(--fg-muted)] leading-relaxed lg:text-lg">
                  Go beyond documents with intelligence built for process execution, compliance,
                  regulation, and operational productivity. Predictive. Proactive.
                </p>
                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)] group-hover:gap-3 transition-all">
                  Explore XI Intelligence
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
              <div className="lg:col-span-2">
                <XiVisualization />
              </div>
            </div>
          </motion.a>

          {/* Unified Visibility */}
          <motion.a
            href="/platform/unified-visibility"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="card group col-span-12 md:col-span-6 lg:col-span-4 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="h-12 w-12 rounded-2xl bg-[color:var(--bg-section)] border border-[color:var(--border)] flex items-center justify-center">
              <Eye className="h-5 w-5 text-[color:var(--accent)]" />
            </div>
            <h3 className="font-display mt-5 text-2xl font-bold text-[color:var(--fg)] leading-tight">
              Unified Visibility
            </h3>
            <p className="mt-3 text-sm text-[color:var(--fg-muted)] leading-relaxed">
              One live view of every shipment, document, workflow, and stakeholder across your
              entire EXIM ecosystem. No blind spots, no guesswork.
            </p>
            {/* Mini live indicator */}
            <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-wider text-[color:var(--fg-subtle)]">
              <Activity className="h-3 w-3 text-emerald-500 pulse-dot" /> Live · 2,847 shipments
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--accent)]">
              See it <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>

          {/* End-to-end automation - with workflow viz */}
          <motion.a
            href="/platform/customs-automation"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="card group col-span-12 md:col-span-6 lg:col-span-4 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="h-12 w-12 rounded-2xl bg-[color:var(--bg-section)] border border-[color:var(--border)] flex items-center justify-center">
              <Workflow className="h-5 w-5 text-[color:var(--cta)]" />
            </div>
            <h3 className="font-display mt-5 text-2xl font-bold text-[color:var(--fg)] leading-tight">
              End-to-End Automation
            </h3>
            <p className="mt-3 text-sm text-[color:var(--fg-muted)] leading-relaxed">
              Inquiry to quotation, documentation to customs filing, execution to clearance —
              automated across the entire trade cycle.
            </p>
            {/* Workflow chips */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              {[
                { icon: FileText, label: "Docs" },
                { icon: CheckCircle2, label: "Validate" },
                { icon: Stamp, label: "File" },
                { icon: Truck, label: "Clear" },
              ].map(({ icon: Icon, label }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[color:var(--bg-section)] border border-[color:var(--border)] text-[10px] text-[color:var(--fg-muted)]"
                >
                  <Icon className="h-2.5 w-2.5" /> {label}
                </span>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--cta)]">
              See workflows <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>

          {/* Deep integrations */}
          <motion.a
            href="/platform/document-intelligence"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="card group col-span-12 md:col-span-6 lg:col-span-6 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[color:var(--bg-section)] border border-[color:var(--border)] flex items-center justify-center">
                  <Plug className="h-5 w-5 text-[color:var(--accent)]" />
                </div>
                <h3 className="font-display mt-5 text-2xl font-bold text-[color:var(--fg)] leading-tight">
                  Deep Integrations
                </h3>
                <p className="mt-3 text-sm text-[color:var(--fg-muted)] leading-relaxed max-w-sm">
                  Unify data from ERPs, customs portals, global carriers, and other critical trade
                  systems into one intelligent, actionable dashboard.
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-end">
                <div className="font-display text-5xl font-bold text-[color:var(--fg)] tracking-tight">
                  330+
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[color:var(--fg-subtle)]">
                  integrations
                </div>
              </div>
            </div>
            <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--accent)]">
              See all integrations <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>

          {/* Finance & Cost */}
          <motion.a
            href="/platform/finance-automation"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="card group col-span-12 md:col-span-6 lg:col-span-6 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="h-12 w-12 rounded-2xl bg-[color:var(--bg-section)] border border-[color:var(--border)] flex items-center justify-center">
              <Wallet className="h-5 w-5 text-[color:var(--cta)]" />
            </div>
            <h3 className="font-display mt-5 text-2xl font-bold text-[color:var(--fg)] leading-tight">
              Finance & Cost Automation
            </h3>
            <p className="mt-3 text-sm text-[color:var(--fg-muted)] leading-relaxed">
              Every cost — freight, duty, IGST, port charges, CHA fees, transporter invoices —
              extracted by AI, auto-categorized, visible at shipment, invoice, and product level in
              real time.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex-1 h-1.5 rounded-full bg-[color:var(--bg-section)] overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[color:var(--cta)] to-[color:var(--accent)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                />
              </div>
              <span className="text-[10px] font-bold text-[color:var(--cta)] uppercase tracking-wider">
                Zero reconciliation
              </span>
            </div>
            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--cta)]">
              See landed cost <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
