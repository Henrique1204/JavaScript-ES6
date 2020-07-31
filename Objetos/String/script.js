const comida = "Pizza";
const liquido = new String("água");
const ano = new String(2018);

// Concatenação
console.log(comida.concat(liquido, ano));
console.log(comida);

// Checar se a palavra existe dentro da string, o primeiro parâmetro é o que você quer procurar dentro da string e o segundo parâmetro opcional é de onde você quer começar a procurar
const frase = "Oi, tô aqui faz duas horas";

console.log( ( frase.includes("aqui") ) ? "Tem" : "Não tem" );

// Para saber se a string termina com o conjunto de caracteres ou se começa.
console.log( (comida.endsWith("nana") ? "Banana" : "Não é banana") );
console.log( (ano.startsWith("20") ? "Ano 2000" : "Passado") );

// Buscar dados de uma posição até outra
console.log(frase.slice(4, 9)); // Retorna os caracteres da posição 4 até a posição 9
console.log(frase.slice(4, -9)); // Retorna os caracteres apartir da posição 4 e corta os últimos 9 caracteres 
console.log(frase.slice(4)); // Retorna os caracteres apartir da posição 4
console.log(frase.slice(-4)); // Retorna os últimos 4 caracteres

// Retorna o índice de onde o caractere está na string
console.log(comida.indexOf("z")); // Retorna a posição do primeiro caractere que for encontrado
console.log(comida.lastIndexOf("z")); // Retorna a posição do último caractere que for encontrado
console.log(comida.indexOf("za")); // Retorna a posição do primeiro caractere passado no parâmetro

// Irá tentar deixa a string com o tamnho igual ao primeiro parâmetro, e preenche o começou o fim da string com o segundo parâmetro, o primeiro parâmetro é a quantidade de caracteres que deverão ser passados, o segundo é o que será usado como caractere, caso não seja passado ele adiciona espaço por padrão
console.log(comida.padStart(10, "K"));
console.log(comida.padEnd(10, "K"));

// Repete
console.log(comida.repeat(5));

// Troca os valores
console.log(frase.replace("tô aqui", "não tô aqui"));

// Separa a frase em strings e retorna uma lista com os conjuntos separados
const palavras = frase.split(" ");

console.log(palavras);

// Exercícios
const transacoes = [
{descricao: "Taxa do Pão", valor: "R$ 39"},
{descricao: "Taxa do Mercado", valor: "R$ 129"},
{descricao: "Recebimento do cliente", valor: "R$ 99"},
{descricao: "Taxa do Banco", valor: "R$ 129"},
{descricao: "Recebimento do cliente", valor: "R$ 49"}];

let taxa = 0;
let recebimento = 0;
transacoes.forEach((item) => {
    let valor = item.valor.replace("R$", "");

    if(item.descricao.includes("Taxa")) {
        taxa += +valor;
    } else {
        recebimento += +valor;
    }
});
console.log(taxa, recebimento);

const transporte = "Carro;Avião;Trem;Ônibus;Bicicleta";
const listaTransporte = transporte.split(";");
console.log(listaTransporte);

let html = "<ul><li><span>Sobre</span></li><li><span>Produtos</span></li><li><span>Contato</span></li></ul>";
html = html.split("span").join("a");
console.log(html);

const fraseExercicio = "melhor do ano!";
console.log(fraseExercicio.slice(-1));

const transacoes2 = ["Taxa Banco", "TAXA DO PÃO", " taxa do mercado", "depósito do banco", "TARIFA especial"];
let numeroTaxas = 0;

transacoes2.forEach((item) => {
    if(item.toLowerCase().includes("taxa")) {
        numeroTaxas++;
    }
});

console.log(numeroTaxas);