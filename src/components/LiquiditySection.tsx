"use client";

import LiquidityFlowAnimation from "./LiquidityFlowAnimation";

const capabilities = [
  { label: "Swap instantâneo multichain",  active: true  },
  { label: "Swap cross-chain nativo",       active: true  },
  { label: "Split automático de ordens",    active: true  },
  { label: "Swap protegido contra MEV",     active: true  },
  { label: "Liquidez concentrada (v3)",     active: false },
  { label: "Liquidez tradicional AMM",      active: false },
  { label: "Fee dinâmica por pool",         active: false },
  { label: "Auto-compound rewards",         active: false },
  { label: "Best-price detection",          active: true  },
  { label: "Gas estimation",               active: false },
  { label: "Simulação pré-swap",            active: true  },
  { label: "Swap com fallback liquidity",   active: false },
];

export default function LiquiditySection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zs-violet/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Text + capability chips */}
          <div>
            <div className="section-label mb-3">02 — Liquidity Layer</div>
            <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-zs-text mb-4">
              The Smart Routing{" "}
              <span className="text-gradient-cyan">Engine</span>
            </h2>
            <p className="font-dm text-sm sm:text-base text-zs-muted leading-relaxed mb-6 sm:mb-8">
              Z-SWAP evaluates all available liquidity paths across internal pools and external aggregations to deliver optimal execution prices with minimum slippage and MEV protection.
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-zs-bg-3/40 border border-zs-faint/30">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cap.active ? "bg-zs-cyan" : "bg-zs-faint"}`} />
                  <span className={`font-mono text-[10px] sm:text-xs leading-snug ${cap.active ? "text-zs-text/85" : "text-zs-muted/60"}`}>
                    {cap.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* B1 — Liquidity Flow Animation */}
          <div className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8 border border-zs-border w-full min-w-0">
            <div className="flex items-center justify-between mb-4 gap-2">
              <div className="font-mono text-[9px] sm:text-[10px] text-zs-muted tracking-widest uppercase">
                Liquidity Flow — Live Routing
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-zs-cyan pulse-dot" />
                <span className="font-mono text-[9px] text-zs-cyan/70">ACTIVE</span>
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
                  <div className={`font-syne font-bold text-xs sm:text-sm ${s.color}`}>{s.value}</div>
                  <div className="font-mono text-[8px] sm:text-[9px] text-zs-muted mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
