import { site } from "@/content/site";

/**
 * Monta o link do WhatsApp com a mensagem ja escrita. Enquanto o dominio nao
 * estiver verificado no Resend, e por aqui que o pedido de orcamento chega.
 */
export function whatsappLink(mensagem?: string) {
  const base = `https://wa.me/${site.contato.whatsapp}`;
  if (!mensagem) return base;
  return `${base}?text=${encodeURIComponent(mensagem)}`;
}

export function orcamentoWhatsapp(produto?: string) {
  return whatsappLink(
    produto
      ? `Olá! Gostaria de solicitar um orçamento da linha ${produto}.`
      : "Olá! Gostaria de solicitar um orçamento.",
  );
}
