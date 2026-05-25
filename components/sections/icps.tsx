"use client";

import { motion } from "framer-motion";
import { PackageOpen, Send, Stamp, Plane, ArrowUpRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import { FadeUp, SplitTextScroll } from "../ui/split-text";
import { Modal } from "../ui/modal";

const icps = [
  {
    icon: PackageOpen,
    role: "Importers",
    tagline: "Complete control over inbound — PO to GRN.",
    headline: "Complete control over inbound — PO to GRN.",
    body: "Reduce port surprises, prevent doc errors, manage clearance, control landed costs, stay ahead of demurrage with AI validation, live milestone visibility, and ERP sync.",
    line: "Know what is arriving, what is delayed, what is missing, and what it will cost — before it becomes a problem.",
    href: "/importers",
    accent: "var(--accent)",
    stats: [
      { value: "₹4.2L", label: "demurrage saved / mo" },
      { value: "100%", label: "doc validation" },
    ],
    details: [
      "Real-time milestone tracking across 330+ carrier feeds, ICEGATE, and broker portals.",
      "AI document validation cross-checks invoices, packing lists, BLs, and BOEs before filing.",
      "Demurrage countdowns with proactive alerts before free days expire.",
      "Landed cost roll-ups with line-level visibility into duties, freight, and ancillary charges.",
      "ERP push to SAP, Oracle, NetSuite, Tally — bills of entry sync automatically.",
    ],
  },
  {
    icon: Send,
    role: "Exporters",
    tagline: "Move faster — compliant, profitable exports.",
    headline: "Move faster — compliant, profitable exports.",
    body: "Automate filings, identify incentive and FTA opportunities, reduce documentation errors, improve buyer visibility, and manage shipping milestones with confidence.",
    line: "Ship faster, stay compliant, and capture more value from every export transaction.",
    href: "/exporters",
    accent: "var(--cta)",
    stats: [
      { value: "₹38L", label: "duty drawback recovered" },
      { value: "0", label: "DGFT breaches" },
    ],
    details: [
      "Auto-generated Shipping Bills, EGM filings, and eSanchit uploads — no portal logins.",
      "Duty drawback identification on every shipment, automatically.",
      "Live EPCG and RoDTEP utilization tracking — never miss an incentive.",
      "FTA eligibility checks for every consignment with Certificate of Origin auto-routing.",
      "Buyer-facing visibility — share milestone updates without separate portals.",
    ],
  },
  {
    icon: Stamp,
    role: "Customs Brokers",
    tagline: "More clients, more shipments — no added overhead.",
    headline: "More clients, more shipments — no added overhead.",
    body: "Automate document handling, speed up filing, improve client communication, track SLAs, and run a more scalable, profitable business.",
    line: "Process more shipments, serve more clients, improve turnaround without growing operational chaos.",
    href: "/customs-brokers",
    accent: "var(--accent)",
    stats: [
      { value: "11 min", label: "per job, down from 75" },
      { value: "3 → 1", label: "operators needed" },
    ],
    details: [
      "Auto-classification of HSN, weight, and value — pulled directly from invoices.",
      "ICEGATE filing automation — Shipping Bills and Bills of Entry submitted in one click.",
      "Client-facing portal: importers track their own jobs without the daily calls.",
      "SLA tracking with stage-level timestamps and exception alerts.",
      "Billing roll-ups by client, shipment, or commodity — straight to your accountant.",
    ],
  },
  {
    icon: Plane,
    role: "Freight Forwarders",
    tagline: "Scale freight ops — without losing control.",
    headline: "Scale freight ops — without losing control.",
    body: "Unify shipment tracking, automate documentation, improve customer visibility, monitor job profitability, and coordinate teams across modes, milestones, and customers.",
    line: "A more connected forwarding operation — better visibility, better service, stronger margin control.",
    href: "/freight-forwarders",
    accent: "var(--cta)",
    stats: [
      { value: "10 min", label: "morning data assembly" },
      { value: "330+", label: "carrier feeds unified" },
    ],
    details: [
      "330+ carrier integrations — ocean, air, road, and rail — in one live dashboard.",
      "Job profitability dashboards: cost, revenue, margin per shipment in real time.",
      "Structured CHA coordination on platform — no more WhatsApp chains.",
      "Customer self-serve visibility — proactive ETA updates and milestone notifications.",
      "Mode-agnostic milestone framework: same workflow for FCL, LCL, AIR, breakbulk.",
    ],
  },
];

type ICP = (typeof icps)[number];

export function ICPsSection() {
  const [active, setActive] = useState<ICP | null>(null);

  return (
    <section id="icps" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <FadeUp>
            <div className="eyebrow text-[color:var(--accent)]">Built for every role</div>
          </FadeUp>
          <SplitTextScroll
            text="Global trade isn't managed in silos. Neither is ABCD."
            as="h2"
            className="font-display mt-5 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] text-[color:var(--fg)] leading-[1]"
          />
          <FadeUp delay={0.2}>
            <p className="mt-6 text-lg lg:text-xl text-[color:var(--fg-muted)] leading-relaxed">
              Purpose-built workflows for importers, exporters, customs brokers, and freight
              forwarders — on one shared, intelligent platform.
            </p>
          </FadeUp>
        </div>

        {/* Slim cards — click to open modal */}
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {icps.map((icp, i) => {
            const Icon = icp.icon;
            return (
              <motion.button
                key={icp.role}
                type="button"
                onClick={() => setActive(icp)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card group relative rounded-3xl p-7 lg:p-8 overflow-hidden text-left"
              >
                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className="h-12 w-12 rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--bg-section)] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:-rotate-6 flex-shrink-0"
                    >
                      <Icon className="h-5 w-5" style={{ color: icp.accent }} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display text-2xl lg:text-3xl font-bold text-[color:var(--fg)] tracking-tight">
                        {icp.role}
                      </div>
                      <div className="mt-1 text-sm text-[color:var(--fg-muted)] truncate">
                        {icp.tagline}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[color:var(--fg-subtle)] transition-all group-hover:text-[color:var(--fg)] group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Modal — opens with full content of clicked card */}
      <Modal open={active !== null} onClose={() => setActive(null)}>
        {active && (() => {
          const Icon = active.icon;
          return (
            <div className="px-7 lg:px-10 py-10 lg:py-12">
              {/* Header */}
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--bg-section)] flex items-center justify-center"
                >
                  <Icon className="h-5 w-5" style={{ color: active.accent }} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[color:var(--fg-subtle)]">
                    Built for
                  </div>
                  <div className="font-display text-2xl font-bold text-[color:var(--fg)] tracking-tight">
                    {active.role}
                  </div>
                </div>
              </div>

              <h3 className="font-display mt-8 text-3xl lg:text-4xl font-bold text-[color:var(--fg)] tracking-[-0.025em] leading-[1.1]">
                {active.headline}
              </h3>

              <p className="mt-5 text-base lg:text-lg text-[color:var(--fg-muted)] leading-relaxed">
                {active.body}
              </p>

              <p
                className="mt-6 text-sm font-semibold text-[color:var(--fg)] leading-relaxed border-l-2 pl-4 italic"
                style={{ borderColor: active.accent }}
              >
                {active.line}
              </p>

              {/* Details list */}
              <div className="mt-9">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--fg-subtle)] mb-4">
                  What you get
                </div>
                <ul className="space-y-3">
                  {active.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm lg:text-base text-[color:var(--fg-muted)] leading-relaxed">
                      <span
                        className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0"
                        style={{ background: active.accent }}
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="mt-9 pt-7 border-t border-[color:var(--border)] grid grid-cols-2 gap-6">
                {active.stats.map((s, j) => (
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

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Request a demo
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={active.href}
                  className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Full overview
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          );
        })()}
      </Modal>
    </section>
  );
}
