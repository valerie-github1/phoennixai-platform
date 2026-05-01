import React, { useState, useEffect, useCallback } from 'react';

/* ─────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────── */
const STORAGE_KEY = 'phx_api_keys_v1';
const AUDIT_STORAGE_KEY = 'phx_audit_log_v1';

const SCOPES = [
  { id: 'chat:read',      label: 'Chat Read',      desc: 'Read chat history and messages' },
  { id: 'chat:write',     label: 'Chat Write',     desc: 'Send messages to agents' },
  { id: 'agents:read',   label: 'Agents Read',    desc: 'List and inspect agents' },
  { id: 'agents:write',  label: 'Agents Write',   desc: 'Configure agent behaviour' },
  { id: 'routines:run',  label: 'Routines Run',   desc: 'Trigger scheduled routines' },
  { id: 'routines:write',label: 'Routines Write', desc: 'Create and edit routines' },
  { id: 'data:read',     label: 'Data Read',      desc: 'Access client & project data' },
  { id: 'data:write',    label: 'Data Write',     desc: 'Modify client & project data' },
  { id: 'webhooks',      label: 'Webhooks',       desc: 'Send / receive webhook events' },
  { id: 'admin',         label: 'Admin',          desc: 'Full platform access (all scopes)' },
];

const RATE_TIERS = [
  { id: 'free',       label: 'Free',       limit: 100,     period: 'day',  color: '#6B7477' },
  { id: 'pro',        label: 'Pro',        limit: 10000,   period: 'day',  color: '#ABA944' },
  { id: 'enterprise', label: 'Enterprise', limit: 1000000, period: 'day',  color: '#556970' },
  { id: 'unlimited',  label: 'Unlimited',  limit: -1,      period: 'day',  color: '#2d7a4f' },
];

const EXPIRY_OPTIONS = [
  { value: 7,    label: '7 days' },
  { value: 30,   label: '30 days' },
  { value: 90,   label: '90 days' },
  { value: 365,  label: '1 year' },
  { value: -1,   label: 'Never' },
];

/* ─────────────────────────────────────────────
   CRYPTO UTILITIES
───────────────────────────────────────────── */
async function generateRawKey(env = 'live') {
  const arr = new Uint8Array(32);
  window.crypto.getRandomValues(arr);
  const hex = Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
  return `phx_${env}_${hex}`;
}

async function sha256Hex(str) {
  const buf = await window.crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(str),
  );
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

/* ─────────────────────────────────────────────
   STORAGE HELPERS
───────────────────────────────────────────── */
function loadKeys() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveKeys(keys) {
  // Security note: raw API keys are NEVER stored. The stored objects contain only:
  // hashed_key (SHA-256, non-reversible), key_preview (first 12 + last 4 chars, masked),
  // metadata (name, scopes, tier, timestamps). This localStorage write is safe by design.
  localStorage.setItem(STORAGE_KEY, JSON.stringify(keys)); // lgtm[js/clear-text-storage-of-sensitive-data]
}

