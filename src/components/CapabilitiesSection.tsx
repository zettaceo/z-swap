"use client";

import { useState } from "react";

const layers = [
  {
    id: "swap",
    tag: "Layer 01",
    title: "Swap & Liquidity",
    tagColor: "cyan",
    features: [
      "Instant token swaps",
      "Multi-hop routing",
      "Cross-chain swaps",
      "Smart routing engine",
      "Liquidity pool creation",
      "Add / remove liquidity",
      "Concentrated liquidity pools",
      "Stable & volatile pools",
      "LP reward distribution",
      "Liquidity aggregation",
      "Best price routing",
      "Gas estimation",
      "Swap simulation",
      "Liquidity impact preview",
    ],
    desc: "The foundation of Z-SWAP. A full-featured DEX engine with advanced routing, multi-pool support, and real-time execution simulation before any transaction is committed.",
  },
  {
    id: "analytics",
    tag: "Layer 02",
    title: "Market Intelligence",
    tagColor: "violet",
    features: [
      "Real-time charts",
      "Liquidity monitoring",
      "Market depth visualization",
      "Historical trade data",
      "Price alerts",
      "Liquidity alerts",
      "Whale activity monitoring",
      "New token tracking",
      "Large swap detection",
      "Liquidity impact simulation",
    ],
    desc: "Professional-grade market intelligence tooling. Monitor whale movements, track liquidity changes in real time, and set custom alerts for market conditions that matter.",
  },
  {
    id: "ai",
    tag: "Layer 03",
    title: "ZION AI",
    tagColor: "gold",
    features: [
      "Pool analysis",
      "Route optimization suggestions",
      "Market opportunity detection",
      "Strategy backtesting",
      "Scenario simulations",
      "Token risk analysis",
      "Scam detection",
      "Slippage optimization",
      "Liquidity allocation suggestions",
      "AI pattern recognition (roadmap)",
      "AI-driven market intel (roadmap)",
    ],
    desc: "ZION AI assists users with market analysis and advisory functions. It never executes transactions without explicit user authorization — purely assistive intelligence.",
  },
  {
    id: "security",
    tag: "Layer 04",
    title: "Security & Risk",
    tagColor: "red",
    features: [
      "Honeypot detection",
      "Smart contract verification",
      "Token tax detection",
      "Rug pull indicators",
      "Liquidity lock analysis",
      "Sell simulation",
      "Risk score system",
    ],
    desc: "Comprehensive on-chain security analysis protects users at every step. Every token interaction passes through multi-layer risk assessment before execution.",
  },
  {
    id: "token",
    tag: "Layer 05",
    title: "Token Creation",
    tagColor: "cyan",
    features: [
      "Token deployment",
      "Supply configuration",
      "Tax configuration",
      "Liquidity initialization",
      "LP lock configuration",
      "Automated deployment assistance",
    ],
    desc: "Integrated token creation suite connected to the ZETTA Builder. Deploy and initialize tokens with automatic liquidity setup and LP locking from a single interface.",
  },
  {
    id: "governance",
    tag: "Layer 06",
    title: "Governance",
    tagColor: "violet",
    features: [
      "Proposal creation",
      "Community voting",
      "Governance parameter adjustments",
      "Delegated voting",
      "Snapshot governance support",
    ],
    desc: "On-chain governance infrastructure for protocol evolution. Parameter adjustments, fee structures, and protocol upgrades are managed through decentralized governance.",
  },
];

const colorMap: Record<string, string> = {
  cyan: "text-zs-cyan border-zs-cyan/30 bg-zs-cyan/8",
  violet: "text-zs-violet-bright border-zs-violet/30 bg-zs-violet/8",
  gold: "text-zs-gold border-zs-gold/30 bg-zs-gold/8",
  red: "text-zs-red border-zs-red/30 bg-zs-red/8",
};

const dotColor: Record<string, string> = {
  cyan: "bg-zs-cyan",
  violet: "bg-zs-violet-bright",
  gold: "bg-zs-gold",
  red: "bg-zs-red",
};

export default function CapabilitiesSection() {
  const [active, setActive] = useState("swap");
  const activeLayer = layers.find((l) => l.id === active)!;

  return (
    <section id="capabilities" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="section-label mb-4">04 — Core Capabilities</div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-end lg:justify-between mb-14">
          <h2 className="font-syne font-bold text-[clamp(1.8rem,3.5vw,3rem)] leading-tight text-zs-text">
            132 Functions Across{" "}
            <span className="text-gradient-cyan">7 Protocol Layers</span>
          </h2>
          <p className="font-dm text-zs-muted text-sm max-w-sm leading-relaxed">
            Each layer is independently operable and integrates with the full ZETTA ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-6">
          {/* Layer tabs */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {layers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActive(layer.id)}
                className={`flex-shrink-0 text-left px-4 py-3 rounded-xl border transition-all duration-200 ${
                  active === layer.id
                    ? `glass-card border-zs-border ${colorMap[layer.tagColor].split(" ")[0]}`
                    : "border-transparent text-zs-muted hover:text-zs-text"
                }`}
              >
                <div className={`font-mono text-[10px] tracking-widest uppercase mb-1 ${
                  active === layer.id ? colorMap[layer.tagColor].split(" ")[0] : "text-zs-faint"
                }`}>
                  {layer.tag}
                </div>
                <div className="font-syne font-semibold text-sm whitespace-nowrap">{layer.title}</div>
              </button>
            ))}
          </div>

          {/* Active layer content */}
          <div className="glass-card rounded-2xl border border-zs-border p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className={`tag-badge px-3 py-1 rounded-full border ${colorMap[activeLayer.tagColor]} mb-3 inline-block`}>
                  {activeLayer.tag}
                </span>
                <h3 className="font-syne font-bold text-2xl text-zs-text">{activeLayer.title} Layer</h3>
              </div>
              <div className="font-mono text-xs text-zs-muted border border-zs-border rounded-lg px-3 py-1.5">
                {activeLayer.features.length} functions
              </div>
            </div>

            <p className="font-dm text-zs-muted leading-relaxed mb-8 text-sm">
              {activeLayer.desc}
            </p>

            <div className="grid sm:grid-cols-2 gap-2">
              {activeLayer.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-zs-bg-3/50 border border-zs-faint/50">
                  <div className={`w-1 h-1 rounded-full flex-shrink-0 ${dotColor[activeLayer.tagColor]}`} />
                  <span className="font-mono text-xs text-zs-text/80 tracking-wide">{feat}</span>
                  {feat.includes("roadmap") && (
                    <span className="ml-auto font-mono text-[9px] text-zs-muted border border-zs-faint rounded px-1.5">
                      ROADMAP
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
