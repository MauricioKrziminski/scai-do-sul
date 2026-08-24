import { ogImagem, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { setores } from "@/content/setores";

/**
 * Prévia de link de /setores.
 */
export const alt =
  "Setores atendidos pela Metalúrgica Scai do Sul, da siderurgia ao saneamento";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogImagem({
    rotulo: `Setores · ${setores.length} mercados`,
    titulo: "Onde nosso material trabalha",
    specs: ["Siderurgia", "Petroquímica", "Saneamento"],
  });
}
