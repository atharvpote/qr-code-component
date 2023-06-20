import { JSX, PropsWithChildren } from "react";
import "./globals.css";
import { Outfit } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import { Metadata } from "next";

const outfit: NextFont = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "QR Code",
  description: "QR Code Component",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
