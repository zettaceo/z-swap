import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Z-SWAP — Intelligent Liquidity Infrastructure",
  description:
    "Z-SWAP is a Liquidity Intelligence Platform combining decentralized asset swapping, AI-assisted analysis, and multi-chain architecture. Part of the ZETTA ecosystem.",
  keywords: [
    "Z-SWAP",
    "ZETTA",
    "liquidity",
    "DEX",
    "DeFi",
    "multi-chain",
    "ZION AI",
    "liquidity aggregation",
  ],
  openGraph: {
    title: "Z-SWAP — Intelligent Liquidity Infrastructure",
    description: "The next-generation liquidity layer for the ZETTA ecosystem.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Z-SWAP — Intelligent Liquidity Infrastructure",
    description: "The next-generation liquidity layer for the ZETTA ecosystem.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="noise-overlay antialiased">
        {children}
      </body>
    </html>
  );
}
