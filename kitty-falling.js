const kittyUrl = "icons/hello-kitty-logo-png_seeklogo-310127.png";
const hearts = ['❤️', '💖', '💝', '💕', '💗'];

function createKitty() {
    const img = document.createElement("img");
    img.src = kittyUrl;
    img.className = "kitty-falling";
    img.style.left = Math.random() * 100 + "vw";
    img.style.animationDuration = (2 + Math.random() * 2) + "s";
    img.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(img);

    img.addEventListener("animationend", () => {
        img.remove();
    });
}

function createHeart() {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 2) + "s";
    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

setInterval(createKitty, 800);
setInterval(createHeart, 500);
