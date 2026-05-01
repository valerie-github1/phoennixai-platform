/**
 * PhoennixAI — api/ai.js
 * Vercel Edge Function: multi-provider AI router
 *
 * Providers supported:
 *   xAI        → https://api.x.ai/v1                    (env: AI_API_KEY)
 *   NVIDIA NIM → https://integrate.api.nvidia.com/v1    (env: NVIDIA_API_KEY)
 *                OR any NIM-compatible endpoint          (env: NVIDIA_NIM_BASE_URL)
 *   Anthropic  → https://api.anthropic.com/v1/messages  (env: ANTHROPIC_API_KEY or AI_API_KEY)
 *
 * NIM endpoint options (set NVIDIA_NIM_BASE_URL to switch — no code change needed):
 *   NVIDIA hosted (default)  https://integrate.api.nvidia.com/v1     — free tier, rate-limited
 *   Deep Infra serverless    https://api.deepinfra.com/v1/openai      — $0.40/1M in, $1.60/1M out
 *   CoreWeave serverless     https://api.coreweave.com/v1             — $1.00/1M in, $1.50/1M out
 *   Deep Infra dedicated     https://api.deepinfra.com/v1/openai      — from $0.01/min GPU
 *
 * Model routing (automatic — no client-side changes needed):
 *   grok-*             → xAI
 *   claude-*           → Anthropic
 *   deepseek-*,
 *   glm-*, minimax-*,
 *   gemma-*, nemotron-*,
 *   qwen*, mistral-*,
 *   llama-*, devstral-* → NVIDIA NIM (or configured NIM-compatible endpoint)
 *
 * NIM free-endpoint models recommended for complex / agentic tasks:
 *   deepseek-ai/deepseek-v4-pro         — 1M context, MoE, best for complex code + reasoning
 *   zhipuai/glm-5.1                     — agentic workflows, long-horizon reasoning
 *   minimax/minimax-m2.7                — 230B, coding + office tasks
 *   google/gemma-4-31b-it               — frontier reasoning, agentic workflows
 *   qwen/qwen3-coder-480b-a35b-instruct — 480B MoE, 256k ctx, best agentic coding (free)
 */

export const config = { runtime: 'edge' };

// ---------------------------------------------------------------------------
// Provider detection
// ---------------------------------------------------------------------------
const NIM_MODEL_PREFIXES = [
  'deepseek',
  'glm-',
  'minimax',
  'gemma',
  'nemotron',
  'qwen',
  'mistral-',
  'llama-',
  'devstral-',
  'flux.',
  'nvidia/',
];

function detectProvider(model = '') {
  const m = model.toLowerCase();
  if (m.startsWith('claude-')) return 'anthropic';
  if (NIM_MODEL_PREFIXES.some((p) => m.startsWith(p))) return 'nim';
  return 'xai'; // default: grok-3, grok-3-mini, etc.
}

// ---------------------------------------------------------------------------
// Provider call implementations
// ---------------------------------------------------------------------------
async function callXAI(messages, model, apiKey, stream) {
  const res = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ model: model || 'grok-3', messages, stream: !!stream }),
  });
  return res;
}

async function callNIM(messages, model, apiKey, stream) {
  // NVIDIA_NIM_BASE_URL lets you point at any NIM-compatible endpoint without code changes:
  //   Deep Infra serverless → https://api.deepinfra.com/v1/openai
  //   CoreWeave serverless  → https://api.coreweave.com/v1
  //   NVIDIA hosted (default) → https://integrate.api.nvidia.com/v1
  const base = (process.env.NVIDIA_NIM_BASE_URL || 'https://integrate.api.nvidia.com/v1').replace(/\/$/, '');
  const res = await fetch(`${base}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      stream: !!stream,
      // NIM-specific: increase max_tokens for complex tasks
      max_tokens: 4096,
    }),
  });
  return res;
}

async function callAnthropic(messages, model, apiKey) {
  // Separate system message from user/assistant turns (Anthropic API format)
  const systemMsg = messages.find((m) => m.role === 'system');
  const turns = messages.filter((m) => m.role !== 'system');

  const body = {
    model: model || 'claude-sonnet-4-20250514',
    max_tokens: 4096,
    messages: turns,
  };
  if (systemMsg) body.system = systemMsg.content;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(body),
  });
  return res;
}

// ---------------------------------------------------------------------------
// Normalise Anthropic response → OpenAI-compatible shape
// ---------------------------------------------------------------------------
async function normaliseAnthropicResponse(res) {
  const data = await res.json();
  if (!res.ok) {
    return new Response(JSON.stringify({ error: data }), {
      status: res.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const content = data?.content?.[0]?.text ?? '';
  const normalised = {
    id: data.id,
    object: 'chat.completion',
    model: data.model,
    choices: [
      {
        index: 0,
        message: { role: 'assistant', content },
        finish_reason: data.stop_reason ?? 'stop',
      },
    ],
    usage: data.usage,
  };
  return new Response(JSON.stringify(normalised), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// ---------------------------------------------------------------------------
// CORS helper
// ---------------------------------------------------------------------------
function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Routine-Key',
  };
}

// ---------------------------------------------------------------------------
// Main handler
// ---------------------------------------------------------------------------
export default async function handler(req) {
  const origin = req.headers.get('origin');

  // Preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    });
  }

  const { messages = [], model, stream = false, agentId } = body;

  if (!messages.length) {
    return new Response(JSON.stringify({ error: 'messages array is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    });
  }

  const provider = detectProvider(model);

  // Log for KAIROS audit (non-blocking)
  console.log(JSON.stringify({ ts: Date.now(), agentId, model, provider }));

  try {
    let upstreamRes;

    if (provider === 'nim') {
      const nimKey = process.env.NVIDIA_API_KEY;
      if (!nimKey) {
        return new Response(
          JSON.stringify({ error: 'NVIDIA_API_KEY not configured in environment' }),
          { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) } }
        );
      }
      upstreamRes = await callNIM(messages, model, nimKey, stream);
    } else if (provider === 'anthropic') {
      const anthropicKey = process.env.ANTHROPIC_API_KEY || process.env.AI_API_KEY;
      if (!anthropicKey) {
        return new Response(
          JSON.stringify({ error: 'ANTHROPIC_API_KEY not configured in environment' }),
          { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) } }
        );
      }
      const normRes = await normaliseAnthropicResponse(
        await callAnthropic(messages, model, anthropicKey)
      );
      const data = await normRes.json();
      return new Response(JSON.stringify(data), {
        status: normRes.status,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    } else {
      // xAI / Grok (default)
      const xaiKey = process.env.AI_API_KEY;
      if (!xaiKey) {
        return new Response(
          JSON.stringify({ error: 'AI_API_KEY not configured in environment' }),
          { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) } }
        );
      }
      upstreamRes = await callXAI(messages, model, xaiKey, stream);
    }

    // Stream passthrough
    if (stream && upstreamRes.body) {
      return new Response(upstreamRes.body, {
        status: upstreamRes.status,
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          ...corsHeaders(origin),
        },
      });
    }

    // Non-stream: parse and re-emit with CORS headers
    const data = await upstreamRes.json();
    return new Response(JSON.stringify(data), {
      status: upstreamRes.status,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    });
  } catch (err) {
    console.error('api/ai.js error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    });
  }
}
