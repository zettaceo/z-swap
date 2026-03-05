"use client";

export default function CTASection() {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zs-cyan/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zs-bg-3 to-zs-bg" />

      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-zs-violet/6 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-zs-cyan/4 blur-[80px]" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="section-label mb-6">09 — Access Protocol</div>

        <h2 className="font-syne font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight mb-8">
          <span className="text-zs-text">READY TO</span>
          <br />
          <span className="text-gradient-cyan">BUILD WITH</span>
          <br />
          <span className="text-zs-text">Z-SWAP?</span>
        </h2>

        <p className="font-dm text-zs-muted text-lg max-w-xl mx-auto leading-relaxed mb-12">
          Z-SWAP is currently in development as part of the ZETTA ecosystem.
          Request early access or stay informed on protocol progress.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#"
            className="px-10 py-4 bg-zs-cyan text-zs-bg font-syne font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-zs-cyan-dim transition-colors duration-200"
          >
            Request Early Access
          </a>
          <a
            href="#"
            className="px-10 py-4 border border-zs-border text-zs-text font-syne font-semibold text-sm tracking-widest uppercase rounded-xl hover:border-zs-cyan/30 hover:text-zs-cyan transition-all duration-200"
          >
            Read Documentation
          </a>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { label: "Protocol Status", value: "In Development", color: "cyan" },
            { label: "Regulatory Focus", value: "VARA / VASP", color: "violet" },
            { label: "Ecosystem", value: "ZETTA Protocol", color: "gold" },
          ].map((item, i) => (
            <div key={i} className="glass-card border border-zs-border rounded-xl p-5 text-center">
              <div className={`font-mono text-xs tracking-widest uppercase mb-2 ${
                item.color === "cyan" ? "text-zs-cyan" :
                item.color === "violet" ? "text-zs-violet-bright" : "text-zs-gold"
              }`}>
                {item.label}
              </div>
              <div className="font-syne font-semibold text-sm text-zs-text">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
