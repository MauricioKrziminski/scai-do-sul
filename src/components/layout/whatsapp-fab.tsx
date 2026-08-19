import { MessageCircle } from "lucide-react";
import { orcamentoWhatsapp } from "@/lib/whatsapp";

/**
 * Botão fixo em todas as páginas, conforme a proposta.
 * Deliberadamente na cor da casa e não no verde da marca do WhatsApp: verde
 * seria uma terceira cor, e a regra do projeto é duas mais um acento.
 */
export function WhatsAppFab() {
  return (
    <a
      href={orcamentoWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-ink text-paper hover:bg-brand-deep label-tech fixed right-4 bottom-4 z-40 flex items-center gap-2.5 border border-ink px-4 py-3.5 transition-none hover:border-brand-deep md:right-6 md:bottom-6 md:px-5"
    >
      <MessageCircle aria-hidden className="size-4 shrink-0" strokeWidth={1.75} />
      <span>WhatsApp</span>
    </a>
  );
}
