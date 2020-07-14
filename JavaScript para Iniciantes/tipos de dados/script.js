// Tipo String
let string1 = "Isto é uma string";
let string2 = "18";
let number1 = 18;

let nome = "Paulo Henrique";
let sobrenome = "Silva Souza";
let nomeCompleto = `${nome} ${sobrenome}`;

let string3 = "it's time";

console.log(typeof nome);

// Tipo Number
let idade = 23;
let decimal = 3.14;
let limite = 2000000000000000000000;
// Número após o e define o número de zeros depois do número, se o número for negativo ele adiciona zeros e casas decimais antes do número
let exponencial = 2e2;

console.log(idade, decimal, limite, exponencial);

// Operadores
let soma = 100 + 50;
let subtracao = 100 - 50;
let multiplicacao = 100 * 2;
let divisao = 100 / 2;
let potencia = 2 ** 4;
let modulo = 14 % 5; // retorna o resto da divisão

// IsNaN confere se ele o parâmetro passado não é um numero, se for retorna false, se não for retorna true
console.log(isNaN("Paulo"), isNaN(10));

// Operadores unários
let incremento = 5;
// o incremento acontece depois de usar o valor da variável
console.log(incremento++); // mostra 5
console.log(incremento); // mostra 6
// o incremento acontece antes de usar o valor da variável
console.log(++incremento); // mostra 7
// Adicionar apenas um sinal antes de uma variável que não é do tipo number ele tenta converter o valor para number
console.log(typeof +idade);

// Tipo boolean
let vivo = true;
let morto = false;