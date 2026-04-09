# Checklist soumission Google (Search Console)

Ce document te donne les actions finales a faire une fois le site deploie.

## 1) Verifier la propriete

1. Ouvre Google Search Console.
2. Ajoute la propriete `https://scotty-dev.netlify.app/`.
3. Valide la propriete (DNS TXT recommande si tu utilises un domaine perso).

## 2) Soumettre le sitemap

1. Menu `Sitemaps`.
2. Soumets l'URL:
   - `https://scotty-dev.netlify.app/sitemap.xml`

## 3) Demander l'indexation des pages importantes

Dans `Inspection de l'URL`, teste puis demande l'indexation pour:

- `https://scotty-dev.netlify.app/`
- `https://scotty-dev.netlify.app/pages/portfolio.html`
- `https://scotty-dev.netlify.app/pages/dashboard.html`
- `https://scotty-dev.netlify.app/pages/calculatrice.html`

## 4) Verifications rapides

- `robots.txt` accessible: `https://scotty-dev.netlify.app/robots.txt`
- `sitemap.xml` accessible: `https://scotty-dev.netlify.app/sitemap.xml`
- Pages utilitaires en noindex:
  - `/pages/404.html`
  - `/pages/merci.html`

## 5) Delai

- Premiere indexation: quelques jours a quelques semaines.
- Recontrole dans `Pages` et `Performances` dans Search Console.
