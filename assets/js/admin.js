/* =========================================================
   RexLux Digital — Admin panel logic.

   IMPORTANT SECURITY NOTE:
   This is a *static* site (GitHub Pages has no server/database),
   so this admin area is a convenience content editor, not a real
   secured backend. The password check happens in the browser, so
   anyone who reads the JS could bypass it. Do NOT use it to gate
   anything truly sensitive. It's meant so the business owner can:
     1. Tweak projects/services content live in their own browser
        (saved to localStorage, visible only to them).
     2. Export the result as JSON and commit it back into
        assets/js/data.js so ALL visitors see the update.
   For real authenticated admin + database, this site would need
   a backend (e.g. Netlify/Vercel functions + a database, or a
   headless CMS) — a natural next step once the agency grows.
   ========================================================= */

const RX_ADMIN_HASH_KEY = 'rexlux_admin_hash';
const RX_ADMIN_SESSION_KEY = 'rexlux_admin_session';
// Default password: "rexlux2026" — change it from the dashboard after first login.

async function rxHash(text) {
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function rxEnsureDefaultPassword() {
  if (!localStorage.getItem(RX_ADMIN_HASH_KEY)) {
    const hash = await rxHash('rexlux2026');
    localStorage.setItem(RX_ADMIN_HASH_KEY, hash);
  }
}

function rxIsAuthed() {
  return sessionStorage.getItem(RX_ADMIN_SESSION_KEY) === 'true';
}

function rxRequireAuth() {
  if (!rxIsAuthed()) window.location.href = 'login.html';
}

function rxLogout() {
  sessionStorage.removeItem(RX_ADMIN_SESSION_KEY);
  window.location.href = 'login.html';
}

/* ---------- Login page ---------- */
async function rxInitLoginPage() {
  await rxEnsureDefaultPassword();
  const form = document.getElementById('login-form');
  const error = document.getElementById('login-error');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pass = document.getElementById('login-password').value;
    const hash = await rxHash(pass);
    const stored = localStorage.getItem(RX_ADMIN_HASH_KEY);
    if (hash === stored) {
      sessionStorage.setItem(RX_ADMIN_SESSION_KEY, 'true');
      window.location.href = 'dashboard.html';
    } else {
      error.textContent = 'Incorrect password. Try again.';
      error.classList.add('show');
      form.classList.add('shake');
      setTimeout(() => form.classList.remove('shake'), 500);
    }
  });
}

/* ---------- Dashboard ---------- */
let RX_STATE = null;

function rxInitDashboard() {
  rxRequireAuth();
  RX_STATE = rxLoadData();
  rxRenderAdminLists();
  document.getElementById('logout-btn')?.addEventListener('click', rxLogout);

  document.getElementById('service-form')?.addEventListener('submit', rxHandleServiceSubmit);
  document.getElementById('project-form')?.addEventListener('submit', rxHandleProjectSubmit);
  document.getElementById('reset-service-form')?.addEventListener('click', () => rxResetServiceForm());
  document.getElementById('reset-project-form')?.addEventListener('click', () => rxResetProjectForm());

  document.getElementById('export-json')?.addEventListener('click', rxExportJson);
  document.getElementById('import-json')?.addEventListener('change', rxImportJson);
  document.getElementById('restore-defaults')?.addEventListener('click', rxRestoreDefaults);

  document.getElementById('password-form')?.addEventListener('submit', rxChangePassword);
}

function rxRenderAdminLists() {
  const sList = document.getElementById('service-list');
  const pList = document.getElementById('project-list');

  if (sList) {
    sList.innerHTML = RX_STATE.services.map((s) => `
      <div class="admin-row" data-id="${s.id}" data-type="service">
        <div>
          <strong>${s.title}</strong>
          <span class="admin-row-sub">${s.summary}</span>
        </div>
        <div class="admin-row-actions">
          <button type="button" class="btn btn-ghost btn-sm" data-edit-service="${s.id}">Edit</button>
          <button type="button" class="btn btn-ghost btn-sm danger" data-del-service="${s.id}">Delete</button>
        </div>
      </div>`).join('') || '<p class="admin-empty">No services yet.</p>';
  }

  if (pList) {
    pList.innerHTML = RX_STATE.projects.map((p) => `
      <div class="admin-row" data-id="${p.id}" data-type="project">
        <div>
          <strong>${p.name}</strong>
          <span class="admin-row-sub">${(p.tech || []).join(', ')}</span>
        </div>
        <div class="admin-row-actions">
          <button type="button" class="btn btn-ghost btn-sm" data-edit-project="${p.id}">Edit</button>
          <button type="button" class="btn btn-ghost btn-sm danger" data-del-project="${p.id}">Delete</button>
        </div>
      </div>`).join('') || '<p class="admin-empty">No projects yet.</p>';
  }

  sList?.querySelectorAll('[data-edit-service]').forEach((b) => b.addEventListener('click', () => rxEditService(b.dataset.editService)));
  sList?.querySelectorAll('[data-del-service]').forEach((b) => b.addEventListener('click', () => rxDeleteService(b.dataset.delService)));
  pList?.querySelectorAll('[data-edit-project]').forEach((b) => b.addEventListener('click', () => rxEditProject(b.dataset.editProject)));
  pList?.querySelectorAll('[data-del-project]').forEach((b) => b.addEventListener('click', () => rxDeleteProject(b.dataset.delProject)));

  document.getElementById('stat-services').textContent = RX_STATE.services.length;
  document.getElementById('stat-projects').textContent = RX_STATE.projects.length;
}

