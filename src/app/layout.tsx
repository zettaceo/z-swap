import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

/* ── Viewport export (Next 14 best practice) ────────────────────────────────
 * viewport-fit=cover tells iOS Safari the page occupies the full screen
 * including the notch / Dynamic Island area.
 * Our CSS env(safe-area-inset-*) variables then re-apply safe padding.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",               // notch/Dynamic Island support
  themeColor: "#04040C",              // matches body background — browser chrome stays dark
};

export const metadata: Metadata = {
  title: "Z-SWAP — Intelligent Liquidity Infrastructure | ZETTA",
  description:
    "Z-SWAP is a decentralized financial operating system — 132 functions across 7 protocol layers. Part of the ZETTA ecosystem.",
  keywords: ["Z-SWAP", "ZETTA", "liquidity", "DEX", "DeFi", "ZION AI", "Z-PAY", "VARA", "VASP"],
  authors: [{ name: "ZETTA Protocol" }],
  robots: "index, follow",
  openGraph: {
    title: "Z-SWAP — Intelligent Liquidity Infrastructure",
    description:
      "Z-SWAP is a protocol-level liquidity infrastructure layer — 132 functions across 7 layers. Part of the ZETTA ecosystem. VARA-aligned.",
    type: "website",
    locale: "en_US",
    siteName: "Z-SWAP | ZETTA Protocol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Z-SWAP — Intelligent Liquidity Infrastructure",
    description: "Protocol-level liquidity infrastructure. 132 functions. 7 layers. VARA-aligned.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang is set to "en" here; the LangProvider manages UI language client-side.
    // For full SSR lang switching a separate i18n routing solution would be needed.
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="noise-overlay antialiased">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
