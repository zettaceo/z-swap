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
    type Particle = { x: number; y: number; vx: number; vy: number; ox: number; oy: number; a: number; r: number };

    const PARTICLE_COUNT    = 90;
    const CONNECTION_DIST   = 130;
    const MOUSE_REPEL_DIST  = 145;
    const MOUSE_REPEL_FORCE = 0.45;
    const pts: Particle[]   = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const vx = (Math.random() - 0.5) * 0.28;
      const vy = (Math.random() - 0.5) * 0.28;
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx, vy, ox: vx, oy: vy,
        a: Math.random() * 0.3 + 0.07,
        r: Math.random() * 1.3 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,232,255,${0.07 * (1 - d / CONNECTION_DIST)})`;
            ctx.lineWidth   = 0.65;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      pts.forEach((p) => {
        const dx = p.x - mx;
        const dy = p.y - my;
        const d  = Math.sqrt(dx * dx + dy * dy);

        if (d < MOUSE_REPEL_DIST && d > 0) {
          const force = (1 - d / MOUSE_REPEL_DIST) * MOUSE_REPEL_FORCE;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
        }

        p.vx += (p.ox - p.vx) * 0.03;
        p.vy += (p.oy - p.vy) * 0.03;
        p.x  += p.vx;
        p.y  += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const near = d < MOUSE_REPEL_DIST;
        ctx.beginPath();
        ctx.fillStyle = `rgba(0,232,255,${near ? Math.min(p.a * 2.6, 0.92) : p.a})`;
        ctx.arc(p.x, p.y, near ? p.r * 1.9 : p.r, 0, Math.PI * 2);
        ctx.fill();
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
    canvas.addEventListener("touchmove",  onTouchMove, { passive: true });
    canvas.addEventListener("touchend",   onTouchEnd,  { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove",  onTouchMove);
      canvas.removeEventListener("touchend",   onTouchEnd);
    };
  }, []);

  return (
    <section className="hero-section relative flex flex-col overflow-hidden grid-bg">

      {/* ── Canvas particle field ── */}
      <canvas
        ref={canvasRef}
        className="particle-canvas absolute inset-0 w-full h-full opacity-65 pointer-events-auto"
        aria-hidden="true"
      />

      {/* ── Ambient glow orbs ── */}
      <div className="absolute -top-16 left-[15%] w-[22rem] sm:w-[36rem] lg:w-[46rem] h-[22rem] sm:h-[36rem] lg:h-[46rem] rounded-full bg-zs-violet/[0.11] blur-[110px] sm:blur-[140px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[18rem] sm:w-[28rem] lg:w-[38rem] h-[18rem] sm:h-[28rem] lg:h-[38rem] rounded-full bg-zs-cyan/[0.07] blur-[90px] sm:blur-[120px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "2.5s" }} />
      <div className="absolute top-1/2 right-[5%] w-40 sm:w-60 h-40 sm:h-60 rounded-full bg-zs-violet/[0.08] blur-[70px] pointer-events-none" style={{ animationDelay: "1.2s" }} />

      {/* ── Bottom vignette — blends hero into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-t from-zs-bg via-zs-bg/40 to-transparent pointer-events-none z-[1]" />

      {/* ── Nav height spacer (real flex item, not padding) ──────────────────
           This is the key layout fix: a real DOM element that occupies the
           nav height in the flex column, so justify-center in the content
           div calculates center from BELOW the nav — no dead space above.
      ── */}
      <div className="h-14 flex-shrink-0" aria-hidden="true" />

      {/* ── Main content — perfectly vertically centered ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-10 lg:px-16">

        {/* Badge */}
        <div className="mb-5 sm:mb-7 lg:mb-8 flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:block h-px w-8 lg:w-12 bg-gradient-to-r from-transparent to-zs-cyan/50" aria-hidden="true" />
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-zs-cyan/25 bg-zs-cyan/[0.06] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-zs-cyan animate-pulse-slow flex-shrink-0" aria-hidden="true" />
            <span className="font-mono text-[9px] sm:text-[10px] lg:text-[11px] text-zs-cyan/85 tracking-[0.22em] uppercase whitespace-nowrap select-none">
              {t.hero.badge}
            </span>
          </div>
          <div className="hidden sm:block h-px w-8 lg:w-12 bg-gradient-to-l from-transparent to-zs-cyan/50" aria-hidden="true" />
        </div>

        {/* Headline — fluid clamp scaling, no breakpoint jumps */}
        <h1 className="hero-headline font-syne font-extrabold tracking-tight mb-5 sm:mb-7 lg:mb-8">
          <span className="block text-zs-text">{t.hero.line1}</span>
          <span className="block text-gradient-cyan">{t.hero.line2}</span>
          <span className="block text-zs-text">{t.hero.line3}</span>
        </h1>

        {/* Subtitle */}
        <p className="font-dm text-[0.8125rem] sm:text-sm md:text-[0.9375rem] lg:text-base text-zs-muted/90
                      w-[min(88vw,32rem)] sm:w-auto sm:max-w-md lg:max-w-[38rem]
                      leading-[1.8] sm:leading-[1.75] mb-7 sm:mb-9 lg:mb-10 text-center">
          {t.hero.sub}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-row items-center gap-3 sm:gap-4">
          <a
            href="#what-is"
            className="flex-shrink-0 whitespace-nowrap
                       px-5 sm:px-7 lg:px-9 py-2.5 sm:py-3 lg:py-3.5
                       bg-zs-cyan text-zs-bg
                       font-syne font-bold text-[11px] sm:text-[12px] lg:text-[13px] tracking-[0.15em] uppercase
                       rounded-xl
                       hover:bg-zs-cyan-dim hover:shadow-[0_0_28px_rgba(0,232,255,0.4)]
                       transition-all duration-200 active:scale-95"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#architecture"
            className="flex-shrink-0 whitespace-nowrap
                       px-5 sm:px-7 lg:px-9 py-2.5 sm:py-3 lg:py-3.5
                       border border-zs-border text-zs-text/85
                       font-syne font-bold text-[11px] sm:text-[12px] lg:text-[13px] tracking-[0.15em] uppercase
                       rounded-xl
                       hover:border-zs-cyan/45 hover:text-zs-cyan hover:shadow-[0_0_18px_rgba(0,232,255,0.12)]
                       transition-all duration-200 active:scale-95"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* ── Stats strip — pinned to bottom ── */}
      <div className="relative z-10 flex-shrink-0 border-t border-zs-border/50 bg-zs-bg/25 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3.5 sm:py-5 grid grid-cols-4 divide-x divide-zs-border/35">
          {([
            { value: "132+",  label: t.hero.stat1, color: "text-zs-cyan"          },
            { value: "7",     label: t.hero.stat2, color: "text-zs-cyan"          },
            { value: "Multi", label: t.hero.stat3, color: "text-zs-violet-bright" },
            { value: "VARA",  label: t.hero.stat4, color: "text-zs-gold"          },
          ] as const).map((stat, i) => (
            <div key={i} className="text-center px-2 sm:px-4 lg:px-6">
              <div className={`font-syne font-extrabold text-lg sm:text-2xl lg:text-[1.75rem] leading-none ${stat.color}`}>
                {stat.value}
              </div>
              <div className="font-mono text-[7px] sm:text-[8px] lg:text-[10px] text-zs-muted tracking-[0.1em] uppercase mt-1 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
