/* =========================================================
   RexLux Digital — i18n (English / French / Haitian Creole / Spanish)
   Static-site translation: elements tagged data-i18n get their
   textContent swapped; data-i18n-placeholder swaps a placeholder;
   data-i18n-typed drives the hero's animated word list. Choice is
   saved in localStorage and re-applied on every page load.
   ========================================================= */

const RX_LANG_KEY = 'rexlux_lang';
const RX_LANGS = ['en', 'fr', 'ht', 'es'];

const RX_I18N = {
  en: {
    'nav.home': 'Home', 'nav.services': 'Services', 'nav.projects': 'Projects', 'nav.contact': 'Contact', 'nav.quote': 'Get a Quote',

    'footer.tagline': 'Premium websites and web applications that help modern businesses grow online.',
    'footer.navigate': 'Navigate', 'footer.legal': 'Legal', 'footer.privacy': 'Privacy Policy', 'footer.admin': 'Admin',
    'footer.updates': 'Stay Updated', 'footer.newsletterText': 'Occasional tips on web design & growth. No spam.',
    'footer.newsletterButton': 'Join', 'footer.rights': 'All rights reserved.', 'footer.backToHome': 'Back to Home',

    'home.eyebrow': 'Web Development Agency',
    'home.title1': 'Modern Websites.', 'home.title2': 'Real ',
    'home.typed': ['Business Growth.', 'More Customers.', 'Online Presence.'],
    'home.lede': 'We build fast, modern websites that help businesses attract more customers and grow online.',
    'home.cta1': 'View Projects', 'home.cta2': 'Get a Free Quote',
    'home.stat1': 'Core Services', 'home.stat2': 'Mobile-First', 'home.stat3': 'Delivery Process', 'home.scroll': 'Scroll',

    'home.about.eyebrow': 'Who We Are',
    'home.about.title': 'Built for businesses that want to look as good as they perform.',
    'home.about.body': 'RexLux Digital is a web development agency focused on building premium websites and web applications for businesses. We combine clean design with modern engineering so your site is fast, credible, and built to grow with you.',
    'home.about.check1': 'Direct communication — no account managers, no runaround',
    'home.about.check2': 'Modern stack: React, Python, Django, JavaScript',
    'home.about.check3': 'Built for speed, SEO and conversions from day one',

    'home.servicesSection.eyebrow': 'What We Do', 'home.servicesSection.title': 'Services built to move the needle',
    'home.servicesSection.subtitle': 'From your first landing page to a full web application, we cover the entire lifecycle of your site.',
    'home.servicesSection.viewAll': 'View All Services',

    'home.projectsSection.eyebrow': 'Selected Work', 'home.projectsSection.title': 'Featured Projects',
    'home.projectsSection.subtitle': 'A look at recent builds spanning business sites, web apps and dashboards.',
    'home.projectsSection.viewAll': 'View Portfolio',

    'home.why.eyebrow': 'Why RexLux', 'home.why.title': 'Why Choose RexLux',
    'home.why.fast': 'Fast Delivery', 'home.why.modern': 'Modern Design', 'home.why.mobile': 'Mobile Friendly',
    'home.why.seo': 'SEO Ready', 'home.why.secure': 'Secure', 'home.why.support': 'Ongoing Support',

    'home.cta.title': 'Ready to build your next website?',
    'home.cta.body': "Tell us about your business and we'll put together a free, no-pressure proposal.",
    'home.cta.button': 'Start Your Project',

    'services.hero.eyebrow': 'What We Offer', 'services.hero.title1': 'Our ', 'services.hero.title2': 'Services',
    'services.hero.subtitle': 'Everything you need to launch, grow and maintain a website that actually works for your business.',
    'services.process.eyebrow': 'How It Works', 'services.process.title': 'Our Process',
    'services.process.subtitle': 'A clear, six-step path from first conversation to launch — and beyond.',
    'services.step1.title': 'Discovery', 'services.step1.desc': 'Understand your business, goals and audience.',
    'services.step2.title': 'Planning', 'services.step2.desc': 'Map the site structure, content and timeline.',
    'services.step3.title': 'Design', 'services.step3.desc': 'Craft a modern look aligned to your brand.',
    'services.step4.title': 'Development', 'services.step4.desc': 'Build a fast, responsive, production-ready site.',
    'services.step5.title': 'Launch', 'services.step5.desc': 'Deploy, test and go live with confidence.',
    'services.step6.title': 'Support', 'services.step6.desc': 'Ongoing maintenance and improvements.',
    'services.cta.title': "Let's Build Something Great",
    'services.cta.body': "Ready to talk about your project? We'd love to hear what you're building.",
    'services.cta.button': 'Contact Us',

    'projects.hero.eyebrow': 'Portfolio', 'projects.hero.title1': 'Our ', 'projects.hero.title2': 'Work',
    'projects.hero.subtitle': "A selection of business sites, web apps and dashboards we've built.",
    'projects.filter.all': 'All', 'projects.filter.business': 'Business', 'projects.filter.react': 'React',
    'projects.filter.python': 'Python', 'projects.filter.landing': 'Landing Pages',
    'projects.cta.title': 'Want to be our next success story?',
    'projects.cta.body': "Let's turn your idea into a fast, modern website that grows your business.",
    'projects.cta.button': 'Start Your Project',
    'projects.demoLabel': 'Live Demo', 'projects.githubLabel': 'GitHub',

    'contact.hero.eyebrow': 'Get In Touch', 'contact.hero.title1': "Let's ", 'contact.hero.title2': 'Talk',
    'contact.hero.subtitle': "Tell us about your project and we'll get back to you within one business day.",
    'contact.form.heading': 'Project Details', 'contact.form.subtext': "Fill out the form and we'll reach out with next steps.",
    'contact.form.name': 'Name', 'contact.form.email': 'Email', 'contact.form.company': 'Company', 'contact.form.phone': 'Phone',
    'contact.form.projectType': 'Project Type', 'contact.form.budget': 'Budget', 'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us a bit about your business and what you need...',
    'contact.form.submit': 'Submit',
    'contact.form.optNewWebsite': 'New Website', 'contact.form.optWebApp': 'Web Application',
    'contact.form.optRedesign': 'Website Redesign', 'contact.form.optMaintenance': 'Maintenance & Support', 'contact.form.optOther': 'Other',
    'contact.form.budget1': 'Under $1,000', 'contact.form.budget2': '$1,000 – $3,000', 'contact.form.budget3': '$3,000 – $7,000',
    'contact.form.budget4': '$7,000+', 'contact.form.budget5': 'Not sure yet',
    'contact.info.heading': 'Business Information', 'contact.info.email': 'Email', 'contact.info.phone': 'Phone',
    'contact.info.location': 'Location', 'contact.info.locationValue': 'Remote — serving clients everywhere',
    'contact.info.hours': 'Business Hours', 'contact.info.hoursValue': 'Mon–Fri, 9am–6pm',
    'contact.faq.eyebrow': 'FAQ', 'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.q1': 'How long does a website take?',
    'contact.faq.a1': 'Most business websites take 2–4 weeks from kickoff to launch, depending on scope. Web applications and larger projects are scoped individually after discovery.',
    'contact.faq.q2': 'Do you redesign websites?',
    'contact.faq.a2': 'Yes. We regularly modernize outdated sites — improving design, speed and mobile experience while preserving your existing content and SEO rankings.',
    'contact.faq.q3': 'Can you maintain my website?',
    'contact.faq.a3': 'Absolutely. We offer ongoing maintenance plans covering updates, backups, security monitoring and small content changes so your site stays healthy after launch.',
    'contact.faq.q4': 'How much does a website cost?',
    'contact.faq.a4': "Pricing depends on scope — a landing page costs less than a full web application. Share your project details in the form above and we'll send a free, no-obligation quote.",
    'contact.cta.title': 'Ready to Grow?',
    'contact.cta.body': "Book a free, no-pressure consultation and let's map out your project.",
    'contact.cta.button': 'Book a Free Consultation',
    'contact.status.sending': 'Sending…',
    'contact.status.success': "Thanks — your message is in. We'll reply within one business day.",
    'contact.status.error': 'Something went wrong sending your message. Please email us directly.',
    'contact.status.networkError': 'Network error — please check your connection and try again.',
    'contact.status.demoMode': 'Demo mode: form captured locally. Connect Formspree in assets/js/contact.js to go live.',

    'privacy.title1': 'Privacy ', 'privacy.title2': 'Policy', 'privacy.updated': 'Last updated: 2026',
    'privacy.collectTitle': 'What we collect',
    'privacy.collectBody': 'When you submit our contact form, we collect the information you provide — name, email, company, phone, project details and message — solely to respond to your inquiry.',
    'privacy.useTitle': 'How we use it',
    'privacy.useBody': 'We use your information only to communicate with you about your project. We do not sell or share your information with third parties, except the form-delivery service that routes submissions to our inbox.',
    'privacy.cookiesTitle': 'Cookies & storage',
    'privacy.cookiesBody': "This site may use your browser's local storage for functional purposes (such as remembering admin content edits on the site owner's own device). We do not use tracking cookies.",
    'privacy.contactTitle': 'Contact',
    'privacy.contactBody': 'Questions about this policy? Email us at hello@rexluxdigital.com.',

    'lang.en': 'English', 'lang.fr': 'Français', 'lang.ht': 'Kreyòl', 'lang.es': 'Español',
  },

  fr: {
    'nav.home': 'Accueil', 'nav.services': 'Services', 'nav.projects': 'Projets', 'nav.contact': 'Contact', 'nav.quote': 'Devis gratuit',

    'footer.tagline': "Des sites web et applications premium qui aident les entreprises modernes à se développer en ligne.",
    'footer.navigate': 'Navigation', 'footer.legal': 'Mentions légales', 'footer.privacy': 'Politique de confidentialité', 'footer.admin': 'Admin',
    'footer.updates': 'Restez informé', 'footer.newsletterText': 'Conseils occasionnels sur le web design et la croissance. Pas de spam.',
    'footer.newsletterButton': "S'inscrire", 'footer.rights': 'Tous droits réservés.', 'footer.backToHome': "Retour à l'accueil",

    'home.eyebrow': 'Agence de développement web',
    'home.title1': 'Des sites modernes.', 'home.title2': 'Une vraie ',
    'home.typed': ["croissance d'entreprise.", 'clientèle élargie.', 'présence en ligne.'],
    'home.lede': 'Nous créons des sites rapides et modernes qui aident les entreprises à attirer plus de clients et à se développer en ligne.',
    'home.cta1': 'Voir les projets', 'home.cta2': 'Devis gratuit',
    'home.stat1': 'Services principaux', 'home.stat2': 'Mobile-first', 'home.stat3': 'Étapes de livraison', 'home.scroll': 'Défiler',

    'home.about.eyebrow': 'Qui sommes-nous',
    'home.about.title': 'Conçu pour les entreprises qui veulent être aussi belles que performantes.',
    'home.about.body': "RexLux Digital est une agence de développement web spécialisée dans la création de sites et d'applications web premium pour les entreprises. Nous combinons un design soigné et une ingénierie moderne pour que votre site soit rapide, crédible et fait pour grandir avec vous.",
    'home.about.check1': 'Communication directe — pas de chargés de compte, pas de détours',
    'home.about.check2': 'Stack moderne : React, Python, Django, JavaScript',
    'home.about.check3': 'Conçu pour la vitesse, le SEO et la conversion dès le premier jour',

    'home.servicesSection.eyebrow': 'Ce que nous faisons', 'home.servicesSection.title': 'Des services pensés pour avoir un impact réel',
    'home.servicesSection.subtitle': "De votre première page de destination à une application web complète, nous couvrons tout le cycle de vie de votre site.",
    'home.servicesSection.viewAll': 'Voir tous les services',

    'home.projectsSection.eyebrow': 'Travaux sélectionnés', 'home.projectsSection.title': 'Projets à la une',
    'home.projectsSection.subtitle': "Un aperçu de nos réalisations récentes : sites d'entreprise, applications web et tableaux de bord.",
    'home.projectsSection.viewAll': 'Voir le portfolio',

    'home.why.eyebrow': 'Pourquoi RexLux', 'home.why.title': 'Pourquoi choisir RexLux',
    'home.why.fast': 'Livraison rapide', 'home.why.modern': 'Design moderne', 'home.why.mobile': 'Adapté au mobile',
    'home.why.seo': 'Optimisé SEO', 'home.why.secure': 'Sécurisé', 'home.why.support': 'Support continu',

    'home.cta.title': 'Prêt à créer votre prochain site web ?',
    'home.cta.body': 'Parlez-nous de votre entreprise et nous préparerons une proposition gratuite, sans engagement.',
    'home.cta.button': 'Démarrer votre projet',

    'services.hero.eyebrow': 'Ce que nous proposons', 'services.hero.title1': 'Nos ', 'services.hero.title2': 'Services',
    'services.hero.subtitle': "Tout ce dont vous avez besoin pour lancer, développer et entretenir un site web réellement efficace pour votre entreprise.",
    'services.process.eyebrow': 'Comment ça marche', 'services.process.title': 'Notre processus',
    'services.process.subtitle': "Un parcours clair en six étapes, de la première conversation jusqu'au lancement — et au-delà.",
    'services.step1.title': 'Découverte', 'services.step1.desc': 'Comprendre votre entreprise, vos objectifs et votre audience.',
    'services.step2.title': 'Planification', 'services.step2.desc': 'Définir la structure du site, le contenu et le calendrier.',
    'services.step3.title': 'Design', 'services.step3.desc': 'Créer une apparence moderne alignée sur votre marque.',
    'services.step4.title': 'Développement', 'services.step4.desc': 'Construire un site rapide, réactif et prêt pour la production.',
    'services.step5.title': 'Lancement', 'services.step5.desc': 'Déployer, tester et mettre en ligne en toute confiance.',
    'services.step6.title': 'Support', 'services.step6.desc': 'Maintenance continue et améliorations.',
    'services.cta.title': 'Construisons quelque chose de formidable',
    'services.cta.body': 'Prêt à parler de votre projet ? Nous aimerions savoir ce que vous construisez.',
    'services.cta.button': 'Contactez-nous',

    'projects.hero.eyebrow': 'Portfolio', 'projects.hero.title1': 'Nos ', 'projects.hero.title2': 'Réalisations',
    'projects.hero.subtitle': "Une sélection de sites d'entreprise, d'applications web et de tableaux de bord que nous avons créés.",
    'projects.filter.all': 'Tout', 'projects.filter.business': 'Entreprise', 'projects.filter.react': 'React',
    'projects.filter.python': 'Python', 'projects.filter.landing': 'Pages de destination',
    'projects.cta.title': 'Envie d\'être notre prochaine réussite ?',
    'projects.cta.body': 'Transformons votre idée en un site web rapide et moderne qui fait grandir votre entreprise.',
    'projects.cta.button': 'Démarrer votre projet',
    'projects.demoLabel': 'Démo en ligne', 'projects.githubLabel': 'GitHub',

    'contact.hero.eyebrow': 'Contactez-nous', 'contact.hero.title1': 'Discutons ', 'contact.hero.title2': 'Ensemble',
    'contact.hero.subtitle': 'Parlez-nous de votre projet, nous vous répondrons sous un jour ouvré.',
    'contact.form.heading': 'Détails du projet', 'contact.form.subtext': 'Remplissez le formulaire et nous vous recontacterons avec les prochaines étapes.',
    'contact.form.name': 'Nom', 'contact.form.email': 'Email', 'contact.form.company': 'Entreprise', 'contact.form.phone': 'Téléphone',
    'contact.form.projectType': 'Type de projet', 'contact.form.budget': 'Budget', 'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Parlez-nous un peu de votre entreprise et de vos besoins...',
    'contact.form.submit': 'Envoyer',
    'contact.form.optNewWebsite': 'Nouveau site web', 'contact.form.optWebApp': 'Application web',
    'contact.form.optRedesign': 'Refonte de site web', 'contact.form.optMaintenance': 'Maintenance & support', 'contact.form.optOther': 'Autre',
    'contact.form.budget1': 'Moins de 1 000 $', 'contact.form.budget2': '1 000 $ – 3 000 $', 'contact.form.budget3': '3 000 $ – 7 000 $',
    'contact.form.budget4': '7 000 $ et plus', 'contact.form.budget5': 'Pas encore sûr',
    'contact.info.heading': "Informations sur l'entreprise", 'contact.info.email': 'Email', 'contact.info.phone': 'Téléphone',
    'contact.info.location': 'Localisation', 'contact.info.locationValue': 'À distance — clients servis partout',
    'contact.info.hours': "Horaires d'ouverture", 'contact.info.hoursValue': 'Lun–Ven, 9h–18h',
    'contact.faq.eyebrow': 'FAQ', 'contact.faq.title': 'Questions fréquentes',
    'contact.faq.q1': 'Combien de temps prend un site web ?',
    'contact.faq.a1': "La plupart des sites d'entreprise prennent 2 à 4 semaines du lancement à la mise en ligne, selon l'ampleur du projet. Les applications web et les projets plus importants sont chiffrés individuellement après la phase de découverte.",
    'contact.faq.q2': 'Faites-vous la refonte de sites existants ?',
    'contact.faq.a2': 'Oui. Nous modernisons régulièrement des sites vieillissants — en améliorant le design, la vitesse et l\'expérience mobile tout en préservant votre contenu existant et votre référencement.',
    'contact.faq.q3': 'Pouvez-vous entretenir mon site web ?',
    'contact.faq.a3': 'Absolument. Nous proposons des forfaits de maintenance continue couvrant les mises à jour, les sauvegardes, la surveillance de sécurité et les petites modifications de contenu pour que votre site reste en bonne santé après le lancement.',
    'contact.faq.q4': 'Combien coûte un site web ?',
    'contact.faq.a4': "Le prix dépend de l'ampleur du projet — une page de destination coûte moins cher qu'une application web complète. Partagez les détails de votre projet dans le formulaire ci-dessus et nous vous enverrons un devis gratuit et sans engagement.",
    'contact.cta.title': 'Prêt à grandir ?',
    'contact.cta.body': 'Réservez une consultation gratuite et sans engagement pour planifier votre projet.',
    'contact.cta.button': 'Réserver une consultation gratuite',
    'contact.status.sending': 'Envoi en cours…',
    'contact.status.success': "Merci — votre message est bien reçu. Nous répondrons sous un jour ouvré.",
    'contact.status.error': "Une erreur s'est produite lors de l'envoi de votre message. Merci de nous écrire directement.",
    'contact.status.networkError': 'Erreur réseau — veuillez vérifier votre connexion et réessayer.',
    'contact.status.demoMode': 'Mode démo : formulaire enregistré localement. Connectez Formspree dans assets/js/contact.js pour activer l\'envoi réel.',

    'privacy.title1': 'Politique de ', 'privacy.title2': 'Confidentialité', 'privacy.updated': 'Dernière mise à jour : 2026',
    'privacy.collectTitle': 'Ce que nous collectons',
    'privacy.collectBody': "Lorsque vous soumettez notre formulaire de contact, nous collectons les informations que vous fournissez — nom, email, entreprise, téléphone, détails du projet et message — uniquement pour répondre à votre demande.",
    'privacy.useTitle': 'Comment nous les utilisons',
    'privacy.useBody': "Nous utilisons vos informations uniquement pour communiquer avec vous au sujet de votre projet. Nous ne vendons ni ne partageons vos informations avec des tiers, à l'exception du service d'envoi de formulaires qui achemine les soumissions vers notre boîte de réception.",
    'privacy.cookiesTitle': 'Cookies et stockage',
    'privacy.cookiesBody': "Ce site peut utiliser le stockage local de votre navigateur à des fins fonctionnelles (comme mémoriser les modifications de contenu de l'administrateur sur son propre appareil). Nous n'utilisons pas de cookies de suivi.",
    'privacy.contactTitle': 'Contact',
    'privacy.contactBody': 'Des questions sur cette politique ? Écrivez-nous à hello@rexluxdigital.com.',

    'lang.en': 'English', 'lang.fr': 'Français', 'lang.ht': 'Kreyòl', 'lang.es': 'Español',
  },

  ht: {
    'nav.home': 'Akèy', 'nav.services': 'Sèvis', 'nav.projects': 'Pwojè', 'nav.contact': 'Kontak', 'nav.quote': 'Mande yon Devi',

    'footer.tagline': 'Sit entènèt ak aplikasyon wèb premium ki ede antrepriz modèn grandi sou entènèt.',
    'footer.navigate': 'Navigasyon', 'footer.legal': 'Legal', 'footer.privacy': 'Politik Konfidansyalite', 'footer.admin': 'Admin',
    'footer.updates': 'Rete Enfòme', 'footer.newsletterText': 'Kèk konsèy sou desen wèb ak kwasans biznis. Pa gen spam.',
    'footer.newsletterButton': 'Enskri', 'footer.rights': 'Tout dwa rezève.', 'footer.backToHome': 'Retounen nan Akèy',

    'home.eyebrow': 'Ajans Devlopman Wèb',
    'home.title1': 'Sit Entènèt Modèn.', 'home.title2': 'Yon Vrè ',
    'home.typed': ['Kwasans Biznis.', 'Plis Kliyan.', 'Prezans sou Entènèt.'],
    'home.lede': 'Nou konstwi sit entènèt rapid ak modèn ki ede biznis atire plis kliyan e grandi sou entènèt.',
    'home.cta1': 'Gade Pwojè yo', 'home.cta2': 'Mande yon Devi Gratis',
    'home.stat1': 'Sèvis Prensipal', 'home.stat2': 'Adapte pou Mobil', 'home.stat3': 'Etap Livrezon', 'home.scroll': 'Fè Woulman',

    'home.about.eyebrow': 'Ki Moun Nou Ye',
    'home.about.title': 'Fèt pou biznis ki vle parèt tout bon jan yo pèfòme a.',
    'home.about.body': "RexLux Digital se yon ajans devlopman wèb ki konsantre sou konstwi sit entènèt ak aplikasyon wèb premium pou biznis. Nou konbine yon bon desen ak yon bon jan enjenyri modèn pou sit ou a ka rapid, kredib, e fèt pou grandi avèk ou.",
    'home.about.check1': 'Kominikasyon dirèk — pa gen jesyonè kont, pa gen detou',
    'home.about.check2': 'Teknoloji modèn: React, Python, Django, JavaScript',
    'home.about.check3': 'Fèt pou vitès, SEO ak konvèsyon depi premye jou a',

    'home.servicesSection.eyebrow': 'Sa Nou Fè', 'home.servicesSection.title': 'Sèvis ki fèt pou fè yon diferans',
    'home.servicesSection.subtitle': 'Depi premye paj antre ou a jiska yon aplikasyon wèb konplè, nou kouvri tout sik lavi sit ou a.',
    'home.servicesSection.viewAll': 'Gade Tout Sèvis yo',

    'home.projectsSection.eyebrow': 'Travay Chwazi', 'home.projectsSection.title': 'Pwojè ki Enpòtan',
    'home.projectsSection.subtitle': 'Yon apèsi sou dènye travay nou fè: sit biznis, aplikasyon wèb ak tablo bò.',
    'home.projectsSection.viewAll': 'Gade Pòtfolyo a',

    'home.why.eyebrow': 'Poukisa RexLux', 'home.why.title': 'Poukisa Chwazi RexLux',
    'home.why.fast': 'Livrezon Rapid', 'home.why.modern': 'Desen Modèn', 'home.why.mobile': 'Byen Adapte pou Mobil',
    'home.why.seo': 'Byen Ajanse pou SEO', 'home.why.secure': 'Sekirize', 'home.why.support': 'Sipò Kontinyèl',

    'home.cta.title': 'Ou pare pou konstwi pwochen sit entènèt ou a?',
    'home.cta.body': 'Pale nou sou biznis ou a e n ap prepare yon pwopozisyon gratis, san okenn presyon.',
    'home.cta.button': 'Kòmanse Pwojè Ou a',

    'services.hero.eyebrow': 'Sa Nou Ofri', 'services.hero.title1': '', 'services.hero.title2': 'Sèvis Nou yo',
    'services.hero.subtitle': 'Tout sa ou bezwen pou lanse, grandi, ak antreteni yon sit entènèt ki reyèlman itil pou biznis ou a.',
    'services.process.eyebrow': 'Kijan Sa Mache', 'services.process.title': 'Pwosesis Nou an',
    'services.process.subtitle': 'Yon chemen klè an sis etap, depi premye konvèsasyon an jiska lansman an — e pi lwen toujou.',
    'services.step1.title': 'Dekouvèt', 'services.step1.desc': 'Konprann biznis ou, objektif ou ak odyans ou.',
    'services.step2.title': 'Planifikasyon', 'services.step2.desc': 'Defini estrikti sit la, kontni an, ak orè a.',
    'services.step3.title': 'Desen', 'services.step3.desc': 'Kreye yon aparans modèn ki alinye ak mak ou a.',
    'services.step4.title': 'Devlopman', 'services.step4.desc': 'Konstwi yon sit rapid, reyaktif, e pare pou pwodiksyon.',
    'services.step5.title': 'Lansman', 'services.step5.desc': 'Deplwaye, teste, e mete an liy avèk konfyans.',
    'services.step6.title': 'Sipò', 'services.step6.desc': 'Antretyen kontinyèl ak amelyorasyon.',
    'services.cta.title': 'Ann Konstwi Yon Bagay Ekstraòdinè',
    'services.cta.body': 'Ou pare pou pale sou pwojè ou a? Nou ta renmen konnen sa w ap konstwi.',
    'services.cta.button': 'Kontakte Nou',

    'projects.hero.eyebrow': 'Pòtfolyo', 'projects.hero.title1': '', 'projects.hero.title2': 'Travay Nou',
    'projects.hero.subtitle': 'Yon seleksyon sit biznis, aplikasyon wèb, ak tablo bò nou te konstwi.',
    'projects.filter.all': 'Tout', 'projects.filter.business': 'Biznis', 'projects.filter.react': 'React',
    'projects.filter.python': 'Python', 'projects.filter.landing': 'Paj Antre',
    'projects.cta.title': 'Ou vle vin pwochen siksè nou an?',
    'projects.cta.body': 'Ann transfòme lide ou a an yon sit entènèt rapid e modèn ki fè biznis ou grandi.',
    'projects.cta.button': 'Kòmanse Pwojè Ou a',
    'projects.demoLabel': 'Demo an Dirèk', 'projects.githubLabel': 'GitHub',

    'contact.hero.eyebrow': 'Kontakte Nou', 'contact.hero.title1': '', 'contact.hero.title2': 'Ann Pale',
    'contact.hero.subtitle': 'Pale nou sou pwojè ou a e n ap reponn ou nan yon jou ouvrab.',
    'contact.form.heading': 'Detay Pwojè a', 'contact.form.subtext': 'Ranpli fòm lan e n ap kontakte w avèk pwochen etap yo.',
    'contact.form.name': 'Non', 'contact.form.email': 'Imel', 'contact.form.company': 'Konpayi', 'contact.form.phone': 'Telefòn',
    'contact.form.projectType': 'Kalite Pwojè', 'contact.form.budget': 'Bidjè', 'contact.form.message': 'Mesaj',
    'contact.form.messagePlaceholder': 'Di nou yon ti kras sou biznis ou a ak sa ou bezwen...',
    'contact.form.submit': 'Voye',
    'contact.form.optNewWebsite': 'Nouvo Sit Entènèt', 'contact.form.optWebApp': 'Aplikasyon Wèb',
    'contact.form.optRedesign': 'Refonte Sit Entènèt', 'contact.form.optMaintenance': 'Antretyen & Sipò', 'contact.form.optOther': 'Lòt',
    'contact.form.budget1': 'Mwens pase $1,000', 'contact.form.budget2': '$1,000 – $3,000', 'contact.form.budget3': '$3,000 – $7,000',
    'contact.form.budget4': '$7,000+', 'contact.form.budget5': 'Poko sèten',
    'contact.info.heading': 'Enfòmasyon sou Biznis la', 'contact.info.email': 'Imel', 'contact.info.phone': 'Telefòn',
    'contact.info.location': 'Kote', 'contact.info.locationValue': 'Adistans — nou sèvi kliyan toupatou',
    'contact.info.hours': 'Orè Biznis', 'contact.info.hoursValue': 'Lin–Van, 9zè–6zè',
    'contact.faq.eyebrow': 'FAQ', 'contact.faq.title': 'Kesyon yo Poze Souvan',
    'contact.faq.q1': 'Konbyen tan yon sit entènèt pran?',
    'contact.faq.a1': 'Pifò sit biznis pran 2 a 4 semèn depi kòmansman jiska lansman, dapre gwosè pwojè a. Aplikasyon wèb ak pi gwo pwojè yo evalye endividyèlman apre yon etap dekouvèt.',
    'contact.faq.q2': 'Èske nou fè refonte sit entènèt?',
    'contact.faq.a2': 'Wi. Nou modènize regilyèman sit ki demode — nou amelyore desen, vitès, ak eksperyans mobil pandan n ap konsève kontni ou deja genyen an ansanm ak klasman SEO ou a.',
    'contact.faq.q3': 'Èske nou ka antreteni sit entènèt mwen an?',
    'contact.faq.a3': 'Wi, absoliman. Nou ofri plan antretyen kontinyèl ki kouvri mizajou, sovgad, siveyans sekirite, ak ti chanjman nan kontni pou sit ou a rete an bon sante apre lansman an.',
    'contact.faq.q4': 'Konbyen yon sit entènèt koute?',
    'contact.faq.a4': 'Pri a depann de gwosè pwojè a — yon paj antre koute mwens pase yon aplikasyon wèb konplè. Pataje detay pwojè ou a nan fòm anwo a e n ap voye yon devi gratis, san okenn angajman.',
    'contact.cta.title': 'Ou Pare pou Grandi?',
    'contact.cta.body': 'Rezève yon konsiltasyon gratis, san presyon, e ann planifye pwojè ou a.',
    'contact.cta.button': 'Rezève yon Konsiltasyon Gratis',
    'contact.status.sending': 'Ap voye…',
    'contact.status.success': 'Mèsi — mesaj ou a rive. N ap reponn ou nan yon jou ouvrab.',
    'contact.status.error': 'Gen yon pwoblèm ki fèt pandan n ap voye mesaj ou a. Tanpri ekri nou dirèkteman.',
    'contact.status.networkError': 'Erè rezo — tanpri verifye koneksyon ou e eseye ankò.',
    'contact.status.demoMode': 'Mòd demo: fòm lan anrejistre lokalman. Konekte Formspree nan assets/js/contact.js pou aktive voye reyèl la.',

    'privacy.title1': 'Politik ', 'privacy.title2': 'Konfidansyalite', 'privacy.updated': 'Dènye mizajou: 2026',
    'privacy.collectTitle': 'Sa Nou Kolekte',
    'privacy.collectBody': 'Lè ou soumèt fòm kontak nou an, nou kolekte enfòmasyon ou bay yo — non, imel, konpayi, telefòn, detay pwojè, ak mesaj — sèlman pou reponn a demann ou an.',
    'privacy.useTitle': 'Kijan Nou Itilize Yo',
    'privacy.useBody': 'Nou itilize enfòmasyon ou yo sèlman pou kominike avèk ou sou pwojè ou a. Nou pa vann ni pataje enfòmasyon ou yo ak twazyèm pati, sof sèvis ki delivre fòm lan ki achemine soumisyon yo nan bwat resepsyon nou an.',
    'privacy.cookiesTitle': 'Cookies & Estokaj',
    'privacy.cookiesBody': 'Sit sa a ka itilize estokaj lokal navigatè ou a pou rezon fonksyonèl (tankou sonje chanjman kontni administratè a fè sou pwòp aparèy li). Nou pa itilize cookies swiv.',
    'privacy.contactTitle': 'Kontak',
    'privacy.contactBody': 'Ou gen kesyon sou politik sa a? Ekri nou nan hello@rexluxdigital.com.',

    'lang.en': 'English', 'lang.fr': 'Français', 'lang.ht': 'Kreyòl', 'lang.es': 'Español',
  },

  es: {
    'nav.home': 'Inicio', 'nav.services': 'Servicios', 'nav.projects': 'Proyectos', 'nav.contact': 'Contacto', 'nav.quote': 'Solicitar Presupuesto',

    'footer.tagline': 'Sitios web y aplicaciones premium que ayudan a las empresas modernas a crecer en línea.',
    'footer.navigate': 'Navegación', 'footer.legal': 'Legal', 'footer.privacy': 'Política de Privacidad', 'footer.admin': 'Admin',
    'footer.updates': 'Mantente Informado', 'footer.newsletterText': 'Consejos ocasionales sobre diseño web y crecimiento. Sin spam.',
    'footer.newsletterButton': 'Unirse', 'footer.rights': 'Todos los derechos reservados.', 'footer.backToHome': 'Volver al Inicio',

    'home.eyebrow': 'Agencia de Desarrollo Web',
    'home.title1': 'Sitios Web Modernos.', 'home.title2': 'Más ',
    'home.typed': ['Crecimiento Empresarial.', 'Clientes.', 'Presencia en Línea.'],
    'home.lede': 'Creamos sitios web rápidos y modernos que ayudan a las empresas a atraer más clientes y crecer en línea.',
    'home.cta1': 'Ver Proyectos', 'home.cta2': 'Solicitar Presupuesto Gratis',
    'home.stat1': 'Servicios Principales', 'home.stat2': 'Compatible con Móviles', 'home.stat3': 'Pasos de Entrega', 'home.scroll': 'Desplázate',

    'home.about.eyebrow': 'Quiénes Somos',
    'home.about.title': 'Creado para empresas que quieren verse tan bien como funcionan.',
    'home.about.body': 'RexLux Digital es una agencia de desarrollo web enfocada en crear sitios web y aplicaciones premium para empresas. Combinamos un diseño limpio con ingeniería moderna para que tu sitio sea rápido, confiable y preparado para crecer contigo.',
    'home.about.check1': 'Comunicación directa — sin gestores de cuenta, sin rodeos',
    'home.about.check2': 'Stack moderno: React, Python, Django, JavaScript',
    'home.about.check3': 'Diseñado para velocidad, SEO y conversiones desde el primer día',

    'home.servicesSection.eyebrow': 'Qué Hacemos', 'home.servicesSection.title': 'Servicios diseñados para marcar la diferencia',
    'home.servicesSection.subtitle': 'Desde tu primera landing page hasta una aplicación web completa, cubrimos todo el ciclo de vida de tu sitio.',
    'home.servicesSection.viewAll': 'Ver Todos los Servicios',

    'home.projectsSection.eyebrow': 'Trabajo Seleccionado', 'home.projectsSection.title': 'Proyectos Destacados',
    'home.projectsSection.subtitle': 'Un vistazo a nuestros trabajos recientes: sitios empresariales, aplicaciones web y paneles de control.',
    'home.projectsSection.viewAll': 'Ver Portafolio',

    'home.why.eyebrow': 'Por Qué RexLux', 'home.why.title': 'Por Qué Elegir RexLux',
    'home.why.fast': 'Entrega Rápida', 'home.why.modern': 'Diseño Moderno', 'home.why.mobile': 'Compatible con Móviles',
    'home.why.seo': 'Optimizado para SEO', 'home.why.secure': 'Seguro', 'home.why.support': 'Soporte Continuo',

    'home.cta.title': '¿Listo para construir tu próximo sitio web?',
    'home.cta.body': 'Cuéntanos sobre tu negocio y prepararemos una propuesta gratuita, sin compromiso.',
    'home.cta.button': 'Inicia Tu Proyecto',

    'services.hero.eyebrow': 'Lo Que Ofrecemos', 'services.hero.title1': 'Nuestros ', 'services.hero.title2': 'Servicios',
    'services.hero.subtitle': 'Todo lo que necesitas para lanzar, hacer crecer y mantener un sitio web que realmente funcione para tu negocio.',
    'services.process.eyebrow': 'Cómo Funciona', 'services.process.title': 'Nuestro Proceso',
    'services.process.subtitle': 'Un camino claro en seis pasos, desde la primera conversación hasta el lanzamiento — y más allá.',
    'services.step1.title': 'Descubrimiento', 'services.step1.desc': 'Entender tu negocio, objetivos y audiencia.',
    'services.step2.title': 'Planificación', 'services.step2.desc': 'Definir la estructura del sitio, el contenido y el cronograma.',
    'services.step3.title': 'Diseño', 'services.step3.desc': 'Crear una apariencia moderna alineada con tu marca.',
    'services.step4.title': 'Desarrollo', 'services.step4.desc': 'Construir un sitio rápido, responsivo y listo para producción.',
    'services.step5.title': 'Lanzamiento', 'services.step5.desc': 'Desplegar, probar y salir en vivo con confianza.',
    'services.step6.title': 'Soporte', 'services.step6.desc': 'Mantenimiento continuo y mejoras.',
    'services.cta.title': 'Construyamos Algo Grandioso',
    'services.cta.body': '¿Listo para hablar de tu proyecto? Nos encantaría saber qué estás construyendo.',
    'services.cta.button': 'Contáctanos',

    'projects.hero.eyebrow': 'Portafolio', 'projects.hero.title1': 'Nuestro ', 'projects.hero.title2': 'Trabajo',
    'projects.hero.subtitle': 'Una selección de sitios empresariales, aplicaciones web y paneles de control que hemos creado.',
    'projects.filter.all': 'Todos', 'projects.filter.business': 'Empresas', 'projects.filter.react': 'React',
    'projects.filter.python': 'Python', 'projects.filter.landing': 'Landing Pages',
    'projects.cta.title': '¿Quieres ser nuestra próxima historia de éxito?',
    'projects.cta.body': 'Convirtamos tu idea en un sitio web rápido y moderno que haga crecer tu negocio.',
    'projects.cta.button': 'Inicia Tu Proyecto',
    'projects.demoLabel': 'Demo en Vivo', 'projects.githubLabel': 'GitHub',

    'contact.hero.eyebrow': 'Ponte en Contacto', 'contact.hero.title1': '', 'contact.hero.title2': 'Hablemos',
    'contact.hero.subtitle': 'Cuéntanos sobre tu proyecto y te responderemos dentro de un día hábil.',
    'contact.form.heading': 'Detalles del Proyecto', 'contact.form.subtext': 'Completa el formulario y te contactaremos con los próximos pasos.',
    'contact.form.name': 'Nombre', 'contact.form.email': 'Correo Electrónico', 'contact.form.company': 'Empresa', 'contact.form.phone': 'Teléfono',
    'contact.form.projectType': 'Tipo de Proyecto', 'contact.form.budget': 'Presupuesto', 'contact.form.message': 'Mensaje',
    'contact.form.messagePlaceholder': 'Cuéntanos un poco sobre tu negocio y lo que necesitas...',
    'contact.form.submit': 'Enviar',
    'contact.form.optNewWebsite': 'Sitio Web Nuevo', 'contact.form.optWebApp': 'Aplicación Web',
    'contact.form.optRedesign': 'Rediseño de Sitio Web', 'contact.form.optMaintenance': 'Mantenimiento y Soporte', 'contact.form.optOther': 'Otro',
    'contact.form.budget1': 'Menos de $1,000', 'contact.form.budget2': '$1,000 – $3,000', 'contact.form.budget3': '$3,000 – $7,000',
    'contact.form.budget4': '$7,000+', 'contact.form.budget5': 'Aún no estoy seguro',
    'contact.info.heading': 'Información del Negocio', 'contact.info.email': 'Correo Electrónico', 'contact.info.phone': 'Teléfono',
    'contact.info.location': 'Ubicación', 'contact.info.locationValue': 'Remoto — atendemos clientes en todas partes',
    'contact.info.hours': 'Horario de Atención', 'contact.info.hoursValue': 'Lun–Vie, 9am–6pm',
    'contact.faq.eyebrow': 'Preguntas Frecuentes', 'contact.faq.title': 'Preguntas Frecuentes',
    'contact.faq.q1': '¿Cuánto tiempo toma un sitio web?',
    'contact.faq.a1': 'La mayoría de los sitios web empresariales toman de 2 a 4 semanas desde el inicio hasta el lanzamiento, según el alcance. Las aplicaciones web y proyectos más grandes se cotizan individualmente después de la fase de descubrimiento.',
    'contact.faq.q2': '¿Rediseñan sitios web existentes?',
    'contact.faq.a2': 'Sí. Modernizamos regularmente sitios desactualizados — mejorando el diseño, la velocidad y la experiencia móvil, preservando tu contenido existente y tu posicionamiento SEO.',
    'contact.faq.q3': '¿Pueden mantener mi sitio web?',
    'contact.faq.a3': 'Por supuesto. Ofrecemos planes de mantenimiento continuo que cubren actualizaciones, copias de seguridad, monitoreo de seguridad y pequeños cambios de contenido para que tu sitio se mantenga saludable después del lanzamiento.',
    'contact.faq.q4': '¿Cuánto cuesta un sitio web?',
    'contact.faq.a4': 'El precio depende del alcance — una landing page cuesta menos que una aplicación web completa. Comparte los detalles de tu proyecto en el formulario de arriba y te enviaremos un presupuesto gratuito y sin compromiso.',
    'contact.cta.title': '¿Listo para Crecer?',
    'contact.cta.body': 'Reserva una consulta gratuita y sin compromiso, y planifiquemos tu proyecto.',
    'contact.cta.button': 'Reservar Consulta Gratuita',
    'contact.status.sending': 'Enviando…',
    'contact.status.success': 'Gracias — tu mensaje ha sido recibido. Responderemos dentro de un día hábil.',
    'contact.status.error': 'Algo salió mal al enviar tu mensaje. Por favor escríbenos directamente.',
    'contact.status.networkError': 'Error de red — por favor verifica tu conexión e intenta de nuevo.',
    'contact.status.demoMode': 'Modo demo: formulario guardado localmente. Conecta Formspree en assets/js/contact.js para activar el envío real.',

    'privacy.title1': 'Política de ', 'privacy.title2': 'Privacidad', 'privacy.updated': 'Última actualización: 2026',
    'privacy.collectTitle': 'Qué Recopilamos',
    'privacy.collectBody': 'Cuando envías nuestro formulario de contacto, recopilamos la información que proporcionas — nombre, correo electrónico, empresa, teléfono, detalles del proyecto y mensaje — únicamente para responder a tu consulta.',
    'privacy.useTitle': 'Cómo la Usamos',
    'privacy.useBody': 'Usamos tu información únicamente para comunicarnos contigo sobre tu proyecto. No vendemos ni compartimos tu información con terceros, excepto el servicio de envío de formularios que dirige las solicitudes a nuestra bandeja de entrada.',
    'privacy.cookiesTitle': 'Cookies y Almacenamiento',
    'privacy.cookiesBody': 'Este sitio puede usar el almacenamiento local de tu navegador con fines funcionales (como recordar las ediciones de contenido del administrador en su propio dispositivo). No usamos cookies de seguimiento.',
    'privacy.contactTitle': 'Contacto',
    'privacy.contactBody': '¿Preguntas sobre esta política? Escríbenos a hello@rexluxdigital.com.',

    'lang.en': 'English', 'lang.fr': 'Français', 'lang.ht': 'Kreyòl', 'lang.es': 'Español',
  },
};

