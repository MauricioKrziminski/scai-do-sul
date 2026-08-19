import Image from "next/image";

/**
 * Fundo das faixas escuras.
 *
 * Com `src`, entra a foto tratada em duotone com um gradiente por cima, para
 * o texto continuar legível sobre qualquer imagem. Sem `src`, entra a grade
 * de projeto, que é o placeholder do projeto inteiro.
 *
 * A regra do site é essa e vale em todo lugar: **grade quadriculada significa
 * foto pendente**. Não existe grade decorativa que não vá virar imagem.
 * Ver docs/lista-de-fotos.md para a lista do que falta.
 */
export function MidiaFundo({
  src,
  alt = "",
  priority = false,
}: {
  src?: string;
  alt?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="duotone absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(18,42,30,0.94)_0%,rgba(18,42,30,0.62)_50%,rgba(18,42,30,0.42)_100%)]" />
      </>
    );
  }

  return (
    <>
      <div className="blueprint absolute inset-0 -z-20" />
      <div className="hatch absolute inset-0 -z-10 opacity-50" />
    </>
  );
}
