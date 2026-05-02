/**
 * PhoennixPro Skills Registry
 * ============================================================
 * Single source of truth for every tool/skill available to agents.
 *
 * HOW IT WORKS
 * ------------
 * api/ai.js fetches the calling agent's enabled skills from Supabase
 * (phx_agent_skills → phx_skills) and injects them as `tools[]` in the
 * model API call. When the model returns stop_reason === 'tool_use', the
 * dispatcher below executes the matching handler and sends a tool_result
 * back, completing the agentic loop.
 *
 * ADDING A SKILL
 * --------------
 * 1. Add an entry to SKILLS_REGISTRY below.
 * 2. Add the execution handler to TOOL_HANDLERS below.
 * 3. Insert a row in Supabase phx_skills and assign it to agents via phx_agent_skills.
 *
 * To install Claude Code marketplace skills:
 *   npx @anthropic-ai/claude-code plugins install <skill-name>
 */

// ─────────────────────────────────────────────────────────────
// AGENT → DEFAULT MODEL ROUTING
// Override per-agent via Supabase phx_agent_config table.
// ─────────────────────────────────────────────────────────────
export const AGENT_MODEL_ROUTING = {
  // Ultra-fast / Companion
  SNOWY:    'grok-3-mini',
  RELAY:    'grok-3-mini',
  PULSE:    'grok-3-mini',
  ECHO:     'grok-3-mini',
  // Planning / Strategy
  ARIA:     'grok-3',
  GRID:     'grok-3',
  CLAUDE:   'grok-3',
  SCRIBE:   'grok-3',
  PA:       'grok-3',
  // Deep Research / Analysis
  HERMES:   'claude-opus-4-20250514',
  PROBE:    'claude-opus-4-20250514',
  LEDGER:   'claude-opus-4-20250514',
  SAGE:     'claude-opus-4-20250514',
  // Vision / Design
  PICASSO:  'claude-sonnet-4-20250514',
  PIXEL:    'claude-sonnet-4-20250514',
  ANIME:    'claude-sonnet-4-20250514',
  // Code / Engineering
  FORGE:    'grok-3',
  NEXUS:    'grok-3',
  CODEREV:  'grok-3',
  WSHOBSON: 'grok-3',
  // Security
  SECURITY: 'claude-opus-4-20250514',
  // Orchestration
  COMPOSIO: 'grok-3-mini',
  SIGNAL:   'grok-3-mini',
  GOOSE:    'grok-3-mini',
  RUFLO:    'grok-3-mini',
  // Marketing
  MARKETER: 'grok-3',
  // Graph / Mapping
  GRAPHIFY: 'grok-3',
  CLAW:     'grok-3',
  // Research
  SCOUT:    'grok-3',
  // Companions
  MAYAH:    'claude-haiku-4-5-20251001',
  JAYDEN:   'claude-haiku-4-5-20251001',
};

