"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp, SplitTextScroll } from "../ui/split-text";

const testimonials = [
  {
    name: "Parmatma Rai",
    company: "AlphaVector India · 91 Cycle",
    role: "Importer",
    quote:
      "We love ABCD for its ease of use. It has transformed our complex import process into a simple, easy-to-track system with full visibility until the goods arrive at the warehouse. This helps our supply team manage inventory and customer deliveries more effectively.",
  },
  {
    name: "Rajeev Jagga",
    company: "Ample Graphics",
    role: "Importer",
    quote:
      "We have been using ABCD for several months to track our import shipments — it has proven extremely reliable. It has significantly reduced the time and effort required for manual data collection from various shipping lines. The team has been open to integrating our specific requirements, further increasing its utility.",
  },
  {
    name: "Dharmil Sheth",
    company: "Sync Logistics",
    role: "Customs Broker",
    quote:
      "What sets ABCD apart is its intuitive interface, which seamlessly integrates information flow and document management into a cohesive process. The true game-changer is ABCD's advanced AI — automating tracking, providing real-time updates, eliminating manual intervention. Our team transitioned with minimal training.",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(i);
  }, []);

  const t = testimonials[index];

  return (
    <section className="relative py-24 lg:py-36 bg-[color:var(--bg-inverted)] text-[color:var(--fg-inv)] overflow-hidden">
      <div className="absolute inset-0 noise" />
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[color:var(--accent)]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-[color:var(--cta)]/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <FadeUp>
            <div className="eyebrow text-[color:var(--fg-inv)]/60">Customer voices</div>
          </FadeUp>
          <SplitTextScroll
            text="What our customers say."
            as="h2"
            className="font-display mt-5 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] text-[color:var(--fg-inv)] leading-[1]"
          />
        </div>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-9">
            <Quote className="h-14 w-14 text-[color:var(--accent)] opacity-60" />
            <div className="relative mt-6 min-h-[16rem] lg:min-h-[14rem]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-2xl lg:text-4xl xl:text-5xl font-medium text-[color:var(--fg-inv)] leading-[1.2] tracking-[-0.02em]"
                >
                  &ldquo;{t.quote}&rdquo;
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`meta-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-10 flex items-center gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--cta)] flex items-center justify-center text-white font-display font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[color:var(--fg-inv)]">{t.name}</div>
                  <div className="text-sm text-[color:var(--fg-inv)]/60">
                    {t.company} · {t.role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls + indicator */}
          <div className="lg:col-span-3 flex lg:flex-col items-start lg:items-end gap-6">
            <div className="flex gap-2">
              <button
                aria-label="Previous"
                onClick={() =>
                  setIndex((p) => (p - 1 + testimonials.length) % testimonials.length)
                }
                className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next"
                onClick={() => setIndex((p) => (p + 1) % testimonials.length)}
                className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-auto">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className="group flex items-center gap-3 text-left"
                >
                  <span
                    className={`h-px transition-all duration-500 ${
                      i === index ? "bg-[color:var(--accent)] w-12" : "bg-white/30 w-6"
                    }`}
                  />
                  <span
                    className={`text-xs transition-colors ${
                      i === index
                        ? "text-[color:var(--fg-inv)] font-semibold"
                        : "text-white/40 group-hover:text-white/70"
                    }`}
                  >
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
