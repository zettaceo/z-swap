"use client";

import { useLang } from "@/lib/i18n";

export default function CTASection() {
  const { t } = useLang();

  return (
    <section id="cta" className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-x-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zs-cyan/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zs-bg-3 to-zs-bg pointer-events-none" />
      {/* Ambient glows — sized in vw so they never overflow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] h-[min(600px,90vw)] rounded-full bg-zs-violet/[0.06] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(350px,60vw)] h-[min(350px,60vw)] rounded-full bg-zs-cyan/[0.04] blur-[70px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <div className="section-label mb-5">{t.cta.label}</div>

        {/* Headline — Tailwind scale, wraps gracefully */}
        <h2 className="font-syne font-extrabold leading-[0.92] tracking-tight mb-6 sm:mb-8">
          <span className="block text-zs-text   text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t.cta.line1}</span>
          <span className="block text-gradient-cyan text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t.cta.line2}</span>
          <span className="block text-zs-text   text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t.cta.line3}</span>
        </h2>

        <p className="font-dm text-sm sm:text-base md:text-lg text-zs-muted max-w-xl mx-auto leading-relaxed mb-7 sm:mb-10">
          {t.cta.sub}
        </p>

        {/* CTAs — stacked on 320px, row from sm */}
        <div className="flex flex-col gap-3 w-full max-w-xs mx-auto sm:flex-row sm:max-w-none sm:w-auto sm:justify-center sm:mx-0 mb-8 sm:mb-12">
          <a href="#"
            className="px-8 sm:px-10 py-3.5 sm:py-4 bg-zs-cyan text-zs-bg font-syne font-bold text-xs sm:text-sm tracking-widest uppercase rounded-xl hover:bg-zs-cyan-dim transition-colors duration-200 text-center whitespace-nowrap">
            {t.cta.btn1}
          </a>
          <a href="#"
            className="px-8 sm:px-10 py-3.5 sm:py-4 border border-zs-border text-zs-text font-syne font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-xl hover:border-zs-cyan/30 hover:text-zs-cyan transition-all duration-200 text-center whitespace-nowrap">
            {t.cta.btn2}
          </a>
        </div>

        {/* Status cards — 1 col mobile → 3 col sm+ */}
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {([
            { label: t.cta.status, value: t.cta.statusVal, color: "cyan"   as const },
            { label: t.cta.reg,    value: t.cta.regVal,    color: "violet" as const },
            { label: t.cta.eco,    value: t.cta.ecoVal,    color: "gold"   as const },
          ]).map((item, i) => (
            <div key={i} className="glass-card border border-zs-border rounded-xl p-4 sm:p-5 text-center">
              <div className={`font-mono text-[9px] sm:text-[10px] tracking-widest uppercase mb-2 font-bold ${
                item.color === "cyan" ? "text-zs-cyan" : item.color === "violet" ? "text-zs-violet-bright" : "text-zs-gold"
              }`}>{item.label}</div>
              <div className="font-syne font-semibold text-xs sm:text-sm text-zs-text">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
