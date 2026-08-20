import { cn } from "@/lib/cn";
import { Container } from "./container";
import { Label } from "./label";

/**
 * Bloco de secao padrao. Divisao assimetrica 3/9: a coluna estreita carrega o
 * indice e o rotulo, a larga carrega o titulo e o texto. Nunca 50/50.
 * A regua sangra de ponta a ponta enquanto o conteudo fica dentro da margem.
 *
 * A acao fica DEPOIS do conteudo, nao junto do titulo. "Ver todas as linhas"
 * antes de mostrar as linhas nao faz sentido: o botao e a saida da secao, e
 * so faz sentido depois que a pessoa viu o que tem ali.
 *
 * E fica ancorada num fio de cabelo, com um dado a esquerda, formando um
 * rodape de secao. Solto no meio do vazio o botao parecia esquecido ali; a
 * regua da a ele uma linha de base e o rotulo da a ele companhia. E a mesma
 * logica de LabelRule, que o site ja usa para dar estrutura a um rotulo.
 */
export function Section({
  index,
  label,
  title,
  intro,
  action,
  actionLabel,
  children,
  inverted = false,
  bleed = false,
  className,
  id,
}: {
  /** Indice numerado. O device de identidade mais barato e mais forte do site. */
  index?: string;
  label?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  action?: React.ReactNode;
  /** Dado curto que acompanha a acao no rodape da secao. */
  actionLabel?: string;
  children?: React.ReactNode;
  inverted?: boolean;
  /** Remove o container interno para o conteudo sangrar. */
  bleed?: boolean;
  className?: string;
  id?: string;
}) {
  const hasHeader = Boolean(index || label || title || intro);

  return (
    <section
      id={id}
      className={cn(
        "relative border-t py-section",
        inverted
          ? "border-rule-inv bg-ink text-paper"
          : "border-rule bg-paper text-ink",
        className,
      )}
    >
      <Container>
        {hasHeader && (
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 md:col-span-3">
              {(index || label) && (
                <div className="flex items-baseline gap-3">
                  {index && (
                    <span
                      className={cn(
                        "label-tech",
                        inverted ? "text-brand" : "text-brand-deep",
                      )}
                    >
                      {index}
                    </span>
                  )}
                  {label && <Label inverted={inverted}>{label}</Label>}
                </div>
              )}
            </div>

            <div className="col-span-12 md:col-span-8 md:col-start-5">
              {title && (
                <h2 className="font-display expanded text-h2 uppercase">
                  {title}
                </h2>
              )}
              {intro && (
                <div
                  className={cn(
                    "mt-7 max-w-[52ch] text-body-lg",
                    inverted ? "text-paper/70" : "text-steel",
                  )}
                >
                  {intro}
                </div>
              )}
            </div>
          </div>
        )}
      </Container>

      {children &&
        (bleed ? (
          <div className={cn(hasHeader && "mt-16 md:mt-24")}>{children}</div>
        ) : (
          <Container className={cn(hasHeader && "mt-16 md:mt-24")}>
            {children}
          </Container>
        ))}

      {action && (
        <Container className={cn(children || hasHeader ? "mt-14" : undefined)}>
          <div
            className={cn(
              "flex flex-wrap items-center justify-between gap-x-8 gap-y-6 border-t pt-8",
              inverted ? "border-rule-inv" : "border-rule",
            )}
          >
            {actionLabel ? (
              <Label inverted={inverted}>{actionLabel}</Label>
            ) : (
              <span aria-hidden />
            )}
            {action}
          </div>
        </Container>
      )}
    </section>
  );
}
