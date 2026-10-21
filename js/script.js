document.addEventListener('DOMContentLoaded', function() {
    const initializers = [
        initLanguageAndContent,
        initNavbar,
        initTypingEffect,
        initOrbitAnimations,
        initSunPhotoModal,
        initSmoothScroll,
        initProjectFilters,
        initCopyEmail,
        initProjectLinkLabels,
        initSectionAnimations,
        initSimpleStats,
        initScrollReveal,
        initHeroVisibility
    ];

    initializers.forEach((initializer) => {
        try {
            initializer();
        } catch (error) {
            console.error(`Init error in ${initializer.name}:`, error);
        }
    });
});

const I18N = {
    fr: {
        title: 'Scotty Delmart — Développeur Web & Logiciel | Portfolio',
        description: 'Portfolio de Scotty Delmart, développeur web, applications et logiciels basé à Limoges. Découvrez mes projets, mes compétences et mes coordonnées.',
        a11y: {
            skip: 'Aller au contenu',
            menu: 'Ouvrir le menu'
        },
        nav: {
            home: 'Accueil',
            about: 'À propos',
            parcours: 'Parcours',
            projects: 'Projets',
            pro: 'Freelance',
            contact: 'Contact',
            portfolio: 'Portfolio'
        },
        pro: {
            title: 'Besoin d\'un site web ou d\'une application ?',
            text: 'Je conçois des sites web et des applications sur mesure — modernes, rapides et performants — pour les pros, indépendants et associations via mon activité Delmart Digital.',
            cta: 'Découvrir Delmart Digital',
            services: {
                web: {
                    title: 'Développement web',
                    text: 'Sites vitrines (dès 350 €), boutiques e-commerce et applications web, rapides et optimisées pour le référencement.'
                },
                software: {
                    title: 'Logiciels sur mesure',
                    text: 'Outils métier, automatisations, bases de données, API et maintenance, conçus pour coller à votre façon de travailler. Sur devis.'
                },
                hardware: {
                    title: 'Dépannage & hardware',
                    text: 'Diagnostic (25 €), montage, réparation, nettoyage et récupération de données, sur site en Limousin ou à distance.'
                }
            },
            highlights: {
                response: 'Délai de réponse',
                unique: 'Livraison d\'un site vitrine',
                uniqueValue: '2 à 3 sem.',
                free: 'Devis sans engagement',
                freeValue: 'Gratuit'
            }
        },
        pages: {
            notFound: {
                title: '404 - Page introuvable | Scotty Dev',
                description: 'La page demandée est introuvable. Retournez à l\'accueil du portfolio de Scotty Dev.',
                heading: 'Page introuvable',
                message: 'Le lien demandé n\'existe plus ou a été déplacé. Tu peux revenir à l\'accueil ou continuer vers les pages principales du site.',
                backHome: 'Retour à l\'accueil',
                viewPortfolio: 'Voir le portfolio'
            }
        },
        hero: {
            greeting: 'Bonjour, je suis Scotty',
            quote: 'Applications web, jeux et logiciels : je les conçois, les développe et les héberge moi-même',
            profile: 'Voir mes projets par domaine :',
            facts: {
                studyLabel: 'Formation',
                study: 'BUT Informatique (3ème année), IUT du Limousin',
                workLabel: 'En entreprise',
                work: 'Alternant chez Sicame Group',
                specLabel: 'Spécialité',
                spec: 'Web full-stack, orientation infrastructure',
                interestLabel: 'Intérêts',
                interest: 'Jeux vidéo, administration système'
            },
            profileWeb: 'Développement web & logiciel',
            profileInfra: 'Infrastructure & réseau',
            profileWork: 'Projets en entreprise',
            cv: 'Télécharger mon CV',
            typing: ['Développeur Web & Logiciel']
        },
        stats: {
            projects: 'Projets construits',
            tech: 'Technologies utilisées',
            response: 'Réponse moyenne (h)'
        },
        about: {
            title: 'À propos de moi',
            skills: 'Ce que je sais faire, et où le voir',
            proof: {
                web: 'Web full-stack',
                games: 'Jeux et logiciels',
                infra: 'Infrastructure et auto-hébergement',
                team: 'Projet en équipe',
                nas: 'NAS personnel'
            }
        },
        parcours: {
            title: 'Parcours',
            sicame: {
                date: '09/2026 — Présent',
                title: 'Assistant chef de projet logiciel (alternance)',
                org: 'Sicame Group · Arnac-Pompadour',
                b1: 'Administration et paramétrage d\'outils applicatifs métiers (3D Experience) et gestion des référentiels composants.',
                b2: 'Résolution d\'incidents techniques, automatisation de tâches par scripts et accompagnement des utilisateurs.'
            },
            delmart: {
                date: 'En parallèle',
                title: 'Développeur freelance',
                org: 'Delmart Digital · Limoges',
                b1: 'Sites web, logiciels sur mesure et dépannage hardware pour des particuliers et de petites structures, du devis gratuit à la maintenance.',
                link: 'Découvrir Delmart Digital'
            },
            onyx: {
                date: '04/2026 — 05/2026',
                title: 'Développeur full-stack (stage de 8 semaines)',
                org: 'SAS Onyx',
                b1: 'Conception et déploiement d\'un site vitrine et d\'une application de planning mobile-first avec Next.js et Supabase.',
                b2: 'Modélisation, gestion et optimisation d\'une base PostgreSQL (normalisation 3NF).',
                link: 'Voir le projet'
            },
            but: {
                date: '2024 — En cours',
                title: 'BUT Informatique (3ème année)',
                org: 'IUT du Limousin · Limoges',
                b1: 'Parcours Développement d\'applications : algorithmique, bases de données, développement web, systèmes et réseaux.',
                b2: 'SAE menées en équipe, dont un projet pour Legrand.',
                link: 'Voir mes compétences'
            },
            bac: {
                date: '2021 — 2024',
                title: 'Baccalauréat général',
                org: 'Lycée E. Perrier · Tulle',
                b1: 'Spécialités Mathématiques et NSI : première approche du développement logiciel et des algorithmes.'
            }
        },
        projects: {
            title: 'Mes Projets',
            featured: 'Projet phare',
            viewSite: 'Voir le site',
            filters: {
                label: 'Filtrer les projets',
                all: 'Tous',
                web: 'Web',
                games: 'Jeux',
                infra: 'Infra & réseau',
                work: 'Entreprise',
                course: 'Cours'
            },
            code: 'Voir le code',
            delmart: {
                title: 'Delmart Digital',
                short: 'Mon activité freelance à Limoges : sites web, logiciels sur mesure et dépannage hardware, du devis gratuit à la maintenance.'
            },
            nas: {
                badge: 'Projet personnel',
                title: 'NAS Personnel — Dashboard d\'administration',
                short: 'NAS personnel de ~2 To auto-hébergé sur un vieux ThinkPad, avec un dashboard d\'administration sur mesure : monitoring, MySQL, serveurs Minecraft.',
                viewMore: 'Voir plus'
            },
            doucebrise: {
                playable: '▶ Jouable en ligne',
                badge: 'Projet personnel',
                title: 'Doucebrise — Jeu 3D cosy dans le navigateur',
                short: 'Jeu 3D cosy jouable dans le navigateur : un archipel à explorer, des animaux à apprivoiser, une maison à décorer. Three.js, sans moteur.'
            },
            kinetik: {
                badge: 'Projet personnel',
                title: 'KINETIK — Sokoban & Labyrinthe',
                short: 'Puzzle multiplateforme : Sokoban futuriste de 80 niveaux et labyrinthe à énigmes, avec éditeur de niveaux et classements en ligne.'
            },
            meteo: {
                badge: 'Projet personnel',
                title: 'Scott\'Météo — App météo auto-hébergée',
                short: 'App météo auto-hébergée : web, PWA et widget iOS sur une même API. Next.js, rendu serveur et conteneur Docker léger.'
            },
            sasonyx: {
                badge: 'Stage en entreprise',
                title: 'SAS Onyx Planning',
                short: 'Site vitrine et application de planning des interventions réalisés pendant mon stage : calendrier, clients, techniciens, entretiens annuels.'
            },
            netflix: {
                title: 'Netflix — Plateforme de location de films',
                short: 'Clone full-stack de Netflix : interface React, API REST Express + MongoDB, catalogue, location de films et espace « Mes locations ».'
            },
            fiche: {
                title: 'Projet réalisé pour Legrand',
                short: 'SAE pour Legrand, en équipe de 5 : un éditeur web de modes opératoires pour remplacer Excel. Ma part : base de données, sécurité, recherche.'
            },
            latice: {
                title: 'Latice — Jeu en Java',
                short: 'Jeu de société Latice en Java/JavaFX, repris en solo : mode IA, aide au placement, historique et 35 tests JUnit 5.'
            },
            details: 'Voir le détail',
            viewAll: 'Voir tout mon portfolio'
        },
        contact: {
            title: 'Contactez-moi',
            intro: 'Une question, un projet ou une opportunité ? N\'hésitez pas à me contacter.',
            location: 'Limoges (87), France',
            copy: 'Copier mon adresse',
            copied: 'Adresse copiée !'
        },
        langToggle: 'FR / EN (FR)'
    },
    en: {
        title: 'Scotty Delmart — Web & Software Developer | Portfolio',
        description: 'Portfolio of Scotty Delmart, web, application and software developer based in Limoges. Explore my projects, skills and contact details.',
        a11y: {
            skip: 'Skip to content',
            menu: 'Open menu'
        },
        nav: {
            home: 'Home',
            about: 'About',
            parcours: 'Career',
            projects: 'Projects',
            pro: 'Freelance',
            contact: 'Contact',
            portfolio: 'Portfolio'
        },
        pro: {
            title: 'Need a website or an app?',
            text: 'I build custom websites and applications — modern, fast and high-performance — for professionals, freelancers and associations through my Delmart Digital business.',
            cta: 'Discover Delmart Digital',
            services: {
                web: {
                    title: 'Web development',
                    text: 'Showcase sites (from €350), online shops and web applications, fast and optimized for search engines.'
                },
                software: {
                    title: 'Custom software',
                    text: 'Business tools, automation, databases, APIs and maintenance, designed to fit the way you work. Quote-based.'
                },
                hardware: {
                    title: 'Repairs & hardware',
                    text: 'Diagnostics (€25), PC building, repairs, cleaning and data recovery, on-site in the Limousin area or remotely.'
                }
            },
            highlights: {
                response: 'Response time',
                unique: 'Delivery of a showcase site',
                uniqueValue: '2 to 3 wks',
                free: 'No-obligation quote',
                freeValue: 'Free'
            }
        },
        pages: {
            notFound: {
                title: '404 - Page not found | Scotty Dev',
                description: 'The requested page cannot be found. Return to the Scotty Dev portfolio homepage.',
                heading: 'Page not found',
                message: 'The requested link no longer exists or has been moved. You can go back home or continue to the main pages.',
                backHome: 'Back to home',
                viewPortfolio: 'View portfolio'
            }
        },
        hero: {
            greeting: 'Hi, I\'m Scotty',
            quote: 'Web apps, games and software: I design, build and self-host them',
            profile: 'Browse my projects by field:',
            facts: {
                studyLabel: 'Studies',
                study: 'BUT Computer Science (3rd year), IUT du Limousin',
                workLabel: 'At work',
                work: 'Work-study at Sicame Group',
                specLabel: 'Specialty',
                spec: 'Full-stack web, infrastructure focus',
                interestLabel: 'Interests',
                interest: 'Video games, system administration'
            },
            profileWeb: 'Web & software development',
            profileInfra: 'Infrastructure & networking',
            profileWork: 'Company projects',
            cv: 'Download my CV',
            typing: ['Web & Software Developer']
        },
        stats: {
            projects: 'Projects built',
            tech: 'Technologies used',
            response: 'Average response (h)'
        },
        about: {
            title: 'About me',
            skills: 'What I can do, and where to see it',
            proof: {
                web: 'Full-stack web',
                games: 'Games and software',
                infra: 'Infrastructure and self-hosting',
                team: 'Team project',
                nas: 'Personal NAS'
            }
        },
        parcours: {
            title: 'Experience & education',
            sicame: {
                date: '09/2026 — Present',
                title: 'Software project manager assistant (work-study)',
                org: 'Sicame Group · Arnac-Pompadour',
                b1: 'Administration and configuration of business application tools (3D Experience) and management of component reference data.',
                b2: 'Troubleshooting technical incidents, automating tasks with scripts and supporting users.'
            },
            delmart: {
                date: 'Alongside',
                title: 'Freelance developer',
                org: 'Delmart Digital · Limoges',
                b1: 'Websites, custom software and hardware repair for individuals and small businesses, from the free quote to maintenance.',
                link: 'Discover Delmart Digital'
            },
            onyx: {
                date: '04/2026 — 05/2026',
                title: 'Full-stack developer (8-week internship)',
                org: 'SAS Onyx',
                b1: 'Design and deployment of a showcase site and a mobile-first planning application with Next.js and Supabase.',
                b2: 'Modeling, managing and optimizing a PostgreSQL database (3NF normalization).',
                link: 'View the project'
            },
            but: {
                date: '2024 — Ongoing',
                title: 'BUT Computer Science (3rd year)',
                org: 'IUT du Limousin · Limoges',
                b1: 'Application Development track: algorithmics, databases, web development, systems and networks.',
                b2: 'Team SAE projects, including one for Legrand.',
                link: 'See my skills'
            },
            bac: {
                date: '2021 — 2024',
                title: 'General baccalaureate',
                org: 'Lycée E. Perrier · Tulle',
                b1: 'Mathematics and Computer Science (NSI) specialties: first approach to software development and algorithms.'
            }
        },
        projects: {
            title: 'My Projects',
            featured: 'Featured project',
            viewSite: 'Visit the site',
            filters: {
                label: 'Filter projects',
                all: 'All',
                web: 'Web',
                games: 'Games',
                infra: 'Infra & networking',
                work: 'Professional',
                course: 'Coursework'
            },
            code: 'View the code',
            delmart: {
                title: 'Delmart Digital',
                short: 'My freelance business in Limoges: websites, custom software and hardware repair, from the free quote to maintenance.'
            },
            nas: {
                badge: 'Personal project',
                title: 'Personal NAS — Admin Dashboard',
                short: 'A ~2 TB personal NAS self-hosted on an old ThinkPad, with a custom admin dashboard: monitoring, MySQL, Minecraft servers.',
                viewMore: 'Learn more'
            },
            doucebrise: {
                playable: '▶ Playable online',
                badge: 'Personal project',
                title: 'Doucebrise — Cozy 3D browser game',
                short: 'A cozy 3D game playable in the browser: an archipelago to explore, animals to tame, a house to decorate. Three.js, no engine.'
            },
            kinetik: {
                badge: 'Personal project',
                title: 'KINETIK — Sokoban & Maze',
                short: 'Cross-platform puzzle game: an 80-level futuristic Sokoban and a riddle maze, with a level editor and online leaderboards.'
            },
            meteo: {
                badge: 'Personal project',
                title: 'Scott\'Météo — Self-hosted weather app',
                short: 'Self-hosted weather app: web, PWA and iOS widget on a single API. Next.js, server-side rendering and a light Docker container.'
            },
            sasonyx: {
                badge: 'Internship project',
                title: 'SAS Onyx Planning',
                short: 'Showcase site and intervention-planning app built during my internship: calendar, clients, technicians, annual maintenance.'
            },
            netflix: {
                title: 'Netflix — Movie rental platform',
                short: 'Full-stack Netflix clone: React UI, Express + MongoDB REST API, catalog, movie renting and a “My rentals” area.'
            },
            fiche: {
                title: 'Project delivered for Legrand',
                short: 'SAE for Legrand, in a team of 5: a web editor for operating procedures to replace Excel. My part: database, security, search.'
            },
            latice: {
                title: 'Latice — Java game',
                short: 'Latice board game in Java/JavaFX, reworked solo: AI mode, placement hints, game history and 35 JUnit 5 tests.'
            },
            details: 'View details',
            viewAll: 'View my full portfolio'
        },
        contact: {
            title: 'Contact me',
            intro: 'A question, a project or an opportunity? Feel free to get in touch.',
            location: 'Limoges (87), France',
            copy: 'Copy my address',
            copied: 'Address copied!'
        },
        langToggle: 'FR / EN (EN)'
    }
};

