"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { FadeUp, SplitTextScroll } from "../ui/split-text";

const testimonials = [
  {
    name: "Parmatma Rai",
    company: "AlphaVector India · 91 Cycle",
    role: "Importer",
    quote:
      "ABCD has transformed our complex import process into a simple, easy-to-track system with full visibility until the goods arrive at the warehouse.",
  },
  {
    name: "Rajeev Jagga",
    company: "Ample Graphics",
    role: "Importer",
    quote:
      "We have been using ABCD for several months to track our import shipments — extremely reliable. It significantly reduced our manual data collection across shipping lines.",
  },
  {
    name: "Dharmil Sheth",
    company: "Sync Logistics",
    role: "Customs Broker",
    quote:
      "What sets ABCD apart is its intuitive interface and advanced AI — automating tracking, providing real-time updates, eliminating manual intervention. Our team transitioned with minimal training.",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setActiveIndex((p) => (p + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative py-24 lg:py-32 bg-[color:var(--bg-inverted)] text-[color:var(--fg-inv)] overflow-hidden">
      <div className="absolute inset-0 noise" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[color:var(--accent)]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[color:var(--cta)]/12 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header — centered */}
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <div className="eyebrow text-[color:var(--fg-inv)]/60 justify-center">
              Customer voices
            </div>
          </FadeUp>
          <SplitTextScroll
            text="What our customers say."
            as="h2"
            className="font-display mt-5 text-3xl lg:text-4xl xl:text-5xl font-bold tracking-[-0.03em] text-[color:var(--fg-inv)] leading-[1.05]"
          />
        </div>

        {/* 3-up grid */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, i) => {
            const isActive = i === activeIndex;
            return (
              <motion.button
                key={t.name}
                type="button"
                onClick={() => setActiveIndex(i)}
                animate={{
                  opacity: isActive ? 1 : 0.55,
                  scale: isActive ? 1.02 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative text-left rounded-2xl p-6 lg:p-7 border transition-colors duration-500 ${
                  isActive
                    ? "border-[color:var(--accent)]/60 bg-white/[0.06] shadow-[0_24px_60px_-30px_color-mix(in_srgb,var(--accent)_50%,transparent)]"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                }`}
              >
                {/* Active glow */}
                {isActive && (
                  <motion.span
                    layoutId="testimonial-glow"
                    aria-hidden
                    className="absolute -inset-px rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(80% 100% at 50% 0%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)",
                    }}
                  />
                )}
                <Quote
                  className={`h-7 w-7 transition-colors duration-500 ${
                    isActive
                      ? "text-[color:var(--accent)]"
                      : "text-white/30"
                  }`}
                />
                <blockquote className="mt-4 font-display text-[15px] lg:text-base leading-[1.55] text-[color:var(--fg-inv)]/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className={`h-9 w-9 rounded-full flex items-center justify-center text-white font-display font-bold text-sm transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--cta)]"
                        : "bg-white/10"
                    }`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-[color:var(--fg-inv)] truncate">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-[color:var(--fg-inv)]/55 truncate">
                      {t.company} · {t.role}
                    </div>
                  </div>
                </div>

                {/* Auto-cycle progress bar */}
                <div className="mt-5 h-px w-full bg-white/10 overflow-hidden rounded-full">
                  {isActive && (
                    <motion.div
                      key={`bar-${activeIndex}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 4.5, ease: "linear" }}
                      style={{ transformOrigin: "left" }}
                      className="h-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--cta)]"
                    />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
