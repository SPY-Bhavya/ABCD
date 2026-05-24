"use client";

import { motion } from "framer-motion";

const lines = [
  { from: 20, to: 50, delay: 0 },
  { from: 20, to: 50, delay: 0.6 },
  { from: 20, to: 50, delay: 1.2 },
  { from: 80, to: 50, delay: 0.3 },
  { from: 80, to: 50, delay: 0.9 },
  { from: 80, to: 50, delay: 1.5 },
];

const outputs = [
  { y: 20, label: "Discrepancy flagged" },
  { y: 38, label: "HSN classified" },
  { y: 56, label: "Filing routed" },
  { y: 74, label: "Cost categorized" },
  { y: 92, label: "Anomaly score" },
];

export function XiVisualization() {
  return (
    <div className="relative w-full h-full min-h-[260px]">
      <svg viewBox="0 0 400 200" className="w-full h-full">
        {/* Input nodes (left) */}
        {[20, 60, 100, 140, 180].map((y, i) => (
          <g key={`in-${i}`}>
            <motion.circle
              cx="40"
              cy={y}
              r="4"
              fill="var(--map-arc)"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            />
            <text x="20" y={y + 4} textAnchor="end" className="text-[8px] fill-[color:var(--fg-subtle)]">
              {["Invoice", "BoL", "Packing", "PO", "ERP"][i]}
            </text>
          </g>
        ))}

        {/* Core node */}
        <motion.circle
          cx="200"
          cy="100"
          r="32"
          fill="none"
          stroke="var(--map-arc)"
          strokeWidth="1.5"
          initial={{ scale: 0.9, opacity: 0.4 }}
          animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ transformOrigin: "200px 100px" }}
        />
        <circle cx="200" cy="100" r="22" fill="var(--map-arc)" opacity="0.15" />
        <circle cx="200" cy="100" r="14" fill="var(--map-arc)" />
        <text
          x="200"
          y="105"
          textAnchor="middle"
          className="text-[11px] font-bold fill-white"
        >
          XI
        </text>

        {/* Connection lines from inputs to core */}
        {[20, 60, 100, 140, 180].map((y, i) => (
          <motion.line
            key={`l1-${i}`}
            x1="44"
            y1={y}
            x2="186"
            y2="100"
            stroke="var(--map-arc)"
            strokeWidth="0.8"
            strokeDasharray="3 3"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
          />
        ))}

        {/* Output nodes (right) */}
        {outputs.map((o, i) => {
          const y = 20 + i * 40;
          return (
            <g key={`out-${i}`}>
              <motion.line
                x1="214"
                y1="100"
                x2="356"
                y2={y}
                stroke="var(--cta)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2.5, delay: 0.5 + i * 0.3, repeat: Infinity }}
              />
              <motion.circle
                cx="360"
                cy={y}
                r="3.5"
                fill="var(--cta)"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: 0.5 + i * 0.2, repeat: Infinity }}
              />
              <text
                x="370"
                y={y + 3}
                className="text-[8px] fill-[color:var(--fg-subtle)]"
              >
                {o.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
