let pessoa = {
    nome: "Paulo Henrique",
    sobrenome: "Silva Souza",
    idade: 18,
    seApresentar() {
        console.log(`Olá, sou ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos.`);
    },
    fazerAniversario() { 
        this.idade++;
    }
};

pessoa.seApresentar();

let quadrado = {
    lados: 4,
    area(lado) {
        return lado ** 2
    },
    perimetro(lado) {
        return this.lados * lado
    }
};

console.log(quadrado.area(2));
console.log(quadrado.perimetro(2));

let carro = {
    preco: 1000,
    portas: 4,
    marca: "Audi"
}

carro.preco = 3000;
console.log(carro.preco);

let cachorro = {
    raca: "labradro",
    cor: "preto",
    idade: 10,
    viuHomem (valor) {
        return (valor) ? "Au, au, au, au" : "Não fez nada!";
    }
}

console.log(cachorro.viuHomem(true));