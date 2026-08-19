import Image from "next/image";
import { cn } from "@/lib/cn";

const RATIOS = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-[16/9]",
  "21/9": "aspect-[21/9]",
  "1/1": "aspect-square",
} as const;

type Ratio = keyof typeof RATIOS;

/**
 * Placeholder de marca. Zero bytes de rede, e numa reuniao le como ficha
 * tecnica em vez de imagem quebrada. O cliente ve o design e ve, ao mesmo
 * tempo, exatamente qual foto ele ainda deve.
 *
 * Nada de banco de imagem aleatorio: o cliente passa a reuniao discutindo a
 * foto em vez do design. Nada de imagem gerada por IA: com cliente industrial
 * conservador isso derruba a confianca na entrega inteira.
 */
function Placeholder({ label }: { label: string }) {
  return (
    <div className="blueprint absolute inset-0 bg-ink-2">
      <div className="hatch absolute inset-0 opacity-60" />
      <div className="absolute inset-0 flex items-end p-4">
        <span className="label-tech text-paper/40">{label}</span>
      </div>
      <div className="absolute top-4 right-4 h-3 w-3 border-t border-r border-paper/20" />
      <div className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-paper/20" />
    </div>
  );
}

export function Figure({
  src,
  alt,
  label,
  caption,
  ratio = "4/3",
  priority = false,
  duotone = true,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
}: {
  /** Ausente ativa o placeholder de marca. Ver docs/lista-de-fotos.md */
  src?: string;
  alt: string;
  /** Texto do placeholder. Descreve a foto que vai entrar aqui. */
  label?: string;
  /** Legenda mono sob a imagem. Toda imagem tecnica leva uma. */
  caption?: string;
  ratio?: Ratio;
  priority?: boolean;
  duotone?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={cn("w-full", className)}>
      <div className={cn("relative isolate w-full overflow-hidden bg-ink-2", RATIOS[ratio])}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover", duotone && "duotone")}
          />
        ) : (
          <Placeholder label={label ?? alt} />
        )}
      </div>
      {caption ? (
        <figcaption className="label-tech mt-3 text-steel">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
