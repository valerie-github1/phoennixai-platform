// PhoennixAI Gateway — api/claude.js
// Vercel serverless function — proxies requests to Anthropic API
// Env vars required: ANTHROPIC_API_KEY, ROUTINE_SECRET (optional), PAI_ADMIN_SECRET (optional)

export default async function handler(req, res) {

  // ── CORS — must be first, before any other logic ──────────────────────────
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Routine-Key, Authorization, X-Api-Key');
  res.setHeader('Access-Control-Max-Age', '86400');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  // ──────────────────────────────────────────────────────────────────────────

  // Only accept POST from here
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // ── Auth — check Routine Key for cron/scheduled calls ─────────────────────
  const routineKey = req.headers['x-routine-key'];
  const ROUTINE_SECRET = process.env.ROUTINE_SECRET;

  // If a routine key is provided, it must match — but we don't require it for chat calls
  if (routineKey && ROUTINE_SECRET && routineKey !== ROUTINE_SECRET) {
    return res.status(401).json({ error: 'Invalid routine key' });
  }
  // ──────────────────────────────────────────────────────────────────────────

  // ── Validate Anthropic key ────────────────────────────────────────────────
  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not set in Vercel environment variables' });
  }
  // ──────────────────────────────────────────────────────────────────────────

  // ── Parse request body ────────────────────────────────────────────────────
  const {
    messages,
    model = 'claude-sonnet-4-20250514',
    max_tokens = 1024,
    system,
    agentName,
    routine
  } = req.body || {};

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array is required' });
  }
  // ──────────────────────────────────────────────────────────────────────────

  // ── Build Anthropic request ───────────────────────────────────────────────
  const anthropicBody = {
    model,
    max_tokens,
    messages
  };

  // Attach system prompt if provided, otherwise use agent name as context
  if (system) {
    anthropicBody.system = system;
  } else if (agentName) {
    anthropicBody.system = `You are ${agentName}, part of the PhoennixAI multi-agent platform. Be precise, concise, and production-focused.`;
  }
  // ──────────────────────────────────────────────────────────────────────────

  // ── Call Anthropic ────────────────────────────────────────────────────────
  try {
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(anthropicBody)
    });

    const data = await anthropicRes.json();

    if (!anthropicRes.ok) {
      return res.status(anthropicRes.status).json({
        error: data?.error?.message || 'Anthropic API error',
        details: data
      });
    }

    // Return the full Anthropic response — frontend expects data.content[]
    return res.status(200).json(data);

  } catch (err) {
    console.error('Gateway error:', err);
    return res.status(500).json({
      error: 'Gateway fetch failed',
      message: err.message
    });
  }
  // ──────────────────────────────────────────────────────────────────────────
}