let currentLanguage = 'fr';
let hasLanguageApplied = false;
const typingState = {
    phrases: I18N.fr.hero.typing,
    currentPhraseIndex: 0,
    currentCharIndex: 0,
    isDeleting: false,
    started: false
};

function getNestedValue(object, path) {
    return path.split('.').reduce((accumulator, key) => {
        if (accumulator && typeof accumulator === 'object' && key in accumulator) {
            return accumulator[key];
        }
        return undefined;
    }, object);
}

function setTypingPhrases(phrases) {
    if (!Array.isArray(phrases) || phrases.length === 0) {
        return;
    }
    typingState.phrases = phrases;
    typingState.currentPhraseIndex = 0;
    typingState.currentCharIndex = 0;
    typingState.isDeleting = false;

    const typingText = document.getElementById('typing-text');
    if (typingText) {
        typingText.textContent = phrases[0];
    }
}

const DETAIL_BLOCK_SELECTOR = 'div,section,ul,ol,li,p,h1,h2,h3,h4,table,thead,tbody,tr,td,th,figure,pre,figcaption,article,main,header,nav,button,a.glow-genz-button';
const detailPageState = { units: null, images: null, title: '', description: '' };

function normalizeDetailText(text) {
    return text.replaceAll(/\s+/g, ' ').trim();
}

