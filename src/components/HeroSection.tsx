"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t }     = useLang();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;

    type Particle = { x: number; y: number; vx: number; vy: number; a: number; r: number };
    const pts: Particle[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        a:  Math.random() * 0.22 + 0.05,
        r:  Math.random() * 1.1 + 0.3,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,232,255,${0.04 * (1 - d / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle = `rgba(0,232,255,${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
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
     * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     * ROOT CAUSE OF DEAD SPACE (both screenshots):
     *
     *   Old code used `min-h-screen` = 100vh.
     *   On Android, 100vh = FULL device height including
     *   browser chrome (address bar, navigation bar).
     *   flex-1 + justify-center then centered content
     *   within this inflated height → dead space above.
     *
     * ENGINEERING SOLUTION:
     *
     *   `min-h-dvh` (Tailwind 3.4+, CSS `min-height: 100dvh`)
     *   = Dynamic Viewport Height = exactly the VISIBLE area,
     *   updating as browser chrome shows/hides.
     *   No JavaScript measurement. Pure CSS. Cross-browser.
     *   Supported: Chrome 108+, Safari 15.4+, Firefox 101+.
     *
     *   Fallback `min-h-screen` applies for older browsers.
     *
     * LAYOUT SYSTEM:
     *
     *   flex-col → [content-area][stats-strip]
     *   content-area: flex-1, NO justify-center.
     *   Content is placed with padding-top only.
     *   pt-[nav-height + breathing] positions it correctly
     *   on every screen without viewport math.
     *
     * BUTTON FIX:
     *
     *   Always flex-row. `flex-col` was causing full-width
     *   stacked buttons. flex-shrink-0 + sized text prevents
     *   overflow even at 320px.
     * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     */
    <section className="relative flex flex-col min-h-screen min-h-dvh overflow-x-hidden grid-bg">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-80 lg:w-[420px] h-48 sm:h-80 lg:h-[420px] rounded-full bg-zs-violet/10 blur-[80px] lg:blur-[110px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-36 sm:w-64 lg:w-80 h-36 sm:h-64 lg:h-80 rounded-full bg-zs-cyan/6 blur-[60px] lg:blur-[90px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      {/**
       * Content area.
       *
       * flex-1: fills vertical space between section-top and stats-strip.
       * NO justify-center: avoids centering inside inflated 100vh.
       *
       * pt-24  = 96px  → nav 56px + 40px breathing (mobile)
       * sm:pt-28 = 112px → slightly more on small tablets
       * md:pt-32 = 128px → desktop
       * lg:pt-36 = 144px → large desktop
       *
       * pb-8/sm:pb-12: breathing room between content and stats strip.
       */}
      <div className="relative z-10 flex-1 flex flex-col items-center text-center px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-12">

        {/* Badge */}
        <div className="mb-5 sm:mb-7 flex items-center gap-2 sm:gap-3">
          <div className="h-px w-6 sm:w-10 bg-zs-cyan/40" />
          <span className="font-mono text-[9px] sm:text-[10px] lg:text-[11px] text-zs-cyan/70 border border-zs-cyan/20 px-2.5 py-1 rounded-full bg-zs-cyan/5 tracking-widest uppercase whitespace-nowrap">
            {t.hero.badge}
          </span>
          <div className="h-px w-6 sm:w-10 bg-zs-cyan/40" />
        </div>

        {/**
         * Headline.
         * text-4xl (2.25rem) on 320px → "INTELLIGENT" fits on one line.
         * Each breakpoint adds one Tailwind step.
         * leading-[0.9] removes inter-line gap on the 3-word stack.
         */}
        <h1 className="font-syne font-extrabold leading-[0.9] tracking-tight mb-5 sm:mb-6 md:mb-7">
          <span className="block text-zs-text     text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7rem]">{t.hero.line1}</span>
          <span className="block text-gradient-cyan text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7rem]">{t.hero.line2}</span>
          <span className="block text-zs-text     text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7rem]">{t.hero.line3}</span>
        </h1>

        {/* Subtitle */}
        <p className="font-dm text-sm sm:text-base md:text-lg text-zs-muted max-w-xs sm:max-w-lg lg:max-w-2xl leading-relaxed mb-7 sm:mb-9">
          {t.hero.sub}
        </p>

        {/**
         * CTAs — ALWAYS flex-row, never flex-col.
         *
         * At 320px: text-[11px] tracking-widest px-4
         *   "EXPLORE PROTOCOL" → ~110px wide
         *   gap-3 = 12px
         *   "VIEW ARCHITECTURE" → ~116px wide
         *   Total: ~238px — fits in 308px (320 - 2×6px padding). ✓
         *
         * flex-shrink-0 prevents either button from being compressed.
         * whitespace-nowrap prevents text from wrapping inside buttons.
         */}
        <div className="flex flex-row items-center gap-3 sm:gap-4">
          <a
            href="#what-is"
            className="flex-shrink-0 whitespace-nowrap px-4 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 bg-zs-cyan text-zs-bg font-syne font-bold text-[11px] sm:text-xs lg:text-sm tracking-widest uppercase rounded-xl hover:bg-zs-cyan-dim transition-colors duration-200"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#architecture"
            className="flex-shrink-0 whitespace-nowrap px-4 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 border border-zs-border text-zs-text font-syne font-bold text-[11px] sm:text-xs lg:text-sm tracking-widest uppercase rounded-xl hover:border-zs-cyan/40 hover:text-zs-cyan transition-all duration-200"
          >
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
              <div className={`font-syne font-bold text-sm sm:text-xl lg:text-2xl ${stat.color}`}>
                {stat.value}
              </div>
              <div className="font-mono text-[7px] sm:text-[9px] lg:text-[11px] text-zs-muted tracking-wider uppercase mt-0.5 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
