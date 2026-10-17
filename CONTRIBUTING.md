# 🤝 Guia de Contribuição & Governança (CONTRIBUTING.md)
> **Projeto:** Portal Artístico Oficial — Valesca Almeida (Vavá)  
> **Repositório:** `DouglasDeCastroAlmeida/vava`  
> **Metodologia:** Spec-Driven Development (SDD) via GitHub Spec-Kit & Google Antigravity  

---

## 1. Modelo de Ramificação (Git Flow Ágil)

O projeto adota segregação clara entre o ambiente de produção e o fluxo de desenvolvimento:

```text
       (Hotfix / Ajuste Urgente)
       +-------------------------+
       |                         |
       v                         |
[ main ] <==== (Release PR) ==== [ develop ] <==== (Feature PR) ==== [ feature/nome-da-feature ]
(Produção:                       (Integração / Staging)              (Branch de Trabalho)
valescaalmeida.com)
```

### Branches Oficiais:
* **`main` (Produção):**
  * Contém exclusivamente o código estável que está em produção em [https://valescaalmeida.com](https://valescaalmeida.com).
  * Qualquer alteração na `main` dispara o deploy automático no GitHub Pages e é a base para o deploy da VPS via `./deploy.sh`.
* **`develop` (Integração & Homologação):**
  * Branch central para testes de novas funcionalidades antes do release oficial.
* **`feature/<nome>` ou `ajustes/<nome>`:**
  * Ramificações de trabalho criadas a partir de `develop` (ou `main` para melhorias diretas alinhadas com o usuário).

---

## 2. Padrão de Commits Semânticos (Conventional Commits)

Todas as mensagens de commit devem seguir o formato padronizado:

* `feat: ...` — Nova funcionalidade ou componente (ex: `feat: adicionar seção de agenda de shows`).
* `fix: ...` — Correção de bug visual ou lógico (ex: `fix: ajustar contraste do texto no light mode`).
* `docs: ...` — Alterações em documentação ou especificações (ex: `docs(sdd): adicionar spec da nova feature`).
* `chore: ...` — Tarefas de manutenção, dependências ou configs (ex: `chore: atualizar dependências do vite`).
* `style: ...` — Ajustes puramente estéticos sem alteração lógica (ex: `style: harmonizar margens do carrossel`).

---

## 3. Checklist Obrigatório Antes de Mesclar na `main`

Antes de mesclar qualquer branch para a `main` e enviar para a VPS:

- [ ] **Especificação Completa:** A feature possui `spec.md`, `plan.md` e `tasks.md` em `.specify/specs/`.
- [ ] **Sem Quebra de Layout:** Testado em resolução mobile (375px) e desktop (1440px).
- [ ] **Dark & Light Mode:** Cores legíveis com bom contraste em ambos os modos.
- [ ] **URLs Dinâmicas:** Todas as referências a `/assets/` utilizam `assetUrl()`.
- [ ] **Build Aprovado:** `npm run build` e `npm run build:hostinger` compilam com zero erros.
- [ ] **Segurança:** Nenhum arquivo `.env` ou dado sensível foi incluído no commit.
