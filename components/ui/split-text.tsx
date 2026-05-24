"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, createElement } from "react";

type Tag = "span" | "h1" | "h2" | "h3" | "div";

const easing = [0.22, 1, 0.36, 1] as const;

function renderWords(
  text: string,
  inView: boolean,
  stagger: number,
  delay: number,
  alwaysAnimate: boolean
) {
  const words = text.split(" ");
  return words.map((word, i) => (
    <span
      key={i}
      className="inline-block overflow-hidden align-bottom mr-[0.25em] last:mr-0"
    >
      <motion.span
        initial={{ y: "110%", opacity: 0, filter: "blur(8px)" }}
        animate={
          alwaysAnimate || inView
            ? { y: 0, opacity: 1, filter: "blur(0px)" }
            : { y: "110%", opacity: 0, filter: "blur(8px)" }
        }
        transition={{
          duration: 0.7,
          delay: delay + i * stagger,
          ease: easing,
        }}
        className="inline-block"
      >
        {word}
      </motion.span>
    </span>
  ));
}

/**
 * Initial-render word-by-word reveal (fires on mount).
 */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  as = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: Tag;
}) {
  return createElement(
    as,
    { className },
    renderWords(text, true, stagger, delay, true)
  );
}

/**
 * Scroll-triggered word-by-word reveal.
 */
export function SplitTextScroll({
  text,
  className,
  stagger = 0.05,
  delay = 0,
  as = "span",
}: {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: Tag;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return createElement(
    as,
    { ref, className },
    renderWords(text, inView, stagger, delay, false)
  );
}

export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: easing }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
