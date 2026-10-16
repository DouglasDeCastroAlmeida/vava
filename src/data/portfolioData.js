import { assetUrl } from '../utils/assetUrl';

export const ARTIST_INFO = {
  name: 'Valesca Almeida',
  stageName: 'Vavá',
  username: '@valesca_almeida',
  headline: 'Atriz & Comediante | TV, Teatro, Stand-Up & Eventos | GYN/RJ',
  shortBio:
    'Atriz dramática e comediante stand-up com presença magnética de palco e naturalidade diante das câmeras. Transita com precisão entre a intensidade da dramaturgia, o humor ao vivo e a comunicação com grandes públicos em produções de TV, cinema, teatro, publicidade e eventos corporativos.',
  locations: ['Goiânia (GYN)', 'Rio de Janeiro (RJ)'],
  profileImage: assetUrl('/assets/profile/valesca-profile.jpg'),
  featuredRole: {
    character: 'Olga',
    work: 'Coração Acelerado',
    network: 'TV Globo / Globoplay',
    year: '2025–2026',
    summary:
      'Na trama musical da TV Globo, Valesca Almeida dá vida à intensa e temperamental Olga, chefe da lanchonete onde a protagonista Eduarda trabalha enquanto sonha com o estrelato feminejo — protagonizando cenas que unem humor ácido, tensão cotidiana e forte presença cênica.',
  },
  contact: {
    whatsappNumber: '5562992751516',
    whatsappDisplay: '+55 (62) 99275-1516',
    whatsappUrl: 'https://wa.me/5562992751516',
    instagram: 'https://www.instagram.com/valesca_almeida',
    instagramHandle: '@valesca_almeida',
    threads: 'https://www.threads.com/@valesca_almeida',
    facebook: 'https://www.facebook.com/valesca.almeida',
    spotify: 'https://open.spotify.com/user/12168932916?si=339dd652599f44bf',
    linktree: 'https://linktr.ee/valesca_almeida',
  },
  stats: [
    { value: 'TV & Cinema', label: 'Dramaturgia & Audiovisual', detail: 'Ficção, Séries e Publicidade' },
    { value: 'Stand-Up', label: 'Shows de Humor & Eventos', detail: 'Palco, MC e Corporativo' },
    { value: 'Teatro & Palco', label: 'Dramaturgia & Elenco', detail: 'Espetáculos e Festivais' },
    { value: 'GYN ⇄ RJ', label: 'Ponte Aérea Ativa', detail: 'Disponibilidade Nacional' },
  ],
};

export const GLOBOPLAY_SCENES = [
  {
    id: 'globoplay-01',
    number: 'Cena 01',
    title: 'Eduarda frita hambúrguer na lanchonete enquanto canta e sonha com o estrelato feminejo',
    description:
      'Eduarda se imagina cantando para multidões, queima os hambúrgueres e leva uma bronca impagável da chefe Olga. Na sequência, Olga tenta dar uma vassourada em um vira-lata na despensa e Eduarda a impede.',
    url: 'https://globoplay.globo.com/v/14258857/?s=0s',
    thumbnail: '/assets/profile/thumb-globoplay-01-14258857.jpg',
    tag: 'TV Globo • Globoplay',
    highlight: 'Apresentação de Olga',
  },
  {
    id: 'globoplay-02',
    number: 'Cena 02',
    title: 'Eduarda limpa a lanchonete, é explorada e maltratada por Olga',
    description:
      'Cena de forte dinâmica cênica e contraponto dramático e cômico entre Olga e Eduarda no cotidiano puxado da lanchonete.',
    url: 'https://globoplay.globo.com/v/14262327',
    thumbnail: '/assets/profile/thumb-globoplay-02-14262327.jpg',
    tag: 'TV Globo • Globoplay',
    highlight: 'Ritmo & Contraponto',
  },
  {
    id: 'globoplay-03',
    number: 'Cena 03',
    title: 'Na lanchonete, Eduarda pensa nas eliminatórias sob o olhar de Olga',
    description:
      'O contraste entre o sonho artístico da música e a rotina exigente comandada por Olga no balcão da lanchonete.',
    url: 'https://globoplay.globo.com/v/14264698',
    thumbnail: '/assets/profile/thumb-globoplay-03-14264698.jpg',
    tag: 'TV Globo • Globoplay',
    highlight: 'Cotidiano da Trama',
  },
  {
    id: 'globoplay-04',
    number: 'Cena 04',
    title: 'Olga flagra bagunça na lanchonete e dá esporro em Eduarda',
    description:
      'Destaque em close-up para a expressividade e domínio vocal de Valesca Almeida como Olga ao flagrar a confusão na lanchonete.',
    url: 'https://globoplay.globo.com/v/14268813',
    thumbnail: '/assets/profile/thumb-globoplay-04-14268813.jpg',
    tag: 'TV Globo • Globoplay',
    highlight: 'Close-up & Explosão Cênica',
  },
].map((scene) => ({ ...scene, thumbnail: assetUrl(scene.thumbnail) }));

