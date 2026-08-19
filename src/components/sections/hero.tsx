import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MidiaFundo } from "@/components/ui/midia-fundo";
import { TiraDados } from "./faixa-hero";
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
export function Hero({ src }: { src?: string }) {
  return (
    <section
      className="bg-ink text-paper relative isolate overflow-hidden"
      data-foto={src ? undefined : "Estoque, corredor de prateleiras"}
    >
      <MidiaFundo src={src} priority />

      <Container>
        {/* Altura descontando o cabecalho (5rem) e a tira de dados (~6.5rem),
            para a tira encostar no fim da tela em vez de cair abaixo da dobra.
            Os rotulos ficam no topo e o bloco principal centraliza no que
            sobra, senao o titulo parece ter escorregado para o rodape. */}
        <div className="flex min-h-[calc(100svh-11.5rem)] flex-col py-12 md:py-14">
          <div className="grid shrink-0 grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 md:col-span-6">
              <Label inverted>
                {site.razaoSocial} · Porto Alegre RS · Desde {site.fundacao}
              </Label>
            </div>
            <div className="col-span-12 flex flex-col gap-2.5 md:col-span-4 md:col-start-9 md:items-end">
              <Label inverted>Distribuidora técnica</Label>
              <Label inverted>Linha própria SCAI</Label>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-12 items-center gap-x-6 gap-y-12 py-16">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="font-display expanded text-display font-bold uppercase">
                Válvulas
                <br />e conexões
                <br />
                <span className="text-brand">industriais</span>
              </h1>
            </div>

            <div className="col-span-12 flex flex-col justify-center gap-9 lg:col-span-4">
              <p className="text-lead max-w-[42ch] text-paper/75">
                {anosDeCasa} anos abastecendo indústria e saneamento em todo o Brasil.
                Especificação conferida antes do orçamento, para o material chegar
                certo na primeira vez.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/produtos" variant="inverted">
                  Ver linhas de produto
                </Button>
                <Button href={orcamentoWhatsapp()} variant="ghostInverted" arrow={false}>
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
