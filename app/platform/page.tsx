"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  MaskText,
  Reveal,
  HorizontalScroll,
  ScrollNumber,
  ParallaxY,
} from "@/components/ui/scroll-fx";
import {
  Brain,
  Eye,
  Workflow,
  Plug,
  Wallet,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const pillars = [
  {
    n: "01",
    icon: Brain,
    title: "XI Intelligence",
    body: "An always-on trade brain. Document understanding, HSN classification, regulatory reasoning, and predictive alerts — across every shipment in flight.",
    accent: "var(--accent)",
  },
  {
    n: "02",
    icon: Eye,
    title: "Unified Visibility",
    body: "Every shipment, every document, every stakeholder — surfaced live in one operating view. 330+ feeds, one source of truth.",
    accent: "var(--accent)",
  },
  {
    n: "03",
    icon: Workflow,
    title: "End-to-End Automation",
    body: "Inquiry to clearance — Shipping Bills, Bills of Entry, eSanchit, ICEGATE — all auto-generated, all submitted, zero portal logins.",
    accent: "var(--cta)",
  },
  {
    n: "04",
    icon: Plug,
    title: "Deep Integrations",
    body: "SAP, Oracle, Tally, ICEGATE, DGFT, eSanchit, Maersk, MSC, CMA — 330+ systems, bi-directional, ~30s sync latency.",
    accent: "var(--accent)",
  },
  {
    n: "05",
    icon: Wallet,
    title: "Finance & Cost",
    body: "Every freight, duty, IGST, port charge — extracted by AI, line-level reconciled, landed cost in real time. Zero manual matching.",
    accent: "var(--cta)",
  },
];

function HeroPinned() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Zoom + translate as you scroll through the hero, no opacity fade.
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} style={{ height: "150vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-[color:var(--bg-section)] flex items-center justify-center">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-[color:var(--accent)]/15 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-[color:var(--cta)]/12 blur-3xl" />
        </motion.div>

        <motion.div
          style={{ scale: titleScale, y: titleY }}
          className="relative text-center px-6 max-w-6xl will-change-transform"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--bg-elev)]/80 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-[color:var(--fg-muted)]">
            <Sparkles className="h-3 w-3 text-[color:var(--accent)]" />
            The Platform
          </div>
          <h1 className="font-display mt-8 text-[2.5rem] sm:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold tracking-[-0.035em] leading-[0.98] text-[color:var(--fg)]">
            <MaskText text="Operating" />
            <br />
            <span className="gradient-text">
              <MaskText text="infrastructure" delay={0.1} />
            </span>
            <br />
            <MaskText text="for trade." delay={0.2} />
          </h1>
        </motion.div>
      </div>
    </section>
  );
}

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-fg">
        <HeroPinned />

        {/* INTRO */}
        <section className="relative py-32 lg:py-44 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="eyebrow text-[color:var(--cta)]">What it is</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] text-[color:var(--fg)] leading-[1.05]">
                Five pillars. One intelligent platform. Built for the
                <span className="gradient-text"> complexity of global trade.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-base lg:text-lg text-[color:var(--fg-muted)] leading-relaxed max-w-2xl">
                Most software was retrofitted from accounting tools or shipping
                bills. ABCD was built from the document up — for the way trade
                actually moves.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PILLARS — horizontal scroll */}
        <HorizontalScroll trackWidth={pillars.length * 60 + 60}>
          <div className="flex items-center gap-8 px-[15vw]">
            <div className="flex-shrink-0 w-[40vw] max-w-md">
              <div className="eyebrow text-[color:var(--accent)]">
                Platform pillars
              </div>
              <h3 className="font-display mt-5 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1]">
                Five things,
                <br />
                <span className="gradient-text">working as one.</span>
              </h3>
              <p className="mt-6 text-base lg:text-lg text-[color:var(--fg-muted)] leading-relaxed">
                Scroll right — each pillar reveals a slice of how ABCD
                operates.
              </p>
            </div>
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.n}
                  className="flex-shrink-0 w-[55vw] max-w-xl h-[60vh] rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden"
                >
                  <div
                    className="absolute -top-32 -right-32 h-80 w-80 rounded-full blur-3xl pointer-events-none"
                    style={{ background: p.accent, opacity: 0.15 }}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-display text-5xl lg:text-7xl font-bold tabular-nums tracking-[-0.05em]"
                        style={{ color: p.accent, opacity: 0.95 }}
                      >
                        {p.n}
                      </span>
                      <div className="h-14 w-14 rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--bg-section)] flex items-center justify-center">
                        <Icon className="h-6 w-6" style={{ color: p.accent }} />
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <h4 className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold tracking-[-0.025em] leading-[1.1]">
                      {p.title}
                    </h4>
                    <p className="mt-4 text-sm lg:text-base text-[color:var(--fg-muted)] leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="flex-shrink-0 w-[15vw]" />
          </div>
        </HorizontalScroll>

        {/* NUMBERS */}
        <section className="relative py-32 lg:py-44 bg-[color:var(--bg-inverted)] text-[color:var(--fg-inv)] overflow-hidden">
          <div className="absolute inset-0 noise" />
          <ParallaxY range={80}>
            <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-[color:var(--accent)]/20 blur-3xl pointer-events-none" />
          </ParallaxY>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="eyebrow text-[color:var(--fg-inv)]/60">
                The platform in numbers
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
                Built at the scale of global trade.
              </h2>
            </Reveal>

            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
              {[
                { value: 330, suffix: "+", label: "Integrations live", decimals: 0 },
                { value: 2847, suffix: "", label: "Shipments tracked / day", decimals: 0 },
                { value: 99.9, suffix: "%", label: "Filing accuracy", decimals: 1 },
                { value: 11, suffix: " min", label: "Avg clearance time", decimals: 0 },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="border-t border-white/15 pt-6">
                    <ScrollNumber
                      from={0}
                      to={s.value}
                      suffix={s.suffix}
                      decimals={s.decimals}
                      className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tabular-nums tracking-[-0.035em]"
                    />
                    <div className="mt-4 text-sm uppercase tracking-[0.18em] font-bold text-white/55">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 lg:py-44 px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[color:var(--accent)]/10 blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
                <MaskText text="See the platform." />
                <br />
                <span className="gradient-text">
                  <MaskText text="In motion." delay={0.1} />
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/#contact"
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
                >
                  Request a demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="/solutions"
                  className="btn-secondary inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
                >
                  Explore solutions
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
}
