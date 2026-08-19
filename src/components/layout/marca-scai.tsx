import { cn } from "@/lib/cn";

/**
 * Pictograma da marca: a válvula gaveta do logotipo da Scai do Sul,
 * redesenhada em vetor a partir de `public/logo/logo-scai.png`.
 *
 * O arquivo original tem 225 por 225 pixels, sem transparência e com o fundo
 * verde chapado, então não escala e não dá para recolorir. Esta versão usa
 * `currentColor`, o que deixa a marca branca sobre o escuro e verde funda
 * sobre o papel, com o mesmo desenho.
 *
 * PENDENTE: trocar por uma conversão do vetor original quando o Eduardo
 * mandar o arquivo em AI, EPS ou SVG. Ver CLAUDE.md seção 9.
 *
 * De cima para baixo: volante, castelo em funil, haste, gaxeta, flange do
 * castelo e corpo com as duas flanges de extremidade.
 */
export function MarcaScai({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 118"
      fill="currentColor"
      fillRule="evenodd"
      aria-hidden="true"
      focusable="false"
      className={cn("block", className)}
    >
      {/* Volante, visto de perfil. Aro vazado. */}
      <path d="M4 0h36a4 4 0 0 1 0 8H4a4 4 0 0 1 0-8Zm1.8 3a1.2 1.2 0 0 0 0 2.4h32.4a1.2 1.2 0 0 0 0-2.4H5.8Z" />

      {/* Castelo em funil, descendo do volante até a haste. */}
      <path d="M7 8h5.4l6 9h7.2l6-9H37l-7.4 11.2V22H14.4v-2.8L7 8Z" />

      {/* Haste. */}
      <path d="M17 22h10v20H17z" />

      {/* Gaxeta: bloco vazado. */}
      <path d="M11 42h22v6H11zM9 48h26v11H9zm3 3v5h20v-5H12Zm-1 11h22v5H11z" />

      {/* Flange do castelo: bloco vazado, mais largo. */}
      <path d="M5 67h34v12H5zm3.5 3.5v5h27v-5h-27Z" />

      {/* Corpo, com as duas flanges de extremidade apontando para baixo. */}
      <path d="M14 79h16v7h12v20h-4v10h-9v-10H15v10H6v-10H2V86h12v-7Z" />
    </svg>
  );
}
