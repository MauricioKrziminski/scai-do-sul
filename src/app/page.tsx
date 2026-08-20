import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Stat } from "@/components/ui/stat";
import { Figure } from "@/components/ui/figure";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Hero } from "@/components/sections/hero";
import { LinhasProduto } from "@/components/sections/linhas-produto";
import { Marcas } from "@/components/sections/marcas";
import { Processo } from "@/components/sections/processo";
import { CtaOrcamento } from "@/components/sections/cta-orcamento";
import { setores } from "@/content/setores";
import { produtos } from "@/content/produtos";
import { marcas } from "@/content/marcas";
import { site, anosDeCasa } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* 01 · A tese. Quem é a empresa, em uma frase que ninguém mais pode dizer. */}
      <Section
        index="01"
        label="A empresa"
        title={`${anosDeCasa} anos especificando válvula e conexão`}
        intro={
          <>
            <p>
              A Scai do Sul abriu as portas em janeiro de {site.fundacao}, na
              Avenida Cairú, e nunca saiu de lá. Meio século no mesmo endereço,
              atendendo a indústria gaúcha e enviando material para todo o
              Brasil.
            </p>
            <p className="mt-6">
              Não somos loja de catálogo. Somos distribuidora técnica:
              trabalhamos as marcas que a indústria já especifica, mantemos
              linha própria SCAI e conferimos a especificação junto com você
              antes de fechar o pedido.
            </p>
          </>
        }
        actionLabel={`Fundada em ${site.fundacao}, no mesmo endereço`}
        action={
          <Button href="/empresa" variant="outline">
            Conheça a empresa
          </Button>
        }
      >
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-7">
            {/* Foto real da empresa, a primeira que chegou do cliente.
                Sai sem duotone de proposito: a placa e branca com o verde da
                marca, praticamente o mesmo tom do --color-ink do site, entao
                em cor ela conversa com a paleta melhor do que em preto e
                branco. E o unico lugar do site que escapa do tratamento. */}
            <Figure
              ratio="16/9"
              alt="Placa da Metalúrgica Scai do Sul na Avenida Cairú, com as marcas representadas"
              src="/img/scai-sul-local.jpg"
              posicao="50% 34%"
              sizes="(max-width: 768px) 100vw, 58vw"
              label="Fachada · Av. Cairú, 525"
              caption="Porto Alegre RS · desde 1975"
            />
          </div>
          {/* Alinhado embaixo de proposito. Duas imagens de altura diferente
              travadas no topo deixam um buraco; travadas na base, viram
              composicao. */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:self-end">
            <Figure
              ratio="4/3"
              alt="Prateleiras do estoque da Scai do Sul, com conexões e flanges organizados"
              src="/img/scai-depois-01.webp"
              label="Estoque · prateleira de conexões"
              caption="Pronta entrega"
            />
          </div>
        </div>
      </Section>

      {/* 02 · O ponto central do projeto, conforme pedido do cliente. */}
      <Section
        index="02"
        label="Linhas de produto"
        title="Nove linhas, cada uma com página própria"
        intro="Diâmetro, classe de pressão, material e aplicação de cada linha, para você achar o item e pedir orçamento sem precisar ligar antes só para saber se trabalhamos com aquilo."
        actionLabel={`Mais ${produtos.length - 6} linhas no catálogo`}
        action={
          <Button href="/produtos" variant="outline">
            Ver todas as linhas
          </Button>
        }
        bleed
      >
        <Container>
          {/* Seis na home, nove no catálogo. A grade cheia ocupava 26,5% da
              página, mais que o dobro da segunda maior seção. As três que
              ficam de fora (alta pressão, manômetros e incêndio) são as mais
              especializadas, e o botão acima leva para todas. */}
          <LinhasProduto limite={6} compacto />
        </Container>
      </Section>

      {/* 03 · Prova de portfólio que o site atual não mostra. */}
      <Section
        index="03"
        label="Marcas"
        title="As marcas que a indústria já conhece"
        intro={`Representamos ${marcas.length} marcas de válvulas, conexões e isolamento, além da linha própria SCAI. Procedência importa: peça sem origem clara é a que falha primeiro.`}
      >
        <Marcas />
      </Section>

      {/* 04 · Parede de numerais. Contraste extremo de escala. */}
      <Section inverted className="py-section-lg">
        <div className="grid grid-cols-1 gap-px bg-rule-inv md:grid-cols-2 lg:grid-cols-4">
          <Stat
            inverted
            value={String(anosDeCasa)}
            suffix=" anos"
            label="De mercado"
            note={`Aberta em 2 de janeiro de ${site.fundacao}, no mesmo endereço até hoje.`}
            className="bg-ink px-1"
          />
          <Stat
            inverted
            value={String(produtos.length)}
            label="Linhas de produto"
            note="Cada uma com especificação, aplicação e página própria."
            className="bg-ink px-1"
          />
          <Stat
            inverted
            value={String(marcas.length)}
            label="Marcas representadas"
            note="Mais a linha própria SCAI, desenvolvida pela casa."
            className="bg-ink px-1"
          />
          <Stat
            inverted
            value="600"
            suffix=" DN"
            label="Diâmetro máximo"
            note="De DN 15 a DN 600, nas classes PN 10 a PN 40."
            className="bg-ink px-1"
          />
        </div>
      </Section>

      {/* 05 · Setores. Ajuda o visitante a se reconhecer. */}
      <Section
        index="04"
        label="Setores atendidos"
        title="Onde nosso material trabalha"
        intro="Siderúrgicas, metalúrgicas, químicas, petroquímicas, refinarias, usinas e alimentícias. Se a sua planta se parece com alguma dessas, provavelmente já atendemos alguém parecido com você."
        actionLabel={`Mais ${setores.length - 6} setores atendidos`}
        action={
          <Button href="/setores" variant="outline">
            Ver todos os setores
          </Button>
        }
      >
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <Figure
              ratio="16/9"
              alt="Casa de bombas com válvulas e manômetros instalados"
              src="/img/bombas-pressao.jpg"
              label="Casa de bombas · válvulas e instrumentação"
              caption="Aplicação em campo"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <ul className="border-rule border-t">
              {setores.slice(0, 6).map((setor) => (
                <li key={setor.slug} className="border-rule border-b">
                  <Link
                    href="/setores"
                    className="hover:bg-ink hover:text-paper group flex items-baseline justify-between gap-6 py-6 transition-none"
                  >
                    <span className="font-display semi-expanded text-h5 font-bold uppercase">
                      {setor.nome}
                    </span>
                    <span className="label-tech text-steel group-hover:text-brand shrink-0">
                      {setor.linhas.length} linhas
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 06 · Como comprar. Índice numerado. */}
      <Section
        index="05"
        label="Como comprar"
        title="Do pedido à entrega, em quatro passos"
        intro="Você não precisa saber o código do produto para pedir orçamento. Precisa saber o problema. O resto a gente especifica junto."
        bleed
      >
        <Container>
          <Processo />
        </Container>
      </Section>

      {/* Bloco de localização, antes do fechamento. */}
      <section className="border-rule bg-paper-2 border-t">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-section">
            <div className="col-span-12 md:col-span-3">
              <Label>Onde estamos</Label>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <p className="font-display semi-expanded text-h3 font-bold uppercase">
                {site.contato.endereco.logradouro}
                <br />
                {site.contato.endereco.bairro}, {site.contato.endereco.cidade}{" "}
                {site.contato.endereco.uf}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href={site.maps} variant="outline" arrow={false}>
                  Abrir no Google Maps
                </Button>
                <Button href="/contato" variant="outline">
                  Página de contato
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaOrcamento />
    </>
  );
}
