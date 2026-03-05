"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

const terminalLines = [
  { type: "cmd",     text: "$ zion analyze --pool ETH/USDC --depth full" },
  { type: "info",    text: "→ Connecting to liquidity oracle..." },
  { type: "info",    text: "→ Fetching pool state from 14 sources" },
  { type: "success", text: "✓ Pool TVL: $142,830,200 (+2.3% 24h)" },
  { type: "success", text: "✓ Pool utilization: 73.2%  |  24h fee volume: $892K" },
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

export default function AILayerSection() {
  const [visibleLines, setVisibleLines] = useState(0);
  const { t } = useLang();

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 170);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  const lineColor: Record<string, string> = {
    cmd: "text-zs-cyan", info: "text-zs-muted", success: "text-zs-green",
    warn: "text-zs-gold", data: "text-zs-text/65", note: "text-zs-red/65",
  };

  const capabilities = [
    { title: "Pool Analysis", desc: "Deep inspection of pools — TVL, composition, fee tiers, and performance metrics." },
    { title: "Route Optimization", desc: "Evaluates multiple execution paths and recommends the most efficient route." },
    { title: "Scam & Rug Detection", desc: "Pattern-matching against honeypot mechanics, fake marketing, and rug indicators." },
    { title: "Strategy Backtesting", desc: "Simulate historical execution of liquidity strategies against real on-chain data." },
    { title: "Scenario Simulation", desc: "Model hypothetical market conditions and evaluate execution outcomes before committing." },
    { title: "Timing Intelligence", desc: "AI-powered entry and exit timing suggestions based on continuous market learning." },
  ];

  return (
    <section id="ai-layer" className="relative py-10 sm:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zs-gold/2 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zs-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-label mb-3">{t.ai.label}</div>
        <div className="grid lg:grid-cols-2 gap-4 lg:items-end mb-6 sm:mb-10">
          <h2 className="font-syne font-bold text-[clamp(1.6rem,3.5vw,3rem)] leading-tight text-zs-text">
            {t.ai.title1}{" "}<span className="text-gradient-gold">{t.ai.title2}</span>
          </h2>
          <p className="font-dm text-zs-muted text-sm leading-relaxed max-w-md">{t.ai.sub}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Terminal */}
          <div className="glass-card rounded-2xl border border-zs-border overflow-hidden">
            <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-zs-border bg-zs-bg-3/50">
              <div className="w-2.5 h-2.5 rounded-full bg-zs-red/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-zs-gold/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-zs-green/60" />
              <span className="ml-2 font-mono text-[10px] sm:text-xs text-zs-muted">ZION AI — Analysis Terminal</span>
            </div>
            <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-6 min-h-[280px] sm:min-h-[340px]">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <div key={i} className={lineColor[line.type]}>{line.text}</div>
              ))}
              {visibleLines < terminalLines.length && (
                <span className="inline-block w-1.5 h-3.5 bg-zs-cyan/70 terminal-cursor" />
              )}
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-2.5 sm:space-y-3">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-4 sm:p-5 glass-card rounded-xl border border-zs-border hover:border-zs-gold/25 transition-colors duration-300 group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-zs-gold/10 border border-zs-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-mono text-[10px] text-zs-gold/70">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h4 className="font-syne font-semibold text-xs sm:text-sm text-zs-text mb-1 group-hover:text-zs-gold transition-colors">{cap.title}</h4>
                    <p className="font-dm text-xs text-zs-muted/80 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-3 p-4 rounded-xl border border-zs-gold/20 bg-zs-gold/5">
              <div className="font-mono text-[10px] text-zs-gold tracking-widest uppercase mb-1.5">{t.ai.advisory}</div>
              <p className="font-dm text-xs text-zs-muted/80 leading-relaxed">{t.ai.advisoryText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
