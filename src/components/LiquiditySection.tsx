"use client";

import LiquidityFlowAnimation from "./LiquidityFlowAnimation";

const capabilities = [
  { label: "Swap instantâneo multichain",  active: true  },
  { label: "Swap cross-chain nativo",       active: true  },
  { label: "Divisão inteligente de ordens",    active: true  },
  { label: "Swap protegido contra MEV",     active: true  },
  { label: "Liquidez concentrada (v3)",     active: false },
  { label: "Liquidez tradicional AMM",      active: false },
  { label: "Fee dinâmica por pool",         active: false },
  { label: "Programmable incentive compounding",         active: false },
  { label: "Best-price detection",          active: true  },
  { label: "Gas estimation",               active: false },
  { label: "Simulação pré-swap",            active: true  },
  { label: "Swap com fallback liquidity",   active: false },
];

export default function LiquiditySection() {
  return (
    <section className="relative py-14 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zs-violet/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Text + capability chips */}
          <div>
            <div className="section-label mb-4">02 — Liquidity Layer</div>
            <h2 className="font-syne font-bold text-[clamp(1.95rem,5.1vw,3.9rem)] leading-[0.98] tracking-[-0.015em] text-zs-text mb-5">
              The Smart Routing{" "}
              <span className="text-gradient-cyan">Engine</span>
            </h2>
            <p className="max-w-[66ch] font-dm text-[clamp(0.96rem,1.7vw,1.12rem)] text-zs-muted/95 leading-relaxed sm:leading-[1.75] mb-7 sm:mb-8">
              Z-SWAP evaluates all available liquidity paths across internal pools and external aggregations to deliver optimal execution prices with minimum slippage and MEV protection.
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 sm:p-3 rounded-lg bg-zs-bg-3/45 border border-zs-faint/35">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cap.active ? "bg-zs-cyan" : "bg-zs-faint"}`} />
                  <span className={`font-mono text-[11px] sm:text-xs leading-snug ${cap.active ? "text-zs-text/88" : "text-zs-muted/65"}`}>
                    {cap.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* B1 — Liquidity Flow Animation */}
          <div className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8 border border-zs-border w-full min-w-0">
            <div className="flex items-center justify-between mb-4 gap-2">
              <div className="font-mono text-[10px] sm:text-[11px] text-zs-muted tracking-[0.12em] uppercase">
                Liquidity Flow — Live Routing
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-zs-cyan pulse-dot" />
                <span className="font-mono text-[10px] text-zs-cyan/70">ACTIVE</span>
              </div>
            </div>

            <LiquidityFlowAnimation />

            {/* Execution stats row */}
            <div className="mt-4 pt-4 border-t border-zs-border grid grid-cols-3 gap-2">
              {[
                { label: "Avg Slippage", value: "0.04%",  color: "text-zs-green" },
                { label: "Routes",       value: "14",      color: "text-zs-cyan"  },
                { label: "MEV Shield",   value: "Active",  color: "text-zs-gold"  },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className={`font-syne font-bold text-sm sm:text-base ${s.color}`}>{s.value}</div>
                  <div className="font-mono text-[9px] sm:text-[10px] text-zs-muted mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
