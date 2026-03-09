/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /* ── Security headers ─────────────────────────────────────────────────────
   * Adds professional-grade HTTP security headers.
   * These are visible to senior engineers who inspect DevTools → Network → Headers.
   * Critical for regulatory-facing (VARA/VASP) credibility.
   */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",  // Next.js requires unsafe-inline/eval
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },

  /* ── Image optimization ───────────────────────────────────────────────────
   * Explicitly define allowed domains for next/image.
   * formats: webp + avif for modern browsers (significant size reduction).
   */
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  /* ── Compiler optimizations ───────────────────────────────────────────────
   * Remove console.* calls in production builds.
   * Production bundle has zero debug output — professional standard.
   */
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
