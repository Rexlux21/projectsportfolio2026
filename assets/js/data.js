/* =========================================================
   RexLux Digital — content store
   Default content ships here. The admin panel (admin/) lets
   the owner edit projects & services; edits are saved to
   localStorage on THIS browser and override the defaults
   below. Use "Export JSON" in the admin panel to save real
   changes back into this file for all visitors.
   ========================================================= */

const RX_STORAGE_KEY = 'rexlux_content_v1';

const RX_DEFAULT_DATA = {
  services: [
    {
      id: 'web-dev',
      icon: 'code',
      title: 'Website Development',
      summary: 'Custom business websites built with modern technologies.',
      detail: 'Hand-built, high-performance websites tailored to your brand — fast, responsive, and built to convert visitors into customers.',
    },
    {
      id: 'web-apps',
      icon: 'layers',
      title: 'Web Applications',
      summary: 'React, JavaScript, Python, Django.',
      detail: 'Full-stack web applications and dashboards powered by React, Python and Django — for businesses that need more than a brochure site.',
    },
    {
      id: 'redesign',
      icon: 'refresh',
      title: 'Website Redesign',
      summary: 'Turn outdated websites into modern experiences.',
      detail: 'We modernize dated or underperforming sites into fast, mobile-first experiences without losing your existing SEO equity.',
    },
    {
      id: 'maintenance',
      icon: 'shield',
      title: 'Website Maintenance',
      summary: 'Keep your website secure and updated.',
      detail: 'Ongoing updates, backups, uptime monitoring and security patches so your site keeps running while you run your business.',
    },
    {
      id: 'seo',
      icon: 'trend',
      title: 'SEO Optimization',
      summary: 'Improve your Google visibility.',
      detail: 'Technical SEO, on-page optimization and performance tuning to help your business get found by the customers searching for you.',
    },
    {
      id: 'automation',
      icon: 'bolt',
      title: 'Business Automation',
      summary: 'Save time with custom web solutions.',
      detail: 'Custom tools, integrations and API-powered automations that remove repetitive work from your team’s day.',
    },
  ],

  projects: [
    {
      id: 'home-finder',
      name: 'Home Finder',
      category: ['react', 'business'],
      tech: ['React', 'REST API', 'Maps'],
      description: 'A real-estate listing platform with map search, filters and saved listings.',
      demo: '#',
      github: '#',
    },
    {
      id: 'weather-app',
      name: 'Weather App',
      category: ['react', 'landing'],
      tech: ['React', 'Open-Meteo API'],
      description: 'Live weather search with location-based forecasts and animated conditions.',
      demo: '#',
      github: '#',
    },
    {
      id: 'fashion-website',
      name: 'Fashion Website',
      category: ['business', 'landing'],
      tech: ['HTML/CSS', 'JavaScript'],
      description: 'A stylish e-commerce landing experience built for a boutique fashion brand.',
      demo: '#',
      github: '#',
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      category: ['landing'],
      tech: ['HTML/CSS', 'JavaScript'],
      description: 'A sleek personal portfolio template with animated project showcases.',
      demo: '#',
      github: '#',
    },
    {
      id: 'restaurant-website',
      name: 'Restaurant Website',
      category: ['business', 'landing'],
      tech: ['HTML/CSS', 'JavaScript'],
      description: 'A modern restaurant site with online menu, reservations and gallery.',
      demo: '#',
      github: '#',
    },
    {
      id: 'church-website',
      name: 'Church Website',
      category: ['business'],
      tech: ['HTML/CSS', 'JavaScript'],
      description: 'A welcoming community site with event calendars and sermon archives.',
      demo: '#',
      github: '#',
    },
    {
      id: 'dashboard',
      name: 'Dashboard',
      category: ['python', 'business'],
      tech: ['Python', 'Django'],
      description: 'An internal analytics dashboard for tracking business KPIs in real time.',
      demo: '#',
      github: '#',
    },
  ],
};

function rxLoadData() {
  try {
    const raw = localStorage.getItem(RX_STORAGE_KEY);
    if (!raw) return JSON.parse(JSON.stringify(RX_DEFAULT_DATA));
    const parsed = JSON.parse(raw);
    return {
      services: parsed.services && parsed.services.length ? parsed.services : RX_DEFAULT_DATA.services,
      projects: parsed.projects && parsed.projects.length ? parsed.projects : RX_DEFAULT_DATA.projects,
    };
  } catch (e) {
    console.warn('RexLux: could not read saved content, using defaults.', e);
    return JSON.parse(JSON.stringify(RX_DEFAULT_DATA));
  }
}

function rxSaveData(data) {
  localStorage.setItem(RX_STORAGE_KEY, JSON.stringify(data));
}
