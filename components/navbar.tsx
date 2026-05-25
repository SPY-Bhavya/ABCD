"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Customers", href: "/customers" },
  { label: "Security", href: "/security" },
  { label: "Integrations", href: "/integrations" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const delta = y - lastY.current;
      if (y < 80) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (hidden) setOpen(false);
  }, [hidden]);

  return (
    <header className="fixed top-0 inset-x-0 z-40 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{
          opacity: hidden ? 0 : 1,
          y: hidden ? -88 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto mx-auto mt-4 lg:mt-5 flex w-[min(96%,68rem)] items-center justify-between gap-3 rounded-full border px-3 py-2 transition-[background,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-[color:var(--border-strong)] bg-[color:var(--bg-elev)]/85 shadow-[0_18px_40px_-22px_rgba(10,31,68,0.25)] backdrop-blur-xl"
            : "border-[color:var(--border)] bg-[color:var(--bg-elev)]/60 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pl-2 pr-1 group">
          <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--accent)] flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">A</span>
          </div>
          <span className="font-display font-bold text-base text-[color:var(--fg)] tracking-tight">
            ABCD
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-[color:var(--fg-muted)] hover:text-[color:var(--fg)] transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2 pr-1">
          <a
            href="#contact"
            className="rounded-full px-3 py-1.5 text-[13px] font-medium text-[color:var(--fg-muted)] hover:text-[color:var(--fg)] transition-colors"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold"
          >
            Request demo <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-full text-[color:var(--fg)]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden mx-auto mt-2 w-[min(96%,68rem)] rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--bg-elev)]/95 backdrop-blur-xl shadow-xl overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[color:var(--fg-muted)] hover:bg-[color:var(--bg-section)] hover:text-[color:var(--fg)]"
                >
                  {n.label}
                </Link>
              ))}
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold mt-2"
              >
                Request demo <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
