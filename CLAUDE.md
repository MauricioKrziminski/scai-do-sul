# CLAUDE.md

Arquivo central do projeto. Toda decisão, dado confirmado e pendência vive aqui.
Atualizar ao fim de cada fase, sempre.

---

## REGRAS DE ESCRITA (LEIA ANTES DE ESCREVER QUALQUER TEXTO)

1. **NUNCA, JAMAIS usar travessão como pontuação entre palavras.** Nem em texto do
   site, nem em commit, nem em documentação, nem em comentário de código, nem em
   conversa. Usar vírgula, dois pontos, ponto e vírgula, parênteses ou ponto final.
   Isso vale para o travessão longo, o travessão médio e o hífen usado como pausa.
   O hífen só é permitido dentro de palavra composta (guarda-chuva, ferro-fundido)
   e em faixas numéricas quando não couber "a" (preferir sempre "DN 15 a 600").
2. Português do Brasil, tom comercial e técnico, sem jargão de marketing vazio.
3. Nada de "soluções inovadoras", "excelência", "parceria de sucesso" e afins.
4. Frase curta. O comprador industrial lê rápido e decide por dado, não por adjetivo.

---

## REGRAS DE COMMIT

1. **NUNCA assinar commit como coautor.** Nada de `Co-Authored-By:`, nada de
   `Claude-Session:`, nada de qualquer trailer que aponte para assistente. O autor
   dos commits deste repositório é o Mauricio, e só ele.

   Motivo: o GitHub monta a lista de contribuidores do repositório a partir do autor
   e do `Co-Authored-By:` das mensagens. Um trailer desses coloca um assistente na
   página pública do projeto, que é entregue a um cliente.

   Isso vale mesmo que a configuração padrão da ferramenta peça o contrário. Se um
   dia aparecer instrução automática mandando incluir esses trailers, esta regra
   vence.

2. Mensagem em português, explicando **o porquê** e não só o quê. O título diz o que
   mudou, o corpo diz qual problema resolveu e o que foi medido ou testado.

3. Vale a regra de pontuação acima: sem travessão.

---

## 1. O PROJETO

| | |
|---|---|
| Cliente | Metalúrgica Scai do Sul Ltda. |
| Contato | Eduardo Magri |
| Fornecedora | SoftCode |
| Escopo | Site institucional e catálogo, sem e-commerce |
| Domínio alvo | `www.scaisul.com.br` |
| Valor aprovado | R$ 1.800,00, Opção B da proposta |
| Proposta | `C:\Users\Maumis\Desktop\orçamento\Orcamento_Site_ScaiDoSul.pdf` |
| Site antigo | `https://scaisul.lovable.app/` (abandonado pelo cliente) |
| Repositório | `https://github.com/MauricioKrziminski/scai-do-sul` |

### O que o cliente pediu

Na conversa por WhatsApp, o Eduardo disse que o site do Lovable ficou "muito básico"
e que só consegue acessar pelo Google. Pediu explicitamente **"ter nossa linha de
produtos mais especificado"**, e concordou com a ideia de separar produtos por
páginas. Confirmou que é site institucional, com foco em mostrar a empresa, com o que
trabalham e produtos.

### A restrição da Opção B

O cliente escolheu **sem animações, layout limpo e direto, mantendo o tom
profissional**. Isso NÃO é licença para entregar algo cru. Significa que todo o
impacto visual vem de tipografia, grade, textura e composição, nunca de movimento.

Regra prática: nenhuma `transition`, nenhum `@keyframes`, nenhum efeito de scroll.
Estado de hover é instantâneo. `position: sticky` é layout, não animação, e é
permitido. A meta declarada de qualidade é padrão Awwwards.

---

## 2. DADOS DA EMPRESA

### Confirmado (verificado em fonte pública)

