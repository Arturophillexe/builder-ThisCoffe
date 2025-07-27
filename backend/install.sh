#!/bin/bash

echo "🚀 Instalando dependencias del backend de thiscoffee..."

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js primero."
    exit 1
fi

# Verificar si npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado. Por favor instala npm primero."
    exit 1
fi

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Verificar si MongoDB está ejecutándose
echo "🔍 Verificando conexión a MongoDB..."
if ! pgrep mongod > /dev/null; then
    echo "⚠️  MongoDB no parece estar ejecutándose."
    echo "   Por favor asegúrate de tener MongoDB corriendo en localhost:27017"
    echo "   Puedes iniciarlo con: sudo systemctl start mongod"
fi

echo "✅ Instalación completada!"
echo ""
echo "Para iniciar el servidor:"
echo "  npm run dev    # Modo desarrollo con nodemon"
echo "  npm start      # Modo producción"
echo ""
echo "El servidor estará disponible en: http://localhost:5000"
