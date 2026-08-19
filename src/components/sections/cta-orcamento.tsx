import { MapPin, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MidiaFundo } from "@/components/ui/midia-fundo";
import { site } from "@/content/site";
import { orcamentoWhatsapp } from "@/lib/whatsapp";

/**
 * Fechamento de página. Repete os dois caminhos de contato, porque metade dos
 * compradores desse setor prefere WhatsApp e a outra metade prefere formulário.
 *
 * Leva foto de fundo por um motivo prático, não decorativo: o rodapé logo
 * abaixo é da mesma cor, e sem a foto os dois viravam um bloco escuro só, sem
 * fronteira visível entre uma chamada e a informação de rodapé.
 *
 * A coluna estreita carrega os canais diretos. Antes ficava vazia, e um vão
 * de três colunas ao lado de uma chamada é espaço morto, não respiro.
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
  const { endereco } = site.contato;

  return (
    <section className="bg-ink text-paper border-rule-inv relative isolate overflow-hidden border-t">
      <MidiaFundo src="/img/temp/apoio-valvulas-azuis.jpg" />

      <Container>
        <div className="py-section grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 flex flex-col gap-9 md:col-span-3">
            <Label inverted>Orçamento</Label>

            <ul className="flex flex-col gap-5">
              <li>
                <a
                  href={`tel:${site.contato.telefoneRaw}`}
                  className="text-body-sm hover:text-brand flex items-center gap-3 text-paper/80 transition-none"
                >
                  <Phone
                    aria-hidden
                    className="size-4 shrink-0"
                    strokeWidth={1.5}
                  />
                  {site.contato.telefone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contato.email}`}
                  className="text-body-sm hover:text-brand flex items-center gap-3 break-all text-paper/80 transition-none"
                >
                  <Mail
                    aria-hidden
                    className="size-4 shrink-0"
                    strokeWidth={1.5}
                  />
                  {site.contato.email}
                </a>
              </li>
              <li>
                <a
                  href={site.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm hover:text-brand flex gap-3 text-paper/80 transition-none"
                >
                  <MapPin
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span>
                    {endereco.logradouro}
                    <br />
                    {endereco.cidade} {endereco.uf}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <h2 className="font-display expanded text-h2 font-bold uppercase">
              {titulo}
            </h2>
            <p className="text-lead mt-7 max-w-[46ch] text-paper/80">{texto}</p>

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
          </div>
        </div>
      </Container>
    </section>
  );
}