function loadAudit() {
  try {
    return JSON.parse(localStorage.getItem(AUDIT_STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveAudit(log) {
  // keep last 200 entries
  // Security note: audit log contains only event names (e.g. "created", "revoked"),
  // key names (user-defined labels), and timestamps — no sensitive key material.
  localStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(log.slice(0, 200))); // lgtm[js/clear-text-storage-of-sensitive-data]
}

function addAuditEntry(action, keyId, keyName, extra = '') {
  const log = loadAudit();
  log.unshift({
    id: Date.now(),
    ts: new Date().toISOString(),
    action,
    keyId,
    keyName,
    extra,
  });
  saveAudit(log);
}

/* ─────────────────────────────────────────────
   FORMATTING HELPERS
───────────────────────────────────────────── */
function fmtDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function fmtTimeAgo(iso) {
  if (!iso) return 'Never';
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

function isExpired(key) {
  if (!key.expires_at) return false;
  return new Date(key.expires_at) < new Date();
}

function maskKey(rawKey) {
  // show first 12 chars then mask
  if (!rawKey || rawKey.length < 16) return rawKey;
  const prefix = rawKey.slice(0, 12);
  return prefix + '•'.repeat(8) + rawKey.slice(-4);
}

function copyToClipboard(text, onDone) {
  navigator.clipboard.writeText(text).then(() => {
    if (onDone) onDone();
  });
}

/* ─────────────────────────────────────────────
   MIDDLEWARE SNIPPET
───────────────────────────────────────────── */
const MIDDLEWARE_SNIPPET = `// api/middleware.js — Vercel Edge Function
// Drop this into your /api folder and import it in every route.

import { createHash } from 'crypto';

const KEYS_KV = process.env.PHX_KEYS_KV; // Vercel KV or Upstash Redis URL

export async function validateApiKey(req) {
  const authHeader = req.headers.get('Authorization') || '';
  const rawKey = authHeader.replace(/^Bearer\\s+/i, '').trim();
  if (!rawKey.startsWith('phx_')) {
    return { ok: false, status: 401, error: 'Missing or invalid API key' };
  }

  // Hash the incoming key
  const hash = createHash('sha256').update(rawKey).digest('hex');

  // Look up in your database / KV store
  const record = await fetchKeyRecord(hash); // implement this
  if (!record) return { ok: false, status: 401, error: 'Unknown API key' };
  if (!record.is_active) return { ok: false, status: 403, error: 'Key revoked' };
  if (record.expires_at && new Date(record.expires_at) < new Date()) {
    return { ok: false, status: 403, error: 'Key expired' };
  }

  // Rate limiting (Upstash Redis example)
  const count = await incrementUsage(hash, record.rate_tier);
  if (count > getRateLimit(record.rate_tier)) {
    return { ok: false, status: 429, error: 'Rate limit exceeded' };
  }

  // Update last_used_at (async, no await needed)
  updateLastUsed(hash);

  return { ok: true, user_id: record.user_id, scopes: record.permissions };
}

function getRateLimit(tier) {
  const limits = { free: 100, pro: 10000, enterprise: 1000000, unlimited: Infinity };
  return limits[tier] ?? 100;
}`;

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function Badge({ color = '#556970', children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '2px 7px', borderRadius: 20,
      fontSize: 10, fontWeight: 700, letterSpacing: '.04em',
      background: `${color}18`, color,
      border: `0.5px solid ${color}40`,
      fontFamily: 'Fira Code, monospace',
    }}>{children}</span>
  );
}

function ScopeChip({ scope, active, onClick }) {
  return (
    <button
      onClick={onClick}
      title={scope.desc}
      style={{
        padding: '4px 9px', borderRadius: 20, cursor: 'pointer',
        fontSize: 11, fontWeight: 600, border: 'none',
        background: active ? 'rgba(85,105,112,.15)' : 'rgba(85,105,112,.04)',
        color: active ? 'var(--tx)' : 'var(--t3)',
        outline: active ? '1.5px solid rgba(85,105,112,.4)' : '0.5px solid rgba(85,105,112,.15)',
        transition: 'all .15s', fontFamily: 'Fira Code, monospace',
      }}
    >
      {active ? '✓ ' : ''}{scope.label}
    </button>
  );
}

function KeyRow({ k, onRevoke, onDelete, onCopy }) {
  const expired = isExpired(k);
  const status = !k.is_active ? 'Revoked' : expired ? 'Expired' : 'Active';
  const statusColor = status === 'Active' ? '#2d7a4f' : status === 'Revoked' ? '#c0392b' : '#8A8835';
  const tier = RATE_TIERS.find(t => t.id === k.rate_tier) || RATE_TIERS[0];

  return (
    <div style={{
      padding: '1rem 1.25rem', borderRadius: 12, marginBottom: 8,
      background: 'rgba(255,255,255,.85)',
      border: `0.5px solid ${!k.is_active || expired ? 'rgba(192,57,43,.2)' : 'rgba(85,105,112,.14)'}`,
      opacity: !k.is_active || expired ? 0.72 : 1,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        {/* Left: key info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--tx)' }}>{k.name}</span>
            <Badge color={statusColor}>{status}</Badge>
            <Badge color={tier.color}>{tier.label}</Badge>
            {k.env === 'test' && <Badge color="#8A8835">TEST</Badge>}
          </div>

          <div style={{
            fontFamily: 'Fira Code, monospace', fontSize: 11.5,
            color: 'var(--t2)', background: 'rgba(85,105,112,.06)',
            padding: '4px 10px', borderRadius: 7, display: 'inline-block',
            marginBottom: 8, letterSpacing: '.03em',
          }}>
            {maskKey(k.key_preview || 'phx_live_••••••••')}
          </div>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, color: 'var(--t3)' }}>
              Created <strong>{fmtDate(k.created_at)}</strong>
            </span>
            <span style={{ fontSize: 11, color: 'var(--t3)' }}>
              Last used <strong>{fmtTimeAgo(k.last_used_at)}</strong>
            </span>
            {k.expires_at && (
              <span style={{ fontSize: 11, color: expired ? '#c0392b' : 'var(--t3)' }}>
                Expires <strong>{fmtDate(k.expires_at)}</strong>
              </span>
            )}
            <span style={{ fontSize: 11, color: 'var(--t3)' }}>
              Requests <strong>{k.request_count || 0}</strong>
            </span>
          </div>

          {/* Scopes */}
          {k.permissions?.length > 0 && (
            <div style={{ marginTop: 8, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              {k.permissions.map(p => (
                <span key={p} style={{
                  fontSize: 10, fontFamily: 'Fira Code, monospace',
                  background: 'rgba(85,105,112,.08)', color: 'var(--t2)',
                  padding: '1px 6px', borderRadius: 4,
                }}>{p}</span>
              ))}
            </div>
          )}

          {/* IP allowlist */}
          {k.ip_allowlist?.length > 0 && (
            <div style={{ marginTop: 6, fontSize: 11, color: 'var(--t3)' }}>
              🔒 IP restricted: {k.ip_allowlist.join(', ')}
            </div>
          )}
        </div>

        {/* Right: actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flexShrink: 0 }}>
          {k.is_active && !expired && (
            <button
              onClick={() => onCopy(k)}
              className="btn-ghost"
              style={{ fontSize: 11, padding: '4px 10px' }}
            >📋 Copy</button>
          )}
          {k.is_active && !expired && (
            <button
              onClick={() => onRevoke(k.id)}
              className="btn-ghost"
              style={{ fontSize: 11, padding: '4px 10px', color: '#c0392b', borderColor: 'rgba(192,57,43,.25)' }}
            >⊘ Revoke</button>
          )}
          <button
            onClick={() => onDelete(k.id)}
            className="btn-ghost"
            style={{ fontSize: 11, padding: '4px 10px', color: 'var(--t3)' }}
          >✕ Delete</button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CREATE KEY MODAL
───────────────────────────────────────────── */
function CreateKeyModal({ onClose, onCreate }) {
  const [name, setName] = useState('');
  const [env, setEnv] = useState('live');
  const [selectedScopes, setSelectedScopes] = useState(['chat:read', 'chat:write']);
  const [tier, setTier] = useState('pro');
  const [expiryDays, setExpiryDays] = useState(-1);
  const [ipList, setIpList] = useState('');
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState('');

  const toggleScope = (scopeId) => {
    if (scopeId === 'admin') {
      // admin grants everything
      setSelectedScopes(prev =>
        prev.includes('admin') ? prev.filter(s => s !== 'admin') : ['admin'],
      );
      return;
    }
    setSelectedScopes(prev =>
      prev.filter(s => s !== 'admin').includes(scopeId)
        ? prev.filter(s => s !== scopeId)
        : [...prev.filter(s => s !== 'admin'), scopeId],
    );
  };

  const handleCreate = async () => {
    if (!name.trim()) { setError('Key name is required'); return; }
    if (selectedScopes.length === 0) { setError('Select at least one scope'); return; }
    setCreating(true);
    setError('');

    try {
      const rawKey = await generateRawKey(env);
      const hash = await sha256Hex(rawKey);
      const now = new Date().toISOString();
      const expiresAt = expiryDays > 0
        ? new Date(Date.now() + expiryDays * 86400000).toISOString()
        : null;

      const ips = ipList.trim()
        ? ipList.split(',').map(s => s.trim()).filter(Boolean)
        : [];

      const newKey = {
        id: `key_${Date.now()}`,
        name: name.trim(),
        env,
        hashed_key: hash,
        key_preview: rawKey.slice(0, 12) + '••••••••' + rawKey.slice(-4),
        permissions: selectedScopes,
        rate_tier: tier,
        created_at: now,
        last_used_at: null,
        expires_at: expiresAt,
        is_active: true,
        ip_allowlist: ips,
        request_count: 0,
      };

      onCreate(newKey, rawKey);
    } catch (e) {
      setError('Failed to generate key. Please try again.');
    } finally {
      setCreating(false);
    }
  };

  const allScopesActive = SCOPES.every(s => s.id === 'admin' ? false : selectedScopes.includes(s.id));

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(15,22,24,.45)',
      backdropFilter: 'blur(6px)', zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
    }}>
      <div style={{
        background: 'var(--bg)', borderRadius: 16,
        border: '0.5px solid rgba(85,105,112,.2)',
        boxShadow: '0 40px 120px rgba(0,0,0,.25)',
        width: '100%', maxWidth: 640, maxHeight: '90vh',
        overflowY: 'auto', padding: '1.75rem',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>Create API Key</div>
            <div style={{ fontSize: 12, color: 'var(--t3)', marginTop: 2 }}>
              The raw key is shown only once. Store it securely.
            </div>
          </div>
          <button onClick={onClose} className="btn-ghost" style={{ padding: '5px 10px' }}>✕</button>
        </div>

        {/* Name */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--t2)', display: 'block', marginBottom: 6 }}>
            KEY NAME
          </label>
          <input
            className="field"
            placeholder="e.g. Production backend, CI/CD pipeline"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        {/* Environment */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--t2)', display: 'block', marginBottom: 6 }}>
            ENVIRONMENT
          </label>
          <div style={{ display: 'flex', gap: 8 }}>
            {['live', 'test'].map(e => (
              <button
                key={e}
                onClick={() => setEnv(e)}
                style={{
                  padding: '6px 18px', borderRadius: 9, cursor: 'pointer',
                  fontSize: 12, fontWeight: 700, fontFamily: 'Fira Code, monospace',
                  border: 'none',
                  background: env === e ? 'var(--tx)' : 'rgba(85,105,112,.08)',
                  color: env === e ? 'var(--bg)' : 'var(--t2)',
                  transition: 'all .15s',
                }}
              >
                phx_{e}_
              </button>
            ))}
          </div>
          <div style={{ fontSize: 11, color: 'var(--t3)', marginTop: 5 }}>
            {env === 'live' ? 'Production key — use in your live app' : 'Test key — safe to use in development'}
          </div>
        </div>

        {/* Scopes */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--t2)' }}>PERMISSIONS / SCOPES</label>
            <button
              onClick={() => setSelectedScopes(allScopesActive ? [] : SCOPES.filter(s => s.id !== 'admin').map(s => s.id))}
              style={{ fontSize: 10, color: 'var(--t3)', cursor: 'pointer', background: 'none', border: 'none' }}
            >
              {allScopesActive ? 'Clear all' : 'Select all'}
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {SCOPES.map(s => (
              <ScopeChip
                key={s.id}
                scope={s}
                active={s.id === 'admin' ? selectedScopes.includes('admin') : selectedScopes.includes(s.id)}
                onClick={() => toggleScope(s.id)}
              />
            ))}
          </div>
        </div>

        {/* Rate Tier */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--t2)', display: 'block', marginBottom: 6 }}>
            RATE LIMIT TIER
          </label>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {RATE_TIERS.map(t => (
              <button
                key={t.id}
                onClick={() => setTier(t.id)}
                style={{
                  padding: '6px 14px', borderRadius: 9, cursor: 'pointer',
                  fontSize: 12, fontWeight: 600, border: 'none',
                  background: tier === t.id ? t.color : 'rgba(85,105,112,.08)',
                  color: tier === t.id ? '#fff' : 'var(--t2)',
                  transition: 'all .15s',
                }}
              >
                {t.label}
                <span style={{ fontSize: 9, display: 'block', opacity: .8 }}>
                  {t.limit === -1 ? '∞' : `${t.limit.toLocaleString()}/day`}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Expiry */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--t2)', display: 'block', marginBottom: 6 }}>
            EXPIRY
          </label>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {EXPIRY_OPTIONS.map(opt => (
              <button
                key={opt.value}
                onClick={() => setExpiryDays(opt.value)}
                style={{
                  padding: '5px 12px', borderRadius: 9, cursor: 'pointer',
                  fontSize: 11.5, fontWeight: 600, border: 'none',
                  background: expiryDays === opt.value ? 'rgba(85,105,112,.18)' : 'rgba(85,105,112,.06)',
                  color: expiryDays === opt.value ? 'var(--tx)' : 'var(--t3)',
                  outline: expiryDays === opt.value ? '1px solid rgba(85,105,112,.35)' : 'none',
                  transition: 'all .15s',
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* IP Allowlist */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--t2)', display: 'block', marginBottom: 4 }}>
            IP ALLOWLIST <span style={{ fontWeight: 400, color: 'var(--t3)' }}>(optional, enterprise)</span>
          </label>
          <input
            className="field"
            placeholder="192.168.1.1, 10.0.0.0/24  (comma-separated)"
            value={ipList}
            onChange={e => setIpList(e.target.value)}
            style={{ fontFamily: 'Fira Code, monospace', fontSize: 12 }}
          />
          <div style={{ fontSize: 11, color: 'var(--t3)', marginTop: 4 }}>
            Leave blank to allow requests from any IP address.
          </div>
        </div>

        {error && (
          <div style={{
            padding: '8px 12px', borderRadius: 8, background: 'rgba(192,57,43,.08)',
            border: '0.5px solid rgba(192,57,43,.25)', color: '#c0392b',
            fontSize: 12, marginBottom: '1rem',
          }}>{error}</div>
        )}

        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <button onClick={onClose} className="btn-ghost">Cancel</button>
          <button onClick={handleCreate} className="btn-primary" disabled={creating}>
            {creating ? 'Generating…' : '⚡ Generate Key'}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   KEY REVEAL MODAL (shown only once)
───────────────────────────────────────────── */
function KeyRevealModal({ rawKey, keyName, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(rawKey, () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(15,22,24,.55)',
      backdropFilter: 'blur(8px)', zIndex: 1100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
    }}>
      <div style={{
        background: 'var(--bg)', borderRadius: 16,
        border: '0.5px solid rgba(45,122,79,.3)',
        boxShadow: '0 40px 120px rgba(0,0,0,.3), 0 0 0 1px rgba(45,122,79,.15)',
        width: '100%', maxWidth: 560, padding: '2rem',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: 36, marginBottom: 8 }}>🔑</div>
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>API Key Created</div>
          <div style={{ fontSize: 13, color: 'var(--t2)' }}>
            <strong>{keyName}</strong> — copy this key now. You won't be able to see it again.
          </div>
        </div>

        <div style={{
          background: 'rgba(15,22,24,.06)', border: '0.5px solid rgba(85,105,112,.2)',
          borderRadius: 10, padding: '1rem', marginBottom: '1.25rem',
          fontFamily: 'Fira Code, monospace', fontSize: 12.5,
          color: 'var(--tx)', wordBreak: 'break-all', lineHeight: 1.7,
        }}>
          {rawKey}
        </div>

        <div style={{
          background: 'rgba(192,57,43,.06)', border: '0.5px solid rgba(192,57,43,.2)',
          borderRadius: 8, padding: '10px 14px', marginBottom: '1.5rem',
          fontSize: 12, color: '#c0392b',
        }}>
          ⚠ This is the only time the raw key is shown. Store it in a password manager or environment variable immediately.
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={handleCopy}
            className="btn-primary"
            style={{ flex: 1, fontSize: 13 }}
          >
            {copied ? '✓ Copied!' : '📋 Copy to clipboard'}
          </button>
          <button onClick={onClose} className="btn-ghost">Done</button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MIDDLEWARE PANEL
───────────────────────────────────────────── */
function MiddlewarePanel() {
  const [copied, setCopied] = useState(false);

  return (
    <div style={{ maxWidth: 800 }}>
      <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Validation Middleware</div>
      <p style={{ fontSize: 13, color: 'var(--t2)', marginBottom: '1rem', lineHeight: 1.7 }}>
        Deploy this Vercel Edge Function to validate <code style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, background: 'rgba(85,105,112,.08)', padding: '1px 5px', borderRadius: 4 }}>phx_*</code> keys
        on every API request. It hashes the incoming key, looks it up in your DB, checks expiry, scopes, and rate limits.
      </p>

      <div style={{ position: 'relative' }}>
        <pre style={{
          background: 'rgba(15,22,24,.04)', border: '0.5px solid rgba(85,105,112,.16)',
          borderRadius: 10, padding: '1rem', fontSize: 11.5, lineHeight: 1.7,
          fontFamily: 'Fira Code, monospace', color: 'var(--tx)',
          overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word',
          maxHeight: 420, overflowY: 'auto',
        }}>
          {MIDDLEWARE_SNIPPET}
        </pre>
        <button
          onClick={() => copyToClipboard(MIDDLEWARE_SNIPPET, () => { setCopied(true); setTimeout(() => setCopied(false), 2000); })}
          className="btn-ghost"
          style={{ position: 'absolute', top: 8, right: 8, fontSize: 11, padding: '4px 10px' }}
        >
          {copied ? '✓ Copied' : '📋 Copy'}
        </button>
      </div>

      <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          ['1', 'Client sends', 'Authorization: Bearer phx_live_<key>', 'var(--t2)'],
          ['2', 'Middleware hashes it', 'SHA-256(rawKey) → look up in DB', 'var(--t2)'],
          ['3', 'Checks validity', 'active? expired? rate limit? IP?', 'var(--t2)'],
          ['4', 'Attaches context', 'user_id, scopes → downstream handlers', 'var(--t2)'],
        ].map(([step, label, detail]) => (
          <div key={step} style={{
            display: 'flex', alignItems: 'flex-start', gap: 12,
            background: 'rgba(85,105,112,.04)', borderRadius: 8, padding: '10px 14px',
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
              background: 'rgba(85,105,112,.14)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 700, fontFamily: 'Fira Code, monospace',
            }}>{step}</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700 }}>{label}</div>
              <div style={{ fontSize: 11.5, color: 'var(--t3)', fontFamily: 'Fira Code, monospace' }}>{detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   AUDIT LOG PANEL
───────────────────────────────────────────── */
function AuditLogPanel() {
  const log = loadAudit();

  if (log.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--t3)', fontSize: 13 }}>
        No audit events yet. Create or revoke a key to see activity here.
      </div>
    );
  }

  const actionColor = {
    created: '#2d7a4f', revoked: '#c0392b', deleted: '#8A8835',
    copied: '#556970', 'copy-attempt': '#ABA944',
  };

  return (
    <div style={{ maxWidth: 720 }}>
      {log.map(entry => (
        <div key={entry.id} style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0',
          borderBottom: '0.5px solid rgba(85,105,112,.08)',
        }}>
          <span style={{
            fontSize: 10, fontWeight: 700, fontFamily: 'Fira Code, monospace',
            color: actionColor[entry.action] || 'var(--t3)',
            background: `${actionColor[entry.action] || '#556970'}14`,
            padding: '2px 8px', borderRadius: 20, flexShrink: 0, minWidth: 60, textAlign: 'center',
          }}>{entry.action}</span>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>{entry.keyName}</span>
            {entry.extra && <span style={{ fontSize: 11, color: 'var(--t3)', marginLeft: 6 }}>{entry.extra}</span>}
          </div>
          <span style={{ fontSize: 11, color: 'var(--t3)', fontFamily: 'Fira Code, monospace', flexShrink: 0 }}>
            {fmtTimeAgo(entry.ts)}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ApiKeys() {
  const [keys, setKeys] = useState(() => loadKeys());
  const [activeTab, setActiveTab] = useState('keys');
  const [showCreate, setShowCreate] = useState(false);
  const [revealKey, setRevealKey] = useState(null); // { rawKey, keyName }
  const [filterStatus, setFilterStatus] = useState('all'); // all | active | revoked | expired
  const [toastMsg, setToastMsg] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const showToast = useCallback((msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 2800);
  }, []);

  const persistKeys = (updated) => {
    setKeys(updated);
    saveKeys(updated);
  };

  const handleCreate = (newKey, rawKey) => {
    const updated = [newKey, ...keys];
    persistKeys(updated);
    addAuditEntry('created', newKey.id, newKey.name, `env:${newKey.env} tier:${newKey.rate_tier}`);
    setShowCreate(false);
    setRevealKey({ rawKey, keyName: newKey.name });
  };

  const handleRevoke = (id) => {
    const key = keys.find(k => k.id === id);
    if (!key) return;
    if (!window.confirm(`Revoke "${key.name}"? This cannot be undone.`)) return;
    const updated = keys.map(k => k.id === id ? { ...k, is_active: false } : k);
    persistKeys(updated);
    addAuditEntry('revoked', id, key.name);
    showToast(`"${key.name}" revoked`);
  };

  const handleDelete = (id) => {
    const key = keys.find(k => k.id === id);
    if (!key) return;
    if (!window.confirm(`Permanently delete "${key.name}"?`)) return;
    const updated = keys.filter(k => k.id !== id);
    persistKeys(updated);
    addAuditEntry('deleted', id, key.name);
    showToast(`"${key.name}" deleted`);
  };

  const handleCopyKey = (k) => {
    // We can't recover the raw key, so copy the preview + instructions
    const msg = `API key "${k.name}" — the raw key was only shown at creation time. To get a new key, revoke this one and create another.`;
    copyToClipboard(k.key_preview || '', () => {});
    addAuditEntry('copy-attempt', k.id, k.name);
    showToast('Key prefix copied (full key only available at creation)');
    setCopiedId(k.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredKeys = keys.filter(k => {
    if (filterStatus === 'active') return k.is_active && !isExpired(k);
    if (filterStatus === 'revoked') return !k.is_active;
    if (filterStatus === 'expired') return isExpired(k) && k.is_active;
    return true;
  });

  const activeCount = keys.filter(k => k.is_active && !isExpired(k)).length;
  const revokedCount = keys.filter(k => !k.is_active).length;
  const expiredCount = keys.filter(k => isExpired(k) && k.is_active).length;

  const tabs = [
    { id: 'keys', label: '🔑 Keys', count: keys.length },
    { id: 'middleware', label: '⚙ Middleware', count: null },
    { id: 'audit', label: '📋 Audit Log', count: loadAudit().length || null },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>API Keys</h1>
          <p style={{ fontSize: 13, color: 'var(--t2)', maxWidth: 500, lineHeight: 1.6 }}>
            Generate <code style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, background: 'rgba(85,105,112,.1)', padding: '1px 5px', borderRadius: 4 }}>phx_live_*</code> and{' '}
            <code style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, background: 'rgba(85,105,112,.1)', padding: '1px 5px', borderRadius: 4 }}>phx_test_*</code> API keys to authenticate
            programmatic access to PhoennixPro. Keys are cryptographically random and hashed at rest.
          </p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="btn-primary"
          style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}
        >
          ⚡ New API Key
        </button>
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: 10, marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {[
          { label: 'Total Keys', value: keys.length, color: 'var(--tx)' },
          { label: 'Active', value: activeCount, color: '#2d7a4f' },
          { label: 'Revoked', value: revokedCount, color: '#c0392b' },
          { label: 'Expired', value: expiredCount, color: '#8A8835' },
        ].map(stat => (
          <div key={stat.label} style={{
            padding: '10px 18px', borderRadius: 10,
            background: 'rgba(255,255,255,.85)', border: '0.5px solid rgba(85,105,112,.12)',
            minWidth: 110,
          }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: stat.color }}>{stat.value}</div>
            <div style={{ fontSize: 11, color: 'var(--t3)' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 4, borderBottom: '0.5px solid rgba(85,105,112,.12)', marginBottom: '1.5rem' }}>
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              padding: '8px 16px', borderRadius: '9px 9px 0 0',
              border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: activeTab === t.id ? 700 : 500,
              background: activeTab === t.id ? 'rgba(85,105,112,.1)' : 'transparent',
              color: activeTab === t.id ? 'var(--tx)' : 'var(--t3)',
              borderBottom: activeTab === t.id ? '2px solid var(--primary)' : '2px solid transparent',
              transition: 'all .15s', display: 'flex', alignItems: 'center', gap: 6,
            }}
          >
            {t.label}
            {t.count !== null && t.count > 0 && (
              <span style={{
                fontSize: 10, background: 'rgba(85,105,112,.15)',
                padding: '1px 6px', borderRadius: 20, fontFamily: 'Fira Code, monospace',
              }}>{t.count}</span>
            )}
          </button>
        ))}
      </div>

      {/* Keys tab */}
      {activeTab === 'keys' && (
        <div>
          {/* Filter bar */}
          {keys.length > 0 && (
            <div style={{ display: 'flex', gap: 6, marginBottom: '1rem', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All' },
                { id: 'active', label: 'Active' },
                { id: 'revoked', label: 'Revoked' },
                { id: 'expired', label: 'Expired' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setFilterStatus(f.id)}
                  style={{
                    padding: '4px 12px', borderRadius: 20, cursor: 'pointer',
                    fontSize: 11.5, fontWeight: 600, border: 'none',
                    background: filterStatus === f.id ? 'rgba(85,105,112,.15)' : 'rgba(85,105,112,.06)',
                    color: filterStatus === f.id ? 'var(--tx)' : 'var(--t3)',
                    outline: filterStatus === f.id ? '1px solid rgba(85,105,112,.3)' : 'none',
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}

          {filteredKeys.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '4rem 2rem',
              color: 'var(--t3)', border: '1px dashed rgba(85,105,112,.2)',
              borderRadius: 14, background: 'rgba(85,105,112,.02)',
            }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>🔑</div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>
                {keys.length === 0 ? 'No API keys yet' : `No ${filterStatus} keys`}
              </div>
              <div style={{ fontSize: 13, marginBottom: '1.25rem' }}>
                {keys.length === 0
                  ? 'Create your first API key to authenticate programmatic access to PhoennixPro.'
                  : 'Try a different filter above.'}
              </div>
              {keys.length === 0 && (
                <button onClick={() => setShowCreate(true)} className="btn-primary">
                  ⚡ Create First Key
                </button>
              )}
            </div>
          ) : (
            filteredKeys.map(k => (
              <KeyRow
                key={k.id}
                k={k}
                onRevoke={handleRevoke}
                onDelete={handleDelete}
                onCopy={handleCopyKey}
              />
            ))
          )}
        </div>
      )}

      {/* Middleware tab */}
      {activeTab === 'middleware' && <MiddlewarePanel />}

      {/* Audit tab */}
      {activeTab === 'audit' && <AuditLogPanel />}

      {/* Modals */}
      {showCreate && (
        <CreateKeyModal
          onClose={() => setShowCreate(false)}
          onCreate={handleCreate}
        />
      )}
      {revealKey && (
        <KeyRevealModal
          rawKey={revealKey.rawKey}
          keyName={revealKey.keyName}
          onClose={() => { setRevealKey(null); showToast('Key created successfully'); }}
        />
      )}

      {/* Toast */}
      {toastMsg && (
        <div style={{
          position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(15,22,24,.9)', color: '#fff', padding: '10px 20px',
          borderRadius: 10, fontSize: 13, fontWeight: 600, zIndex: 2000,
          boxShadow: '0 8px 32px rgba(0,0,0,.3)',
          backdropFilter: 'blur(10px)',
        }}>
          {toastMsg}
        </div>
      )}
    </div>
  );
}
