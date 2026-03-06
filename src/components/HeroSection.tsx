"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const { t }     = useLang();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let raf: number;
    type Particle = { x: number; y: number; vx: number; vy: number; ox: number; oy: number; a: number; r: number; };

    const PARTICLE_COUNT = 55;
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
    <section className="relative flex flex-col min-h-screen min-h-dvh overflow-x-hidden grid-bg">
      <canvas ref={canvasRef} className="particle-canvas absolute inset-0 w-full h-full opacity-55 pointer-events-auto" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/4 w-64 sm:w-96 lg:w-[520px] h-64 sm:h-96 lg:h-[520px] rounded-full bg-zs-violet/10 blur-[100px] lg:blur-[130px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 rounded-full bg-zs-cyan/[0.06] blur-[80px] lg:blur-[100px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      {/*
       * ─── LAYOUT FIX ──────────────────────────────────────────────────────
       * ROOT CAUSE of dead space: `flex-1` with no `justify-center` = content
       * anchored to top with huge empty area below it.
       *
       * FIX: add `justify-center` so content is vertically centered in the
       * flex-1 area. Use `pt-14` (56px = nav height) as minimum top clearance
       * so content never slides behind the fixed nav bar.
       * ─────────────────────────────────────────────────────────────────────
       */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-12 pt-14 pb-6">

        {/* Badge */}
        <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
          <div className="h-px w-6 sm:w-10 bg-zs-cyan/40" />
          <span className="font-mono text-[9px] sm:text-[10px] lg:text-[11px] text-zs-cyan/70 border border-zs-cyan/20 px-2.5 py-1 rounded-full bg-zs-cyan/5 tracking-widest uppercase whitespace-nowrap">
            {t.hero.badge}
          </span>
          <div className="h-px w-6 sm:w-10 bg-zs-cyan/40" />
        </div>

        {/* Headline */}
        <h1 className="font-syne font-extrabold leading-[0.88] tracking-tight mb-4 sm:mb-6">
          <span className="block text-zs-text      text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7.5rem]">{t.hero.line1}</span>
          <span className="block text-gradient-cyan text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7.5rem]">{t.hero.line2}</span>
          <span className="block text-zs-text      text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7.5rem]">{t.hero.line3}</span>
        </h1>

        {/* Subtitle */}
        {/* Subtitle — left on mobile avoids word-gap stretch, centered on sm+ */}
        <p className="font-dm text-sm sm:text-base md:text-lg text-zs-muted max-w-xs sm:max-w-lg lg:max-w-2xl leading-relaxed mb-6 sm:mb-8 text-left sm:text-center">
          {t.hero.sub}
        </p>

        {/* CTAs — always flex-row */}
        <div className="flex flex-row items-center gap-3 sm:gap-4">
          <a href="#what-is" className="flex-shrink-0 whitespace-nowrap px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 bg-zs-cyan text-zs-bg font-syne font-bold text-[11px] sm:text-xs lg:text-sm tracking-widest uppercase rounded-xl hover:bg-zs-cyan-dim transition-colors duration-200">
            {t.hero.cta1}
          </a>
          <a href="#architecture" className="flex-shrink-0 whitespace-nowrap px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 border border-zs-border text-zs-text font-syne font-bold text-[11px] sm:text-xs lg:text-sm tracking-widest uppercase rounded-xl hover:border-zs-cyan/40 hover:text-zs-cyan transition-all duration-200">
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Stats strip — always 4 equal columns */}
      <div className="relative z-10 flex-shrink-0 border-t border-zs-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5 grid grid-cols-4">
          {([
            { value: "132+",  label: t.hero.stat1, color: "text-zs-cyan"          },
            { value: "7",     label: t.hero.stat2, color: "text-zs-cyan"          },
            { value: "Multi", label: t.hero.stat3, color: "text-zs-violet-bright" },
            { value: "VARA",  label: t.hero.stat4, color: "text-zs-gold"          },
          ] as const).map((stat, i) => (
            <div key={i} className="text-center px-1">
              <div className={`font-syne font-bold text-base sm:text-xl lg:text-2xl ${stat.color}`}>{stat.value}</div>
              <div className="font-mono text-[7px] sm:text-[9px] lg:text-[11px] text-zs-muted tracking-wider uppercase mt-0.5 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
