"use client";

export default function WhatIsSection() {
  const pillars = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Decentralized Swapping",
      desc: "Non-custodial token exchange with instant settlement across multiple liquidity sources.",
      color: "cyan",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" strokeLinecap="round" />
        </svg>
      ),
      title: "Liquidity Aggregation",
      desc: "Best-price routing across aggregated liquidity pools with automatic path optimization.",
      color: "violet",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "ZION AI Layer",
      desc: "AI-assisted market analysis, risk detection, and route optimization — advisory only.",
      color: "gold",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Multi-Chain Architecture",
      desc: "Cross-chain swap execution with unified liquidity across supported networks.",
      color: "cyan",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Security & Risk Layer",
      desc: "On-chain risk scoring, honeypot detection, smart contract verification at every step.",
      color: "violet",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Governance Layer",
      desc: "Decentralized protocol governance with delegated voting and parameter adjustments.",
      color: "gold",
    },
  ];

  const colorMap: Record<string, { text: string; bg: string; border: string }> = {
    cyan: { text: "text-zs-cyan", bg: "bg-zs-cyan/10", border: "border-zs-cyan/20" },
    violet: { text: "text-zs-violet-bright", bg: "bg-zs-violet/10", border: "border-zs-violet/20" },
    gold: { text: "text-zs-gold", bg: "bg-zs-gold/10", border: "border-zs-gold/20" },
  };

  return (
    <section id="what-is" className="relative py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-zs-cyan/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="section-label mb-4">01 — Protocol Definition</div>
          <h2 className="font-syne font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight text-zs-text mb-6">
            Not a DEX.{" "}
            <span className="text-gradient-cyan">A Liquidity Intelligence Platform.</span>
          </h2>
          <p className="font-dm text-zs-muted text-lg leading-relaxed">
            Z-SWAP is engineered as a modular infrastructure layer within the ZETTA ecosystem.
            It is designed to handle institutional-grade liquidity operations with a focus
            on intelligent routing, AI-assisted analysis, and comprehensive risk management —
            not simply token swapping.
          </p>
        </div>

        {/* Core pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zs-border rounded-2xl overflow-hidden">
          {pillars.map((pillar, i) => {
            const c = colorMap[pillar.color];
            return (
              <div
                key={i}
                className="glass-card p-8 hover:bg-zs-card/90 transition-colors duration-300 group"
              >
                <div className={`w-10 h-10 ${c.bg} border ${c.border} rounded-xl flex items-center justify-center ${c.text} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {pillar.icon}
                </div>
                <h3 className={`font-syne font-semibold text-base text-zs-text mb-3`}>
                  {pillar.title}
                </h3>
                <p className="font-dm text-sm text-zs-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Protocol positioning note */}
        <div className="mt-12 p-6 border border-zs-faint rounded-xl bg-zs-bg-3/50 flex gap-4">
          <div className="w-1 bg-gradient-to-b from-zs-cyan to-zs-violet rounded-full flex-shrink-0" />
          <div>
            <div className="font-mono text-xs text-zs-cyan tracking-widest uppercase mb-2">Regulatory Positioning</div>
            <p className="font-dm text-sm text-zs-muted leading-relaxed">
              Z-SWAP is architected with regulatory alignment as a foundational requirement,
              with particular focus on frameworks such as{" "}
              <span className="text-zs-text">VARA (Dubai)</span> and applicable{" "}
              <span className="text-zs-text">VASP frameworks</span>. The platform does not
              provide investment advice, guarantee returns, or execute transactions without
              explicit user authorization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
