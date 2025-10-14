#!/bin/bash
# Script pour configurer l'URL de l'API pour la production

echo "🔧 Configuration de l'URL de l'API pour la production"
echo ""

# Demander l'URL de l'API
read -p "Entrez l'URL de votre API Render (ex: https://scotty-api.onrender.com): " API_URL

if [ -z "$API_URL" ]; then
    echo "❌ URL vide. Abandon."
    exit 1
fi

# Retirer le slash final si présent
API_URL="${API_URL%/}"

echo ""
echo "📝 Mise à jour de dashboard-script.js..."

# Sauvegarder l'original
cp js/dashboard-script.js js/dashboard-script.js.backup

# Remplacer l'URL dans le fichier
sed -i '' "s|const API_BASE_URL = 'http://127.0.0.1:5001/api';|const API_BASE_URL = '${API_URL}/api';|g" js/dashboard-script.js

echo "✅ URL de l'API mise à jour vers: ${API_URL}/api"
echo ""
echo "📋 Prochaines étapes:"
echo "   1. Vérifiez que le fichier js/dashboard-script.js contient la bonne URL"
echo "   2. Committez et pushez sur GitHub"
echo "   3. Netlify se mettra à jour automatiquement"
echo ""
echo "💾 Une sauvegarde a été créée: js/dashboard-script.js.backup"
