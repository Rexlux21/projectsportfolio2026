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
      demo: 'antioch-church/',
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

/* Translations for the default services/projects content, keyed by item id.
   Content added or edited through the admin panel has no translation entry
   here, so it simply displays as typed (same behavior as before i18n). */
const RX_I18N_CONTENT = {
  fr: {
    services: {
      'web-dev': { title: 'Développement de Sites Web', summary: 'Sites web professionnels sur mesure, construits avec des technologies modernes.', detail: 'Sites web sur mesure et haute performance, adaptés à votre marque — rapides, réactifs, et conçus pour convertir vos visiteurs en clients.' },
      'web-apps': { title: 'Applications Web', summary: 'React, JavaScript, Python, Django.', detail: "Applications web complètes et tableaux de bord propulsés par React, Python et Django — pour les entreprises qui ont besoin de plus qu'un simple site vitrine." },
      'redesign': { title: 'Refonte de Site Web', summary: 'Transformez des sites dépassés en expériences modernes.', detail: 'Nous modernisons les sites datés ou peu performants en expériences rapides et adaptées au mobile, sans perdre votre référencement existant.' },
      'maintenance': { title: 'Maintenance de Site Web', summary: 'Gardez votre site sécurisé et à jour.', detail: 'Mises à jour continues, sauvegardes, surveillance de disponibilité et correctifs de sécurité pour que votre site continue de fonctionner pendant que vous gérez votre entreprise.' },
      'seo': { title: 'Optimisation SEO', summary: 'Améliorez votre visibilité sur Google.', detail: 'SEO technique, optimisation on-page et amélioration des performances pour aider votre entreprise à être trouvée par les clients qui vous recherchent.' },
      'automation': { title: "Automatisation d'Entreprise", summary: 'Gagnez du temps grâce à des solutions web sur mesure.', detail: "Outils personnalisés, intégrations et automatisations via API qui éliminent les tâches répétitives du quotidien de votre équipe." },
    },
    projects: {
      'home-finder': { name: 'Recherche Immobilière', description: "Une plateforme d'annonces immobilières avec recherche sur carte, filtres et biens sauvegardés." },
      'weather-app': { name: 'Application Météo', description: 'Recherche météo en direct avec prévisions localisées et conditions animées.' },
      'fashion-website': { name: 'Site de Mode', description: 'Une expérience de vente en ligne élégante conçue pour une marque de mode boutique.' },
      'portfolio': { name: 'Portfolio', description: 'Un modèle de portfolio personnel élégant avec présentation animée des projets.' },
      'restaurant-website': { name: 'Site de Restaurant', description: 'Un site de restaurant moderne avec menu en ligne, réservations et galerie.' },
      'church-website': { name: "Site d'Église", description: "Un site communautaire chaleureux avec calendrier d'événements et archives de sermons." },
      'dashboard': { name: 'Tableau de Bord', description: 'Un tableau de bord analytique interne pour suivre les indicateurs clés de l\'entreprise en temps réel.' },
    },
  },
  ht: {
    services: {
      'web-dev': { title: 'Devlopman Sit Entènèt', summary: 'Sit entènèt biznis sou mezi, konstwi avèk teknoloji modèn.', detail: 'Sit entènèt sou mezi ak wo pèfòmans, adapte pou mak ou a — rapid, reyaktif, e fèt pou konvèti vizitè an kliyan.' },
      'web-apps': { title: 'Aplikasyon Wèb', summary: 'React, JavaScript, Python, Django.', detail: 'Aplikasyon wèb konplè ak tablo bò ki mache avèk React, Python ak Django — pou biznis ki bezwen plis pase yon senp sit vitrin.' },
      'redesign': { title: 'Refonte Sit Entènèt', summary: 'Transfòme sit demode an eksperyans modèn.', detail: "Nou modènize sit ki demode oswa ki pa pèfòme byen an eksperyans rapid, adapte pou mobil, san nou pa pèdi referansman ou deja genyen an." },
      'maintenance': { title: 'Antretyen Sit Entènèt', summary: 'Kenbe sit ou a sekirize e ajou.', detail: "Mizajou kontinyèl, sovgad, siveyans disponiblite, ak korije sekirite pou sit ou a kontinye fonksyone pandan w ap jere biznis ou a." },
      'seo': { title: 'Optimizasyon SEO', summary: 'Amelyore vizibilite ou sou Google.', detail: 'SEO teknik, optimizasyon sou paj, ak amelyorasyon pèfòmans pou ede biznis ou jwenn pa kliyan k ap chèche w yo.' },
      'automation': { title: 'Otomatizasyon Biznis', summary: 'Sove tan avèk solisyon wèb sou mezi.', detail: 'Zouti pèsonalize, entegrasyon, ak otomatizasyon atravè API ki elimine travay repetitif nan jounen ekip ou a.' },
    },
    projects: {
      'home-finder': { name: 'Chèche Kay', description: 'Yon platfòm anons imobilye avèk rechèch sou kat, filtè, ak lis kay sovgade.' },
      'weather-app': { name: 'Aplikasyon Move Tan', description: 'Rechèch move tan an dirèk avèk previzyon selon kote ou ye ak kondisyon anime.' },
      'fashion-website': { name: 'Sit Mòd', description: 'Yon eksperyans lavant an liy elegant fèt pou yon mak mòd boutik.' },
      'portfolio': { name: 'Pòtfolyo', description: 'Yon modèl pòtfolyo pèsonèl elegant avèk prezantasyon pwojè anime.' },
      'restaurant-website': { name: 'Sit Restoran', description: 'Yon sit restoran modèn avèk meni an liy, rezèvasyon, ak galri foto.' },
      'church-website': { name: 'Sit Legliz', description: 'Yon sit kominotè akeyan avèk kalandriye evènman ak achiv predikasyon.' },
      'dashboard': { name: 'Tablo Bò', description: 'Yon tablo bò analitik entèn pou swiv endikatè kle biznis an tan reyèl.' },
    },
  },
  es: {
    services: {
      'web-dev': { title: 'Desarrollo de Sitios Web', summary: 'Sitios web empresariales personalizados construidos con tecnologías modernas.', detail: 'Sitios web personalizados de alto rendimiento, adaptados a tu marca — rápidos, responsivos, y diseñados para convertir visitantes en clientes.' },
      'web-apps': { title: 'Aplicaciones Web', summary: 'React, JavaScript, Python, Django.', detail: 'Aplicaciones web completas y paneles de control impulsados por React, Python y Django — para empresas que necesitan más que un sitio informativo.' },
      'redesign': { title: 'Rediseño de Sitios Web', summary: 'Convierte sitios web anticuados en experiencias modernas.', detail: 'Modernizamos sitios desactualizados o de bajo rendimiento en experiencias rápidas y adaptadas a móviles, sin perder tu posicionamiento SEO existente.' },
      'maintenance': { title: 'Mantenimiento de Sitios Web', summary: 'Mantén tu sitio web seguro y actualizado.', detail: 'Actualizaciones continuas, copias de seguridad, monitoreo de disponibilidad y parches de seguridad para que tu sitio siga funcionando mientras administras tu negocio.' },
      'seo': { title: 'Optimización SEO', summary: 'Mejora tu visibilidad en Google.', detail: 'SEO técnico, optimización on-page y ajuste de rendimiento para ayudar a que tu negocio sea encontrado por los clientes que te buscan.' },
      'automation': { title: 'Automatización Empresarial', summary: 'Ahorra tiempo con soluciones web personalizadas.', detail: 'Herramientas personalizadas, integraciones y automatizaciones mediante API que eliminan el trabajo repetitivo del día a día de tu equipo.' },
    },
    projects: {
      'home-finder': { name: 'Buscador de Casas', description: 'Una plataforma de listados inmobiliarios con búsqueda en mapa, filtros y propiedades guardadas.' },
      'weather-app': { name: 'Aplicación del Clima', description: 'Búsqueda del clima en vivo con pronósticos según ubicación y condiciones animadas.' },
      'fashion-website': { name: 'Sitio de Moda', description: 'Una elegante experiencia de comercio electrónico creada para una marca de moda boutique.' },
      'portfolio': { name: 'Portafolio', description: 'Una plantilla de portafolio personal elegante con presentaciones animadas de proyectos.' },
      'restaurant-website': { name: 'Sitio de Restaurante', description: 'Un sitio de restaurante moderno con menú en línea, reservas y galería.' },
      'church-website': { name: 'Sitio de Iglesia', description: 'Un sitio comunitario acogedor con calendario de eventos y archivo de sermones.' },
      'dashboard': { name: 'Panel de Control', description: 'Un panel de análisis interno para seguir los KPI del negocio en tiempo real.' },
    },
  },
};

function rxLocalizeService(s) {
  const lang = (typeof rxGetLang === 'function') ? rxGetLang() : 'en';
  const t = RX_I18N_CONTENT[lang] && RX_I18N_CONTENT[lang].services[s.id];
  return t ? Object.assign({}, s, t) : s;
}

function rxLocalizeProject(p) {
  const lang = (typeof rxGetLang === 'function') ? rxGetLang() : 'en';
  const t = RX_I18N_CONTENT[lang] && RX_I18N_CONTENT[lang].projects[p.id];
  return t ? Object.assign({}, p, t) : p;
}

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
