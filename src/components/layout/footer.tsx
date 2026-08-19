import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/label";
import { Logo } from "./logo";
import { navegacao } from "@/content/navegacao";
import { marcas } from "@/content/marcas";
import { site, anosDeCasa } from "@/content/site";

/**
 * Dado de registro à mostra é padrão de credibilidade industrial, e vale mais
 * que qualquer selo genérico. CNPJ, endereço completo e telefone ficam
 * expostos, não escondidos numa página de contato.
 */
export function Footer() {
  const { endereco } = site.contato;

  return (
    <footer className="bg-ink text-paper">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-14 py-20">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Logo inverted />
            <p className="text-body-sm mt-7 max-w-[34ch] text-paper/60">
              Distribuidora técnica de válvulas, flanges, conexões e instrumentação
              para indústria e saneamento. {anosDeCasa} anos de Porto Alegre para todo
              o Brasil.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <Label inverted>Navegação</Label>
            <ul className="mt-6 space-y-3.5">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="label-tech text-paper/75 hover:text-brand transition-none"
                  >
                    {item.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <Label inverted>Marcas</Label>
            <ul className="mt-6 space-y-3.5">
              {marcas.slice(0, 6).map((marca) => (
                <li key={marca.nome} className="label-tech text-paper/75">
                  {marca.nome}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 lg:col-start-10">
            <Label inverted>Contato</Label>
            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href={site.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm hover:text-brand flex gap-3 text-paper/75 transition-none"
                >
                  <MapPin aria-hidden className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} />
                  <span>
                    {endereco.logradouro}, {endereco.bairro}
                    <br />
                    {endereco.cidade} {endereco.uf}, {endereco.cep}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contato.telefoneRaw}`}
                  className="text-body-sm hover:text-brand flex items-center gap-3 text-paper/75 transition-none"
                >
                  <Phone aria-hidden className="size-4 shrink-0" strokeWidth={1.5} />
                  {site.contato.telefone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contato.email}`}
                  className="text-body-sm hover:text-brand flex items-center gap-3 break-all text-paper/75 transition-none"
                >
                  <Mail aria-hidden className="size-4 shrink-0" strokeWidth={1.5} />
                  {site.contato.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Folga extra embaixo para o botao fixo do WhatsApp nao cobrir o texto. */}
        <div className="border-rule-inv flex flex-col gap-5 border-t pt-8 pb-28 md:flex-row md:items-center md:justify-between md:pb-24">
          <p className="label-tech text-paper/55">
            {site.razaoSocial} · CNPJ {site.cnpj}
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href="/privacidade"
              className="label-tech text-paper/55 hover:text-paper transition-none"
            >
              Privacidade
            </Link>
            <p className="label-tech text-paper/55">
              &copy; {new Date().getFullYear()} · Site por SoftCode
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