function collectDetailPageUnits(main) {
    const units = [];
    const visit = (element) => {
        for (const child of element.children) {
            if (['SCRIPT', 'STYLE', 'SVG', 'IMG'].includes(child.tagName.toUpperCase())) {
                continue;
            }
            const key = normalizeDetailText(child.textContent);
            if (/[A-Za-zÀ-ÿ]{2}/.test(key) && !child.querySelector(DETAIL_BLOCK_SELECTOR)) {
                units.push({ element: child, key, fr: child.innerHTML });
            } else {
                visit(child);
            }
        }
    };
    visit(main);
    return units;
}

function applyDetailPageTranslation(language) {
    const translations = globalThis.PAGE_TRANSLATIONS_EN;
    const main = document.querySelector('main');
    if (!translations || !main) {
        return;
    }

    if (!detailPageState.units) {
        detailPageState.units = collectDetailPageUnits(main);
        detailPageState.images = [...main.querySelectorAll('img[alt]')].map((img) => ({ img, fr: img.alt }));
        detailPageState.title = document.title;
        detailPageState.description = document.querySelector('meta[name="description"]')?.content ?? '';
    }

    const english = language === 'en';
    detailPageState.units.forEach(({ element, key, fr }) => {
        const translated = translations[key];
        element.innerHTML = english && translated ? translated : fr;
    });
    detailPageState.images.forEach(({ img, fr }) => {
        img.alt = (english && translations['alt:' + fr]) || fr;
    });

    document.title = (english && translations['@title']) || detailPageState.title;
    document.querySelector('meta[name="description"]')?.setAttribute(
        'content',
        (english && translations['@description']) || detailPageState.description
    );
}

