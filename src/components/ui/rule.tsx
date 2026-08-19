import { cn } from "@/lib/cn";

/** Fio de cabelo. Substitui sombra em todo o projeto. */
export function Rule({
  className,
  strong = false,
  inverted = false,
}: {
  className?: string;
  strong?: boolean;
  inverted?: boolean;
}) {
  return (
    <div
      role="presentation"
      className={cn(
        "h-px w-full",
        inverted
          ? strong
            ? "bg-rule-inv-strong"
            : "bg-rule-inv"
          : strong
            ? "bg-rule-strong"
            : "bg-rule",
        className,
      )}
    />
  );
}
