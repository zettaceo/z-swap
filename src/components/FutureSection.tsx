"use client";

const roadmapPhases = [
  {
    phase: "Phase I",
    title: "Foundation",
    status: "In Development",
    statusColor: "cyan",
    items: [
      "Core swap engine deployment",
      "Internal liquidity pools",
      "Smart routing (direct + multi-hop)",
      "Basic analytics dashboard",
      "ZION AI risk scoring (v1)",
      "Security layer integration",
    ],
  },
  {
    phase: "Phase II",
    title: "Intelligence",
    status: "Planned",
    statusColor: "violet",
    items: [
      "Cross-chain swap execution",
      "External DEX aggregation",
      "ZION AI advisory engine (v2)",
      "Strategy backtesting module",
      "Token creation suite launch",
      "ZETTA Wallet deep integration",
    ],
  },
  {
    phase: "Phase III",
    title: "Ecosystem",
    status: "Roadmap",
    statusColor: "gold",
    items: [
      "Governance protocol launch",
      "Z-PAD launchpad integration",
      "Z-Finance liquidity bridge",
      "Fiat gateway integrations",
      "AI-driven market intelligence (v3)",
      "Institutional API access",
    ],
  },
];

export default function FutureSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zs-violet/4 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="section-label mb-4">08 — Protocol Vision</div>
          <h2 className="font-syne font-bold text-[clamp(1.8rem,3.5vw,3rem)] leading-tight text-zs-text mb-6">
            Built for the{" "}
            <span className="text-gradient-cyan">Long-Term Infrastructure</span>
          </h2>
          <p className="font-dm text-zs-muted leading-relaxed">
            Z-SWAP is designed as a long-running infrastructure protocol, not a product
            with a short lifecycle. The roadmap is structured around incremental, stable
            releases that expand capabilities while maintaining protocol integrity.
          </p>
        </div>

        {/* Roadmap */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {roadmapPhases.map((phase, i) => {
            const statusColors: Record<string, string> = {
              cyan: "text-zs-cyan bg-zs-cyan/10 border-zs-cyan/20",
              violet: "text-zs-violet-bright bg-zs-violet/10 border-zs-violet/20",
              gold: "text-zs-gold bg-zs-gold/10 border-zs-gold/20",
            };
            const dotColors: Record<string, string> = {
              cyan: "bg-zs-cyan",
              violet: "bg-zs-violet-bright",
              gold: "bg-zs-gold",
            };
            return (
              <div key={i} className="glass-card rounded-2xl border border-zs-border p-8 relative overflow-hidden">
                {/* Phase number */}
                <div className="absolute top-0 right-0 font-syne font-extrabold text-[80px] leading-none text-zs-faint/20 pointer-events-none select-none">
                  {i + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-xs text-zs-muted">{phase.phase}</span>
                    <span className={`tag-badge px-2 py-0.5 rounded border ${statusColors[phase.statusColor]}`}>
                      {phase.status}
                    </span>
                  </div>
                  <h3 className="font-syne font-bold text-xl text-zs-text mb-6">{phase.title}</h3>
                  <div className="space-y-2.5">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${dotColors[phase.statusColor]}`} />
                        <span className="font-dm text-sm text-zs-muted leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision statement */}
        <div className="relative p-10 rounded-2xl overflow-hidden border border-zs-border">
          <div className="absolute inset-0 bg-gradient-to-r from-zs-cyan/5 via-transparent to-zs-violet/5" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="font-syne font-bold text-2xl lg:text-3xl text-zs-text mb-4 leading-tight">
              &ldquo;A protocol-level liquidity layer that{" "}
              <span className="text-gradient-cyan">outlasts market cycles</span>{" "}
              and powers the full ZETTA financial stack.&rdquo;
            </div>
            <div className="font-mono text-xs text-zs-muted tracking-widest uppercase">
              Z-SWAP Protocol Vision — ZETTA Ecosystem
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
