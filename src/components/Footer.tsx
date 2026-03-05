export default function Footer() {
  return (
    <footer className="border-t border-zs-border bg-zs-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-zs-cyan/40 rounded-lg flex items-center justify-center">
                <span className="font-syne font-bold text-zs-cyan text-sm">Z</span>
              </div>
              <span className="font-syne font-bold text-zs-text">Z-SWAP</span>
            </div>
            <p className="font-dm text-xs text-zs-muted leading-relaxed max-w-xs">
              An intelligent liquidity infrastructure layer within the ZETTA ecosystem.
              Designed for long-term protocol-level operations.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-zs-green pulse-dot" />
              <span className="font-mono text-xs text-zs-muted tracking-widest">PROTOCOL IN DEVELOPMENT</span>
            </div>
          </div>

          {/* Protocol */}
          <div>
            <div className="font-mono text-xs text-zs-muted tracking-widest uppercase mb-4">Protocol</div>
            <div className="space-y-2.5">
              {["Architecture", "ZION AI Layer", "Security Module", "Governance", "Ecosystem"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block font-dm text-xs text-zs-muted hover:text-zs-text transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* ZETTA */}
          <div>
            <div className="font-mono text-xs text-zs-muted tracking-widest uppercase mb-4">ZETTA Ecosystem</div>
            <div className="space-y-2.5">
              {["ZETTA Wallet", "ZION AI", "Z-Finance", "Z-PAD", "ZETTA Chain"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block font-dm text-xs text-zs-muted hover:text-zs-text transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="divider-glow mb-6" />
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="font-mono text-[11px] text-zs-muted">
            © 2024 ZETTA Ecosystem. Z-SWAP Protocol. All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-zs-muted max-w-md text-right leading-relaxed">
            Z-SWAP is infrastructure software. It does not constitute financial advice,
            investment recommendations, or guarantees of any kind.
          </div>
        </div>
      </div>
    </footer>
  );
}