export const STANDUP_AND_MEDIA = [
  {
    id: 'standup-riso-night-2024',
    category: 'Stand-Up Comedy',
    year: '2024',
    title: 'Riso Night! Stand-up Comedy por Valesca Almeida',
    subtitle: 'Guardians Comedy Club — Apresentação Ao Vivo',
    description:
      'Performance solo de stand-up comedy no palco do Guardians Comedy Club, evidenciando presença de palco, improviso com a plateia e timing de comédia.',
    thumbnail: '/assets/profile/thumb-riso-night-2024.jpg',
    externalUrl: 'https://drive.google.com/file/d/1-LRlYPSnsW7P0lvGsLUoDLe5mOHY8RcK/view?usp=drive_link',
    embedUrl: 'https://drive.google.com/file/d/1-LRlYPSnsW7P0lvGsLUoDLe5mOHY8RcK/preview',
    badge: 'Show Ao Vivo',
  },
  {
    id: 'standup-2024-solo',
    category: 'Stand-Up Comedy',
    year: '2024',
    title: 'StandUp Comedy 2024 — Especial Valesca Almeida',
    subtitle: 'Repertório Autoral & Observacional',
    description:
      'Registro em vídeo de apresentação de humor autoral de Valesca Almeida na temporada 2024.',
    thumbnail: '/assets/profile/thumb-standup-2024-show.jpg',
    externalUrl: 'https://drive.google.com/drive/u/0/folders/1pR0VjHRZ91KI01laV3mxF5ty9t_QKy_X',
    embedUrl: 'https://drive.google.com/file/d/1jz-7QnYjHzT_Af8oEbK41D5mmRb0eG9L/preview',
    badge: 'Temporada 2024',
  },
  {
    id: 'standup-ta-grave-2023-02',
    category: 'Stand-Up Comedy',
    year: '2023',
    title: 'TÁ GRAVE! — Show de Humor (No Palco)',
    subtitle: 'Guardians Comedy Club • Comédia Feminina',
    description:
      'Show de humor "Tá Grave!", projeto que marcou a cena de comédia goiana unindo observação afiada, carisma e casa cheia.',
    thumbnail: '/assets/profile/thumb-standup-2023-ta-grave-02.jpg',
    externalUrl: 'https://drive.google.com/drive/u/0/folders/1ckdZy7SQuniW4x_FZdItcHWyXXz_HVoR',
    embedUrl: 'https://drive.google.com/file/d/1OJgCM8E1FVRTtAXokOfUQh3UBliWhcsk/preview',
    badge: 'Show "Tá Grave!"',
  },
  {
    id: 'standup-ta-grave-2023-01',
    category: 'Stand-Up Comedy',
    year: '2023',
    title: 'TÁ GRAVE! — Teaser & Bastidores do Show',
    subtitle: 'Com Valesca Almeida & Monyke Procópio',
    description:
      'Registro audiovisual e chamada oficial do espetáculo de stand-up comedy "Tá Grave!" (Junho/2023).',
    thumbnail: '/assets/profile/thumb-standup-2023-ta-grave-01.jpg',
    externalUrl: 'https://drive.google.com/file/d/1V8BJAbzKilf1ZcgkbYO4pWczNERy3sNT/view',
    embedUrl: 'https://drive.google.com/file/d/1V8BJAbzKilf1ZcgkbYO4pWczNERy3sNT/preview',
    badge: 'Acervo 2023',
  },
  {
    id: 'videoclipe-ate-la-melina',
    category: 'Videoclipe',
    year: 'Audiovisual',
    title: 'Videoclipe Oficial: "ATÉ LÁ" — Melina',
    subtitle: 'Atuação em Narrativa Musical (YouTube)',
    description:
      'Participação como atriz no videoclipe oficial "Até Lá", da cantora Melina, demonstrando delicadeza, fotogenia cinematográfica e expressão silenciosa para câmera.',
    thumbnail: '/assets/profile/thumb-clipe-ate-la-melina.jpg',
    externalUrl: 'https://youtu.be/bgCgCyWHUts?si=Jh4OMVW27bwQ6JLb',
    embedUrl: 'https://www.youtube.com/embed/bgCgCyWHUts',
    badge: 'YouTube Oficial',
  },
  {
    id: 'workshop-globo-2025',
    category: 'Workshops & TV',
    year: 'Fev 2025',
    title: 'TV Globo — Oficina de Experimentação Cênica',
    subtitle: '19 a 21 de Fevereiro de 2025 • Rio de Janeiro',
    description:
      'Imersão artística e laboratório prático de experimentação cênica nos Estúdios Globo, aprofundando técnicas de interpretação para teledramaturgia.',
    thumbnail: '/assets/profile/thumb-globo-experimentacao-cenica.jpg',
    externalUrl: 'https://photos.app.goo.gl/NVogF1NGxqQbjh9i8',
    embedUrl: null,
    badge: 'Estúdios Globo 📸',
  },
  {
    id: 'imprensa-o-popular',
    category: 'Destaque na Mídia',
    year: 'Imprensa',
    title: 'Jornal O Popular: O Protagonismo no Stand-up Feminino',
    subtitle: 'Caderno Magazine — Reportagem Especial',
    description:
      '"Stand-up feminino: mulheres empreendem com criatividade e buscam mais espaço em mercado majoritariamente masculino" — matéria destacando a atuação de Valesca Almeida.',
    thumbnail: '/assets/theater/standup-microphone.jpg',
    externalUrl:
      'https://opopular.com.br/magazine/stand-up-feminino-mulheres-empreendem-com-criatividade-e-buscam-mais-espaco-em-mercado-majoritariamente-masculino-1.3273448',
    embedUrl: null,
    badge: 'Matéria O Popular',
  },
].map((item) => ({ ...item, thumbnail: assetUrl(item.thumbnail) }));

