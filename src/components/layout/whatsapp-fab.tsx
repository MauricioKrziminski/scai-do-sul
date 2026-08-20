import { IconeWhatsApp } from "./icone-whatsapp";
import { orcamentoWhatsapp } from "@/lib/whatsapp";

/**
 * Botão fixo em todas as páginas, conforme a proposta.
 *
 * Só o ícone, sem rótulo: o glifo do WhatsApp é reconhecido de imediato, e
 * escrever "WhatsApp" ao lado dele é redundância que rouba espaço de tela
 * justo no celular, onde o botão mais atrapalha o conteúdo.
 *
 * Usa o verde do logotipo, não o do WhatsApp. São verdes diferentes (#42a940
 * contra #25D366) e os dois no mesmo site leriam como erro de cor.
 *
 * A cor também resolve um problema prático: o botão é fixo e passa por cima
 * de faixas claras e escuras. Antes era `bg-ink`, e sobre o rodapé, que é da
 * mesma cor, ele sumia. O verde tem 2.58:1 contra o papel e 5.07:1 contra o
 * escuro, então aparece nos dois. A borda fica verde inclusive no hover, que
 * inverte o fundo, para o contorno nunca depender do que está atrás.
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
      className="bg-brand text-ink border-brand hover:bg-ink hover:text-brand fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center border transition-none md:right-6 md:bottom-6"
    >
      <IconeWhatsApp className="size-6" />
    </a>
  );
}