function rxGetLang() {
  const saved = localStorage.getItem(RX_LANG_KEY);
  return RX_LANGS.includes(saved) ? saved : 'en';
}

function rxSetLang(lang) {
  if (!RX_LANGS.includes(lang)) return;
  localStorage.setItem(RX_LANG_KEY, lang);
  rxApplyI18n();
  if (typeof rxInitTyped === 'function') rxInitTyped();
  rxRefreshGrids();
}

function rxT(key) {
  const lang = rxGetLang();
  const dict = RX_I18N[lang] || RX_I18N.en;
  if (dict[key] !== undefined) return dict[key];
  return RX_I18N.en[key] !== undefined ? RX_I18N.en[key] : key;
}

function rxApplyI18n() {
  const lang = rxGetLang();
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = rxT(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', rxT(el.dataset.i18nPlaceholder));
  });
  document.querySelectorAll('[data-i18n-typed]').forEach((el) => {
    const key = el.dataset.i18nTyped;
    const dict = RX_I18N[lang] || RX_I18N.en;
    const arr = dict[key] || RX_I18N.en[key] || [];
    el.setAttribute('data-typed', JSON.stringify(arr));
  });

  const select = document.getElementById('lang-switcher');
  if (select) select.value = lang;
}

function rxRefreshGrids() {
  if (typeof rxRenderServices === 'function') {
    if (document.getElementById('home-services-grid')) rxRenderServices('#home-services-grid', { limit: 4 });
    if (document.getElementById('all-services-grid')) rxRenderServices('#all-services-grid', { detail: true });
  }
  if (typeof rxRenderProjects === 'function') {
    if (document.getElementById('featured-projects-grid')) rxRenderProjects('#featured-projects-grid', { limit: 3 });
    const allProjGrid = document.getElementById('all-projects-grid');
    if (allProjGrid) {
      rxRenderProjects('#all-projects-grid');
      const activeBtn = document.querySelector('.filter-row .filter-btn.active');
      const filter = activeBtn ? activeBtn.dataset.filter : 'all';
      allProjGrid.querySelectorAll('.project-card').forEach((card) => {
        const cats = (card.dataset.category || '').split(' ');
        card.classList.toggle('hide', !(filter === 'all' || cats.includes(filter)));
      });
    }
  }
}

rxApplyI18n();
const rxLangSelect = document.getElementById('lang-switcher');
if (rxLangSelect) {
  rxLangSelect.value = rxGetLang();
  rxLangSelect.addEventListener('change', (e) => rxSetLang(e.target.value));
}
