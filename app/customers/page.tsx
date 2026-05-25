"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { MaskText, Reveal, ScrollNumber } from "@/components/ui/scroll-fx";
import {
  Quote,
  Pill,
  Building2,
  Beaker,
  Truck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Story = {
  id: string;
  icon: LucideIcon;
  badge: string;
  headline: string;
  location: string;
  problem: string;
  outcome: string;
  metric: string;
  metricLabel: string;
  before: string;
  after: string;
  quote?: string;
  quoteAuthor?: string;
};

const stories: Story[] = [
  {
    id: "pharma",
    icon: Pill,
    badge: "Importer",
    headline: "Mid-sized pharma manufacturer",
    location: "Mumbai · 80+ shipments / mo",
    problem:
      "Demurrage charges of ₹4–6 lakh every month. Document errors discovered only after the container reached port. Ops team spent the first two hours of every morning across five portals.",
    outcome:
      "ABCD's AI caught document discrepancies before a single filing was submitted. Free-day countdowns gave the team time to act.",
    metric: "₹0",
    metricLabel: "avoidable demurrage · 6 months post go-live",
    before: "₹4–6L / month",
    after: "₹0 avoidable",
    quote:
      "We caught discrepancies we used to find at the port. The team got their mornings back.",
    quoteAuthor: "Head of Imports",
  },
  {
    id: "cha",
    icon: Building2,
    badge: "Customs Broker",
    headline: "Licensed CHA firm",
    location: "JNPT · 40+ accounts · 300+ jobs / mo",
    problem:
      "Every job took 75 minutes — data entry, HSN lookup, eSanchit upload, ICEGATE navigation. Could not take on new clients without hiring.",
    outcome:
      "ABCD automated job creation, HSN classification, and ICEGATE filing — without a single portal login.",
    metric: "75 → 11",
    metricLabel: "minutes per job · one operator handles three operators' work",
    before: "75 min · 3 operators",
    after: "11 min · 1 operator",
    quote: "We grew client count 2.5× without adding a single operator.",
    quoteAuthor: "Managing Partner",
  },
  {
    id: "chem",
    icon: Beaker,
    badge: "Exporter",
    headline: "Chemical exporter",
    location: "Ahmedabad · 120+ Shipping Bills / mo",
    problem:
      "Duty drawback being filed late or not at all. EPCG utilization tracked on a spreadsheet three weeks behind. A DGFT compliance notice was the wake-up.",
    outcome:
      "ABCD identified eligible drawbacks on every shipment automatically and tracked EPCG utilization in real time.",
    metric: "₹38L",
    metricLabel: "duty drawback recovered · first 4 months",
    before: "Drawbacks missed",
    after: "₹38L recovered",
    quote: "We recovered eight months of missed drawbacks in our first quarter.",
    quoteAuthor: "Finance Controller",
  },
  {
    id: "forwarder",
    icon: Truck,
    badge: "Freight Forwarder",
    headline: "Mid-market freight forwarder",
    location: "Delhi · 200+ shipments / mo · India ↔ ME / EU",
    problem:
      "Ops team spent 90 minutes every morning pulling status from eight carrier portals. Clients called constantly. CHA coordination over WhatsApp — no audit trail.",
    outcome:
      "ABCD consolidated carrier data into one live dashboard, gave clients self-serve visibility, and brought CHA coordination on platform.",
    metric: "90 → 10",
    metricLabel: "minutes · morning data assembly time",
    before: "8 portals · WhatsApp",
    after: "1 dashboard · 10 min",
    quote:
      "Clients stopped calling. They just check the portal — and we shipped harder.",
    quoteAuthor: "Operations Head",
  },
];

const featured = stories[0];

/* ────────────────────────────────────────────────────────── */

function Hero() {
  // Subtle title parallax — no pinning, no clip, no hide.
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative pt-32 lg:pt-44 pb-20 lg:pb-28 px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[color:var(--accent)]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[color:var(--cta)]/8 blur-3xl pointer-events-none" />

      <motion.div
        style={{ y: titleY }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <Reveal>
          <div className="eyebrow text-[color:var(--cta)] justify-center">
            Customer outcomes
          </div>
        </Reveal>
        <h1 className="font-display mt-6 text-[2.5rem] sm:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold tracking-[-0.035em] leading-[0.98]">
          <MaskText text="Real teams." />
          <br />
          <span className="gradient-text">
            <MaskText text="Real trade." delay={0.08} />
          </span>{" "}
          <MaskText text="Real outcomes." delay={0.16} />
        </h1>
        <Reveal delay={0.3}>
          <p className="mt-7 text-base lg:text-lg text-[color:var(--fg-muted)] max-w-2xl mx-auto leading-relaxed">
            Importers, exporters, customs brokers and freight forwarders — the
            numbers they shipped after going live on ABCD.
          </p>
        </Reveal>

        {/* Customer chips */}
        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {stories.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--bg-elev)]/70 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-[color:var(--fg-muted)] hover:text-[color:var(--fg)] hover:border-[color:var(--fg)] transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                {s.badge}
              </a>
            ))}
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */

