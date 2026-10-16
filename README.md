# 🎭 Valesca Almeida (Vavá) — Site & Portfólio Oficial

> **Site oficial e central de contratação artística de Valesca Almeida ("Vavá")** — Atriz e Comediante (atualmente no ar como **Olga** na novela musical *"Coração Acelerado"* da **TV Globo / Globoplay**, em ponte aérea contínua entre Goiânia e Rio de Janeiro).

🌐 **Preview Online no GitHub Pages**: [https://douglasdecastroalmeida.github.io/vava/](https://douglasdecastroalmeida.github.io/vava/)

---

## 🌟 Destaques do Projeto

- **Design System Editorial & Cênico**: Criado com **Material UI v6 (MUI)**, utilizando paletas harmônicas inspiradas no *Color Hunt* e *Adobe Color Wheel* (Solar Stage & Terracota, TV Studio Coral & Índigo, Esmeralda & Mel) com alternância fluida de temas Claro/Escuro.
- **Ícones Animados Lordicon**: Integração dinâmica de Lottie JSON com recolorização em tempo real sincronizada com a paleta ativa.
- **Hero & Carrossel Interativo de Retratos**: Apresentação da artista destacando a foto oficial da claquete e retratos editoriais em close-up e plano médio.
- **Destaque TV Globo & Globoplay**: Cards com links diretos e modal de reprodução para as cenas de Olga em *"Coração Acelerado"*, além de vídeos de Stand-Up Comedy e reportagens na imprensa (*Jornal O Popular*).
- **Formatos de Contratação & Trajetória Cênica**: Cards elegantes para Teledramaturgia/Audiovisual, Teatro e Stand-Up/Eventos Corporativos, com background cênico animado e linha do tempo de evolução artística.
- **Ensaio Fotográfico com Lightbox**: Galeria de fotos em alta resolução com filtros por categoria (Ribalta, Comédia, Drama, Retratos, Close-up, Camarim) e visualizador em tela cheia com navegação por teclado e botões.
- **Fluxo Rápido de Contratação & FAQ**: Passo a passo interativo para diretores de elenco, produtores e marcas, acompanhado de sanfona com dúvidas frequentes.
- **Central de Contratação Integrada**: Formulário interativo para TV/Cinema, Teatro, Stand-up, Publicidade e Eventos, gerando mensagem pré-formatada direta para o WhatsApp oficial (+55 62 99275-1516).

---

## 🛠️ Tecnologias Utilizadas

- **React 18**
- **Vite 5** (Build ultrarrápido com suporte a subcaminhos para GitHub Pages e domínio raiz para Hostinger)
- **Material UI v6 (`@mui/material`, `@mui/icons-material`, `@mui/lab`)**
- **Emotion (`@emotion/react`, `@emotion/styled`)**
- **Lordicon (`lord-icon` web component + Lottie engine)**
- **Google Fonts (Outfit & Plus Jakarta Sans)**
- **GitHub Actions (CI/CD com deploy automatizado no GitHub Pages)**

---

## 🚀 Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/DouglasDeCastroAlmeida/vava.git
   cd vava
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse no navegador: `http://localhost:5173/`

4. **Gerar build de produção para GitHub Pages:**
   ```bash
   npm run build
   ```

5. **Gerar build para domínio próprio / Hostinger (raiz `/`):**
   ```bash
   npx cross-env VITE_BASE_URL=/ npm run build
   # ou simplesmente faça o upload dos arquivos da pasta dist/
   ```

---

## 📦 Como Ativar o GitHub Pages no Repositório

1. No repositório GitHub (`https://github.com/DouglasDeCastroAlmeida/vava`), vá em **Settings** > **Pages**.
2. Na seção **Build and deployment** > **Source**, selecione **GitHub Actions**.
3. O workflow configurado em `.github/workflows/deploy.yml` fará o deploy automático a cada push na branch `main`.
4. O site estará disponível em:
   👉 **`https://douglasdecastroalmeida.github.io/vava/`**

---

## 👩‍🎨 Ficha Artística
- **Artista**: Valesca Almeida (Vavá)
- **Instagram**: [@valesca_almeida](https://www.instagram.com/valesca_almeida)
- **Linktree**: [linktr.ee/valesca_almeida](https://linktr.ee/valesca_almeida)
- **WhatsApp**: [+55 (62) 99275-1516](https://wa.me/5562992751516)
