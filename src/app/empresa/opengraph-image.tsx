import { ogImagem, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { site } from "@/content/site";
import { marcas } from "@/content/marcas";

/**
 * Prévia de link de /empresa.
 *
 * Cada rota precisa da sua: o `opengraph-image` da raiz não desce para as
 * filhas que declaram `openGraph` na própria metadata, e todas declaram, para
 * fixar a `url` canônica. Sem o arquivo aqui, o link da página caía no
 * WhatsApp sem imagem nenhuma.
 *
 * O título repete o da página de propósito. Prévia que promete uma coisa e
 * entrega outra é o jeito mais rápido de perder o clique.
 */
export const alt =
  "A empresa: meio século na Avenida Cairú, Metalúrgica Scai do Sul";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogImagem({
    rotulo: `A empresa · desde ${site.fundacao}`,
    titulo: "Meio século na Avenida Cairú",
    specs: [
      `Desde ${site.fundacao}`,
      `${marcas.length} marcas`,
      `${site.contato.endereco.cidade} ${site.contato.endereco.uf}`,
    ],
  });
}
