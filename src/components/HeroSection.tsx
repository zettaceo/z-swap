"use client";

import { useEffect, useMemo, useRef } from "react";
import { useLang } from "@/lib/i18n";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const { t, lang } = useLang();

  const headlineScale = useMemo(() => {
    if (lang === "pt" || lang === "es") return "text-[clamp(3rem,12vw,6.4rem)] sm:text-[clamp(3.5rem,9vw,6.9rem)]";
    if (lang === "zh") return "text-[clamp(3.25rem,13vw,6rem)] sm:text-[clamp(3.75rem,10vw,6.6rem)]";
    return "text-[clamp(3rem,12vw,7rem)] sm:text-[clamp(3.5rem,9vw,7.4rem)]";
  }, [lang]);

  const heroStats = [
    { value: "132+", label: t.hero.stat1, accent: "text-zs-cyan" },
    { value: "7", label: t.hero.stat2, accent: "text-zs-violet-bright" },
    { value: "Multi", label: t.hero.stat3, accent: "text-zs-text" },
    { value: "VARA", label: t.hero.stat4, accent: "text-zs-gold" },
  ] as const;

  const trustSignals = [t.hero.feature1, t.hero.feature2, t.hero.feature3];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let raf: number;
    type Particle = { x: number; y: number; vx: number; vy: number; ox: number; oy: number; a: number; r: number; };

    const PARTICLE_COUNT =
      window.innerWidth < 640 ? 28 :
      window.innerWidth < 1024 ? 40 :
      55;
    const CONNECTION_DIST = 100;
    const MOUSE_REPEL_DIST = 110;
    const MOUSE_REPEL_FORCE = 0.35;
    const pts: Particle[] = [];

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const vx = (Math.random() - 0.5) * 0.22;
      const vy = (Math.random() - 0.5) * 0.22;
      pts.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx, vy, ox: vx, oy: vy, a: Math.random() * 0.20 + 0.06, r: Math.random() * 1.0 + 0.4 });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx*dx + dy*dy);
          if (d < CONNECTION_DIST) {
            ctx.beginPath(); ctx.strokeStyle = `rgba(0,232,255,${0.045*(1-d/CONNECTION_DIST)})`; ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        const dx = p.x - mx, dy = p.y - my, d = Math.sqrt(dx*dx + dy*dy);
        if (d < MOUSE_REPEL_DIST && d > 0) { const force = (1 - d/MOUSE_REPEL_DIST)*MOUSE_REPEL_FORCE; p.vx += (dx/d)*force; p.vy += (dy/d)*force; }
        p.vx += (p.ox - p.vx)*0.03; p.vy += (p.oy - p.vy)*0.03;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        const nearMouse = d < MOUSE_REPEL_DIST;
        ctx.beginPath(); ctx.fillStyle = `rgba(0,232,255,${nearMouse ? Math.min(p.a*2.2, 0.85) : p.a})`; ctx.arc(p.x, p.y, nearMouse ? p.r*1.6 : p.r, 0, Math.PI*2); ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onMouseMove  = (e: MouseEvent) => { const r = canvas.getBoundingClientRect(); mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    const onTouchMove  = (e: TouchEvent) => { if (!e.touches[0]) return; const r = canvas.getBoundingClientRect(); mouseRef.current = { x: e.touches[0].clientX - r.left, y: e.touches[0].clientY - r.top }; };
    const onTouchEnd   = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    window.addEventListener("mousemove",  onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove",  onTouchMove,  { passive: true });
    canvas.addEventListener("touchend",   onTouchEnd,   { passive: true });

    return () => {
      cancelAnimationFrame(raf); ro.disconnect();
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove",  onTouchMove);
      canvas.removeEventListener("touchend",   onTouchEnd);
    };
  }, []);

  return (
    <section className="relative overflow-x-hidden grid-bg">
      <canvas ref={canvasRef} className="particle-canvas absolute inset-0 w-full h-full opacity-45 pointer-events-auto" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-32 sm:h-40 bg-gradient-to-b from-zs-bg via-zs-bg/70 to-transparent pointer-events-none" />
      <div className="absolute top-28 left-[8%] w-64 sm:w-80 lg:w-[520px] h-64 sm:h-80 lg:h-[520px] rounded-full bg-zs-violet/10 blur-[100px] lg:blur-[130px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-20 right-[6%] w-48 sm:w-72 lg:w-[420px] h-48 sm:h-72 lg:h-[420px] rounded-full bg-zs-cyan/[0.05] blur-[90px] lg:blur-[110px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 min-h-dvh">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-[calc(var(--nav-h)+1.5rem)] sm:pt-[calc(var(--nav-h)+2rem)] lg:pt-[calc(var(--nav-h)+3rem)] pb-10 sm:pb-12 lg:pb-14 min-h-dvh flex items-center">
          <div className="grid w-full items-center gap-8 sm:gap-10 lg:gap-14 xl:gap-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)]">
            <div className="max-w-[42rem]">
              <div className="mb-5 sm:mb-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <div className="h-px w-8 sm:w-12 bg-zs-cyan/35" />
                <span className="font-mono text-[10px] sm:text-[11px] text-zs-cyan/80 border border-zs-cyan/20 px-3 py-1.5 rounded-full bg-zs-cyan/5 tracking-[0.24em] uppercase">
                  {t.hero.badge}
                </span>
              </div>

              <h1 className="font-syne font-extrabold leading-[0.84] tracking-[-0.05em] text-left mb-5 sm:mb-6">
                <span className={`block text-zs-text ${headlineScale}`}>{t.hero.line1}</span>
                <span className={`block text-gradient-cyan ${headlineScale}`}>{t.hero.line2}</span>
                <span className={`block text-zs-text ${headlineScale}`}>{t.hero.line3}</span>
              </h1>

              <p className="font-dm text-[15px] sm:text-lg xl:text-[1.25rem] text-zs-text/78 max-w-[62ch] leading-[1.72] mb-7 sm:mb-8">
                {t.hero.sub}
              </p>

              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 items-stretch xs:items-center">
                <a
                  href="#what-is"
                  className="inline-flex justify-center items-center px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 bg-zs-cyan text-zs-bg font-syne font-bold text-[11px] sm:text-xs lg:text-sm tracking-[0.18em] uppercase rounded-xl hover:bg-zs-cyan-dim transition-colors duration-200"
                >
                  {t.hero.cta1}
                </a>
                <a
                  href="#architecture"
                  className="inline-flex justify-center items-center px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 border border-zs-border text-zs-text font-syne font-bold text-[11px] sm:text-xs lg:text-sm tracking-[0.18em] uppercase rounded-xl hover:border-zs-cyan/40 hover:text-zs-cyan transition-all duration-200"
                >
                  {t.hero.cta2}
                </a>
              </div>

              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2.5">
                {trustSignals.map((signal, index) => (
                  <div
                    key={signal}
                    className="inline-flex items-center gap-2 rounded-full border border-zs-faint/70 bg-zs-bg-3/55 px-3 py-2 text-zs-text/70"
                  >
                    <span className="font-mono text-[10px] text-zs-cyan/80 tracking-[0.18em] uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-dm text-[12px] sm:text-[13px] leading-none">
                      {signal}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:justify-self-end w-full max-w-xl">
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-br from-zs-violet/20 via-zs-cyan/10 to-transparent blur-3xl pointer-events-none" />
              <div className="hero-frame relative rounded-[28px] border border-zs-border/80 p-5 sm:p-6 lg:p-7 overflow-hidden">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-zs-cyan/45 to-transparent" />
                <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                  <span className="font-mono text-[10px] sm:text-[11px] text-zs-cyan/80 tracking-[0.22em] uppercase">
                    {t.hero.panelLabel}
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] text-zs-green/75 tracking-[0.18em] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-zs-green pulse-dot" />
                    Live
                  </span>
                </div>

                <div className="mb-6 sm:mb-7">
                  <h2 className="font-syne font-bold text-2xl sm:text-[2rem] lg:text-[2.3rem] leading-[1.02] text-zs-text mb-3">
                    {t.hero.panelTitle}
                  </h2>
                  <p className="font-dm text-sm sm:text-[15px] lg:text-base text-zs-muted/95 leading-[1.75]">
                    {t.hero.panelCopy}
                  </p>
                </div>

                <div className="space-y-3 mb-6 sm:mb-7">
                  {trustSignals.map((signal, index) => (
                    <div
                      key={`${signal}-${index}`}
                      className="flex items-center gap-3 rounded-2xl border border-zs-faint/60 bg-zs-bg/45 px-4 py-3"
                    >
                      <div className="w-9 h-9 rounded-xl bg-zs-cyan/10 border border-zs-cyan/20 flex items-center justify-center flex-shrink-0">
                        <span className="font-mono text-[10px] text-zs-cyan tracking-[0.14em]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="font-dm text-sm sm:text-[15px] text-zs-text/88 leading-snug">
                        {signal}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-zs-faint/60 bg-zs-bg/60 px-4 py-4 sm:px-5 sm:py-5">
                      <div className={`font-syne font-bold text-xl sm:text-2xl lg:text-[1.75rem] ${stat.accent}`}>
                        {stat.value}
                      </div>
                      <div className="mt-1.5 font-mono text-[10px] sm:text-[11px] text-zs-muted tracking-[0.16em] uppercase leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
