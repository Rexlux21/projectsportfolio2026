/* =========================================================
   Contact form submission via Formspree (no backend needed).
   1. Create a free form at https://formspree.io
   2. Replace FORMSPREE_ENDPOINT below with your endpoint,
      e.g. "https://formspree.io/f/abcdwxyz"
   ========================================================= */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form-status';
    status.textContent = '';

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    const data = new FormData(form);

    if (!FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          showStatus(true, "Thanks — your message is in. We'll reply within one business day.");
          form.reset();
        } else {
          showStatus(false, 'Something went wrong sending your message. Please email us directly.');
        }
      } catch (err) {
        showStatus(false, 'Network error — please check your connection and try again.');
      }
    } else {
      // Fallback demo mode until a Formspree endpoint is configured.
      await new Promise((r) => setTimeout(r, 700));
      showStatus(true, "Demo mode: form captured locally. Connect Formspree in assets/js/contact.js to go live.");
      form.reset();
    }

    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
  });

  function showStatus(ok, message) {
    status.textContent = message;
    status.classList.add('show', ok ? 'ok' : 'err');
  }
});
