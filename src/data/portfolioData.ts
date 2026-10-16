import {
  Project,
  SkillItem,
  EducationMilestone,
  ExperienceTimelineItem,
  ServiceItem,
  ReferenceItem,
  SkillCategoryGroup,
} from "@/types";

export const PERSONAL_INFO = {
  name: "Chhun Chansreypich",
  fullName: "Chhun Chansreypich",
  role: "Full-Stack & Backend Software Developer",
  title: "Full-Stack & Backend Software Developer",
  headline: "HELLO, I'M A",
  currentRole: "4th-Year CS Student & Software Developer",
  status: "Available for Software Engineering Roles & Internships",
  location: "Terk Thla, SenSok, Phnom Penh, Cambodia",
  email: "chhunchansreypich645@gmail.com",
  phone: "(+855) 17-360-981 || 96-633-7573",
  telegram: "https://t.me/pich_chy45",
  telegramHandle: "@pich_chy45",
  github: "https://github.com/channsreypich",
  avatarUrl: "/profile.png",
  bio: "Highly motivated 4th-year Computer Science student with a strong foundational knowledge of full-stack development and modern software architecture. Combining academic theory from Western University with intensive, practical technical training at the Korea Software HRD Center, including its Advance Course in Data Analytics. Now building data analytics skills with Python, Excel, and Power BI. Eager to apply foundational skills in Java, Spring Boot, and Next.js to real-world development environments while continuously learning and adapting to new technologies.",
  aboutStory:
    "A story of hard work, engineering discipline, and curiosity. I combine university Computer Science theory at Western University with intensive software bootcamp training at Korea Software HRD Center (including its Advance Course in Data Analytics). I have experiences in backend with Spring Boot and Laravel, reactive modern frontends with Next.js, and data analytics with Python and Power BI to build scalable digital solutions.",
  shortBio:
    "4th-year CS student at Western University & Korea HRD Center specializing in Spring Boot, Next.js, Clean APIs, and Data Analytics.",

  stats: [
    { label: "Western Univ", value: "Year 4", sub: "Computer Science" },
    { label: "Korea HRD", value: "Bootcamp", sub: "Full Stack Training" },
    { label: "Projects Built", value: "10+", sub: "Web & Backend" },
    { label: "Clean Code", value: "100%", sub: "Standard Architecture" },
  ],
};

// 1.1 Core Profile Data Alias
export const PROFILE = PERSONAL_INFO;

// 1.2 Technical Services
export const SERVICES: ServiceItem[] = [
  {
    id: "backend-api",
    title: "Backend & API Architecture",
    icon: "Server",
    description:
      "Developing robust RESTful APIs, implementing Clean Architecture, and managing relational databases with Spring Boot & Laravel.",
    tags: ["Spring Boot", "Laravel", "REST APIs", "PostgreSQL"],
  },
  {
    id: "fullstack-web",
    title: "Full-Stack Web Apps",
    icon: "Layout",
    description:
      "Engineering interactive, mobile-responsive web applications using Next.js App Router, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    id: "database-devops",
    title: "Database & DevOps Basics",
    icon: "Database",
    description:
      "Database normalization, indexing, containerized environments with Docker, and Linux/macOS server fundamentals.",
    tags: ["PostgreSQL", "Docker", "Linux", "Git"],
  },
];

// 1.3 Technical Skills Matrix (SKILL_CATEGORIES)
export const SKILL_CATEGORIES: SkillCategoryGroup[] = [
  {
    title: "Backend & Core",
    icon: "Server",
    skills: [
      { name: "Java & Spring Boot", level: 85, icon: "Cpu" },
      { name: "PHP / Laravel", level: 75, icon: "Code" },
      { name: "C / C++", level: 70, icon: "Terminal" },
      { name: "RESTful API Design", level: 88, icon: "Share2" },
    ],
  },
  {
    title: "Frontend & UI",
    icon: "Layout",
    skills: [
      { name: "Next.js & React", level: 85, icon: "Layers" },
      { name: "TypeScript / JS", level: 82, icon: "FileCode" },
      { name: "Tailwind CSS", level: 90, icon: "Palette" },
      { name: "Figma UI/UX", level: 78, icon: "PenTool" },
    ],
  },
  {
    title: "Database & Tools",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 80, icon: "Database" },
      { name: "Git & GitHub", level: 85, icon: "GitBranch" },
      { name: "Linux / MacOS", level: 80, icon: "Terminal" },
      { name: "Docker Basics", level: 65, icon: "Box" },
    ],
  },
  {
    title: "Data Analytics",
    icon: "Cpu",
    skills: [
      { name: "Python", level: 80, icon: "Code" },
      { name: "Power BI", level: 75, icon: "Layers" },
      { name: "Excel Modeling", level: 85, icon: "FileCode" },
      { name: "Data Processing", level: 78, icon: "Database" },
    ],
  },
];