function rxSlug(text) {
  return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/* Services CRUD */
function rxHandleServiceSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const id = form.dataset.editingId || rxSlug(form.title.value) + '-' + Date.now().toString(36);
  const entry = {
    id,
    icon: form.icon.value || 'code',
    title: form.title.value.trim(),
    summary: form.summary.value.trim(),
    detail: form.detail.value.trim(),
  };
  const idx = RX_STATE.services.findIndex((s) => s.id === form.dataset.editingId);
  if (idx > -1) RX_STATE.services[idx] = entry;
  else RX_STATE.services.push(entry);
  rxSaveData(RX_STATE);
  rxRenderAdminLists();
  rxResetServiceForm();
  rxToast('Service saved.');
}

function rxEditService(id) {
  const s = RX_STATE.services.find((x) => x.id === id);
  if (!s) return;
  const form = document.getElementById('service-form');
  form.dataset.editingId = id;
  form.icon.value = s.icon;
  form.title.value = s.title;
  form.summary.value = s.summary;
  form.detail.value = s.detail || '';
  document.getElementById('service-form-title').textContent = 'Edit Service';
  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function rxDeleteService(id) {
  if (!confirm('Delete this service?')) return;
  RX_STATE.services = RX_STATE.services.filter((s) => s.id !== id);
  rxSaveData(RX_STATE);
  rxRenderAdminLists();
  rxToast('Service deleted.');
}

function rxResetServiceForm() {
  const form = document.getElementById('service-form');
  if (!form) return;
  form.reset();
  delete form.dataset.editingId;
  document.getElementById('service-form-title').textContent = 'Add Service';
}

/* Projects CRUD */
function rxHandleProjectSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const id = form.dataset.editingId || rxSlug(form.name.value) + '-' + Date.now().toString(36);
  const entry = {
    id,
    name: form.name.value.trim(),
    category: form.category.value.split(',').map((c) => c.trim().toLowerCase()).filter(Boolean),
    tech: form.tech.value.split(',').map((t) => t.trim()).filter(Boolean),
    description: form.description.value.trim(),
    demo: form.demo.value.trim() || '#',
    github: form.github.value.trim() || '#',
  };
  const idx = RX_STATE.projects.findIndex((p) => p.id === form.dataset.editingId);
  if (idx > -1) RX_STATE.projects[idx] = entry;
  else RX_STATE.projects.push(entry);
  rxSaveData(RX_STATE);
  rxRenderAdminLists();
  rxResetProjectForm();
  rxToast('Project saved.');
}

function rxEditProject(id) {
  const p = RX_STATE.projects.find((x) => x.id === id);
  if (!p) return;
  const form = document.getElementById('project-form');
  form.dataset.editingId = id;
  form.name.value = p.name;
  form.category.value = (p.category || []).join(', ');
  form.tech.value = (p.tech || []).join(', ');
  form.description.value = p.description;
  form.demo.value = p.demo === '#' ? '' : p.demo;
  form.github.value = p.github === '#' ? '' : p.github;
  document.getElementById('project-form-title').textContent = 'Edit Project';
  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function rxDeleteProject(id) {
  if (!confirm('Delete this project?')) return;
  RX_STATE.projects = RX_STATE.projects.filter((p) => p.id !== id);
  rxSaveData(RX_STATE);
  rxRenderAdminLists();
  rxToast('Project deleted.');
}

function rxResetProjectForm() {
  const form = document.getElementById('project-form');
  if (!form) return;
  form.reset();
  delete form.dataset.editingId;
  document.getElementById('project-form-title').textContent = 'Add Project';
}

/* Data import/export */
function rxExportJson() {
  const blob = new Blob([JSON.stringify(RX_STATE, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'rexlux-content.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  rxToast('Exported. Use this JSON to update assets/js/data.js in your repo.');
}

function rxImportJson(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!parsed.services || !parsed.projects) throw new Error('Missing keys');
      RX_STATE = parsed;
      rxSaveData(RX_STATE);
      rxRenderAdminLists();
      rxToast('Content imported.');
    } catch (err) {
      alert('That file does not look like valid RexLux content JSON.');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function rxRestoreDefaults() {
  if (!confirm('Restore original default content? This clears your local edits.')) return;
  localStorage.removeItem(RX_STORAGE_KEY);
  RX_STATE = rxLoadData();
  rxRenderAdminLists();
  rxToast('Defaults restored.');
}

async function rxChangePassword(e) {
  e.preventDefault();
  const form = e.target;
  const current = form.current.value;
  const next = form.next.value;
  const confirmVal = form.confirmPassword.value;
  const msg = document.getElementById('password-msg');

  const currentHash = await rxHash(current);
  if (currentHash !== localStorage.getItem(RX_ADMIN_HASH_KEY)) {
    msg.textContent = 'Current password is incorrect.';
    msg.className = 'form-status show err';
    return;
  }
  if (next.length < 6) {
    msg.textContent = 'New password must be at least 6 characters.';
    msg.className = 'form-status show err';
    return;
  }
  if (next !== confirmVal) {
    msg.textContent = 'New passwords do not match.';
    msg.className = 'form-status show err';
    return;
  }
  localStorage.setItem(RX_ADMIN_HASH_KEY, await rxHash(next));
  msg.textContent = 'Password updated.';
  msg.className = 'form-status show ok';
  form.reset();
}

function rxToast(message) {
  let toast = document.getElementById('rx-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'rx-toast';
    toast.className = 'rx-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 3200);
}