// ─────────────────────────────────────────────────────────────
// CORE SKILLS REGISTRY
// Each entry maps directly to an Anthropic-style tool definition.
// ─────────────────────────────────────────────────────────────
export const SKILLS_REGISTRY = [

  // ── AGENT TOOLS ──────────────────────────────────────────

  {
    name: 'SendMessage',
    category: 'agent',
    description: 'Send a message to a named sub-agent and receive its response.',
    tags: ['agent', 'orchestration'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        agent:   { type: 'string', description: 'Target agent name, e.g. HERMES' },
        message: { type: 'string', description: 'Message content to send' },
      },
      required: ['agent', 'message'],
    },
  },
  {
    name: 'TaskCreate',
    category: 'agent',
    description: 'Spawn a new parallel task and return its task_id.',
    tags: ['agent', 'parallel', 'orchestration'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        name:        { type: 'string',  description: 'Human-readable task label' },
        instruction: { type: 'string',  description: 'Full task instruction for the sub-agent' },
        agent:       { type: 'string',  description: 'Agent to assign this task to' },
        priority:    { type: 'integer', description: 'Priority 1 (highest) to 5 (lowest)', default: 3 },
      },
      required: ['name', 'instruction'],
    },
  },
  {
    name: 'TaskGet',
    category: 'agent',
    description: 'Retrieve the current status and output of a running task.',
    tags: ['agent', 'orchestration'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        task_id: { type: 'string', description: 'Task ID returned by TaskCreate' },
      },
      required: ['task_id'],
    },
  },
  {
    name: 'TaskList',
    category: 'agent',
    description: 'List all running or recently completed tasks.',
    tags: ['agent', 'orchestration'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['running', 'completed', 'failed', 'all'],
          description: 'Filter by status',
          default: 'all',
        },
      },
    },
  },
  {
    name: 'TaskUpdate',
    category: 'agent',
    description: 'Modify a running task — update its instruction or priority.',
    tags: ['agent', 'orchestration'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        task_id:     { type: 'string',  description: 'Task ID to update' },
        instruction: { type: 'string',  description: 'Updated instruction (optional)' },
        priority:    { type: 'integer', description: 'New priority 1–5 (optional)' },
      },
      required: ['task_id'],
    },
  },
  {
    name: 'TaskStop',
    category: 'agent',
    description: 'Kill a running task by its task_id.',
    tags: ['agent', 'orchestration'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        task_id: { type: 'string', description: 'Task ID to stop' },
        reason:  { type: 'string', description: 'Reason for stopping (logged to audit trail)' },
      },
      required: ['task_id'],
    },
  },
  {
    name: 'TaskOutput',
    category: 'agent',
    description: 'Read the full output of a completed or running task.',
    tags: ['agent', 'orchestration'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        task_id: { type: 'string', description: 'Task ID' },
        format:  { type: 'string', enum: ['text', 'json', 'markdown'], default: 'text' },
      },
      required: ['task_id'],
    },
  },
  {
    name: 'TeamCreate',
    category: 'agent',
    description: 'Create a named team of agents that share a task context.',
    tags: ['agent', 'orchestration'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        name:    { type: 'string',       description: 'Team name' },
        agents:  { type: 'array', items: { type: 'string' }, description: 'List of agent names' },
        purpose: { type: 'string',       description: 'What this team is assembled to accomplish' },
      },
      required: ['name', 'agents'],
    },
  },
  {
    name: 'TeamDelete',
    category: 'agent',
    description: 'Dissolve a named agent team.',
    tags: ['agent', 'orchestration'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Team name to dissolve' },
      },
      required: ['name'],
    },
  },
  {
    name: 'ListPeers',
    category: 'agent',
    description: 'List all currently active peer agents and their status.',
    tags: ['agent', 'orchestration'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        tier: { type: 'string', description: 'Filter by tier: CORE|INTELLIGENCE|BUILD|ORCHESTRATION|SPECIALIST|COMPANION' },
      },
    },
  },

  // ── USER / CONFIG TOOLS ───────────────────────────────────

  {
    name: 'AskUserQuestion',
    category: 'user',
    description: 'Prompt the user for input mid-task and wait for their response before continuing.',
    tags: ['user', 'interactive'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        question: { type: 'string', description: 'The question to present to the user' },
        options:  { type: 'array', items: { type: 'string' }, description: 'Optional list of choices' },
        default:  { type: 'string', description: 'Default answer if user does not respond' },
      },
      required: ['question'],
    },
  },
  {
    name: 'Todo',
    category: 'user',
    description: 'Write, read, or update the task to-do list for the current session.',
    tags: ['user', 'productivity'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        action: { type: 'string', enum: ['read', 'add', 'complete', 'clear'], description: 'Action to perform' },
        item:   { type: 'string', description: 'Item text (required for add/complete)' },
      },
      required: ['action'],
    },
  },
  {
    name: 'WriteSkill',
    category: 'user',
    description: 'Create or edit a SKILL.md file — a persistent instruction set for a specific capability.',
    tags: ['user', 'skills', 'memory'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        skill_name: { type: 'string', description: 'Name of the skill (also used as filename)' },
        content:    { type: 'string', description: 'Full markdown content of the SKILL.md' },
        overwrite:  { type: 'boolean', description: 'Overwrite if exists', default: false },
      },
      required: ['skill_name', 'content'],
    },
  },
  {
    name: 'Config',
    category: 'user',
    description: 'Read or write PhoennixPro configuration values (stored in Supabase phx_agent_config).',
    tags: ['user', 'config'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        action: { type: 'string', enum: ['read', 'write'], description: 'Read or write config' },
        key:    { type: 'string', description: 'Config key' },
        value:  { type: 'string', description: 'Config value (required for write)' },
        scope:  { type: 'string', enum: ['agent', 'global'], description: 'Scope of the config', default: 'agent' },
      },
      required: ['action', 'key'],
    },
  },
  {
    name: 'RemoteTrigger',
    category: 'user',
    description: 'Fire a remote webhook or HTTP endpoint.',
    tags: ['user', 'integration', 'webhook'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        url:     { type: 'string',  description: 'Target URL' },
        method:  { type: 'string',  enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], default: 'POST' },
        payload: { type: 'object',  description: 'JSON payload for POST/PUT/PATCH' },
        headers: { type: 'object',  description: 'Custom request headers' },
      },
      required: ['url'],
    },
  },
  {
    name: 'CronCreate',
    category: 'user',
    description: 'Schedule a recurring job via Vercel Cron or Upstash QStash.',
    tags: ['user', 'cron', 'scheduling'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        name:       { type: 'string', description: 'Human-readable cron job name' },
        schedule:   { type: 'string', description: 'Cron expression, e.g. "0 7 * * *"' },
        agent:      { type: 'string', description: 'Agent to run at this schedule' },
        instruction:{ type: 'string', description: 'Instruction for the agent to execute' },
        enabled:    { type: 'boolean', default: true },
      },
      required: ['name', 'schedule', 'agent', 'instruction'],
    },
  },
  {
    name: 'CronDelete',
    category: 'user',
    description: 'Remove a scheduled cron job.',
    tags: ['user', 'cron'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Cron job name to delete' },
      },
      required: ['name'],
    },
  },
  {
    name: 'CronList',
    category: 'user',
    description: 'List all scheduled cron jobs and their next run times.',
    tags: ['user', 'cron'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        enabled_only: { type: 'boolean', description: 'Only show enabled jobs', default: false },
      },
    },
  },
  {
    name: 'Snip',
    category: 'user',
    description: 'Save a reusable code snippet to the PhoennixPro snippet library.',
    tags: ['user', 'code', 'productivity'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        name:        { type: 'string', description: 'Snippet name/key' },
        language:    { type: 'string', description: 'Programming language, e.g. javascript' },
        code:        { type: 'string', description: 'The code snippet content' },
        description: { type: 'string', description: 'What this snippet does' },
        tags:        { type: 'array', items: { type: 'string' }, description: 'Searchable tags' },
      },
      required: ['name', 'code'],
    },
  },
  {
    name: 'Workflow',
    category: 'user',
    description: 'Define or execute a multi-step workflow — a named sequence of agent tasks.',
    tags: ['user', 'workflow', 'orchestration'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        action: { type: 'string', enum: ['define', 'run', 'list'], description: 'Action to perform' },
        name:   { type: 'string', description: 'Workflow name' },
        steps:  {
          type: 'array',
          description: 'Ordered list of steps (required for define)',
          items: {
            type: 'object',
            properties: {
              agent:       { type: 'string' },
              instruction: { type: 'string' },
              depends_on:  { type: 'array', items: { type: 'integer' }, description: 'Indices of steps this depends on' },
            },
          },
        },
      },
      required: ['action', 'name'],
    },
  },
  {
    name: 'TerminalCapture',
    category: 'user',
    description: 'Capture a screenshot of the current terminal state and return it as base64 PNG.',
    tags: ['user', 'debug', 'vision'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        lines: { type: 'integer', description: 'Number of lines from bottom to capture', default: 50 },
      },
    },
  },

  // ── SYSTEM / OUTPUT TOOLS ─────────────────────────────────

  {
    name: 'Sleep',
    category: 'system',
    description: 'Pause execution for a specified number of milliseconds.',
    tags: ['system', 'timing'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        ms: { type: 'integer', description: 'Milliseconds to sleep', minimum: 0, maximum: 30000 },
      },
      required: ['ms'],
    },
  },
  {
    name: 'SendUserMessage',
    category: 'system',
    description: 'Push a real-time notification message to the user in the PhoennixPro UI.',
    tags: ['system', 'notification', 'user'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        message: { type: 'string', description: 'Message to display to the user' },
        level:   { type: 'string', enum: ['info', 'success', 'warning', 'error'], default: 'info' },
      },
      required: ['message'],
    },
  },
  {
    name: 'StructuredOutput',
    category: 'system',
    description: 'Return a typed, schema-validated JSON output — use for any output that downstream code will parse.',
    tags: ['system', 'output', 'schema'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        schema: { type: 'object', description: 'JSON Schema the output must conform to' },
        data:   { type: 'object', description: 'The structured data to return' },
      },
      required: ['data'],
    },
  },
  {
    name: 'LSP',
    category: 'system',
    description: 'Make Language Server Protocol calls — hover, go-to-definition, find-references, diagnostics.',
    tags: ['system', 'code', 'lsp'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        method: { type: 'string', description: 'LSP method, e.g. textDocument/hover' },
        params: { type: 'object', description: 'LSP method parameters' },
      },
      required: ['method', 'params'],
    },
  },
  {
    name: 'SendUserFile',
    category: 'system',
    description: 'Send a generated file to the user as a downloadable attachment.',
    tags: ['system', 'file', 'output'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        filename: { type: 'string', description: 'Name of the file with extension' },
        content:  { type: 'string', description: 'File content (text, base64, or URL)' },
        encoding: { type: 'string', enum: ['utf8', 'base64', 'url'], default: 'utf8' },
        mime:     { type: 'string', description: 'MIME type, e.g. text/csv' },
      },
      required: ['filename', 'content'],
    },
  },
  {
    name: 'PushNotification',
    category: 'system',
    description: 'Send an OS-level push notification to the user\'s device via the PhoennixPro PWA.',
    tags: ['system', 'notification'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        title:   { type: 'string', description: 'Notification title' },
        body:    { type: 'string', description: 'Notification body text' },
        icon:    { type: 'string', description: 'Icon URL (optional)' },
        url:     { type: 'string', description: 'URL to open on click (optional)' },
      },
      required: ['title', 'body'],
    },
  },
  {
    name: 'Monitor',
    category: 'system',
    description: 'Watch a process or data stream and emit updates at a given interval.',
    tags: ['system', 'monitoring'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        target:   { type: 'string', description: 'What to monitor: process name, URL, or Supabase table' },
        interval: { type: 'integer', description: 'Polling interval in seconds', default: 60 },
        duration: { type: 'integer', description: 'Total monitoring duration in seconds', default: 300 },
        alert_on: { type: 'string', description: 'Condition that triggers an alert' },
      },
      required: ['target'],
    },
  },
  {
    name: 'SubscribePR',
    category: 'system',
    description: 'Listen for GitHub Pull Request events on the PhoennixAI platform repo.',
    tags: ['system', 'github', 'pr'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        repo:   { type: 'string', description: 'Repository in owner/name format', default: 'valerie-github1/phoennixai-platform' },
        events: { type: 'array', items: { type: 'string' }, description: 'Events to subscribe to', default: ['opened', 'merged', 'closed'] },
        agent:  { type: 'string', description: 'Agent to notify on event', default: 'PROBE' },
      },
    },
  },
  {
    name: 'bash',
    category: 'system',
    description: 'Execute a shell command in a sandboxed environment. Use for file operations, git, tests, builds.',
    tags: ['system', 'code', 'execution'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        command: { type: 'string', description: 'Shell command to execute' },
        cwd:     { type: 'string', description: 'Working directory (optional)' },
        timeout: { type: 'integer', description: 'Timeout in seconds', default: 30 },
      },
      required: ['command'],
    },
  },

  // ── SLASH COMMAND SKILLS ──────────────────────────────────

  {
    name: 'ultraplan',
    category: 'slash',
    description: 'Cloud Container Runtime 30-minute Opus planning session with 3 parallel explorer agents + critic synthesis.',
    tags: ['planning', 'strategy'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        goal:    { type: 'string', description: 'The strategic goal to plan for' },
        context: { type: 'string', description: 'Additional context or constraints' },
      },
      required: ['goal'],
    },
  },
  {
    name: 'think',
    category: 'slash',
    description: 'Enable extended chain-of-thought reasoning. Forces the model to reason step-by-step before answering.',
    tags: ['reasoning', 'analysis'],
    is_global: true,
    input_schema: {
      type: 'object',
      properties: {
        prompt: { type: 'string', description: 'The question or problem to reason about' },
        depth:  { type: 'string', enum: ['standard', 'deep', 'ultra'], default: 'deep', description: 'Depth of reasoning' },
      },
      required: ['prompt'],
    },
  },
  {
    name: 'review',
    category: 'slash',
    description: 'Full code review against PhoennixPro best practices — security, performance, correctness, style.',
    tags: ['code', 'quality'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        code:     { type: 'string',  description: 'Code to review (or file path)' },
        language: { type: 'string',  description: 'Programming language' },
        focus:    { type: 'array', items: { type: 'string' }, description: 'Areas to focus on: security|performance|correctness|style' },
      },
      required: ['code'],
    },
  },
  {
    name: 'sast',
    category: 'slash',
    description: 'Static Application Security Testing — scans for vulnerabilities, secrets, OWASP issues.',
    tags: ['security', 'code'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        path:      { type: 'string', description: 'File or directory path to scan' },
        standards: { type: 'array', items: { type: 'string' }, description: 'Standards to check: OWASP|GDPR|SOC2|ISO27001' },
      },
      required: ['path'],
    },
  },
  {
    name: 'diagram',
    category: 'slash',
    description: 'Auto-generate Mermaid architecture, flow, or sequence diagrams from code or description.',
    tags: ['code', 'documentation', 'design'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        type:        { type: 'string', enum: ['flowchart', 'sequence', 'classDiagram', 'erDiagram', 'architecture'], default: 'flowchart' },
        description: { type: 'string', description: 'What to diagram' },
      },
      required: ['description'],
    },
  },
  {
    name: 'deploy',
    category: 'slash',
    description: 'Trigger a CI/CD pipeline and deploy to Vercel (preview or production).',
    tags: ['deployment', 'devops'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        environment: { type: 'string', enum: ['preview', 'production'], default: 'preview' },
        branch:      { type: 'string', description: 'Git branch to deploy', default: 'main' },
        message:     { type: 'string', description: 'Deployment message / release notes' },
      },
    },
  },
  {
    name: 'research',
    category: 'slash',
    description: 'Multi-step web research with source citation and synthesis. Uses Perplexity/Exa under the hood.',
    tags: ['research', 'web'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        query:  { type: 'string',  description: 'Research question or topic' },
        depth:  { type: 'string',  enum: ['quick', 'standard', 'deep'], default: 'standard' },
        format: { type: 'string',  enum: ['summary', 'report', 'citations'], default: 'report' },
      },
      required: ['query'],
    },
  },
  {
    name: 'vision',
    category: 'slash',
    description: 'Analyse images or screenshots inline. Describe, extract text, compare, or generate code from visuals.',
    tags: ['vision', 'image'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        image_url: { type: 'string', description: 'URL or base64 data URI of the image' },
        task:      { type: 'string', enum: ['describe', 'extract_text', 'compare', 'code_from_design', 'audit_ui'], default: 'describe' },
        context:   { type: 'string', description: 'Additional context for the analysis' },
      },
      required: ['image_url'],
    },
  },
  {
    name: 'financial',
    category: 'slash',
    description: 'Financial modelling: cash flow projections, ratio analysis, valuation, scenario modelling (LEDGER only).',
    tags: ['finance', 'analysis'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        model_type: { type: 'string', enum: ['cashflow', 'valuation', 'ratios', 'scenario', 'budget'], description: 'Type of financial model' },
        data:       { type: 'object', description: 'Input financial data (revenue, costs, etc.)' },
        period:     { type: 'string', description: 'Time period, e.g. "12 months" or "FY2026"' },
      },
      required: ['model_type'],
    },
  },
  {
    name: 'audit',
    category: 'slash',
    description: 'Compliance audit: GDPR, SOC2, ISO27001 gap analysis against current codebase or policy docs.',
    tags: ['security', 'compliance'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        standard: { type: 'string', enum: ['GDPR', 'SOC2', 'ISO27001', 'OWASP', 'all'], default: 'all' },
        scope:    { type: 'string', description: 'What to audit: codebase, policies, infrastructure' },
      },
      required: ['scope'],
    },
  },
  {
    name: 'mcp_connect',
    category: 'slash',
    description: 'Connect to any MCP (Model Context Protocol) server and register its tools into the agent session.',
    tags: ['mcp', 'integration'],
    is_global: false,
    input_schema: {
      type: 'object',
      properties: {
        server_url:  { type: 'string', description: 'MCP server URL or name from registry' },
        server_name: { type: 'string', description: 'Human-readable name for this MCP connection' },
        auth:        { type: 'object', description: 'Authentication credentials if required' },
      },
      required: ['server_url'],
    },
  },
];

