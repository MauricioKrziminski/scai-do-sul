import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label, LabelRule } from "@/components/ui/label";
import { Rule } from "@/components/ui/rule";
import { Figure } from "@/components/ui/figure";
import { SpecTable, SpecList } from "@/components/ui/spec-table";
import { Button } from "@/components/ui/button";
import { Ticker } from "@/components/ui/ticker";
import { Stat } from "@/components/ui/stat";

export const metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

const SWATCHES = [
  ["paper", "bg-paper"],
  ["paper-2", "bg-paper-2"],
  ["paper-3", "bg-paper-3"],
  ["ink", "bg-ink"],
  ["ink-2", "bg-ink-2"],
  ["ink-3", "bg-ink-3"],
  ["steel", "bg-steel"],
  ["steel-2", "bg-steel-2"],
  ["steel-3", "bg-steel-3"],
  ["brand", "bg-brand"],
  ["brand-deep", "bg-brand-deep"],
];

const SCALE: [string, string, string][] = [
  ["display", "text-display", "Válvulas"],
  ["h1", "text-h1", "Conexões forjadas"],
  ["h2", "text-h2", "Flanges e conexões"],
  ["h3", "text-h3", "Especificação técnica"],
  ["h4", "text-h4", "Aplicações e setores"],
  ["h5", "text-h5", "Ficha do produto"],
];

