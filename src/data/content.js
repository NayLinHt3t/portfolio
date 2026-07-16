// ===================================================================
//  EDIT EVERYTHING HERE.
//  This file is the single source of truth for the whole portfolio.
//  Swap the placeholder text, add your projects, drop your photo in
//  /public/assets/ and update `profile.photo`.
// ===================================================================

export const profile = {
  name: "Nay Lin Htet",
  handle: "naylin",
  role: "Software Engineer",
  // dual-track signal shown as tags under the role
  specialties: ["systems", "backend", "embedded"],
  tagline:
    "I build backend services and low-level systems — from APIs and data pipelines down to C and bare metal.",
  location: "Chiang Rai, Thailand",
  timezone: "UTC+07",
  website: "naylinhtet.me",
  websiteUrl: "https://naylinhtet.me",
  // set to "" to hide the "open to work" banner
  availability: "open to work",
  summary:
    "Software engineer working across the stack's depth — backend services and " +
    "systems software alike. Comfortable from high-level APIs and data pipelines " +
    "down to C, memory, concurrency, and hardware. Focused on performance, clean " +
    "architecture, and understanding how things work underneath. Always learning, " +
    "always shipping.",
  // Drop a square-ish image at /public/assets/profile.jpg (or change path).
  photo: "/assets/profile.jpg",
  resumeUrl: "/Nay_Lin_Htet_Resume_Backend_Systems.docx", // downloadable résumé (in /public)
  // "currently running" panel in the hero — your real, current status.
  // state: 'running' (now) | 'done' (past). Edit freely.
  now: [
    {
      state: "running",
      label: "Backend Developer",
      detail: "University · part-time",
      since: "Jun 2026",
    },
    {
      state: "running",
      label: "Undergraduate Student",
      detail: "Software Engineering",
      since: "",
    },
    {
      state: "done",
      label: "React Developer (Junior)",
      detail: "~3 months",
      since: "prior",
    },
  ],
};

// Nodes rendered in the hero "system map". Each maps to a section id.
// role = the little "// ..." subtitle shown under the label.
export const mapNodes = [
  { id: "about", label: "about", role: "identity service" },
  { id: "projects", label: "projects", role: "compute cluster" },
  { id: "embedded", label: "embedded", role: "embedded systems" },
  { id: "skills", label: "skills", role: "config store" },
  { id: "contact", label: "contact", role: "egress gateway" },
];

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "Python", "C", "SQL", "Go"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Fastify", "NestJS"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "Redis", "MongoDB", "Prisma"],
  },
  {
    group: "Infrastructure",
    items: ["Docker", "Nginx", "Linux", "AWS", "PM2"],
  },
  {
    group: "Tools",
    items: ["Git", "CI/CD", "Kafka", "BullMQ", "Zod"],
  },
];

// Shown as a small "currently learning" strip under the skills panel.
export const learning = [
  "Systems Programming",
  "Distributed Systems",
  "Advanced OS Concepts",
];

// "build queue" — systems projects you're planning next. Honest roadmap
// shown under the projects grid (portfolio only, not the résumé).
export const roadmap = [
  { name: "Database server", note: "storage engine, query parsing, transactions" },
  { name: "Container runtime", note: "namespaces + cgroups (mini-Docker)" },
];