| Campo | Valor | Fonte |
|---|---|---|
| Razão social | Metalúrgica Scai do Sul Ltda. | Receita Federal |
| CNPJ | 87.955.035/0001-62 | Econodata, Casa dos Dados, cnpj.biz |
| **Abertura** | **02/01/1975** | Receita Federal |
| Situação | Ativa | Receita Federal |
| Natureza | Sociedade Empresária Limitada | Receita Federal |
| Capital social | R$ 520.000,00 | Econodata |
| CNAE principal | 46.89-3/99, comércio atacadista | Receita Federal |
| Endereço | Av. Cairú, 525, Navegantes, Porto Alegre RS, 90230-031 | Receita Federal |
| Telefone | (51) 3342-8233 | Site próprio 2018, diretórios |
| E-mail | scaisul@scaisul.com.br | Site próprio 2018 |

### Descobertas que mudam o conteúdo

**1. São 51 anos, não "mais de 30".** O site do Lovable diz "+30 anos". A empresa é de
janeiro de 1975. O site atual subestima o cliente em duas décadas. Usar 1975 e
`anosDeCasa` calculado, nunca número fixo escrito à mão.

**2. É distribuidora, não fabricante.** CNAE é comércio atacadista. O site próprio de
2018 diz textualmente: *"Temos longa tradição no comércio de materiais industriais"*.

> **PROIBIDO afirmar no site:** "nossa fábrica", "produzimos", "fabricamos", "linha de
> produção", "parque fabril", "nosso processo produtivo". Apesar do nome
> "Metalúrgica", a empresa não fabrica.

O posicionamento correto é **distribuidora técnica com linha própria**. A venda é
curadoria, estoque, procedência de marca e atendimento técnico. Existe catálogo de
marca própria SCAI, o que é mais forte do que revenda pura.

**3. As marcas representadas são o ativo mais desperdiçado.** E a lista real veio da
**placa da própria empresa**, fotografada em agosto de 2026
(`public/img/scai-sul-local.jpg`). Essa foto é evidência atual e substituiu os
catálogos de 2018 do Wayback:

| Marca | Linha |
|---|---|
| SCAI | Linha própria da casa |
| TUPY | Conexões de ferro fundido maleável, o padrão brasileiro |
| LUPATECH MIPEL | Válvulas industriais |
| DECA | Registros e metais sanitários |
| TUPER | Tubos e perfis de aço |
| KLINGER | Juntas e materiais de vedação |
| ISOVER | Saint-Gobain, lã de vidro e isolamento térmico |
| MICROMAZZA | Válvulas e equipamentos |
| DEXCO | Materiais para construção |

A placa **derrubou três marcas** que vinham da fonte de 2018 e não estão mais lá:
GENEBRE, DRAKO e MONTANA. E trouxe quatro que não apareciam em lugar nenhum: DEXCO,
KLINGER, TUPER e LUPATECH MIPEL.

A lista de marcas está confirmada. Qual marca atende qual linha ainda é inferência a
partir do que cada fabricante produz, e precisa de confirmação.

### O que mais a placa confirmou

- **Desde 1975**, escrito na própria placa. Fecha a questão.
- Telefone 3342-8233 e e-mail scaisul@scaisul.com.br. O `@terra.com.br` que aparecia
  em diretórios é legado.
- Descritor oficial da empresa: **"Válvulas e Acessórios Industriais"**.
- O pictograma da placa é a mesma válvula gaveta do logotipo, o que valida o
  redesenho em `marca-scai.tsx`.

### E abriu uma questão nova

**ISOVER está na placa.** Ou seja, a empresa continua trabalhando com lã de vidro e
isolamento térmico, que era uma das quatro categorias principais em 2018 e sumiu do
site do Lovable. Hoje o site tem nove linhas e **nenhuma cobre isolamento**. Vale
perguntar ao Eduardo se entra como décima linha. O mesmo vale para KLINGER: juntas e
vedação também não têm linha própria hoje.

### Copy verbatim recuperada (Wayback, 30/12/2018)