function applyLanguage(language) {
    const selectedLanguage = I18N[language] ? language : 'fr';
    if (hasLanguageApplied && selectedLanguage === currentLanguage) {
        return;
    }
    currentLanguage = selectedLanguage;
    hasLanguageApplied = true;
    const dictionary = I18N[selectedLanguage];

    document.documentElement.lang = selectedLanguage;

    const hasDetailTranslations = Boolean(globalThis.PAGE_TRANSLATIONS_EN);

    const titleElement = document.querySelector('title');
    const titleKey = titleElement?.dataset?.i18nTitle;
    if (hasDetailTranslations) {
        // Detail pages keep their own title and description (see applyDetailPageTranslation).
    } else if (titleKey) {
        const translatedTitle = getNestedValue(dictionary, titleKey);
        if (typeof translatedTitle === 'string') {
            document.title = translatedTitle;
        }
    } else {
        document.title = dictionary.title;
    }

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta && !hasDetailTranslations) {
        const descriptionKey = descriptionMeta.dataset.i18nDescription;
        const translatedDescription = descriptionKey
            ? getNestedValue(dictionary, descriptionKey)
            : dictionary.description;

        if (typeof translatedDescription === 'string') {
            descriptionMeta.setAttribute('content', translatedDescription);
        }
    }

    document.querySelectorAll('[data-i18n]').forEach((node) => {
        const key = node.dataset.i18n;
        const translated = getNestedValue(dictionary, key);
        if (typeof translated === 'string') {
            node.textContent = translated;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
        const key = node.dataset.i18nPlaceholder;
        const translated = getNestedValue(dictionary, key);
        if (typeof translated === 'string') {
            node.setAttribute('placeholder', translated);
        }
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((node) => {
        const translated = getNestedValue(dictionary, node.dataset.i18nAriaLabel);
        if (typeof translated === 'string') {
            node.setAttribute('aria-label', translated);
            if (node.hasAttribute('data-i18n-title')) {
                node.setAttribute('title', translated);
            }
        }
    });

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = dictionary.langToggle;
    }

    document.querySelectorAll('[data-mobile-lang-toggle]').forEach((node) => {
        node.textContent = dictionary.langToggle;
    });

    setTypingPhrases(dictionary.hero.typing);

    applyDetailPageTranslation(selectedLanguage);
}

function toggleSiteLanguage() {
    const nextLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    globalThis.localStorage.setItem('site-language', nextLanguage);
    applyLanguage(nextLanguage);
}

function initLanguageAndContent() {
    const storedLanguage = globalThis.localStorage.getItem('site-language');
    const initialLanguage = storedLanguage || 'fr';

    applyLanguage(initialLanguage);

    const langToggle = document.getElementById('lang-toggle');
    if (!langToggle) {
        return;
    }

    langToggle.addEventListener('click', toggleSiteLanguage);

    document.querySelectorAll('[data-mobile-lang-toggle]').forEach((node) => {
        node.addEventListener('click', toggleSiteLanguage);
    });
}

function initNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !navMenu || navLinks.length === 0) {
        return;
    }

    ensureMobileNavActions(navMenu);

    const currentPath = globalThis.location.pathname.split('/').pop() || 'index.html';
    const sectionNavLinks = Array.from(navLinks).filter(link => {
        const href = link.getAttribute('href') || '';
        return href.startsWith('#');
    });
    const pageNavLinks = Array.from(navLinks).filter(link => {
        const href = link.getAttribute('href') || '';
        return !href.startsWith('#');
    });

    const clearActiveState = () => {
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });
    };

    const setActiveLink = (link, ariaValue = 'page') => {
        if (!link) {
            return;
        }
        clearActiveState();
        link.classList.add('active');
        link.setAttribute('aria-current', ariaValue);
    };

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        const isExpanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', String(isExpanded));
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    if (sectionNavLinks.length === 0) {
        const activePageLink = pageNavLinks.find(link => {
            const href = link.getAttribute('href') || '';
            const targetPath = href.split('#')[0];
            return targetPath === currentPath;
        });
        setActiveLink(activePageLink, 'page');
    }

    if (sectionNavLinks.length > 0) {
        if (!('IntersectionObserver' in globalThis)) {
            return;
        }

        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeLink = navMenu.querySelector(`a[href="#${entry.target.id}"]`);
                    setActiveLink(activeLink, 'location');
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-100px 0px -100px 0px'
        });

        sections.forEach(section => observer.observe(section));
    }
}

