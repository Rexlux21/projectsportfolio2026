# RexLux Digital — Agency & Portfolio Website

A modern, animated, dark-themed website for a web development agency — built as
a plain static site (HTML/CSS/JS, no build step) so it can be deployed straight
to GitHub Pages.

Pages: **Home · Services · Projects · Contact · Privacy Policy**, plus a
lightweight **Admin** area for editing Services/Projects content.

## Go live (GitHub Pages)

A workflow at `.github/workflows/deploy-pages.yml` already builds and deploys
the site on every push to `main` — there's nothing to configure in it. The
only manual step is switching on Pages once:

1. Go to **Settings → Pages** in this repo.
2. Under **Build and deployment → Source**, choose **GitHub Actions**
   (not "Deploy from a branch" — the workflow already handles the build/deploy).
3. That's it. The next push (or a manual run of the "Deploy to GitHub Pages"
   workflow under the **Actions** tab) publishes the site at
   `https://<your-username>.github.io/<repo-name>/`.

This one switch has to be flipped by a signed-in repo admin in the Settings
UI — GitHub's API refuses to create a Pages site on behalf of an app
installation (including Claude's), so it can't be done any other way.

That's it — the whole site is static HTML/CSS/JS, so there's nothing to compile.

## Connect the contact form (Formspree)

The contact form has no backend of its own, so it posts to
[Formspree](https://formspree.io) (free tier, no server required):

1. Create a free account at formspree.io and create a new form.
2. Copy your form endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Open `assets/js/contact.js` and replace:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
   with your real endpoint.
4. Commit and push. Until you do this, the form runs in a harmless "demo mode"
   that shows a success message but doesn't send anywhere.

## Editing content — the Admin panel

Go to `/admin/login.html` (linked in the footer of every page).

- **Default password:** `rexlux2026` — change it immediately from the dashboard.
- From the dashboard you can add/edit/delete **Services** and **Projects**.
- Edits save to `localStorage` in **your browser only** — they preview instantly
  on your machine but won't appear for other visitors until you publish them.
- Click **Export JSON**, then paste the exported content into the
  `RX_DEFAULT_DATA` object in `assets/js/data.js`, commit, and push. That
  updates the site for everyone.

### Important security note

This is a static site — GitHub Pages has no server or database — so the admin
login is a **client-side convenience**, not real authentication. Anyone who
reads the JavaScript could technically bypass it. It's meant purely so the
business owner can preview content changes before publishing them via git.
Don't use it to gate anything sensitive. A future upgrade path (once RexLux
has real client data to protect) would be a proper backend — e.g. Netlify/
Vercel functions with a database, or a headless CMS.

## Project structure

```
index.html          Home
services.html        Services
projects.html        Projects (with filters)
contact.html          Contact (form + FAQ)
privacy.html          Privacy Policy
admin/
  login.html          Admin login
  dashboard.html      Admin content editor
assets/
  css/style.css       Design system + animations
  js/
    particles.js       Animated canvas background
    data.js             Site content (services/projects)
    render.js           Renders content into the DOM
    main.js              Nav, scroll reveals, counters, typing effect, FAQ, filters
    contact.js            Formspree form submission
    admin.js               Admin auth + CRUD + import/export
.github/workflows/
  deploy-pages.yml    Auto-deploys to GitHub Pages on every push to main
```

## Design

Dark, glassmorphic, "high-tech" aesthetic: animated particle-network
background, scroll-triggered reveals, a typing hero headline, an animated
terminal panel, a scrolling tech marquee, glowing gradient buttons, and
tilting spotlight cards — built with plain CSS animations/transitions and
vanilla JS (no framework, no build step).

## Future expansion

When RexLux grows, add new pages (About, Pricing, Blog, Case Studies) without
redesigning anything — the nav, footer and design system already support it.
