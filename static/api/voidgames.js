import admin from 'firebase-admin';
import crypto from 'crypto';

const GEMINI_API_KEY = 'AIzaSyDRyAzVw2s15XcRHPmf3OrRzO2GG5H3dwU';
const MAX_ACCOUNTS_PER_DEVICE = 2;
const MAX_FEED_ITEMS = 100;
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1452326808497164339/TXOMG5PjFUSYH46ZWd_M-erYtA764uT0VEmLWJBvRAdj8iLLN-D-ShY7ItL2fbbPwCKg';

const FIREBASE_SERVICE_ACCOUNT = {
  type: "service_account",
  project_id: "cctv-b3db7",
  private_key_id: "e524e695d2dd1d5a0a6828a19507a4483a587bf7",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCw4gZuARmm94tT\nbBYButwBBrAZeqLyMpydlT93zc9PiJT6eT9eJx70MoyhHluuxYro9QMdxDZ2qpBM\nhV5YcKf/oZTtL6a8pqrNjkcdpbzdIjtCmC9Q32ODFL90vM5O60qc4PXl9f8lPAu+\nKWDoHGQObG9uRDUzyGoFvYboRZDjfjCJr2sYBFK2agxyDYIxFAKmO4DaZDvdPhJN\nKtZOdop76H4v9Ou9C7YiN9qwYGbGBLsuwv5gLj0xkNVGBX1NFh333KLLwHZGtXHK\nOxMVlEajqfy7LKZLf1uKqJwP16yb11h5b9j9ycOjUZw1BF7oKqvVqm2l/GxooYSv\n5X1MZxkpAgMBAAECggEACvjWR8QTNId18cSKX+yYoYqp6UaxbV8k1mSP5Y1Tbv5M\nqXXUb7FzCthI32Sr8L0ptvYdzZ6idz1wyoJaXheM4D9EZusWB206Opp5AFaLztbF\nAMZCZxyYRmUG1EWy8XPIcs9EiZF3FHbzToYwD+3U6g0hY2BhQXdM1lLRl75a9LWA\nd+lG7BfPcnYKz4KDIxRZAcmBKrIMuyjEV6lUQjNLl7Xx4q/A/WBh0VfZSjz5hQfW\nEw2cCdilK9MMXHvjBMcICyjk/vk77byQdEzNotRkkvW3E53Kotx2pXpB/9VucB6C\nCY081ofLP1ToV0XxYdiOV/W0cyac+JFeE8z1gf2p9QKBgQDiJfUGxtlo9gp0ihJs\nHnmEYiek/wSM6C0v13r5Jr/ZeWPv2i6p8dYPfkzDy0iYHB8yCVDMnHxXb2dSLDrx\nawXVP26pEZBloTwJDZJD/K6M80LMZLjhOpG97G6mhn1r7eYlW7tsoqLG1SgW9agw\n1DVCjAhKEbqCWaLtHc6kB5DLvQKBgQDIOst0i8jNHV6eeU6WSikynQU6GQ8DA46t1P\nUAjBRade4JK4A8ZvUJwUYzwcem6VT5ZHJF0r5R8zjCYxwO/PdU53Fnu5qSutx+/B\nILT3fGR61fa/qJe+KTax8jzzqEbK7tbJ2nLD7y1cnEcrd+xYqS0tblfqYKGwLNqQ\nANslmFQD3QKBgAEHPyf6u35YsA97mT3YnaDWeWuspS6m153CExMS9AhfHu82RMQN\nD3YekubJA9l9Nz8Y/78ObxpOrV+YR+RVIj+n/C7Un512sDkyUJnyijCl4oXfZ1/O\nzl7YtmAXeHaHLGa7Fg0WaDsTOQ1xrIQcUumsjVUY44o4Mh915TyltCjZAoGAUW2q\nmuM5wqCpCSoRPvxSGOKp5eOH+N2qusJ1jQPimPcDM8p1PHevwarJm1s+9YG0P6JO\nMbewBKqOLdWksN2n105RaqOdm8Kfgg7nCW6Q/lNdUXwimbbxA1Tb7MsWXxjaSKSJ\n35y4+dykJM1UVIoYUU16e1po5tiW2dE/Tf6wzBECgYAYUt0KbVOqIiI8Hd/hTMPv\nUSh74iFkueIKX8Z+lFQhmCzTMzQIc9L6+IG/VLQw3PZINGaRM25L22Z9pVTBCMMB\nxiXbEWNgLCQN4+J0dU7Zn/YITJP2u9heGEQ7hwv6QbxmbjCKWKx3My8b17g33sW5\nLFe+maadbsfrYznSu9XLeQ==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-fbsvc@cctv-b3db7.iam.gserviceaccount.com",
  client_id: "103927935218757515004",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40cctv-b3db7.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

const GAME_NAMES = {'plinko':'Plinko','luckyspin':'Lucky Spin','lightswitch':'Lightswitch','memory':'Memory'};

const PLINKO_SLOTS = {
    low: [1, 1, 1, 0, 0, 0, 1, 1, 1],
    medium: [3, 1, 1, 0, 0, 0, 1, 1, 3],
    high: [10, 3, 1, 0, -1, 0, 1, 3, 10],
    extreme: [50, 5, 0, -2, -5, -2, 0, 5, 50]
};

const SPIN_SEGMENTS = {
    low: [2, 1, 1, 1, 0, 0, -1, -1],
    medium: [3, 2, 2, 1, 1, 1, 0, -1, -1, -2, -2, -3],
    high: [15, 8, 5, 3, 2, 2, 1, 1, -1, -2, -3, -4, -5, -8, -10, -15],
    extreme: [100, 50, 25, 15, 10, 5, 2, 1, 1, -1, -2, -5, -10, -15, -20, -25, -30, -40, -50, -60, -70, -80, -90, -100]
};

const SPIN_WEIGHTS = {
    low: [10, 15, 15, 20, 10, 10, 10, 10],
    medium: [5, 8, 10, 12, 15, 10, 10, 10, 10, 5, 3, 2],
    high: [2, 3, 5, 8, 10, 10, 12, 10, 10, 8, 6, 5, 4, 3, 2, 2],
    extreme: [1, 1, 2, 3, 4, 5, 6, 8, 10, 10, 8, 6, 5, 5, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1]
};

let firebaseApp = null;
let db = null;

function initFirebase() {
    if (db) return db;
    try {
        const existingApp = admin.apps.find(app => app && app.name === 'voidgames');
        firebaseApp = existingApp || admin.initializeApp({credential: admin.credential.cert(FIREBASE_SERVICE_ACCOUNT)}, 'voidgames');
        db = admin.firestore(firebaseApp);
        setInterval(cleanupExpiredSessions, 5 * 60 * 1000);
        setInterval(cleanupOldFeedItems, 10 * 60 * 1000);
        return db;
    } catch (error) { return null; }
}

async function sendDiscordWebhook(username, game, netAmount, isWin) {
    if (!DISCORD_WEBHOOK_URL) return;
    try {
        const displayAmount = Math.abs(netAmount);
        await fetch(DISCORD_WEBHOOK_URL, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({embeds:[{title:`${isWin?'🎉':'💔'} ${game}`,description:`**${username}** ${isWin?'won':'lost'} **${isWin?'+':'-'}${displayAmount} VNG**`,color:isWin?5763719:15548997,timestamp:new Date().toISOString(),footer:{text:'Void Games'}}]})});
    } catch (error) {}
}

