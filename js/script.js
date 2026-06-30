document.addEventListener('DOMContentLoaded', function() {
    const initializers = [
        initLanguageAndContent,
        initNavbar,
        initTypingEffect,
        initOrbitAnimations,
        initSunPhotoModal,
        initSmoothScroll,
        initSectionAnimations,
        initSimpleStats
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
        title: 'Scott Delmart — Développeur Web | Portfolio',
        description: 'Portfolio de Scott Delmart, développeur web à Limoges. Découvrez mes projets, mes compétences techniques et mes coordonnées.',
        nav: {
            home: 'Accueil',
            about: 'À propos',
            projects: 'Projets',
            pro: 'Activité pro',
            contact: 'Contact',
            portfolio: 'Portfolio'
        },
        pro: {
            title: 'Besoin d\'un site web ?',
            text: 'Je conçois des sites vitrines modernes et performants pour les pros, indépendants et associations via mon activité Delmart Digital.',
            cta: 'Découvrir Delmart Digital'
        },
        pages: {
            portfolio: {
                title: 'Portfolio - Scotty Dev',
                description: 'Portfolio détaillé de Scott Delmart : compétences BUT Informatique, SAE, projets et niveaux de maîtrise.',
                heroTitle: 'Mon Portfolio',
                heroSubtitle: 'Compétences du Programme National — BUT Informatique',
                intro: 'Retrouvez ici l\'ensemble de mes compétences et projets réalisés au cours de ma formation. Chaque compétence est illustrée par des projets concrets avec mes rôles et livrables associés.',
                overview: 'Vue d\'ensemble',
                table: {
                    headers: {
                        competence: 'Compétence',
                        indicator: 'Indicateur',
                        level: 'Niveau',
                        evidence: 'Preuves (SAE)'
                    },
                    rows: {
                        c1: 'C1 — Réaliser',
                        c2: 'C2 — Optimiser',
                        c3: 'C3 — Administrer',
                        c4: 'C4 — Gérer',
                        c5: 'C5 — Conduire',
                        c6: 'C6 — Collaborer'
                    },
                    indicators: {
                        c1: 'Concevoir / Coder / Tester / Intégrer',
                        c2: 'Optimiser selon critères spécifiques',
                        c3: 'Installer / Configurer / Maintenir',
                        c4: 'Concevoir / Gérer / Exploiter les données',
                        c5: 'Organiser / Piloter un projet',
                        c6: 'Travailler en équipe informatique'
                    },
                    levels: {
                        c1: 'Maîtrise avancée',
                        c2: 'Autonomie',
                        c3: 'Autonomie',
                        c4: 'Maîtrise partielle',
                        c5: 'Autonomie',
                        c6: 'Autonomie'
                    },
                    evidence: {
                        c1: 'SAE 1.01 • SAE 2.01',
                        c2: 'SAE 1.02 • SAE 2.02',
                        c3: 'SAE 1.03 • SAE 2.03',
                        c4: 'SAE 1.04 • SAE 2.04',
                        c5: 'SAE 1.05 • SAE 2.05',
                        c6: 'SAE 1.06 • SAE 2.06'
                    }
                },
                levelsScale: 'Échelle de niveaux',
                ctaTitle: 'Intéressé par mon profil ?',
                ctaText: 'N\'hésitez pas à me contacter pour discuter de projets passionnants ou d\'opportunités de collaboration.',
                ctaContact: 'Me contacter',
                ctaCv: 'Télécharger mon CV'
            },
            calculator: {
                title: 'Calculatrice - Scott Dev',
                description: 'Projet calculatrice de Scott Delmart : interface moderne, support clavier/souris et calculs instantanés.',
                heading: 'Calculatrice',
                rights: 'Tous droits réservés.'
            },
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
            greeting: 'Bonjour, je suis Scotty 👋',
            quote: 'Créer des expériences web magnifiques et fonctionnelles',
            cv: 'Télécharger mon CV',
            typing: ['Développeur Web', 'Front-End', 'Résolveur de problèmes']
        },
        stats: {
            projects: 'Projets construits',
            tech: 'Technologies utilisées',
            response: 'Réponse moyenne (h)'
        },
        about: {
            title: 'À propos de moi',
            p1: 'Développeur web en formation (BUT Informatique) basé à Limoges, je conçois des sites et interfaces rapides, modernes et soignés — du design jusqu\'à la mise en ligne.',
            p2: 'Je suis ouvert aux opportunités d\'alternance comme aux projets clients via mon activité Delmart Digital. Mon objectif : transformer une idée en un site web concret, accessible et agréable à utiliser.',
            skills: 'Compétences & Technologies'
        },
        projects: {
            title: 'Mes Projets',
            featured: 'Projet phare',
            viewSite: 'Voir le site',
            delmart: {
                title: 'Delmart Digital',
                desc: 'Mon activité de création de sites web professionnels : sites vitrines modernes, rapides et optimisés pour le référencement.'
            },
            calc: {
                title: 'Calculatrice',
                desc: 'Une calculatrice moderne avec support du clavier et de la souris, offrant un design épuré et des calculs instantanés.',
                cta: 'Ouvrir la calculatrice'
            },
            games: {
                title: 'Mini-jeux en Python',
                desc: 'Suite de jeux en console (Allumettes, Devinette, Puissance 4, Morpion) avec une IA jouable à plusieurs niveaux de difficulté.'
            },
            latice: {
                title: 'Latice — Jeu en Java',
                desc: 'Développement complet d\'un jeu de société en Java : conception orientée objet, règles du jeu et interface graphique JavaFX.'
            },
            network: {
                title: 'Simulation réseau — Kathara',
                desc: 'Mise en place d\'un réseau complet (serveurs DHCP & DNS, routage, SSH) et analyse du trafic avec WireShark.'
            },
            details: 'Voir le détail',
            viewAll: 'Voir tout mon portfolio'
        },
        contact: {
            title: 'Contactez-moi',
            intro: 'Une question, un projet ou une opportunité ? N\'hésitez pas à me contacter.',
            location: 'Limoges (87), France'
        },
        langToggle: 'FR / EN (FR)'
    },
    en: {
        title: 'Scott Delmart — Web Developer | Portfolio',
        description: 'Portfolio of Scott Delmart, web developer based in Limoges. Explore my projects, technical skills and contact details.',
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            pro: 'Freelance',
            contact: 'Contact',
            portfolio: 'Portfolio'
        },
        pro: {
            title: 'Need a website?',
            text: 'I design modern, high-performance showcase websites for professionals, freelancers and associations through my Delmart Digital business.',
            cta: 'Discover Delmart Digital'
        },
        pages: {
            portfolio: {
                title: 'Portfolio - Scotty Dev',
                description: 'Detailed portfolio of Scott Delmart: computer science skills, projects and proficiency levels.',
                heroTitle: 'My Portfolio',
                heroSubtitle: 'National Program Skills — Computer Science B.U.T.',
                intro: 'Here you can find all my skills and projects completed during my studies. Each skill is supported by concrete projects with my role and deliverables.',
                overview: 'Overview',
                table: {
                    headers: {
                        competence: 'Skill',
                        indicator: 'Indicator',
                        level: 'Level',
                        evidence: 'Evidence (SAE)'
                    },
                    rows: {
                        c1: 'C1 — Build',
                        c2: 'C2 — Optimize',
                        c3: 'C3 — Administer',
                        c4: 'C4 — Manage',
                        c5: 'C5 — Lead',
                        c6: 'C6 — Collaborate'
                    },
                    indicators: {
                        c1: 'Design / Code / Test / Integrate',
                        c2: 'Optimize according to specific criteria',
                        c3: 'Install / Configure / Maintain',
                        c4: 'Design / Manage / Use data',
                        c5: 'Organize / Lead a project',
                        c6: 'Work in an IT team'
                    },
                    levels: {
                        c1: 'Advanced mastery',
                        c2: 'Autonomy',
                        c3: 'Autonomy',
                        c4: 'Partial mastery',
                        c5: 'Autonomy',
                        c6: 'Autonomy'
                    },
                    evidence: {
                        c1: 'SAE 1.01 • SAE 2.01',
                        c2: 'SAE 1.02 • SAE 2.02',
                        c3: 'SAE 1.03 • SAE 2.03',
                        c4: 'SAE 1.04 • SAE 2.04',
                        c5: 'SAE 1.05 • SAE 2.05',
                        c6: 'SAE 1.06 • SAE 2.06'
                    }
                },
                levelsScale: 'Skill scale',
                ctaTitle: 'Interested in my profile?',
                ctaText: 'Feel free to contact me to discuss exciting projects or collaboration opportunities.',
                ctaContact: 'Contact me',
                ctaCv: 'Download my CV'
            },
            calculator: {
                title: 'Calculator - Scott Dev',
                description: 'Calculator project by Scott Delmart: modern interface, keyboard/mouse support and instant calculations.',
                heading: 'Calculator',
                rights: 'All rights reserved.'
            },
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
            greeting: 'Hi, I\'m Scotty 👋',
            quote: 'Building beautiful and functional web experiences',
            cv: 'Download my CV',
            typing: ['Web Developer', 'Front-End', 'Problem Solver']
        },
        stats: {
            projects: 'Projects built',
            tech: 'Technologies used',
            response: 'Average response (h)'
        },
        about: {
            title: 'About me',
            p1: 'A web developer in training (BUT Computer Science) based in Limoges, I build fast, modern and polished websites and interfaces — from design all the way to going live.',
            p2: 'I\'m open to work-study (alternance) opportunities as well as client projects through my Delmart Digital business. My goal: turn an idea into a real, accessible and pleasant website.',
            skills: 'Skills & Technologies'
        },
        projects: {
            title: 'My Projects',
            featured: 'Featured project',
            viewSite: 'Visit the site',
            delmart: {
                title: 'Delmart Digital',
                desc: 'My professional web design business: modern, fast and SEO-optimized showcase websites.'
            },
            calc: {
                title: 'Calculator',
                desc: 'A modern calculator with keyboard and mouse support, featuring a clean design and instant calculations.',
                cta: 'Open calculator'
            },
            games: {
                title: 'Python mini-games',
                desc: 'A set of console games (Nim, Guessing, Connect 4, Tic-tac-toe) with a playable AI offering several difficulty levels.'
            },
            latice: {
                title: 'Latice — Java game',
                desc: 'Full development of a board game in Java: object-oriented design, game rules and a JavaFX graphical interface.'
            },
            network: {
                title: 'Network simulation — Kathara',
                desc: 'Setup of a complete network (DHCP & DNS servers, routing, SSH) and traffic analysis with WireShark.'
            },
            details: 'View details',
            viewAll: 'View my full portfolio'
        },
        contact: {
            title: 'Contact me',
            intro: 'A question, a project or an opportunity? Feel free to get in touch.',
            location: 'Limoges (87), France'
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

const PORTFOLIO_REPLACEMENTS_EN = [
    ['Compétence', 'Skill'],
    ['Indicateur', 'Indicator'],
    ['Niveau', 'Level'],
    ['Preuves (SAE)', 'Evidence (SAE)'],
    ['Concevoir / Coder / Tester / Intégrer', 'Design / Code / Test / Integrate'],
    ['Optimiser selon critères spécifiques', 'Optimize according to specific criteria'],
    ['Installer / Configurer / Maintenir', 'Install / Configure / Maintain'],
    ['Concevoir / Gérer / Exploiter les données', 'Design / Manage / Use data'],
    ['Organiser / Piloter un projet', 'Organize / Lead a project'],
    ['Travailler en équipe informatique', 'Work in an IT team'],
    ['Maîtrise avancée', 'Advanced mastery'],
    ['Maîtrise partielle', 'Partial mastery'],
    ['Autonomie', 'Autonomy'],
    ['Réaliser un développement d\'application', 'Build an application'],
    ['Concevoir, coder, tester et intégrer une solution informatique', 'Design, code, test and integrate a software solution'],
    ['Réalisation de mini-jeux en Python', 'Python mini-games development'],
    ['Création de mini-jeux en console en utilisant le langage Python. Un projet complet couvrant la conception, le développement et les tests de plusieurs jeux interactifs.', 'Creation of console mini-games using Python. A complete project covering design, development, and testing of multiple interactive games.'],
    ['Jeux développés', 'Games developed'],
    ['Allumettes', 'Nim matches'],
    ['Devinette', 'Guessing game'],
    ['Puissance 4', 'Connect Four'],
    ['Morpion', 'Tic-tac-toe'],
    ['Mon rôle', 'My role'],
    ['Création des mini-jeux — Développement de la logique de jeu, des interfaces console et de la gestion des entrées utilisateur.', 'Built the mini-games: game logic, console UI, and user input handling.'],
    ['Livrables', 'Deliverables'],
    ['Compte rendu de +20 pages expliquant le fonctionnement des mini-jeux + oral de présentation de 10 minutes.', '20+ page report explaining how the mini-games work + 10-minute oral presentation.'],
    ['Développement d\'une application Java — Latice', 'Java application development — Latice'],
    ['Développement complet d\'un jeu de société (Latice) en Java. Conception orientée objet, implémentation des règles du jeu et gestion des interactions entre joueurs.', 'Full development of a board game (Latice) in Java. Object-oriented design, game rules implementation, and player interaction management.'],
    ['Développement de l\'application — Implémentation des règles, gestion du plateau et des cartes.', 'Application development: rule implementation, board and cards management.'],
    ['Application fonctionnelle + compte rendu technique.', 'Working application + technical report.'],
    ['Optimiser des applications', 'Optimize applications'],
    ['Optimiser en fonction de critères spécifiques : précision, consommation de ressources', 'Optimize based on specific criteria: accuracy and resource usage'],
    ['Optimisation de l\'application Python', 'Python application optimization'],
    ['Ajout d\'intelligence artificielle pour les mini-jeux en Python. Possibilité de jouer contre un bot avec différents niveaux de difficulté (facile, difficile) grâce à des algorithmes optimisés.', 'Added AI for Python mini-games. You can play against a bot with multiple difficulty levels (easy, hard) using optimized algorithms.'],
    ['Mise en place des tests — Validation du bon fonctionnement des algorithmes d\'IA et des niveaux de difficulté.', 'Set up tests to validate AI algorithms and difficulty levels.'],
    ['Application optimisée avec IA + rapport de tests.', 'AI-optimized application + test report.'],
    ['Optimisation et IHM — Application Java (Latice)', 'Optimization and GUI — Java application (Latice)'],
    ['Mise en place du jeu Latice en IHM sur un plateau graphique. Création des cartes et du plateau pour un jeu fonctionnel à 100% depuis l\'interface graphique.', 'Built Latice with a GUI board. Created cards and board for a fully playable game from the graphical interface.'],
    ['Ajout des boutons et fonctionnalités back-end de l\'IHM — Liaison entre la logique métier et l\'interface utilisateur.', 'Added GUI buttons and back-end features, connecting business logic to the user interface.'],
    ['Application avec interface graphique complète et fonctionnelle.', 'Application with a complete and functional graphical interface.'],
    ['Administrer des systèmes informatiques communicants', 'Administer connected information systems'],
    ['Installer, configurer, mettre à disposition et maintenir une infrastructure service/réseau', 'Install, configure, deploy, and maintain a service/network infrastructure'],
    ['Configuration d\'un poste de travail', 'Workstation setup'],
    ['Installation complète d\'une distribution Linux sur un poste de travail (de A à Z). Configuration de l\'environnement de développement et création d\'une bibliothèque fonctionnelle en bash.', 'Complete Linux distribution installation on a workstation (A to Z). Development environment setup and creation of a functional Bash library system.'],
    ['Réalisations', 'Achievements'],
    ['Installation de Linux et configuration système', 'Linux installation and system configuration'],
    ['Installation de VSCode pour Python', 'VS Code setup for Python'],
    ['Installation graphique avec l\'IDE de notre choix', 'Graphical installation with the IDE of our choice'],
    ['Bibliothèque fonctionnelle en bash (Ajouter/Supprimer un livre, Lister, Réserver)', 'Functional Bash library system (add/remove a book, list, reserve)'],
    ['Création des scripts bash — Développement de l\'ensemble des fonctionnalités de la bibliothèque en ligne de commande.', 'Built Bash scripts with all command-line library features.'],
    ['Compte rendu + oral de présentation de 10 minutes.', 'Report + 10-minute oral presentation.'],
    ['Simulation d\'un réseau avec Kathara', 'Network simulation with Kathara'],
    ['Création d\'un réseau informatique complet avec plusieurs machines, serveur DHCP et DNS sur Kathara. Mise en place de l\'accès internet, du transfert de fichiers et de l\'analyse réseau.', 'Created a full network with multiple machines, DHCP and DNS servers in Kathara. Set up internet access, file transfer, and network analysis.'],
    ['Réseau avec plusieurs machines, serveur DHCP, DNS', 'Network with multiple machines, DHCP and DNS servers'],
    ['Accès internet depuis chaque machine par nom de domaine', 'Internet access from each machine via domain name'],
    ['Transfert de fichiers (envoi + réception)', 'File transfer (send + receive)'],
    ['Analyse avec WireShark (transferts UDP/TCP)', 'Analysis with Wireshark (UDP/TCP transfers)'],
    ['Réalisation complète du projet — Conception réseau, routage, SSH, configuration DHCP/DNS et analyse WireShark.', 'Delivered the full project: network design, routing, SSH, DHCP/DNS setup, and Wireshark analysis.'],
    ['Compte rendu + démonstration devant le professeur.', 'Report + live demo to the teacher.'],
    ['Gérer des données de l\'information', 'Manage information data'],
    ['Concevoir, gérer, administrer et exploiter les données d\'une entreprise', 'Design, manage, administer, and use company data'],
    ['Gestion et transformation d\'une Base de Données existante', 'Management and transformation of an existing database'],
    ['Tri et gestion d\'une base de données contenant plusieurs milliers de jeux. Filtrage des données à l\'aide de requêtes SQL et création d\'affichages graphiques pour certaines requêtes.', 'Sorted and managed a database with several thousand games. Filtered data with SQL queries and built charts for selected queries.'],
    ['Tri d\'une base de données de milliers de jeux', 'Sorted a database containing thousands of games'],
    ['Filtrage par requêtes SQL', 'Filtering using SQL queries'],
    ['Affichage graphique des résultats', 'Graphical display of results'],
    ['Écriture des requêtes SQL — Conception et optimisation des requêtes pour filtrer et analyser les données.', 'Wrote SQL queries and optimized them for filtering and data analysis.'],
    ['Compte rendu + oral de démonstration.', 'Report + oral demo.'],
    ['Visualisation de données', 'Data visualization'],
    ['Projet de visualisation de données permettant de représenter graphiquement des ensembles de données complexes pour faciliter leur analyse et leur compréhension.', 'Data visualization project to graphically represent complex datasets for easier analysis and understanding.'],
    ['Participation à la conception et à la réalisation des visualisations de données.', 'Contributed to the design and implementation of data visualizations.'],
    ['Compte rendu + démonstration des visualisations.', 'Report + visualization demo.'],
    ['Conduire un projet', 'Lead a project'],
    ['Satisfaire les besoins utilisateurs, organiser et piloter un projet (classique ou agile)', 'Meet user needs and organize/lead a project (traditional or agile)'],
    ['Recueil des besoins', 'Requirements gathering'],
    ['Modernisation du système de gestion des emprunts et retours d\'une bibliothèque universitaire disposant de 10 000 livres. Passage d\'une gestion manuelle à une solution automatisée.', 'Modernized the loan/return management system of a university library with 10,000 books. Moved from manual management to an automated solution.'],
    ['Objectifs', 'Goals'],
    ['Automatiser la gestion des emprunts et retours', 'Automate loan and return management'],
    ['Faciliter la recherche des livres par les étudiants', 'Make book search easier for students'],
    ['Améliorer la productivité des bibliothécaires', 'Improve librarians\' productivity'],
    ['Rédaction du cahier des charges et du MoSCoW — Définition des exigences fonctionnelles et priorisation des besoins.', 'Wrote the requirements specification and MoSCoW prioritization, defining functional requirements and priority levels.'],
    ['Compte rendu + oral de présentation.', 'Report + oral presentation.'],
    ['Gestion de projet — Goût d\'Immo', 'Project management — Goût d\'Immo'],
    ['Analyse et mise en œuvre du projet Goût d\'Immo, une plateforme numérique dédiée à la gestion des biens immobiliers. Étude stratégique, choix technologique réfléchi et planification rigoureuse pour offrir un outil performant et adapté.', 'Analyzed and implemented the Goût d\'Immo project, a digital platform for real estate management. Strategic analysis, thoughtful technology choices, and rigorous planning to deliver an effective solution.'],
    ['Création du diagramme de Gantt et mise en application de la méthode RACI — Planification des tâches, affectation des responsabilités et suivi de l\'avancement du projet.', 'Built the Gantt chart and applied the RACI method: task planning, responsibility assignment, and progress tracking.'],
    ['Collaborer au sein d\'une équipe informatique', 'Collaborate within an IT team'],
    ['Acquérir, développer et exploiter les aptitudes nécessaires pour travailler dans une équipe informatique', 'Acquire, develop, and apply the skills needed to work in an IT team'],
    ['Recherche d\'un profil informatique et entretien', 'IT profile research and interview'],
    ['Recherche et interview d\'un professionnel dans le domaine informatique pour en apprendre davantage sur le métier. Entretien avec un Développeur BDD permettant de comprendre les réalités du terrain.', 'Researched and interviewed an IT professional to better understand the role. Interview with a database developer to understand real-world practice.'],
    ['Recherche du profil (Développeur BDD) + rédaction du rapport — Préparation de l\'interview, conduite de l\'entretien et rédaction du compte rendu.', 'Researched the profile (database developer) and wrote the report: interview preparation, execution, and documentation.'],
    ['Livrable', 'Deliverable'],
    ['Compte rendu détaillé de l\'entretien.', 'Detailed interview report.'],
    ['Recherche sur un métier de l\'informatique', 'Research on an IT profession'],
    ['Recherche approfondie sur un métier de l\'informatique suite à une conférence. Analyse du métier, des compétences requises et des perspectives d\'évolution dans le secteur.', 'In-depth research on an IT profession after a conference. Analysis of the role, required skills, and career perspectives in the sector.'],
    ['Recherche documentaire et rédaction suite à la conférence — Synthèse des informations recueillies et analyse du métier étudié.', 'Desk research and writing after the conference: synthesis of collected information and role analysis.'],
    ['Compte rendu de recherche.', 'Research report.'],
    ['Initialisation', 'Initialization'],
    ['Découverte des concepts fondamentaux et premières mises en pratique.', 'Discovery of core concepts and first practical applications.'],
    ['Capacité à appliquer les concepts avec accompagnement dans des situations simples.', 'Ability to apply concepts with guidance in simple situations.'],
    ['Application autonome des compétences dans des contextes variés et complexes.', 'Autonomous application of skills in varied and complex contexts.'],
    ['Expertise et capacité à transmettre — résolution de problèmes complexes de manière innovante.', 'Expertise and ability to transfer knowledge, solving complex problems in innovative ways.'],
    // Tech tags (kept at the end so longer phrases above are translated first)
    ['IA / Algorithmes', 'AI / Algorithms'],
    ['JavaFX / IHM', 'JavaFX / GUI'],
    ['Cahier des charges', 'Requirements specification'],
    ['Développeur BDD', 'Database developer'],
    ['Visualisation', 'Visualization'],
    ['Immobilier', 'Real estate'],
    ['Conférence', 'Conference'],
    ['Synthèse', 'Synthesis'],
    ['Recherche', 'Research'],
    ['Rapport', 'Report']
];

function escapeRegExp(value) {
    return value.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
}

function replaceFlexible(source, fr, en) {
    const pattern = escapeRegExp(fr)
        .replaceAll(/\s+/g, String.raw`\s+`)
        .replaceAll("'", "(?:'|&#39;|&apos;|’)");
    return source.replaceAll(new RegExp(pattern, 'g'), en);
}

function applyPortfolioDeepTranslation(language, dictionary) {
    const path = globalThis.location.pathname;
    const isPortfolioPage = path.endsWith('/pages/portfolio.html') || path.endsWith('portfolio.html');
    if (!isPortfolioPage) {
        return;
    }

    const main = document.querySelector('main');
    if (!main) {
        return;
    }

    if (!main.dataset.frContent) {
        main.dataset.frContent = main.innerHTML;
    }

    if (main.dataset.renderedLang === language) {
        return;
    }

    if (language === 'fr') {
        const currentScrollY = globalThis.scrollY;
        main.innerHTML = main.dataset.frContent;
        translatePortfolioRoot(main, dictionary);
        applyPortfolioTableTranslations(dictionary);
        revealPortfolioSections();
        main.dataset.renderedLang = 'fr';
        globalThis.scrollTo({ top: currentScrollY, behavior: 'auto' });
        return;
    }

    const currentScrollY = globalThis.scrollY;
    let translatedHtml = main.dataset.frContent;
    PORTFOLIO_REPLACEMENTS_EN.forEach(([fr, en]) => {
        translatedHtml = replaceFlexible(translatedHtml, fr, en);
    });
    main.innerHTML = translatedHtml;
    translatePortfolioRoot(main, dictionary);
    applyPortfolioTableTranslations(dictionary);
    revealPortfolioSections();
    main.dataset.renderedLang = 'en';
    globalThis.scrollTo({ top: currentScrollY, behavior: 'auto' });
}

function translatePortfolioRoot(root, dictionary) {
    root.querySelectorAll('[data-i18n]').forEach((node) => {
        const key = node.dataset.i18n;
        const translated = getNestedValue(dictionary, key);
        if (typeof translated === 'string') {
            node.textContent = translated;
        }
    });

    root.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
        const key = node.dataset.i18nPlaceholder;
        const translated = getNestedValue(dictionary, key);
        if (typeof translated === 'string') {
            node.setAttribute('placeholder', translated);
        }
    });
}

function applyPortfolioTableTranslations(dictionary) {
    const tableNodes = document.querySelectorAll('[data-portfolio-i18n]');
    tableNodes.forEach((node) => {
        const key = node.dataset.portfolioI18n;
        const translated = getNestedValue(dictionary, key);
        if (typeof translated === 'string') {
            node.textContent = translated;
        }
    });
}

function revealPortfolioSections() {
    const portfolioNodes = document.querySelectorAll(
        '.competences-table-wrapper, .slide-in-left, .slide-in-right, .slide-in-up'
    );

    portfolioNodes.forEach((node) => {
        node.style.opacity = '1';
        node.style.transform = 'none';
    });
}

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

function applyLanguage(language) {
    const selectedLanguage = I18N[language] ? language : 'fr';
    if (hasLanguageApplied && selectedLanguage === currentLanguage) {
        return;
    }
    currentLanguage = selectedLanguage;
    hasLanguageApplied = true;
    const dictionary = I18N[selectedLanguage];

    document.documentElement.lang = selectedLanguage;

    const titleElement = document.querySelector('title');
    const titleKey = titleElement?.dataset?.i18nTitle;
    if (titleKey) {
        const translatedTitle = getNestedValue(dictionary, titleKey);
        if (typeof translatedTitle === 'string') {
            document.title = translatedTitle;
        }
    } else {
        document.title = dictionary.title;
    }

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
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

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = dictionary.langToggle;
    }

    document.querySelectorAll('[data-mobile-lang-toggle]').forEach((node) => {
        node.textContent = dictionary.langToggle;
    });

    setTypingPhrases(dictionary.hero.typing);

    applyPortfolioDeepTranslation(selectedLanguage, dictionary);
}

