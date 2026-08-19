import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Ticker } from "@/components/ui/ticker";
import { LinhasProduto } from "@/components/sections/linhas-produto";
import { Processo } from "@/components/sections/processo";
import { CtaOrcamento } from "@/components/sections/cta-orcamento";
import { produtos } from "@/content/produtos";
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
        temTicker
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
