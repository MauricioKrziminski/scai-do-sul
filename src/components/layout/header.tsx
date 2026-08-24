"use client";

import { useEffect, useState } from "react";
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
 *
 * A barra tem altura fixa de 80px e nunca muda, nem com o menu aberto. Antes o
 * painel do celular era filho da barra, então abrir o menu fazia a altura do
 * elemento `sticky` saltar de 80 para mais de 500 pixels. No celular o
 * navegador reposiciona um elemento grudado com atraso quando a altura dele
 * muda, e nesse intervalo aparecia uma faixa de conteúdo por cima do
 * cabeçalho. Agora o painel é uma camada `fixed` separada, que cobre a tela
 * inteira abaixo da barra, e a rolagem da página fica travada enquanto ele
 * está aberto. Sem mudança de altura não há o que reposicionar.
 */
export function Header() {
  const pathname = usePathname();

  // O estado guarda a rota em que o menu foi aberto, e não um booleano. Assim
  // qualquer troca de rota fecha o painel sozinha, inclusive pelo botão de
  // voltar do navegador e por link novo que alguém acrescente aqui e esqueça
  // de ligar no fechamento. Sair da rota com o menu aberto entregaria a página
  // nova coberta por uma camada opaca e sem rolagem. Clicar num link da rota em
  // que a pessoa já está não troca a rota, e por isso os links também fecham
  // no toque.
  const [rotaDoMenu, setRotaDoMenu] = useState<string | null>(null);
  const aberto = rotaDoMenu === pathname;
  const fechar = () => setRotaDoMenu(null);

  const ativo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Trava a rolagem do documento enquanto o painel cobre a tela. Sem isso o
  // conteúdo continua rolando atrás de uma camada opaca, que é desorientador,
  // e no iOS a barra grudada volta a se descolar durante a rolagem.
  // Escape fecha, porque o painel é modal na prática.
  useEffect(() => {
    if (!aberto) return;

    const raiz = document.documentElement;
    const anterior = raiz.style.overflow;
    raiz.style.overflow = "hidden";

    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setRotaDoMenu(null);
    };
    document.addEventListener("keydown", aoTeclar);

    return () => {
      raiz.style.overflow = anterior;
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto]);

  // O painel só existe abaixo de lg. Se a janela cruzar esse limite com o menu
  // aberto, o painel some por CSS mas a trava de rolagem ficaria pendurada.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 64rem)");
    const conferir = () => {
      if (mq.matches) setRotaDoMenu(null);
    };
    mq.addEventListener("change", conferir);
    return () => mq.removeEventListener("change", conferir);
  }, []);

  return (
    <header
      // O respiro de cima é a área segura do aparelho. Ele não afasta a barra
      // do topo: o papel dela preenche a faixa da barra de status, e só a
      // linha do logotipo desce. Sem isso o conteúdo passaria por trás.
      className="border-rule bg-paper sticky top-0 z-50 border-b pt-[env(safe-area-inset-top)]"
    >
      {/*
        Tapume de papel acima da barra.

        No Safari do iPhone o conteudo da pagina desenha ate a borda fisica da
        tela, mas `top: 0` de elemento grudado para antes dela. Declarar
        `viewport-fit=cover` deveria alinhar as duas coisas e nao alinhou no
        aparelho do cliente, entao a faixa que sobra vai coberta na mao.

        E um bloco absoluto que sai por cima da barra. Estouro para cima nao
        gera rolagem, entao onde a barra ja encosta no topo real ele fica fora
        da tela e nao custa nada. Onde nao encosta, ele tapa o vao com a mesma
        cor da barra. Os 15rem cobrem qualquer recorte de aparelho com folga.
      */}
      <span
        aria-hidden
        className="bg-paper pointer-events-none absolute inset-x-0 bottom-full h-[15rem]"
      />

      <Container>
        <div className="flex h-20 items-center justify-between gap-8">
          <Logo onClick={fechar} />

          <nav
            aria-label="Principal"
            className="hidden items-center gap-9 lg:flex"
          >
            {navegacao.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "label-tech transition-none",
                  ativo(item.href)
                    ? "text-brand-deep"
                    : "text-ink hover:text-brand-deep",
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
            onClick={() => setRotaDoMenu(aberto ? null : pathname)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            className="label-tech text-ink border-ink/25 border px-4 py-3 transition-none lg:hidden"
          >
            {aberto ? "Fechar" : "Menu"}
          </button>
        </div>
      </Container>

      {aberto && (
        <>
          {/*
            O mesmo tapume no pe da tela, e so enquanto o painel esta aberto:
            com o menu fechado o que fica ali embaixo e o rodape escuro, e uma
            barra de papel por cima dele seria pior que o vao.

            `top-full` num elemento fixo comeca no pe da janela e desce. Elemento
            fixo nao entra na area rolavel, entao isso nao cria rolagem nenhuma.
          */}
          <span
            aria-hidden
            className="bg-paper pointer-events-none fixed inset-x-0 top-full z-[45] h-[15rem] lg:hidden"
          />

          <div
            id="menu-mobile"
            // O topo casa com a altura da barra mais a área segura, que é onde a
            // barra termina de verdade. O fio que separa os dois é o `border-b`
            // da barra, por isso o painel não leva borda em cima.
            // z-45 passa na frente do botão do WhatsApp, que é z-40, senão ele
            // fica boiando verde por cima do menu.
            className="bg-paper fixed inset-x-0 bottom-0 top-[calc(5rem+env(safe-area-inset-top))] z-[45] overflow-y-auto overscroll-contain lg:hidden"
          >
            <Container className="flex min-h-full flex-col pb-[env(safe-area-inset-bottom)]">
              <nav
                aria-label="Principal, celular"
                className="flex flex-col pt-4"
              >
                {navegacao.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={fechar}
                    className={cn(
                      "border-rule font-display expanded border-b py-5 text-h4 font-bold uppercase transition-none",
                      ativo(item.href) ? "text-brand-deep" : "text-ink",
                    )}
                  >
                    {item.rotulo}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-4 py-7">
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
            </Container>
          </div>
        </>
      )}
    </header>
  );
}
