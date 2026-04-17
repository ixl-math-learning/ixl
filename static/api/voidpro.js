import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import admin from 'firebase-admin';

let db;
try {
    if (!admin.apps.length) {
        const serviceAccount = {
            type: "service_account",
            project_id: process.env.FIREBASE_PROJECT_ID || "voidpro-ebad5",
            private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
            private_key: (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, '\n'),
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
            client_id: process.env.FIREBASE_CLIENT_ID,
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
        };

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            projectId: process.env.FIREBASE_PROJECT_ID || "voidpro-ebad5"
        });
    }

    db = admin.firestore();
    console.log('✅ Firebase Admin SDK initialized');
} catch (error) {
    console.error('❌ Firebase initialization error:', error);
    db = null;
}

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 60;

const requestLog = new Map();

function rateLimit(req) {
    const ipHeader = req.headers['x-forwarded-for'] || req.connection?.remoteAddress || '';
    const ip = Array.isArray(ipHeader) ? ipHeader[0] : String(ipHeader).split(',')[0].trim();
    const now = Date.now();

    if (!requestLog.has(ip)) {
        requestLog.set(ip, []);
    }

    const timestamps = requestLog.get(ip).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

    if (timestamps.length >= RATE_LIMIT_MAX) {
        return false;
    }

    timestamps.push(now);
    requestLog.set(ip, timestamps);
    return true;
}

function parseCookies(cookieHeader = '') {
    return cookieHeader.split(';').reduce((acc, part) => {
        const [name, ...rest] = part.trim().split('=');
        if (!name) {
            return acc;
        }
        acc[name] = decodeURIComponent(rest.join('='));
        return acc;
    }, {});
}

function setCookie(res, name, value, options = {}) {
    let cookie = `${name}=${encodeURIComponent(value)}`;
    if (options.maxAge !== undefined) cookie += `; Max-Age=${options.maxAge}`;
    if (options.httpOnly) cookie += '; HttpOnly';
    if (options.secure) cookie += '; Secure';
    if (options.sameSite) cookie += `; SameSite=${options.sameSite}`;
    cookie += `; Path=${options.path || '/'}`;
    if (options.domain) cookie += `; Domain=${options.domain}`;

    const existing = res.getHeader('Set-Cookie');
    if (existing) {
        res.setHeader('Set-Cookie', Array.isArray(existing) ? [...existing, cookie] : [existing, cookie]);
    } else {
        res.setHeader('Set-Cookie', cookie);
    }
}

function clearCookie(res, name) {
    setCookie(res, name, '', { maxAge: 0, path: '/' });
}

function generateRandomString(length = 64) {
    return crypto.randomBytes(length).toString('base64url');
}

function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
}

function verifyPassword(password, hashedPassword) {
    const [salt, hash] = hashedPassword.split(':');
    const verifyHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === verifyHash;
}

function createSession(user) {
    const payload = {
        userId: user.discordUserId,
        username: user.username,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 6,
    };

    return jwt.sign(payload, process.env.SESSION_SECRET, { algorithm: 'HS256' });
}

function verifySession(token) {
    try {
        return jwt.verify(token, process.env.SESSION_SECRET, { algorithms: ['HS256'] });
    } catch (error) {
        return null;
    }
}

async function verifySessionWithDatabase(token) {
    try {
        const decoded = jwt.verify(token, process.env.SESSION_SECRET, { algorithms: ['HS256'] });

        if (!decoded || !decoded.userId) {
            console.log('❌ Invalid session token structure');
            return null;
        }

        const userExists = await checkUserExistsInDatabase(decoded.userId);
        if (!userExists) {
            console.log(`❌ Session validation failed: User ${decoded.userId} no longer exists in database`);
            return null;
        }

        console.log(`✅ Session validated for user: ${decoded.username} (${decoded.userId})`);
        return decoded;
    } catch (error) {
        console.log(`❌ Session verification failed: ${error.message}`);
        return null;
    }
}

