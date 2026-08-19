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
 *
 * O gradiente nunca desce de 0.84 de opacidade. Isso não é gosto, é o piso
 * calculado para o pior caso possível, uma foto quase branca: abaixo disso o
 * título em verde cai de 3:1 e o texto de apoio cai de 4.5:1. Como as fotos
 * quem manda é o cliente, o overlay precisa garantir sozinho a legibilidade,
 * sem depender de a imagem ser escura.
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
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(18,42,30,0.97)_0%,rgba(18,42,30,0.89)_55%,rgba(18,42,30,0.84)_100%)]" />
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
