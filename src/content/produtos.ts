/**
 * As nove linhas de produto.
 *
 * ORIGEM: as categorias vieram do site atual da empresa (scaisul.lovable.app).
 * Os nomes das linhas estão confirmados. As especificações técnicas abaixo são
 * PROVISÓRIAS: foram escritas a partir do vocabulário padrão do setor de
 * válvulas e conexões industriais no Brasil, e não do catálogo real da empresa.
 *
 * PENDENTE, e importante:
 *   1. O catálogo próprio SCAI.pdf está no Wayback, escaneado. Precisa de OCR
 *      para virar a lista real de modelos e faixas.
 *   2. Toda faixa de DN, classe de pressão, material e número de norma ABNT
 *      precisa ser conferida com o Eduardo antes de publicar.
 *   3. A associação entre linha e marca representada também precisa de
 *      confirmação, porque o dado das marcas é de 2018.
 *
 * Ver CLAUDE.md seção 9.
 */

export type Produto = {
  slug: string;
  /** Índice do catálogo. Device de identidade herdado da referência. */
  indice: string;
  nome: string;
  /** Vai no card da home e no índice. Uma linha, sem ponto final. */
  resumo: string;
  /** Abre a página do produto. Dois ou três parágrafos. */
  descricao: string[];
  /** Ficha resumida no alto da página. */
  destaques: { label: string; value: string }[];
  /** Tabela principal. Unidade sempre no cabeçalho. */
  tabela: { columns: string[]; rows: string[][] };
  aplicacoes: string[];
  materiais: string[];
  /** PENDENTE: conferir cada número com o cliente antes de publicar. */
  normas: string[];
  /** Marcas ligadas a esta linha. PENDENTE de confirmação. */
  marcas: string[];
  /** Descreve a foto que entra aqui. Ver docs/lista-de-fotos.md */
  fotoLabel: string;
  /**
   * Foto da linha. TEMPORARIA, do banco livre Pexels, so para visualizacao.
   * Trocar pela foto real da peca. Ver public/img/temp/LEIA-ME.md
   */
  foto?: string;
};

