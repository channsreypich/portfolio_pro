"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal as TerminalIcon,
  Trash2,
  CornerDownLeft,
} from "lucide-react";
import {
  PERSONAL_INFO,
  PROJECTS,
  SKILLS,
  SERVICES,
  EXPERIENCES,
  EDUCATION_MILESTONES,
  REFERENCES,
  COVER_LETTER_TEXT,
  TERMINAL_COMMANDS_HELP,
} from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "welcome",
      timestamp: "12:00:00",
      output: (
        <div className="space-y-1.5 text-slate-300">
          <div className="text-emerald-400 font-bold text-sm">
            ✨ Welcome to Chhun Chansreypich&apos;s Interactive Developer Terminal
          </div>
          <div className="text-xs text-slate-400">
            Western University (Year 4 CS) • Korea Software HRD Center (Full-Stack Bootcamp).
          </div>
          <div className="text-xs text-slate-400">
            Type <span className="text-emerald-300 font-bold font-mono">help</span> or click
            the quick command chips below to inspect services, experiences, references, or skills.
          </div>
        </div>
      ),
    },
  ]);

  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const [matrixActive, setMatrixActive] = useState<boolean>(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    soundFx.playClick();
    const time = new Date().toLocaleTimeString();

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryPointer(-1);

    let outputNode: React.ReactNode = null;

    if (cmd === "help") {
      outputNode = (
        <div className="space-y-1.5 text-xs">
          <div className="text-emerald-400 font-bold font-mono mb-2">
            AVAILABLE TERMINAL COMMANDS:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
            {TERMINAL_COMMANDS_HELP.map((c) => (
              <div
                key={c.cmd}
                onClick={() => handleCommand(c.cmd)}
                className="p-1.5 rounded bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 cursor-pointer transition-colors flex items-center justify-between"
              >
                <span className="text-emerald-300 font-bold">{c.cmd}</span>
                <span className="text-slate-400 text-[11px] truncate ml-2">
                  {c.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (cmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else if (cmd === "bio") {
      outputNode = (
        <div className="space-y-2 text-xs font-mono">
          <div className="text-emerald-400 font-bold">{PERSONAL_INFO.fullName}</div>
          <div className="text-slate-300">{PERSONAL_INFO.role}</div>
          <div className="text-emerald-400">{PERSONAL_INFO.location}</div>
          <p className="text-slate-300 font-sans mt-2">{PERSONAL_INFO.bio}</p>
        </div>
      );
    } else if (cmd === "about") {
      outputNode = (
        <div className="space-y-2 text-xs font-mono">
          <div className="text-emerald-400 font-bold">ABOUT STORY:</div>
          <p className="text-slate-300 font-sans leading-relaxed">
            {PERSONAL_INFO.aboutStory}
          </p>
        </div>
      );
    } else if (cmd === "services") {
      outputNode = (
        <div className="space-y-2 text-xs font-mono">
          <div className="text-emerald-400 font-bold mb-1">TECHNICAL SERVICES:</div>
          {SERVICES.map((s, idx) => (
            <div key={s.id} className="p-2 rounded bg-white/[0.02] border border-white/5">
              <div className="text-emerald-300 font-bold">0{idx + 1}. {s.title}</div>
              <div className="text-slate-300 text-[11px] mt-0.5">{s.description}</div>
              <div className="text-slate-500 text-[10px] mt-1 font-mono">
                Tags: {s.tags.join(", ")}
              </div>
            </div>
          ))}
        </div>
      );
    } else if (cmd === "skills") {
      outputNode = (
        <div className="space-y-2 text-xs font-mono">
          <div className="text-emerald-400 font-bold mb-2">
            CORE PROFICIENCIES &amp; SKILL METRICS:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SKILLS.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/10"
              >
                <span className="text-slate-200">{s.name}</span>
                <span className="text-emerald-400 font-bold">{s.level}%</span>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (cmd === "projects") {
      outputNode = (
        <div className="space-y-2 text-xs font-mono">
          <div className="text-emerald-400 font-bold mb-2">FEATURED PROJECTS:</div>
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className="p-2.5 rounded bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
            >
              <div>
                <span className="text-emerald-300 font-bold">
                  0{i + 1}. {p.title}
                </span>
                {p.subtitle && (
                  <span className="text-slate-400 text-xs ml-2 font-normal">
                    — {p.subtitle}
                  </span>
                )}
                <div className="text-slate-400 text-[11px] mt-0.5">{p.description}</div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 self-start sm:self-auto font-mono">
                {p.category.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      );
    } else if (cmd === "education" || cmd === "edu") {
      outputNode = (
        <div className="space-y-2 text-xs font-mono">
          <div className="text-emerald-400 font-bold mb-2">ACADEMIC &amp; TECHNICAL EDUCATION:</div>
          {EDUCATION_MILESTONES.map((edu) => (
            <div key={edu.id} className="p-2.5 rounded bg-white/[0.02] border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-emerald-300 font-bold">
                <span>{edu.institution}</span>
                <span className="text-[10px] text-slate-400 font-normal">{edu.period}</span>
              </div>
              <div className="text-white text-xs font-medium">
                {edu.program} • <span className="text-emerald-400">{edu.badge}</span>
              </div>
              <div className="text-slate-400 text-[11px] font-sans">{edu.description}</div>
              <div className="flex flex-wrap gap-1 pt-1">
                {edu.technologies.map((t) => (
                  <span key={t} className="text-[10px] px-1.5 py-0.2 rounded bg-white/[0.04] text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    } else if (cmd === "experience") {
      outputNode = (
        <div className="space-y-2 text-xs font-mono">
          <div className="text-emerald-400 font-bold mb-2">WORK &amp; PROFESSIONAL EXPERIENCE:</div>
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="p-2.5 rounded bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between text-emerald-300 font-bold">
                <span>{exp.company} — {exp.role}</span>
                <span className="text-[10px] text-slate-400 font-normal">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 text-[11px] mt-1 space-y-0.5 font-sans">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } else if (cmd === "references") {
      outputNode = (
        <div className="space-y-2 text-xs font-mono">
          <div className="text-emerald-400 font-bold mb-2">ACADEMIC &amp; INDUSTRY REFERENCES:</div>
          {REFERENCES.map((ref, idx) => (
            <div key={idx} className="p-2 rounded bg-white/[0.02] border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-white font-bold">{ref.name}</div>
                <div className="text-emerald-400 text-[11px]">{ref.title} • {ref.institution}</div>
              </div>
              <span className="text-emerald-300 text-xs font-mono">{ref.contact}</span>
            </div>
          ))}
        </div>
      );
    } else if (cmd === "cover-letter") {
      outputNode = (
        <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-xs font-sans text-slate-300 whitespace-pre-wrap leading-relaxed">
          {COVER_LETTER_TEXT}
        </div>
      );
    } else if (cmd === "contact") {
      outputNode = (
        <div className="space-y-1.5 text-xs font-mono">
          <div className="text-emerald-400 font-bold">DIRECT COMMUNICATION CHANNELS:</div>
          <div>Email: {PERSONAL_INFO.email}</div>
          <div>Phone: {PERSONAL_INFO.phone}</div>
          <div>Telegram: {PERSONAL_INFO.telegramHandle} ({PERSONAL_INFO.telegram})</div>
          <div>GitHub: {PERSONAL_INFO.github}</div>
          <div>Location: {PERSONAL_INFO.location}</div>
        </div>
      );
    } else if (cmd === "matrix") {
      setMatrixActive(true);
      setTimeout(() => setMatrixActive(false), 5000);
      outputNode = (
        <div className="text-emerald-400 font-mono text-xs animate-pulse">
          ⚡ Entering Cyber Matrix Stream... (5 seconds)
        </div>
      );
    } else {
      outputNode = (
        <div className="text-xs font-mono text-rose-400">
          Command not found: &ldquo;{rawCmd}&rdquo;. Type{" "}
          <span className="text-emerald-300 font-bold cursor-pointer underline" onClick={() => handleCommand("help")}>
            help
          </span>{" "}
          to view available commands.
        </div>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        command: rawCmd,
        output: outputNode,
        timestamp: time,
      },
    ]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx =
        historyPointer === -1
          ? commandHistory.length - 1
          : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextIdx);
      setInputVal(commandHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextIdx = historyPointer + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryPointer(-1);
        setInputVal("");
      } else {
        setHistoryPointer(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    }
  };

  const quickChips = [
    "help",
    "bio",
    "about",
    "services",
    "skills",
    "projects",
    "experience",
    "references",
    "cover-letter",
    "contact",
    "clear",
  ];

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive CLI Terminal Shell</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Developer <span className="text-gradient-cyan">Terminal</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Directly inspect services, professional experience, references, cover letter, and skills through the interactive console.
          </p>
        </div>

        {/* Terminal Window Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="glass-panel rounded-3xl border border-emerald-500/30 shadow-2xl overflow-hidden relative"
        >
          {/* Matrix Rain Overlay */}
          {matrixActive && (
            <div className="absolute inset-0 bg-black/95 z-20 flex items-center justify-center p-6 font-mono text-emerald-400 text-xs sm:text-sm overflow-hidden select-none pointer-events-none">
              <div className="space-y-1 text-center animate-pulse">
                <div>01000011 01001000 01001000 01010101 01001110</div>
                <div>WESTERN UNIVERSITY • KOREA SOFTWARE HRD CENTER</div>
                <div>SPRING BOOT 3 • LARAVEL • NEXT.JS • POSTGRESQL</div>
                <div className="text-emerald-300 font-bold mt-2">SYSTEM INTEGRITY 100%</div>
              </div>
            </div>
          )}

          {/* Window Top Controls */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#070b16] border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:opacity-100 cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:opacity-100 cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 cursor-pointer" />
              <span className="text-xs font-mono text-slate-400 ml-2">
                pich@portfolio:~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setHistory([]);
                }}
                className="text-slate-400 hover:text-white text-xs font-mono flex items-center gap-1 transition-colors"
                title="Clear terminal"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="p-5 bg-[#030610]/95 min-h-[340px] max-h-[480px] overflow-y-auto font-mono text-xs text-slate-200 space-y-4 cursor-text"
          >
            {history.map((entry, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">pich@portfolio:~$</span>
                  <span className="text-white font-bold">{entry.command}</span>
                  <span className="text-[10px] text-slate-600 ml-auto">
                    {entry.timestamp}
                  </span>
                </div>
                <div className="pl-4 border-l-2 border-emerald-500/30">
                  {entry.output}
                </div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Interactive Command Input Line */}
          <div className="p-3 bg-[#070b16] border-t border-white/10 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xs font-bold shrink-0">
              pich@portfolio:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => {
                soundFx.playTerminalKey();
                setInputVal(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type command ('help', 'bio', 'services', 'experience', 'references')..."
              className="w-full bg-transparent text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors shrink-0"
              title="Run command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Command Chips Toolbar */}
          <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center gap-1.5 overflow-x-auto">
            <span className="text-[11px] font-mono text-slate-500 shrink-0 mr-1">
              Quick run:
            </span>
            {quickChips.map((chip) => (
              <button
                key={chip}
                onClick={() => handleCommand(chip)}
                onMouseEnter={() => soundFx.playHover()}
                className="px-2.5 py-1 rounded-md bg-white/[0.03] hover:bg-emerald-500/20 border border-white/5 hover:border-emerald-500/30 text-[11px] font-mono text-slate-300 hover:text-emerald-300 transition-colors whitespace-nowrap"
              >
                ${chip}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
