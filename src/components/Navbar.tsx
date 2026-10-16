"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  FileText,
  Menu,
  X,
  Search,
  Sun,
  Moon,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";
import { useTheme } from "@/context/ThemeContext";

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCmd: () => void;
}

function subscribeSound(callback: () => void) {
  if (typeof window === "undefined") return () => { };
  window.addEventListener("portfolio_sound_change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("portfolio_sound_change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getSoundClientSnapshot() {
  return soundFx.getIsMuted();
}

function getSoundServerSnapshot() {
  return false;
}

export default function Navbar({ onOpenResume, onOpenCmd }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMuted = useSyncExternalStore(
    subscribeSound,
    getSoundClientSnapshot,
    getSoundServerSnapshot
  );
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "about",
        "education",
        "specialization",
        "skills",
        "projects",
        "journey",
        "terminal",
        "contact",
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    soundFx.toggleMute();
  };

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Services", href: "#specialization" },
    { label: "Tech Stack", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Terminal", href: "#terminal" },
    { label: "Contact", href: "#contact" },
  ];


  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? "py-3 bg-[var(--bg-primary)]/85 backdrop-blur-xl border-b border-[var(--border-glass)] shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
          : "py-5 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Western / HRD Pill */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={() => soundFx.playClick()}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-500 p-[1.5px] shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-[#070b16] rounded-[10px] flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
                  CP
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm sm:text-base text-[var(--text-primary)] tracking-tight group-hover:text-emerald-500 dark:group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  {PERSONAL_INFO.name}
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-normal border border-emerald-500/20">
                    DEV
                  </span>
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono hidden sm:inline">
                  Full-Stack &amp; Backend Dev
                </span>
              </div>
            </a>

            {/* Live Status Pill */}
            {/* <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-700 dark:text-emerald-300 ml-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span>Western Univ (Y4) • Korea HRD</span>
            </div> */}
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-black/[0.04] dark:bg-white/[0.03] p-1.5 rounded-full border border-black/[0.06] dark:border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => soundFx.playClick()}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all relative ${isActive
                    ? "text-white bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)] font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Controls & Quick Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-slate-700 dark:text-slate-200 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-emerald-600" />
              )}
            </button>

            {/* Command Palette Trigger */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenCmd();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-mono transition-colors"
              title="Command Palette (Cmd+K / Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-black/40 text-[10px] text-slate-500 dark:text-slate-400 border border-black/5 dark:border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-xl border transition-all ${!isMuted
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20"
                : "bg-black/[0.03] dark:bg-white/[0.03] border-black/10 dark:border-white/10 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                }`}
              title={isMuted ? "Unmute UI Audio Synthesis" : "Mute UI Audio"}
              aria-label="Toggle UI Sound"
            >
              {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-16 left-0 right-0 z-30 p-4 bg-[var(--bg-primary)]/95 backdrop-blur-2xl border-b border-emerald-500/20 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-300 flex items-center justify-between mb-2">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Western Univ (Y4) • Korea HRD Center
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    soundFx.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] hover:bg-emerald-500/10 border border-black/5 dark:border-white/5 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => {
                    toggleTheme();
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black/[0.05] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-sm text-slate-800 dark:text-slate-200 font-mono"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-600" />}
                  <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </button>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setMobileMenuOpen(false);
                    onOpenCmd();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-sm text-emerald-600 dark:text-emerald-400 font-mono"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
