let isAnimating = true;

document.addEventListener('mousemove', function(e) {
    if (!isAnimating) return;
    
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const angle = 120 + (x - 0.5) * 60;
    const intensity = y * 0.2; // Intensidade baseada na posição vertical do mouse
    
    const color1 = `#ffb6e6`;
    const color2 = `#ffe6fa`;
    const color3 = `#ff69b4`;
    
    document.body.style.background = `
        linear-gradient(${angle}deg, 
            ${color1} 0%, 
            ${color2} 50%, 
            ${color3} 100%)
    `;
    document.body.style.transition = 'background 0.5s ease';
});

// Adiciona efeito de brilho suave automático quando o mouse não se move
setInterval(() => {
    if (isAnimating) {
        const time = Date.now() / 1000;
        const angle = 120 + Math.sin(time) * 30;
        const color1 = `#ffb6e6`;
        const color2 = `#ffe6fa`;
        const color3 = `#ff69b4`;
        
        document.body.style.background = `
            linear-gradient(${angle}deg, 
                ${color1} 0%, 
                ${color2} 50%, 
                ${color3} 100%)
        `;
    }
}, 50);

// Controle de animação
let timeout;
document.addEventListener('mousemove', () => {
    isAnimating = false;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        isAnimating = true;
    }, 2000);
});
