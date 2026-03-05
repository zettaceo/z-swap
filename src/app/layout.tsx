import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Z-SWAP — Intelligent Liquidity Infrastructure | ZETTA",
  description:
    "Z-SWAP is a decentralized financial operating system — 132 functions across 7 protocol layers. Part of the ZETTA ecosystem.",
  keywords: ["Z-SWAP", "ZETTA", "liquidity", "DEX", "DeFi", "ZION AI", "Z-PAY"],
  openGraph: {
    title: "Z-SWAP — Intelligent Liquidity Infrastructure",
    description: "The next-generation liquidity layer for the ZETTA ecosystem.",
    type: "website",
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
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
