# CLAUDE.md — PhoennixAI Platform

> This file is automatically loaded by Claude Code on every `/init`.
> Keep it updated. It is the single source of truth for all coding sessions.

---

## IDENTITY & STANDARD

**Product:** PhoennixPro (commercial name) | Brand: **PhoennixAI** (always double-N — non-negotiable)
**Founder / CEO:** Valerie Wilcox
**Tagline:** "Created to Create. Intelligent by nature."
**Palette (v1.3 — PhoennixAI_BrandSystem_v1_3):**

| Token | Hex | Role |
|---|---|---|
| Slate | `#556970` | Primary · Active states |
| Slate Dark | `#3E4F55` | Hover · Deep accents |
| Slate Light | `#7A9098` | Secondary text · Muted |
| Olive | `#ABA944` | Accent · Highlights · Badges |
| Olive Dark | `#8A8835` | Olive hover · Links |
| Olive Light | `#C9C877` | Pale accent fills |
| Off-White | `#F7F6F2` | Page background |
| White | `#FFFFFF` | Cards · Sidebar · Panels |
| Fog | `#EFF0EA` | Hover fills |
| Stone | `#D6D5C8` | Dividers · Scrollbars |
| Ink | `#1F2426` | Primary text |
| Ink 2 | `#3D4447` | Secondary text |
| Ink 3 | `#6B7477` | Muted / captions |
| Ink 4 | `#9BA4A7` | Placeholders · Hints |
| Phoenix Blue | `#1E90FF` | Logo fill · Icon only |
| Phoenix Cyan | `#00BFFF` | Logo glow · Eye mark |
| Logo Dark BG | `#0D1520` | Logo background only |

> **Colour rules:** The phoenix logo uses Phoenix Blue (`#1E90FF`) exclusively — always on Logo Dark BG (`#0D1520`). Olive marks **ix** in the wordmark only. Never use orange as a primary PhoennixAI brand colour.

**Typography (v1.3):**

| Font | Usage |
|---|---|
| Agdasima | H1 · H2 · H3 · Wordmark · KPI numbers · Section labels |
| Source Serif 4 | Body copy · Descriptions · Cards · Paragraphs |
| Fira Code | Labels · Tags · IDs · Code · Metadata · Status badges |

Every output: investor-grade documents, production-ready code, defensible recommendations.
THE STANDARD IS NOT GOOD. THE STANDARD IS THE BEST IN THE WORLD.

---

## TECH STACK

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite (this repo) / Next.js 14+ App Router (planned) |
| Styling | Tailwind CSS · shadcn/ui |
| Backend | Vercel Edge Functions (`api/ai.js`) |
| Database | Supabase (PostgreSQL + pgvector + Auth + Realtime + Storage + Edge Functions) |
| AI providers | xAI (Grok) · Anthropic (Claude) · NVIDIA NIM |
| Memory | Claude-Mem (SQLite + Chroma vector) · autoDream nightly 02:00 UTC |
| Orchestration | Ruflo v3.5 (64 sub-agents, 314 MCP tools) · DeerFlow LangGraph |
| Daemon | KAIROS (15-second action budget, append-only audit log) |
| Creative | Hailuo AI 2.3 · Replicate/Flux/SDXL · CivitAI LoRA · Chroma1-HD |
| Deployment | Vercel (frontend + edge functions) |
| CI/CD | GitHub Actions |

**Env vars:** `AI_API_KEY` (xAI/Anthropic/NVIDIA key), `SUPABASE_URL`, `SUPABASE_ANON_KEY`

---

## REPOSITORY LAYOUT

```
phoennixai-platform/
├── api/
│   └── ai.js               ← Edge function: model routing + tool dispatcher
├── src/
│   ├── App.jsx             ← Main app (31 agents, SKILLS array, CONNECTORS)
│   ├── ApiKeys.jsx         ← Web Crypto API key management (phx_live_ / phx_test_)
│   ├── skillsRegistry.js   ← Full tool/skill definitions for all agents
│   ├── index.css
│   └── main.jsx
├── CLAUDE.md               ← This file (auto-loaded by Claude Code)
├── phoennixai_project_instructions.md
├── package.json
└── vite.config.js
```

---

## MODEL ROUTING — AGENT TIERS

