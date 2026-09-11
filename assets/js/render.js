/* Renders services & projects from data.js into the DOM. */

const RX_ICONS = {
  code: '<path d="M9 18 3 12l6-6M15 6l6 6-6 6"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/>',
  trend: '<path d="M3 17 9 11l4 4 8-8"/><path d="M15 7h6v6"/>',
  bolt: '<path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"/>',
};

function rxIcon(name, size = 26) {
  const path = RX_ICONS[name] || RX_ICONS.code;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

function rxRenderServices(targetSelector, opts = {}) {
  const el = document.querySelector(targetSelector);
  if (!el) return;
  const { services } = rxLoadData();
  const list = opts.limit ? services.slice(0, opts.limit) : services;
  el.innerHTML = list.map((s) => `
    <div class="card service-card" data-reveal>
      <div class="icon">${rxIcon(s.icon)}</div>
      <h3>${s.title}</h3>
      <p>${opts.detail ? s.detail : s.summary}</p>
    </div>
  `).join('');
  rxObserveReveals(el);
}

function rxProjectCard(p) {
  const demo = p.demo && p.demo !== '#'
    ? `<a href="${p.demo}" target="_blank" rel="noopener">Live Demo ↗</a>`
    : `<a href="#" class="disabled" onclick="return false;" style="opacity:.4;cursor:not-allowed;">Live Demo</a>`;
  const gh = p.github && p.github !== '#'
    ? `<a href="${p.github}" target="_blank" rel="noopener">GitHub ↗</a>`
    : `<a href="#" onclick="return false;" style="opacity:.4;cursor:not-allowed;">GitHub</a>`;
  return `
    <div class="card project-card" data-reveal data-category="${(p.category || []).join(' ')}">
      <div class="project-media">${p.name}</div>
      <div class="project-body">
        <div class="project-tags">${(p.tech || []).map((t) => `<span class="tag">${t}</span>`).join('')}</div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="project-links">${demo}${gh}</div>
      </div>
    </div>`;
}

function rxRenderProjects(targetSelector, opts = {}) {
  const el = document.querySelector(targetSelector);
  if (!el) return;
  const { projects } = rxLoadData();
  const list = opts.limit ? projects.slice(0, opts.limit) : projects;
  el.innerHTML = list.map(rxProjectCard).join('');
  rxObserveReveals(el);
}
