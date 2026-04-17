const email = document.getElementById("email");
const messageGroup = document.getElementById("messageGroup");
const message = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");
const charCounter = document.getElementById("charCounter");
const statusMessage = document.getElementById("statusMessage");
const contactForm = document.getElementById("contactForm");

function createParticles() {
    const particles = document.getElementById("particles");
    const particleCount = 75;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 8 + "s";
        particle.style.animationDuration = Math.random() * 4 + 4 + "s";

        const size = Math.random() * 2 + 2;
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        const opacity = Math.random() * 0.5 + 0.3;
        particle.style.opacity = opacity;

        particles.appendChild(particle);
    }
}

function validateEmail(emailAddress) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailAddress);
}

function updateCharCounter() {
    const length = message.value.length;
    charCounter.textContent = length + " character" + (length !== 1 ? "s" : "");

    if (length >= 2) {
        sendBtn.style.display = "block";
        setTimeout(() => sendBtn.classList.add("show"), 10);
    } else {
        sendBtn.classList.remove("show");
        setTimeout(() => {
            if (!sendBtn.classList.contains("show")) {
                sendBtn.style.display = "none";
            }
        }, 300);
    }
}

function showStatus(text, type) {
    statusMessage.textContent = text;
    statusMessage.className = "status-message " + type;
    statusMessage.classList.add("show");
    setTimeout(() => statusMessage.classList.remove("show"), 5000);
}

email.addEventListener("input", function() {
    const value = this.value;

    if (value.length > 0) {
        if (validateEmail(value)) {
            this.classList.remove("invalid");
            this.classList.add("valid");

            if (messageGroup.style.display === "none") {
                messageGroup.style.display = "block";
                setTimeout(() => messageGroup.classList.add("show"), 10);
                message.focus();
            }
        } else {
            this.classList.remove("valid");
            this.classList.add("invalid");
            messageGroup.classList.remove("show");
            sendBtn.classList.remove("show");
            setTimeout(() => {
                if (!messageGroup.classList.contains("show")) {
                    messageGroup.style.display = "none";
                    sendBtn.style.display = "none";
                }
            }, 300);
        }
    } else {
        this.classList.remove("valid");
        this.classList.remove("invalid");
        messageGroup.classList.remove("show");
        sendBtn.classList.remove("show");
        setTimeout(() => {
            messageGroup.style.display = "none";
            sendBtn.style.display = "none";
        }, 300);
    }
});

message.addEventListener("input", updateCharCounter);

contactForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const emailValue = email.value;
    const messageValue = message.value;

    if (!validateEmail(emailValue)) {
        showStatus("Please enter a valid email address.", "error");
        return;
    }

    if (messageValue.length < 2) {
        showStatus("Message must be at least 2 characters long.", "error");
        return;
    }

    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";

    try {
        const apiUrl = `${window.location.protocol}//${window.location.hostname}:8081/contact`;
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailValue,
                message: messageValue
            })
        });

        const result = await response.json();

        if (result.success) {
            showStatus("Message sent successfully! Thank you for contacting us.", "success");
            contactForm.reset();
            messageGroup.style.display = "none";
            sendBtn.style.display = "none";
            email.classList.remove("valid");
            email.classList.remove("invalid");
        } else {
            throw new Error(result.error || "Failed to send message");
        }
    } catch (error) {
        showStatus("Failed to send message. Please try again later.", "error");
        console.error("Error sending message:", error);
    } finally {
        sendBtn.disabled = false;
        sendBtn.textContent = "Send Message";
    }
});

createParticles();

document.addEventListener("mousemove", function(e) {
    const title = document.querySelector(".holographic-title");
    const rect = title.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * 8;
    const rotateY = (x / rect.width) * 8;
    const translateX = (x / rect.width) * 10;
    const translateY = (y / rect.height) * 10;

    title.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`;
});

document.addEventListener("mouseleave", function() {
    const title = document.querySelector(".holographic-title");
    title.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px)";
});

sendBtn.addEventListener("click", function(e) {
    const ripple = document.createElement("div");
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255, 0, 68, 0.6)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.left = "50%";
    ripple.style.top = "50%";
    ripple.style.width = "20px";
    ripple.style.height = "20px";
    ripple.style.marginLeft = "-10px";
    ripple.style.marginTop = "-10px";
    ripple.style.pointerEvents = "none";

    sendBtn.style.position = "relative";
    sendBtn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});
