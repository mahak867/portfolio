INSERT INTO profile (
  id,
  name,
  title,
  location,
  email,
  summary,
  resume_url,
  github_url,
  linkedin_url,
  website_url
) VALUES (
  1,
  'Mahak Fahad',
  'AI Builder | Full-Stack Engineer | Open Source',
  'India',
  'mahakfahad07@gmail.com',
  'First-year CSE student shipping production AI systems. I build India-first AI products, medical-grade hardware workflows, and production full-stack applications with real deployment focus.',
  '#',
  'https://github.com/mahak867',
  'https://linkedin.com/in/mahak-fahad-712183382',
  'https://hotscan.in'
)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  title = EXCLUDED.title,
  location = EXCLUDED.location,
  email = EXCLUDED.email,
  summary = EXCLUDED.summary,
  resume_url = EXCLUDED.resume_url,
  github_url = EXCLUDED.github_url,
  linkedin_url = EXCLUDED.linkedin_url,
  website_url = EXCLUDED.website_url,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO skills (name, category, sort_order) VALUES
  ('Python', 'Languages', 10),
  ('JavaScript', 'Languages', 20),
  ('TypeScript', 'Languages', 30),
  ('Java', 'Languages', 40),
  ('React', 'Frontend', 50),
  ('Next.js', 'Frontend', 60),
  ('Tailwind CSS', 'Frontend', 70),
  ('FastAPI', 'Backend', 80),
  ('Node.js', 'Backend', 90),
  ('Flask', 'Backend', 100),
  ('Spring Boot', 'Backend', 110),
  ('LLMs', 'AI / ML', 120),
  ('RAG', 'AI / ML', 130),
  ('Agents', 'AI / ML', 140),
  ('Claude', 'AI / ML', 150),
  ('Groq', 'AI / ML', 160),
  ('Arduino', 'Hardware', 170),
  ('BLE', 'Hardware', 180),
  ('nRF52840', 'Hardware', 190),
  ('IMU', 'Hardware', 200),
  ('Docker', 'DevOps', 210),
  ('GitHub Actions', 'DevOps', 220),
  ('CI/CD', 'DevOps', 230),
  ('PostgreSQL', 'Data', 240),
  ('Redis', 'Data', 250),
  ('Supabase', 'Data', 260)
ON CONFLICT (name, category) DO UPDATE SET
  sort_order = EXCLUDED.sort_order;

DELETE FROM projects
WHERE slug IN ('intellistock', 'smarthire');

INSERT INTO projects (
  title,
  slug,
  summary,
  description,
  stack,
  image_url,
  demo_url,
  repo_url,
  featured,
  sort_order
) VALUES
  (
    'GestureTalk',
    'gesture-communication-app',
    'Free smartphone AAC for mute patients, powered by Gemma 4 and offline-first privacy.',
    'Uses MediaPipe landmarks, Gemma 4 vision/text/translation, Web Speech TTS, medical phrase packs, SOAP notes, emergency SOS, accessibility modes, and PWA caching.',
    ARRAY['Next.js', 'TypeScript', 'Gemma 4', 'MediaPipe', 'Ollama', 'PWA'],
    '/assets/project-gesture.png',
    'https://gesturetalk.vercel.app',
    'https://github.com/mahak867/gesture-communication-app',
    true,
    10
  ),
  (
    'Hotscan',
    'hotscan',
    'India''s first Hot Wheels AI price scanner with live Indian market pricing.',
    'A production PWA that identifies die-cast cars with Groq-hosted Llama vision, returns Indian prices, manages collections, supports marketplace flows, and runs Razorpay payments.',
    ARRAY['Vanilla JS', 'Vite', 'Groq AI', 'Supabase', 'Razorpay', 'Vercel'],
    '/assets/project-hotscan.png',
    'https://hotscan.in',
    'https://github.com/mahak867/Hotscan',
    true,
    20
  ),
  (
    'Stock Monitor Pro',
    'stock-monitor-pro',
    'Investor-ready stock platform with global markets, AI trading, and live data.',
    'Built with market mode switching, real-time charts, Finnhub streaming, Claude AI trade assistant, Clerk auth, Stripe checkout, watchlists, portfolios, and alerts.',
    ARRAY['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Claude AI', 'Stripe'],
    '/assets/project-stock-monitor.png',
    'https://stock-monitor-pro.vercel.app',
    'https://github.com/mahak867/stock-monitor-pro',
    true,
    30
  ),
  (
    'Spendzview',
    'spendzview',
    'Full-stack personal finance, banking, and life management system.',
    'Covers authentication, expenses, budgets, bills, subscriptions, shopping, travel, health, education, insurance, savings goals, banking imports, analytics, and exports.',
    ARRAY['Node.js', 'Express', 'SQLite', 'Tailwind CSS', 'Chart.js', 'bcrypt'],
    '/assets/project-spendzview.png',
    NULL,
    'https://github.com/mahak867/spendzview',
    true,
    40
  ),
  (
    'Quantis SIP Calculator',
    'quantis-sip-calculator',
    'Fast SIP calculator for investment returns, step-ups, inflation, and tax estimates.',
    'A clean financial calculator with instant client-side computation, validation, goal progress tracking, Recharts visualizations, and a tested Next.js App Router codebase.',
    ARRAY['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Jest'],
    '/assets/project-quantis.png',
    'https://quantis-sip-calculator.vercel.app',
    'https://github.com/mahak867/quantis-sip-calculator',
    true,
    50
  ),
  (
    'APEX AI Dev Engine',
    'ai-dev-engine',
    'Multi-agent AI development engine that generates and repairs full-stack apps.',
    'Combines planner, architect, coder, reviewer, debugger, healer, and doc writer agents with provider fallback, persistent memory, streaming, CLI usage, and a local web UI.',
    ARRAY['Python', 'Groq', 'OpenRouter', 'Ollama', 'Mistral', 'pytest'],
    '/assets/project-ai-engine.png',
    NULL,
    'https://github.com/mahak867/ai-dev-engine',
    true,
    60
  )
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  summary = EXCLUDED.summary,
  description = EXCLUDED.description,
  stack = EXCLUDED.stack,
  image_url = EXCLUDED.image_url,
  demo_url = EXCLUDED.demo_url,
  repo_url = EXCLUDED.repo_url,
  featured = EXCLUDED.featured,
  sort_order = EXCLUDED.sort_order,
  updated_at = CURRENT_TIMESTAMP;
