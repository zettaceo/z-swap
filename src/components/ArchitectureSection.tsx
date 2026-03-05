"use client";

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="relative py-32 overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="section-label mb-4">03 — System Architecture</div>
          <h2 className="font-syne font-bold text-[clamp(1.8rem,3.5vw,3rem)] leading-tight text-zs-text mb-6">
            Protocol{" "}
            <span className="text-gradient-cyan">Architecture</span>{" "}
            Overview
          </h2>
          <p className="font-dm text-zs-muted leading-relaxed">
            Z-SWAP is built as a layered infrastructure stack. Each layer operates independently
            while communicating through well-defined protocol interfaces.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="glass-card rounded-2xl p-8 border border-zs-border mb-12">
          <svg viewBox="0 0 800 520" className="w-full" fill="none">
            {/* ─── USER INTERFACE LAYER ─── */}
            <rect x="0" y="0" width="800" height="70" rx="12" fill="rgba(0,232,255,0.04)" stroke="rgba(0,232,255,0.12)" strokeWidth="1" />
            <text x="20" y="24" fill="rgba(0,232,255,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="2">USER INTERFACE LAYER</text>
            {["Z-SWAP Web App", "Mobile Interface", "API Access", "ZETTA Wallet"].map((item, i) => (
              <g key={i}>
                <rect x={20 + i * 190} y="32" width="170" height="28" rx="6" fill="rgba(0,232,255,0.07)" stroke="rgba(0,232,255,0.2)" strokeWidth="1" />
                <text x={105 + i * 190} y="51" textAnchor="middle" fill="rgba(0,232,255,0.8)" fontSize="10" fontFamily="monospace">{item}</text>
              </g>
            ))}

            {/* Arrows down from UI layer */}
            {[105, 295, 485, 675].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="70" x2={x} y2="92" stroke="rgba(0,232,255,0.2)" strokeWidth="1" strokeDasharray="4 2" />
                <polygon points={`${x - 4},90 ${x + 4},90 ${x},97`} fill="rgba(0,232,255,0.3)" />
              </g>
            ))}

            {/* ─── SMART ROUTING ENGINE ─── */}
            <rect x="0" y="97" width="800" height="70" rx="12" fill="rgba(124,58,237,0.06)" stroke="rgba(124,58,237,0.2)" strokeWidth="1" />
            <text x="20" y="117" fill="rgba(159,95,255,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="2">SMART ROUTING ENGINE</text>
            {["Path Analysis", "Price Comparison", "Gas Optimizer", "Slippage Control"].map((item, i) => (
              <g key={i}>
                <rect x={20 + i * 190} y="124" width="170" height="28" rx="6" fill="rgba(124,58,237,0.08)" stroke="rgba(124,58,237,0.25)" strokeWidth="1" />
                <text x={105 + i * 190} y="143" textAnchor="middle" fill="rgba(159,95,255,0.85)" fontSize="10" fontFamily="monospace">{item}</text>
              </g>
            ))}

            {/* Arrows */}
            {[105, 295, 485, 675].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="167" x2={x} y2="189" stroke="rgba(124,58,237,0.2)" strokeWidth="1" strokeDasharray="4 2" />
                <polygon points={`${x - 4},187 ${x + 4},187 ${x},194`} fill="rgba(124,58,237,0.3)" />
              </g>
            ))}

            {/* ─── LIQUIDITY POOL LAYER ─── */}
            <rect x="0" y="194" width="800" height="70" rx="12" fill="rgba(0,232,255,0.04)" stroke="rgba(0,232,255,0.1)" strokeWidth="1" />
            <text x="20" y="214" fill="rgba(0,232,255,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="2">LIQUIDITY LAYER</text>
            {["Stable Pools", "Volatile Pools", "Concentrated LP", "External DEXs"].map((item, i) => (
              <g key={i}>
                <rect x={20 + i * 190} y="221" width="170" height="28" rx="6" fill="rgba(0,232,255,0.06)" stroke="rgba(0,232,255,0.15)" strokeWidth="1" />
                <text x={105 + i * 190} y="240" textAnchor="middle" fill="rgba(0,232,255,0.75)" fontSize="10" fontFamily="monospace">{item}</text>
              </g>
            ))}

            {/* Arrows */}
            {[200, 600].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="264" x2={x} y2="289" stroke="rgba(0,232,255,0.15)" strokeWidth="1" strokeDasharray="4 2" />
                <polygon points={`${x - 4},287 ${x + 4},287 ${x},294`} fill="rgba(0,232,255,0.25)" />
              </g>
            ))}

            {/* ─── INTELLIGENCE LAYER ─── */}
            <rect x="0" y="294" width="390" height="100" rx="12" fill="rgba(245,166,35,0.05)" stroke="rgba(245,166,35,0.2)" strokeWidth="1" />
            <text x="15" y="314" fill="rgba(245,166,35,0.5)" fontSize="10" fontFamily="monospace" letterSpacing="2">ZION AI LAYER</text>
            {[["Risk Analysis", "Route Optimizer"], ["Scam Detector", "Market Intel"]].map((row, ri) =>
              row.map((item, ci) => (
                <g key={`${ri}-${ci}`}>
                  <rect x={15 + ci * 190} y={322 + ri * 36} width="175" height="26" rx="6" fill="rgba(245,166,35,0.08)" stroke="rgba(245,166,35,0.2)" strokeWidth="1" />
                  <text x={107 + ci * 190} y={339 + ri * 36} textAnchor="middle" fill="rgba(245,166,35,0.85)" fontSize="10" fontFamily="monospace">{item}</text>
                </g>
              ))
            )}

            {/* Security Layer */}
            <rect x="410" y="294" width="390" height="100" rx="12" fill="rgba(255,59,92,0.04)" stroke="rgba(255,59,92,0.15)" strokeWidth="1" />
            <text x="425" y="314" fill="rgba(255,59,92,0.5)" fontSize="10" fontFamily="monospace" letterSpacing="2">SECURITY LAYER</text>
            {[["Honeypot Detect", "Contract Verify"], ["Rug Pull Signal", "Risk Score"]].map((row, ri) =>
              row.map((item, ci) => (
                <g key={`${ri}-${ci}`}>
                  <rect x={425 + ci * 190} y={322 + ri * 36} width="175" height="26" rx="6" fill="rgba(255,59,92,0.06)" stroke="rgba(255,59,92,0.15)" strokeWidth="1" />
                  <text x={517 + ci * 190} y={339 + ri * 36} textAnchor="middle" fill="rgba(255,92,120,0.85)" fontSize="10" fontFamily="monospace">{item}</text>
                </g>
              ))
            )}

            {/* Arrow to chain layer */}
            {[200, 600].map((x) => (
              <g key={x}>
                <line x1={x} y1="394" x2={x} y2="416" stroke="rgba(0,232,255,0.15)" strokeWidth="1" strokeDasharray="4 2" />
                <polygon points={`${x - 4},414 ${x + 4},414 ${x},421`} fill="rgba(0,232,255,0.25)" />
              </g>
            ))}

            {/* ─── CHAIN LAYER ─── */}
            <rect x="0" y="421" width="800" height="70" rx="12" fill="rgba(0,224,135,0.04)" stroke="rgba(0,224,135,0.15)" strokeWidth="1" />
            <text x="20" y="441" fill="rgba(0,224,135,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="2">MULTI-CHAIN SETTLEMENT LAYER</text>
            {["ZETTA Chain", "EVM Networks", "Cross-Chain Bridge", "Settlement Finality"].map((item, i) => (
              <g key={i}>
                <rect x={20 + i * 190} y="448" width="170" height="28" rx="6" fill="rgba(0,224,135,0.06)" stroke="rgba(0,224,135,0.15)" strokeWidth="1" />
                <text x={105 + i * 190} y="467" textAnchor="middle" fill="rgba(0,224,135,0.8)" fontSize="10" fontFamily="monospace">{item}</text>
              </g>
            ))}

            {/* Animated flow dot */}
            <circle cx="400" cy="35" r="3" fill="rgba(0,232,255,0.8)">
              <animate attributeName="cy" values="35;500;35" dur="5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.1;0.8" dur="5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Layer descriptions */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { layer: "UI Layer", desc: "Multi-platform access points", color: "cyan" },
            { layer: "Routing", desc: "Smart path optimization", color: "violet" },
            { layer: "Liquidity", desc: "Unified pool management", color: "cyan" },
            { layer: "Intelligence", desc: "AI & security analysis", color: "gold" },
            { layer: "Settlement", desc: "Multi-chain execution", color: "green" },
          ].map((item, i) => (
            <div key={i} className="glass-card p-4 rounded-xl border border-zs-border text-center">
              <div className={`font-mono text-xs tracking-widest uppercase mb-2 ${
                item.color === "cyan" ? "text-zs-cyan" :
                item.color === "violet" ? "text-zs-violet-bright" :
                item.color === "gold" ? "text-zs-gold" : "text-zs-green"
              }`}>
                {item.layer}
              </div>
              <div className="font-dm text-xs text-zs-muted">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
