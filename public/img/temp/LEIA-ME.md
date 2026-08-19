# Fotos temporárias

**Nenhuma destas imagens é da Scai do Sul.** São fotos do banco livre
[Pexels](https://www.pexels.com), colocadas aqui só para o cliente ver como o site
fica com imagem de verdade no lugar dos placeholders.

A licença do Pexels permite uso comercial sem atribuição, então não há risco jurídico
em deixá-las durante a aprovação. Mas **todas devem sair antes da publicação**: um
site institucional de uma empresa de 51 anos ilustrado com banco de imagem é
exatamente o tipo de coisa que faz o visitante desconfiar.

## Como trocar

Cada arquivo tem o mesmo nome da função que exerce. Basta substituir o arquivo
mantendo o nome, ou apagar a pasta inteira e limpar as referências:

- `src/content/produtos.ts`, campo `foto` de cada linha
- `src/components/sections/hero.tsx`, valor padrão de `src`
- `src`, nas chamadas de `FaixaHero` e `Figure` das páginas

Sem `src`, os componentes voltam sozinhos para o placeholder de grade, que nomeia a
foto que falta. Nada quebra.

## O que cada uma representa

| Arquivo | Onde entra | Foto real que substitui |
|---|---|---|
| `faixa-estoque.jpg` | Hero da home, topo do 404 | Item 02 da lista |
| `faixa-fachada.jpg` | Sem uso: substituída pela foto real `scai-sul-local2.jpg` | Item 01, entregue |
| `faixa-balcao.jpg` | Figura "Pronta entrega" na home | Item 02 |
| `faixa-prateleira.jpg` | Topo da página de produtos | Item 04 |
| `faixa-tubulacao.jpg` | Topo da página de setores | Item 05 |
| `produto-saneamento.jpg` | Linha 01 | Item 07 |
| `produto-bronze.jpg` | Linha 02 | Item 08 |
| `produto-borboleta.jpg` | Linha 03 | Item 09 |
| `produto-esfera.jpg` | Linha 04 | Item 10 |
| `produto-conexoes.jpg` | Linha 05 | Item 11 |
| `produto-flanges.jpg` | Linha 06 | Item 12 |
| `produto-alta-pressao.jpg` | Linha 07 | Item 13 |
| `produto-manometros.jpg` | Linha 08 | Item 14 |
| `produto-incendio.jpg` | Linha 09 | Item 15 |
| `apoio-atendimento.jpg` | Topo da página de contato e figura na empresa | Item 03 |
| `apoio-valvulas-azuis.jpg` | Fundo da chamada de orçamento | Item 16 |
| `apoio-manifold.jpg` | Figura na página de setores | Item 20 |

## Ressalvas técnicas, para não passar batido

Três não batem exatamente com o rótulo. Vale saber antes de mostrar ao cliente, porque
quem trabalha com válvula percebe na hora:

1. **`produto-borboleta.jpg` não é uma válvula borboleta.** É uma válvula de volante.
   Não existe foto de borboleta no acervo livre. É a que mais destoa do conjunto.
2. **`produto-bronze.jpg` é uma conexão de latão, não uma válvula.** A peça está
   certa em material, errada em tipo.
3. **`produto-conexoes.jpg` mostra conexões de cobre**, não de ferro fundido maleável.
   A forma é parecida, o material não.

As outras catorze representam bem o que dizem representar.

Todas passam pelo tratamento `duotone` do projeto (preto e branco com contraste
puxado), que é justamente o que faz fotos de origens diferentes parecerem um ensaio
só. É o mesmo tratamento que vai unificar as fotos reais quando chegarem.