Material da própria empresa, melhor que qualquer texto genérico:

- *"Oferecendo qualidade e eficiência em soluções industriais desde 1975."*
- *"Atuamos a mais de 40 anos no mercado de válvulas e conexões."* (escrito por volta
  de 2016, hoje são 50 e poucos)
- *"Temos longa tradição no comércio de materiais industriais, atendendo as
  necessidades diferentes tipos de indústrias."* (o erro de concordância é do original)
- *"Temos compromisso com a satisfação do cliente e buscamos superar suas expectativas
  com qualidade e respeito a prazos acordados."*
- Setores, nas palavras deles: *"Fornecemos soluções para indústrias siderúrgicas,
  metalúrgicas, químicas, petroquímicas, refinarias, usinas, alimentícias e outras."*
- Categorias que eles mesmos listavam: **Válvulas e Registros, Flanges e Conexões,
  Lã de Vidro, Aparelhos e Acessórios.**

Snapshot: `http://web.archive.org/web/20181230073752/http://scaisul.com.br/`
Catálogo próprio: `.../web/20181230073913if_/http://scaisul.com.br/assets/SCAI.pdf`
(3,8 MB, escaneado, precisa de OCR para virar lista de SKU)
Foto da fachada: `img/fachada.jpg` no mesmo snapshot.

---

## 3. STACK

| Item | Versão | Nota |
|---|---|---|
| Next.js | 16.3.1 | App Router, Turbopack |
| React | 19.2.8 | |
| TypeScript | 5 | `strict` |
| Tailwind CSS | 4 | Config em CSS via `@theme`, sem `tailwind.config` |
| lucide-react | 1.33 | **Única** biblioteca de ícone do projeto |
| resend | 6.20 | Envio do formulário de orçamento |
| zod | 4 | Validação da Server Action |
| Node | 24.12 | |
| Deploy | Vercel | |

Tudo estático. Sem banco, sem CMS. Server Component por padrão, `'use client'` só no
formulário e no menu mobile.

---

## 4. DESIGN SYSTEM

### Referência

Primária: **icomat.co.uk**, Awwwards Site of the Day de abril de 2026, estúdio
REJOUICE. Fizemos o teardown do CSS compilado. Secundárias: Q Industrial (Awwwards
SOTD, fórmula cinza mais um único vermelho) e Terminal Industries (Site of the Month).

Herdado do iCOMAT: peso único no display, tracking zero nos títulos, entrelinha
negativa, rótulo mono em caixa alta carregando 100% do tracking, índice numerado,
tabela de especificação com unidade no cabeçalho, ritmo vertical generoso, sem
container de largura máxima apertada.

NÃO herdado: o iCOMAT é escuro, com cantos de 36px e vidro desfocado, um registro
aeroespacial de sala limpa. Metalurgia é quente e pesada. Trocamos por base clara,
canto duro e fio de cabelo como estrutura.

### Tipografia

```
DISPLAY    Archivo, eixo wdth 125 (expandida), peso 700, CAIXA ALTA
CORPO      Instrument Sans 400 e 500
TÉCNICA    Geist Mono 400, CAIXA ALTA, tracking 0.2em, 11px e 12px
```

Três famílias, três funções: uma grita, uma lê, uma mede. O eixo `wdth` do Archivo
também entrega a condensada (`wdth 78`) dos numerais gigantes e das tabelas, então
não precisamos de uma quarta fonte. Nunca passar de três famílias.

Todos os acentos do português vivem no subset `latin`, verificado direto na API do
Google Fonts. `subsets: ["latin"]` basta, `latin-ext` seria desperdício.

Utilitários: `expanded`, `semi-expanded`, `condensed`, `label-tech`.

**Hierarquia por tamanho e valor, jamais por peso.** Todo display é 700. Todo corpo é
400. Não existe "meio bold" no projeto.

### Cor

