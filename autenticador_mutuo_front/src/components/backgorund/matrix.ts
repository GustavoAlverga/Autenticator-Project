export function iniciarMatrix() {
  const canvas = document.getElementById("matrixCanvas") as HTMLCanvasElement;
  if (!canvas) {
    console.error("Canvas element not found");
    return;
  }
  const ctx = canvas.getContext("2d");

  function ajustarTamanho() {
    if (canvas) {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    }
  }
  ajustarTamanho();
  window.addEventListener("resize", ajustarTamanho);

  const letters =
    '01';
  const matrix = letters.split('');

  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);

  // Agora cada coluna começa em uma altura aleatória (pode estar fora da tela)
  const drops = Array.from({ length: columns }, () =>
    Math.floor(Math.random() * (canvas.height / fontSize))
  );

  function draw() {
    if (!ctx) {
      console.error("2D context not available");
      return;
    }
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      // Reinicia a gota aleatoriamente quando chega no fim
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 100);
}
