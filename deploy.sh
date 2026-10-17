#!/usr/bin/env bash
set -euo pipefail

echo "=========================================================="
echo " 🎭 ATUALIZANDO SITE OFICIAL VALESCA ALMEIDA (VAVÁ)"
echo "=========================================================="

echo "📥 1. Baixando novidades do GitHub (branch main)..."
git pull origin main

echo "🐳 2. Construindo imagem Docker e iniciando container..."
docker compose up -d --build

echo "🧹 3. Limpando imagens antigas não utilizadas..."
docker image prune -f

echo "=========================================================="
echo " ✅ Deploy concluído com sucesso!"
echo " 🌐 Acesse: https://valescaalmeida.com"
echo "=========================================================="
