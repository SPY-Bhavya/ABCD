"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Eye,
  Workflow,
  Brain,
  Plug,
  Wallet,
  ArrowUpRight,
  ArrowRight,
  Activity,
  CheckCircle2,
  FileText,
  Truck,
  Stamp,
  type LucideIcon,
} from "lucide-react";
import { SplitTextScroll, FadeUp } from "../ui/split-text";
import { XiVisualization } from "../xi-visualization";
import { Modal } from "../ui/modal";

type Pillar = {
  id: string;
  icon: LucideIcon;
  iconColor: string;
  title: string;
  tagline: string;
  href: string;
  ctaLabel: string;
  headline: string;
  body: string;
  details: string[];
  stats?: { value: string; label: string }[];
  chips?: { icon: LucideIcon; label: string }[];
  liveLabel?: string;
};

const pillars: Pillar[] = [
  {
    id: "xi",
    icon: Brain,
    iconColor: "var(--accent)",
    title: "XI — the brain behind every trade decision",
    tagline: "Intelligence built for execution, compliance, and ops.",
    href: "/platform/xi-intelligence",
    ctaLabel: "Explore XI Intelligence",
    headline: "XI — the brain behind every trade decision.",
    body: "Go beyond documents with intelligence built for process execution, compliance, regulation, and operational productivity. Predictive. Proactive.",
    details: [
      "Document understanding across invoices, packing lists, BLs, BOEs — extracted to line-item level.",
      "HSN classification and harmonization across global tariffs.",
      "Predictive alerts for demurrage, ETA slippage, and regulatory exposure.",
      "Compliance reasoning across DGFT, ICEGATE, customs notifications.",
      "Always-on validation across every document, in every workflow.",
    ],
  },
  {
    id: "visibility",
    icon: Eye,
    iconColor: "var(--accent)",
    title: "Unified Visibility",
    tagline: "One live view of every shipment, document, and stakeholder.",
    href: "/platform/unified-visibility",
    ctaLabel: "See it",
    headline: "Unified visibility across your entire EXIM ecosystem.",
    body: "One live view of every shipment, document, workflow, and stakeholder. No blind spots, no guesswork.",
    liveLabel: "Live · 2,847 shipments",
    details: [
      "330+ carrier feeds (ocean, air, road, rail) unified into one dashboard.",
      "Live milestone events from ICEGATE, broker portals, and freight forwarders.",
      "Document state tracked across every shipment — at line-item level.",
      "Role-aware views for ops, finance, and customer-facing teams.",
    ],
    stats: [
      { value: "2,847", label: "live shipments tracked" },
      { value: "330+", label: "carrier + portal feeds" },
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    iconColor: "var(--cta)",
    title: "End-to-End Automation",
    tagline: "Inquiry to clearance — automated across the trade cycle.",
    href: "/platform/customs-automation",
    ctaLabel: "See workflows",
    headline: "Every step of the trade cycle, automated.",
    body: "Inquiry to quotation, documentation to customs filing, execution to clearance — automated across the entire trade cycle.",
    chips: [
      { icon: FileText, label: "Docs" },
      { icon: CheckCircle2, label: "Validate" },
      { icon: Stamp, label: "File" },
      { icon: Truck, label: "Clear" },
    ],
    details: [
      "Auto-generated Shipping Bills, Bills of Entry, eSanchit uploads — without a portal login.",
      "ICEGATE filing automation with full audit trail.",
      "AI-driven validation across line items, HSN, weights, values, and origin.",
      "Milestone-based workflow execution — escalations and SLAs built in.",
    ],
  },
  {
    id: "integrations",
    icon: Plug,
    iconColor: "var(--accent)",
    title: "Deep Integrations",
    tagline: "ERPs, customs portals, carriers — all in one dashboard.",
    href: "/platform/document-intelligence",
    ctaLabel: "See all integrations",
    headline: "330+ deep integrations.",
    body: "Unify data from ERPs, customs portals, global carriers, and other critical trade systems into one intelligent, actionable dashboard.",
    stats: [
      { value: "330+", label: "live integrations" },
      { value: "30s", label: "average sync latency" },
    ],
    details: [
      "SAP, Oracle, NetSuite, Tally, Microsoft Dynamics — bi-directional.",
      "ICEGATE, DGFT, eSanchit — submitted from inside ABCD.",
      "Maersk, MSC, CMA CGM, Hapag-Lloyd, ONE — and 200+ other carriers.",
      "Custom webhooks and SFTP feeds for proprietary partner systems.",
    ],
  },
  {
    id: "finance",
    icon: Wallet,
    iconColor: "var(--cta)",
    title: "Finance & Cost Automation",
    tagline: "Every cost, line-level — extracted, categorized, visible.",
    href: "/platform/finance-automation",
    ctaLabel: "See landed cost",
    headline: "Finance & cost automation — zero reconciliation.",
    body: "Every cost — freight, duty, IGST, port charges, CHA fees, transporter invoices — extracted by AI, auto-categorized, visible at shipment, invoice, and product level in real time.",
    details: [
      "Automatic line-level matching of invoices to shipments and POs.",
      "Cost roll-ups by shipment, vendor, commodity, customer, or SKU.",
      "Real-time landed cost — duty, freight, ancillaries — per line.",
      "Anomaly detection on rate cards, surcharges, and FX conversions.",
    ],
    stats: [
      { value: "0", label: "manual reconciliations" },
      { value: "100%", label: "line-level coverage" },
    ],
  },
];

export function WhySection() {
  const [active, setActive] = useState<Pillar | null>(null);

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

        {/* Bento grid — slim cards open modals */}
        <div className="mt-16 grid grid-cols-12 gap-4 lg:gap-5 auto-rows-[minmax(0,auto)]">
          {/* XI — featured big card */}
          <PillarTile
            pillar={pillars[0]}
            onOpen={() => setActive(pillars[0])}
            className="col-span-12 lg:col-span-8 lg:row-span-2 bg-gradient-to-br from-[color:var(--bg-elev)] to-[color:var(--bg-section)] card-feature"
            big
          />

          {/* 4 smaller cards */}
          <PillarTile
            pillar={pillars[1]}
            onOpen={() => setActive(pillars[1])}
            className="col-span-12 md:col-span-6 lg:col-span-4"
          />
          <PillarTile
            pillar={pillars[2]}
            onOpen={() => setActive(pillars[2])}
            className="col-span-12 md:col-span-6 lg:col-span-4"
          />
          <PillarTile
            pillar={pillars[3]}
            onOpen={() => setActive(pillars[3])}
            className="col-span-12 md:col-span-6 lg:col-span-6"
          />
          <PillarTile
            pillar={pillars[4]}
            onOpen={() => setActive(pillars[4])}
            className="col-span-12 md:col-span-6 lg:col-span-6"
          />
        </div>
      </div>

      {/* Modal */}
      <Modal open={active !== null} onClose={() => setActive(null)}>
        {active && <PillarModalContent pillar={active} />}
      </Modal>
    </section>
  );
}

