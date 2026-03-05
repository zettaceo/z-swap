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
      x: number; y: number; vx: number; vy: number; alpha: number; size: number;
    }> = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.25 + 0.05,
        size: Math.random() * 1.2 + 0.4,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,232,255,${0.04 * (1 - d / 90)})`;
            ctx.lineWidth = 0.5;
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
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden grid-bg">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-56 sm:w-96 lg:w-[500px] h-56 sm:h-96 lg:h-[500px] rounded-full bg-zs-violet/8 blur-[80px] lg:blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-72 lg:w-96 h-40 sm:h-72 lg:h-96 rounded-full bg-zs-cyan/5 blur-[60px] lg:blur-[90px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* ── Centred content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-12 pt-20 pb-8 sm:pt-24 sm:pb-10">
        {/* Badge */}
        <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
          <div className="h-px w-5 sm:w-8 bg-zs-cyan/40" />
          <span className="font-mono text-[9px] sm:text-[10px] text-zs-cyan/70 border border-zs-cyan/20 px-2 sm:px-3 py-1 rounded-full bg-zs-cyan/5 tracking-widest uppercase">
            {t.hero.badge}
          </span>
          <div className="h-px w-5 sm:w-8 bg-zs-cyan/40" />
        </div>

        {/* Headline — Tailwind scale, no clamp, no fixed px */}
        <h1 className="font-syne font-extrabold leading-[0.92] tracking-tight mb-4 sm:mb-5 md:mb-6">
          <span className="block text-zs-text   text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{t.hero.line1}</span>
          <span className="block text-gradient-cyan text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{t.hero.line2}</span>
          <span className="block text-zs-text   text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{t.hero.line3}</span>
        </h1>

        {/* Sub */}
        <p className="font-dm text-sm sm:text-base md:text-lg text-zs-muted max-w-sm sm:max-w-xl lg:max-w-2xl leading-relaxed mb-6 sm:mb-8">
          {t.hero.sub}
        </p>

        {/* CTAs — flex-col on 320–479px, flex-row from sm upward */}
        <div className="flex flex-col gap-3 w-full max-w-xs xs:flex-row xs:max-w-none xs:w-auto sm:flex-row sm:gap-4 justify-center">
          <a
            href="#what-is"
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-zs-cyan text-zs-bg font-syne font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-xl hover:bg-zs-cyan-dim transition-colors duration-200 text-center whitespace-nowrap"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#architecture"
            className="px-6 sm:px-8 py-3 sm:py-3.5 border border-zs-border text-zs-text font-syne font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-xl hover:border-zs-cyan/40 hover:text-zs-cyan transition-all duration-200 text-center whitespace-nowrap"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* ── Stats strip — always 4 columns ── */}
      <div className="relative z-10 border-t border-zs-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5 grid grid-cols-4 gap-2 sm:gap-6">
          {([
            { value: "132+",  label: t.hero.stat1, color: "text-zs-cyan"          },
            { value: "7",     label: t.hero.stat2, color: "text-zs-cyan"          },
            { value: "Multi", label: t.hero.stat3, color: "text-zs-violet-bright" },
            { value: "VARA",  label: t.hero.stat4, color: "text-zs-gold"          },
          ] as const).map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`font-syne font-bold text-sm sm:text-xl lg:text-2xl ${stat.color}`}>{stat.value}</div>
              <div className="font-mono text-[7px] sm:text-[9px] lg:text-[11px] text-zs-muted tracking-wider uppercase mt-0.5 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
