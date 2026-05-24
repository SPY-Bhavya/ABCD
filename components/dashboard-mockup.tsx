"use client";

import { motion } from "framer-motion";
import {
  Ship,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  FileCheck,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

const shipments = [
  { id: "MSCU 8472913", route: "Shanghai → JNPT", status: "In transit", eta: "4d", tone: "transit" },
  { id: "MAEU 1029384", route: "Dubai → Mundra", status: "Documents validated", eta: "2d", tone: "ok" },
  { id: "COSU 5566778", route: "Hamburg → Chennai", status: "Customs filed", eta: "12d", tone: "ok" },
  { id: "OOLU 3344556", route: "Singapore → JNPT", status: "Demurrage risk", eta: "1d", tone: "warn" },
];

const toneStyles: Record<string, string> = {
  transit: "bg-[color:var(--accent)]/12 text-[color:var(--accent)]",
  ok: "bg-emerald-500/12 text-emerald-500",
  warn: "bg-amber-500/15 text-amber-500",
};

export function DashboardMockup() {
  const [count, setCount] = useState(2847);
  const [docs, setDocs] = useState(18421);

  useEffect(() => {
    const i = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3));
      setDocs((d) => d + Math.floor(Math.random() * 4));
    }, 2500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative w-full">
      {/* Glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-[color:var(--accent)]/15 via-transparent to-[color:var(--cta)]/12 blur-3xl opacity-70 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] shadow-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 30px 60px -30px color-mix(in srgb, var(--brand) 40%, transparent), 0 16px 30px -16px color-mix(in srgb, var(--brand) 25%, transparent)",
        }}
      >
        {/* Mock window chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[color:var(--border)] bg-[color:var(--bg-section)]">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="text-[10px] font-medium text-[color:var(--fg-subtle)] tracking-wider">
            app.abcd.io / shipments
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-[color:var(--fg-subtle)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-dot" />
            Live
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 p-4">
          {/* Stat strip */}
          <div className="col-span-12 grid grid-cols-3 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-xl border border-[color:var(--border)] p-3"
            >
              <div className="text-[10px] uppercase tracking-wider text-[color:var(--fg-subtle)]">
                Active shipments
              </div>
              <div className="mt-1 font-display text-xl font-bold text-[color:var(--fg)] tabular-nums">
                {count.toLocaleString()}
              </div>
              <div className="text-[10px] text-emerald-500 flex items-center gap-1 mt-0.5">
                <TrendingUp className="h-3 w-3" /> +12 today
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded-xl border border-[color:var(--border)] p-3"
            >
              <div className="text-[10px] uppercase tracking-wider text-[color:var(--fg-subtle)]">
                Documents validated
              </div>
              <div className="mt-1 font-display text-xl font-bold text-[color:var(--fg)] tabular-nums">
                {docs.toLocaleString()}
              </div>
              <div className="text-[10px] text-[color:var(--accent)] flex items-center gap-1 mt-0.5">
                <Sparkles className="h-3 w-3" /> XI
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="rounded-xl border border-[color:var(--border)] p-3"
            >
              <div className="text-[10px] uppercase tracking-wider text-[color:var(--fg-subtle)]">
                Demurrage saved
              </div>
              <div className="mt-1 font-display text-xl font-bold text-[color:var(--fg)] tabular-nums">
                ₹4.2L
              </div>
              <div className="text-[10px] text-[color:var(--fg-subtle)] flex items-center gap-1 mt-0.5">
                this month
              </div>
            </motion.div>
          </div>

          {/* Mini chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="col-span-12 rounded-xl border border-[color:var(--border)] p-3"
          >
            <div className="flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-wider text-[color:var(--fg-subtle)]">
                Clearance velocity · 14d
              </div>
              <div className="text-[10px] text-[color:var(--fg-subtle)]">avg 11min</div>
            </div>
            <div className="mt-2 flex items-end gap-1 h-12">
              {[40, 55, 35, 70, 50, 80, 65, 90, 75, 95, 85, 70, 88, 92].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 + i * 0.04, ease: "easeOut" }}
                  style={{ height: `${h}%`, transformOrigin: "bottom" }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-[color:var(--accent)] to-[color:var(--accent)]/40"
                />
              ))}
            </div>
          </motion.div>

          {/* Shipment list */}
          <div className="col-span-12 rounded-xl border border-[color:var(--border)] divide-y divide-[color:var(--border)]">
            {shipments.map((s, i) => {
              const Icon = s.tone === "warn" ? AlertTriangle : s.tone === "ok" ? CheckCircle2 : Ship;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                  className="flex items-center gap-3 px-3 py-2.5"
                >
                  <Icon className="h-3.5 w-3.5 text-[color:var(--fg-subtle)] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold text-[color:var(--fg)] truncate tabular-nums">
                      {s.id}
                    </div>
                    <div className="text-[10px] text-[color:var(--fg-subtle)] truncate">
                      {s.route}
                    </div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${toneStyles[s.tone]}`}>
                    {s.status}
                  </span>
                  <div className="text-[10px] text-[color:var(--fg-subtle)] tabular-nums w-7 text-right">
                    {s.eta}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Floating side cards */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute -left-6 top-1/4 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] shadow-xl p-3 flex items-center gap-2 hidden lg:flex"
      >
        <div className="h-8 w-8 rounded-lg bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
          <FileCheck className="h-4 w-4 text-emerald-500" />
        </div>
        <div>
          <div className="text-xs font-semibold text-[color:var(--fg)]">
            HSN auto-classified
          </div>
          <div className="text-[10px] text-[color:var(--fg-subtle)]">
            14 line items · 100% match
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute -right-4 bottom-1/4 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] shadow-xl p-3 flex items-center gap-2 hidden lg:flex"
      >
        <div className="h-8 w-8 rounded-lg bg-[color:var(--accent)]/15 flex items-center justify-center flex-shrink-0">
          <Sparkles className="h-4 w-4 text-[color:var(--accent)]" />
        </div>
        <div>
          <div className="text-xs font-semibold text-[color:var(--fg)]">XI flagged discrepancy</div>
          <div className="text-[10px] text-[color:var(--fg-subtle)]">
            invoice vs. packing list
          </div>
        </div>
      </motion.div>
    </div>
  );
}
