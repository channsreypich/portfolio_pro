# Modern Dynamic Portfolio • Chhun Chansreypich

> **Computer Science Student & Full-Stack Software Developer**  
> **Korea Software HRD Center**: Basic Course Graduate (Full-Stack Web Dev) • AX-Professional Course Enrolled (AI Engineering & Data Analytics)

A cutting-edge developer portfolio engineered with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Web Audio API** synthesized micro-interactions.

---

## ⚡ Key Highlights & Features

1. **Dual Specialization Bento Grid (`Korea Software HRD Center`)**:
   - **Card 1 (Full Stack Foundations)**: Showcases Next.js 15, React, Spring Boot 3, Spring Security, REST APIs, and PostgreSQL with an **interactive 3-stage Request Flow Simulator**.
   - **Card 2 (AX & Data Specialization)**: Highlights AI Engineering, LangChain RAG pipelines, Vector Embeddings, and Data Analytics with a **live interactive AI & RAG Query Playground**.
   - **Card 3 (CS Foundations)**: Algorithmic time-complexity (Big-O) and clean architecture principles.
   - **Card 4 (Interactive CLI Launcher)**: Quick commands to inspect academic transcripts and project telemetry.
   - **Card 5 (Quality Standards)**: Clean Code, 100% HRD dedication, and production readiness.

2. **Interactive Developer CLI Terminal**:
   - Built-in terminal emulator supporting commands: `help`, `bio`, `hrd`, `skills`, `projects`, `journey`, `ai-status`, `contact`, `matrix`, `clear`.
   - Command history navigation (Up/Down arrow keys) and quick run chips.

3. **3D Tilt & Glassmorphism Project Showcase**:
   - Filterable by Full-Stack, AI & Data Engineering, Spring Boot backends, and Next.js apps.
   - Modal drawer for deep-dive architecture inspection and telemetry benchmarks.

4. **Interactive Tech Stack Matrix**:
   - Category filtering (Frontend, Backend, AI/Data, Database & DevOps, Core CS) with real-time keyword search.

5. **Evolution & Milestone Journey**:
   - Step-by-step interactive timeline illustrating progression from CS Student to HRD Basic Course and AX-Professional AI Engineering.

6. **Interactive Resume & CV Modal**:
   - Instant in-browser CV preview with print/PDF export capability.

7. **Global Command Palette (`⌘K` / `Ctrl+K`)**:
   - Instant search across projects, technologies, and quick actions.

8. **Web Audio Synthesizer**:
   - Subtle futuristic UI audio feedback generated via Web Audio API (no external sound files required) with persistent mute toggle.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://motion.dev/) (Spring physics: `stiffness: 300, damping: 20`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Particle Canvas**: HTML5 Canvas 60fps mesh
- **Sound**: Web Audio API Synthesizer

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css          # Glassmorphism & Cyber themes
│   │   ├── layout.tsx           # SEO metadata & font setup
│   │   └── page.tsx             # Main orchestrated page
│   ├── components/
│   │   ├── CommandPalette.tsx   # Cmd+K global search
│   │   ├── ContactSection.tsx   # Contact form & confetti trigger
│   │   ├── Footer.tsx           # Futuristic status footer
│   │   ├── HeroSection.tsx      # High impact intro & code snippet switcher
│   │   ├── Icons.tsx            # SVG Brand icons
│   │   ├── InteractiveTerminal.tsx # CLI emulator
│   │   ├── JourneyTimeline.tsx  # Milestones & Career path
│   │   ├── Navbar.tsx           # Floating glass navbar
│   │   ├── ParticleBackground.tsx # Interactive canvas particles
│   │   ├── ProjectModal.tsx     # Deep-dive architecture modal
│   │   ├── ProjectsSection.tsx  # 3D project cards
│   │   ├── ResumeModal.tsx      # Full CV modal
│   │   ├── SpecializationBento.tsx # HRD Basic + AX-Pro Bento Grid
│   │   └── TechStackMatrix.tsx  # Skill matrix & filter tabs
│   ├── data/
│   │   └── portfolioData.ts     # Data store for profile, skills, HRD info
│   ├── lib/
│   │   ├── sound.ts             # Web Audio API sound synthesizer
│   │   └── utils.ts             # Class merger utilities
│   └── types/
│       └── index.ts             # TypeScript definitions
```
