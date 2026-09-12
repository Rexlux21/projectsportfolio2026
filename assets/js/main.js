/* Site-wide interactions: nav, reveal-on-scroll, typing effect, counters, cursor glow. */

document.addEventListener('DOMContentLoaded', () => {
  rxInitNav();
  rxInitCardTilt();
  rxObserveReveals(document);
  rxInitCounters();
  rxInitTyped();
  rxInitFaq();
  rxInitFilters();
  rxInitNewsletter();
  rxSetYear();
  rxSetActiveNav();
  rxInitTerminal();
});

function rxObserveReveals(scope) {
  const items = (scope || document).querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    items.forEach((i) => i.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  items.forEach((i) => io.observe(i));
}

/* Sticky / shrinking navbar + mobile menu */
function rxInitNav() {
  const nav = document.querySelector('.navbar');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    }));
  }
}

function rxSetActiveNav() {
  const page = (document.body.dataset.page || '').toLowerCase();
  document.querySelectorAll('.nav-links a[data-page]').forEach((a) => {
    a.classList.toggle('active', a.dataset.page === page);
  });
}

/* Subtle spotlight-follow on cards */
function rxInitCardTilt() {
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest && e.target.closest('.card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
}

/* Animated number counters for stat blocks */
function rxInitCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => io.observe(c));
}

/* Typewriter effect for hero headline word */
function rxInitTyped() {
  const el = document.querySelector('[data-typed]');
  if (!el) return;
  const words = JSON.parse(el.dataset.typed);
  let wordIndex = 0, charIndex = 0, deleting = false;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Guard against overlapping loops if rxInitTyped is called again
  // (e.g. a language switch) while a previous run is still ticking.
  const epoch = (parseInt(el.dataset.typedEpoch || '0', 10)) + 1;
  el.dataset.typedEpoch = String(epoch);

  if (reduceMotion) { el.textContent = words[0]; return; }

  function tick() {
    if (el.dataset.typedEpoch !== String(epoch)) return;
    const word = words[wordIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        return setTimeout(tick, 1400);
      }
    } else {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 85);
  }
  tick();
}

/* FAQ accordion */
function rxInitFaq() {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-q');
    q && q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* Project filter buttons */
function rxInitFilters() {
  const row = document.querySelector('.filter-row');
  if (!row) return;
  row.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    row.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach((card) => {
      const cats = (card.dataset.category || '').split(' ');
      const show = filter === 'all' || cats.includes(filter);
      card.classList.toggle('hide', !show);
    });
  });
}

/* Newsletter mini-form (front-end only demo) */
function rxInitNewsletter() {
  document.querySelectorAll('.newsletter').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const btn = form.querySelector('button');
      if (!input.value) return;
      const original = btn.textContent;
      btn.textContent = 'Subscribed ✓';
      input.value = '';
      setTimeout(() => (btn.textContent = original), 2200);
    });
  });
}

/* Looping "terminal" typing animation for the About section */
function rxInitTerminal() {
  const body = document.getElementById('terminal-body');
  if (!body) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lines = [
    { cls: 'c3', text: '$ whoami' },
    { cls: 'c1', text: 'rexlux-digital — web development agency' },
    { cls: 'c3', text: '$ ls services/' },
    { cls: 'c2', text: 'web-dev  web-apps  redesign  maintenance  seo  automation' },
    { cls: 'c3', text: '$ deploy --target=production' },
    { cls: 'c4', text: '✓ build optimized  ✓ SEO ready  ✓ live' },
  ];

  if (reduceMotion) {
    body.innerHTML = lines.map((l) => `<div class="${l.cls}">${l.text}</div>`).join('');
    return;
  }

  async function typeLine(line) {
    const row = document.createElement('div');
    row.className = line.cls;
    body.appendChild(row);
    for (let i = 0; i < line.text.length; i++) {
      row.textContent = line.text.slice(0, i + 1);
      await new Promise((r) => setTimeout(r, 16));
    }
  }

  async function run() {
    while (true) {
      body.innerHTML = '';
      for (const line of lines) {
        await typeLine(line);
        await new Promise((r) => setTimeout(r, 260));
      }
      const cursor = document.createElement('span');
      cursor.className = 'terminal-cursor';
      body.lastChild.appendChild(cursor);
      await new Promise((r) => setTimeout(r, 2600));
    }
  }
  run();
}

function rxSetYear() {
  document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
}
