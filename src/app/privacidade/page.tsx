import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/label";
import { site, enderecoLinha } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como a Metalúrgica Scai do Sul trata os dados pessoais coletados pelo site, conforme a Lei Geral de Proteção de Dados.",
  alternates: { canonical: "/privacidade" },
  openGraph: { url: "/privacidade" },
  robots: { index: true, follow: true },
};

const SECOES = [
  {
    indice: "01",
    titulo: "Quem é o controlador dos dados",
    paragrafos: [
      `${site.razaoSocial}, inscrita no CNPJ sob o número ${site.cnpj}, com sede em ${enderecoLinha}, é a responsável pelo tratamento dos dados pessoais coletados neste site.`,
      `Para qualquer assunto relacionado a dados pessoais, o contato é ${site.contato.email} ou o telefone ${site.contato.telefone}.`,
    ],
  },
  {
    indice: "02",
    titulo: "Quais dados coletamos",
    paragrafos: [
      "Coletamos apenas o que você digita no formulário de orçamento: nome, empresa, e-mail, telefone, a linha de produto de interesse e a mensagem que você escreve.",
      "Não pedimos CPF, dado bancário, documento de identidade nem qualquer informação sensível. Não há cadastro, não há login e não há área do cliente.",
    ],
  },
  {
    indice: "03",
    titulo: "Para que usamos",
    paragrafos: [
      "Exclusivamente para responder ao seu contato e elaborar o orçamento que você pediu. A base legal é a execução de procedimentos preliminares a um contrato, a pedido do titular, conforme o artigo 7º, inciso V, da Lei nº 13.709/2018.",
      "Não vendemos, não alugamos e não compartilhamos seus dados com terceiros para fins de publicidade. Não enviamos newsletter nem mala direta sem que você peça.",
    ],
  },
  {
    indice: "04",
    titulo: "Com quem compartilhamos",
    paragrafos: [
      "Apenas com os prestadores de serviço necessários para o site funcionar: o serviço de hospedagem e o serviço de envio de e-mail que entrega a mensagem do formulário à nossa caixa de entrada. Esses prestadores atuam como operadores e não usam os dados para finalidade própria.",
      "Podemos compartilhar dados quando houver obrigação legal ou determinação de autoridade competente.",
    ],
  },
  {
    indice: "05",
    titulo: "Por quanto tempo guardamos",
    paragrafos: [
      "Mantemos as mensagens de orçamento pelo tempo necessário ao atendimento e ao histórico comercial. Se você pedir a exclusão e não houver obrigação legal de retenção, apagamos.",
    ],
  },
  {
    indice: "06",
    titulo: "Cookies e medição de acesso",
    paragrafos: [
      "O site não usa cookie de publicidade nem rastreamento entre sites. Utilizamos apenas medição de acesso para saber quantas pessoas visitam o site e quais páginas são mais vistas, de forma agregada.",
    ],
  },
  {
    indice: "07",
    titulo: "Seus direitos",
    paragrafos: [
      "A Lei Geral de Proteção de Dados garante a você o direito de confirmar se tratamos seus dados, acessá-los, corrigir dado incompleto ou desatualizado, pedir anonimização ou exclusão, saber com quem compartilhamos e revogar o consentimento.",
      `Para exercer qualquer um desses direitos, escreva para ${site.contato.email}. Respondemos em até 15 dias.`,
    ],
  },
  {
    indice: "08",
    titulo: "Alterações nesta política",
    paragrafos: [
      "Se esta política mudar, a versão atualizada passa a valer a partir da publicação nesta página.",
    ],
  },
];

export default function PrivacidadePage() {
  return (
    <>
      <section className="border-rule border-b">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-8 py-section">
            <div className="col-span-12 md:col-span-3">
              <Label>Jurídico · LGPD</Label>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <h1 className="font-display expanded text-h1 font-bold uppercase">
                Política de privacidade
              </h1>
              <p className="text-lead text-steel mt-8 max-w-[52ch]">
                Em resumo: coletamos só o que você digita no formulário, usamos
                só para responder o seu pedido de orçamento, e não repassamos
                para ninguém.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="py-section">
          {SECOES.map((secao) => (
            <section
              key={secao.indice}
              className="border-rule grid grid-cols-12 gap-x-6 gap-y-6 border-b py-12 last:border-b-0"
            >
              <div className="col-span-12 flex items-baseline gap-4 md:col-span-3">
                <span className="label-tech text-molten">{secao.indice}</span>
                <h2 className="font-display semi-expanded text-h5 font-bold uppercase">
                  {secao.titulo}
                </h2>
              </div>
              <div className="col-span-12 space-y-5 md:col-span-8 md:col-start-5">
                {secao.paragrafos.map((paragrafo, i) => (
                  <p key={i} className="text-body max-w-[64ch]">
                    {paragrafo}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
