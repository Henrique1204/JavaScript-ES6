import dividir from "./dividir.js";


// Function declaration
// Tem hosting
function somar(a, b) {
    return a + b;
}

// Function Expression
// Não tem hosting
// Não é adicionada ao window
const subtrair = function(a, b) {
    return a - b;
}

const quadrado = a => a * a;

console.log(somar(2, 3));
console.log(subtrair(3, 2));
console.log(quadrado(4));
console.log(dividir(2, 3));

// ------------------------- Exercício -------------------------
const precoNumber = n => +n.replace("R$", "").replace(",",".");
console.log(precoNumber("R$ 99,99"));

// IIFE - serve para isolar do escopo global
(function() {
    var nome = "Paulo";
})();

const ativar = callback => callback();
ativar(() => console.log("oi"));