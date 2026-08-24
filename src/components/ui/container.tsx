import { cn } from "@/lib/cn";

/**
 * Margem de pagina pequena e teto muito alto. A imagem sangra de ponta a ponta
 * e o texto fica dentro. Esse descasamento e o que faz o layout ler editorial.
 *
 * A margem lateral e o maior valor entre o respiro do projeto e o recorte da
 * tela. Isso existe por causa do `viewportFit: "cover"`: com ele o site passa
 * a desenhar ate a borda fisica, e no celular deitado o texto entraria por
 * baixo do recorte da camera. O maximo simetrico mantem a pagina centrada, que
 * e o que o resto do layout assume. Em tela sem recorte os dois `env` valem
 * zero e a margem fica exatamente a de antes.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav" | "main";
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1680px] px-[max(1.25rem,env(safe-area-inset-left),env(safe-area-inset-right))] md:px-[max(2rem,env(safe-area-inset-left),env(safe-area-inset-right))] lg:px-[max(2.5rem,env(safe-area-inset-left),env(safe-area-inset-right))]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
