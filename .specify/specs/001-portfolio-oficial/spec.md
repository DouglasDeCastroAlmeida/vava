# 📝 Especificação da Funcionalidade: Portfólio Oficial & Central de Contratação
> **Identificador:** `001-portfolio-oficial`  
> **Status:** `COMPLETED`  
> **Autor(a):** Antigravity & Douglas Almeida  
> **Data:** 2026-10-17  
> **Domínio:** [https://valescaalmeida.com](https://valescaalmeida.com)  

---

## 1. Visão Geral & Contexto
Criação do site oficial responsivo da atriz e comediante Valesca Almeida ("Vavá"), destacando sua atuação como Olga na novela *Coração Acelerado* (TV Globo / Globoplay), seus shows de Stand-Up Comedy, ensaio fotográfico de estúdio e canal direto de contratação artística para produções e eventos.

---

## 2. Histórias de Usuário (User Stories)

### US-01: Produtor de Elenco buscando material artístico
* **Como:** Produtor / Diretor de Elenco de TV, cinema ou teatro
* **Quero:** Assistir diretamente às cenas de teledramaturgia da Valesca no Globoplay e visualizar seu ensaio fotográfico em alta resolução
* **Para que:** Possa avaliar sua presença cênica, expressões e adequação para novos papéis e testes.

### US-02: Contratante de Eventos / Stand-Up Comedy
* **Como:** Produtor de eventos ou comedy club
* **Quero:** Entender os formatos de apresentação cômica e conferir seu show ao vivo
* **Para que:** Possa fechar contratação de shows solo, pocket shows ou mestre de cerimônias (MC).

### US-03: Contato Direto via WhatsApp
* **Como:** Contratante interessado
* **Quero:** Preencher um formulário simples que formate uma mensagem clara e abra direto no WhatsApp oficial
* **Para que:** Possa iniciar negociação de cachê e agenda sem fricção.

---

## 3. Requisitos Funcionais (FR)
- [x] **FR-01:** Exibição da apresentação principal com foto de perfil oficial com claquete e carrossel de retratos cênicos.
- [x] **FR-02:** Seção TV & Vídeos com 4 cenas de destaque no Globoplay (*Coração Acelerado*) com modal de visualização e links diretos.
- [x] **FR-03:** Seção de Trajetória com pilares de atuação (TV, Teatro, Stand-Up) e vídeo de fundo em loop exclusivo de Valesca no palco do Guardians Comedy Club.
- [x] **FR-04:** Central de Contratação com formulário interativo de briefing gerando mensagem direta para o WhatsApp oficial (+55 62 99275-1516).
- [x] **FR-05:** Seletor de modo Claro / Escuro (iniciando em Modo Escuro por padrão).
- [x] **FR-06:** Paleta visual fixa *TV Studio: Coral & Índigo*, baseada em harmonia tríade da Adobe Color.

---

## 4. Requisitos Não-Funcionais (NFR)
- [x] **NFR-01 (Design):** Estilização com Material UI v6, tipografia Outfit e Plus Jakarta Sans.
- [x] **NFR-02 (Ícones):** Ícones animados Lordicon recoloridos dinamicamente de acordo com o tema.
- [x] **NFR-03 (Performance):** Vídeo de background comprimido em 276 KB e imagens cacheadas por 6 meses.
- [x] **NFR-04 (Deploy Híbrido):** Produção na VPS Hostinger (`valescaalmeida.com`) e homologação no GitHub Pages (`/vava/`).
