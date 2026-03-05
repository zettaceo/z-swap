"use client";

import { useLang } from "@/lib/i18n";

const integrations = [
  { name: "ZETTA Wallet / OBELISK-Z", type: "Asset Management", desc: "Native wallet integration for direct in-wallet swapping, LP management, and multi-sig without external connections.", color: "violet" },
  { name: "Z-Finance", type: "DeFi Layer", desc: "Lending and borrowing protocol that shares liquidity data and risk metrics with Z-SWAP in real time.", color: "violet" },
  { name: "Z-PAD", type: "Launchpad", desc: "New token launches on Z-PAD automatically initialize liquidity pools on Z-SWAP with LP lock.", color: "gold" },
  { name: "ZETTA Chain", type: "Settlement Layer", desc: "Primary settlement network for Z-SWAP transactions with native finality guarantees.", color: "gold" },
  { name: "ZION AI", type: "Intelligence Layer", desc: "AI analysis engine providing risk, routing, and market intelligence across all ZETTA products.", color: "cyan" },
  { name: "Z-PAY", type: "Payment & Fiat", desc: "Z-SWAP powers all fiat-to-crypto and crypto-to-fiat conversions for Z-PAY. Every Z-PAY settlement routes through Z-SWAP's liquidity layer.", color: "green", highlight: true },
  { name: "Z-Finance", type: "Financial Infrastructure", desc: "Institutional-grade financial operations layer — fiat custody, compliance infrastructure, and regulated on-ramp/off-ramp flows.", color: "cyan" },
  { name: "Z-Assets", type: "Asset Protocol", desc: "Protocol treasury and asset management infrastructure. Connects to Z-SWAP's liquidity layer for operational pool mechanics.", color: "violet" },
];

const colorMap: Record<string, { dot: string; text: string; border: string; bg: string }> = {
  cyan:   { dot: "bg-zs-cyan",           text: "text-zs-cyan",           border: "border-zs-cyan/25",   bg: "bg-zs-cyan/8"   },
  violet: { dot: "bg-zs-violet-bright",  text: "text-zs-violet-bright",  border: "border-zs-violet/25", bg: "bg-zs-violet/8" },
  gold:   { dot: "bg-zs-gold",           text: "text-zs-gold",           border: "border-zs-gold/25",   bg: "bg-zs-gold/8"   },
  green:  { dot: "bg-zs-green",          text: "text-zs-green",          border: "border-zs-green/35",  bg: "bg-zs-green/8"  },
};

// Ecosystem nodes for the epic SVG diagram
const nodes = [
  { id: "zswap",   label: "Z-SWAP",     sub: "CORE",         cx: 50,  cy: 50,  r: 38,  color: "#00E8FF",  primary: true  },
  { id: "zion",    label: "ZION AI",    sub: "Intelligence", cx: 50,  cy: 10,  r: 26,  color: "#F5A623",  primary: false },
  { id: "wallet",  label: "ZETTA",      sub: "Wallet",       cx: 15,  cy: 26,  r: 24,  color: "#9F5FFF",  primary: false },
  { id: "zfinance",label: "Z-Finance",  sub: "DeFi Layer",   cx: 85,  cy: 26,  r: 24,  color: "#9F5FFF",  primary: false },
  { id: "zpay",    label: "Z-PAY",      sub: "Payments",     cx: 86,  cy: 50,  r: 28,  color: "#00E087",  primary: false, highlight: true },
  { id: "zpad",    label: "Z-PAD",      sub: "Launchpad",    cx: 15,  cy: 74,  r: 24,  color: "#F5A623",  primary: false },
  { id: "zchain",  label: "ZETTA",      sub: "Chain",        cx: 50,  cy: 90,  r: 24,  color: "#F5A623",  primary: false },
  { id: "zfin2",   label: "Z-Finance",  sub: "FinInfra",     cx: 85,  cy: 74,  r: 22,  color: "#00E8FF",  primary: false },
  { id: "zearn",   label: "Z-Assets",   sub: "Protocol",     cx: 22,  cy: 50,  r: 20,  color: "#9F5FFF",  primary: false },
];

