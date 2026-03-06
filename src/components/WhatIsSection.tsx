"use client";

import { useLang } from "@/lib/i18n";

type PillarColor = "cyan" | "violet" | "gold" | "red" | "green";

interface Pillar {
  icon: string;
  title: string;
  desc: string;
  color: PillarColor;
}

const pillars: Pillar[] = [
  { icon: "⚡", title: "Decentralized Swapping",    desc: "Non-custodial token exchange with instant settlement across multiple liquidity sources.",                    color: "cyan"   },
  { icon: "🔀", title: "Liquidity Aggregation",     desc: "Best-price routing across aggregated liquidity pools with automatic path optimization.",                   color: "violet" },
  { icon: "🧠", title: "ZION AI Layer",             desc: "AI-assisted market analysis, risk detection, and route optimization — advisory only.",                     color: "gold"   },
  { icon: "🔗", title: "Multi-Chain Architecture",  desc: "Cross-chain swap execution with unified liquidity across supported networks.",                              color: "cyan"   },
  { icon: "🛡", title: "Security & Risk Layer",     desc: "On-chain risk scoring, honeypot detection, smart contract verification at every step.",                    color: "red"    },
  { icon: "💳", title: "Z-PAY Settlement",          desc: "Powers all fiat↔crypto conversions for Z-PAY — the settlement backbone of ZETTA payments.",               color: "green"  },
];

const colorMap: Record<PillarColor, { text: string; bg: string; border: string }> = {
  cyan:   { text: "text-zs-cyan",          bg: "bg-zs-cyan/[0.08]",   border: "border-zs-cyan/20"   },
  violet: { text: "text-zs-violet-bright", bg: "bg-zs-violet/[0.08]", border: "border-zs-violet/20" },
  gold:   { text: "text-zs-gold",          bg: "bg-zs-gold/[0.08]",   border: "border-zs-gold/20"   },
  red:    { text: "text-zs-red",           bg: "bg-zs-red/[0.08]",    border: "border-zs-red/20"    },
  green:  { text: "text-zs-green",         bg: "bg-zs-green/[0.08]",  border: "border-zs-green/20"  },
};

export default function WhatIsSection() {
  const { t } = useLang();

  return (
    <section id="what-is" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zs-cyan/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="section-label mb-3">{t.whatIs.label}</div>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-zs-text mb-4">
            {t.whatIs.title1}{" "}
            <span className="text-gradient-cyan">{t.whatIs.title2}</span>
          </h2>
          <p className="font-dm text-sm sm:text-base md:text-lg text-zs-muted leading-relaxed">{t.whatIs.sub}</p>
        </div>

        {/* Pillar grid — 1 col → 2 col → 3 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zs-border rounded-2xl overflow-hidden mb-6 sm:mb-8">
          {pillars.map((p, i) => {
            const c = colorMap[p.color];
            return (
              <div key={i} className="glass-card p-5 sm:p-6 lg:p-8 hover:bg-zs-card/90 transition-colors duration-300 group">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 ${c.bg} border ${c.border} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 text-lg sm:text-xl`}>
                  {p.icon}
                </div>
                <h3 className="font-syne font-semibold text-sm sm:text-base text-zs-text mb-2">{p.title}</h3>
                <p className="font-dm text-xs sm:text-sm text-zs-muted/85 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Regulatory note */}
        <div className="p-4 sm:p-5 lg:p-6 border border-zs-faint rounded-xl bg-zs-bg-3/50 flex gap-3 sm:gap-4">
          <div className="w-0.5 sm:w-1 bg-gradient-to-b from-zs-cyan to-zs-violet rounded-full flex-shrink-0" />
          <div>
            <div className="font-mono text-[10px] sm:text-xs text-zs-cyan tracking-widest uppercase mb-2">{t.whatIs.reg}</div>
            <p className="font-dm text-xs sm:text-sm text-zs-muted leading-relaxed">{t.whatIs.regText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
