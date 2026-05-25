"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { MaskText, Reveal, ScrollNumber } from "@/components/ui/scroll-fx";
import {
  PackageOpen,
  Send,
  Stamp,
  Plane,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Role = {
  id: string;
  icon: LucideIcon;
  role: string;
  headline: string;
  body: string;
  stat: { value: number; suffix: string; decimals?: number; label: string };
  bullets: string[];
  accent: string;
};

const roles: Role[] = [
  {
    id: "importers",
    icon: PackageOpen,
    role: "Importers",
    headline: "Complete control over inbound — PO to GRN.",
    body: "Reduce port surprises, prevent doc errors, manage clearance, control landed costs, stay ahead of demurrage with AI validation and live milestone visibility.",
    stat: { value: 4.2, suffix: "L", decimals: 1, label: "demurrage saved / mo" },
    bullets: [
      "330+ carrier feeds, ICEGATE, and broker portals unified",
      "AI document validation across invoices, BLs, BOEs",
      "Demurrage countdowns with proactive alerts",
      "Landed cost roll-ups at line-item resolution",
    ],
    accent: "var(--accent)",
  },
  {
    id: "exporters",
    icon: Send,
    role: "Exporters",
    headline: "Move faster — compliant, profitable exports.",
    body: "Automate filings, identify incentive and FTA opportunities, reduce documentation errors, improve buyer visibility, and manage shipping milestones with confidence.",
    stat: { value: 38, suffix: "L", label: "duty drawback recovered" },
    bullets: [
      "Auto-generated Shipping Bills, EGM filings, eSanchit",
      "Duty drawback identified on every shipment",
      "Live EPCG and RoDTEP utilization tracking",
      "Buyer-facing milestone visibility — no portals",
    ],
    accent: "var(--cta)",
  },
  {
    id: "brokers",
    icon: Stamp,
    role: "Customs Brokers",
    headline: "More clients, more shipments — no added overhead.",
    body: "Automate document handling, speed up filing, improve client communication, track SLAs, and run a more scalable, profitable business.",
    stat: { value: 11, suffix: " min", label: "per job (was 75 min)" },
    bullets: [
      "HSN, weight, value — auto-classified from invoices",
      "ICEGATE filing in one click — Shipping Bills & BOEs",
      "Client-facing portal — importers track themselves",
      "Stage-level SLA tracking with exception alerts",
    ],
    accent: "var(--accent)",
  },
  {
    id: "forwarders",
    icon: Plane,
    role: "Freight Forwarders",
    headline: "Scale freight ops — without losing control.",
    body: "Unify shipment tracking, automate documentation, improve customer visibility, monitor job profitability, and coordinate across modes and customers.",
    stat: { value: 330, suffix: "+", label: "carrier feeds unified" },
    bullets: [
      "Ocean, air, road, rail — one live dashboard",
      "Job profitability — cost, revenue, margin in real time",
      "Structured CHA coordination on platform",
      "Customer self-serve visibility — proactive ETAs",
    ],
    accent: "var(--cta)",
  },
];

function HeroFlip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Gentle title parallax — no pinning, no rotation, no fade.
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative pt-32 lg:pt-44 pb-20 lg:pb-28 px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-[color:var(--accent)]/12 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[color:var(--cta)]/10 blur-3xl pointer-events-none" />

      <motion.div
        style={{ y: titleY }}
        className="relative mx-auto max-w-6xl"
      >
        {/* Two-column header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="eyebrow text-[color:var(--accent)]">
                Solutions
              </div>
            </Reveal>
            <h1 className="font-display mt-5 text-[2.5rem] sm:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold tracking-[-0.035em] leading-[0.98]">
              <MaskText text="Built for" />{" "}
              <span className="gradient-text">
                <MaskText text="every role" delay={0.08} />
              </span>
              <br />
              <MaskText text="in trade." delay={0.16} />
            </h1>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.3}>
              <p className="text-base lg:text-lg text-[color:var(--fg-muted)] leading-relaxed">
                Same platform. Four operating modes. Purpose-built workflows
                for the team handling the work.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[color:var(--fg-subtle)]">
                <span className="h-px w-8 bg-[color:var(--border-strong)]" />
                Pick your role
              </div>
            </Reveal>
          </div>
        </div>

        {/* Role tiles — 4-up preview */}
        <div className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {roles.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.id} delay={0.5 + i * 0.06}>
                <a
                  href={`#${r.id}`}
                  className="group relative block rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] p-5 lg:p-6 overflow-hidden hover:border-[color:var(--fg)] transition-colors"
                >
                  <div
                    className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: r.accent }}
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <div
                      className="h-11 w-11 rounded-xl border border-[color:var(--border-strong)] bg-[color:var(--bg-section)] flex items-center justify-center transition-transform group-hover:-rotate-6"
                    >
                      <Icon className="h-5 w-5" style={{ color: r.accent }} />
                    </div>
                    <span className="font-display text-2xl lg:text-3xl font-bold tabular-nums text-[color:var(--fg-subtle)] group-hover:text-[color:var(--fg)] transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="relative mt-7">
                    <div className="font-display text-lg lg:text-xl font-bold text-[color:var(--fg)] tracking-tight">
                      {r.role}
                    </div>
                    <div className="mt-1.5 text-xs lg:text-[13px] text-[color:var(--fg-muted)] leading-snug">
                      {r.headline.replace(/[.—].+$/, "").trim()}.
                    </div>
                  </div>
                  <ArrowUpRight className="absolute bottom-5 right-5 h-4 w-4 text-[color:var(--fg-subtle)] transition-all group-hover:text-[color:var(--fg)] group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function RoleSlide({ role, index }: { role: Role; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Image slides in from off-screen; text rises
  const imgX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [index % 2 === 0 ? -200 : 200, 0]
  );
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [80, 0]);

  const Icon = role.icon;
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-44 px-6 lg:px-8 overflow-hidden border-b border-[color:var(--border)]"
    >
      <div
        className="absolute -top-32 h-[600px] w-[600px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: role.accent,
          opacity: 0.08,
          left: isEven ? "-10%" : "auto",
          right: isEven ? "auto" : "-10%",
        }}
      />
      <div
        className={`relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          isEven ? "" : "lg:[direction:rtl]"
        }`}
      >
        <motion.div
          style={{ x: imgX, scale: imgScale }}
          className="relative aspect-[5/4] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-[color:var(--border-strong)] bg-gradient-to-br from-[color:var(--bg-elev)] to-[color:var(--bg-section)] [direction:ltr]"
        >
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: `radial-gradient(80% 60% at 50% 50%, ${role.accent}22, transparent)`,
            }}
          />
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon
              className="h-40 w-40 lg:h-56 lg:w-56"
              style={{ color: role.accent, opacity: 0.85 }}
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-[color:var(--fg-subtle)]">
                Role 0{index + 1}
              </div>
              <div className="font-display text-2xl font-bold text-[color:var(--fg)] mt-1">
                {role.role}
              </div>
            </div>
            <div
              className="font-display text-5xl lg:text-6xl font-bold tabular-nums tracking-[-0.04em]"
              style={{ color: role.accent }}
            >
              ₹
              <ScrollNumber
                from={0}
                to={role.stat.value}
                suffix={role.stat.suffix}
                decimals={role.stat.decimals ?? 0}
              />
            </div>
          </div>
        </motion.div>

        <motion.div style={{ y: textY }} className="[direction:ltr]">
          <div className="eyebrow" style={{ color: role.accent }}>
            {role.role}
          </div>
          <h2 className="font-display mt-5 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] text-[color:var(--fg)] leading-[1.02]">
            {role.headline}
          </h2>
          <p className="mt-6 text-base lg:text-lg text-[color:var(--fg-muted)] leading-relaxed">
            {role.body}
          </p>
          <ul className="mt-8 space-y-3">
            {role.bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm lg:text-base text-[color:var(--fg-muted)]"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0"
                  style={{ background: role.accent }}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <a
            href={`/#contact`}
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--fg)] group"
          >
            Talk to us about {role.role.toLowerCase()}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-fg">
        <HeroFlip />

        {roles.map((r, i) => (
          <RoleSlide key={r.id} role={r} index={i} />
        ))}

        {/* CTA */}
        <section className="relative py-32 lg:py-44 px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[color:var(--cta)]/10 blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
                <MaskText text="Same trade." />
                <br />
                <span className="gradient-text">
                  <MaskText text="One platform." delay={0.1} />
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href="/#contact"
                className="btn-primary mt-12 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
              >
                Request a demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
}
