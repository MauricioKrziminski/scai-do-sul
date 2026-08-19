"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { navegacao } from "@/content/navegacao";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Cabeçalho fixo com fio de cabelo embaixo. O botão do menu no celular é um
 * rótulo de texto, não um ícone de hambúrguer, seguindo a referência.
 * Estado ativo marcado no acento, que é um dos poucos lugares onde o verde da
 * marca tem permissão de aparecer.
 */
export function Header() {
  const [aberto, setAberto] = useState(false);
  const pathname = usePathname();

  const ativo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="border-rule bg-paper sticky top-0 z-50 border-b">
      <Container>
        <div className="flex h-20 items-center justify-between gap-8">
          <Logo />

          <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
            {navegacao.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "label-tech transition-none",
                  ativo(item.href) ? "text-brand-deep" : "text-ink hover:text-brand-deep",
                )}
              >
                {item.rotulo}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={`tel:${site.contato.telefoneRaw}`}
              className="label-tech text-steel hover:text-ink transition-none"
            >
              {site.contato.telefone}
            </a>
            <Button href="/contato" arrow={false} className="px-5 py-3">
              Orçamento
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            className="label-tech text-ink border-ink/25 border px-4 py-3 transition-none lg:hidden"
          >
            {aberto ? "Fechar" : "Menu"}
          </button>
        </div>
      </Container>

      {aberto && (
        <div id="menu-mobile" className="border-rule bg-paper border-t lg:hidden">
          <Container>
            <nav aria-label="Principal, celular" className="flex flex-col py-4">
              {navegacao.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setAberto(false)}
                  className={cn(
                    "border-rule font-display expanded border-b py-5 text-h4 font-bold uppercase transition-none",
                    ativo(item.href) ? "text-brand-deep" : "text-ink",
                  )}
                >
                  {item.rotulo}
                </Link>
              ))}
              <div className="flex flex-col gap-4 py-7">
                <a
                  href={`tel:${site.contato.telefoneRaw}`}
                  className="label-tech text-steel"
                >
                  {site.contato.telefone}
                </a>
                <Button href="/contato" className="self-start">
                  Solicitar orçamento
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