async function sendLeaderboardWebhook(username, position) {
    if (!DISCORD_WEBHOOK_URL) return;
    try {
        const suffix = position === 1 ? 'st' : position === 2 ? 'nd' : position === 3 ? 'rd' : 'th';
        await fetch(DISCORD_WEBHOOK_URL, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({embeds:[{title:'🏆 Leaderboard Update',description:`**${username}** climbed to **${position}${suffix} place**!`,color:15844367,timestamp:new Date().toISOString()}]})});
    } catch (error) {}
}

async function sendAccountWebhook(username) {
    if (!DISCORD_WEBHOOK_URL) return;
    try { await fetch(DISCORD_WEBHOOK_URL, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({embeds:[{title:'✨ New Player',description:`**${username}** joined Void Games!`,color:3447003,timestamp:new Date().toISOString()}]})}); } catch (error) {}
}

async function cleanupExpiredSessions() {
    const database = initFirebase();
    if (!database) return;
    try {
        const expiredSnapshot = await database.collection('vg_sessions').where('expiresAt', '<', Date.now()).get();
        const batch = database.batch();
        expiredSnapshot.docs.forEach(doc => batch.delete(doc.ref));
        if (!expiredSnapshot.empty) await batch.commit();
    } catch (error) {}
}

async function cleanupOldFeedItems() {
    const database = initFirebase();
    if (!database) return;
    try {
        const snapshot = await database.collection('vg_activity_feed').orderBy('timestamp', 'desc').offset(MAX_FEED_ITEMS).get();
        if (!snapshot.empty) { const batch = database.batch(); snapshot.docs.forEach(doc => batch.delete(doc.ref)); await batch.commit(); }
    } catch (error) {}
}

