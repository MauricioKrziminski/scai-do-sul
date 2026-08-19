import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Figure } from "@/components/ui/figure";
import { produtos } from "@/content/produtos";

/**
 * Linhas desenhadas por borda de célula. Com 9 linhas numa grade de 2 colunas
 * sobra célula vazia na última fila, e pintar o fundo do container fazia essa
 * sobra virar um retângulo cinza no tablet. Borda por célula não tem esse
 * problema com nenhuma quantidade.
 *
 * Reaproveitada na home e no índice de produtos.
 *
 * Cada card leva foto da peça. Num catálogo o comprador varre a página por
 * imagem antes de ler qualquer texto, então card só tipográfico obriga a ler
 * para achar a linha. Enquanto as fotos não chegam, entra o placeholder
 * nomeando a peça. Ver docs/lista-de-fotos.md, itens 05 a 13.
 */
export function LinhasProduto() {
  return (
    <div className="border-rule grid grid-cols-1 border-t border-l sm:grid-cols-2 lg:grid-cols-3">
      {produtos.map((produto) => (
        <Link
          key={produto.slug}
          href={`/produtos/${produto.slug}`}
          className="border-rule hover:bg-ink group flex flex-col border-r border-b transition-none"
        >
          <Figure
            ratio="4/3"
            src={produto.foto}
            alt={produto.nome}
            label={produto.fotoLabel}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          <div className="flex flex-1 flex-col justify-between gap-9 p-8 md:p-9">
            <div>
              <div className="flex items-start justify-between gap-4">
                <span className="label-tech text-brand-deep group-hover:text-brand">
                  {produto.indice}
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="text-steel group-hover:text-brand size-4 shrink-0"
                  strokeWidth={2}
                />
              </div>
              <h3 className="font-display expanded text-h4 group-hover:text-paper mt-6 font-bold uppercase">
                {produto.nome}
              </h3>
            </div>
            <p className="text-body-sm text-steel group-hover:text-paper/65 max-w-[36ch]">
              {produto.resumo}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
