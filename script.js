// Efeito de scroll revelando os tópicos
window.addEventListener('scroll', () => {
  document.querySelectorAll('.motivo').forEach(motivo => {
    const pos = motivo.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      motivo.classList.add('visible');
    }
  });
});

// Mostrar mensagem final, ativar confete e redirecionar
function mostrarMensagem() {
  const msg = document.getElementById('mensagem-final');
  msg.style.display = 'block';
  startConfetti();

  setTimeout(() => {
    window.location.href = 'https://vm.tiktok.com/ZMHgAuQRVwBhc-ubkm9/';
  }, 3000); // Redireciona após 3 segundos
}

// Tocar áudio
function tocarAudio() {
  document.getElementById('musica-fundo').play();
}

// 🎉 Confete simples (canvas)
function startConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  const pieces = [];
  const colors = ['#ff4081', '#ff80ab', '#f50057', '#ffc1e3'];

  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 3 + 2
    });
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of pieces) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.speed;
      if (p.y > canvas.height) p.y = 0;
    }
    requestAnimationFrame(update);
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  update();
}