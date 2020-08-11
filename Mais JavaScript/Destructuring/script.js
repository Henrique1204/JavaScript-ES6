const carro = {
    marca: "Fiat",
    ano: 2020,
    portas: 4
}

const {marca, ano, portas} = carro;

console.log(marca, ano, portas);

const cliente = {
    nome: "Paulo",
    compras: {
        digitais: {
            livros: ["Livro 1", "Livro 2"],
            videos: ["Vídeo JS", "Vídeo HTML"]
        },
        fisicas: {
            cadernos: ["Caderno 1"]
        }
    }
}

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

const {livros, videos} = cliente.compras.digitais;
console.log(livros, videos);

const pessoa = {
    nome: "Paulo",
    idade: 19
}

const {nome: nomePessoa, idade = 13} = pessoa;

console.log(nomePessoa, idade);


const frutas = ["Maçã", "Banana", "Morango"];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];
console.log(primeiraFruta, segundaFruta, terceiraFruta);

const [primeira, segunda, terceira] = frutas;
console.log(primeira, segunda, terceira);

// window.addEventListener("keyup", manipularKeyboard)

// function manipularKeyboard(event) {
//     const {key} = event;

//     console.log(key);
// }

// -------------------- Exercíco --------------------
const btn = document.querySelector("button");
const btnStyle = getComputedStyle(btn);

const {backgroundColor, margin} = btnStyle;
console.log(backgroundColor, margin);

let cursoAtivo = "JavaScript";
let cursoInativo = "HTML";
console.log(cursoAtivo, cursoInativo);

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo, cursoInativo);

const cachorro = {
    nome: "Bob",
    raca: "Labrador",
    cor: "Amarelo"
}

const {cor: bobCor} = cachorro;
console.log(bobCor);