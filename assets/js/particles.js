/* Drifting embers/petals background — pure canvas, no deps.
   Soft red, ink-black and warm-gray motes fall and sway slowly,
   evoking floating ash or maple petals rather than a tech network. */
(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w, h, dpr;
  let particles = [];
  const COLORS = ['156,36,24', '217,87,63', '42,38,34', '140,133,119'];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = window.innerWidth * dpr;
    h = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    const count = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 22000));
    particles = Array.from({ length: count }, () => spawn(Math.random() * h));
  }

  function spawn(y) {
    return {
      x: Math.random() * w,
      y: y == null ? -20 * dpr : y,
      vy: (Math.random() * 0.22 + 0.1) * dpr,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: (Math.random() * 0.012 + 0.006),
      swayAmp: (Math.random() * 0.5 + 0.2) * dpr,
      r: (Math.random() * 2.2 + 0.9) * dpr,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.35 + 0.35,
    };
  }

  const mouse = { x: null, y: null };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX * dpr;
    mouse.y = e.clientY * dpr;
  });
  window.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

  function step() {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.sway += p.swaySpeed;
      p.y += p.vy;
      p.x += Math.sin(p.sway) * p.swayAmp * 0.05;

      if (mouse.x != null) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 140 * dpr && d > 0.01) {
          p.x += (dx / d) * 0.8;
          p.y += (dy / d) * 0.4;
        }
      }

      if (p.y > h + 20 * dpr || p.x < -20 * dpr || p.x > w + 20 * dpr) {
        Object.assign(p, spawn(-20 * dpr), { x: Math.random() * w });
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c},${p.alpha})`;
      ctx.fill();
    }
    if (!reduceMotion) requestAnimationFrame(step);
  }

  resize();
  window.addEventListener('resize', resize);
  step();
})();