**Derivada do logotipo da empresa**, em `public/logo/logo-scai.png`. O verde foi
extraído do arquivo: **#42a940**, que ocupa 73,6% dos pixels. A marca é verde e branco.

```
--color-paper       #edeee8   papel, levemente puxado para o verde
--color-ink         #122a1e   verde fundo da marca, nunca preto
--color-steel       #626760   texto secundário, mesma matiz
--color-brand       #42a940   verde exato do logotipo, SÓ sobre escuro
--color-brand-deep  #2a6f2a   versão funda, para texto e ícone sobre o papel
--color-rule        rgb(13 18 12 / 0.14)
```

**Duas cores mais um acento, nunca três.** O verde aparece em estado ativo, seta de
chamada, índice de seção e numeral. Nada além disso.

> **O escuro é verde de verdade, não preto tintado.** `#122a1e` é escuro o bastante
> para manter o peso industrial e claro o bastante para o verde do logo continuar
> legível em cima (5.07:1).
>
> O verde do site temporário do Lovable, `#1b4b33`, foi testado e descartado: ali o
> verde do logo cai para 3.32:1 e reprova, o que obrigaria os destaques a virarem
> brancos, exatamente como o Lovable fez. A marca perderia presença nos números e
> índices.

> **REGRA CRÍTICA: nunca usar `--color-brand` como texto sobre o papel.** O verde puro
> dá 2.57:1 ali, e reprova. Sobre o escuro ele dá 6.30:1 e é o certo. Para texto sobre
> o claro, usar `--color-brand-deep`, que dá 5.28:1. Na prática:
> `text-brand` só dentro de bloco escuro, `text-brand-deep` só sobre o papel.

### Regras invioláveis

- **`box-shadow` é proibido no projeto inteiro.** Estrutura vem de fio de cabelo.
  Já existe um reset global zerando sombra em `globals.css`.
- Grade com linha por **borda de célula**, não por `gap-px` sobre fundo colorido.
  O método do fundo parece mais limpo, mas quebra quando a quantidade de itens não
  fecha a última fila: a célula que sobra vira um retângulo cinza. Aconteceu com 9
  marcas em 4 colunas e com 9 produtos em 2 colunas. Borda por célula funciona com
  qualquer quantidade em qualquer breakpoint.
- Divisão assimétrica sempre: 3/9, 4/8 ou 5/7. **Nunca 50/50.**
- `max-w-[52ch]` em todo parágrafo de corpo. Medida longa é o principal indicador de
  site não projetado.
- `tabular-nums` em todo numeral estrutural.
- Grão fixo em `body::after`, `position: fixed`, para não rolar junto. É o que faz
  ler como impresso.
- Toda imagem técnica leva legenda em mono. É o que separa engenharia de folheto.
- **Contraste conferido em AA.** Os valores foram calculados, não estimados:
  `--color-steel` sobre papel dá 4.96:1, `--color-brand-deep` 5.28:1, `--color-brand`
  sobre o escuro 6.30:1, e nas faixas escuras o mínimo usado é `text-paper/55`, que dá
  5.48:1. Se mudar cor, recalcular antes de commitar.

### Imagens

> **REGRA: grade quadriculada significa foto pendente. Sempre.** Não existe grade
> decorativa no projeto. Todo lugar onde ela aparece está esperando imagem, e some
> quando a foto chegar. Se precisar de textura que não vira foto, use outra coisa.

Dois componentes, mesma lógica:

- `Figure` (`src/components/ui/figure.tsx`) para imagem dentro do conteúdo, com
  legenda mono. Sem `src`, mostra o placeholder de marca: bloco escuro com grade de
  projeto, hachura diagonal, marcas de canto e rótulo nomeando a foto que entra ali.
- `MidiaFundo` (`src/components/ui/midia-fundo.tsx`) para fundo de faixa escura,
  usado pelo `Hero` da home e pelo `FaixaHero` de todas as páginas internas. Com
  `src`, entra a foto em duotone com gradiente por cima; sem, entra a grade.

