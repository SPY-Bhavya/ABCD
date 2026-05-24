"use client";

import { motion } from "framer-motion";
import { Headphones, Clock, Zap, UserCheck } from "lucide-react";
import { FadeUp, SplitTextScroll } from "../ui/split-text";

const cards = [
  {
    icon: UserCheck,
    title: "Your dedicated Relationship Manager",
    body: "One point of contact who knows your business, document formats, workflows, and priorities. Across WhatsApp, email, and phone — faster resolution, better continuity.",
    pill: "Personal",
  },
  {
    icon: Clock,
    title: "24×7 across every channel",
    body: "Global trade doesn't operate on office hours, and neither does ABCD support. Urgent customs, filing questions, operational exceptions — we're available when timing matters most.",
    pill: "Always-on",
  },
  {
    icon: Zap,
    title: "Built for time-critical ops",
    body: "Clearing a shipment at midnight or managing a vessel cutoff — ABCD support is structured for the urgency global trade demands, not standard software SLAs.",
    pill: "Time-critical",
  },
];

export function SupportSection() {
  return (
    <section className="relative py-24 lg:py-36 bg-[color:var(--bg-section)] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="eyebrow text-[color:var(--cta)]">
                <Headphones className="h-3.5 w-3.5" />
                Customer service & support
              </div>
            </FadeUp>
            <SplitTextScroll
              text="Trade never stops. Neither do we."
              as="h2"
              className="font-display mt-5 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] text-[color:var(--fg)] leading-[1]"
            />
          </div>
          <FadeUp delay={0.2} className="lg:col-span-5">
            <p className="text-lg text-[color:var(--fg-muted)] leading-relaxed">
              Dedicated, always-on support built for the realities of global trade. 24×7
              assistance, dedicated Relationship Managers, and a service designed for time-critical
              operations.
            </p>
          </FadeUp>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="card group relative rounded-3xl p-8 lg:p-9 overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[color:var(--cta)] to-[color:var(--cta-2)] flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[color:var(--fg-subtle)] px-2.5 py-1 rounded-full border border-[color:var(--border)]">
                    {c.pill}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-2xl font-bold text-[color:var(--fg)] leading-tight">
                  {c.title}
                </h3>
                <p className="mt-4 text-[color:var(--fg-muted)] leading-relaxed text-sm">
                  {c.body}
                </p>
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[color:var(--cta)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
