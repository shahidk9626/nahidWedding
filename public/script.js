/* ==========================================
   INITIALIZE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    AOS.init({
        duration: 1200,
        once: true
    });

    initInvitation();
    initCountdown();
    initMusic();
    initHearts();
    initParticles();
    initScratchCards();
});

/* ==========================================
   ENVELOPE OPENING
========================================== */

function initInvitation() {

    const envelope = document.getElementById("envelope");
    const btn = document.getElementById("openInvitation");
    const content = document.getElementById("mainContent");
    const envelopeSection = document.getElementById("envelopeSection");

    btn.addEventListener("click", () => {

        envelope.classList.add("open");

        gsap.to(btn, {
            opacity: 0,
            duration: 0.5
        });

        setTimeout(() => {

            gsap.to(envelopeSection, {
                opacity: 0,
                duration: 1.5
            });

        }, 2000);

        setTimeout(() => {

            envelopeSection.style.display = "none";

            content.classList.remove("hidden");

            gsap.from("#mainContent", {
                opacity: 0,
                y: 80,
                duration: 1.5
            });

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 3200);

    });
}

/* ==========================================
   COUNTDOWN
========================================== */

function initCountdown() {

    // CHANGE YEAR IF REQUIRED
    const weddingDate = new Date("October 1, 2026 00:00:00").getTime();

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    setInterval(() => {

        const now = new Date().getTime();

        const distance = weddingDate - now;

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));

        const h = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const m = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const s = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        days.innerText = d < 10 ? "0" + d : d;
        hours.innerText = h < 10 ? "0" + h : h;
        minutes.innerText = m < 10 ? "0" + m : m;
        seconds.innerText = s < 10 ? "0" + s : s;

    }, 1000);
}

/* ==========================================
   MUSIC TOGGLE
========================================== */

function initMusic() {

    const musicBtn = document.getElementById("musicBtn");
    const music = document.getElementById("bgMusic");

    let playing = false;

    musicBtn.addEventListener("click", () => {

        if (!playing) {

            music.play();

            musicBtn.innerHTML = "🔊";

            playing = true;

        } else {

            music.pause();

            musicBtn.innerHTML = "🎵";

            playing = false;
        }

    });
}

/* ==========================================
   FLOATING HEARTS
========================================== */

function initHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("floating-heart");

        heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💛";

        heart.style.left =
            Math.random() * window.innerWidth + "px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (6 + Math.random() * 6) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 12000);

    }, 800);
}

/* ==========================================
   GOLD PARTICLES
========================================== */

function initParticles() {

    const container = document.getElementById("particles");

    for (let i = 0; i < 80; i++) {

        const particle = document.createElement("div");

        particle.style.position = "absolute";

        particle.style.width =
            Math.random() * 4 + 2 + "px";

        particle.style.height =
            particle.style.width;

        particle.style.borderRadius = "50%";

        particle.style.background =
            Math.random() > 0.5
                ? "#FFD700"
                : "#D4AF37";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.opacity =
            Math.random();

        particle.style.boxShadow =
            "0 0 12px gold";

        particle.style.animation =
            `particleFloat ${5 + Math.random() * 10}s infinite alternate`;

        container.appendChild(particle);
    }

    if (!document.getElementById("particle-style")) {

        const style = document.createElement("style");

        style.id = "particle-style";

        style.innerHTML = `
            @keyframes particleFloat {
                from {
                    transform:
                        translateY(0)
                        translateX(0);
                }
                to {
                    transform:
                        translateY(-50px)
                        translateX(30px);
                }
            }
        `;

        document.head.appendChild(style);
    }
}

/* ==========================================
   SCRATCH CARDS
========================================== */

function initScratchCards() {

    const cards =
        document.querySelectorAll(".scratch-card");

    cards.forEach(card => {

        const canvas =
            card.querySelector("canvas");

        const ctx =
            canvas.getContext("2d");

        canvas.width =
            card.offsetWidth;

        canvas.height =
            card.offsetHeight;

        const gradient =
            ctx.createLinearGradient(
                0,
                0,
                canvas.width,
                canvas.height
            );

        gradient.addColorStop(0, "#f7d774");
        gradient.addColorStop(1, "#b8860b");

        ctx.fillStyle = gradient;

        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        ctx.fillStyle = "#000";

        ctx.font = "bold 24px Arial";

        ctx.textAlign = "center";

        ctx.fillText(
            "SCRATCH HERE",
            canvas.width / 2,
            canvas.height / 2
        );

        let isDrawing = false;

        const scratch = (x, y) => {

            ctx.globalCompositeOperation =
                "destination-out";

            ctx.beginPath();

            ctx.arc(
                x,
                y,
                25,
                0,
                Math.PI * 2
            );

            ctx.fill();
        };

        /* Desktop */

        canvas.addEventListener(
            "mousedown",
            () => {
                isDrawing = true;
            }
        );

        canvas.addEventListener(
            "mouseup",
            () => {
                isDrawing = false;
            }
        );

        canvas.addEventListener(
            "mousemove",
            e => {

                if (!isDrawing) return;

                const rect =
                    canvas.getBoundingClientRect();

                scratch(
                    e.clientX - rect.left,
                    e.clientY - rect.top
                );
            }
        );

        /* Mobile */

        canvas.addEventListener(
            "touchstart",
            () => {
                isDrawing = true;
            }
        );

        canvas.addEventListener(
            "touchend",
            () => {
                isDrawing = false;
            }
        );

        canvas.addEventListener(
            "touchmove",
            e => {

                e.preventDefault();

                if (!isDrawing) return;

                const rect =
                    canvas.getBoundingClientRect();

                const touch =
                    e.touches[0];

                scratch(
                    touch.clientX - rect.left,
                    touch.clientY - rect.top
                );

            },
            { passive: false }
        );

    });
}

/* ==========================================
   GOLDEN CURSOR SPARKLES
========================================== */

let lastSparkle = 0;
document.addEventListener(
    "mousemove",
    (e) => {
        const now = Date.now();
        if (now - lastSparkle < 60) return;
        lastSparkle = now;

        if (Math.random() > 0.7) {

            const sparkle =
                document.createElement("div");

            sparkle.style.position =
                "fixed";

            sparkle.style.left =
                e.clientX + "px";

            sparkle.style.top =
                e.clientY + "px";

            sparkle.style.width =
                "6px";

            sparkle.style.height =
                "6px";

            sparkle.style.borderRadius =
                "50%";

            sparkle.style.background =
                "#FFD700";

            sparkle.style.boxShadow =
                "0 0 10px gold";

            sparkle.style.pointerEvents =
                "none";

            sparkle.style.zIndex =
                "9999";

            document.body.appendChild(
                sparkle
            );

            gsap.to(
                sparkle,
                {
                    opacity: 0,
                    y: -30,
                    duration: 1,
                    onComplete: () =>
                        sparkle.remove()
                }
            );
        }
    }
);

/* ==========================================
   SECTION REVEAL
========================================== */

let cachedEventCards = null;
window.addEventListener("scroll", () => {

    if (!cachedEventCards) {
        cachedEventCards = document.querySelectorAll(".event-card");
    }
    if (cachedEventCards.length === 0) return;

    cachedEventCards.forEach(card => {

        const top =
            card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            card.style.opacity = 1;

            card.style.transform =
                "translateY(0)";
        }

    });
});
