// Exercicio 7

const prompt = require('prompt-sync')();

let quantidadeDeCompra = Number(prompt("Quantidade de compra: "));

if (quantidadeDeCompra >= 12) {
    let precoFinal = quantidadeDeCompra * 0.25;
    console.log("Preço final: R$ " + precoFinal.toFixed(2));
} else {
    let precoFinal = quantidadeDeCompra * 0.30;
    console.log("Preço final: R$ " + precoFinal.toFixed(2));
}