const edges = [
  ["zswap","zion"],["zswap","wallet"],["zswap","zfinance"],["zswap","zpay"],
  ["zswap","zpad"],["zswap","zchain"],["zswap","zfin2"],["zswap","zearn"],
  ["zpay","zfin2"],["zion","zfinance"],["zpad","zchain"],
];

export default function EcosystemSection() {
  const { t } = useLang();

  return (
    <section id="ecosystem" className="relative py-16 sm:py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-label mb-3">{t.ecosystem.label}</div>
        <div className="grid lg:grid-cols-2 gap-4 lg:items-end mb-10 sm:mb-14">
          <h2 className="font-syne font-bold text-[clamp(1.6rem,3.5vw,3rem)] leading-tight text-zs-text">
            {t.ecosystem.title1}{" "}
            <span className="text-gradient-cyan">{t.ecosystem.title2}</span>
          </h2>
          <p className="font-dm text-zs-muted text-sm leading-relaxed max-w-md">{t.ecosystem.sub}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Integration cards */}
          <div className="grid sm:grid-cols-2 gap-3">
            {integrations.map((item, i) => {
              const c = colorMap[item.color];
              return (
                <div
                  key={i}
                  className={`p-4 sm:p-5 rounded-xl glass-card border transition-colors duration-300 ${
                    item.highlight
                      ? "border-zs-green/40 bg-zs-green/5 hover:bg-zs-green/8"
                      : `${c.border} hover:border-zs-faint`
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot} ${item.highlight ? "pulse-dot" : ""}`} />
                    <span className={`font-mono text-[10px] tracking-widest uppercase font-bold ${c.text}`}>
                      {item.type}
                    </span>
                    {item.highlight && (
                      <span className="ml-auto font-mono text-[9px] text-zs-green/70 border border-zs-green/30 rounded px-1.5 py-0.5">KEY</span>
                    )}
                  </div>
                  <div className="font-syne font-semibold text-sm text-zs-text mb-2">{item.name}</div>
                  <div className="font-dm text-xs text-zs-muted/85 leading-relaxed">{item.desc}</div>
                </div>
              );
            })}
          </div>

          {/* EPIC Network Map */}
          <div className="glass-card rounded-2xl border border-zs-border overflow-hidden">
            <div className="px-5 py-3.5 border-b border-zs-border flex items-center justify-between">
              <div className="font-mono text-xs text-zs-muted tracking-widest uppercase">{t.ecosystem.networkMap}</div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-zs-green pulse-dot" />
                <span className="font-mono text-[10px] text-zs-green/70">LIVE</span>
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-zs-bg-2">
              <svg viewBox="0 0 500 400" className="w-full" fill="none">
                {/* Background glow */}
                <defs>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(0,232,255,0.08)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                  </radialGradient>
                  <radialGradient id="zpayGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(0,224,135,0.15)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <filter id="glowStrong">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                {/* Center ambient glow */}
                <ellipse cx="250" cy="200" rx="120" ry="100" fill="url(#centerGlow)" />
                <ellipse cx="430" cy="200" rx="60" ry="60" fill="url(#zpayGlow)" />

                {/* Grid lines */}
                {[0,50,100,150,200,250,300,350,400].map(y => (
                  <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="rgba(0,232,255,0.025)" strokeWidth="1"/>
                ))}
                {[0,50,100,150,200,250,300,350,400,450,500].map(x => (
                  <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="rgba(0,232,255,0.025)" strokeWidth="1"/>
                ))}

                {/* Compute node positions */}
                {(() => {
                  const pts: Record<string, {x:number,y:number,r:number,color:string,label:string,sub:string,primary:boolean,highlight?:boolean}> = {};
                  nodes.forEach(n => {
                    pts[n.id] = {
                      x: (n.cx/100)*500, y: (n.cy/100)*400,
                      r: n.r, color: n.color,
                      label: n.label, sub: n.sub,
                      primary: n.primary, highlight: (n as any).highlight
                    };
                  });

                  return (
                    <>
                      {/* Edges */}
                      {edges.map(([from, to], i) => {
                        const a = pts[from], b = pts[to];
                        const isHighlight = from === "zpay" || to === "zpay";
                        return (
                          <g key={i}>
                            <line
                              x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                              stroke={isHighlight ? "rgba(0,224,135,0.2)" : "rgba(0,232,255,0.12)"}
                              strokeWidth={isHighlight ? "1.5" : "1"}
                              strokeDasharray={isHighlight ? "6 3" : "4 4"}
                            />
                            {/* Animated dot on edge */}
                            <circle r="2" fill={isHighlight ? "#00E087" : "#00E8FF"} opacity="0.7">
                              <animateMotion dur={`${3 + i * 0.7}s`} repeatCount="indefinite">
                                <mpath>
                                  <path d={`M${a.x},${a.y} L${b.x},${b.y}`}/>
                                </mpath>
                              </animateMotion>
                            </circle>
                          </g>
                        );
                      })}

                      {/* Nodes */}
                      {Object.entries(pts).map(([id, n]) => (
                        <g key={id}>
                          {/* Outer ring pulse for primary/highlight */}
                          {n.primary && (
                            <>
                              <circle cx={n.x} cy={n.y} r={n.r + 14} fill="none" stroke="rgba(0,232,255,0.08)" strokeWidth="1">
                                <animate attributeName="r" values={`${n.r+10};${n.r+20};${n.r+10}`} dur="3s" repeatCount="indefinite"/>
                                <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite"/>
                              </circle>
                              <circle cx={n.x} cy={n.y} r={n.r + 6} fill="none" stroke="rgba(0,232,255,0.15)" strokeWidth="1"/>
                            </>
                          )}
                          {n.highlight && (
                            <circle cx={n.x} cy={n.y} r={n.r + 8} fill="none" stroke="rgba(0,224,135,0.2)" strokeWidth="1">
                              <animate attributeName="r" values={`${n.r+6};${n.r+14};${n.r+6}`} dur="2.5s" repeatCount="indefinite"/>
                              <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite"/>
                            </circle>
                          )}

                          {/* Node circle */}
                          <circle
                            cx={n.x} cy={n.y} r={n.r}
                            fill="rgba(4,4,12,0.92)"
                            stroke={n.color}
                            strokeWidth={n.primary ? "1.8" : "1"}
                            strokeOpacity={n.primary ? "0.7" : "0.35"}
                            filter={n.primary || n.highlight ? "url(#glow)" : undefined}
                          />

                          {/* Labels */}
                          <text
                            x={n.x} y={n.primary ? n.y - 4 : n.y - 3}
                            textAnchor="middle"
                            fill={n.color}
                            fontSize={n.primary ? "13" : n.r > 22 ? "10" : "9"}
                            fontFamily="monospace"
                            fontWeight={n.primary ? "700" : "500"}
                            fillOpacity={n.primary ? "1" : "0.85"}
                            filter={n.primary ? "url(#glow)" : undefined}
                          >
                            {n.label}
                          </text>
                          <text
                            x={n.x} y={n.primary ? n.y + 10 : n.y + 10}
                            textAnchor="middle"
                            fill={n.color}
                            fontSize={n.primary ? "9" : "8"}
                            fontFamily="monospace"
                            fillOpacity={n.primary ? "0.6" : "0.45"}
                          >
                            {n.sub}
                          </text>
                        </g>
                      ))}
                    </>
                  );
                })()}
              </svg>
            </div>

            {/* Z-PAY callout */}
            <div className="px-5 py-3.5 border-t border-zs-border bg-zs-green/4 flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-zs-green mt-1 flex-shrink-0 pulse-dot" />
              <p className="font-dm text-xs text-zs-muted leading-relaxed">
                <span className="text-zs-green font-semibold">Z-PAY integration:</span>{" "}
                All Z-PAY fiat↔crypto conversions route through Z-SWAP&apos;s liquidity engine, making Z-SWAP the settlement backbone of ZETTA payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
