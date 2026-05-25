"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { MaskText, Reveal, ScrollNumber } from "@/components/ui/scroll-fx";
import {
  Shield,
  Lock,
  KeyRound,
  Eye,
  FileCheck,
  ServerCog,
  Fingerprint,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    icon: Lock,
    title: "Encryption at every layer",
    body: "TLS 1.3 in transit. AES-256 at rest. Per-tenant key isolation. HSM-backed root keys.",
  },
  {
    icon: Fingerprint,
    title: "Identity & access",
    body: "SSO via SAML 2.0 + SCIM provisioning. Role-based access control down to document level. Step-up auth for filings.",
  },
  {
    icon: Eye,
    title: "Audit & observability",
    body: "Tamper-evident audit logs for every action. Live alerting on anomalous access. Retained for regulatory windows.",
  },
  {
    icon: ServerCog,
    title: "Infrastructure",
    body: "AWS multi-region with isolated VPCs per tenant tier. Continuous patching. Quarterly disaster-recovery drills.",
  },
  {
    icon: KeyRound,
    title: "Secrets & keys",
    body: "Customer secrets never leave the customer-controlled keyring. Vault-managed rotation. Zero plaintext storage.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    body: "SOC 2 Type II. ISO 27001. GDPR. Indian data residency. Mapped to NIST CSF and CIS Controls.",
  },
];

const badges = ["SOC 2", "ISO 27001", "GDPR", "DPDP Act", "CIS Controls", "NIST CSF"];

function HeroVault() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Shield keeps animating in the background, but title never fades.
  const shieldRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const shieldScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={ref} style={{ height: "150vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-[color:var(--bg-inverted)] text-[color:var(--fg-inv)] flex items-center justify-center">
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        {/* Massive rotating shield */}
        <motion.div
          style={{ rotate: shieldRotate, scale: shieldScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <Shield
            className="h-[60vw] w-[60vw] lg:h-[42vw] lg:w-[42vw] text-[color:var(--accent)]/12"
            strokeWidth={0.5}
          />
        </motion.div>

        <motion.div
          style={{ y: titleY }}
          className="relative text-center px-6 max-w-6xl will-change-transform"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-white/80">
            <Lock className="h-3 w-3 text-[color:var(--accent)]" />
            Security & compliance
          </div>
          <h1 className="font-display mt-8 text-[2.5rem] sm:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold tracking-[-0.035em] leading-[0.98]">
            <MaskText text="Trust" />
            <br />
            <span className="gradient-text">
              <MaskText text="by design." delay={0.1} />
            </span>
          </h1>
          <p className="mt-8 text-base lg:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Trade data is sensitive. We treat it that way — from key isolation
            to audit trails to compliance certifications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 70%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );
  const Icon = pillar.icon;
  return (
    <motion.div
      ref={ref}
      style={{ y, clipPath: clip }}
      className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] p-8 lg:p-10 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 font-display text-7xl lg:text-8xl font-bold text-[color:var(--accent)]/8 tabular-nums leading-none translate-x-2 -translate-y-2">
        0{index + 1}
      </div>
      <div className="relative">
        <div className="h-12 w-12 rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--bg-section)] flex items-center justify-center">
          <Icon className="h-5 w-5 text-[color:var(--accent)]" />
        </div>
        <h3 className="font-display mt-6 text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
          {pillar.title}
        </h3>
        <p className="mt-3 text-[color:var(--fg-muted)] leading-relaxed">
          {pillar.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-fg">
        <HeroVault />

        {/* Big numbers */}
        <section className="relative py-32 lg:py-44 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <Reveal>
                <div className="eyebrow text-[color:var(--cta)]">
                  Security posture
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
                  Designed for the regulated, audited, paranoid customer.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-base lg:text-lg text-[color:var(--fg-muted)] leading-relaxed">
                  Trade systems hold customs data, invoices, identities, and
                  bank wire instructions. We engineer for that risk profile —
                  not for a CRM. Defense in depth, key isolation, rapid
                  detection, full audit.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: 99.99, suffix: "%", decimals: 2, label: "Uptime SLA" },
                { value: 256, suffix: "-bit", label: "AES at rest" },
                { value: 24, suffix: "/7", label: "SOC monitoring" },
                { value: 4, suffix: " hrs", label: "Breach notification" },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="border-t border-[color:var(--border-strong)] pt-5">
                    <ScrollNumber
                      from={0}
                      to={s.value}
                      suffix={s.suffix}
                      decimals={s.decimals ?? 0}
                      className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tabular-nums tracking-[-0.04em]"
                    />
                    <div className="mt-3 text-xs uppercase tracking-[0.18em] font-bold text-[color:var(--fg-subtle)]">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars grid — each clip-reveals */}
        <section className="relative py-24 lg:py-32 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h3 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold tracking-[-0.03em] max-w-3xl leading-[1.05]">
                Six pillars of platform security.
              </h3>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {pillars.map((p, i) => (
                <PillarCard key={p.title} pillar={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Badges — sticky scroll */}
        <section className="relative py-32 lg:py-44 bg-[color:var(--bg-section)] overflow-hidden">
          <div className="absolute inset-0 dot-bg opacity-30" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="eyebrow text-[color:var(--accent)]">
                Certifications
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.02] max-w-3xl">
                Audited by people who do this for a living.
              </h3>
            </Reveal>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
              {badges.map((b, i) => (
                <Reveal key={b} delay={i * 0.06}>
                  <div className="aspect-square rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--bg-elev)] flex flex-col items-center justify-center text-center px-4">
                    <Shield className="h-6 w-6 text-[color:var(--accent)]" />
                    <div className="mt-3 font-display font-bold text-sm lg:text-base text-[color:var(--fg)] tracking-tight">
                      {b}
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
                <MaskText text="Need our SOC 2 report?" />
                <br />
                <span className="gradient-text">
                  <MaskText text="Just ask." delay={0.1} />
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href="/#contact"
                className="btn-primary mt-12 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
              >
                Talk to security
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
