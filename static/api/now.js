const activeSessions = new Map();
const MAX_SESSIONS = 1000;
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 3600000;
const MAX_REQUESTS_PER_HOUR = 10;

function getRateLimitKey(req) {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(ip) || [];
  const recentRequests = userRequests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= MAX_REQUESTS_PER_HOUR) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateLimitMap.entries()) {
    const recentRequests = timestamps.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);
    if (recentRequests.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, recentRequests);
    }
  }
}, 300000);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'DELETE') {
    const { sessionId } = req.body;
    if (sessionId && activeSessions.has(sessionId)) {
      activeSessions.delete(sessionId);
      console.log(`Session ${sessionId} closed. Active: ${activeSessions.size}`);
    }
    return res.status(200).json({ success: true });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = getRateLimitKey(req);
  if (!checkRateLimit(ip)) {
    return res.status(429).json({
      error: 'Rate limit exceeded. Please wait before creating another session.'
    });
  }

  if (activeSessions.size >= MAX_SESSIONS) {
    return res.status(429).json({
      error: 'Maximum sessions reached. Please try again later.'
    });
  }

  const { gameUrl } = req.body;
  const startUrl = gameUrl || 'https://www.google.com';

  try {
    const response = await fetch('https://engine.hyperbeam.com/v0/vm', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer sk_live_lZrs40XmGpSXz8tVZTOyBdJwtO-chDqqxv55uSnWQzg',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        start_url: startUrl,
        kiosk: true,
        timeout: {
          offline: 180,
          inactive: 300
        }
      })
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Hyperbeam API error:', data);
      throw new Error(data.message || 'Failed to create session');
    }

    activeSessions.set(data.session_id, {
      created: Date.now(),
      adminToken: data.admin_token
    });

    console.log(`Session ${data.session_id} created. Active: ${activeSessions.size}`);

    setTimeout(() => {
      if (activeSessions.has(data.session_id)) {
        activeSessions.delete(data.session_id);
        console.log(`Session ${data.session_id} auto-expired`);
      }
    }, 300000);

    res.status(200).json({
      embedUrl: data.embed_url,
      sessionId: data.session_id,
      adminToken: data.admin_token
    });
  } catch (error) {
    console.error('Hyperbeam error:', error);
    res.status(500).json({ error: error.message });
  }
}
