import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Logotipo tipográfico provisório, isolado aqui de propósito.
 * Quando o arquivo real da marca chegar, troca só este componente e o site
 * inteiro acompanha. Ver a tabela de pendências no CLAUDE.md.
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
      className={cn("group inline-flex flex-col gap-1.5", className)}
    >
      <span
        className={cn(
          "label-tech",
          inverted ? "text-paper/50" : "text-steel",
        )}
      >
        Metalúrgica
      </span>
      <span className="flex items-baseline gap-2">
        <span
          className={cn(
            "font-display expanded text-[1.4rem] leading-none font-bold tracking-[-0.03em] uppercase",
            inverted ? "text-paper" : "text-ink",
          )}
        >
          Scai do Sul
        </span>
        <span
          aria-hidden
          className={cn("h-1.5 w-1.5", inverted ? "bg-molten-2" : "bg-molten")}
        />
      </span>
    </Link>
  );
}
