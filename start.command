#!/bin/bash
# Script de démarrage du Portfolio + Dashboard

cd "$(dirname "$0")"

echo "🚀 Démarrage du Portfolio avec Dashboard..."
echo ""

# Couleurs
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Chemin vers le dossier Flask
FLASK_DIR="$HOME/Projets Persos/mon_dashboard"

# Vérifier si le dossier Flask existe
if [ ! -d "$FLASK_DIR" ]; then
    echo -e "${RED}❌ Dossier Flask non trouvé: $FLASK_DIR${NC}"
    echo "Veuillez vérifier le chemin du projet Flask"
    exit 1
fi

# Vérifier si Flask tourne déjà
if lsof -Pi :5001 -sTCP:LISTEN -t >/dev/null ; then
    echo -e "${GREEN}✅ Flask API tourne déjà sur le port 5001${NC}"
else
    echo -e "${YELLOW}🔧 Démarrage de Flask API...${NC}"
    
    # Aller dans le dossier Flask
    cd "$FLASK_DIR"
    
    # Vérifier si le venv existe
    if [ ! -d "venv" ]; then
        echo "📦 Création de l'environnement virtuel..."
        python3 -m venv venv
    fi
    
    # Activer le venv et lancer Flask en arrière-plan
    source venv/bin/activate
    pip install -q -r requirements.txt
    
    echo -e "${GREEN}✅ Lancement de Flask en arrière-plan...${NC}"
    nohup python app.py > /tmp/flask-dashboard.log 2>&1 &
    
    # Attendre que Flask démarre
    sleep 2
    
    if lsof -Pi :5001 -sTCP:LISTEN -t >/dev/null ; then
        echo -e "${GREEN}✅ Flask API démarrée avec succès${NC}"
    else
        echo -e "${RED}❌ Erreur lors du démarrage de Flask${NC}"
        echo "Consultez les logs: /tmp/flask-dashboard.log"
    fi
    
    # Retourner au dossier portfolio
    cd "$(dirname "$0")"
fi

echo ""
echo -e "${GREEN}✅ Flask API est prête sur http://127.0.0.1:5001${NC}"
echo ""
echo -e "${YELLOW}💡 Utilisez Live Server dans VS Code pour accéder au portfolio${NC}"
echo -e "${YELLOW}   Flask continuera de tourner en arrière-plan${NC}"
echo ""
echo -e "${GREEN}✨ Appuyez sur Entrée pour fermer cette fenêtre${NC}"
read
