// Serve para construir objetos, porém não precisa utilizar a palavra "new" para instanciar.
function criarBotao(texto) {
    function elemento() {
        const elementoButton = document.createElement("button");
        elementoButton.innerText = texto;

        return elementoButton;
    }

    return {texto, elemento};
}

const botaoAzul = criarBotao("Botão Azul");
console.log(botaoAzul);

// Vantagens é poder utilizar de métodos e variáveis privada -- Não tem como fazer isso com "class".
// Existe também a Ice Factory, que é quando um função retorna um objeto congelado, serve para impedir que o objeto seja alterado
function criarPessoa(nome, sobrenome) {
    const nomeCompleto = `${nome} ${sobrenome}`;

    function andar() {
        return `${nomeCompleto}, andou!`;
    }

    const nadar = function () {
        return `${nomeCompleto}, nadou!`;
    }

    return Object.freeze({nome, sobrenome, andar, nadar});
}

const paulo = criarPessoa("Paulo", "Souza");
paulo.nome = "Pedro";
console.log(paulo);

// Existe uma outra forma de utilizar a função construtora sem precisar declarar a instância do objeto com "new"
function Carro(marca) {
    // Condição alternativa ES6 -- (!new.target)
    if (!(this instanceof Carro)) {
        return new Carro(marca);
    }

    this.marca = marca;
}

const carroGol = Carro("Gol");
const carroFusca = new Carro("Fusca");

console.log(carroGol, carroFusca);

function $$(elementosSelecionados) {
    const elementos = document.querySelectorAll(elementosSelecionados);

    function esconder() {
        elementos.forEach((elemento) => {
            elemento.style.display = "none";
        });

        return this;
    }

    function mostrar() {
        elementos.forEach((elemento) => {
            elemento.style.display = "initial";
        });

        return this;
    }

    function on(onEvento, callback) {
        elementos.forEach((elemento) => {
            elemento.addEventListener(onEvento, callback);
        });

        return this;
    }

    function addClasse(nomeClasse) {
        elementos.forEach((elemento) =>{
            elemento.classList.add(nomeClasse);
        });

        return this;
    }

    function removerClasse(nomeClasse) {
        elementos.forEach((elemento) =>{
            elemento.classList.remove(nomeClasse);
        });

        return this;
    }

    return {elementos, esconder, mostrar, on, addClasse, removerClasse};
}

const btn = $$("button");
btn.esconder();

btn.on("click", (evento) => {
    evento.preventDefault();
    btn.addClasse("clicado");

    console.log(evento.target.innerText);
});