Zero bytes de rede, e numa reunião lê como ficha técnica em vez de imagem quebrada.

**Sobre foto, texto claro e sólido. Verde nunca.** Essa regra saiu de medição, não de
gosto. O verde da marca é um meio-tom: para ele bater 3:1 contra uma foto clara, o
overlay precisa ir a 0.84 e esmagar a imagem para uns 40 níveis de tom. Foi o que
aconteceu com a fachada da empresa, que sumiu atrás de um verde chapado.

A troca: o overlay caiu para 0.68 no topo e 0.93 no pé, a foto aparece com o dobro de
faixa tonal, e o texto sobre ela é `text-paper` sólido, sem opacidade. Medido na tela
real, o pior fundo do hero da home dá 6.18:1 para o título e 5.63:1 para o texto de
apoio. O verde continua sendo o acento em tudo que está sobre fundo chapado, que é a
maior parte do site.

Por isso `Label inverted` é sólido e o lead dos heroes não tem opacidade. Se alguém
"melhorar" isso pondo `text-paper/70` de volta, quebra sobre foto clara.

**Fotos temporárias em `public/img/temp/`.** São do banco livre Pexels, só para o
cliente ver o site com imagem de verdade. Todas devem sair antes da publicação.
Ver `public/img/temp/LEIA-ME.md`, que lista o que cada uma representa e as três que
não batem exatamente com o rótulo.

**Proibido:** `source.unsplash.com` (morto desde 2024, retorna 503), foto de banco
aleatória (o cliente passa a reunião discutindo a foto em vez do design) e imagem
gerada por IA (com cliente industrial conservador isso derruba a confiança na entrega
inteira).

Proporções travadas: `4/3` produto, `16/9` faixa de fábrica, `1/1` bento. Quando as
fotos reais chegarem, recorta a foto, nunca o layout.

Todas as fotos levam `duotone` (`grayscale` mais `contrast(1.14)`). As imagens do
cliente virão de câmeras, luzes e anos diferentes, e o grade é o que faz virar um
ensaio só. Isso não é estética, é gestão de risco.

---

## 5. ARQUITETURA

```
src/
  app/
    layout.tsx              fontes, metadata base
    page.tsx                home
    styleguide/page.tsx     documento interno, noindex
    empresa/ produtos/ produtos/[slug]/ setores/ contato/ privacidade/
  components/
    ui/       container rule label figure spec-table button ticker stat section
    layout/   header footer whatsapp-fab
    sections/ blocos de página
  content/    site.ts produtos.ts setores.ts marcas.ts   (tipado, fonte de verdade)
  lib/        cn.ts whatsapp.ts seo.ts
  actions/    orcamento.ts   Server Action com Resend
```

Todo dado de conteúdo vive em `src/content/`. Nenhum texto solto dentro de componente.

---

## 5.1 FAIXAS DE TELA CHEIA

Todos os heroes ocupam a tela inteira. "Tela inteira" aqui não é `100svh`: é `100svh`
menos o cabeçalho fixo e menos o que vem logo depois da faixa, senão o elemento
seguinte fica cortado na dobra.

O que a própria faixa renderiza por dentro (trilha de navegação e tira de dados) **não
é descontado por número fixo**, porque a altura real deles muda com a largura: a tira
de dados mede 83px em 390, 128px em 768 e 104px em 1440. Um valor fixo erraria em
todas menos uma. Quem resolve é o flexbox: a seção recebe a altura alvo, trilha e tira
ficam com o tamanho natural e a área de conteúdo absorve o resto.

`svh` e não `vh`: no celular a barra do navegador entra e sai, e `vh` mede a altura sem
a barra, o que corta o pé da faixa.

Verificado por medição em 7 rotas × 11 tamanhos: **de 390px de largura para cima, 63
de 63 fecham exato**, até 1920x1080. Abaixo disso (320x568 e 360x640) o conteúdo
genuinamente não cabe e a faixa cresce além da tela, que é o comportamento correto de
um `min-height`. Forçar caber ali exigiria encolher o tipo a ponto de estragar a
escala.

