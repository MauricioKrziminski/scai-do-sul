import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/label";
import { MidiaFundo } from "@/components/ui/midia-fundo";
import { cn } from "@/lib/cn";

/**
 * Alturas de elementos que ficam FORA da faixa e precisam caber na mesma tela.
 * Medidas no navegador, não estimadas.
 *
 * Só entram aqui as externas. O que a faixa renderiza por dentro (trilha e
 * tira de dados) não é descontado por número fixo: a altura real deles muda
 * com a largura da tela, porque o texto quebra em mais linhas. A tira de
 * dados, por exemplo, mede 83px em 390, 128px em 768 e 104px em 1440. Um
 * único valor fixo erraria em todas menos uma.
 *
 * Quem resolve isso é o flexbox: a seção recebe a altura alvo, a trilha e a
 * tira ficam com o tamanho natural, e a área de conteúdo absorve o resto.
 */
const ALTURA = {
  cabecalho: 5.0625, // header h-20 mais 1px de fio
  ticker: 2.5625, // faixa de tags, quando existir logo abaixo
} as const;

/**
 * Altura alvo da faixa: a tela menos o que vem antes e depois dela.
 *
 * Hoje nenhuma página tem faixa de tags abaixo do hero, então `temTicker` é
 * sempre falso. O parâmetro fica porque a regra continua valendo: se alguém
 * colocar qualquer coisa logo abaixo da faixa e não declarar aqui, o hero
 * empurra esse elemento para fora da primeira tela sem avisar.
 */
export function alturaDaFaixa(temTicker: boolean) {
  // svh e não vh de propósito: no celular a barra do navegador entra e sai,
  // e vh mede a altura sem a barra, o que corta o pé da faixa.
  return `calc(100svh - ${ALTURA.cabecalho + (temTicker ? ALTURA.ticker : 0)}rem)`;
}

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
  temTicker = false,
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
  /** Marque se voltar a existir algo logo depois da faixa, para caber junto. */
  temTicker?: boolean;
}) {
  return (
    <section
      className="bg-ink text-paper relative isolate flex flex-col overflow-hidden"
      style={{ minHeight: alturaDaFaixa(temTicker) }}
      data-foto={src ? undefined : fotoLabel}
    >
      <MidiaFundo src={src} priority />

      {trilha && (
        <Container>
          <div className="border-rule-inv border-b">{trilha}</div>
        </Container>
      )}

      {/* flex-1: esta area absorve o que sobrar depois da trilha e da tira,
          entao a secao fecha exatamente na altura alvo sem depender de eu
          adivinhar quanto elas medem. */}
      <Container className="flex flex-1 flex-col justify-center">
        <div className="py-10 md:py-12 lg:py-16 [@media(max-height:780px)]:py-4 [@media(max-height:900px)]:py-8">
          <div className="grid grid-cols-12 gap-x-6 gap-y-6 md:gap-y-10">
            <div className="col-span-12 md:col-span-3">
              {numeral ? (
                <span className="font-display condensed text-brand block text-[3.5rem] leading-none font-bold md:text-numeral">
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
              <h1 className="font-display expanded text-h1 font-bold uppercase">
                {titulo}
              </h1>
              {texto && (
                <div className="text-lead mt-8 max-w-[54ch] text-paper">
                  {texto}
                </div>
              )}
              {acoes && (
                <div className="mt-11 flex flex-wrap gap-3">{acoes}</div>
              )}
            </div>
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
export function TiraDados({
  itens,
}: {
  itens: { label: string; value: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 md:grid-cols-4">
      {itens.map((item, i) => (
        <div
          key={item.label}
          className={cn(
            "border-rule-inv py-4 md:py-7",
            i % 2 === 1 && "border-l pl-6",
            // no celular so os dois primeiros aparecem: a fila dupla custa
            // uma tela inteira de altura e dois dados ja cumprem o papel
            i >= 2 && "hidden md:block",
            i === 2 && "md:border-l md:pl-6",
            i === 3 && "md:pl-6",
          )}
        >
          <dt className="label-tech text-paper/70">{item.label}</dt>
          <dd className="font-display semi-expanded text-body-lg mt-2.5 font-bold uppercase md:mt-3 md:text-h5">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