function ensureMobileNavActions(navMenu) {
    if (navMenu.querySelector('.nav-actions-mobile')) {
        return;
    }

    const desktopNavSocial = document.querySelector('.nav-social');
    if (!desktopNavSocial) {
        return;
    }

    const mobileActions = desktopNavSocial.cloneNode(true);
    mobileActions.classList.remove('nav-social');
    mobileActions.classList.add('nav-actions-mobile');

    const mobileLangToggle = mobileActions.querySelector('.lang-toggle');
    if (mobileLangToggle) {
        mobileLangToggle.removeAttribute('id');
        mobileLangToggle.dataset.mobileLangToggle = 'true';
        mobileLangToggle.classList.add('nav-lang-toggle-mobile');
        mobileLangToggle.addEventListener('click', toggleSiteLanguage);
    }

    const actionsItem = document.createElement('li');
    actionsItem.className = 'nav-actions-item';
    actionsItem.appendChild(mobileActions);
    navMenu.appendChild(actionsItem);
}

function initTypingEffect() {
    const typingText = document.getElementById('typing-text');
    if (!typingText || typingState.started || typingState.phrases.length < 2) {
        return;
    }

    typingState.started = true;
    let typingSpeed = 100;
    
    function typeEffect() {
        const currentPhrase = typingState.phrases[typingState.currentPhraseIndex] || '';
        
        if (typingState.isDeleting) {
            // Deleting characters
            typingText.textContent = currentPhrase.substring(0, typingState.currentCharIndex - 1);
            typingState.currentCharIndex--;
            typingSpeed = 50; // Faster when deleting
        } else {
            // Typing characters
            typingText.textContent = currentPhrase.substring(0, typingState.currentCharIndex + 1);
            typingState.currentCharIndex++;
            typingSpeed = 100; // Normal typing speed
        }
        
        // When word is complete
        if (!typingState.isDeleting && typingState.currentCharIndex === currentPhrase.length) {
            typingState.isDeleting = true;
            typingSpeed = 2000; // Pause before deleting
        } 
        // When word is completely deleted
        else if (typingState.isDeleting && typingState.currentCharIndex === 0) {
            typingState.isDeleting = false;
            typingState.currentPhraseIndex = (typingState.currentPhraseIndex + 1) % typingState.phrases.length;
            typingSpeed = 500; // Pause before next word
        }
        
        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
}



function initOrbitAnimations() {
    const planets = [...document.querySelectorAll('.random-orbit')];
    if (planets.length === 0) {
        return;
    }

    // Two rings, one radius each (--r1 / --r2 are CSS variables derived from the photo size).
    // The ring spacing is larger than an icon, and the icons of a ring share one speed and are
    // evenly spaced, so two icons can never overlap or touch the photo, at any screen size.
    // Each ring has its own random speed and direction, and a random starting angle, so the
    // whole thing never moves in lockstep.
    const order = planets.map((_, index) => index);
    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }

    const inner = Math.floor(planets.length / 2);
    const rings = [
        { radius: 'var(--r1)', members: order.slice(0, inner) },
        { radius: 'var(--r2)', members: order.slice(inner) }
    ];
    const firstDirection = Math.random() > 0.5 ? 'normal' : 'reverse';

    rings.forEach((ring, ringIndex) => {
        const baseAngle = Math.random() * 360;
        const duration = Math.round(40 + Math.random() * 35);
        const direction = ringIndex === 0 ? firstDirection : (firstDirection === 'normal' ? 'reverse' : 'normal');
        ring.members.forEach((planetIndex, position) => {
            const planet = planets[planetIndex];
            const angle = baseAngle + (360 / ring.members.length) * position;
            planet.style.setProperty('--start', `${Math.round(angle)}deg`);
            planet.style.setProperty('--radius', ring.radius);
            planet.style.setProperty('--orbit-duration', `${duration}s`);
            planet.style.setProperty('--orbit-direction', direction);
        });
    });
}

