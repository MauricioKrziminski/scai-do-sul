import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { Figure } from "@/components/ui/figure";
import { SpecList } from "@/components/ui/spec-table";
import { MapaGoogle } from "@/components/ui/mapa-google";
import { Stat } from "@/components/ui/stat";
import { Marcas } from "@/components/sections/marcas";
import { CtaOrcamento } from "@/components/sections/cta-orcamento";
import { site, anosDeCasa, enderecoLinha } from "@/content/site";
import { produtos } from "@/content/produtos";
import { marcas } from "@/content/marcas";
import { FaixaHero } from "@/components/sections/faixa-hero";

export const metadata: Metadata = {
  title: "A empresa",
  description: `Distribuidora técnica de válvulas e conexões em Porto Alegre desde 1975. ${anosDeCasa} anos no mesmo endereço, atendendo indústria e saneamento em todo o Brasil.`,
  alternates: { canonical: "/empresa" },
  openGraph: { url: "/empresa" },
};

/** Os quatro pilares. Substituem a lista genérica de "nossos diferenciais". */
const PILARES = [
  {
    indice: "01",
    titulo: "Especificação conferida",
    texto:
      "Antes de fechar, conferimos diâmetro, classe de pressão, material de corpo e de vedação e padrão de furação. Erro de especificação é o que mais custa caro numa obra, e é mais barato corrigir no papel.",
  },
  {
    indice: "02",
    titulo: "Procedência de marca",
    texto:
      "Trabalhamos marcas que a indústria já conhece e reconhece na hora da vistoria. Peça sem origem clara é a que falha primeiro, e em linha de processo a falha custa muito mais que a economia do pedido.",
  },
  {
    indice: "03",
    titulo: "Estoque de verdade",
    texto:
      "As bitolas de giro ficam na prateleira, não no catálogo do fornecedor. O que precisa vir de fábrica sai com o prazo informado antes do pedido fechado, não depois.",
  },
  {
    indice: "04",
    titulo: "Linha própria SCAI",
    texto:
      "Além das marcas representadas, mantemos linha própria. É o que permite atender pedido que fabricante grande não prioriza e resolver reposição de item fora de catálogo.",
  },
];