export const produtos: Produto[] = [
  {
    slug: "valvulas-saneamento",
    indice: "01",
    nome: "Válvulas para saneamento e indústria",
    resumo: "Gaveta, borboleta, retenção e ventosa para rede de água e esgoto",
    descricao: [
      "A linha de saneamento cobre a rede inteira, da adução à distribuição: válvula gaveta de cunha flexível, borboleta, retenção e ventosa de tríplice função. É o material que companhia de água, autarquia municipal e construtora de rede pedem no dia a dia.",
      "Todas as peças da linha de água potável saem com revestimento epóxi atóxico aplicado por pintura eletrostática a pó, tanto interno quanto externo, e vedação em EPDM. Sem isso a válvula não pode trabalhar em água de abastecimento.",
      "Se você chega com o projeto ou com a planilha da obra, a gente confere a especificação antes de fechar o orçamento. É mais rápido corrigir uma classe de pressão no papel do que trocar a válvula depois de instalada.",
    ],
    destaques: [
      { label: "Diâmetro", value: "DN 50 a 600" },
      { label: "Pressão", value: "PN 10 e PN 16" },
      { label: "Corpo", value: "Ferro fundido nodular" },
      { label: "Revestimento", value: "Epóxi atóxico" },
    ],
    tabela: {
      columns: ["Tipo", "DN (mm)", "Classe (bar)", "Extremidade"],
      rows: [
        ["Gaveta cunha flexível", "50 a 500", "PN 10 / 16", "Flangeada"],
        ["Borboleta", "50 a 600", "PN 10 / 16", "Wafer / flangeada"],
        ["Retenção portinhola", "50 a 400", "PN 10 / 16", "Flangeada"],
        ["Ventosa tríplice função", "50 a 200", "PN 10 / 16", "Flangeada"],
        ["Válvula de pé com crivo", "50 a 300", "PN 10", "Flangeada"],
      ],
    },
    aplicacoes: [
      "Rede de adução e distribuição de água",
      "Estação de tratamento de água e esgoto",
      "Estação elevatória",
      "Recalque e sucção de bomba",
      "Reservatório e barrilete",
    ],
    materiais: [
      "Ferro fundido nodular",
      "Ferro fundido cinzento",
      "Vedação EPDM",
      "Haste em inox",
    ],
    normas: ["ABNT NBR 15167", "ABNT NBR 14788", "ABNT NBR 14176"],
    marcas: ["SCAI", "DRAKO", "GENEBRE"],
    fotoLabel: "Válvula gaveta em ferro nodular, com volante",
    foto: "/img/temp/produto-saneamento.jpg",
  },

  {
    slug: "valvulas-bronze",
    indice: "02",
    nome: "Válvulas de bronze",
    resumo: "Registro de gaveta, globo, esfera e retenção em bronze e latão",
    descricao: [
      "Bronze resolve o problema que o ferro não resolve: resistência à corrosão em linha de água quente, vapor de baixa pressão, ar comprimido e óleo, em diâmetro pequeno e médio. É a válvula de manutenção industrial e de instalação predial.",
      "A linha vai de registro de gaveta e globo a esfera e retenção, sempre com extremidade roscada BSP, que é o que o instalador encontra na tubulação existente.",
      "Peça de bronze é item de prateleira aqui. Na maior parte das bitolas o material sai no mesmo dia.",
    ],
    destaques: [
      { label: "Diâmetro", value: '1/2" a 4"' },
      { label: "Pressão", value: "PN 16 a PN 25" },
      { label: "Corpo", value: "Bronze e latão" },
      { label: "Extremidade", value: "Roscada BSP" },
    ],
    tabela: {
      columns: ["Tipo", "Bitola (pol)", "DN (mm)", "Classe (bar)"],
      rows: [
        ["Registro de gaveta", '1/2" a 4"', "15 a 100", "PN 16"],
        ["Registro de globo", '1/2" a 3"', "15 a 80", "PN 16"],
        ["Válvula de esfera", '1/2" a 4"', "15 a 100", "PN 25"],
        ["Retenção horizontal", '1/2" a 3"', "15 a 80", "PN 16"],
        ["Válvula de pé", '1/2" a 3"', "15 a 80", "PN 16"],
      ],
    },
    aplicacoes: [
      "Água quente e água fria",
      "Vapor de baixa pressão",
      "Ar comprimido",
      "Óleo e linha hidráulica",
      "Instalação predial e manutenção industrial",
    ],
    materiais: [
      "Bronze TC",
      "Latão forjado",
      "Vedação em PTFE",
      "Haste em latão",
    ],
    normas: ["ABNT NBR 12430", "ABNT NBR 14477"],
    marcas: ["DECA", "SCAI", "GENEBRE"],
    fotoLabel: "Registro de esfera em bronze, com alavanca",
    foto: "/img/temp/produto-bronze.jpg",
  },

  {
    slug: "valvulas-borboleta",
    indice: "03",
    nome: "Válvulas borboleta",
    resumo:
      "Wafer, lug e flangeada, em diâmetro grande com pouco espaço de linha",
    descricao: [
      "Borboleta é a escolha quando o diâmetro é grande e o espaço entre flanges é pouco. Ela pesa uma fração de uma gaveta equivalente, custa menos e fecha em um quarto de volta.",
      "A montagem wafer entra prensada entre dois flanges. A lug tem furação roscada e permite desmontar a tubulação de um lado só, sem despressurizar o outro, que é o que se pede em ramal com manutenção frequente.",
      "A escolha da sede é o que define a aplicação: EPDM para água, NBR para óleo, Viton para químico e temperatura alta. Vale conferir o fluido antes de fechar o pedido.",
    ],
    destaques: [
      { label: "Diâmetro", value: "DN 50 a 600" },
      { label: "Pressão", value: "PN 10 e PN 16" },
      { label: "Montagem", value: "Wafer, lug, flangeada" },
      { label: "Acionamento", value: "Alavanca ou redutor" },
    ],
    tabela: {
      columns: ["Montagem", "DN (mm)", "Disco", "Sede"],
      rows: [
        ["Wafer", "50 a 300", "Ferro nodular ou inox 304", "EPDM / NBR"],
        ["Wafer", "350 a 600", "Ferro nodular", "EPDM"],
        ["Lug", "50 a 300", "Inox 304 ou 316", "EPDM / Viton"],
        ["Flangeada", "100 a 600", "Ferro nodular", "EPDM"],
      ],
    },
    aplicacoes: [
      "Linha de água bruta e tratada",
      "Processo químico e petroquímico",
      "Sistema de refrigeração e HVAC",
      "Papel e celulose",
      "Ramal com manutenção frequente",
    ],
    materiais: [
      "Corpo em ferro fundido nodular",
      "Disco em inox 304 e 316",
      "Sede EPDM, NBR e Viton",
      "Eixo em inox",
    ],
    normas: ["ABNT NBR 14788", "API 609"],
    marcas: ["GENEBRE", "DRAKO", "SCAI"],
    fotoLabel: "Válvula borboleta wafer com alavanca",
    foto: "/img/temp/produto-borboleta.jpg",
  },

  {
    slug: "valvulas-esfera",
    indice: "04",
    nome: "Válvulas de esfera",
    resumo:
      "Bipartida, tripartida e monobloco, para bloqueio rápido e vedação estanque",
    descricao: [
      "Esfera é a válvula de bloqueio mais usada na indústria: fecha em um quarto de volta, veda de forma estanque e tem perda de carga próxima de zero quando a passagem é plena.",
      "A tripartida é a que vale a pena em linha de processo, porque abre para manutenção sem tirar o corpo da tubulação. A bipartida atende bem utilidade e ar comprimido, e a monobloco resolve o ponto onde só se precisa de bloqueio barato e confiável.",
      "Inox 316 é o que se especifica quando há cloreto, produto químico agressivo ou exigência sanitária. Inox 304 e latão cobrem o resto.",
    ],
    destaques: [
      { label: "Diâmetro", value: "DN 15 a 200" },
      { label: "Pressão", value: "Até PN 63" },
      { label: "Passagem", value: "Plena ou reduzida" },
      { label: "Sede", value: "PTFE" },
    ],
    tabela: {
      columns: ["Construção", "DN (mm)", "Classe (bar)", "Material do corpo"],
      rows: [
        ["Monobloco", "15 a 50", "PN 40", "Latão / inox 304"],
        ["Bipartida", "15 a 100", "PN 40", "Inox 304 / 316"],
        ["Tripartida", "15 a 200", "PN 63", "Inox 316"],
        ["Flangeada", "50 a 200", "PN 16 / 40", "Aço carbono / inox"],
      ],
    },
    aplicacoes: [
      "Linha de processo industrial",
      "Química e petroquímica",
      "Alimentícia e farmacêutica",
      "Ar comprimido e utilidades",
      "Vapor e água quente",
    ],
    materiais: [
      "Inox AISI 304 e 316",
      "Latão forjado",
      "Aço carbono",
      "Sede e vedação em PTFE",
    ],
    normas: ["ABNT NBR 14968", "API 6D"],
    marcas: ["GENEBRE", "SCAI", "MICROMAZZA"],
    fotoLabel: "Válvula esfera tripartida em inox, DN 150",
    foto: "/img/temp/produto-esfera.jpg",
  },

  {
    slug: "conexoes-ferro-maleavel",
    indice: "05",
    nome: "Conexões de ferro maleável",
    resumo:
      "Cotovelo, tê, luva, união, niple e bucha, no padrão brasileiro TUPY",
    descricao: [
      "Conexão de ferro fundido maleável é o padrão da tubulação roscada no Brasil, e a linha TUPY é a referência do mercado. Trabalhamos com a linha completa, em galvanizado e em preto.",
      "O galvanizado atende água, ar comprimido e instalação exposta. O preto atende linha de vapor, óleo e combate a incêndio, onde a pintura de acabamento cobre a proteção.",
      "Como é item de reposição constante, mantemos as bitolas de giro em estoque. Peça pouco comum a gente cota e traz.",
    ],
    destaques: [
      { label: "Bitola", value: '1/2" a 4"' },
      { label: "Classe", value: "150 e 300 lb" },
      { label: "Rosca", value: "BSP" },
      { label: "Acabamento", value: "Galvanizado e preto" },
    ],
    tabela: {
      columns: ["Peça", "Bitola (pol)", "Classe (lb)", "Acabamento"],
      rows: [
        ["Cotovelo 90 e 45", '1/2" a 4"', "150 / 300", "Galvanizado / preto"],
        ["Tê e cruzeta", '1/2" a 4"', "150 / 300", "Galvanizado / preto"],
        [
          "Luva e luva de redução",
          '1/2" a 4"',
          "150 / 300",
          "Galvanizado / preto",
        ],
        [
          "União com assento cônico",
          '1/2" a 3"',
          "150 / 300",
          "Galvanizado / preto",
        ],
        [
          "Niple e bucha de redução",
          '1/2" a 4"',
          "150 / 300",
          "Galvanizado / preto",
        ],
      ],
    },
    aplicacoes: [
      "Tubulação hidráulica industrial",
      "Ar comprimido",
      "Rede de combate a incêndio",
      "Vapor e condensado",
      "Instalação predial e manutenção",
    ],
    materiais: [
      "Ferro fundido maleável",
      "Galvanização a fogo",
      "Acabamento preto",
    ],
    normas: ["ABNT NBR 6943", "ASME B16.3"],
    marcas: ["TUPY"],
    fotoLabel: "Tê, cotovelo e luva de ferro maleável, galvanizados",
    foto: "/img/temp/produto-conexoes.jpg",
  },

  {
    slug: "flanges-conexoes",
    indice: "06",
    nome: "Flanges e conexões",
    resumo:
      "Sobreposto, com pescoço, cego, roscado e solto, em aço carbono e inox",
    descricao: [
      "Flange é o ponto onde a tubulação se abre para manutenção, e onde erro de furação para a obra. Trabalhamos as duas famílias de padrão que convivem no Brasil: a métrica PN, comum em saneamento, e a americana ANSI, comum em processo industrial e refinaria.",
      "PN 16 e ANSI 150# não são intercambiáveis, mesmo quando o diâmetro bate. A furação e a espessura mudam. Antes de fechar, confirme qual padrão está na tubulação existente. A gente confere junto.",
      "A linha inclui ainda junta de vedação, estojo e porca, para o flange sair completo e não parar a montagem por falta de acessório.",
    ],
    destaques: [
      { label: "Diâmetro", value: "DN 15 a 600" },
      { label: "Padrões", value: "PN 10/16 e ANSI 150#/300#" },
      { label: "Material", value: "Aço carbono e inox" },
      { label: "Acompanha", value: "Junta, estojo e porca" },
    ],
    tabela: {
      columns: ["Tipo", "DN (mm)", "Padrão", "Material"],
      rows: [
        [
          "Sobreposto (slip on)",
          "15 a 600",
          "PN 10 / 16",
          "Aço carbono ASTM A105",
        ],
        [
          "Com pescoço (welding neck)",
          "15 a 600",
          "ANSI 150# / 300#",
          "Aço carbono ASTM A105",
        ],
        ["Cego", "15 a 600", "PN 16 / ANSI 150#", "Aço carbono / inox 304"],
        ["Roscado", "15 a 150", "PN 16 / ANSI 150#", "Aço carbono / inox 316"],
        [
          "Solto com virola",
          "25 a 300",
          "PN 10 / 16",
          "Aço carbono / inox 304",
        ],
      ],
    },
    aplicacoes: [
      "Interligação de tubulação industrial",
      "Estação de bombeamento",
      "Refinaria e petroquímica",
      "Rede de saneamento",
      "Montagem e reforma de planta",
    ],
    materiais: [
      "Aço carbono ASTM A105",
      "Inox AISI 304 e 316",
      "Junta em papelão hidráulico e PTFE",
    ],
    normas: ["ABNT NBR 15827", "ASME B16.5"],
    marcas: ["SCAI", "MONTANA"],
    fotoLabel: "Flange com pescoço em aço carbono, vista de frente",
    foto: "/img/temp/produto-flanges.jpg",
  },

  {
    slug: "conexoes-alta-pressao",
    indice: "07",
    nome: "Conexões de alta pressão",
    resumo: "Forjadas em aço carbono e inox, nas classes 3000, 6000 e 9000 lb",
    descricao: [
      "Quando a linha passa de algumas dezenas de bar, conexão roscada comum não serve mais. A conexão forjada de alta pressão é usinada em bloco maciço, sem costura, e trabalha em classe 3000, 6000 e 9000 libras.",
      "A extremidade define o método de montagem: socket weld encaixa e solda em filete, roscada NPT fecha por interferência, e solda de topo entra em linha de processo crítico.",
      "É material de instrumentação, linha de vapor de alta e ponto de tomada de pressão. Trabalhamos aço carbono ASTM A105 e inox 316, que é o que a especificação costuma pedir.",
    ],
    destaques: [
      { label: "Bitola", value: '1/8" a 4"' },
      { label: "Classe", value: "3000, 6000 e 9000 lb" },
      { label: "Extremidade", value: "Socket weld, NPT, topo" },
      { label: "Material", value: "A105 e inox 316" },
    ],
    tabela: {
      columns: ["Peça", "Bitola (pol)", "Classe (lb)", "Extremidade"],
      rows: [
        ["Cotovelo 90 e 45", '1/8" a 4"', "3000 / 6000", "Socket weld / NPT"],
        ["Tê e cruzeta", '1/8" a 4"', "3000 / 6000", "Socket weld / NPT"],
        [
          "Luva e meia luva",
          '1/8" a 4"',
          "3000 / 6000 / 9000",
          "Socket weld / NPT",
        ],
        ["União", '1/4" a 2"', "3000 / 6000", "Socket weld / NPT"],
        ["Bucha e niple", '1/8" a 3"', "3000 / 6000", "NPT"],
      ],
    },
    aplicacoes: [
      "Instrumentação e tomada de pressão",
      "Vapor de alta pressão",
      "Linha hidráulica de alta",
      "Refinaria e petroquímica",
      "Caldeira e utilidades",
    ],
    materiais: [
      "Aço carbono forjado ASTM A105",
      "Inox AISI 304 e 316",
      "Aço liga",
    ],
    normas: ["ASME B16.11", "ASTM A105", "ASTM A182"],
    marcas: ["SCAI", "MONTANA"],
    fotoLabel: "Conexão forjada em inox, rosca NPT visível",
    foto: "/img/temp/produto-alta-pressao.jpg",
  },

  {
    slug: "manometros-termometros",
    indice: "08",
    nome: "Manômetros e termômetros",
    resumo:
      "Instrumentação de pressão e temperatura, com acessório de instalação",
    descricao: [
      "Instrumento é o que transforma a linha em informação. Trabalhamos manômetro tipo Bourdon em caixa de 63, 100 e 150 milímetros, seco ou com glicerina, e termômetro bimetálico de haste em inox.",
      "Glicerina resolve o problema mais comum de campo: ponteiro tremendo por vibração de bomba ou por golpe de aríete. O amortecimento aumenta muito a vida útil do instrumento e mantém a leitura legível.",
      "A linha inclui os acessórios que costumam faltar na hora da montagem: sifão rabo de porco para vapor, válvula de bloqueio de instrumento, selo diafragma e poço termométrico.",
    ],
    destaques: [
      { label: "Caixa", value: "63, 100 e 150 mm" },
      { label: "Faixa", value: "0 a 400 bar" },
      { label: "Conexão", value: '1/4" e 1/2" BSP' },
      { label: "Enchimento", value: "Seco ou glicerina" },
    ],
    tabela: {
      columns: ["Instrumento", "Caixa (mm)", "Faixa", "Conexão"],
      rows: [
        ["Manômetro seco", "63 / 100", "0 a 400 bar", '1/4" / 1/2" BSP'],
        [
          "Manômetro com glicerina",
          "63 / 100 / 150",
          "0 a 400 bar",
          '1/4" / 1/2" BSP',
        ],
        ["Manovacuômetro", "63 / 100", "1 a 0 a 25 bar", '1/4" / 1/2" BSP'],
        ["Termômetro bimetálico", "63 / 100", "0 a 500 °C", '1/2" BSP'],
        [
          "Poço termométrico",
          "Haste 50 a 250 mm",
          "Inox 304 / 316",
          '1/2" / 3/4" BSP',
        ],
      ],
    },
    aplicacoes: [
      "Painel de instrumentação",
      "Casa de bomba e recalque",
      "Caldeira e linha de vapor",
      "Compressor e ar comprimido",
      "Processo químico e alimentício",
    ],
    materiais: [
      "Caixa em inox e aço",
      "Elemento em bronze fosforoso e inox",
      "Enchimento em glicerina",
    ],
    normas: ["ABNT NBR 14105", "EN 837"],
    marcas: ["SCAI", "MICROMAZZA"],
    fotoLabel: "Manômetro com glicerina, mostrador legível",
    foto: "/img/temp/produto-manometros.jpg",
  },

  {
    slug: "equipamentos-incendio",
    indice: "09",
    nome: "Equipamentos para incêndio",
    resumo:
      "Hidrante, registro angular, esguicho, mangueira e válvula de recalque",
    descricao: [
      "Rede de combate a incêndio é item de aprovação do Corpo de Bombeiros, então material fora de especificação simplesmente não passa na vistoria. A linha cobre o conjunto: registro globo angular, esguicho, mangueira, adaptador engate rápido, abrigo e válvula de recalque.",
      "As bitolas de rede predial são as usuais, 1 e 1/2 e 2 e 1/2 polegadas, com engate rápido tipo Storz, que é o padrão que o caminhão do Bombeiro usa.",
      "Se você está montando ou reformando a rede, traga o projeto aprovado. É mais seguro conferir a lista contra o memorial do que descobrir divergência na vistoria.",
    ],
    destaques: [
      { label: "Bitola", value: '1 1/2" e 2 1/2"' },
      { label: "Engate", value: "Rápido tipo Storz" },
      { label: "Registro", value: "Globo angular 45°" },
      { label: "Uso", value: "Rede predial e industrial" },
    ],
    tabela: {
      columns: ["Item", "Bitola (pol)", "Material", "Observação"],
      rows: [
        [
          "Registro globo angular 45°",
          '1 1/2" / 2 1/2"',
          "Bronze",
          "Volante em alumínio",
        ],
        [
          "Adaptador e tampão Storz",
          '1 1/2" / 2 1/2"',
          "Alumínio / bronze",
          "Engate rápido",
        ],
        [
          "Esguicho regulável e agulheta",
          '1 1/2" / 2 1/2"',
          "Alumínio / latão",
          "Jato pleno e neblina",
        ],
        [
          "Mangueira de incêndio",
          '1 1/2" / 2 1/2"',
          "Poliéster com revestimento",
          "15 e 30 m",
        ],
        ["Válvula de recalque", '2 1/2"', "Bronze", "Com tampão e corrente"],
      ],
    },
    aplicacoes: [
      "Rede predial de combate a incêndio",
      "Hidrante industrial",
      "Casa de bomba de incêndio",
      "Abrigo de mangueira",
      "Adequação para vistoria do Corpo de Bombeiros",
    ],
    materiais: ["Bronze", "Alumínio", "Latão", "Mangueira em poliéster"],
    normas: ["ABNT NBR 13932", "ABNT NBR 11861", "ABNT NBR 14349"],
    marcas: ["SCAI", "DECA"],
    fotoLabel: "Registro globo angular e esguicho de incêndio",
    foto: "/img/temp/produto-incendio.jpg",
  },
];

export const produtoPorSlug = (slug: string) =>
  produtos.find((p) => p.slug === slug);
