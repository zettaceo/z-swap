"use client";

/**
 * B2 — Multi-chain Routing Diagram
 * Animated SVG showing Z-SWAP routing packets between chain nodes.
 * Institutional aesthetic — precise, subtle, and elegant.
 * Uses only <animate> (no animateMotion) for broad React TS compatibility.
 */

const CHAINS = [
  { id: "eth",      label: "ETH",   sub: "Ethereum",  angle: 270, color: "#00E8FF" },
  { id: "bnb",      label: "BNB",   sub: "BNB Chain", angle: 342, color: "#F5A623" },
  { id: "polygon",  label: "MATIC", sub: "Polygon",   angle: 54,  color: "#9F5FFF" },
  { id: "arb",      label: "ARB",   sub: "Arbitrum",  angle: 126, color: "#00E8FF" },
  { id: "zetta",    label: "ZETTA", sub: "Chain",     angle: 198, color: "#00E087" },
];

const DEG = Math.PI / 180;
const CX  = 160;
const CY  = 138;
const R   = 88;

function nodePos(angle: number) {
  return {
    x: CX + R * Math.cos(angle * DEG),
    y: CY + R * Math.sin(angle * DEG),
  };
}

export default function MultiChainRouting() {
  const positions: Record<string, { x: number; y: number }> = {};
  CHAINS.forEach((c) => { positions[c.id] = nodePos(c.angle); });

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 320 276"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="mc-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(0,232,255,0.22)" />
            <stop offset="100%" stopColor="rgba(0,232,255,0)"    />
          </radialGradient>
          <filter id="mc-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbit ring */}
        <circle cx={CX} cy={CY} r={R}     stroke="rgba(0,232,255,0.07)" strokeWidth="1" />
        <circle cx={CX} cy={CY} r={R - 8} stroke="rgba(0,232,255,0.03)" strokeWidth="5" />

        {/* Hub ambient glow */}
        <circle cx={CX} cy={CY} r="52" fill="url(#mc-hub)" />
        <circle cx={CX} cy={CY} r="36" fill="rgba(4,4,12,0.92)" stroke="rgba(0,232,255,0.3)"  strokeWidth="1.2" />
        {/* Pulse ring */}
        <circle cx={CX} cy={CY} r="28" fill="none" stroke="rgba(0,232,255,0.1)" strokeWidth="1">
          <animate attributeName="r"       values="26;38;26" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Hub labels */}
        <text x={CX} y={CY - 6}  textAnchor="middle" fill="rgba(0,232,255,0.95)" fontSize="9"   fontFamily="monospace" fontWeight="700" filter="url(#mc-glow)">Z-SWAP</text>
        <text x={CX} y={CY + 5}  textAnchor="middle" fill="rgba(0,232,255,0.4)"  fontSize="6.5" fontFamily="monospace">ROUTER</text>
        <text x={CX} y={CY + 15} textAnchor="middle" fill="rgba(0,232,255,0.2)"  fontSize="5.5" fontFamily="monospace" letterSpacing="1">MULTI-CHAIN</text>

        {/* Spoke lines */}
        {CHAINS.map((c) => {
          const p = positions[c.id];
          return (
            <line key={`spoke-${c.id}`}
              x1={CX} y1={CY} x2={p.x} y2={p.y}
              stroke={c.color} strokeWidth="0.6" strokeOpacity="0.1"
              strokeDasharray="3 5"
            />
          );
        })}

        {/* Animated packets hub ↔ each node */}
        {CHAINS.map((c, i) => {
          const p    = positions[c.id];
          const dur  = (2.4 + i * 0.38).toFixed(2);
          const beg  = (i * 0.65).toFixed(2);
          return (
            <circle key={`pkt-${c.id}`} r="2.2" fill={c.color}>
              <animate attributeName="cx"      values={`${CX};${p.x};${CX}`} dur={`${dur}s`} begin={`${beg}s`} repeatCount="indefinite" />
              <animate attributeName="cy"      values={`${CY};${p.y};${CY}`} dur={`${dur}s`} begin={`${beg}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.9;0.9;0"          dur={`${dur}s`} begin={`${beg}s`} repeatCount="indefinite" />
            </circle>
          );
        })}

        {/* Chain nodes */}
        {CHAINS.map((c) => {
          const p = positions[c.id];
          return (
            <g key={c.id} filter="url(#mc-glow)">
              <circle cx={p.x} cy={p.y} r="19" fill="none" stroke={c.color} strokeOpacity="0.09" strokeWidth="7" />
              <circle cx={p.x} cy={p.y} r="19" fill="rgba(4,4,12,0.92)" stroke={c.color} strokeWidth="1" strokeOpacity="0.5" />
              <text x={p.x} y={p.y - 3} textAnchor="middle" fill={c.color} fontSize="8"   fontFamily="monospace" fontWeight="700" fillOpacity="0.95">{c.label}</text>
              <text x={p.x} y={p.y + 7} textAnchor="middle" fill={c.color} fontSize="5.8" fontFamily="monospace" fillOpacity="0.4">{c.sub}</text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-2">
        {CHAINS.map((c) => (
          <div key={c.id} className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: c.color, opacity: 0.7 }} />
            <span className="font-mono text-[9px] text-zs-muted">{c.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
