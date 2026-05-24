"use client";

import { useTheme, Theme } from "./theme-provider";
import { useState } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes: { id: Theme; label: string; swatch: string[]; desc: string }[] = [
  {
    id: "navy",
    label: "Navy / Cyan / Coral",
    swatch: ["#0A1F44", "#00B4D8", "#FF6B4A"],
    desc: "Enterprise & trade",
  },
  {
    id: "dark",
    label: "Dark / Neon",
    swatch: ["#050810", "#00F5D4", "#B794F6"],
    desc: "Tech-forward",
  },
  {
    id: "light",
    label: "Light / Indigo",
    swatch: ["#ffffff", "#4F46E5", "#A855F7"],
    desc: "Clean SaaS",
  },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="mb-3 w-72 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] p-2 shadow-2xl backdrop-blur"
          >
            <div className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--fg-subtle)]">
              Compare color schemes
            </div>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`w-full text-left rounded-xl p-3 transition-colors flex items-center gap-3 ${
                  theme === t.id
                    ? "bg-[color:var(--bg-section)]"
                    : "hover:bg-[color:var(--bg-section)]"
                }`}
              >
                <div className="flex -space-x-1.5">
                  {t.swatch.map((c, i) => (
                    <span
                      key={i}
                      className="h-6 w-6 rounded-full border-2 border-[color:var(--bg-elev)]"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-[color:var(--fg)]">{t.label}</div>
                  <div className="text-xs text-[color:var(--fg-subtle)]">{t.desc}</div>
                </div>
                {theme === t.id && (
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((o) => !o)}
        aria-label="Switch color theme"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elev)] shadow-xl text-[color:var(--fg)]"
      >
        <Palette className="h-6 w-6" />
      </motion.button>
    </div>
  );
}
