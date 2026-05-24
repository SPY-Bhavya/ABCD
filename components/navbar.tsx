"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { label: "Platform", href: "#why" },
  { label: "Solutions", href: "#icps" },
  { label: "Customers", href: "#case-studies" },
  { label: "Security", href: "#security" },
  { label: "Integrations", href: "#integrations" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--bg)]/80 border-b border-[color:var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--accent)] flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">A</span>
          </div>
          <span className="font-display font-bold text-lg text-[color:var(--fg)] tracking-tight">
            ABCD
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm font-medium text-[color:var(--fg-muted)] hover:text-[color:var(--fg)] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium text-[color:var(--fg-muted)] hover:text-[color:var(--fg)] transition-colors"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold"
          >
            Request demo <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-[color:var(--fg)]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-[color:var(--border)] bg-[color:var(--bg)]"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium text-[color:var(--fg-muted)]"
                >
                  {n.label}
                </a>
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
