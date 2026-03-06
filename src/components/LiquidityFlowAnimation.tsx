"use client";

/**
 * B1 — Liquidity Flow Animation
 * Elegant SVG animation showing liquidity flowing between pool nodes.
 * Uses CSS animations + React inline styles (animationDelay/Duration only).
 * No animateMotion; uses <animate> for max TS compatibility.
 * Respects prefers-reduced-motion via global CSS rule.
 */

const pools = [
  { id: "stable",       label: "Stable Pool",    sub: "USDC/USDT", cx: 80,  cy: 100, color: "#00E8FF", r: 31 },
  { id: "volatile",     label: "Volatile Pool",  sub: "ETH/BNB",   cx: 220, cy: 40,  color: "#9F5FFF", r: 27 },
  { id: "concentrated", label: "Conc. LP",       sub: "v3 Style",  cx: 220, cy: 162, color: "#F5A623", r: 27 },
  { id: "external",     label: "External DEX",   sub: "Aggregated",cx: 340, cy: 100, color: "#00E087", r: 23 },
];

const streams = [
  { from: { x: 110, y: 90  }, to: { x: 194, y: 54  }, color: "#00E8FF", delay: "0s",   dur: "2.8s" },
  { from: { x: 110, y: 110 }, to: { x: 194, y: 148 }, color: "#9F5FFF", delay: "0.9s", dur: "3.1s" },
  { from: { x: 246, y: 50  }, to: { x: 318, y: 90  }, color: "#9F5FFF", delay: "1.5s", dur: "2.6s" },
  { from: { x: 246, y: 152 }, to: { x: 318, y: 110 }, color: "#F5A623", delay: "2.2s", dur: "3.0s" },
  { from: { x: 316, y: 96  }, to: { x: 112, y: 106 }, color: "#00E087", delay: "3.5s", dur: "4.2s" },
];

export default function LiquidityFlowAnimation() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 420 200"
        className="w-full max-w-sm sm:max-w-md md:max-w-full mx-auto"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          {pools.map((p) => (
            <radialGradient key={`grad-${p.id}`} id={`lf-grad-${p.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor={p.color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={p.color} stopOpacity="0"   />
            </radialGradient>
          ))}
          <filter id="lf-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Static base paths */}
        {streams.map((s, i) => {
          const mx = (s.from.x + s.to.x) / 2;
          const my = (s.from.y + s.to.y) / 2 - 18;
          return (
            <path key={`base-${i}`}
              d={`M ${s.from.x} ${s.from.y} Q ${mx} ${my} ${s.to.x} ${s.to.y}`}
              stroke={s.color} strokeWidth="1" strokeOpacity="0.1"
            />
          );
        })}

        {/* Animated flow streams — uses SVG <animate> for the dash offset */}
        {streams.map((s, i) => {
          const mx = (s.from.x + s.to.x) / 2;
          const my = (s.from.y + s.to.y) / 2 - 18;
          const pathD = `M ${s.from.x} ${s.from.y} Q ${mx} ${my} ${s.to.x} ${s.to.y}`;
          return (
            <path key={`stream-${i}`}
              d={pathD}
              stroke={s.color} strokeWidth="1.8" strokeLinecap="round"
              strokeDasharray="30 90" strokeDashoffset="120"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="120;0;0"
                dur={s.dur}
                begin={s.delay}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.85;1"
                dur={s.dur}
                begin={s.delay}
                repeatCount="indefinite"
              />
            </path>
          );
        })}

        {/* Pool nodes */}
        {pools.map((p) => (
          <g key={p.id} filter="url(#lf-glow)">
            <circle cx={p.cx} cy={p.cy} r={p.r + 16} fill={`url(#lf-grad-${p.id})`} />
            {/* Ripple */}
            <circle cx={p.cx} cy={p.cy} r={p.r + 4} stroke={p.color} strokeWidth="0.8" strokeOpacity="0.2" fill="none">
              <animate attributeName="r"       values={`${p.r};${p.r + 18};${p.r}`} dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0;0.4"                   dur="3s" repeatCount="indefinite" />
            </circle>
            {/* Node body */}
            <circle cx={p.cx} cy={p.cy} r={p.r} fill="rgba(4,4,12,0.92)" stroke={p.color} strokeWidth="1.2" strokeOpacity="0.6" />
            {/* Label */}
            <text x={p.cx} y={p.cy - 4} textAnchor="middle" fill={p.color} fontSize="7.5" fontFamily="monospace" fontWeight="600" fillOpacity="0.9">{p.label}</text>
            <text x={p.cx} y={p.cy + 7} textAnchor="middle" fill={p.color} fontSize="6"   fontFamily="monospace" fillOpacity="0.45">{p.sub}</text>
            {/* Center pulse dot */}
            <circle cx={p.cx} cy={p.cy} r="2.5" fill={p.color} fillOpacity="0.8">
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="r"       values="2.5;3.5;2.5" dur="2.2s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* Z-SWAP label */}
        <text x="210" y="102" textAnchor="middle" fill="rgba(0,232,255,0.25)" fontSize="7" fontFamily="monospace" letterSpacing="2">
          Z-SWAP ROUTER
        </text>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {pools.map((p) => (
          <div key={p.id} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color, opacity: 0.7 }} />
            <span className="font-mono text-[9px] text-zs-muted">{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
