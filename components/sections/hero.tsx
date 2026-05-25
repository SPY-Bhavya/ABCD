"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Ship,
  Package,
  FileCheck,
  AlertTriangle,
  Banknote,
  ScrollText,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

const easing = [0.22, 1, 0.36, 1] as const;

type TickerCard = {
  time: string;
  title: string;
  body: string;
  image: string;
  icon: LucideIcon;
  tint: string;
};

const tickerCards: TickerCard[] = [
  {
    time: "2m ago",
    title: "MSCU 8472913",
    body: "Cleared at JNPT",
    image:
      "https://images.unsplash.com/photo-1577095707618-bf0e1d3da9c5?w=720&q=80&auto=format&fit=crop",
    icon: Ship,
    tint: "from-sky-500/30 to-slate-900",
  },
  {
    time: "4m ago",
    title: "EPCG · SKU-447",
    body: "Utilization auto-tracked",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=720&q=80&auto=format&fit=crop",
    icon: Warehouse,
    tint: "from-amber-500/30 to-slate-900",
  },
  {
    time: "6m ago",
    title: "MAEU 1029384",
    body: "XI flagged invoice discrepancy",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=720&q=80&auto=format&fit=crop",
    icon: AlertTriangle,
    tint: "from-rose-500/30 to-slate-900",
  },
  {
    time: "9m ago",
    title: "Demurrage alert",
    body: "Free days end in 18h",
    image:
      "https://images.unsplash.com/photo-1605731414532-6b26976cc153?w=720&q=80&auto=format&fit=crop",
    icon: Package,
    tint: "from-orange-500/30 to-slate-900",
  },
  {
    time: "12m ago",
    title: "₹12.4L duty drawback",
    body: "Identified · Ahmedabad ops",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=720&q=80&auto=format&fit=crop",
    icon: Banknote,
    tint: "from-emerald-500/30 to-slate-900",
  },
  {
    time: "14m ago",
    title: "Shipment SHB-2891",
    body: "ICEGATE filing complete",
    image:
      "https://images.unsplash.com/photo-1577017040065-650ee4d43339?w=720&q=80&auto=format&fit=crop",
    icon: FileCheck,
    tint: "from-cyan-500/30 to-slate-900",
  },
  {
    time: "17m ago",
    title: "Bill of Entry",
    body: "Pushed to SAP",
    image:
      "https://images.unsplash.com/photo-1565060169187-5284a3674f6f?w=720&q=80&auto=format&fit=crop",
    icon: ScrollText,
    tint: "from-indigo-500/30 to-slate-900",
  },
];

const trustStats = [
  { value: "2,800+", label: "Active shipments / day" },
  { value: "330+", label: "Live integrations" },
  { value: "₹4.2L", label: "Demurrage saved / mo" },
  { value: "99.9%", label: "Filing accuracy" },
];

export function HeroSection() {
  // Dynamic arch path centered on viewport — sized so cards stay inside the container
  const [archPath, setArchPath] = useState<string>(
    "path('M -420 410 Q 720 -110 1860 410')"
  );
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const peakX = w / 2;
      const halfSpan = Math.max(900, w * 0.7); // arch half-width
      const startX = peakX - halfSpan;
      const endX = peakX + halfSpan;
      setArchPath(
        `path('M ${startX.toFixed(0)} 410 Q ${peakX.toFixed(0)} -110 ${endX.toFixed(0)} 410')`
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="relative pt-24 lg:pt-28 pb-20 lg:pb-28 overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="absolute inset-0 dot-bg opacity-60 pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[120%] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 10%, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-24 left-1/2 -translate-x-[60%] h-[520px] w-[520px] rounded-full bg-[color:var(--accent)]/15 blur-3xl blob-1 pointer-events-none" />
      <div className="absolute top-44 left-1/2 translate-x-[10%] h-[600px] w-[600px] rounded-full bg-[color:var(--cta)]/12 blur-3xl blob-2 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easing }}
        className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center"
      >
        {/* Headline */}
        <h1 className="font-display mx-auto max-w-[52rem] text-[2rem] sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold tracking-[-0.025em] text-[color:var(--fg)] leading-[1.05]">
          <span className="block">One platform for every</span>
          <span className="gradient-text block mt-1 lg:mt-2 pb-[0.08em]">
            shipment, document,
          </span>
          <span className="block mt-1 lg:mt-2">and trade decision.</span>
        </h1>

        {/* Subhead */}
        <div className="mx-auto mt-8 max-w-2xl">
          <p className="text-base lg:text-lg text-[color:var(--fg-muted)] leading-relaxed">
            Every shipment, document, and workflow — connected in one
            intelligent platform built for global trade.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="btn-primary group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
          >
            Request a demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#why"
            className="btn-secondary inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
          >
            <Play className="h-4 w-4" /> See how it works
          </a>
        </div>

        {/* Inline trust line */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[color:var(--fg-subtle)]">
          <div className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-[color:var(--accent)]" />
            One platform. Complete trade intelligence.
          </div>
          <div className="h-3 w-px bg-[color:var(--border)] hidden sm:block" />
          <div>SOC 2 · ISO 27001 · GDPR</div>
          <div className="h-3 w-px bg-[color:var(--border)] hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--cta)]" />
            Powered by XI
          </div>
        </div>
      </motion.div>

      {/* Live activity cards — travelling right→left along a single SVG arc */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easing }}
        className="relative mt-8 lg:mt-12 w-screen left-1/2 -translate-x-1/2 overflow-hidden"
        style={
          {
            height: "560px",
            "--arch-path": archPath,
          } as React.CSSProperties
        }
      >
        {tickerCards.map((c, i) => {
          const Icon = c.icon;
          const duration = 42; // seconds — matches CSS keyframe duration
          const delay = -(i / tickerCards.length) * duration;
          return (
            <article
              key={i}
              style={{
                animationDelay: `${delay.toFixed(2)}s`,
                width: 200,
              }}
              className="card-arc absolute rounded-2xl overflow-hidden border border-[color:var(--border)] shadow-[0_30px_60px_-30px_rgba(10,31,68,0.45)] bg-[color:var(--bg-elev)]"
            >
              {/* Square image area */}
              <div className="relative aspect-square w-full overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${c.tint}`} />
                <img
                  src={c.image}
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-3 top-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur px-2 py-1 text-[9px] uppercase tracking-[0.16em] font-bold text-white/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] pulse-dot" />
                    {c.time}
                  </div>
                  <div className="h-7 w-7 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <Icon className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
              </div>
              {/* Text under image */}
              <div className="px-3.5 py-3 text-left">
                <div className="font-display text-[15px] font-bold text-[color:var(--fg)] leading-tight tracking-tight tabular-nums">
                  {c.title}
                </div>
                <div className="mt-1 text-[12px] text-[color:var(--fg-muted)] leading-snug">
                  {c.body}
                </div>
              </div>
            </article>
          );
        })}
      </motion.div>

      {/* Stat strip — below the marquee */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 -mt-40 lg:-mt-52">
        <div className="mx-auto grid max-w-4xl grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)]/70 overflow-hidden">
          {trustStats.map((s) => (
            <div
              key={s.label}
              className="bg-[color:var(--bg-elev)]/80 backdrop-blur px-5 py-5 text-left"
            >
              <div className="font-display text-2xl lg:text-3xl font-bold text-[color:var(--fg)] tabular-nums tracking-tight">
                {s.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[color:var(--fg-subtle)] font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
