"use client";

import { useLang } from "@/lib/i18n";

export default function ArchitectureSection() {
  const { t } = useLang();

  return (
    <section id="architecture" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="section-label mb-3">{t.architecture.label}</div>
          <h2 className="font-syne font-bold text-[clamp(1.6rem,3.5vw,3rem)] leading-tight text-zs-text mb-4">
            {t.architecture.title1}{" "}
            <span className="text-gradient-cyan">{t.architecture.title2}</span>
          </h2>
          <p className="font-dm text-zs-muted text-sm sm:text-base leading-relaxed">{t.architecture.sub}</p>
        </div>

        {/* Architecture diagram */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 border border-zs-border mb-6 overflow-x-auto">
          <div className="min-w-[320px]">
            <svg viewBox="0 0 800 520" className="w-full" fill="none">
              {/* USER INTERFACE LAYER */}
              <rect x="0" y="0" width="800" height="70" rx="12" fill="rgba(0,232,255,0.04)" stroke="rgba(0,232,255,0.15)" strokeWidth="1" />
              <text x="16" y="22" fill="rgba(0,232,255,0.45)" fontSize="10" fontFamily="monospace" letterSpacing="2">USER INTERFACE LAYER</text>
              {["Z-SWAP Web App", "Mobile Interface", "API Access", "ZETTA Wallet"].map((item, i) => (
                <g key={i}>
                  <rect x={16 + i * 196} y="30" width="180" height="30" rx="6" fill="rgba(0,232,255,0.08)" stroke="rgba(0,232,255,0.25)" strokeWidth="1" />
                  <text x={106 + i * 196} y="50" textAnchor="middle" fill="rgba(0,232,255,0.9)" fontSize="11" fontFamily="monospace" fontWeight="500">{item}</text>
                </g>
              ))}

              {[106, 302, 498, 694].map((x, i) => (
                <g key={i}>
                  <line x1={x} y1="60" x2={x} y2="84" stroke="rgba(0,232,255,0.2)" strokeWidth="1" strokeDasharray="3 2" />
                  <polygon points={`${x-3},83 ${x+3},83 ${x},89`} fill="rgba(0,232,255,0.35)" />
                </g>
              ))}

              {/* SMART ROUTING ENGINE */}
              <rect x="0" y="90" width="800" height="70" rx="12" fill="rgba(124,58,237,0.07)" stroke="rgba(124,58,237,0.25)" strokeWidth="1" />
              <text x="16" y="110" fill="rgba(159,95,255,0.45)" fontSize="10" fontFamily="monospace" letterSpacing="2">SMART ROUTING ENGINE</text>
              {["Path Analysis", "Price Comparison", "Gas Optimizer", "Slippage Control"].map((item, i) => (
                <g key={i}>
                  <rect x={16 + i * 196} y="118" width="180" height="30" rx="6" fill="rgba(124,58,237,0.1)" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
                  <text x={106 + i * 196} y="138" textAnchor="middle" fill="rgba(159,95,255,0.9)" fontSize="11" fontFamily="monospace" fontWeight="500">{item}</text>
                </g>
              ))}

              {[106, 302, 498, 694].map((x, i) => (
                <g key={i}>
                  <line x1={x} y1="160" x2={x} y2="184" stroke="rgba(124,58,237,0.2)" strokeWidth="1" strokeDasharray="3 2" />
                  <polygon points={`${x-3},183 ${x+3},183 ${x},189`} fill="rgba(124,58,237,0.35)" />
                </g>
              ))}

              {/* LIQUIDITY LAYER */}
              <rect x="0" y="190" width="800" height="70" rx="12" fill="rgba(0,232,255,0.04)" stroke="rgba(0,232,255,0.12)" strokeWidth="1" />
              <text x="16" y="210" fill="rgba(0,232,255,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="2">LIQUIDITY LAYER</text>
              {["Stable Pools", "Volatile Pools", "Concentrated LP", "External DEXs"].map((item, i) => (
                <g key={i}>
                  <rect x={16 + i * 196} y="218" width="180" height="30" rx="6" fill="rgba(0,232,255,0.07)" stroke="rgba(0,232,255,0.18)" strokeWidth="1" />
                  <text x={106 + i * 196} y="238" textAnchor="middle" fill="rgba(0,232,255,0.85)" fontSize="11" fontFamily="monospace" fontWeight="500">{item}</text>
                </g>
              ))}

              {[200, 600].map((x) => (
                <g key={x}>
                  <line x1={x} y1="260" x2={x} y2="284" stroke="rgba(0,232,255,0.15)" strokeWidth="1" strokeDasharray="3 2" />
                  <polygon points={`${x-3},283 ${x+3},283 ${x},289`} fill="rgba(0,232,255,0.25)" />
                </g>
              ))}

              {/* ZION AI + SECURITY split */}
              <rect x="0" y="290" width="392" height="100" rx="12" fill="rgba(245,166,35,0.05)" stroke="rgba(245,166,35,0.22)" strokeWidth="1" />
              <text x="14" y="310" fill="rgba(245,166,35,0.55)" fontSize="10" fontFamily="monospace" letterSpacing="2">ZION AI LAYER</text>
              {[["Risk Analysis", "Route Optimizer"], ["Scam Detector", "Market Intel"]].map((row, ri) =>
                row.map((item, ci) => (
                  <g key={`${ri}-${ci}`}>
                    <rect x={14 + ci * 190} y={318 + ri * 36} width="176" height="26" rx="6" fill="rgba(245,166,35,0.09)" stroke="rgba(245,166,35,0.22)" strokeWidth="1" />
                    <text x={102 + ci * 190} y={335 + ri * 36} textAnchor="middle" fill="rgba(245,166,35,0.9)" fontSize="11" fontFamily="monospace" fontWeight="500">{item}</text>
                  </g>
                ))
              )}

              <rect x="408" y="290" width="392" height="100" rx="12" fill="rgba(255,59,92,0.05)" stroke="rgba(255,59,92,0.18)" strokeWidth="1" />
              <text x="422" y="310" fill="rgba(255,59,92,0.55)" fontSize="10" fontFamily="monospace" letterSpacing="2">SECURITY LAYER</text>
              {[["Honeypot Detect", "Contract Verify"], ["Rug Pull Signal", "Risk Score"]].map((row, ri) =>
                row.map((item, ci) => (
                  <g key={`${ri}-${ci}`}>
                    <rect x={422 + ci * 190} y={318 + ri * 36} width="176" height="26" rx="6" fill="rgba(255,59,92,0.07)" stroke="rgba(255,59,92,0.18)" strokeWidth="1" />
                    <text x={510 + ci * 190} y={335 + ri * 36} textAnchor="middle" fill="rgba(255,92,120,0.9)" fontSize="11" fontFamily="monospace" fontWeight="500">{item}</text>
                  </g>
                ))
              )}

              {[200, 600].map((x) => (
                <g key={x}>
                  <line x1={x} y1="390" x2={x} y2="412" stroke="rgba(0,232,255,0.15)" strokeWidth="1" strokeDasharray="3 2" />
                  <polygon points={`${x-3},411 ${x+3},411 ${x},417`} fill="rgba(0,232,255,0.2)" />
                </g>
              ))}

              {/* MULTI-CHAIN SETTLEMENT */}
              <rect x="0" y="418" width="800" height="70" rx="12" fill="rgba(0,224,135,0.05)" stroke="rgba(0,224,135,0.18)" strokeWidth="1" />
              <text x="16" y="438" fill="rgba(0,224,135,0.45)" fontSize="10" fontFamily="monospace" letterSpacing="2">MULTI-CHAIN SETTLEMENT LAYER</text>
              {["ZETTA Chain", "EVM Networks", "Cross-Chain Bridge", "Z-PAY Settlement"].map((item, i) => (
                <g key={i}>
                  <rect x={16 + i * 196} y="446" width="180" height="30" rx="6" fill="rgba(0,224,135,0.07)" stroke="rgba(0,224,135,0.18)" strokeWidth="1" />
                  <text x={106 + i * 196} y="466" textAnchor="middle" fill="rgba(0,224,135,0.88)" fontSize="11" fontFamily="monospace" fontWeight="500">{item}</text>
                </g>
              ))}

              {/* Animated flow dot */}
              <circle cx="400" cy="30" r="3" fill="rgba(0,232,255,0.9)">
                <animate attributeName="cy" values="30;490;30" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0.1;0.9" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="30" r="2" fill="rgba(124,58,237,0.8)">
                <animate attributeName="cy" values="490;30;490" dur="5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.1;0.8" dur="5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>

        {/* Layer summary cards - fix readability */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {([ 
            { layer: "UI Layer", desc: "Multi-platform access points", color: "cyan" as const },
            { layer: "Routing", desc: "Smart path optimization", color: "violet" as const },
            { layer: "Liquidity", desc: "Unified pool management", color: "cyan" as const },
            { layer: "Intelligence", desc: "AI & security analysis", color: "gold" as const },
            { layer: "Settlement", desc: "Multi-chain execution", color: "green" as const },
          ]).map((item, i) => (
            <div key={i} className="glass-card p-4 rounded-xl border border-zs-border text-center hover:border-zs-faint transition-colors">
              <div className={`font-mono text-[11px] sm:text-xs tracking-widest uppercase mb-2 font-bold ${
                item.color === "cyan" ? "text-zs-cyan" :
                item.color === "violet" ? "text-zs-violet-bright" :
                item.color === "gold" ? "text-zs-gold" : "text-zs-green"
              }`}>
                {item.layer}
              </div>
              <div className="font-dm text-[11px] sm:text-xs text-zs-text/70 leading-snug">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
