
// Exercicio 1

const prompt = require('prompt-sync')();

let imparPar = parseInt (prompt("Digite um número inteiro:"))

if (imparPar % 2 === 0){
    console.log("O número digitado é par")
} else {
    console.log("O número digitado é impar")
}

