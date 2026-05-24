"use client";

import { motion } from "framer-motion";

type Port = { id: string; x: number; y: number; label: string };
type Arc = { d: string; delay: number; from: Port; to: Port };

export function WorldMapClient({
  landPath,
  countryPaths,
  ports,
  arcs,
}: {
  landPath: string;
  countryPaths: string[];
  ports: Port[];
  arcs: Arc[];
}) {
  return (
    <div className="relative w-full aspect-[2/1]">
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="arcGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Subtle grid */}
        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 100}
            y1={0}
            x2={i * 100}
            y2={500}
            stroke="var(--grid-line)"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={i * 100}
            x2={1000}
            y2={i * 100}
            stroke="var(--grid-line)"
            strokeWidth="1"
          />
        ))}

        {/* Real world land fill */}
        <path
          d={landPath}
          fill="var(--map-land)"
          opacity="0.6"
        />

        {/* Country borders */}
        <g>
          {countryPaths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="var(--map-land)"
              strokeWidth="0.6"
              strokeOpacity="0.5"
              strokeLinejoin="round"
            />
          ))}
        </g>

        {/* Arcs */}
        {arcs.map((arc, i) => (
          <motion.path
            key={i}
            d={arc.d}
            stroke="var(--map-arc)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            filter="url(#arcGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 0.95, 0] }}
            transition={{
              duration: 4,
              delay: arc.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Ports - pulsing dots */}
        {ports.map((p, i) => (
          <g key={p.id}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="3"
              fill="var(--map-dot)"
              filter="url(#dotGlow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: (i % 5) * 0.4,
              }}
            />
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="3"
              fill="none"
              stroke="var(--map-dot)"
              strokeWidth="1.5"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: [1, 3.5], opacity: [0.8, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: (i % 5) * 0.4,
              }}
              style={{ transformOrigin: `${p.x}px ${p.y}px` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
