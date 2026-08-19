# Site institucional · Metalúrgica Scai do Sul

Site institucional e catálogo da Metalúrgica Scai do Sul Ltda., distribuidora técnica
de válvulas, flanges, conexões e instrumentação em Porto Alegre desde 1975.

Desenvolvido pela SoftCode. O arquivo central do projeto é o [CLAUDE.md](./CLAUDE.md):
toda decisão, dado confirmado e pendência com o cliente está registrada lá.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS 4 ·
Lucide React · Resend · Zod. Deploy na Vercel.

Tudo estático, sem banco e sem CMS. O conteúdo vive tipado em `src/content/`.

## Rodando

```bash
npm install
cp .env.example .env.local   # preencher RESEND_API_KEY para o formulário enviar
npm run dev
```

O styleguide vivo fica em `/styleguide`, marcado como `noindex`.

## Comandos

```bash
npm run dev      # desenvolvimento
npm run build    # build de produção
npm run lint     # eslint
npx tsc --noEmit # checagem de tipo
```

## Estrutura

```
src/
  app/          rotas, metadata, sitemap, robots, imagens de prévia de link
  components/   ui (primitivos), layout (casca), sections (blocos de página)
  content/      site, produtos, setores, marcas, navegação
  lib/          cn, whatsapp, seo, og
  actions/      Server Action do formulário de orçamento
docs/
  lista-de-fotos.md   lista numerada de fotos para pedir ao cliente
```

## Pendências

O site está funcional com placeholders de marca no lugar das fotos. A lista completa
do que falta receber do cliente está na seção 9 do [CLAUDE.md](./CLAUDE.md) e em
[docs/lista-de-fotos.md](./docs/lista-de-fotos.md).

Atenção especial: **as especificações técnicas das linhas de produto são provisórias**
e precisam ser conferidas contra o catálogo real antes da publicação.