// Flattened Skills for Matrix Component
export const SKILLS: SkillItem[] = [
  // Backend & Core
  {
    name: "Java & Spring Boot",
    category: "backend",
    level: 85,
    experience: "Korea HRD Center",
    iconName: "Cpu",
    tags: ["Spring Boot 3", "REST APIs", "Spring Security", "JPA/Hibernate"],
    description:
      "Designing clean microservices, dependency injection, relational persistence, and secure token authentication.",
  },
  {
    name: "RESTful API Design",
    category: "backend",
    level: 88,
    experience: "GTech & HRD",
    iconName: "Share2",
    tags: ["Clean Architecture", "Swagger/OpenAPI", "JSON", "Error Handling"],
    description:
      "Crafting structured, documented, and resilient REST endpoints following SOLID principles and design patterns.",
  },
  {
    name: "PHP / Laravel",
    category: "backend",
    level: 75,
    experience: "GTECH Internship",
    iconName: "Code",
    tags: ["Eloquent ORM", "Routing", "Blade / APIs", "Authentication"],
    description:
      "Building backend CRUD services, MVC architecture, middleware, and database seeders during GTECH Cambodia internship.",
  },
  {
    name: "C / C++",
    category: "core_cs",
    level: 70,
    experience: "Western University",
    iconName: "Terminal",
    tags: ["Memory Management", "Pointers", "OOP", "Data Structures"],
    description:
      "Algorithmic problem solving, low-level memory allocation, and computational theory foundations at Western University.",
  },

  // Frontend & UI
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: 90,
    experience: "Core Specialty",
    iconName: "Palette",
    tags: ["Responsive Design", "Flexbox/Grid", "Dark Mode", "Custom Themes"],
    description:
      "Creating modern, pixel-perfect, mobile-first design systems with utility-first styling and micro-animations.",
  },
  {
    name: "Next.js & React",
    category: "frontend",
    level: 85,
    experience: "Korea HRD Center",
    iconName: "Layers",
    tags: ["App Router", "Server Components", "Client State", "SSR/CSR"],
    description:
      "Engineering reactive modern web applications with Next.js App Router, dynamic routing, and fast load times.",
  },
  {
    name: "TypeScript / JavaScript",
    category: "frontend",
    level: 82,
    experience: "Full-Stack Dev",
    iconName: "FileCode",
    tags: ["Strict Typing", "ESNext", "Async/Await", "Interfaces"],
    description:
      "Writing type-safe, maintainable client and server code with clean interfaces and strict compile checks.",
  },
  {
    name: "Figma UI/UX",
    category: "frontend",
    level: 78,
    experience: "Design & Prototyping",
    iconName: "PenTool",
    tags: ["Wireframing", "Component Kits", "User Journey", "Design Systems"],
    description:
      "Drafting intuitive user interfaces, visual design tokens, component libraries, and interactive interactive wireframes.",
  },

  // Database & DevOps
  {
    name: "Git & GitHub",
    category: "database_devops",
    level: 85,
    experience: "Daily Workflow",
    iconName: "GitBranch",
    tags: ["Branching Strategy", "PR Reviews", "Merge Conflicts", "Actions"],
    description:
      "Collaborative version control, pull requests, conventional commits, and team collaboration pipelines.",
  },
  {
    name: "PostgreSQL",
    category: "database_devops",
    level: 80,
    experience: "Western & HRD",
    iconName: "Database",
    tags: ["Schema Normalization", "Indexes", "Foreign Keys", "Transactions"],
    description:
      "Relational schema modeling, multi-table joins, indexing, query optimization, and ACID compliance.",
  },
  {
    name: "Linux / macOS",
    category: "database_devops",
    level: 80,
    experience: "Dev Environment",
    iconName: "Terminal",
    tags: ["Bash/Zsh", "SSH", "File Permissions", "Process Management"],
    description:
      "Navigating terminal environments, shell scripting, package management, and developer environment configuration.",
  },
  {
    name: "Docker Basics",
    category: "database_devops",
    level: 65,
    experience: "Containerization",
    iconName: "Box",
    tags: ["Dockerfile", "Docker Compose", "Multi-Container", "Images"],
    description:
      "Containerizing application services, running PostgreSQL database instances, and managing isolated developer environments.",
  },

  // Data Analytics (Korea HRD Advance Course & Resume)
  {
    name: "Python (Data Analytics)",
    category: "ai_data",
    level: 80,
    experience: "Korea HRD Advance Course",
    iconName: "Code",
    tags: ["Data Processing", "Scripting", "Pandas Basics", "Automation"],
    description:
      "Developing computational scripts, data analysis routines, and structured data handling during Korea HRD Advance Course.",
  },
  {
    name: "Power BI",
    category: "ai_data",
    level: 75,
    experience: "Data Analytics Track",
    iconName: "Layers",
    tags: ["Visual Dashboards", "Reports", "Data Modeling", "Business Metrics"],
    description:
      "Designing interactive visual analytics dashboards, metric reporting, and business intelligence views.",
  },
  {
    name: "Excel Data Modeling",
    category: "ai_data",
    level: 85,
    experience: "Dolphin Logistics & HRD",
    iconName: "FileCode",
    tags: ["Pivot Tables", "VLOOKUP/XLOOKUP", "Financial Modeling", "Data Analysis"],
    description:
      "Advanced spreadsheet data organization, financial reconciliation, and systematic analytical reporting.",
  },
];

