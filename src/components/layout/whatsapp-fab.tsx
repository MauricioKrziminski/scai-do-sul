import { IconeWhatsApp } from "./icone-whatsapp";
import { orcamentoWhatsapp } from "@/lib/whatsapp";

/**
 * Botão fixo em todas as páginas, conforme a proposta.
 *
 * Só o ícone, sem rótulo: o glifo do WhatsApp é reconhecido de imediato, e
 * escrever "WhatsApp" ao lado dele é redundância que rouba espaço de tela
 * justo no celular, onde o botão mais atrapalha o conteúdo.
 *
 * Sem fundo e sem borda, no verde oficial do WhatsApp (#25D366). É a única
 * cor do site fora da paleta, e está aqui porque é marca de terceiro, não
 * decoração: o reconhecimento vem justamente dela.
 *
 * RESSALVA MEDIDA: solto sobre o papel, esse verde dá só 1.70:1. Sobre as
 * faixas escuras dá 7.70:1. Ou seja, nas seções claras o ícone fica suave.
 * Como é um glifo grande e de silhueta muito conhecida, ele continua sendo
 * identificado, mas se em algum momento parecer apagado demais, a saída é
 * devolver o fundo sólido, que era o que garantia contraste nos dois fundos.
 *
 * Como não há texto, o nome acessível vem do `aria-label`. Sem ele o link
 * seria anunciado apenas como "link", sem dizer para onde leva.
 */
export function WhatsAppFab() {
  return (
    <a
      href={orcamentoWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Scai do Sul no WhatsApp"
      title="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center transition-none hover:opacity-80 md:right-6 md:bottom-6"
    >
      <IconeWhatsApp className="size-12 text-[#25D366]" />
    </a>
  );
}
