// 3 - Escreva um programa que informe
// a categoria de um jogador de futebol, considerando sua idade:
// infantil (até 13 anos),
// juvenil (até 17 anos) ou
// sênior (acima de 17 anos).

// entrada
const idadeJogador = 12;

// processamento
let categoria = "";

if (idadeJogador <= 13) {
    categoria = "Fraldinha";
} else if (idadeJogador <= 17) {
    categoria = "Juvenil";
} else {
    categoria = "Bolero";
} 

// saída
console.log("Categoria indicada:", categoria);