// 1.4 Work & Professional Experience (EXPERIENCES)
export interface ExperienceRecord {
  company: string;
  role: string;
  period: string;
  type: string;
  highlights: string[];
}

export const EXPERIENCES: ExperienceRecord[] = [
  {
    company: "GTECH Cambodia",
    role: "Backend Developer Intern",
    period: "2025 - 2026",
    type: "Engineering Internship",
    highlights: [
      "Engineered backend CRUD services and RESTful APIs using Laravel.",
      "Applied standard Design Patterns and clean code conventions.",
      "Conducted collaborative code reviews and version management via Git.",
    ],
  },
  {
    company: "Dolphin Logistics",
    role: "Accounts Receivable Specialist",
    period: "2025",
    type: "Professional Experience",
    highlights: [
      "Audited financial data accuracy, ledgers, and systematic invoice reporting.",
      "Applied analytical problem-solving and strict data organization.",
      "Coordinated cross-department communication with enterprise partners.",
    ],
  },
  {
    company: "Spring Education Centre",
    role: "Sales & Marketing Associate",
    period: "2023",
    type: "Client Operations",
    highlights: [
      "Managed client outreach, presentation pitches, and target consultations.",
      "Delivered daily/weekly performance analytics to departmental leads.",
    ],
  },
];

