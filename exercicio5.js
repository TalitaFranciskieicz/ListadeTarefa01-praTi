// Exercicio 5

const prompt = require("prompt-sync")();
 
let peso = Number(prompt('Peso->').replace(',', '.'))
let altura = Number(prompt('Altura->').replace(',', '.'))
let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log('Baixo peso')
}
else if(imc <= 24.9){
    console.log('Peso normal')
}
else if(imc <= 29.9){
    console.log('Sobrepeso')
}
else{
    console.log('Obesidade')
}
