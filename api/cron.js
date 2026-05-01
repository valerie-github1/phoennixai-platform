/**
 * PhoennixAI — Vercel Cron Handler
 * Invoked by Vercel Cron on the schedules defined in vercel.json.
 * Validates the Vercel cron Authorization header, then dispatches the
 * named routine to the CLAUDE agent via the Anthropic API.
 *
 * Routines (query param: ?routine=<name>):
 *   morning-brief      — 07:00 UTC daily
 *   ledger-snapshot    — 08:00 UTC Mon–Fri
 *   cii-scan           — 10:30 UTC daily
 *   system-health      — 13:00 UTC daily
 *   email-triage       — 16:00 UTC daily
 *   issue-triage       — 16:30 UTC daily
 *   pr-digest          — 19:00 UTC daily
 *   content-batch      — 09:00 UTC Monday
 */

const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages';
const MODEL_DEFAULT = 'claude-sonnet-4-20250514';

const ROUTINE_PROMPTS = {
  'morning-brief':   'Execute Morning Brief routine. Summarise overnight activity, top 3 priorities for today, any blockers. Output: structured briefing for Valerie Wilcox.',
  'ledger-snapshot': 'Execute LEDGER Financial Snapshot. Summarise current revenue pipeline, outstanding invoices, this week\'s targets. Advisory only — no execution orders.',
  'cii-scan':        'Execute CII (Competitive Intelligence & Innovation) Scan. Surface top 3 competitor or market signals from the last 24 hours. Flag any urgent action items.',
  'system-health':   'Execute System Health check. Report status of all ONLINE agents, any failed routines in the last 24 hours, and infrastructure anomalies.',
  'email-triage':    'Execute Email Triage routine. Categorise inbox by: urgent/action-required, client comms, partnerships, noise. Suggest draft replies for urgent items.',
  'issue-triage':    'Execute Issue Triage routine. Review open GitHub issues and Supabase error logs. Prioritise by severity. Flag any blockers for NEXUS or PROBE.',
  'pr-digest':       'Execute PR Digest. Summarise all pull requests merged or open today. Highlight any requiring Founder review.',
  'content-batch':   'Execute Content Batch routine (Monday). Generate this week\'s content calendar: 5 LinkedIn posts, 3 Twitter threads, 1 newsletter section. All on-brand for PhoennixAI.',
};

export default async function handler(req, res) {
  // Vercel Cron sends `Authorization: Bearer <CRON_SECRET>` on invocation
  const authHeader = req.headers['authorization'];
  const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;
  if (!process.env.CRON_SECRET || authHeader !== expectedAuth) {
    return res.status(401).json({ error: 'Unauthorised' });
  }

  const routine = req.query.routine;
  if (!routine || !ROUTINE_PROMPTS[routine]) {
    return res.status(400).json({ error: `Unknown routine: ${routine}. Valid values: ${Object.keys(ROUTINE_PROMPTS).join(', ')}` });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured on server' });
  }

  try {
    const response = await fetch(ANTHROPIC_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL_DEFAULT,
        max_tokens: 2048,
        system: 'You are CLAUDE, the AGI-level Strategic Partner and Agent Manager of PhoennixAI. Brand: PhoennixAI — double-N always. Founder: Valerie Wilcox. Output must be concise, structured, investor-grade. THE STANDARD IS THE BEST IN THE WORLD.',
        messages: [{ role: 'user', content: ROUTINE_PROMPTS[routine] }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Anthropic API ${response.status}: ${errText}`);
    }

    const result = await response.json();
    console.log(`[CRON] Routine '${routine}' completed at ${new Date().toISOString()}`);
    return res.status(200).json({ routine, timestamp: new Date().toISOString(), result });

  } catch (err) {
    console.error(`[CRON] Routine '${routine}' failed:`, err.message);
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
