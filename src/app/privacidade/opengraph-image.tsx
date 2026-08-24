import { ogImagem, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { site } from "@/content/site";

/**
 * Prévia de link de /privacidade.
 *
 * Página jurídica quase nunca é compartilhada, mas quando é, costuma ser em
 * resposta a alguém perguntando o que o site faz com os dados. Prévia sem
 * imagem nessa hora passa a impressão errada, então ela existe pelo mesmo
 * motivo que as outras.
 */
export const alt =
  "Política de privacidade da Metalúrgica Scai do Sul, conforme a LGPD";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogImagem({
    rotulo: "Jurídico · LGPD",
    titulo: "Política de privacidade",
    specs: [
      "Lei 13.709/2018",
      site.cnpj,
      `${site.contato.endereco.cidade} ${site.contato.endereco.uf}`,
    ],
  });
}
