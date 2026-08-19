import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Sem transicao. Num site sem animacao, estado instantaneo le como deliberado,
 * desde que seja consistente em todo lugar. A borda transparente reservada
 * evita o pulo de caixa no hover.
 */
const VARIANTS = {
  solid:
    "bg-ink text-paper border-ink hover:bg-brand-deep hover:border-brand-deep",
  outline:
    "border-ink/25 text-ink hover:bg-ink hover:text-paper hover:border-ink",
  inverted:
    "bg-paper text-ink border-paper hover:bg-brand-deep hover:text-paper hover:border-brand-deep",
  ghostInverted:
    "border-paper/25 text-paper hover:bg-paper hover:text-ink hover:border-paper",
} as const;

export function Button({
  href,
  children,
  variant = "solid",
  arrow = true,
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  arrow?: boolean;
  className?: string;
} & Omit<
  React.ComponentProps<typeof Link>,
  "href" | "className" | "children"
>) {
  const external =
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");
  const classes = cn(
    "label-tech group inline-flex items-center gap-3 border px-6 py-4 transition-none",
    VARIANTS[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-3.5 shrink-0"
          strokeWidth={2.25}
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