export default function Styleguide() {
  return (
    <div>
      <Container as="header" className="py-20">
        <LabelRule>Documento interno, não indexado</LabelRule>
        <h1 className="font-display expanded text-h1 mt-8 uppercase">
          Styleguide
        </h1>
        <p className="text-lead text-steel mt-6 max-w-[46ch]">
          Fundação visual do site da Scai do Sul. Base clara, tinta grafite
          quente, um acento fundido usado com economia.
        </p>
      </Container>

      <Ticker
        items={[
          "Desde 1975",
          "DN 15 a 600",
          "PN 10 a PN 40",
          "ANSI 150#",
          "Porto Alegre RS",
        ]}
      />

      <Section
        index="01"
        label="Tipografia"
        title="Três famílias, três funções"
        intro="Uma família grita, uma lê, uma mede. O eixo de largura do Archivo entrega o display expandido e a condensada das tabelas, sem precisar de uma quarta fonte."
      >
        <div className="space-y-10">
          {SCALE.map(([name, cls, sample]) => (
            <div
              key={name}
              className="border-rule grid grid-cols-12 items-baseline gap-x-6 border-t pt-6"
            >
              <Label className="col-span-12 md:col-span-2">{name}</Label>
              <p
                className={
                  "font-display expanded col-span-12 font-bold uppercase md:col-span-10 " +
                  cls
                }
              >
                {sample}
              </p>
            </div>
          ))}

          <div className="border-rule grid grid-cols-12 gap-x-6 border-t pt-6">
            <Label className="col-span-12 md:col-span-2">corpo</Label>
            <p className="text-body-lg col-span-12 max-w-[52ch] md:col-span-10">
              Distribuímos válvulas, flanges, conexões e instrumentação para
              indústria e saneamento. Especificação conferida antes do
              orçamento, para o material chegar certo na primeira vez.
            </p>
          </div>

          <div className="border-rule grid grid-cols-12 gap-x-6 border-t pt-6">
            <Label className="col-span-12 md:col-span-2">rótulo</Label>
            <div className="col-span-12 md:col-span-10">
              <Label>01 / Linha de produtos</Label>
            </div>
          </div>
        </div>
      </Section>

      <Section
        index="02"
        label="Cor"
        title="Derivada do logotipo"
        intro="Duas cores mais um acento, nunca três. O verde #42a940 saiu do arquivo do logotipo e só entra sobre fundo escuro, onde dá 6.30:1. Sobre o papel ele reprova em contraste, então ali entra a versão funda #2a6f2a, com 5.28:1."
      >
        <div className="bg-rule grid grid-cols-2 gap-px md:grid-cols-6">
          {SWATCHES.map(([name, cls]) => (
            <div key={name} className="bg-paper p-4">
              <div className={"border-rule mb-3 h-20 w-full border " + cls} />
              <Label>{name}</Label>
            </div>
          ))}
        </div>
      </Section>

      <Section
        index="03"
        label="Estrutura"
        title="Fio de cabelo, nunca sombra"
        intro="A grade de borda compartilhada é o dispositivo estrutural mais limpo disponível, e custa nada."
      >
        <div className="bg-rule grid grid-cols-1 gap-px md:grid-cols-3">
          {[
            "Válvulas de esfera",
            "Válvulas borboleta",
            "Conexões maleáveis",
          ].map((t, i) => (
            <div key={t} className="bg-paper p-8">
              <Label>{"O" + (i + 1)}</Label>
              <h3 className="font-display expanded text-h4 mt-5 uppercase">
                {t}
              </h3>
              <p className="text-body-sm text-steel mt-4 max-w-[34ch]">
                Os cards não têm borda própria. As frestas da grade é que são as
                linhas.
              </p>
            </div>
          ))}
        </div>

        <Rule className="my-16" />

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <Figure
              ratio="4/3"
              alt="Fachada da empresa"
              label="Fachada, Av. Cairú 525"
              caption="Placeholder, foto pendente"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <Figure
              ratio="4/3"
              alt="Válvula de esfera"
              label="Válvula esfera tripartida DN 150"
              caption="Placeholder, foto pendente"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <Figure
              ratio="4/3"
              alt="Estoque"
              label="Estoque, prateleira de conexões"
              caption="Placeholder, foto pendente"
            />
          </div>
        </div>
      </Section>

      <Section
        index="04"
        label="Dados"
        title="A tabela é o argumento de venda"
        intro="Unidade no cabeçalho, algarismo puro na célula. É assim que uma tabela de catálogo impresso se vê."
      >
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 md:col-span-7">
            <SpecTable
              caption="Especificações técnicas"
              columns={["Modelo", "DN (mm)", "PN (bar)", "Temp. máx. (°C)"]}
              rows={[
                ["Esfera bipartida", "15 a 100", "40", "180"],
                ["Esfera tripartida", "15 a 200", "63", "200"],
                ["Borboleta wafer", "50 a 600", "16", "120"],
                ["Gaveta cunha flexível", "50 a 500", "16", "80"],
              ]}
            />
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <SpecList
              items={[
                { label: "Fundação", value: "1975" },
                { label: "CNPJ", value: "87.955.035/0001-62" },
                { label: "Faixa DN", value: "15 a 600" },
                { label: "Classes", value: "PN 10 a PN 40" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section
        index="05"
        label="Ações"
        title="Estado instantâneo, sem transição"
        intro="Num site sem animação, hover instantâneo lê como deliberado, desde que seja consistente em todo lugar."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/contato">Solicitar orçamento</Button>
          <Button href="/produtos" variant="outline">
            Ver linhas de produto
          </Button>
        </div>
      </Section>

      <Section
        index="06"
        label="Números"
        title="Contraste extremo de escala"
        inverted
        intro="Rótulo de 11 pixels ao lado de numeral de 128, e nada no meio. Tipo de tamanho médio é o que faz um site parecer template."
      >
        <div className="bg-rule-inv grid grid-cols-1 gap-px md:grid-cols-3">
          <Stat
            inverted
            value="51"
            suffix=" anos"
            label="De casa"
            note="Fundada em janeiro de 1975."
            className="bg-ink px-1"
          />
          <Stat
            inverted
            value="8"
            label="Marcas representadas"
            note="Confirmar portfólio atual com o cliente."
            className="bg-ink px-1"
          />
          <Stat
            inverted
            value="600"
            suffix=" DN"
            label="Diâmetro máximo"
            note="Faixa provisória."
            className="bg-ink px-1"
          />
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Button href="/contato" variant="inverted">
            Botão invertido
          </Button>
          <Button href="/produtos" variant="ghostInverted">
            Contorno invertido
          </Button>
        </div>
      </Section>
    </div>
  );
}
