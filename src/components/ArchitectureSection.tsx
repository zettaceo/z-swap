"use client";

import { useLang } from "@/lib/i18n";
import MultiChainRouting from "./MultiChainRouting";

export default function ArchitectureSection() {
  const { t } = useLang();

  const layerCards = ([
    { layer: "UI Layer",      desc: "Multi-platform access points", color: "cyan"   as const },
    { layer: "Routing",       desc: "Smart path optimization",      color: "violet" as const },
    { layer: "Liquidity",     desc: "Unified pool management",      color: "cyan"   as const },
    { layer: "Intelligence",  desc: "AI & security analysis",       color: "gold"   as const },
    { layer: "Settlement",    desc: "Multi-chain execution",        color: "green"  as const },
  ]);

  const colorClass: Record<"cyan"|"violet"|"gold"|"green", string> = {
    cyan:   "text-zs-cyan",
    violet: "text-zs-violet-bright",
    gold:   "text-zs-gold",
    green:  "text-zs-green",
  };

  return (
    <section id="architecture" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="section-label mb-3">{t.architecture.label}</div>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-zs-text mb-4">
            {t.architecture.title1}{" "}
            <span className="text-gradient-cyan">{t.architecture.title2}</span>
          </h2>
          <p className="font-dm text-sm sm:text-base text-zs-muted leading-relaxed">{t.architecture.sub}</p>
        </div>

        {/* Architecture diagram — viewBox keeps it always correct aspect ratio */}
        <div className="glass-card rounded-2xl p-3 sm:p-5 lg:p-6 border border-zs-border mb-6 sm:mb-8 w-full overflow-hidden">
          <svg viewBox="0 0 800 520" className="w-full" fill="none" aria-hidden="true">
            {/* UI LAYER */}
            <rect x="0" y="0" width="800" height="70" rx="12" fill="rgba(0,232,255,0.04)" stroke="rgba(0,232,255,0.15)" strokeWidth="1"/>
            <text x="14" y="22" fill="rgba(0,232,255,0.45)" fontSize="10" fontFamily="monospace" letterSpacing="2">USER INTERFACE LAYER</text>
            {(["Z-SWAP Web App","Mobile Interface","API Access","ZETTA Wallet"] as const).map((item, i) => (
              <g key={i}>
                <rect x={14+i*196} y="30" width="180" height="30" rx="6" fill="rgba(0,232,255,0.08)" stroke="rgba(0,232,255,0.25)" strokeWidth="1"/>
                <text x={104+i*196} y="50" textAnchor="middle" fill="rgba(0,232,255,0.9)" fontSize="11" fontFamily="monospace" fontWeight="500">{item}</text>
              </g>
            ))}
            {[106,302,498,694].map((x,i) => (
              <g key={i}><line x1={x} y1="60" x2={x} y2="84" stroke="rgba(0,232,255,0.2)" strokeWidth="1" strokeDasharray="3 2"/><polygon points={`${x-3},83 ${x+3},83 ${x},89`} fill="rgba(0,232,255,0.35)"/></g>
            ))}

            {/* ROUTING */}
            <rect x="0" y="90" width="800" height="70" rx="12" fill="rgba(124,58,237,0.07)" stroke="rgba(124,58,237,0.25)" strokeWidth="1"/>
            <text x="14" y="110" fill="rgba(159,95,255,0.45)" fontSize="10" fontFamily="monospace" letterSpacing="2">SMART ROUTING ENGINE</text>
            {(["Path Analysis","Price Comparison","Gas Optimizer","Slippage Control"] as const).map((item, i) => (
              <g key={i}>
                <rect x={14+i*196} y="118" width="180" height="30" rx="6" fill="rgba(124,58,237,0.1)" stroke="rgba(124,58,237,0.3)" strokeWidth="1"/>
                <text x={104+i*196} y="138" textAnchor="middle" fill="rgba(159,95,255,0.9)" fontSize="11" fontFamily="monospace" fontWeight="500">{item}</text>
              </g>
            ))}
            {[106,302,498,694].map((x,i) => (
              <g key={i}><line x1={x} y1="160" x2={x} y2="184" stroke="rgba(124,58,237,0.2)" strokeWidth="1" strokeDasharray="3 2"/><polygon points={`${x-3},183 ${x+3},183 ${x},189`} fill="rgba(124,58,237,0.35)"/></g>
            ))}

            {/* LIQUIDITY */}
            <rect x="0" y="190" width="800" height="70" rx="12" fill="rgba(0,232,255,0.04)" stroke="rgba(0,232,255,0.12)" strokeWidth="1"/>
            <text x="14" y="210" fill="rgba(0,232,255,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="2">LIQUIDITY LAYER</text>
            {(["Stable Pools","Volatile Pools","Concentrated LP","External DEXs"] as const).map((item, i) => (
              <g key={i}>
                <rect x={14+i*196} y="218" width="180" height="30" rx="6" fill="rgba(0,232,255,0.07)" stroke="rgba(0,232,255,0.18)" strokeWidth="1"/>
                <text x={104+i*196} y="238" textAnchor="middle" fill="rgba(0,232,255,0.85)" fontSize="11" fontFamily="monospace" fontWeight="500">{item}</text>
              </g>
            ))}
            {[200,600].map((x) => (<g key={x}><line x1={x} y1="260" x2={x} y2="284" stroke="rgba(0,232,255,0.15)" strokeWidth="1" strokeDasharray="3 2"/><polygon points={`${x-3},283 ${x+3},283 ${x},289`} fill="rgba(0,232,255,0.25)"/></g>))}

            {/* AI + SECURITY */}
            <rect x="0" y="290" width="392" height="100" rx="12" fill="rgba(245,166,35,0.05)" stroke="rgba(245,166,35,0.22)" strokeWidth="1"/>
            <text x="14" y="310" fill="rgba(245,166,35,0.55)" fontSize="10" fontFamily="monospace" letterSpacing="2">ZION AI LAYER</text>
            {([["Risk Analysis","Route Optimizer"],["Scam Detector","Market Intel"]] as const).map((row, ri) =>
              row.map((item, ci) => (
                <g key={`${ri}-${ci}`}>
                  <rect x={14+ci*190} y={318+ri*36} width="176" height="26" rx="6" fill="rgba(245,166,35,0.09)" stroke="rgba(245,166,35,0.22)" strokeWidth="1"/>
                  <text x={102+ci*190} y={335+ri*36} textAnchor="middle" fill="rgba(245,166,35,0.9)" fontSize="11" fontFamily="monospace" fontWeight="500">{item}</text>
                </g>
              ))
            )}

            <rect x="408" y="290" width="392" height="100" rx="12" fill="rgba(255,59,92,0.05)" stroke="rgba(255,59,92,0.18)" strokeWidth="1"/>
            <text x="422" y="310" fill="rgba(255,59,92,0.55)" fontSize="10" fontFamily="monospace" letterSpacing="2">SECURITY LAYER</text>
            {([["Honeypot Detect","Contract Verify"],["Rug Pull Signal","Risk Score"]] as const).map((row, ri) =>
              row.map((item, ci) => (
                <g key={`${ri}-${ci}`}>
                  <rect x={422+ci*190} y={318+ri*36} width="176" height="26" rx="6" fill="rgba(255,59,92,0.07)" stroke="rgba(255,59,92,0.18)" strokeWidth="1"/>
                  <text x={510+ci*190} y={335+ri*36} textAnchor="middle" fill="rgba(255,92,120,0.9)" fontSize="11" fontFamily="monospace" fontWeight="500">{item}</text>
                </g>
              ))
            )}

            {[200,600].map((x) => (<g key={x}><line x1={x} y1="390" x2={x} y2="412" stroke="rgba(0,232,255,0.15)" strokeWidth="1" strokeDasharray="3 2"/><polygon points={`${x-3},411 ${x+3},411 ${x},417`} fill="rgba(0,232,255,0.2)"/></g>))}

            {/* SETTLEMENT */}
            <rect x="0" y="418" width="800" height="70" rx="12" fill="rgba(0,224,135,0.05)" stroke="rgba(0,224,135,0.18)" strokeWidth="1"/>
            <text x="14" y="438" fill="rgba(0,224,135,0.45)" fontSize="10" fontFamily="monospace" letterSpacing="2">MULTI-CHAIN SETTLEMENT LAYER</text>
            {(["ZETTA Chain","EVM Networks","Cross-Chain Bridge","Z-PAY Settlement"] as const).map((item, i) => (
              <g key={i}>
                <rect x={14+i*196} y="446" width="180" height="30" rx="6" fill="rgba(0,224,135,0.07)" stroke="rgba(0,224,135,0.18)" strokeWidth="1"/>
                <text x={104+i*196} y="466" textAnchor="middle" fill="rgba(0,224,135,0.88)" fontSize="11" fontFamily="monospace" fontWeight="500">{item}</text>
              </g>
            ))}

            {/* Animated flow dots */}
            <circle cx="400" cy="30" r="3" fill="rgba(0,232,255,0.9)">
              <animate attributeName="cy" values="30;490;30" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.9;0.1;0.9" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="490" r="2" fill="rgba(124,58,237,0.8)">
              <animate attributeName="cy" values="490;30;490" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8;0.1;0.8" dur="5s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        {/* Layer summary cards — 2 cols on mobile, 5 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-6 sm:mb-8">
          {layerCards.map((item, i) => (
            <div key={i} className="glass-card p-3 sm:p-4 rounded-xl border border-zs-border text-center">
              <div className={`font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-1.5 font-bold ${colorClass[item.color]}`}>
                {item.layer}
              </div>
              <div className="font-dm text-[10px] sm:text-xs text-zs-text/70 leading-snug">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* B2 — Multi-Chain Routing Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="glass-card rounded-2xl border border-zs-border p-4 sm:p-6 min-w-0">
            <div className="flex items-center justify-between mb-4 gap-2">
              <div className="font-mono text-[9px] sm:text-[10px] text-zs-muted tracking-widest uppercase">
                Multi-Chain Routing — Live
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-zs-green pulse-dot" />
                <span className="font-mono text-[9px] text-zs-green/70">ROUTING</span>
              </div>
            </div>
            <MultiChainRouting />
          </div>

          <div className="flex flex-col gap-3 min-w-0">
            <div className="section-label mb-1">Cross-Chain Settlement</div>
            <h3 className="font-syne font-bold text-lg sm:text-xl lg:text-2xl text-zs-text leading-tight">
              One Router.{" "}
              <span className="text-gradient-cyan">Every Chain.</span>
            </h3>
            <p className="font-dm text-sm text-zs-muted leading-relaxed">
              Z-SWAP routes all swaps through a single unified settlement engine across supported networks. Packets flow from the source chain through the Z-SWAP Router and settle on the destination chain in a single atomic operation.
            </p>
            {[
              { label: "Unified liquidity",  desc: "Cross-chain pools treated as single liquidity surface." },
              { label: "Atomic settlement",  desc: "No partial fills — transaction completes end-to-end." },
              { label: "Native finality",    desc: "ZETTA Chain provides primary settlement guarantees."  },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-3 rounded-xl bg-zs-bg-3/50 border border-zs-faint/30">
                <div className="w-1.5 h-1.5 rounded-full bg-zs-cyan flex-shrink-0 mt-1.5" />
                <div>
                  <div className="font-syne font-semibold text-xs sm:text-sm text-zs-text mb-0.5">{item.label}</div>
                  <div className="font-dm text-[11px] sm:text-xs text-zs-muted/80 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
