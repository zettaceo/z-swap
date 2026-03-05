"use client";

const checks = [
  { label: "Honeypot Detection", status: "PASS", score: 100, color: "green" },
  { label: "Smart Contract Verify", status: "PASS", score: 96, color: "green" },
  { label: "Token Tax Analysis", status: "WARN", score: 72, color: "gold" },
  { label: "Rug Pull Indicators", status: "PASS", score: 100, color: "green" },
  { label: "Liquidity Lock", status: "PASS", score: 88, color: "green" },
  { label: "Sell Simulation", status: "PASS", score: 94, color: "green" },
  { label: "Overall Risk Score", status: "LOW", score: 18, color: "green" },
];

const colorMap: Record<string, { text: string; bar: string; badge: string }> = {
  green: { text: "text-zs-green", bar: "bg-zs-green", badge: "bg-zs-green/10 text-zs-green border-zs-green/20" },
  gold: { text: "text-zs-gold", bar: "bg-zs-gold", badge: "bg-zs-gold/10 text-zs-gold border-zs-gold/20" },
  red: { text: "text-zs-red", bar: "bg-zs-red", badge: "bg-zs-red/10 text-zs-red border-zs-red/20" },
};

export default function SecuritySection() {
  return (
    <section id="security" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="section-label mb-4">06 — Security Layer</div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="font-syne font-bold text-[clamp(1.8rem,3.5vw,3rem)] leading-tight text-zs-text mb-6">
              Multi-Layer{" "}
              <span className="text-zs-red">Risk Protection</span>
            </h2>
            <p className="font-dm text-zs-muted leading-relaxed mb-8">
              Before any token interaction, Z-SWAP runs a comprehensive security stack.
              Every token and contract is evaluated in real time — giving users complete
              risk visibility before committing any transaction.
            </p>

            <div className="space-y-3">
              {[
                {
                  icon: "🛡",
                  title: "Honeypot Detection",
                  desc: "Simulates buy and sell transactions off-chain to detect tokens that prevent selling.",
                },
                {
                  icon: "📋",
                  title: "Contract Verification",
                  desc: "Cross-references contract source code and bytecode against known malicious patterns.",
                },
                {
                  icon: "💧",
                  title: "Liquidity Lock Analysis",
                  desc: "Verifies LP token lock status, duration, and unlock schedule.",
                },
                {
                  icon: "⚠️",
                  title: "Rug Pull Indicators",
                  desc: "Analyzes ownership concentration, minting authority, and proxy upgrade capabilities.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl glass-card border border-zs-border">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-syne font-semibold text-sm text-zs-text mb-1">{item.title}</div>
                    <div className="font-dm text-xs text-zs-muted leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Risk panel */}
          <div className="glass-card rounded-2xl border border-zs-border overflow-hidden">
            <div className="px-6 py-4 border-b border-zs-border bg-zs-bg-3/50 flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-zs-muted tracking-widest uppercase">Security Report</div>
                <div className="font-syne font-semibold text-sm text-zs-text mt-0.5">TOKEN: EXAMPLE/USDC</div>
              </div>
              <div className="font-mono text-xs text-zs-muted">Live Demo</div>
            </div>

            <div className="p-6 space-y-4">
              {checks.map((check, i) => {
                const c = colorMap[check.color];
                return (
                  <div key={i} className={`${i === checks.length - 1 ? "pt-4 border-t border-zs-border" : ""}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-zs-text/80">{check.label}</span>
                      <span className={`tag-badge px-2 py-0.5 rounded border ${c.badge} text-[10px]`}>
                        {check.status}
                      </span>
                    </div>
                    {i < checks.length - 1 ? (
                      <div className="h-1.5 bg-zs-faint rounded-full overflow-hidden">
                        <div
                          className={`h-full ${c.bar} rounded-full transition-all duration-1000`}
                          style={{ width: `${check.score}%` }}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2.5 bg-zs-faint rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-zs-green to-zs-green/60 rounded-full"
                            style={{ width: `${check.score}%` }}
                          />
                        </div>
                        <span className={`font-syne font-bold text-xl ${c.text}`}>{check.score}</span>
                        <span className="font-mono text-xs text-zs-muted">/ 100</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="px-6 pb-6">
              <div className="p-4 rounded-xl bg-zs-green/5 border border-zs-green/20 flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-zs-green mt-1 flex-shrink-0 pulse-dot" />
                <div>
                  <div className="font-mono text-xs text-zs-green tracking-widest uppercase mb-1">Assessment Complete</div>
                  <p className="font-dm text-xs text-zs-muted leading-relaxed">
                    Low risk profile detected. All critical security checks passed.
                    Token tax detected at 2% — review before large transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
