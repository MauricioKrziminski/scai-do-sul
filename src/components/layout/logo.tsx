import Link from "next/link";
import { MarcaScai } from "./marca-scai";
import { cn } from "@/lib/cn";

/**
 * Assinatura da marca: pictograma da válvula mais o logotipo.
 *
 * O logotipo está tipografado, não é imagem, porque o arquivo que temos é um
 * PNG de 225 pixels com o verde chapado no fundo. O desenho segue a mesma
 * hierarquia do original: "Metalúrgica" pequeno em cima, o nome grande
 * embaixo. Ver CLAUDE.md seção 9.
 */
export function Logo({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Metalúrgica Scai do Sul, página inicial"
      className={cn("inline-flex items-center gap-3.5", className)}
    >
      <MarcaScai
        className={cn(
          "h-11 w-auto shrink-0",
          inverted ? "text-paper" : "text-brand-deep",
        )}
      />
      <span className="flex flex-col gap-1.5">
        <span
          className={cn(
            "label-tech",
            inverted ? "text-paper/55" : "text-steel",
          )}
        >
          Metalúrgica
        </span>
        <span
          className={cn(
            "font-display expanded text-[1.35rem] leading-none font-bold tracking-[-0.03em] uppercase",
            inverted ? "text-paper" : "text-ink",
          )}
        >
          Scai do Sul
        </span>
      </span>
    </Link>
  );
}
