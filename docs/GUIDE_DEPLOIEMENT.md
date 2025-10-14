# 🚀 Guide de Déploiement - Portfolio Scotty Dev

Ce guide vous explique comment mettre votre portfolio en ligne sur **Netlify** (frontend) et **Render** (backend Flask).

---

## 📋 Prérequis

- Compte GitHub
- Compte Netlify (gratuit)
- Compte Render (gratuit)
- Git installé sur votre machine

---

## 🎯 Architecture du déploiement

```
Frontend (Netlify)  : https://scotty-dev.netlify.app
Backend (Render)    : https://scotty-dashboard-api.onrender.com
```

---

## 📦 ÉTAPE 1 : Préparer le Repository GitHub

### 1.1 Initialiser Git dans le dossier Portfolio

```bash
cd "/Users/scott/Desktop/portofolio/portfolio rouge"
git init
git add .
git commit -m "Initial commit - Portfolio Scotty Dev"
```

### 1.2 Créer un repository sur GitHub

1. Aller sur [github.com](https://github.com)
2. Cliquer sur "New repository"
3. Nom : `portfolio-scotty-dev`
4. Visibilité : Public
5. Ne pas initialiser avec README (déjà fait localement)
6. Créer le repository

### 1.3 Pousser le code sur GitHub

```bash
git remote add origin https://github.com/VOTRE-USERNAME/portfolio-scotty-dev.git
git branch -M main
git push -u origin main
```

---

## 🌐 ÉTAPE 2 : Déployer le Frontend sur Netlify

### 2.1 Créer un compte Netlify

1. Aller sur [netlify.com](https://www.netlify.com)
2. S'inscrire avec GitHub

### 2.2 Importer le projet

1. Cliquer sur "Add new site" → "Import an existing project"
2. Choisir "Deploy with GitHub"
3. Autoriser Netlify à accéder à vos repos
4. Sélectionner `portfolio-scotty-dev`

### 2.3 Configurer le déploiement

- **Branch to deploy** : `main`
- **Build command** : (laisser vide)
- **Publish directory** : `.` (point)

### 2.4 Déployer

1. Cliquer sur "Deploy site"
2. Attendre 1-2 minutes
3. Netlify vous donne une URL : `random-name-12345.netlify.app`

### 2.5 Personnaliser le nom de domaine

1. Aller dans "Site settings" → "Domain management"
2. Cliquer sur "Options" → "Edit site name"
3. Changer en : `scotty-dev` (ou votre nom préféré)
4. Votre URL devient : `scotty-dev.netlify.app` ✅

---

## 🐍 ÉTAPE 3 : Déployer Flask sur Render

### 3.1 Préparer le projet Flask

⚠️ **Ces modifications doivent être faites dans le dossier Flask** (`~/Projets Persos/mon_dashboard`)

#### A. Créer `render.yaml` à la racine

```yaml
services:
  - type: web
    name: scotty-dashboard-api
    env: python
    region: frankfurt
    plan: free
    buildCommand: "pip install -r requirements.txt"
    startCommand: "gunicorn app:app"
    envVars:
      - key: PYTHON_VERSION
        value: 3.11.0
      - key: FLASK_ENV
        value: production
```

#### B. Mettre à jour `requirements.txt`

Ajouter cette ligne :
```
gunicorn==21.2.0
```

#### C. Modifier `app.py`

Au début du fichier :
```python
import os
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# CORS pour accepter les requêtes de Netlify
CORS(app, origins=[
    "https://scotty-dev.netlify.app",
    "http://localhost:5500",  # Live Server
    "http://127.0.0.1:5500"
])
```

À la fin du fichier :
```python
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    app.run(host='0.0.0.0', port=port, debug=False)
```

#### D. Créer un repo GitHub pour Flask

```bash
cd ~/Projets\ Persos/mon_dashboard
git init
git add .
git commit -m "Initial commit - Dashboard API"
```

Créer un repo `dashboard-api` sur GitHub et pousser :
```bash
git remote add origin https://github.com/VOTRE-USERNAME/dashboard-api.git
git branch -M main
git push -u origin main
```

### 3.2 Déployer sur Render

1. Aller sur [render.com](https://render.com)
2. S'inscrire avec GitHub
3. Cliquer sur "New +" → "Web Service"
4. Connecter GitHub et autoriser Render
5. Sélectionner le repo `dashboard-api`
6. Render détecte automatiquement Python
7. Configuration :
   - **Name** : `scotty-dashboard-api`
   - **Environment** : Python 3
   - **Build Command** : `pip install -r requirements.txt`
   - **Start Command** : `gunicorn app:app`
8. Cliquer sur "Create Web Service"
9. Attendre 3-5 minutes (premier déploiement)
10. Noter l'URL fournie : `https://scotty-dashboard-api.onrender.com` ✅

---

## 🔗 ÉTAPE 4 : Connecter Frontend et Backend

### 4.1 Configurer l'URL de l'API

Dans le dossier Portfolio, exécuter :
```bash
./configure-api.sh
```

Entrer l'URL Render : `https://scotty-dashboard-api.onrender.com`

### 4.2 Vérifier le changement

Ouvrir `js/dashboard-script.js` et vérifier que la ligne est :
```javascript
const API_BASE_URL = 'https://scotty-dashboard-api.onrender.com/api';
```

### 4.3 Pousser sur GitHub

```bash
git add js/dashboard-script.js
git commit -m "Configure production API URL"
git push
```

### 4.4 Netlify se met à jour automatiquement

Netlify détecte le push et redéploie automatiquement (1-2 minutes).

---

## ✅ ÉTAPE 5 : Tester

1. Ouvrir `https://scotty-dev.netlify.app`
2. Naviguer vers le Dashboard
3. Attendre 30-60 secondes (première requête à Render est lente)
4. Vérifier que tout fonctionne ✨

---

## 🎨 BONUS : Ajouter un nom de domaine personnalisé

### Option 1 : Garder le sous-domaine Netlify (gratuit)
- Vous avez déjà `scotty-dev.netlify.app` ✅

### Option 2 : Acheter un nom de domaine (8-10€/an)

1. Acheter un domaine sur [Cloudflare](https://www.cloudflare.com) ou [Namecheap](https://www.namecheap.com)
   - Ex : `scotty-dev.com`

2. Dans Netlify → "Domain management" → "Add custom domain"
   - Entrer : `scotty-dev.com`
   - Suivre les instructions pour configurer les DNS

3. Netlify fournit automatiquement HTTPS ✅

---

## 🔧 Maintenance et Mises à Jour

### Mettre à jour le Portfolio
```bash
# Faire vos modifications
git add .
git commit -m "Description des changements"
git push
```
Netlify se met à jour automatiquement ! ✨

### Mettre à jour l'API Flask
```bash
cd ~/Projets\ Persos/mon_dashboard
# Faire vos modifications
git add .
git commit -m "Description des changements"
git push
```
Render se met à jour automatiquement ! ✨

---

## ⚠️ Notes Importantes

### Plan Gratuit Render
- Le service se met en veille après 15 min d'inactivité
- Premier chargement = 30-60 secondes
- Parfait pour un portfolio personnel !

### Alternative payante (5$/mois)
- Pas de mise en veille
- Toujours rapide
- À considérer si vous avez beaucoup de visiteurs

---

## 🆘 Problèmes Courants

### Dashboard ne charge pas les données
- Vérifier que l'URL de l'API est correcte dans `js/dashboard-script.js`
- Vérifier que Render n'est pas en erreur (logs sur render.com)
- Attendre 1 minute (service en veille)

### Erreur CORS
- Vérifier que l'URL Netlify est dans la config CORS de Flask
- Redéployer Flask après modification

### Les changements ne s'affichent pas
- Vider le cache du navigateur (Cmd+Shift+R sur Mac)
- Vérifier que le commit est bien poussé sur GitHub
- Attendre 1-2 minutes que Netlify/Render redéploie

---

## 📞 Support

Si vous avez des questions, consultez :
- [Documentation Netlify](https://docs.netlify.com)
- [Documentation Render](https://render.com/docs)

---

## 🎉 Félicitations !

Votre portfolio est maintenant en ligne et accessible partout dans le monde ! 🌍

**URLs :**
- Portfolio : `https://scotty-dev.netlify.app`
- Dashboard : `https://scotty-dev.netlify.app/dashboard.html`
- API : `https://scotty-dashboard-api.onrender.com`
