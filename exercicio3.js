// Exercicio 3

const prompt = require('prompt-sync')();

let nota = prompt("Digite sua nota:")

if (nota > 6){
    console.log("Você esta aprovado")
} else if (nota <= 6){
    console.log("Você esta de recuperação")
}