// 1.5 Featured Projects (PROJECTS)
export const PROJECTS: Project[] = [
  {
    id: "enterprise-asset-reservation-system",
    title: "Enterprise Asset & Reservation System",
    subtitle: "Resource Management Engine",
    tagline: "Full-stack resource management platform with role-based auth & automated schedules",
    category: "fullstack",
    featured: true,
    badge: "Featured Capstone",
    gradient: "from-emerald-500/20 via-teal-500/10 to-indigo-600/20",
    description:
      "A full-stack resource management platform featuring role-based authorization, automated schedules, and audit logs. Combines Spring Boot Clean Architecture with reactive Next.js client interfaces.",
    highlights: [
      "Engineered role-based access control (RBAC) with secure JWT authentication",
      "Designed normalized PostgreSQL relational schema with audit tracking",
      "Implemented responsive calendar & reservation dashboard using Next.js & Tailwind",
      "Built resilient RESTful API endpoints adhering to Clean Architecture principles",
    ],
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Tailwind CSS", "TypeScript", "Java"],
    architecture: "Next.js App Router ↔ Spring Boot Clean REST API ↔ Hibernate/JPA ↔ PostgreSQL Database",
    metrics: [
      { label: "Authentication", value: "JWT Auth" },
      { label: "Endpoints", value: "REST Endpoints" },
      { label: "Design", value: "Clean Architecture" },
    ],
    githubUrl: "https://github.com/pichchy45",
    liveUrl: "https://github.com/pichchy45",
  },
  {
    id: "ecommerce-backend-rest-engine",
    title: "E-Commerce Backend REST Engine",
    subtitle: "High-Concurrency Order Processing",
    tagline: "Scalable backend API service for catalog pagination, cart sessions & checkout workflows",
    category: "spring",
    featured: true,
    badge: "Backend Engine",
    gradient: "from-blue-500/20 via-indigo-500/10 to-teal-600/20",
    description:
      "Scalable backend API service for managing catalog pagination, cart sessions, order checkout workflows, and secure payments with containerized deployment.",
    highlights: [
      "Developed high-throughput CRUD services and modular business logic with Laravel",
      "Optimized database queries with relational Eloquent ORM and index mapping",
      "Containerized backend development environment and PostgreSQL database using Docker",
      "Interactive API documentation and schema verification with Swagger/OpenAPI",
    ],
    technologies: ["Laravel", "PHP", "PostgreSQL", "Docker", "Swagger", "Git"],
    architecture: "Laravel REST API Layer ↔ Eloquent ORM ↔ PostgreSQL (Dockerized) ↔ Swagger UI",
    metrics: [
      { label: "Services", value: "CRUD Operations" },
      { label: "Security", value: "Secure Headers" },
      { label: "Database", value: "ORM Relations" },
    ],
    githubUrl: "https://github.com/pichchy45",
    liveUrl: "https://github.com/pichchy45",
  },
  {
    id: "adaptive-data-extractor-scraper",
    title: "Adaptive Data Extractor & Scraper",
    subtitle: "Automated Product Catalog Mining",
    tagline: "Python-based scraping pipeline with proxy rotation & automated JSON normalization",
    category: "ai",
    featured: true,
    badge: "Automation Tool",
    gradient: "from-cyan-500/20 via-sky-500/10 to-emerald-600/20",
    description:
      "Python-based scraping pipeline with proxy rotation, anti-detection policies, and automated JSON data normalization for structured catalog mining.",
    highlights: [
      "Built resilient extraction pipelines handling dynamic web elements and anti-scraping policies",
      "Configured automatic proxy rotation and header emulation for high availability",
      "Structured and validated extracted data into normalized JSON schemas for downstream APIs",
      "Achieved 99.4% extraction success rate with automated error recovery mechanisms",
    ],
    technologies: ["Python", "Scrapling", "ProxyRotator", "JSON Engine", "Linux"],
    architecture: "Scraper Worker ↔ Proxy Rotator ↔ Anti-Detection Pipeline ↔ JSON Normalizer",
    metrics: [
      { label: "Extraction Rate", value: "99.4%" },
      { label: "Network", value: "Proxy Rotation" },
      { label: "Format", value: "Automated Export" },
    ],
    githubUrl: "https://github.com/pichchy45",
    liveUrl: "https://github.com/pichchy45",
  },
];

// 1.6 Academic & Professional References (REFERENCES)
export const REFERENCES: ReferenceItem[] = [
  {
    name: "Thok Techhong",
    title: "Professor at Western University",
    institution: "Web Design",
    contact: "093 888 598",
  },
  {
    name: "Kry Saven",
    title: "Professor at Western University",
    institution: "DBMS & UX/UI",
    contact: "087 727 147",
  },
  {
    name: "Mam Sreymom",
    title: "Dean of IT at Panha Chiet University",
    institution: "Professor at Western University",
    contact: "011 22 32 96",
  },
  {
    name: "Nget LyLay",
    title: "Lead Backend Developer",
    institution: "GTech Cambodia",
    contact: "092 335 554",
  },
];

// 1.7 Cover Letter (COVER_LETTER_TEXT)
export const COVER_LETTER_TEXT = `Dear Hiring Manager,

I am writing to express my interest in joining your engineering organization as a Software Developer. I am currently in my fourth year of Computer Science at Western University and undergoing intensive practical software engineering at the Korea Software HRD Center.

Throughout my coursework and engineering internships, I have cultivated hands-on experience in Java, Spring Boot, PHP (Laravel), Next.js, and TypeScript. I take pride in writing testable code, understanding relational database structures, and delivering clean, responsive user interfaces.

Beyond my technical toolkit, my background in Accounts Receivable at Dolphin Logistics has honed my precision, analytical problem-solving, and attention to detail. I look forward to bringing this dedication, rapid learning agility, and collaborative spirit to your team.

Best Regards,
Chhun Chansreypich`;