// Formatos de Contratação & Entrega Artística (Sem repetir a lista de vídeos acima)
export const THEATER_PILLARS = [
  {
    id: 'pillar-tv-cinema',
    title: 'Teledramaturgia, Cinema & Publicidade',
    subtitle: 'A precisão da Claquete e da Lente',
    description:
      'Interpretação naturalista para TV aberta, séries de streaming, cinema e campanhas publicitárias. Facilidade com diferentes registros de prosódia (sotaque goiano autêntico ou neutro padrão) e entrega ágil de self-tapes.',
    image: '/assets/theater/cinema-clapperboard.jpg',
    badge: 'Casting & Câmera',
    deliverables: [
      'Personagens de Ficção (Drama e Comédia)',
      'Comerciais de TV e Filmes Publicitários',
      'Envio Imediato de Self-Tape para Produtores',
    ],
  },
  {
    id: 'pillar-teatro-palco',
    title: 'Teatro: As Máscaras do Riso e do Drama',
    subtitle: 'Potência Vocal e Corpo Cênico',
    description:
      'Construção visceral de palco onde a densidade dramática e a comédia popular se encontram. Presença física marcante, escuta apurada de elenco e domínio do espaço cênico em espetáculos e mostras.',
    image: '/assets/theater/theater-masks-stage.jpg',
    badge: 'Artes Cênicas',
    deliverables: [
      'Temporadas Teatrais e Mostras Culturais',
      'Dramaturgia Contemporânea e Comédia Teatral',
      'Leituras Dramáticas e Oficinas Cênicas',
    ],
  },
  {
    id: 'pillar-standup',
    title: 'Stand-Up Comedy & Eventos Corporativos',
    subtitle: 'O Microfone, o Improviso e o Público',
    description:
      'Apresentações de humor inteligentes e carismáticas sob medida para teatros, comedy clubs, convenções de empresas e eventos de marca, além de atuação como Mestre de Cerimônias (MC).',
    image: '/assets/theater/standup-microphone.jpg',
    badge: 'Shows & Eventos',
    deliverables: [
      'Show Solo ou Pocket Show Corporativo',
      'Mestre de Cerimônias (MC) com Leveza e Ritmo',
      'Talks e Intervenções Artísticas Personalizadas',
    ],
  },
].map((pillar) => ({ ...pillar, image: assetUrl(pillar.image) }));

