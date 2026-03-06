"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

const terminalLines = [
  { type: "cmd",     text: "$ zion analyze --pool ETH/USDC --depth full" },
  { type: "info",    text: "→ Connecting to liquidity oracle..." },
  { type: "info",    text: "→ Fetching pool state from 14 sources" },
  { type: "success", text: "✓ Pool TVL: $142,830,200 (+2.3% 24h)" },
  { type: "success", text: "✓ Pool utilization: 73.2%  |  24h fee vol: $892K" },
  { type: "warn",    text: "⚠ Liquidity concentration above threshold" },
  { type: "info",    text: "→ Running slippage simulation: 500 ETH..." },
  { type: "data",    text: "  Impact: 0.42%  |  Output: 1,248,320 USDC" },
  { type: "success", text: "✓ Contract verified — no malicious patterns" },
  { type: "success", text: "✓ LP lock confirmed — 18 months remaining" },
  { type: "data",    text: "  Risk Score: 12/100  [ LOW RISK ]" },
  { type: "info",    text: "→ Route optimization:" },
  { type: "data",    text: "  Direct 60% | Multi-hop 40% (saves ~$18 gas)" },
  { type: "success", text: "✓ Analysis complete. Awaiting user decision." },
  { type: "note",    text: "  ZION AI is advisory only. Execute manually." },
];

const capabilities = [
  { title: "Pool Analysis",        desc: "Deep inspection of pools — TVL, composition, fee tiers, and performance metrics." },
  { title: "Route Optimization",   desc: "Evaluates multiple execution paths and recommends the most efficient route." },
  { title: "Scam & Rug Detection", desc: "Pattern-matching against honeypot mechanics, fake marketing, and rug indicators." },
  { title: "Strategy Backtesting", desc: "Simulate historical execution of liquidity strategies against real on-chain data." },
  { title: "Scenario Simulation",  desc: "Model hypothetical market conditions and evaluate outcomes before committing." },
  { title: "Timing Intelligence",  desc: "AI-powered entry and exit timing suggestions based on continuous market learning." },
];

const lineColor: Record<string, string> = {
  cmd:     "text-zs-cyan",
  info:    "text-zs-muted",
  success: "text-zs-green",
  warn:    "text-zs-gold",
  data:    "text-zs-text/65",
  note:    "text-zs-red/65",
};

export default function AILayerSection() {
  const { t } = useLang();
  // prefers-reduced-motion: show all lines immediately, skip typewriter animation
  const prefersReduced = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  const [visible, setVisible] = useState(prefersReduced ? terminalLines.length : 0);

  useEffect(() => {
    // If reduced motion, all lines are already shown — no timer needed
    if (prefersReduced) return;
    if (visible < terminalLines.length) {
      const timer = setTimeout(() => setVisible((v) => v + 1), 170);
      return () => clearTimeout(timer);
    }
  }, [visible, prefersReduced]);

  return (
    <section id="ai-layer" className="relative py-14 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zs-gold/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zs-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="section-label mb-4">{t.ai.label}</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-end gap-3 mb-9 sm:mb-12">
          <h2 className="font-syne font-bold text-[clamp(1.95rem,5vw,3.9rem)] leading-[0.98] tracking-[-0.015em] text-zs-text">
            {t.ai.title1}{" "}
            <span className="text-gradient-gold">{t.ai.title2}</span>
          </h2>
          <p className="font-dm text-[clamp(0.96rem,1.65vw,1.1rem)] text-zs-muted/95 leading-relaxed sm:leading-[1.75] max-w-xl">
            {t.ai.sub}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* Terminal */}
          <div className="glass-card rounded-2xl border border-zs-border overflow-hidden min-w-0">
            <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-zs-border bg-zs-bg-3/50">
              <div className="w-2.5 h-2.5 rounded-full bg-zs-red/60" aria-hidden="true" />
              <div className="w-2.5 h-2.5 rounded-full bg-zs-gold/60" aria-hidden="true" />
              <div className="w-2.5 h-2.5 rounded-full bg-zs-green/60" aria-hidden="true" />
              <span className="ml-2 font-mono text-[10px] sm:text-[11px] text-zs-muted truncate tracking-[0.08em]">
                ZION AI — Analysis Terminal
              </span>
            </div>
            <div
              className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-[1.7] h-64 sm:h-80 lg:h-96 overflow-y-auto"
              role="log"
              aria-label="ZION AI terminal output"
              aria-live="polite"
            >
              {terminalLines.slice(0, visible).map((line, i) => (
                <div key={i} className={`${lineColor[line.type]} break-words`}>{line.text}</div>
              ))}
              {visible < terminalLines.length && (
                <span className="inline-block w-1.5 h-3.5 bg-zs-cyan/70 terminal-cursor" aria-hidden="true" />
              )}
            </div>
          </div>

          {/* Capability cards + advisory note */}
          <div className="flex flex-col gap-2.5 sm:gap-3 min-w-0">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-3.5 sm:p-4 glass-card rounded-xl border border-zs-border hover:border-zs-gold/25 transition-colors duration-300 group">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-zs-gold/10 border border-zs-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                    <span className="font-mono text-[9px] sm:text-[10px] text-zs-gold/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-syne font-semibold text-sm sm:text-base text-zs-text mb-1 group-hover:text-zs-gold transition-colors">
                      {cap.title}
                    </h4>
                    <p className="font-dm text-sm text-zs-muted/85 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Advisory disclaimer */}
            <div className="p-3.5 sm:p-4 rounded-xl border border-zs-gold/20 bg-zs-gold/[0.04]">
              <div className="font-mono text-[10px] sm:text-[11px] text-zs-gold tracking-[0.12em] uppercase mb-1.5">
                {t.ai.advisory}
              </div>
              <p className="font-dm text-sm text-zs-muted/85 leading-relaxed">
                {t.ai.advisoryText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
