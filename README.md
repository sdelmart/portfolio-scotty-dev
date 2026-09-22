# Portfolio Scotty Dev

Portfolio personnel statique (HTML/CSS/JS), bilingue FR/EN, présentant mes compétences, projets et activité freelance (Delmart Digital).

## Démo en ligne

- **Portfolio** : [scotty-dev.netlify.app](https://scotty-dev.netlify.app)
- **Détail des compétences (BUT Informatique)** : [scotty-dev.netlify.app/pages/portfolio.html](https://scotty-dev.netlify.app/pages/portfolio.html)
- **Calculatrice** : [scotty-dev.netlify.app/pages/calculatrice.html](https://scotty-dev.netlify.app/pages/calculatrice.html)

## Fonctionnalités

- 🏠 Page d'accueil : présentation, statistiques rapides, à propos
- 🎓 Page Portfolio : tableau des compétences BUT Informatique (C1 à C6) avec preuves (SAE) et projets détaillés
- 💼 Section Projets et Activité pro (Delmart Digital)
- 📧 Section Contact (email, localisation, réseaux LinkedIn/GitHub)
- 🌐 Traduction FR/EN intégrale (y compris le tableau de compétences)
- 🧮 Mini-projet Calculatrice
- 🎯 Design responsive, thème sombre

## Technologies

- HTML5, CSS3, JavaScript (aucun framework, aucun backend)
- Animations CSS et JS (scroll reveal, typing effect)
- Système de traduction FR/EN maison (`js/script.js`)
- Hébergement statique sur Netlify

## Structure du Projet

```
Portfolio/
├── css/
│   ├── style.css
│   ├── portfolio-style.css
│   └── calculatrice-style.css
├── js/
│   ├── script.js              # Logique commune : nav, animations, i18n
│   └── calculatrice-script.js
├── assets/
│   ├── images/
│   └── documents/              # CV téléchargeable
├── docs/
│   ├── GUIDE_DEPLOIEMENT.md
│   └── SEO_GOOGLE_SUBMISSION_CHECKLIST.md
├── pages/
│   ├── portfolio.html          # Détail des compétences BUT Informatique
│   ├── calculatrice.html
│   └── 404.html
├── index.html                  # Page d'accueil
├── netlify.toml                 # Config Netlify (redirections, cache, headers)
├── sitemap.xml / sitemap_index.xml / sitemap_google.xml
└── robots.txt
```

## Traduction FR/EN

La logique de traduction vit dans `js/script.js` :
- `I18N` : dictionnaire FR/EN pour les textes courants (`data-i18n`)
- Page Portfolio : traduction approfondie du contenu (tableau de compétences via `data-portfolio-i18n`, cartes de projets via `PORTFOLIO_REPLACEMENTS_EN`)
- Le choix de langue est mémorisé dans `localStorage` (`site-language`)

## Démarrage Local

Aucune dépendance ni build requis. Pour prévisualiser le site en local :

```bash
python3 -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## Déploiement

Le site est déployé sur Netlify (`netlify.toml` gère les redirections d'URLs propres et les en-têtes de cache). Un push sur `main` déclenche un redéploiement automatique.

Consultez le [Guide de Déploiement](docs/GUIDE_DEPLOIEMENT.md) pour plus de détails.

## Personnalisation

### Couleurs
Les couleurs principales sont définies dans `css/style.css` :
```css
:root {
    --accent: #ff3838;        /* Rouge principal */
    --accent-2: #ff6b6b;      /* Rouge secondaire */
    --bg: #0a0a0a;            /* Fond noir */
    --card: #1a1a1a;          /* Cartes */
}
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 👤 Auteur

**Scotty Delmart**
- GitHub: [@sdelmart](https://github.com/sdelmart)
- LinkedIn: [scotty-delmart](https://www.linkedin.com/in/scotty-delmart/)
- Portfolio: [scotty-dev.netlify.app](https://scotty-dev.netlify.app)

---
