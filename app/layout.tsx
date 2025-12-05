import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorFollower from "@/components/CursorFollower";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Full Stack Developer | Creative Engineer Portfolio",
  description: "High-performance portfolio showcasing modern web development with React, Next.js, TypeScript, GSAP, and Three.js. Building exceptional digital experiences.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Developer", "Portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Full Stack Developer Portfolio",
    description: "Building exceptional digital experiences with modern technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <CursorFollower />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}