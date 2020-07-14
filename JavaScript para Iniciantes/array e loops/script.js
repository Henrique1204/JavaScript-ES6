let videoGames = ["Switch", "PS4", "X-Box"];

// Remove o primeiro elemento do Array e retorna o valor dele
let primeiro = videoGames.shift();

console.log(videoGames);
console.log(primeiro);

// Remove o último elemento do Array e retorna o valor dele
let ultimo = videoGames.pop();

console.log(videoGames);
console.log(ultimo);

// Adiciona um ou mais elementos no começo do Array e retorna a quantidade de dados nele
let quantidade = videoGames.unshift("PS3", "PS2", "PS1");

console.log(videoGames);
console.log(quantidade);

// Adiciona um elemento ao final do Array
videoGames.push("3DS");

console.log(videoGames);

// Retorna a quantidade de dados no Array
console.log(videoGames.length);

// Loops
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let numero = 1;
// while (numero <= 10) {
//     console.log(numero);
//     numero += 5;
// }

// for (let i = 0; i < videoGames.length; i++) {
//     console.log(`Laço for ${videoGames[i]}`);
// }

// Pode receber mais dois parâmetros adicionais, o segundo irá receber o valor do index e o terceiro o próprio array no qual foi chamado a função
// videoGames.forEach(function (item) {
//     console.log(`Laço foreach ${item}`);
// });

// Exercícios
let titulosBrasil = [1959, 1962, 1970, 1994, 2002];

titulosBrasil.forEach((item) => {
    console.log(`O Brasil ganhou a copa de ${item}`);
});

let frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta: ${frutas[i]}`);

    if (frutas[i] == "Pera") break;
}

let ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);