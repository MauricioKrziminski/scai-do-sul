import { cn } from "@/lib/cn";

/**
 * Índice numerado percorrendo a sequência de compra. É o device industrial mais
 * repetido nas referências, e o mais barato de implementar: o número faz o
 * trabalho que uma animação faria.
 */
const ETAPAS = [
  {
    indice: "01",
    titulo: "Você traz o pedido",
    texto:
      "Pode ser a lista da obra, o memorial descritivo, a foto da peça que quebrou ou só a descrição do problema. Não precisa saber o código do produto.",
  },
  {
    indice: "02",
    titulo: "A gente confere a especificação",
    texto:
      "Diâmetro, classe de pressão, material de corpo e de vedação, padrão de furação do flange. É aqui que erro de projeto aparece, antes de virar material errado na obra.",
  },
  {
    indice: "03",
    titulo: "Orçamento com prazo real",
    texto:
      "O que está em estoque sai de imediato. O que precisa vir do fabricante vai com o prazo informado antes, não depois do pedido fechado.",
  },
  {
    indice: "04",
    titulo: "Entrega em todo o Brasil",
    texto:
      "Retirada no balcão em Porto Alegre ou envio para qualquer estado. Nota, rastreio e acompanhamento até a chegada.",
  },
];

export function Processo({ inverted = false }: { inverted?: boolean }) {
  return (
    <ol
      className={cn(
        "grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4",
        inverted ? "bg-rule-inv" : "bg-rule",
      )}
    >
      {ETAPAS.map((etapa) => (
        <li
          key={etapa.indice}
          className={cn("flex flex-col gap-7 p-8 md:p-9", inverted ? "bg-ink" : "bg-paper")}
        >
          <span
            className={cn(
              "font-display condensed text-[3.5rem] leading-none font-bold",
              inverted ? "text-brand" : "text-brand-deep",
            )}
          >
            {etapa.indice}
          </span>
          <div>
            <h3 className="font-display semi-expanded text-h5 font-bold uppercase">
              {etapa.titulo}
            </h3>
            <p
              className={cn(
                "text-body-sm mt-4 max-w-[38ch]",
                inverted ? "text-paper/65" : "text-steel",
              )}
            >
              {etapa.texto}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
