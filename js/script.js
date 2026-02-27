document.addEventListener('DOMContentLoaded', function() {
    const initializers = [
        initNavbar,
        initTypingEffect,
        initOrbitAnimations,
        initSunPhotoModal,
        initSmoothScroll,
        initSectionAnimations,
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
    if (!typingText) {
        return;
    }

    const phrases = [
        'Web Developer',
        'Front-End', 
        'Problem Solver'
    ];
    
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeEffect() {
        const currentPhrase = phrases[currentPhraseIndex];
        
        if (isDeleting) {
            // Deleting characters
            typingText.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 50; // Faster when deleting
        } else {
            // Typing characters
            typingText.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 100; // Normal typing speed
        }
        
        // When word is complete
        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause before deleting
        } 
        // When word is completely deleted
        else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
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
        { keys: ['qui es-tu', 'qui tu es', 'présente toi', 'présente-toi'], answer: 'Je suis Scotty, étudiant en BUT Informatique, passionné de jeux vidéos et d\'informatique, et ceci est mon site personnel crée au cours des mes années universitaires.' },
        { keys: ['but', 'étudies', 'etudes', 'informatique'], answer: 'Je suis en BUT Informatique et je développe ce portfolio pour présenter mon profil et mes projets.' },
        { keys: ['compétences', 'competences', 'stack', 'technos'], answer: 'Mes technos principales: HTML, CSS, JavaScript, Python, Java, C++, Rust, C, PhP, ainsi des bases React/Node.js.' },
        { keys: ['projets', 'projet', 'calculatrice', 'dashboard'], answer: 'Tu peux voir mes projets dans la section Projets. Je peux aussi t’y emmener.', projectsCta: true },
        { keys: ['alternance', 'stage', 'dispo', 'disponible'], answer: 'Oui, je suis ouvert aux opportunités (stage/alternance). Tu peux me contacter via le formulaire.' },
        { keys: ['contact', 'mail', 'email', 'contacter'], answer: 'Tu peux me contacter dans la section Contact de la page. Je peux aussi t’y emmener.', contactCta: true }
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
            cta.textContent = 'Aller au contact';
            cta.style.textDecoration = 'none';
            cta.style.display = 'inline-block';
            messages.appendChild(cta);
        }

        if (options.projectsCta) {
            const cta = document.createElement('a');
            cta.className = 'chatbot-chip';
            cta.href = projectsHref;
            cta.textContent = 'Voir les projets';
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
                appendBubble(found.answer, 'bot', {
                    contactCta: Boolean(found.contactCta),
                    projectsCta: Boolean(found.projectsCta)
                });
                return;
            }

            appendBubble('Je n\'ai pas encore cette réponse. Tu peux me demander: profil, BUT info, compétences, projets ou contact.', 'bot');
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

console.log('Portfolio bien chargé !');
