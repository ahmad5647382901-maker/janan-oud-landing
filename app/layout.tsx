import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JANAN OUD | A Signature of Presence",
  description: "Discover JANAN OUD — a cinematic fragrance experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
