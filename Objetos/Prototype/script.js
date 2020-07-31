// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
// }

// const paulo = new Pessoa("Paulo", 18);

// Prototype pode ser acessado pelo construtor
// console.log(Pessoa.prototype);
// console.log(paulo.prototype);

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.mostrarNomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
}

const paulo = new Pessoa("Paulo Henrique", "Silva Souza", 18);
console.log(paulo.mostrarNomeCompleto());

Object.getOwnPropertyNames(NodeList);