function toggleSiteLanguage() {
    const nextLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    globalThis.localStorage.setItem('site-language', nextLanguage);
    applyLanguage(nextLanguage);
}

function initLanguageAndContent() {
    const storedLanguage = globalThis.localStorage.getItem('site-language');
    const browserLanguage = navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
    const initialLanguage = storedLanguage || browserLanguage;

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

    navMenu.appendChild(mobileActions);
}

function initTypingEffect() {
    const typingText = document.getElementById('typing-text');
    if (!typingText || typingState.started) {
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
    const planets = document.querySelectorAll('.random-orbit');

    planets.forEach((planet, index) => {
        const startAngle = Math.random() * 360;
        const radius = 120 + (index * 25);

        const duration = 15 + Math.random() * 15;
        const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
        const delay = 0;

        planet.style.transform = `rotate(${startAngle}deg) translateX(${radius}px) rotate(-${startAngle}deg)`;

        const animationName = `orbit${index}`;
        const keyframes = `
            @keyframes ${animationName} {
                from {
                    transform: rotate(${startAngle}deg) translateX(${radius}px) rotate(-${startAngle}deg);
                }
                to {
                    transform: rotate(${startAngle + 360}deg) translateX(${radius}px) rotate(-${startAngle + 360}deg);
                }
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = keyframes;
        document.head.appendChild(styleSheet);

        planet.style.animation = `${animationName} ${duration}s linear infinite ${direction}`;
        planet.style.animationDelay = `${delay}s`;

        planet.addEventListener('mouseenter', () => {
            planet.style.animationPlayState = 'paused';
        });

        planet.addEventListener('mouseleave', () => {
            planet.style.animationPlayState = 'running';
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

function initSimpleStats() {
    const stats = document.querySelectorAll('.stat-value[data-target]');
    if (stats.length === 0) {
        return;
    }

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
