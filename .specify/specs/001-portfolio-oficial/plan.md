# 📐 Plano Técnico: Portfólio Oficial & Central de Contratação
> **Referência:** `001-portfolio-oficial/spec.md`  
> **Status:** `COMPLETED`  

---

## 1. Abordagem Arquitetural
Desenvolvimento de uma SPA em React 18 + Vite utilizando os componentes avançados do Material UI v6. Empacotamento em Docker multi-stage com o servidor Caddy para servir assets estáticos e gerenciar SSL Let's Encrypt de forma autônoma na VPS Hostinger.

---

## 2. Componentes Criados

| Componente | Responsabilidade |
| :--- | :--- |
| [`src/components/Navbar.jsx`](file:///c:/Users/Douglas/Documents/vava/src/components/Navbar.jsx) | Cabeçalho sticky com backdrop blur, tabs de navegação e toggle de tema. |
| [`src/components/HeroSection.jsx`](file:///c:/Users/Douglas/Documents/vava/src/components/HeroSection.jsx) | Apresentação de impacto, carrossel de retratos e estatísticas com Lordicon. |
| [`src/components/TvAndReelsSection.jsx`](file:///c:/Users/Douglas/Documents/vava/src/components/TvAndReelsSection.jsx) | Grid de vídeos e cenas com modal de reprodução e filtros de mídia. |
| [`src/components/TheaterPillarsAndTimeline.jsx`](file:///c:/Users/Douglas/Documents/vava/src/components/TheaterPillarsAndTimeline.jsx) | Pilares artísticos, timeline e loop de vídeo de fundo otimizado (276 KB). |
| [`src/components/CastingSheetAndFaq.jsx`](file:///c:/Users/Douglas/Documents/vava/src/components/CastingSheetAndFaq.jsx) | Passo a passo de contratação e sanfona de dúvidas frequentes. |
| [`src/components/BookingContactSection.jsx`](file:///c:/Users/Douglas/Documents/vava/src/components/BookingContactSection.jsx) | Formulário de briefing integrado à API do WhatsApp. |
| [`src/components/Footer.jsx`](file:///c:/Users/Douglas/Documents/vava/src/components/Footer.jsx) | Rodapé institucional centralizado com créditos. |
| [`src/components/AnimatedLordIcon.jsx`](file:///c:/Users/Douglas/Documents/vava/src/components/AnimatedLordIcon.jsx) | Parser e recolorizador SVG dinâmico para Lottie JSON. |

---

## 3. Infraestrutura & Deploy
* **Docker Multi-Stage**: `node:20-alpine` (builder) + `caddy:alpine` (runtime).
* **Caddyfile**: Configuração de SSL para `valescaalmeida.com` e `www.valescaalmeida.com` com cache estático imutável.
* **deploy.sh**: Script de atualização de 1 comando na VPS.