function initSunPhotoModal() {
    const sun = document.querySelector('.sun-core');
    const modal = document.getElementById('photo-modal');
    const closeBtn = document.querySelector('.close');
    const randomPhoto = document.getElementById('random-photo');

    if (sun && modal && closeBtn && randomPhoto) {
        sun.addEventListener('click', () => {
            const randomId = Math.floor(Math.random() * 1000) + 1;
            randomPhoto.src = `https://picsum.photos/600/400?random=${randomId}`;
            modal.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        globalThis.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }
}

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const isHomePage = globalThis.location.pathname === '/' || globalThis.location.pathname.endsWith('/index.html');

    const scrollToTarget = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (!targetElement) {
            return;
        }

        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + globalThis.pageYOffset - headerOffset;

        globalThis.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            scrollToTarget(targetId);
        });
    });

    // Avoid accidental full-page reloads when links target index fragments from the home page.
    if (isHomePage) {
        const samePageAnchors = document.querySelectorAll('a[href^="index.html#"], a[href^="/#"]');

        samePageAnchors.forEach(link => {
            link.addEventListener('click', (event) => {
                const rawHref = link.getAttribute('href') || '';
                const hashIndex = rawHref.indexOf('#');
                if (hashIndex < 0) {
                    return;
                }

                event.preventDefault();
                const targetId = rawHref.slice(hashIndex + 1);
                if (!targetId) {
                    return;
                }

                scrollToTarget(targetId);
            });
        });
    }
}

