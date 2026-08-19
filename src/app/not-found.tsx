import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LinhasProduto } from "@/components/sections/linhas-produto";
import { site } from "@/content/site";
import { FaixaHero } from "@/components/sections/faixa-hero";

export const metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NaoEncontrada() {
  return (
    <>
      <FaixaHero
        src="/img/temp/faixa-estoque.jpg"
        fotoLabel="Estoque, corredor de prateleiras"
        numeral="404"
        rotulo="Endereço não encontrado"
        titulo={
          <>
            Esta página
            <br />
            não existe
          </>
        }
        texto={`O endereço pode ter mudado ou o link estar errado. As linhas de produto estão logo abaixo. Se preferir, ligue para ${site.contato.telefone}.`}
        acoes={
          <>
            <Button href="/" variant="inverted">
              Voltar ao início
            </Button>
            <Button href="/contato" variant="ghostInverted">
              Falar com a equipe
            </Button>
          </>
        }
      />

      <section className="py-section">
        <Container>
          <LinhasProduto />
        </Container>
      </section>
    </>
  );
}
