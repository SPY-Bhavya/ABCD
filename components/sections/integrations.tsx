"use client";

import { motion } from "framer-motion";
import { Landmark, Ship, Plane, Truck, Database, Network } from "lucide-react";
import { FadeUp, SplitTextScroll } from "../ui/split-text";
import { WorldMap } from "../world-map";

const groups = [
  {
    icon: Landmark,
    title: "Government Authorities",
    items: ["ICEGATE", "DGFT", "GST", "ULIP", "E-Way Bill"],
  },
  {
    icon: Ship,
    title: "Ocean Carriers (350+)",
    items: ["Maersk", "MSC", "CMA CGM", "COSCO", "Evergreen", "Hapag-Lloyd"],
  },
  {
    icon: Plane,
    title: "Air & Express",
    items: ["Air India", "Etihad", "Qatar", "DHL", "FedEx", "UPS"],
  },
  {
    icon: Truck,
    title: "Surface",
    items: ["Rail", "Truck", "Multi-modal"],
  },
  {
    icon: Database,
    title: "Enterprise ERP & CRM",
    items: ["SAP", "Oracle", "Microsoft Dynamics", "REST API", "Webhooks"],
  },
  {
    icon: Network,
    title: "Trade Portals",
    items: ["eSanchit", "RoDTEP", "EPCG", "SWIFT", "Tradelens"],
  },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="eyebrow text-[color:var(--accent)]">Integrations</div>
            </FadeUp>
            <SplitTextScroll
              text="Plug in everywhere your trade runs."
              as="h2"
              className="font-display mt-5 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] text-[color:var(--fg)] leading-[1]"
            />
          </div>
          <FadeUp delay={0.2} className="lg:col-span-5">
            <p className="text-lg text-[color:var(--fg-muted)] leading-relaxed">
              ABCD connects to the customs authorities, carriers, ERPs, and trade portals your
              business already depends on.{" "}
              <span className="text-[color:var(--fg)] font-semibold">
                330+ live integrations.
              </span>{" "}
              Ready from day one.
            </p>
          </FadeUp>
        </div>

        {/* World map showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 relative rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-elev)] overflow-hidden"
        >
          <div className="absolute top-4 left-4 z-10 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/85 backdrop-blur px-3 py-2 text-xs">
            <div className="text-[10px] uppercase tracking-wider text-[color:var(--fg-subtle)]">
              Live shipment routes
            </div>
            <div className="font-display font-bold text-[color:var(--fg)] mt-0.5">
              350+ carriers · 50+ ports
            </div>
          </div>
          <div className="absolute bottom-4 right-4 z-10 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/85 backdrop-blur px-3 py-2 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] pulse-dot" />
              <span className="font-semibold text-[color:var(--fg)]">Updating in real time</span>
            </div>
          </div>
          <WorldMap />
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="card group rounded-3xl p-7 relative overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--bg-section)] flex items-center justify-center group-hover:rotate-3 transition-transform">
                    <Icon className="h-5 w-5 text-[color:var(--accent)]" />
                  </div>
                  <div className="font-display text-lg font-bold text-[color:var(--fg)]">
                    {g.title}
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs font-medium border border-[color:var(--border)] bg-[color:var(--bg-section)] text-[color:var(--fg-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-[color:var(--fg-subtle)]">
                    + more
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