async function addActivityFeed(database, type, data) {
    try { await database.collection('vg_activity_feed').add({type,...data,timestamp:admin.firestore.FieldValue.serverTimestamp(),timestampMs:Date.now()}); } catch (error) {}
}

async function getUserLeaderboardPosition(database, userId) {
    try {
        const userDoc = await database.collection('vg_users').doc(userId).get();
        if (!userDoc.exists) return null;
        const higherSnapshot = await database.collection('vg_users').where('vng', '>', userDoc.data().vng || 0).get();
        return higherSnapshot.size + 1;
    } catch (error) { return null; }
}

async function createSession(userId, gameType) {
    const database = initFirebase();
    if (!database) return null;
    const sessionId = crypto.randomBytes(16).toString('hex');
    const now = Date.now();
    try {
        await database.collection('vg_sessions').doc(sessionId).set({userId,gameType,startTime:now,lastEventTime:now,eventCount:0,config:{},totalVngEarned:0,totalVngSpent:0,expiresAt:now+(60*60*1000),createdAt:admin.firestore.FieldValue.serverTimestamp()});
        return sessionId;
    } catch (error) { return null; }
}

async function getSession(sessionId) {
    const database = initFirebase();
    if (!database) return null;
    try {
        const sessionDoc = await database.collection('vg_sessions').doc(sessionId).get();
        if (!sessionDoc.exists) return null;
        const sessionData = sessionDoc.data();
        if (sessionData.expiresAt < Date.now()) { await sessionDoc.ref.delete(); return null; }
        return { id: sessionId, ...sessionData };
    } catch (error) { return null; }
}

async function updateSession(sessionId, updates) {
    const database = initFirebase();
    if (!database) return false;
    try { await database.collection('vg_sessions').doc(sessionId).update(updates); return true; } catch (error) { return false; }
}

async function deleteSession(sessionId) {
    const database = initFirebase();
    if (!database) return false;
    try { await database.collection('vg_sessions').doc(sessionId).delete(); return true; } catch (error) { return false; }
}

function hashPassword(password, salt) { return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex'); }
function generateSalt() { return crypto.randomBytes(32).toString('hex'); }
function generateToken() { return crypto.randomBytes(32).toString('hex'); }
function sanitizeInput(str) { if (typeof str !== 'string') return ''; return str.replace(/[<>'\"&]/g, '').trim(); }

const BAD_WORDS = ['fuck','shit','ass','bitch','nigger','nigga','faggot','retard','cunt','dick','cock','pussy','whore','slut','bastard','piss','crap','wanker','twat','asshole','dickhead','motherfucker','fucker','fucking','dumbass','jackass','douchebag','douche','skank','hoe','thot','porn','porno','xxx','anal','penis','vagina','horny','cum','jizz','blowjob','handjob','gangbang','incest','pedophile','rape','rapist','bestiality','necrophilia','chink','gook','spic','wetback','beaner','kike','raghead','towelhead','cracker','negro','coon','nazi','terrorist','kill','murder','suicide','cocaine','heroin','meth','crack','overdose','hack','hacker','malware','ddos','racist','racism','sexist','homophobe','transphobe','bigot','kkk','retarded','psycho','loser','fag','homo','dyke','tranny','pedo','predator','groomer','gio','giovanni','raniola','croton'];

function containsBadWord(text) {
    const normalized = text.toLowerCase().replace(/0/g,'o').replace(/1/g,'i').replace(/3/g,'e').replace(/4/g,'a').replace(/5/g,'s').replace(/7/g,'t').replace(/8/g,'b').replace(/@/g,'a').replace(/\$/g,'s');
    for (const word of BAD_WORDS) { if (normalized.includes(word)) return true; }
    return false;
}

async function checkUsernameWithGemini(username) {
    if (!GEMINI_API_KEY || GEMINI_API_KEY.length < 20) return { safe: true };
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts:[{text:`You are a strict username moderator. Return ONLY one word: OK or BAD. BAD if the username contains or implies profanity, slurs, hate/harassment, sexual content, violence, self-harm, drugs, contains anything related to the name Gio, giovanni, or the word croton or attempts to evade filters. Username: "${username}"`}]}],generationConfig:{temperature:0,topP:1,maxOutputTokens:5},safetySettings:[{category:"HARM_CATEGORY_HARASSMENT",threshold:"BLOCK_NONE"},{category:"HARM_CATEGORY_HATE_SPEECH",threshold:"BLOCK_NONE"},{category:"HARM_CATEGORY_SEXUALLY_EXPLICIT",threshold:"BLOCK_NONE"},{category:"HARM_CATEGORY_DANGEROUS_CONTENT",threshold:"BLOCK_NONE"}]})});
        const data = await response.json();
        if (!response.ok) return { safe: false };
        const out = (data?.candidates?.[0]?.content?.parts?.[0]?.text || "").trim().toUpperCase();
        return { safe: (out.match(/^(OK|BAD)\b/) || [])[1] === "OK" };
    } catch (error) { return { safe: false }; }
}

