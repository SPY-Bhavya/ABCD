import Link from "next/link";

const cols = [
  {
    title: "Platform",
    links: [
      ["Unified Visibility", "/platform/unified-visibility"],
      ["Customs Automation", "/platform/customs-automation"],
      ["XI Intelligence", "/platform/xi-intelligence"],
      ["Document Intelligence", "/platform/document-intelligence"],
      ["Finance Automation", "/platform/finance-automation"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Importers", "/importers"],
      ["Exporters", "/exporters"],
      ["Customs Brokers", "/customs-brokers"],
      ["Freight Forwarders", "/freight-forwarders"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Customers", "#case-studies"],
      ["Security", "#security"],
      ["Careers", "/careers"],
      ["Contact", "#contact"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Documentation", "/docs"],
      ["Integrations", "#integrations"],
      ["API Reference", "/api"],
      ["Status", "/status"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--border)] bg-[color:var(--bg-section)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--accent)] flex items-center justify-center">
                <span className="text-white font-display font-bold">A</span>
              </div>
              <span className="font-display font-bold text-xl text-[color:var(--fg)]">ABCD</span>
            </div>
            <p className="mt-5 text-sm text-[color:var(--fg-muted)] leading-relaxed max-w-xs">
              The intelligent platform for global trade. One platform. Complete trade intelligence.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-[color:var(--fg-subtle)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="font-display font-bold text-sm text-[color:var(--fg)]">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-3">
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-[color:var(--fg-muted)] hover:text-[color:var(--fg)] transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[color:var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-[color:var(--fg-subtle)]">
            © {new Date().getFullYear()} ABCD. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-xs text-[color:var(--fg-subtle)]">
            <Link href="/privacy" className="hover:text-[color:var(--fg)]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[color:var(--fg)]">
              Terms
            </Link>
            <span>ISO 27001 · SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
