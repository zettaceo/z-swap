"use client";

export default function LiquiditySection() {
  const capabilities = [
    { label: "Instant token swaps", active: true },
    { label: "Multi-hop routing", active: true },
    { label: "Cross-chain swaps", active: true },
    { label: "Smart routing engine", active: true },
    { label: "Concentrated liquidity pools", active: false },
    { label: "Stable & volatile pools", active: false },
    { label: "LP reward distribution", active: false },
    { label: "Cross-DEX aggregation", active: false },
    { label: "Best-price detection", active: true },
    { label: "Gas estimation", active: false },
    { label: "Swap simulation", active: false },
    { label: "Liquidity impact analysis", active: false },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zs-violet/4 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="section-label mb-4">02 — Liquidity Layer</div>
            <h2 className="font-syne font-bold text-[clamp(1.8rem,3.5vw,3rem)] leading-tight text-zs-text mb-6">
              The Smart Routing{" "}
              <span className="text-gradient-cyan">Engine</span>
            </h2>
            <p className="font-dm text-zs-muted leading-relaxed mb-8">
              At its core, Z-SWAP operates a sophisticated routing engine that evaluates
              all available liquidity paths across internal pools and external DEX aggregations
              to deliver optimal execution prices with minimum slippage.
            </p>

            <div className="space-y-3">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cap.active ? "bg-zs-cyan" : "bg-zs-faint"}`} />
                  <span className={`font-mono text-xs tracking-wide ${cap.active ? "text-zs-text" : "text-zs-muted"}`}>
                    {cap.label}
                  </span>
                  {cap.active && (
                    <span className="ml-auto font-mono text-[10px] text-zs-cyan/50 tracking-widest uppercase">
                      Live
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Flow diagram */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-8 border border-zs-border">
              {/* Title */}
              <div className="font-mono text-xs text-zs-muted tracking-widest uppercase mb-6">
                Swap Execution Flow
              </div>

              {/* SVG flow diagram */}
              <svg viewBox="0 0 320 400" className="w-full" fill="none">
                {/* User input */}
                <rect x="95" y="10" width="130" height="44" rx="8" fill="rgba(0,232,255,0.08)" stroke="rgba(0,232,255,0.3)" strokeWidth="1" />
                <text x="160" y="29" textAnchor="middle" className="font-mono" fill="rgba(0,232,255,0.9)" fontSize="11" fontFamily="monospace">USER REQUEST</text>
                <text x="160" y="46" textAnchor="middle" fill="rgba(0,232,255,0.5)" fontSize="9" fontFamily="monospace">Token A → Token B</text>

                {/* Arrow down */}
                <line x1="160" y1="54" x2="160" y2="82" stroke="rgba(0,232,255,0.3)" strokeWidth="1" strokeDasharray="4 2" />
                <polygon points="156,80 164,80 160,88" fill="rgba(0,232,255,0.4)" />

                {/* Smart Router */}
                <rect x="70" y="88" width="180" height="44" rx="8" fill="rgba(124,58,237,0.12)" stroke="rgba(124,58,237,0.4)" strokeWidth="1" />
                <text x="160" y="107" textAnchor="middle" fill="rgba(159,95,255,0.9)" fontSize="11" fontFamily="monospace">SMART ROUTER</text>
                <text x="160" y="123" textAnchor="middle" fill="rgba(159,95,255,0.5)" fontSize="9" fontFamily="monospace">Path optimization engine</text>

                {/* Three branches */}
                <line x1="120" y1="132" x2="60" y2="175" stroke="rgba(0,232,255,0.2)" strokeWidth="1" />
                <line x1="160" y1="132" x2="160" y2="175" stroke="rgba(0,232,255,0.2)" strokeWidth="1" />
                <line x1="200" y1="132" x2="260" y2="175" stroke="rgba(0,232,255,0.2)" strokeWidth="1" />

                {/* Pool A */}
                <rect x="20" y="175" width="80" height="40" rx="6" fill="rgba(0,232,255,0.06)" stroke="rgba(0,232,255,0.2)" strokeWidth="1" />
                <text x="60" y="192" textAnchor="middle" fill="rgba(0,232,255,0.7)" fontSize="9" fontFamily="monospace">POOL DIRECT</text>
                <text x="60" y="206" textAnchor="middle" fill="rgba(0,232,255,0.4)" fontSize="8" fontFamily="monospace">Internal</text>

                {/* Multi-hop */}
                <rect x="120" y="175" width="80" height="40" rx="6" fill="rgba(0,232,255,0.06)" stroke="rgba(0,232,255,0.2)" strokeWidth="1" />
                <text x="160" y="192" textAnchor="middle" fill="rgba(0,232,255,0.7)" fontSize="9" fontFamily="monospace">MULTI-HOP</text>
                <text x="160" y="206" textAnchor="middle" fill="rgba(0,232,255,0.4)" fontSize="8" fontFamily="monospace">2-3 steps</text>

                {/* External */}
                <rect x="220" y="175" width="80" height="40" rx="6" fill="rgba(0,232,255,0.06)" stroke="rgba(0,232,255,0.2)" strokeWidth="1" />
                <text x="260" y="192" textAnchor="middle" fill="rgba(0,232,255,0.7)" fontSize="9" fontFamily="monospace">AGGREGATED</text>
                <text x="260" y="206" textAnchor="middle" fill="rgba(0,232,255,0.4)" fontSize="8" fontFamily="monospace">External DEX</text>

                {/* Converge to price analysis */}
                <line x1="60" y1="215" x2="120" y2="258" stroke="rgba(0,232,255,0.2)" strokeWidth="1" />
                <line x1="160" y1="215" x2="160" y2="258" stroke="rgba(0,232,255,0.2)" strokeWidth="1" />
                <line x1="260" y1="215" x2="200" y2="258" stroke="rgba(0,232,255,0.2)" strokeWidth="1" />

                {/* Price comparison */}
                <rect x="75" y="258" width="170" height="40" rx="8" fill="rgba(245,166,35,0.08)" stroke="rgba(245,166,35,0.3)" strokeWidth="1" />
                <text x="160" y="275" textAnchor="middle" fill="rgba(245,166,35,0.9)" fontSize="10" fontFamily="monospace">BEST PRICE SELECTION</text>
                <text x="160" y="290" textAnchor="middle" fill="rgba(245,166,35,0.5)" fontSize="8" fontFamily="monospace">Gas + slippage optimization</text>

                {/* Arrow to ZION AI */}
                <line x1="160" y1="298" x2="160" y2="318" stroke="rgba(245,166,35,0.3)" strokeWidth="1" strokeDasharray="4 2" />
                <polygon points="156,316 164,316 160,324" fill="rgba(245,166,35,0.4)" />

                {/* ZION AI check */}
                <rect x="85" y="324" width="150" height="40" rx="8" fill="rgba(0,232,255,0.06)" stroke="rgba(0,232,255,0.2)" strokeWidth="1" />
                <text x="160" y="341" textAnchor="middle" fill="rgba(0,232,255,0.8)" fontSize="10" fontFamily="monospace">ZION AI ANALYSIS</text>
                <text x="160" y="356" textAnchor="middle" fill="rgba(0,232,255,0.4)" fontSize="8" fontFamily="monospace">Risk check · Simulation</text>

                {/* Arrow to execution */}
                <line x1="160" y1="364" x2="160" y2="378" stroke="rgba(0,232,255,0.3)" strokeWidth="1" />

                {/* Execution */}
                <rect x="100" y="378" width="120" height="20" rx="4" fill="rgba(0,224,135,0.12)" stroke="rgba(0,224,135,0.4)" strokeWidth="1" />
                <text x="160" y="392" textAnchor="middle" fill="rgba(0,224,135,0.9)" fontSize="9" fontFamily="monospace">EXECUTE SWAP</text>

                {/* Animated flow dots */}
                <circle cx="160" cy="68" r="2" fill="rgba(0,232,255,0.6)">
                  <animate attributeName="cy" values="68;82;68" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
