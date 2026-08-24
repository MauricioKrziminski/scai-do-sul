import { ogImagem, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { site } from "@/content/site";

/**
 * Prévia de link de /contato.
 *
 * Os dados de contato entram na tira de baixo porque essa é a prévia que mais
 * circula: é o link que o vendedor manda no WhatsApp. Telefone e cidade
 * visíveis na imagem resolvem o contato mesmo sem abrir a página.
 */
export const alt =
  "Contato e orçamento da Metalúrgica Scai do Sul, Porto Alegre RS";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogImagem({
    rotulo: "Contato e orçamento",
    titulo: "Fale com quem especifica",
    specs: [
      site.contato.telefone,
      site.contato.endereco.logradouro,
      `${site.contato.endereco.cidade} ${site.contato.endereco.uf}`,
    ],
  });
}
