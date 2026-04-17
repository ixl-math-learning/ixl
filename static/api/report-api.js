const reportRateLimits = new Map();
const REPORT_COOLDOWN = 5 * 60 * 1000;
const REPORT_WEBHOOK = 'https://discord.com/api/webhooks/1464737863609487470/7-EGMU7LeuCqFEZTjf2IU_CJV8oSXArE00GFulKwFeBEWo57BK-SZ3bsxAn1H7jrDaHC';

function getReportClientId(request) {
    const forwarded = request.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(',')[0].trim() : request.socket?.remoteAddress || 'unknown';
    return ip;
}

function checkReportRateLimit(clientId) {
    const now = Date.now();
    const lastReport = reportRateLimits.get(clientId);

    if (lastReport && (now - lastReport) < REPORT_COOLDOWN) {
        return false;
    }

    reportRateLimits.set(clientId, now);
    return true;
}

function sanitizeString(str, maxLength = 500) {
    if (typeof str !== 'string') return '';
    return str.slice(0, maxLength).replace(/[<>]/g, '');
}

function sanitizeConsoleHistory(history) {
    if (!Array.isArray(history)) return [];

    return history.slice(0, 50).map(entry => {
        if (typeof entry !== 'object' || entry === null) return null;

        return {
            type: sanitizeString(entry.type, 20),
            message: sanitizeString(entry.message, 300),
            timestamp: sanitizeString(entry.timestamp, 30)
        };
    }).filter(Boolean);
}

function formatConsoleForDiscord(history) {
    if (!history || history.length === 0) return 'No console logs captured';

    const errorLogs = history.filter(h => h.type === 'error');
    const warnLogs = history.filter(h => h.type === 'warn');

    let output = '';

    if (errorLogs.length > 0) {
        output += '**Errors:**\n```\n';
        errorLogs.slice(-10).forEach(log => {
            output += `[${log.type.toUpperCase()}] ${log.message.slice(0, 150)}\n`;
        });
        output += '```\n';
    }

    if (warnLogs.length > 0) {
        output += '**Warnings:**\n```\n';
        warnLogs.slice(-5).forEach(log => {
            output += `[${log.type.toUpperCase()}] ${log.message.slice(0, 150)}\n`;
        });
        output += '```\n';
    }

    if (output === '') {
        output = 'No errors or warnings captured';
    }

    return output.slice(0, 1500);
}

async function sendToDiscord(data) {
    const consoleOutput = formatConsoleForDiscord(data.consoleHistory);

    const embed = {
        title: `🎮 ${data.isApp ? 'App' : 'Game'} Issue Report`,
        color: 0xff4444,
        fields: [
            {
                name: '📝 Title',
                value: data.title || 'Unknown',
                inline: true
            },
            {
                name: '🔗 Type',
                value: data.isApp ? 'App' : 'Game',
                inline: true
            },
            {
                name: '💻 Device',
                value: data.device?.device || 'Unknown',
                inline: true
            },
            {
                name: '🌐 Browser',
                value: data.device?.browser || 'Unknown',
                inline: true
            },
            {
                name: '🖥️ OS',
                value: data.device?.os || 'Unknown',
                inline: true
            },
            {
                name: '📐 Screen',
                value: `${data.device?.screenWidth || '?'}x${data.device?.screenHeight || '?'}`,
                inline: true
            },
            {
                name: '🔗 Game URL',
                value: `\`${(data.gameUrl || 'Unknown').slice(0, 200)}\``,
                inline: false
            },
            {
                name: '📋 Console Logs',
                value: consoleOutput,
                inline: false
            }
        ],
        footer: {
            text: `Reported at ${data.timestamp || new Date().toISOString()}`
        },
        timestamp: new Date().toISOString()
    };

    const response = await fetch(REPORT_WEBHOOK, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: '<@&1475672255311904800>',
            allowed_mentions: { roles: ['1475672255311904800'] },
            embeds: [embed]
        })
    });

    return response.ok;
}

function registerReportRoute(fastify) {
    fastify.post('/api/report-issue', async (request, reply) => {
        try {
            const clientId = getReportClientId(request.raw);

            if (!checkReportRateLimit(clientId)) {
                return reply.code(429).send({
                    success: false,
                    error: 'Rate limit exceeded. Please wait before submitting another report.'
                });
            }

            const body = request.body;

            if (!body || typeof body !== 'object') {
                return reply.code(400).send({
                    success: false,
                    error: 'Invalid request body'
                });
            }

            const title = sanitizeString(body.title, 100);
            const gameUrl = sanitizeString(body.gameUrl, 500);
            const isApp = Boolean(body.isApp);
            const timestamp = sanitizeString(body.timestamp, 30);

            if (!title || title.length < 1) {
                return reply.code(400).send({
                    success: false,
                    error: 'Game/App title is required'
                });
            }

            let device = {};
            if (body.device && typeof body.device === 'object') {
                device = {
                    device: sanitizeString(body.device.device, 50),
                    browser: sanitizeString(body.device.browser, 50),
                    os: sanitizeString(body.device.os, 50),
                    screenWidth: parseInt(body.device.screenWidth) || 0,
                    screenHeight: parseInt(body.device.screenHeight) || 0,
                    userAgent: sanitizeString(body.device.userAgent, 500)
                };
            }

            const consoleHistory = sanitizeConsoleHistory(body.consoleHistory);

            const reportData = {
                title,
                gameUrl,
                isApp,
                device,
                consoleHistory,
                timestamp: timestamp || new Date().toISOString()
            };

            const sent = await sendToDiscord(reportData);

            if (sent) {
                return { success: true, message: 'Report submitted successfully' };
            } else {
                return reply.code(500).send({
                    success: false,
                    error: 'Failed to submit report'
                });
            }

        } catch (error) {
            return reply.code(500).send({
                success: false,
                error: 'Internal server error'
            });
        }
    });

    setInterval(() => {
        const now = Date.now();
        for (const [clientId, timestamp] of reportRateLimits.entries()) {
            if (now - timestamp > REPORT_COOLDOWN * 2) {
                reportRateLimits.delete(clientId);
            }
        }
    }, 60000);
}

export { registerReportRoute };