function initSectionAnimations() {
    const elements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up');

    if (elements.length === 0) {
        return;
    }

    if (!('IntersectionObserver' in globalThis)) {
        elements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0)';
        });
        return;
    }

    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                if (entry.target.classList.contains('slide-in-left')) {
                    entry.target.style.transform = 'translateX(0)';
                } else if (entry.target.classList.contains('slide-in-right')) {
                    entry.target.style.transform = 'translateX(0)';
                } else {
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => elementObserver.observe(element));
}

function computeProjectStats() {
    const projectCards = document.querySelectorAll('#projects .project-card');
    const projectsCount = projectCards.length;

    const techNames = new Set();
    document.querySelectorAll('#projects .project-tech a').forEach((link) => {
        const img = link.querySelector('img');
        const label = (img ? img.getAttribute('alt') : link.textContent) || '';
        const normalized = label.trim().toLowerCase();
        if (normalized) {
            techNames.add(normalized);
        }
    });

    return { projectsCount, techCount: techNames.size };
}

function initProjectLinkLabels() {
    document.querySelectorAll('#projects .project-card').forEach((card, index) => {
        const link = card.querySelector('.stretched-link');
        const title = card.querySelector('h3');
        if (!link || !title) {
            return;
        }
        link.id = `project-link-${index}`;
        title.id = `project-title-${index}`;
        link.setAttribute('aria-labelledby', `${link.id} ${title.id}`);
    });
}

function initProjectFilters() {
    const buttons = [...document.querySelectorAll('.project-filter')];
    const cards = [...document.querySelectorAll('#projects .project-card')];
    if (buttons.length === 0 || cards.length === 0) {
        return;
    }

    const matches = (card, filter) => filter === 'all' || (card.dataset.category || '').split(' ').includes(filter);
    const validFilters = new Set(buttons.map((button) => button.dataset.filter));

    buttons.forEach((button) => {
        const count = cards.filter((card) => matches(card, button.dataset.filter)).length;
        button.querySelector('.project-filter-count').textContent = `(${count})`;
    });

    const apply = (filter) => {
        cards.forEach((card) => {
            const visible = matches(card, filter);
            card.hidden = !visible;
            card.classList.remove('project-card-enter');
            if (visible) {
                void card.offsetWidth;
                card.classList.add('project-card-enter');
            }
        });
        buttons.forEach((button) => {
            const active = button.dataset.filter === filter;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', String(active));
        });
    };

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            apply(filter);
            const url = new URL(globalThis.location.href);
            if (filter === 'all') {
                url.searchParams.delete('filtre');
            } else {
                url.searchParams.set('filtre', filter);
            }
            globalThis.history.replaceState(null, '', url);
        });
    });

    document.querySelectorAll('[data-profile-filter]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = buttons.find((button) => button.dataset.filter === link.dataset.profileFilter);
            if (!target) {
                return;
            }
            event.preventDefault();
            target.click();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const requested = new URLSearchParams(globalThis.location.search).get('filtre');
    if (requested && validFilters.has(requested)) {
        apply(requested);
    }
}

