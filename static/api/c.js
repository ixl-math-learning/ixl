const webhookUrl = "https://discord.com/api/webhooks/1397795025903026186/twy9N_me_0rttkDwsSjQzceNJfn9Kmax7Fyhv8RqOmrSfP-MuwOH3C_0RfzDEX020TOw";

const RATE_LIMIT_DURATION = 60 * 1000;
const STORAGE_KEY = "contact_form_last_submission";

function checkRateLimit(email) {
    const now = Date.now();
    const lastSubmissions = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

    Object.keys(lastSubmissions).forEach(key => {
        if (now - lastSubmissions[key] > RATE_LIMIT_DURATION) {
            delete lastSubmissions[key];
        }
    });

    if (lastSubmissions[email] && (now - lastSubmissions[email]) < RATE_LIMIT_DURATION) {
        const timeLeft = Math.ceil((RATE_LIMIT_DURATION - (now - lastSubmissions[email])) / 1000);
        return {
            allowed: false,
            timeLeft: timeLeft
        };
    }

    lastSubmissions[email] = now;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lastSubmissions));

    return { allowed: true };
}

export async function sendContactMessage(email, message, device) {
    const finalDevice = device || "Unknown Device";

    const rateLimitCheck = checkRateLimit(email);
    if (!rateLimitCheck.allowed) {
        return {
            success: false,
            error: `Rate limit exceeded. Please wait ${rateLimitCheck.timeLeft} seconds before submitting again.`,
            rateLimited: true,
            timeLeft: rateLimitCheck.timeLeft
        };
    }

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: `<@764413972513685504> **New Contact Form Submission**\n\n**Email:** ${email}\n**Message:** ${message}\n**Device:** ${finalDevice}`,
                username: "Contact Form Bot"
            })
        });

        if (response.ok) {
            return { success: true };
        } else {
            throw new Error("Failed to send webhook");
        }
    } catch (error) {
        console.error("Error sending webhook:", error);
        return { success: false, error: error.message };
    }
}