// Education Milestones
export const EDUCATION_MILESTONES: EducationMilestone[] = [
  {
    id: "korea-hrd-advance",
    institution: "Korea Software HRD Center",
    program: "Advance Course (Data Analytics)",
    period: "2026 - Present",
    status: "In Progress",
    badge: "Advance Course",
    icon: "TrendingUp",
    description:
      "Advanced specialization program focused on modern data analytics, computational data pipelines, statistical modeling, and business intelligence reporting.",
    coreFocus: [
      "Data Analytics & Computational Modeling with Python",
      "Business Intelligence & Dashboard Architecture in Power BI",
      "Advanced Data Structuring, Pivot Modeling & Analysis with Excel",
      "Data Cleaning, Exploratory Data Analysis (EDA) & Trend Forecasting",
    ],
    keyAchievements: [
      "Selected for advanced data analytics track following strong performance in core software engineering",
      "Building automated data processing pipelines and interactive visual dashboards",
    ],
    technologies: ["Python", "Power BI", "Excel", "Data Analytics", "SQL", "Pandas Basics"],
  },
  {
    id: "korea-hrd-basic",
    institution: "Korea Software HRD Center",
    program: "Basic Course (Full-Stack Software Engineering)",
    period: "2026 - Present",
    status: "In Progress",
    badge: "Full-Stack Bootcamp",
    icon: "Layers",
    description:
      "Rigorous, industry-driven software engineering bootcamp emphasizing modern multi-tier web development, enterprise Spring Boot APIs, and reactive Next.js applications.",
    coreFocus: [
      "Full-Stack Web Architecture with Next.js App Router, TypeScript & Tailwind CSS",
      "Enterprise Java & Spring Boot (RESTful APIs, Spring Security, JPA/Hibernate)",
      "Database Normalization, PostgreSQL Indexing, and Transaction Management",
      "Microservice Concepts, Docker Containerization & Clean Code Principles",
    ],
    keyAchievements: [
      "Built multi-tier enterprise projects combining Spring Boot backends with modern Next.js interfaces",
      "Implemented secure JWT authentication and role-based access control systems",
      "Practiced agile sprint cycles, collaborative code reviews, and Git flow management",
    ],
    technologies: ["Java", "Spring Boot", "Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "Git"],
  },
  {
    id: "western-cs",
    institution: "Western University",
    program: "Bachelor of Science in Computer Science (Year 4)",
    period: "2023 - Present",
    status: "Academic",
    badge: "Year 4 Student",
    icon: "GraduationCap",
    description:
      "Deep foundational education in theoretical computer science, computational logic, algorithm analysis, database systems, and software engineering methodologies.",
    coreFocus: [
      "Data Structures & Algorithms (Optimization, Big-O Complexity, C/C++)",
      "Relational Database Management Systems (PostgreSQL, SQL Normalization)",
      "Object-Oriented Programming & Standard Design Patterns",
      "Web Technologies & Human-Computer Interface Design",
    ],
    keyAchievements: [
      "Maintaining strong academic standing across CS coursework and engineering labs",
      "Selected for advanced software development programs and mentoring initiatives",
    ],
    technologies: ["C / C++", "Java", "PostgreSQL", "Data Structures", "Algorithms", "Linux", "UI/UX"],
  },
  {
    id: "tepronam-high-school",
    institution: "Tepronam High School",
    program: "High School Diploma (Graduated with Grade B)",
    period: "2019 - 2022",
    status: "Completed",
    badge: "Grade B Graduate",
    icon: "Award",
    description:
      "Completed secondary education with official Grade B distinction, establishing strong academic foundations in mathematics, sciences, and analytical thinking.",
    coreFocus: [
      "Advanced Mathematics & Quantitative Logic",
      "Scientific Inquiry, Physics & Chemistry",
      "Foundational Computer Literacy & Problem Solving",
      "Academic Discipline, Communication & Teamwork",
    ],
    keyAchievements: [
      "Graduated with official Grade B distinction in the National High School Examination",
      "Demonstrated consistent excellence in mathematics and analytical subjects",
    ],
    technologies: ["Mathematics", "Physics", "Computer Literacy", "Logic"],
  },
];


// Timeline Journey
export const TIMELINE_JOURNEY: ExperienceTimelineItem[] = [
  {
    year: "2025 - 2026",
    title: "Backend Developer Intern",
    organization: "GTECH Cambodia",
    role: "Engineering Internship",
    statusText: "Professional Engineering Experience",
    description:
      "Engineered backend CRUD services and RESTful APIs using Laravel. Applied standard Design Patterns, clean code conventions, and conducted collaborative code reviews with Git version control.",
    tags: ["Laravel", "PHP", "REST APIs", "Clean Architecture", "Git", "PostgreSQL"],
    metrics: [
      "Engineered robust RESTful endpoints for enterprise web modules",
      "Applied standard design patterns and clean code conventions",
      "Participated in pull request code reviews and sprint planning",
    ],
  },
  {
    year: "2025 - Present",
    title: "Full Stack Software Engineering Bootcamp",
    organization: "Korea Software HRD Center",
    role: "Software Engineering Trainee",
    statusText: "Intensive Professional Bootcamp",
    description:
      "Immersive professional software engineering training covering enterprise Java & Spring Boot, modern reactive Next.js frontends, relational PostgreSQL schema design, and Docker containerization.",
    tags: ["Spring Boot", "Next.js", "Java", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
    metrics: [
      "Built full-stack enterprise capstones with Spring Boot & Next.js",
      "Mastered Clean Architecture and secure JWT authorization",
      "Collaborative project delivery following industry standards",
    ],
  },
  {
    year: "2025",
    title: "Accounts Receivable Specialist",
    organization: "Dolphin Logistics",
    role: "Professional Experience",
    statusText: "Analytical & Financial Operations",
    description:
      "Audited financial data accuracy, ledgers, and systematic invoice reporting. Applied analytical problem-solving, structured data organization, and coordinated cross-department communication.",
    tags: ["Data Auditing", "Analytical Problem-Solving", "Systematic Reporting", "Data Organization"],
    metrics: [
      "Audited complex financial records with high accuracy",
      "Developed systematic tracking and reporting workflows",
      "Strengthened organizational precision and attention to detail",
    ],
  },
  {
    year: "2023 - Present",
    title: "Bachelor of Science in Computer Science",
    organization: "Western University",
    role: "Year 4 Undergraduate Student",
    statusText: "Academic CS Major",
    description:
      "Pursuing a 4-year degree in Computer Science with focus on software engineering, algorithm analysis, operating systems, database management systems, and web design.",
    tags: ["Computer Science", "Algorithms", "C / C++", "PostgreSQL", "Web Design", "UI/UX"],
    metrics: [
      "Strong foundation in computational logic and Big-O optimization",
      "Academic coursework in DBMS, Web Development, and UX/UI",
      "Collaborative academic team projects and technical coursework",
    ],
  },
  {
    year: "2023",
    title: "Sales & Marketing Associate",
    organization: "Spring Education Centre",
    role: "Client Operations",
    statusText: "Client Communication & Analytics",
    description:
      "Managed client outreach, presentation pitches, and target consultations. Delivered daily and weekly performance analytics to departmental leads.",
    tags: ["Client Consultation", "Performance Analytics", "Outreach", "Communication"],
    metrics: [
      "Delivered analytical weekly performance reporting",
      "Honed effective interpersonal communication and client presentations",
    ],
  },
];

export const TERMINAL_COMMANDS_HELP = [
  { cmd: "help", desc: "List all available interactive commands" },
  { cmd: "bio", desc: "Display personal summary and professional role" },
  { cmd: "about", desc: "Read Chhun Chansreypich's engineering story" },
  { cmd: "services", desc: "View technical service specializations" },
  { cmd: "skills", desc: "Showcase mastered tech stack & proficiency breakdown" },
  { cmd: "education", desc: "View academic degrees and bootcamp qualifications" },
  { cmd: "projects", desc: "List featured full-stack & backend projects" },
  { cmd: "experience", desc: "View internships and professional experiences" },
  { cmd: "references", desc: "Display academic & professional references" },
  { cmd: "cover-letter", desc: "Read official cover letter" },
  { cmd: "contact", desc: "Show email, phone, Telegram & GitHub links" },
  { cmd: "clear", desc: "Clear terminal history" },
];
