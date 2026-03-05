"use client";

import { useLang } from "@/lib/i18n";

export default function CTASection() {
  const { t } = useLang();

  return (
    <section id="cta" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zs-cyan/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zs-bg-3 to-zs-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-zs-violet/6 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full bg-zs-cyan/4 blur-[80px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="section-label mb-5">{t.cta.label}</div>

        <h2 className="font-syne font-extrabold leading-none tracking-tight mb-7">
          <span className="block text-zs-text text-[2rem] sm:text-[3rem] lg:text-[5rem]">{t.cta.line1}</span>
          <span className="block text-gradient-cyan text-[2rem] sm:text-[3rem] lg:text-[5rem]">{t.cta.line2}</span>
          <span className="block text-zs-text text-[2rem] sm:text-[3rem] lg:text-[5rem]">{t.cta.line3}</span>
        </h2>

        <p className="font-dm text-zs-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10">{t.cta.sub}</p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-14">
          <a href="#" className="px-7 sm:px-10 py-3.5 sm:py-4 bg-zs-cyan text-zs-bg font-syne font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-zs-cyan-dim transition-colors duration-200">
            {t.cta.btn1}
          </a>
          <a href="#" className="px-7 sm:px-10 py-3.5 sm:py-4 border border-zs-border text-zs-text font-syne font-semibold text-sm tracking-widest uppercase rounded-xl hover:border-zs-cyan/30 hover:text-zs-cyan transition-all duration-200">
            {t.cta.btn2}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {[
            { label: t.cta.status, value: t.cta.statusVal, color: "cyan" },
            { label: t.cta.reg,    value: t.cta.regVal,    color: "violet" },
            { label: t.cta.eco,    value: t.cta.ecoVal,    color: "gold" },
          ].map((item, i) => (
            <div key={i} className="glass-card border border-zs-border rounded-xl p-4 sm:p-5 text-center">
              <div className={`font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-2 font-bold ${
                item.color === "cyan" ? "text-zs-cyan" : item.color === "violet" ? "text-zs-violet-bright" : "text-zs-gold"
              }`}>{item.label}</div>
              <div className="font-syne font-semibold text-sm text-zs-text">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