// ─────────────────────────────────────────────────────────────
// AGENT SKILL ASSIGNMENTS
// Which skills each agent gets by default.
// Override per-agent in Supabase phx_agent_skills.
// ─────────────────────────────────────────────────────────────

/** Skills every agent gets regardless of tier */
const GLOBAL_SKILLS = SKILLS_REGISTRY
  .filter(s => s.is_global)
  .map(s => s.name);

/** Skills assigned by default per agent tier */
export const AGENT_DEFAULT_SKILLS = {
  // CORE
  CLAUDE:   [...GLOBAL_SKILLS, 'ultraplan', 'think', 'compose', 'mcp_connect'],
  ARIA:     [...GLOBAL_SKILLS, 'think', 'diagram', 'frontend-design'],
  GRID:     [...GLOBAL_SKILLS, 'think', 'diagram', 'deploy'],
  SCRIBE:   [...GLOBAL_SKILLS, 'think', 'SendUserFile'],
  PA:       [...GLOBAL_SKILLS, 'CronCreate', 'CronList', 'CronDelete'],
  // INTELLIGENCE
  LEDGER:   [...GLOBAL_SKILLS, 'financial', 'think', 'StructuredOutput'],
  RELAY:    [...GLOBAL_SKILLS],
  SAGE:     [...GLOBAL_SKILLS, 'research', 'think'],
  SCOUT:    [...GLOBAL_SKILLS, 'research'],
  PULSE:    [...GLOBAL_SKILLS],
  // BUILD
  NEXUS:    [...GLOBAL_SKILLS, 'bash', 'LSP', 'review', 'deploy', 'SubscribePR'],
  PROBE:    [...GLOBAL_SKILLS, 'bash', 'sast', 'review', 'SubscribePR'],
  FORGE:    [...GLOBAL_SKILLS, 'bash', 'deploy', 'diagram'],
  SIGNAL:   [...GLOBAL_SKILLS, 'RemoteTrigger', 'mcp_connect'],
  ECHO:     [...GLOBAL_SKILLS],
  // ORCHESTRATION
  RUFLO:    [...GLOBAL_SKILLS, 'TaskCreate', 'TaskUpdate', 'TaskStop', 'TeamCreate', 'TeamDelete', 'Workflow'],
  HERMES:   [...GLOBAL_SKILLS, 'research', 'think', 'SubscribePR'],
  GOOSE:    [...GLOBAL_SKILLS, 'bash', 'TaskCreate', 'TaskStop', 'Workflow'],
  COMPOSIO: [...GLOBAL_SKILLS, 'RemoteTrigger', 'mcp_connect', 'Workflow'],
  GRAPHIFY: [...GLOBAL_SKILLS, 'LSP', 'diagram'],
  CLAW:     [...GLOBAL_SKILLS, 'LSP', 'bash'],
  // SPECIALIST
  CODEREV:  [...GLOBAL_SKILLS, 'review', 'sast', 'LSP', 'diagram'],
  MARKETER: [...GLOBAL_SKILLS, 'research'],
  ANIME:    [...GLOBAL_SKILLS, 'vision', 'bash'],
  SECURITY: [...GLOBAL_SKILLS, 'sast', 'audit', 'review', 'bash'],
  WSHOBSON: [...GLOBAL_SKILLS, 'sast', 'audit', 'TaskCreate', 'Workflow'],
  PICASSO:  [...GLOBAL_SKILLS, 'vision', 'frontend-design', 'diagram'],
  PIXEL:    [...GLOBAL_SKILLS, 'vision'],
  // COMPANIONS
  SNOWY:    [...GLOBAL_SKILLS],
  JAYDEN:   [...GLOBAL_SKILLS],
  MAYAH:    [...GLOBAL_SKILLS],
};

