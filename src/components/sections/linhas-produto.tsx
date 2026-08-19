import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { produtos } from "@/content/produtos";

/**
 * Grade de borda compartilhada: os cards não têm borda própria, as frestas é
 * que são as linhas. Dispositivo estrutural mais limpo disponível, e custa nada.
 * Reaproveitada na home e no índice de produtos.
 */
export function LinhasProduto() {
  return (
    <div className="bg-rule grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
      {produtos.map((produto) => (
        <Link
          key={produto.slug}
          href={`/produtos/${produto.slug}`}
          className="bg-paper hover:bg-ink group flex flex-col justify-between gap-12 p-8 transition-none md:p-10"
        >
          <div>
            <div className="flex items-start justify-between gap-4">
              <span className="label-tech text-molten">{produto.indice}</span>
              <ArrowUpRight
                aria-hidden
                className="text-steel group-hover:text-molten-2 size-4 shrink-0"
                strokeWidth={2}
              />
            </div>
            <h3 className="font-display expanded text-h4 group-hover:text-paper mt-7 font-bold uppercase">
              {produto.nome}
            </h3>
          </div>
          <p className="text-body-sm text-steel group-hover:text-paper/65 max-w-[36ch]">
            {produto.resumo}
          </p>
        </Link>
      ))}
    </div>
  );
}
