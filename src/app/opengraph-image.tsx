import { ogImagem, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Metalúrgica Scai do Sul, válvulas e conexões industriais";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogImagem({
    rotulo: "Distribuidora técnica desde 1975",
    titulo: "Válvulas e conexões industriais",
  });
}
