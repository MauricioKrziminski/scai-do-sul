import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { site, anosDeCasa } from "@/content/site";
import { orcamentoWhatsapp } from "@/lib/whatsapp";

/**
 * A primeira tela diz o que a empresa vende, em tipo grande e sem ambiguidade.
 * É o que separa os melhores sites industriais dos genéricos: o comprador não
 * deveria precisar navegar para descobrir se você trabalha com o item dele.
 *
 * Faixa escura sangrando de ponta a ponta. Enquanto a foto real não chega, o
 * fundo é a grade de projeto do design system, que já lê como técnico.
 */
export function Hero({ src }: { src?: string }) {
  return (
    <section className="bg-ink text-paper relative isolate overflow-hidden">
      {src ? (
        <>
          <Image
            src={src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="duotone absolute inset-0 -z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(16,13,10,0.92)_0%,rgba(16,13,10,0.55)_50%,rgba(16,13,10,0.35)_100%)]" />
        </>
      ) : (
        <>
          <div className="blueprint absolute inset-0 -z-20" />
          <div className="hatch absolute inset-0 -z-10 opacity-50" />
        </>
      )}

      <Container>
        <div className="flex min-h-[calc(100svh-5rem)] flex-col justify-between gap-16 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
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

          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="font-display expanded text-display font-bold uppercase">
                Válvulas
                <br />e conexões
                <br />
                <span className="text-brand">industriais</span>
              </h1>
            </div>

            <div className="col-span-12 flex flex-col justify-end gap-9 lg:col-span-4">
              <p className="text-lead max-w-[42ch] text-paper/75">
                {anosDeCasa} anos abastecendo indústria e saneamento em todo o Brasil.
                Especificação conferida antes do orçamento, para o material chegar
                certo na primeira vez.
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
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: "Diâmetro", value: "DN 15 a 600" },
              { label: "Classes", value: "PN 10 a PN 40" },
              { label: "Padrões", value: "ABNT e ANSI" },
              { label: "Entrega", value: "Todo o Brasil" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={
                  "border-rule-inv py-7 " +
                  (i % 2 === 1 ? "border-l pl-6 " : "") +
                  (i >= 2 ? "border-t md:border-t-0 " : "") +
                  (i === 2 ? "md:border-l md:pl-6 " : "") +
                  (i === 3 ? "md:pl-6 " : "")
                }
              >
                <dt className="label-tech text-paper/55">{item.label}</dt>
                <dd className="font-display semi-expanded mt-3 text-h5 font-bold uppercase">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
