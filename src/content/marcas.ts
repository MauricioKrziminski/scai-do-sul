/**
 * Marcas representadas. Recuperado dos catalogos hospedados no site proprio da
 * empresa em dezembro de 2018 (Wayback Machine).
 *
 * ATENCAO: dado com oito anos. PENDENTE de confirmacao do cliente sobre quais
 * marcas a empresa ainda representa hoje. Ver CLAUDE.md secao 9.
 */
export type Marca = {
  nome: string;
  linha: string;
  confirmada: boolean;
};

export const marcas: Marca[] = [
  { nome: "SCAI", linha: "Linha própria da casa", confirmada: true },
  { nome: "TUPY", linha: "Conexões de ferro fundido maleável", confirmada: true },
  { nome: "DECA", linha: "Registros e metais sanitários", confirmada: true },
  { nome: "GENEBRE", linha: "Válvulas esfera, borboleta e inox", confirmada: true },
  { nome: "DRAKO", linha: "Válvulas industriais", confirmada: true },
  { nome: "ISOVER", linha: "Lã de vidro e isolamento térmico", confirmada: true },
  { nome: "MICROMAZZA", linha: "Válvulas e equipamentos", confirmada: true },
  { nome: "MONTANA", linha: "Materiais industriais", confirmada: false },
];
