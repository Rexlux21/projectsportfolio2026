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
      id: 'melanda-alcius',
      image: 'assets/img/projects/melanda-alcius.jpg',
      name: 'Melanda Alcius — Fashion Studio',
      category: ['react', 'business'],
      tech: ['React', 'Motion', 'Admin Panel'],
      description: 'An animated fashion portfolio with service and repair price lists, a contact form and a client-editable admin panel.',
      demo: 'https://rexlux21.github.io/Melanda_Alcius/',
      github: 'https://github.com/Rexlux21/Melanda_Alcius',
    },
    {
      id: 'antioch-church',
      image: 'assets/img/projects/antioch-church.jpg',
      name: 'Antioch Church',
      category: ['business'],
      tech: ['HTML/CSS', 'JavaScript'],
      description: 'A welcoming bilingual (Kreyòl & English) church site for services, ministries and community outreach.',
      demo: 'https://rexlux21.github.io/antioch-church/',
      github: 'https://github.com/Rexlux21/antioch-church',
    },
    {
      id: 'chef-mickeys-kitchen',
      image: 'assets/img/projects/chef-mickeys-kitchen.jpg',
      name: "Chef Mickey's Kitchen",
      category: ['business', 'landing'],
      tech: ['HTML/CSS', 'JavaScript'],
      description: 'A mouth-watering food and catering site that turns visitors into hungry customers.',
      demo: 'https://rexlux21.github.io/chef-mickeys-kitchen/',
      github: 'https://github.com/Rexlux21/chef-mickeys-kitchen',
    },
    {
      id: 'tonus',
      image: 'assets/img/projects/tonus.jpg',
      name: 'Tonus',
      category: ['react'],
      tech: ['JavaScript', 'Web Audio'],
      description: 'A web app for practicing singing and instruments with real-time pitch feedback in the browser.',
      demo: 'https://rexlux21.github.io/tonus/',
      github: 'https://github.com/Rexlux21/tonus',
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
      'melanda-alcius': { name: 'Melanda Alcius — Studio de Mode', description: "Un portfolio de mode animé avec listes de prix des services et retouches, formulaire de contact et panneau d'administration modifiable par le client." },
      'antioch-church': { name: 'Église Antioch', description: "Un site d'église chaleureux et bilingue (créole et anglais) pour les cultes, les ministères et l'action communautaire." },
      'chef-mickeys-kitchen': { name: "Chef Mickey's Kitchen", description: 'Un site de cuisine et de traiteur appétissant qui transforme les visiteurs en clients affamés.' },
      'tonus': { name: 'Tonus', description: 'Une application web pour pratiquer le chant et les instruments avec un retour de justesse en temps réel dans le navigateur.' },
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
      'melanda-alcius': { name: 'Melanda Alcius — Estidyo Mòd', description: 'Yon pòtfolyo mòd anime avèk lis pri sèvis ak reparasyon, fòm kontak, ak yon panno administrasyon kliyan an ka modifye.' },
      'antioch-church': { name: 'Legliz Antioch', description: 'Yon sit legliz akeyan ki an de lang (Kreyòl ak Anglè) pou sèvis, ministè, ak aksyon kominotè.' },
      'chef-mickeys-kitchen': { name: "Chef Mickey's Kitchen", description: 'Yon sit manje ak katering ki fè vizitè yo vin kliyan grangou.' },
      'tonus': { name: 'Tonus', description: 'Yon aplikasyon wèb pou pratike chante ak enstriman avèk retou sou jistès nòt an tan reyèl nan navigatè a.' },
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
      'melanda-alcius': { name: 'Melanda Alcius — Estudio de Moda', description: 'Un portafolio de moda animado con listas de precios de servicios y arreglos, formulario de contacto y un panel de administración editable por el cliente.' },
      'antioch-church': { name: 'Iglesia Antioch', description: 'Un sitio de iglesia acogedor y bilingüe (criollo e inglés) para cultos, ministerios y apoyo a la comunidad.' },
      'chef-mickeys-kitchen': { name: "Chef Mickey's Kitchen", description: 'Un apetitoso sitio de comida y catering que convierte a los visitantes en clientes hambrientos.' },
      'tonus': { name: 'Tonus', description: 'Una aplicación web para practicar canto e instrumentos con retroalimentación de afinación en tiempo real en el navegador.' },
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
