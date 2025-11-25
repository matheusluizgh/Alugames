/**
 * Função alterarStatus
 * Recebe o id de um jogo clicado e decide se o jogo será alugado ou devolvido
 * @param {number} id - id do jogo clicado
 */
function alterarStatus(id) {
  const itemDoJogo = document.getElementById(`game-${id}`);
  const imagemDoJogo = itemDoJogo.querySelector(".dashboard__item__img");
  const botaoAluguel = itemDoJogo.querySelector(".dashboard__item__button");
  const nomeDoJogo = itemDoJogo.querySelector(".dashboard__item__name");

  // Verifica se o jogo está alugado
  if (imagemDoJogo.classList.contains("dashboard__item__img--rented")) {
    // Chama a função de devolução
    devolverJogo(imagemDoJogo, botaoAluguel, nomeDoJogo);
  } else {
    // Chama a função a função de aluguel
    alugarJogo(imagemDoJogo, botaoAluguel);
  }
}

/**
 * Função alugarJogo
 * Aluga o jogo: adiciona a classe de alugado, ajusta o botão e atualiza a contagem
 * @param {Element} imagemDoJogo - elemento da imagem do jogo
 * @param {Element} botaoAluguel - botão de alugar/devolver
 */
function alugarJogo(imagemDoJogo, botaoAluguel) {
  imagemDoJogo.classList.add("dashboard__item__img--rented");
  botaoAluguel.classList.add("dashboard__item__button--return");
  botaoAluguel.textContent = "Devolver";

  // Atualiza a contagem de jogos alugados
  imprimirAlugados();
}

/**
 * Função devolverJogo
 * Devolve o jogo: pergunta confirmação, remove a classe de alugado, ajusta o botão e atualiza a contagem
 * @param {Element} imagemDoJogo - elemento da imagem do jogo
 * @param {Element} botaoAluguel - botão de alugar/devolver
 * @param {Element} nomeDoJogo - elemento do nome do jogo
 */
function devolverJogo(imagemDoJogo, botaoAluguel, nomeDoJogo) {
  // Pergunta ao usuário se quer devolver o jogo
  if (!confirmarDevolucao(nomeDoJogo.textContent)) return;

  imagemDoJogo.classList.remove("dashboard__item__img--rented");
  botaoAluguel.classList.remove("dashboard__item__button--return");
  botaoAluguel.textContent = "Alugar";

  // Atualiza a contagem de jogos alugados
  imprimirAlugados();
}

/**
 * Função confirmarDevolucao
 * Mostra um diálogo de confirmação para devolução do jogo
 * @param {string} nomeDoJogo - nome do jogo
 * @returns {boolean} - true se o usuário confirmar, false caso cancele
 */
function confirmarDevolucao(nomeDoJogo) {
  return confirm(`Tem certeza que deseja devolver o jogo ${nomeDoJogo}?`);
}

/**
 * Função imprimirAlugados
 * Conta e exibe no console a quantidade de jogos atualmente alugados
 */
function imprimirAlugados() {
  let alugados = document.querySelectorAll(".dashboard__item__img--rented");
  let quantidade = alugados.length;
  console.log(`Há ${quantidade} jogos alugados.`);
}
