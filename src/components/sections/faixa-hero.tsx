import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/label";
import { MidiaFundo } from "@/components/ui/midia-fundo";
import { cn } from "@/lib/cn";

/**
 * Cabeçalho escuro das páginas internas.
 *
 * Aceita foto de fundo pelo mesmo caminho do hero da home. Enquanto a imagem
 * não chega, mostra a grade de projeto, que no site inteiro significa uma
 * coisa só: foto pendente.
 *
 * Divisão 3/9 igual ao resto do site: coluna estreita com rótulo ou numeral,
 * coluna larga com título e texto.
 */
export function FaixaHero({
  src,
  fotoLabel,
  rotulo,
  numeral,
  titulo,
  texto,
  acoes,
  trilha,
  rodape,
  alto = false,
}: {
  /** Foto de fundo. Ausente ativa a grade de projeto. */
  src?: string;
  /** Descreve a foto que entra aqui. Vai para docs/lista-de-fotos.md */
  fotoLabel: string;
  rotulo?: string;
  /** Numeral grande na coluna estreita, no lugar do rótulo. */
  numeral?: string;
  titulo: React.ReactNode;
  texto?: React.ReactNode;
  acoes?: React.ReactNode;
  /** Barra fina acima do conteúdo, para trilha de navegação. */
  trilha?: React.ReactNode;
  /** Tira de dados no rodapé da faixa. */
  rodape?: React.ReactNode;
  alto?: boolean;
}) {
  return (
    <section
      className="bg-ink text-paper relative isolate overflow-hidden"
      data-foto={src ? undefined : fotoLabel}
    >
      <MidiaFundo src={src} priority />

      {trilha && (
        <Container>
          <div className="border-rule-inv border-b">{trilha}</div>
        </Container>
      )}

      <Container>
        <div
          className={cn(
            "grid grid-cols-12 gap-x-6 gap-y-10",
            alto ? "py-section-lg" : "py-section",
          )}
        >
          <div className="col-span-12 md:col-span-3">
            {numeral ? (
              <span className="font-display condensed text-numeral text-brand block leading-none font-bold">
                {numeral}
              </span>
            ) : rotulo ? (
              <Label inverted>{rotulo}</Label>
            ) : null}
          </div>

          <div className="col-span-12 md:col-span-8 md:col-start-5">
            {numeral && rotulo && (
              <Label inverted className="mb-7">
                {rotulo}
              </Label>
            )}
            <h1 className="font-display expanded text-h1 font-bold uppercase">{titulo}</h1>
            {texto && (
              <div className="text-lead mt-8 max-w-[54ch] text-paper/70">{texto}</div>
            )}
            {acoes && <div className="mt-11 flex flex-wrap gap-3">{acoes}</div>}
          </div>
        </div>
      </Container>

      {rodape && (
        <div className="border-rule-inv border-t">
          <Container>{rodape}</Container>
        </div>
      )}
    </section>
  );
}

/**
 * Tira de dados do rodapé da faixa. Rótulo mono em cima, valor em display
 * embaixo. Dado técnico logo na entrada vale mais que frase de efeito.
 */
export function TiraDados({ itens }: { itens: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-2 md:grid-cols-4">
      {itens.map((item, i) => (
        <div
          key={item.label}
          className={cn(
            "border-rule-inv py-7",
            i % 2 === 1 && "border-l pl-6",
            i >= 2 && "border-t md:border-t-0",
            i === 2 && "md:border-l md:pl-6",
            i === 3 && "md:pl-6",
          )}
        >
          <dt className="label-tech text-paper/55">{item.label}</dt>
          <dd className="font-display semi-expanded text-h5 mt-3 font-bold uppercase">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
