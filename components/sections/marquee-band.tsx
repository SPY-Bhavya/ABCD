"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = [
  "TRACK",
  "AUTOMATE",
  "CLEAR",
  "DELIVER",
  "VALIDATE",
  "FORECAST",
  "INTEGRATE",
  "SCALE",
];

export function MarqueeBand({
  variant = "default",
}: {
  variant?: "default" | "inverted";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);

  const isInverted = variant === "inverted";

  return (
    <div
      ref={ref}
      className={`relative py-12 lg:py-16 overflow-hidden ${
        isInverted
          ? "bg-[color:var(--bg-inverted)] text-[color:var(--fg-inv)]"
          : "border-y border-[color:var(--border)] bg-[color:var(--bg)]"
      }`}
    >
      <motion.div style={{ x: x1 }} className="flex marquee-big w-max gap-12 whitespace-nowrap">
        {[...words, ...words, ...words].map((w, i) => (
          <span
            key={`a${i}`}
            className="font-display text-6xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.04em]"
          >
            {w}
            <span
              className={`mx-8 inline-block align-middle h-3 w-3 rounded-full ${
                i % 2 === 0
                  ? "bg-[color:var(--accent)]"
                  : "bg-[color:var(--cta)]"
              }`}
            />
          </span>
        ))}
      </motion.div>

      <motion.div
        style={{ x: x2 }}
        className="flex marquee-reverse w-max gap-12 whitespace-nowrap mt-4 lg:mt-6"
      >
        {[
          ...words.slice().reverse(),
          ...words.slice().reverse(),
          ...words.slice().reverse(),
        ].map((w, i) => (
          <span
            key={`b${i}`}
            className={`font-display text-6xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.04em] ${
              isInverted ? "text-white/15" : "text-[color:var(--fg)]/8"
            }`}
            style={{
              WebkitTextStroke: isInverted ? "1px rgba(255,255,255,0.4)" : "1px var(--fg)",
              color: "transparent",
            }}
          >
            {w}
            <span className="mx-8" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
