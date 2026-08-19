import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Label, LabelRule } from "@/components/ui/label";
import { Figure } from "@/components/ui/figure";
import { SpecTable, SpecList } from "@/components/ui/spec-table";
import { Button } from "@/components/ui/button";
import { CtaOrcamento } from "@/components/sections/cta-orcamento";
import { produtos, produtoPorSlug } from "@/content/produtos";
import { JsonLd, produtoJsonLd, trilhaJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return produtos.map((produto) => ({ slug: produto.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/produtos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const produto = produtoPorSlug(slug);
  if (!produto) return {};

  return {
    title: produto.nome,
    description: `${produto.resumo}. ${produto.destaques.map((d) => `${d.label}: ${d.value}`).join(". ")}.`,
    alternates: { canonical: `/produtos/${produto.slug}` },
    openGraph: { url: `/produtos/${produto.slug}` },
  };
}

export default async function ProdutoPage({
  params,
}: PageProps<"/produtos/[slug]">) {
  const { slug } = await params;
  const produto = produtoPorSlug(slug);
  if (!produto) notFound();

  const indice = produtos.findIndex((p) => p.slug === slug);
  const anterior = produtos[indice - 1];
  const proximo = produtos[indice + 1];

  return (
    <>
      <JsonLd data={produtoJsonLd(produto)} />
      <JsonLd data={trilhaJsonLd(produto)} />

      {/* Cabeçalho da linha. Índice grande à esquerda, nome à direita. */}
      <section className="bg-ink text-paper relative isolate overflow-hidden">
        <div className="blueprint absolute inset-0 -z-10" />
        <Container>
          <nav
            aria-label="Trilha"
            className="border-rule-inv flex items-center gap-2 border-b py-5"
          >
            <Link
              href="/produtos"
              className="label-tech hover:text-brand text-paper/55 transition-none"
            >
              Produtos
            </Link>
            <ChevronRight
              aria-hidden
              className="size-3 shrink-0 text-paper/35"
            />
            <span className="label-tech text-paper">{produto.nome}</span>
          </nav>

          <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-section">
            <div className="col-span-12 md:col-span-3">
              <span className="font-display condensed text-numeral text-brand block leading-none font-bold">
                {produto.indice}
              </span>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <h1 className="font-display expanded text-h1 font-bold uppercase">
                {produto.nome}
              </h1>
              <p className="text-lead mt-8 max-w-[48ch] text-paper/70">
                {produto.resumo}.
              </p>
              <div className="mt-11 flex flex-wrap gap-3">
                <Button
                  href={`/contato?produto=${produto.slug}`}
                  variant="inverted"
                >
                  Orçamento desta linha
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Ficha resumida, direto sob o título. Dado técnico antes de qualquer
            texto de venda. */}
        <div className="border-rule-inv border-t">
          <Container>
            <dl className="grid grid-cols-2 md:grid-cols-4">
              {produto.destaques.map((item, i) => (
                <div
                  key={item.label}
                  className={
                    "border-rule-inv py-7 " +
                    (i % 2 === 1 ? "border-l pl-6 " : "") +
                    (i >= 2 ? "border-t md:border-t-0 " : "") +
                    (i === 2 ? "md:border-l md:pl-6 " : "") +
                    (i === 3 ? "md:pl-6 " : "")
                  }
                >
                  <dt className="label-tech text-paper/55">{item.label}</dt>
                  <dd className="font-display semi-expanded text-h5 mt-3 font-bold uppercase">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      </section>

      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 py-section">
          {/* Barra lateral fixa. Sticky é layout, não animação. */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Figure
                ratio="4/3"
                alt={produto.nome}
                label={produto.fotoLabel}
                caption="Imagem ilustrativa"
              />

              <div className="mt-10">
                <LabelRule>Materiais</LabelRule>
                <ul className="mt-5 space-y-2.5">
                  {produto.materiais.map((material) => (
                    <li
                      key={material}
                      className="text-body-sm text-steel flex gap-2.5"
                    >
                      <Check
                        aria-hidden
                        className="text-brand-deep mt-1 size-3.5 shrink-0"
                        strokeWidth={2.5}
                      />
                      {material}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <LabelRule>Marcas nesta linha</LabelRule>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {produto.marcas.map((marca) => (
                    <li
                      key={marca}
                      className="label-tech border-ink/20 text-ink border px-3 py-2"
                    >
                      {marca}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <LabelRule>Normas de referência</LabelRule>
                <ul className="mt-5 space-y-2">
                  {produto.normas.map((norma) => (
                    <li key={norma} className="label-tech text-steel">
                      {norma}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <div className="max-w-[62ch] space-y-7">
              {produto.descricao.map((paragrafo, i) => (
                <p key={i} className="text-body-lg">
                  {paragrafo}
                </p>
              ))}
            </div>

            <div className="mt-20">
              <LabelRule>Especificações</LabelRule>
              <div className="mt-8 overflow-x-auto">
                <SpecTable
                  columns={produto.tabela.columns}
                  rows={produto.tabela.rows}
                  className="min-w-[36rem]"
                />
              </div>
              <p className="text-body-sm text-steel mt-6 max-w-[60ch]">
                Faixas de referência. Modelos e bitolas fora desta tabela
                costumam estar disponíveis sob consulta. Confirme a
                especificação com a nossa equipe antes de fechar o pedido.
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
              <div>
                <LabelRule>Aplicações</LabelRule>
                <ul className="border-rule mt-7 border-t">
                  {produto.aplicacoes.map((aplicacao) => (
                    <li
                      key={aplicacao}
                      className="border-rule text-body-sm border-b py-4"
                    >
                      {aplicacao}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <LabelRule>Ficha resumida</LabelRule>
                <SpecList className="mt-7" items={produto.destaques} />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Navegação entre linhas. */}
      <section className="border-rule bg-paper-2 border-t">
        <Container>
          <div className="grid grid-cols-1 gap-px md:grid-cols-2">
            {anterior ? (
              <Link
                href={`/produtos/${anterior.slug}`}
                className="hover:bg-ink hover:text-paper group border-rule flex flex-col gap-4 py-12 transition-none md:border-r md:pr-8"
              >
                <Label className="group-hover:text-paper/55">
                  {anterior.indice} · Linha anterior
                </Label>
                <span className="font-display semi-expanded text-h4 font-bold uppercase">
                  {anterior.nome}
                </span>
              </Link>
            ) : (
              <div className="border-rule md:border-r" />
            )}

            {proximo ? (
              <Link
                href={`/produtos/${proximo.slug}`}
                className="hover:bg-ink hover:text-paper group flex flex-col gap-4 py-12 transition-none md:items-end md:pl-8 md:text-right"
              >
                <Label className="group-hover:text-paper/55">
                  {proximo.indice} · Próxima linha
                </Label>
                <span className="font-display semi-expanded text-h4 font-bold uppercase">
                  {proximo.nome}
                </span>
              </Link>
            ) : (
              <Link
                href="/produtos"
                className="hover:bg-ink hover:text-paper group flex flex-col gap-4 py-12 transition-none md:items-end md:pl-8 md:text-right"
              >
                <Label className="group-hover:text-paper/55">Catálogo</Label>
                <span className="font-display semi-expanded text-h4 font-bold uppercase">
                  Ver todas as linhas
                </span>
              </Link>
            )}
          </div>
        </Container>
      </section>

      <CtaOrcamento
        produto={produto.slug}
        titulo={`Orçamento de ${produto.nome.toLowerCase()}`}
        texto="Informe diâmetro, classe de pressão e o fluido da linha. Se não tiver esses dados em mãos, descreva a aplicação que a gente especifica junto."
      />
    </>
  );
}