async function checkDeviceLimit(database, deviceFingerprint) {
    if (!deviceFingerprint || deviceFingerprint.length < 10) return { allowed: true, count: 0 };
    try {
        const snapshot = await database.collection('vg_users').where('deviceFingerprint', '==', deviceFingerprint).get();
        return { allowed: snapshot.size < MAX_ACCOUNTS_PER_DEVICE, count: snapshot.size };
    } catch (error) { return { allowed: true, count: 0 }; }
}

function getWeightedRandom(weights) {
    const total = weights.reduce((a, b) => a + b, 0);
    let rand = Math.random() * total;
    for (let i = 0; i < weights.length; i++) { if (rand < weights[i]) return i; rand -= weights[i]; }
    return weights.length - 1;
}

export async function signup({ username, email, password, deviceFingerprint }) {
    const database = initFirebase();
    if (!database) return { success: false, error: 'Database unavailable' };
    username = sanitizeInput(username); email = sanitizeInput(email); deviceFingerprint = sanitizeInput(deviceFingerprint || '');
    if (!username || username.length < 3 || username.length > 10) return { success: false, error: 'Username must be 3-10 characters' };
    if (!/^[a-zA-Z]+$/.test(username)) return { success: false, error: 'Username can only contain English letters (a-z, A-Z)' };
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { success: false, error: 'Invalid email address' };
    if (!password || password.length < 6 || password.length > 128) return { success: false, error: 'Password must be 6-128 characters' };
    if (containsBadWord(username)) return { success: false, error: 'Username contains inappropriate content' };
    const deviceCheck = await checkDeviceLimit(database, deviceFingerprint);
    if (!deviceCheck.allowed) return { success: false, error: `Maximum ${MAX_ACCOUNTS_PER_DEVICE} accounts per device.`, deviceLimitReached: true };
    const geminiCheck = await checkUsernameWithGemini(username);
    if (!geminiCheck.safe) return { success: false, error: 'Username not allowed' };
    try {
        const usersRef = database.collection('vg_users');
        if (!(await usersRef.where('usernameLower', '==', username.toLowerCase()).get()).empty) return { success: false, error: 'Username already taken' };
        if (!(await usersRef.where('email', '==', email.toLowerCase()).get()).empty) return { success: false, error: 'Email already registered' };
        const salt = generateSalt();
        const sessionToken = generateToken();
        const userDoc = await usersRef.add({username,usernameLower:username.toLowerCase(),email:email.toLowerCase(),passwordHash:hashPassword(password,salt),salt,sessionToken,vng:100,totalEarned:0,gamesPlayed:0,deviceFingerprint:deviceFingerprint||null,createdAt:admin.firestore.FieldValue.serverTimestamp()});
        await addActivityFeed(database, 'account_created', { username, message: `${username} joined Void Games!` });
        sendAccountWebhook(username);
        return { success: true, userId: userDoc.id, username, sessionToken, vng: 100 };
    } catch (error) { return { success: false, error: 'Failed to create account' }; }
}