// status: 'running' | 'wip' | 'archived'
// progress: 0–100 (drives the build bar). Set to null to hide the bar.
export const projects = [
  {
    id: "tripnest",
    name: "TripNest",
    tagline: "Microservices booking platform",
    status: "running",
    progress: 100,
    period: "2025 — present", // adjust dates
    role: "Solo",
    stack: [
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Socket.io",
      "Docker",
      "Nginx",
    ],
    summary:
      "Travel/event booking platform built as microservices (auth, booking, " +
      "chat, review) behind an Nginx API gateway. Real-time group chat over " +
      "socket.io, sentiment-scored reviews, and Redis-backed caching + queues, " +
      "all dockerized and deployed.",
    highlights: [
      "microservices + API gateway",
      "real-time chat (socket.io)",
      "sentiment-scored reviews",
    ],
    repo: "https://github.com/NayLinHt3t/tripNestBackend-v2", // add your GitHub link
    live: "#", // add a live/demo link
  },
  {
    id: "memoria",
    name: "Memoria",
    tagline: "AI assistant with memory",
    status: "wip",
    progress: 80,
    period: "2026",
    role: "Solo",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "LLM"],
    summary:
      "A personal AI assistant focused on long-term memory — retaining context " +
      "across conversations and recalling it on demand, with clean prompt " +
      "orchestration. (Refine this description to match what it actually does.)",
    highlights: ["persistent memory", "context recall"],
    repo: "https://github.com/NayLinHt3t/memoria",
    live: "#",
  },
  {
    id: "http-c",
    name: "HTTP Server in C",
    tagline: "HTTP/1.1 server from scratch",
    status: "wip",
    progress: 60,
    period: "2026",
    role: "Solo",
    stack: ["C", "Linux", "Sockets"],
    summary:
      "A lightweight HTTP/1.1 server written from scratch in C — raw socket " +
      "handling, request parsing, and concurrent connections. A deliberate " +
      "deep dive into systems programming.",
    highlights: ["raw sockets", "request parsing", "concurrency"],
    // RÉSUMÉ BULLETS — server is WIP, so these describe what's built so far.
    // Set <...> to the model you actually used; add a benchmark bullet ONLY
    // once you've measured it.
    bullets: [
      "Building an HTTP/1.1 server from scratch in C with zero external dependencies — raw BSD sockets and a hand-written request parser.",
      "Implementing the connection layer with an epoll-based event loop and careful edge-case handling (partial reads, timeouts, SIGPIPE).",
    ],
    repo: "https://github.com/NayLinHt3t/DeepDiveCAndSystem",
    live: "#",
  },
  {
    id: "shell",
    name: "Shell (in C)",
    tagline: "A Unix shell from scratch",
    status: "wip",
    progress: 50, // adjust to reality
    period: "2026",
    role: "Solo",
    stack: ["C", "Linux", "syscalls"],
    summary:
      "A Unix shell written in C — tokenizing and parsing the command line, " +
      "spawning processes with fork/exec, wiring up pipes and I/O redirection, " +
      "plus built-ins and basic job control.",
    highlights: ["fork/exec + pipes", "I/O redirection", "built-ins & job control"],
    // RÉSUMÉ BULLETS — fill/trim to what's actually implemented.
    bullets: [
      "Built a Unix shell in C — command parsing, process creation via fork/exec, pipes, and I/O redirection using raw syscalls.",
      "Implemented built-ins (cd, export, …), signal handling (SIGINT/SIGCHLD), and exit-status propagation across pipelines.",
    ],
    repo: "#", // add your GitHub link
    live: "#",
  },
  {
    id: "streaming",
    name: "Video Streaming Platform",
    tagline: "Adaptive video streaming",
    status: "wip",
    progress: 30,
    period: "2026",
    role: "Solo",
    stack: ["Node.js", "FFmpeg", "HLS"],
    summary:
      "A video streaming service with a transcoding pipeline and chunked HLS " +
      "delivery. Early stage — building out the ingest and packaging flow.",
    highlights: ["HLS streaming", "transcoding pipeline"],
    repo: "https://github.com/NayLinHt3t/video-streaming-platform",
    live: "#",
  },
  {
    id: "github-profile-analyzer",
    name: "GitHub Profile Analyzer",
    tagline: "Analyze and visualize GitHub profiles",
    status: "running",
    progress: 100,
    period: "2026",
    role: "Solo",
    stack: ["TypeScript", "React", "GitHub API", "Data Visualization"],
    summary:
      "A tool to analyze and visualize GitHub profiles, providing insights into user activity, contributions, and repository engagement.",
    highlights: [
      "profile analysis",
      "data visualization",
      "GitHub API integration",
    ],
    repo: "https://github.com/NayLinHt3t/github_profile_analyzer",
    live: "#",
  },
];

