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
} from "@/components/ui/scroll-fx";
import {
  Plug,
  Ship,
  FileText,
  Database,
  Banknote,
  Building2,
  Truck,
  Plane,
  Server,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Category = {
  icon: LucideIcon;
  title: string;
  count: number;
  body: string;
  logos: string[];
  accent: string;
};

const categories: Category[] = [
  {
    icon: Ship,
    title: "Ocean & rail",
    count: 180,
    body: "Live milestone, container, and schedule data from every major and regional ocean carrier.",
    logos: ["Maersk", "MSC", "CMA CGM", "Hapag-Lloyd", "ONE", "Evergreen", "Yang Ming", "ZIM"],
    accent: "var(--accent)",
  },
  {
    icon: Plane,
    title: "Air & express",
    count: 45,
    body: "Air-cargo HAWB tracking, scheduled freight, and express courier integrations across global lanes.",
    logos: ["DHL", "FedEx", "UPS", "Emirates SkyCargo", "Cathay Cargo", "Qatar Airways Cargo"],
    accent: "var(--cta)",
  },
  {
    icon: Building2,
    title: "Customs & regulators",
    count: 22,
    body: "Bi-directional integrations with national customs portals, single windows, and regulatory bodies.",
    logos: ["ICEGATE", "DGFT", "eSanchit", "FSSAI", "PQIS", "Wildlife"],
    accent: "var(--accent)",
  },
  {
    icon: Database,
    title: "ERPs & accounting",
    count: 32,
    body: "Bi-directional ERP sync for orders, invoices, costs, and master data — at line-item resolution.",
    logos: ["SAP", "Oracle NetSuite", "Microsoft Dynamics", "Tally", "Zoho", "Sage"],
    accent: "var(--cta)",
  },
  {
    icon: Banknote,
    title: "Banks & payments",
    count: 28,
    body: "FX rate feeds, BG/LC submission, payment instruction integrations, and remittance reconciliation.",
    logos: ["HDFC", "ICICI", "Citi", "SBI", "Axis", "HSBC"],
    accent: "var(--accent)",
  },
  {
    icon: Truck,
    title: "Domestic transport",
    count: 23,
    body: "First-mile and last-mile coordination — domestic trucking, container yards, ICDs, CFSs.",
    logos: ["BlackBuck", "Rivigo", "Delhivery", "Cogoport", "FreightCrate"],
    accent: "var(--cta)",
  },
];

function HeroPin() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Big zoom, no fade. Hero releases when the pin window ends.
  const bigScale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} style={{ height: "200vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-[color:var(--bg)] flex items-center justify-center">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-[color:var(--accent)]/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-[color:var(--cta)]/10 blur-3xl" />

        <motion.div
          style={{ scale: bigScale }}
          className="relative text-center px-6 will-change-transform"
        >
          <div className="eyebrow text-[color:var(--accent)] justify-center">
            Integrations
          </div>
          <h1 className="font-display mt-6 text-[8rem] sm:text-[14rem] lg:text-[22rem] xl:text-[28rem] font-bold tracking-[-0.06em] leading-[0.85] gradient-text">
            330+
          </h1>
        </motion.div>

        <motion.div
          style={{ y: subY }}
          className="absolute bottom-16 left-0 right-0 text-center px-6 max-w-3xl mx-auto"
        >
          <p className="font-display text-xl lg:text-3xl font-bold tracking-tight leading-tight">
            <MaskText text="Live integrations." />{" "}
            <span className="gradient-text">
              <MaskText text="One platform." delay={0.1} />
            </span>{" "}
            <MaskText text="Trade everywhere." delay={0.2} />
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const explodingLogos = [
  "Maersk", "SAP", "ICEGATE", "DHL", "MSC", "Oracle",
  "FedEx", "DGFT", "CMA CGM", "Tally", "HSBC", "Hapag-Lloyd",
  "eSanchit", "UPS", "Dynamics", "Cathay", "Emirates", "Citi",
  "NetSuite", "ONE", "BlackBuck", "Evergreen", "FSSAI", "ICICI",
];

function LogoTile({
  logo,
  index,
  scrollYProgress,
}: {
  logo: string;
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const row = Math.floor(index / 6);
  const col = index % 6;
  const xDir = (col - 2.5) / 2.5;
  const yDir = (row - 1.5) / 1.5;
  const x = useTransform(scrollYProgress, [0, 0.5], [xDir * 180, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [yDir * 180, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [(xDir + yDir) * 20, 0]);
  return (
    <motion.div
      style={{ x, y, scale, rotate }}
      className="aspect-[5/3] rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--bg-elev)] flex items-center justify-center text-center px-3"
    >
      <span className="font-display font-bold text-sm lg:text-base text-[color:var(--fg)] tracking-tight">
        {logo}
      </span>
    </motion.div>
  );
}

function ExplodingLogos() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-44 bg-[color:var(--bg-section)] overflow-hidden"
    >
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="eyebrow text-[color:var(--cta)]">Names you ship with</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.02] max-w-3xl">
            The systems your trade actually runs on — already wired in.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {explodingLogos.map((logo, i) => (
            <LogoTile key={logo} logo={logo} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-fg">
        <HeroPin />
        <ExplodingLogos />

        {/* Categories — horizontal scroll */}
        <HorizontalScroll trackWidth={categories.length * 55 + 60}>
          <div className="flex items-center gap-6 px-[15vw]">
            <div className="flex-shrink-0 w-[40vw] max-w-md">
              <div className="eyebrow text-[color:var(--accent)]">
                Integration categories
              </div>
              <h3 className="font-display mt-5 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1]">
                Across
                <br />
                <span className="gradient-text">every category.</span>
              </h3>
              <p className="mt-6 text-base lg:text-lg text-[color:var(--fg-muted)] leading-relaxed">
                Scroll right to explore each integration domain — depth, not
                just breadth.
              </p>
            </div>
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="flex-shrink-0 w-[50vw] max-w-lg h-[62vh] rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden"
                >
                  <div
                    className="absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl pointer-events-none"
                    style={{ background: c.accent, opacity: 0.15 }}
                  />
                  <div className="relative">
                    <div
                      className="h-14 w-14 rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--bg-section)] flex items-center justify-center"
                    >
                      <Icon className="h-6 w-6" style={{ color: c.accent }} />
                    </div>
                    <h4 className="font-display mt-7 text-2xl lg:text-3xl xl:text-4xl font-bold tracking-[-0.025em] leading-[1.1]">
                      {c.title}
                    </h4>
                    <p className="mt-4 text-sm lg:text-base text-[color:var(--fg-muted)] leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                  <div className="relative">
                    <div
                      className="font-display text-5xl lg:text-7xl font-bold tabular-nums tracking-[-0.04em]"
                      style={{ color: c.accent }}
                    >
                      <ScrollNumber from={0} to={c.count} suffix="+" />
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] font-bold text-[color:var(--fg-subtle)]">
                      integrations live
                    </div>
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {c.logos.map((l) => (
                        <span
                          key={l}
                          className="inline-flex items-center px-2 py-1 rounded-md bg-[color:var(--bg-section)] border border-[color:var(--border)] text-[11px] text-[color:var(--fg-muted)]"
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex-shrink-0 w-[15vw]" />
          </div>
        </HorizontalScroll>

        {/* Build-your-own callout */}
        <section className="relative py-32 lg:py-44 px-6 lg:px-8 bg-[color:var(--bg-inverted)] text-[color:var(--fg-inv)] overflow-hidden">
          <div className="absolute inset-0 noise" />
          <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Reveal>
                <div className="eyebrow text-[color:var(--accent)]">
                  Don't see yours?
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
                  Custom webhooks, SFTP feeds, REST APIs.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-base lg:text-lg text-white/70 leading-relaxed">
                  We've never failed to integrate something. Bring us your
                  partner's data — we'll get it on the platform.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <a
                  href="/#contact"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white group"
                >
                  Request an integration
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[Server, FileText, Plug, Database, Building2, Plane].map(
                (Icon, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="aspect-square rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center">
                      <Icon className="h-7 w-7 text-[color:var(--accent)]" />
                    </div>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 lg:py-44 px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[color:var(--accent)]/10 blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
                <MaskText text="One platform." />
                <br />
                <span className="gradient-text">
                  <MaskText text="Every system." delay={0.1} />
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href="/#contact"
                className="btn-primary mt-12 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
              >
                Talk to integrations
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