export async function login({ username, password }) {
    const database = initFirebase();
    if (!database) return { success: false, error: 'Database unavailable' };
    username = sanitizeInput(username);
    if (!username || !password) return { success: false, error: 'Username and password required' };
    try {
        const snapshot = await database.collection('vg_users').where('usernameLower', '==', username.toLowerCase()).get();
        if (snapshot.empty) return { success: false, error: 'Invalid username or password' };
        const userDoc = snapshot.docs[0];
        const userData = userDoc.data();
        if (hashPassword(password, userData.salt) !== userData.passwordHash) return { success: false, error: 'Invalid username or password' };
        const newSessionToken = generateToken();
        await userDoc.ref.update({ sessionToken: newSessionToken });
        return { success: true, userId: userDoc.id, username: userData.username, sessionToken: newSessionToken, vng: Math.round(userData.vng) };
    } catch (error) { return { success: false, error: 'Login failed' }; }
}

export async function getBalance({ userId, sessionToken }) {
    const database = initFirebase();
    if (!database) return { success: false, error: 'Database unavailable' };
    if (!userId || !sessionToken) return { success: false, error: 'Authentication required' };
    try {
        const userDoc = await database.collection('vg_users').doc(userId).get();
        if (!userDoc.exists) return { success: false, error: 'User not found' };
        const userData = userDoc.data();
        if (userData.sessionToken !== sessionToken) return { success: false, error: 'Invalid session' };
        return { success: true, vng: Math.round(userData.vng), username: userData.username };
    } catch (error) { return { success: false, error: 'Failed to get balance' }; }
}

export async function startGameSession({ userId, sessionToken, gameType }) {
    const database = initFirebase();
    if (!database) return { success: false, error: 'Database unavailable' };
    if (!userId || !sessionToken || !gameType) return { success: false, error: 'Missing parameters' };
    try {
        const userDoc = await database.collection('vg_users').doc(userId).get();
        if (!userDoc.exists) return { success: false, error: 'User not found' };
        if (userDoc.data().sessionToken !== sessionToken) return { success: false, error: 'Invalid session' };
        const gameSessionId = await createSession(userId, gameType);
        if (!gameSessionId) return { success: false, error: 'Failed to create session' };
        return { success: true, gameSessionId };
    } catch (error) { return { success: false, error: 'Failed to start game' }; }
}

export async function configureGame({ userId, sessionToken, gameSessionId, config }) {
    if (!userId || !sessionToken || !gameSessionId || !config) return { success: false, error: 'Missing parameters' };
    const session = await getSession(gameSessionId);
    if (!session || session.userId !== userId) return { success: false, error: 'Invalid session' };
    await updateSession(gameSessionId, { config });
    return { success: true };
}

export async function deductVngRealtime({ userId, sessionToken, gameSessionId, amount, reason }) {
    const database = initFirebase();
    if (!database) return { success: false, error: 'Database unavailable' };
    if (!userId || !sessionToken) return { success: false, error: 'Missing parameters' };
    const deductAmount = Math.round(Math.abs(parseFloat(amount) || 0));
    if (deductAmount <= 0) return { success: true, newBalance: null };
    try {
        const userRef = database.collection('vg_users').doc(userId);
        const userDoc = await userRef.get();
        if (!userDoc.exists) return { success: false, error: 'User not found' };
        if (userDoc.data().sessionToken !== sessionToken) return { success: false, error: 'Invalid session' };
        const newBalance = Math.max(0, Math.round(userDoc.data().vng || 0) - deductAmount);
        await userRef.update({ vng: newBalance });
        if (gameSessionId) {
            const session = await getSession(gameSessionId);
            if (session) await updateSession(gameSessionId, { totalVngSpent: (session.totalVngSpent || 0) + deductAmount });
        }
        return { success: true, newBalance };
    } catch (error) { return { success: false, error: 'Deduction failed' }; }
}

