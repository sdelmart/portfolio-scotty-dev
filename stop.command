#!/bin/bash
# Script d'arrêt du Dashboard Flask

echo "🛑 Arrêt de Flask API..."
echo ""

# Couleurs
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Arrêter Flask API (port 5001)
FLASK_PID=$(lsof -ti:5001)
if [ -z "$FLASK_PID" ]; then
    echo -e "${YELLOW}ℹ️  Aucun serveur Flask en cours sur le port 5001${NC}"
else
    echo -e "${GREEN}🔍 Arrêt de Flask API (PID: $FLASK_PID)${NC}"
    kill $FLASK_PID
    echo -e "${GREEN}✅ Flask API arrêtée${NC}"
fi

echo ""
echo -e "${GREEN}✨ Flask est arrêté${NC}"
echo "Vous pouvez fermer cette fenêtre."
sleep 2
