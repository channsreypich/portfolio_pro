"use client";

import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import { soundFx } from "@/lib/sound";
import {
  Layout,
  Database,
  Cpu,
  Code,
  Layers,
  FileCode,
  Palette,
  PenTool,
  GitBranch,
  Box,
  Terminal,
  Sparkles,
  Share2,
} from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const FRONTEND_ROW: TechItem[] = [
  { name: "Next.js", category: "App Router / SSR", icon: Layers, color: "text-emerald-400" },
  { name: "React 19", category: "Reactive UI", icon: Layout, color: "text-sky-400" },
  { name: "TypeScript", category: "Type Safety", icon: FileCode, color: "text-blue-400" },
  { name: "Tailwind CSS", category: "Modern Styling", icon: Palette, color: "text-teal-400" },
  { name: "Motion.dev", category: "Smooth Physics", icon: Sparkles, color: "text-purple-400" },
  { name: "Figma UI/UX", category: "Design System", icon: PenTool, color: "text-pink-400" },
  { name: "JavaScript", category: "ESNext Core", icon: Code, color: "text-amber-400" },
];

const BACKEND_ROW: TechItem[] = [
  { name: "Spring Boot 3", category: "Java Microservices", icon: Cpu, color: "text-emerald-400" },
  { name: "Java", category: "Enterprise OOP", icon: Cpu, color: "text-orange-400" },
  { name: "Laravel", category: "PHP Framework", icon: Code, color: "text-red-400" },
  { name: "PostgreSQL", category: "Relational DB", icon: Database, color: "text-cyan-400" },
  { name: "Docker", category: "Containers", icon: Box, color: "text-sky-400" },
  { name: "RESTful APIs", category: "Clean Architecture", icon: Share2, color: "text-emerald-400" },
  { name: "Git & GitHub", category: "Version Control", icon: GitBranch, color: "text-purple-400" },
  { name: "Linux / macOS", category: "CLI Environment", icon: Terminal, color: "text-emerald-300" },
];

function TechCard({ item }: { item: TechItem }) {
  const Icon = item.icon;
  return (
    <div
      onMouseEnter={() => soundFx.playHover()}
      className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300 select-none cursor-pointer backdrop-blur-sm shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:scale-[1.02]"
    >
      <div className={`p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] ${item.color}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-bold text-[var(--text-primary)] tracking-tight">
          {item.name}
        </span>
        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
          {item.category}
        </span>
      </div>
    </div>
  );
}

export default function TechMarqueeSection() {
  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-transparent via-emerald-950/[0.03] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Technologies &amp; Architecture Tools</span>
        </div>
        {/*<h3 className="text-sm font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400">*/}
        {/*  Core Technologies &amp; Architecture Tools*/}
        {/*</h3>*/}
      </div>

      <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden">
        {/* Row 1: Frontend & Motion */}
        <Marquee pauseOnHover className="[--duration:35s]">
          {FRONTEND_ROW.map((item) => (
            <TechCard key={item.name} item={item} />
          ))}
        </Marquee>

        {/* Row 2: Backend, Database & DevOps (Reverse) */}
        <Marquee reverse pauseOnHover className="[--duration:38s]">
          {BACKEND_ROW.map((item) => (
            <TechCard key={item.name} item={item} />
          ))}
        </Marquee>

        {/* Left and Right Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10" />
      </div>
    </section>
  );
}
