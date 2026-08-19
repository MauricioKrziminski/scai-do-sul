import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { orcamentoWhatsapp } from "@/lib/whatsapp";

/**
 * Fechamento de página. Repete os dois caminhos de contato, porque metade dos
 * compradores desse setor prefere WhatsApp e a outra metade prefere formulário.
 */
export function CtaOrcamento({
  produto,
  titulo = "Precisa de um orçamento?",
  texto = "Mande a lista, o memorial ou só a descrição do que você precisa. A gente confere a especificação e responde com prazo real.",
}: {
  produto?: string;
  titulo?: string;
  texto?: string;
}) {
  return (
    <section className="bg-ink text-paper border-rule-inv border-t">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 py-section">
          <div className="col-span-12 md:col-span-3">
            <Label inverted>Orçamento</Label>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <h2 className="font-display expanded text-h2 font-bold uppercase">
              {titulo}
            </h2>
            <p className="text-lead mt-7 max-w-[46ch] text-paper/70">{texto}</p>

            <div className="mt-11 flex flex-wrap gap-3">
              <Button
                href={produto ? `/contato?produto=${produto}` : "/contato"}
                variant="inverted"
              >
                Solicitar orçamento
              </Button>
              <Button
                href={orcamentoWhatsapp(produto)}
                variant="ghostInverted"
                arrow={false}
              >
                WhatsApp
              </Button>
            </div>

            <div className="border-rule-inv mt-14 flex flex-wrap gap-x-12 gap-y-4 border-t pt-8">
              <a
                href={`tel:${site.contato.telefoneRaw}`}
                className="label-tech hover:text-molten-2 text-paper/70 transition-none"
              >
                {site.contato.telefone}
              </a>
              <a
                href={`mailto:${site.contato.email}`}
                className="label-tech hover:text-molten-2 text-paper/70 transition-none"
              >
                {site.contato.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