function FeaturedCase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const Icon = featured.icon;

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 px-6 lg:px-8 border-t border-[color:var(--border)] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] font-bold text-[color:var(--fg-subtle)]">
              <span className="text-[color:var(--accent)]">Featured</span>
              <span className="h-px w-8 bg-[color:var(--border-strong)]" />
              <span>{featured.badge}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-5 text-3xl lg:text-5xl font-bold tracking-[-0.025em] text-[color:var(--fg)] leading-[1.05]">
              {featured.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-2 text-sm text-[color:var(--fg-subtle)]">
              {featured.location}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-base lg:text-lg text-[color:var(--fg-muted)] leading-relaxed max-w-xl">
              {featured.outcome}
            </p>
          </Reveal>
          {featured.quote && (
            <Reveal delay={0.3}>
              <blockquote className="mt-8 pl-5 border-l-2 border-[color:var(--accent)] text-[color:var(--fg)] font-medium italic leading-relaxed max-w-xl">
                "{featured.quote}"
                <div className="mt-2 not-italic text-xs uppercase tracking-[0.18em] font-bold text-[color:var(--fg-subtle)]">
                  — {featured.quoteAuthor}
                </div>
              </blockquote>
            </Reveal>
          )}
        </div>

        <motion.div
          style={{ y: cardY }}
          className="lg:col-span-5 relative rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--brand-2)] p-8 lg:p-10 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[color:var(--accent)]/25 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[color:var(--cta)]/25 blur-3xl" />
          <div className="relative">
            <Icon className="h-9 w-9 text-white/40" />
            <div className="mt-10 text-xs uppercase tracking-[0.18em] font-bold text-white/60">
              Outcome
            </div>
            <div className="font-display mt-3 text-6xl lg:text-7xl font-bold text-white tracking-[-0.04em] leading-[0.9]">
              {featured.metric}
            </div>
            <div className="mt-5 text-white/85 text-sm lg:text-base leading-snug max-w-xs">
              {featured.metricLabel}
            </div>

            <div className="mt-10 pt-7 border-t border-white/15 grid grid-cols-2 gap-5">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-white/55">
                  Before
                </div>
                <div className="mt-1.5 text-white/80 text-sm">
                  {featured.before}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-[color:var(--accent)]">
                  After
                </div>
                <div className="mt-1.5 text-white text-sm font-semibold">
                  {featured.after}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */

function StoryCard({ story }: { story: Story }) {
  const Icon = story.icon;
  return (
    <Reveal>
      <article
        id={story.id}
        className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] p-7 lg:p-8 relative overflow-hidden h-full flex flex-col"
      >
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[color:var(--accent)]/10 blur-3xl pointer-events-none" />

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-[color:var(--border-strong)] bg-[color:var(--bg-section)] flex items-center justify-center">
              <Icon className="h-4.5 w-4.5 text-[color:var(--accent)]" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-[color:var(--fg-subtle)]">
              {story.badge}
            </span>
          </div>
          <div
            className="font-display text-3xl lg:text-4xl font-bold tabular-nums tracking-[-0.03em]"
            style={{ color: "var(--accent)" }}
          >
            {story.metric}
          </div>
        </div>

        <h3 className="font-display mt-6 text-xl lg:text-2xl font-bold text-[color:var(--fg)] tracking-tight leading-tight">
          {story.headline}
        </h3>
        <div className="mt-1.5 text-xs text-[color:var(--fg-subtle)]">
          {story.location}
        </div>

        <p className="mt-5 text-sm text-[color:var(--fg-muted)] leading-relaxed flex-1">
          {story.outcome}
        </p>

        <div className="mt-6 pt-5 border-t border-[color:var(--border)] grid grid-cols-2 gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-[color:var(--fg-subtle)]">
              Before
            </div>
            <div className="mt-1 text-xs text-[color:var(--fg-muted)]">
              {story.before}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-[color:var(--accent)]">
              After
            </div>
            <div className="mt-1 text-xs text-[color:var(--fg)] font-semibold">
              {story.after}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ────────────────────────────────────────────────────────── */

function NumbersStrip() {
  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-8 bg-[color:var(--bg-inverted)] text-[color:var(--fg-inv)] overflow-hidden">
      <div className="absolute inset-0 noise" />
      <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-[color:var(--accent)]/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="eyebrow text-[color:var(--fg-inv)]/55">
            In aggregate
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-5 text-3xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.05] max-w-3xl">
            What customer trade looks like on ABCD.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {[
            { value: 0, prefix: "₹", suffix: "L", label: "Avoidable demurrage · 6 mo" },
            { value: 38, prefix: "₹", suffix: "L", label: "Drawback recovered · 4 mo" },
            { value: 11, suffix: " min", label: "Per job · was 75 min" },
            { value: 330, suffix: "+", label: "Carrier feeds unified" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="border-t border-white/15 pt-5">
                <ScrollNumber
                  from={0}
                  to={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tabular-nums tracking-[-0.035em]"
                />
                <div className="mt-3 text-[11px] uppercase tracking-[0.18em] font-bold text-white/55">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */

function PullQuote() {
  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[color:var(--accent)]/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <Quote className="h-10 w-10 text-[color:var(--accent)] opacity-70 mx-auto" />
        </Reveal>
        <h2 className="font-display mt-6 text-2xl lg:text-4xl font-bold tracking-[-0.02em] leading-[1.25]">
          <MaskText text="We caught discrepancies we used to find at the port." />
          <br />
          <span className="gradient-text">
            <MaskText
              text="The team got their mornings back."
              delay={0.1}
            />
          </span>
        </h2>
        <Reveal delay={0.3}>
          <div className="mt-7 text-xs uppercase tracking-[0.22em] font-bold text-[color:var(--fg-subtle)]">
            Head of Imports · Mumbai pharma manufacturer
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */

export default function CustomersPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-fg">
        <Hero />
        <FeaturedCase />

        {/* Other case studies grid */}
        <section className="relative py-24 lg:py-32 px-6 lg:px-8 border-t border-[color:var(--border)]">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-6 mb-12 lg:mb-16">
              <Reveal>
                <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.05]">
                  More teams, more outcomes.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="hidden sm:block text-xs uppercase tracking-[0.18em] font-bold text-[color:var(--fg-subtle)]">
                  {stories.length - 1} more case studies
                </div>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {stories.slice(1).map((s) => (
                <StoryCard key={s.id} story={s} />
              ))}
            </div>
          </div>
        </section>

        <NumbersStrip />
        <PullQuote />

        {/* CTA */}
        <section className="relative py-24 lg:py-32 px-6 lg:px-8 overflow-hidden border-t border-[color:var(--border)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[color:var(--cta)]/10 blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
                <MaskText text="Want numbers like this?" />
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base lg:text-lg text-[color:var(--fg-muted)] max-w-xl mx-auto">
                Bring us your shipment volume, your portals, your spreadsheet
                that ops actually runs on. We'll model it.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/#contact"
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
                >
                  Run your numbers
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="/platform"
                  className="btn-secondary inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
                >
                  See the platform
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