async function checkUserExistsInDatabase(discordUserId) {
    if (!db) {
        return false;
    }

    try {
        const query = await db.collection('vnpro_users').where('discordUserId', '==', discordUserId).get();
        return !query.empty;
    } catch (error) {
        console.error('❌ Error checking user existence in database:', error);
        return false;
    }
}

function getPremiumHtml() {
    return `
        <header class="pro-header" role="banner">
            <p class="eyebrow">Void Network PRO Client</p>
            <h1>Welcome to VN PRO Client!</h1>
            <p class="lede">Your membership unlocks Special features to make your experience better!</p>
        </header>
        <section class="features-grid" aria-label="Void Network PRO Client features">
            <article class="feature-card" onclick="openChat()" style="cursor: pointer;">
                <div class="feature-icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>
                </div>
                <h2>VN PRO Chat</h2>
                <p>Chat with other Void network PRO members</p>
            </article>
            <article class="feature-card" onclick="openTroll()" style="cursor: pointer;">
                <div class="feature-icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="M8 9h.01"/><path d="M16 9h.01"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9l-1-1"/><path d="M15 9l1-1"/></svg>
                </div>
                <h2>Troll Users</h2>
                <p>Have some fun trolling Void Network users!</p>
            </article>
            <article class="feature-card" onclick="openPrivateDM()" style="cursor: pointer;">
                <div class="feature-icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-dashed-icon lucide-message-circle-dashed"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M17.609 3.72a10 20 0 0 1 2.69 2.7"/><path d="M2.182 13.9a10 10 0 0 1 0-3.8"/><path d="M20.28 17.61a10 10 0 0 1-2.7 2.69"/><path d="M21.818 10.1a10 10 0 0 1 0 3.8"/><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"/><path d="m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98"/></svg>
                </div>
                <h2>Private DM across PRO users</h2>
                <p>Message any Void Network PRO member privatly!</p>
            </article>
        </section>
    `;
}

function validateEnvironment() {
    const required = [
        'SESSION_SECRET',
        'FIREBASE_PROJECT_ID',
        'FIREBASE_PRIVATE_KEY',
        'FIREBASE_CLIENT_EMAIL'
    ];

    const missing = required.filter((key) => !process.env[key]);
    if (missing.length) {
        throw new Error(`Missing environment configuration: ${missing.join(', ')}`);
    }
}

function readBody(req) {
    return new Promise((resolve, reject) => {
        if (req.body && typeof req.body === 'object') {
            resolve(req.body);
            return;
        }

        let data = '';
        req.on('data', chunk => { data += chunk; });
        req.on('end', () => {
            try {
                resolve(data ? JSON.parse(data) : {});
            } catch (e) {
                resolve({});
            }
        });
        req.on('error', () => resolve({}));

        setTimeout(() => resolve({}), 1000);
    });
}

function sendJson(res, statusCode, payload) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(payload));
}

function enforceCsrf(req, res, body) {
    const cookies = parseCookies(req.headers.cookie);
    const cookieToken = cookies.vn_csrf;
    const headerToken = req.headers['x-csrf-token'] || body?.csrfToken;

    if (!cookieToken || !headerToken || cookieToken !== headerToken) {
        sendJson(res, 403, { error: 'Invalid CSRF token' });
        return false;
    }

    return true;
}

function rotateCsrf(res) {
    const token = generateRandomString(32);
    setCookie(res, 'vn_csrf', token, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        path: '/',
        maxAge: 60 * 60,
    });
    return token;
}

function sanitizeSession(res) {
    clearCookie(res, 'vn_session');
}