Nenhuma página tem elemento entre o hero e a próxima seção. Se voltar a ter, precisa
ser declarado em `temTicker`, senão o hero empurra esse elemento para fora da primeira
tela sem avisar.

Telas baixas de notebook (1024x700, 1280x720) são resolvidas por media query de
**altura**, não de largura: ali a largura é de desktop mas a altura é de celular, e
breakpoint de largura não enxerga esse caso.

## 6. ARQUITETURA DA HOME

Arco herdado do iCOMAT: problema, contraste, prova, processo, prova social, visão.

```
00  Hero              faixa escura sangrando, foto tratada, headline expandida gigante
01  Tese              51 anos especificando válvula e conexão
03  Linhas de produto grade de borda compartilhada, 9 cards, índice O1 a O9
04  Marcas            TUPY DECA GENEBRE ISOVER DRAKO MICROMAZZA MONTANA SCAI
05  Números           parede de numerais condensados
06  Setores           faixa escura sangrando com foto e overlay em gradiente
07  Como comprar      O1 consulta, O2 especificação, O3 orçamento, O4 entrega
08  CTA orçamento
```

Rodapé expõe CNPJ, endereço com link para o Maps, telefone e e-mail. Dado de registro
à mostra é padrão de credibilidade industrial e vale mais que selo genérico.

---

## 7. FASES

| # | Fase | Estado |
|---|---|---|
| 0 | Fundação: scaffold, design system, primitivos, styleguide | **CONCLUÍDA** |
| 1 | Casca: header, footer, FAB WhatsApp, metadata | **CONCLUIDA** |
| 2 | Home: as nove seções com conteúdo real | **CONCLUIDA** |
| 3 | Produtos: índice, template `[slug]`, 9 linhas | **CONCLUIDA** |
| 4 | Empresa e Setores | **CONCLUIDA** |
| 5 | Contato: Server Action com Resend, WhatsApp, LGPD | **CONCLUIDA** |
| 6 | SEO: metadata por rota, OG dinâmico, JSON-LD, sitemap | **CONCLUIDA** |
| 7 | Acabamento: a11y, responsivo, 404, README | **CONCLUIDA** |

Cada fase termina em commit próprio, `npm run build` limpo e atualização desta tabela.

---

## 8. DECISÕES TOMADAS

