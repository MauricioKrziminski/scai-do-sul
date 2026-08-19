"use client";

import { useActionState, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, AlertTriangle } from "lucide-react";
import { enviarOrcamento } from "@/actions/orcamento";
import { estadoInicial } from "@/actions/orcamento-tipos";
import { produtos } from "@/content/produtos";
import { cn } from "@/lib/cn";

const campoBase =
  "border-rule bg-paper text-ink placeholder:text-steel-2 w-full border px-4 py-3.5 text-body-sm transition-none focus:border-ink focus:outline-none";

function Campo({
  id,
  rotulo,
  erro,
  obrigatorio,
  children,
}: {
  id: string;
  rotulo: string;
  erro?: string;
  obrigatorio?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={id} className="label-tech text-steel">
        {rotulo}
        {obrigatorio && <span className="text-brand-deep ml-1">*</span>}
      </label>
      {children}
      {erro && (
        <p id={`${id}-erro`} className="text-body-sm text-brand-deep">
          {erro}
        </p>
      )}
    </div>
  );
}

export function FormOrcamento() {
  const searchParams = useSearchParams();
  const [estado, formAction, pendente] = useActionState(enviarOrcamento, estadoInicial);
  const [produtoSelecionado, setProdutoSelecionado] = useState(
    searchParams.get("produto") ?? "",
  );

  const valor = (campo: string) => estado.valores?.[campo] ?? "";
  const invalido = (campo: string) =>
    estado.erros?.[campo as keyof typeof estado.erros];

  if (estado.status === "ok") {
    return (
      <div className="border-ink border p-10 md:p-14">
        <Check aria-hidden className="text-brand-deep size-8" strokeWidth={2} />
        <h3 className="font-display expanded text-h3 mt-8 font-bold uppercase">
          Pedido recebido
        </h3>
        <p className="text-body-lg text-steel mt-6 max-w-[44ch]">{estado.mensagem}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-7" noValidate>
      {estado.status === "erro" && estado.mensagem && (
        <div
          role="alert"
          className="border-brand-deep text-body-sm flex gap-3 border p-5"
        >
          <AlertTriangle aria-hidden className="text-brand-deep mt-0.5 size-4 shrink-0" />
          <span>{estado.mensagem}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <Campo id="nome" rotulo="Nome" obrigatorio erro={invalido("nome")}>
          <input
            id="nome"
            name="nome"
            type="text"
            autoComplete="name"
            defaultValue={valor("nome")}
            aria-invalid={Boolean(invalido("nome"))}
            aria-describedby={invalido("nome") ? "nome-erro" : undefined}
            className={cn(campoBase, invalido("nome") && "border-brand-deep")}
          />
        </Campo>

        <Campo id="empresa" rotulo="Empresa" erro={invalido("empresa")}>
          <input
            id="empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            defaultValue={valor("empresa")}
            className={campoBase}
          />
        </Campo>

        <Campo id="email" rotulo="E-mail" obrigatorio erro={invalido("email")}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            defaultValue={valor("email")}
            aria-invalid={Boolean(invalido("email"))}
            aria-describedby={invalido("email") ? "email-erro" : undefined}
            className={cn(campoBase, invalido("email") && "border-brand-deep")}
          />
        </Campo>

        <Campo id="telefone" rotulo="Telefone com DDD" obrigatorio erro={invalido("telefone")}>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(51) 90000-0000"
            defaultValue={valor("telefone")}
            aria-invalid={Boolean(invalido("telefone"))}
            aria-describedby={invalido("telefone") ? "telefone-erro" : undefined}
            className={cn(campoBase, invalido("telefone") && "border-brand-deep")}
          />
        </Campo>
      </div>

      <Campo id="produto" rotulo="Linha de produto" erro={invalido("produto")}>
        <select
          id="produto"
          name="produto"
          value={produtoSelecionado}
          onChange={(e) => setProdutoSelecionado(e.target.value)}
          className={campoBase}
        >
          <option value="">Não sei ainda, preciso de ajuda</option>
          {produtos.map((produto) => (
            <option key={produto.slug} value={produto.slug}>
              {produto.indice} · {produto.nome}
            </option>
          ))}
        </select>
      </Campo>

      <Campo
        id="mensagem"
        rotulo="O que você precisa"
        obrigatorio
        erro={invalido("mensagem")}
      >
        <textarea
          id="mensagem"
          name="mensagem"
          rows={7}
          defaultValue={valor("mensagem")}
          placeholder="Diâmetro, classe de pressão, fluido da linha e quantidade. Se não tiver esses dados, descreva a aplicação."
          aria-invalid={Boolean(invalido("mensagem"))}
          aria-describedby={invalido("mensagem") ? "mensagem-erro" : undefined}
          className={cn(campoBase, "resize-y", invalido("mensagem") && "border-brand-deep")}
        />
      </Campo>

      {/* Armadilha de spam. Fora da tela e fora da ordem de tabulação. */}
      <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="site">Não preencha este campo</label>
        <input id="site" name="site" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-6 pt-2">
        <button
          type="submit"
          disabled={pendente}
          className="label-tech bg-ink text-paper border-ink hover:bg-brand-deep hover:border-brand-deep self-start border px-8 py-4 transition-none disabled:opacity-50"
        >
          {pendente ? "Enviando..." : "Enviar pedido de orçamento"}
        </button>

        {/* Texto corrido, nao label-tech: tracking de 0.2em serve para rotulo
            de duas palavras, nao para frase que precisa ser lida. */}
        <p className="text-body-sm text-steel max-w-[54ch]">
          Ao enviar, você concorda com o uso dos seus dados apenas para responder a
          este contato, conforme a nossa{" "}
          <a href="/privacidade" className="text-ink hover:text-brand-deep underline underline-offset-4">
            política de privacidade
          </a>
          .
        </p>
      </div>
    </form>
  );
}
