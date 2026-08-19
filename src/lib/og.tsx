import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Fonte da marca em arquivo local, versionada em src/assets.
 *
 * Satori nao le woff2, e tambem NAO le fonte variavel: passar o Archivo
 * variavel quebra o build com "Cannot read properties of undefined".
 * Por isso usamos o Archivo Black, que e a instancia estatica da mesma
 * familia e cai bem no tamanho de uma previa de link.
 */
async function fonteArchivo() {
  return readFile(join(process.cwd(), "src/assets/ArchivoBlack-Regular.ttf"));
}

/**
 * Prévia de link. É o que o cliente vê quando alguém manda o endereço do site
 * no WhatsApp, que neste setor é o canal principal.
 */
export async function ogImagem({
  titulo,
  rotulo,
  indice,
  specs,
}: {
  titulo: string;
  rotulo: string;
  indice?: string;
  specs?: string[];
}) {
  const archivo = await fonteArchivo();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "#100d0a",
          color: "#efede8",
          fontFamily: "Archivo",
          padding: "64px 72px",
        }}
      >
        {/* Barra de acento no topo. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 12,
            backgroundColor: "#c8321e",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ fontSize: 20, letterSpacing: 4, color: "#a8a29b", textTransform: "uppercase" }}>
              Metalúrgica
            </span>
            <span style={{ fontSize: 40, letterSpacing: -1, textTransform: "uppercase" }}>
              Scai do Sul
            </span>
          </div>
          {indice && (
            <span style={{ fontSize: 92, color: "#c8321e", lineHeight: 1 }}>{indice}</span>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <span style={{ fontSize: 22, letterSpacing: 5, color: "#a8a29b", textTransform: "uppercase" }}>
            {rotulo}
          </span>
          <span
            style={{
              fontSize: titulo.length > 34 ? 76 : 96,
              lineHeight: 1.02,
              letterSpacing: -3,
              textTransform: "uppercase",
              maxWidth: 1000,
            }}
          >
            {titulo}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            borderTop: "1px solid rgba(239,237,232,0.2)",
            paddingTop: 26,
            // Satori sobrepoe item de flex quando a linha estoura, em vez de
            // quebrar. Travar o alinhamento evita o texto embolado.
            alignItems: "center",
          }}
        >
          {(specs ?? [`Desde ${site.fundacao}`, "DN 15 a 600", "Porto Alegre RS"]).map((spec) => (
            <span key={spec} style={{ fontSize: 22, letterSpacing: 3, color: "#cfcac1", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              {spec}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [{ name: "Archivo", data: archivo, style: "normal", weight: 400 }],
    },
  );
}
