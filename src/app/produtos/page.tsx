import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Ticker } from "@/components/ui/ticker";
import { LinhasProduto } from "@/components/sections/linhas-produto";
import { Processo } from "@/components/sections/processo";
import { CtaOrcamento } from "@/components/sections/cta-orcamento";
import { produtos } from "@/content/produtos";
import { marcas } from "@/content/marcas";
import { FaixaHero } from "@/components/sections/faixa-hero";

export const metadata: Metadata = {
  title: "Linhas de produto",
  description:
    "Válvulas para saneamento, bronze, borboleta e esfera, conexões de ferro maleável, flanges, conexões de alta pressão, instrumentação e equipamentos de incêndio. Especificação técnica de cada linha.",
  alternates: { canonical: "/produtos" },
  openGraph: { url: "/produtos" },
};

export default function ProdutosPage() {
  return (
    <>
      <FaixaHero
        src="/img/temp/faixa-prateleira.jpg"
        fotoLabel="Estoque, prateleira de válvulas"
        rotulo={`Catálogo · ${produtos.length} linhas`}
        titulo="Linhas de produto"
        texto="Cada linha tem página própria, com diâmetro, classe de pressão, material, aplicação e as marcas que trabalhamos nela. Se o item que você procura não aparecer aqui, pergunte mesmo assim: boa parte do estoque é de reposição e não cabe em nove categorias."
      />

      <Ticker
        items={[
          "DN 15 a 600",
          "PN 10 a PN 40",
          "ANSI 150# e 300#",
          "Ferro nodular",
          "Bronze",
          "Inox 304 e 316",
          "Aço carbono A105",
        ]}
      />

      <section className="py-section">
        <Container>
          <LinhasProduto />
        </Container>
      </section>

      <Section
        index="01"
        label="Marcas"
        title="Procedência, não só preço"
        intro={`Trabalhamos ${marcas.length} marcas além da linha própria SCAI. Peça sem origem clara é a que falha primeiro, e em linha de processo a falha custa muito mais que a economia do pedido.`}
      >
        <ul className="bg-rule grid grid-cols-2 gap-px md:grid-cols-4">
          {marcas.map((marca) => (
            <li key={marca.nome} className="bg-paper p-7">
              <span className="font-display semi-expanded text-h5 font-bold uppercase">
                {marca.nome}
              </span>
              <span className="text-body-sm text-steel mt-3 block max-w-[24ch]">
                {marca.linha}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        index="02"
        label="Como comprar"
        title="Não precisa saber o código do produto"
        intro="Traga a lista, o memorial ou a foto da peça. A especificação a gente confere junto."
        bleed
      >
        <Container>
          <Processo />
        </Container>
      </Section>

      <CtaOrcamento />
    </>
  );
}
