# 📜 Constituição do Projeto — Valesca Almeida (Vavá)
> **Repositório:** `DouglasDeCastroAlmeida/vava`  
> **Metodologia:** Spec-Driven Development (SDD) via GitHub Spec-Kit & Google Antigravity (ADK)  
> **Versão:** 2.0.0 (Portfólio Oficial & Central de Contratação Artística)

---

## 1. Princípios Fundamentais (Invioláveis)

### 1.1. Especificação Precede Código (Spec-First)
* **Nenhuma alteração ou nova funcionalidade de produção deve ser implementada sem uma especificação formal.**
* Todo novo trabalho deve conter:
  1. `spec.md` (o quê e por quê: personas, histórias de usuário, requisitos funcionais e critérios de aceite).
  2. `plan.md` (como: arquitetura técnica, componentes afetados, impacto visual e contratos).
  3. `tasks.md` (lista atômica de passos acionáveis e verificáveis).
* Se a solicitação do usuário tiver requisitos vagos ou conflitantes, o agente/desenvolvedor **deve** realizar a etapa de **Sabatina (Clarify / Grill)** antes de iniciar o plano.

### 1.2. Fidelidade Artística e Identidade Pessoal
* O portal representa a imagem profissional pública de uma **atriz e comediante** (*Valesca Almeida* / *Vavá*).
* Imagens, vídeos e textos devem destacar exclusivamente a artista (sem atores genéricos ou desconhecidos no centro de suas seções).
* A paleta de cores deve preservar a identidade editorial e artística aprovada (**TV Studio: Coral & Índigo**), com suporte impecável aos modos **Dark Mode (padrão)** e **Light Mode**.
* Textos e CTAs devem priorizar a facilidade de contratação por diretores de elenco, produtoras e marcas.

### 1.3. Single Source of Truth para Mídias e Contatos
* Textos, telefones, links do WhatsApp, Instagram, cenas do Globoplay e caminhos de fotos residem estritamente em [`src/data/portfolioData.js`](file:///c:/Users/Douglas/Documents/vava/src/data/portfolioData.js).
* É terminantemente proibido espalhar números de telefone ou URLs estáticas hardcoded diretamente dentro do JSX dos componentes.
* Todos os caminhos de arquivos estáticos devem ser encapsulados por `assetUrl()` para garantir compatibilidade simultânea entre o domínio raiz de produção (`/` na VPS) e subcaminhos de teste (`/vava/` no GitHub Pages).

### 1.4. Performance e Eficiência de Mídias
* Vídeos em background devem ser leves (menos de 500 KB), sem trilha de áudio e acompanhados de imagem de poster em alta resolução para conexões móveis.
* Imagens devem ser comprimidas em resolução web otimizada com caching estático longo de 6 meses (`Cache-Control: public, max-age=15552000, immutable`).

### 1.5. Segurança de Infraestrutura e Imutabilidade do Git
* Segredos, senhas e tokens residem exclusivamente no `.env` (ignorado pelo Git).
* O repositório oficial na branch `main` deve estar sempre em estado estável e compilável via `npm run build` e `npm run build:hostinger`.
* O deploy na VPS é realizado via contêiner Docker oficial com servidor Caddy e volumes persistentes para certificados SSL (`vava_caddy_data`).

---

## 2. Ciclo de Vida de Features (SDD Lifecycle)

Todo desenvolvimento no projeto segue rigorosamente o ciclo de 6 etapas:

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ 1. SPECIFY  │ ──► │ 2. CLARIFY  │ ──► │  3. PLAN    │ ──► │  4. TASKS   │ ──► │ 5. IMPLEMENT│ ──► │  6. VERIFY  │
│  (spec.md)  │     │   (Grill)   │     │  (plan.md)  │     │ (tasks.md)  │     │   (Code)    │     │ (Build/Live)│
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

1. **Specify:** Criação de `.specify/specs/<feature-name>/spec.md` baseado no `spec-template.md`.
2. **Clarify (Sabatina):** Perguntas assertivas para alinhar expectativas com o usuário e a artista.
3. **Plan:** Criação de `plan.md` mapeando componentes MUI, fontes de dados e rotas.
4. **Tasks:** Divisão em tarefas pequenas e ordenadas (`tasks.md`).
5. **Implement:** Desenvolvimento em branch de feature (ex: `feature/<nome>` ou `ajustes/<nome>`).
6. **Verify:** Teste local no navegador (`http://localhost:5173/`), validação do build (`npm run build`) e teste em produção na VPS (`https://valescaalmeida.com`).
