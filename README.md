# 🎨 Portfolio Scotty Dev

Portfolio personnel avec dashboard étudiant interactif.

## 🌐 Démo en ligne

- **Portfolio** : [scotty-dev.netlify.app](https://scotty-dev.netlify.app) *(à venir)*
- **Dashboard** : [scotty-dev.netlify.app/dashboard.html](https://scotty-dev.netlify.app/dashboard.html) *(à venir)*

## ✨ Fonctionnalités

### Portfolio
- 🏠 Page d'accueil avec présentation
- 👨‍💻 Section À propos
- 💼 Projets et réalisations
- 📧 Formulaire de contact
- 🎯 Design moderne et responsive

### Dashboard Étudiant
- ✅ Gestion de tâches avec priorités
- 🎯 Objectifs quotidiens avec progression
- ⏰ Rappels et échéances
- 🌤️ Widget météo
- 🔗 Liens rapides personnalisables
- 📊 Statistiques de productivité

## 🛠️ Technologies

### Frontend
- HTML5, CSS3, JavaScript
- Design responsive
- Animations CSS

### Backend (API)
- Flask (Python)
- SQLite / PostgreSQL
- REST API

## 📁 Structure du Projet

```
portfolio rouge/
├── css/                    # Fichiers CSS
│   ├── style.css
│   └── dashboard-style.css
├── js/                     # Fichiers JavaScript
│   ├── script.js
│   ├── dashboard-script.js
│   └── dashboard-stats.js
├── assets/                 # Images et médias
│   └── images/
├── docs/                   # Documentation
│   ├── GUIDE_DEPLOIEMENT.md
│   └── DEPLOIEMENT_FLASK.md
├── index.html             # Page d'accueil
├── dashboard.html         # Dashboard
├── netlify.toml          # Config Netlify
├── start.command         # Démarrer Flask localement
├── stop.command          # Arrêter Flask
└── configure-api.sh      # Configurer l'URL de l'API
```

## 🚀 Démarrage Local

### Prérequis
- Python 3.8+
- Flask API démarrée (voir projet `mon_dashboard`)
- Navigateur moderne

### Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/portfolio-scotty-dev.git
   cd portfolio-scotty-dev
   ```

2. **Démarrer Flask API**
   ```bash
   ./start.command
   ```
   *(Lance automatiquement Flask en arrière-plan)*

3. **Ouvrir le portfolio**
   - Ouvrir `index.html` avec Live Server dans VS Code
   - Ou naviguer vers `http://localhost:5500`

4. **Arrêter les services**
   ```bash
   ./stop.command
   ```

## 🌍 Déploiement en Production

### Guide Complet
Consultez le [Guide de Déploiement Détaillé](docs/GUIDE_DEPLOIEMENT.md)

### Résumé Rapide

1. **Frontend sur Netlify**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/portfolio-scotty-dev.git
   git push -u origin main
   ```
   Puis connecter à Netlify via GitHub.

2. **Backend sur Render**
   Suivre les instructions dans [DEPLOIEMENT_FLASK.md](docs/DEPLOIEMENT_FLASK.md)

3. **Configurer l'URL de l'API**
   ```bash
   ./configure-api.sh
   ```
   Entrer l'URL fournie par Render.

## 📊 API Endpoints

### Base URL (local)
```
http://127.0.0.1:5001/api
```

### Base URL (production)
```
https://scotty-dashboard-api.onrender.com/api
```

### Endpoints disponibles
- `GET /todos` - Liste des tâches
- `POST /todos` - Créer une tâche
- `PUT /todos/:id` - Mettre à jour une tâche
- `DELETE /todos/:id` - Supprimer une tâche
- `GET /goals` - Liste des objectifs
- `GET /goals/stats` - Statistiques des objectifs
- `POST /goals` - Créer un objectif
- `POST /goals/:id/toggle` - Toggle un objectif
- `GET /reminders` - Liste des rappels
- `POST /reminders` - Créer un rappel
- `DELETE /reminders/:id` - Supprimer un rappel
- `GET /weather` - Données météo
- `GET /links` - Liens rapides

## 🎨 Personnalisation

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

### Modifier l'API URL
Utiliser le script fourni :
```bash
./configure-api.sh
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Auteur

**Scotty Dev**
- GitHub: [@sdelmart](https://github.com/sdelmart)
- Portfolio: [scotty-dev.netlify.app](https://scotty-dev.netlify.app)

## 🙏 Remerciements

- Design inspiré par les tendances modernes du web
- Icônes de [DevIcon](https://devicon.dev/)
- Police Google Fonts

---

⭐ N'oubliez pas de mettre une étoile si ce projet vous plaît !
