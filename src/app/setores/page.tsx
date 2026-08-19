import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { Figure } from "@/components/ui/figure";
import { Ticker } from "@/components/ui/ticker";
import { CtaOrcamento } from "@/components/sections/cta-orcamento";
import { setores } from "@/content/setores";
import { produtos } from "@/content/produtos";

export const metadata: Metadata = {
  title: "Setores atendidos",
  description:
    "Siderurgia, metalurgia, química, petroquímica, refinarias, usinas, alimentícia e saneamento. Válvulas e conexões especificadas para cada tipo de planta.",
  alternates: { canonical: "/setores" },
  openGraph: { url: "/setores" },
};

/** Liga o nome da linha citada no setor à página real do produto. */
function linkDaLinha(nome: string) {
  const produto = produtos.find((p) =>
    p.nome.toLowerCase().startsWith(nome.toLowerCase().slice(0, 14)),
  );
  return produto ? `/produtos/${produto.slug}` : "/produtos";
}

export default function SetoresPage() {
  return (
    <>
      <section className="bg-ink text-paper relative isolate overflow-hidden">
        <div className="blueprint absolute inset-0 -z-10" />
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-section-lg">
            <div className="col-span-12 md:col-span-3">
              <Label inverted>Setores · {setores.length} mercados</Label>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="font-display expanded text-h1 font-bold uppercase">
                Onde nosso
                <br />
                material <span className="text-molten-2">trabalha</span>
              </h1>
              <p className="text-lead mt-9 max-w-[54ch] text-paper/70">
                Cada planta tem uma exigência diferente. O que resolve numa
                linha de água bruta não serve numa linha de produto químico, e o
                que passa na vistoria do Corpo de Bombeiros não é o mesmo que
                passa numa auditoria sanitária. É isso que a especificação
                define.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Ticker
        items={[
          "Siderurgia",
          "Metalurgia",
          "Química",
          "Petroquímica",
          "Refinarias",
          "Usinas",
          "Alimentícia",
          "Saneamento",
        ]}
      />

      <section className="py-section">
        <Container>
          <ul className="bg-rule grid grid-cols-1 gap-px">
            {setores.map((setor, i) => (
              <li key={setor.slug} className="bg-paper">
                <div className="grid grid-cols-12 gap-x-6 gap-y-6 py-12">
                  <div className="col-span-12 flex items-baseline gap-4 md:col-span-3">
                    <span className="label-tech text-molten">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display semi-expanded text-h4 font-bold uppercase">
                      {setor.nome}
                    </h2>
                  </div>

                  <p className="text-body text-steel col-span-12 max-w-[58ch] md:col-span-5">
                    {setor.descricao}
                  </p>

                  <div className="col-span-12 md:col-span-3 md:col-start-10">
                    <Label>Linhas que mais saem</Label>
                    <ul className="mt-5 space-y-2.5">
                      {setor.linhas.map((linha) => (
                        <li key={linha}>
                          <Link
                            href={linkDaLinha(linha)}
                            className="text-body-sm hover:text-molten text-ink transition-none"
                          >
                            {linha}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section
        index="01"
        label="Não achou o seu?"
        title="A lista não é fechada"
        intro="Estes são os mercados em que mais atuamos, mas válvula e conexão atravessam praticamente toda a indústria. Se a sua planta não está aqui, descreva a aplicação e a gente diz o que serve."
      >
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-6">
            <Figure
              ratio="16/9"
              alt="Tubulação industrial"
              label="Planta industrial · tubulação com válvulas"
              caption="Aplicação em campo"
            />
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:self-end">
            <Figure
              ratio="4/3"
              alt="Estação de tratamento"
              label="Estação de tratamento · barrilete"
              caption="Saneamento"
            />
          </div>
        </div>
      </Section>

      <CtaOrcamento
        titulo="Conte qual é a sua aplicação"
        texto="Fluido, temperatura, pressão de trabalho e diâmetro da linha. Com esses quatro dados a gente já consegue especificar. Se não tiver todos, mande o que tem."
      />
    </>
  );
}