| Tier | Agents | Model | Rationale |
|---|---|---|---|
| Ultra-fast / Companion | SNOWY, RELAY, PULSE, ECHO | `grok-3-mini` | Sub-second; low cost |
| Planning / Strategy | ARIA, GRID, CLAUDE, SCRIBE, PA | `grok-3` or `llama-nemotron-70b` | Strong structured reasoning |
| Deep Research / Analysis | HERMES, PROBE, LEDGER, SAGE | `claude-opus-4-20250514` or `grok-3` | Long context, precision |
| Vision / Design | PICASSO, PIXEL, ANIME | `claude-sonnet-4-20250514` | Multimodal image I/O |
| Code / Engineering | FORGE, NEXUS, CODEREV, WSHOBSON | `grok-3` + NVIDIA Nemotron Code | Fastest code completion |
| Security | SECURITY, WSHOBSON | `claude-opus-4-20250514` | Accuracy over speed |
| Orchestration / Routing | COMPOSIO, SIGNAL, GOOSE, RUFLO | `grok-3-mini` | High-volume dispatch |
| Marketing / Comms | MARKETER, SAGE | `grok-3` | Creative + brand tone |
| Companions | MAYAH, JAYDEN | `claude-haiku-4-5-20251001` | Empathy-tuned |

Routing config stored in Supabase `phx_agent_config` table — no hardcoded model per agent in client code.

---

## 31 AGENTS

### CORE (5)
| Agent | Role |
|---|---|
| CLAUDE | AGI Strategic Partner & Agent Manager — governs all 31 agents and 9 products |
| ARIA | AI Interface & Automation — frictionless, conversion-optimised interactions |
| GRID | Delivery Governance — risk-assessed, milestone-driven, board-ready |
| SCRIBE | Document Production & Knowledge Hub — institutional-grade documents |
| PA | Personal Assistant — Chief of Staff-grade OS for Valerie Wilcox |

### INTELLIGENCE (5)
| Agent | Role |
|---|---|
| LEDGER | Financial Intelligence — Goldman MD + JPMorgan quant + Big Four CFO. Advisory only |
| RELAY | Conversion & Communications — full funnel from awareness to Stripe |
| SAGE | Research & Analytics — Human-AI Collaboration Research Programme |
| SCOUT | Market Intelligence — surfaces signals, not noise |
| PULSE | Content & Marketing — category-defining brand narratives |

### BUILD (5)
| Agent | Role |
|---|---|
| NEXUS | Principal Engineer — production-ready systems, DevHub co-owner |
| PROBE | QA Engineer — zero bug escape, no product ships without sign-off |
| FORGE | Product & Innovation — market-validated roadmaps |
| SIGNAL | Data & Integration — fault-tolerant, schema-validated, auditable |
| ECHO | Community & DM — personalised community interactions at scale |

### ORCHESTRATION (6)
| Agent | Role |
|---|---|
| RUFLO | 64 sub-agents, 314 MCP tools, Queen→specialist hierarchy |
| HERMES | Deep Research — Perplexity + citation-quality synthesis |
| GOOSE | Autonomous Task Execution |
| COMPOSIO | 250+ external tool integrations |
| GRAPHIFY | Codebase mapping & graph analysis |
| CLAW | Large codebase navigation |

### SPECIALIST (7)
| Agent | Role |
|---|---|
| CODEREV | Visual dependency mapping & static analysis |
| MARKETER | Campaign strategy → copy → schedule pipeline |
| ANIME | GSAP + Three.js animation engineering |
| SECURITY | SAST scanning, GDPR/SOC2/ISO27001 compliance |
| WSHOBSON | AGI orchestration — advanced agentic workflows |
| PICASSO | Principal UI/UX Designer |
| PIXEL | Creative Director — brand identity, visual systems, motion |

### COMPANIONS (3)
| Agent | Role |
|---|---|
| SNOWY | Tamagotchi AI PA — fast, playful companion |
| JAYDEN | Study & encouragement (PLANNED) |
| MAYAH | Creative learning / emotional support (PLANNED) |

---

## SKILLS SYSTEM — HOW IT WORKS

Every agent receives its skill set at inference time via `api/ai.js`. No skills are hardcoded client-side.

**Flow:**
1. Request arrives at `api/ai.js` with `{ agentId, messages, model }`
2. `api/ai.js` fetches the agent's enabled skills from Supabase `phx_agent_skills` table
3. Skills are injected as `tools[]` in the model API call body
4. If the model returns `stop_reason === 'tool_use'`, the dispatcher executes the tool server-side
5. Result is sent back as `tool_result` and the loop continues

