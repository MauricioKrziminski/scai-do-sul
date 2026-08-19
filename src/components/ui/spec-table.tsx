import { cn } from "@/lib/cn";

/**
 * A tabela de especificacao e o motor de credibilidade de um site industrial.
 * Unidade no cabecalho, algarismo puro na celula. Numero a direita, texto a
 * esquerda, regua dupla no topo, fio entre linhas, nenhuma regua vertical e
 * nenhuma listra zebrada. E assim que uma tabela de catalogo impresso se ve.
 */
export function SpecTable({
  caption,
  columns,
  rows,
  className,
}: {
  caption?: string;
  /** Unidade vai no cabecalho, nunca na celula. */
  columns: string[];
  rows: string[][];
  className?: string;
}) {
  return (
    <table className={cn("w-full border-collapse text-body-sm", className)}>
      {caption ? (
        <caption className="label-tech pb-4 text-left text-steel">
          {caption}
        </caption>
      ) : null}
      <thead>
        <tr className="border-y border-ink">
          {columns.map((col, i) => (
            <th
              key={col}
              scope="col"
              className={cn(
                "label-tech py-3.5 font-normal text-ink",
                i === 0 ? "text-left" : "text-right",
              )}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, r) => (
          <tr key={r} className="border-b border-rule">
            {row.map((cell, c) => (
              <td
                key={c}
                className={cn(
                  "py-4 align-baseline tabular-nums",
                  c === 0
                    ? "pr-6 text-left font-medium text-ink"
                    : "text-right text-steel",
                )}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Par rotulo e valor. Para blocos de capacidade e ficha resumida. */
export function SpecList({
  items,
  className,
  inverted = false,
}: {
  items: { label: string; value: string }[];
  className?: string;
  inverted?: boolean;
}) {
  return (
    <dl className={cn("grid gap-px bg-rule", className)}>
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            "flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5",
            inverted ? "bg-ink" : "bg-paper",
          )}
        >
          <dt
            className={cn(
              "label-tech",
              inverted ? "text-paper/50" : "text-steel",
            )}
          >
            {item.label}
          </dt>
          <dd
            className={cn(
              "font-display semi-expanded text-body-sm font-semibold tabular-nums",
              inverted ? "text-paper" : "text-ink",
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
