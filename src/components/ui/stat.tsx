import { cn } from "@/lib/cn";

/** Parede de numerais. Algarismo gigante em cima, rotulo mono embaixo. */
export function Stat({
  value,
  suffix,
  label,
  note,
  inverted = false,
  className,
}: {
  value: string;
  suffix?: string;
  label: string;
  note?: string;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col justify-between gap-8 py-10", className)}>
      <p className="font-display condensed text-numeral font-bold tabular-nums">
        {value}
        {suffix && (
          <span
            className={cn(
              "ml-[0.12em] align-baseline text-[0.34em] tracking-tight uppercase",
              inverted ? "text-brand" : "text-brand-deep",
            )}
          >
            {suffix}
          </span>
        )}
      </p>
      <div>
        <p
          className={cn(
            "label-tech",
            inverted ? "text-paper/70" : "text-steel",
          )}
        >
          {label}
        </p>
        {note && (
          <p
            className={cn(
              "mt-3 max-w-[26ch] text-body-sm",
              inverted ? "text-paper/60" : "text-steel",
            )}
          >
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