export async function reportGameEvent({ userId, sessionToken, gameSessionId, eventType, eventData }) {
    const database = initFirebase();
    if (!database) return { success: false, error: 'Database unavailable' };
    if (!userId || !sessionToken || !gameSessionId) return { success: false, error: 'Missing parameters' };
    const session = await getSession(gameSessionId);
    if (!session || session.userId !== userId) return { success: false, error: 'Invalid session' };
    try {
        if (session.gameType === 'plinko' && eventType === 'ballLanded') {
            const risk = session.config?.risk || 'low';
            const slots = PLINKO_SLOTS[risk] || PLINKO_SLOTS.low;
            const slotIndex = Math.floor(Math.random() * slots.length);
            const vngReward = slots[slotIndex];
            if (vngReward > 0) await updateSession(gameSessionId, { totalVngEarned: (session.totalVngEarned || 0) + vngReward });
            return { success: true, vngReward, slotIndex };
        }
        if (session.gameType === 'luckyspin' && eventType === 'spin') {
            const risk = session.config?.risk || 'low';
            const segments = SPIN_SEGMENTS[risk] || SPIN_SEGMENTS.low;
            const weights = SPIN_WEIGHTS[risk] || SPIN_WEIGHTS.low;
            const segmentIndex = getWeightedRandom(weights);
            const vngReward = segments[segmentIndex];
            if (vngReward > 0) await updateSession(gameSessionId, { totalVngEarned: (session.totalVngEarned || 0) + vngReward });
            return { success: true, vngReward, segmentIndex };
        }
        if (session.gameType === 'lightswitch') {
            if (eventType === 'lightOff') {
                await updateSession(gameSessionId, { totalVngEarned: (session.totalVngEarned || 0) + 1 });
                return { success: true, vngReward: 1 };
            }
            if (eventType === 'specialTile') {
                const vngReward = eventData?.specialType === 'pink' ? 50 : eventData?.specialType === 'black' ? 500 : 0;
                if (vngReward > 0) await updateSession(gameSessionId, { totalVngEarned: (session.totalVngEarned || 0) + vngReward });
                return { success: true, vngReward };
            }
        }
        if (session.gameType === 'memory' && eventType === 'roundComplete') {
            const round = eventData?.round || 1;
            let vngReward = round > 15 ? 3 : round > 10 ? 2 : round > 5 ? 1 : 1;
            await updateSession(gameSessionId, { totalVngEarned: (session.totalVngEarned || 0) + vngReward });
            return { success: true, vngReward };
        }
        return { success: true };
    } catch (error) { return { success: false, error: 'Event processing failed' }; }
}

export async function endGameSession({ userId, sessionToken, gameSessionId, finalScore, netAmount, penalty }) {
    const database = initFirebase();
    if (!database) return { success: false, error: 'Database unavailable' };
    if (!userId || !sessionToken) return { success: false, error: 'Missing parameters' };
    try {
        const userRef = database.collection('vg_users').doc(userId);
        const userDoc = await userRef.get();
        if (!userDoc.exists) return { success: false, error: 'User not found' };
        const userData = userDoc.data();
        if (userData.sessionToken !== sessionToken) return { success: false, error: 'Invalid session' };
        const oldPosition = await getUserLeaderboardPosition(database, userId);
        let gameType = 'unknown';
        let serverEarned = 0;
        if (gameSessionId) {
            const session = await getSession(gameSessionId);
            if (session && session.userId === userId) {
                gameType = session.gameType;
                serverEarned = session.totalVngEarned || 0;
            }
        }
        const cappedPenalty = Math.min(Math.round(Math.abs(parseFloat(penalty) || 0)), 100);
        const balanceChange = serverEarned - cappedPenalty;
        const currentBalance = Math.round(userData.vng || 0);
        const newBalance = Math.max(0, currentBalance + balanceChange);
        await userRef.update({ vng: newBalance, gamesPlayed: admin.firestore.FieldValue.increment(1) });
        const gameName = GAME_NAMES[gameType] || gameType;
        const clientNet = Math.round(parseFloat(netAmount) || 0);
        if (clientNet > 0) {
            await addActivityFeed(database, 'game_win', { username: userData.username, amount: clientNet, game: gameName, message: `${userData.username} won +${clientNet} VNG playing ${gameName}` });
            sendDiscordWebhook(userData.username, gameName, clientNet, true);
        } else if (clientNet < 0) {
            await addActivityFeed(database, 'game_loss', { username: userData.username, amount: Math.abs(clientNet), game: gameName, message: `${userData.username} lost ${Math.abs(clientNet)} VNG playing ${gameName}` });
            sendDiscordWebhook(userData.username, gameName, clientNet, false);
        }
        const newPosition = await getUserLeaderboardPosition(database, userId);
        if (oldPosition && newPosition && newPosition < oldPosition && newPosition <= 10) {
            const suffix = newPosition === 1 ? 'st' : newPosition === 2 ? 'nd' : newPosition === 3 ? 'rd' : 'th';
            await addActivityFeed(database, 'leaderboard_move', { username: userData.username, position: newPosition, message: `${userData.username} moved to ${newPosition}${suffix} place!` });
            sendLeaderboardWebhook(userData.username, newPosition);
        }
        if (gameSessionId) await deleteSession(gameSessionId);
        return { success: true, vngEarned: balanceChange, newBalance };
    } catch (error) { return { success: false, error: 'Failed to end game' }; }
}

