const skills = [
  "Python","JavaScript","TypeScript","Java",
  "React","Next.js","Tailwind CSS",
  "FastAPI","Node.js","Flask","Spring Boot",
  "LLMs","RAG","Agents","Claude","Groq",
  "Arduino","BLE","nRF52840","IMU",
  "Docker","GitHub Actions","CI/CD",
  "PostgreSQL","Redis","Supabase"
];

const projects = [
  {
    name: "Hotscan",
    status: "live",
    statusNote: "some features in progress",
    desc: "India's first Hot Wheels AI price scanner. Llama 4 Maverick vision identifies any die-cast car and returns live Indian market prices from OLX, Hamleys, Flipkart, and collector swap meets. Fake detector, multi-car scan, OLX listing analyser, community price submissions, collection manager with ₹ valuation, in-app marketplace, hunt mode. Razorpay ₹99/mo subscription. Production PWA.",
    tags: ["Vanilla JS","Vite","Groq","Supabase","Razorpay","PWA"],
    demo: "https://hotscan.in",
    repo: "https://github.com/mahak867/Hotscan"
  },
  {
    name: "GestureTalk",
    status: "wip",
    statusNote: "v1 complete locally · not deployed",
    desc: "Free AAC platform for non-verbal patients — ALS, CP, stroke. Runs 6 distinct Gemma 4 capabilities entirely on-device via Ollama: gesture vision, sentence completion, 6-language translation, emotion detection, function calling, and SOAP note generation. Voice banking, emergency SOS, FHIR R4 export for Epic/Cerner EHR, caregiver dashboard, tremor compensation, eye gaze input. Gemma 4 Good Hackathon entry. 29 tests passing.",
    tags: ["Next.js","TypeScript","Gemma 4","MediaPipe","Ollama","PWA"],
    demo: null,
    repo: "https://github.com/mahak867/gesture-communication-app"
  },
  {
    name: "Stock Monitor Pro",
    status: "wip",
    statusNote: "under development",
    desc: "Full-stack investor platform — US, India, and Crypto market modes. Live WebSocket streaming via Finnhub, real NSE data via Upstox, Claude Sonnet AI trade assistant with paper trading, Alpaca brokerage for real orders, Clerk auth, Stripe + Razorpay (INR/UPI) subscriptions, real-time P&L, 15+ screener filters, email price alerts via Resend, 3-step onboarding, per-user premium gating.",
    tags: ["Next.js 15","TypeScript","Claude AI","Finnhub","Upstox","Stripe","Razorpay","Clerk"],
    demo: null,
    repo: "https://github.com/mahak867/stock-monitor-pro"
  },
  {
    name: "IntelliStock",
    status: "complete",
    statusNote: "local · docker-compose up",
    desc: "NSE/BSE market intelligence platform — BiLSTM + Bahdanau Attention with 30+ technical features and NIFTY50 macro input. BUY/SELL/HOLD signals with confidence scores, RSI + MACD confirmation, anti-data-leakage ML pipeline. 7-service Docker Compose: FastAPI (4 workers), Streamlit, PostgreSQL, Redis, Celery auto-retrain, Flower, Prometheus/Grafana. GCP Cloud Run CI/CD. 85%+ test coverage.",
    tags: ["Python","FastAPI","BiLSTM","TensorFlow","Celery","Docker","PostgreSQL","Redis"],
    demo: null,
    repo: "https://github.com/mahak867/intellistock"
  },
  {
    name: "SmartHire",
    status: "complete",
    statusNote: "local · docker-compose up",
    desc: "Enterprise AI recruitment SaaS — post jobs, auto-rank candidates via two-stage scoring: TF-IDF cosine similarity + Claude narrative analysis. Async @Async pipeline, graceful fallback, full hiring pipeline from application to offer. BCrypt-12, JWT refresh rotation with Redis revocation, Bucket4j rate limiting, OWASP headers, Flyway migrations, Testcontainers suite, Prometheus/Grafana, Swagger UI.",
    tags: ["Java 21","Spring Boot 3","React 18","PostgreSQL","Redis","Claude AI","Docker"],
    demo: null,
    repo: "https://github.com/mahak867/smarthire"
  },
  {
    name: "APEX AI Dev Engine",
    status: "wip",
    statusNote: "v3 · under development",
    desc: "Multi-agent code generation engine that builds full-stack apps from a single sentence. 7-agent pipeline: Planner, Architect, Coder, Reviewer, Debugger, Healer, DocWriter. 18+ models across Groq, OpenRouter, Together, Ollama, and Mistral with cascade fallback. Persistent memory, token-by-token streaming, self-healing execution loop, security audit, CLI + web UI.",
    tags: ["Python","Groq","OpenRouter","Ollama","Mistral","pytest"],
    demo: null,
    repo: "https://github.com/mahak867/ai-dev-engine"
  }
];

function renderSkills() {
  const container = document.getElementById("skills-list");
  if (!container) return;
  container.innerHTML = skills.map(s => `<span class="stack-tag">${s}</span>`).join("");
}

function renderProjects() {
  const container = document.getElementById("projects-list");
  if (!container) return;
  container.innerHTML = projects.map(p => {
    const tags = p.tags.map(t => `<span class="proj-tag">${t}</span>`).join("");
    const links = [
      p.demo ? `<a class="proj-link" href="${p.demo}" target="_blank" rel="noreferrer">live ↗</a>` : "",
      p.repo ? `<a class="proj-link" href="${p.repo}" target="_blank" rel="noreferrer">source</a>` : ""
    ].filter(Boolean).join("");

    const badgeClass = p.status === "live" ? "badge-live" : p.status === "complete" ? "badge-complete" : "badge-wip";
    const badgeText = p.status === "live" ? "live" : p.status === "complete" ? "complete" : "in dev";

    return `
      <div class="project-row">
        <div class="proj-left">
          <div class="proj-name">
            ${p.name}
            <span class="proj-badge ${badgeClass}">${badgeText}</span>
            <span class="proj-status-note">${p.statusNote}</span>
          </div>
          <div class="proj-desc">${p.desc}</div>
          <div class="proj-tags">${tags}</div>
        </div>
        <div class="proj-right">${links}</div>
      </div>`;
  }).join("");
}

renderSkills();
renderProjects();