// Evolução Artística em 4 Etapas (Sem repetir links/textos dos vídeos)
export const CAREER_STEPS = [
  {
    step: '01',
    phase: 'Formação & Palco',
    title: 'Raízes nas Artes Cênicas',
    description:
      'Início nos palcos de teatro em Goiânia, desenvolvendo base sólida de expressão corporal, projeção vocal e construção de personagens densos e populares.',
  },
  {
    step: '02',
    phase: 'Voz Autoral',
    title: 'Consolidação no Stand-Up Comedy',
    description:
      'Domínio do texto autoral e do tempo cômico nos comedy clubs, abrindo espaço para o protagonismo feminino no humor e na comunicação direta com a plateia.',
  },
  {
    step: '03',
    phase: 'Expansão Nacional',
    title: 'Ponte Aérea Goiânia ⇄ Rio de Janeiro',
    description:
      'Transição estratégica para o mercado audiovisual nacional, unindo a potência cultural do Centro-Oeste aos sets de gravação e laboratórios no Rio de Janeiro.',
  },
  {
    step: '04',
    phase: 'Momento Atual',
    title: 'Teledramaturgia & Novos Projetos',
    description:
      'Atuação na TV aberta e disponibilidade integral para novos desafios em novelas, séries, cinema, campanhas publicitárias e turnês de espetáculos.',
  },
];

