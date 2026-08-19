"use server";

import { z } from "zod";
import { Resend } from "resend";
import { produtos } from "@/content/produtos";
import { site } from "@/content/site";
import type { EstadoOrcamento } from "./orcamento-tipos";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome."),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.email("E-mail inválido."),
  telefone: z
    .string()
    .trim()
    .min(8, "Informe um telefone com DDD.")
    .max(30, "Telefone muito longo."),
  produto: z.string().trim().optional().or(z.literal("")),
  mensagem: z
    .string()
    .trim()
    .min(10, "Descreva o que você precisa, com pelo menos 10 caracteres.")
    .max(4000, "Mensagem muito longa."),
  /**
   * Armadilha de spam. Campo escondido: humano nunca preenche.
   * Aceita qualquer coisa de proposito. Se o schema rejeitasse aqui, o robo
   * receberia erro de validacao e descobriria a armadilha, e sobraria um
   * estado de erro sem nenhum campo destacado na tela. O descarte acontece
   * mais abaixo, devolvendo sucesso falso.
   */
  site: z.string().optional(),
});

export async function enviarOrcamento(
  _anterior: EstadoOrcamento,
  formData: FormData,
): Promise<EstadoOrcamento> {
  const bruto = Object.fromEntries(formData) as Record<string, string>;
  const parsed = schema.safeParse(bruto);

  if (!parsed.success) {
    const erros: NonNullable<EstadoOrcamento["erros"]> = {};
    // O honeypot "site" fica de fora: ele nao tem campo visivel para mostrar
    // erro, e apontar para ele entregaria a armadilha.
    const visiveis = [
      "nome",
      "empresa",
      "email",
      "telefone",
      "produto",
      "mensagem",
    ] as const;
    type CampoVisivel = (typeof visiveis)[number];

    for (const issue of parsed.error.issues) {
      const campo = issue.path[0];
      if (typeof campo !== "string") continue;
      if (!visiveis.includes(campo as CampoVisivel)) continue;
      if (!erros[campo as CampoVisivel])
        erros[campo as CampoVisivel] = issue.message;
    }
    return {
      status: "erro",
      mensagem: "Confira os campos destacados.",
      erros,
      valores: bruto,
    };
  }

  const dados = parsed.data;

  // Robô preencheu a armadilha. Responde sucesso e descarta em silêncio, para
  // o spammer não descobrir que a defesa existe.
  if (dados.site) return { status: "ok", mensagem: "Pedido recebido." };

  const linha = produtos.find((p) => p.slug === dados.produto);
  const nomeLinha = linha?.nome ?? "Não informada";

  const chave = process.env.RESEND_API_KEY;
  if (!chave) {
    // Sem chave configurada o site não pode enviar. Melhor dizer a verdade e
    // empurrar para o WhatsApp do que fingir que enviou.
    return {
      status: "erro",
      mensagem:
        "O envio por e-mail ainda não está ativo neste ambiente. Use o botão do WhatsApp ao lado, ou ligue para " +
        site.contato.telefone +
        ".",
      valores: bruto,
    };
  }

  const corpo = [
    `Nome: ${dados.nome}`,
    `Empresa: ${dados.empresa || "Não informada"}`,
    `E-mail: ${dados.email}`,
    `Telefone: ${dados.telefone}`,
    `Linha de produto: ${nomeLinha}`,
    "",
    "Mensagem:",
    dados.mensagem,
    "",
    "Enviado pelo formulário de orçamento do site scaisul.com.br",
  ].join("\n");

  try {
    const resend = new Resend(chave);
    const { error } = await resend.emails.send({
      from:
        process.env.ORCAMENTO_FROM ??
        "Site Scai do Sul <onboarding@resend.dev>",
      to: process.env.ORCAMENTO_TO ?? site.contato.email,
      replyTo: dados.email,
      subject: `Orçamento pelo site: ${nomeLinha} · ${dados.nome}`,
      text: corpo,
    });

    if (error) {
      console.error("[orcamento] Resend retornou erro:", error);
      return {
        status: "erro",
        mensagem:
          "Não conseguimos enviar agora. Tente pelo WhatsApp ou ligue para " +
          site.contato.telefone +
          ".",
        valores: bruto,
      };
    }

    return {
      status: "ok",
      mensagem:
        "Pedido recebido. Respondemos em horário comercial, normalmente no mesmo dia.",
    };
  } catch (erro) {
    console.error("[orcamento] Falha no envio:", erro);
    return {
      status: "erro",
      mensagem:
        "Não conseguimos enviar agora. Tente pelo WhatsApp ou ligue para " +
        site.contato.telefone +
        ".",
      valores: bruto,
    };
  }
}