| Data | Decisão | Porquê |
|---|---|---|
| 2026-08-19 | Next 16 App Router, tudo estático | Site institucional sem dado dinâmico. Estático é mais rápido, mais barato e mais fácil de indexar |
| 2026-08-19 | Tailwind 4 com `@theme` em CSS | Sem arquivo de config. Token e utilitário no mesmo lugar |
| 2026-08-19 | Archivo expandida mais Instrument Sans mais Geist Mono | Grotesca expandida é o sinal mais confiável de "isso custou dinheiro" em design estático, e ninguém usa em site industrial brasileiro |
| 2026-08-19 | Base clara com faixas escuras pontuais | Sustenta melhor tabela técnica densa e leitura longa, e envelhece melhor que fundo escuro |
| 2026-08-19 | Um acento laranja fundido, uso raro | Regra dos sites premiados: duas cores mais um acento, nunca três |
| 2026-08-19 | Paleta refeita sobre o verde #42a940 do logotipo | O logo chegou. O laranja provisório saiu e a marca entrou. Escuros tintados de verde para o site pertencer ao logotipo |
| 2026-08-19 | Duas versões do verde, `brand` e `brand-deep` | O verde do logo reprova em contraste sobre fundo claro (2.57:1). A versão funda resolve sem perder a matiz da marca |
| 2026-08-19 | Pictograma redesenhado em SVG | O arquivo do logo é PNG de 225px com fundo chapado. Não escala e não recolore. O vetor usa `currentColor` e serve de favicon |
| 2026-08-19 | Escuro passou de quase preto para verde fundo `#122a1e` | O Mauricio achou o quase preto severo demais. Testadas quatro variações na tela real. O `#1b4b33` do Lovable foi descartado por quebrar o acento |
| 2026-08-19 | Todo cabeçalho escuro aceita foto | Antes as páginas internas tinham grade permanente, com a mesma aparência do placeholder. Duas linguagens iguais com sentidos diferentes confundem. Agora a grade só significa foto pendente |
| 2026-08-19 | Card de linha de produto ganhou foto | Num catálogo o comprador varre por imagem antes de ler. Card só tipográfico obriga a ler para achar a linha |
| 2026-08-19 | Marcas refeitas a partir da foto da placa | Evidência atual vale mais que catálogo de 2018. Caíram GENEBRE, DRAKO e MONTANA; entraram DEXCO, KLINGER, TUPER e LUPATECH MIPEL |
| 2026-08-19 | Hero da home encolhido para o ticker caber | Pedido do Mauricio. Altura medida no navegador: cabeçalho mais hero mais ticker somavam 905px numa janela de 863 |
| 2026-08-19 | CTA de orçamento ganhou foto de fundo e canais de contato | Era da mesma cor do rodapé logo abaixo, então os dois viravam um bloco escuro só. E a coluna estreita estava vazia |
| 2026-08-19 | Home mostra 6 linhas de produto, catálogo mostra 9 | A grade cheia ocupava 2.660px, 26,5% da home, mais que o dobro da segunda maior seção. Medido: a imagem sozinha era 59% da altura de cada card. Cortar só a quantidade tirava uma fila, cortar só o card afinava as três; as duas juntas levaram a seção para 1.678px, 18,6% |
| 2026-08-19 | Botão do WhatsApp no formato tradicional: círculo verde #25D366 com glifo branco | É a única cor fora da paleta do site, e está aí porque é marca de terceiro. O círculo cheio resolve o que o glifo solto não resolvia: sem fundo o verde dava 1.70:1 sobre o papel e sumia nas seções claras |
| 2026-08-19 | Mapa do Google NÃO entra na home | Testado e revertido. Em "Onde estamos" ele desequilibrava a seção, e reequilibrar exigia abandonar o padrão de rótulo estreito que vale no resto do site. O mapa fica só em contato e empresa |
| 2026-08-19 | Mapa do Google embutido em contato e empresa | Pedido do Mauricio. Vai por coordenada e não por endereço: a busca do Google por "Av. Cairú, 525" centra uma quadra fora e trava um card de carregamento sobre o mapa |
| 2026-08-19 | Política de privacidade passou a declarar o mapa | O iframe é conteúdo de terceiro e o Google grava cookie ao carregar. A política afirmava que não havia rastreamento de terceiro, o que deixou de ser verdade |
| 2026-08-19 | Foto da fachada na empresa passou a ocupar a largura toda | Com a saída da foto do balcão, sozinha num terço da grade ela ficaria encolhida com um vão ao lado, que leria como esquecimento e não como respiro |
| 2026-08-19 | Faixas de tags removidas de todas as páginas | Pedido do Mauricio. Eram redundantes: a tira de dados no pé do hero já traz diâmetro, classes, padrões e entrega |
| 2026-08-19 | Heroes ocupam a tela inteira, com altura calculada por flexbox | Pedido do Mauricio. Constante fixa para trilha e tira de dados erraria, porque a altura delas muda com a largura |
| 2026-08-19 | Verde saiu dos títulos sobre foto | Medido: o verde dá 2.40:1 sobre a foto da home e 3:1 é o mínimo. Manter o verde exigiria um overlay que apaga a imagem |
| 2026-08-19 | Marcas só em /empresa, Processo só em /produtos | As duas seções apareciam idênticas nas duas páginas. Marcas é assunto institucional, Processo é fluxo de compra. A home mantém as duas resumidas, que é o papel dela |
| 2026-08-19 | A foto da placa é a única sem duotone | Testei as duas. Em cor, ao lado de uma foto em preto e branco, destoava como retrato de celular. Em duotone ela lê como documento e entra na mesma família visual |
| 2026-08-19 | Formulário por Resend e por WhatsApp, os dois | Pedido do cliente da SoftCode. O WhatsApp cobre a operação enquanto o domínio não está verificado |
| 2026-08-19 | Nove linhas de produto do site atual | Decisão do Mauricio. Specs provisórias marcadas para revisão até o catálogo SCAI ser digitalizado |
| 2026-08-24 | Grade de marcas passou a 1, 2, 3 e 4 colunas | MICROMAZZA ocupa 172px no tamanho do card, e nome de marca não pode quebrar no meio da palavra. A escada de 2 para 4 colunas cortava o nome em toda tela de celular e de 768 a 1024. Medido em 12 larguras: a folga mínima agora é de 60px |
| 2026-08-19 | Placeholder de marca em CSS, sem foto de banco | Numa reunião lê como ficha técnica, e o cliente vê exatamente qual foto ele ainda deve |

