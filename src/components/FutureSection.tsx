"use client";

import { useLang } from "@/lib/i18n";

type PhaseColor = "cyan" | "violet" | "gold";

interface Phase {
  phase: string; title: string; status: string;
  statusColor: PhaseColor; items: string[];
}

const statusColors: Record<PhaseColor, string> = {
  cyan:   "text-zs-cyan bg-zs-cyan/10 border-zs-cyan/20",
  violet: "text-zs-violet-bright bg-zs-violet/10 border-zs-violet/20",
  gold:   "text-zs-gold bg-zs-gold/10 border-zs-gold/20",
};
const dotColors: Record<PhaseColor, string> = {
  cyan: "bg-zs-cyan", violet: "bg-zs-violet-bright", gold: "bg-zs-gold",
};

export default function FutureSection() {
  const { t } = useLang();

  const phases: Phase[] = [
    {
      phase: "Phase I", title: t.future.phase1, status: t.future.inDev, statusColor: "cyan",
      items: ["Core swap engine deployment","Internal liquidity pools","Smart routing (direct + multi-hop)","Basic analytics dashboard","ZION AI risk scoring (v1)","Security layer integration"],
    },
    {
      phase: "Phase II", title: t.future.phase2, status: t.future.planned, statusColor: "violet",
      items: ["Cross-chain swap execution","External DEX aggregation","ZION AI advisory engine (v2)","Strategy backtesting module","Token creation suite launch","Z-PAY fiat conversion bridge"],
    },
    {
      phase: "Phase III", title: t.future.phase3, status: t.future.roadmap, statusColor: "gold",
      items: ["Governance protocol launch","Z-PAD launchpad integration","Z-Finance infrastructure bridge","Z-Assets protocol integration","AI-driven market intelligence (v3)","Institutional API / SDK"],
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-x-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="section-label mb-4">{t.future.label}</div>
          <h2 className="font-syne font-bold text-[clamp(1.5rem,4vw,3.25rem)] leading-[1.1] tracking-tight text-zs-text mb-4 sm:mb-5">
            {t.future.title1}{" "}
            <span className="text-gradient-cyan">{t.future.title2}</span>
          </h2>
          <p className="font-dm text-sm sm:text-base text-zs-muted leading-[1.7] text-center">{t.future.sub}</p>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {phases.map((phase, i) => (
            <div key={i} className="glass-card rounded-2xl border border-zs-border p-5 sm:p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-2 font-syne font-extrabold text-[60px] sm:text-[80px] leading-none text-zs-faint/12 pointer-events-none select-none">
                {i + 1}
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="font-mono text-[10px] sm:text-xs text-zs-muted">{phase.phase}</span>
                  <span className={`tag-badge px-2 py-0.5 rounded border text-[9px] sm:text-[10px] ${statusColors[phase.statusColor]}`}>
                    {phase.status}
                  </span>
                </div>
                <h3 className="font-syne font-bold text-base sm:text-lg lg:text-xl text-zs-text mb-4">{phase.title}</h3>
                <div className="flex flex-col gap-2.5">
                  {phase.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${dotColors[phase.statusColor]}`} />
                      <span className="font-dm text-xs sm:text-sm text-zs-muted leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision quote */}
        <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl overflow-hidden border border-zs-border text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-zs-cyan/[0.04] via-transparent to-zs-violet/[0.04]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="font-syne font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl text-zs-text mb-4 leading-[1.15] tracking-tight">
              &ldquo;A protocol-level liquidity layer that{" "}
              <span className="text-gradient-cyan">outlasts market cycles</span>{" "}
              and powers the full ZETTA financial stack.&rdquo;
            </p>
            <div className="font-mono text-[10px] sm:text-xs text-zs-muted tracking-[0.15em] uppercase">
              Z-SWAP Protocol Vision — ZETTA Ecosystem
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
