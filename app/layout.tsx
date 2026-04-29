import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oleksii Kobzan — Frontend Developer",
  description:
    "Portfolio of Oleksii Kobzan, Frontend Developer. Building fast, accessible, and modern web experiences with React, Next.js, and TypeScript.",
  keywords: [
    "frontend developer",
    "react",
    "next.js",
    "typescript",
    "portfolio",
    "oleksii kobzan",
  ],
  authors: [{ name: "Oleksii Kobzan" }],
  openGraph: {
    title: "Oleksii Kobzan — Frontend Developer",
    description:
      "Portfolio of Oleksii Kobzan — Frontend Developer specialising in React, Next.js, and TypeScript.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oleksii Kobzan — Frontend Developer",
    description:
      "Portfolio of Oleksii Kobzan — Frontend Developer specialising in React, Next.js, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}