// ─────────────────────────────────────────────────────────────
// TOOL DISPATCHER
// Called by api/ai.js when the model returns stop_reason === 'tool_use'.
// Add a handler for every tool above.
// ─────────────────────────────────────────────────────────────

/**
 * Dispatch a tool_use call and return its result.
 * @param {string} toolName - The tool name from the model's tool_use block
 * @param {object} input    - The tool input from the model
 * @param {object} ctx      - Request context: { agentId, supabase, env }
 * @returns {Promise<string|object>} - Tool result (string or JSON-serialisable object)
 */
export async function dispatch(toolName, input, ctx = {}) {
  const handler = TOOL_HANDLERS[toolName];
  if (!handler) {
    return { error: `Unknown tool: ${toolName}` };
  }
  try {
    return await handler(input, ctx);
  } catch (err) {
    return { error: err.message || String(err) };
  }
}

/**
 * Tool handlers — server-side implementations.
 * These run inside api/ai.js (Vercel Edge Function).
 * Handlers that need Supabase receive it via ctx.supabase.
 */
const TOOL_HANDLERS = {

  // ── AGENT TOOLS ──
  async SendMessage({ agent, message }, ctx) {
    // In production: call the target agent's API endpoint
    return { sent: true, agent, message, note: 'Route to agent endpoint in production' };
  },
  async TaskCreate({ name, instruction, agent, priority = 3 }, { supabase }) {
    if (supabase) {
      const { data, error } = await supabase.from('phx_tasks').insert({
        name, instruction, agent, priority, status: 'running', created_at: new Date().toISOString(),
      }).select('id').single();
      if (error) return { error: error.message };
      return { task_id: data.id, status: 'running' };
    }
    return { task_id: `task_${Date.now()}`, status: 'running', note: 'Supabase not configured' };
  },
  async TaskGet({ task_id }, { supabase }) {
    if (supabase) {
      const { data, error } = await supabase.from('phx_tasks').select('*').eq('id', task_id).single();
      if (error) return { error: error.message };
      return data;
    }
    return { error: 'Supabase not configured' };
  },
  async TaskList({ status = 'all' }, { supabase }) {
    if (supabase) {
      let q = supabase.from('phx_tasks').select('id, name, agent, status, created_at');
      if (status !== 'all') q = q.eq('status', status);
      const { data, error } = await q;
      if (error) return { error: error.message };
      return { tasks: data };
    }
    return { tasks: [], note: 'Supabase not configured' };
  },
  async TaskUpdate({ task_id, instruction, priority }, { supabase }) {
    if (supabase) {
      const updates = {};
      if (instruction) updates.instruction = instruction;
      if (priority)    updates.priority    = priority;
      const { error } = await supabase.from('phx_tasks').update(updates).eq('id', task_id);
      if (error) return { error: error.message };
      return { updated: true, task_id };
    }
    return { error: 'Supabase not configured' };
  },
  async TaskStop({ task_id, reason }, { supabase }) {
    if (supabase) {
      const { error } = await supabase.from('phx_tasks').update({ status: 'stopped', stopped_reason: reason }).eq('id', task_id);
      if (error) return { error: error.message };
      return { stopped: true, task_id };
    }
    return { error: 'Supabase not configured' };
  },
  async TaskOutput({ task_id, format = 'text' }, { supabase }) {
    if (supabase) {
      const { data, error } = await supabase.from('phx_task_outputs').select('output').eq('task_id', task_id).order('created_at', { ascending: false }).limit(1).single();
      if (error) return { error: error.message };
      return { output: data?.output };
    }
    return { error: 'Supabase not configured' };
  },
  async TeamCreate({ name, agents, purpose }, { supabase }) {
    if (supabase) {
      const { error } = await supabase.from('phx_teams').insert({ name, agents, purpose });
      if (error) return { error: error.message };
      return { created: true, name };
    }
    return { created: true, name, note: 'Persisted in session only' };
  },
  async TeamDelete({ name }, { supabase }) {
    if (supabase) {
      const { error } = await supabase.from('phx_teams').delete().eq('name', name);
      if (error) return { error: error.message };
    }
    return { deleted: true, name };
  },
  async ListPeers({ tier } = {}, ctx) {
    const agents = Object.keys(AGENT_MODEL_ROUTING);
    return { peers: agents, count: agents.length };
  },

  // ── USER / CONFIG TOOLS ──
  async AskUserQuestion({ question, options, default: def }) {
    // In production: send to client via SSE/websocket and await response
    return { question, options, default: def, note: 'Awaiting user input (implement via SSE in production)' };
  },
  async Todo({ action, item }, { supabase }) {
    if (!supabase) return { note: 'Supabase not configured — todos are session-only' };
    if (action === 'read') {
      const { data } = await supabase.from('phx_todos').select('*').eq('done', false);
      return { todos: data || [] };
    }
    if (action === 'add') {
      await supabase.from('phx_todos').insert({ item, done: false });
      return { added: true, item };
    }
    if (action === 'complete') {
      await supabase.from('phx_todos').update({ done: true }).eq('item', item);
      return { completed: true, item };
    }
    if (action === 'clear') {
      await supabase.from('phx_todos').delete().eq('done', true);
      return { cleared: true };
    }
    return { error: 'Unknown action' };
  },
  async WriteSkill({ skill_name, content, overwrite = false }) {
    // In Claude Code: write to ~/.claude/skills/<skill_name>.md
    return { written: true, skill_name, path: `~/.claude/skills/${skill_name}.md`, note: 'Implement file write in production' };
  },
  async Config({ action, key, value, scope = 'agent' }, { supabase, agentId }) {
    if (!supabase) return { note: 'Supabase not configured' };
    const table = 'phx_agent_config';
    if (action === 'read') {
      const { data } = await supabase.from(table).select(key).eq('agent_id', agentId).single();
      return { value: data?.[key] };
    }
    if (action === 'write') {
      await supabase.from(table).upsert({ agent_id: agentId, [key]: value });
      return { written: true, key, value };
    }
    return { error: 'Unknown action' };
  },
  async RemoteTrigger({ url, method = 'POST', payload, headers = {} }) {
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: payload ? JSON.stringify(payload) : undefined,
    });
    const text = await res.text();
    return { status: res.status, body: text };
  },
  async CronCreate({ name, schedule, agent, instruction, enabled = true }, { supabase }) {
    if (supabase) {
      const { error } = await supabase.from('phx_crons').insert({ name, schedule, agent, instruction, enabled });
      if (error) return { error: error.message };
    }
    return { created: true, name, schedule };
  },
  async CronDelete({ name }, { supabase }) {
    if (supabase) await supabase.from('phx_crons').delete().eq('name', name);
    return { deleted: true, name };
  },
  async CronList({ enabled_only = false }, { supabase }) {
    if (supabase) {
      let q = supabase.from('phx_crons').select('*');
      if (enabled_only) q = q.eq('enabled', true);
      const { data } = await q;
      return { crons: data || [] };
    }
    return { crons: [], note: 'Supabase not configured' };
  },
  async Snip({ name, language, code, description, tags = [] }, { supabase }) {
    if (supabase) await supabase.from('phx_snippets').upsert({ name, language, code, description, tags });
    return { saved: true, name };
  },
  async Workflow({ action, name, steps }, { supabase }) {
    if (action === 'define' && supabase) {
      await supabase.from('phx_workflows').upsert({ name, steps });
      return { defined: true, name };
    }
    if (action === 'list' && supabase) {
      const { data } = await supabase.from('phx_workflows').select('name, created_at');
      return { workflows: data || [] };
    }
    return { note: `Workflow action '${action}' — implement in production` };
  },
  async TerminalCapture({ lines = 50 }) {
    return { note: 'TerminalCapture requires a desktop agent. Not available in Edge Function context.' };
  },

  // ── SYSTEM / OUTPUT TOOLS ──
  async Sleep({ ms }) {
    await new Promise(r => setTimeout(r, Math.min(ms, 30000)));
    return { slept_ms: ms };
  },
  async SendUserMessage({ message, level = 'info' }) {
    return { sent: true, message, level, note: 'Deliver via SSE stream in production' };
  },
  async StructuredOutput({ schema, data }) {
    return data;
  },
  async LSP({ method, params }) {
    return { note: `LSP call ${method} — requires running language server in production` };
  },
  async SendUserFile({ filename, content, encoding = 'utf8', mime }) {
    return { filename, mime, note: 'File delivery via presigned URL in production' };
  },
  async PushNotification({ title, body, icon, url }) {
    return { sent: true, title, body, note: 'Deliver via Web Push API in production' };
  },
  async Monitor({ target, interval = 60, duration = 300, alert_on }) {
    return { monitoring: target, interval, duration, note: 'Implement as background job in production' };
  },
  async SubscribePR({ repo, events, agent }) {
    return { subscribed: true, repo, events, agent, note: 'Implement via GitHub webhook in production' };
  },
  async bash({ command, cwd, timeout = 30 }) {
    // Only available in server environments with appropriate sandboxing
    return { note: `bash execution: '${command}' — requires sandboxed server environment` };
  },

  // ── SLASH COMMAND STUBS ──
  async ultraplan({ goal, context }) { return { note: `Ultraplan for: ${goal}` }; },
  async think({ prompt, depth }) { return { note: `Extended reasoning (${depth}) for: ${prompt}` }; },
  async review({ code, language, focus }) { return { note: `Code review (${language}) focusing on: ${(focus || []).join(', ')}` }; },
  async sast({ path, standards }) { return { note: `SAST scan of ${path} against: ${(standards || ['all']).join(', ')}` }; },
  async diagram({ type, description }) { return { note: `Generate ${type} diagram for: ${description}` }; },
  async deploy({ environment, branch, message }) { return { note: `Deploy ${branch} to ${environment}: ${message}` }; },
  async research({ query, depth, format }) { return { note: `Research (${depth}): ${query}` }; },
  async vision({ image_url, task, context }) { return { note: `Vision task '${task}' on image` }; },
  async financial({ model_type, data, period }) { return { note: `Financial model: ${model_type} for ${period}` }; },
  async audit({ standard, scope }) { return { note: `Compliance audit (${standard}) on ${scope}` }; },
  async mcp_connect({ server_url, server_name }) { return { note: `Connect to MCP server: ${server_name || server_url}` }; },
};

// ─────────────────────────────────────────────────────────────
// HELPER: get tool definitions for injection into API calls
// ─────────────────────────────────────────────────────────────

/**
 * Returns the `tools[]` array to inject into an Anthropic/xAI API call
 * for a given agent, filtered to only its enabled skills.
 *
 * @param {string}   agentId        - Agent identifier, e.g. 'HERMES'
 * @param {string[]} [enabledSkills] - Override list (from Supabase phx_agent_skills).
 *                                     Defaults to AGENT_DEFAULT_SKILLS[agentId].
 * @returns {{ name: string, description: string, input_schema: object }[]}
 */
export function getToolsForAgent(agentId, enabledSkills) {
  const skills = enabledSkills || AGENT_DEFAULT_SKILLS[agentId] || GLOBAL_SKILLS;
  const skillSet = new Set(skills);
  return SKILLS_REGISTRY
    .filter(s => skillSet.has(s.name))
    .map(({ name, description, input_schema }) => ({ name, description, input_schema }));
}
