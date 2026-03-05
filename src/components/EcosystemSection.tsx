"use client";

const ecosystemNodes = [
  { id: "zswap", label: "Z-SWAP", sub: "Core Protocol", x: 50, y: 50, primary: true, color: "cyan" },
  { id: "wallet", label: "ZETTA Wallet", sub: "Asset custody", x: 20, y: 18, color: "violet" },
  { id: "zfinance", label: "Z-Finance", sub: "DeFi Layer", x: 80, y: 18, color: "violet" },
  { id: "zpad", label: "Z-PAD", sub: "Launchpad", x: 18, y: 82, color: "gold" },
  { id: "zchain", label: "ZETTA Chain", sub: "Settlement", x: 82, y: 82, color: "gold" },
  { id: "zion", label: "ZION AI", sub: "Intelligence", x: 50, y: 10, color: "cyan" },
  { id: "fiat", label: "Fiat Gateway", sub: "On/Off ramp", x: 85, y: 50, color: "green" },
];

const connections = [
  ["zswap", "wallet"],
  ["zswap", "zfinance"],
  ["zswap", "zpad"],
  ["zswap", "zchain"],
  ["zswap", "zion"],
  ["zswap", "fiat"],
  ["zion", "wallet"],
  ["zchain", "zfinance"],
];

const colorMap: Record<string, { dot: string; text: string; border: string; bg: string }> = {
  cyan: { dot: "bg-zs-cyan", text: "text-zs-cyan", border: "border-zs-cyan/30", bg: "bg-zs-cyan/10" },
  violet: { dot: "bg-zs-violet-bright", text: "text-zs-violet-bright", border: "border-zs-violet/30", bg: "bg-zs-violet/10" },
  gold: { dot: "bg-zs-gold", text: "text-zs-gold", border: "border-zs-gold/30", bg: "bg-zs-gold/10" },
  green: { dot: "bg-zs-green", text: "text-zs-green", border: "border-zs-green/30", bg: "bg-zs-green/10" },
};

export default function EcosystemSection() {
  const integrations = [
    {
      name: "ZETTA Wallet",
      type: "Asset Management",
      desc: "Native wallet integration for direct in-wallet swapping and LP management without external connections.",
      color: "violet",
    },
    {
      name: "Z-Finance",
      type: "DeFi Infrastructure",
      desc: "Lending and borrowing protocol that shares liquidity data and risk metrics with Z-SWAP.",
      color: "violet",
    },
    {
      name: "Z-PAD",
      type: "Token Launchpad",
      desc: "New token launches on Z-PAD automatically initialize liquidity pools on Z-SWAP with LP lock.",
      color: "gold",
    },
    {
      name: "ZETTA Chain",
      type: "Settlement Layer",
      desc: "Primary settlement network for Z-SWAP transactions with native finality guarantees.",
      color: "gold",
    },
    {
      name: "ZION AI",
      type: "Intelligence Layer",
      desc: "AI analysis engine providing risk, routing, and market intelligence across all ZETTA products.",
      color: "cyan",
    },
    {
      name: "Fiat Gateway",
      type: "On/Off-Ramp",
      desc: "Integrated fiat-to-crypto conversion allowing seamless entry and exit through regulated partners.",
      color: "green",
    },
  ];

  return (
    <section id="ecosystem" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="section-label mb-4">07 — Ecosystem Integration</div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-syne font-bold text-[clamp(1.8rem,3.5vw,3rem)] leading-tight text-zs-text mb-6">
              Connected to the{" "}
              <span className="text-gradient-cyan">ZETTA Ecosystem</span>
            </h2>
            <p className="font-dm text-zs-muted leading-relaxed mb-10">
              Z-SWAP is not a standalone exchange — it is a critical infrastructure component
              within the broader ZETTA ecosystem. Deep integrations across all ZETTA products
              create a unified liquidity and intelligence layer.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {integrations.map((item, i) => {
                const c = colorMap[item.color];
                return (
                  <div
                    key={i}
                    className={`p-5 rounded-xl glass-card border ${c.border} hover:${c.bg} transition-colors duration-300`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                      <span className={`font-mono text-[10px] tracking-widest uppercase ${c.text}`}>
                        {item.type}
                      </span>
                    </div>
                    <div className="font-syne font-semibold text-sm text-zs-text mb-2">{item.name}</div>
                    <div className="font-dm text-xs text-zs-muted leading-relaxed">{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Network map */}
          <div className="glass-card rounded-2xl border border-zs-border p-6">
            <div className="font-mono text-xs text-zs-muted tracking-widest uppercase mb-6">
              Ecosystem Network Map
            </div>
            <svg viewBox="0 0 400 300" className="w-full">
              {/* Connection lines */}
              {connections.map(([from, to], i) => {
                const a = ecosystemNodes.find((n) => n.id === from)!;
                const b = ecosystemNodes.find((n) => n.id === to)!;
                const x1 = (a.x / 100) * 400;
                const y1 = (a.y / 100) * 300;
                const x2 = (b.x / 100) * 400;
                const y2 = (b.y / 100) * 300;
                return (
                  <line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="rgba(0,232,255,0.1)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="flow-path"
                  />
                );
              })}

              {/* Nodes */}
              {ecosystemNodes.map((node) => {
                const cx = (node.x / 100) * 400;
                const cy = (node.y / 100) * 300;
                const c = colorMap[node.color];
                const dotColor = node.color === "cyan" ? "#00E8FF" :
                  node.color === "violet" ? "#9F5FFF" :
                  node.color === "gold" ? "#F5A623" : "#00E087";
                const isCenter = node.primary;
                const r = isCenter ? 30 : 24;

                return (
                  <g key={node.id}>
                    {isCenter && (
                      <circle cx={cx} cy={cy} r={r + 10} fill="none" stroke="rgba(0,232,255,0.1)" strokeWidth="1">
                        <animate attributeName="r" values={`${r + 8};${r + 16};${r + 8}`} dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle
                      cx={cx} cy={cy} r={r}
                      fill="rgba(4,4,12,0.9)"
                      stroke={dotColor}
                      strokeWidth={isCenter ? "1.5" : "1"}
                      strokeOpacity={isCenter ? "0.6" : "0.3"}
                    />
                    <text
                      x={cx} y={cy - 4}
                      textAnchor="middle"
                      fill={dotColor}
                      fontSize={isCenter ? "11" : "9"}
                      fontFamily="monospace"
                      fontWeight={isCenter ? "bold" : "normal"}
                      fillOpacity={isCenter ? "0.95" : "0.75"}
                    >
                      {node.label.length > 10 ? node.label.split(" ")[0] : node.label}
                    </text>
                    {!isCenter && (
                      <text
                        x={cx} y={cy + 8}
                        textAnchor="middle"
                        fill={dotColor}
                        fontSize="7"
                        fontFamily="monospace"
                        fillOpacity="0.45"
                      >
                        {node.sub}
                      </text>
                    )}
                    {isCenter && (
                      <text
                        x={cx} y={cy + 9}
                        textAnchor="middle"
                        fill={dotColor}
                        fontSize="8"
                        fontFamily="monospace"
                        fillOpacity="0.5"
                      >
                        CORE
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
