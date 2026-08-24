import { marcas } from "@/content/marcas";

/**
 * Linhas desenhadas por borda de célula, não por `gap-px` sobre um fundo.
 * Com 9 marcas numa grade de 4 colunas sobra célula vazia na última fila, e
 * pelo método do fundo essa sobra aparecia como um retângulo cinza. Borda por
 * célula funciona com qualquer quantidade em qualquer breakpoint.
 *
 * O número de colunas sai de medição, não de gosto. MICROMAZZA é o nome mais
 * largo da lista: em Archivo semi expandida a 22px ele ocupa 172px, e nome de
 * marca não pode quebrar no meio da palavra. Com o respiro de 28px de cada
 * lado, a célula precisa de 228px para não cortar. Isso dá o piso de largura
 * de cada arranjo: 2 colunas só a partir de 512px de tela, 3 a partir de
 * 1024px e 4 a partir de 1232px. Daí a escada abaixo. Antes a grade ia direto
 * de 2 para 4 colunas e o nome sangrava para fora da célula em toda tela de
 * celular e em todo notebook de 768 a 1024.
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
    <div className="border-rule grid grid-cols-1 border-t border-l sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {marcas.map((marca) => (
        <div
          key={marca.nome}
          className="border-rule flex flex-col gap-4 border-r border-b p-7 xl:p-8"
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
