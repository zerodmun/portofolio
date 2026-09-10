import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const viewport: Viewport = {
  themeColor: "#090a0c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Muhammad Munir Akromin — Product Designer",
  description:
    "Muhammad Munir Akromin is a Product Designer specializing in UI/UX, digital products, design systems, branding, illustration and visual design.",
  keywords: [
    "Muhammad Munir Akromin",
    "Product Designer",
    "UI/UX Designer",
    "Design Systems",
    "Visual Designer",
    "Tenten Digital Indonesia",
    "Portfolio",
    "Digital Products",
  ],
  authors: [{ name: "Muhammad Munir Akromin", url: "https://linkedin.com/in/munirakromin" }],
  creator: "Muhammad Munir Akromin",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Muhammad Munir Akromin — Product Designer",
    description:
      "Muhammad Munir Akromin is a Product Designer specializing in UI/UX, digital products, design systems, branding, illustration and visual design.",
    siteName: "Muhammad Munir Akromin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Munir Akromin — Product Designer",
    description:
      "Muhammad Munir Akromin is a Product Designer specializing in UI/UX, digital products, design systems, branding, illustration and visual design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <body className="bg-[#090a0c] text-[#f4f4f5] antialiased selection:bg-white/20 selection:text-white font-sans min-h-screen relative">
        <div className="noise-overlay" aria-hidden="true" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
