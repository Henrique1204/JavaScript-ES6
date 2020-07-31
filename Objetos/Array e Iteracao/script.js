const nomes = ["Paulo", "Henrique", "Silva", "Souza"];

// Percore a lista, recebe como parâmetro uma função de callback, essa função tem que receber um parâmetro que será usado como item atual, ela pode receber mais dois parâmetros, um para representar o índice atual da array e outro pra referênciar a array original.
nomes.forEach( (nome) => console.log(nome));

// Para atuaizar os dados é melhor utilizar o map, recebe uma função de callback igual ao forEach, única diferença é que em vez de retornar o valor "undefined" ele retorna uma nova array com os valores atualizados.
const novosNomes = nomes.map(nome => `Nome: ${nome}`);
console.log(novosNomes);


// O acumulador guarda o último valor retornado, você pode passar um parâmetro após o callback que irá definir um valor inicial para o acumulador, caso esse parâmetro não seja passado, ele considera o primeiro item do array como o valor inical do acumulador e começa pelo segundo valor.
const numeros = [20, 10, 90, 3, 5];
const somaNumeros = numeros.reduce((acumulador, valorAtual) => {return acumulador + valorAtual}, 10);

console.log(numeros.reduce( (maior, atual) => (maior > atual) ? maior : atual) );

const aulas = [
    {nome: "HTML 1", min: 15},
    {nome: "HTML 2", min: 10},
    {nome: "CSS 1", min: 20},
    {nome: "JS 1", min: 25}
];
const minutosAulas = aulas.map(aula => aula.min).reduce((soma, valorAtual) => soma + valorAtual);

// Verifica se existe pelo menos um elemento dentro da array que corresponde ao requisito, caso tenha retorna true.
console.log(numeros.some(numero => numero > 100));

// Verifica se todas os elementos dentro de um array corresponde ao requisito, caso não tenha ele retorna falso.
console.log(numeros.every(numero => numero > 0));

// Busca dentro da array se existe um elemento que corresponda ao requisito, caso corresponda ele retorna esse elemento, caso tenha mais de um retorna o primeiro que for encontrado.
console.log(numeros.find(numero => numero > 10));

// Retorna o índice ao invés do valor
console.log(numeros.findIndex(numero => numero > 10));

// Retorna uma array com todos os valores que corresponderem ao requisito
console.log(numeros.filter(numero => numero % 2 == 0));
console.log(aulas.filter(aula => aula.min >= 15));

// Exercício
console.log("------------ Exercícios ------------");

const cursos = document.querySelectorAll(".curso");
const listaCursos = Array.from(cursos);
const listaObjetosCursos = listaCursos.map((item) => {
    const titulo = item.querySelector("h1").innerText;
    const descricao = item.querySelector("p").innerText;
    const aulas = item.querySelector(".aulas").innerText;
    const horas = item.querySelector(".horas").innerText;

    return {titulo, descricao, aulas, horas};
});

const numeroExercicio = [3, 44, 333, 23, 122, 322, 33];
console.log(numeroExercicio.filter(numero => numero > 100));

const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
console.log(instrumentos.some(instrumento => instrumento == "Baixo"));

const compras = [
    {item: "Banana", preco: "R$ 4,99"},
    {item: "Ovo", preco: "R$ 2,99"},
    {item: "Carne", preco: "R$ 25,49"},
    {item: "Refrigerantes", preco: "R$ 5,35"},
    {item: "Queijo", preco: "R$ 10,60"}
];

// const totalCompras = compras.map( item => +item.preco.replace("R$ ", "").replace(",",".")).reduce((soma, item) => soma + item);
const totalCompras = compras.reduce((soma, item) => {
    const preco = +item.preco.replace("R$ ", "").replace(",", ".");
    return soma + preco;
}, 0);