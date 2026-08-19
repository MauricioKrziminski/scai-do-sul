import { marcas } from "@/content/marcas";

/**
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
    <div className="bg-rule grid grid-cols-2 gap-px md:grid-cols-4">
      {marcas.map((marca) => (
        <div key={marca.nome} className="bg-paper flex flex-col gap-4 p-7 md:p-8">
          <span className="font-display semi-expanded text-h5 font-bold tracking-[-0.02em] uppercase">
            {marca.nome}
          </span>
          <span className="text-body-sm text-steel max-w-[24ch]">{marca.linha}</span>
        </div>
      ))}
    </div>
  );
}
