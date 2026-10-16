"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Server,
  Layers,
  GraduationCap,
  ExternalLink,
  MapPin,
  BookOpen,
  Award,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";
import { BorderBeam } from "@/components/magicui/border-beam";
import { NumberTicker } from "@/components/magicui/number-ticker";

export default function HeroSection({
  onOpenResume,
}: {
  onOpenResume: () => void;
}) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-cyber"
    >
      {/* Ambient Glowing Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-sky-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline, Bio & Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="lg:col-span-7 flex flex-col space-y-6"
        >
          {/* Active Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-700 dark:text-emerald-300 w-fit backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Western Univ (Year 4) • Korea Software HRD Center</span>
          </div>

          {/* Main Title & Role */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-extrabold font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              {PERSONAL_INFO.headline}
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] tracking-tight leading-[1.1]">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-300">
              {PERSONAL_INFO.role}
            </p>
          </div>

          {/* Bio Description */}
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal dark:font-light">
            {PERSONAL_INFO.bio}
          </p>

          {/* Location & Quick Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" /> Phnom Penh, Cambodia
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300">
              <Server className="w-3.5 h-3.5" /> Spring Boot &amp; Laravel
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-sky-500/10 border border-sky-500/20 text-sky-700 dark:text-sky-300">
              <Code2 className="w-3.5 h-3.5" /> Next.js &amp; Tailwind CSS
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#about"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.02]"
            >
              <span>Explore About Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/10 hover:border-emerald-500/40 text-slate-700 dark:text-slate-200 font-semibold text-xs uppercase tracking-wider transition-all"
            >
              <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>View Projects</span>
            </a>

            <button
              onClick={() => {
                soundFx.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="inline-flex items-center gap-2 px-4 py-3.5 text-xs text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-300 font-mono transition-colors"
            >
              <span>Curriculum Vitae</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Stats Bar (1.1 Profile Stats) */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[var(--border-glass)]">
            {PERSONAL_INFO.stats.slice(0, 3).map((stat, i) => {
              const numericMatch = stat.value.match(/\d+/);
              const numVal = numericMatch ? parseInt(numericMatch[0], 10) : null;
              return (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5"
                >
                  <div className="text-base sm:text-lg font-bold font-mono text-[var(--text-primary)]">
                    {numVal !== null ? (
                      <>
                        {stat.value.startsWith("Year") && "Year "}
                        <NumberTicker value={numVal} />
                        {stat.value.includes("+") && "+"}
                        {stat.value.includes("%") && "%"}
                      </>
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">{stat.sub}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Visual Avatar Profile Card with 3D Overlapping Badges */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          className="lg:col-span-5 flex justify-center py-4"
        >
          {/* Curved Glowing Rim Container */}
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 group">
            {/* 1px Gradient Wrapper with Super-elliptical Corners */}
            <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/20 via-sky-500/10 to-transparent p-1 shadow-2xl shadow-emerald-950/20">
              {/* Photo Treatment Container */}
              <div className="relative w-full h-full rounded-[calc(2.5rem-4px)] overflow-hidden bg-slate-900 border border-slate-200/50 dark:border-slate-800">
                {/* Portrait Image with High-Contrast B&W to Vibrant Color Hover */}
                <Image
                  src={PERSONAL_INFO.avatarUrl || "/profile.png"}
                  alt={PERSONAL_INFO.fullName}
                  fill
                  sizes="(max-width: 640px) 288px, 320px"
                  priority
                  className="object-cover object-top grayscale contrast-125 hover:grayscale-0 transition duration-500 select-none"
                />

                {/* Dark Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-80 pointer-events-none" />

                {/* Superimposed Title & Institute Tag */}
                <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none select-none">
                  <div className="text-base sm:text-lg font-black tracking-tight drop-shadow-md">
                    {PERSONAL_INFO.fullName}
                  </div>
                  <div className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 mt-0.5 font-medium drop-shadow">
                    <span>Western University</span>
                    <span className="text-slate-400">•</span>
                    <span>Korea HRD</span>
                  </div>
                </div>

                {/* Magic UI Border Beam */}
                <BorderBeam
                  size={240}
                  duration={12}
                  delay={0}
                  colorFrom="#10b981"
                  colorTo="#38bdf8"
                />
              </div>
            </div>


            {/* Three Overlapping Floating Pills (Depth Accents) */}
            {/* Pill 1: Top-Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -top-3 -left-4 z-20 rounded-2xl shadow-xl border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 px-3.5 py-2 flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-100 backdrop-blur-md hover:scale-105 transition-transform"
            >
              <BookOpen size={16} className="text-emerald-500 shrink-0" />
              <span>4th Year CS</span>
            </motion.div>

            {/* Pill 2: Right-Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-1/2 -right-6 -translate-y-1/2 z-20 rounded-2xl shadow-xl border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 px-3.5 py-2 flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-100 backdrop-blur-md hover:scale-105 transition-transform"
            >
              <Award size={16} className="text-teal-500 shrink-0" />
              <span>HRD Center</span>
            </motion.div>

            {/* Pill 3: Bottom-Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.45, type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -bottom-4 -left-2 z-20 rounded-2xl shadow-xl border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 px-3.5 py-2 flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-100 backdrop-blur-md hover:scale-105 transition-transform"
            >
              <Layers size={16} className="text-sky-500 shrink-0" />
              <span>10+ Projects</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
