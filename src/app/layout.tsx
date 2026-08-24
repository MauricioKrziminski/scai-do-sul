import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Sans, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { site } from "@/content/site";
import { JsonLd, organizacaoJsonLd } from "@/lib/seo";
import "./globals.css";

/**
 * Tres familias, tres funcoes. Uma grita, uma le, uma mede.
 * O eixo wdth do Archivo entrega o display expandido e a condensada das
 * tabelas de especificacao, sem precisar de uma quarta fonte.
 * Todos os acentos do portugues vivem no subset latin.
 */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-geist-mono",
  display: "swap",
});

/**
 * `viewportFit: "cover"` porque o Safari do iPhone desenha o conteúdo da
 * página de ponta a ponta, por baixo da barra de status e da barra de
 * endereço, mas resolve `top: 0` e `bottom: 0` de elemento fixo dentro da
 * área segura. Sem declarar `cover`, o cabeçalho grudado sentava uns 60px
 * abaixo do topo real e o painel do menu terminava uns 60px acima do pé real,
 * e nas duas faixas aparecia a página passando atrás.
 *
 * Declarar `cover` alinha as duas coisas: a barra e o painel passam a chegar
 * na borda de verdade. Em troca, é o site que precisa afastar o conteúdo do
 * recorte da tela, com `env(safe-area-inset-*)` no cabeçalho, no painel do
 * menu, no botão do WhatsApp e na margem lateral do Container. Em aparelho
 * sem recorte todos esses valores são zero e nada muda.
 */
export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    // Nome da empresa primeiro em todas as abas, depois a página.
    // A home fica só com o nome, sem descritor.
    default: site.nome,
    template: `${site.nome} · %s`,
  },
  description:
    "Distribuidora técnica de válvulas, flanges, conexões e instrumentação para indústria e saneamento em Porto Alegre desde 1975. Linha própria SCAI e marcas líderes do setor.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    // Cada rota redeclara a sua propria url. Se ficasse so aqui, toda pagina
    // herdaria a raiz como og:url e a previa de link apontaria para o lugar
    // errado.
    url: "/",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${instrument.variable} ${geistMono.variable} h-full`}
    >
      <body className="bg-paper text-ink flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="label-tech bg-ink text-paper sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-3"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
        <JsonLd data={organizacaoJsonLd()} />
      </body>
    </html>
  );
}
