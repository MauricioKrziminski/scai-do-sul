import { marcas } from "@/content/marcas";

/**
 * Linhas desenhadas por borda de célula, não por `gap-px` sobre um fundo.
 * Com 9 marcas numa grade de 4 colunas sobra célula vazia na última fila, e
 * pelo método do fundo essa sobra aparecia como um retângulo cinza. Borda por
 * célula funciona com qualquer quantidade em qualquer breakpoint.
 *
 * As marcas representadas são o ativo mais desperdiçado da empresa: prova de
 * portfólio que o site atual não mostra em lugar nenhum.
 *
 * Renderizadas em tipo, não em logotipo. Logotipo de terceiro exige arquivo
 * autorizado de cada fabricante, e uma parede de PNG em qualidade e proporção
 * diferentes estraga qualquer layout. Quando os arquivos oficiais chegarem,
 * troca aqui.
 */
export function Marcas() {
  return (
    <div className="border-rule grid grid-cols-2 border-t border-l md:grid-cols-4">
      {marcas.map((marca) => (
        <div
          key={marca.nome}
          className="border-rule flex flex-col gap-4 border-r border-b p-7 md:p-8"
        >
          <span className="font-display semi-expanded text-h5 font-bold tracking-[-0.02em] uppercase">
            {marca.nome}
          </span>
          <span className="text-body-sm text-steel max-w-[24ch]">
            {marca.linha}
          </span>
        </div>
      ))}
    </div>
  );
}
