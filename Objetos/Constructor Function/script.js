// Desta forma as variáveis "honda" e "fiat" apontam para a variável "carro", ou seja, toda  atribuição de valores na vdd está atualizando os valores da variável "carro". As três variáveis tem o mesmo valor.
// const carro = {marca: "Marca", preco: 0};

// const honda = carro;
// honda.marca = "Honda";
// honda.preco = 2000;

// const fiat = carro;
// fiat.marca = "Fiat";
// fiat.preco = 3000;

// Construtor
// function Carro(marca, preco) {
//     this.marca = marca;
//     this.preco = preco;
// }

// Instância do objeto
// const honda = new Carro("Honda", 2000);
// const fiat = new Carro("Fiat", 3000);

// Dentro do construtor pode ter variáveis que não sejam atributos
// function Carro2(marca, preco) {
//     const taxa = 1.2;
//     const precoFinal = preco * taxa;

//     this.marca = marca;
//     this.preco = precoFinal;
// }

// const honda2 = new Carro2("Honda", 2000);

// function Dom(seletor) {
//     this.elemento = function() {
//         return document.querySelector(seletor);
//     }

//     this.ativar = function () {
//         document.querySelector(seletor).classList.add("ativo");
//     }
// }

// const li = new Dom("li");
// const ul = new Dom("ul");

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.andar = function () {
        console.log(`${this.nome} andou!`);
    }
}

const pessoas = [new Pessoa("João", 20), new Pessoa("Maria", 25), new Pessoa("Bruno", 15)];

pessoas.forEach((pessoa) => console.log(`${pessoa.nome}, ${pessoa.idade} anos`));

function Dom(seletor) {
    this.elementos = document.querySelectorAll(seletor);

    this.adicionarClasse = function (classe) {
        this.elementos.forEach((elemento) => elemento.classList.add(classe));
    }

    this.removerClasse = function (classe) {
        this.elementos.forEach((elemento) => elemento.classList.remove(classe));
    }
}

const lis = new Dom("li");