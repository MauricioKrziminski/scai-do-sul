import { ogImagem, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { produtos } from "@/content/produtos";

/**
 * Prévia de link de /produtos, o índice do catálogo.
 *
 * Não confundir com `produtos/[slug]/opengraph-image.tsx`, que é a prévia de
 * cada linha e leva o índice numerado e os destaques daquela linha.
 */
export const alt =
  "Linhas de produto da Metalúrgica Scai do Sul, válvulas, flanges e conexões";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogImagem({
    rotulo: `Catálogo · ${produtos.length} linhas`,
    titulo: "Linhas de produto",
    specs: ["DN 15 a 600", "PN 10 a PN 40", "Válvulas e conexões"],
  });
}
