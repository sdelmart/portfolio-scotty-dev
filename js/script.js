document.addEventListener('DOMContentLoaded', function() {
    const initializers = [
        initLanguageAndContent,
        initNavbar,
        initTypingEffect,
        initOrbitAnimations,
        initSunPhotoModal,
        initSmoothScroll,
        initSectionAnimations,
        initSimpleStats,
        initChatbot
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
        title: 'Scott - Web Developer Junior',
        description: 'Portfolio de Scott Delmart, développeur web junior : projets, compétences, dashboard étudiant et contact.',
        nav: {
            home: 'Accueil',
            about: 'À propos',
            projects: 'Projets',
            contact: 'Contact',
            portfolio: 'Portfolio',
            dashboard: 'Tableau de bord'
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
            p1: 'Je suis étudiant en BUT Informatique, et ceci est mon site web.',
            p2: 'J\'aime créer des sites web et développer des interfaces à la fois simples, modernes et agréables à utiliser.',
            skills: 'Compétences & Technologies'
        },
        projects: {
            title: 'Mes Projets',
            calc: {
                title: 'Calculatrice',
                desc: 'Une calculatrice moderne avec support du clavier et de la souris, offrant un design épuré et des calculs instantanés.',
                cta: 'Ouvrir la calculatrice'
            },
            coming: 'Projet à venir',
            live: 'Live Demo',
            github: 'GitHub'
        },
        contact: {
            title: 'Contactez-moi',
            intro: 'Collaborons ensemble ! Je suis toujours ouvert à discuter de projets passionnants et de nouvelles opportunités.',
            form: {
                name: 'Votre nom',
                email: 'Votre e-mail',
                subject: 'Objet',
                message: 'Votre message',
                submit: 'Envoyer le message'
            }
        },
        chatbot: {
            title: 'Assistant Scotty',
            welcome: 'Salut 👋 Je peux répondre sur mon profil, mes projets et le contact.',
            q1: 'Qui es-tu ?',
            q2: 'Tu étudies quoi ?',
            q3: 'Tes compétences ?',
            q4: 'Quels projets ?',
            q5: 'Tu cherches une alternance ?',
            q6: 'Comment te contacter ?',
            label: 'Pose ta question',
            placeholder: 'Pose une question...',
            send: 'Envoyer',
            openAria: 'Ouvrir le chatbot',
            closeAria: 'Fermer le chatbot',
            unknown: 'Je n\'ai pas encore cette réponse. Tu peux me demander: profil, BUT info, compétences, projets ou contact.',
            ctaContact: 'Aller au contact',
            ctaProjects: 'Voir les projets'
        },
        langToggle: 'FR / EN (FR)'
    },
    en: {
        title: 'Scott - Junior Web Developer',
        description: 'Portfolio of Scott Delmart, junior web developer: projects, skills, student dashboard and contact.',
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
            portfolio: 'Portfolio',
            dashboard: 'Dashboard'
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
            p1: 'I am a computer science student, and this is my website.',
            p2: 'I enjoy building websites and creating interfaces that are simple, modern, and pleasant to use.',
            skills: 'Skills & Technologies'
        },
        projects: {
            title: 'My Projects',
            calc: {
                title: 'Calculator',
                desc: 'A modern calculator with keyboard and mouse support, featuring a clean design and instant calculations.',
                cta: 'Open calculator'
            },
            coming: 'Coming soon project',
            live: 'Live Demo',
            github: 'GitHub'
        },
        contact: {
            title: 'Contact me',
            intro: 'Let\'s collaborate! I\'m always open to discussing exciting projects and new opportunities.',
            form: {
                name: 'Your name',
                email: 'Your email',
                subject: 'Subject',
                message: 'Your message',
                submit: 'Send message'
            }
        },
        chatbot: {
            title: 'Scotty Assistant',
            welcome: 'Hi 👋 I can answer questions about my profile, projects and contact details.',
            q1: 'Who are you?',
            q2: 'What are you studying?',
            q3: 'Your skills?',
            q4: 'Which projects?',
            q5: 'Are you looking for an internship?',
            q6: 'How can I contact you?',
            label: 'Ask your question',
            placeholder: 'Ask a question...',
            send: 'Send',
            openAria: 'Open chatbot',
            closeAria: 'Close chatbot',
            unknown: 'I do not have this answer yet. Ask me about: profile, studies, skills, projects or contact.',
            ctaContact: 'Go to contact',
            ctaProjects: 'View projects'
        },
        langToggle: 'FR / EN (EN)'
    }
};

let currentLanguage = 'fr';
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

function applyLanguage(language) {
    const selectedLanguage = I18N[language] ? language : 'fr';
    currentLanguage = selectedLanguage;
    const dictionary = I18N[selectedLanguage];

    document.documentElement.lang = selectedLanguage;
    document.title = dictionary.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
        descriptionMeta.setAttribute('content', dictionary.description);
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

    const chatbotToggle = document.getElementById('chatbot-toggle');
    if (chatbotToggle) {
        chatbotToggle.setAttribute('aria-label', dictionary.chatbot.openAria);
    }

    const chatbotClose = document.getElementById('chatbot-close');
    if (chatbotClose) {
        chatbotClose.setAttribute('aria-label', dictionary.chatbot.closeAria);
    }

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = dictionary.langToggle;
    }

    setTypingPhrases(dictionary.hero.typing);
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

    langToggle.addEventListener('click', () => {
        const nextLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
        globalThis.localStorage.setItem('site-language', nextLanguage);
        applyLanguage(nextLanguage);
    });
}

function initNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !navMenu || navLinks.length === 0) {
        return;
    }

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

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + globalThis.pageYOffset - headerOffset;

                globalThis.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
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

function initChatbot() {
    const toggleButton = document.getElementById('chatbot-toggle');
    const panel = document.getElementById('chatbot-panel');
    const closeButton = document.getElementById('chatbot-close');
    const messages = document.getElementById('chatbot-messages');
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-input');
    const chips = document.querySelectorAll('.chatbot-chip');

    if (!toggleButton || !panel || !closeButton || !messages || !form || !input) {
        return;
    }

    const hasContactSection = Boolean(document.getElementById('contact'));
    const contactHref = hasContactSection ? '#contact' : '/#contact';
    const hasProjectsSection = Boolean(document.getElementById('projects'));
    const projectsHref = hasProjectsSection ? '#projects' : '/#projects';

    const faq = [
        {
            keys: ['qui es-tu', 'qui tu es', 'présente toi', 'présente-toi', 'who are you', 'introduce yourself'],
            answer: {
                fr: 'Je suis Scotty, étudiant en BUT Informatique, passionné de jeux vidéos et d\'informatique, et ceci est mon site personnel créé au cours de mes années universitaires.',
                en: 'I am Scotty, a computer science student passionate about video games and software, and this is my personal website built during my studies.'
            }
        },
        {
            keys: ['but', 'étudies', 'etudes', 'informatique', 'study', 'studying', 'computer science'],
            answer: {
                fr: 'Je suis en BUT Informatique et je développe ce portfolio pour présenter mon profil et mes projets.',
                en: 'I am studying computer science and building this portfolio to showcase my profile and projects.'
            }
        },
        {
            keys: ['compétences', 'competences', 'stack', 'technos', 'skills', 'technologies'],
            answer: {
                fr: 'Mes technos principales: HTML, CSS, JavaScript, Python, Java, C++, Rust, C, PhP, ainsi que des bases React/Node.js.',
                en: 'My main technologies are HTML, CSS, JavaScript, Python, Java, C++, Rust, C, PHP, plus foundations in React/Node.js.'
            }
        },
        {
            keys: ['projets', 'projet', 'calculatrice', 'dashboard', 'project', 'projects'],
            answer: {
                fr: 'Tu peux voir mes projets dans la section Projets. Je peux aussi t’y emmener.',
                en: 'You can see my work in the Projects section. I can take you there as well.'
            },
            projectsCta: true
        },
        {
            keys: ['alternance', 'stage', 'dispo', 'disponible', 'internship', 'available'],
            answer: {
                fr: 'Oui, je suis ouvert aux opportunités (stage/alternance). Tu peux me contacter via le formulaire.',
                en: 'Yes, I am open to opportunities (internship/work placement). You can contact me via the form.'
            }
        },
        {
            keys: ['contact', 'mail', 'email', 'contacter', 'reach you'],
            answer: {
                fr: 'Tu peux me contacter dans la section Contact de la page. Je peux aussi t’y emmener.',
                en: 'You can contact me in the Contact section of the page. I can take you there too.'
            },
            contactCta: true
        }
    ];

    const appendBubble = (text, role = 'bot', options = {}) => {
        const bubble = document.createElement('p');
        bubble.className = `chatbot-bubble chatbot-bubble-${role}`;
        bubble.textContent = text;
        messages.appendChild(bubble);

        if (options.contactCta) {
            const cta = document.createElement('a');
            cta.className = 'chatbot-chip';
            cta.href = contactHref;
            cta.textContent = I18N[currentLanguage].chatbot.ctaContact;
            cta.style.textDecoration = 'none';
            cta.style.display = 'inline-block';
            messages.appendChild(cta);
        }

        if (options.projectsCta) {
            const cta = document.createElement('a');
            cta.className = 'chatbot-chip';
            cta.href = projectsHref;
            cta.textContent = I18N[currentLanguage].chatbot.ctaProjects;
            cta.style.textDecoration = 'none';
            cta.style.display = 'inline-block';
            messages.appendChild(cta);
        }

        messages.scrollTop = messages.scrollHeight;
    };

    const answerQuestion = (question) => {
        const normalized = question.toLowerCase().trim();
        const found = faq.find(item => item.keys.some(key => normalized.includes(key)));

        setTimeout(() => {
            if (found) {
                const answer = typeof found.answer === 'string' ? found.answer : found.answer[currentLanguage];
                appendBubble(answer, 'bot', {
                    contactCta: Boolean(found.contactCta),
                    projectsCta: Boolean(found.projectsCta)
                });
                return;
            }

            appendBubble(I18N[currentLanguage].chatbot.unknown, 'bot');
        }, 500);
    };

    const openPanel = () => {
        panel.hidden = false;
        toggleButton.setAttribute('aria-expanded', 'true');
        input.focus();
    };

    const closePanel = () => {
        panel.hidden = true;
        toggleButton.setAttribute('aria-expanded', 'false');
    };

    toggleButton.addEventListener('click', () => {
        if (panel.hidden) {
            openPanel();
            return;
        }
        closePanel();
    });

    closeButton.addEventListener('click', closePanel);

    chips.forEach((chip) => {
        chip.addEventListener('click', () => {
            const question = chip.dataset.question || '';
            appendBubble(question, 'user');
            answerQuestion(question);
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const question = input.value.trim();
        if (!question) {
            return;
        }

        appendBubble(question, 'user');
        answerQuestion(question);
        input.value = '';
    });
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