export default function EmpresaPage() {
  return (
    <>
      <FaixaHero
        src="/img/scai-sul-local2.jpg"
        fotoLabel="Fachada, Av. Cairú 525"
        rotulo={`A empresa · desde ${site.fundacao}`}
        titulo={
          <>
            Meio século
            <br />
            na Avenida <span>Cairú</span>
          </>
        }
        texto={`A Scai do Sul abriu as portas em 2 de janeiro de ${site.fundacao} e nunca mudou de endereço. São ${anosDeCasa} anos no mercado de válvulas e conexões, atendendo a indústria gaúcha e enviando material para todo o Brasil.`}
      />

      {/* Lado a lado só a partir de lg. Em tablet as duas colunas ficam
          estreitas demais e o texto quebra em linhas curtas, então ali empilha
          igual ao celular.

          No empilhado a foto vai por último, e por isso ela vem depois no
          código também: a ordem do DOM é a ordem de leitura, e o texto é que
          responde "quem somos". Em lg a foto volta para a esquerda por
          posicionamento de grade (`lg:row-start-1`), sem inverter a ordem de
          leitura para quem usa leitor de tela.

          O recorte em 16/9 tira céu e muro vazio, que é o que sobra na foto
          original em 4/3, e devolve presença para a placa. */}
      <section className="border-rule py-section border-t">
        <Container>
          <div className="grid grid-cols-12 items-center gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="flex items-baseline gap-3">
                <span className="label-tech text-brand-deep">01</span>
                <Label>Quem somos</Label>
              </div>

              <h2 className="font-display expanded text-h2 mt-7 uppercase">
                Distribuidora técnica, não loja de catálogo
              </h2>

              <div className="text-body-lg text-steel mt-8 max-w-[52ch]">
                <p>
                  A diferença aparece no atendimento. Loja de catálogo vende o
                  que está na tabela. Distribuidora técnica entende o que a sua
                  linha precisa, confere a especificação e só então cota.
                </p>
                <p className="mt-6">
                  Nas nossas palavras desde sempre: temos longa tradição no
                  comércio de materiais industriais, atendendo às necessidades
                  de diferentes tipos de indústria, com compromisso na
                  satisfação do cliente e respeito aos prazos acordados.
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:col-start-1 lg:row-start-1">
              <Figure
                ratio="16/9"
                alt="Placa da Metalúrgica Scai do Sul na Avenida Cairú, com as marcas representadas"
                src="/img/scai-sul-local.jpg"
                posicao="50% 38%"
                sizes="(max-width: 1024px) 100vw, 42vw"
                label="Fachada · Av. Cairú, 525"
                caption={`${site.contato.endereco.bairro}, ${site.contato.endereco.cidade} ${site.contato.endereco.uf}`}
              />
            </div>
          </div>
        </Container>
      </section>

      <Section
        index="02"
        label="Como trabalhamos"
        title="Quatro coisas que fazemos diferente"
        intro="Não são slogans. São as quatro decisões operacionais que definem como o pedido é tratado aqui."
        bleed
      >
        <Container>
          <div className="bg-rule grid grid-cols-1 gap-px md:grid-cols-2">
            {PILARES.map((pilar) => (
              <div
                key={pilar.indice}
                className="bg-paper flex flex-col gap-7 p-9 md:p-11"
              >
                <span className="font-display condensed text-brand-deep text-[3.5rem] leading-none font-bold">
                  {pilar.indice}
                </span>
                <div>
                  <h3 className="font-display semi-expanded text-h4 font-bold uppercase">
                    {pilar.titulo}
                  </h3>
                  <p className="text-body text-steel mt-5 max-w-[44ch]">
                    {pilar.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section inverted className="py-section-lg">
        <div className="bg-rule-inv grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4">
          <Stat
            inverted
            value={String(anosDeCasa)}
            suffix=" anos"
            label="De mercado"
            note={`Aberta em 2 de janeiro de ${site.fundacao}.`}
            className="bg-ink px-1"
          />
          <Stat
            inverted
            value="1"
            label="Endereço, desde o início"
            note="Av. Cairú, Navegantes, Porto Alegre."
            className="bg-ink px-1"
          />
          <Stat
            inverted
            value={String(produtos.length)}
            label="Linhas de produto"
            note="Da válvula de saneamento ao equipamento de incêndio."
            className="bg-ink px-1"
          />
          <Stat
            inverted
            value={String(marcas.length)}
            label="Marcas representadas"
            note="Mais a linha própria SCAI."
            className="bg-ink px-1"
          />
        </div>
      </Section>

      <Section
        index="03"
        label="Marcas"
        title="O que colocamos o nome junto"
        intro="Representar uma marca é assumir a responsabilidade por ela no pós-venda. Por isso a lista é curta e não muda toda hora."
      >
        <Marcas />
      </Section>

      {/* Dados cadastrais à mostra. Padrão de credibilidade industrial: vale
          mais que qualquer selo genérico. */}
      <Section
        index="04"
        label="Dados cadastrais"
        title="Tudo à mostra"
        intro="Se você precisa cadastrar a Scai do Sul como fornecedor, os dados estão aqui. Documentação fiscal completa sai junto com o orçamento."
      >
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-7">
            <SpecList
              items={[
                { label: "Razão social", value: site.razaoSocial },
                { label: "CNPJ", value: site.cnpj },
                {
                  label: "Fundação",
                  value: `02 de janeiro de ${site.fundacao}`,
                },
                {
                  label: "Cidade",
                  value: `${site.contato.endereco.cidade} ${site.contato.endereco.uf}`,
                },
                { label: "Telefone", value: site.contato.telefone },
              ]}
            />
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <Label>Endereço</Label>
            <p className="text-body-lg mt-6 max-w-[28ch]">{enderecoLinha}</p>
            <MapaGoogle ratio="4/3" className="mt-7" />
          </div>
        </div>
      </Section>

      <CtaOrcamento />
    </>
  );
}
