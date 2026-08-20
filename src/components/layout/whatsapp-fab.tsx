import { IconeWhatsApp } from "./icone-whatsapp";
import { orcamentoWhatsapp } from "@/lib/whatsapp";

/**
 * Botão fixo em todas as páginas, conforme a proposta.
 *
 * Só o ícone, sem rótulo: o glifo do WhatsApp é reconhecido de imediato, e
 * escrever "WhatsApp" ao lado dele é redundância que rouba espaço de tela
 * justo no celular, onde o botão mais atrapalha o conteúdo.
 *
 * Botão flutuante no formato tradicional do WhatsApp: círculo cheio no verde
 * oficial #25D366 com o glifo branco dentro. É a única cor do site fora da
 * paleta, e está aqui porque é marca de terceiro, não decoração.
 *
 * O círculo cheio resolve o que o glifo solto não resolvia: sem fundo, o
 * verde ficava em 1.70:1 sobre o papel e o ícone sumia nas seções claras.
 * Preenchido, o botão tem forma própria e não depende do que está atrás.
 * Branco sobre esse verde dá 2.55:1, que é baixo para texto mas é a
 * combinação oficial da marca, reconhecida justamente por ela.
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
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] transition-none hover:bg-[#1da851] md:right-6 md:bottom-6"
    >
      <IconeWhatsApp className="size-8 text-white" />
    </a>
  );
}
