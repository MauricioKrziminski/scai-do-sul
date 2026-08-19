import type { Metadata } from "next";
import { Archivo, Instrument_Sans, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { site } from "@/content/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} · Válvulas, Conexões e Equipamentos Industriais`,
    template: `%s · ${site.nomeCurto}`,
  },
  description:
    "Distribuidora técnica de válvulas, flanges, conexões e instrumentação para indústria e saneamento em Porto Alegre desde 1975. Linha própria SCAI e marcas líderes do setor.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    url: site.url,
  },
  robots: { index: true, follow: true },
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
      </body>
    </html>
  );
}
