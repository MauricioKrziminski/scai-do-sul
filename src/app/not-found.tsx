import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LinhasProduto } from "@/components/sections/linhas-produto";
import { site } from "@/content/site";

export const metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NaoEncontrada() {
  return (
    <>
      <section className="bg-ink text-paper relative isolate overflow-hidden">
        <div className="blueprint absolute inset-0 -z-10" />
        <Container>
          <div className="py-section-lg grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 md:col-span-3">
              <span className="font-display condensed text-numeral text-brand block leading-none font-bold">
                404
              </span>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <Label inverted>Endereço não encontrado</Label>
              <h1 className="font-display expanded text-h1 mt-7 font-bold uppercase">
                Esta página
                <br />
                não existe
              </h1>
              <p className="text-lead mt-8 max-w-[46ch] text-paper/70">
                O endereço pode ter mudado ou o link estar errado. As linhas de
                produto estão logo abaixo. Se preferir, ligue para{" "}
                {site.contato.telefone}.
              </p>
              <div className="mt-11 flex flex-wrap gap-3">
                <Button href="/" variant="inverted">
                  Voltar ao início
                </Button>
                <Button href="/contato" variant="ghostInverted">
                  Falar com a equipe
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <LinhasProduto />
        </Container>
      </section>
    </>
  );
}
