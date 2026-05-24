"use client";

import { motion } from "framer-motion";
import { Lock, KeyRound, ShieldCheck, BadgeCheck } from "lucide-react";
import { FadeUp, SplitTextScroll } from "../ui/split-text";

const certs = [
  { label: "ISO 27001", sub: "Certified" },
  { label: "SOC 2", sub: "Type II Aligned" },
  { label: "GDPR", sub: "Aligned" },
  { label: "PDPA", sub: "Aligned" },
];

export function SecuritySection() {
  return (
    <section id="security" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="eyebrow text-[color:var(--accent)]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Security
              </div>
            </FadeUp>
            <SplitTextScroll
              text="Enterprise-grade security. Built in from day one."
              as="h2"
              className="font-display mt-5 text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[color:var(--fg)] leading-[1]"
            />
            <FadeUp delay={0.2}>
              <p className="mt-6 text-lg text-[color:var(--fg-muted)] leading-relaxed">
                Trade data is sensitive. We treat it that way.
              </p>
            </FadeUp>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {certs.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] p-4 flex items-center gap-3"
                >
                  <BadgeCheck className="h-5 w-5 text-[color:var(--accent)] flex-shrink-0" />
                  <div>
                    <div className="font-display font-bold text-[color:var(--fg)]">{c.label}</div>
                    <div className="text-xs text-[color:var(--fg-subtle)]">{c.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="card rounded-3xl p-8"
            >
              <div className="h-12 w-12 rounded-2xl bg-[color:var(--brand)] flex items-center justify-center">
                <Lock className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-display mt-6 text-xl lg:text-2xl font-bold text-[color:var(--fg)] leading-tight">
                Encryption everywhere
              </h3>
              <p className="mt-3 text-[color:var(--fg-muted)] leading-relaxed text-sm">
                All data encrypted in transit and at rest. 256-bit AES across every API call,
                document, and workflow.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[color:var(--accent)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] pulse-dot" />
                AES-256 · TLS 1.3
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="card rounded-3xl p-8"
            >
              <div className="h-12 w-12 rounded-2xl bg-[color:var(--brand)] flex items-center justify-center">
                <KeyRound className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-display mt-6 text-xl lg:text-2xl font-bold text-[color:var(--fg)] leading-tight">
                Access controls + audit logs
              </h3>
              <p className="mt-3 text-[color:var(--fg-muted)] leading-relaxed text-sm">
                Role-based access controls, full audit logging, complete decision traceability on
                every trade action.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[color:var(--accent)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] pulse-dot" />
                RBAC · SSO · SCIM
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="sm:col-span-2 rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--brand-2)] p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[color:var(--accent)] opacity-20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[color:var(--cta)] opacity-15 blur-3xl" />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <ShieldCheck className="h-14 w-14 text-white/90 flex-shrink-0" />
                <div>
                  <div className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight">
                    Aligned with major international data protection frameworks.
                  </div>
                  <div className="mt-3 text-sm text-white/70">
                    GDPR · PDPA · SOC 2 Type II · ISO 27001
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
