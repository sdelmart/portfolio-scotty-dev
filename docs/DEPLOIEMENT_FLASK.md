# Fichiers de configuration Render pour Flask API

## Instructions pour déployer Flask sur Render

### Fichiers nécessaires dans le dossier Flask (`~/Projets Persos/mon_dashboard`)

Créez ces fichiers à la racine de votre projet Flask :

---

### 1. `render.yaml`

```yaml
services:
  - type: web
    name: scotty-dashboard-api
    env: python
    region: frankfurt  # ou oregon, singapore selon votre localisation
    plan: free
    buildCommand: "pip install -r requirements.txt"
    startCommand: "gunicorn app:app"
    envVars:
      - key: PYTHON_VERSION
        value: 3.11.0
      - key: FLASK_ENV
        value: production
```

---

### 2. Ajouter à `requirements.txt`

Assurez-vous d'avoir `gunicorn` dans votre `requirements.txt` :

```
Flask==3.0.0
Flask-CORS==4.0.0
requests==2.31.0
gunicorn==21.2.0
```

---

### 3. Modifier `app.py` pour la production

Ajoutez ces lignes au début de votre `app.py` :

```python
import os
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# Configuration CORS pour la production
if os.environ.get('FLASK_ENV') == 'production':
    # Remplacez par votre URL Netlify
    CORS(app, origins=["https://scotty-dev.netlify.app"])
else:
    # En développement, autoriser localhost
    CORS(app)

# ... reste de votre code
```

Et à la fin du fichier :

```python
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    app.run(host='0.0.0.0', port=port, debug=False)
```

---

### 4. Créer `.gitignore` dans le dossier Flask

```
venv/
__pycache__/
*.pyc
.env
.DS_Store
*.db
```

---

## Déploiement sur Render

1. Créer un compte sur [render.com](https://render.com)
2. Connecter votre compte GitHub
3. Créer un nouveau "Web Service"
4. Sélectionner le repo de votre projet Flask
5. Render détectera automatiquement le `render.yaml`
6. Cliquer sur "Deploy"

**Important** : Notez l'URL fournie par Render (ex: `https://scotty-dashboard-api.onrender.com`)

---

## ⚠️ Note importante

Le plan gratuit de Render met le service en veille après 15 minutes d'inactivité.
Le premier chargement peut prendre 30-60 secondes.
