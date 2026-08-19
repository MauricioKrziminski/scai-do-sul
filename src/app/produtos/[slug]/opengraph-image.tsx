import { notFound } from "next/navigation";
import { ogImagem, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { produtos, produtoPorSlug } from "@/content/produtos";

export const alt = "Linha de produto da Metalúrgica Scai do Sul";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return produtos.map((produto) => ({ slug: produto.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const produto = produtoPorSlug(slug);
  if (!produto) notFound();

  return ogImagem({
    rotulo: "Linha de produto",
    titulo: produto.nome,
    indice: produto.indice,
    // So os valores. Com rotulo mais valor os tres itens estouram a
    // largura e o satori sobrepoe um no outro em vez de quebrar.
    specs: produto.destaques.slice(0, 3).map((d) => d.value),
  });
}
