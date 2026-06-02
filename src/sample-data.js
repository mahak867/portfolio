const profile = {
  name: "Mahak Fahad",
  title: "AI Builder | Full-Stack Engineer | Open Source",
  location: "India",
  email: "mahakfahad07@gmail.com",
  summary:
    "First-year CSE student shipping production AI systems. I build India-first AI products, medical-grade hardware workflows, and production full-stack applications with real deployment focus.",
  resumeUrl: "#",
  githubUrl: "https://github.com/mahak867",
  linkedinUrl: "https://linkedin.com/in/mahak-fahad-712183382",
  websiteUrl: "https://hotscan.in"
};

const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "Flask", "Spring Boot"]
  },
  {
    category: "AI / ML",
    items: ["LLMs", "RAG", "Agents", "Claude", "Groq"]
  },
  {
    category: "Hardware",
    items: ["Arduino", "BLE", "nRF52840", "IMU"]
  },
  {
    category: "DevOps",
    items: ["Docker", "GitHub Actions", "CI/CD"]
  },
  {
    category: "Data",
    items: ["PostgreSQL", "Redis", "Supabase"]
  }
];

const projects = [
  {
    title: "GestureTalk",
    slug: "gesture-communication-app",
    summary: "Free smartphone AAC for mute patients, powered by Gemma 4 and offline-first privacy.",
    description:
      "Uses MediaPipe landmarks, Gemma 4 vision/text/translation, Web Speech TTS, medical phrase packs, SOAP notes, emergency SOS, accessibility modes, and PWA caching.",
    stack: ["Next.js", "TypeScript", "Gemma 4", "MediaPipe", "Ollama", "PWA"],
    imageUrl: "/assets/project-gesture.png",
    demoUrl: "https://gesturetalk.vercel.app",
    repoUrl: "https://github.com/mahak867/gesture-communication-app",
    featured: true
  },
  {
    title: "Hotscan",
    slug: "hotscan",
    summary: "India's first Hot Wheels AI price scanner with live Indian market pricing.",
    description:
      "A production PWA that identifies die-cast cars with Groq-hosted Llama vision, returns Indian prices, manages collections, supports marketplace flows, and runs Razorpay payments.",
    stack: ["Vanilla JS", "Vite", "Groq AI", "Supabase", "Razorpay", "Vercel"],
    imageUrl: "/assets/project-hotscan.png",
    demoUrl: "https://hotscan.in",
    repoUrl: "https://github.com/mahak867/Hotscan",
    featured: true
  },
  {
    title: "Stock Monitor Pro",
    slug: "stock-monitor-pro",
    summary: "Investor-ready stock platform with global markets, AI trading, and live data.",
    description:
      "Built with market mode switching, real-time charts, Finnhub streaming, Claude AI trade assistant, Clerk auth, Stripe checkout, watchlists, portfolios, and alerts.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Claude AI", "Stripe"],
    imageUrl: "/assets/project-stock-monitor.png",
    demoUrl: "https://stock-monitor-pro.vercel.app",
    repoUrl: "https://github.com/mahak867/stock-monitor-pro",
    featured: true
  },
  {
    title: "Spendzview",
    slug: "spendzview",
    summary: "Full-stack personal finance, banking, and life management system.",
    description:
      "Covers authentication, expenses, budgets, bills, subscriptions, shopping, travel, health, education, insurance, savings goals, banking imports, analytics, and exports.",
    stack: ["Node.js", "Express", "SQLite", "Tailwind CSS", "Chart.js", "bcrypt"],
    imageUrl: "/assets/project-spendzview.png",
    demoUrl: "",
    repoUrl: "https://github.com/mahak867/spendzview",
    featured: true
  },
  {
    title: "Quantis SIP Calculator",
    slug: "quantis-sip-calculator",
    summary: "Fast SIP calculator for investment returns, step-ups, inflation, and tax estimates.",
    description:
      "A clean financial calculator with instant client-side computation, validation, goal progress tracking, Recharts visualizations, and a tested Next.js App Router codebase.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Recharts", "Jest"],
    imageUrl: "/assets/project-quantis.png",
    demoUrl: "https://quantis-sip-calculator.vercel.app",
    repoUrl: "https://github.com/mahak867/quantis-sip-calculator",
    featured: true
  },
  {
    title: "APEX AI Dev Engine",
    slug: "ai-dev-engine",
    summary: "Multi-agent AI development engine that generates and repairs full-stack apps.",
    description:
      "Combines planner, architect, coder, reviewer, debugger, healer, and doc writer agents with provider fallback, persistent memory, streaming, CLI usage, and a local web UI.",
    stack: ["Python", "Groq", "OpenRouter", "Ollama", "Mistral", "pytest"],
    imageUrl: "/assets/project-ai-engine.png",
    demoUrl: "",
    repoUrl: "https://github.com/mahak867/ai-dev-engine",
    featured: true
  }
];

module.exports = {
  profile,
  projects,
  skills
};
