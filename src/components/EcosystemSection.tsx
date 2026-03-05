"use client";

import { useLang } from "@/lib/i18n";

type EcoColor = "cyan" | "violet" | "gold" | "green";

interface Integration {
  name: string; type: string; desc: string;
  color: EcoColor; highlight?: boolean;
}

interface EcoNode {
  id: string; label: string; sub: string;
  cx: number; cy: number; r: number;
  color: string; primary: boolean; highlight?: boolean;
}

const integrations: Integration[] = [
  { name: "ZETTA Wallet / OBELISK-Z", type: "Asset Management",       desc: "Native wallet integration for direct in-wallet swapping, LP management, and multi-sig.",      color: "violet" },
  { name: "Z-Finance",                type: "Financial Infrastructure", desc: "Institutional-grade fiat custody, compliance infrastructure, and regulated on/off-ramp.",        color: "cyan"   },
  { name: "Z-PAD",                    type: "Launchpad",               desc: "New token launches on Z-PAD automatically initialize liquidity pools on Z-SWAP with LP lock.",   color: "gold"   },
  { name: "ZETTA Chain",              type: "Settlement Layer",         desc: "Primary settlement network for Z-SWAP transactions with native finality guarantees.",             color: "gold"   },
  { name: "ZION AI",                  type: "Intelligence Layer",       desc: "AI analysis engine providing risk, routing, and market intelligence across all ZETTA products.", color: "cyan"   },
  { name: "Z-PAY",                    type: "Payment & Fiat",           desc: "Z-SWAP powers all fiat↔crypto conversions for Z-PAY. Every Z-PAY settlement routes through Z-SWAP's liquidity layer.", color: "green", highlight: true },
];

const colorMap: Record<EcoColor, { dot: string; text: string; border: string; bg: string }> = {
  cyan:   { dot: "bg-zs-cyan",          text: "text-zs-cyan",          border: "border-zs-cyan/25",   bg: "bg-zs-cyan/[0.06]"   },
  violet: { dot: "bg-zs-violet-bright", text: "text-zs-violet-bright", border: "border-zs-violet/25", bg: "bg-zs-violet/[0.06]" },
  gold:   { dot: "bg-zs-gold",          text: "text-zs-gold",          border: "border-zs-gold/25",   bg: "bg-zs-gold/[0.06]"   },
  green:  { dot: "bg-zs-green",         text: "text-zs-green",         border: "border-zs-green/35",  bg: "bg-zs-green/[0.06]"  },
};

const nodes: EcoNode[] = [
  { id:"zswap",    label:"Z-SWAP",    sub:"CORE",        cx:50, cy:50, r:38, color:"#00E8FF", primary:true             },
  { id:"zion",     label:"ZION AI",   sub:"Intelligence",cx:50, cy:10, r:26, color:"#F5A623", primary:false            },
  { id:"wallet",   label:"ZETTA",     sub:"Wallet",      cx:15, cy:26, r:24, color:"#9F5FFF", primary:false            },
  { id:"zfinance", label:"Z-Finance", sub:"FinInfra",    cx:85, cy:26, r:24, color:"#9F5FFF", primary:false            },
  { id:"zpay",     label:"Z-PAY",     sub:"Payments",    cx:86, cy:50, r:28, color:"#00E087", primary:false, highlight:true },
  { id:"zpad",     label:"Z-PAD",     sub:"Launchpad",   cx:15, cy:74, r:24, color:"#F5A623", primary:false            },
  { id:"zchain",   label:"ZETTA",     sub:"Chain",       cx:50, cy:90, r:24, color:"#F5A623", primary:false            },
  { id:"zfin2",    label:"Z-Finance", sub:"FinInfra",    cx:85, cy:74, r:22, color:"#00E8FF", primary:false            },
  { id:"zassets",  label:"Z-Assets",  sub:"Protocol",    cx:22, cy:50, r:20, color:"#9F5FFF", primary:false            },
];

