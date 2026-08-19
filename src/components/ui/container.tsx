import { cn } from "@/lib/cn";

/**
 * Margem de pagina pequena e teto muito alto. A imagem sangra de ponta a ponta
 * e o texto fica dentro. Esse descasamento e o que faz o layout ler editorial.
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
    <Tag className={cn("mx-auto w-full max-w-[1680px] px-5 md:px-8 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
