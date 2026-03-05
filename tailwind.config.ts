import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zs: {
          bg: "#04040C",
          "bg-2": "#080812",
          "bg-3": "#0C0C1A",
          card: "#0D0D1F",
          border: "#1A1A35",
          cyan: "#00E8FF",
          "cyan-dim": "#00B8CC",
          violet: "#7C3AED",
          "violet-bright": "#9F5FFF",
          gold: "#F5A623",
          red: "#FF3B5C",
          green: "#00E087",
          text: "#E2E2F0",
          muted: "#6B6B90",
          faint: "#2A2A45",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,232,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,232,255,0.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)",
        "cyan-glow":
          "radial-gradient(ellipse at center, rgba(0,232,255,0.12) 0%, transparent 60%)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "flow": "flow 3s linear infinite",
        "scan": "scan 4s linear infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "spin-slow": "spin 20s linear infinite",
        "dash": "dash 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        flow: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dash: {
          to: { strokeDashoffset: "-20" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
