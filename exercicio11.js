// Exercicio 11

const prompt = require('prompt-sync')();

let soma = 0;
for (let i = 0; i < 5; i++) {
  soma += parseFloat(prompt(`Digite o ${i+1}º número: `));
}
console.log("Soma total:", soma);