// Embedded / hardware projects — shown as a photo gallery ("memories").
// Drop photos in /public/assets/embedded/ and point `photo` at them.
// Fill in the 3 real projects below (name, what it does, hardware/tools).
export const embedded = [
  {
    id: "emb-01",
    title: "Robotics Arm",
    tagline: "A movable robotic arm controlled via microcontroller",
    photo: "/assets/embedded/project-1.jpg",
    period: "2018",
    stack: [
      "C",
      "Arduino",
      "servo motors",
      "bluetooth module",
      "lipo battery",
      "motor driver",
      "moveable vehicle",
    ],
    summary:
      "We built a robotic arm with a microcontroller and a bluetooth module." +
      "Control the arm's movements via a mobile app, allowing for precise manipulation of objects. The arm include a moveable vehicle to move around the environment.",
  },
  {
    id: "emb-02",
    title: "Combat Car",
    tagline: "A remote-controlled combat vehicle for competitive events",
    photo: "/assets/embedded/project-2.jpg",
    period: "2018",
    stack: [
      "C",
      "Arduino",
      "motors",
      "6 channel remote control",
      "servo motor",
      "lipo battery",
    ],
    summary:
      "We built a combat car for competitive events, equipped with a 6-channel remote control and servo motors for precise maneuvering. The car was designed to withstand impacts and perform well in combat scenarios.",
  },
  {
    id: "emb-03",
    title: "RFID-based Attendance System",
    tagline: "A system for tracking attendance using RFID technology",
    photo: "/assets/embedded/project-3.jpg",
    period: "2019",
    stack: ["python", "Raspberry Pi", "RFID reader", "LCD display"],
    summary:
      "We built an RFID-based attendance system using a Raspberry Pi and RFID reader. The system displays attendance information on an LCD display, providing a simple and efficient way to track student attendance.",
  },
];

// ------------------------------------------------------------------
//  RESUME (/resume.html) — extra structured data a CV needs that the
//  portfolio doesn't. Fill in the real bullets, employers, and dates.
// ------------------------------------------------------------------
export const resume = {
  phone: "", // optional — leave "" to hide
  // Feature these project ids (from `projects` above) on the resume.
  featured: ["tripnest", "http-c", "shell"],
  experience: [
    {
      title: "Backend Developer",
      org: "University — Faculty of ___", // replace with dept / lab / team
      location: "Chiang Rai, Thailand",
      start: "Jun 2026",
      end: "Present",
      stack: ["Node.js", "PostgreSQL", "Redis", "Docker"],
      bullets: [
        "Build and maintain backend services and REST APIs (replace with a real accomplishment + impact).",
        "Design database schemas and optimize queries for ___.",
      ],
    },
    {
      title: "React Developer (Junior)",
      org: "Company name",
      location: "",
      start: "20XX",
      end: "20XX",
      stack: ["React", "TypeScript"],
      bullets: [
        "Built responsive UI components for ___ (replace with a real bullet + result).",
      ],
    },
  ],
  education: [
    {
      degree: "B.Sc. in Software Engineering",
      school: "Your University",
      location: "Chiang Rai, Thailand",
      start: "20XX",
      end: "20XX (expected)",
      detail: "Relevant coursework: Operating Systems, Databases, Networks, Data Structures.",
    },
  ],
};

// Shown as an "endpoint list" in the contact section.
// NOTE: I guessed the github/linkedin handles and used your account email —
// double-check these and swap in the ones you want public.
export const socials = [
  {
    label: "website",
    method: "GET",
    path: "/site",
    url: "https://naylinhtet.me",
  },
  {
    label: "github",
    method: "GET",
    path: "/github",
    url: "https://github.com/nayLinHt3t/",
  },
  {
    label: "linkedin",
    method: "GET",
    path: "/linkedin",
    url: "https://www.linkedin.com/in/nay-lin-htet-0118b126b/",
  },
  {
    label: "email",
    method: "POST",
    path: "/email",
    url: "mailto:naylinhtetycc@gmail.com",
  },
];
