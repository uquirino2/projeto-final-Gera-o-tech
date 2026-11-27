# Digital Store

Projeto final do módulo de Front-end do programa Geração Tech (Digital College), desenvolvido em React com base na documentação oficial da Digital Store e no protótipo do Figma.

## Tecnologias utilizadas

- React 19
- Vite
- React Router DOM
- CSS puro (variáveis CSS seguindo a paleta do projeto)

## Funcionalidades implementadas

- **Layout compartilhado** com cabeçalho (`Header`) e rodapé (`Footer`) reutilizados em todas as páginas.
- **Página Inicial (`/`)**: carrossel de banners (`Gallery`), seção de coleções em destaque, atalhos por categoria, vitrine de produtos em alta (8 itens) e destaque de oferta especial.
- **Listagem de Produtos (`/products` e `/produtos`)**: busca integrada com query string (`?filter=`), ordenação por menor e maior preço e filtros funcionais por marca, categoria, gênero e estado (`FilterGroup`).
- **Visualização do Produto (`/product/:id`)**: galeria com miniaturas clicáveis (`Gallery` com `showThumbs`), caixa de compra (`BuyBox`) com avaliação, preço promocional, seleção de tamanho e cor (`ProductOptions`) e seção de produtos recomendados.
- **Páginas de navegação complementar**: Categorias (`/categorias`), Meus Pedidos (`/meus-pedidos`), Login (`/login`) e Cadastro (`/cadastro`).

## Estrutura de pastas

```text
src/
├── assets/          # SVGs da logo, ícones e redes sociais
├── components/
│   ├── BuyBox/
│   ├── FilterGroup/
│   ├── Footer/
│   ├── Gallery/
│   ├── Header/
│   ├── Logo/
│   ├── ProductCard/
│   ├── ProductListing/
│   ├── ProductOptions/
│   └── Section/
├── data/            # Catálogo de produtos e opções de filtro
├── pages/
│   ├── AuthPage.jsx
│   ├── CategoriesPage.jsx
│   ├── HomePage.jsx
│   ├── Layout.jsx
│   ├── OrdersPage.jsx
│   ├── ProductListingPage.jsx
│   └── ProductViewPage.jsx
├── utils/
├── App.jsx
└── main.jsx
```

## Como rodar o projeto localmente

Pré-requisitos: Node.js 18 ou superior.

```bash
# 1. Clone o repositório
git clone https://github.com/uquirino2/projeto-final-Gera-o-tech.git

# 2. Acesse a pasta do projeto
cd projeto-final-Gera-o-tech

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Depois disso, abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
```

Os arquivos compilados são gerados na pasta `dist/`. O arquivo `vercel.json` já está configurado com rewrite para `index.html`, evitando erro 404 ao recarregar rotas internas no deploy da Vercel.
