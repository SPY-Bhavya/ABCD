"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeUp, SplitTextScroll } from "../ui/split-text";

const roles = [
  { label: "Importers", href: "/importers" },
  { label: "Exporters", href: "/exporters" },
  { label: "Customs Brokers", href: "/customs-brokers" },
  { label: "Freight Forwarders", href: "/freight-forwarders" },
];

export function FinalCTASection() {
  return (
    <section id="contact" className="relative py-32 lg:py-44 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute top-10 left-1/4 h-96 w-96 rounded-full bg-[color:var(--accent)]/20 blur-3xl blob-1 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-[color:var(--cta)]/15 blur-3xl blob-2 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <FadeUp>
          <div className="eyebrow text-[color:var(--accent)] justify-center">
            Ready when you are
          </div>
        </FadeUp>

        <SplitTextScroll
          text="Your trade operation."
          as="h2"
          className="font-display mt-5 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[-0.04em] text-[color:var(--fg)] leading-[0.95]"
        />
        <SplitTextScroll
          text="Fully connected. Fully intelligent."
          as="div"
          className="font-display mt-2 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[-0.04em] gradient-text leading-[0.95]"
          stagger={0.06}
        />

        <FadeUp delay={0.4}>
          <p className="mt-10 text-lg lg:text-xl text-[color:var(--fg-muted)] max-w-3xl mx-auto leading-relaxed">
            Every shipment visible. Every document validated. Every workflow automated. This is what
            global trade looks like on ABCD.
          </p>
        </FadeUp>

        <FadeUp delay={0.55}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="btn-primary group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold"
            >
              Request a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#why"
              className="btn-secondary inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold"
            >
              See the platform
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.7}>
          <div className="mt-16 pt-10 border-t border-[color:var(--border)] max-w-3xl mx-auto">
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[color:var(--fg-subtle)] mb-5">
              Explore what ABCD does for your role
            </div>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
              {roles.map((r, i) => (
                <span key={r.label} className="flex items-center gap-2">
                  <a
                    href={r.href}
                    className="font-display font-bold text-lg lg:text-xl text-[color:var(--fg)] hover:text-[color:var(--accent)] transition-colors"
                  >
                    {r.label}
                  </a>
                  {i < roles.length - 1 && (
                    <span className="text-[color:var(--fg-subtle)]">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