function validateUsername(username) {
    if (!username || typeof username !== 'string') {
        return { valid: false, error: 'Username is required' };
    }

    const trimmed = username.trim();
    if (trimmed.length < 2) {
        return { valid: false, error: 'Username must be at least 2 characters' };
    }
    if (trimmed.length > 32) {
        return { valid: false, error: 'Username must be 32 characters or less' };
    }

    if (!/^[a-zA-Z0-9._-]+$/.test(trimmed)) {
        return { valid: false, error: 'Username can only contain letters, numbers, periods, underscores, and hyphens' };
    }

    return { valid: true, username: trimmed };
}

async function addUser(username, password, discordUserId) {
    if (!db) {
        throw new Error('Firebase not initialized');
    }

    try {
        console.log(`🔍 Adding user: ${username} (Discord ID: ${discordUserId})`);

        const usernameValidation = validateUsername(username);
        if (!usernameValidation.valid) {
            console.log(`❌ Invalid username format: ${usernameValidation.error}`);
            return { success: false, error: usernameValidation.error };
        }

        const validatedUsername = usernameValidation.username;

        const usernameQuery = await db.collection('vnpro_users').where('username', '==', validatedUsername).get();
        if (!usernameQuery.empty) {
            console.log(`❌ Username ${validatedUsername} already exists`);
            return { success: false, error: 'Username already exists' };
        }

        const discordQuery = await db.collection('vnpro_users').where('discordUserId', '==', discordUserId).get();
        if (!discordQuery.empty) {
            const existingDoc = discordQuery.docs[0];
            const existingUser = existingDoc.data();

            if (existingUser.passwordHash) {
                console.log(`❌ Discord user ${discordUserId} already has credentials with username: ${existingUser.username}`);
                return { success: false, error: `You already have credentials with username: ${existingUser.username}` };
            }

            console.log(`🔄 Discord user ${discordUserId} password was reset, updating credentials`);
            const passwordHash = hashPassword(password);

            await existingDoc.ref.update({
                username: validatedUsername,
                passwordHash,
                updatedAt: admin.firestore.FieldValue.serverTimestamp()
            });

            console.log(`✅ Updated credentials for Discord user: ${discordUserId}`);
            return { success: true };
        }

        const passwordHash = hashPassword(password);
        const userDoc = {
            username: validatedUsername,
            passwordHash,
            discordUserId,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        };

        await db.collection('vnpro_users').add(userDoc);

        console.log(`✅ User created: ${validatedUsername} (Discord ID: ${discordUserId})`);
        return { success: true };

    } catch (error) {
        console.error('❌ Error adding user to Firestore:', error);
        return { success: false, error: 'Database error' };
    }
}

async function userExistsCheck(discordUserId) {
    if (!db) {
        throw new Error('Firebase not initialized');
    }

    try {
        console.log(`🔍 Checking if Discord user ${discordUserId} exists...`);

        const query = await db.collection('vnpro_users').where('discordUserId', '==', discordUserId).get();

        if (query.empty) {
            console.log(`❌ No user found for Discord ID: ${discordUserId}`);
            return { exists: false };
        }

        const userDoc = query.docs[0];
        const userData = userDoc.data();

        console.log(`✅ Found existing user: ${userData.username} for Discord ID: ${discordUserId}, hasPassword: ${!!userData.passwordHash}`);
        return {
            exists: true,
            username: userData.username,
            hasPassword: !!userData.passwordHash
        };

    } catch (error) {
        console.error('❌ Error checking user existence:', error);
        return { exists: false };
    }
}

async function listUsers() {
    if (!db) {
        throw new Error('Firebase not initialized');
    }

    try {
        console.log(`📋 Listing all users from Firestore...`);

        const snapshot = await db.collection('vnpro_users').orderBy('createdAt', 'desc').get();

        const users = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            users.push({
                id: doc.id,
                username: data.username,
                userId: data.discordUserId,
                createdAt: data.createdAt?.toMillis() || Date.now(),
                hasPassword: !!data.passwordHash
            });
        });

        console.log(`✅ Retrieved ${users.length} users from Firestore`);
        return { success: true, users };

    } catch (error) {
        console.error('❌ Error listing users:', error);
        return { success: false, error: 'Database error' };
    }
}

