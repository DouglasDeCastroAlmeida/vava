# 🤖 Diretrizes Gerais para Agentes de IA (AGENTS.md)
> **Projeto:** Portal Artístico Oficial — Valesca Almeida (Vavá)  
> **Repositório:** `DouglasDeCastroAlmeida/vava`  
> **Produção Oficial:** [https://valescaalmeida.com](https://valescaalmeida.com)  
> **Homologação:** [https://douglasdecastroalmeida.github.io/vava/](https://douglasdecastroalmeida.github.io/vava/)  
> **Metodologia:** Spec-Driven Development (SDD) via GitHub Spec-Kit & Google Antigravity  
> **Constituição:** [.specify/memory/constitution.md](.specify/memory/constitution.md)  
> **Glossário:** [.specify/memory/glossary.md](.specify/memory/glossary.md)  
> **Guia de Deploy:** [DEPLOY.md](DEPLOY.md)  
> **Arquitetura:** [ARCHITECTURE.md](ARCHITECTURE.md)  

---

## 🎯 Instruções Obrigatórias para Qualquer Agente

Ao atuar neste projeto, você deve operar estritamente como um Engenheiro Sênior de Software e Especialista em UI/UX e Cloud DevOps, seguindo a esteira de **Desenvolvimento Orientado por Especificações (SDD)**.

---

### 1. Fluxo de Trabalho SDD (Obrigatório antes de qualquer alteração de código)

Antes de escrever ou alterar código:
1. **Verifique as especificações existentes:** Consulte `.specify/specs/` para entender o histórico e o estado atual.
2. **Se o usuário solicitar uma nova funcionalidade ou alteração significativa:**
   - **NÃO** comece a codificar imediatamente.
   - Crie a pasta da nova feature em `.specify/specs/<id-da-feature>/`.
   - Redija o `spec.md` usando o modelo [.specify/templates/spec-template.md](.specify/templates/spec-template.md).
   - Se houver dúvidas, ambiguidades ou decisões de design pendentes, execute uma **Sabatina (Clarify / Grill)** fazendo perguntas assertivas ao usuário.
   - Proponha o plano técnico em `plan.md` usando [.specify/templates/plan-template.md](.specify/templates/plan-template.md).
   - Crie a lista atômica de tarefas em `tasks.md` usando [.specify/templates/tasks-template.md](.specify/templates/tasks-template.md).
   - Somente após alinhamento com o usuário, inicie a implementação.

---

### 2. Regras de Design, Identidade & Componentes

1. **Identidade Visual:**
   - A artista é **Valesca Almeida ("Vavá")**, atriz e comediante.
   - A paleta oficial é **TV Studio: Coral & Índigo** configurada em [`src/theme/studioTheme.js`](src/theme/studioTheme.js).
   - O tema padrão é **Modo Escuro (Dark Mode)**, com botão no cabeçalho permitindo alternar para modo claro.
   - Não reintroduzir seletores de paleta soltos ou menus de teste na interface principal, a menos que solicitado formalmente.
2. **Single Source of Truth para Mídias e Textos:**
   - Todo dado (telefones, textos biográficos, links do WhatsApp/Instagram, cenas do Globoplay e caminhos de imagens) reside em [`src/data/portfolioData.js`](src/data/portfolioData.js).
   - Qualquer caminho de arquivo local **deve** usar a função `assetUrl('/assets/...')` de [`src/utils/assetUrl.js`](src/utils/assetUrl.js).
3. **Ícones Animados:**
   - Usar o componente [`AnimatedLordIcon.jsx`](src/components/AnimatedLordIcon.jsx) para exibir ícones Lottie com recolorização dinâmica integrada à paleta ativa.

---

### 3. Regras de Deploy e Infraestrutura

1. **Deploy de Produção (VPS Hostinger):**
   - Servidor: Ubuntu KVM (`179.199.155.156`), pasta `/opt/vava`.
   - O site roda via Docker Compose com o servidor **Caddy**, gerenciando automaticamente certificados SSL HTTPS.
   - Para compilar para o domínio próprio na raiz (`/`), o script no `package.json` é `npm run build:hostinger`.
   - Atualização na VPS é feita pelo script:
     ```bash
     ssh root@179.199.155.156 "cd /opt/vava && ./deploy.sh"
     ```
2. **Deploy de Homologação (GitHub Pages):**
   - O repositório dispara o workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) a cada push na branch `main`.
   - O build para GitHub Pages compila com base `/vava/`.
3. **Segurança de Credenciais:**
   - Nunca expor nem comitar chaves, tokens ou senhas no Git.
   - O `.gitignore` protege explicitamente `.env`, `node_modules` e artefatos de build.