const edges: [string, string][] = [
  ["zswap","zion"],["zswap","wallet"],["zswap","zfinance"],["zswap","zpay"],
  ["zswap","zpad"],["zswap","zchain"],["zswap","zfin2"],["zswap","zassets"],
  ["zpay","zfin2"],["zion","zfinance"],["zpad","zchain"],
];

export default function EcosystemSection() {
  const { t } = useLang();

  // Precompute node positions from percentage coordinates
  const W = 500, H = 400;
  const pts: Record<string, { x:number; y:number; r:number; color:string; label:string; sub:string; primary:boolean; highlight:boolean }> = {};
  nodes.forEach((n) => {
    pts[n.id] = { x:(n.cx/100)*W, y:(n.cy/100)*H, r:n.r, color:n.color, label:n.label, sub:n.sub, primary:n.primary, highlight:n.highlight ?? false };
  });

  return (
    <section id="ecosystem" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="section-label mb-3">{t.ecosystem.label}</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-end gap-3 mb-8 sm:mb-12">
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-zs-text">
            {t.ecosystem.title1}{" "}
            <span className="text-gradient-cyan">{t.ecosystem.title2}</span>
          </h2>
          <p className="font-dm text-sm sm:text-base text-zs-muted leading-relaxed max-w-md">{t.ecosystem.sub}</p>
        </div>

        {/* Integration cards + Network map — stacked on mobile, side-by-side from lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* Integration cards — 1 col mobile, 2 col from sm */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {integrations.map((item, i) => {
              const c = colorMap[item.color];
              return (
                <div
                  key={i}
                  className={`p-4 sm:p-5 rounded-xl glass-card border transition-colors duration-300 ${
                    item.highlight
                      ? "border-zs-green/40 bg-zs-green/[0.04] hover:bg-zs-green/[0.07]"
                      : `${c.border} hover:border-zs-faint`
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2.5 min-w-0">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot} ${item.highlight ? "pulse-dot" : ""}`} />
                    <span className={`font-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-bold truncate ${c.text}`}>
                      {item.type}
                    </span>
                    {item.highlight && (
                      <span className="ml-auto font-mono text-[8px] text-zs-green/70 border border-zs-green/30 rounded px-1.5 py-0.5 flex-shrink-0">
                        KEY
                      </span>
                    )}
                  </div>
                  <div className="font-syne font-semibold text-xs sm:text-sm text-zs-text mb-1.5 truncate">{item.name}</div>
                  <div className="font-dm text-[11px] sm:text-xs text-zs-muted/85 leading-relaxed">{item.desc}</div>
                </div>
              );
            })}
          </div>

          {/* Network map — SVG scales via viewBox, never overflows */}
          <div className="glass-card rounded-2xl border border-zs-border overflow-hidden min-w-0">
            <div className="px-4 sm:px-5 py-3 border-b border-zs-border flex items-center justify-between gap-2">
              <div className="font-mono text-[9px] sm:text-[10px] text-zs-muted tracking-widest uppercase truncate">
                {t.ecosystem.networkMap}
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-zs-green pulse-dot" />
                <span className="font-mono text-[9px] text-zs-green/70">LIVE</span>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-zs-bg-2">
              <svg viewBox={`0 0 ${W} ${H}`} className="w-full" fill="none" aria-hidden="true">
                <defs>
                  <radialGradient id="eco-cg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%"   stopColor="rgba(0,232,255,0.07)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                  </radialGradient>
                  <radialGradient id="eco-pg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%"   stopColor="rgba(0,224,135,0.12)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                  </radialGradient>
                  <filter id="eco-gf" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                {/* Grid lines */}
                {[0,50,100,150,200,250,300,350,400].map((y) => (
                  <line key={`h${y}`} x1="0" y1={y} x2={W} y2={y} stroke="rgba(0,232,255,0.02)" strokeWidth="1"/>
                ))}
                {[0,50,100,150,200,250,300,350,400,450,500].map((x) => (
                  <line key={`v${x}`} x1={x} y1="0" x2={x} y2={H} stroke="rgba(0,232,255,0.02)" strokeWidth="1"/>
                ))}

                {/* Ambient glows */}
                <ellipse cx="250" cy="200" rx="120" ry="100" fill="url(#eco-cg)" />
                <ellipse cx="430" cy="200" rx="60" ry="60" fill="url(#eco-pg)" />

                {/* Edges with animated dots */}
                {edges.map(([from, to], i) => {
                  const a = pts[from];
                  const b = pts[to];
                  if (!a || !b) return null;
                  const isZ = to === "zpay" || from === "zpay";
                  const dur = 3 + i * 0.55;
                  return (
                    <g key={`e${i}`}>
                      <line
                        x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                        stroke={isZ ? "rgba(0,224,135,0.2)" : "rgba(0,232,255,0.1)"}
                        strokeWidth={isZ ? "1.5" : "1"}
                        strokeDasharray={isZ ? "6 3" : "4 4"}
                      />
                      <circle r="2" fill={isZ ? "#00E087" : "#00E8FF"}>
                        <animate attributeName="cx" values={`${a.x};${b.x};${a.x}`} dur={`${dur}s`} repeatCount="indefinite"/>
                        <animate attributeName="cy" values={`${a.y};${b.y};${a.y}`} dur={`${dur}s`} repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0;0.8;0" dur={`${dur}s`} repeatCount="indefinite"/>
                      </circle>
                    </g>
                  );
                })}

                {/* Nodes */}
                {Object.entries(pts).map(([id, n]) => (
                  <g key={id}>
                    {n.primary && (
                      <>
                        <circle cx={n.x} cy={n.y} r={n.r+14} fill="none" stroke="rgba(0,232,255,0.06)" strokeWidth="1">
                          <animate attributeName="r" values={`${n.r+8};${n.r+18};${n.r+8}`} dur="3s" repeatCount="indefinite"/>
                          <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx={n.x} cy={n.y} r={n.r+6} fill="none" stroke="rgba(0,232,255,0.14)" strokeWidth="1"/>
                      </>
                    )}
                    {n.highlight && (
                      <circle cx={n.x} cy={n.y} r={n.r+8} fill="none" stroke="rgba(0,224,135,0.2)" strokeWidth="1">
                        <animate attributeName="r" values={`${n.r+5};${n.r+13};${n.r+5}`} dur="2.5s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite"/>
                      </circle>
                    )}
                    <circle cx={n.x} cy={n.y} r={n.r}
                      fill="rgba(4,4,12,0.92)" stroke={n.color}
                      strokeWidth={n.primary ? "1.8" : "1"}
                      strokeOpacity={n.primary ? "0.7" : "0.3"}
                      filter={n.primary || n.highlight ? "url(#eco-gf)" : undefined}
                    />
                    <text x={n.x} y={n.primary ? n.y-3 : n.y-2}
                      textAnchor="middle" fill={n.color}
                      fontSize={n.primary ? "12" : n.r > 22 ? "9" : "8"}
                      fontFamily="monospace" fontWeight={n.primary ? "700" : "500"}
                      fillOpacity={n.primary ? "1" : "0.8"}
                      filter={n.primary ? "url(#eco-gf)" : undefined}
                    >{n.label}</text>
                    <text x={n.x} y={n.primary ? n.y+10 : n.y+9}
                      textAnchor="middle" fill={n.color}
                      fontSize={n.primary ? "8" : "7"}
                      fontFamily="monospace"
                      fillOpacity={n.primary ? "0.55" : "0.38"}
                    >{n.sub}</text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Z-PAY callout */}
            <div className="px-4 sm:px-5 py-3 border-t border-zs-border bg-zs-green/[0.03] flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-zs-green mt-1 flex-shrink-0 pulse-dot" />
              <p className="font-dm text-[10px] sm:text-xs text-zs-muted leading-relaxed">
                <span className="text-zs-green font-semibold">Z-PAY integration: </span>
                All Z-PAY fiat↔crypto conversions route through Z-SWAP&apos;s liquidity engine — the settlement backbone of ZETTA payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
