"use client";

import React, { useRef } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Layers, Server, Database } from "lucide-react";

export function ArchitectureBeamDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const dbRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full items-center justify-between p-4 sm:p-6 rounded-2xl bg-black/[0.02] dark:bg-black/30 border border-black/10 dark:border-white/10 overflow-hidden my-3"
    >
      {/* Node 1: Client UI */}
      <div
        ref={clientRef}
        className="z-10 flex flex-col items-center gap-1.5"
      >
        <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-500 dark:text-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.15)] backdrop-blur-md">
          <Layers className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <div className="text-center">
          <div className="text-[11px] sm:text-xs font-bold text-[var(--text-primary)]">Next.js Client</div>
          <div className="text-[9px] sm:text-[10px] font-mono text-slate-500">App Router &amp; SSR</div>
        </div>
      </div>

      {/* Node 2: Backend API Gateway */}
      <div
        ref={backendRef}
        className="z-10 flex flex-col items-center gap-1.5"
      >
        <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] backdrop-blur-md">
          <Server className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>
        <div className="text-center">
          <div className="text-[11px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400">Spring Boot / Laravel</div>
          <div className="text-[9px] sm:text-[10px] font-mono text-slate-500">Clean REST API</div>
        </div>
      </div>

      {/* Node 3: Database & Cloud */}
      <div
        ref={dbRef}
        className="z-10 flex flex-col items-center gap-1.5"
      >
        <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-500 dark:text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md">
          <Database className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <div className="text-center">
          <div className="text-[11px] sm:text-xs font-bold text-[var(--text-primary)]">PostgreSQL</div>
          <div className="text-[9px] sm:text-[10px] font-mono text-slate-500">Docker Container</div>
        </div>
      </div>

      {/* Animated Beams: Bidirectional Client <-> Backend */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={clientRef}
        toRef={backendRef}
        duration={3.2}
        gradientStartColor="#0284c7"
        gradientStopColor="#10b981"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={backendRef}
        toRef={clientRef}
        duration={3.2}
        reverse
        delay={1.6}
        gradientStartColor="#10b981"
        gradientStopColor="#0284c7"
      />

      {/* Animated Beams: Bidirectional Backend <-> Database */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={backendRef}
        toRef={dbRef}
        duration={3.2}
        gradientStartColor="#10b981"
        gradientStopColor="#a855f7"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={dbRef}
        toRef={backendRef}
        duration={3.2}
        reverse
        delay={1.6}
        gradientStartColor="#a855f7"
        gradientStopColor="#10b981"
      />
    </div>
  );
}
