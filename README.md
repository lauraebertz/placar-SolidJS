 Placar interativo com SolidJS

Projeto desenvolvido para o seminário de Desenvolvimento Web 1 do IFRS — Campus Farroupilha, com orientação do professor Rafael Vieira Coelho.

 Integrantes

- Laura Pereira Ebertz
- Arthur de Morais Clavijo

 Sobre o projeto

Este projeto é um placar simples que permite alterar o nome de um time e controlar sua pontuação.
O objetivo é demonstrar como o SolidJS atualiza a interface quando os dados mudam. Ao marcar um ponto, por exemplo, o número é atualizado sem recarregar a página.

 Como usar

Você pode acessar o placar pelo link abaixo: 

https://lauraebertz.github.io/placar-SolidJS/

Com o site aberto:

1. Digite o nome do time no campo indicado.
2. Clique em **Marcar ponto** para adicionar um ponto.
3. Clique em **Corrigir ponto** para retirar um ponto lançado por engano.
4. Clique em **Zerar placar** para reiniciar a pontuação.

A pontuação não fica negativa. Quando está em zero, os botões de corrigir e zerar ficam desativados.
Os dados não são salvos: ao atualizar ou reabrir a página, o nome volta para **IFRS** e a pontuação retorna a **zero**.

 Tecnologias utilizadas

- **SolidJS:** controla os dados e as atualizações da interface.
- **JavaScript e JSX:** definem o comportamento e a estrutura do placar.
- **CSS:** organiza a aparência da página.
- **Vite:** executa o projeto durante o desenvolvimento e prepara os arquivos para publicação.
- **GitHub Pages:** disponibiliza o site na internet.

O projeto utiliza SolidJS 1.x, Vite 6.x e vite-plugin-solid 2.x.
A interface é construída no navegador, uma abordagem chamada **CSR (renderização no cliente)**. Os dados do placar ficam no próprio componente, demonstrando o uso de **estado local**.
A **reatividade de grão fino** do SolidJS permite atualizar as partes da interface que dependem dos dados alterados. O projeto não utiliza SolidStart, banco de dados ou estado global.

 Links


- SITE DIRETO (https://lauraebertz.github.io/placar-SolidJS/)
- CÓDIGO NO REPOSITÓRIO (https://github.com/lauraebertz/placar-SolidJS)
