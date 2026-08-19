import { site, enderecoLinha } from "@/content/site";
import type { Produto } from "@/content/produtos";

/**
 * Dados estruturados. É o que faz a empresa aparecer no painel lateral do
 * Google e o que liga o site ao Google Meu Negócio, item previsto na proposta.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // O conteúdo é gerado por nós, não vem de entrada de usuário.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizacaoJsonLd() {
  const { endereco } = site.contato;

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${site.url}/#organizacao`,
    name: site.nome,
    legalName: site.razaoSocial,
    alternateName: "Scaisul",
    url: site.url,
    email: site.contato.email,
    telephone: site.contato.telefoneRaw,
    foundingDate: `${site.fundacao}-01-02`,
    taxID: site.cnpj,
    description:
      "Distribuidora técnica de válvulas, flanges, conexões e instrumentação para indústria e saneamento, em Porto Alegre desde 1975.",
    address: {
      "@type": "PostalAddress",
      streetAddress: endereco.logradouro,
      addressLocality: endereco.cidade,
      addressRegion: endereco.uf,
      postalCode: endereco.cep,
      addressCountry: "BR",
    },
    areaServed: { "@type": "Country", name: "Brasil" },
    hasMap: site.maps,
  };
}

export function produtoJsonLd(produto: Produto) {
  return {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "@id": `${site.url}/produtos/${produto.slug}/#produto`,
    name: produto.nome,
    description: produto.resumo,
    url: `${site.url}/produtos/${produto.slug}`,
    category: "Válvulas e conexões industriais",
    brand: produto.marcas.map((marca) => ({ "@type": "Brand", name: marca })),
    material: produto.materiais.join(", "),
    additionalProperty: produto.destaques.map((destaque) => ({
      "@type": "PropertyValue",
      name: destaque.label,
      value: destaque.value,
    })),
    seller: { "@id": `${site.url}/#organizacao` },
  };
}

export function trilhaJsonLd(produto: Produto) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: site.url },
      { "@type": "ListItem", position: 2, name: "Produtos", item: `${site.url}/produtos` },
      {
        "@type": "ListItem",
        position: 3,
        name: produto.nome,
        item: `${site.url}/produtos/${produto.slug}`,
      },
    ],
  };
}

/** Usado na descrição textual do rodapé e em metadados. */
export const enderecoCompleto = enderecoLinha;