**Supabase tables:**
- `phx_skills` — id, name, description, input_schema (jsonb), handler, is_global, tags
- `phx_agent_skills` — agent_id, skill_id, enabled, config (per-agent overrides)
- `phx_agent_config` — agent_id, model, temperature, max_tokens, system_prompt_extra
- `phx_tool_logs` — agent_id, tool_name, input, output, duration_ms, created_at

**Skills registry source:** `src/skillsRegistry.js` — the canonical definition of every tool.

---

## TOOL REGISTRY — 30 CORE TOOLS (ccunpacked.dev)

### Agent Tools (10)
| Tool | What it does |
|---|---|
| `SendMessage` | Send messages to sub-agents |
| `TaskCreate` | Spawn a new parallel task |
| `TaskGet` | Retrieve task status |
| `TaskList` | List all running tasks |
| `TaskUpdate` | Modify a running task |
| `TaskStop` | Kill a task |
| `TaskOutput` | Read task output |
| `TeamCreate` | Create an agent team |
| `TeamDelete` | Dissolve a team |
| `ListPeers` | List active peer agents |

### User / Config Tools (11)
| Tool | What it does |
|---|---|
| `AskUserQuestion` | Prompt user for input mid-task |
| `Todo` | Write to-do list |
| `WriteSkill` | Create/edit a SKILL.md |
| `Config` | Read/write PhoennixPro config |
| `RemoteTrigger` | Fire a remote hook |
| `CronCreate` | Schedule a recurring job |
| `CronDelete` | Remove a cron job |
| `CronList` | List all scheduled jobs |
| `Snip` | Save a reusable code snippet |
| `Workflow` | Define a multi-step workflow |
| `TerminalCapture` | Screenshot the terminal |

### System / Output Tools (9)
| Tool | What it does |
|---|---|
| `Sleep` | Pause execution |
| `SendUserMessage` | Push a notification to the user |
| `StructuredOutput` | Return typed/schema output |
| `LSP` | Language Server Protocol calls |
| `SendUserFile` | Send a file to the user |
| `PushNotification` | OS-level notification |
| `Monitor` | Watch a process stream |
| `SubscribePR` | Listen for PR events |
| `bash` | Execute shell commands (sandboxed) |

---

## SLASH COMMANDS

| Command | Agent(s) | What it does |
|---|---|---|
| `/ultraplan` | CLAUDE, ARIA | 30-min Opus planning with 3 parallel explorer agents |
| `/think` | HERMES, PROBE, ARIA | Extended chain-of-thought reasoning |
| `/ultrathink` | HERMES, CLAUDE | Deep multi-step reasoning (max tokens) |
| `/review` | CODEREV, PROBE | Full code review against best practices |
| `/fix` | FORGE, NEXUS | Auto-detect and fix lint/type/test errors |
| `/test` | FORGE, SECURITY | Generate and run test suites |
| `/commit` | FORGE, NEXUS | Intelligent semantic git commit |
| `/explain` | All agents | Explain any code block in plain language |
| `/doc` | SCRIBE, HERMES | Auto-generate documentation from code |
| `/memory` | All agents | Update and save persistent project facts |
| `/mcp` | COMPOSIO, SIGNAL | Connect to any MCP server |
| `/browser` | ANIME, SCOUT | Headless browser automation |
| `/vision` | PICASSO, PIXEL | Analyse images/screenshots inline |
| `/research` | HERMES, SCOUT | Multi-step web search + synthesis |
| `/persona` | All agents | Switch agent personality/context |
| `/summarise` | SCRIBE, ARIA | Distil long sessions to key decisions |
| `/sast` | SECURITY, WSHOBSON | Static Application Security Testing |
| `/diagram` | GRID, NEXUS | Auto-generate Mermaid architecture diagrams |
| `/financial` | LEDGER | Financial modelling, cash flow, ratio analysis |
| `/campaign` | MARKETER, ANIME | Brief → copy → schedule pipeline |
| `/compose` | CLAUDE, ARIA | Multi-file, multi-step agentic execution |
| `/debug` | FORGE, CODEREV | Attach to process, step through errors |
| `/deploy` | NEXUS, FORGE | Trigger CI/CD, push to cloud |
| `/audit` | SECURITY, WSHOBSON | GDPR, SOC2, ISO27001 compliance audit |
| `/powerup` | All agents | PhoennixAI workflow learning system |
| `/insight` | SAGE, PA | Last 30-day usage analysis |
| `/frontend-design` | PICASSO, ARIA | Production-grade UI components |
| `/mcp-builder` | SIGNAL, NEXUS | Build MCP server in FastMCP or TypeScript |
| `/phoennixai-master-registry` | All agents | Activate full tool registry |

