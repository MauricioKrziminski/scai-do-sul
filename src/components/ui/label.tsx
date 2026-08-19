import { cn } from "@/lib/cn";

/** Rotulo tecnico em mono, caixa alta. Todo o tracking do site vive aqui. */
export function Label({
  children,
  className,
  inverted = false,
}: {
  children: React.ReactNode;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span
      className={cn(
        "label-tech block",
        inverted ? "text-paper" : "text-steel",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Rotulo a esquerda, fio de cabelo preenchendo o resto da largura. */
export function LabelRule({
  children,
  className,
  inverted = false,
}: {
  children: React.ReactNode;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      <Label inverted={inverted}>{children}</Label>
      <span
        role="presentation"
        className={cn("h-px flex-1", inverted ? "bg-rule-inv" : "bg-rule")}
      />
    </div>
  );
}
