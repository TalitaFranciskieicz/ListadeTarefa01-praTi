// Exercicio 15

let a = 0; 
let b = 1; 

const prompt = require('prompt-sync')(); 

console.log("Os 10 primeiros números da sequência de Fibonacci:");
console.log(a); 
console.log(b); 


for (let i = 3; i <= 10; i++) {
    let proximo = a + b; 
    console.log(proximo); 
    a = b;      
    b = proximo; 
}