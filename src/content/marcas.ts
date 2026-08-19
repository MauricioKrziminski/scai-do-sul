/**
 * Marcas representadas.
 *
 * FONTE: a placa da própria empresa na Av. Cairú, fotografada em agosto de
 * 2026 (`public/img/scai-sul-local.jpg`). É evidência atual e substitui os
 * catálogos de 2018 que estavam no Wayback.
 *
 * A placa derrubou três marcas que eu tinha da fonte antiga e não estão mais
 * lá: GENEBRE, DRAKO e MONTANA. E trouxe quatro que eu não conhecia: DEXCO,
 * KLINGER, TUPER e LUPATECH MIPEL.
 *
 * A associação entre marca e linha de produto abaixo ainda é inferência a
 * partir do que cada fabricante produz. PENDENTE de confirmação do Eduardo.
 */
export type Marca = {
  nome: string;
  linha: string;
  confirmada: boolean;
};

export const marcas: Marca[] = [
  { nome: "SCAI", linha: "Linha própria da casa", confirmada: true },
  {
    nome: "TUPY",
    linha: "Conexões de ferro fundido maleável",
    confirmada: true,
  },
  { nome: "LUPATECH MIPEL", linha: "Válvulas industriais", confirmada: true },
  { nome: "DECA", linha: "Registros e metais sanitários", confirmada: true },
  { nome: "TUPER", linha: "Tubos e perfis de aço", confirmada: true },
  { nome: "KLINGER", linha: "Juntas e materiais de vedação", confirmada: true },
  {
    nome: "ISOVER",
    linha: "Lã de vidro e isolamento térmico",
    confirmada: true,
  },
  { nome: "MICROMAZZA", linha: "Válvulas e equipamentos", confirmada: true },
  { nome: "DEXCO", linha: "Materiais para construção", confirmada: true },
];
