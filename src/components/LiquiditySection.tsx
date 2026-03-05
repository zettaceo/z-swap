"use client";

export default function LiquiditySection() {
  const capabilities = [
    { label: "Swap instantâneo multichain", active: true },
    { label: "Swap cross-chain nativo", active: true },
    { label: "Split automático de ordens", active: true },
    { label: "Swap protegido contra MEV", active: true },
    { label: "Liquidez concentrada (v3)", active: false },
    { label: "Liquidez tradicional AMM", active: false },
    { label: "Fee dinâmica por pool", active: false },
    { label: "Auto-compound rewards", active: false },
    { label: "Best-price detection", active: true },
    { label: "Gas estimation", active: false },
    { label: "Simulação pré-swap", active: true },
    { label: "Swap com fallback liquidity", active: false },
  ];

  return (
    <section className="relative py-10 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zs-violet/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">
          <div>
            <div className="section-label mb-3">02 — Liquidity Layer</div>
            <h2 className="font-syne font-bold text-[clamp(1.6rem,3.5vw,3rem)] leading-tight text-zs-text mb-5">
              The Smart Routing <span className="text-gradient-cyan">Engine</span>
            </h2>
            <p className="font-dm text-zs-muted text-sm leading-relaxed mb-6 sm:mb-8">
              Z-SWAP evaluates all available liquidity paths across internal pools and external aggregations to deliver optimal execution prices with minimum slippage and MEV protection.
            </p>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-zs-bg-3/40 border border-zs-faint/30">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cap.active ? "bg-zs-cyan" : "bg-zs-faint"}`} />
                  <span className={`font-mono text-[10px] sm:text-xs tracking-wide leading-snug ${cap.active ? "text-zs-text/85" : "text-zs-muted/70"}`}>
                    {cap.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Flow diagram */}
          <div className="glass-card rounded-2xl p-5 sm:p-8 border border-zs-border">
            <div className="font-mono text-[10px] sm:text-xs text-zs-muted tracking-widest uppercase mb-5">Swap Execution Flow</div>
            <svg viewBox="0 0 300 380" className="w-full" fill="none">
              <rect x="75" y="8" width="150" height="40" rx="8" fill="rgba(0,232,255,0.08)" stroke="rgba(0,232,255,0.3)" strokeWidth="1"/>
              <text x="150" y="24" textAnchor="middle" fill="rgba(0,232,255,0.9)" fontSize="10" fontFamily="monospace" fontWeight="600">USER REQUEST</text>
              <text x="150" y="40" textAnchor="middle" fill="rgba(0,232,255,0.5)" fontSize="8" fontFamily="monospace">Token A → Token B</text>
              <line x1="150" y1="48" x2="150" y2="72" stroke="rgba(0,232,255,0.3)" strokeWidth="1" strokeDasharray="3 2"/>
              <polygon points="146,70 154,70 150,77" fill="rgba(0,232,255,0.5)"/>
              <rect x="55" y="77" width="190" height="40" rx="8" fill="rgba(124,58,237,0.1)" stroke="rgba(124,58,237,0.4)" strokeWidth="1"/>
              <text x="150" y="94" textAnchor="middle" fill="rgba(159,95,255,0.9)" fontSize="10" fontFamily="monospace" fontWeight="600">SMART ROUTER</text>
              <text x="150" y="109" textAnchor="middle" fill="rgba(159,95,255,0.5)" fontSize="8" fontFamily="monospace">Path optimization engine</text>
              <line x1="105" y1="117" x2="55" y2="152" stroke="rgba(0,232,255,0.18)" strokeWidth="1"/>
              <line x1="150" y1="117" x2="150" y2="152" stroke="rgba(0,232,255,0.18)" strokeWidth="1"/>
              <line x1="195" y1="117" x2="245" y2="152" stroke="rgba(0,232,255,0.18)" strokeWidth="1"/>
              {[{x:15,label:"DIRECT",sub:"Pool"},{x:110,label:"MULTI-HOP",sub:"2-3 steps"},{x:205,label:"AGGREGATED",sub:"External"}].map((n,i)=>(
                <g key={i}>
                  <rect x={n.x} y="152" width="80" height="36" rx="6" fill="rgba(0,232,255,0.05)" stroke="rgba(0,232,255,0.18)" strokeWidth="1"/>
                  <text x={n.x+40} y="168" textAnchor="middle" fill="rgba(0,232,255,0.75)" fontSize="8" fontFamily="monospace" fontWeight="600">{n.label}</text>
                  <text x={n.x+40} y="181" textAnchor="middle" fill="rgba(0,232,255,0.4)" fontSize="7" fontFamily="monospace">{n.sub}</text>
                </g>
              ))}
              <line x1="55" y1="188" x2="115" y2="215" stroke="rgba(0,232,255,0.15)" strokeWidth="1"/>
              <line x1="150" y1="188" x2="150" y2="215" stroke="rgba(0,232,255,0.15)" strokeWidth="1"/>
              <line x1="245" y1="188" x2="185" y2="215" stroke="rgba(0,232,255,0.15)" strokeWidth="1"/>
              <rect x="65" y="215" width="170" height="36" rx="8" fill="rgba(245,166,35,0.08)" stroke="rgba(245,166,35,0.3)" strokeWidth="1"/>
              <text x="150" y="231" textAnchor="middle" fill="rgba(245,166,35,0.9)" fontSize="9" fontFamily="monospace" fontWeight="600">BEST PRICE SELECTION</text>
              <text x="150" y="244" textAnchor="middle" fill="rgba(245,166,35,0.5)" fontSize="7" fontFamily="monospace">Gas + slippage optimization</text>
              <line x1="150" y1="251" x2="150" y2="272" stroke="rgba(245,166,35,0.3)" strokeWidth="1" strokeDasharray="3 2"/>
              <polygon points="146,270 154,270 150,277" fill="rgba(245,166,35,0.5)"/>
              <rect x="75" y="277" width="150" height="36" rx="8" fill="rgba(0,232,255,0.06)" stroke="rgba(0,232,255,0.2)" strokeWidth="1"/>
              <text x="150" y="293" textAnchor="middle" fill="rgba(0,232,255,0.85)" fontSize="9" fontFamily="monospace" fontWeight="600">ZION AI CHECK</text>
              <text x="150" y="306" textAnchor="middle" fill="rgba(0,232,255,0.45)" fontSize="7" fontFamily="monospace">Risk · Simulation · MEV</text>
              <line x1="150" y1="313" x2="150" y2="328" stroke="rgba(0,232,255,0.25)" strokeWidth="1"/>
              <rect x="90" y="328" width="120" height="26" rx="5" fill="rgba(0,224,135,0.1)" stroke="rgba(0,224,135,0.4)" strokeWidth="1"/>
              <text x="150" y="345" textAnchor="middle" fill="rgba(0,224,135,0.9)" fontSize="9" fontFamily="monospace" fontWeight="600">EXECUTE SWAP</text>
              <circle cx="150" cy="62" r="2" fill="rgba(0,232,255,0.7)">
                <animate attributeName="cy" values="62;72;62" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
