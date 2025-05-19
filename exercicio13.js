// Exercicio 13

const prompt = require('prompt-sync')(); 

let soma = 0;        
let contador = 0;    
let numero;          


do {
    numero = Number(prompt("Digite um número decimal (0 para encerrar): "));
    
    
    if (numero !== 0) {
        soma += numero;
        contador++;
    }
} while (numero !== 0);

if (contador > 0) {
    let media = soma / contador;
    console.log(`A média dos números é: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número válido foi digitado.");
}