function initCopyEmail() {
    const button = document.querySelector('.copy-email');
    const feedback = document.querySelector('.copy-feedback');
    if (!button) {
        return;
    }
    let timer = null;

    const fallbackCopy = (text) => {
        const field = document.createElement('textarea');
        field.value = text;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        const done = document.execCommand('copy');
        field.remove();
        return done;
    };

    button.addEventListener('click', async () => {
        const email = button.dataset.email;
        let ok = false;
        try {
            await navigator.clipboard.writeText(email);
            ok = true;
        } catch (error) {
            ok = fallbackCopy(email);
        }
        if (!ok) {
            return;
        }
        const dictionary = I18N[currentLanguage] || I18N.fr;
        button.classList.add('is-copied');
        if (feedback) {
            feedback.textContent = dictionary.contact.copied;
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            button.classList.remove('is-copied');
            if (feedback) {
                feedback.textContent = '';
            }
        }, 2200);
    });
}

function initScrollReveal() {
    if (!('IntersectionObserver' in globalThis)) {
        return;
    }

    const selector = [
        '.section-title',
        '.stat-card',
        '.timeline-item',
        '#projects .project-filters',
        '#projects .project-card',
        '.pro-eyebrow',
        '.contact-intro'
    ].join(',');
    const containers = '.slide-in-left, .slide-in-right, .slide-in-up';

    // Elements below the fold stay hidden until they are scrolled into view; the ones already
    // visible at load time are left alone so the top of the page never flashes.
    const viewportBottom = globalThis.innerHeight;
    const targets = [...document.querySelectorAll(selector)].filter((element) => {
        if (element.closest(containers) || element.closest('[hidden]')) {
            return false;
        }
        return element.getBoundingClientRect().top > viewportBottom * 0.9;
    });
    if (targets.length === 0) {
        return;
    }

    targets.forEach((element) => element.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        visible.forEach((entry, index) => {
            const element = entry.target;
            observer.unobserve(element);
            element.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 0.09}s`);
            element.classList.add('is-visible');
            // Drop the helper classes afterwards so hover transitions on the element come back.
            setTimeout(() => {
                element.classList.remove('reveal', 'is-visible');
                element.style.removeProperty('--reveal-delay');
            }, 1100);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach((element) => observer.observe(element));
}

function initHeroVisibility() {
    const container = document.querySelector('.avatar-container');
    if (!container || !('IntersectionObserver' in globalThis)) {
        return;
    }
    // The orbit and the glow only run while the photo is on screen.
    new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            container.classList.toggle('is-offscreen', !entry.isIntersecting);
        });
    }).observe(container);
}

function initSimpleStats() {
    const stats = document.querySelectorAll('.stat-value[data-target]');
    if (stats.length === 0) {
        return;
    }

    const { projectsCount, techCount } = computeProjectStats();
    stats.forEach((node) => {
        if (node.dataset.stat === 'projects' && projectsCount > 0) {
            node.dataset.target = String(projectsCount);
        } else if (node.dataset.stat === 'tech' && techCount > 0) {
            node.dataset.target = String(techCount);
        }
    });

    const animateStat = (node) => {
        const target = Number(node.dataset.target);
        if (!Number.isFinite(target) || target <= 0) {
            return;
        }

        const duration = 1200;
        const startTime = performance.now();

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.round(target * progress);
            node.textContent = String(value);

            if (progress < 1) {
                globalThis.requestAnimationFrame(step);
            }
        };

        globalThis.requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in globalThis)) {
        stats.forEach(animateStat);
        return;
    }

    const observer = new IntersectionObserver((entries, statsObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
            animateStat(entry.target);
            statsObserver.unobserve(entry.target);
        });
    }, { threshold: 0.4 });

    stats.forEach((node) => {
        node.textContent = '0';
        observer.observe(node);
    });
}

console.log('Portfolio bien chargé !');
