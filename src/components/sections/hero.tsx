import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MidiaFundo } from "@/components/ui/midia-fundo";
import { TiraDados, alturaDaFaixa } from "./faixa-hero";
import { site, anosDeCasa } from "@/content/site";
import { orcamentoWhatsapp } from "@/lib/whatsapp";

/**
 * A primeira tela diz o que a empresa vende, em tipo grande e sem ambiguidade.
 * É o que separa os melhores sites industriais dos genéricos: o comprador não
 * deveria precisar navegar para descobrir se você trabalha com o item dele.
 *
 * Faixa escura sangrando de ponta a ponta. Enquanto a foto real não chega,
 * entra a grade de projeto. Ver docs/lista-de-fotos.md, item 02.
 */
export function Hero({
  src = "/img/temp/faixa-estoque.jpg",
}: {
  src?: string;
}) {
  return (
    <section
      className="bg-ink text-paper relative isolate flex flex-col overflow-hidden"
      style={{ minHeight: alturaDaFaixa(false) }}
      data-foto={src ? undefined : "Estoque, corredor de prateleiras"}
    >
      <MidiaFundo src={src} priority />

      {/* Mesma mecanica das faixas das paginas internas: a secao recebe a
          altura alvo e esta area absorve o que sobra depois da tira de dados.
          Os rotulos ficam no topo e o bloco principal centraliza no que sobra,
          senao o titulo parece escorregar para o rodape. */}
      <Container className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col py-8 md:py-10 lg:py-12 [@media(max-height:780px)]:py-4 [@media(max-height:900px)]:py-8">
          <div className="grid shrink-0 grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 md:col-span-6">
              <Label inverted className="md:hidden">
                Porto Alegre RS · Desde {site.fundacao}
              </Label>
              <Label inverted className="hidden md:block">
                {site.razaoSocial} · Porto Alegre RS · Desde {site.fundacao}
              </Label>
            </div>
            <div className="col-span-12 hidden flex-col gap-2.5 md:col-span-4 md:col-start-9 md:flex md:items-end">
              <Label inverted>Distribuidora técnica</Label>
              <Label inverted>Linha própria SCAI</Label>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-12 items-center gap-x-6 gap-y-8 py-6 md:gap-y-10 md:py-7 lg:gap-y-12 lg:py-10 [@media(max-height:780px)]:gap-y-6 [@media(max-height:780px)]:py-2">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="font-display expanded text-display font-bold uppercase">
                Válvulas
                <br />e conexões
                <br />
                industriais
              </h1>
            </div>

            <div className="col-span-12 flex flex-col justify-center gap-6 md:gap-9 lg:col-span-4">
              <p className="text-body sm:text-body-lg md:text-lead max-w-[42ch] text-paper">
                {anosDeCasa} anos abastecendo indústria e saneamento em todo o
                Brasil. Especificação conferida antes do orçamento, para o
                material chegar certo na primeira vez.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/produtos" variant="inverted">
                  Ver linhas de produto
                </Button>
                <Button
                  href={orcamentoWhatsapp()}
                  variant="ghostInverted"
                  arrow={false}
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Tira de especificação no rodapé do hero. Dado técnico logo na entrada
          vale mais que qualquer frase de efeito. */}
      <div className="border-rule-inv border-t">
        <Container>
          <TiraDados
            itens={[
              { label: "Diâmetro", value: "DN 15 a 600" },
              { label: "Classes", value: "PN 10 a PN 40" },
              { label: "Padrões", value: "ABNT e ANSI" },
              { label: "Entrega", value: "Todo o Brasil" },
            ]}
          />
        </Container>
      </div>
    </section>
  );
}
