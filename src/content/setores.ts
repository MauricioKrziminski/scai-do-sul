/**
 * Setores atendidos.
 *
 * Os sete primeiros são CONFIRMADOS: vieram textualmente do site próprio da
 * empresa em 2018, que dizia "Fornecemos soluções para indústrias siderúrgicas,
 * metalúrgicas, químicas, petroquímicas, refinarias, usinas, alimentícias e
 * outras."
 *
 * Os marcados com `confirmado: false` são extensões plausíveis para o perfil da
 * empresa, mas cada um é uma afirmação sobre o cliente. PENDENTE de confirmação
 * antes de publicar. Ver CLAUDE.md seção 9.
 */

export type Setor = {
  slug: string;
  nome: string;
  descricao: string;
  /** Linhas de produto que mais saem para este setor. */
  linhas: string[];
  confirmado: boolean;
};

export const setores: Setor[] = [
  {
    slug: "siderurgia-metalurgia",
    nome: "Siderurgia e metalurgia",
    descricao:
      "Linha de utilidades, água de refrigeração e ar comprimido em ambiente de temperatura alta e poeira abrasiva. Material que precisa aguentar ciclo pesado sem parar a produção.",
    linhas: [
      "Válvulas borboleta",
      "Flanges e conexões",
      "Conexões de alta pressão",
    ],
    confirmado: true,
  },
  {
    slug: "quimica-petroquimica",
    nome: "Química e petroquímica",
    descricao:
      "Fluido agressivo exige o material certo de corpo e de vedação. Inox 316, Viton e PTFE são a regra aqui, e a especificação errada vira parada de planta.",
    linhas: [
      "Válvulas de esfera",
      "Conexões de alta pressão",
      "Flanges e conexões",
    ],
    confirmado: true,
  },
  {
    slug: "refinarias",
    nome: "Refinarias",
    descricao:
      "Padrão ANSI, conexão forjada de classe alta e rastreabilidade de material. É onde a procedência da marca pesa mais do que o preço.",
    linhas: [
      "Conexões de alta pressão",
      "Flanges e conexões",
      "Válvulas de esfera",
    ],
    confirmado: true,
  },
  {
    slug: "usinas",
    nome: "Usinas e geração de energia",
    descricao:
      "Água de resfriamento, vapor e linha de condensado. Válvula de bloqueio de diâmetro grande e instrumentação de pressão e temperatura em quantidade.",
    linhas: [
      "Válvulas borboleta",
      "Manômetros e termômetros",
      "Válvulas de bronze",
    ],
    confirmado: true,
  },
  {
    slug: "alimenticia",
    nome: "Alimentícia e bebidas",
    descricao:
      "Exigência sanitária e limpeza frequente. Inox 316, vedação atóxica e acabamento que não retém resíduo, em linha de processo e de utilidades.",
    linhas: [
      "Válvulas de esfera",
      "Válvulas de bronze",
      "Manômetros e termômetros",
    ],
    confirmado: true,
  },
  {
    slug: "saneamento",
    nome: "Saneamento",
    descricao:
      "Companhia de água, autarquia municipal e construtora de rede. Ferro nodular com revestimento epóxi atóxico, classe PN 10 e PN 16, do DN pequeno ao grande.",
    linhas: [
      "Válvulas para saneamento",
      "Flanges e conexões",
      "Válvulas borboleta",
    ],
    confirmado: true,
  },
  {
    slug: "construcao-e-manutencao",
    nome: "Construção e manutenção predial",
    descricao:
      "Instalação hidráulica, ar comprimido e rede de incêndio. É o setor que mais precisa de item de prateleira, com a bitola disponível no mesmo dia.",
    linhas: [
      "Conexões de ferro maleável",
      "Válvulas de bronze",
      "Equipamentos para incêndio",
    ],
    confirmado: false,
  },
  {
    slug: "papel-e-celulose",
    nome: "Papel e celulose",
    descricao:
      "Processo contínuo com fluido quente e abrasivo. Borboleta de diâmetro grande e conexão de alta pressão em volume, com reposição programada.",
    linhas: [
      "Válvulas borboleta",
      "Conexões de alta pressão",
      "Flanges e conexões",
    ],
    confirmado: false,
  },
];