async function resetUserPassword(username) {
    if (!db) {
        throw new Error('Firebase not initialized');
    }

    try {
        console.log(`🔄 Attempting to reset password for username: ${username}`);

        const query = await db.collection('vnpro_users').where('username', '==', username).get();

        if (query.empty) {
            console.log(`❌ User not found: ${username}`);
            return { success: false, error: 'User not found' };
        }

        const userDoc = query.docs[0];
        const userData = userDoc.data();

        await userDoc.ref.update({
            passwordHash: null,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });

        console.log(`✅ Password reset for user: ${userData.username} (Discord ID: ${userData.discordUserId})`);

        return {
            success: true,
            user: {
                username: userData.username,
                userId: userData.discordUserId
            }
        };

    } catch (error) {
        console.error('❌ Error resetting password:', error);
        return { success: false, error: 'Database error' };
    }
}

async function deleteUser(discordUserId) {
    if (!db) {
        throw new Error('Firebase not initialized');
    }

    try {
        console.log(`🗑️ Attempting to delete user with Discord ID: ${discordUserId}`);

        const query = await db.collection('vnpro_users').where('discordUserId', '==', discordUserId).get();

        if (query.empty) {
            console.log(`❌ No user found with Discord ID: ${discordUserId}`);
            return { success: false, error: 'User not found' };
        }

        const userDoc = query.docs[0];
        const userData = userDoc.data();

        await userDoc.ref.delete();

        console.log(`✅ User deleted: ${userData.username} (Discord ID: ${discordUserId})`);

        return {
            success: true,
            deletedUser: {
                username: userData.username,
                userId: discordUserId
            }
        };

    } catch (error) {
        console.error('❌ Error deleting user:', error);
        return { success: false, error: 'Database error' };
    }
}

async function getUserByUsername(username) {
    if (!db) {
        throw new Error('Firebase not initialized');
    }

    try {
        const query = await db.collection('vnpro_users').where('username', '==', username).get();

        if (query.empty) {
            return null;
        }

        const userDoc = query.docs[0];
        const userData = userDoc.data();

        return {
            id: userDoc.id,
            username: userData.username,
            passwordHash: userData.passwordHash,
            discordUserId: userData.discordUserId,
            createdAt: userData.createdAt?.toMillis() || Date.now()
        };

    } catch (error) {
        console.error('❌ Error getting user by username:', error);
        return null;
    }
}

async function getUserByClientUsername(username) {
    if (!db) {
        throw new Error('Firebase not initialized');
    }

    try {
        console.log(`🔍 Looking up user by client username: ${username}`);

        const query = await db.collection('vnpro_users').where('username', '==', username).get();

        if (query.empty) {
            console.log(`❌ No user found with username: ${username}`);
            return { success: false, error: 'User not found' };
        }

        const userDoc = query.docs[0];
        const userData = userDoc.data();

        console.log(`✅ Found user: ${userData.username} (Discord ID: ${userData.discordUserId})`);

        return {
            success: true,
            user: {
                id: userDoc.id,
                username: userData.username,
                discordUserId: userData.discordUserId,
                hasPassword: !!userData.passwordHash,
                createdAt: userData.createdAt?.toMillis() || Date.now()
            }
        };

    } catch (error) {
        console.error('❌ Error getting user by username:', error);
        return { success: false, error: 'Database error' };
    }
}