export const ENSAIO_PHOTOS = [
  {
    id: 'photo-849',
    title: 'Espírito da Ribalta — Riso em Luz Cênica',
    localPath: '/assets/ensaio/cdgleonardo-849.jpg',
    orientation: 'portrait',
    framing: 'Plano Médio',
    outfit: 'Vestido estampado & boá de plumas pretas',
    mood: 'Teatral / Showwoman / Comédia',
    series: 'Série Ribalta & Teatro',
    categories: ['teatro', 'comedia', 'retrato'],
    description:
      'Sob o foco circular do canhão seguidor em fundo negro, Valesca envolve-se no boá de plumas pretas com uma gargalhada magnética digna de teatro musical e cabaré.',
  },
  {
    id: 'photo-225',
    title: 'Olhar em Primeiro Plano — Intensidade Dramática',
    localPath: '/assets/ensaio/cdgleonardo-225.jpg',
    orientation: 'landscape',
    framing: 'Close-up Horizontal',
    outfit: 'Regata azul-marinho minimalista',
    mood: 'Dramático / Intenso / Cinema',
    series: 'Série Casting & Drama',
    categories: ['drama', 'retrato'],
    description:
      'Close-up horizontal de cinema com olhar profundo, vulnerável e magnético direto para a lente.',
  },
  {
    id: 'photo-754',
    title: 'No Foco do Refletor — Mistério Cênico',
    localPath: '/assets/ensaio/cdgleonardo-754.jpg',
    orientation: 'portrait',
    framing: 'Plano Médio',
    outfit: 'Vestido estampado gráfico sob foco de luz',
    mood: 'Teatral / Dramático',
    series: 'Série Ribalta & Teatro',
    categories: ['teatro', 'drama', 'retrato'],
    description:
      'Iluminação dramática estilo canhão de teatro recortando a silhueta contra a escuridão do palco.',
  },
  {
    id: 'photo-354',
    title: 'Retrato Editorial — Presença & Sobriedade',
    localPath: '/assets/ensaio/cdgleonardo-354.jpg',
    orientation: 'portrait',
    framing: 'Close-up / Meio Busto',
    outfit: 'Camisa verde-militar',
    mood: 'Dramático / Contemplativo / Casting',
    series: 'Série Casting & Drama',
    categories: ['drama', 'retrato'],
    description:
      'Retrato clássico para book de elenco (TV e Cinema), evidenciando traços fortes, serenidade e força no olhar.',
  },
  {
    id: 'photo-944',
    title: 'Ritual de Camarim — Antes do Terceiro Sinal',
    localPath: '/assets/ensaio/cdgleonardo-944.jpg',
    orientation: 'portrait',
    framing: 'Plano Médio no Espelho',
    outfit: 'Regata preta em camarim iluminado',
    mood: 'Camarim / Bastidores',
    series: 'Série Camarim & Bastidores',
    categories: ['camarim', 'teatro', 'retrato'],
    description:
      'Cena clássica de camarim diante do espelho contornado por lâmpadas quentes no momento de concentração antes de entrar em cena.',
  },
  {
    id: 'photo-405',
    title: 'Humor em Movimento — Expressão Corporal',
    localPath: '/assets/ensaio/cdgleonardo-405.jpg',
    orientation: 'portrait',
    framing: 'Corpo Inteiro',
    outfit: 'Blusa branca, saia midi azul-royal & brincos vermelhos',
    mood: 'Comédia / Expressiva / Vibrante',
    series: 'Série Estúdio Azul-Royal',
    categories: ['comedia', 'corpo-inteiro'],
    description:
      'Corpo inteiro transbordando carisma e humor físico, combinando leveza e espontaneidade.',
  },
  {
    id: 'photo-835',
    title: 'Chiaroscuro Teatral — Entre Plumas e Sombra',
    localPath: '/assets/ensaio/cdgleonardo-835.jpg',
    orientation: 'portrait',
    framing: 'Close-up Dramático',
    outfit: 'Boá de plumas pretas',
    mood: 'Dramático / Teatral',
    series: 'Série Ribalta & Teatro',
    categories: ['teatro', 'drama', 'retrato'],
    description:
      'Close-up de alto contraste em fundo negro, rosto emoldurado por plumas pretas sob luz direta de palco.',
  },
  {
    id: 'photo-243',
    title: 'Gargalhada Solar — Energia Pura',
    localPath: '/assets/ensaio/cdgleonardo-243.jpg',
    orientation: 'portrait',
    framing: 'Close-up',
    outfit: 'Regata azul-marinho (tatuagem SURVIVOR)',
    mood: 'Alegria Contagiante / Comédia',
    series: 'Série Casting & Drama',
    categories: ['comedia', 'retrato'],
    description:
      'Gargalhada espontânea de olhos fechados apoiando o queixo sobre as mãos, destacando sua autenticidade e carisma.',
  },
  {
    id: 'photo-957',
    title: 'Camarim Cômico — O Toque Final',
    localPath: '/assets/ensaio/cdgleonardo-957.jpg',
    orientation: 'portrait',
    framing: 'Close-up no Camarim',
    outfit: 'Regata preta & espelho de camarim',
    mood: 'Comédia / Camarim',
    series: 'Série Camarim & Bastidores',
    categories: ['camarim', 'comedia'],
    description:
      'No espelho iluminado do camarim, Valesca brinca com a câmera fazendo expressão cômica enquanto aplica batom.',
  },
  {
    id: 'photo-869',
    title: 'Gesto Dramático — Profundidade de Palco',
    localPath: '/assets/ensaio/cdgleonardo-869.jpg',
    orientation: 'portrait',
    framing: 'Close-up Cênico',
    outfit: 'Boá de plumas pretas & vestido estampado',
    mood: 'Dramático / Expressivo',
    series: 'Série Ribalta & Teatro',
    categories: ['teatro', 'drama'],
    description:
      'Composição em chiaroscuro com a mão estendida em direção à lente, criando tensão e tridimensionalidade cênica.',
  },
  {
    id: 'photo-132',
    title: 'Sorriso Aberto — Naturalidade em Estúdio',
    localPath: '/assets/ensaio/cdgleonardo-132.jpg',
    orientation: 'landscape',
    framing: 'Plano Médio Horizontal',
    outfit: 'Regata azul-marinho',
    mood: 'Comédia / Simpatia',
    series: 'Série Casting & Drama',
    categories: ['comedia', 'retrato'],
    description:
      'Plano médio horizontal em fundo branco infinito, sorriso luminoso e expressão acolhedora.',
  },
  {
    id: 'photo-178',
    title: 'Casual Casting — Corpo Inteiro',
    localPath: '/assets/ensaio/cdgleonardo-178.jpg',
    orientation: 'portrait',
    framing: 'Corpo Inteiro',
    outfit: 'Regata azul-marinho, jeans claro & camisa verde-oliva',
    mood: 'Descontraído / Confiante',
    series: 'Série Casting & Drama',
    categories: ['corpo-inteiro', 'comedia'],
    description:
      'Registro de corpo inteiro descalça em estúdio, segurando camisa verde-militar sobre o ombro com postura leve.',
  },
  {
    id: 'photo-595',
    title: 'Serenidade & Foco — Book de Atriz',
    localPath: '/assets/ensaio/cdgleonardo-595.jpg',
    orientation: 'portrait',
    framing: 'Plano Médio / Close-up',
    outfit: 'Blusa branca & brincos vermelhos',
    mood: 'Confiante / Sereno',
    series: 'Série Estúdio Azul-Royal',
    categories: ['drama', 'retrato'],
    description:
      'Retrato elegante apoiando o queixo na mão sobre o cilindro cênico branco, olhar seguro para teledramaturgia e cinema.',
  },
  {
    id: 'photo-873',
    title: 'Ironia Fina — Comédia de Salão',
    localPath: '/assets/ensaio/cdgleonardo-873.jpg',
    orientation: 'portrait',
    framing: 'Close-up',
    outfit: 'Boá de plumas pretas sob foco de luz',
    mood: 'Teatral / Irônico / Carismático',
    series: 'Série Ribalta & Teatro',
    categories: ['teatro', 'comedia', 'retrato'],
    description:
      'Iluminada por feixe dramático, Valesca sorri com malícia cênica e domínio expressivo.',
  },
  {
    id: 'photo-481',
    title: 'Riso no Veludo — Espontaneidade',
    localPath: '/assets/ensaio/cdgleonardo-481.jpg',
    orientation: 'portrait',
    framing: 'Plano Médio',
    outfit: 'Blusa branca sobre poltrona de veludo azul',
    mood: 'Comédia / Gargalhada',
    series: 'Série Estúdio Azul-Royal',
    categories: ['comedia', 'retrato'],
    description:
      'Gargalhada contagiante apoiada sobre poltrona de veludo azul-marinho.',
  },
  {
    id: 'photo-671',
    title: 'Postura Neutra — Ficha Técnica Corpo Inteiro',
    localPath: '/assets/ensaio/cdgleonardo-671.jpg',
    orientation: 'portrait',
    framing: 'Corpo Inteiro',
    outfit: 'Blusa branca & saia midi azul-royal',
    mood: 'Casting / Neutro / Drama',
    series: 'Série Estúdio Azul-Royal',
    categories: ['drama', 'corpo-inteiro'],
    description:
      'Plano aberto de corpo inteiro com expressão neutra para avaliação de perfil físico por produtores de elenco.',
  },
  {
    id: 'photo-882',
    title: 'Dama do Palco — Elegância na Ribalta',
    localPath: '/assets/ensaio/cdgleonardo-882.jpg',
    orientation: 'portrait',
    framing: 'Plano Médio',
    outfit: 'Vestido estampado & boá de plumas',
    mood: 'Teatral / Elegante',
    series: 'Série Ribalta & Teatro',
    categories: ['teatro', 'retrato'],
    description:
      'Plano médio sob canhão de luz em fundo preto; sorriso confiante e gestual teatral.',
  },
  {
    id: 'photo-548',
    title: 'Composição Horizontal — Cubo Cênico',
    localPath: '/assets/ensaio/cdgleonardo-548.jpg',
    orientation: 'landscape',
    framing: 'Corpo Inteiro Sentada',
    outfit: 'Blusa branca & saia azul-royal',
    mood: 'Leve / Artístico',
    series: 'Série Estúdio Azul-Royal',
    categories: ['corpo-inteiro', 'retrato'],
    description:
      'Composição horizontal em estúdio branco ao lado do cilindro cênico.',
  },
  {
    id: 'photo-918',
    title: 'Silhueta & Costas — Poética Visual',
    localPath: '/assets/ensaio/cdgleonardo-918.jpg',
    orientation: 'portrait',
    framing: 'Plano Médio (Costas/Perfil)',
    outfit: 'Vestido estampado em fundo negro',
    mood: 'Artístico / Conceitual',
    series: 'Série Ribalta & Teatro',
    categories: ['teatro', 'drama'],
    description:
      'Ângulo conceitual de costas e perfil em fundo negro, mãos nos cabelos e iluminação suave.',
  },
  {
    id: 'photo-555',
    title: 'Olhar Luminoso — Close-up',
    localPath: '/assets/ensaio/cdgleonardo-555.jpg',
    orientation: 'portrait',
    framing: 'Close-up',
    outfit: 'Blusa branca & brincos vermelhos',
    mood: 'Carismático / Doce',
    series: 'Série Estúdio Azul-Royal',
    categories: ['retrato', 'comedia'],
    description:
      'Close-up com o rosto apoiado nas mãos sobre o cubo branco e olhar expressivo.',
  },
  {
    id: 'photo-643',
    title: 'Bastidores do Estúdio — Luz e Câmera',
    localPath: '/assets/ensaio/cdgleonardo-643.jpg',
    orientation: 'portrait',
    framing: 'Corpo Inteiro',
    outfit: 'Blusa branca & saia azul-royal com octabox ao fundo',
    mood: 'Bastidores / Making-of',
    series: 'Série Camarim & Bastidores',
    categories: ['camarim', 'corpo-inteiro'],
    description:
      'Corpo inteiro revelando o equipamento de iluminação do estúdio fotográfico ao fundo.',
  },
  {
    id: 'photo-463',
    title: 'Retrato no Veludo Azul',
    localPath: '/assets/ensaio/cdgleonardo-463.jpg',
    orientation: 'portrait',
    framing: 'Plano Médio',
    outfit: 'Blusa branca apoiada em poltrona azul-marinho',
    mood: 'Simpático / Clássico',
    series: 'Série Estúdio Azul-Royal',
    categories: ['retrato'],
    description:
      'Plano médio vertical apoiada sobre o encosto de uma poltrona de veludo azul-escuro.',
  },
  {
    id: 'photo-571',
    title: 'Expressão Viva em Estúdio',
    localPath: '/assets/ensaio/cdgleonardo-571.jpg',
    orientation: 'portrait',
    framing: 'Plano Médio',
    outfit: 'Blusa branca, saia azul-royal & brincos vermelhos',
    mood: 'Alegre / Dinâmico',
    series: 'Série Estúdio Azul-Royal',
    categories: ['comedia', 'retrato'],
    description:
      'Plano médio apoiada no cilindro branco de estúdio, sorrindo com vivacidade.',
  },
  {
    id: 'photo-613',
    title: 'Movimento & Leveza — Corpo Inteiro',
    localPath: '/assets/ensaio/cdgleonardo-613.jpg',
    orientation: 'portrait',
    framing: 'Corpo Inteiro Sentada',
    outfit: 'Blusa branca & saia midi azul-royal',
    mood: 'Alegre / Espontâneo',
    series: 'Série Estúdio Azul-Royal',
    categories: ['corpo-inteiro', 'comedia'],
    description:
      'Sentada sobre o cilindro branco com saia azul-royal fluida e sorriso aberto.',
  },
  {
    id: 'photo-634',
    title: 'Pose Clássica — Estúdio',
    localPath: '/assets/ensaio/cdgleonardo-634.jpg',
    orientation: 'portrait',
    framing: 'Corpo Inteiro Sentada',
    outfit: 'Blusa branca & saia midi azul-royal',
    mood: 'Clássico / Elegante',
    series: 'Série Estúdio Azul-Royal',
    categories: ['corpo-inteiro'],
    description:
      'Pose clássica sentada com pernas cruzadas sobre o cilindro branco de estúdio.',
  },
].map((photo) => ({ ...photo, localPath: assetUrl(photo.localPath) }));

