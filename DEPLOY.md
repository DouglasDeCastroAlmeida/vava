# 🚀 Guia de Deploy & Operações — Valesca Almeida (Vavá)
> **Domínio Oficial de Produção:** [https://valescaalmeida.com](https://valescaalmeida.com)  
> **Espelho / Homologação (GitHub Pages):** [https://douglasdecastroalmeida.github.io/vava/](https://douglasdecastroalmeida.github.io/vava/)  
> **Servidor:** VPS Hostinger KVM Ubuntu (`179.199.155.156`)  
> **Orquestração:** Docker & Docker Compose com Servidor Web Caddy  

---

## 1. Visão Geral da Arquitetura de Deploy

O projeto é uma aplicação Single Page Application (SPA) em **React 18 + Vite**, empacotada em uma imagem Docker minimalista com o servidor web **Caddy (Alpine)**.

```
                                [ Visitante / Cliente ]
                                           │
                        ┌──────────────────┴──────────────────┐
                        ▼                                     ▼
             [ valescaalmeida.com ]               [ douglasdecastroalmeida.github.io/vava/ ]
                        │                                     │
                        ▼ (DNS A: 179.199.155.156)            ▼ (Deploy Automático)
             ┌─────────────────────────┐           ┌────────────────────────┐
             │ Hostinger VPS (Ubuntu)  │           │     GitHub Pages       │
             │   Portas 80 / 443       │           │   (GitHub Actions)     │
             │                         │           └────────────────────────┘
             │ ┌─────────────────────┐ │
             │ │ Container Docker:   │ │
             │ │ valesca_almeida_    │ │
             │ │ website             │ │
             │ │ (Caddy + Assets)    │ │
             │ └─────────────────────┘ │
             └─────────────────────────┘
```

---

## 2. Ambiente de Produção: VPS Hostinger

### 2.1. Configuração do Servidor
* **IP da VPS:** `179.199.155.156`
* **Usuário SSH:** `root`
* **Diretório da Aplicação:** `/opt/vava`
* **Nome do Container Docker:** `valesca_almeida_website`
* **Rede Docker:** `vava_network` (bridge)
* **Volumes Persistentes:**
  * `vava_caddy_data`: Armazena certificados SSL gerados e chaves criptográficas da Let's Encrypt / ZeroSSL.
  * `vava_caddy_config`: Armazena configurações em cache do Caddy.

### 2.2. Portas Expostas
| Porta | Protocolo | Função |
| :--- | :--- | :--- |
| `80` | TCP | HTTP (Redirecionamento 308 automático para HTTPS) |
| `443` | TCP / UDP | HTTPS e HTTP/3 (QUIC) seguro com certificado SSL automático |

### 2.3. Configuração de DNS (Hostinger)
No painel de DNS da Hostinger para `valescaalmeida.com`:
* **Registro A (`@`):** `179.199.155.156` (TTL: 300)
* **Registro CNAME (`www`):** `valescaalmeida.com` (TTL: 300)

---

## 3. Procedimento Operacional de Atualização (Deploy Contínuo)

Sempre que novas alterações forem mescladas na branch `main` do GitHub, execute a atualização na VPS com o script automatizado:

### Método 1: Script de 1 Comando (Recomendado)
Acesse a VPS via SSH e execute:
```bash
ssh root@179.199.155.156 "cd /opt/vava && ./deploy.sh"
```

O script [`deploy.sh`](file:///c:/Users/Douglas/Documents/vava/deploy.sh) executa automaticamente:
1. `git pull origin main` (baixa o código atualizado do GitHub).
2. `docker compose up -d --build` (reconstrói a imagem com Vite `--base /` e sobe o novo container sem downtime).
3. `docker image prune -f` (remove imagens antigas e libera espaço em disco).

### Método 2: Passo a Passo Manual
```bash
# 1. Conectar na VPS
ssh root@179.199.155.156

# 2. Entrar na pasta do projeto
cd /opt/vava

# 3. Atualizar repositório
git pull origin main

# 4. Reconstruir e subir o container
docker compose up -d --build

# 5. Conferir status do container
docker ps --filter "name=valesca_almeida_website"
```

---

## 4. Monitoramento e Logs de Produção

### Visualizar Logs em Tempo Real
```bash
docker logs -f --tail 100 valesca_almeida_website
```

### Reiniciar o Container
```bash
docker restart valesca_almeida_website
```

### Parar e Remover
```bash
cd /opt/vava && docker compose down
```

### Testar Conexão e Certificado SSL via CLI
```bash
curl -ILs https://valescaalmeida.com
```
*Deve retornar `HTTP/2 200` com `server: Caddy` e headers de cache imutável.*

---

## 5. Ambiente Secundário: GitHub Pages (Homologação)

O repositório está configurado para publicar automaticamente a versão de visualização a cada push na branch `main`:
* **Workflow:** [`.github/workflows/deploy.yml`](file:///c:/Users/Douglas/Documents/vava/.github/workflows/deploy.yml)
* **URL:** `https://douglasdecastroalmeida.github.io/vava/`
* **Build Base:** `/vava/` (configurado dinamicamente no `vite.config.js`).

---

## 6. Checklist de Segurança e Melhores Práticas
1. **Nunca commitar chaves ou credenciais:** O arquivo `.env` está explicitamente protegido no `.gitignore`.
2. **Build para Produção:** O comando de build da VPS usa `npm run build:hostinger`, garantindo que todas as URLs apontem para a raiz (`/`).
3. **Persistência de Certificados:** O volume `vava_caddy_data` jamais deve ser deletado manualmente sem necessidade, para evitar atingir os limites de emissão (rate limit) da Let's Encrypt.
