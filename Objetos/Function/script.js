// Construtor de Function

const calcularQuadrado = new Function("lado", "return lado * lado");
console.log(calcularQuadrado(4));

// Retorna o total de parâmetros da função
console.log(calcularQuadrado.length);
// Retorna o nome da função
console.log(calcularQuadrado.name);

// Executa a função, primeiro valor é referência ao this, os outros são os parâmetros da função que está sendo chamada
function darOi(){
    console.log("Oi pra você");
}

darOi.call(null);

function descreverCarro(velocidade) {
    console.log(`${this.marca} | ${this.ano} | ${velocidade}`);
}

descreverCarro.call({marca: "Honda", ano: 2020}, 20);

function Dom(seletor) {
    this.elemento = document.querySelector(seletor);
}

Dom.prototype.ativar = function (classe) {
    this.elemento.classList.add(classe);
}

const ul = new Dom("ul");
console.log(ul);

// funciona como o call() porém os parâmetros são passados em forma de lista
const numeros = [4, 5, 6, 7, 8, 9, 10, 28, 19];
console.log(Math.max.apply(null, numeros));
// console.log(Math.max.call(null, 4, 5, 6, 7, 8, 9, 10, 28, 19));

// Em vez de executar a função, ela retorna uma nova função, com o um novo contexto de this, isso é bom para quando quiser reutilizar uma função, não precisa passar os argumentos da função, você pode deixar eles para quando for utilizar a função com o novo contexto
const $ = document.querySelectorAll.bind(document);
console.log($("li"));

const carro = {
    marca: "Ford",
    ano: 2018,
    acelerar: function(acelerecao, tempo) {
        return `${this.marca} acelerou ${acelerecao} em ${tempo}`;
    }
}

const honda = {
    marca: "Honda"
}

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(200, 12));

// Exercícios
console.log("-------- Exercícios ---------");

const paragrafos = $("p");

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (soma, itemAtual) => { return soma + itemAtual.innerText.length}, 0);
console.log(totalCaracteres);

function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;

    return elemento;
}

console.log(criarElemento("div", "ativo", "Oi"));

const criarH1 = criarElemento.bind(null, "h1", "titulo");