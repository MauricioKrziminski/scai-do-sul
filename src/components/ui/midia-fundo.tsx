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
 * O gradiente vai de 0.68 no topo a 0.93 embaixo, e esse 0.68 é o piso
 * calculado, não escolhido: no pior caso possível, uma foto quase branca, ele
 * mantém o texto claro em 5:1. Como quem manda as fotos é o cliente, o overlay
 * precisa garantir a legibilidade sozinho, sem depender de a imagem ser escura.
 *
 * O piso já foi 0.84, calculado para o **verde** também passar em cima da
 * foto. Só que a matemática ali é implacável: o verde da marca é um meio-tom,
 * e para ele bater 3:1 contra uma foto clara o overlay precisa esmagar a
 * imagem para uns 40 níveis de tom, o que apaga a foto. Foi exatamente o que
 * aconteceu com a fachada da empresa, que sumiu atrás do verde chapado.
 *
 * A troca foi consciente: **texto de destaque sobre foto é claro, não verde.**
 * O verde continua sendo o acento em tudo que está sobre fundo chapado, que é
 * a maior parte do site. Com isso o overlay cai para 0.68 e a foto aparece com
 * o dobro de faixa tonal.
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
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(18,42,30,0.93)_0%,rgba(18,42,30,0.78)_55%,rgba(18,42,30,0.68)_100%)]" />
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