export const GALLERY_CATEGORIES = [
  { id: 'todas', label: 'Todas as Fotos', count: ENSAIO_PHOTOS.length },
  {
    id: 'teatro',
    label: 'Teatro & Ribalta',
    count: ENSAIO_PHOTOS.filter((p) => p.categories.includes('teatro')).length,
  },
  {
    id: 'comedia',
    label: 'Comédia & Expressão',
    count: ENSAIO_PHOTOS.filter((p) => p.categories.includes('comedia')).length,
  },
  {
    id: 'drama',
    label: 'Drama & Casting',
    count: ENSAIO_PHOTOS.filter((p) => p.categories.includes('drama')).length,
  },
  {
    id: 'retrato',
    label: 'Retratos & Close-up',
    count: ENSAIO_PHOTOS.filter((p) => p.categories.includes('retrato')).length,
  },
  {
    id: 'corpo-inteiro',
    label: 'Corpo Inteiro',
    count: ENSAIO_PHOTOS.filter((p) => p.categories.includes('corpo-inteiro')).length,
  },
  {
    id: 'camarim',
    label: 'Camarim & Bastidores',
    count: ENSAIO_PHOTOS.filter((p) => p.categories.includes('camarim')).length,
  },
];

export const BOOKING_FAQS = [
  {
    question: 'Como funciona a disponibilidade da Valesca Almeida entre Goiânia (GYN) e Rio de Janeiro (RJ)?',
    answer:
      'Valesca mantém rotina ativa na ponte aérea Goiânia ⇄ Rio de Janeiro, além de disponibilidade total para viagens em todo o Brasil para gravações de cinema, séries, novelas, campanhas publicitárias, temporadas teatrais e shows de stand-up.',
  },
  {
    question: 'Como produtores de elenco podem solicitar self-tape, monólogo ou agendar teste?',
    answer:
      'Basta selecionar a opção "TV, Cinema ou Streaming (Teste / Elenco)" no formulário abaixo ou chamar diretamente no WhatsApp oficial (+55 62 99275-1516). O envio de self-tapes, cenas de referência e fotos em alta resolução é imediato.',
  },
  {
    question: 'Quais formatos de show de humor e participação em eventos corporativos estão disponíveis?',
    answer:
      'Valesca realiza apresentações de Stand-Up Comedy (pocket show ou espetáculo completo para convenções, festas corporativas, teatros e festivais), além de atuar como Mestre de Cerimônias (MC) com roteiro personalizado para empresas e marcas.',
  },
  {
    question: 'É possível contratá-la para campanhas publicitárias e conteúdo digital?',
    answer:
      'Sim! Com forte carisma, credibilidade artística na TV e alto engajamento orgânico, Valesca atua em comerciais de TV aberta, filmes publicitários, campanhas regionais/nacionais e publis criativas no Instagram (@valesca_almeida).',
  },
];
