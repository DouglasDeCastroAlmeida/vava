# 📐 Plano Técnico da Funcionalidade: [Nome da Feature]
> **Referência:** `[spec.md correspondente]`  
> **Status:** `[DRAFT | APPROVED | IN PROGRESS | COMPLETED]`  
> **Responsável:** `[Nome ou Agente]`  

---

## 1. Abordagem Arquitetural
*Explique a estratégia técnica adotada, componentes afetados e como a solução se integra à arquitetura geral descrita em ARCHITECTURE.md.*

---

## 2. Componentes e Arquivos Impactados

| Arquivo | Ação | Descrição da Modificação |
| :--- | :--- | :--- |
| `src/components/[Componente].jsx` | `[Criar / Modificar]` | Explicação concisa da alteração |
| `src/data/portfolioData.js` | `[Modificar]` | Atualização do catálogo de dados |
| `src/theme/studioTheme.js` | `[Inalterado / Ajustar]` | Verificação de tokens cromáticos |

---

## 3. Modelo de Dados / Contrato de Mídia
*Se houver inclusão de novos campos ou dados:*
```javascript
// Exemplo de estrutura em portfolioData.js
export const NOVO_REGISTRO = {
  id: 'id-unico',
  title: 'Título descritivo',
  mediaUrl: assetUrl('/assets/...'),
};
```

---

## 4. Estratégia de Verificação e Testes
- [ ] Teste de renderização local no navegador (`http://localhost:5173/`).
- [ ] Teste de alternância entre Dark Mode e Light Mode.
- [ ] Verificação em viewport mobile (375px) e desktop (1440px).
- [ ] Execução bem-sucedida do build de produção: `npm run build` e `npm run build:hostinger`.
- [ ] Deploy na VPS via `ssh root@179.199.155.156 "cd /opt/vava && ./deploy.sh"`.
- [ ] Verificação em produção: `curl -ILs https://valescaalmeida.com`.
