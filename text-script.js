// Generate particles
(function() {
    const container = document.getElementById("particles");
    for (let i = 0; i < 60; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "vw";
        p.style.top = (Math.random() * 150 + 100) + "vh";
        p.style.animationDelay = (Math.random() * 5) + "s";
        p.style.opacity = Math.random() * 0.8 + 0.2;
        container.appendChild(p);
    }
})();

// Text fade logic
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");

function fadeInMessage(msg) {
    msg.classList.remove("fade-in", "fade-out");
    void msg.offsetWidth;
    msg.classList.add("fade-in");
}

function fadeOutMessage(msg) {
    msg.classList.remove("fade-in");
    void msg.offsetWidth;
    msg.classList.add("fade-out");
}

fadeInMessage(msg1);

// Delay for first full fade-in
const lastWordDelay = 37 * 140 + 1000;

setTimeout(() => {

    // ⬇ Start fading OUT Set 1
    fadeOutMessage(msg1);

    // ⬇ INSTANTLY start fading IN Set 2 (NO GAP)
    msg2.style.opacity = "1";
    fadeInMessage(msg2);

    // After Set 1 fully fades out, hide it
    setTimeout(() => {
        msg1.style.display = "none";
    }, 37 * 60 + 1000); // fade-out duration

}, lastWordDelay + 3000); // extra display time before fade-out