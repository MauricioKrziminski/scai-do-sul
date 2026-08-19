import { cn } from "@/lib/cn";

/**
 * Faixa estatica. Queremos a barra, nao o movimento. Norma e faixa de
 * especificacao sao o conteudo perfeito aqui: sinalizacao de credibilidade
 * disfarcada de ornamento.
 */
export function Ticker({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={cn("overflow-hidden border-y border-ink bg-ink text-paper", className)}>
      <div className="flex items-center gap-8 overflow-x-auto px-5 py-3.5 whitespace-nowrap md:justify-center md:gap-10 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item, i) => (
          <span key={item} className="flex shrink-0 items-center gap-8 md:gap-10">
            <span className="label-tech text-paper/80">{item}</span>
            {i < items.length - 1 && (
              <span aria-hidden className="text-brand text-[8px] leading-none">
                &#9670;
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
