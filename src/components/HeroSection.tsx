"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      alpha: number; size: number;
    }> = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        alpha: Math.random() * 0.28 + 0.06,
        size: Math.random() * 1.4 + 0.4,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,232,255,${0.045 * (1 - d / 100)})`;
            ctx.lineWidth   = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle = `rgba(0,232,255,${p.alpha})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    /**
     * Root: flex-col, min-h-screen.
     * Content area: flex-1 + flex-col + justify-center → vertically centered,
     * no dead whitespace because the section fills exactly the viewport and
     * the content sits in the middle of the remaining space after nav (pt-14).
     * Stats strip: always pinned at bottom via natural flow (not absolutely positioned).
     */
    <section className="relative flex flex-col min-h-screen overflow-hidden grid-bg">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50 pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] rounded-full bg-zs-violet/8 blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[220px] sm:w-[380px] h-[220px] sm:h-[380px] rounded-full bg-zs-cyan/5 blur-[80px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* ─── Centred content block ─────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-14 pb-6">

        {/* Badge */}
        <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
          <div className="h-px w-6 sm:w-10 bg-zs-cyan/40" />
          <span className="font-mono text-[9px] sm:text-[10px] text-zs-cyan/70 border border-zs-cyan/20 px-2.5 py-1 rounded-full bg-zs-cyan/5 tracking-widest uppercase">
            {t.hero.badge}
          </span>
          <div className="h-px w-6 sm:w-10 bg-zs-cyan/40" />
        </div>

        {/* Hero title
            clamp(min, preferred, max):
            mobile 360px → ~2.4rem | tablet 768px → ~5.5rem | desktop 1440px → 7rem
        */}
        <h1 className="font-syne font-extrabold leading-[0.9] tracking-tight mb-4 sm:mb-5">
          <span className="block text-zs-text"        style={{ fontSize: "clamp(2.2rem, 8.5vw, 7rem)" }}>{t.hero.line1}</span>
          <span className="block text-gradient-cyan"  style={{ fontSize: "clamp(2.2rem, 8.5vw, 7rem)" }}>{t.hero.line2}</span>
          <span className="block text-zs-text"        style={{ fontSize: "clamp(2.2rem, 8.5vw, 7rem)" }}>{t.hero.line3}</span>
        </h1>

        {/* Subtitle */}
        <p className="font-dm text-sm sm:text-base lg:text-lg text-zs-muted max-w-xs sm:max-w-lg lg:max-w-2xl leading-relaxed mb-6 sm:mb-8">
          {t.hero.sub}
        </p>

        {/* CTAs — always side-by-side (flex-row) */}
        <div className="flex flex-row gap-3 sm:gap-4">
          <a
            href="#what-is"
            className="px-5 sm:px-8 py-2.5 sm:py-3 bg-zs-cyan text-zs-bg font-syne font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-xl hover:bg-zs-cyan-dim transition-colors duration-200 whitespace-nowrap"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#architecture"
            className="px-5 sm:px-8 py-2.5 sm:py-3 border border-zs-border text-zs-text font-syne font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-xl hover:border-zs-cyan/40 hover:text-zs-cyan transition-all duration-200 whitespace-nowrap"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* ─── Stats strip ─────────────────────────────────────────────────── */}
      <div className="relative z-10 border-t border-zs-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 grid grid-cols-4 gap-2">
          {([
            { value: "132+",  label: t.hero.stat1, color: "text-zs-cyan"           },
            { value: "7",     label: t.hero.stat2, color: "text-zs-cyan"           },
            { value: "Multi", label: t.hero.stat3, color: "text-zs-violet-bright"  },
            { value: "VARA",  label: t.hero.stat4, color: "text-zs-gold"           },
          ] as const).map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`font-syne font-bold text-sm sm:text-xl lg:text-2xl ${stat.color}`}>
                {stat.value}
              </div>
              <div className="font-mono text-[7px] sm:text-[9px] lg:text-[11px] text-zs-muted tracking-wider uppercase mt-0.5 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
