function calcularPerimetro(tamanho, lados = 4) {
    console.log(arguments);
    return tamanho * lados;
}

console.log(calcularPerimetro(10, 4));
console.log(calcularPerimetro(10));

// Operador Rest
function somar(...numeros) {
    return numeros.reduce((total, item) => {return total + item}, 0);
}

console.log(somar(4, 5, 6, 2, 90, 10, 1));

function sortear(premio, ...ganhadores) {
    ganhadores.forEach((item) => console.log(`${item} ganhou o ${premio}`));
}

sortear("carro", "Paulo", "Henrique", "Silva", "Souza");

// Operador Spread
const frutas = ["Banana", "Uva", "Morango"];
const legumes = ["Cenoura", "Batata"];

const comidas = [...frutas, ...legumes];

console.log(comidas);

const numeros = [1, 2, 3, 4, 5, 6, 7, 10, 18, 19, 22, 89, 1009, 789, 45];
console.log(Math.max(...numeros));

// ------------------------------ Exercícios ------------------------------
function criarBotao(background = "blue", color = "red") {
    const elementoBotao = document.createElement("button");

    elementoBotao.style.background = background;
    elementoBotao.style.color = color;

    return elementoBotao;
}

console.log(criarBotao());
console.log(criarBotao("green", "black"));

const frutas2 = ["Banana", "Uva", "Morango"];
const comidas2 = ["Pizza", "Batata"];

comidas2.push(...frutas2);
console.log(comidas2);