// Exercicio 4

const prompt = require("prompt-sync")();

console.log("Menu Interativo:");
console.log("1. Atendimento inicial");
console.log("2. Escolhendo o percurso");
console.log("3. Finalizando o atendimento");

const opcao = prompt("Escolha uma opção (1, 2 ou 3): ");

switch (opcao) {
  case "1":
    console.log("Olá! Vamos fazer a sua inscrição!");
    break;
  case "2":
    console.log( "Temos a opção de 5km e 10 km, qual você gostaria de se inscrever?"
    );
    break;
  case "3":
    console.log("Obrigada pela sua inscrição, aqui está o seu kit de corrida, boa prova!");
    break;
  default:
    console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
    break;
}