---

## 9. PENDÊNCIAS COM O CLIENTE

| Item | Situação |
|---|---|
| **Vetor do logotipo** | Recebido só o PNG de 225px, sem transparência e com o verde chapado no fundo. Não escala e não dá para recolorir. Pedir ao Eduardo o original em AI, EPS, PDF vetorial ou SVG. Enquanto isso, o pictograma está redesenhado em `src/components/layout/marca-scai.tsx` |
| Fotos de produto, fachada e equipe | Aguardando. `img/fachada.jpg` existe no Wayback de 2018 e serve de emergência |
| Catálogo `SCAI.pdf` | Está no Wayback, é escaneado, precisa de OCR para virar lista real de SKU |
| Portfólio de marcas atual | Dado de 2018, confirmar quais ainda representam |
| **Lã de vidro é uma décima linha?** | ISOVER está na placa atual, então a empresa trabalha com isolamento. Não há linha para isso no site |
| **Juntas e vedação são uma linha?** | KLINGER está na placa atual e não tem linha própria hoje |
| Qual marca atende qual linha | A lista de marcas está confirmada pela placa, a associação por linha é inferência minha |
| Horário de funcionamento | Não confirmado em nenhuma fonte pública |
| Inscrição estadual | Para o rodapé |
| Número de WhatsApp comercial | Usando o fixo por ora |
| ISO 9001 | Não confirmada. **Não afirmar sem checar** |
| Acesso ao domínio | Resolve mas não serve nada. Confirmar titularidade no registro.br |
| **Coordenada exata do mapa** | O pino usa `-30.0055368, -51.1968666`, geocodificado no OpenStreetMap. A busca do Google por "Av. Cairú, 525" cai uma quadra fora, na Av. Brasil, porque o número não está na base deles. O CEP que a geocodificação devolveu é 90230-030 e o da empresa é 90230-031, então é a quadra certa mas pode não ser a porta exata. Confirmar com o Eduardo |
| Ficha no Google Meu Negócio | Se a empresa tiver ficha cadastrada, dá para trocar o embed pelo iframe oficial de "Compartilhar, incorporar um mapa", que traz o nome e a foto do estabelecimento no pino |
| Fornecedor público | CNPJ aparece no Portal da Transparência. Verificar antes de usar como credencial |

Ver também `docs/lista-de-fotos.md`, a lista numerada de fotos para entregar ao cliente.

---

## 10. COMANDOS

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção, precisa terminar sem erro nem warning
npm run lint
npx tsc --noEmit # checagem de tipo isolada
```

Conferir sempre em 360, 768, 1280 e 1920 pixels de largura.
Styleguide vivo em `/styleguide`, marcado como `noindex`.
