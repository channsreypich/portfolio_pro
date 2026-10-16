import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050811",
};

export const metadata: Metadata = {
  title: "Chhun Chansreypich | Full-Stack & Backend Software Developer",
  description:
    "Portfolio of Chhun Chansreypich - 4th-year Computer Science student at Western University and Korea Software HRD Center, focused on full-stack architecture, clean APIs, and distributed systems.",
  keywords: [
    "Chhun Chansreypich",
    "Full-Stack Developer",
    "Backend Developer",
    "Spring Boot",
    "Laravel",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Western University",
    "Korea Software HRD Center",
    "Phnom Penh",
    "Cambodia",
  ],
  authors: [{ name: "Chhun Chansreypich" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050811] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
