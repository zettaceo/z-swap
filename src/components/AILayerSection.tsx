"use client";

import { useEffect, useState } from "react";

const terminalLines = [
  { type: "cmd", text: "$ zion analyze --pool ETH/USDC --depth full" },
  { type: "info", text: "→ Connecting to liquidity oracle..." },
  { type: "info", text: "→ Fetching pool state from 14 sources" },
  { type: "success", text: "✓ Pool TVL: $142,830,200 (+2.3% 24h)" },
  { type: "success", text: "✓ Current APR: 8.74% (estimated)" },
  { type: "warn", text: "⚠ Detected: Liquidity concentration above threshold" },
  { type: "info", text: "→ Running slippage simulation: 500 ETH swap..." },
  { type: "data", text: "  Price impact: 0.42%  |  Est. output: 1,248,320 USDC" },
  { type: "info", text: "→ ZION risk assessment:" },
  { type: "success", text: "✓ Contract verified — no malicious patterns detected" },
  { type: "success", text: "✓ LP lock confirmed — 18 months remaining" },
  { type: "data", text: "  Risk Score: 12/100  [ LOW RISK ]" },
  { type: "info", text: "→ Route optimization suggestion:" },
  { type: "data", text: "  Direct swap 60% | Multi-hop 40% (saves ~$18 gas)" },
  { type: "success", text: "✓ Analysis complete. Awaiting user decision." },
  { type: "note", text: "  Note: ZION AI is advisory only. Execute manually." },
];

export default function AILayerSection() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  const lineColor: Record<string, string> = {
    cmd: "text-zs-cyan",
    info: "text-zs-muted",
    success: "text-zs-green",
    warn: "text-zs-gold",
    data: "text-zs-text/70",
    note: "text-zs-red/70",
  };

  const capabilities = [
    {
      title: "Pool Analysis",
      desc: "Deep inspection of liquidity pools — TVL, composition, fee tiers, and performance metrics.",
    },
    {
      title: "Route Optimization",
      desc: "Suggestion engine evaluates multiple execution paths and recommends the most efficient route.",
    },
    {
      title: "Scam Detection",
      desc: "Pattern-matching against known malicious contract signatures, honeypot mechanics, and rug indicators.",
    },
    {
      title: "Strategy Backtesting",
      desc: "Simulate historical execution of liquidity strategies against real on-chain data.",
    },
    {
      title: "Scenario Simulation",
      desc: "Model hypothetical market conditions and evaluate execution outcomes before committing.",
    },
    {
      title: "Market Opportunity",
      desc: "Identifies statistical divergences in price, liquidity, and volume that may be actionable.",
    },
  ];

  return (
    <section id="ai-layer" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zs-gold/3 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zs-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="section-label mb-4">05 — Intelligence Layer</div>
        <div className="grid lg:grid-cols-2 gap-4 lg:items-end mb-16">
          <h2 className="font-syne font-bold text-[clamp(1.8rem,3.5vw,3rem)] leading-tight text-zs-text">
            ZION AI —{" "}
            <span className="text-gradient-gold">Advisory Intelligence</span>
          </h2>
          <p className="font-dm text-zs-muted leading-relaxed text-sm max-w-md">
            ZION AI is the analytical intelligence layer of Z-SWAP. It processes on-chain data,
            performs risk analysis, and provides informed suggestions — but never executes
            any transaction without explicit user authorization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Terminal */}
          <div className="glass-card rounded-2xl border border-zs-border overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-zs-border bg-zs-bg-3/50">
              <div className="w-3 h-3 rounded-full bg-zs-red/60" />
              <div className="w-3 h-3 rounded-full bg-zs-gold/60" />
              <div className="w-3 h-3 rounded-full bg-zs-green/60" />
              <span className="ml-3 font-mono text-xs text-zs-muted">ZION AI — Analysis Terminal v1.0</span>
            </div>
            {/* Terminal body */}
            <div className="p-5 font-mono text-xs leading-6 min-h-[380px]">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <div key={i} className={lineColor[line.type]}>
                  {line.text}
                </div>
              ))}
              {visibleLines < terminalLines.length && (
                <span className="inline-block w-2 h-3.5 bg-zs-cyan/70 terminal-cursor" />
              )}
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-5 glass-card rounded-xl border border-zs-border hover:border-zs-gold/30 transition-colors duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-zs-gold/10 border border-zs-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-mono text-xs text-zs-gold/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-syne font-semibold text-sm text-zs-text mb-1 group-hover:text-zs-gold transition-colors">
                      {cap.title}
                    </h4>
                    <p className="font-dm text-xs text-zs-muted leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Advisory notice */}
            <div className="mt-4 p-4 rounded-xl border border-zs-gold/20 bg-zs-gold/5">
              <div className="font-mono text-xs text-zs-gold tracking-widest uppercase mb-1">
                Advisory Protocol
              </div>
              <p className="font-dm text-xs text-zs-muted leading-relaxed">
                ZION AI operates in advisory mode exclusively. All suggestions require
                manual user review and confirmation. No automated execution occurs without
                explicit user action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
