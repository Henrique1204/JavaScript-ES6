// Formas de se criar um objeto
// const pessoa = new Object({nome: "André", idade: 28});

// const carro = {
//     rodas: 2,
//     iniciar: function(valor) {
//         this.marca = valor;
//         return this;
//     },
//     acelerar: function() {
//         return `${this.marca} acelerou`;
//     },
//     buzinar: function() {
//         return `${this.marca} buzinou!`;
//     }
// }

// Pega o prototype de um objeto e adicionar em outro
// const honda = Object.create(carro).iniciar("Honda");
// const ferrari = Object.create(carro).iniciar("Ferrari");

// Primeiro parâmetro recebe um alvo, os próximos parâmetros recebem um objeto e adiciona esses objetos ao alvo e retorna um novo objeto
const funcaoAutomovel = {
    acelerar: function() {
        return "Acelerou!";
    },
    buzinar: function() {
        return "Buzinou!";
    }
}

const moto = {
    rodas: 2,
    capacete: true
}

const carro = {
    rodas: 4,
    mala: true
}

console.log(Object.assign(moto, funcaoAutomovel));
Object.assign(carro, funcaoAutomovel);
console.log(carro);

// Adiciona propriedades ao objeto alvo, pode ser usado para alterar configurações de propriedades já existentes
// configurable -- Se a variável pode ser configurada, impede ela de ser deletada, caso não tenha o writable tbm impede de sobrescrever o valor.
// writable -- Se a variável pode ser sobrescrita.
Object.defineProperties(moto, {
        cor: {
            value: "Vermelha",
            configurable: false,
            writable: false
        },
        quilometragem: {
            get: function() {
                return this._quilometragem;
            },
            set: function(valor) {
                this._quilometragem = valor;
            }
        }
});

// Retorna a descrição de uma propriedade que existe dentro do objeto, não pega as propriedades do prototype
console.log(Object.getOwnPropertyDescriptor(Array, "length"));

// Retorna a descrição de todas as propriedades que existe dentro do objeto, não pega as propriedades do prototype
console.log(Object.getOwnPropertyDescriptors(moto));

// Retorna todos os nomes das propriedades que existe dentro do objeto, não pega as propriedades do prototype
console.log(Object.getOwnPropertyNames(Array));

// Retorna o prototype do objeto passado
console.log(Object.getPrototypeOf(Array));

// Retorna as chaves do objeto -- É preciso ser um valor enumerable
console.log(Object.keys(moto));

// Retorna os valores das propriedades do objeto -- É preciso ser um valor enumerable
console.log(Object.values(moto));

// Retorna um array contendo chaves e valores das propriedades do objeto -- É preciso ser um valor enumerable
console.log(Object.entries(moto));

// Serve para comparar dois objetos e ver se são iguais, caso seja retorna true
const frutas1 = ["Banana", "Pêra"];
const frutas2 = ["Banana", "Pêra"];
const frutas3 = frutas1;

console.log(Object.is(frutas1, frutas2)); // false
console.log(Object.is(frutas1, frutas3)); // true

// Impede que os valores sejam alterados
Object.freeze(moto);
moto.rodas = 6;
console.log(moto);

// Impede que seja adicionado ou removido propriedades dos objetos
Object.seal(moto);
delete moto.rodas;
moto.passageiros = 1;
console.log(moto);

// Impede que seja adicionados novas propriedades ao objeto
Object.preventExtensions(carro);
carro.passageiros = 2;
delete carro.rodas;
console.log(carro);


// Verifica se o objeto está sobre efeito do "freeze", "seal" ou "preventExtensions"
console.log(Object.isFrozen(moto));
console.log(Object.isSealed(moto));
console.log(Object.isExtensible(carro));

// Métodos direto do prototype
// Retorna o construtor do objeto
console.log(frutas1.constructor);

// Verifica se existe a propriedade dentro do objeto -- Não acessa as propriedades do prototype
console.log(frutas1.hasOwnProperty("map"));

// verifica se a propriedade é enumerable -- Não acessa as propriedades do prototype
console.log(frutas1.propertyIsEnumerable("length"));

// Verifica se o tipo do prototype do objeto é igual ao valor passado
console.log(Array.prototype.isPrototypeOf("dede")); // false
console.log(Array.prototype.isPrototypeOf([])); // true

// Retorna a string com os valores do objeto -- Pode ser visto o tipo do objeto tbm
console.log(frutas2.toString());
console.log(Object.prototype.toString.call(frutas1));

// Exercícios
console.log("-------- Exercícios --------");

function verificarTipo(objeto) {
    console.log(Object.prototype.toString.call(objeto));
}

const quadrado = Object.defineProperties({}, {lados: {value: 4, configurable: false}});
quadrado.lados = 10;
console.log(quadrado);

const configuracao = {width: 800, heigth: 600, background: "#333"};
Object.freeze(configuracao);

console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));