async function searchUserByDiscordId(discordUserId) {
    if (!db) {
        throw new Error('Firebase not initialized');
    }

    try {
        console.log(`🔍 Searching for user by Discord ID: ${discordUserId}`);

        const query = await db.collection('vnpro_users').where('discordUserId', '==', discordUserId).get();

        if (query.empty) {
            console.log(`❌ No user found with Discord ID: ${discordUserId}`);
            return { success: false, error: 'User not found' };
        }

        const userDoc = query.docs[0];
        const userData = userDoc.data();

        console.log(`✅ Found user: ${userData.username} (Discord ID: ${discordUserId})`);

        return {
            success: true,
            user: {
                id: userDoc.id,
                username: userData.username,
                discordUserId: userData.discordUserId,
                hasPassword: !!userData.passwordHash,
                createdAt: userData.createdAt?.toMillis() || Date.now()
            }
        };

    } catch (error) {
        console.error('❌ Error searching user by Discord ID:', error);
        return { success: false, error: 'Database error' };
    }
}

export { addUser, userExistsCheck, listUsers, resetUserPassword, deleteUser, getUserByClientUsername, searchUserByDiscordId };

export default async function handler(req, res) {
    try {
        validateEnvironment();
    } catch (error) {
        console.error('Environment validation failed:', error.message);
        res.statusCode = 500;
        res.end('Server configuration error');
        return;
    }

    if (!db) {
        console.error('Firebase not initialized');
        res.statusCode = 500;
        res.end('Database unavailable');
        return;
    }

    const origin = req.headers.origin || '';
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Security-Policy', "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; base-uri 'self'; form-action 'self'");
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
    }

    if (req.method !== 'POST') {
        sendJson(res, 405, { error: 'Method not allowed' });
        return;
    }

    if (!rateLimit(req)) {
        sendJson(res, 429, { error: 'Too many requests' });
        return;
    }

    const cookies = parseCookies(req.headers.cookie);
    const body = await readBody(req);
    const action = body.action;

    if (!action) {
        sendJson(res, 400, { error: 'Missing action' });
        return;
    }

    console.log(`API request: ${action} from ${req.headers['x-forwarded-for']?.split(',')[0] || 'unknown'}`);

    try {
        if (action === 'bootstrap') {
            const csrfToken = rotateCsrf(res);
            const sessionToken = cookies.vn_session;
            if (!sessionToken) {
                sendJson(res, 200, { csrfToken, authenticated: false });
                return;
            }

            const session = await verifySessionWithDatabase(sessionToken);
            if (!session) {
                sanitizeSession(res);
                sendJson(res, 200, { csrfToken, authenticated: false });
                return;
            }

            sendJson(res, 200, {
                csrfToken,
                authenticated: true,
                html: getPremiumHtml(),
            });
            return;
        }

        if (action === 'login') {
            const { username, password } = body;

            if (!username || !password) {
                sendJson(res, 400, { error: 'Username and password are required' });
                return;
            }

            const user = await getUserByUsername(username);
            if (!user) {
                sendJson(res, 401, { error: 'Invalid username or password' });
                return;
            }

            if (!user.passwordHash) {
                sendJson(res, 401, { error: 'Your password has been reset. Please check your Discord DMs for instructions to set a new password.' });
                return;
            }

            if (!verifyPassword(password, user.passwordHash)) {
                sendJson(res, 401, { error: 'Invalid username or password' });
                return;
            }

            const sessionToken = createSession(user);
            setCookie(res, 'vn_session', sessionToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'Strict',
                path: '/',
                maxAge: 60 * 60 * 6,
            });

            const csrfToken = rotateCsrf(res);

            console.log(`User ${username} authenticated successfully`);

            sendJson(res, 200, {
                csrfToken,
                html: getPremiumHtml(),
            });
            return;
        }

        if (action === 'content') {
            if (!enforceCsrf(req, res, body)) {
                return;
            }

            const sessionToken = cookies.vn_session;
            if (!sessionToken) {
                sendJson(res, 401, { error: 'Not authenticated' });
                return;
            }

            const session = await verifySessionWithDatabase(sessionToken);
            if (!session) {
                sanitizeSession(res);
                sendJson(res, 401, { error: 'Session expired' });
                return;
            }

            sendJson(res, 200, { html: getPremiumHtml() });
            return;
        }

        if (action === 'bot_add_user') {
            const { username, password, discordUserId, botSecret } = body;

            if (botSecret !== process.env.BOT_SECRET) {
                console.log('❌ Invalid bot secret for bot_add_user');
                sendJson(res, 403, { error: 'Unauthorized' });
                return;
            }

            if (!username || !password || !discordUserId) {
                sendJson(res, 400, { error: 'Missing required fields' });
                return;
            }

            const result = await addUser(username, password, discordUserId);
            sendJson(res, result.success ? 200 : 400, result);
            return;
        }

        if (action === 'bot_check_user') {
            const { discordUserId, botSecret } = body;

            if (botSecret !== process.env.BOT_SECRET) {
                console.log('❌ Invalid bot secret for bot_check_user');
                sendJson(res, 403, { error: 'Unauthorized' });
                return;
            }

            if (!discordUserId) {
                sendJson(res, 400, { error: 'Missing Discord user ID' });
                return;
            }

            const result = await userExistsCheck(discordUserId);
            sendJson(res, 200, result);
            return;
        }

        if (action === 'bot_list_users') {
            const { botSecret } = body;

            if (botSecret !== process.env.BOT_SECRET) {
                console.log('❌ Invalid bot secret for bot_list_users');
                sendJson(res, 403, { error: 'Unauthorized' });
                return;
            }

            const result = await listUsers();
            sendJson(res, 200, result);
            return;
        }

        if (action === 'bot_reset_password') {
            const { username, botSecret } = body;

            if (botSecret !== process.env.BOT_SECRET) {
                console.log('❌ Invalid bot secret for bot_reset_password');
                sendJson(res, 403, { error: 'Unauthorized' });
                return;
            }

            if (!username) {
                sendJson(res, 400, { error: 'Missing username' });
                return;
            }

            const result = await resetUserPassword(username);
            sendJson(res, result.success ? 200 : 400, result);
            return;
        }

        if (action === 'bot_delete_user') {
            const { discordUserId, botSecret } = body;

            if (botSecret !== process.env.BOT_SECRET) {
                console.log('❌ Invalid bot secret for bot_delete_user');
                sendJson(res, 403, { error: 'Unauthorized' });
                return;
            }

            if (!discordUserId) {
                sendJson(res, 400, { error: 'Missing Discord user ID' });
                return;
            }

            const result = await deleteUser(discordUserId);
            sendJson(res, result.success ? 200 : 400, result);
            return;
        }

        if (action === 'bot_get_user_by_username') {
            const { username, botSecret } = body;

            if (botSecret !== process.env.BOT_SECRET) {
                console.log('❌ Invalid bot secret for bot_get_user_by_username');
                sendJson(res, 403, { error: 'Unauthorized' });
                return;
            }

            if (!username) {
                sendJson(res, 400, { error: 'Missing username' });
                return;
            }

            const result = await getUserByClientUsername(username);
            sendJson(res, result.success ? 200 : 404, result);
            return;
        }

        if (action === 'bot_search_by_discord_id') {
            const { discordUserId, botSecret } = body;

            if (botSecret !== process.env.BOT_SECRET) {
                console.log('❌ Invalid bot secret for bot_search_by_discord_id');
                sendJson(res, 403, { error: 'Unauthorized' });
                return;
            }

            if (!discordUserId) {
                sendJson(res, 400, { error: 'Missing Discord user ID' });
                return;
            }

            const result = await searchUserByDiscordId(discordUserId);
            sendJson(res, result.success ? 200 : 404, result);
            return;
        }

        console.log(`Unknown action: ${action}`);
        sendJson(res, 400, { error: 'Unknown action: ' + action });
    } catch (error) {
        console.error('VoidPro API error:', error);
        sendJson(res, 500, { error: 'Internal server error' });
    }
}
