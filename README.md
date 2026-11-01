# Placar interativo com SolidJS

Demonstração do seminário de Desenvolvimento Web 1, IFRS — Campus Farroupilha.
Professor: Rafael Vieira Coelho.

## Integrantes

- Laura Pereira Ebertz
- Arthur de Morais Clavijo

## Objetivo e funcionalidades

Demonstrar estado local, fluxo de dados explícito, eventos e reatividade de grão fino.
É possível alterar o nome do time, adicionar um ponto, corrigir um ponto e zerar a pontuação.
A pontuação não fica negativa. Recarregar a página restaura o nome IFRS e os pontos em zero.

## Tecnologias e requisitos

- SolidJS 1.x, JavaScript e JSX.
- Vite 6.x com vite-plugin-solid 2.x.
- CSS responsivo, sem biblioteca de estilos.
- Node.js 22.12 ou superior e npm, para desenvolvimento.
- Navegador atualizado (Chrome, Edge, Firefox ou Safari).
- Internet para baixar dependências na primeira instalação.

A demonstração utiliza CSR: a interface é construída no navegador.
Não utiliza SolidStart, servidor de aplicação, banco de dados, roteamento ou estado global.

## Como executar

Abra o terminal na pasta que contém o package.json.

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

Abra o endereço informado no terminal.

No PowerShell, caso ocorra bloqueio do npm.ps1, use npm.cmd no lugar de npm.
