# 🚀 Guide de Démarrage - Dashboard Portfolio

## ✅ Fichiers Créés

Tous les fichiers ont été créés avec succès :
- ✅ `dashboard.html` - Page dashboard intégrée
- ✅ `dashboard-style.css` - Styles thème rouge
- ✅ `dashboard-script.js` - Logique et API calls
- ✅ `index.html` - Lien Dashboard ajouté dans le menu

## 🎯 Démarrage en 3 Étapes

### Étape 1 : Lancer le Backend Flask

Ouvre un terminal et lance l'API Flask :

```bash
cd ~/Projets\ Persos/mon_dashboard
source venv/bin/activate
python app.py
```

Tu devrais voir :
```
* Running on http://127.0.0.1:5001
```

**⚠️ Important : Garde ce terminal ouvert !**

### Étape 2 : Lancer le Serveur Web Local

Ouvre un NOUVEAU terminal et lance le serveur pour le portfolio :

```bash
cd ~/Desktop/portofolio/portfolio\ rouge
python3 -m http.server 8000
```

Tu devrais voir :
```
Serving HTTP on :: port 8000 ...
```

### Étape 3 : Ouvrir dans le Navigateur

Ouvre ton navigateur et va sur :

**Page principale du portfolio :**
```
http://localhost:8000/index.html
```

**Page Dashboard directement :**
```
http://localhost:8000/dashboard.html
```

## 🎨 Navigation

### Depuis le Portfolio
1. Ouvre `http://localhost:8000/index.html`
2. Clique sur **"Dashboard"** dans le menu de navigation
3. Tu arrives sur le dashboard avec le même style !

### Menu du Dashboard
Le dashboard a les mêmes liens dans le menu :
- **Home** : Retour au portfolio
- **About** : Section à propos
- **Projects** : Projets
- **Dashboard** : Page actuelle (active)
- **Contact** : Contact

## �� Fonctionnalités du Dashboard

### 1. 📝 Gestionnaire de Tâches
- Ajouter/supprimer des tâches
- 3 priorités (basse/moyenne/haute)
- Marquer comme complété
- Dates d'échéance

### 2. 🌤️ Météo
- Affichage compact
- Température actuelle
- Pour configurer ta ville et API :
  - Édite `~/Projets Persos/mon_dashboard/data/config.json`
  - Ajoute ta clé OpenWeatherMap

### 3. 🔗 Liens Rapides
- 6 liens pré-configurés
- Clique pour ouvrir dans un nouvel onglet

### 4. 🎯 Objectifs Quotidiens
- Maximum 3 objectifs/jour
- Barre de progression
- Auto-reset à minuit

### 5. ⏰ Rappels
- Ajouter des rappels avec dates
- 5 niveaux d'urgence automatiques
- Types : général/examen/devoir

## 🎨 Thème et Design

Le dashboard utilise le même thème que ton portfolio :
- **Couleurs** : Rouge/Noir élégant
- **Fond animé** : Étoiles en mouvement
- **Cards** : Effet glassmorphism
- **Boutons** : Effet glow rouge
- **Animations** : Smooth et modernes

## 🔧 Personnalisation

### Changer les Couleurs
Édite `dashboard-style.css` et modifie les variables :
```css
:root {
  --bg-1: #570000;      /* Fond principal */
  --accent: #FF3838;     /* Rouge vif */
  --accent-2: #FF5C5C;   /* Rouge clair */
}
```

### Ajouter des Liens Rapides
Édite `~/Projets Persos/mon_dashboard/data/config.json`

### Changer la Ville (Météo)
Dans `config.json` :
```json
{
  "weather": {
    "city": "Paris",
    "openweathermap_api_key": "ta_cle_api"
  }
}
```

## 🐛 Dépannage

### Le dashboard ne charge pas les données
✅ **Vérifie que Flask tourne** sur le port 5001
```bash
curl http://127.0.0.1:5001/api/todos
```

### Erreur CORS
✅ **Installe flask-cors** :
```bash
cd ~/Projets\ Persos/mon_dashboard
source venv/bin/activate
pip install flask-cors
```

Puis dans `app.py`, ajoute après les imports :
```python
from flask_cors import CORS
CORS(app)
```

### Le style ne s'applique pas
✅ **Vide le cache du navigateur** : Cmd+Shift+R (Mac)

### Les liens du menu ne fonctionnent pas
✅ **Assure-toi d'utiliser le serveur local** (pas file://)
- ✅ Bon : `http://localhost:8000/dashboard.html`
- ❌ Mauvais : `file:///Users/...`

## 📱 Responsive

Le dashboard est entièrement responsive :
- **Desktop** : 3 colonnes
- **Tablette** : 2 colonnes
- **Mobile** : 1 colonne

## 🚀 Raccourcis Utiles

### Relancer Flask (si changement de code)
```bash
# Dans le terminal Flask, fais Ctrl+C puis :
python app.py
```

### Voir les logs Flask
Les requêtes API s'affichent dans le terminal Flask

### Recharger le Dashboard
Appuie sur **F5** ou **Cmd+R**

## 🎉 C'est Tout !

Ton dashboard est maintenant parfaitement intégré dans ton portfolio avec le même style élégant rouge/noir !

**Amuse-toi bien ! 🚀**

---

**Besoin d'aide ?** Consulte `INTEGRATION_GUIDE.md` dans le dossier mon_dashboard.
