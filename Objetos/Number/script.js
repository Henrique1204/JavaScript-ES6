const numero = 10;

// Verifica se é NaN
console.log(Number.isNaN(numero));
console.log(Number.isNaN("Oi"));
console.log(Number.isNaN(NaN));

// Verificar se é numero inteiro
console.log(Number.isInteger(numero));

// Serve para converter o valor em número decimal
console.log(Number.parseFloat("95.50"));
console.log(Number.parseFloat("R$ 50.90")); // Com caractere no começo não funciona
console.log(Number.parseFloat("100 reais")); // Com caractere após o número funciona

// Serve para converter o valor para inteiro
console.log(Number.parseInt(100.45));

// Arredonda o numero decimal pro numero de casas passado no argumento -- retorna uma string
console.log(Number(2.99).toFixed()); // Redonda o número para inteiro levando em conta o mais próximo
console.log(Number(1000.455).toFixed(2));
console.log(Number(1499.49).toFixed(3));

// Converte o valor para string
console.log(Number(45).toString());

// Converte o valor para string de acordo com o dinheiro local
console.log(Number(48.97).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}));

// Math
console.log(Math.abs(-4)); // Converte para valor positivo
console.log(Math.ceil(4.9)); // Arredonda pra cima
console.log(Math.floor(4.2)); // Arredonda pra baixo
console.log(Math.round(4.5)); // Arredonda pro mais próximo
console.log(Math.max(5, 2, 7, 42, 21, 17)); // Retorna o maior dos valores passados
console.log(Math.min(5, 2, 7, 42, 21, 17)); // Retorna o menor dos valores passados
console.log(Math.floor(Math.random() * 10)); // Retorna um numero aleatório entre 0 e 1
console.log( Math.floor( Math.random() * (72 - 32) ) + 32 ); // Para sempre ter um número entre dois valores


// Exercícios
const aleatorio = Math.floor(Math.random() * (2000 - 1050)) + 1050;
console.log(aleatorio);

const numeros = "4, 5, 20, 8, 9";
console.log(Math.max(...numeros.split(", ")));

const precos = ["R$ 59,99", " R$ 100,222", "R$ 230", "r$ 200"];

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace("R$", "").replace(",", ".").trim();
    preco = +preco.toFixed(2);
    return preco;
}

let totalPreco = 0;
precos.forEach((preco) => totalPreco += limparPreco(preco));
console.log(totalPreco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}));