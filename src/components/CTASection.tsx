"use client";

import { useLang } from "@/lib/i18n";

export default function CTASection() {
  const { t } = useLang();

  return (
    <section id="cta" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-x-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zs-cyan/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zs-bg-3 to-zs-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] h-[min(600px,90vw)] rounded-full bg-zs-violet/[0.06] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(350px,60vw)] h-[min(350px,60vw)] rounded-full bg-zs-cyan/[0.04] blur-[70px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 text-center">
        <div className="section-label mb-6">{t.cta.label}</div>

        <h2 className="font-syne font-extrabold tracking-[-0.03em] mb-6 sm:mb-8">
          <span className="block text-zs-text text-[clamp(1.75rem,5.5vw,4.5rem)] leading-[0.95]">{t.cta.line1}</span>
          <span className="block text-gradient-cyan text-[clamp(1.75rem,5.5vw,4.5rem)] leading-[0.95] py-1">{t.cta.line2}</span>
          <span className="block text-zs-text text-[clamp(1.75rem,5.5vw,4.5rem)] leading-[0.95]">{t.cta.line3}</span>
        </h2>

        <p className="font-dm text-sm sm:text-base lg:text-lg text-zs-muted max-w-xl mx-auto leading-[1.7] mb-8 sm:mb-10 text-center">
          {t.cta.sub}
        </p>

        <div className="flex flex-col gap-3 w-full max-w-xs mx-auto sm:flex-row sm:max-w-none sm:w-auto sm:justify-center sm:mx-0 mb-10 sm:mb-14">
          <a href="#"
            className="px-8 sm:px-10 py-3.5 sm:py-4 bg-zs-cyan text-zs-bg font-syne font-bold text-xs sm:text-sm tracking-[0.15em] uppercase rounded-xl hover:bg-zs-cyan-dim transition-all duration-300 text-center whitespace-nowrap hover:shadow-[0_0_30px_rgba(0,232,255,0.25)]">
            {t.cta.btn1}
          </a>
          <a href="#"
            className="px-8 sm:px-10 py-3.5 sm:py-4 border border-zs-border text-zs-text font-syne font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase rounded-xl hover:border-zs-cyan/30 hover:text-zs-cyan transition-all duration-300 text-center whitespace-nowrap">
            {t.cta.btn2}
          </a>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {([
            { label: t.cta.status, value: t.cta.statusVal, color: "cyan"   as const },
            { label: t.cta.reg,    value: t.cta.regVal,    color: "violet" as const },
            { label: t.cta.eco,    value: t.cta.ecoVal,    color: "gold"   as const },
          ]).map((item, i) => (
            <div key={i} className="glass-card border border-zs-border rounded-xl p-4 sm:p-5 text-center">
              <div className={`font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase mb-2 font-bold ${
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
