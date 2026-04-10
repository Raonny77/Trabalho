# PokeExplorer 🔴

## Link Vercel https://trabalho-chi-khaki.vercel.app/


Catálogo interativo de Pokémon desenvolvido com **Next.js 14 (App Router)**, consumindo a [PokéAPI](https://pokeapi.co).

## Funcionalidades

- Listagem de 20 Pokémon com nome e imagem
- Página de detalhes por Pokémon (nome, imagem, tipos, peso, altura, habilidades)
- Navegação com `Link` do Next.js
- Página estática `/sobre` com informações do aluno

## Tecnologias

- Next.js 14 (App Router)
- React 18
- CSS Modules
- PokéAPI (pública e gratuita)

## Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/pokeexplorer.git
cd pokeexplorer

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## Estrutura de pastas

```
pokeexplorer/
├── app/
│   ├── page.jsx              ← Listagem principal
│   ├── layout.jsx            ← Layout raiz (Header + Footer)
│   ├── globals.css
│   ├── sobre/
│   │   └── page.jsx          ← Rota /sobre
│   └── pokemon/
│       └── [name]/
│           └── page.jsx      ← Rota dinâmica /pokemon/:name
├── components/
│   ├── PokemonCard.jsx
│   ├── Header.jsx
│   └── Footer.jsx
└── README.md
```

## Deploy

Projeto disponível em: [https://pokeexplorer.vercel.app](https://pokeexplorer.vercel.app) *(atualizar com link real após deploy)*

---

Desenvolvido por **Raonny** — ADS 3º Período
