import { ArrowUpRight } from "lucide-react";
import { site, enderecoLinha } from "@/content/site";
import { cn } from "@/lib/cn";

const RATIOS = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
} as const;

/**
 * Mapa do Google com o ponto na Scai do Sul, navegável.
 *
 * Usa o endpoint `output=embed`, que não exige chave de API.
 *
 * Vai por coordenada e não por endereço porque testei os dois: a busca por
 * "Av. Cairú, 525" no Google centra uma quadra fora, na Av. Brasil, e ainda
 * deixa um card de carregamento travado sobre o mapa. Com a coordenada o mapa
 * abre na quadra certa, com a Av. Cairú visível, e navega normalmente.
 *
 * O pino vem da sintaxe `q=lat,lng (Nome)`. Só coordenada, sem os parênteses,
 * centra o mapa mas não desenha marcador nenhum.
 *
 * `loading="lazy"` importa aqui: o iframe do Google puxa bastante script, e
 * na página de contato ele fica abaixo da dobra. Sem isso, ele competiria com
 * o formulário, que é o que realmente interessa naquela tela.
 *
 * ATENÇÃO LGPD: este iframe é conteúdo de terceiro e o Google grava cookie
 * quando ele carrega. Está declarado na política de privacidade, seções 04 e
 * 06. Se o mapa sair do site, tirar de lá também.
 */
export function MapaGoogle({
  ratio = "4/3",
  className,
  comLink = true,
}: {
  ratio?: keyof typeof RATIOS;
  className?: string;
  /** Link para abrir no app do Google Maps, útil no celular. */
  comLink?: boolean;
}) {
  const { lat, lng } = site.coordenadas;
  const consulta = encodeURIComponent(`${lat},${lng} (${site.nome})`);

  return (
    <div className={cn("w-full", className)}>
      <div className={cn("border-rule w-full overflow-hidden border", RATIOS[ratio])}>
        <iframe
          title={`Mapa com a localização da ${site.nome}, ${enderecoLinha}`}
          src={`https://www.google.com/maps?q=${consulta}&z=16&hl=pt-BR&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-full w-full border-0 grayscale-[0.35]"
        />
      </div>

      {comLink && (
        <a
          href={site.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="label-tech text-steel hover:text-brand-deep mt-3.5 inline-flex items-center gap-2 transition-none"
        >
          Abrir no app do Google Maps
          <ArrowUpRight aria-hidden className="size-3.5 shrink-0" strokeWidth={2} />
        </a>
      )}
    </div>
  );
}