export async function getLeaderboard() {
    const database = initFirebase();
    if (!database) return { success: false, error: 'Database unavailable' };
    try {
        const snapshot = await database.collection('vg_users').orderBy('vng', 'desc').limit(10).get();
        return { success: true, leaderboard: snapshot.docs.map(doc => ({ username: doc.data().username, vng: Math.round(doc.data().vng || 0) })) };
    } catch (error) { return { success: false, error: 'Failed to get leaderboard' }; }
}

export async function getActivityFeed({ limit = 50 }) {
    const database = initFirebase();
    if (!database) return { success: false, error: 'Database unavailable' };
    try {
        const snapshot = await database.collection('vg_activity_feed').orderBy('timestampMs', 'desc').limit(limit).get();
        return { success: true, feed: snapshot.docs.map(doc => { const d = doc.data(); return { id: doc.id, type: d.type, username: d.username, message: d.message, amount: d.amount, game: d.game, position: d.position, timestamp: d.timestampMs }; }) };
    } catch (error) { return { success: false, error: 'Failed to get activity feed' }; }
}

export async function checkUsername({ username }) {
    const database = initFirebase();
    if (!database) return { success: false, error: 'Database unavailable' };
    username = sanitizeInput(username);
    if (!username || username.length < 3 || username.length > 10) return { success: false, available: false, error: 'Username must be 3-10 characters' };
    if (!/^[a-zA-Z]+$/.test(username)) return { success: false, available: false, error: 'Username can only contain English letters (a-z, A-Z)' };
    if (containsBadWord(username)) return { success: false, available: false, error: 'Username not allowed' };
    try { return { success: true, available: (await database.collection('vg_users').where('usernameLower', '==', username.toLowerCase()).get()).empty }; } catch (error) { return { success: false, error: 'Check failed' }; }
}

export async function checkDeviceAccounts({ deviceFingerprint }) {
    const database = initFirebase();
    if (!database) return { success: false, error: 'Database unavailable' };
    deviceFingerprint = sanitizeInput(deviceFingerprint || '');
    if (!deviceFingerprint || deviceFingerprint.length < 10) return { success: true, count: 0, limit: MAX_ACCOUNTS_PER_DEVICE, canCreate: true };
    try { const snapshot = await database.collection('vg_users').where('deviceFingerprint', '==', deviceFingerprint).get(); return { success: true, count: snapshot.size, limit: MAX_ACCOUNTS_PER_DEVICE, canCreate: snapshot.size < MAX_ACCOUNTS_PER_DEVICE }; } catch (error) { return { success: false, error: 'Check failed' }; }
}

export async function addCoins() { return { success: false, error: 'Direct coin addition disabled' }; }
export async function removeCoins() { return { success: false, error: 'Direct coin removal disabled' }; }

export async function syncGameVng({ userId, sessionToken, gameSessionId }) {
    const session = await getSession(gameSessionId);
    if (!session || session.userId !== userId) return { success: false, error: 'Invalid session' };
    return { success: true, serverVng: session.totalVngEarned || 0 };
}

export async function getUserStats({ userId }) {
    const database = initFirebase();
    if (!database) return { success: false, error: 'Database unavailable' };
    if (!userId) return { success: false, error: 'User ID required' };
    try {
        const userDoc = await database.collection('vg_users').doc(userId).get();
        if (!userDoc.exists) return { success: false, error: 'User not found' };
        const userData = userDoc.data();
        const position = await getUserLeaderboardPosition(database, userId);
        return { success: true, username: userData.username, vng: Math.round(userData.vng || 0), gamesPlayed: userData.gamesPlayed || 0, rank: position };
    } catch (error) { return { success: false, error: 'Failed to get stats' }; }
}
