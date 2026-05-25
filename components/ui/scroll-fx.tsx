"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";

/* ============================================================
   Reveal — content slides up + clip-path opens on scroll.
   No bounce, no fade — translate + clip only.
   ============================================================ */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 80,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ y, clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   MaskText — heading reveals letter-by-letter via clip,
   words slide up from below. No fades.
   ============================================================ */
export function MaskText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom mr-[0.25em] last:mr-0 pb-[0.18em] -mb-[0.18em]"
        >
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}


/* ============================================================
   HorizontalScroll — converts vertical scroll into horizontal
   movement while the section is pinned. `trackWidth` is in vw
   units (e.g. 360 means the inner track is 360vw wide).
   ============================================================ */
export function HorizontalScroll({
  children,
  className,
  trackWidth = 300,
}: {
  children: ReactNode;
  className?: string;
  trackWidth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // Shift the track horizontally by the amount that exceeds the viewport.
  // Translate as a percentage of the track's own width so framer can
  // interpolate cleanly (avoids calc() in string interpolation).
  const xPercent = -((trackWidth - 100) / trackWidth) * 100;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${xPercent}%`]);

  return (
    <section
      ref={ref}
      className={className}
      style={{ height: `${(trackWidth - 100) + 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          style={{ x, width: `${trackWidth}vw` }}
          className="flex items-center h-full will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   ScrollNumber — animates a number value tied to scroll
   progress (no springs, linear interpolation).
   ============================================================ */
export function ScrollNumber({
  from,
  to,
  className,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  from: number;
  to: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 60%"],
  });
  const value = useTransform(scrollYProgress, [0, 1], [from, to]);
  const display = useTransform(value, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString()
  );

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

/* ============================================================
   ParallaxY — element translates Y as you scroll past it.
   ============================================================ */
export function ParallaxY({
  children,
  className,
  range = 120,
  style,
}: {
  children: ReactNode;
  className?: string;
  range?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  return (
    <motion.div ref={ref} style={{ y, ...style }} className={className}>
      {children}
    </motion.div>
  );
}
