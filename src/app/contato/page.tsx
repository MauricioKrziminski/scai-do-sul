import type { Metadata } from "next";
import { Suspense } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Label, LabelRule } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FormOrcamento } from "@/components/sections/form-orcamento";
import { site, enderecoLinha } from "@/content/site";
import { orcamentoWhatsapp } from "@/lib/whatsapp";
import { FaixaHero } from "@/components/sections/faixa-hero";

export const metadata: Metadata = {
  title: "Contato e orçamento",
  description: `Peça orçamento de válvulas, flanges e conexões. ${enderecoLinha}. Telefone ${site.contato.telefone}.`,
  alternates: { canonical: "/contato" },
  openGraph: { url: "/contato" },
};

export default function ContatoPage() {
  const { endereco } = site.contato;

  return (
    <>
      <FaixaHero
        src="/img/temp/apoio-atendimento.jpg"
        fotoLabel="Balcão de atendimento"
        rotulo="Contato e orçamento"
        titulo={
          <>
            Fale com quem
            <br />
            <span>especifica</span>
          </>
        }
        texto="Você não precisa saber o código do produto para pedir orçamento. Descreva a aplicação, mande a lista da obra ou a foto da peça que quebrou. A especificação a gente confere junto."
      />

      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 py-section">
          {/* Formulário à esquerda, largo. Ele é o objetivo da página. */}
          <div className="col-span-12 lg:col-span-7">
            <LabelRule>Pedido de orçamento</LabelRule>
            <div className="mt-10">
              <Suspense
                fallback={
                  <p className="text-body-sm text-steel">
                    Carregando formulário...
                  </p>
                }
              >
                <FormOrcamento />
              </Suspense>
            </div>
          </div>

          {/* Canais diretos à direita, para quem não quer preencher formulário. */}
          <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
            <LabelRule>Prefere falar direto?</LabelRule>

            <div className="mt-10 flex flex-col gap-4">
              <Button href={orcamentoWhatsapp()} arrow={false}>
                Chamar no WhatsApp
              </Button>
              <Button
                href={`tel:${site.contato.telefoneRaw}`}
                variant="outline"
                arrow={false}
              >
                Ligar {site.contato.telefone}
              </Button>
            </div>

            <dl className="border-rule mt-14 border-t">
              <div className="border-rule flex gap-4 border-b py-6">
                <MapPin
                  aria-hidden
                  className="text-steel mt-1 size-4 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <dt className="label-tech text-steel">Endereço</dt>
                  <dd className="text-body-sm mt-2.5">
                    {endereco.logradouro}
                    <br />
                    {endereco.bairro}, {endereco.cidade} {endereco.uf}
                    <br />
                    CEP {endereco.cep}
                  </dd>
                </div>
              </div>

              <div className="border-rule flex gap-4 border-b py-6">
                <Phone
                  aria-hidden
                  className="text-steel mt-1 size-4 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <dt className="label-tech text-steel">Telefone</dt>
                  <dd className="text-body-sm mt-2.5">
                    <a
                      href={`tel:${site.contato.telefoneRaw}`}
                      className="hover:text-brand-deep"
                    >
                      {site.contato.telefone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="border-rule flex gap-4 border-b py-6">
                <Mail
                  aria-hidden
                  className="text-steel mt-1 size-4 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <dt className="label-tech text-steel">E-mail</dt>
                  <dd className="text-body-sm mt-2.5 break-all">
                    <a
                      href={`mailto:${site.contato.email}`}
                      className="hover:text-brand-deep"
                    >
                      {site.contato.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="border-rule flex gap-4 border-b py-6">
                <Clock
                  aria-hidden
                  className="text-steel mt-1 size-4 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <dt className="label-tech text-steel">Atendimento</dt>
                  <dd className="text-body-sm text-steel mt-2.5">
                    {site.contato.horario ??
                      "Horário comercial, de segunda a sexta."}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-12">
              <Label>Como chegar</Label>
              <a
                href={site.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="blueprint border-rule bg-ink mt-6 flex aspect-[4/3] items-end border p-5 transition-none hover:border-ink"
              >
                <span className="label-tech text-paper/55 leading-[1.6]">
                  Abrir no Google Maps
                  <br />
                  {endereco.logradouro}, {endereco.bairro}
                </span>
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
