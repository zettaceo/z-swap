"use client";

import { useLang } from "@/lib/i18n";

type RiskColor = "green" | "gold" | "red";

interface RiskCheck {
  label: string; status: string; score: number; color: RiskColor;
}

const checks: RiskCheck[] = [
  { label: "Honeypot Detection",    status: "PASS", score: 100, color: "green" },
  { label: "Contract Verification", status: "PASS", score: 96,  color: "green" },
  { label: "Token Tax Analysis",    status: "WARN", score: 72,  color: "gold"  },
  { label: "Rug Pull Indicators",   status: "PASS", score: 100, color: "green" },
  { label: "Liquidity Lock",        status: "PASS", score: 88,  color: "green" },
  { label: "MEV Protection",        status: "PASS", score: 100, color: "green" },
  { label: "Overall Risk Score",    status: "LOW",  score: 12,  color: "green" },
];

const colorMap: Record<RiskColor, { text: string; bar: string; badge: string }> = {
  green: { text: "text-zs-green", bar: "bg-zs-green", badge: "bg-zs-green/10 text-zs-green border-zs-green/20" },
  gold:  { text: "text-zs-gold",  bar: "bg-zs-gold",  badge: "bg-zs-gold/10 text-zs-gold border-zs-gold/20"   },
  red:   { text: "text-zs-red",   bar: "bg-zs-red",   badge: "bg-zs-red/10 text-zs-red border-zs-red/20"      },
};

const features = [
  { icon: "🛡", title: "Anti-MEV & Front-running", desc: "Native MEV protection and anti-sandwich attack mechanisms on every transaction." },
  { icon: "📋", title: "Contract Verification",    desc: "Cross-references contract source code against known malicious patterns and proxy exploits." },
  { icon: "💧", title: "Liquidity Lock Analysis",  desc: "Verifies LP token lock status, duration, and unlock schedule on-chain." },
  { icon: "🔒", title: "Privacy Mode",             desc: "Full transaction privacy with encrypted logs and randomized execution delay." },
];

export default function SecuritySection() {
  const { t } = useLang();

  return (
    <section id="security" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="section-label mb-3">{t.security.label}</div>

        {/* Stacked mobile → side-by-side from lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">

          {/* Left: heading + feature list */}
          <div>
            <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-zs-text mb-4 sm:mb-5">
              {t.security.title1}{" "}
              <span className="text-zs-red">{t.security.title2}</span>
            </h2>
            <p className="font-dm text-sm sm:text-base text-zs-muted leading-relaxed mb-6 sm:mb-8">
              {t.security.sub}
            </p>

            <div className="flex flex-col gap-2.5 sm:gap-3">
              {features.map((item, i) => (
                <div key={i} className="flex gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl glass-card border border-zs-border">
                  <span className="text-lg leading-none flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div className="min-w-0">
                    <div className="font-syne font-semibold text-sm sm:text-base text-zs-text mb-1">{item.title}</div>
                    <div className="font-dm text-[12px] sm:text-sm text-zs-muted/80 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: live risk report panel */}
          <div className="glass-card rounded-2xl border border-zs-border overflow-hidden min-w-0">
            {/* Panel header */}
            <div className="px-4 sm:px-5 py-3.5 border-b border-zs-border bg-zs-bg-3/50 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <div className="font-mono text-[11px] text-zs-muted tracking-[0.16em] uppercase">
                  Security Report
                </div>
                <div className="font-syne font-semibold text-sm sm:text-base text-zs-text mt-0.5 truncate">
                  TOKEN: EXAMPLE/USDC
                </div>
              </div>
              <div className="font-mono text-[10px] text-zs-muted border border-zs-faint rounded px-2 py-1 flex-shrink-0 tracking-[0.14em] uppercase">
                Live Demo
              </div>
            </div>

            {/* Checks */}
            <div className="p-4 sm:p-5 flex flex-col gap-3.5 sm:gap-4">
              {checks.map((check, i) => {
                const c = colorMap[check.color];
                const isLast = i === checks.length - 1;
                return (
                  <div key={i} className={isLast ? "pt-3.5 border-t border-zs-border" : ""}>
                    <div className="flex items-center justify-between mb-1.5 gap-2">
                      <span className="font-mono text-[11px] sm:text-[12px] text-zs-text/80 truncate">{check.label}</span>
                      <span className={`tag-badge px-2 py-0.5 rounded border text-[10px] sm:text-[11px] flex-shrink-0 ${c.badge}`}>
                        {check.status}
                      </span>
                    </div>
                    {isLast ? (
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2.5 bg-zs-faint rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-zs-green to-zs-green/60 rounded-full" style={{ width: `${check.score}%` }} />
                        </div>
                        <span className={`font-syne font-bold text-lg sm:text-xl ${c.text}`}>{check.score}</span>
                        <span className="font-mono text-xs text-zs-muted">/ 100</span>
                      </div>
                    ) : (
                      <div className="h-1.5 bg-zs-faint rounded-full overflow-hidden">
                        <div className={`h-full ${c.bar} rounded-full`} style={{ width: `${check.score}%` }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
              <div className="p-3 sm:p-4 rounded-xl bg-zs-green/[0.05] border border-zs-green/20 flex gap-2.5 sm:gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-zs-green mt-1 flex-shrink-0 pulse-dot" />
                <p className="font-dm text-[12px] sm:text-sm text-zs-muted/85 leading-relaxed">
                  <span className="text-zs-green font-semibold">Low risk profile detected.</span>{" "}
                  All critical checks passed. Token tax at 2% — review before large swaps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
