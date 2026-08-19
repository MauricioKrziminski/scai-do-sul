/**
 * Fonte unica de verdade dos dados da empresa.
 *
 * CONFIRMADO marca dado verificado em fonte publica (Receita, Wayback, diretorio).
 * PENDENTE marca dado que precisa de confirmacao do cliente antes de publicar.
 * Ver a tabela de pendencias no CLAUDE.md.
 */

export const site = {
  nome: "Metalúrgica Scai do Sul",
  nomeCurto: "Scai do Sul",
  razaoSocial: "Metalúrgica Scai do Sul Ltda.",

  // CONFIRMADO: Receita Federal via Econodata, Casa dos Dados, cnpj.biz
  cnpj: "87.955.035/0001-62",
  fundacao: 1975,

  // CONFIRMADO: site proprio de 2018, recuperado do Wayback Machine
  tagline: "Qualidade e eficiência em soluções industriais desde 1975",

  url: "https://www.scaisul.com.br",

  contato: {
    // CONFIRMADO: registro da Receita e diretorios
    endereco: {
      logradouro: "Av. Cairú, 525",
      bairro: "Navegantes",
      cidade: "Porto Alegre",
      uf: "RS",
      cep: "90230-031",
    },
    telefone: "(51) 3342-8233",
    telefoneRaw: "+555133428233",
    // PENDENTE: existe tambem scaisul@terra.com.br em diretorios. Confirmar o ativo.
    email: "scaisul@scaisul.com.br",
    // PENDENTE: numero de WhatsApp comercial nao confirmado. Usando o fixo por ora.
    whatsapp: "555133428233",
    // PENDENTE: horario nao confirmado em nenhuma fonte publica.
    horario: null as string | null,
  },

  maps: "https://www.google.com/maps/search/?api=1&query=Av.+Cair%C3%BA+525+Navegantes+Porto+Alegre+RS",
} as const;

export const anosDeCasa = new Date().getFullYear() - site.fundacao;

export const enderecoLinha = `${site.contato.endereco.logradouro}, ${site.contato.endereco.bairro}, ${site.contato.endereco.cidade} ${site.contato.endereco.uf}, ${site.contato.endereco.cep}`;
