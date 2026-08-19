/**
 * Tipo e estado inicial do formulario de orcamento.
 *
 * Vivem fora de orcamento.ts de proposito: um arquivo marcado com "use server"
 * so pode exportar funcao assincrona. Exportar um objeto de la quebra em
 * runtime, e o build nao pega.
 */
export type EstadoOrcamento = {
  status: "inicial" | "ok" | "erro";
  mensagem?: string;
  erros?: Partial<Record<"nome" | "empresa" | "email" | "telefone" | "produto" | "mensagem", string>>;
  /** Preserva o que o usuario digitou quando a validacao falha. */
  valores?: Record<string, string>;
};

export const estadoInicial: EstadoOrcamento = { status: "inicial" };
