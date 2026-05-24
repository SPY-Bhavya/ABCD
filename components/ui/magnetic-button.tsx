"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode, useRef } from "react";

export function MagneticButton({
  children,
  className,
  href,
  strength = 0.35,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px * strength);
    y.set(py * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const innerX = useTransform(xSpring, (v) => v * 0.4);
  const innerY = useTransform(ySpring, (v) => v * 0.4);

  const Comp = (href ? motion.a : motion.button) as React.ElementType;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: xSpring, y: ySpring }}
      className="inline-block"
    >
      <Comp
        href={href}
        onClick={onClick}
        className={className}
        style={{ x: innerX, y: innerY }}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
