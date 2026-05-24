"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Pill,
  Building2,
  Beaker,
  Truck,
  Quote,
  ArrowRight,
} from "lucide-react";
import { FadeUp, SplitTextScroll } from "../ui/split-text";

const cases = [
  {
    id: "importer",
    badge: "Importer",
    icon: Pill,
    headline: "Mid-sized pharma manufacturer",
    location: "Mumbai · 80+ import shipments/mo",
    problem:
      "Demurrage charges hitting ₹4–6 lakh every month. Document errors discovered only after the container reached port. Ops team spent the first two hours of every morning across five portals — assembling a picture already out of date.",
    outcome:
      "ABCD's AI caught document discrepancies before a single filing was submitted. Free-day countdowns and demurrage alerts gave the team time to act.",
    metric: "₹0",
    metricLabel: "avoidable demurrage in the 6 months post go-live",
    timeline: [
      "Before: ₹4–6L / month in demurrage",
      "Month 1: Free-day alerts live · 60% drop",
      "Month 3: AI doc validation · 90% drop",
      "Month 6: Zero avoidable demurrage",
    ],
  },
  {
    id: "cha",
    badge: "Customs House Agent",
    icon: Building2,
    headline: "Licensed CHA firm",
    location: "JNPT · 40+ importer accounts · 300+ jobs/mo",
    problem:
      "Every job took 75 minutes of operator time — data entry, HSN lookup, eSanchit upload, ICEGATE navigation. Could not take on new clients without hiring. Flat-file rejections at 5pm were daily.",
    outcome:
      "ABCD automated job creation, HSN classification, and ICEGATE filing — without a single portal login.",
    metric: "75 → 11",
    metricLabel: "minutes per job — one operator handles work that needed three",
    timeline: [
      "Before: 75 min/job · 3 operators",
      "Week 2: HSN auto-classification",
      "Week 6: ICEGATE filing automated",
      "Now: 11 min/job · 1 operator",
    ],
  },
  {
    id: "exporter",
    badge: "Exporter",
    icon: Beaker,
    headline: "Chemical exporter",
    location: "Ahmedabad · 120+ Shipping Bills/mo · EPCG + RoDTEP",
    problem:
      "Duty drawback was being filed late or not at all — the team did not have bandwidth. EPCG utilization was tracked on a spreadsheet three weeks behind. A DGFT compliance notice was the moment they realized how exposed they were.",
    outcome:
      "ABCD identified eligible drawbacks on every shipment automatically and tracked EPCG utilization in real time.",
    metric: "₹38L",
    metricLabel: "duty drawback recovered in the first 4 months",
    timeline: [
      "Before: drawbacks missed · DGFT notice",
      "Month 1: full EPCG visibility",
      "Month 2: auto-drawback identification",
      "Month 4: ₹38L recovered",
    ],
  },
  {
    id: "forwarder",
    badge: "Freight Forwarder",
    icon: Truck,
    headline: "Mid-market freight forwarder",
    location: "Delhi · 200+ shipments/mo · India ↔ ME/EU",
    problem:
      "Ops team spent 90 minutes every morning pulling status from eight carrier portals before forwarding work began. Clients called constantly. CHA coordination happened entirely over WhatsApp — no audit trail.",
    outcome:
      "ABCD consolidated carrier data into one live dashboard, gave clients self-serve visibility, and brought CHA coordination onto one structured platform.",
    metric: "90 → 10",
    metricLabel: "minutes — morning data assembly time",
    timeline: [
      "Before: 8 portals · WhatsApp chaos",
      "Week 1: unified carrier dashboard",
      "Week 4: client self-serve portal",
      "Month 2: 90→10 min · calls stopped",
    ],
  },
];

export function CaseStudiesSection() {
  const [active, setActive] = useState(cases[0].id);
  const current = cases.find((c) => c.id === active)!;
  const Icon = current.icon;

  return (
    <section id="case-studies" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <FadeUp>
            <div className="eyebrow text-[color:var(--cta)]">Case studies</div>
          </FadeUp>
          <SplitTextScroll
            text="Real teams. Real trade. Real outcomes."
            as="h2"
            className="font-display mt-5 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] text-[color:var(--fg)] leading-[1]"
          />
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`group relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all overflow-hidden ${
                active === c.id
                  ? "bg-[color:var(--fg)] text-[color:var(--bg)] shadow-lg"
                  : "border border-[color:var(--border-strong)] text-[color:var(--fg-muted)] hover:text-[color:var(--fg)] hover:border-[color:var(--fg)]"
              }`}
            >
              {c.badge}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 grid lg:grid-cols-12 gap-6"
          >
            {/* Story */}
            <div className="lg:col-span-7 rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] p-8 lg:p-10 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--accent)] flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-display text-xl lg:text-2xl font-bold text-[color:var(--fg)] leading-tight">
                    {current.headline}
                  </div>
                  <div className="text-sm text-[color:var(--fg-subtle)] mt-1">
                    {current.location}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--fg-subtle)]">
                  The problem
                </div>
                <p className="mt-3 text-[color:var(--fg-muted)] leading-relaxed">
                  {current.problem}
                </p>
              </div>

              <div className="mt-7">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  What changed
                </div>
                <p className="mt-3 text-[color:var(--fg)] leading-relaxed">
                  {current.outcome}
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-8 pt-7 border-t border-[color:var(--border)]">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--fg-subtle)] mb-4">
                  Timeline
                </div>
                <div className="space-y-2">
                  {current.timeline.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                      <span
                        className={
                          i === current.timeline.length - 1
                            ? "font-semibold text-[color:var(--fg)]"
                            : "text-[color:var(--fg-muted)]"
                        }
                      >
                        {t}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metric card */}
            <div className="lg:col-span-5 rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--brand-2)] p-8 lg:p-10 flex flex-col justify-between min-h-[22rem] relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[color:var(--accent)] opacity-20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[color:var(--cta)] opacity-20 blur-3xl" />

              <Quote className="relative h-8 w-8 text-white/30" />

              <div className="relative my-6">
                <div className="text-xs uppercase tracking-wider font-bold text-white/60">
                  Outcome
                </div>
                <div className="font-display mt-3 text-7xl lg:text-8xl font-bold text-white tracking-[-0.04em] leading-[0.9]">
                  {current.metric}
                </div>
                <div className="mt-5 text-white/85 text-base lg:text-lg leading-snug">
                  {current.metricLabel}
                </div>
              </div>

              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 text-sm font-semibold text-white group/cta self-start"
              >
                Run your numbers
                <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