---

## MARKETPLACE SKILLS (PRIORITY INSTALLS)

These should be installed via `npx @anthropic-ai/claude-code plugins install <name>`:

### Official Anthropic
`docx` · `pptx` · `xlsx` · `pdf` · `frontend-design` · `mcp-builder` · `webapp-testing` · `theme-factory` · `skill-creator`

### Vercel (25 skills)
`react-best-practices` · `nextjs` · `next-cache-components` · `ai-sdk` · `vercel-cli` · `deployments-cicd` · `shadcn` · `auth` · `vercel-functions` · `vercel-sandbox` · `vercel-storage` · `routing-middleware` · `turbopack` · `ai-gateway` · `workflow` · `bootstrap` · `verification` · `env-vars` · `knowledge-update` · `chat-sdk` · `next-forge` · `next-upgrade` · `vercel-agent` · `react-native-skills` · `web-design-guidelines`

### Security — Trail of Bits (21 skills)
`audit-context-building` · `semgrep-rule-creator` · `static-analysis` · `constant-time-analysis` · `building-secure-contracts` · `differential-review` · `entry-point-analyzer` · `property-based-testing`

### Marketing — Corey Haines (32 skills)
`copywriting` · `email-sequence` · `cold-email` · `launch-strategy` · `content-strategy` · `seo-audit` · `paid-ads` · `pricing-strategy`

### Platform Integrations
`supabase` · `stripe` (×2) · `cloudflare` (×8) · `netlify` (×12) · `sentry` (×31) · `expo` (×11) · `terraform` (×11) · `hugging-face` (×13) · `figma` (×7) · `google-workspace` (×17) · `openai` (×41) · `composio` · `fal-ai` (×15)

### Microsoft Azure (133 skills)
.NET · Java · Python · TypeScript · Rust — available via the azure skills bundle.

---

## DEVELOPER CONSOLE

To be built as an admin-gated route inside PhoennixPro (`/dev-console`).
Access: `role IN ('admin', 'developer')` via Supabase RLS.

| Module | Purpose |
|---|---|
| API Key Manager | Create/revoke `phx_live_*` / `phx_test_*` keys (already in `src/ApiKeys.jsx`) |
| Model Router Config | Set which agent uses which model; saved to `phx_agent_config` |
| Skills Registry Viewer | List, enable/disable, and add skills per agent |
| Tool Dispatcher Logs | Live log of every `tool_use` call: input → output → duration |
| Webhook Manager | Register endpoints for agent callbacks |
| Usage & Billing Dashboard | Token spend per agent per day; cost projections |
| Prompt Template Editor | Edit each agent's system prompt inline; versioned |
| Environment Variables Panel | Set `AI_API_KEY`, `SUPABASE_URL` per environment |

---

## WORKFLOW GATE (MANDATORY)

No code, plan, or major decision proceeds without:
1. **Brainstorm** — properly scoped?
2. **Write-Plan** — approved plan with clear deliverables?
3. **TDD** — test cases defined before code is written?
4. **Review** — meets institutional quality standard?

---

## MEMORY RULES

- Brand: **PhoennixAI** — double-N, non-negotiable. Never PhoenixAI.
- 31 agents total
- Valerie Wilcox = Founder/CEO
- Mayah = C&C Director (age 15, Valerie's daughter)
- KAIROS = always-on daemon beneath all agents
- autoDream consolidates memory nightly at 02:00 UTC
- SCRIBE: duplicate check on every document, every session, no exceptions
- PROBE: no product ships without PROBE sign-off
- LEDGER: advisory only — never execution orders

---

## WHAT NOT TO DO

- Never produce rough drafts, vague projections, or unsupported claims
- Never write `PhoenixAI` (single N) — always `PhoennixAI` (double N)
- Never give estimates when precision is required (LEDGER especially)
- Never ship code without PROBE sign-off
- Never start a task without passing through the workflow gate
- Never make financial recommendations that could be mistaken for execution orders

---

## COMMUNICATING BETWEEN AI SYSTEMS

GitHub Copilot and Claude are independent systems — they cannot message each other directly.
**To brief Claude:** paste this entire file at the start of any new Claude or Claude Code session.
Claude Code loads this file automatically on `/init` — no paste needed in the terminal.

---

*Last updated: 2026-05-01 by GitHub Copilot agent*