function PillarTile({
  pillar,
  onOpen,
  className,
  big = false,
}: {
  pillar: Pillar;
  onOpen: () => void;
  className: string;
  big?: boolean;
}) {
  const Icon = pillar.icon;
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`card group relative rounded-3xl p-7 lg:p-8 overflow-hidden text-left ${className}`}
    >
      {big && (
        <>
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--accent)]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[color:var(--cta)]/10 blur-3xl pointer-events-none" />
        </>
      )}
      <div className={`relative ${big ? "grid lg:grid-cols-5 gap-6 items-center h-full" : ""}`}>
        <div className={big ? "lg:col-span-3" : ""}>
          <div className="flex items-center justify-between gap-3">
            <div
              className="h-12 w-12 rounded-2xl bg-[color:var(--bg-section)] border border-[color:var(--border)] flex items-center justify-center"
            >
              <Icon className="h-5 w-5" style={{ color: pillar.iconColor }} />
            </div>
            <ArrowUpRight className="h-5 w-5 text-[color:var(--fg-subtle)] transition-all group-hover:text-[color:var(--fg)] group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <h3
            className={`font-display mt-5 font-bold text-[color:var(--fg)] tracking-tight leading-tight ${
              big ? "text-3xl lg:text-4xl xl:text-5xl tracking-[-0.03em]" : "text-2xl"
            }`}
          >
            {pillar.title}
          </h3>
          <p className="mt-3 text-sm text-[color:var(--fg-muted)] leading-relaxed">
            {pillar.tagline}
          </p>
        </div>
        {big && (
          <div className="lg:col-span-2">
            <XiVisualization />
          </div>
        )}
      </div>
    </motion.button>
  );
}

function PillarModalContent({ pillar }: { pillar: Pillar }) {
  const Icon = pillar.icon;
  return (
    <div className="px-7 lg:px-10 py-10 lg:py-12">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--bg-section)] flex items-center justify-center">
          <Icon className="h-5 w-5" style={{ color: pillar.iconColor }} />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[color:var(--fg-subtle)]">
            Platform pillar
          </div>
          <div className="font-display text-2xl font-bold text-[color:var(--fg)] tracking-tight">
            {pillar.title}
          </div>
        </div>
      </div>

      <h3 className="font-display mt-8 text-3xl lg:text-4xl font-bold text-[color:var(--fg)] tracking-[-0.025em] leading-[1.1]">
        {pillar.headline}
      </h3>

      <p className="mt-5 text-base lg:text-lg text-[color:var(--fg-muted)] leading-relaxed">
        {pillar.body}
      </p>

      {pillar.liveLabel && (
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-section)] px-3 py-1.5 text-[10px] uppercase tracking-wider text-[color:var(--fg-muted)] font-semibold">
          <Activity className="h-3 w-3 text-emerald-500 pulse-dot" />
          {pillar.liveLabel}
        </div>
      )}

      {pillar.chips && (
        <div className="mt-5 flex flex-wrap gap-2">
          {pillar.chips.map(({ icon: ChipIcon, label }, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[color:var(--bg-section)] border border-[color:var(--border)] text-xs text-[color:var(--fg-muted)]"
            >
              <ChipIcon className="h-3 w-3" /> {label}
            </span>
          ))}
        </div>
      )}

      <div className="mt-9">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--fg-subtle)] mb-4">
          What you get
        </div>
        <ul className="space-y-3">
          {pillar.details.map((d, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm lg:text-base text-[color:var(--fg-muted)] leading-relaxed"
            >
              <span
                className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0"
                style={{ background: pillar.iconColor }}
              />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>

      {pillar.stats && (
        <div className="mt-9 pt-7 border-t border-[color:var(--border)] grid grid-cols-2 gap-6">
          {pillar.stats.map((s, j) => (
            <div key={j}>
              <div className="font-display text-3xl lg:text-4xl font-bold text-[color:var(--fg)] tracking-tight tabular-nums">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-[color:var(--fg-subtle)] leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
        >
          Request a demo
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={pillar.href}
          className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
        >
          {pillar.ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
