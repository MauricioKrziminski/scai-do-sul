import type { MetadataRoute } from "next";
import { produtos } from "@/content/produtos";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  const fixas = [
    { url: "", priority: 1, changeFrequency: "monthly" as const },
    { url: "/produtos", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/empresa", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/setores", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/contato", priority: 0.8, changeFrequency: "yearly" as const },
    { url: "/privacidade", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return [
    ...fixas.map((rota) => ({
      url: `${site.url}${rota.url}`,
      lastModified: agora,
      changeFrequency: rota.changeFrequency,
      priority: rota.priority,
    })),
    // Cada linha de produto tem endereco proprio, que e o ponto da proposta:
    // o Google indexa produto por produto, nao so a home.
    ...produtos.map((produto) => ({
      url: `${site.url}/produtos/${produto.slug}`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
