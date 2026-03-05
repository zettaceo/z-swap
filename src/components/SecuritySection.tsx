"use client";

import { useLang } from "@/lib/i18n";

type RiskColor = "green" | "gold" | "red";

interface RiskCheck {
  label: string;
  status: string;
  score: number;
  color: RiskColor;
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

const colorMap: Record<"green" | "gold" | "red", { text: string; bar: string; badge: string }> = {
  green: { text: "text-zs-green", bar: "bg-zs-green",  badge: "bg-zs-green/10 text-zs-green border-zs-green/20" },
  gold:  { text: "text-zs-gold",  bar: "bg-zs-gold",   badge: "bg-zs-gold/10 text-zs-gold border-zs-gold/20"   },
  red:   { text: "text-zs-red",   bar: "bg-zs-red",    badge: "bg-zs-red/10 text-zs-red border-zs-red/20"      },
};

export default function SecuritySection() {
  const { t } = useLang();

  return (
    <section id="security" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-label mb-3">{t.security.label}</div>
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-start">
          <div>
            <h2 className="font-syne font-bold text-[clamp(1.6rem,3.5vw,3rem)] leading-tight text-zs-text mb-4 sm:mb-5">
              {t.security.title1}{" "}<span className="text-zs-red">{t.security.title2}</span>
            </h2>
            <p className="font-dm text-zs-muted text-sm leading-relaxed mb-6 sm:mb-8">{t.security.sub}</p>

            <div className="space-y-3">
              {[
                { icon: "🛡", title: "Anti-MEV & Front-running", desc: "Native MEV protection and anti-sandwich attack mechanisms on every transaction." },
                { icon: "📋", title: "Contract Verification", desc: "Cross-references contract source code against known malicious patterns and proxy exploits." },
                { icon: "💧", title: "Liquidity Lock Analysis", desc: "Verifies LP token lock status, duration, and unlock schedule on-chain." },
                { icon: "🔒", title: "Privacy Mode", desc: "Full transaction privacy with encrypted logs and randomized execution delay." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl glass-card border border-zs-border">
                  <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-syne font-semibold text-xs sm:text-sm text-zs-text mb-1">{item.title}</div>
                    <div className="font-dm text-xs text-zs-muted/80 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk panel */}
          <div className="glass-card rounded-2xl border border-zs-border overflow-hidden">
            <div className="px-5 py-3.5 border-b border-zs-border bg-zs-bg-3/50 flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] text-zs-muted tracking-widest uppercase">Security Report</div>
                <div className="font-syne font-semibold text-sm text-zs-text mt-0.5">TOKEN: EXAMPLE/USDC</div>
              </div>
              <div className="font-mono text-[10px] text-zs-muted border border-zs-faint rounded px-2 py-1">Live Demo</div>
            </div>

            <div className="p-5 space-y-4">
              {checks.map((check, i) => {
                const c = colorMap[check.color];
                return (
                  <div key={i} className={i === checks.length - 1 ? "pt-3.5 border-t border-zs-border" : ""}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[11px] sm:text-xs text-zs-text/80">{check.label}</span>
                      <span className={`tag-badge px-2 py-0.5 rounded border ${c.badge} text-[10px]`}>{check.status}</span>
                    </div>
                    {i < checks.length - 1 ? (
                      <div className="h-1.5 bg-zs-faint rounded-full overflow-hidden">
                        <div className={`h-full ${c.bar} rounded-full transition-all duration-1000`} style={{ width: `${check.score}%` }} />
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2.5 bg-zs-faint rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-zs-green to-zs-green/60 rounded-full" style={{ width: `${check.score}%` }} />
                        </div>
                        <span className={`font-syne font-bold text-xl ${c.text}`}>{check.score}</span>
                        <span className="font-mono text-xs text-zs-muted">/ 100</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="px-5 pb-5">
              <div className="p-3.5 sm:p-4 rounded-xl bg-zs-green/5 border border-zs-green/20 flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-zs-green mt-1 flex-shrink-0 pulse-dot" />
                <p className="font-dm text-xs text-zs-muted/85 leading-relaxed">
                  <span className="text-zs-green font-semibold">Low risk profile detected.</span> All critical checks passed. Token tax at 2% — review before large swaps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
