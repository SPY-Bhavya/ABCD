"use client";

import { motion } from "framer-motion";
import { PackageOpen, Send, Stamp, Plane, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { FadeUp, SplitTextScroll } from "../ui/split-text";

const icps = [
  {
    icon: PackageOpen,
    role: "Importers",
    headline: "Complete control over inbound — PO to GRN.",
    body: "Reduce port surprises, prevent doc errors, manage clearance, control landed costs, stay ahead of demurrage with AI validation, live milestone visibility, and ERP sync.",
    line: "Know what is arriving, what is delayed, what is missing, and what it will cost — before it becomes a problem.",
    href: "/importers",
    accent: "var(--accent)",
    stats: [
      { value: "₹4.2L", label: "demurrage saved / mo" },
      { value: "100%", label: "doc validation" },
    ],
  },
  {
    icon: Send,
    role: "Exporters",
    headline: "Move faster — compliant, profitable exports.",
    body: "Automate filings, identify incentive and FTA opportunities, reduce documentation errors, improve buyer visibility, and manage shipping milestones with confidence.",
    line: "Ship faster, stay compliant, and capture more value from every export transaction.",
    href: "/exporters",
    accent: "var(--cta)",
    stats: [
      { value: "₹38L", label: "duty drawback recovered" },
      { value: "0", label: "DGFT breaches" },
    ],
  },
  {
    icon: Stamp,
    role: "Customs Brokers",
    headline: "More clients, more shipments — no added overhead.",
    body: "Automate document handling, speed up filing, improve client communication, track SLAs, and run a more scalable, profitable business.",
    line: "Process more shipments, serve more clients, improve turnaround without growing operational chaos.",
    href: "/customs-brokers",
    accent: "var(--accent)",
    stats: [
      { value: "11 min", label: "per job, down from 75" },
      { value: "3 → 1", label: "operators needed" },
    ],
  },
  {
    icon: Plane,
    role: "Freight Forwarders",
    headline: "Scale freight ops — without losing control.",
    body: "Unify shipment tracking, automate documentation, improve customer visibility, monitor job profitability, and coordinate teams across modes, milestones, and customers.",
    line: "A more connected forwarding operation — better visibility, better service, stronger margin control.",
    href: "/freight-forwarders",
    accent: "var(--cta)",
    stats: [
      { value: "10 min", label: "morning data assembly" },
      { value: "330+", label: "carrier feeds unified" },
    ],
  },
];

export function ICPsSection() {
  const [hovered, setHovered] = useState<string | null>(null);
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

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {icps.map((icp, i) => {
            const Icon = icp.icon;
            const isHovered = hovered === icp.role;
            return (
              <motion.a
                key={icp.role}
                href={icp.href}
                onMouseEnter={() => setHovered(icp.role)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="card group relative rounded-3xl p-8 lg:p-10 overflow-hidden"
              >
                {/* Hover background accent */}
                <motion.div
                  initial={false}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute -top-32 -right-32 h-80 w-80 rounded-full blur-3xl pointer-events-none"
                  style={{ background: icp.accent, opacity: 0.15 }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-12 w-12 rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--bg-section)] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:-rotate-6"
                      >
                        <Icon className="h-5 w-5" style={{ color: icp.accent }} />
                      </div>
                      <div className="font-display text-3xl font-bold text-[color:var(--fg)] tracking-tight">
                        {icp.role}
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-[color:var(--fg-subtle)] transition-all group-hover:text-[color:var(--fg)] group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  <h3 className="font-display mt-7 text-2xl lg:text-3xl font-bold text-[color:var(--fg)] leading-[1.1]">
                    {icp.headline}
                  </h3>
                  <p className="mt-4 text-[color:var(--fg-muted)] leading-relaxed">
                    {icp.body}
                  </p>
                  <p
                    className="mt-5 text-sm font-semibold text-[color:var(--fg)] leading-relaxed border-l-2 pl-4 italic"
                    style={{ borderColor: icp.accent }}
                  >
                    {icp.line}
                  </p>

                  <div className="mt-7 pt-6 border-t border-[color:var(--border)] grid grid-cols-2 gap-4">
                    {icp.stats.map((s, j) => (
                      <div key={j}>
                        <div className="font-display text-2xl lg:text-3xl font-bold text-[color:var(--fg)] tracking-tight tabular-nums">
                          {s.value}
                        </div>
                        <div className="mt-1 text-xs text-[color:var(--fg-subtle)] leading-tight">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
